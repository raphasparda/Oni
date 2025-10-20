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
    id: "bakeneko-morte-ferrovia",
    theme: "morte",
    title: "O Trem que Jamais Freia",
    summary: "Passageiros presos em um trem noturno descobrem que o condutor está morto.",
    moral: "Morrer sem despedida é convite para que a viagem continue em círculos.",
    story:
      "Você acredita em destino? A noite queima nos trilhos da Linha Kisaragi desde que um condutor morreu sozinho, com a mão colada ao acelerador. Toda vez que a chuva encharca os dormentes, o trem retorna sem motoristas nem passageiros, mas a cabine fica coberta de marcas de garras. Eu, Bakeneko, subo no teto e escuto os murmúrios que pedem para saltar. Os vivos que ousam subir percebem tarde demais que as janelas mostram sempre a mesma paisagem: cemitérios repetidos. Um único passageiro consegue escapar a cada ano, se contar em voz alta o nome de quem deixou para trás. Os outros permanecem comprimidos no corredor, repetindo o último suspiro do condutor até que um novo curioso embarque.",
    keywords: ["morte", "trem", "kisaragi", "fantasma", "viagem", "chuva"],
  },
  {
    id: "bakeneko-vinganca-crisanta",
    theme: "vinganca",
    title: "Flor de Crisântemo Virada ao Avesso",
    summary: "Uma arranjo funerário desperta uma vingança silenciosa.",
    moral: "Desprezo plantado ao pé de uma lápide floresce com raízes venenosas.",
    story:
      "Em Nagasaki, a florista Itsuko queimava os crisântemos que julgava indignos, cuspindo que pobres não mereciam despedidas bonitas. Alguém deixou em sua porta uma coroa invertida, com pétalas voltadas para dentro como se sugassem luz. Quando ela tocou na flor, a sala se encheu de perfumes contraditórios — incenso, sangue, consulta médica. A partir daquela noite, toda vez que Itsuko montava arranjos, via o rosto de quem recusara. Eu me sentei em sua bancada e ronronei histórias de mortos que vagavam sem homenagem, puxando seu tornozelo com dedos frios. O pânico a obrigou a visitar cada família e pedir perdão, mas a flor invertida continua na parede, lembrando que meu riso e a vingança caminham na mesma direção.",
    keywords: ["vinganca", "florista", "crisântemo", "perdao", "luto", "maldição"],
  },
  {
    id: "bakeneko-horror-pensionato",
    theme: "horror",
    title: "O Quarto em que o Espelho Respira",
    summary: "Hóspedes de um pensionato descobrem que o espelho embaça no ritmo de um coração adicional.",
    moral: "Há casas que alugam quartos apenas para manter seus fantasmas alimentados.",
    story:
      "O pensionato Akane anuncia quartos baratos, mas quem entra no número oito sente o espelho respirar. Não importa quão seco esteja o ar; a superfície embaça em batidas que não correspondem ao coração do hóspede. Quando o intruso escreve seu nome no vapor, o reflexo borra e surge outra assinatura, sempre a mesma: 'Midori, 1967'. Eu salto sobre a cama e observo enquanto o hóspede tenta enxugar o espelho, mas cada movimento esfarela mais a carne invisível que ali repousa. Na terceira noite, a cama afunda como se alguém se deitasse ao lado, sussurrando histórias de sangue escondido sob o assoalho. Se quiser sair vivo, é preciso escutar todas as histórias e prometê-las a outro viajante. A casa precisa que o medo continue fresco.",
    keywords: ["horror", "espelho", "pensionato", "fantasma", "assinatura", "maldição"],
  },
  {
    id: "bakeneko-fantasma-biblioteca",
    theme: "fantasma",
    title: "As Páginas que Viram Sozinhas",
    summary: "Livros em uma biblioteca abandonada ficam úmidos com lágrimas que não pertencem aos vivos.",
    moral: "Ler em voz alta histórias mortas desperta quem as escreveu com sangue.",
    story:
      "A biblioteca de Yomori foi fechada após um incêndio, mas ainda exala cheiro de papel molhado. As prateleiras mantêm livros carbonizados por fora e perfeitos por dentro; quando alguém aproxima os dedos, as páginas viram sozinhas. Quem ousa recitar um parágrafo escuta a resposta do autor, uma voz cortada por tosse e cinzas. Eu me enrosco nas escadas e me divirto: alguns choram, outros riscam o texto para calar os mortos. Mas qualquer alteração aparece escrita em brasas no braço do leitor, queimando lentamente até que termine a leitura. Se o curioso foge, as letras saltam da pele e se espalham pelo chão, formando caminhos que levam de volta à biblioteca. Ninguém questiona duas vezes um convite feito por fantasmas incinerados.",
    keywords: ["fantasma", "biblioteca", "livro", "incendio", "voz", "maldição"],
  },
  {
    id: "bakeneko-yokai-porao",
    theme: "yokai",
    title: "Banquete da Gargula de Porão",
    summary: "Um yokai faminto adquire rostos novos ao devorar memórias de uma família.",
    moral: "Memórias escondidas em caixas de porão são ceia perfeita para monstros pacientes.",
    story:
      "A família Ishida se orgulhava de nunca reviver o passado. Todas as caixas do porão foram lacradas com cera negra e guardavam cartas, brinquedos, retratos. Eu descobri que uma gargula de argila morava ao lado delas, lambendo o pó de cada lembrança reprimida. Um dia, a cera derreteu por conta do verão sufocante e o yokai se libertou, subindo as escadas com olhos que trocavam de cor conforme o cheiro do objeto. Cada memór ia engolida apagava uma risada antiga dos moradores. Eles começaram a acordar sem saber seus próprios nomes, apenas reconhecendo o meu ronronar nos corredores. Para expulsar a criatura, precisaram abrir todas as caixas, encarar os segredos e permitir que a vergonha respirasse. Quando finalmente o yokai fugiu pela janela, deixou para trás um rastro de pó brilhante que ainda hoje lembra: esconder memórias é convidar monstros para jantar.",
    keywords: ["yokai", "porao", "memoria", "segredo", "familia", "monstro"],
  },
  {
    id: "bakeneko-maldicao-ponte",
    theme: "maldicao",
    title: "A Ponte que Cobra Pedágio de Sussurros",
    summary: "Quem cruza a ponte sem sussurrar um segredo perde a própria sombra.",
    moral: "Segredos recusados transformam-se em cobra que rasteja para dentro de quem os guarda.",
    story:
      "Existe uma ponte em Kyoto cuja madeira não range. Ela foi erguida sobre um rio onde soldados jogaram prisioneiros de olhos vendados. Eu arranho as tábuas à meia-noite, lembrando aos vivos que a ponte reconhece passos orgulhosos. Se o viajante atravessa em silêncio, sua sombra fica para trás, grudada na guarda de ferro, ganhando dentes. Em poucos dias, a pessoa sente frio mesmo ao sol, e filetes de água escura escorrem das paredes da casa. Só devolvemos a sombra quando o atravessador volta à ponte, sussurra o segredo mais pesado e empurra a verdade para a correnteza. Quem mente sente uma mordida no calcanhar e percebe que foi adotado pela cobra da ponte. Chances de fingir coragem? Nenhuma.",
    keywords: ["maldicao", "ponte", "segredo", "sombra", "kyoto", "soldado"],
  },
  {
    id: "bakeneko-transformacao-veludo",
    theme: "transformacao",
    title: "O Vestido que Cresceu Presas",
    summary: "Uma estilista vira marionete do vestido que queria dominar os bailes.",
    moral: "Transformações forçadas pela vaidade costuram monstros com linha de seda.",
    story:
      "A estilista Reina queria um traje que hipnotizasse generais. Pediu minha ajuda e eu lhe dei uma agulha feita da cauda de um Nekomata — sim, parte de mim. Cada ponto transformava o tecido em pele quente. O vestido começou a sussurrar frases de comando, pedindo mais sangue para engomar a bainha. Reina obedeceu, cortando os dedos e pingando a própria essência no pano. Quando colocou a peça, sentiu as costas rasgarem; duas presas surgiram na gola, prontas para morder o pescoço de quem a abraçasse. No grande baile, o vestido conduziu a dança, não Reina, e toda pessoa tocada perdeu a vontade própria. Eu ri, claro, mas depois ofereci a tesoura para cortar a transformação. A estilista recusou. Preferiu ser marionete a voltar ao anonimato. Desde então, bailes que exibem brilho demais me lembram daquela noite.",
    keywords: ["transformacao", "vestido", "vaidade", "sangue", "dança", "controle"],
  },
  {
    id: "bakeneko-hospital-turno",
    theme: "hospital",
    title: "Plantão das Três e Treze",
    summary: "Um hospital recebe pacientes que já morreram em outros horários.",
    moral: "Quando a campainha toca além da meia-noite, responda apenas se aceitar acompanhantes invisíveis.",
    story:
      "O Hospital Hatsune exibe relógios sem ponteiros, porque o tempo ali se dobra às três e treze. Nessa hora, a enfermaria enche de passos que não fazem barulho; lençóis afundam e monitores piscam sem pacientes aparente. Os médicos juram exaustão, mas eu vejo os mortos com prontuários amassados pedindo segunda opinião. Quem atende chamadas nesse minuto fatídico sente mão gelada segurar a caneta. Caso assine o prontuário, passa a enxergar os visitantes todas as noites. Caso recuse, acorda com o crachá dentro da boca. Há enfermeiras que descobriram meu nome e me pedem para espantar os mortos, mas eu só observo. Afinal, cada plantão precisa aprender a separar piedade de imprudência.",
    keywords: ["hospital", "plantao", "fantasma", "relógio", "morte", "noite"],
  },
  {
    id: "bakeneko-desaparecimento-caverna",
    theme: "horror",
    title: "O Eco que Devolve Vozes Erradas",
    summary: "Exploradores ouvem o próprio grito devolvido com detalhes que nunca viveram.",
    moral: "Alguns ecos não repetem: substituem sua história pela de quem ainda espera ser ouvido.",
    story:
      "Há uma caverna em Aomori que engole luz. Os exploradores adoram testar coragem, gritando seus nomes para ouvir a resposta. Eu fico na entrada, lambendo as patas, enquanto o eco retorna. Nunca traz o mesmo nome, mas narra acidentes, traições, finais que não pertencem aos invasores. Cada voz devolvida inclui um detalhe — o cheiro de óleo queimado, o gosto de moeda na língua, o som de neve quebrando — que coincide com algum desaparecido dali. Se o intruso responde, a caverna toma sua voz e libera a do desaparecido por alguns minutos. As famílias pensam que foi milagre, mas eu sei: é só mais um corpo que ficará esperando a próxima troca.",
    keywords: ["horror", "caverna", "eco", "desaparecido", "voz", "troca"],
  },
  {
    id: "bakeneko-morte-fotografo",
    theme: "morte",
    title: "As Fotografias que Piscam",
    summary: "Retratos antigos começam a piscar nos álbuns de um fotógrafo.",
    moral: "Segurar a morte nos dedos atrai olhares que não toleram ser esquecidos.",
    story:
      "O fotógrafo Junpei registrou funerais por trinta anos. Guardou negativos em caixas azuis, convencido de que a morte rende boas contas bancárias. Certo dia, os álbuns começaram a piscar — os olhos dos mortos abriam e fechavam na fotografia. Eu apareci sobre o tripé, empurrando uma lente. Sugeri que ele revisasse cada retrato e dissesse algo gentil aos falecidos. Junpei tentou, mas a língua pesou como chumbo, então os retratos se tornaram vídeos curtos, mostrando os mortos apontando para as casas de quem nunca visitaram o túmulo. Ele decidiu fechar o estúdio, porém as pessoas continuam batendo à porta com fotos piscando nas mãos. A morte não esquece quem lucrou com os seus enquadramentos.",
    keywords: ["morte", "fotografo", "retrato", "funeral", "olhos", "culpa"],
  },
  {
    id: "bakeneko-vinganca-marionete",
    theme: "vinganca",
    title: "O Teatro de Cordas Retorcidas",
    summary: "Marionetes executam vingança durante uma apresentação clandestina.",
    moral: "A vingança curta fios invisíveis que depois enforcam quem os puxa.",
    story:
      "No bairro Gion, um teatro clandestino prometia apresentações que faziam as pessoas confessarem crimes. O diretor usava marionetes com olhos de vidro, cada uma representando uma vítima. Quem assistia via o boneco apontar para alguém da plateia, e o escolhido começava a narrar seus piores atos sem controle. Eu me escondi na cortina porque gosto de confissões, mas percebi que as marionetes ganhavam peso demais. Os fios cortavam mãos e pulsos, trançando-se como cobras. Ao final, o diretor ficou preso na teia criada, pendurado pelo próprio segredo: ele assassinara a irmã para herdar o teatro. O público fugiu, porém os bonecos caminharam até a rua e continuam convidando transeuntes para uma sessão. Puxar os fios de vingança sempre termina com o titereiro sufocado.",
    keywords: ["vinganca", "marionete", "teatro", "confissao", "gion", "corda"],
  },
  {
    id: "bakeneko-maldicao-hotel",
    theme: "maldicao",
    title: "Check-out às Quatro Sem Nome",
    summary: "Um hotel exige que os hóspedes escrevam o próprio epitáfio antes de dormir.",
    moral: "Assinar a própria lápide é aceitar que a casa escolheu sua data final.",
    story:
      "O Hotel Shiju ni fecha as portas às quatro da manhã. Antes de dormir, cada hóspede encontra um cartão solicitando a escrita do epitáfio. Quem ignora acorda com o cartão grudado na garganta, palavras gravadas a fogo. Eu caminho pelos corredores perfumados e vejo os funcionários entregarem chá preto com cheiro de cemitério. Na primeira noite, ninguém morre; na segunda, os espelhos mostram cadeiras vazias na recepção, todas com xícaras fumegantes. Se o hóspede tenta fugir sem escrever, as malas voltam sozinhas para o quarto. Alguns percebem que podem negociar: escrevem que morrerão só depois de realizar algo impossível. O hotel aceita desafios, mas cobra juros. Eu? Apenas acompanho o relógio, esperando quem ousará prometer o inalcançável.",
    keywords: ["maldição", "hotel", "epitafio", "check-out", "promessa", "noite"],
  },
]
