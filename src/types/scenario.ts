export type ActionType = "compartilhar" | "pesquisar" | "ignorar" | "denunciar";
export type MediaType = "texto" | "imagem" | "video" | "audio";
export type GatilhoId = "urgencia" | "medo" | "autoridade-falsa" | "corrente";

export interface ScenarioContent {
    tipo: MediaType;
    texto?: string;
    mediaUrl?: string;
    duracao?: string;
}

export interface Gatilho {
    id: GatilhoId;
    label: string;
    icone: React.ElementType;
    cor: "red" | "orange" | "teal" | "purple";
}

export interface Scenario {
    id: string;
    remetente: string;
    grupo: string;
    horario: string;
    conteudo: ScenarioContent;
    gatilhos: GatilhoId[];
    acaoIdeal: ActionType;
    sinalDeAlerta: string;
    ondeVerificar: string;
    fonteOficial: { nome: string; url: string };
    explicacao: string;
}

export interface Resposta {
    scenaroId: string;
    acaoEscolhida: ActionType;
    correta: boolean;
}

export interface Feedback {
    correto: boolean;
    mensagem: string;
    scenario: Scenario;
}