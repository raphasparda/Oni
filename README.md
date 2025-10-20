# Oni 

Oni é uma aplicação web interativa que apresenta dois espíritos da mitologia japonesa através de chatbots com personalidades distintas. O projeto explora a dualidade entre luz e sombra, sabedoria e mistério, através de narrativas autênticas do folclore japonês.

## Conceito

O projeto é baseado na filosofia do Yin-Yang, representando dois aspectos complementares da mitologia japonesa:

**Kitsune** - O espírito raposa milenar, guardião da sabedoria, iluminação e esperança. Representa a luz, o conhecimento ancestral e a beleza da vida. Suas histórias inspiram, iluminam e infundem esperança através de narrativas sobre amor, coragem, transformação e a natureza sagrada da existência.

**Bakeneko** - O espírito gato monstro, guardião dos segredos sombrios e das lendas que causam calafrios. Representa as sombras, o desconhecido e os mistérios ocultos. Suas histórias revelam o lado macabro da mitologia japonesa, explorando yokai, maldições ancestrais e segredos que desafiam a sanidade.

## Características Técnicas

### Arquitetura

- Next.js 15.2.4 com App Router
- React 19 com Server Components
- TypeScript com strict mode
- Tailwind CSS v4 para estilização
- Motor conversacional autoral desenvolvido especificamente para o projeto

### Motor Conversacional

O comportamento dos bots é totalmente autoral: não há dependência de modelos externos ou serviços de terceiros. O motor foi escrito na mão para atender ao tema do Oni e conta com:

- Regras de intenção que interpretam cumprimentos, pedidos de histórias e estados emocionais
- Análise de sentimento simples baseada em palavras-chave
- Extração de tópicos construída à mão para casar com os temas disponíveis
- Memória conversacional local que mantém o contexto recente
- Respostas cuidadosamente roteirizadas para cada persona
- Controle de fluxo que mantém coerência entre as mensagens

### Banco de Histórias

- A Kitsune agora conta contos originais e sensoriais que abordam amor, esperança, coragem, sabedoria, amizade, família, verdade, prosperidade, natureza, confiança, sorte e celebração da vida. Cada narrativa foi escrita para soar como uma lenda compartilhada à luz de lanternas.
- O Bakeneko narra histórias inéditas de horror psicológico, vingança, maldições e encontros com yokai. Os relatos são construídos para provocar desconforto e suspense, mantendo o tom felino e mordaz do narrador.

As coleções foram reescritas manualmente para combinar com as personalidades dos bots e reagir melhor às intenções dos usuários.

### Scripts e Automatizações

- `py scripts/restore_accents.py <arquivo ...>` — percorre literais de texto em português e restaura diacríticos com base em frequência de uso. Útil ao adicionar novas histórias.

### Testes

- `npm run test -- --run tests/topic-detection.test.ts` — garante que a detecção de temas e o redirecionamento Kitsune/Bakeneko respondem corretamente a palavras-chave e sinônimos comuns.
- Configurei novos testes unitários com Vitest para reforçar o comportamento da classificação temática sem depender do runtime do Next.js.

Cada história inclui título, narrativa completa, moral e palavras-chave para seleção contextual.


## Identidade Visual

O projeto utiliza uma paleta de cores minimalista baseada em três cores:

- Branco - Representa a luz e sabedoria do Kitsune
- Preto - Representa as sombras e mistérios do Bakeneko
- Vermelho - Cor de destaque que conecta ambos os espíritos

A página inicial apresenta um design split-screen com divisão vertical, onde o lado esquerdo é totalmente branco para o Kitsune e o lado direito é totalmente preto para o Bakeneko, separados por uma linha vermelha.

## Funcionalidades

### Conversação Natural

Os bots conseguem:

- Reconhecer e responder a cumprimentos e despedidas
- Detectar emoções e responder com empatia
- Entender perguntas e oferecer histórias relevantes
- Reconhecer incerteza e oferecer orientação
- Manter contexto conversacional entre mensagens
- Adaptar respostas baseadas no histórico emocional do usuário

### Seleção Inteligente de Histórias

O sistema seleciona histórias baseado em:

- Palavras-chave detectadas na mensagem do usuário
- Sentimento e emoção expressos
- Contexto da conversa anterior
- Tópicos discutidos previamente
- Estado emocional do usuário

### Personalidades Distintas

Cada bot possui personalidade única implementada através de:

- Vocabulário específico com frases características
- Tom de voz apropriado ao personagem
- Estrutura de resposta consistente
- Estilo conversacional distinto

## Tecnologias Utilizadas

- Next.js 15.2.4
- React 19
- TypeScript 5
- Tailwind CSS v4
- Geist Font Family
- shadcn/ui components

## Estrutura de Dados

### Interface Story

\`\`\`typescript
interface Story {
  id: string
  theme: string
  title: string
  summary: string
  moral: string
  story: string
  keywords: string[]
}
\`\`\`

### Interface ConversationContext

\`\`\`typescript
interface ConversationContext {
  messages: Array<{ role: "user" | "assistant"; content: string }>
  currentTopic?: string
  userMood?: string
  storyPreference?: string[]
  lastBotAction?: string
  waitingForResponse?: boolean
  offeredStoryTitle?: string
  conversationDepth: number
  topicHistory: string[]
  emotionalJourney: Array<{ mood: string; timestamp: number }>
}
\`\`\`

## Autor

Desenvolvido por Raphael Sparda

