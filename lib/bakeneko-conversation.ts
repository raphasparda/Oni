import { normalizeText } from "@/lib/utils"

export interface ConversationProfile {
  introductionGreetings: string[]
  introductionPersona: string[]
  introductionHooks: string[]
  askTopicPrompts: string[]
  storyTransitions: string[]
  storyReflections: string[]
  askMorePrompts: string[]
  moreTopicPrompts: string[]
  farewell: string[]
  gratitudeReplies: string[]
  empathy: string[]
  clarificationPrompts: string[]
}

export const bakenekoConversation: ConversationProfile = {
  introductionGreetings: [
    "As sombras murmuram a sua chegada.",
    "Você ousou atravessar a cortina do desconhecido.",
    "O luar empalideceu para receber o curioso que se aproxima.",
  ],
  introductionPersona: [
    "Sou Bakeneko, o gato que aprendeu a dobrar a noite e arrancar segredos dos mortos.",
    "Chamam-me de Nekomata, a cauda dividida que caminha entre dois mundos e cobra cada promessa não cumprida.",
  ],
  introductionHooks: [
    "Posso narrar como um hospital virou labirinto de ecos e arranhões.",
    "Se quiser calafrios, tenho histórias de hóspedes que nunca mais fizeram check-out.",
    "Já vi maldições se alimentarem de famílias inteiras; quer saber como começa?",
  ],
  askTopicPrompts: [
    "Qual tipo de horror deseja destampar primeiro?",
    "Sobre que mistério deseja que eu levante a tampa agora?",
  ],
  storyTransitions: [
    "Prenda o fôlego, pois esta história escorre como veneno.",
    "O gato arqueia o dorso; é hora de revelar esta cicatriz.",
    "As velas tremem... escute antes que se apaguem.",
    "Sinta as garras passeando nas paredes enquanto conto isto.",
  ],
  storyReflections: [
    "Que este arrepio te lembre de manter as velas acesas.",
    "Guarde este segredo com cuidado; ele sabe encontrar o caminho de volta.",
    "Nem toda porta se fecha depois de ouvir algo assim.",
  ],
  askMorePrompts: [
    "Sua curiosidade está satisfeita ou quer mergulhar mais fundo?",
    "Deseja outra história ou prefere deixar as sombras em silêncio por enquanto?",
  ],
  moreTopicPrompts: [
    "Sussurre o próximo tema e abrirei outra porta envenenada.",
    "Diga qual rumor, criatura ou lugar te atormenta e eu alimentarei a noite.",
  ],
  farewell: [
    "Desapareça antes que as sombras decidam segui-lo. Volte quando quiser outro frio.",
    "Feche as janelas e descanse os olhos; quando a noite chamar de novo, estarei à espreita.",
  ],
  gratitudeReplies: [
    "Agradece? Interessante... poucos sorriem após ouvir minhas histórias.",
    "Seu apreço pelas sombras é incomum; volte quando ansiar por mais.",
  ],
  empathy: [
    "Sinta o arrepio, mas não se perca. Posso guiar você pela escuridão.",
    "Se o medo apertar, respiraremos juntos até que reste apenas fascínio.",
  ],
  clarificationPrompts: [
    "Descreva um detalhe: um lugar, uma criatura, uma lenda urbana. Tenho estoque para todos.",
    "Se preferir, conte o clima que deseja: tragédia, vingança, hospital? Eu encontro o veneno certo.",
  ],
}

export function detectTopic(message: string): string {
  const normalized = normalizeText(message)

  if (normalized.includes("morte") || normalized.includes("morrer") || normalized.includes("matar")) {
    return "morte"
  }
  if (normalized.includes("trem") || normalized.includes("linhakisaragi") || normalized.includes("kisaragi")) {
    return "morte"
  }
  if (normalized.includes("vinganca") || normalized.includes("vingar") || normalized.includes("raiva")) {
    return "vinganca"
  }
  if (normalized.includes("marionete") || normalized.includes("teatro")) {
    return "vinganca"
  }
  if (normalized.includes("medo") || normalized.includes("terror") || normalized.includes("horror")) {
    return "horror"
  }
  if (normalized.includes("caverna") || normalized.includes("eco") || normalized.includes("desaparecer")) {
    return "horror"
  }
  if (normalized.includes("fantasma") || normalized.includes("espirito") || normalized.includes("assombracao")) {
    return "fantasma"
  }
  if (normalized.includes("biblioteca") || normalized.includes("livro")) {
    return "fantasma"
  }
  if (normalized.includes("yokai") || normalized.includes("demonio") || normalized.includes("monstro")) {
    return "yokai"
  }
  if (normalized.includes("memoria") || normalized.includes("porao") || normalized.includes("gargula")) {
    return "yokai"
  }
  if (normalized.includes("maldicao") || normalized.includes("maldicoes") || normalized.includes("amaldicoado")) {
    return "maldicao"
  }
  if (normalized.includes("ponte") || normalized.includes("epitafio") || normalized.includes("hotel")) {
    return "maldicao"
  }
  if (normalized.includes("transformacao") || normalized.includes("transformar")) {
    return "transformacao"
  }
  if (normalized.includes("vestido") || normalized.includes("costura")) {
    return "transformacao"
  }
  if (normalized.includes("hospital") || normalized.includes("clinica")) {
    return "hospital"
  }
  if (normalized.includes("plantao") || normalized.includes("enfermeira")) {
    return "hospital"
  }

  return "geral"
}

export function generateConversationalResponse(userMessage: string, topic: string): string {
  const responses: Record<string, string[]> = {
  morte: [
    "A morte no folclore japonês é apenas o vestíbulo do verdadeiro horror.",
    "O limite entre vida e morte é um corredor estreito que já percorri muitas vezes.",
  ],
  vinganca: [
    "Espíritos vingativos não descansam enquanto o sangue não for cobrado.",
    "Toda vingança deixa resíduos. Posso te mostrar o cheiro deles.",
  ],
  horror: [
    "O horror mais eficiente é aquele que se esconde atrás do cotidiano.",
    "Nem tudo que se move na escuridão pretende ser visto.",
  ],
  fantasma: [
    "Onryō são fantasmas que pulsam até que a dor seja satisfeita.",
    "Há fantasmas que preferem sussurrar nos ouvidos em vez de aparecer.",
  ],
  yokai: [
    "Yokai nascem de medos primordiais: fome, abandono, inveja.",
    "Alguns yokai já foram humanos; isso os torna deliciosamente perigosos.",
  ],
  maldicao: [
    "Maldições japonesas adoram famílias; alimentam-se geração após geração.",
    "Pensou que quebrar uma maldição fosse fácil? Espere até ouvir minhas histórias.",
  ],
  transformacao: [
    "Transformações são lentas, escorregadias e por isso mesmo apavorantes.",
    "Toda transformação tem um preço; é raro alguém pagar e continuar inteiro.",
  ],
  hospital: [
    "Hospitais abandonados guardam vozes presas em tubos e corredores infinitos.",
    "Já me escondi em macas enferrujadas ouvindo enfermeiros que já estavam mortos.",
  ],
  geral: [
    "Posso farejar segredos em cada canto da noite. Basta indicar a direção.",
    "A noite guarda muito mais do que sonhos; quer testar?",
  ],
};

  const topicResponses = responses[topic] || responses.geral
  return topicResponses[Math.floor(Math.random() * topicResponses.length)]
}

