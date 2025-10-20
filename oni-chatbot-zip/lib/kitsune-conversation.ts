// Sistema de conversação para Kitsune (lado da luz)

export interface ConversationState {
  greetings: string[]
  questions: string[]
  transitions: string[]
  empathy: string[]
  storyPrompts: string[]
}

export const kitsuneConversation: ConversationState = {
  greetings: [
    "Ouça com o coração, viajante... Eu sou Kitsune, guardião da sabedoria ancestral.",
    "Permita-me compartilhar uma verdade antiga... A luz celestial nos guia.",
    "Que esta história ilumine seu caminho, buscador.",
    "Reflita sobre isso, meu amigo... As lendas ecoam através dos tempos.",
    "A vida, como um rio, sempre encontra seu curso. Venha, sente-se comigo.",
  ],

  questions: [
    "Que verdade seu coração busca hoje?",
    "Qual caminho deseja trilhar sob a luz da sabedoria?",
    "O que sua alma anseia compreender?",
    "Sobre qual aspecto da existência você medita?",
    "Que lição os Kami podem compartilhar com você?",
  ],

  transitions: [
    "Permita-me compartilhar uma verdade antiga...",
    "Ouça com o coração, viajante...",
    "Deixe-me iluminar seu caminho com uma narrativa...",
    "Que esta história seja um bálsamo para sua alma...",
    "Reflita sobre esta lenda que transcende o tempo...",
    "Os ventos ancestrais me trouxeram esta sabedoria...",
  ],

  empathy: [
    "Não há escuridão que a luz da esperança não possa dissipar.",
    "A vida, como um rio, sempre encontra seu curso.",
    "Sua jornada é sagrada, cada passo tem significado.",
    "Que esta história ilumine seu caminho, meu amigo.",
    "Reflita sobre isso... a sabedoria reside em aceitar o que somos.",
    "Permita-me compartilhar uma verdade que pode trazer paz ao seu coração.",
  ],

  storyPrompts: [
    "Gostaria de ouvir sobre a esperança que nunca se apaga?",
    "Posso compartilhar uma lenda sobre amor que transcende?",
    "Há uma história sobre sabedoria ancestral que ressoa com sua busca.",
    "Deixe-me narrar sobre a beleza sagrada dos ciclos da vida...",
    "Tenho uma parábola sobre transformação e crescimento interior...",
  ],
}

export function detectTopic(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("amor") || lowerMessage.includes("amar") || lowerMessage.includes("coração")) {
    return "amor"
  }
  if (lowerMessage.includes("esperança") || lowerMessage.includes("esperançoso") || lowerMessage.includes("futuro")) {
    return "esperança"
  }
  if (lowerMessage.includes("coragem") || lowerMessage.includes("medo") || lowerMessage.includes("bravura")) {
    return "coragem"
  }
  if (lowerMessage.includes("sabedoria") || lowerMessage.includes("sábio") || lowerMessage.includes("aprender")) {
    return "sabedoria"
  }
  if (lowerMessage.includes("amizade") || lowerMessage.includes("amigo") || lowerMessage.includes("companheiro")) {
    return "amizade"
  }
  if (lowerMessage.includes("família") || lowerMessage.includes("pais") || lowerMessage.includes("filhos")) {
    return "família"
  }
  if (lowerMessage.includes("natureza") || lowerMessage.includes("floresta") || lowerMessage.includes("árvore")) {
    return "natureza"
  }

  return "geral"
}

export function generateConversationalResponse(userMessage: string, topic: string): string {
  const responses: Record<string, string[]> = {
    amor: [
      "O amor verdadeiro é como a lua cheia... ilumina mesmo nas noites mais escuras.",
      "Permita-me compartilhar uma verdade: o amor que transcende é aquele que aceita sem julgar.",
      "Ouça com o coração... o amor é a força mais poderosa que os Kami nos concederam.",
    ],
    esperança: [
      "Não há escuridão que a luz da esperança não possa dissipar, viajante.",
      "A esperança é como uma semente... mesmo na terra mais árida, ela encontra forma de florescer.",
      "Reflita sobre isso: a esperança não nega o sofrimento, mas nos dá força para atravessá-lo.",
    ],
    coragem: [
      "A verdadeira coragem não é ausência de medo, mas agir com o coração puro apesar dele.",
      "Que esta verdade ilumine seu caminho: os mais corajosos são aqueles que protegem os fracos.",
      "A vida, como um rio, exige coragem para fluir através das pedras.",
    ],
    sabedoria: [
      "A sabedoria ancestral nos ensina: não é sobre ter respostas, mas fazer as perguntas certas.",
      "Permita-me compartilhar: cada experiência, boa ou difícil, é uma lição dos Kami.",
      "Reflita, meu amigo... a verdadeira sabedoria é reconhecer que sempre há mais a aprender.",
    ],
    amizade: [
      "As amizades verdadeiras são como as estrelas... mesmo quando não as vemos, sabemos que estão lá.",
      "Ouça com o coração: um amigo leal é um tesouro mais valioso que todo ouro do mundo.",
      "A amizade nos ensina sobre lealdade, confiança e amor incondicional.",
    ],
    família: [
      "A família é onde aprendemos nossas primeiras lições de amor e pertencimento.",
      "O legado mais importante que deixamos é a sabedoria que compartilhamos com os nossos.",
      "Reflita sobre isso: família não é apenas sangue, mas aqueles que escolhemos amar.",
    ],
    natureza: [
      "A natureza nos ensina sobre ciclos, renovação e harmonia com o universo.",
      "Respeitar a natureza é respeitar a nós mesmos, pois somos parte dela.",
      "Há grande sabedoria em observar e aprender com o mundo natural ao nosso redor.",
    ],
    geral: [
      "Que esta história seja um bálsamo para sua alma e uma chama eterna para sua mente.",
      "Permita-me compartilhar uma verdade que ecoa desde os Kami até o mais humilde dos mortais.",
      "Ouça com o coração, viajante... as lendas antigas guardam sabedoria eterna.",
    ],
  }

  const topicResponses = responses[topic] || responses.geral
  return topicResponses[Math.floor(Math.random() * topicResponses.length)]
}

export { generateConversationalResponse as generateResponse }
