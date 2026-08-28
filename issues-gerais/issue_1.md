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