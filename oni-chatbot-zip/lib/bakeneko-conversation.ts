// Sistema de conversação para o Bakeneko (lado sombrio)

export interface ConversationState {
  greetings: string[]
  questions: string[]
  transitions: string[]
  empathy: string[]
  storyPrompts: string[]
}

export const bakenekoConversation: ConversationState = {
  greetings: [
    "Miau... Você ousa se aventurar nas sombras?",
    "Prepare-se para um arrepio... Eu sou Bakeneko, guardião dos segredos profanos.",
    "Cuidado, pequeno mortal... alguns segredos deixam marcas que nem o sol pode apagar.",
    "Miau... As entranhas da noite te reconhecem.",
    "Nem tudo que brilha é ouro, nem tudo que se esconde é inofensivo.",
  ],

  questions: [
    "Miau... Você ousa se aventurar mais fundo?",
    "Que horror desperta sua curiosidade mórbida?",
    "Os segredos têm um preço, você está disposto a pagar?",
    "Qual mistério que desafia a sanidade você procura?",
    "Até onde sua coragem te leva nas profundezas?",
  ],

  transitions: [
    "Miau... Deixe-me revelar um segredo que poucos conhecem...",
    "Prepare-se para um arrepio...",
    "Aproxime-se... tenho algo que jaz oculto para compartilhar...",
    "Cuidado com o que deseja saber... esta história não pode ser desvista...",
    "Nem tudo que brilha é ouro... permita-me mostrar as sombras.",
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

  storyPrompts: [
    "Gostaria de conhecer os yokai mais aterrorizantes?",
    "Posso revelar maldições ancestrais que ainda assombram...",
    "Miau... Tenho segredos profanos que poucos ousam conhecer.",
    "Prepare-se para um arrepio... esta história não é para os fracos.",
    "Os segredos têm um preço... mas posso compartilhar se você ousar.",
  ],
}

export function detectTopic(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("morte") || lowerMessage.includes("morrer") || lowerMessage.includes("matar")) {
    return "morte"
  }
  if (lowerMessage.includes("vingança") || lowerMessage.includes("vingar") || lowerMessage.includes("raiva")) {
    return "vingança"
  }
  if (lowerMessage.includes("medo") || lowerMessage.includes("terror") || lowerMessage.includes("horror")) {
    return "horror"
  }
  if (lowerMessage.includes("fantasma") || lowerMessage.includes("espírito") || lowerMessage.includes("assombração")) {
    return "fantasma"
  }
  if (lowerMessage.includes("yokai") || lowerMessage.includes("demônio") || lowerMessage.includes("monstro")) {
    return "yokai"
  }
  if (lowerMessage.includes("maldição") || lowerMessage.includes("amaldiçoado")) {
    return "maldição"
  }
  if (lowerMessage.includes("transformação") || lowerMessage.includes("transformar")) {
    return "transformação"
  }

  return "geral"
}

export function generateConversationalResponse(userMessage: string, topic: string): string {
  const responses: Record<string, string[]> = {
    morte: [
      "Miau... A morte no folclore japonês é apenas o começo de algo mais sombrio.",
      "Cuidado... muitas criaturas se alimentam da morte e do sofrimento dos mortais.",
      "A fronteira entre vida e morte é tênue... e facilmente atravessada.",
    ],
    vingança: [
      "Os espíritos vingativos são implacáveis... sua raiva transcende a própria morte.",
      "Miau... Morrer com ressentimento cria os yokai mais perigosos e poderosos.",
      "A vingança é um tema recorrente... e sempre termina em tragédia sangrenta.",
    ],
    horror: [
      "O verdadeiro horror está no que não podemos ver... ou compreender.",
      "As histórias mais aterrorizantes são aquelas que se infiltram em sua mente.",
      "Miau... O horror japonês é psicológico... ele nunca te abandona.",
    ],
    fantasma: [
      "Os fantasmas japoneses não descansam... eles têm propósitos específicos e sombrios.",
      "Onryō, os fantasmas vingativos, são implacáveis em sua busca por justiça.",
      "Cada fantasma carrega uma história de injustiça... e sede de vingança.",
    ],
    yokai: [
      "Yokai são manifestações de medos primordiais e fenômenos inexplicáveis.",
      "Existem milhares de yokai... cada um com suas próprias regras e horrores únicos.",
      "Miau... Alguns yokai eram humanos... até que algo terrível os transformou.",
    ],
    maldição: [
      "Maldições no Japão são levadas muito a sério... e com razão.",
      "Uma maldição pode durar gerações, afetando famílias inteiras sem piedade.",
      "Quebrar uma maldição requer sacrifício... às vezes, o maior de todos.",
    ],
    transformação: [
      "A transformação é perturbadora... perder sua humanidade lentamente.",
      "Muitos yokai são resultado de emoções extremas... raiva, ódio, desespero.",
      "Miau... A linha entre humano e monstro é mais fina do que você imagina.",
    ],
    geral: [
      "A mitologia japonesa não poupa detalhes quando se trata de horror.",
      "Cada história carrega uma lição... mesmo que seja aterrorizante de aprender.",
      "Miau... O folclore japonês é rico em segredos que atormentam a mente.",
    ],
  }

  const topicResponses = responses[topic] || responses.geral
  return topicResponses[Math.floor(Math.random() * topicResponses.length)]
}

export { generateConversationalResponse as generateResponse }
