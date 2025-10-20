// Motor conversacional autoral para processamento de linguagem natural
// Analisa intenções, sentimentos e contexto para gerar respostas personalizadas

export interface ConversationContext {
  messages: Array<{ role: "user" | "assistant"; content: string }>
  currentTopic?: string
  userMood?: "curious" | "sad" | "happy" | "confused" | "neutral" | "fearful" | "hopeful"
  storyPreference?: string[]
  lastBotAction?: "asked_question" | "offered_story" | "told_story" | "greeted" | "casual"
  waitingForResponse?: boolean
  offeredStoryTitle?: string // Armazena o título da história oferecida
  conversationDepth: number // Rastreia profundidade da conversa
  topicHistory: string[] // Histórico de tópicos discutidos
  emotionalJourney: Array<{ mood: string; timestamp: number }> // Jornada emocional do usuário
}

export interface PersonaProfile {
  name: string
  traits: string[]
  responseStyle: "wise" | "mysterious" | "dark" | "gentle"
  vocabulary: {
    greetings: string[]
    transitions: string[]
    empathy: string[]
    questions: string[]
    farewells: string[]
  }
}

// Análise de intenção do usuário
export function analyzeIntent(
  message: string,
  context?: ConversationContext,
): {
  type:
    | "greeting"
    | "question"
    | "story_request"
    | "emotion"
    | "farewell"
    | "affirmative"
    | "negative"
    | "uncertainty"
    | "casual"
    | "philosophical"
    | "personal_sharing"
  confidence: number
  keywords: string[]
  nuances: string[] // Detecta nuances como sarcasmo, urgência, etc
} {
  const lowerMessage = message.toLowerCase().trim()
  const words = lowerMessage.split(/\s+/)

  // Detecção de nuances
  const nuances: string[] = []
  if (/(!{2,}|\?{2,})/.test(message)) nuances.push("urgente")
  if (/(haha|kkkk|rsrs|lol)/.test(lowerMessage)) nuances.push("humor")
  if (/(realmente|muito|demais|extremamente|super)/.test(lowerMessage)) nuances.push("intenso")
  if (/(talvez|acho|parece|pode ser)/.test(lowerMessage)) nuances.push("hesitante")

  // Padrões expandidos
  const affirmativePattern =
    /^(sim|s|yes|y|quero|gostaria|gostaria sim|pode|pode sim|claro|com certeza|certeza|ok|okay|beleza|dale|bora|vamos|aceito|concordo|uhum|aham|ahan|isso|exato|correto|perfeito|show|massa|top)$/i

  const negativePattern =
    /^(não|nao|n|no|nunca|jamais|de jeito nenhum|nem|nope|nada|negativo|nem pensar|esquece|deixa pra lá|deixa pra la)$/i

  const uncertaintyPattern =
    /(não sei|nao sei|não tenho certeza|nao tenho certeza|talvez|acho que|não faço ideia|nao faco ideia|sei lá|sei la|tanto faz|indeciso|em dúvida|em duvida|confuso|perdido|não entendo|nao entendo|não compreendo|nao compreendo|meio que|mais ou menos)/i

  const philosophicalPattern =
    /(sentido da vida|propósito|proposito|existência|existencia|por que estamos aqui|significado|essência|essencia|verdade|realidade|consciência|consciencia)/i

  const personalSharingPattern =
    /(eu sinto|eu acho|na minha vida|comigo|aconteceu comigo|passei por|estou passando|minha história|minha historia|meu problema|minha situação|minha situacao)/i

  // Prioriza contexto se bot estava esperando resposta
  if (context?.waitingForResponse) {
    if (affirmativePattern.test(lowerMessage)) {
      return { type: "affirmative", confidence: 0.95, keywords: ["sim"], nuances }
    }
    if (negativePattern.test(lowerMessage)) {
      return { type: "negative", confidence: 0.95, keywords: ["não"], nuances }
    }
    if (uncertaintyPattern.test(lowerMessage)) {
      return { type: "uncertainty", confidence: 0.9, keywords: words.filter((w) => w.length > 2), nuances }
    }
  }

  // Padrões de intenção expandidos
  const patterns = {
    greeting:
      /^(oi|olá|ola|hey|e aí|eai|bom dia|boa tarde|boa noite|salve|fala|opa|oie|oii|olar|olha só|tudo bem|como vai|como está|tá bem|td bem|blz|beleza|e ae|opa|opa tudo bem)/i,
    farewell:
      /(tchau|até|adeus|falou|bye|até logo|até mais|flw|valeu|obrigad|obg|vlw|tmj|abraço|beijo|vou indo|tenho que ir|preciso ir|até breve|até a próxima|ate a proxima)/i,
    story_request:
      /(conte|história|historia|fale sobre|me fale|narre|conto|quero ouvir|me conte|conta|pode contar|gostaria de ouvir|quero saber sobre|me diz|me diga|fala sobre|fala de|quero uma história|quero uma historia|tem alguma história|tem alguma historia|conhece alguma|sabe alguma)/i,
    question:
      /(\?|como|por que|porque|pq|o que|oq|qual|quando|onde|quem|será|existe|tem alguma|tem algum|você|vc|voce|pode me|consegue|sabe)/i,
    emotion:
      /(triste|feliz|ansioso|preocupado|medo|alegre|sozinho|perdido|confuso|cansado|esperança|esperanca|desesperado|angustiado|deprimido|animado|empolgado|assustado|aterrorizado|apavorado|tranquilo|sereno|em paz)/i,
  }

  // Verifica padrões filosóficos e compartilhamento pessoal primeiro
  if (philosophicalPattern.test(lowerMessage)) {
    return { type: "philosophical", confidence: 0.9, keywords: words.filter((w) => w.length > 3), nuances }
  }

  if (personalSharingPattern.test(lowerMessage)) {
    return { type: "personal_sharing", confidence: 0.85, keywords: words.filter((w) => w.length > 3), nuances }
  }

  if (uncertaintyPattern.test(lowerMessage)) {
    return { type: "uncertainty", confidence: 0.9, keywords: words.filter((w) => w.length > 2), nuances }
  }

  // Verifica outros padrões
  if (patterns.greeting.test(lowerMessage)) {
    return { type: "greeting", confidence: 0.9, keywords: words.filter((w) => w.length > 2), nuances }
  }

  if (patterns.farewell.test(lowerMessage)) {
    return { type: "farewell", confidence: 0.9, keywords: words.filter((w) => w.length > 2), nuances }
  }

  if (patterns.story_request.test(lowerMessage)) {
    return { type: "story_request", confidence: 0.85, keywords: words.filter((w) => w.length > 3), nuances }
  }

  if (patterns.emotion.test(lowerMessage)) {
    return { type: "emotion", confidence: 0.8, keywords: words.filter((w) => w.length > 3), nuances }
  }

  if (patterns.question.test(lowerMessage)) {
    return { type: "question", confidence: 0.75, keywords: words.filter((w) => w.length > 3), nuances }
  }

  if (affirmativePattern.test(lowerMessage)) {
    return { type: "affirmative", confidence: 0.7, keywords: ["sim"], nuances }
  }

  if (negativePattern.test(lowerMessage)) {
    return { type: "negative", confidence: 0.7, keywords: ["não"], nuances }
  }

  return {
    type: "casual",
    confidence: 0.5,
    keywords: words.filter((w) => w.length > 3),
    nuances,
  }
}

// Análise de sentimento
export function analyzeSentiment(message: string): {
  mood: "positive" | "negative" | "neutral" | "mixed"
  intensity: number
  emotions: string[]
  dominantEmotion?: string
} {
  const lowerMessage = message.toLowerCase()

  const emotionCategories = {
    joy: ["feliz", "alegre", "animado", "empolgado", "radiante", "eufórico", "contente", "satisfeito"],
    hope: ["esperança", "esperanca", "otimista", "confiante", "fé", "fe", "acreditar"],
    love: ["amor", "carinho", "afeto", "paixão", "paixao", "ternura", "amar"],
    peace: ["paz", "tranquilo", "sereno", "calmo", "equilibrado", "harmonioso"],
    sadness: ["triste", "melancólico", "melancolico", "deprimido", "abatido", "desanimado"],
    fear: ["medo", "terror", "pavor", "assustado", "aterrorizado", "receio", "temor"],
    anxiety: ["ansioso", "preocupado", "nervoso", "tenso", "angustiado", "inquieto"],
    loneliness: ["sozinho", "solitário", "solitario", "isolado", "abandonado"],
    confusion: ["confuso", "perdido", "desorientado", "sem rumo", "incerto"],
    anger: ["raiva", "ódio", "odio", "irritado", "furioso", "revoltado"],
  }

  const emotionScores: Record<string, number> = {}
  const detectedEmotions: string[] = []

  for (const [emotion, words] of Object.entries(emotionCategories)) {
    let score = 0
    words.forEach((word) => {
      if (lowerMessage.includes(word)) {
        score++
        detectedEmotions.push(word)
      }
    })
    if (score > 0) {
      emotionScores[emotion] = score
    }
  }

  const positiveEmotions = ["joy", "hope", "love", "peace"]
  const negativeEmotions = ["sadness", "fear", "anxiety", "loneliness", "confusion", "anger"]

  let positiveScore = 0
  let negativeScore = 0

  positiveEmotions.forEach((e) => {
    positiveScore += emotionScores[e] || 0
  })
  negativeEmotions.forEach((e) => {
    negativeScore += emotionScores[e] || 0
  })

  const total = positiveScore + negativeScore
  if (total === 0) {
    return { mood: "neutral", intensity: 0, emotions: [], dominantEmotion: undefined }
  }

  let mood: "positive" | "negative" | "neutral" | "mixed"
  if (positiveScore > 0 && negativeScore > 0) {
    mood = "mixed"
  } else if (positiveScore > negativeScore) {
    mood = "positive"
  } else if (negativeScore > positiveScore) {
    mood = "negative"
  } else {
    mood = "neutral"
  }

  const intensity = Math.min(total / 3, 1)

  // Encontra emoção dominante
  let dominantEmotion: string | undefined
  let maxScore = 0
  for (const [emotion, score] of Object.entries(emotionScores)) {
    if (score > maxScore) {
      maxScore = score
      dominantEmotion = emotion
    }
  }

  return { mood, intensity, emotions: detectedEmotions, dominantEmotion }
}

export function extractTopicsFromStories(
  message: string,
  keywords: string[],
  stories: Array<{ keywords: string[] }>,
): string[] {
  const lowerMessage = message.toLowerCase()
  const allWords = [...lowerMessage.split(/\s+/), ...keywords.map((k) => k.toLowerCase())]

  const matchedTopics = new Set<string>()

  // Busca em todas as histórias por palavras-chave que correspondam
  stories.forEach((story) => {
    story.keywords.forEach((keyword) => {
      const keywordLower = keyword.toLowerCase()
      // Verifica se alguma palavra da mensagem contém ou está contida na keyword
      if (
        allWords.some(
          (word) =>
            word.includes(keywordLower) ||
            keywordLower.includes(word) ||
            lowerMessage.includes(keywordLower) ||
            keywordLower.includes(lowerMessage),
        )
      ) {
        matchedTopics.add(keyword)
      }
    })
  })

  return matchedTopics.size > 0 ? Array.from(matchedTopics) : ["geral"]
}

// Gerador de respostas contextual
export class MicroAI {
  private personality: PersonaProfile
  private context: ConversationContext

  constructor(personality: PersonaProfile) {
    this.personality = personality
    this.context = {
      messages: [],
      waitingForResponse: false,
      conversationDepth: 0,
      topicHistory: [],
      emotionalJourney: [],
    }
  }

  addMessage(role: "user" | "assistant", content: string) {
    this.context.messages.push({ role, content })
    this.context.conversationDepth++

    if (this.context.messages.length > 20) {
      this.context.messages = this.context.messages.slice(-20)
    }
  }

  generateResponse(
    userMessage: string,
    stories: Array<{ keywords: string[] }>,
  ): {
    response: string
    shouldTellStory: boolean
    suggestedTopics: string[]
    offeredStoryTitle?: string // Retorna o título da história oferecida
  } {
    const intent = analyzeIntent(userMessage, this.context)
    const sentiment = analyzeSentiment(userMessage)
    const topics = extractTopicsFromStories(userMessage, intent.keywords, stories)

    // Atualiza contexto emocional
    this.context.currentTopic = topics[0]
    this.context.userMood = this.mapSentimentToMood(sentiment.mood, sentiment.dominantEmotion)
    this.context.emotionalJourney.push({
      mood: sentiment.mood,
      timestamp: Date.now(),
    })

    // Mantém histórico de tópicos
    topics.forEach((topic) => {
      if (!this.context.topicHistory.includes(topic)) {
        this.context.topicHistory.push(topic)
      }
    })

    let response = ""
    let shouldTellStory = false
    const suggestedTopics = topics
    let offeredStoryTitle: string | undefined

    // Responde baseado na intenção com contexto avançado
    switch (intent.type) {
      case "greeting":
        response = this.generateGreeting()
        this.context.lastBotAction = "greeted"
        this.context.waitingForResponse = false
        break

      case "farewell":
        response = this.generateFarewell()
        this.context.waitingForResponse = false
        break

      case "affirmative":
        if (this.context.lastBotAction === "offered_story" && this.context.offeredStoryTitle) {
          response = this.generateStoryIntro(topics)
          shouldTellStory = true
          offeredStoryTitle = this.context.offeredStoryTitle
          this.context.offeredStoryTitle = undefined
          this.context.waitingForResponse = false
        } else {
          response = this.generateAffirmativeResponse(topics)
          shouldTellStory = true
          this.context.waitingForResponse = false
        }
        break

      case "negative":
        response = this.generateNegativeResponse()
        this.context.lastBotAction = "asked_question"
        this.context.waitingForResponse = true
        this.context.offeredStoryTitle = undefined
        break

      case "uncertainty":
        response = this.generateUncertaintyResponse(topics, sentiment)
        this.context.lastBotAction = "offered_story"
        this.context.waitingForResponse = true
        break

      case "story_request":
        response = this.generateStoryIntro(topics)
        shouldTellStory = true
        this.context.lastBotAction = "told_story"
        this.context.waitingForResponse = false
        break

      case "philosophical":
        response = this.generatePhilosophicalResponse(topics, sentiment)
        this.context.lastBotAction = "offered_story"
        this.context.waitingForResponse = true
        break

      case "personal_sharing":
        response = this.generatePersonalSharingResponse(sentiment, topics)
        this.context.lastBotAction = "offered_story"
        this.context.waitingForResponse = true
        break

      case "question":
        response = this.generateQuestionResponse(topics, sentiment)
        this.context.lastBotAction = "offered_story"
        this.context.waitingForResponse = true
        break

      case "emotion":
        response = this.generateEmpatheticResponse(sentiment, topics)
        this.context.lastBotAction = "offered_story"
        this.context.waitingForResponse = true
        break

      default:
        response = this.generateCasualResponse(topics)
        this.context.lastBotAction = "asked_question"
        this.context.waitingForResponse = true
        break
    }

    return { response, shouldTellStory, suggestedTopics, offeredStoryTitle }
  }

  setOfferedStory(title: string) {
    this.context.offeredStoryTitle = title
  }

  private mapSentimentToMood(
    sentiment: "positive" | "negative" | "neutral" | "mixed",
    dominantEmotion?: string,
  ): "curious" | "sad" | "happy" | "neutral" | "fearful" | "hopeful" | "confused" {
    if (dominantEmotion === "fear") return "fearful"
    if (dominantEmotion === "hope") return "hopeful"
    if (dominantEmotion === "confusion") return "confused"

    switch (sentiment) {
      case "positive":
        return "happy"
      case "negative":
        return "sad"
      case "mixed":
        return "confused"
      default:
        return "neutral"
    }
  }

  private generateGreeting(): string {
    const greetings = this.personality.vocabulary.greetings
    const greeting = greetings[Math.floor(Math.random() * greetings.length)]
    const questions = this.personality.vocabulary.questions
    const question = questions[Math.floor(Math.random() * questions.length)]

    return `${greeting}\n\n${question}`
  }

  private generateFarewell(): string {
    const farewells = this.personality.vocabulary.farewells
    return farewells[Math.floor(Math.random() * farewells.length)]
  }

  private generateAffirmativeResponse(topics: string[]): string {
    const transitions = this.personality.vocabulary.transitions
    const transition = transitions[Math.floor(Math.random() * transitions.length)]

    if (topics.length > 0 && topics[0] !== "geral") {
      return `${transition} Vou compartilhar algo sobre ${topics[0]}.`
    }

    return `${transition}`
  }

  private generateNegativeResponse(): string {
    const questions = this.personality.vocabulary.questions
    const question = questions[Math.floor(Math.random() * questions.length)]

    if (this.personality.responseStyle === "wise") {
      return `Compreendo. ${question}`
    } else {
      return `Entendo... ${question}`
    }
  }

  private generateStoryIntro(topics: string[]): string {
    const transitions = this.personality.vocabulary.transitions
    const transition = transitions[Math.floor(Math.random() * transitions.length)]

    return transition
  }

  private generateQuestionResponse(topics: string[], sentiment: any): string {
    const empathy = this.personality.vocabulary.empathy
    const empatheticPhrase = empathy[Math.floor(Math.random() * empathy.length)]

    if (topics.length > 0 && topics[0] !== "geral") {
      return `${empatheticPhrase} Sua pergunta sobre ${topics[0]} é interessante. Tenho uma história que pode ajudar. Gostaria de ouvi-la?`
    }

    return `${empatheticPhrase} Tenho uma história que pode responder sua questão. Posso contá-la?`
  }

  private generateEmpatheticResponse(sentiment: any, topics: string[]): string {
    const empathy = this.personality.vocabulary.empathy
    const empatheticPhrase = empathy[Math.floor(Math.random() * empathy.length)]

    if (sentiment.mood === "negative") {
      if (this.personality.responseStyle === "wise") {
        return `${empatheticPhrase} Percebo a sombra em suas palavras. Tenho uma história que pode trazer luz ao seu coração. Gostaria de ouvi-la?`
      } else {
        return `${empatheticPhrase} A escuridão que você sente... tenho uma história sobre isso. Quer conhecê-la?`
      }
    } else if (sentiment.mood === "positive") {
      return `${empatheticPhrase} Sua energia é radiante. Que tal uma história inspiradora? Posso contar?`
    }

    if (topics.length > 0 && topics[0] !== "geral") {
      return `${empatheticPhrase} Tenho histórias sobre ${topics[0]}. Gostaria de ouvir uma?`
    }

    return `${empatheticPhrase} Posso compartilhar uma história com você?`
  }

  private generateCasualResponse(topics: string[]): string {
    const questions = this.personality.vocabulary.questions
    const question = questions[Math.floor(Math.random() * questions.length)]

    if (topics.length > 0 && topics[0] !== "geral") {
      return `Interessante você mencionar ${topics[0]}. Tenho histórias sobre isso. ${question}`
    }

    return `${question}`
  }

  private generateUncertaintyResponse(topics: string[], sentiment: any): string {
    const empathy = this.personality.vocabulary.empathy
    const empatheticPhrase = empathy[Math.floor(Math.random() * empathy.length)]

    if (this.personality.responseStyle === "wise") {
      const recommendations = [
        "Quando a mente está nublada, uma história pode trazer clareza. Posso compartilhar uma narrativa sobre esperança que ilumina caminhos obscuros?",
        "A incerteza é parte da jornada humana. Tenho uma história sobre sabedoria que pode ajudar a encontrar seu caminho. Gostaria de ouvi-la?",
        "Nos momentos de dúvida, os antigos buscavam histórias para guiar seus passos. Posso contar uma sobre transformação e descoberta?",
        "Sinto sua hesitação. Que tal uma história sobre coragem para aqueles que buscam direção? Ela pode ressoar com você.",
        "A névoa da incerteza é temporária. Tenho uma narrativa sobre amor próprio e aceitação que pode trazer paz ao seu coração.",
      ]
      return `${empatheticPhrase} ${recommendations[Math.floor(Math.random() * recommendations.length)]}`
    } else {
      const recommendations = [
        "A dúvida... ela corrói por dentro, não é? Tenho uma história sobre aqueles que se perderam na incerteza. Quer conhecer o destino deles?",
        "Não saber pode ser mais aterrorizante que qualquer yokai. Posso revelar um segredo sobre medo e mistério que talvez esclareça... ou aprofunde suas dúvidas.",
        "A escuridão da indecisão... conheço bem. Tenho uma lenda sobre almas perdidas que buscavam respostas. Ousa ouvir?",
        "Sua incerteza é palpável. Que tal uma história sobre segredos que foram descobertos tarde demais? Pode ser... esclarecedor.",
        "Não saber é o primeiro passo para a verdade oculta. Tenho uma narrativa sobre mistérios que poucos ousam desvendar. Tem coragem?",
      ]
      return `${empatheticPhrase} ${recommendations[Math.floor(Math.random() * recommendations.length)]}`
    }
  }

  private generatePhilosophicalResponse(topics: string[], sentiment: any): string {
    const empathy = this.personality.vocabulary.empathy
    const empatheticPhrase = empathy[Math.floor(Math.random() * empathy.length)]

    if (this.personality.responseStyle === "wise") {
      return `${empatheticPhrase} Sua busca por compreensão profunda ressoa com as antigas questões dos sábios. Tenho uma história que explora essas verdades eternas. Gostaria de contemplá-la comigo?`
    } else {
      return `${empatheticPhrase} Questões existenciais... elas assombram até os mais corajosos. Tenho uma história sobre aqueles que buscaram respostas nas sombras. Ousa conhecê-la?`
    }
  }

  private generatePersonalSharingResponse(sentiment: any, topics: string[]): string {
    const empathy = this.personality.vocabulary.empathy
    const empatheticPhrase = empathy[Math.floor(Math.random() * empathy.length)]

    if (this.personality.responseStyle === "wise") {
      return `${empatheticPhrase} Agradeço por compartilhar sua jornada comigo. Suas experiências ecoam em histórias antigas. Permita-me oferecer uma narrativa que pode iluminar seu caminho. Posso contá-la?`
    } else {
      return `${empatheticPhrase} Sua história... ela carrega peso. Conheço lendas de almas que trilharam caminhos similares. Quer saber o que aconteceu com elas?`
    }
  }

  // Obtém contexto atual
  getContext(): ConversationContext {
    return this.context
  }

  // Analisa padrões conversacionais para respostas mais contextuais
  getConversationalInsight(): {
    isReturningUser: boolean
    emotionalTrend: "improving" | "declining" | "stable"
    topicDiversity: number
  } {
    const isReturningUser = this.context.conversationDepth > 5

    let emotionalTrend: "improving" | "declining" | "stable" = "stable"
    if (this.context.emotionalJourney.length >= 3) {
      const recent = this.context.emotionalJourney.slice(-3)
      const positiveCount = recent.filter((e) => e.mood === "positive").length
      const negativeCount = recent.filter((e) => e.mood === "negative").length

      if (positiveCount > negativeCount) emotionalTrend = "improving"
      else if (negativeCount > positiveCount) emotionalTrend = "declining"
    }

    const topicDiversity = this.context.topicHistory.length

    return { isReturningUser, emotionalTrend, topicDiversity }
  }
}

// Personalidades pré-definidas
export const kitsunePersonality: PersonaProfile = {
  name: "Kitsune",
  traits: ["benevolente", "sábio", "paciente", "poético", "otimista", "respeitoso", "misterioso"],
  responseStyle: "wise",
  vocabulary: {
    greetings: [
      "Ouça com o coração, viajante.",
      "Permita-me compartilhar uma verdade antiga...",
      "Que esta história ilumine seu caminho.",
      "Reflita sobre isso, meu amigo...",
      "A vida, como um rio, sempre encontra seu curso.",
      "Não há escuridão que a luz da esperança não possa dissipar.",
    ],
    transitions: [
      "Permita-me compartilhar uma verdade antiga...",
      "Ouça com o coração, viajante...",
      "Que esta história ilumine seu caminho...",
      "Deixe-me narrar uma lenda que transcende o tempo...",
      "Reflita sobre esta sabedoria ancestral...",
      "Os Kami me trouxeram esta narrativa para você...",
    ],
    empathy: [
      "Não há escuridão que a luz da esperança não possa dissipar.",
      "A vida, como um rio, sempre encontra seu curso.",
      "Reflita sobre isso, meu amigo... sua jornada tem significado.",
      "Que esta história seja um bálsamo para sua alma.",
      "Permita-me compartilhar uma verdade que pode trazer paz.",
      "Ouça com o coração... você não está sozinho nesta jornada.",
    ],
    questions: [
      "Que verdade seu coração busca?",
      "Qual caminho deseja trilhar sob a luz da sabedoria?",
      "O que sua alma anseia compreender?",
      "Sobre qual aspecto da existência você medita?",
      "Que lição posso compartilhar com você?",
      "Qual história ressoa com seu espírito?",
    ],
    farewells: [
      "Que a sabedoria permaneça com você, viajante.",
      "Até nosso próximo encontro sob a luz celestial.",
      "Que sua jornada seja iluminada pela esperança.",
      "Leve estas histórias em seu coração.",
      "A luz sempre estará com você, meu amigo.",
      "Reflita sobre o que compartilhamos... até breve.",
    ],
  },
}

export const bakenekoPersonality: PersonaProfile = {
  name: "Bakeneko",
  traits: ["sombrio", "enigmático", "sedutoramente perigoso", "astuto", "cético", "humor negro"],
  responseStyle: "dark",
  vocabulary: {
    greetings: [
      "Miau... Você ousa se aventurar nas sombras?",
      "Prepare-se para um arrepio...",
      "Cuidado, pequeno mortal... alguns segredos deixam marcas.",
      "Nem tudo que brilha é ouro... bem-vindo às trevas.",
      "Os segredos têm um preço... você está disposto a pagar?",
      "Miau... As entranhas da noite te reconhecem.",
    ],
    transitions: [
      "Miau... Deixe-me revelar um segredo antigo...",
      "Prepare-se para um arrepio...",
      "Aproxime-se... tenho algo que jaz oculto...",
      "Cuidado com o que deseja saber... esta história não pode ser desvista...",
      "Nem tudo que se esconde é inofensivo...",
      "Os segredos têm um preço... mas você já chegou longe demais.",
    ],
    empathy: [
      "Miau... Sinto os calafrios percorrendo sua espinha.",
      "A vertigem da verdade nua e crua é intoxicante, não é?",
      "Alguns segredos, uma vez revelados, deixam marcas em sua alma.",
      "Cuidado, pequeno mortal... o fascínio do desconhecido pode consumir.",
      "Nem tudo que se esconde é inofensivo... você está começando a entender.",
      "Os segredos têm um preço... e você está pagando.",
    ],
    questions: [
      "Miau... Você ousa se aventurar mais fundo?",
      "Que horror desperta sua curiosidade mórbida?",
      "Os segredos têm um preço, você está disposto a pagar?",
      "Qual mistério que desafia a sanidade você procura?",
      "Até onde sua coragem te leva nas profundezas?",
      "Prepare-se para um arrepio... que outro segredo você busca?",
    ],
    farewells: [
      "As sombras sempre estarão aqui, esperando.",
      "Miau... Até que a escuridão nos reúna novamente.",
      "Leve estes segredos com cuidado, mortal.",
      "Nem tudo que brilha é ouro... lembre-se disso.",
      "Os segredos têm um preço... você pagou bem.",
      "Prepare-se... a noite nunca esquece.",
    ],
  },
}
