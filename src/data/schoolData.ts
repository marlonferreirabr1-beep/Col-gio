export interface SchoolFeature {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  points: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
}

export const SCHOOL_INFO = {
  name: "Colégio Santa Tereza das Rosas",
  shortName: "Santa Tereza das Rosas",
  segments: "Educação Infantil ao Ensino Fundamental 1",
  motto: "💛 Desde 1993 educando com excelência",
  footerQuote: "Formando alunos para o futuro com conhecimento, valores e amor pela educação.",
  logoUrl: "https://i.postimg.cc/QdzxNN4w/file-000000000474820e831e7dac4d75bf62.png",
  whatsappPhone: "5582988244977",
  whatsappUrl: "https://api.whatsapp.com/send?phone=5582988244977",
  instagramUrl: "https://www.instagram.com/colegiosantaterezadasrosas?stkn=OHp1bzI0MjNhemdu",
  mapsUrl: "https://maps.app.goo.gl/o5VtAzwK1wASA1yX9?g_st=ac",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJv2LjI9RHAQcRtS4gsKT-aqI",
  address: "Rua Cel. Paranhos - Jacintinho, Maceió - AL",
  city: "Maceió - AL",
  phoneDisplay: "(82) 98824-4977",
  email: "contato@santaterezadasrosas.com.br",
  hours: "Segunda a Sexta: 07h00 às 18h00"
};

export const getWhatsAppDirectUrl = (message?: string): string => {
  if (!message) {
    return SCHOOL_INFO.whatsappUrl;
  }
  return `https://api.whatsapp.com/send?phone=${SCHOOL_INFO.whatsappPhone}&text=${encodeURIComponent(message)}`;
};

export const WHY_CHOOSE_US: SchoolFeature[] = [
  {
    id: "ambiente-acolhedor",
    icon: "💙",
    title: "Ambiente acolhedor",
    subtitle: "Segurança afetiva e respeito à infância",
    description: "Espaço humanizado onde cada criança é ouvida, respeitada e estimulada a florescer com segurança emocional.",
    points: [
      "Espaços lúdicos e acolhedores",
      "Professores afetuosos e atentos",
      "Apoio emocional na adaptação"
    ]
  },
  {
    id: "educacao-infantil-fundamental",
    icon: "📚",
    title: "Educação Infantil e Fundamental 1",
    subtitle: "Base sólida da alfabetização ao 5º ano",
    description: "Currículo moderno e estruturado, estimulando a curiosidade e o raciocínio em cada fase do aprendizado.",
    points: [
      "Alfabetização com significado",
      "Projetos interdisciplinares",
      "Transição segura entre ciclos"
    ]
  },
  {
    id: "acompanhamento-individualizado",
    icon: "🎯",
    title: "Acompanhamento individualizado",
    subtitle: "Olhar atento ao ritmo de cada criança",
    description: "Turmas com número planejado para apoiar de perto o desenvolvimento e o potencial de cada estudante.",
    points: [
      "Evolução acadêmica contínua",
      "Intervenções personalizadas",
      "Retorno constante aos pais"
    ]
  },
  {
    id: "desenvolvimento-intelectual-humano",
    icon: "🌱",
    title: "Desenvolvimento intelectual e humano",
    subtitle: "Conhecimento aliado a valores e ética",
    description: "Formação completa que une aprendizado forte, inteligência socioemocional, empatia e cidadania.",
    points: [
      "Habilidades socioemocionais",
      "Estímulo à leitura e criatividade",
      "Valores morais e respeito"
    ]
  },
  {
    id: "parceria-escola-familia",
    icon: "🤝",
    title: "Parceria entre escola e família",
    subtitle: "Diálogo aberto e colaboração diária",
    description: "Comunicação transparente e acolhedora, integrando pais e educadores no crescimento dos alunos.",
    points: [
      "Atendimento próximo e ágil",
      "Reuniões pedagógicas periódicas",
      "Família integrada à rotina"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Dra. Mariana Vasconcellos",
    role: "Mãe de aluno do 3º ano Fundamental",
    rating: 5,
    date: "Avaliação verificada no Google",
    comment: "A dedicação de toda a equipe é impressionante. Meu filho desenvolveu amor pelos estudos e chega todo dia empolgado contando o que aprendeu. O acolhimento é real, não apenas discurso!"
  },
  {
    id: "t2",
    author: "Carlos Eduardo Silva",
    role: "Pai de aluna da Educação Infantil",
    rating: 5,
    date: "Avaliação verificada no Google",
    comment: "A segurança que sinto ao deixar minha filha no Santa Tereza das Rosas não tem preço. Professores carinhosos, coordenação presente e estrutura impecável. Recomendo de olhos fechados."
  },
  {
    id: "t3",
    author: "Renata Fagundes",
    role: "Mãe de alunos (Infantil e 5º ano)",
    rating: 5,
    date: "Avaliação verificada no Google",
    comment: "Escola com valores sólidos e ensino forte. Vemos o respeito às crianças e a proximidade com os pais em cada detalhe. O melhor investimento para o futuro dos meus filhos."
  }
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    tag: "Rotina Pedagógica",
    desc: "Aulas práticas e vivências enriquecedoras",
    emoji: "🎨"
  },
  {
    tag: "Momentos em Família",
    desc: "Apresentações e encontros da nossa comunidade",
    emoji: "👨‍👩‍👧‍👦"
  },
  {
    tag: "Ciência & Leitura",
    desc: "Descobertas e paixão pelos livros",
    emoji: "🔬"
  },
  {
    tag: "Recreio & Esportes",
    desc: "Amizades e convivência saudável",
    emoji: "⚽"
  }
];
