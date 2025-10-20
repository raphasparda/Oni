import { describe, it, expect } from "vitest"
import { analyzeConversationMessage } from "@/lib/conversation-intents"

describe("analyzeConversationMessage", () => {
  it("detects greeting intent", () => {
    const result = analyzeConversationMessage("Oi, tudo bem?")
    expect(result.intents).toContain("greeting")
  })

  it("detects uncertainty intent", () => {
    const result = analyzeConversationMessage("Eu não sei o que fazer agora")
    expect(result.intents).toContain("uncertainty")
  })

  it("extracts topic hints", () => {
    const result = analyzeConversationMessage("Quero ouvir uma história sobre amor e esperança")
    expect(result.topicHints.some((hint) => hint.includes("amor"))).toBe(true)
    expect(result.topicHints.some((hint) => hint.includes("esperanca"))).toBe(true)
  })
})
