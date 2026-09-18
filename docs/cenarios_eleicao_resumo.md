# Cenários — Task 2 (Tema: Eleição)

Resumo dos 10 cenários fictícios implementados em `src/data/scenarios.ts`,
para revisão rápida do time sem precisar ler o código.

> Todos os nomes de candidatos/partidos são fictícios. Nenhuma mídia real
> (imagem/vídeo/áudio) é usada — ver nota no fim do arquivo `scenarios.ts`.

| # | Mídia | Gatilho(s) | Resumo | Ação ideal | Fonte oficial |
|---|---|---|---|---|---|
| 1 | Texto | Urgência, Corrente | "Quem não votar até domingo perde o título para sempre" | Pesquisar | TSE — Serviços eleitorais |
| 2 | Texto | Medo, Falsa autoridade | "Técnico" anônimo alega que urnas favorecem um candidato | Pesquisar | TSE — Segurança da urna |
| 3 | Imagem | Falsa autoridade | Print de manchete falsa: candidata fictícia desiste da eleição | Pesquisar | TSE — Candidaturas |
| 4 | Imagem | Medo | "Documento oficial" falso sobre venda de dados biométricos | Denunciar | ANPD |
| 5 | Vídeo | Falsa autoridade, Urgência | "Especialista" alega fraude nas urnas sem provas | Pesquisar | TSE — Fato ou Boato |
| 6 | Vídeo | Falsa autoridade, Urgência | Vídeo forjado anunciando adiamento da eleição | Denunciar | TSE — Notícias oficiais |
| 7 | Áudio | Urgência, Corrente | Áudio "vazado" sobre mudança de local de votação | Pesquisar | TSE — Local de votação |
| 8 | Áudio | Medo, Falsa autoridade | Suposto "fiscal" pede para "revalidar o voto" por app | Denunciar | TSE — Aplicativo e-Título |
| 9 | Texto | Medo, Corrente | Corrente sobre voto nulo/branco cancelando a eleição | Pesquisar | TSE — Fato ou Boato |
| 10 | Imagem | Urgência, Falsa autoridade | Print de "resultado parcial" antes da apuração oficial | Denunciar | TSE — Resultados |

## Distribuição (revisão rápida)

- **Por mídia:** 3 texto · 3 imagem · 2 vídeo · 2 áudio
- **Por ação ideal:** 6 Pesquisar · 4 Denunciar · 0 Compartilhar · 0 Ignorar
  (nenhum cenário tem "compartilhar"/"ignorar" como ideal de propósito — em
  contexto eleitoral, o objetivo é sempre levar à checagem ou à denúncia)
- **Gatilhos mais usados:** Urgência (6), Falsa autoridade (6), Medo (5), Corrente (4)

## Pendências para o time

- [x] Revisar se a linguagem de cada mensagem soa natural/realista
- [x] Confirmar se todos os links de `fonteOficial.url` seguem no ar antes do deploy final
- [ ] Definir o visual dos cards de imagem/vídeo/áudio no `MessageBubble` (CSS/SVG, sem mídia real)