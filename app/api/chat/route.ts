import { NextResponse } from "next/server"
import { kitsuneStories } from "@/lib/kitsune-stories"
import { bakenekoStories } from "@/lib/bakeneko-stories"
import {
  kitsuneConversation,
  detectTopic as detectKitsuneTopic,
  generateConversationalResponse as generateKitsuneFallback,
} from "@/lib/kitsune-conversation"
import { bakenekoConversation, detectTopic as detectBakenekoTopic, generateConversationalResponse as generateBakenekoFallback } from "@/lib/bakeneko-conversation"
import { analyzeConversationMessage, type Intent } from "@/lib/conversation-intents"
import { normalizeText } from "@/lib/utils"
import { selectStory, wantsAnotherStory } from "@/lib/story-ranking"
import { getIdentityResponse } from "@/lib/bot-identity"
import { track } from "@vercel/analytics/server"
import { requestsDarkStory, requestsLightStory } from "./story-utils"

type BotKey = "kitsune" | "bakeneko"
type Stage = "initial" | "awaiting_topic" | "awaiting_more"
type StoryEntry = (typeof kitsuneStories)[number]
type ConversationProfile = typeof kitsuneConversation

interface MessageEntry {
  role?: string
  content?: string
}

type AnalyticsPayload = Record<string, string | number | boolean | null>

interface ChatRequestBody {
  message: string
  bot: BotKey
  conversationHistory?: MessageEntry[]
}

interface BotSetup {
  stories: StoryEntry[]
  conversation: ConversationProfile
  detectTopic: (message: string) => string
  fallbackResponse: (message: string, topic: string) => string
}

const BOT_SETUPS: Record<BotKey, BotSetup> = {
  kitsune: {
    stories: kitsuneStories,
    conversation: kitsuneConversation,
    detectTopic: detectKitsuneTopic,
    fallbackResponse: generateKitsuneFallback,
  },
  bakeneko: {
    stories: bakenekoStories,
    conversation: bakenekoConversation,
    detectTopic: detectBakenekoTopic,
    fallbackResponse: generateBakenekoFallback,
  },
}

const BAKENEKO_REDIRECT_MESSAGES = [
  "Isso tem cheiro de luz demais para minhas garras. Peça à Kitsune que acenda esse tipo de história e volte quando quiser arrepios de verdade.",
  "Amor, ternura? Não ronrono por sentimentos assim. Sussurre esse desejo à Kitsune e traga-me perguntas com cheiro de caverna e ferrugem.",
]

const KITSUNE_REDIRECT_MESSAGES = [
  "Seu pedido carrega sangue fresco e passos na escuridão. Procure o Bakeneko para histórias assim; eu prefiro lanternas e cura.",
  "Percebo sombras pesadas nessa curiosidade. Chame o Bakeneko se quiser terror — minhas histórias iluminam, não dilaceram.",
]

const IDENTITY_PATTERNS = [
  "quem e voce",
  "quem eh voce",
  "o que e voce",
  "o que eh voce",
  "voce e um demonio",
  "voce eh um demonio",
  "voce e um monstro",
  "voce eh um monstro",
  "voce e um deus",
  "voce eh um deus",
  "voce e um yokai",
  "voce eh um yokai",
]

function isBotKey(value: unknown): value is BotKey {
  return value === "kitsune" || value === "bakeneko"
}

function randomFrom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

async function recordEvent(name: string, data: AnalyticsPayload = {}) {
  try {
    await track(name, data)
  } catch (error) {
    console.error("[Oni] Analytics error:", error)
  }
}

function composeResponse(...segments: Array<string | undefined>): string {
  return segments
    .filter((segment) => segment && segment.trim().length > 0)
    .join("\n\n")
}

function containsAny(text: string, phrases: string[]): boolean {
  if (!text || phrases.length === 0) {
    return false
  }

  const normalizedText = normalizeText(text)
  return phrases.some((phrase) => normalizedText.includes(normalizeText(phrase)))
}

function determineStage(assistantMessages: MessageEntry[], conversation: ConversationProfile): Stage {
  if (assistantMessages.length === 0) {
    return "initial"
  }

  const lastAssistant = assistantMessages[assistantMessages.length - 1]?.content ?? ""

  if (containsAny(lastAssistant, conversation.askMorePrompts)) {
    return "awaiting_more"
  }

  if (
    containsAny(lastAssistant, conversation.askTopicPrompts) ||
    containsAny(lastAssistant, conversation.moreTopicPrompts)
  ) {
    return "awaiting_topic"
  }

  return "awaiting_topic"
}

function hasIntent(analysis: ReturnType<typeof analyzeConversationMessage>, intent: Intent): boolean {
  return analysis.intents.includes(intent)
}

function buildIntroduction(conversation: ConversationProfile): string {
  return composeResponse(
    randomFrom(conversation.introductionGreetings),
    randomFrom(conversation.introductionPersona),
    randomFrom(conversation.introductionHooks),
    randomFrom(conversation.askTopicPrompts),
  )
}

function buildClarification(conversation: ConversationProfile): string {
  return composeResponse(
    randomFrom(conversation.empathy),
    randomFrom(conversation.clarificationPrompts),
    randomFrom(conversation.askTopicPrompts),
  )
}

function buildAskForTopic(conversation: ConversationProfile): string {
  return composeResponse(randomFrom(conversation.moreTopicPrompts), randomFrom(conversation.askTopicPrompts))
}

function buildFarewell(conversation: ConversationProfile, options?: { grateful?: boolean }): string {
  return composeResponse(
    options?.grateful ? randomFrom(conversation.gratitudeReplies) : undefined,
    randomFrom(conversation.farewell),
  )
}

function buildStoryResponse(conversation: ConversationProfile, story: StoryEntry): string {
  return composeResponse(
    randomFrom(conversation.storyTransitions),
    `Titulo: ${story.title}`,
    story.story,
    story.moral ? `Moral: ${story.moral}` : undefined,
    randomFrom(conversation.storyReflections),
    randomFrom(conversation.askMorePrompts),
  )
}

function collectUsedTitles(assistantMessages: MessageEntry[], stories: StoryEntry[]): Set<string> {
  const used = new Set<string>()

  for (const message of assistantMessages) {
    if (!message?.content) continue

    const normalizedContent = normalizeText(message.content)

    for (const story of stories) {
      const normalizedTitle = normalizeText(story.title)

      if (normalizedContent.includes(normalizedTitle)) {
        used.add(story.title)
      }
    }
  }

  return used
}

function sanitizeAssistantMessages(history: unknown): MessageEntry[] {
  if (!Array.isArray(history)) {
    return []
  }

  return history.filter(
    (entry): entry is MessageEntry => entry?.role === "assistant" && typeof entry.content === "string",
  )
}

function normalizeHints(hints: string[]): string[] {
  return hints.map((hint) => normalizeText(hint)).filter(Boolean)
}

function isIdentityQuestion(normalizedMessage: string): boolean {
  return IDENTITY_PATTERNS.some((pattern) => normalizedMessage.includes(pattern))
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ChatRequestBody>
    const { message, bot, conversationHistory } = body

    if (typeof message !== "string") {
      return NextResponse.json({ response: "Mensagem invalida." }, { status: 400 })
    }

    if (!isBotKey(bot)) {
      return NextResponse.json({ response: "Bot invalido." }, { status: 400 })
    }

    const trimmedMessage = message.trim()
    const setup = BOT_SETUPS[bot]
    const assistantMessages = sanitizeAssistantMessages(conversationHistory)
    const stage = determineStage(assistantMessages, setup.conversation)

    if (!trimmedMessage) {
      if (stage === "initial") {
        const intro = buildIntroduction(setup.conversation)
        const stageLabel = Array.isArray(conversationHistory) && conversationHistory.length > 0 ? "reset" : "initial"
        await recordEvent("bot_intro", { bot, stage: stageLabel })
        return NextResponse.json({ response: intro })
      }

      await recordEvent("topic_prompt", { bot, reason: "empty_message" })
      return NextResponse.json({ response: buildClarification(setup.conversation) })
    }

    const analysis = analyzeConversationMessage(trimmedMessage)
    const normalizedMessage = analysis.normalized
    const topicHints = normalizeHints(analysis.topicHints)
    const detectedTopic = setup.detectTopic(trimmedMessage)
    const usedTitles = collectUsedTitles(assistantMessages, setup.stories)
    const hasFarewellIntent = hasIntent(analysis, "farewell")
    const hasGratitudeIntent = hasIntent(analysis, "gratitude")
    const hasGreetingIntent = hasIntent(analysis, "greeting")
    const hasComplimentIntent = hasIntent(analysis, "compliment")
    const hasStoryRequestIntent = hasIntent(analysis, "story_request")
    const hasFollowUpIntent = hasIntent(analysis, "follow_up")
    const hasHelpIntent = hasIntent(analysis, "help")
    const hasNegationIntent = hasIntent(analysis, "negation")
    const wantsStoryIntent = hasStoryRequestIntent || hasFollowUpIntent

    if (hasFarewellIntent) {
      await recordEvent("farewell", { bot, stage })
      return NextResponse.json({
        response: buildFarewell(setup.conversation, { grateful: hasGratitudeIntent }),
      })
    }

    if (stage === "initial") {
      const intro = buildIntroduction(setup.conversation)
      const stageLabel = Array.isArray(conversationHistory) && conversationHistory.length > 0 ? "return" : "initial"
      await recordEvent("bot_intro", { bot, stage: stageLabel })
      return NextResponse.json({ response: intro })
    }

    if (isIdentityQuestion(normalizedMessage)) {
      const identityResponse = getIdentityResponse(bot)
      await recordEvent("identity_response", { bot })
      return NextResponse.json({ response: identityResponse })
    }

    if (bot === "bakeneko" && requestsLightStory(normalizedMessage, topicHints, detectedTopic)) {
      await recordEvent("bot_redirect", { from: bot, to: "kitsune", detectedTopic })
      return NextResponse.json({ response: randomFrom(BAKENEKO_REDIRECT_MESSAGES) })
    }

    if (bot === "kitsune" && requestsDarkStory(normalizedMessage, topicHints, detectedTopic)) {
      await recordEvent("bot_redirect", { from: bot, to: "bakeneko", detectedTopic })
      return NextResponse.json({
        response: randomFrom(KITSUNE_REDIRECT_MESSAGES),
      })
    }

    if (stage === "awaiting_more") {
      if (hasComplimentIntent && !wantsStoryIntent && !analysis.hasQuestion) {
        await recordEvent("compliment_ack", { bot, stage })
        return NextResponse.json({
          response: composeResponse(
            randomFrom(setup.conversation.gratitudeReplies),
            randomFrom(setup.conversation.askTopicPrompts),
          ),
        })
      }

      if (hasGreetingIntent && !wantsStoryIntent && !analysis.hasQuestion) {
        await recordEvent("topic_prompt", { bot, reason: "greeting_follow_up" })
        return NextResponse.json({
          response: composeResponse(
            randomFrom(setup.conversation.introductionGreetings),
            randomFrom(setup.conversation.askTopicPrompts),
          ),
        })
      }

      if (hasHelpIntent && !analysis.hasQuestion && !wantsStoryIntent) {
        await recordEvent("topic_prompt", { bot, reason: "help_request" })
        return NextResponse.json({
          response: composeResponse(
            randomFrom(setup.conversation.empathy),
            randomFrom(setup.conversation.clarificationPrompts),
            randomFrom(setup.conversation.askTopicPrompts),
          ),
        })
      }

      if (topicHints.length > 0 || wantsStoryIntent) {
        const topic = detectedTopic
        const story = selectStory(setup.stories, analysis, normalizedMessage, topic, usedTitles)

        if (!story) {
          return NextResponse.json({
            response: composeResponse(
              setup.fallbackResponse(trimmedMessage, topic),
              randomFrom(setup.conversation.moreTopicPrompts),
              randomFrom(setup.conversation.askTopicPrompts),
            ),
          })
        }

        const response = buildStoryResponse(setup.conversation, story)
        await recordEvent("story_selected", {
          bot,
          storyId: story.id,
          title: story.title,
          theme: story.theme,
          topic,
        })
        return NextResponse.json({ response })
      }

      const wantsMore = wantsAnotherStory(analysis, normalizedMessage) || hasFollowUpIntent
      const isSatisfied =
        hasNegationIntent ||
        hasFarewellIntent ||
        (hasGratitudeIntent && !wantsMore) ||
        (hasComplimentIntent && !wantsMore && !wantsStoryIntent)

      if (isSatisfied) {
        return NextResponse.json({
          response: buildFarewell(setup.conversation, { grateful: hasGratitudeIntent || hasComplimentIntent }),
        })
      }

      if (wantsMore) {
        await recordEvent("topic_prompt", { bot, reason: "more_request" })
        return NextResponse.json({ response: buildAskForTopic(setup.conversation) })
      }

      await recordEvent("topic_prompt", { bot, reason: "awaiting_more_clarification" })
      return NextResponse.json({
        response: composeResponse(
          randomFrom(setup.conversation.empathy),
          randomFrom(setup.conversation.clarificationPrompts),
          randomFrom(setup.conversation.askTopicPrompts),
        ),
      })
    }

    if (hasGratitudeIntent && !wantsStoryIntent && !analysis.hasQuestion) {
      return NextResponse.json({
        response: composeResponse(
          randomFrom(setup.conversation.gratitudeReplies),
          randomFrom(setup.conversation.askTopicPrompts),
        ),
      })
    }

    if (hasComplimentIntent && !wantsStoryIntent && !analysis.hasQuestion) {
      await recordEvent("compliment_ack", { bot, stage: stage === "initial" ? "initial" : stage })
      return NextResponse.json({
        response: composeResponse(
          randomFrom(setup.conversation.gratitudeReplies),
          randomFrom(setup.conversation.askTopicPrompts),
        ),
      })
    }

    if (hasGreetingIntent && !wantsStoryIntent && !analysis.hasQuestion) {
      return NextResponse.json({
        response: composeResponse(
          randomFrom(setup.conversation.introductionGreetings),
          randomFrom(setup.conversation.introductionHooks),
          randomFrom(setup.conversation.askTopicPrompts),
        ),
      })
    }

    if (hasNegationIntent && !wantsStoryIntent && !analysis.hasQuestion) {
      return NextResponse.json({ response: buildFarewell(setup.conversation) })
    }

    const needsClarification =
      (!wantsStoryIntent && !analysis.hasQuestion && topicHints.length === 0) ||
      hasHelpIntent ||
      hasIntent(analysis, "uncertainty") ||
      hasIntent(analysis, "confusion")

    if (needsClarification) {
      await recordEvent("topic_prompt", { bot, reason: "needs_topic_detail" })
      return NextResponse.json({ response: buildClarification(setup.conversation) })
    }

    const topic = detectedTopic
    const story = selectStory(setup.stories, analysis, normalizedMessage, topic, usedTitles)

    if (!story) {
      return NextResponse.json({
        response: composeResponse(
          setup.fallbackResponse(trimmedMessage, topic),
          randomFrom(setup.conversation.askTopicPrompts),
        ),
      })
    }

    const response = buildStoryResponse(setup.conversation, story)
    await recordEvent("story_selected", {
      bot,
      storyId: story.id,
      title: story.title,
      theme: story.theme,
      topic,
    })
    return NextResponse.json({ response })
  } catch (error) {
    console.error("[Oni] Erro na API:", error)
    return NextResponse.json({ response: "Erro ao processar mensagem. Tente novamente." }, { status: 500 })
  }
}
