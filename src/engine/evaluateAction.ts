import type { ActionType, Feedback, NivelResposta, Scenario } from "../types/scenario";

export const PONTOS_POR_NIVEL: Record<NivelResposta, number> = {
  ideal: 10,
  aceitavel: 5,
  arriscada: 0,
};

export const ROTULO_ACAO: Record<ActionType, string> = {
  compartilhar: "Compartilhar",
  pesquisar: "Pesquisar",
  ignorar: "Ignorar",
  denunciar: "Denunciar",
};

// Classifica a ação escolhida: ideal, aceitável (não propaga a mensagem) ou arriscada.
export function classificarAcao(scenario: Scenario, acao: ActionType): NivelResposta {
  if (acao === scenario.acaoIdeal) return "ideal";
  if (acao === "compartilhar") return "arriscada";
  return "aceitavel";
}

function montarMensagem(scenario: Scenario, acao: ActionType, nivel: NivelResposta): string {
  const ideal = ROTULO_ACAO[scenario.acaoIdeal].toLowerCase();
  if (nivel === "ideal") {
    return `Boa escolha! ${ROTULO_ACAO[acao]} era a melhor ação para esta mensagem.`;
  }
  if (nivel === "aceitavel") {
    return `${ROTULO_ACAO[acao]} evita espalhar a mensagem, mas a ação ideal aqui era ${ideal}.`;
  }
  return `Cuidado! Compartilhar sem checar pode espalhar desinformação. O ideal era ${ideal}.`;
}

// Função pura: (cenário, ação) => feedback. Sem JSX e sem estado.
export function evaluateAction(scenario: Scenario, acao: ActionType): Feedback {
  const nivel = classificarAcao(scenario, acao);
  return {
    correto: nivel === "ideal",
    nivel,
    pontos: PONTOS_POR_NIVEL[nivel],
    mensagem: montarMensagem(scenario, acao, nivel),
    scenario,
  };
}
