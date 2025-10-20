import { describe, it, expect, vi, beforeEach, afterAll } from "vitest"

vi.mock("@vercel/analytics/server", () => ({
  track: vi.fn(),
}))

import { POST } from "@/app/api/chat/route"
import { track } from "@vercel/analytics/server"
import { kitsuneConversation } from "@/lib/kitsune-conversation"
import { bakenekoConversation } from "@/lib/bakeneko-conversation"
import { normalizeText } from "@/lib/utils"

// Helpers ---------------------------------------------------------

type HistoryEntry = { role: string; content: string }

function buildRequest(body: unknown): Request {
  return new Request("http://localhost/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
}

async function readJson(response: Response) {
  const data = await response.json()
  return data as { response: string }
}

function assistantHistoryFrom(prompt: string): HistoryEntry[] {
  return [{ role: "assistant", content: prompt }]
}

describe("POST /api/chat", () => {
  const trackMock = vi.mocked(track)
  const randomSpy = vi.spyOn(Math, "random").mockReturnValue(0)

  beforeEach(() => {
    trackMock.mockClear()
  })

  afterAll(() => {
    randomSpy.mockRestore()
  })

  it("rejects non-string messages", async () => {
    const request = buildRequest({ message: 123, bot: "kitsune" })
    const result = await POST(request)
    const payload = await readJson(result)

    expect(result.status).toBe(400)
    expect(payload.response.toLowerCase()).toContain("invalida")
    expect(trackMock).not.toHaveBeenCalled()
  })

  it("rejects invalid bot identifiers", async () => {
    const request = buildRequest({ message: "Ola", bot: "unknown" })
    const result = await POST(request)
    const payload = await readJson(result)

    expect(result.status).toBe(400)
    expect(payload.response.toLowerCase()).toContain("bot invalido")
    expect(trackMock).not.toHaveBeenCalled()
  })

  it("returns introduction and records intro event on empty initial message", async () => {
    const request = buildRequest({ message: "   ", bot: "kitsune" })
    const result = await POST(request)
    const payload = await readJson(result)

    expect(result.status).toBe(200)
    expect(payload.response.length).toBeGreaterThan(0)
    expect(trackMock).toHaveBeenCalledWith("bot_intro", expect.objectContaining({ bot: "kitsune", stage: "initial" }))
  })

  it("answers identity questions with persona response", async () => {
    const history = assistantHistoryFrom(bakenekoConversation.askTopicPrompts[0])
    const request = buildRequest({ message: "O que eh voce?", bot: "bakeneko", conversationHistory: history })
    const result = await POST(request)
    const payload = await readJson(result)

    expect(normalizeText(payload.response)).toContain("bakeneko")
    expect(trackMock).toHaveBeenCalledWith("identity_response", expect.objectContaining({ bot: "bakeneko" }))
  })

  it("returns a story and records selection", async () => {
    const history = assistantHistoryFrom(kitsuneConversation.askTopicPrompts[0])
    const request = buildRequest({ message: "Me conte uma historia de amor", bot: "kitsune", conversationHistory: history })
    const result = await POST(request)
    const payload = await readJson(result)

    expect(normalizeText(payload.response)).toContain("titulo")
    expect(trackMock).toHaveBeenCalledWith(
      "story_selected",
      expect.objectContaining({ bot: "kitsune", storyId: expect.any(String) }),
    )
  })

  it("keeps asking for topic details when still awaiting a theme", async () => {
    const introResult = await POST(buildRequest({ message: "Ola", bot: "kitsune" }))
    const introPayload = await readJson(introResult)

    const conversationHistory = assistantHistoryFrom(introPayload.response)
    trackMock.mockClear()

    const request = buildRequest({
      message: "Estou em duvida",
      bot: "kitsune",
      conversationHistory,
    })

    const result = await POST(request)
    const payload = await readJson(result)

    const normalized = normalizeText(payload.response)
    const options = [
      ...kitsuneConversation.clarificationPrompts.map((prompt) => normalizeText(prompt)),
      ...kitsuneConversation.empathy.map((line) => normalizeText(line)),
      ...kitsuneConversation.askTopicPrompts.map((prompt) => normalizeText(prompt)),
    ]

    expect(normalized).not.toContain("titulo")
    expect(options.some((snippet) => normalized.includes(snippet))).toBe(true)
  })

  it("sends a farewell when the user declines while awaiting a topic", async () => {
    const introResult = await POST(buildRequest({ message: "Ola", bot: "kitsune" }))
    const introPayload = await readJson(introResult)

    const conversationHistory = assistantHistoryFrom(introPayload.response)
    trackMock.mockClear()

    const request = buildRequest({
      message: "Nao quero",
      bot: "kitsune",
      conversationHistory,
    })

    const result = await POST(request)
    const payload = await readJson(result)
    const normalized = normalizeText(payload.response)

    expect(normalized).not.toContain("titulo")
    expect(kitsuneConversation.farewell.map((line) => normalizeText(line)).some((line) => normalized.includes(line))).toBe(true)
    expect(trackMock).not.toHaveBeenCalledWith("story_selected", expect.anything())
  })
})
