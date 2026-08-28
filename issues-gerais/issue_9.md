## Issue 9: Implementar o motor de avaliação (`evaluateAction.ts`)
**Labels:** `frontend`, `logic`
**Descrição:**
Função pura, sem dependência de UI, que recebe o cenário e a ação escolhida e devolve o feedback correspondente. Mantê-la pura facilita testá-la isoladamente.

**Tarefas:**
- [ ] Implementar `evaluateAction(scenario, action): Feedback`
- [ ] Cobrir os 4 tipos de ação para pelo menos 3 cenários diferentes em testes unitários
- [ ] Tratar caso de ação "correta" e "aceitável mas não ideal" (ex: Ignorar pode não ser errado, mas Pesquisar é melhor)

**Critério de aceite:** testes unitários passando para todos os cenários cadastrados.

---