export const LIGHT_THEMES = new Set([
  "amor",
  "esperanca",
  "sabedoria",
  "amizade",
  "familia",
  "prosperidade",
  "natureza",
  "verdade",
  "confianca",
  "sorte",
  "vida",
])

export const DARK_THEMES = new Set([
  "morte",
  "vinganca",
  "horror",
  "fantasma",
  "yokai",
  "maldicao",
  "transformacao",
  "hospital",
])

const LIGHT_KEYWORDS = [
  "amor",
  "romance",
  "carinho",
  "afeto",
  "esperanca",
  "luz",
  "ternura",
  "encanto",
  "bondade",
  "inspiracao",
  "perdao",
  "paz",
  "família",
  "familia",
]

const DARK_KEYWORDS = [
  "morte",
  "matar",
  "horror",
  "terror",
  "vinganca",
  "sombras",
  "assassino",
  "sangue",
  "fantasma",
  "maldicao",
  "maldição",
  "pesadelo",
  "hospital",
  "monstro",
  "massacre",
]

function includesAny(text: string, terms: string[]): boolean {
  return terms.some((term) => text.includes(term))
}

function hintsIncludeAny(hints: string[], terms: string[]): boolean {
  return hints.some((hint) => includesAny(hint, terms))
}

export function requestsLightStory(normalizedMessage: string, topicHints: string[], detectedTopic: string): boolean {
  return (
    LIGHT_THEMES.has(detectedTopic) ||
    includesAny(normalizedMessage, LIGHT_KEYWORDS) ||
    hintsIncludeAny(topicHints, LIGHT_KEYWORDS)
  )
}

export function requestsDarkStory(normalizedMessage: string, topicHints: string[], detectedTopic: string): boolean {
  return (
    DARK_THEMES.has(detectedTopic) ||
    includesAny(normalizedMessage, DARK_KEYWORDS) ||
    hintsIncludeAny(topicHints, DARK_KEYWORDS)
  )
}
