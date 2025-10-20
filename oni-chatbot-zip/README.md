# Oni - Chatbot de Mitologia Japonesa

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
- Sistema de Micro IA proprietário para processamento de linguagem natural

### Sistema de Micro IA

O projeto implementa um sistema de inteligência artificial customizado que não depende de APIs externas pagas. A Micro IA inclui:

- Análise de intenção com detecção de nuances conversacionais
- Análise de sentimento com categorização emocional avançada
- Extração de tópicos baseada em palavras-chave contextuais
- Memória conversacional com rastreamento de histórico emocional
- Geração de respostas personalizadas baseadas em personalidade
- Sistema de contexto que mantém coerência entre mensagens

### Banco de Dados de Histórias

O projeto contém 80 histórias autênticas da mitologia japonesa:

- 40 histórias do Kitsune sobre esperança, sabedoria, amor, transformação, coragem, natureza, família, sacrifício, perdão, gratidão e outros temas inspiradores
- 40 histórias do Bakeneko sobre yokai, maldições, mistérios, terror, vingança, morte, segredos proibidos e lendas macabras

Cada história inclui título, narrativa completa, moral e palavras-chave para seleção contextual.

## Estrutura do Projeto

\`\`\`
oni-chatbot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API route para processamento de mensagens
│   ├── chat/
│   │   └── page.tsx               # Página de chat dinâmica
│   ├── layout.tsx                 # Layout raiz com fontes
│   ├── page.tsx                   # Página inicial split-screen
│   └── globals.css                # Estilos globais e design tokens
├── components/
│   └── oni-chat.tsx               # Componente principal do chat
├── lib/
│   ├── micro-ai.ts                # Sistema de Micro IA
│   ├── kitsune-stories.ts         # Banco de histórias do Kitsune
│   ├── kitsune-conversation.ts    # Sistema conversacional do Kitsune
│   ├── kitsune-system-prompt.ts   # Prompt de sistema do Kitsune
│   ├── bakeneko-stories.ts        # Banco de histórias do Bakeneko
│   ├── bakeneko-conversation.ts   # Sistema conversacional do Bakeneko
│   └── bakeneko-system-prompt.ts  # Prompt de sistema do Bakeneko
└── public/
    └── images/                    # Ícones dos espíritos
\`\`\`

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

## Instalação e Execução

### Requisitos

- Node.js 18 ou superior
- pnpm (gerenciador de pacotes)

### Instalação

\`\`\`bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd oni-chatbot

# Instale as dependências
pnpm install
\`\`\`

### Execução em Desenvolvimento

\`\`\`bash
pnpm dev
\`\`\`

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

\`\`\`bash
pnpm build
pnpm start
\`\`\`

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

## Contribuição

Este é um projeto educacional focado em explorar mitologia japonesa através de tecnologia moderna. Contribuições são bem-vindas, especialmente:

- Novas histórias autênticas da mitologia japonesa
- Melhorias no sistema de Micro IA
- Aprimoramentos na interface do usuário
- Correções de bugs e otimizações

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## Autor

Desenvolvido como um projeto de exploração cultural e tecnológica da mitologia japonesa.

## Agradecimentos

As histórias apresentadas são baseadas em lendas e folclore autênticos do Japão, adaptadas para o formato conversacional. Agradecimentos aos contadores de histórias ancestrais que preservaram essas narrativas através dos séculos.
