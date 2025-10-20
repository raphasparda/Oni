import { NextResponse } from "next/server"
import { kitsuneStories } from "@/lib/kitsune-stories"
import { bakenekoStories } from "@/lib/bakeneko-stories"
import {
  kitsuneConversation,
  detectTopic as detectKitsuneTopic,
  generateConversationalResponse as generateKitsuneResponse,
} from "@/lib/kitsune-conversation"
import {
  bakenekoConversation,
  detectTopic as detectBakenekoTopic,
  generateConversationalResponse as generateBakenekoResponse,
} from "@/lib/bakeneko-conversation"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { message, bot, conversationHistory = [] } = body

    const isKitsune = bot === "kitsune"
    const stories = isKitsune ? kitsuneStories : bakenekoStories
    const conversation = isKitsune ? kitsuneConversation : bakenekoConversation
    const detectTopic = isKitsune ? detectKitsuneTopic : detectBakenekoTopic
    const generateResponse = isKitsune ? generateKitsuneResponse : generateBakenekoResponse

    const lowerMessage = message.toLowerCase().trim()

    // Detectar cumprimentos
    const greetingPatterns = /^(oi|olá|ola|hey|e aí|eai|bom dia|boa tarde|boa noite|como está|tudo bem|opa)/i
    if (greetingPatterns.test(lowerMessage)) {
      const greeting = conversation.greetings[Math.floor(Math.random() * conversation.greetings.length)]
      const question = conversation.questions[Math.floor(Math.random() * conversation.questions.length)]
      return NextResponse.json({ response: `${greeting}\n\n${question}` })
    }

    // Detectar respostas afirmativas
    const affirmativePatterns = /^(sim|claro|ok|pode|quero|gostaria|me conte|conta|yes|yeah)/i
    if (affirmativePatterns.test(lowerMessage)) {
      const transition = conversation.transitions[Math.floor(Math.random() * conversation.transitions.length)]
      return NextResponse.json({ response: `${transition}\n\nSobre qual tema você gostaria de ouvir?` })
    }

    // Detectar respostas negativas
    const negativePatterns = /^(não|nao|nunca|jamais|nem|no|nope)/i
    if (negativePatterns.test(lowerMessage)) {
      const empathy = conversation.empathy[Math.floor(Math.random() * conversation.empathy.length)]
      return NextResponse.json({ response: `${empathy}\n\nEstou aqui quando estiver pronto para ouvir.` })
    }

    // Detectar incerteza
    const uncertaintyPatterns = /(não sei|nao sei|sei lá|talvez|não tenho certeza|nao tenho certeza|duvida|dúvida)/i
    if (uncertaintyPatterns.test(lowerMessage)) {
      const empathy = conversation.empathy[Math.floor(Math.random() * conversation.empathy.length)]
      const prompt = conversation.storyPrompts[Math.floor(Math.random() * conversation.storyPrompts.length)]
      return NextResponse.json({ response: `${empathy}\n\n${prompt}` })
    }

    // Buscar histórias por palavras-chave
    const words = lowerMessage.split(/\s+/)
    const matchingStories = stories.filter((story) =>
      story.keywords.some((keyword) =>
        words.some((word) => word.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(word)),
      ),
    )

    if (matchingStories.length > 0) {
      // Selecionar história aleatória entre as que correspondem
      const selectedStory = matchingStories[Math.floor(Math.random() * matchingStories.length)]
      const transition = conversation.transitions[Math.floor(Math.random() * conversation.transitions.length)]

      const response = `${transition}\n\n${selectedStory.title}\n\n${selectedStory.story}\n\n${selectedStory.moral}`

      return NextResponse.json({ response })
    }

    // Se não encontrou histórias específicas, usar resposta conversacional baseada em tópico
    const topic = detectTopic(lowerMessage)
    const conversationalResponse = generateResponse(lowerMessage, topic)
    const prompt = conversation.storyPrompts[Math.floor(Math.random() * conversation.storyPrompts.length)]

    return NextResponse.json({ response: `${conversationalResponse}\n\n${prompt}` })
  } catch (error) {
    console.error("[v0] Erro na API:", error)
    return NextResponse.json({ response: "Erro ao processar mensagem. Tente novamente." }, { status: 500 })
  }
}
