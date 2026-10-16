import type { Scenario } from "../types/scenario";

// Conteúdo pedagógico do projeto — tema eleição (Task 2).
// Todos os nomes de candidatos, partidos e situações são FICTÍCIOS, criados
// apenas para fins didáticos. Nenhuma mídia real é usada: imagem/vídeo/áudio
// são simulados via CSS/SVG no MessageBubble

export const SCENARIOS: Scenario[] = [
  {
    // ---------------------------------------------------------------------------
    // POLITICA 
    // ---------------------------------------------------------------------------
    id: "cenario-01",
    remetente: "Crente judia",
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
    remetente: "Sheyla Madeira",
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
      url: "https://www.justicaeleitoral.jus.br/fato-ou-boato/#urna-eletronica",
    },
    explicacao:
      "Alegações de fraude que citam fontes anônimas exploram o medo de que o voto \"não valha nada\", " +
      "desestimulando a participação eleitoral — sem apresentar nenhuma evidência verificável.",
  },
  {
    id: "cenario-03",
    remetente: "Grupo Notícia Já",
    grupo: "Grupo Notícia Já",
    horario: "12:03",
    conteudo: {
      tipo: "imagem",
      texto:
        "Candidata Juliana Prado desiste da eleição horas antes do debate.",
      mediaUrl: "/scenarios/imagem-cenario-03.jpeg",
      mediaAlt: "Print de \"manchete\": \"Candidata Juliana Prado desiste da eleição horas antes do debate\""
    },
    gatilhos: ["autoridade-falsa"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Print de tela sem link clicável para a matéria e sem nome de veículo de imprensa reconhecível.",
    ondeVerificar:
      "Buscar o mesmo fato em pelo menos dois veículos de imprensa estabelecidos antes de acreditar.",
    fonteOficial: {
      nome: "TSE — Candidaturas e candidatos",
      url: "https://divulgacandcontas.tse.jus.br/divulga/#/home",
    },
    explicacao:
      "Prints de manchete são fáceis de forjar em qualquer editor de imagem. A ausência de um link " +
      "para a fonte original é, por si só, um forte sinal de alerta.",
  },
  {
    id: "cenario-04",
    remetente: "Contato desconhecido",
    grupo: "Contato desconhecido",
    horario: "10:22",
    conteudo: {
      tipo: "imagem",
      texto:
        "Documento oficial que mostra que os dados biométricos dos eleitores serão vendidos a empresas privadas.",
      mediaUrl: "/scenarios/imagem-cenario-04.jpeg",
      mediaAlt: "\"Documento oficial\" alegando que os dados biométricos dos eleitores serão vendidos a empresas privadas",
    },
    gatilhos: ["medo"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Documento sem timbre oficial verificável, número de protocolo ou fonte identificável, tratando de um tema técnico complexo de forma alarmista.",
    ondeVerificar:
      "Verificar comunicados oficiais sobre proteção de dados eleitorais nos canais do governo.",
    fonteOficial: {
      nome: "ANPD — Autoridade Nacional de Proteção de Dados",
      url: "https://www.gov.br/anpd/pt-br/assuntos/marco-civil-da-internet",
    },
    explicacao:
      "Documentos falsos sobre dados pessoais exploram o medo de vigilância e vazamento para gerar " +
      "engajamento — a denúncia à plataforma ajuda a impedir a disseminação para outras pessoas.",
  },
  {
    id: "cenario-05",
    remetente: "Verdade Nua",
    grupo: "Grupo Debate Político",
    horario: "21:10",
    conteudo: {
      tipo: "video",
      texto:
        "Especialista em eleições afirma em vídeo ter provas de fraude nas urnas desta eleição.",
      mediaUrl: "/scenarios/video-cenario-05.png",
      mediaAlt: "\"Especialista em eleições\" afirma em vídeo ter provas de fraude nas urnas desta eleição",
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
      url: "https://www.justicaeleitoral.jus.br/fato-ou-boato/#urna-eletronica",
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
      tipo: "imagem",
      texto:
        "[OFICIAL] As eleições para esse ano serão adiadas!",
      mediaUrl: "/scenarios/imagem-cenario-06.png",
      mediaAlt: "Vídeo que se apresenta como \"pronunciamento oficial\" anunciando o adiamento da eleição",
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
        "Transcrição\n" + "\"Atenção, moradores do distrito. Um comunicado emitido há poucos instantes pela comissão central confirma a alteração emergencial na seção eleitoral do bairro. Repetindo: devido a imprevistos de última hora, o local de votação original foi desativado. Todos os cidadãos devem se dirigir imediatamente ao novo endereço indicado no mapa oficial para garantir o seu registro.\"",
      duracao: "0:38",
      mediaUrl: "/scenarios/audio-cenario-07.mp3",
    },
    gatilhos: ["urgencia", "corrente"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Informação logística crítica (local de votação) sendo repassada por áudio informal, sem fonte oficial citada.",
    ondeVerificar:
      "Consultar o local de votação diretamente no site oficial usando o título de eleitor.",
    fonteOficial: {
      nome: "TSE — Local de votação",
      url: "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/",
    },
    explicacao:
      "Mudanças reais de local de votação são sempre publicadas oficialmente. Um áudio informal e não " +
      "identificado sobre isso pode fazer a pessoa perder a hora de votar por engano.",
  },
  {
    id: "cenario-08",
    remetente: "Fiscal eleitoral",
    grupo: "Fiscal eleitoral",
    horario: "13:25",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" + "\"Aqui é o fiscal eleitoral da zona central. Estamos entrando em contato porque identificamos uma inconsistência na assinatura digital do seu terminal de votação. Para que o seu voto não seja anulado pelo sistema, você precisa fazer a revalidação imediata. Por favor, baixe o aplicativo que acabei de enviar no seu link privado, insira sua chave de segurança e confirme o código.\"",
      duracao: "0:51",
      mediaUrl: "/scenarios/audio-cenario-08.mp3",
    },
    gatilhos: ["medo", "autoridade-falsa"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Pedido de ação em aplicativo externo não oficial para algo que não existe no processo eleitoral real (\"revalidar o voto\").",
    ondeVerificar:
      "O voto no Brasil não precisa de nenhuma \"revalidação\" por aplicativo; verificar apenas os canais oficiais do TSE.",
    fonteOficial: {
      nome: "TSE — Aplicativo e-Título",
      url: "https://www.tse.jus.br/servicos-eleitorais/e-titulo-perguntas-frequentes/1-o-que-e-o-e-titulo",
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
      url: "https://www.justicaeleitoral.jus.br/fato-ou-boato/",
    },
    explicacao:
      "Essa é uma desinformação recorrente em períodos eleitorais no Brasil: votos nulos/brancos não " +
      "cancelam a eleição nem elegem automaticamente outro nome — o boato explora o desejo de protesto do eleitor.",
  },
  {
    id: "cenario-10",
    remetente: "Tio Ricardo",
    grupo: "Família Unida",
    horario: "10:05",
    conteudo: {
      tipo: "texto",
      texto:
        "Pessoal, uma dica pra quem ainda não conferiu: dá pra consultar o local de votação pelo site do TSE " +
        "ou pelo app e-Título, usando o título ou o CPF. Sem pressa, mas vale olhar antes do dia.",
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "Aqui não há sinais de alerta: a mensagem indica o canal oficial (site do TSE e app e-Título), não pede dados nem repasse em massa e não cria pressa.",
    ondeVerificar:
      "Conferir no site do TSE as opções de consulta do local de votação, as mesmas que a mensagem cita.",
    fonteOficial: {
      nome: "TSE — Local de votação",
      url: "https://www.tse.jus.br/servicos-eleitorais/e-titulo-perguntas-frequentes/1-o-que-e-o-e-titulo",
    },
    explicacao:
      "Uma boa informação pode ser reconhecida pelo que ela não faz: não ameaça, não apressa e aponta para a fonte oficial. Compartilhar mensagens assim ajuda as pessoas a se informarem pelo canal certo.",
  },
  // ---------------------------------------------------------------------------
  // SAÚDE
  // ---------------------------------------------------------------------------
  {
    id: "cenario-11",
    remetente: "Tia Marta",
    grupo: "Família Unida",
    horario: "09:41",
    conteudo: {
      tipo: "texto",
      texto:
        "URGENTE!! Um médico americano descobriu que bicarbonato com limão CURA o câncer e os laboratórios " +
        "escondem isso de você. Manda pra quem você ama, pode salvar uma vida!",
    },
    gatilhos: ["medo", "autoridade-falsa", "corrente"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Cura milagrosa para doença grave, \"médico\" sem nome nem instituição e a acusação de que \"escondem de você\" são marcas clássicas de desinformação em saúde.",
    ondeVerificar:
      "Buscar o suposto estudo ou médico em fontes oficiais de saúde e em agências de checagem antes de repassar.",
    fonteOficial: {
      nome: "Ministério da Saúde — Saúde com Ciência",
      url: "https://www.gov.br/saude/pt-br/assuntos/saude-com-ciencia",
    },
    explicacao:
      "A mensagem mistura medo (doença grave) com falsa autoridade (médico anônimo) e pede repasse emocional. " +
      "Acreditar em \"truques caseiros\" pode levar alguém a abandonar o tratamento de verdade.",
  },
  {
    id: "cenario-12",
    remetente: "Síndico Rian",
    grupo: "Condomínio Jardim das Flores",
    horario: "14:20",
    conteudo: {
      tipo: "imagem",
      texto:
        "COMUNICADO OFICIAL: lote de vacinas será recolhido após mortes.",
      mediaUrl: "/scenarios/imagem-cenario-12.jpeg",
      mediaAlt: "Imagem com logotipo parecido com o de um órgão de saúde e o texto: \"COMUNICADO OFICIAL: lote de vacinas " +
        "será recolhido após mortes. Não leve seus filhos ao posto. Compartilhe!\"",
    },
    gatilhos: ["autoridade-falsa", "medo", "urgencia"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Um \"comunicado oficial\" enviado só como imagem, sem link para o site do órgão, sem número de nota e sem data, é forte indício de montagem.",
    ondeVerificar:
      "Procurar o comunicado nos canais oficiais do Ministério da Saúde. Se não estiver lá, é falso.",
    fonteOficial: {
      nome: "Ministério da Saúde — Segurança das Vacinas",
      url: "https://www.gov.br/saude/pt-br/vacinacao/esavi",
    },
    explicacao:
      "Imitar a identidade visual de um órgão público dá aparência de legitimidade. A imagem usa medo e urgência " +
      "para você repassar antes de checar — e pode afastar crianças da vacinação. Denunciar ajuda a frear a circulação.",
  },
  {
    id: "cenario-13",
    remetente: "Agente Cláudia (Posto Vila Nova)",
    grupo: "Moradores da Vila Nova",
    horario: "08:30",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" + "\"Bom dia, pessoal, aqui é a Cláudia, agente de saúde do posto da Vila Nova. Na campanha de vacinação, " +
        "o posto vai abrir uma hora mais cedo. Quem tiver dúvida sobre a vacina de cada idade pode olhar o " +
        "calendário no site do Ministério da Saúde ou passar aqui no posto.\"",
      mediaUrl: "/scenarios/audio-cenario-13.mp3",
      duracao: "0:24",
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "Aqui não há sinais de alerta: a pessoa se identifica com nome e local de trabalho, a informação é prática e verificável no posto, e a mensagem indica o calendário oficial para conferir.",
    ondeVerificar:
      "Conferir o calendário no site do Ministério da Saúde ou perguntar direto na unidade de saúde do bairro.",
    fonteOficial: {
      nome: "Ministério da Saúde — Calendário de Vacinação",
      url: "https://www.gov.br/saude/pt-br/vacinacao/calendario",
    },
    explicacao:
      "Diferente dos áudios de \"uma conhecida que trabalha lá\", aqui a pessoa e o local são identificáveis, e qualquer um pode confirmar com uma ida ao posto. Identificação e verificabilidade são o que separam um aviso útil de um boato.",
  },

  // ---------------------------------------------------------------------------
  // GOLPES FINANCEIROS
  // ---------------------------------------------------------------------------
  {
    id: "cenario-14",
    remetente: "Banco Horizonte",
    grupo: "Banco Horizonte",
    horario: "11:33",
    conteudo: {
      tipo: "texto",
      texto:
        "Seu Pix foi BLOQUEADO por atividade suspeita. Regularize em até 1 hora para evitar o cancelamento " +
        "da sua conta: bit.ly/regulariza-pix-agora",
    },
    gatilhos: ["urgencia", "medo", "autoridade-falsa"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Prazo curto, ameaça de cancelamento e link encurtado: o tripé do golpe de phishing bancário.",
    ondeVerificar:
      "Abrir o aplicativo do seu banco digitando o endereço você mesmo, ou ligar para o número impresso no cartão. Nunca usar o link recebido.",
    fonteOficial: {
      nome: "Banco Central do Brasil",
      url: "https://www.bcb.gov.br/estabilidadefinanceira/pix",
    },
    explicacao:
      "O golpista imita um banco para criar pânico e levar você a um site falso que rouba senhas. Em situações de medo ou pressa, o ideal é parar e confirmar por um canal que você mesmo abriu.",
  },
  {
    id: "cenario-15",
    remetente: "Daniel Vorcaro (número novo)",
    grupo: "Daniel Vorcaro (número novo)",
    horario: "16:50",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" + "\"Oi, meu véi, meu brother. Meu celular quebrou, estou usando esse número novo. Preciso pagar um boleto " +
        "hoje e estou sem acesso ao app do banco. Você consegue fazer um Pix pra mim? Depois te explico.\"",
      mediaUrl: "/scenarios/audio-cenario-15.mp3",
      duracao: "0:19",
    },
    gatilhos: ["urgencia", "medo"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Pedido de dinheiro vindo de um \"número novo\", com urgência e sem explicação. A voz pode ser imitada com inteligência artificial.",
    ondeVerificar:
      "Ligar para o número antigo ou confirmar por outro canal (outro familiar, chamada de vídeo) antes de qualquer pagamento.",
    fonteOficial: {
      nome: "Banco Central do Brasil",
      url: "https://www.bcb.gov.br/estabilidadefinanceira/pix",
    },
    explicacao:
      "No golpe do falso parente, o criminoso usa a confiança familiar e a pressa para evitar que você confirme. Ligar para quem supostamente pediu o dinheiro desmonta o golpe.",
  },
  {
    id: "cenario-16",
    remetente: "Guilherme (namorado de trabalho)",
    grupo: "Equipe Financeiro",
    horario: "12:40",
    conteudo: {
      tipo: "texto",
      texto:
        "Dica de segurança pra vocês: no aplicativo do seu banco dá pra definir um limite de valor para o Pix, " +
        "inclusive para o período da noite. Se alguém entrar na sua conta, o prejuízo fica menor. " +
        "Vale olhar as configurações do app do seu banco.",
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "Aqui não há sinais de alerta: é uma dica de proteção que você mesmo executa no aplicativo oficial do seu banco, sem links, sem pedir dados e sem pressa.",
    ondeVerificar:
      "Abrir o aplicativo do seu próprio banco e procurar a opção de limites do Pix, ou consultar o Banco Central para orientações de segurança.",
    fonteOficial: {
      nome: "Banco Central do Brasil",
      url: "https://www.bcb.gov.br/meubc/bcprotege",
    },
    explicacao:
      "Dicas de segurança confiáveis mandam você agir dentro de canais que você mesmo abre, e não em links recebidos. Compartilhar esse tipo de orientação ajuda a reduzir o prejuízo caso alguém caia em um golpe.",
  },
  {
    id: "cenario-17",
    remetente: "Ficar rico é bem fácil na real",
    grupo: "Investidores do Zap",
    horario: "20:30",
    conteudo: {
      tipo: "video",
      texto:
        "Apresentador de telejornal anuncia uma nova plataforma que devolve R$ 5.000 a quem " +
        "investir R$ 500 hoje.",
      mediaUrl: "/scenarios/video-cenario-17.png",
      mediaAlt: "Vídeo de um \"apresentador de telejornal\" dizendo que uma nova plataforma devolve R$ 5.000 a quem " +
        "investir R$ 500 hoje. As vagas acabam em poucas horas.",
      duracao: "0:57",
    },
    gatilhos: ["autoridade-falsa", "urgencia"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Retorno garantido e altíssimo em pouco tempo, prazo curto e um rosto conhecido \"recomendando\". Rostos e vozes podem ser falsificados por IA.",
    ondeVerificar:
      "Procurar a empresa na lista de instituições autorizadas pelos órgãos reguladores do mercado financeiro e checar se o veículo citado publicou a matéria.",
    fonteOficial: {
      nome: "CVM — Comissão de Valores Mobiliários",
      url: "https://sac.cvm.gov.br/csm",
    },
    explicacao:
      "Promessas de lucro garantido são o sinal mais comum de fraude de investimento. O vídeo usa uma falsa autoridade para dar confiança e a urgência para impedir você de pesquisar.",
  },

  // ---------------------------------------------------------------------------
  // OUTROS TEMAS
  // ---------------------------------------------------------------------------
  {
    id: "cenario-18",
    remetente: "Jão Duarte",
    grupo: "Turma da Faculdade",
    horario: "13:15",
    conteudo: {
      tipo: "texto",
      texto:
        "Galera, achei uma vaga de home office pagando R$ 300 por dia, sem experiência! Só precisa pagar " +
        "R$ 49 de taxa de cadastro. Eu já me inscrevi, corre que as vagas são limitadas!",
    },
    gatilhos: ["urgencia"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "Salário alto sem exigir experiência e cobrança de taxa antecipada para \"garantir\" a vaga.",
    ondeVerificar:
      "Pesquisar o nome da empresa e a reputação dela. Empresas sérias não cobram taxa de quem busca emprego.",
    fonteOficial: {
      nome: "Consumidor.gov.br",
      url: "https://consumidor.gov.br/pages/conteudo/publico/1",
    },
    explicacao:
      "O golpe do falso emprego lucra com a taxa de cadastro e, muitas vezes, com os dados pessoais coletados. Quando a mensagem vem de uma pessoa conhecida, a chance de a conta ter sido invadida também cresce.",
  },
  {
    id: "cenario-19",
    remetente: "Seu Novaes",
    grupo: "Vizinhança Segura",
    horario: "21:15",
    conteudo: {
      tipo: "imagem",
      texto:
        "Uma rua aqui na cidade está sendo tomada por uma enchente. Chuvas fortes, cuidado!!!",
      mediaUrl: "/scenarios/imagem-cenario-19.jpeg",
      mediaAlt: "Vídeo de uma rua sendo tomada por uma enchente, com a legenda: \"AGORA na nossa cidade!! Cuidado, " +
        "fiquem em casa!\" Não aparece nome de rua, data nem veículo de imprensa.",
      duracao: "0:37",
    },
    gatilhos: ["medo", "urgencia"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Vídeo sem data, local ou fonte, apresentado como \"agora\". Vídeos antigos ou de outras cidades são reaproveitados em desastres.",
    ondeVerificar:
      "Conferir a Defesa Civil local e veículos de imprensa da região. Uma busca reversa pelas imagens mostra se o vídeo já circulou antes.",
    fonteOficial: {
      nome: "Aos Fatos",
      url: "https://www.aosfatos.org",
    },
    explicacao:
      "Conteúdo fora de contexto é uma das técnicas mais comuns: o material é real, mas de outra época ou lugar. Medo e urgência fazem a pessoa repassar sem checar, o que atrapalha o alerta verdadeiro.",
  },
  {
    id: "cenario-20",
    remetente: "Pascal",
    grupo: "Família Pingola",
    horario: "07:00",
    conteudo: {
      tipo: "texto",
      texto:
        "Novidade! Quem repassar esta mensagem para 10 contatos até a meia-noite ganha o WhatsApp dourado, " +
        "com cores exclusivas. Quem não repassar continua com a versão comum!",
    },
    gatilhos: ["corrente", "urgencia"],
    acaoIdeal: "ignorar",
    sinalDeAlerta:
      "Prêmio ou \"recurso exclusivo\" em troca de repassar a mensagem para um número fixo de contatos, com prazo para cumprir: é uma corrente, sem fonte nem informação a verificar.",
    ondeVerificar:
      "Aplicativos não liberam recursos por quantidade de repasses. Se a mensagem trouxesse um link para \"baixar\" a versão especial, o caso mudaria: seria golpe e o ideal seria denunciar.",
    fonteOficial: {
      nome: "Agência Lupa",
      url: "https://lupa.news",
    },
    explicacao:
      "Correntes prometem um benefício falso para se espalhar sozinhas. Aqui não há link, pedido de dados nem dano direto, então ignorar é a resposta ideal. Compartilhar só multiplicaria a corrente, e pesquisar ou denunciar seria esforço desnecessário.",
  },
  {
    id: "cenario-21",
    remetente: "Posto de Saúde Central",
    grupo: "Notícias do Bairro",
    horario: "09:00",
    conteudo: {
      tipo: "imagem",
      texto:
        "Campanha de vacinação",
      mediaUrl: "/scenarios/imagem-cenario-21.jpeg",
      mediaAlt: "Card colorido de campanha de vacinação com datas, público-alvo e a frase \"Consulte o calendário completo " +
        "no site do Ministério da Saúde\". Enviado por uma conta verificada do posto de saúde do bairro.",
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "Aqui não há sinais de alerta: o conteúdo informa datas e público-alvo, indica onde conferir e vem de uma conta verificada do serviço de saúde.",
    ondeVerificar:
      "Conferir o calendário completo no site do Ministério da Saúde, o mesmo que a própria mensagem indica.",
    fonteOficial: {
      nome: "Ministério da Saúde — Calendário de Vacinação",
      url: "https://www.gov.br/saude/pt-br/vacinacao/calendario",
    },
    explicacao:
      "Nem toda mensagem é desinformação. Informações de utilidade pública, de fonte identificável e verificável, vale compartilhar. Desconfiar de tudo também é um problema: a boa informação precisa circular.",
  },
  {
    id: "cenario-22",
    remetente: "Marcelo (amigo da faculdade)",
    grupo: "Turma da Faculdade",
    horario: "17:25",
    conteudo: {
      tipo: "imagem",
      texto:
        "Banco nunca pede senha nem envia link por SMS, vejam!",
      mediaUrl: "/scenarios/imagem-cenario-22.png",
      mediaAlt: "Print da página de segurança do site oficial de um banco, com o endereço visível na barra, avisando " +
        "que o banco nunca pede senha nem envia link por SMS. Marcelo escreveu: \"Recebi um SMS falso, conferi " +
        "no site oficial do meu banco e vi esse aviso. Bom saber, o link tá aí na conversa.\"",
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "Aqui não há sinais de alerta: a pessoa conta o que viveu, a informação vem do site oficial do banco com endereço visível e dá pra conferir você mesmo, sem clicar em link suspeito.",
    ondeVerificar:
      "Acessar o site do seu banco digitando o endereço e procurar a página de segurança, ou ligar para o número do cartão.",
    fonteOficial: {
      nome: "Banco Central do Brasil",
      url: "https://www.bcb.gov.br",
    },
    explicacao:
      "Alertas de golpe são úteis quando indicam uma fonte que você consegue confirmar por conta própria. Mesmo assim, o certo é conferir no canal oficial, sem usar link recebido.",
  },
  {
    id: "cenario-23",
    remetente: "Dona Neide",
    grupo: "Vizinhança Segura",
    horario: "19:20",
    conteudo: {
      tipo: "texto",
      texto:
        "Gente, um lembrete útil pra época de chuva: dá pra receber os alertas da Defesa Civil de graça no " +
        "celular. É só mandar um SMS com o CEP da sua casa para o número 40199. Eu já me cadastrei e fiz também " +
        "o do meu pai. Quem quiser pode conferir a informação no site da Defesa Civil do estado.",
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "Aqui não há sinais de alerta: a dica é gratuita, não pede dados além do CEP, não exige repasse nem cria pressa, e a própria mensagem indica o site oficial da Defesa Civil para conferir.",
    ondeVerificar:
      "Conferir no site da Defesa Civil do seu estado, ou em portais de governo, como o cadastro funciona (SMS para o 40199 com o CEP).",
    fonteOficial: {
      nome: "Governo do RS — Como receber alertas da Defesa Civil",
      url: "https://estado.rs.gov.br/como-se-cadastrar-para-receber-avisos-e-alertas-da-defesa-civil-no-celular",
    },
    explicacao:
      "Compare com o vídeo de enchente \"agora\", sem data nem fonte: este aviso ensina a receber alertas pelo canal oficial, em vez de depender de vídeos que circulam sem origem. Compartilhar ajuda os vizinhos a se prepararem.",
  },
  {
    id: "cenario-24",
    remetente: "Pedro (neto)",
    grupo: "Família Unida",
    horario: "11:10",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" +
        "\"Vó, lembra que a senhora queria agendar o atendimento no INSS? Não precisa pagar ninguém: dá pra " +
        "agendar pelo aplicativo Meu INSS ou ligando pro 135. Se alguém cobrar taxa ou pedir sua senha pelo " +
        "WhatsApp, é golpe. Qualquer coisa me chama que eu ajudo a senhora.\"",
      mediaUrl: "/scenarios/audio-cenario-24.mp3",
      duracao: "0:26",
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "Aqui não há sinais de alerta: quem fala é uma pessoa conhecida, a orientação aponta os canais oficiais (Meu INSS e telefone 135), não pede dinheiro nem dados e ainda alerta contra golpes.",
    ondeVerificar:
      "Conferir os canais oficiais de atendimento (Meu INSS e Central 135) no site do INSS.",
    fonteOficial: {
      nome: "INSS — Central 135",
      url: "https://www.gov.br/inss/pt-br/canais_atendimento/central-135",
    },
    explicacao:
      "Mensagens confiáveis apontam para os canais oficiais e dizem o que o órgão nunca faz, como cobrar taxa. Compartilhar esse tipo de orientação protege quem mais sofre com golpes, como aposentados.",
  },
  {
    id: "cenario-25",
    remetente: "Waldo Moraes",
    grupo: "Os Farroupilhas",
    horario: "09:32",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" +
        "\"Gente, alguém sabe por que o cachorro do vizinho está latindo desde cedo? 😂\"",
      mediaUrl: "/scenarios/audio-cenario-25.mp3",
      duracao: "0:06",
    },
    gatilhos: [],
    acaoIdeal: "ignorar",
    sinalDeAlerta:
      "A mensagem não apresenta uma informação relevante nem algo que precise ser repassado.",
    ondeVerificar:
      "Não há necessidade de verificar uma informação que não apresenta uma alegação relevante.",
    fonteOficial: null,
    explicacao:
      "Nem toda mensagem recebida precisa de uma resposta ou compartilhamento. " +
      "Ignorar conteúdos irrelevantes também é uma forma de evitar ruído nas conversas."
  },
  {
    id: "cenario-26",
    remetente: "Jaizinho",
    grupo: "Jaizinho",
    horario: "21:14",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" +
        "\"Quem ainda apoia esse candidato depois de tudo isso só pode ser muito burro. " +
        "Compartilhe para todo mundo saber!\"",
      mediaUrl: "/scenarios/audio-cenario-26.mp3",
      duracao: "0:05",
    },
    gatilhos: ["provocacao", "pressao-social"],
    acaoIdeal: "ignorar",
    sinalDeAlerta:
      "A mensagem tenta provocar uma reação emocional e incentivar o compartilhamento por pressão social.",
    ondeVerificar:
      "Não há uma afirmação factual específica que precise ser verificada.",
    fonteOficial: null,
    explicacao:
      "Mensagens provocativas podem gerar discussões e compartilhamentos sem acrescentar informação. " +
      "Quando o conteúdo serve apenas para provocar, ignorá-lo pode ser a melhor escolha."
  },
  {
    id: "cenario-27",
    remetente: "Companhia de Energia",
    grupo: "Companhia de Energia",
    horario: "10:45",
    conteudo: {
      tipo: "texto",
      texto:
        "Aviso: haverá interrupção programada de energia amanhã, das 9h às 13h, " +
        "para manutenção da rede. Organize-se com antecedência."
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "A mensagem apresenta motivo, data e horário específicos e identifica a empresa responsável.",
    ondeVerificar:
      "Consultar o site ou aplicativo oficial da companhia de energia.",
    fonteOficial: {
      nome: "Site oficial da companhia",
      url: "https://al.equatorialenergia.com.br/"
    },
    explicacao:
      "Informações de serviço verificáveis podem ser úteis para outras pessoas afetadas. " +
      "Nesse caso, compartilhar ajuda os membros do grupo a se prepararem."
  },
  {
    id: "cenario-28",
    remetente: "Defesa Civil",
    grupo: "Defesa Civil",
    horario: "16:20",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" +
        "\"A Defesa Civil informa: há previsão de chuvas intensas entre esta noite " +
        "e amanhã. Evite áreas de risco e acompanhe os canais oficiais.\"",
      mediaUrl: "/scenarios/audio-cenario-28.mp3",
      duracao: "0:07",
    },
    gatilhos: [],
    acaoIdeal: "compartilhar",
    sinalDeAlerta:
      "A mensagem identifica claramente o órgão responsável e orienta a população a acompanhar os canais oficiais.",
    ondeVerificar:
      "Consultar os canais oficiais da Defesa Civil para confirmar o alerta.",
    fonteOficial: {
      nome: "Defesa Civil — Alertas",
      url: "https://www.gov.br/mdr/pt-br/assuntos/protecao-e-defesa-civil"
    },
    explicacao:
      "Alertas oficiais sobre riscos à população podem ser importantes para outras pessoas. " +
      "Quando a origem é identificável e verificável, compartilhar pode ajudar a prevenir acidentes."
  },
  {
    id: "cenario-29",
    remetente: "Pedro (neto)",
    grupo: "Família Unida",
    horario: "23:48",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" +
        "\"Hoje não é o pior dia da sua vida. Hoje e amanhã, passa rápido. " +
        "As pessoas vão estar com você o tempo todo, com medo de te deixar sozinha. " +
        "O pior dia... vem na semana que vem. Quando só restar o silêncio. " +
        "Talvez você ainda não perceba, mas algumas coisas estão prestes a mudar. " +
        "Nem todo mundo que está ao seu lado continuará por perto quando tudo acontecer. " +
        "Por isso, aproveite cada momento, abrace quem você ama e não deixe para dizer " +
        "amanhã aquilo que poderia dizer hoje. O tempo não espera ninguém e algumas " +
        "oportunidades desaparecem sem avisar. Se você recebeu essa mensagem, pare por " +
        "um instante, olhe ao seu redor e pense nas pessoas que fazem parte da sua vida. " +
        "Não ignore os sinais. Não deixe o silêncio chegar sem antes fazer aquilo que " +
        "seu coração está pedindo.\"",
      mediaUrl: "/scenarios/audio-cenario-29.mp3",
      duracao: "0:30",
    },
    gatilhos: [],
    acaoIdeal: "ignorar",
    sinalDeAlerta:
      "É uma mensagem de reflexão pessoal, sem uma informação concreta ou orientação que precise ser repassada.",
    ondeVerificar:
      "Não há necessidade de verificar. Trata-se de uma reflexão pessoal, sem uma afirmação factual.",
    fonteOficial: null,
    explicacao:
      "A mensagem transmite uma reflexão sobre o tempo, as pessoas e os momentos da vida. " +
      "Ela não apresenta uma notícia ou informação que precise ser confirmada. " +
      "Por isso, embora possa fazer sentido para quem recebeu, não há necessidade de compartilhá-la."
  },
  {
    id: "cenario-30",
    remetente: "Daniel Vorcaro",
    grupo: "Daniel Vorcaro",
    horario: "22:17",
    conteudo: {
      tipo: "audio",
      texto:
        "Transcrição\n" +
        "\"Nem toda atitude merece tolerância. " +
        "E certamente nem todo mundo que grita mais alto merece ser ouvido. " +
        "Está na hora de escolher de que lado você está. " +
        "Fique em silêncio se quiser. Mas lembre-se: quando pessoas de bem deixam de falar, " +
        "outras pessoas ocupam o espaço. Compartilhe esta mensagem. Faça sua voz ser ouvida. " +
        "Não deixe que eles tomem aquilo que é nosso.\"",
      mediaUrl: "/scenarios/audio-cenario-30.mp3",
      duracao: "0:23",
    },
    gatilhos: ["medo", "polarizacao", "pressao-social"],
    acaoIdeal: "denunciar",
    sinalDeAlerta:
      "O áudio tenta criar uma divisão entre 'nós' e 'eles', usando medo, hostilidade e pressão para incentivar a mobilização contra outras pessoas.",
    ondeVerificar:
      "Não é necessário verificar uma opinião para reconhecer o tom hostil. Avalie o conteúdo e utilize as ferramentas da plataforma caso ele incentive hostilidade ou violência.",
    fonteOficial: {
      nome: "Central de Segurança — WhatsApp",
      url: "https://faq.whatsapp.com/1142481766359885/?locale=pt_BR&cms_platform=web"
    },
    explicacao:
      "O problema não está apenas em uma informação ser verdadeira ou falsa. " +
      "A mensagem utiliza linguagem de confronto, cria um inimigo indefinido e tenta " +
      "pressionar o ouvinte a escolher um lado. Conteúdos que incentivam hostilidade " +
      "ou violência podem ser denunciados em vez de amplificados."
  }
];
