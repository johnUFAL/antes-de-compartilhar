# Antes de Compartilhar — Plano de Issues (GitHub)

Simulador interativo de WhatsApp para educação sobre fake news.
Prazo total: **8 semanas** (2 meses), com folga incluída para imprevistos.

> Como usar este arquivo: cada bloco `### Issue N` pode virar uma issue no GitHub.
> Copie o título, a descrição e os checkboxes. Sugestão de labels e milestone já incluídas.

---

## Milestone 1 — Planejamento e Conteúdo (Semana 1)

### Issue 1: Definir estrutura de dados dos cenários
**Labels:** `setup`, `design`
**Descrição:**
Criar o "molde" de dados que vai representar cada cenário fictício. Isso deve ser decidido antes de qualquer código de tela, porque toda a UI vai depender dessa estrutura.

**Tarefas:**
- [ ] Definir os campos de um `Scenario`: id, texto da mensagem, remetente fictício, tipo de alerta (urgência/medo/autoridade falsa), ação correta, explicação do sinal de alerta, fonte oficial de verificação, link de referência
- [ ] Definir os 4 tipos de `Action`: Compartilhar, Pesquisar, Ignorar, Denunciar
- [ ] Escrever o tipo `Feedback` retornado após a ação (texto, correto/incorreto, dica)
- [ ] Documentar tudo em `types/scenario.ts`

**Critério de aceite:** existe um arquivo de tipos TypeScript revisado, sem nenhuma tela ainda implementada.

---

### Issue 2: Pesquisar e escrever os cenários de mensagens fictícias
**Labels:** `content`, `research`
**Descrição:**
Este é o coração pedagógico do projeto. Precisa de pesquisa cuidadosa para que os exemplos sejam realistas e as fontes oficiais indicadas sejam verdadeiras.

**Tarefas:**
- [ ] Escrever pelo menos 8 a 10 mensagens fictícias variando o tipo de manipulação (urgência, medo, falsa autoridade, corrente/"repasse")
- [ ] Para cada uma, pesquisar a fonte oficial real correspondente (TSE, Ministério da Saúde, Fato ou Fake, Agência Lupa, Aos Fatos, etc.)
- [ ] Escrever a explicação de "por que esse gatilho funciona" para cada cenário
- [ ] Revisar se nenhuma mensagem fictícia poderia ser confundida com desinformação real fora de contexto (adicionar aviso "isso é fictício" quando necessário)

**Critério de aceite:** planilha ou arquivo com todos os cenários revisados por pelo menos duas pessoas do grupo.

---

### Issue 3: Wireframe da experiência (papel ou Figma)
**Labels:** `design`
**Descrição:**
Desenhar o fluxo de telas antes de programar, para não perder tempo redesenhando componentes já feitos.

**Tarefas:**
- [ ] Tela de introdução/instruções
- [ ] Tela de chat (mensagem + botões de ação)
- [ ] Tela/modal de feedback
- [ ] Tela de resumo final
- [ ] Definir paleta de cores (visual inspirado no WhatsApp, mas sem copiar marca registrada)

**Critério de aceite:** wireframes aprovados pelo grupo antes de iniciar o Milestone 2.

---

## Milestone 2 — Setup do Projeto (Semana 2)

### Issue 4: Inicializar projeto React + Vite + TypeScript
**Labels:** `setup`
**Tarefas:**
- [ ] `npm create vite@latest` com template `react-ts`
- [ ] Configurar Tailwind CSS
- [ ] Configurar ESLint + Prettier
- [ ] Subir repositório no GitHub com README inicial

**Critério de aceite:** projeto roda localmente com `npm run dev` e tem lint configurado.

---

### Issue 5: Configurar deploy contínuo (Vercel)
**Labels:** `setup`, `deploy`
**Descrição:**
Configurar o deploy cedo, mesmo com o app vazio, evita surpresas de configuração na última semana.

**Tarefas:**
- [ ] Conectar repositório à Vercel
- [ ] Confirmar que cada push na branch principal gera um deploy automático
- [ ] Adicionar o link do deploy no README

**Critério de aceite:** link público funcionando mostrando a tela inicial do Vite.

---

### Issue 6: Criar o AppContext (estado global com useReducer)
**Labels:** `frontend`
**Descrição:**
Implementar a máquina de estados central: tela atual, índice do cenário, respostas dadas, pontuação.

**Tarefas:**
- [ ] Definir as `actions` do reducer (AVANCAR_CENARIO, REGISTRAR_RESPOSTA, REINICIAR)
- [ ] Criar o Provider e o hook `useAppState()`
- [ ] Escrever testes simples do reducer (Vitest)

**Critério de aceite:** reducer testado, sem UI ainda ligada a ele.

---

## Milestone 3 — Motor do Simulador (Semanas 3–4)

### Issue 7: Implementar tela de chat (ChatScreen + MessageBubble)
**Labels:** `frontend`
**Descrição:**
Construir a interface visual que imita o WhatsApp, exibindo a mensagem fictícia atual.

**Tarefas:**
- [ ] Componente `MessageBubble` estilizado com Tailwind
- [ ] Componente `ChatScreen` que lê o cenário atual do contexto
- [ ] Efeito de "digitando..." opcional para dar realismo

**Critério de aceite:** ao carregar o app, aparece a primeira mensagem fictícia na tela, visualmente parecida com um chat.

---

### Issue 8: Implementar ActionBar (Compartilhar / Pesquisar / Ignorar / Denunciar)
**Labels:** `frontend`
**Tarefas:**
- [ ] Quatro botões de ação estilizados
- [ ] Ao clicar, disparar a ação no reducer
- [ ] Desabilitar botões após a escolha (evitar múltiplos cliques)

**Critério de aceite:** clicar em qualquer botão registra a resposta no estado global.

---

### Issue 9: Implementar o motor de avaliação (`evaluateAction.ts`)
**Labels:** `frontend`, `logic`
**Descrição:**
Função pura, sem dependência de UI, que recebe o cenário e a ação escolhida e devolve o feedback correspondente. Mantê-la pura facilita testá-la isoladamente.

**Tarefas:**
- [ ] Implementar `evaluateAction(scenario, action): Feedback`
- [ ] Cobrir os 4 tipos de ação para pelo menos 3 cenários diferentes em testes unitários
- [ ] Tratar caso de ação "correta" e "aceitável mas não ideal" (ex: Ignorar pode não ser errado, mas Pesquisar é melhor)

**Critério de aceite:** testes unitários passando para todos os cenários cadastrados.

---

### Issue 10: Implementar FeedbackModal
**Labels:** `frontend`
**Descrição:**
Tela/modal que aparece após a escolha, mostrando o sinal de alerta, onde verificar, a fonte oficial e a explicação da técnica de manipulação usada.

**Tarefas:**
- [ ] Layout do modal com as 4 informações (sinal de alerta, onde verificar, fonte oficial, por que engana)
- [ ] Botão "Próxima mensagem"
- [ ] Diferenciar visualmente feedback positivo (ação recomendada) de feedback de alerta (ação arriscada)

**Critério de aceite:** ao escolher qualquer ação, o modal certo aparece com o conteúdo do cenário correspondente.

---

## Milestone 4 — Conteúdo Completo e Fluxo (Semana 5)

### Issue 11: Popular `scenarios.ts` com todos os cenários revisados
**Labels:** `content`, `frontend`
**Tarefas:**
- [ ] Migrar os cenários escritos na Issue 2 para o formato de dados definido na Issue 1
- [ ] Revisar links de fontes oficiais (verificar se ainda estão no ar)
- [ ] Adicionar variedade (pelo menos um cenário de saúde, um eleitoral, um de golpe financeiro)

**Critério de aceite:** app percorre todos os cenários reais, sem dados de exemplo ("lorem ipsum").

---

### Issue 12: Tela de introdução e tela de resumo final
**Labels:** `frontend`
**Tarefas:**
- [ ] `IntroScreen`: explica a dinâmica antes de começar
- [ ] `SummaryScreen`: mostra quantas ações foram ideais, quais sinais de alerta a pessoa aprendeu, e um resumo com dicas do TSE/agências de checagem
- [ ] Botão "Recomeçar"

**Critério de aceite:** fluxo completo navegável do início ao fim sem travar.

---

## Milestone 5 — Polimento (Semana 6)

### Issue 13: Responsividade e acessibilidade
**Labels:** `frontend`, `a11y`
**Tarefas:**
- [ ] Testar em tela de celular (a maioria vai acessar assim, dado o tema WhatsApp)
- [ ] Contraste de cores adequado (WCAG AA)
- [ ] Navegação por teclado nos botões de ação
- [ ] `aria-label` nos elementos interativos

**Critério de aceite:** Lighthouse (Chrome DevTools) com nota acima de 90 em acessibilidade.

---

### Issue 14: Animações e microinterações
**Labels:** `frontend`, `polish`
**Descrição:**
Pequenos detalhes que aumentam a sensação de "app real" sem comprometer o prazo.

**Tarefas:**
- [ ] Transição suave entre mensagens
- [ ] Animação de entrada do modal de feedback
- [ ] Barra de progresso animada

**Critério de aceite:** transições fluidas, sem travamentos perceptíveis.

---

### Issue 15 (opcional / stretch goal): Estatísticas anônimas de turma
**Labels:** `stretch-goal`, `backend`
**Descrição:**
Só implementar se sobrar tempo depois da Semana 6. Não é bloqueante para a apresentação.

**Tarefas:**
- [ ] Configurar projeto no Supabase (grátis)
- [ ] Salvar contagem anônima de acertos por cenário
- [ ] Exibir um mini-dashboard agregado (ex: "62% da turma compartilharia essa mensagem")

**Critério de aceite:** funciona sem quebrar o app caso o backend esteja fora do ar (fallback gracioso).

---

## Milestone 6 — Testes e Validação (Semana 7)

### Issue 16: Teste com usuários reais (colegas/família)
**Labels:** `testing`
**Tarefas:**
- [ ] Pedir para 3–5 pessoas usarem o app sem explicação prévia
- [ ] Observar onde travam ou ficam confusas
- [ ] Coletar feedback sobre clareza da linguagem dos cenários

**Critério de aceite:** lista de ajustes priorizados a partir do feedback.

---

### Issue 17: Corrigir bugs e ajustes de conteúdo encontrados
**Labels:** `bug`, `content`
**Tarefas:**
- [ ] Revisar itens levantados na Issue 16
- [ ] Reexecutar testes unitários
- [ ] Revisão final de português/gramática dos textos

**Critério de aceite:** nenhum bug bloqueante conhecido; testes passando.

---

## Milestone 7 — Entrega e Apresentação (Semana 8)

### Issue 18: Deploy final e revisão de performance
**Labels:** `deploy`
**Tarefas:**
- [ ] Build de produção e checagem do tamanho do bundle
- [ ] Testar o link de produção em rede de celular (não só wifi)
- [ ] Checar se todos os links de fontes oficiais funcionam

**Critério de aceite:** link final estável, testado em pelo menos 2 dispositivos diferentes.

---

### Issue 19: Documentação (README) e roteiro de apresentação
**Labels:** `docs`
**Tarefas:**
- [ ] README com: objetivo do projeto, como rodar localmente, tecnologias usadas, prints de tela
- [ ] Roteiro de 5 minutos para apresentar em sala (o que mostrar, em que ordem)
- [ ] Créditos das fontes oficiais usadas nos cenários

**Critério de aceite:** README completo; roteiro ensaiado pelo menos uma vez.

---

### Issue 20 (folga): Buffer para imprevistos
**Labels:** `buffer`
**Descrição:**
Semana reservada intencionalmente sem tarefas fixas. Se tudo correu bem, use para polir animações, adicionar mais 1–2 cenários, ou praticar a apresentação.

---

## Resumo de Labels sugeridas
`setup` `design` `content` `research` `frontend` `logic` `testing` `bug` `a11y` `polish` `deploy` `docs` `stretch-goal` `buffer`

## Resumo de Milestones
| Milestone | Semana | Foco |
|---|---|---|
| 1 | 1 | Planejamento e conteúdo |
| 2 | 2 | Setup do projeto |
| 3 | 3–4 | Motor do simulador |
| 4 | 5 | Conteúdo completo e fluxo |
| 5 | 6 | Polimento |
| 6 | 7 | Testes e validação |
| 7 | 8 | Entrega e apresentação |
