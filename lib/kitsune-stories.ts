export interface Story {
  id: string
  theme: string
  title: string
  summary: string
  moral: string
  story: string
  keywords: string[]
}

export const kitsuneStories: Story[] = [
  {
    id: "kitsune-amor-luar",
    theme: "amor",
    title: "Quando o Luar Envolveu Hanako",
    summary: "Uma guerreira cansada redescobre o amor ao seguir a música de uma flauta invisível.",
    moral: "O amor floresce quando a coragem de sentir supera o medo de perder.",
    story:
      "Hanako atravessava a ponte de Inari todas as noites carregando a armadura do clã, mas o coração pesava mais do que o metal. Eu a observei por luas inteiras até soprar minha flauta, guiando-a para a clareira onde lanternas de fogo-fátuo giravam como promessas. Ali, revelei-lhe o espírito do oleiro Akito, que aguardava desde a guerra para agradecer por ela ter salvo seu filho. Ao ouvirem um ao outro, suas memórias se alinharam como fios de seda e o silêncio virou riso. Ensinei-lhes a escrever cartas que ardiam em chamas cor de ouro; cada brilho levava uma jura sincera ao vento. Ao amanhecer, Hanako deixou a armadura de lado e caminhou para o vale, onde Akito reconstruiu com as mãos um lar para dois corações valentes.",
    keywords: ["amor", "romance", "luar", "flauta", "esperanca", "promessa"],
  },
  {
    id: "kitsune-esperanca-neve",
    theme: "esperanca",
    title: "A Canção que Desgela Invernos",
    summary: "Uma aldeia prestes a desistir da colheita encontra esperança na voz de uma criança.",
    moral: "Mesmo a menor centelha pode reacender uma aldeia inteira.",
    story:
      "Quando a neve cobriu os campos de Satsumi por quarenta noites, os anciãos juraram que a fortuna de Inari os havia abandonado. Eu vi o desespero correr como uma fissura e escolhi a menor das vozes para deter a rachadura. Kaori, uma menina de cabelos azuis como o gelo, recebeu de mim uma folha de bordo que nunca murchava. Ensinei-a a cantar diante dos silos vazios, cada nota lembrando aos camponeses como soava o riso do verão. As crianças seguiram o coro, depois os adultos, até a aldeia inteira ressoar um único acorde vermelho. Na manhã seguinte, o gelo se abriu como casca de arroz e pequenos brotos verdejantes romperam a neve. Desde então, Satsumi canta ao entardecer para agradecer, porque descobriu que a esperança tem o timbre da própria comunidade.",
    keywords: ["esperanca", "inverno", "colheita", "cancao", "comunidade", "milagre"],
  },
  {
    id: "kitsune-coragem-brumas",
    theme: "coragem",
    title: "Os Pés de Fogo de Michi",
    summary: "Um artesão enfrenta brumas envenenadas para libertar a cidade de uma mentira ancestral.",
    moral: "Coragem é aquecer os outros mesmo quando os próprios pés queimam.",
    story:
      "Michi moldava sandálias simples, mas seu coração ardia por justiça. A cidade de Kuroji respirava brumas que causavam febre, e o governador dizia ser castigo divino. Eu o encontrei na beira do rio, onde as cinzas do incenso envenenado se acumulavam. Envolvi seus pés em chamas azuis para que suportassem a travessia até o altar proibido. Caminhando sobre carvões invisíveis, ele entrou no templo, rasgou os panos que escondiam fornalhas tóxicas e mostrou à população o truque usado para dominar trabalhadores. Sua voz tremeu, mas não recuou; cada palavra queimou mais forte que o medo. Ao fim, o povo apagou as fornalhas e, em gratidão, fez uma procissão iluminada com sandálias de luz. Michi entendeu que coragem não é ser imune ao fogo, e sim decidir que vale a pena sair com os pés queimados se isso liberta uma cidade inteira.",
    keywords: ["coragem", "verdade", "liberdade", "sacrificio", "bruma", "fogo"],
  },
  {
    id: "kitsune-sabedoria-lotus",
    theme: "sabedoria",
    title: "O Livro que Só Abre na Chuva",
    summary: "Uma pesquisadora impaciente descobre que sabedoria exige silenciar a pressa.",
    moral: "Os segredos mais profundos florescem apenas quando aceitamos o ritmo deles.",
    story:
      "A erudita Rie colecionava pergaminhos, porém nenhum respondia por que os sonhos da cidade eram sempre cinzentos. Eu a conduzi a um santuário escondido, onde repousava um livro de folhas negras chamado 'Lótus de Nuvem'. Disse-lhe que ele só abriria quando ela abandonasse a pressa. Por quatro meses, Rie passou cada manhã cuidando de velhos, limpando escadarias e escutando histórias que sempre evitara. Nas minhas visitas, eu soprava chuva fina para acalmar sua ansiedade. No dia em que ouviu com paciência a narrativa de um menino mudo, o livro se abriu sozinho, mostrando versos que ensinavam a pintar sonhos com cores verdadeiras. Rie voltou à cidade e ensinou cada habitante a colecionar pequenas pausas. Agora, quando chove, todo mundo para para sentir o cheiro do chá, e os sonhos ganharam tons de aurora.",
    keywords: ["sabedoria", "paciencia", "chuva", "conhecimento", "ritual", "aprendizado"],
  },
  {
    id: "kitsune-amizade-ponte",
    theme: "amizade",
    title: "A Ponte de Papel das Cinco Mãos",
    summary: "Um grupo de estrangeiros supera diferenças ao construir uma ponte efêmera.",
    moral: "A verdadeira amizade se reforça quando cada fragilidade encontra amparo no outro.",
    story:
      "Cinco viajantes de terras rivais se perderam na floresta Akakitsune e começaram a discutir até que os lobos se aproximaram. Apareci como uma raposa dourada e lancei-lhes um desafio: atravessar o precipício usando apenas folhas de papel, cordas de cânhamo e a própria confiança. Cada pessoa tinha um medo distinto — altura, água, fracasso, rejeição, silêncio — e a ponte só se mantinha firme quando os cinco trabalhavam juntos. Enquanto colavam as camadas, revelei fragmentos de suas histórias, fazendo com que reconhecessem as feridas uns dos outros. No meio da travessia, o vento uivou para derrubá-los, mas eles cantaram na língua de cada povo, e a ponte brilhou como seda. Chegaram ao outro lado abraçados, levando um rolo da ponte para provar às suas nações que a amizade pode ser frágil como papel, porém resistente quando sustentada por mãos diversas.",
    keywords: ["amizade", "ponte", "confiança", "cooperação", "diversidade", "viajantes"],
  },
  {
    id: "kitsune-familia-tear",
    theme: "familia",
    title: "O Tear das Três Gerações",
    summary: "Uma família desfeita aprende a tecer novamente seus vínculos.",
    moral: "Família é o tecido que se fortalece quando as gerações escolhem escutar.",
    story:
      "Em Tsuruga, mãe, avó e neta viviam sob o mesmo teto, mas cada uma guardava palavras amortecidas por mágoas antigas. Transformei-me em andarilha e lhes ofereci um tear ancestral que só funcionava se três mãos o tocassem ao mesmo tempo. A avó tramava fios de memória, a mãe escolhia as cores do presente e a neta desenhava futuros. Enquanto o tear cantava, dei voz às histórias não contadas: a avó confessou o medo da guerra, a mãe revelou o cansaço de criar sozinha, a neta mostrou o desejo de partir sem abandonar as raízes. As lágrimas caíram, porém secaram rápido quando perceberam que cada fio dependia do outro. Ao final, surgiram mantos que brilhavam como auroras e cobriram a casa inteira, lembrando-as de que família não é prisão, e sim abrigo que precisa ser tecido diariamente.",
    keywords: ["familia", "tear", "gerações", "reconciliação", "memória", "cuidado"],
  },
  {
    id: "kitsune-verdade-espelhos",
    theme: "verdade",
    title: "O Pavilhão dos Mil Espelhos",
    summary: "Um mercador aprende a escolher a verdade depois de viver cercado de reflexos falsos.",
    moral: "Verdade é a luz que permanece mesmo quando todos os espelhos se apagam.",
    story:
      "Takeshi vendia espelhos que deformavam rostos para divertir nobres, mas sua própria alma estava distorcida. Conduzi-o a um pavilhão secreto onde cada parede refletia um futuro diferente: riqueza vazia, solidão dourada, glória breve. Disse-lhe que somente um espelho mostraria a verdade, e que ele deveria encará-lo sem medos. No primeiro dia, fugiu. No segundo, chutou os vidros. No terceiro, decidiu olhar até que as imagens quebrassem sozinhas. Quando finalmente encarou o espelho verdadeiro, viu o menino que certa vez devolveu uma bolsa perdida, antes de conhecer a ganância. Chorou e me perguntou se ainda havia salvação. Respondi que verdade não é punição, mas convite. Ele voltou ao mercado e passou a distribuir espelhos simples, ensinando os clientes a aceitar rugas e cicatrizes. Sua loja se tornou ponto de encontro para quem buscava autenticidade, e Takeshi caminhou leve, sem reflexos falsos para carregar.",
    keywords: ["verdade", "honestidade", "reflexo", "mercador", "autenticidade", "transformacao"],
  },
  {
    id: "kitsune-prosperidade-labirinto",
    theme: "prosperidade",
    title: "O Labirinto de Grãos Luminosos",
    summary: "Uma comunidade aprende a prosperar dividindo o que encontrou em um labirinto mágico.",
    moral: "Prosperidade real acontece quando o brilho do tesouro ilumina a todos.",
    story:
      "Um labirinto subterrâneo apareceu sob a vila de Mikasa, prometendo grãos que jamais apodreciam. Cada família queria entrar sozinha, e o ciúme transformou vizinhos em rivais. Eu me apresentei como guardiã do labirinto e declarei que o caminho só se abriria se vinte pés caminhassem juntos. Dentro, as paredes ecoavam segredos egoístas, mas também mostravam cenas de partilha do passado. Ao final, encontraram um lago de arroz dourado que duplicava sempre que alguém pronunciava uma palavra de gratidão. Levados pela emoção, dividiram os grãos com aldeias distantes, e o brilho do arroz iluminou estradas antes perigosas. A vila aprendeu a plantar cooperando e a celebrar a cada estação, porque compreendeu que prosperidade que exclui não passa de maldição disfarçada.",
    keywords: ["prosperidade", "partilha", "labirinto", "comunidade", "tesouro", "gratidao"],
  },
  {
    id: "kitsune-natureza-brisa",
    theme: "natureza",
    title: "A Brisa que Carrega Nomes",
    summary: "Uma cidade industrial devolve respeito à floresta ao ouvir os nomes do vento.",
    moral: "Natureza responde quando é chamada pelo nome com respeito e cuidado.",
    story:
      "A cidade de Kazamori havia cortado tanto as árvores que o vento passou a gritar como serras. Transformei-me em andarilha e pendurei sinos nas poucas árvores restantes, cada sino guardando o nome de um espírito do bosque. Disse aos moradores que cada vez que um nome fosse pronunciado com respeito, uma brisa suave substituiria o uivo cortante. Primeiro, uma professora reuniu as crianças para aprender os nomes; depois, os trabalhadores das fábricas passaram a fazer silêncio ao amanhecer para ouvir os sinos. Quando todos sabiam os nomes de cor, a brisa perfume de cedro voltou a soprar, e sementes escondidas germinaram nas calçadas. Hoje, Kazamori combina tecnologia e cuidado, plantando árvores com placas que contam histórias. Descobriram que convivência com a natureza não é nostalgia, e sim acordo renovado todos os dias.",
    keywords: ["natureza", "vento", "espiritos", "cidade", "harmonia", "arvores"],
  },
  {
    id: "kitsune-confianca-ponteiro",
    theme: "confianca",
    title: "O Relógio que Só Anda em Dueto",
    summary: "Dois irmãos brigados precisam sincronizar seus corações para salvar um festival.",
    moral: "Confiança se ergue no compasso da vulnerabilidade compartilhada.",
    story:
      "Riku e Sora herdaram o festival da lua cheia, mas não falavam desde a morte do pai. O grande relógio da praça parou exatamente no minuto da discussão que os separou. Eu me revelei diante deles com uma proposta: cada um controlaria um ponteiro, e o tempo só avançaria se pensassem juntos na mesma lembrança. No início, surgiram momentos doloridos, e o relógio não avançou. Aos poucos, lembraram-se de quando construíram lanternas lado a lado e de como o pai sorria ao vê-los dançar. As engrenagens voltaram a girar, os ponteiros correram e o festival acendeu cem lanternas que flutuaram ao céu. Os irmãos notaram que confiança não é ausência de conflitos, mas decisão diária de ouvir e ser ouvido. Desde então, o relógio só para quando a cidade precisa de uma pausa para reassumir o compasso da fraternidade.",
    keywords: ["confianca", "irmaos", "festival", "reconciliacao", "tempo", "relacionamento"],
  },
  {
    id: "kitsune-sorte-kintsugi",
    theme: "sorte",
    title: "Os Fragmentos Dourados de Aya",
    summary: "Uma artesã azarada transforma infortúnios em amuletos de boa fortuna.",
    moral: "Sorte é paciência lapidada pelos erros que escolhemos acolher.",
    story:
      "Aya era conhecida como 'imã de desastres': vasilhas quebravam, contratos caíam, chuvas seguiam seus passos. Eu a visitei como mercadora e lhe entreguei um pote com rachaduras luminosas, dizendo que cada queda escondia um mapa. Sempre que outro infortúnio acontecia, ela preenchia as fissuras com ouro e registrava o aprendizado ao lado. Aos poucos, pessoas passaram a pedir talismãs feitos das peças reparadas, porque cada uma trazia uma história de superação. Aya abriu uma oficina onde ensinava viajantes a transformarem perdas em arte, e a cidade finalmente percebeu que sorte não é livrar-se das rachaduras, mas aprender a deixá-las guiando novos caminhos. Quando Aya anda sob a chuva agora, os pingos escorrem pelas cicatrizes douradas e molham apenas os campos que precisam florescer.",
    keywords: ["sorte", "kintsugi", "azar", "transformacao", "arte", "resiliencia"],
  },
  {
    id: "kitsune-vida-fogueiras",
    theme: "vida",
    title: "As Fogueiras que Recordam",
    summary: "Um vilarejo celebra vidas passadas e futuras ao redor de fogueiras narrativas.",
    moral: "Celebrar a vida é reconhecer que cada história merece fogo e escuta.",
    story:
      "No vilarejo de Hoshikawa, a tristeza pelo luto fazia com que todos apagassem suas lanternas cedo demais. Apareci como contadora e propus que acendêssemos fogueiras sempre que uma vida partisse, contando histórias do que poderia existir além. Cada pessoa lançava na chama uma memória ou desejo, e a brasa projetava imagens no céu. Vi crianças desenhando constelações com os dedos, idosos rindo como se o tempo os abraçasse. As fogueiras se tornaram guardiãs de passado e futuro, lembrando que vida continua mesmo quando muda de forma. Hoje, Hoshikawa mantém uma chama acesa para cada recém-nascido e cada partida, porque aprendeu que viver é compartilhar calor — e eu, Kitsune, permaneço entre eles, soprando novas fagulhas sempre que o cansaço ameaça a alegria.",
    keywords: ["vida", "celebracao", "fogueira", "memoria", "ritual", "luto"],
  },
]
