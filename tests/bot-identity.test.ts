import { describe, it, expect } from "vitest"
import { getIdentityResponse } from "@/lib/bot-identity"

describe("bot identity responses", () => {
  it("returns the kitsune introduction", () => {
    const response = getIdentityResponse("kitsune")
    expect(response).toContain("Sou um espírito milenar")
    expect(response).toContain("mensageiro de Inari")
  })

  it("returns the bakeneko introduction", () => {
    const response = getIdentityResponse("bakeneko")
    expect(response).toContain("Eu sou o Bakeneko")
    expect(response).toContain("Não prometo conforto")
  })
})
