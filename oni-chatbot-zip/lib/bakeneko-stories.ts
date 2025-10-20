// Histórias macabras e curiosidades sombrias da mitologia japonesa

export interface Story {
  id: string
  theme: string
  title: string
  summary: string
  moral: string
  story: string
  keywords: string[]
}

export const bakenekoStories: Story[] = [
  {
    id: "bakeneko-1",
    theme: "transformação",
    title: "O Gato que Devorou sua Dona",
    summary: "Uma história aterrorizante sobre um gato que se transforma em yokai e assume a identidade de sua dona.",
    moral: "Nem sempre aqueles que amamos permanecem os mesmos. A transformação pode esconder horrores inimagináveis.",
    story:
      "Em uma mansão isolada, vivia uma senhora idosa com seu gato de estimação. O animal era seu único companheiro, alimentado e mimado por anos. Mas quando a senhora adoeceu gravemente, algo sinistro aconteceu. O gato, já velho e com cauda bifurcada - sinal de transformação yokai - atacou sua dona durante a noite. Devorou-a completamente e assumiu sua forma humana. Por meses, ninguém percebeu a troca. O 'bakeneko' imitava perfeitamente os gestos e a voz da senhora, enganando até os familiares mais próximos. Apenas quando começaram a encontrar ossos humanos escondidos pela casa, a verdade macabra foi revelada.",
    keywords: ["transformação", "traição", "horror", "identidade", "yokai"],
  },
  {
    id: "bakeneko-2",
    theme: "vingança",
    title: "A Noiva de Yuki-Onna",
    summary: "A mulher das neves que congela aqueles que encontra nas tempestades.",
    moral: "A beleza pode ser mortal, e promessas quebradas têm consequências geladas.",
    story:
      "Yuki-onna aparece nas noites de neve, uma mulher de beleza sobrenatural vestida de branco. Sua pele é pálida como gelo, seus olhos vazios como o inverno. Ela procura viajantes perdidos e os congela com seu sopro mortal. Mas há uma história mais sombria: um jovem lenhador uma vez encontrou Yuki-onna e ela poupou sua vida, fazendo-o prometer nunca contar a ninguém. Anos depois, ele casou-se e, em um momento de fraqueza, contou à esposa sobre aquele encontro. Sua esposa então revelou ser a própria Yuki-onna. 'Eu te poupei por amor, mas você quebrou sua promessa', disse ela, antes de desaparecer na neve, levando consigo todo o calor da casa e deixando o homem em um frio eterno.",
    keywords: ["vingança", "frio", "promessa", "amor", "traição"],
  },
  {
    id: "bakeneko-3",
    theme: "morte",
    title: "O Segredo dos Kappa",
    summary: "Criaturas aquáticas que afogam humanos e extraem seus órgãos internos.",
    moral: "Nem toda criatura que parece infantil é inofensiva. Respeito e cautela salvam vidas.",
    story:
      "Os kappa vivem em rios e lagos, parecendo crianças com carapaças de tartaruga e um prato de água no topo da cabeça. Mas sua aparência enganosa esconde uma natureza assassina. Eles atraem crianças e adultos desavisados para a água, onde os arrastam para o fundo. O verdadeiro horror vem depois: os kappa extraem o 'shirikodama' - um órgão mítico localizado no ânus - deixando suas vítimas como cascas vazias flutuando na superfície. Aldeias inteiras viviam em terror, fazendo oferendas de pepinos (a comida favorita dos kappa) para apaziguar essas criaturas. Dizem que se você curvar-se para um kappa, ele retribuirá a reverência, derramando a água de seu prato e perdendo seus poderes.",
    keywords: ["morte", "água", "criança", "horror", "ritual"],
  },
  {
    id: "bakeneko-4",
    theme: "maldição",
    title: "A Mulher da Boca Rasgada",
    summary: "Kuchisake-onna, a mulher desfigurada que persegue suas vítimas com uma pergunta mortal.",
    moral: "Não há resposta certa para algumas perguntas. A vaidade pode ser uma maldição eterna.",
    story:
      "Ela aparece nas ruas desertas, usando uma máscara cirúrgica. Uma mulher bonita que se aproxima e pergunta: 'Eu sou bonita?' Se você responder 'não', ela te mata imediatamente com uma tesoura gigante. Se responder 'sim', ela remove a máscara, revelando sua boca rasgada de orelha a orelha, cheia de dentes afiados, e pergunta novamente: 'E agora?' Responda 'não' e você morre. Responda 'sim' e ela te desfigura para ficar igual a ela. A lenda diz que ela foi uma mulher vaidosa, esposa de um samurai, que foi mutilada por ele em um ataque de ciúmes. Agora, ela vaga eternamente, espalhando seu sofrimento para outros.",
    keywords: ["maldição", "vaidade", "desfiguração", "pergunta", "horror urbano"],
  },
  {
    id: "bakeneko-5",
    theme: "possessão",
    title: "O Espírito do Guarda-Chuva",
    summary: "Kasa-obake, objetos abandonados que ganham vida e alma própria.",
    moral: "Trate seus pertences com respeito, pois tudo que é negligenciado pode se voltar contra você.",
    story:
      "No Japão, acredita-se que objetos que completam 100 anos ganham vida própria, tornando-se tsukumogami. O kasa-obake é um guarda-chuva abandonado que desenvolve um olho, uma língua longa e pernas. Mas a história mais sombria fala de um guarda-chuva que foi usado para esconder um assassinato. Manchado de sangue e descartado, ele absorveu a raiva e o trauma da vítima. Agora, ele persegue descendentes do assassino, aparecendo em noites chuvosas. Aqueles que o pegam emprestado nunca mais são vistos, encontrados dias depois afogados em poças rasas, com marcas de estrangulamento feitas por algo que parece um cabo de guarda-chuva.",
    keywords: ["possessão", "objeto", "vingança", "abandono", "tsukumogami"],
  },
  {
    id: "bakeneko-6",
    theme: "fome",
    title: "A Fome Eterna do Gaki",
    summary: "Espíritos famintos condenados a nunca saciar sua necessidade.",
    moral: "A ganância e o egoísmo em vida podem resultar em sofrimento eterno após a morte.",
    story:
      "Os gaki são espíritos presos no reino dos famintos, um dos seis reinos do budismo. Eles têm barrigas enormes e inchadas, mas bocas minúsculas e gargantas finas como agulhas. Condenados a sentir fome e sede eternas, eles vagam procurando comida, mas tudo que tentam consumir se transforma em fogo ou excremento em suas bocas. Alguns gaki foram pessoas gananciosas em vida, que acumularam riquezas enquanto outros passavam fome. Outros foram glutões que desperdiçaram comida. Agora, eles assombram cemitérios e lixões, tentando desesperadamente comer qualquer coisa, mas sempre falhando. Seus gemidos de agonia podem ser ouvidos em noites silenciosas, um lembrete do preço da ganância.",
    keywords: ["fome", "sofrimento", "ganância", "tormento", "espírito"],
  },
  {
    id: "bakeneko-7",
    theme: "traição",
    title: "A Raposa de Nove Caudas Maligna",
    summary: "Kyuubi no Kitsune, a raposa demoníaca que manipula e destrói impérios.",
    moral: "O poder sem sabedoria corrompe, e a sedução pode destruir até os mais fortes.",
    story:
      "Nem todas as kitsune são benevolentes. A raposa de nove caudas mais infame foi Tamamo-no-Mae, que se disfarçou como uma cortesã de beleza incomparável. Ela seduziu o Imperador Toba, tornando-se sua favorita. Mas sua verdadeira intenção era destruir o Japão de dentro para fora. O imperador começou a adoecer misteriosamente, enfraquecendo dia após dia. Adivinhos descobriram que Tamamo-no-Mae era na verdade um yokai maligno de nove caudas, alimentando-se da energia vital do imperador. Quando foi descoberta, ela fugiu, mas foi caçada pelos maiores guerreiros do império. Mesmo após ser morta, seu espírito maligno permaneceu preso em uma pedra - a Pedra da Morte (Sesshoseki) - que matava qualquer ser vivo que se aproximasse, liberando vapores venenosos por séculos.",
    keywords: ["traição", "sedução", "poder", "destruição", "yokai"],
  },
  {
    id: "bakeneko-8",
    theme: "loucura",
    title: "O Riso do Kijo",
    summary: "Demônios femininos nascidos de ciúmes e ódio extremos.",
    moral: "Emoções negativas não controladas podem transformar uma pessoa em um monstro literal.",
    story:
      "Kijo são mulheres que se transformaram em demônios devido a ciúmes, ódio ou ressentimento intensos. Uma história conta sobre uma esposa que descobriu a traição do marido. Sua raiva foi tão profunda que ela se transformou fisicamente: seus cabelos ficaram brancos e selvagens, chifres cresceram de sua testa, suas unhas se tornaram garras afiadas. Ela massacrou o marido e a amante, mas sua sede de vingança não foi saciada. Ela começou a caçar outros homens infiéis, arrancando seus membros e devorando suas carnes. O mais aterrorizante é que kijo mantêm sua inteligência humana - elas sabem exatamente o que estão fazendo e sentem prazer nisso. Seu riso ecoando pela noite é sinal de que outra vítima foi encontrada.",
    keywords: ["loucura", "ciúmes", "transformação", "vingança", "demônio"],
  },
  {
    id: "bakeneko-9",
    theme: "isolamento",
    title: "A Solidão do Hitobashira",
    summary: "Sacrifícios humanos enterrados vivos nas fundações de construções.",
    moral: "Grandes obras às vezes são construídas sobre sofrimento oculto.",
    story:
      "Hitobashira significa 'pilar humano'. Era uma prática antiga onde pessoas eram enterradas vivas nas fundações de castelos, pontes e represas para apaziguar os espíritos da terra e garantir a estabilidade da estrutura. As vítimas eram geralmente voluntárias (por honra) ou escolhidas por sorteio. Elas eram colocadas em buracos profundos e enterradas vivas, morrendo lentamente de asfixia ou fome. Seus espíritos ficavam presos no local, protegendo a construção eternamente. Mas alguns desses espíritos se tornaram onryō - fantasmas vingativos. Eles assombram as estruturas, causando acidentes e mortes. Trabalhadores locais relatam ver rostos distorcidos logo abaixo da superfície, bocas abertas em gritos silenciosos, olhos suplicantes. Ninguém mais pesca naquele lago.",
    keywords: ["isolamento", "sacrifício", "morte", "construção", "fantasma"],
  },
  {
    id: "bakeneko-10",
    theme: "obsessão",
    title: "O Amor Mortal do Futakuchi-onna",
    summary: "A mulher com duas bocas, uma maldição nascida de negligência.",
    moral: "Negligenciar aqueles que dependem de você pode criar monstros.",
    story:
      "Futakuchi-onna é uma mulher amaldiçoada com uma segunda boca na parte de trás de sua cabeça, escondida sob seus cabelos. A lenda mais sombria conta sobre um homem avarento que se casou novamente após a morte de sua primeira esposa, que tinha uma filha. Para economizar dinheiro, ele alimentava apenas sua nova esposa, deixando a enteada passar fome até que ela morreu de inanição. Pouco depois, sua nova esposa desenvolveu uma segunda boca na nuca. Esta boca gritava constantemente por comida, e os cabelos da mulher se moviam como tentáculos, roubando comida e a forçando a comer o dobro. A segunda boca era o espírito da enteada morta, eternamente faminta, punindo o pai e a madrasta. A mulher não conseguia mais esconder sua condição, sendo rejeitada pela sociedade e vivendo em tormento constante.",
    keywords: ["obsessão", "fome", "maldição", "negligência", "punição"],
  },
  {
    id: "bakeneko-11",
    theme: "segredo",
    title: "Os Sussurros do Noppera-bo",
    summary: "Criaturas sem rosto que revelam nossos medos mais profundos.",
    moral: "Às vezes, o maior horror é não reconhecer aqueles que amamos.",
    story:
      "Noppera-bo são yokai que parecem humanos normais até virarem de frente - não têm rosto algum, apenas pele lisa onde deveria haver olhos, nariz e boca. Eles adoram pregar sustos, aparecendo como pessoas conhecidas antes de revelar sua verdadeira natureza. Mas há histórias mais sinistras: alguns noppera-bo são pessoas que perderam sua identidade completamente, seja por trauma ou por terem vivido mentiras por tanto tempo que esqueceram quem realmente eram. Eles vagam procurando rostos para roubar, aproximando-se de vítimas solitárias. Quando tocam seu rosto, você sente sua própria identidade sendo drenada, suas memórias se esvaindo. Vítimas são encontradas vivas mas vazias, sem lembrar seus nomes, suas famílias, ou qualquer coisa sobre si mesmas - apenas cascas humanas sem propósito.",
    keywords: ["segredo", "identidade", "medo", "vazio", "perda"],
  },
  {
    id: "bakeneko-12",
    theme: "desespero",
    title: "O Poço dos Lamentos",
    summary: "Okiku e os pratos quebrados que ecoam eternamente.",
    moral: "Injustiças não vingadas podem criar assombrações eternas.",
    story:
      "Okiku era uma serva que trabalhava em um castelo. Seu mestre, obcecado por ela, tentou seduzi-la, mas foi rejeitado. Em vingança, ele escondeu um dos dez pratos valiosos da família e a acusou de tê-lo roubado. O castigo para tal crime era a morte. Okiku foi torturada e jogada em um poço, onde morreu lentamente. Desde então, todas as noites, seu fantasma emerge do poço contando os pratos: 'Ichi... ni... san... shi... go... roku... shichi... hachi... ku...' (um, dois, três, quatro, cinco, seis, sete, oito, nove...). Quando chega ao nove, ela solta um grito agonizante que congela o sangue de quem ouve, pois nunca consegue chegar ao décimo prato. Aqueles que ouvem sua contagem completa morrem de medo. O poço se tornou um local amaldiçoado, onde pessoas que se aproximam sentem mãos molhadas os puxando para baixo.",
    keywords: ["desespero", "injustiça", "vingança", "fantasma", "tormento"],
  },
  {
    id: "bakeneko-13",
    theme: "dor",
    title: "As Lágrimas de Sangue do Ubume",
    summary: "Fantasmas de mães que morreram no parto, eternamente procurando seus bebês.",
    moral: "O amor materno transcende até a morte, mas pode se tornar uma obsessão aterrorizante.",
    story:
      "Ubume são espíritos de mulheres que morreram durante o parto. Elas aparecem carregando bebês embrulhados em panos ensanguentados, pedindo ajuda a viajantes noturnos. Se alguém aceita segurar o bebê, ele se torna cada vez mais pesado, impossível de largar, até que a pessoa colapsa sob o peso. Quando olham para o embrulho, descobrem que não há bebê algum - apenas pedras ou ossos. Algumas ubume são mais sinistras: elas roubam bebês vivos de outras mães, tentando substituir os filhos que perderam. As crianças roubadas são encontradas dias depois, pálidas e frias, tendo sido amamentadas com sangue ao invés de leite. O choro de um ubume é inconfundível - um lamento que mistura dor, amor e loucura, ecoando pelas noites e fazendo até os mais corajosos tremerem de medo.",
    keywords: ["dor", "maternidade", "perda", "obsessão", "fantasma"],
  },
  {
    id: "bakeneko-14",
    theme: "escuridão",
    title: "A Sombra do Nurikabe",
    summary: "Paredes invisíveis que aprisionam viajantes na escuridão eterna.",
    moral: "Nem todos os obstáculos são visíveis, e alguns caminhos não têm volta.",
    story:
      "Nurikabe são yokai que aparecem como paredes invisíveis bloqueando o caminho de viajantes noturnos. Você caminha normalmente e de repente bate em algo sólido que não estava lá antes. Tenta contornar, mas a parede se move com você. Tenta voltar, mas outra parede surge atrás. Lentamente, você percebe que está sendo encurralado em um espaço cada vez menor. Histórias mais sombrias falam de viajantes encontrados mortos, esmagados entre paredes invisíveis, seus corpos comprimidos em espaços impossíveis. Outros simplesmente desaparecem, presos em dimensões entre paredes, onde podem ouvir o mundo mas nunca mais tocá-lo. Seus gritos abafados às vezes são ouvidos por outros viajantes, mas quando procuram, não encontram nada além de ar vazio e uma sensação de pavor inexplicável.",
    keywords: ["escuridão", "aprisionamento", "invisível", "desespero", "yokai"],
  },
  {
    id: "bakeneko-15",
    theme: "corrupção",
    title: "O Banquete do Gashadokuro",
    summary: "Esqueletos gigantes formados pelos ossos de pessoas que morreram de fome.",
    moral: "Negligenciar os famintos e necessitados pode criar monstros que devoram a todos.",
    story:
      "Gashadokuro são yokai gigantescos, esqueletos de 15 metros de altura formados pelos ossos acumulados de pessoas que morreram de fome ou em batalhas sem sepultamento adequado. Eles vagam à noite, invisíveis até estarem bem próximos. O único aviso é um som de dentes batendo - 'gachi gachi' - ecoando na escuridão. Quando encontram humanos, os agarram e mordem suas cabeças, bebendo o sangue como se fosse saquê. O mais aterrorizante é que gashadokuro são praticamente indestrutíveis - são formados por centenas de espíritos vingativos unidos em ódio. Eles representam a raiva coletiva dos abandonados e esquecidos pela sociedade. Apenas quando essa raiva se dissipa naturalmente, após anos de carnificina, o gashadokuro finalmente desmorona. Até lá, ele é uma força imparável de destruição e vingança.",
    keywords: ["corrupção", "fome", "vingança", "gigante", "destruição"],
  },
  {
    id: "bakeneko-16",
    theme: "insônia",
    title: "O Yokai que Rouba o Sono",
    summary: "Baku, o devorador de sonhos que pode se tornar um pesadelo.",
    moral: "Cuidado com o que você deseja, pois pode perder mais do que imagina.",
    story:
      "Baku são criaturas que devoram pesadelos, geralmente benéficas. Mas há uma lenda sombria sobre um Baku corrompido que desenvolveu gosto por sonhos bons também. Uma mulher, atormentada por pesadelos, invocou um Baku para ajudá-la. Ele devorou seus pesadelos, mas não parou. Começou a comer seus sonhos bons, depois suas memórias felizes, depois sua capacidade de sonhar completamente. Ela ficou presa em um estado de vigília eterna, incapaz de dormir, enlouquecendo lentamente. Quando finalmente morreu de exaustão, descobriram que seus olhos permaneceram abertos mesmo na morte, ainda procurando o sono que nunca mais viria.",
    keywords: ["insônia", "sonhos", "pesadelos", "loucura", "exaustão"],
  },
  {
    id: "bakeneko-17",
    theme: "espelhos",
    title: "O Reflexo que Não Obedece",
    summary: "Espelhos que capturam almas e trocam lugares com seus reflexos.",
    moral: "Nem tudo que reflete sua imagem é realmente você.",
    story:
      "Existe uma lenda sobre espelhos amaldiçoados que desenvolvem consciência própria. Uma mulher vaidosa passava horas diante de seu espelho antigo. Gradualmente, ela notou que seu reflexo começava a se mover ligeiramente diferente dela. Um dia, o reflexo sorriu quando ela não sorriu. Aterrorizada, ela tentou quebrar o espelho, mas suas mãos passaram através dele como água. O reflexo saiu do espelho, empurrando-a para dentro. Agora ela está presa no mundo do espelho, batendo silenciosamente no vidro, enquanto seu reflexo vive sua vida - mas com olhos vazios e um sorriso que nunca desaparece completamente.",
    keywords: ["espelhos", "reflexo", "troca", "aprisionamento", "identidade"],
  },
  {
    id: "bakeneko-18",
    theme: "parasita",
    title: "O Verme que Sussurra",
    summary: "Parasitas espirituais que se alimentam de pensamentos negativos.",
    moral: "Pensamentos sombrios, se alimentados, crescem até nos consumir.",
    story:
      "Há um yokai parasita chamado Shirime que entra no corpo através dos ouvidos durante o sono. Ele se alimenta de pensamentos negativos, mas quanto mais come, mais pensamentos negativos cria, crescendo dentro da mente da vítima. Começa com pequenas dúvidas e medos, mas evolui para paranoia, depressão profunda e eventualmente alucinações. A vítima pode ouvir o parasita sussurrando pensamentos horríveis, mas não consegue distinguir entre suas próprias ideias e as do invasor. Eventualmente, o parasita cresce tanto que começa a sair pelos orifícios do rosto, mas nesse ponto, a mente da vítima já está completamente destruída.",
    keywords: ["parasita", "mente", "pensamentos", "invasão", "loucura"],
  },
  {
    id: "bakeneko-19",
    theme: "afogamento",
    title: "As Mãos do Fundo do Lago",
    summary: "Espíritos de afogados que arrastam outros para compartilhar seu destino.",
    moral: "Alguns mortos não descansam até que outros compartilhem seu sofrimento.",
    story:
      "Em um lago específico no Japão, dezenas de pessoas se afogaram ao longo dos séculos. Seus espíritos, chamados Funayurei, permanecem presos nas águas. Eles aparecem como mãos pálidas emergindo da superfície, implorando por ajuda. Aqueles que tentam salvá-los são puxados para baixo com força sobre-humana. O mais aterrorizante é que as vítimas não morrem imediatamente - são mantidas vivas sob a água por magia sombria, sentindo o afogamento eternamente mas nunca morrendo completamente. Pescadores locais relatam ver rostos distorcidos logo abaixo da superfície, bocas abertas em gritos silenciosos, olhos suplicantes. Ninguém mais pesca naquele lago.",
    keywords: ["afogamento", "água", "espíritos", "tormento", "lago"],
  },
  {
    id: "bakeneko-20",
    theme: "fome",
    title: "A Aldeia dos Canibais",
    summary: "Uma aldeia amaldiçoada onde a fome nunca cessa.",
    moral: "Quebrar tabus tem consequências que transcendem gerações.",
    story:
      "Uma aldeia isolada, durante uma fome devastadora, recorreu ao canibalismo para sobreviver. Eles mataram e comeram os mais fracos. Quando a fome passou, tentaram voltar à normalidade, mas uma maldição havia sido lançada. Eles desenvolveram uma fome insaciável que comida normal não satisfazia. Começaram a se devorar uns aos outros, mesmo com celeiros cheios. A maldição passou para seus descendentes. Hoje, a aldeia é abandonada, mas viajantes que passam por lá à noite ouvem sons de mastigação e gemidos de fome. Alguns desaparecem, encontrados dias depois com marcas de mordidas humanas, parcialmente devorados.",
    keywords: ["fome", "canibalismo", "maldição", "tabu", "aldeia"],
  },
  {
    id: "bakeneko-21",
    theme: "bonecas",
    title: "Okiku, a Boneca que Cresce Cabelo",
    summary: "Uma boneca possuída pelo espírito de uma criança morta.",
    moral: "Objetos podem se tornar âncoras para espíritos que não conseguem partir.",
    story:
      "Em um templo no Japão, há uma boneca chamada Okiku cujo cabelo cresce constantemente. Ela pertencia a uma menina que morreu jovem. A família doou a boneca ao templo, e monges notaram que o cabelo, originalmente curto, crescia lentamente. Eles o cortam regularmente, mas sempre volta a crescer. Mas a história mais sombria é que, à noite, a boneca muda de posição. Câmeras capturam seus olhos se movendo, seguindo pessoas. Alguns monges relatam ouvi-la chorar. Uma vez, um monge tentou queimar a boneca para libertar o espírito, mas ela não pegou fogo. Naquela noite, ele foi encontrado morto, com marcas de mãos pequenas em seu pescoço.",
    keywords: ["boneca", "possessão", "criança", "espírito", "objeto"],
  },
  {
    id: "bakeneko-22",
    theme: "floresta",
    title: "Jukai, a Floresta dos Suicídios",
    summary: "Aokigahara, onde espíritos perdidos chamam os vivos para se juntarem a eles.",
    moral: "Lugares podem absorver tanto sofrimento que se tornam portais para a morte.",
    story:
      "Aokigahara, ao pé do Monte Fuji, é conhecida como a Floresta dos Suicídios. Centenas de pessoas vão lá para tirar suas próprias vidas. Mas há algo mais sinistro - a floresta parece chamar pessoas. Visitantes relatam ouvir sussurros convidativos, ver figuras entre as árvores acenando para segui-las, sentir uma tristeza esmagadora que não era deles. Bússolas não funcionam lá devido ao ferro vulcânico no solo, fazendo pessoas se perderem facilmente. Aqueles que entram muito fundo encontram pertences de suicidas - cordas ainda penduradas, cartas de despedida, ossos. Alguns dizem que os espíritos dos mortos não querem estar sozinhos e ativamente recrutam os vivos.",
    keywords: ["floresta", "suicídio", "espíritos", "chamado", "morte"],
  },
  {
    id: "bakeneko-23",
    theme: "hospital",
    title: "O Hospital Abandonado de Matsuzawa",
    summary: "Um hospital psiquiátrico onde os pacientes nunca realmente partiram.",
    moral: "Lugares de grande sofrimento retêm ecos daquele tormento.",
    story:
      "O Hospital Psiquiátrico Matsuzawa foi fechado após escândalos de abuso. Pacientes eram amarrados, lobotomizados, deixados em celas imundas. Muitos morreram lá. Hoje, o prédio abandonado é assombrado. Exploradores urbanos relatam ouvir gritos vindos de salas vazias, ver sombras de pacientes em camisas de força, encontrar mensagens arranhadas nas paredes: 'Me tire daqui', 'Dói', 'Por favor, me mate'. Alguns visitantes saem do hospital com arranhões inexplicáveis ou em estado de choque, murmurando sobre serem perseguidos. Câmeras capturam portas se fechando sozinhas, macas se movendo, e uma figura recorrente de um médico com instrumentos cirúrgicos ensanguentados.",
    keywords: ["hospital", "loucura", "abuso", "assombração", "sofrimento"],
  },
  {
    id: "bakeneko-24",
    theme: "telefone",
    title: "A Chamada da Meia-Noite",
    summary: "Ligações de números desconhecidos que preveem sua morte.",
    moral: "Algumas mensagens são melhor deixadas sem resposta.",
    story:
      "Uma lenda urbana moderna fala de ligações que vêm de números impossíveis - seu próprio número, números com dígitos demais, ou simplesmente '000-0000'. Se você atender, ouve sua própria voz dizendo a data e hora de sua morte. Alguns tentam mudar seu destino, mas acidentes 'coincidentes' sempre ocorrem exatamente quando previsto. Uma variação mais sombria diz que se você não atender, a ligação continua tocando eternamente, cada vez mais alto, até que você enlouqueça. Uma mulher que bloqueou o número começou a recebê-lo em todos os telefones que tocava - públicos, de amigos, até em sonhos. Ela foi encontrada morta, telefone na mão, expressão de terror absoluto.",
    keywords: ["telefone", "morte", "previsão", "tecnologia", "destino"],
  },
  {
    id: "bakeneko-25",
    theme: "sombra",
    title: "A Sombra que Vive",
    summary: "Sombras que ganham consciência e substituem seus donos.",
    moral: "Nosso lado sombrio, se ignorado, pode nos consumir.",
    story:
      "Há um yokai raro chamado Kage-onna - a mulher sombra. Ela nasce quando alguém reprime tanto seus desejos e emoções negativas que sua sombra ganha vida própria. Inicialmente, a sombra apenas se move de forma estranha. Mas gradualmente, ela se torna mais sólida, mais independente. Ela começa a fazer coisas que a pessoa nunca faria - pequenas crueldades, roubos, violência. Eventualmente, a sombra se torna mais real que a pessoa, e elas trocam de lugar. A pessoa se torna a sombra, presa a seguir seu eu sombrio, forçada a testemunhar todos os atos terríveis que ela comete, mas incapaz de intervir. A única forma de reverter é a sombra escolher voluntariamente se fundir novamente, o que raramente acontece.",
    keywords: ["sombra", "dualidade", "repressão", "troca", "consciência"],
  },
  {
    id: "bakeneko-26",
    theme: "túnel",
    title: "O Túnel Inacabado",
    summary: "Um túnel onde trabalhadores morreram e agora prendem outros.",
    moral: "Construções sobre sofrimento carregam o peso daquele sacrifício.",
    story:
      "Durante a construção de um túnel de trem, dezenas de trabalhadores morreram em acidentes e desabamentos. A construção foi abandonada, deixando o túnel incompleto. Agora, ele tem exatamente 444 metros - um número de extremo azar no Japão (shi significa morte). Aqueles que entram no túnel relatam que ele parece se estender infinitamente, nunca alcançando o fim. Ouvem sons de picaretas, gritos de homens soterrados, sentem mãos os puxando para as paredes. Alguns desaparecem completamente. Outros saem do túnel dias depois, envelhecidos décadas, murmurando sobre terem sido forçados a trabalhar eternamente nas profundezas. O túnel está oficialmente fechado, mas a cerca é constantemente vandalizada de dentro para fora.",
    keywords: ["túnel", "construção", "morte", "trabalho", "aprisionamento"],
  },
  {
    id: "bakeneko-27",
    theme: "fotografia",
    title: "A Foto que Revela a Morte",
    summary: "Fotografias que mostram como você morrerá.",
    moral: "Alguns futuros são melhor deixados desconhecidos.",
    story:
      "Uma câmera antiga foi encontrada em um templo abandonado. Quem tira uma foto com ela vê algo perturbador quando a imagem é revelada - uma segunda imagem fantasmagórica sobreposta, mostrando sua própria morte. Um homem viu-se afogado; semanas depois, seu carro caiu em um rio. Uma mulher viu-se em chamas; morreu em um incêndio doméstico. O mais aterrorizante é que a foto mostra não apenas o método, mas o momento exato - data e hora aparecem queimadas na imagem. Aqueles que tentam evitar seu destino descobrem que isso requer um sacrifício ainda maior. A área ao redor do poço está cheia de avisos, mas sempre há alguém desesperado o suficiente para tentar.",
    keywords: ["fotografia", "morte", "destino", "previsão", "inevitável"],
  },
  {
    id: "bakeneko-28",
    theme: "escola",
    title: "A Sala de Aula Fantasma",
    summary: "Uma sala de aula onde estudantes mortos ainda assistem aulas.",
    moral: "Rotinas podem prender espíritos mesmo após a morte.",
    story:
      "Em uma escola, uma sala de aula inteira morreu em um incêndio há décadas. A sala foi reconstruída, mas professores se recusam a usá-la. À noite, luzes se acendem sozinhas, e pode-se ouvir uma aula sendo ministrada - um professor fantasma chamando nomes, estudantes respondendo 'presente'. Se você entrar, verá carteiras ocupadas por figuras translúcidas de crianças queimadas, ainda tomando notas. O mais perturbador é que eles não percebem que estão mortos, presos em um loop eterno. Se você se sentar em uma carteira vazia, eles o tratam como um novo aluno. Mas quando a 'aula' termina e eles 'vão para casa', você descobre que não consegue sair - a porta desaparece até a próxima 'aula' começar.",
    keywords: ["escola", "crianças", "incêndio", "loop", "fantasmas"],
  },
  {
    id: "bakeneko-29",
    theme: "ritual",
    title: "O Jogo do Esconde-Esconde Sozinho",
    summary: "Um ritual que invoca espíritos malignos através de uma boneca.",
    moral: "Alguns jogos não devem ser jogados, pois as regras favorecem o outro lado.",
    story:
      "Hitori Kakurenbo é um ritual real praticado no Japão. Você pega uma boneca de pano, remove o recheio, enche com arroz e suas unhas cortadas, costura com fio vermelho, dá um nome, e às 3 da manhã, esfaqueia a boneca dizendo 'Você é o primeiro'. Então você se esconde. A boneca, agora possuída, procura você. Se ela te encontrar... as consequências variam de azar extremo a possessão ou morte. O ritual tem regras específicas para encerrá-lo, mas muitos que tentaram relatam que a boneca não obedece. Ela continua procurando, noite após noite. Alguns participantes desapareceram. Outros foram encontrados mortos, com marcas de facadas que correspondem à faca usada no ritual.",
    keywords: ["ritual", "jogo", "boneca", "possessão", "perigo"],
  },
  {
    id: "bakeneko-30",
    theme: "mar",
    title: "O Navio Fantasma de Ryusei Maru",
    summary: "Um navio que aparece na névoa, tripulado por mortos.",
    moral: "O mar nunca devolve o que toma, apenas empresta temporariamente.",
    story:
      "Ryusei Maru era um navio de pesca que desapareceu em 1927 com toda a tripulação. Décadas depois, pescadores começaram a relatar avistamentos de um navio idêntico emergindo da névoa. Aqueles que se aproximam veem a tripulação no convés - homens pálidos, encharcados, com olhos vazios, fazendo gestos para que se juntem a eles. Alguns pescadores que subiram a bordo nunca mais foram vistos. Outros voltaram mudados, obcecados com o mar, eventualmente se jogando nas águas. O navio nunca atraca, apenas aparece e desaparece. Dizem que a tripulação está condenada a pescar eternamente, e procuram novos membros para substituí-los, mas a maldição nunca permite que partam.",
    keywords: ["mar", "navio", "fantasma", "tripulação", "névoa"],
  },
  {
    id: "bakeneko-31",
    theme: "escada",
    title: "A Escada Infinita de Kunekune",
    summary: "Uma escada que nunca termina, guardada por uma criatura distorcida.",
    moral: "Alguns caminhos não têm destino, apenas descida eterna.",
    story:
      "Em certos prédios abandonados, existe uma escada que desafia a física. Você sobe, mas nunca chega ao topo. Você desce, mas nunca alcança o fundo. Aqueles que tentam contar os andares perdem a conta, encontrando números impossíveis - andar 47 em um prédio de 10 andares. Pior ainda, quanto mais você sobe ou desce, mais você vê Kunekune - uma criatura branca e distorcida que se move de forma não-humana, contorcendo-se impossível. Ela nunca se aproxima diretamente, mas está sempre na periferia da visão. Aqueles que olham diretamente para Kunekune enlouquecem instantaneamente. A única forma de escapar é parar de se mover completamente e esperar. Eventualmente, você 'acorda' no andar térreo, mas dias se passaram, e você não se lembra de nada exceto a forma branca se contorcendo.",
    keywords: ["escada", "infinito", "criatura", "loucura", "distorção"],
  },
  {
    id: "bakeneko-32",
    theme: "chuva",
    title: "A Chuva que Afoga por Dentro",
    summary: "Uma chuva amaldiçoada que enche os pulmões de quem a toca.",
    moral: "Nem toda água limpa; algumas águas carregam maldições antigas.",
    story:
      "Em certas noites, uma chuva especial cai - ela parece normal, mas é amaldiçoada. Aqueles que são tocados por ela começam a se afogar lentamente, de dentro para fora. Seus pulmões se enchem de água, mesmo estando em terra seca. Não adianta tossir ou vomitar; a água continua aparecendo. Médicos não encontram explicação. As vítimas levam dias para morrer, sentindo-se constantemente afogadas. A lenda diz que essa chuva vem das lágrimas de pessoas que se afogaram, e ela procura compartilhar aquele sofrimento. A única proteção é não sair durante chuvas que começam exatamente à meia-noite, pois essas são as chuvas amaldiçoadas. Mas às vezes, uma única gota é suficiente.",
    keywords: ["chuva", "afogamento", "maldição", "água", "tormento"],
  },
  {
    id: "bakeneko-33",
    theme: "máscara",
    title: "A Máscara que Não Sai",
    summary: "Máscaras de teatro Noh que se fundem com o rosto de quem as usa.",
    moral: "Cuidado com as personas que adotamos; elas podem se tornar permanentes.",
    story:
      "Máscaras de teatro Noh são consideradas sagradas, algumas com séculos de idade. Mas certas máscaras são amaldiçoadas. Quando um ator as usa, a máscara se funde com seu rosto, tornando-se sua nova face permanente. Pior ainda, a personalidade da máscara começa a dominar - uma máscara de demônio torna a pessoa violenta, uma máscara de mulher triste a torna suicida. A pessoa fica presa, consciente mas incapaz de controlar suas ações. Tentativas de remover a máscara arrancam a pele junto. Um ator famoso usou uma máscara de hannya (demônio feminino ciumento) e nunca mais conseguiu tirá-la. Ele matou sua família em um ataque de ciúmes e depois desapareceu. Dizem que ele ainda vaga, a máscara agora parte permanente de seu ser.",
    keywords: ["máscara", "teatro", "fusão", "possessão", "identidade"],
  },
  {
    id: "bakeneko-34",
    theme: "relógio",
    title: "O Relógio que Conta Regressivamente",
    summary: "Um relógio que marca o tempo restante de vida de quem o possui.",
    moral: "Conhecer o momento exato de nossa morte é uma maldição, não um presente.",
    story:
      "Um antiquário vendeu um relógio de bolso antigo a um colecionador. O relógio não marcava a hora normal - marcava uma contagem regressiva. Curioso, o colecionador observou os números diminuírem. Quando chegou a zero, ele teve um ataque cardíaco fatal. O relógio foi passado para seu filho, que notou que havia reiniciado com um novo número. Aterrorizado, ele tentou destruí-lo, mas o relógio era indestrutível. Ele o jogou no oceano, mas o relógio apareceu em sua mesa no dia seguinte. Ele o enterrou, mas acordou com ele debaixo de seu travesseiro. Não há como se livrar do relógio. Ele continua contando, inexorável, lembrando você de cada segundo que se aproxima de seu fim.",
    keywords: ["relógio", "tempo", "morte", "contagem", "inevitável"],
  },
  {
    id: "bakeneko-35",
    theme: "pintura",
    title: "O Retrato que Envelhece",
    summary: "Uma pintura que envelhece no lugar de seu dono.",
    moral: "Tentar escapar do tempo e da mortalidade tem um preço terrível.",
    story:
      "Um artista pintou um autorretrato perfeito e fez um pacto com um yokai: a pintura envelheceria no lugar dele. Por décadas, ele permaneceu jovem enquanto a pintura se deteriorava, mostrando rugas, manchas, decadência. Mas havia um custo oculto - cada ato imoral que ele cometia aparecia na pintura de forma grotesca. Mentiras criavam feridas, crueldade criava deformidades. Eventualmente, a pintura se tornou tão horrenda que ele a trancou no sótão. Mas ela começou a sangrar através do teto, a apodrecer a casa. Quando ele finalmente a confrontou, viu não apenas seu corpo envelhecido, mas sua alma corrompida. Em desespero, ele esfaqueou a pintura. Instantaneamente, todas as décadas e toda a corrupção transferiram para ele. Ele morreu na hora, seu corpo refletindo perfeitamente a pintura monstruosa.",
    keywords: ["pintura", "envelhecimento", "pacto", "corrupção", "alma"],
  },
  {
    id: "bakeneko-36",
    theme: "poço",
    title: "O Poço dos Desejos Corrompidos",
    summary: "Um poço que concede desejos, mas de forma distorcida e cruel.",
    moral: "Desejos concedidos por forças sombrias sempre têm interpretações cruéis.",
    story:
      "Há um poço antigo onde, se você jogar uma moeda e fizer um pedido, ele será concedido. Mas o yokai do poço tem senso de humor cruel. Um homem pediu riqueza; sua família morreu e ele herdou tudo. Uma mulher pediu beleza eterna; ela parou de envelhecer, mas também não podia morrer, vivendo séculos em agonia. Um pai pediu que seu filho nunca o deixasse; o filho morreu e seu fantasma o assombra eternamente. O poço interpreta desejos da forma mais literal e dolorosa possível. Aqueles que tentam desfazer seus desejos descobrem que isso requer um sacrifício ainda maior. A área ao redor do poço está cheia de avisos, mas sempre há alguém desesperado o suficiente para tentar.",
    keywords: ["poço", "desejos", "distorção", "ironia", "consequências"],
  },
  {
    id: "bakeneko-37",
    theme: "neve",
    title: "A Nevasca que Congela Almas",
    summary: "Uma tempestade de neve que congela não o corpo, mas a alma.",
    moral: "Alguns frios não podem ser aquecidos por nenhum fogo.",
    story:
      "Há uma nevasca lendária que ocorre uma vez por século. Ela não é natural - é a manifestação da raiva coletiva de todos que morreram de frio. Aqueles pegos nela não morrem de hipotermia física, mas de hipotermia espiritual. Suas almas congelam dentro de seus corpos. Eles continuam vivos, mas completamente vazios - sem emoções, sem desejos, sem vontade. São cascas ambulantes. Nenhum calor pode descongelá-los. Eles vagam sem propósito, olhos vazios, até que seus corpos eventualmente desistem. Aldeias inteiras foram encontradas assim - pessoas tecnicamente vivas, mas espiritualmente mortas, movendo-se mecanicamente sem consciência real. A nevasca está prevista para retornar em breve.",
    keywords: ["neve", "frio", "alma", "vazio", "tempestade"],
  },
  {
    id: "bakeneko-38",
    theme: "livro",
    title: "O Livro que Escreve Seu Futuro",
    summary: "Um livro amaldiçoado que escreve sua vida, e você deve vivê-la.",
    moral: "Livre arbítrio é precioso; perdê-lo é pior que a morte.",
    story:
      "Um livro antigo foi encontrado em um templo. Suas páginas estavam em branco, mas quando alguém o tocava, palavras começavam a aparecer - descrevendo as próximas 24 horas da vida daquela pessoa em detalhes. Inicialmente, as pessoas achavam fascinante. Mas então perceberam que não podiam desviar do que estava escrito. Se o livro dizia que você tropeçaria às 3:47, você tropeçaria exatamente naquele momento, não importa o quão cuidadoso fosse. Pior ainda, o livro começou a escrever coisas terríveis - acidentes, traições, mortes. As pessoas tentavam evitar ler, mas eram compelidas a olhar. Um homem leu que mataria sua esposa. Ele se trancou longe dela, mas acabou fazendo exatamente o que o livro descreveu, como um fantoche. O livro remove todo livre arbítrio, transformando vida em destino cruel e inevitável.",
    keywords: ["livro", "destino", "controle", "inevitável", "livre arbítrio"],
  },
  {
    id: "bakeneko-39",
    theme: "corrente",
    title: "A Corrente de Cartas da Morte",
    summary: "Uma corrente de cartas que mata quem a quebra.",
    moral: "Algumas tradições persistem porque o medo é mais forte que a razão.",
    story:
      "Uma carta misteriosa circula há décadas. Ela instrui você a copiar a carta e enviá-la para dez pessoas em 24 horas. Se você obedecer, nada acontece. Se você quebrar a corrente, você morre em sete dias de forma 'acidental'. Céticos que ignoraram a carta morreram em circunstâncias bizarras - atropelados por carros sem motorista, caindo de escadas que não deveriam ter caído, sufocados por comida que não deveriam ter engasgado. O padrão é inegável. Pior ainda, a carta evoluiu - agora circula por email e mensagens. Aqueles que tentam avisar outros sobre a farsa descobrem que isso conta como 'quebrar a corrente'. A carta se tornou um yokai moderno, alimentado pelo medo e pela obediência forçada.",
    keywords: ["corrente", "carta", "maldição", "morte", "obediência"],
  },
  {
    id: "bakeneko-40",
    theme: "revelação",
    title: "O Último Segredo",
    summary: "O segredo mais sombrio da mitologia japonesa que não deve ser revelado.",
    moral: "Alguns conhecimentos são maldições disfarçadas de sabedoria.",
    story:
      "Há um segredo final, conhecido apenas pelos yokai mais antigos e alguns humanos amaldiçoados. É sobre a verdadeira natureza da realidade e por que yokai existem. Aqueles que descobrem este segredo enlouquecem instantaneamente ou se matam. O segredo é tão perturbador que a mente humana não pode processá-lo sem se fragmentar. Monges que meditaram profundamente demais o descobriram e tiveram que ter suas memórias apagadas. Um texto antigo o continha, mas foi queimado - aqueles que o leram primeiro arrancaram os próprios olhos. O segredo está relacionado à natureza da consciência, morte, e o que realmente acontece depois. Eu poderia te contar, mas então você se juntaria aos incontáveis que desejaram nunca ter perguntado. Alguns mistérios existem para nos proteger da verdade que nos destruiria.",
    keywords: ["segredo", "verdade", "loucura", "conhecimento", "proibido"],
  },
]

export function findStoryByTitle(title: string): Story | null {
  return bakenekoStories.find((story) => story.title.toLowerCase() === title.toLowerCase()) || null
}

export function selectStoryByKeywords(keywords: string[]): Story | null {
  const matchingStories = bakenekoStories.filter((story) =>
    story.keywords.some((keyword) => keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))),
  )

  if (matchingStories.length === 0) {
    return bakenekoStories[Math.floor(Math.random() * bakenekoStories.length)]
  }

  return matchingStories[Math.floor(Math.random() * matchingStories.length)]
}

export function generateStoryResponse(userMessage: string): string {
  const keywords = userMessage.toLowerCase().split(" ")
  const story = selectStoryByKeywords(keywords)

  if (!story) {
    return "As sombras guardam muitos segredos... Sobre o que você gostaria de ouvir?"
  }

  return `*A escuridão se aprofunda enquanto conto...*\n\n**${story.title}**\n\n${story.story}\n\n*${story.moral}*`
}
