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
    remetente: "Síndico Roberto",
    grupo: "Condomínio Jardim das Flores",
    horario: "14:20",
    conteudo: {
      tipo: "imagem",
      texto:
        "Imagem com logotipo parecido com o de um órgão de saúde e o texto: \"COMUNICADO OFICIAL: lote de vacinas " +
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
    remetente: "Dona Lúcia",
    grupo: "Mães da Escola",
    horario: "18:05",
    conteudo: {
      tipo: "audio",
      texto:
        "\"Gente, uma conhecida que trabalha num posto de saúde me mandou isso: não levem as crianças amanhã, " +
        "estão aplicando um lote com problema. Ela pediu pra não falar o nome dela. Passa pra todas as mães!\"",
      duracao: "0:29",
    },
    gatilhos: ["medo", "corrente"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Fonte anônima (\"uma conhecida\") com pedido de sigilo e de repasse em massa, sem nenhuma informação verificável.",
    ondeVerificar:
      "Consultar as perguntas frequentes e os canais oficiais do Ministério da Saúde, ou ligar para a unidade de saúde do bairro.",
    fonteOficial: {
      nome: "Ministério da Saúde — Dúvidas frequentes (Saúde com Ciência)",
      url: "https://www.gov.br/saude/pt-br/assuntos/saude-com-ciencia/duvidas-frequentes",
    },
    explicacao:
      "Áudios de \"alguém que trabalha lá\" parecem confiáveis por serem pessoais, mas não podem ser checados. " +
      "A combinação de medo com crianças e pedido de sigilo é um padrão frequente em boatos de saúde.",
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
      url: "https://www.bcb.gov.br",
    },
    explicacao:
      "O golpista imita um banco para criar pânico e levar você a um site falso que rouba senhas. Em situações de medo ou pressa, o ideal é parar e confirmar por um canal que você mesmo abriu.",
  },
  {
    id: "cenario-15",
    remetente: "Mãe (número novo)",
    grupo: "Mãe (número novo)",
    horario: "16:50",
    conteudo: {
      tipo: "audio",
      texto:
        "\"Oi, filho, sou eu. Meu celular quebrou, estou usando esse número novo. Preciso pagar um boleto " +
        "hoje e estou sem acesso ao app do banco. Você consegue fazer um Pix pra mim? Depois te explico.\"",
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
      url: "https://www.bcb.gov.br",
    },
    explicacao:
      "No golpe do falso parente, o criminoso usa a confiança familiar e a pressa para evitar que você confirme. Ligar para quem supostamente pediu o dinheiro desmonta o golpe.",
  },
  {
    id: "cenario-16",
    remetente: "Número desconhecido",
    grupo: "Número desconhecido",
    horario: "10:12",
    conteudo: {
      tipo: "imagem",
      texto:
        "Print de um comprovante de Pix de R$ 850,00 em seu nome e a mensagem: \"Oi, fiz um Pix pra você por " +
        "engano, pode devolver pra essa outra conta? Estou precisando muito.\"",
    },
    gatilhos: ["urgencia"],
    acaoIdeal: "pesquisar",
    sinalDeAlerta:
      "Comprovante enviado só como imagem e pedido de devolução para uma conta de terceiros, não para a conta de origem.",
    ondeVerificar:
      "Conferir no extrato do aplicativo do seu banco se o valor realmente entrou. Se entrou, devolver só pelo caminho oficial do banco, nunca por transferência manual.",
    fonteOficial: {
      nome: "Banco Central do Brasil",
      url: "https://www.bcb.gov.br",
    },
    explicacao:
      "Comprovantes são fáceis de falsificar, e a pessoa pode nem ter depositado nada. Devolver para outra conta é o golpe do \"Pix errado\": o valor some do seu bolso e o do golpista nunca existiu.",
  },
  {
    id: "cenario-17",
    remetente: "Canal Dinheiro Fácil",
    grupo: "Investidores do Zap",
    horario: "20:30",
    conteudo: {
      tipo: "video",
      texto:
        "Vídeo de um \"apresentador de telejornal\" dizendo que uma nova plataforma devolve R$ 5.000 a quem " +
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
      url: "https://www.gov.br/cvm/pt-br",
    },
    explicacao:
      "Promessas de lucro garantido são o sinal mais comum de fraude de investimento. O vídeo usa uma falsa autoridade para dar confiança e a urgência para impedir você de pesquisar.",
  },

  // ---------------------------------------------------------------------------
  // OUTROS TEMAS
  // ---------------------------------------------------------------------------
  {
    id: "cenario-18",
    remetente: "Ju Colega",
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
      url: "https://www.consumidor.gov.br",
    },
    explicacao:
      "O golpe do falso emprego lucra com a taxa de cadastro e, muitas vezes, com os dados pessoais coletados. Quando a mensagem vem de uma pessoa conhecida, a chance de a conta ter sido invadida também cresce.",
  },
  {
    id: "cenario-19",
    remetente: "Seu Antônio",
    grupo: "Vizinhança Segura",
    horario: "21:15",
    conteudo: {
      tipo: "video",
      texto:
        "Vídeo de uma rua sendo tomada por uma enchente, com a legenda: \"AGORA na nossa cidade!! Cuidado, " +
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
    remetente: "Prima Bia",
    grupo: "Família Unida",
    horario: "07:00",
    conteudo: {
      tipo: "texto",
      texto:
        "Se você não repassar esta mensagem para 15 pessoas em 10 minutos, vai ter 7 anos de azar. " +
        "Uma menina ignorou e perdeu tudo!",
    },
    gatilhos: ["medo", "corrente", "urgencia"],
    acaoIdeal: "ignorar",
    sinalDeAlerta:
      "Ameaça sobrenatural e prazo absurdo para repassar a um número fixo de pessoas: é uma corrente clássica, sem nada a verificar.",
    ondeVerificar:
      "Não há o que checar: não existe fonte, fato nem informação útil. Basta reconhecer o padrão de corrente.",
    fonteOficial: {
      nome: "Agência Lupa",
      url: "https://lupa.news",
    },
    explicacao:
      "Correntes usam medo para se espalhar sozinhas. Aqui ignorar é a resposta ideal: não vale pesquisar nem denunciar, pois não há dano nem informação para corrigir.",
  },
  {
    id: "cenario-21",
    remetente: "Posto de Saúde Central",
    grupo: "Notícias do Bairro",
    horario: "09:00",
    conteudo: {
      tipo: "imagem",
      texto:
        "Card colorido de campanha de vacinação com datas, público-alvo e a frase \"Consulte o calendário completo " +
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
];
