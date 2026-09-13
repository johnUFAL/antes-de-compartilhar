# Antes de Compartilhar

## 1. O que é o projeto

Simulador web de uma conversa de WhatsApp para ensino sobre desinformação. O usuário recebe
mensagens fictícias e escolhe entre 4 ações (`Compartilhar`, `Pesquisar`, `Ignorar`, `Denunciar`).
Depois recebe feedback educativo: sinal de alerta, onde verificar, fonte oficial e explicação
da técnica de manipulação usada na mensagem.

**Não é** um detector automático de fake news. **É** uma experiência linear e educativa, sem IA
em tempo de execução, sem login, sem backend obrigatório.

## 2. Stack

- React 18 + TypeScript + Vite
- Tailwind CSS (estilização utilitária)
- Estado global: `useReducer` + `Context` (sem Redux/Zustand — o app não precisa)
- Testes: Vitest + React Testing Library
- Deploy: Vercel, a partir da branch `main`

Não introduzir novas dependências de estado, roteamento ou backend sem necessidade explícita.
Se um agente julgar necessário adicionar uma lib, deve justificar antes no PR, não instalar direto.

## 3. Estrutura de pastas

```
src/
├── data/
│   └── scenarios.ts        # conteúdo pedagógico: mensagens, sinais, fontes oficiais
├── types/
│   └── scenario.ts         # Scenario, Action, Feedback
├── state/
│   └── AppContext.tsx      # reducer + provider do estado global
├── engine/
│   └── evaluateAction.ts   # função pura: (scenario, action) => Feedback
├── components/
│   ├── chat/                # ChatScreen, MessageBubble, ActionBar
│   ├── feedback/             # FeedbackModal, ProgressBar
│   └── screens/               # IntroScreen, SummaryScreen
└── App.tsx
```

As três telas principais (Intro, Chat, Resumo) são estados da mesma experiência, não
breakpoints diferentes — todas devem ficar dentro de um único componente de layout
compartilhado (ex: `components/layout/PhoneFrame.tsx`, com `max-w-md mx-auto`), replicando
a largura de celular do design. Não estilizar largura máxima individualmente em cada tela.

Regra de ouro: **conteúdo, lógica e apresentação ficam separados.**
- Conteúdo novo → só `data/scenarios.ts`, nunca hardcoded em componente.
- Lógica de avaliação → só `engine/`, sempre função pura, sem JSX e sem `useState`.
- Componentes → só leem do `AppContext` e do `engine`, não decidem regra de negócio sozinhos.

## 4. Tipos principais (não mudar a forma sem atualizar `scenarios.ts` inteiro)

As mensagens simuladas não são só texto: o app precisa suportar imagem, vídeo e áudio,
como acontece de fato em apps de mensagens. Por isso o conteúdo da bolha de chat é um
objeto separado (`ScenarioContent`), e os gatilhos de manipulação são um catálogo à parte
(`data/gatilhos.ts`), não uma string solta — eles reaparecem como badges na tela de Resumo.

```ts
type ActionType = "compartilhar" | "pesquisar" | "ignorar" | "denunciar";
type MediaType = "texto" | "imagem" | "video" | "audio";
type GatilhoId = "urgencia" | "medo" | "autoridade-falsa" | "corrente";

interface ScenarioContent {
  tipo: MediaType;
  texto?: string;      // corpo (texto) ou legenda (mídia)
  midiaUrl?: string;   // thumbnail de imagem/vídeo, ou ilustração de áudio
  duracao?: string;    // "0:42" — exibido na bolha para áudio/vídeo
}

interface Gatilho {
  id: GatilhoId;
  label: string;
  icone: string;  // nome de ícone lucide-react
  cor: "red" | "orange" | "teal" | "purple";
}

interface Scenario {
  id: string;
  remetente: string;
  grupo: string;      // nome do grupo/contato no cabeçalho do chat
  horario: string;    // "09:41"
  conteudo: ScenarioContent;
  gatilhos: GatilhoId[];  // uma mensagem pode combinar mais de uma técnica
  acaoIdeal: ActionType;
  sinalDeAlerta: string;
  ondeVerificar: string;
  fonteOficial: { nome: string; url: string };
  explicacao: string;
}

interface Resposta {
  scenarioId: string;
  acaoEscolhida: ActionType;
  correta: boolean;
}

interface Feedback {
  correto: boolean;
  mensagem: string;
  scenario: Scenario;
}
```

Arquivos correspondentes:
- `types/scenario.ts` — todos os tipos acima
- `data/gatilhos.ts` — catálogo fixo de `Gatilho`, referenciado por `id` nos cenários
- `data/dicas.ts` — lista estática de dicas exibida no Resumo (`DICAS_DE_OURO`)
- `data/scenarios.ts` — os `Scenario[]`, incluindo exemplos de texto, imagem, vídeo e áudio

## 5. Fluxo de estado (AppContext)

Telas: `intro -> chat(cenário N) -> feedback(cenário N) -> chat(cenário N+1) -> ... -> resumo`

Actions do reducer:
- `RESPONDER_CENARIO` — registra a ação escolhida e calcula o feedback via `evaluateAction`
- `AVANCAR_CENARIO` — vai para o próximo cenário ou para o resumo se acabou
- `REINICIAR` — volta ao início

Nunca calcular feedback dentro de um componente React. Sempre via `engine/evaluateAction.ts`,
para manter a lógica testável isoladamente.

## 6. Convenções de código

- Componentes em `PascalCase`, arquivos de lógica/dados em `camelCase`.
- Um componente por arquivo. Sem componentes com mais de ~150 linhas — quebrar em subcomponentes.
- Tailwind: usar classes utilitárias direto no JSX. Evitar CSS customizado, exceto casos que
  o Tailwind não cobre (ex: animação específica).
- Sempre tipar props com `interface Props { ... }`, nunca `any`.
- Comentários em português, nomes de variáveis/funções em português quando forem sobre domínio
  (ex: `avaliarAcao`, `sinalDeAlerta`), e em inglês quando forem genéricos de UI (ex: `isOpen`,
  `onClose`).

## 7. Como adicionar um novo cenário

1. Editar apenas `src/data/scenarios.ts`, adicionando um objeto `Scenario` novo.
2. Não é necessário tocar em nenhum componente.
3. Rodar os testes de `engine/evaluateAction.test.ts` para garantir que o novo cenário é
   avaliado corretamente nas 4 ações possíveis.

## 8. O que evitar (erros comuns neste tipo de projeto)

- Não adicionar chamadas de API externas ou IA em tempo de execução — o projeto é 100% estático.
- Não usar `localStorage`/`sessionStorage` fora do necessário para salvar progresso — e se usar,
  tratar falha graciosamente (o app deve funcionar mesmo sem persistência).
- Não misturar texto de conteúdo pedagógico dentro de componentes — sempre em `scenarios.ts`.
- Não remover a separação pura do `engine/` para "simplificar" — ela existe para permitir testes
  unitários sem precisar renderizar UI.
- Não commitar direto em `main` ou `dev` — sempre `feature/<nº-issue>-descrição` a partir de `dev`,
  com PR. Ver `workflow-git.md` para o fluxo completo.
- Não inventar fontes oficiais fictícias — toda `fonteOficial.url` deve ser uma fonte real e
  verificável (TSE, Ministério da Saúde, agências de checagem como Aos Fatos, Agência Lupa).

## 9. Commits

Seguir o padrão descrito em `workflow-git.md`: prefixos `feat:`, `fix:`, `chore:`, `docs:`,
`style:`, `refactor:`, `test:`.

## 10. Testes esperados antes de abrir um PR

```bash
npm run lint
npm run test
npm run build
```

Um PR não deve ser aberto se `npm run build` falhar.