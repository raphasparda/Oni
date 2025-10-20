# Oni

Dois espíritos da mitologia japonesa conversam com você. **Oni** é uma aplicação web onde cada um desses espíritos tem voz, humor e memória próprios. A ideia é simples: colocar lado a lado luz e sombra, sabedoria e mistério, sem caricatura — só boas histórias.

## Conceito

A base é o **Yin–Yang**: forças diferentes que se completam.

**Kitsune (luz)**
Raposa milenar, paciente e curiosa. Fala de amor, coragem, transformação e beleza nas pequenas coisas. As histórias soam como lendas contadas à luz de lanternas, com aquele calor de fogueira que anima a alma.

**Bakeneko (sombra)**
Gato-monstro de olhar irônico. Prefere segredos, maldições e encontros com **yokai**. Suas narrativas provocam arrepio sem perder o sarcasmo felino.

## Por trás da tela

O projeto roda em **Next.js 15.2.4** (App Router) com **React 19** (Server Components), **TypeScript** em *strict mode* e **Tailwind CSS v4**. A tipografia usa **Geist** e os componentes são do **shadcn/ui**.

A inteligência que move a conversa é uma **Micro IA própria** — leve, sem dependências de APIs pagas — feita para dar personalidade real aos bots. Ela cuida de:

* entender intenção (com nuances de linguagem);
* analisar sentimento e classificar emoções;
* extrair tópicos de forma contextual;
* manter uma **memória conversacional** (incluindo trilha emocional ao longo do tempo);
* gerar respostas coerentes com a **personalidade** de cada espírito;
* preservar o contexto entre mensagens.

## Banco de histórias

As coleções são originais e foram reescritas à mão para combinar com a voz de cada bot.

* **Kitsune** conta fábulas sensoriais sobre amor, esperança, amizade, família, verdade, prosperidade, natureza, confiança, sorte e a celebração da vida.
* **Bakeneko** narra horror psicológico, vingança, maldições e encontros com **yokai**, buscando aquele desconforto gostoso que prende a leitura.

Cada história tem **título**, **narrativa completa**, **moral** e **palavras‑chave** para seleção contextual.

## Conversa e seleção de histórias

Os bots reconhecem cumprimentos e despedidas, entendem perguntas, percebem incerteza e respondem com empatia. Eles mantêm contexto entre mensagens e adaptam o tom ao histórico emocional do usuário.

Quando escolhem uma história, o sistema considera:

* palavras‑chave da mensagem;
* sentimento e emoção expressos;
* o que já foi conversado antes;
* tópicos recorrentes;
* o estado emocional atual do usuário.

## Visual

Identidade minimalista com três cores:

* **Branco**: luz e sabedoria (Kitsune)
* **Preto**: sombras e mistério (Bakeneko)
* **Vermelho**: o fio que conecta os dois

A *home* tem layout **split‑screen** vertical: lado esquerdo branco (Kitsune), lado direito preto (Bakeneko), separados por uma linha vermelha.

## Scripts e testes

**Restauração de acentos**

```bash
python scripts/restore_accents.py <arquivo...>
```

Percorre literais em português e restaura diacríticos com base em frequência de uso — útil ao adicionar novas histórias.

**Teste de detecção de temas**

```bash
npm run test -- --run tests/topic-detection.test.ts
```

Garante que a classificação temática e o roteamento Kitsune/Bakeneko funcionem com palavras‑chave e sinônimos. Os testes (Vitest) rodam sem depender do runtime do Next.js.

## Tecnologias

* Next.js 15.2.4
* React 19
* TypeScript 5
* Tailwind CSS v4
* Geist Font Family
* shadcn/ui

## Modelos de dados

**Interface `Story`**

```typescript
interface Story {
  id: string;
  theme: string;
  title: string;
  summary: string;
  moral: string;
  story: string;
  keywords: string[];
}
```

**Interface `ConversationContext`**

```typescript
interface ConversationContext {
  messages: Array<{ role: "user" | "assistant"; content: string }>;
  currentTopic?: string;
  userMood?: string;
  storyPreference?: string[];
  lastBotAction?: string;
  waitingForResponse?: boolean;
  offeredStoryTitle?: string;
  conversationDepth: number;
  topicHistory: string[];
  emotionalJourney: Array<{ mood: string; timestamp: number }>;
}
```

## Autor

Desenvolvido por **Raphael Sparda**.
