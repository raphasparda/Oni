// Histórias inspiradoras e sábias da mitologia japonesa

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
    id: "kitsune-1",
    theme: "esperança",
    title: "A Raposa e o Pescador",
    summary: "Uma história sobre como a bondade é sempre recompensada.",
    moral: "A compaixão que oferecemos ao mundo retorna para nós de formas inesperadas.",
    story:
      "Havia um pescador pobre que, ao lançar suas redes, capturou uma raposa branca presa em algas. Em vez de vendê-la, ele a libertou com cuidado. Anos depois, quando uma tempestade destruiu seu barco e ele estava à beira da ruína, uma mulher misteriosa apareceu oferecendo-lhe um mapa para os melhores locais de pesca. Graças a ela, o pescador prosperou. Apenas no final de sua vida ele descobriu que a mulher era a raposa que havia salvado, agora uma kitsune de nove caudas, retribuindo sua bondade.",
    keywords: ["esperança", "bondade", "gratidão", "recompensa", "compaixão"],
  },
  {
    id: "kitsune-2",
    theme: "amor",
    title: "O Casamento da Raposa",
    summary: "Uma história sobre amor verdadeiro que transcende formas.",
    moral: "O amor verdadeiro vê além das aparências e aceita a essência do outro.",
    story:
      "Um jovem samurai se apaixonou por uma mulher de beleza incomparável que encontrou na floresta. Eles se casaram e viveram felizes por anos. Uma noite, ele acordou e a viu em sua forma verdadeira - uma kitsune de cinco caudas. Assustado inicialmente, ele percebeu que era a mesma pessoa gentil e amorosa que conhecia. Quando ela ofereceu partir para poupá-lo da vergonha, ele segurou sua mão e disse: 'Você é minha esposa, não importa a forma'. Sua aceitação permitiu que ela ganhasse mais caudas, e eles viveram juntos até o fim de seus dias.",
    keywords: ["amor", "aceitação", "verdade", "casamento", "transformação"],
  },
  {
    id: "kitsune-3",
    theme: "paciência",
    title: "A Raposa e o Monge",
    summary: "Como a paciência e a sabedoria superam a pressa e a força.",
    moral: "A verdadeira sabedoria não está em vencer rapidamente, mas em compreender profundamente.",
    story:
      "Um monge budista meditava diariamente sob uma árvore sagrada. Uma jovem kitsune, curiosa sobre a iluminação, tentava distraí-lo com truques e ilusões. Por anos, o monge simplesmente sorria e continuava sua meditação. Frustrada, a kitsune finalmente perguntou por que ele nunca se irritava. O monge respondeu: 'Porque vejo que você busca o mesmo que eu - compreensão'. Tocada por suas palavras, a kitsune se tornou sua aluna, e juntos alcançaram grande sabedoria.",
    keywords: ["paciência", "sabedoria", "meditação", "compreensão", "iluminação"],
  },
  {
    id: "kitsune-4",
    theme: "natureza",
    title: "A Guardiã da Floresta",
    summary: "Uma kitsune protege a harmonia entre humanos e natureza.",
    moral: "Respeitar a natureza é respeitar a nós mesmos, pois somos parte dela.",
    story:
      "Em uma aldeia próxima a uma floresta antiga, os moradores começaram a cortar árvores sem controle. Uma kitsune branca apareceu aos anciãos em sonhos, alertando sobre as consequências. Quando ignoraram seus avisos, a floresta começou a definhar, e com ela, as colheitas da aldeia. Desesperados, os aldeões pediram perdão. A kitsune ensinou-lhes a plantar duas árvores para cada uma cortada e a agradecer à floresta por seus presentes. A harmonia foi restaurada, e a aldeia prosperou em equilíbrio com a natureza.",
    keywords: ["natureza", "equilíbrio", "respeito", "harmonia", "proteção"],
  },
  {
    id: "kitsune-5",
    theme: "coragem",
    title: "A Raposa e o Dragão",
    summary: "Coragem não é ausência de medo, mas agir apesar dele.",
    moral: "A verdadeira coragem vem de proteger aqueles que amamos.",
    story:
      "Quando um dragão furioso ameaçou destruir uma aldeia, todos fugiram - exceto uma pequena kitsune de três caudas. Ela sabia que não era páreo para o dragão, mas a aldeia havia sido gentil com ela. Usando sua inteligência, ela criou ilusões de mil raposas cercando o dragão, fazendo-o acreditar que enfrentava um exército. Impressionado pela coragem da pequena kitsune em defender os humanos, o dragão se acalmou e partiu em paz. A kitsune ganhou mais uma cauda naquele dia, não por poder, mas por bravura.",
    keywords: ["coragem", "proteção", "inteligência", "bravura", "sacrifício"],
  },
  {
    id: "kitsune-6",
    theme: "sabedoria",
    title: "As Três Perguntas",
    summary: "Uma kitsune anciã ensina o verdadeiro significado da sabedoria.",
    moral: "A sabedoria não está em ter todas as respostas, mas em fazer as perguntas certas.",
    story:
      "Um jovem guerreiro procurou uma kitsune de nove caudas para obter sabedoria. Ela disse que responderia apenas três perguntas. Ele perguntou: 'Como posso ser o mais forte?' Ela respondeu: 'Sendo gentil'. 'Como posso ser o mais rico?' 'Sendo generoso'. Confuso, ele usou sua última pergunta: 'Como essas respostas fazem sentido?' A kitsune sorriu: 'Força sem gentileza é tirania. Riqueza sem generosidade é prisão. Você acabou de aprender que questionar suas próprias crenças é o início da verdadeira sabedoria'.",
    keywords: ["sabedoria", "perguntas", "compreensão", "paradoxo", "iluminação"],
  },
  {
    id: "kitsune-7",
    theme: "perdão",
    title: "A Raposa e o Caçador",
    summary: "O poder transformador do perdão.",
    moral: "O perdão liberta tanto quem perdoa quanto quem é perdoado.",
    story:
      "Um caçador matou acidentalmente uma kitsune jovem, sem saber que ela era mágica. A mãe kitsune, poderosa e antiga, poderia ter se vingado facilmente. Em vez disso, ela apareceu ao caçador em seus sonhos, mostrando-lhe a dor da perda. O caçador, devastado pelo remorso, dedicou sua vida a proteger as raposas da floresta. Anos depois, quando ele estava velho e doente, a kitsune apareceu novamente, não para punir, mas para agradecer. Seu perdão havia transformado um caçador em um guardião, salvando inúmeras vidas.",
    keywords: ["perdão", "redenção", "transformação", "compaixão", "cura"],
  },
  {
    id: "kitsune-8",
    theme: "amizade",
    title: "Duas Almas, Dois Mundos",
    summary: "Uma amizade improvável entre uma kitsune e uma criança humana.",
    moral: "As amizades mais verdadeiras transcendem todas as diferenças.",
    story:
      "Uma menina solitária costumava brincar na floresta, onde conheceu uma raposa branca. Elas se tornaram amigas inseparáveis, compartilhando segredos e aventuras. Quando a menina cresceu e precisou se casar e deixar a aldeia, ela chorou, pensando que nunca mais veria sua amiga. No dia do casamento, uma dama de honra misteriosa apareceu - era a kitsune em forma humana. Ela sussurrou: 'Amizade verdadeira não conhece distância'. Por toda a vida da mulher, em momentos importantes, uma raposa branca sempre aparecia nas proximidades.",
    keywords: ["amizade", "lealdade", "infância", "conexão", "eternidade"],
  },
  {
    id: "kitsune-9",
    theme: "humildade",
    title: "A Raposa Orgulhosa",
    summary: "Uma lição sobre os perigos do orgulho e o valor da humildade.",
    moral: "O verdadeiro poder vem da humildade, não da arrogância.",
    story:
      "Uma kitsune de sete caudas era tão orgulhosa de seus poderes que desafiava todos os yokai que encontrava. Um dia, ela encontrou uma simples raposa de uma cauda e riu de sua fraqueza. A raposa jovem não se ofendeu, apenas disse: 'Você tem sete caudas, mas eu tenho algo que você perdeu - a capacidade de aprender'. Intrigada, a kitsune orgulhosa seguiu a jovem e observou como ela ajudava humanos e animais com seus pequenos poderes. Envergonhada, a kitsune de sete caudas percebeu que havia desperdiçado séculos em vaidade. Ela se tornou humilde e, paradoxalmente, ganhou sua oitava cauda.",
    keywords: ["humildade", "orgulho", "aprendizado", "crescimento", "sabedoria"],
  },
  {
    id: "kitsune-10",
    theme: "família",
    title: "O Legado das Nove Caudas",
    summary: "Uma kitsune anciã passa sua sabedoria para a próxima geração.",
    moral: "Nossa maior herança não é o que deixamos, mas quem ensinamos.",
    story:
      "Uma kitsune de nove caudas, sentindo que seu tempo estava chegando ao fim, reuniu suas filhas. Em vez de dividir seus poderes, ela contou histórias de cada cauda que havia ganhado - cada uma representando uma lição de vida. A primeira cauda veio da curiosidade, a segunda da bondade, a terceira da paciência, e assim por diante. Ela explicou que poderes podem ser herdados, mas sabedoria deve ser vivida. Suas filhas compreenderam que o verdadeiro legado não eram as caudas mágicas, mas as lições que as conquistaram.",
    keywords: ["família", "legado", "sabedoria", "ensino", "gerações"],
  },
  {
    id: "kitsune-11",
    theme: "transformação",
    title: "A Jornada das Mil Formas",
    summary: "Uma kitsune aprende que a verdadeira identidade está além das aparências.",
    moral: "Podemos mudar de forma mil vezes, mas nossa essência permanece.",
    story:
      "Uma jovem kitsune estava obcecada em dominar transformações, mudando de forma constantemente. Ela se tornou tão boa nisso que começou a esquecer sua forma verdadeira. Perdida e confusa, ela procurou uma kitsune anciã que lhe disse: 'Você pode se transformar em qualquer coisa, mas isso não muda quem você é por dentro'. A jovem kitsune passou um ano meditando em sua forma original, reconectando-se com sua essência. Quando finalmente voltou a se transformar, ela o fazia com propósito e sabedoria, nunca mais perdendo de vista sua verdadeira natureza.",
    keywords: ["transformação", "identidade", "essência", "autoconhecimento", "propósito"],
  },
  {
    id: "kitsune-12",
    theme: "gratidão",
    title: "O Presente da Chuva",
    summary: "Uma aldeia aprende a valorizar as bênçãos que já possui.",
    moral: "A gratidão transforma o que temos em suficiente.",
    story:
      "Durante uma seca terrível, uma aldeia implorou a uma kitsune por chuva. Ela concordou, mas com uma condição: por um mês, cada pessoa deveria agradecer por três coisas ao amanhecer. Céticos, mas desesperados, os aldeões concordaram. Nos primeiros dias, foi difícil encontrar motivos para gratidão. Mas gradualmente, eles começaram a notar pequenas bênçãos - um sorriso, uma mão amiga, a sombra de uma árvore. No final do mês, a chuva veio, mas os aldeões perceberam que já haviam encontrado abundância na gratidão.",
    keywords: ["gratidão", "abundância", "perspectiva", "bênçãos", "comunidade"],
  },
  {
    id: "kitsune-13",
    theme: "esperança",
    title: "A Última Flor de Cerejeira",
    summary: "Mesmo na escuridão mais profunda, a esperança floresce.",
    moral: "A esperança não é negar a escuridão, mas acender uma luz dentro dela.",
    story:
      "Após uma guerra devastadora, uma aldeia estava em ruínas e seus habitantes sem esperança. Todas as cerejeiras sagradas haviam sido queimadas, exceto uma muda frágil que uma kitsune havia protegido. Ela plantou a muda no centro da aldeia e disse: 'Esta árvore florescerá quando vocês voltarem a acreditar'. Os aldeões, inicialmente céticos, começaram a cuidar da muda juntos. Lentamente, enquanto regavam a árvore, também regavam a esperança uns nos outros. Quando a tempestade finalmente passou, a cerejeira floresceu magnificamente, e com ela, a aldeia renasceu.",
    keywords: ["esperança", "renovação", "comunidade", "fé", "reconstrução"],
  },
  {
    id: "kitsune-14",
    theme: "aventura",
    title: "A Raposa e o Mar",
    summary: "Uma kitsune descobre que a maior aventura é descobrir a si mesma.",
    moral: "A jornada externa nos prepara para a jornada interna.",
    story:
      "Uma kitsune jovem e inquieta sonhava em ver o mar. Contra os conselhos dos anciãos, ela partiu em uma longa jornada. Pelo caminho, enfrentou tempestades, atravessou montanhas e ajudou muitos em necessidade. Quando finalmente chegou ao oceano, ela percebeu que a vista era magnífica, mas a verdadeira recompensa eram as experiências e o crescimento da jornada. Ela havia partido como uma kitsune curiosa e retornou como uma sábia. O mar lhe ensinou que o destino é importante, mas o caminho é onde nos transformamos.",
    keywords: ["aventura", "jornada", "crescimento", "descoberta", "transformação"],
  },
  {
    id: "kitsune-15",
    theme: "paz",
    title: "O Jardim Silencioso",
    summary: "Uma kitsune cria um santuário de paz em tempos turbulentos.",
    moral: "A paz começa dentro de nós e se irradia para o mundo.",
    story:
      "Durante uma era de conflitos constantes, uma kitsune de oito caudas criou um jardim mágico onde nenhuma violência era possível. Guerreiros de ambos os lados começaram a visitar o jardim secretamente, encontrando momentos de paz. Lá, inimigos se sentavam lado a lado em silêncio, lembrando-se de sua humanidade compartilhada. Gradualmente, esses momentos de paz se espalharam. Os guerreiros começaram a questionar a guerra, e eventualmente, líderes de ambos os lados se encontraram no jardim para negociar a paz. A kitsune ensinou que a paz não é ausência de conflito, mas a presença de compreensão.",
    keywords: ["paz", "harmonia", "compreensão", "santuário", "reconciliação"],
  },
  {
    id: "kitsune-16",
    theme: "renascimento",
    title: "A Fênix e a Raposa",
    summary: "Sobre como cada fim é um novo começo.",
    moral: "Das cinzas do passado, renasce um futuro mais sábio.",
    story:
      "Uma kitsune testemunhou uma fênix queimar e renascer das próprias cinzas. Fascinada, ela perguntou se a morte não era assustadora. A fênix respondeu: 'A morte é apenas transformação. Cada vez que renasço, carrego a sabedoria de todas as minhas vidas anteriores'. A kitsune compreendeu que seus próprios erros e dores não eram fins, mas sementes de crescimento. Ela começou a ensinar aos humanos que cada fracasso é uma oportunidade de renascimento, cada perda uma chance de reconstruir algo mais forte.",
    keywords: ["renascimento", "transformação", "recomeço", "sabedoria", "crescimento"],
  },
  {
    id: "kitsune-17",
    theme: "compaixão",
    title: "O Médico das Raposas",
    summary: "Um humano que dedicou sua vida a curar animais feridos.",
    moral: "A compaixão não conhece fronteiras entre espécies.",
    story:
      "Um médico pobre vivia na floresta, curando animais feridos sem cobrar nada. Uma noite, uma raposa gravemente ferida apareceu em sua porta. Ele a tratou por semanas até sua recuperação. Anos depois, quando o médico adoeceu gravemente, raposas de toda a região trouxeram ervas medicinais raras para sua casa. A raposa que ele havia salvado, agora uma kitsune, usou sua magia para amplificar o poder das ervas. O médico se recuperou e viveu muitos anos mais, sempre acompanhado por raposas que o protegiam.",
    keywords: ["compaixão", "cura", "gratidão", "dedicação", "reciprocidade"],
  },
  {
    id: "kitsune-18",
    theme: "honestidade",
    title: "O Espelho da Verdade",
    summary: "Uma kitsune ensina que a verdade liberta.",
    moral: "Mentiras podem nos proteger temporariamente, mas apenas a verdade nos liberta permanentemente.",
    story:
      "Um comerciante desonesto enganava seus clientes há anos. Uma kitsune lhe deu um espelho mágico que mostrava a verdade de qualquer situação. Inicialmente, ele o usou para enganar melhor as pessoas. Mas o espelho também refletia sua própria alma, mostrando-lhe o homem corrupto que havia se tornado. Atormentado pela visão, ele começou a mudar. Devolveu o que havia roubado, pediu perdão e reconstruiu seu negócio com honestidade. A kitsune então revelou que o verdadeiro poder do espelho não era mostrar a verdade externa, mas a interna.",
    keywords: ["honestidade", "verdade", "redenção", "autoconhecimento", "mudança"],
  },
  {
    id: "kitsune-19",
    theme: "perseverança",
    title: "A Raposa que Escalou a Montanha",
    summary: "A Raposa que Escalou a Montanha",
    moral: "O caminho mais difícil muitas vezes leva à vista mais bela.",
    story:
      "Uma jovem kitsune sonhava em ver o nascer do sol do pico mais alto do Japão. Outras raposas zombavam dela, dizendo que era impossível. Ela começou a escalar, enfrentando tempestades, avalanches e exaustão. Muitas vezes pensou em desistir, mas sempre se lembrava de seu sonho. Levou anos, mas finalmente alcançou o topo. O nascer do sol era mais magnífico do que imaginara. Mas a verdadeira recompensa foi descobrir que havia ganhado três caudas durante a jornada - não pelo destino, mas pela perseverança.",
    keywords: ["perseverança", "determinação", "sonhos", "superação", "jornada"],
  },
  {
    id: "kitsune-20",
    theme: "generosidade",
    title: "A Raposa e o Arroz",
    summary: "Sobre como dar sem esperar retorno multiplica a abundância.",
    moral: "A verdadeira riqueza está no que compartilhamos, não no que acumulamos.",
    story:
      "Durante uma grande fome, um fazendeiro tinha apenas um saco de arroz. Uma kitsune disfarçada de mendiga pediu comida. Apesar de sua própria necessidade, ele compartilhou metade de seu arroz. Na manhã seguinte, seu celeiro estava cheio de arroz. Assustado, ele procurou a mendiga para devolver o 'pagamento', pois havia dado de coração puro. A kitsune revelou sua forma verdadeira e explicou: 'Não multipliquei seu arroz como pagamento, mas como lição. A generosidade genuína sempre retorna multiplicada, não por magia, mas porque inspira outros a também serem generosos'.",
    keywords: ["generosidade", "abundância", "compartilhar", "bondade", "multiplicação"],
  },
  {
    id: "kitsune-21",
    theme: "aceitação",
    title: "A Raposa de Cauda Única",
    summary: "Aprendendo a aceitar nossas próprias limitações.",
    moral: "Não precisamos ser extraordinários para sermos valiosos.",
    story:
      "Uma jovem kitsune estava desesperada porque, após cem anos, ainda tinha apenas uma cauda enquanto suas irmãs tinham três ou quatro. Ela se isolou, envergonhada. Uma kitsune anciã a encontrou e disse: 'Você está tão focada em contar caudas que esqueceu de viver. Caudas não medem valor, medem experiências vividas com sabedoria'. A jovem kitsune começou a viver plenamente, ajudando outros sem se preocupar com recompensas. Ironicamente, ao parar de perseguir caudas, ela ganhou duas em um único ano.",
    keywords: ["aceitação", "autoestima", "valor", "comparação", "autenticidade"],
  },
  {
    id: "kitsune-22",
    theme: "equilíbrio",
    title: "A Dança das Estações",
    summary: "Uma kitsune aprende que tudo tem seu tempo.",
    moral: "Forçar as coisas fora de seu tempo natural cria desequilíbrio.",
    story:
      "Uma kitsune poderosa tentou usar magia para fazer a primavera durar o ano todo, querendo flores eternas. Mas sem o inverno, as sementes não descansavam. Sem o outono, as folhas não fertilizavam o solo. Sem o verão, os frutos não amadureciam. A floresta começou a definhar. Humildemente, ela desfez o feitiço e observou as estações retornarem. Compreendeu que a beleza da primavera existe porque o inverno a precede. Cada estação, cada fase da vida, tem seu propósito e beleza únicos.",
    keywords: ["equilíbrio", "ciclos", "natureza", "tempo", "aceitação"],
  },
  {
    id: "kitsune-23",
    theme: "coragem",
    title: "A Raposa que Enfrentou o Trovão",
    summary: "Coragem é agir apesar do medo paralisante.",
    moral: "O medo é natural, mas não pode nos impedir de fazer o que é certo.",
    story:
      "Raijin, o deus do trovão, estava furioso e ameaçava destruir uma aldeia com tempestades. Todos fugiram, mas uma pequena kitsune, apesar de seu terror de trovões, ficou para proteger uma criança humana abandonada. Ela criou ilusões de mil raposas desafiando Raijin, sua voz tremendo mas firme. Raijin, impressionado com a coragem de um ser tão pequeno enfrentando um deus, acalmou sua fúria. Ele abençoou a kitsune, dizendo: 'Você tem o coração de um leão em corpo de raposa'.",
    keywords: ["coragem", "medo", "proteção", "bravura", "desafio"],
  },
  {
    id: "kitsune-24",
    theme: "sabedoria",
    title: "O Paradoxo do Sábio",
    summary: "A verdadeira sabedoria começa ao admitir ignorância.",
    moral: "Quanto mais sabemos, mais percebemos o quanto não sabemos.",
    story:
      "Um estudioso arrogante procurou uma kitsune de nove caudas, vangloriando-se de seu conhecimento. Ela o levou a uma biblioteca infinita e disse: 'Cada livro aqui representa algo que você não sabe'. O estudioso percebeu que mesmo lendo por mil vidas, mal arranharia a superfície. Humilhado, ele perguntou: 'Então a sabedoria é impossível?' A kitsune sorriu: 'Sabedoria não é saber tudo, mas reconhecer que nunca saberemos. É a humildade de sempre estar aprendendo'. O estudioso se tornou seu aluno mais dedicado.",
    keywords: ["sabedoria", "humildade", "conhecimento", "aprendizado", "paradoxo"],
  },
  {
    id: "kitsune-25",
    theme: "esperança",
    title: "A Lanterna na Tempestade",
    summary: "Mesmo a menor luz pode guiar através da escuridão mais profunda.",
    moral: "A esperança não precisa ser grande, apenas constante.",
    story:
      "Durante uma tempestade terrível que durou semanas, uma aldeia perdeu toda esperança. Uma kitsune acendeu uma pequena lanterna no topo de uma colina e a manteve acesa, noite e dia. Os aldeões, vendo aquela luz persistente, começaram a sentir que se uma pequena chama podia resistir à tempestade, eles também podiam. Inspirados, começaram a ajudar uns aos outros, reconstruir e perseverar. Quando a tempestade finalmente passou, a kitsune apagou a lanterna. Ela havia ensinado que a esperança não é esperar que a tempestade passe, mas manter a luz acesa enquanto ela dura.",
    keywords: ["esperança", "persistência", "luz", "inspiração", "resiliência"],
  },
  {
    id: "kitsune-26",
    theme: "amor",
    title: "O Amor que Atravessa Vidas",
    summary: "Almas conectadas se encontram em cada existência.",
    moral: "O amor verdadeiro transcende tempo, espaço e até a morte.",
    story:
      "Uma kitsune e um humano se apaixonaram, mas ele era mortal e ela imortal. Quando ele morreu de velhice, ela chorou por décadas. Mas então percebeu que sua alma havia renascido. Vida após vida, ela o encontrava, e embora ele não se lembrasse conscientemente, sua alma sempre a reconhecia. Às vezes eram amantes, às vezes amigos, às vezes apenas se cruzavam brevemente. Ela aprendeu que o amor não é sobre possuir alguém eternamente, mas sobre celebrar cada momento compartilhado, em cada vida.",
    keywords: ["amor", "reencarnação", "eternidade", "alma", "conexão"],
  },
  {
    id: "kitsune-27",
    theme: "sacrifício",
    title: "A Cauda Oferecida",
    summary: "O maior amor é dar o que temos de mais precioso.",
    moral: "Verdadeiro sacrifício não é dar o que nos sobra, mas o que mais valorizamos.",
    story:
      "Uma kitsune de cinco caudas amava profundamente um humano que estava morrendo de uma doença incurável. Ela descobriu que poderia salvá-lo oferecendo uma de suas caudas - perdendo séculos de poder e sabedoria acumulados. Sem hesitar, ela fez o sacrifício. O humano se recuperou, mas ela ficou com apenas quatro caudas. Quando ele descobriu o que ela havia feito, chorou e prometeu viver uma vida digna daquele sacrifício. Anos depois, a kitsune ganhou não uma, mas duas caudas de volta - o universo reconhecendo que o amor verdadeiro é o maior poder de todos.",
    keywords: ["sacrifício", "amor", "doação", "poder", "recompensa"],
  },
  {
    id: "kitsune-28",
    theme: "comunidade",
    title: "A Aldeia das Raposas",
    summary: "Juntos somos mais fortes que sozinhos.",
    moral: "A força de uma comunidade está em cada membro cuidando do todo.",
    story:
      "Uma aldeia de kitsune vivia em harmonia, cada uma contribuindo com seus dons únicos. Quando uma praga ameaçou a floresta, elas trabalharam juntas: as mais velhas ofereceram sabedoria, as jovens energia, as curandeiras medicina, as ilusionistas proteção. Sozinha, nenhuma poderia ter salvado a floresta. Juntas, elas não apenas sobreviveram, mas prosperaram. Uma kitsune solitária que observava de longe percebeu que havia desperdiçado séculos em isolamento. Ela se juntou à comunidade e descobriu que pertencer era mais valioso que qualquer poder individual.",
    keywords: ["comunidade", "cooperação", "união", "pertencimento", "força coletiva"],
  },
  {
    id: "kitsune-29",
    theme: "beleza",
    title: "A Imperfeição Perfeita",
    summary: "A verdadeira beleza está nas imperfeições que nos tornam únicos.",
    moral: "Wabi-sabi - a beleza das coisas imperfeitas, impermanentes e incompletas.",
    story:
      "Uma jovem kitsune estava obcecada em criar a ilusão perfeita de uma flor de cerejeira. Ela passava dias ajustando cada pétala para a simetria absoluta. Uma kitsune anciã observou e disse: 'Sua flor é tecnicamente perfeita, mas sem alma'. Ela mostrou uma cerejeira real, com pétalas irregulares, algumas caindo, outras ainda em botão. 'Vê? A beleza não está na perfeição, mas na imperfeição que conta uma história'. A jovem kitsune compreendeu que suas próprias cicatrizes e falhas não eram defeitos, mas marcas de uma vida vivida.",
    keywords: ["beleza", "imperfeição", "wabi-sabi", "aceitação", "autenticidade"],
  },
  {
    id: "kitsune-30",
    theme: "tempo",
    title: "O Presente Eterno",
    summary: "O único momento que realmente possuímos é agora.",
    moral: "O passado é memória, o futuro é imaginação, apenas o presente é real.",
    story:
      "Uma kitsune imortal vivia presa entre memórias do passado e ansiedades sobre o futuro. Ela conheceu um monge que lhe ensinou meditação. 'Você tem o dom da imortalidade, mas não está vivendo', ele disse. 'Cada momento que você passa no passado ou futuro é um momento roubado do presente'. A kitsune começou a praticar presença plena. Pela primeira vez em séculos, ela realmente viu o pôr do sol, sentiu o vento, ouviu o riso. Ela percebeu que a imortalidade sem presença é apenas uma prisão longa.",
    keywords: ["tempo", "presente", "mindfulness", "consciência", "vida"],
  },
  {
    id: "kitsune-31",
    theme: "perdão",
    title: "O Peso do Ressentimento",
    summary: "Guardar rancor é como beber veneno esperando que o outro morra.",
    moral: "O perdão liberta primeiro quem perdoa.",
    story:
      "Duas kitsune eram irmãs até que uma traiu a outra por ciúmes. A traída carregou ressentimento por cem anos, recusando-se a perdoar. Mas o ódio a consumia, impedindo-a de ganhar novas caudas. Uma sábia kitsune lhe disse: 'Seu ressentimento não pune sua irmã, pune você. É uma corrente que você mesma forjou'. Relutantemente, ela procurou a irmã e ofereceu perdão - não porque a irmã merecia, mas porque ela mesma precisava de liberdade. No momento do perdão, ela sentiu um peso imenso se erguer, e uma nova cauda cresceu.",
    keywords: ["perdão", "ressentimento", "libertação", "cura", "paz"],
  },
  {
    id: "kitsune-32",
    theme: "gratidão",
    title: "As Mil Bênçãos",
    summary: "Gratidão transforma o que temos em suficiente.",
    moral: "Não é feliz quem tem muito, mas quem agradece pelo que tem.",
    story:
      "Uma kitsune poderosa tinha tudo - nove caudas, respeito, poder - mas sentia-se vazia. Uma kitsune de apenas duas caudas, pobre mas radiante, intrigou-a. 'Qual é seu segredo?' perguntou. A kitsune simples respondeu: 'Cada noite, agradeço por mil coisas - o sol, a chuva, uma refeição, um sorriso, a brisa'. A kitsune poderosa tentou o exercício e descobriu que tinha muito mais do que imaginava. Sua perspectiva mudou completamente. Ela percebeu que havia passado séculos perseguindo mais, sem apreciar o que já tinha.",
    keywords: ["gratidão", "abundância", "apreciação", "contentamento", "perspectiva"],
  },
  {
    id: "kitsune-33",
    theme: "mudança",
    title: "O Rio que Nunca Para",
    summary: "A única constante na vida é a mudança.",
    moral: "Resistir à mudança é como tentar parar um rio com as mãos.",
    story:
      "Uma kitsune tentou preservar um momento perfeito usando magia para congelar o tempo em um vale. Mas a vida estagnada começou a apodrecer - flores não murchavam mas também não floresciam, rios não fluíam, animais não cresciam. Ela percebeu seu erro e liberou o tempo. O vale voltou a mudar, e com a mudança veio renovação. Ela aprendeu que tentar segurar momentos perfeitos os destrói. A beleza da vida está em sua impermanência - cada momento é precioso justamente porque não dura para sempre.",
    keywords: ["mudança", "impermanência", "aceitação", "fluxo", "renovação"],
  },
  {
    id: "kitsune-34",
    theme: "propósito",
    title: "A Busca do Significado",
    summary: "Encontrando propósito não no destino, mas na jornada.",
    moral: "O significado da vida não é algo que encontramos, mas algo que criamos.",
    story:
      "Uma jovem kitsune perguntou a uma anciã: 'Qual é o propósito da minha existência?' A anciã respondeu: 'Essa é a pergunta errada. A pergunta certa é: que propósito você escolherá dar à sua existência?' A jovem ficou confusa. A anciã explicou: 'Não nascemos com propósito pré-determinado. Criamos nosso propósito através de nossas escolhas, ações e valores. Alguns escolhem proteger, outros ensinar, outros criar beleza. Seu propósito é o que você decide que é'. A jovem compreendeu que a liberdade de escolher seu próprio caminho era tanto assustadora quanto libertadora.",
    keywords: ["propósito", "significado", "escolha", "liberdade", "autodeterminação"],
  },
  {
    id: "kitsune-35",
    theme: "conexão",
    title: "A Teia Invisível",
    summary: "Todos estamos conectados de formas que não podemos ver.",
    moral: "Nenhuma ação é isolada; tudo que fazemos afeta o todo.",
    story:
      "Uma kitsune desenvolveu a habilidade de ver as conexões invisíveis entre todos os seres - fios de energia ligando cada pessoa, animal, planta e pedra. Ela viu como um ato de bondade criava ondas que se espalhavam, tocando vidas distantes. Viu também como crueldade criava ondas de dor. Ela ensinou aos humanos: 'Vocês pensam que estão separados, mas são como gotas no oceano - distintos, mas parte do mesmo todo. Quando machucam outro, machucam a si mesmos. Quando curam outro, curam a si mesmos'. Esta visão transformou como as pessoas tratavam umas às outras.",
    keywords: ["conexão", "interdependência", "unidade", "empatia", "consciência"],
  },
  {
    id: "kitsune-36",
    theme: "silêncio",
    title: "A Sabedoria do Silêncio",
    summary: "Às vezes, as palavras mais sábias são as não ditas.",
    moral: "No silêncio, encontramos respostas que o barulho esconde.",
    story:
      "Uma kitsune tagarela falava incessantemente, sempre tendo uma opinião sobre tudo. Uma kitsune muda (que havia perdido a voz salvando uma criança) tornou-se sua amiga. Inicialmente frustrada pela falta de resposta verbal, a tagarela gradualmente aprendeu a ouvir - não apenas palavras, mas o vento, o silêncio, seu próprio coração. Ela descobriu que sua amiga comunicava volumes através de gestos, olhares e presença. Quando a kitsune muda finalmente recuperou sua voz magicamente, ela raramente a usava. Ela havia aprendido que o silêncio muitas vezes fala mais alto que palavras.",
    keywords: ["silêncio", "escuta", "comunicação", "presença", "sabedoria"],
  },
  {
    id: "kitsune-37",
    theme: "legado",
    title: "O Que Deixamos Para Trás",
    summary: "Nosso verdadeiro legado são as vidas que tocamos.",
    moral: "Seremos lembrados não pelo que acumulamos, mas pelo que demos.",
    story:
      "Uma kitsune anciã de nove caudas estava morrendo (sim, até kitsune eventualmente partem). Seus filhos perguntaram o que ela deixaria para eles. Ela não tinha tesouros materiais ou poderes para transferir. Em vez disso, ela reuniu todos que havia ajudado ao longo de mil anos. Centenas vieram - humanos, animais, yokai - cada um compartilhando como ela havia mudado suas vidas. 'Este é meu legado', ela disse aos filhos. 'Não ouro ou magia, mas amor e sabedoria plantados em corações. Isso é imortalidade verdadeira'. Ela partiu em paz, sabendo que continuaria viva em cada vida que tocou.",
    keywords: ["legado", "imortalidade", "impacto", "memória", "amor"],
  },
  {
    id: "kitsune-38",
    theme: "autenticidade",
    title: "A Máscara que Não Sai",
    summary: "Usar máscaras por tempo demais nos faz esquecer nosso rosto verdadeiro.",
    moral: "Ser autêntico é mais libertador que ser perfeito.",
    story:
      "Uma kitsune usava ilusões constantemente para parecer perfeita aos olhos dos outros. Ela nunca mostrava fraqueza, dúvida ou medo. Mas um dia, sua magia falhou e ela ficou presa em forma humana, sem poder criar ilusões. Aterrorizada, ela se escondeu. Uma criança a encontrou chorando e, em vez de julgá-la, sentou-se ao seu lado. 'Você parece mais bonita agora', disse a criança. 'Antes você parecia uma pintura. Agora você parece real'. A kitsune percebeu que havia desperdiçado séculos tentando ser perfeita, quando ser real era muito mais valioso.",
    keywords: ["autenticidade", "vulnerabilidade", "máscara", "verdade", "aceitação"],
  },
  {
    id: "kitsune-39",
    theme: "resiliência",
    title: "O Bambu na Tempestade",
    summary: "A força verdadeira está na flexibilidade, não na rigidez.",
    moral: "Aqueles que se curvam na tempestade sobrevivem; os rígidos quebram.",
    story:
      "Durante um tufão devastador, uma kitsune observou que os carvalhos poderosos quebravam enquanto os bambus flexíveis sobreviviam. O carvalho era forte mas rígido; o bambu era flexível mas resiliente. Ela ensinou esta lição a um samurai orgulhoso que se recusava a se curvar diante de qualquer adversidade. 'Força sem flexibilidade é fragilidade', ela disse. 'Verdadeira resiliência é saber quando se curvar para não quebrar, quando recuar para avançar melhor depois'. O samurai aprendeu que adaptar-se não é fraqueza, mas sabedoria.",
    keywords: ["resiliência", "flexibilidade", "adaptação", "força", "sobrevivência"],
  },
  {
    id: "kitsune-40",
    theme: "transcendência",
    title: "Além das Nove Caudas",
    summary: "O verdadeiro poder está em transcender a necessidade de poder.",
    moral: "A iluminação final é perceber que nunca precisamos ser mais do que já somos.",
    story:
      "Uma kitsune finalmente alcançou nove caudas após mil anos de esforço. Mas em vez da realização esperada, sentiu vazio. Ela procurou uma kitsune lendária que havia transcendido até as nove caudas, voltando a ter apenas uma. 'Por que você desistiu de todo esse poder?' perguntou. A lendária sorriu: 'Eu não desisti de nada. Percebi que estava perseguindo caudas pensando que me fariam completa, mas já era completa desde o início. As caudas eram apenas símbolos. O verdadeiro poder é perceber que você não precisa de poder algum'. Naquele momento de compreensão, a kitsune de nove caudas experimentou uma paz que nenhum poder jamais lhe dera.",
    keywords: ["transcendência", "iluminação", "completude", "desapego", "paz"],
  },
]

export function selectStoryByKeywords(keywords: string[]): Story | null {
  const matchingStories = kitsuneStories.filter((story) =>
    story.keywords.some((keyword) => keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()))),
  )

  if (matchingStories.length === 0) {
    return kitsuneStories[Math.floor(Math.random() * kitsuneStories.length)]
  }

  return matchingStories[Math.floor(Math.random() * matchingStories.length)]
}

export function findStoryByTitle(title: string): Story | null {
  return kitsuneStories.find((story) => story.title.toLowerCase() === title.toLowerCase()) || null
}

export function generateStoryResponse(userMessage: string): string {
  const keywords = userMessage.toLowerCase().split(" ")
  const story = selectStoryByKeywords(keywords)

  if (!story) {
    return "A luz da sabedoria ilumina muitos caminhos... Sobre o que você gostaria de ouvir?"
  }

  return `*Com um brilho suave nos olhos...*\n\n**${story.title}**\n\n${story.story}\n\n*${story.moral}*`
}
