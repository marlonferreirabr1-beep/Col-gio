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
  address: "Rua do Colégio Santa Tereza das Rosas",
  city: "Brasil",
  phoneDisplay: "(WhatsApp Oficial)",
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
    description: "Espaço humanizado, planejado para que cada criança sinta pertencimento, carinho e segurança diária. Acreditamos que o aprendizado floresce quando o aluno se sente protegido e amado.",
    points: [
      "Espaços lúdicos e aconchegantes",
      "Professores e monitores afetuosos e atentos",
      "Adaptação escolar com suporte emocional à família"
    ]
  },
  {
    id: "educacao-infantil-fundamental",
    icon: "📚",
    title: "Educação Infantil e Ensino Fundamental 1",
    subtitle: "Continuidade pedagógica consistente e sólida",
    description: "Do despertar da curiosidade nos primeiros passos até a consolidação do raciocínio crítico e científico. Formação curricular moderna alinhada às melhores práticas contemporâneas.",
    points: [
      "Alfabetização estruturada e com significado",
      "Desenvolvimento de projetos interdisciplinares",
      "Transição suave e segura entre os ciclos escolares"
    ]
  },
  {
    id: "acompanhamento-individualizado",
    icon: "🎯",
    title: "Ensino com acompanhamento individualizado",
    subtitle: "Cada aluno em seu ritmo único de excelência",
    description: "Turmas com número controlado para garantir que a equipe pedagógica conheça detalhadamente as potencialidades, desafios e evolução de cada estudante.",
    points: [
      "Monitoramento contínuo da evolução acadêmica",
      "Intervenções pedagógicas personalizadas",
      "Relatórios de desenvolvimento transparentes aos pais"
    ]
  },
  {
    id: "desenvolvimento-intelectual-humano",
    icon: "🌱",
    title: "Desenvolvimento intelectual e humano",
    subtitle: "Conhecimento aliado a valores e ética para a vida",
    description: "Não apenas preparamos mentes brilhantes, mas corações empáticos. Cultivamos a gentileza, a cooperação, o pensamento autônomo e o compromisso social.",
    points: [
      "Habilidades socioemocionais no cotidiano escolar",
      "Estímulo à leitura, criatividade e reflexão",
      "Práticas que fortalecem valores morais e cidadania"
    ]
  },
  {
    id: "parceria-escola-familia",
    icon: "🤝",
    title: "Parceria entre escola e família",
    subtitle: "Caminhando juntos pelo futuro do seu filho",
    description: "Portas sempre abertas para o diálogo. Acreditamos na sintonia viva e constante entre a casa e a escola como alicerce indispensável para o sucesso da criança.",
    points: [
      "Comunicação direta, ágil e acolhedora",
      "Reuniões pedagógicas e atendimentos individualizados",
      "Eventos e celebrações que integram toda a família"
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
    desc: "Despertando a paixão pelos livros e descobertas",
    emoji: "🔬"
  },
  {
    tag: "Recreio & Esportes",
    desc: "Amizades, brincadeiras saudáveis e convivência",
    emoji: "⚽"
  }
];
