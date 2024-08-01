const { describe } = require("node:test");

const database = {
  cursos: [
    {
      id: "1100",
      nome: "Ciência da Computação",
      turno: "0",
      id_campus: "1",
    },
    {
      id: "1101",
      nome: "Ciência da Computação",
      turno: "1",
      id_campus: "1",
      cordenadores: [
        "Giancarlo",
        "Braulio"
     ],
     descricao: "O Curso de Ciência da Computação da UFFS é um curso que pretende, através de bases sólidas da área de computação, formar cientistas capazes de terem um papel importante em áreas da tecnologia da informação (TI), tanto na indústria quanto na academia. \
     \n\n\
     O curso oferece várias opções para o estudante se aprofundar: banco de dados, computação gráfica, redes de computadores, engenharia de software, hardware e teoria da computação. \
     \n\n\
     Todos os professores se dedicam integralmente ao curso e todos possuem no mínimo o título de mestre, sendo que aproximadamente a metade tem o título de doutor. \
     \n\n\
     Esse perfil dos professores faz com que os estudantes tenham contato com assuntos de ponta da computação. \
     \n\n\
     Os estudantes têm acesso aos projetos de pesquisa e de extensão do curso, experiência profissional através do projeto FronteiraTec, além de várias opções de estágios em empresas da região."
    },
    {
      id: "1102",
      nome: "História",
      turno: "1",
      id_campus: "1",
      cordenadores: [
          "Bruno Antonio Picoli",
          "Delcio Marquetti"
      ],
      descricao: "O curso de Licenciatura em História da UFFS Campus Chapecó oferta uma entrada anual, no primeiro semestre, com 50 vagas. \
      \n\n\
      Tem duração de 9 semestres (4 anos e meio). É estruturado em componentes curriculares que visam formar profissionais/cidadãos comprometidos com a educação e a promoção do conhecimento, distribuídos em três domínios: \
      \n\n\
      Comum formação crítico-social e de instrumentalização acadêmica; \
      \n\n\
      Conexo formação para a docência; \
      \n\n\
      Específico componentes que visam perceber o passado humano de forma problematizadora, analisando o conhecimento histórico já produzido e propondo a pesquisa e produção de novos conhecimentos e novos olhares sobre os já existentes."
    },
    {
      id: "1103",
      nome: "Medicina",
      turno: "1",
      id_campus: "1",
      cordenadores: [
          "Grasiela Marcon",
          "Ana Beatriz Sengik Saez"
      ],
      descricao: "A proposta pedagógica do Curso de Graduação em Medicina tem como pressupostos básicos o direito universal à saúde, a atenção integral, equitativa e de qualidade, contribuindo no fortalecimento da participação e autonomia dos sujeitos na produção da sua própria saúde individual e coletiva. \
      \n\n\
      Busca promover a formação médica em que a humanização seja aliada ao desenvolvimento científico e tecnológico e o objeto da prática seja a necessidade das pessoas e das comunidades, onde os médicos sejam capazes de atuar em todos os níveis de atenção integral à saúde, em equipes multiprofissionais, de modo ético, como agentes de transformação social, comprometidos com o desenvolvimento da pesquisa e da ciência médica, com a evolução das condições sanitárias da população, com a proteção ao meio ambiente, \
      \n\n\
      a preservação da saúde, a prevenção de doenças e com o combate e tratamento das patologias prevalentes no contexto geopolítico da UFFS."
    }
  ],
  ccrs: [
    {
      id: "GEX613",
      nome: "Programação II",
    },
    {
      id: "GEX003",
      nome: "Algoritmos e Programação",
    },
    {
      id: "GEX210",
      nome: "ESTATÍSTICA BÁSICA",
    },
    {
      id: "GEX213",
      nome: "MATEMÁTICA C",
    },
    {
      id: "GCS239",
      nome: "DIREITOS E CIDADANIA",
    },
  ],
};
module.exports =  database;