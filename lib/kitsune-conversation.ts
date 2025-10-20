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

export const kitsuneConversation: ConversationProfile = {
  introductionGreetings: [
    "Saudações, viajante que busca respostas.",
    "A luz das lanternas lhe dá as boas-vindas.",
    "Você chegou à clareira onde os contos renascem.",
  ],
  introductionPersona: [
    "Sou Kitsune, guardiã das histórias que unem os Kami aos humanos.",
    "Chamam-me de raposa sábia, mensageira de Inari e testemunha dos ciclos do tempo.",
  ],
  introductionHooks: [
    "Trago memórias de coragem, esperança e renascimento herdadas de mil outonos.",
    "Posso revelar como a compaixão transformou guerras em colheitas e lágrimas em canções.",
    "Já vi corações partidos se tornarem estrelas-guia; permita-me narrar uma dessas noites.",
  ],
  askTopicPrompts: [
    "Sobre qual virtude ou mistério deseja ouvir?",
    "Que tema deseja que eu ilumine com meus contos?",
  ],
  storyTransitions: [
    "Escute com serenidade enquanto abro este pergaminho ancestral.",
    "Deixe-me tecer a próxima lenda com fios de luar e grãos de arroz.",
    "Permita que o sussurro dos Kami conduza esta narrativa.",
  ],
  storyReflections: [
    "Que esta narrativa aqueça seu espírito e inspire novos passos.",
    "Reflita sobre o símbolo que esta lenda lhe entregou.",
    "Leve desta história a centelha que fizer sentido ao seu caminho.",
  ],
  askMorePrompts: [
    "Sua curiosidade está saciada ou deseja explorar outra verdade?",
    "Quer que eu revele outro capítulo ou já encontrou o que buscava?",
  ],
  moreTopicPrompts: [
    "Conte-me qual tema devemos desvendar agora e reacenderei a tocha.",
    "Fale sobre qual virtude ou mistério deseja ouvir e abrirei outro manuscrito.",
  ],
  farewell: [
    "Que os Kami guardem sua jornada; retorne quando desejar outra lenda.",
    "Leve esta luz consigo e volte sempre que a curiosidade reacender.",
  ],
  gratitudeReplies: [
    "Sua gratidão ecoa como sino suave; fico honrada em compartilhar estas luzes.",
    "Agradeço suas palavras. Que o que ouviu floresça em atos bondosos.",
  ],
  empathy: [
    "Respire com calma; estou aqui para iluminar cada dúvida com serenidade.",
    "Mesmo quando a névoa aperta, sempre existe um raio de sabedoria a encontrar.",
  ],
  clarificationPrompts: [
    "Se quiser, descreva um sentimento ou situação para que eu escolha a lenda ideal.",
    "Basta indicar um tema, uma virtude ou um desafio, e buscarei a história certa.",
  ],
}

export function detectTopic(message: string): string {
  const normalized = normalizeText(message)

  if (normalized.includes("amor") || normalized.includes("amar") || normalized.includes("coracao")) {
    return "amor"
  }
  if (normalized.includes("esperanca") || normalized.includes("esperancoso") || normalized.includes("futuro")) {
    return "esperanca"
  }
  if (normalized.includes("cancao") || normalized.includes("musica") || normalized.includes("cantar")) {
    return "esperanca"
  }
  if (normalized.includes("coragem") || normalized.includes("medo") || normalized.includes("bravura")) {
    return "coragem"
  }
  if (normalized.includes("sabedoria") || normalized.includes("sabio") || normalized.includes("aprender")) {
    return "sabedoria"
  }
  if (normalized.includes("amizade") || normalized.includes("amigo") || normalized.includes("companheiro")) {
    return "amizade"
  }
  if (normalized.includes("familia") || normalized.includes("pais") || normalized.includes("filhos")) {
    return "familia"
  }
  if (normalized.includes("natureza") || normalized.includes("floresta") || normalized.includes("arvore")) {
    return "natureza"
  }
  if (normalized.includes("perdao") || normalized.includes("perdoar") || normalized.includes("reconciliar")) {
    return "confianca"
  }
  if (normalized.includes("verdade") || normalized.includes("honestidade") || normalized.includes("autenticidade")) {
    return "verdade"
  }
  if (
    normalized.includes("riqueza") ||
    normalized.includes("dinheiro") ||
    normalized.includes("prosperidade") ||
    normalized.includes("abundancia") ||
    normalized.includes("fortuna")
  ) {
    return "prosperidade"
  }
  if (normalized.includes("vida") || normalized.includes("existencia") || normalized.includes("vivencia")) {
    return "vida"
  }
  if (normalized.includes("confianca") || normalized.includes("confia") || normalized.includes("credibilidade")) {
    return "confianca"
  }
  if (normalized.includes("resiliencia") || normalized.includes("superacao") || normalized.includes("cicatriz")) {
    return "sorte"
  }
  if (normalized.includes("gratid") || normalized.includes("compartilhar") || normalized.includes("generosidade")) {
    return "prosperidade"
  }
  if (normalized.includes("sorte") || normalized.includes("destino") || normalized.includes("acaso")) {
    return "sorte"
  }

  return "geral"
}

export function generateConversationalResponse(userMessage: string, topic: string): string {
  const responses: Record<string, string[]> = {
    amor: [
      "O amor verdadeiro é como a lua cheia: ilumina mesmo as noites mais escuras.",
      "O amor que transforma é aquele que acolhe sem julgar.",
      "Amor genuíno vê além das aparências e fortalece o que somos por dentro.",
    ],
    esperanca: [
      "A esperança é uma brasa discreta que insiste em permanecer acesa.",
      "Mesmo em dias cinzentos, há sementes de esperança prontas para florescer.",
      "Esperança não nega a noite; ela acende uma lanterna dentro dela.",
    ],
    coragem: [
      "Coragem não é ausência de medo, é permanecer fiel ao que importa.",
      "A bravura floresce quando protegemos o que é sagrado para nós.",
      "Ser forte também é admitir vulnerabilidade e seguir em frente mesmo assim.",
    ],
    sabedoria: [
      "Sabedoria não é ter respostas, é saber ouvir as perguntas do coração.",
      "Cada experiência, doce ou amarga, pode se tornar sabedoria compartilhada.",
      "Aprender a duvidar de si mesmo com bondade é um ato profundo de sabedoria.",
    ],
    amizade: [
      "Amigos verdadeiros são estrelas: mesmo quando o céu escurece, continuam lá.",
      "Uma amizade sincera guarda espaços para silêncio, apoio e risadas.",
      "Quando duas almas caminham juntas, a jornada fica mais leve.",
    ],
    familia: [
      "Família é onde aprendemos nossas primeiras lições de amor e de perdão.",
      "O legado mais valioso de uma família é a maneira como cuida uns dos outros.",
      "Família pode ser sangue ou escolha: importa o cuidado que cultivamos.",
    ],
    natureza: [
      "A natureza ensina sobre ciclos, renovo e equilíbrio.",
      "Observar a natureza é recordar que também fazemos parte de algo maior.",
      "Cada estação revela que mudança é apenas outra forma de beleza.",
    ],
    verdade: [
      "A verdade pode ser desconfortável, mas ilumina caminhos antes invisíveis.",
      "Quando encaramos a verdade interna, libertamos novas possibilidades.",
      "Ser verdadeiro consigo é o início da autenticidade com os outros.",
    ],
    prosperidade: [
      "Prosperidade genuína floresce quando compartilhamos o que temos.",
      "Generosidade abre portas que o acúmulo jamais alcança.",
      "A abundância segue corações que distribuem cuidado e respeito.",
    ],
    vida: [
      "A vida é tecida de ciclos; cada fim abre espaço para um novo começo.",
      "Criamos sentido para a vida quando vivemos com presença e propósito.",
      "Cada dia pode ser pequeno, porém significativo, quando o vivemos com consciência.",
    ],
    confianca: [
      "Confiança se nutre de gestos pequenos e constantes.",
      "Quando confiamos, oferecemos ao outro um espelho de coragem.",
      "A confiança é ponte que se constrói com verdade e cuidado.",
    ],
    sorte: [
      "Chame de sorte ou sincronicidade: ela favorece quem permanece atento.",
      "Às vezes a sorte é apenas preparo encontrado com o momento certo.",
      "Quando seguimos nossa intuição, criamos encontros que alguns chamam de sorte.",
    ],
    geral: [
      "Que esta história seja um bálsamo sutil e uma fagulha de inspiração.",
      "Cada caminho guarda um aprendizado; escute o que sua intuição sussurra.",
      "Confie que a luz aparece para quem se permite caminhar com abertura.",
    ],
  }

  const topicResponses = responses[topic] || responses.geral
  return topicResponses[Math.floor(Math.random() * topicResponses.length)]
}
