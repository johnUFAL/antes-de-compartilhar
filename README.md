src/
├── data/
│   └── scenarios.ts        # todo o conteúdo pedagógico (mensagens, sinais, fontes)
├── types/
│   └── scenario.ts         # tipos TS: Scenario, Action, Feedback
├── state/
│   └── AppContext.tsx      # useReducer: tela atual, progresso, respostas
├── components/
│   ├── chat/
│   │   ├── ChatScreen.tsx      # simula a tela do WhatsApp
│   │   ├── MessageBubble.tsx
│   │   └── ActionBar.tsx       # botões Compartilhar/Pesquisar/Ignorar/Denunciar
│   ├── feedback/
│   │   ├── FeedbackModal.tsx   # sinal de alerta + fonte oficial + explicação
│   │   └── ProgressBar.tsx
│   └── screens/
│       ├── IntroScreen.tsx
│       └── SummaryScreen.tsx   # resumo final / pontuação
├── engine/
│   └── evaluateAction.ts   # lógica pura: dado cenário + ação → feedback
└── App.tsx