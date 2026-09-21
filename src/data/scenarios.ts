import type { Scenario } from "../types/scenario";

// Conteúdo pedagógico do projeto — tema eleição (Task 2).
// Todos os nomes de candidatos, partidos e situações são FICTÍCIOS, criados
// apenas para fins didáticos. Nenhuma mídia real é usada: imagem/vídeo/áudio
// são simulados via CSS/SVG no MessageBubble

export const SCENARIOS: Scenario[] = [
  {
    id: "cenario-01",
    remetente: "Grupo da Igreja",
    grupo: "Grupo da Igreja",
    horario: "08:15",
    conteudo: {
      tipo: "texto",
      texto:
        "ATENÇÃO! Quem não votar até domingo às 17h perde o título de eleitor PARA SEMPRE! " +
        "Passa pra todo mundo antes que seja tarde!",
    },
    gatilhos: ["urgencia", "corrente"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Prazo dramático e inexistente combinado com pedido explícito de repasse em massa.",
    ondeVerificar:
      "Consultar a situação do título de eleitor diretamente no site do TSE.",
    fonteOficial: {
      nome: "TSE — Situação do título de eleitor",
      url: "https://www.tse.jus.br/servicos-eleitorais",
    },
    explicacao:
      "Não votar gera multa ou pendências a regularizar, mas não cancela o título \"para sempre\". " +
      "A urgência fabricada existe só para induzir o compartilhamento sem checagem.",
  },
  {
    id: "cenario-02",
    remetente: "Grupo Vizinhança Unida",
    grupo: "Grupo Vizinhança Unida",
    horario: "19:47",
    conteudo: {
      tipo: "texto",
      texto:
        "Um técnico me contou que as urnas eletrônicas dessa região já estão programadas para " +
        "favorecer um candidato. Não adianta votar em outro, é tudo combinado.",
    },
    gatilhos: ["medo", "autoridade-falsa"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Fonte anônima e não verificável (\"um técnico me contou\") fazendo uma acusação grave sem provas.",
    ondeVerificar:
      "Consultar as informações oficiais sobre os testes públicos de segurança e auditoria das urnas.",
    fonteOficial: {
      nome: "TSE — Segurança da urna eletrônica",
      url: "https://www.tse.jus.br/eleicoes/urna-eletronica/seguranca",
    },
    explicacao:
      "Alegações de fraude que citam fontes anônimas exploram o medo de que o voto \"não valha nada\", " +
      "desestimulando a participação eleitoral — sem apresentar nenhuma evidência verificável.",
  },
  {
    id: "cenario-03",
    remetente: "Página Notícia Já",
    grupo: "Grupo Notícias da Cidade",
    horario: "12:03",
    conteudo: {
      tipo: "imagem",
      texto:
        "Print de \"manchete\": \"Candidata Juliana Prado desiste da eleição horas antes do debate\"",
      mediaUrl: "https://placehold.co/600x400?text=print-manchete-desistencia",
    },
    gatilhos: ["autoridade-falsa"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Print de tela sem link clicável para a matéria e sem nome de veículo de imprensa reconhecível.",
    ondeVerificar:
      "Buscar o mesmo fato em pelo menos dois veículos de imprensa estabelecidos antes de acreditar.",
    fonteOficial: {
      nome: "TSE — Candidaturas e candidatos",
      url: "https://www.tse.jus.br/eleicoes/candidatos",
    },
    explicacao:
      "Prints de manchete são fáceis de forjar em qualquer editor de imagem. A ausência de um link " +
      "para a fonte original é, por si só, um forte sinal de alerta.",
  },
  {
    id: "cenario-04",
    remetente: "Contato desconhecido",
    grupo: "Alerta Eleitoral",
    horario: "10:22",
    conteudo: {
      tipo: "imagem",
      texto:
        "\"Documento oficial\" alegando que os dados biométricos dos eleitores serão vendidos a empresas privadas",
      mediaUrl: "https://placehold.co/600x400?text=documento-biometria-falso",
    },
    gatilhos: ["medo"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Documento sem timbre oficial verificável, número de protocolo ou fonte identificável, tratando de um tema técnico complexo de forma alarmista.",
    ondeVerificar:
      "Verificar comunicados oficiais sobre proteção de dados eleitorais nos canais do governo.",
    fonteOficial: {
      nome: "ANPD — Autoridade Nacional de Proteção de Dados",
      url: "https://www.gov.br/anpd/pt-br",
    },
    explicacao:
      "Documentos falsos sobre dados pessoais exploram o medo de vigilância e vazamento para gerar " +
      "engajamento — a denúncia à plataforma ajuda a impedir a disseminação para outras pessoas.",
  },
  {
    id: "cenario-05",
    remetente: "Canal Verdade Nua",
    grupo: "Grupo Debate Político",
    horario: "21:10",
    conteudo: {
      tipo: "video",
      texto:
        "\"Especialista em eleições\" afirma em vídeo ter provas de fraude nas urnas desta eleição",
      mediaUrl: "https://placehold.co/600x400?text=video-especialista-fraude",
      duracao: "2:34",
    },
    gatilhos: ["autoridade-falsa", "urgencia"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Título de \"especialista\" sem vínculo institucional verificável, fazendo uma alegação grave sem apresentar evidência auditável.",
    ondeVerificar:
      "Verificar se a pessoa tem vínculo real com instituições eleitorais e se a alegação já foi checada por agências de fact-checking.",
    fonteOficial: {
      nome: "TSE — Fato ou Boato",
      url: "https://www.tse.jus.br/comunicacao/fato-ou-boato",
    },
    explicacao:
      "Vídeos com autoridade autoproclamada e alegações graves sem prova auditável costumam viralizar " +
      "rápido justamente por parecerem confiáveis à primeira vista — por isso pesquisar antes de julgar é essencial.",
  },
  {
    id: "cenario-06",
    remetente: "Grupo Última Hora",
    grupo: "Grupo Última Hora",
    horario: "16:40",
    conteudo: {
      tipo: "video",
      texto:
        "Vídeo que se apresenta como \"pronunciamento oficial\" anunciando o adiamento da eleição",
      mediaUrl: "https://placehold.co/600x400?text=video-pronunciamento-falso",
      duracao: "1:05",
    },
    gatilhos: ["autoridade-falsa", "urgencia"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Anúncio de altíssimo impacto institucional (adiar uma eleição) circulando apenas em grupo de mensagens, sem cobertura de nenhum veículo de imprensa.",
    ondeVerificar:
      "Um adiamento de eleição só é válido se publicado oficialmente pelo TSE, nunca apenas por vídeo em grupo de WhatsApp.",
    fonteOficial: {
      nome: "TSE — Notícias oficiais",
      url: "https://www.tse.jus.br/comunicacao/noticias",
    },
    explicacao:
      "Anúncios institucionais de grande impacto sempre têm cobertura ampla da imprensa e publicação " +
      "oficial — quando aparecem isolados em um grupo, é sinal de conteúdo forjado, e não apenas duvidoso.",
  },
  {
    id: "cenario-07",
    remetente: "Vizinho do prédio",
    grupo: "Condomínio Jardim das Flores",
    horario: "07:58",
    conteudo: {
      tipo: "audio",
      texto:
        "Áudio \"vazado\" avisando que a seção eleitoral do bairro mudou de local de última hora",
      duracao: "0:38",
      mediaUrl: "https://placehold.co/600x400?text=audio-mudanca-local",
    },
    gatilhos: ["urgencia", "corrente"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Informação logística crítica (local de votação) sendo repassada por áudio informal, sem fonte oficial citada.",
    ondeVerificar:
      "Consultar o local de votação diretamente no site oficial usando o título de eleitor.",
    fonteOficial: {
      nome: "TSE — Local de votação",
      url: "https://www.tse.jus.br/eleicoes/local-de-votacao",
    },
    explicacao:
      "Mudanças reais de local de votação são sempre publicadas oficialmente. Um áudio informal e não " +
      "identificado sobre isso pode fazer a pessoa perder a hora de votar por engano.",
  },
  {
    id: "cenario-08",
    remetente: "Contato salvo como \"Zona Eleitoral\"",
    grupo: "Alerta Eleitoral",
    horario: "13:25",
    conteudo: {
      tipo: "audio",
      texto:
        "Áudio de um suposto \"fiscal eleitoral\" pedindo para o eleitor \"revalidar o voto\" por um aplicativo",
      duracao: "0:51",
      mediaUrl: "https://placehold.co/600x400?text=audio-revalidar-voto",
    },
    gatilhos: ["medo", "autoridade-falsa"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Pedido de ação em aplicativo externo não oficial para algo que não existe no processo eleitoral real (\"revalidar o voto\").",
    ondeVerificar:
      "O voto no Brasil não precisa de nenhuma \"revalidação\" por aplicativo; verificar apenas os canais oficiais do TSE.",
    fonteOficial: {
      nome: "TSE — Aplicativo e-Título",
      url: "https://www.tse.jus.br/servicos-eleitorais/aplicativos",
    },
    explicacao:
      "Esse padrão imita golpes financeiros: cria um procedimento falso e urgente, usando uma suposta " +
      "autoridade, para levar a vítima a instalar um aplicativo malicioso ou fornecer dados pessoais.",
  },
  {
    id: "cenario-09",
    remetente: "Grupo Amigos do Bairro",
    grupo: "Grupo Amigos do Bairro",
    horario: "20:05",
    conteudo: {
      tipo: "texto",
      texto:
        "Votar nulo ou em branco é o voto mais poderoso: se a maioria votar assim, a eleição é cancelada " +
        "e escolhem outro candidato. Repassa!",
    },
    gatilhos: ["medo", "corrente"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Afirmação categórica sobre uma regra eleitoral incomum, sem citar nenhuma fonte, pedindo repasse imediato.",
    ondeVerificar:
      "Consultar como votos nulos e brancos são de fato contabilizados na legislação eleitoral vigente.",
    fonteOficial: {
      nome: "TSE — Fato ou Boato",
      url: "https://www.tse.jus.br/comunicacao/fato-ou-boato",
    },
    explicacao:
      "Essa é uma desinformação recorrente em períodos eleitorais no Brasil: votos nulos/brancos não " +
      "cancelam a eleição nem elegem automaticamente outro nome — o boato explora o desejo de protesto do eleitor.",
  },
  {
    id: "cenario-10",
    remetente: "Página Resultado Rápido",
    grupo: "Grupo Acompanhando a Eleição",
    horario: "17:12",
    conteudo: {
      tipo: "imagem",
      texto:
        "Print de \"resultado parcial\" mostrando um candidato fictício vencendo, horas antes do horário oficial de apuração",
      mediaUrl: "https://placehold.co/600x400?text=print-resultado-parcial-falso",
    },
    gatilhos: ["urgencia", "autoridade-falsa"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Resultado divulgado antes do horário oficial de apuração, em formato de print sem identificação de fonte.",
    ondeVerificar:
      "Resultados oficiais só são publicados no horário e canal definidos pelo TSE, nunca antecipados em grupos de mensagem.",
    fonteOficial: {
      nome: "TSE — Resultados das eleições",
      url: "https://resultados.tse.jus.br",
    },
    explicacao:
      "Resultados fabricados antes da apuração oficial tentam gerar euforia, desânimo ou até contestação " +
      "precoce do processo — divulgar antecipadamente de forma falsa é uma tática usada para manipular a percepção pública.",
  },
];
