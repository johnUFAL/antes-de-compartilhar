import type { Scenario } from "../types/scenario";

export const SCENARIOS: Scenario[] = [
  {
    id: "cenario-01",
    remetente: "Grupo de Notícias",
    grupo: "Grupo de Notícias",
    horario: "09:41",
    conteudo: {
      tipo: "texto",
      texto:
        "URGENTE: O governo vai bloquear as redes sociais amanhã às 8h! " +
        "Repasse para todos os seus contatos para evitar o bloqueio no seu número!!! #BrasilLivre",
    },
    gatilhos: ["urgencia", "autoridade-falsa", "corrente"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Prazo absurdamente curto (\"amanhã às 8h\") combinado com pedido explícito de repasse em massa.",
    ondeVerificar:
      "Buscar o comunicado em veículos de imprensa e no site oficial do órgão regulador mencionado.",
    fonteOficial: {
      nome: "Agência Nacional de Telecomunicações (Anatel)",
      url: "https://www.gov.br/anatel/pt-br",
    },
    explicacao:
      "A mensagem cria urgência artificial e usa uma ameaça vaga a uma autoridade para induzir " +
      "o compartilhamento antes que a pessoa pare para verificar.",
  },
  {
    id: "cenario-02",
    remetente: "Tia Marta",
    grupo: "Família ❤️",
    horario: "14:12",
    conteudo: {
      tipo: "imagem",
      texto: "Print de uma \"reportagem\" alertando sobre contaminação em vacinas",
      mediaUrl: "/scenarios/cenario-02-print-falso.jpg",
    },
    gatilhos: ["medo", "autoridade-falsa"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Print de tela sem link para a matéria original e sem nome de veículo de imprensa identificável.",
    ondeVerificar:
      "Buscar o mesmo texto/imagem em agências de checagem de fatos antes de acreditar ou repassar.",
    fonteOficial: {
      nome: "Ministério da Saúde",
      url: "https://www.gov.br/saude/pt-br",
    },
    explicacao:
      "Prints de tela são fáceis de forjar e não permitem conferir a fonte original — a ausência " +
      "de um link clicável já é, por si só, um sinal de alerta.",
  },
  {
    id: "cenario-03",
    remetente: "Grupo do Trabalho",
    grupo: "Grupo do Trabalho",
    horario: "18:30",
    conteudo: {
      tipo: "video",
      texto: "Vídeo de um \"especialista\" anunciando um golpe financeiro do governo",
      mediaUrl: "/scenarios/cenario-03-thumb.jpg",
      duracao: "1:12",
    },
    gatilhos: ["autoridade-falsa", "urgencia"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Pessoa se apresenta como autoridade sem vínculo verificável, pedindo ação financeira imediata.",
    ondeVerificar:
      "Confirmar se o canal/pessoa é uma fonte oficial verificada antes de qualquer ação financeira.",
    fonteOficial: {
      nome: "Banco Central do Brasil",
      url: "https://www.bcb.gov.br",
    },
    explicacao:
      "Vídeos com autoridade fabricada e pedido de ação financeira urgente são um padrão clássico " +
      "de golpe — a denúncia à plataforma ajuda a impedir que outras pessoas sejam atingidas.",
  },
  {
    id: "cenario-04",
    remetente: "Grupo Bairro Seguro",
    grupo: "Grupo Bairro Seguro",
    horario: "07:05",
    conteudo: {
      tipo: "audio",
      texto: "Áudio alertando sobre um \"sequestro relâmpago\" acontecendo agora no bairro",
      duracao: "0:42",
    },
    gatilhos: ["medo", "urgencia", "corrente"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Áudio sem identificação de quem fala, relatando um evento \"acontecendo agora\" e pedindo repasse imediato.",
    ondeVerificar:
      "Verificar boletins oficiais de segurança pública da região antes de repassar o alerta.",
    fonteOficial: {
      nome: "Secretaria de Segurança Pública (estadual)",
      url: "https://www.gov.br/mj/pt-br/assuntos/sua-seguranca",
    },
    explicacao:
      "Áudios são difíceis de rastrear até a origem e costumam ser repassados em cadeia — a urgência " +
      "impede que as pessoas parem para checar se o fato realmente ocorreu.",
  },
];