import { describe, it, expect } from "vitest"
import { rankStories, selectStory, wantsAnotherStory } from "@/lib/story-ranking"
import { analyzeConversationMessage } from "@/lib/conversation-intents"
import type { Story } from "@/lib/kitsune-stories"

const demoStories: Story[] = [
  {
    id: "love-story",
    theme: "amor",
    title: "A Lenda do Amor",
    summary: "Uma história sobre o poder do amor verdadeiro.",
    moral: "O amor ilumina até as noites mais frias.",
    story: "Era uma vez um amor tão forte que desafiou o tempo e o espaço.",
    keywords: ["amor", "romance", "coração"],
  },
  {
    id: "courage-story",
    theme: "coragem",
    title: "A Raposa Corajosa",
    summary: "Uma história sobre bravura.",
    moral: "Coragem é agir apesar do medo.",
    story: "Uma raposa enfrentou o dragão para salvar sua aldeia.",
    keywords: ["coragem", "heroísmo"],
  },
]

describe("story ranking utilities", () => {
  it("ranks stories with matching keywords higher", () => {
    const message = "Conte uma história de amor que aqueça meu coração."
    const analysis = analyzeConversationMessage(message)
    const ranked = rankStories(demoStories, analysis, analysis.normalized, "amor")
    expect(ranked[0].story.id).toBe("love-story")
  })

  it("selects new stories avoiding previously used titles", () => {
    const message = "Preciso de coragem para seguir em frente."
    const analysis = analyzeConversationMessage(message)
    const usedTitles = new Set<string>(["A Raposa Corajosa"])
    const story = selectStory(demoStories, analysis, analysis.normalized, "coragem", usedTitles)
    expect(story?.id).toBe("love-story")
  })

  it("detects when the user wants another story", () => {
    const message = "Conte mais, por favor!"
    const analysis = analyzeConversationMessage(message)
    expect(wantsAnotherStory(analysis, analysis.normalized)).toBe(true)
  })
})
