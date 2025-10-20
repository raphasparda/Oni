import { describe, expect, it } from "vitest"

import { detectTopic as detectKitsuneTopic } from "@/lib/kitsune-conversation"
import { detectTopic as detectBakenekoTopic } from "@/lib/bakeneko-conversation"
import { normalizeText } from "@/lib/utils"
import { requestsDarkStory, requestsLightStory } from "@/app/api/chat/story-utils"

describe("kitsune detectTopic", () => {
  it("recognizes romance related requests", () => {
    expect(detectKitsuneTopic("Gostaria de ouvir uma história de amor intenso")).toBe("amor")
  })

  it("mapeia pedidos de música e esperança para o tema correto", () => {
    expect(detectKitsuneTopic("Cante algo que me traga esperança")).toBe("esperanca")
  })

  it("interpreta pedidos de perdão como confiança", () => {
    expect(detectKitsuneTopic("preciso de uma história de perdão verdadeiro")).toBe("confianca")
  })
})

describe("bakeneko detectTopic", () => {
  it("capta histórias sobre trens como morte", () => {
    expect(detectBakenekoTopic("me fale sobre o trem kisaragi e sua morte")).toBe("morte")
  })

  it("associa marionetes a vingança", () => {
    expect(detectBakenekoTopic("quero ouvir sobre uma marionete vingativa")).toBe("vinganca")
  })

  it("classifica ecos e cavernas como horror", () => {
    expect(detectBakenekoTopic("uma caverna com ecos que assustam")).toBe("horror")
  })
})

describe("story domain helpers", () => {
  it("identifica pedidos leves para redirecionar ao kitsune", () => {
    const message = normalizeText("quero uma história de amor com final feliz")
    expect(requestsLightStory(message, [], "geral")).toBe(true)
    expect(requestsDarkStory(message, [], "geral")).toBe(false)
  })

  it("identifica pedidos sombrios para redirecionar ao bakeneko", () => {
    const message = normalizeText("me conte sobre um hospital amaldiçoado cheio de terror")
    expect(requestsDarkStory(message, [], "geral")).toBe(true)
    expect(requestsLightStory(message, [], "geral")).toBe(false)
  })

  it("usa dica de tópico para entender o domínio", () => {
    const message = normalizeText("quero algo inspirador")
    expect(requestsLightStory(message, ["amor"], "geral")).toBe(true)
    expect(requestsDarkStory(message, ["amor"], "geral")).toBe(false)
  })
})
