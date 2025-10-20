import { normalizeText } from "@/lib/utils"
import { generateVariants, lexicalEqual, lexicalIncludes } from "@/lib/text-utils"
import type { analyzeConversationMessage } from "@/lib/conversation-intents"
import type { Story } from "@/lib/kitsune-stories"

type AnalysisResult = ReturnType<typeof analyzeConversationMessage>

export interface RankedStory {
  story: Story
  score: number
}

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

export function rankStories(
  stories: Story[],
  analysis: AnalysisResult,
  normalizedMessage: string,
  detectedTopic: string,
): RankedStory[] {
  const normalizedWords = analysis.tokens
  const normalizedTopicHints = analysis.topicHints.map((hint) => normalizeText(hint)).filter(Boolean)
  const tokenMatches = (target: string) => normalizedWords.some((word) => lexicalEqual(word, target))
  const hintMatches = (target: string) => normalizedTopicHints.some((hint) => lexicalEqual(hint, target))
  const tokenIncludes = (target: string) => normalizedWords.some((word) => lexicalIncludes(word, target))
  const hintIncludes = (target: string) => normalizedTopicHints.some((hint) => lexicalIncludes(hint, target))
  const messageIncludes = (target: string) =>
    lexicalIncludes(normalizedMessage, target) || normalizedMessage.includes(target)

  return stories
    .map((story) => {
      const normalizedKeywords = story.keywords.map((keyword) => normalizeText(keyword)).filter(Boolean)
      const normalizedTheme = normalizeText(story.theme)
      const normalizedTitle = normalizeText(story.title)
      const normalizedSummary = story.summary ? normalizeText(story.summary) : ""
      let score = 0

      for (const keyword of normalizedKeywords) {
        if (!keyword) continue

        if (tokenMatches(keyword)) {
          score += 5
        } else if (hintMatches(keyword)) {
          score += 4
        } else if (tokenIncludes(keyword) || hintIncludes(keyword)) {
          score += keyword.includes(" ") ? 3 : 2
        } else if (messageIncludes(keyword)) {
          score += keyword.includes(" ") ? 2 : 1
        }
      }

      if (normalizedTheme) {
        if (tokenMatches(normalizedTheme) || hintMatches(normalizedTheme)) {
          score += 3
        } else if (messageIncludes(normalizedTheme)) {
          score += 2
        }
      }

      if (detectedTopic && normalizedTheme === detectedTopic) {
        score += 3
      }

      if (normalizedTitle && normalizedMessage.includes(normalizedTitle)) {
        score += 6
      }

      if (normalizedSummary) {
        for (const hint of normalizedTopicHints) {
          if (hint && lexicalIncludes(normalizedSummary, hint)) {
            score += hint.includes(" ") ? 3 : 1
          }
        }
      }

      return { story, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
}

export function selectStory(
  stories: Story[],
  analysis: AnalysisResult,
  normalizedMessage: string,
  detectedTopic: string,
  usedTitles: Set<string>,
): Story | undefined {
  const freshStories = stories.filter((story) => !usedTitles.has(story.title))
  const candidatePool = freshStories.length > 0 ? freshStories : stories
  const ranked = rankStories(candidatePool, analysis, normalizedMessage, detectedTopic)

  if (ranked.length > 0) {
    const highestScore = ranked[0].score
    const topMatches = ranked.filter((entry) => entry.score === highestScore).map((entry) => entry.story)
    return pickRandom(topMatches)
  }

  const fallbackPool = freshStories.length > 0 ? freshStories : stories
  return fallbackPool.length > 0 ? pickRandom(fallbackPool) : undefined
}

export function wantsAnotherStory(analysis: AnalysisResult, normalizedMessage: string): boolean {
  return (
    analysis.intents.includes("affirmation") ||
    analysis.intents.includes("follow_up") ||
    analysis.intents.includes("story_request") ||
    normalizedMessage.includes("mais") ||
    normalizedMessage.includes("outro") ||
    normalizedMessage.includes("outra") ||
    normalizedMessage.includes("continue") ||
    normalizedMessage.includes("conta") ||
    normalizedMessage.includes("segue")
  )
}
