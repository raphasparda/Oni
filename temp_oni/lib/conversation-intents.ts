import { getNormalizedWords, normalizeText } from "@/lib/utils"

export type Intent =
  | "greeting"
  | "farewell"
  | "gratitude"
  | "apology"
  | "story_request"
  | "question"
  | "affirmation"
  | "negation"
  | "uncertainty"
  | "help"
  | "compliment"
  | "follow_up"
  | "emotion_share"
  | "confusion"

export type EmotionKey = "sad" | "fear" | "anger" | "joy" | "hope" | "curious" | "anxious"
export type MoodKey = EmotionKey | "positive" | "negative" | "neutral"

export interface MessageAnalysis {
  normalized: string
  tokens: string[]
  intents: Intent[]
  topicHints: string[]
  sentiment: {
    label: "positive" | "negative" | "neutral"
    score: number
  }
  emotions: EmotionKey[]
  primaryEmotion?: MoodKey
  intensity: "low" | "medium" | "high"
  hasQuestion: boolean
}

const STOP_WORDS = new Set([
  "a",
  "o",
  "os",
  "as",
  "um",
  "uma",
  "uns",
  "umas",
  "de",
  "do",
  "da",
  "dos",
  "das",
  "em",
  "no",
  "na",
  "nos",
  "nas",
  "sobre",
  "para",
  "pra",
  "por",
  "com",
  "sem",
  "ao",
  "aos",
  "das",
  "dos",
  "mas",
  "que",
  "se",
  "e",
  "ou",
  "nao",
  "sim",
  "mais",
  "menos",
  "menos",
  "muito",
  "pouco",
  "isso",
  "isto",
  "aquilo",
  "essa",
  "esse",
  "essas",
  "esses",
  "aquele",
  "aquela",
  "aqueles",
  "aquelas",
  "eu",
  "tu",
  "voce",
  "voces",
  "ele",
  "ela",
  "eles",
  "elas",
  "nos",
  "me",
  "te",
  "seu",
  "sua",
  "seus",
  "suas",
  "meu",
  "minha",
  "meus",
  "minhas",
  "dele",
  "dela",
  "deles",
  "delas",
  "pra",
  "pra",
  "la",
  "li",
  "lo",
  "lhe",
  "um",
  "uma",
  "algum",
  "alguma",
  "alguns",
  "algumas",
  "nenhum",
  "nenhuma",
  "ninguem",
  "todo",
  "toda",
  "todos",
  "todas",
  "mais",
  "outra",
  "outro",
  "algo",
  "tudo",
  "bem",
  "bom",
  "boa",
  "vai",
  "vou",
  "vamos",
  "coisa",
  "coisas",
  "tipo",
  "assim",
  "isso",
  "aquilo",
  "alguem",
  "alguem",
  "alguem",
  "pessoa",
  "pessoas",
  "vida",
  "hoje",
  "amanha",
  "ontem",
  "agora",
  "sempre",
  "nunca",
  "tal",
  "tais",
  "mesmo",
  "mesma",
  "mesmos",
  "mesmas",
])

const GREETING_TOKENS = ["oi", "ola", "hey", "salve", "opa", "eai", "alo"]
const GREETING_PHRASES = ["bom dia", "boa tarde", "boa noite", "boa madrugada", "saudacoes"]

const FAREWELL_TOKENS = ["tchau", "adeus", "flw", "falou", "fui"]
const FAREWELL_PHRASES = ["ate logo", "ate breve", "ate mais", "ate a proxima", "nos vemos", "ate outro dia"]

const GRATITUDE_WORDS = ["obrigado", "obrigada", "valeu", "agradeco", "grato", "grata", "muito obrigado", "muito obrigada"]
const APOLOGY_WORDS = ["desculpa", "desculpe", "perdao", "perdoa", "foi mal", "mal ai", "sinto muito"]

const STORY_TOKENS = [
  "historia",
  "historias",
  "conto",
  "contos",
  "lenda",
  "lendas",
  "conta",
  "conte",
  "contar",
  "narra",
  "narre",
  "narrar",
  "fala",
  "fale",
  "falar",
  "mostra",
  "mostre",
  "mostra",
  "mito",
  "mitos",
  "cronica",
]
const STORY_PHRASES = [
  "me conta",
  "me conte",
  "me fala",
  "fale sobre",
  "fala sobre",
  "me fale",
  "me diga",
  "quero ouvir",
  "quero uma historia",
  "outra historia",
  "mais uma historia",
]

const QUESTION_TOKENS = ["como", "quando", "onde", "qual", "quais", "quem", "quanto", "quantos", "porque", "por", "sera"]
const QUESTION_PHRASES = ["por que", "serah", "sera que", "pode me dizer", "pode explicar", "me explica", "sabe me dizer"]

const HELP_TOKENS = ["ajuda", "ajudar", "socorro", "apoiar", "apoio", "orientacao", "conselho", "guiar", "guia"]
const HELP_PHRASES = ["pode me ajudar", "preciso de ajuda", "me ajuda", "me salva", "me orienta", "preciso de apoio"]

const UNCERTAINTY_PHRASES = [
  "nao sei",
  "nao tenho certeza",
  "sei la",
  "talvez",
  "nao sei ao certo",
  "estou em duvida",
  "estou na duvida",
  "estou confuso",
  "estou confusa",
  "dificil decidir",
]

const COMPLIMENT_WORDS = [
  "legal",
  "incrivel",
  "fantastico",
  "fantastica",
  "maravilhoso",
  "maravilhosa",
  "perfeito",
  "perfeita",
  "sensacional",
  "adorei",
  "amei",
  "gostei",
  "top",
  "impressionante",
]

const FOLLOW_UP_PHRASES = [
  "conta mais",
  "conte mais",
  "me conte mais",
  "me fala mais",
  "fale mais",
  "tem mais",
  "mais detalhes",
  "continua",
  "continuar",
  "continuacao",
  "proxima parte",
  "outra vez",
  "outra historia",
  "outra lenda",
]

const POSITIVE_WORDS = [
  "feliz",
  "alegre",
  "animado",
  "animada",
  "calmo",
  "calma",
  "tranquilo",
  "tranquila",
  "esperanca",
  "esperancoso",
  "esperancosa",
  "confiante",
  "grato",
  "grata",
  "agradecido",
  "agradecida",
  "satisfeito",
  "satisfeita",
  "otimo",
  "otima",
  "bom",
  "boa",
  "adoro",
  "gosto",
]

const NEGATIVE_WORDS = [
  "triste",
  "tristeza",
  "deprimido",
  "deprimida",
  "cansado",
  "cansada",
  "cansativo",
  "ruim",
  "horrivel",
  "terrivel",
  "medo",
  "assustado",
  "assustada",
  "apavorado",
  "apavorada",
  "raiva",
  "odio",
  "irritado",
  "irritada",
  "frustrado",
  "frustrada",
  "ansioso",
  "ansiosa",
  "nervoso",
  "nervosa",
  "preocupado",
  "preocupada",
  "perdido",
  "perdida",
  "sofrimento",
  "dor",
]

const EMOTION_DICTIONARY: Record<EmotionKey, string[]> = {
  sad: [
    "triste",
    "tristeza",
    "deprimido",
    "deprimida",
    "abatido",
    "abatida",
    "melancolico",
    "melancolica",
    "chorando",
    "chorei",
    "saudade",
    "solitario",
    "solitaria",
  ],
  fear: [
    "medo",
    "assustado",
    "assustada",
    "apavorado",
    "apavorada",
    "temor",
    "pavor",
    "assombro",
    "arrepio",
    "amedrontado",
    "amedrontada",
  ],
  anger: ["raiva", "odio", "furioso", "furiosa", "irritado", "irritada", "revoltado", "revoltada", "furia", "indignado"],
  joy: ["feliz", "felicidade", "alegre", "animado", "animada", "empolgado", "empolgada", "radiante", "contente"],
  hope: [
    "esperanca",
    "esperancoso",
    "esperancosa",
    "confiante",
    "acredito",
    "acreditar",
    "fe",
    "forca",
    "renovar",
    "renovacao",
  ],
  curious: ["curioso", "curiosa", "interessado", "interessada", "investigar", "descobrir", "curiosidade"],
  anxious: [
    "ansioso",
    "ansiosa",
    "nervoso",
    "nervosa",
    "preocupado",
    "preocupada",
    "tenso",
    "tensa",
    "aflito",
    "aflita",
  ],
}

const EXCLUDED_TOPIC_TOKENS = new Set([
  "historia",
  "historias",
  "conta",
  "contar",
  "conte",
  "fale",
  "fala",
  "sobre",
  "alguma",
  "algum",
  "pode",
  "poderia",
  "gostaria",
  "quero",
  "queria",
  "me",
  "diga",
  "dizer",
  "tema",
  "temas",
  "alguns",
  "algumas",
  "algo",
  "coisa",
  "coisas",
  "pessoas",
])

const GENERIC_TOPIC_HINTS = new Set([
  "tudo",
  "bem",
  "bom",
  "boa",
  "vida",
  "coisa",
  "coisas",
  "algo",
  "alguem",
  "pessoa",
  "pessoas",
  "tempo",
  "vez",
  "vezes",
  "historia",
  "historias",
  "contar",
  "conta",
  "conte",
  "nada",
  "tudo bem",
  "tudo bom",
])

function includesAnyPhrase(text: string, phrases: string[]): boolean {
  return phrases.some((phrase) => text.includes(phrase))
}

function addIntent(intents: Intent[], intent: Intent) {
  if (!intents.includes(intent)) {
    intents.push(intent)
  }
}

function gatherTopicHints(tokens: string[]): string[] {
  const hints = new Set<string>()

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]

    if (
      token === "sobre" ||
      token === "de" ||
      token === "do" ||
      token === "da" ||
      token === "dos" ||
      token === "das" ||
      token === "em" ||
      token === "no" ||
      token === "na" ||
      token === "nos" ||
      token === "nas"
    ) {
      const candidate: string[] = []

      for (let j = i + 1; j < tokens.length; j++) {
        const next = tokens[j]

        if (STOP_WORDS.has(next)) {
          if (candidate.length > 0) {
            break
          }
          continue
        }

        candidate.push(next)

        if (candidate.length >= 3) {
          break
        }
      }

      if (candidate.length > 0) {
        const phrase = candidate.join(" ")
        hints.add(phrase)
        candidate.forEach((item) => hints.add(item))
      }
    }
  }

  return Array.from(hints)
}

export function analyzeConversationMessage(message: string): MessageAnalysis {
  const normalized = normalizeText(message)
  const tokens = getNormalizedWords(message)
  const tokenSet = new Set(tokens)

  const intents: Intent[] = []
  const topicHints = new Set<string>()

  let sentimentScore = 0

  const emotionScores: Record<EmotionKey, number> = {
    sad: 0,
    fear: 0,
    anger: 0,
    joy: 0,
    hope: 0,
    curious: 0,
    anxious: 0,
  }

  for (const token of tokens) {
    if (POSITIVE_WORDS.includes(token)) {
      sentimentScore += 1
    }
    if (NEGATIVE_WORDS.includes(token)) {
      sentimentScore -= 1
    }

    for (const [emotion, words] of Object.entries(EMOTION_DICTIONARY) as Array<[EmotionKey, string[]]>) {
      if (words.includes(token)) {
        emotionScores[emotion] += 1
      }
    }
  }

  if (includesAnyPhrase(normalized, GREETING_PHRASES) || GREETING_TOKENS.some((word) => tokenSet.has(word))) {
    addIntent(intents, "greeting")
  }

  if (includesAnyPhrase(normalized, FAREWELL_PHRASES) || FAREWELL_TOKENS.some((word) => tokenSet.has(word))) {
    addIntent(intents, "farewell")
  }

  if (GRATITUDE_WORDS.some((phrase) => normalized.includes(phrase) || tokenSet.has(phrase))) {
    addIntent(intents, "gratitude")
  }

  if (APOLOGY_WORDS.some((phrase) => normalized.includes(phrase) || tokenSet.has(phrase))) {
    addIntent(intents, "apology")
  }

  if (
    STORY_TOKENS.some((word) => tokenSet.has(word)) ||
    STORY_PHRASES.some((phrase) => normalized.includes(phrase))
  ) {
    addIntent(intents, "story_request")
  }

  if (HELP_TOKENS.some((token) => tokenSet.has(token)) || HELP_PHRASES.some((phrase) => normalized.includes(phrase))) {
    addIntent(intents, "help")
  }

  if (UNCERTAINTY_PHRASES.some((phrase) => normalized.includes(phrase))) {
    addIntent(intents, "uncertainty")
    addIntent(intents, "confusion")
  }

  if (COMPLIMENT_WORDS.some((word) => normalized.includes(word) || tokenSet.has(word))) {
    addIntent(intents, "compliment")
  }

  if (FOLLOW_UP_PHRASES.some((phrase) => normalized.includes(phrase))) {
    addIntent(intents, "follow_up")
    addIntent(intents, "story_request")
  }

  if (tokenSet.has("sim") || tokenSet.has("claro") || tokenSet.has("certo") || normalized.includes("com certeza")) {
    addIntent(intents, "affirmation")
  }

  if (
    tokenSet.has("nao") ||
    tokenSet.has("nunca") ||
    tokenSet.has("jamais") ||
    normalized.includes("prefiro nao") ||
    normalized.includes("negativo")
  ) {
    addIntent(intents, "negation")
  }

  let hasQuestion = false

  if (message.includes("?")) {
    hasQuestion = true
  }

  if (!hasQuestion && QUESTION_TOKENS.some((word) => tokenSet.has(word))) {
    hasQuestion = true
  }

  if (!hasQuestion && QUESTION_PHRASES.some((phrase) => normalized.includes(phrase))) {
    hasQuestion = true
  }

  if (hasQuestion) {
    addIntent(intents, "question")
  }

  if (tokenSet.has("curioso") || tokenSet.has("curiosa") || emotionScores.curious > 0) {
    addIntent(intents, "question")
  }

  const extractedHints = gatherTopicHints(tokens).filter((hint) => hint && hint.length > 1)
  extractedHints.forEach((hint) => topicHints.add(hint))

  for (const token of tokens) {
    if (!STOP_WORDS.has(token) && !EXCLUDED_TOPIC_TOKENS.has(token) && token.length > 3) {
      topicHints.add(token)
    }
  }

  const emotions = (Object.keys(emotionScores) as EmotionKey[]).filter((emotion) => emotionScores[emotion] > 0)

  if (emotions.length > 0) {
    addIntent(intents, "emotion_share")
  }

  const highestEmotionScore = Math.max(0, ...Object.values(emotionScores))
  let primaryEmotion: MoodKey | undefined

  if (highestEmotionScore > 0) {
    primaryEmotion = (Object.keys(emotionScores) as EmotionKey[]).find(
      (emotion) => emotionScores[emotion] === highestEmotionScore,
    )
  }

  const sentimentLabel: "positive" | "negative" | "neutral" =
    sentimentScore > 1 ? "positive" : sentimentScore < -1 ? "negative" : "neutral"

  if (!primaryEmotion) {
    primaryEmotion = sentimentLabel
  } else if (sentimentLabel === "positive" && (primaryEmotion === "sad" || primaryEmotion === "anger")) {
    primaryEmotion = "positive"
  } else if (sentimentLabel === "negative" && (primaryEmotion === "joy" || primaryEmotion === "hope")) {
    primaryEmotion = "negative"
  }

  const intensity =
    Math.max(Math.abs(sentimentScore), highestEmotionScore) > 3
      ? "high"
      : Math.max(Math.abs(sentimentScore), highestEmotionScore) > 1
        ? "medium"
        : "low"

  const filteredTopicHints = Array.from(topicHints).filter((hint) => {
    if (!hint || hint.length <= 3) {
      return false
    }

    if (GENERIC_TOPIC_HINTS.has(hint)) {
      return false
    }

    return true
  })

  return {
    normalized,
    tokens,
    intents,
    topicHints: filteredTopicHints,
    sentiment: {
      label: sentimentLabel,
      score: sentimentScore,
    },
    emotions,
    primaryEmotion,
    intensity,
    hasQuestion,
  }
}
