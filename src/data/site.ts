export const site = {
  name: "Luigi Brandolini",
  url: "https://luigibrandolini.github.io/",
  tagline: "Software Architect, Technical Project Manager, and creative technologist",
};

export const seo = {
  title: "Luigi Brandolini | Software Architect & Technical Project Manager",
  description:
    "Nei primi anni '90, davanti ad un IBM PS/1 80286, nasceva la mia passione per la tecnologia. Oggi, progetto e aiuto a scalare sistemi software complessi, integrando strategia, architettura e delivery.",
};

export const locales = ["it", "en", "es", "fr"] as const;
export const defaultLocale = "it";
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  es: "Español",
  fr: "Français",
};

export const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
};

export const content: Record<Locale, {
  title: string;
  intro: string;
  bio: string;
  cta: string;
  sectionAbout: string;
  sectionPortfolio: string;
  sectionProjects: string;
  sectionContact: string;
  portfolioIntro: string;
  projectsIntro: string;
  aboutBio: string;
  aboutOrigins: string;
  aboutOriginsTitle: string;
  aboutCreative: string;
  musicTitle: string;
  musicDescription: string;
  writingTitle: string;
  writingDescription: string;
  creativeTitle: string;
  professionalTitle: string;
  asyncContact: string;
  readyToCollaborate: string;
  languageLabel: string;
  heroImageAlt: string;
  featuredProjectDescription: string;
  featuredProjectTagOpenSource: string;
  contactFormIntro: string;
  contactFormCta: string;
}> = {
  it: {
    title: "Software Architect & Technical Project Manager",
    intro:
      "Nei primi anni '90, davanti ad un IBM PS/1 80286, nasceva la mia passione per la tecnologia. Oggi, progetto e aiuto a scalare sistemi software complessi, integrando strategia, architettura e delivery.",
    bio:
      "Con oltre 16 anni di esperienza in software enterprise, formazione, mentoring, leadership tecnica e innovazione guidata da AI, opero all'intersezione tra eccellenza ingegneristica, governance di progetto e crescita dei team. Sono disponibile per incarichi fractional e leadership tecnico-strategica.",
    cta: "Hai in mente un nuovo progetto? Parliamone!",
    sectionAbout: "Biografia",
    sectionPortfolio: "Lavoro",
    sectionProjects: "Progetti",
    sectionContact: "Contatti",
    languageLabel: "Lingua",
    portfolioIntro:
      "Al vostro fianco per creare valore attraverso qualità, collaborazione, innovazione e sicurezza.",
    projectsIntro:
      "Progetti open source e contributi alla community di sviluppatori.",
    professionalTitle: "Percorso professionale",
    aboutOriginsTitle: "Le origini digitali",
    heroImageAlt: "Luigi Brandolini con il suo IBM PS/1 80286 d'infanzia",
    featuredProjectDescription:
      "Form builder dichiarativo per Angular 20+ che semplifica la creazione di form complessi tramite configurazione basata sul pattern decorator. Disponibile su npm e mantenuto attivamente su GitHub.",
    featuredProjectTagOpenSource: "Open Source",
    contactFormIntro: "Scrivimi liberamente attraverso l'apposito form del mio studio professionale <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>.",
    contactFormCta: "Scrivimi",
    aboutOrigins:
      "Nato ad Atri (TE) il 25 febbraio 1983, ho sviluppato, sin dall’infanzia, un forte interesse per l’informatica e i computer. Nonostante il mio percorso liceale fosse ad indirizzo umanistico, ho intrapreso autonomamente lo studio della programmazione con QBasic e Turbo Pascal 5.5, dedicandomi nel tempo libero alla sperimentazione su progetti personali. Durante l'A.S. 1999/2000, pubblico il mio primo sito Web sull'<a href='https://napoleonica.altervista.org' target='_blank' rel='noopener noreferrer' class='bio-link'>Età Napoleonica</a>, ancora visitabile su AlterVista.",
    aboutBio:
      "Dopo la laurea magistrale in Informatica e l'abilitazione come ingegnere nel 2009, oggi vivo a Roma dove lavoro come ingegnere informatico, formatore tecnico-scientifico e senior advisor IT. Nel 2014 ho fondato Ermes Engineering, oggi <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>, uno studio che offre consulenza strategica, architetture software e governance tecnologica. Ho collaborato con Reply, Dedagroup, Honda S.p.A., Leonardo, Università degli Studi dell'Aquila e IMT Atlantique (Nantes), contribuendo anche a pubblicazioni scientifiche internazionali. L'articolo <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> è il mio ultimo lavoro di ricerca accademica.",
    creativeTitle: "Oltre il codice",
    aboutCreative:
      "Accanto alla carriera tecnica, coltivo da sempre la passione per la musica, il teatro e la scrittura.",
    musicTitle: "Musica",
    musicDescription: "Dal 4 agosto 2026 è disponibile su tutti i principali store musicali <a href='https://music.imusician.pro/a/vF8qeO25/' target='_blank' rel='noopener noreferrer' class='bio-link'><strong>Before Tomorrow</strong></a>, album musicale frutto di una collaborazione con Gianluca Ferrante, mio caro amico musicista",
    writingTitle: "Scrittura",
    writingDescription:
      "Il mio primo romanzo si chiama <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'><strong>Ponte numero IX</strong></a>, una storia che esplora temi di amore, viaggi e seconde opportunità della vita.",
    asyncContact: "Preferisci in asincrono? Contattami su LinkedIn o GitHub.",
    readyToCollaborate: "Pronto a collaborare? Sono disponibile per advisory strategica, leadership tecnica e partnership creative.",
  },
  en: {
    title: "Software Architect & Technical Project Manager",
    intro:
      "In the early 1990s, in front of an IBM PS/1 80286, my passion for technology was taking shape. Today, I design and help scale complex software systems, integrating strategy, architecture, and delivery.",
    bio: "With over 16 years of experience in enterprise software, training, mentoring, technical leadership, and AI-driven innovation, I work at the intersection of engineering excellence, project governance, and team growth. I am available for fractional engagements and strategic technical leadership.",
    cta: "Do you have a new project in mind? Let us talk about it!",
    sectionAbout: "Biography",
    sectionPortfolio: "Work",
    sectionProjects: "Projects",
    sectionContact: "Contact",
    languageLabel: "Language",
    portfolioIntro:
      "By your side to create value through quality, collaboration, innovation, and security.",
    projectsIntro:
      "Open source projects and contributions to the developer community.",
    professionalTitle: "Professional journey",
    aboutOriginsTitle: "Digital origins",
    heroImageAlt: "Luigi Brandolini with his childhood IBM PS/1 80286",
    featuredProjectDescription: "Declarative form builder for Angular 20+ that simplifies the creation of complex forms through configuration based on the decorator pattern. Available on npm and actively maintained on GitHub.",
    featuredProjectTagOpenSource: "Open Source",
    contactFormIntro: "Feel free to contact me using the dedicated form on the website of my professional studio, <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>.",
    contactFormCta: "Write to me",
    aboutOrigins: "Born in Atri (TE) on February 25, 1983, I developed a strong interest in computing and computers from childhood. Although my secondary education focused on the humanities, I independently began studying programming with QBasic and Turbo Pascal 5.5, spending my free time experimenting with personal projects. During the 1999/2000 school year, I published my first website on the <a href='https://napoleonica.altervista.org' target='_blank' rel='noopener noreferrer' class='bio-link'>Napoleonic Era</a>, still available on AlterVista.",
    aboutBio:
      "After earning my master's degree in Computer Science and qualifying as an engineer in 2009, I now live in Rome, where I work as a software engineer, technical and scientific trainer, and senior IT advisor. In 2014 I founded Ermes Engineering, now <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>, a studio that offers strategic IT consulting, software architecture, and technology governance. I have collaborated with Reply, Dedagroup, Honda S.p.A., Leonardo, University of L'Aquila, and IMT Atlantique (Nantes), also contributing to international scientific publications. The article <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> is my latest academic research work.",
    creativeTitle: "Beyond code",
    aboutCreative:
      "Alongside my technical career, I have always cultivated a passion for music, theater, and writing.",
    musicTitle: "Music",
    musicDescription: "Since August 4, 2026, <a href='https://music.imusician.pro/a/vF8qeO25/' target='_blank' rel='noopener noreferrer' class='bio-link'><strong>Before Tomorrow</strong></a> has been available on all major music stores, an album created in collaboration with Gianluca Ferrante, my dear friend and musician.",
    writingTitle: "Writing",
    writingDescription:
      "My first novel is called <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'><strong>Ponte numero IX</strong></a>, a story exploring themes of love, travel, and second chances in life.",
    asyncContact: "Prefer async? Reach me through LinkedIn or GitHub.",
  readyToCollaborate: "Ready to collaborate? I am open to strategic advisory, technical leadership, and creative partnerships."},
  es: {
    title: "Software Architect y Technical Project Manager",
    intro:
      "A principios de los años 90, frente a un IBM PS/1 80286, iba naciendo mi pasión por la tecnología. Hoy diseño y ayudo a escalar sistemas de software complejos, integrando estrategia, arquitectura y delivery.",
    bio: "Con más de 16 años de experiencia en software empresarial, formación, mentoría, liderazgo técnico e innovación impulsada por la IA, trabajo en la intersección entre la excelencia en ingeniería, la gobernanza de proyectos y el crecimiento de los equipos. Estoy disponible para colaboraciones a tiempo parcial y funciones de liderazgo técnico y estratégico.",
    cta: "¿Tienes un nuevo proyecto en mente? ¡Hablemos!",
    sectionAbout: "Biografía",
    sectionPortfolio: "Trabajo",
    sectionProjects: "Proyectos",
    sectionContact: "Contacto",
    languageLabel: "Idioma",
    portfolioIntro:
      "A vuestro lado para crear valor a través de calidad, colaboración, innovación y seguridad.",
    projectsIntro:
      "Proyectos de código abierto y contribuciones a la comunidad de desarrolladores.",
    professionalTitle: "Trayectoria profesional",
    aboutOriginsTitle: "Los orígenes digitales",
    heroImageAlt: "Luigi Brandolini con su IBM PS/1 80286 de la infancia",
    featuredProjectDescription:
      "Constructor declarativo de formularios para Angular 20+ que simplifica la creación de formularios complejos mediante configuración basada en el patrón decorador. Disponible en npm y mantenido activamente en GitHub.",
    featuredProjectTagOpenSource: "Código Abierto",
    contactFormIntro: "Escríbeme libremente a través del formulario dedicado de mi estudio profesional <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>.",
    contactFormCta: "Escríbeme",
    aboutOrigins: "Nacido en Atri (TE) el 25 de febrero de 1983, desarrollé desde la infancia un gran interés por la informática y los ordenadores. Aunque mi formación secundaria estaba orientada a las humanidades, comencé a estudiar programación de forma autodidacta con QBasic y Turbo Pascal 5.5, dedicando mi tiempo libre a experimentar con proyectos personales. Durante el curso 1999/2000, publiqué mi primer sitio web sobre la <a href='https://napoleonica.altervista.org' target='_blank' rel='noopener noreferrer' class='bio-link'>Época Napoleónica</a>, que todavía se puede visitar en AlterVista.",
    aboutBio:
      "Tras obtener mi maestría en Informática y habilitarme como ingeniero en 2009, hoy vivo en Roma, donde trabajo como ingeniero de software y formador técnico-científico y asesor sénior de TI. En 2014 fundé Ermes Engineering, hoy <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>, un estudio que ofrece consultoría estratégica de TI, arquitectura de software y gobernanza tecnológica. He colaborado con Reply, Dedagroup, Honda S.p.A., Leonardo, Universidad de L'Aquila e IMT Atlantique (Nantes), contribuyendo también a publicaciones cientificas internacionales. El artículo <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> es mi trabajo más reciente de investigación académica.",
    creativeTitle: "Más allá del código",
    aboutCreative:
      "Junto a mi carrera técnica, siempre he cultivado la pasión por la música, el teatro y la escritura.",
    musicTitle: "Música",
    musicDescription: "Desde el 4 de agosto de 2026, <a href='https://music.imusician.pro/a/vF8qeO25/' target='_blank' rel='noopener noreferrer' class='bio-link'><strong>Before Tomorrow</strong></a> está disponible en las principales tiendas de música, un álbum fruto de una colaboración con Gianluca Ferrante, mi querido amigo músico.",
    writingTitle: "Escritura",
    writingDescription:
      "Mi primera novela se llama <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'><strong>Ponte numero IX</strong></a>, una historia que explora temas de amor, viajes y segundas oportunidades en la vida.",
    asyncContact: "¿Prefieres lo asíncrono? Contáctame por LinkedIn o GitHub.",
    readyToCollaborate: "¿Listo para colaborar? Estoy abierto a asesoría estratégica, liderazgo técnico y colaboraciones creativas.",
  },
  fr: {
    title: "Software Architect et Technical Project Manager",
    intro:
      "Au début des années 90, devant un IBM PS/1 80286, ma passion pour la technologie prenait forme. Aujourd'hui, je conçois et j'aide à faire évoluer des systèmes logiciels complexes, en intégrant stratégie, architecture et delivery.",
    bio: "Avec plus de 16 ans d’expérience dans les logiciels d’entreprise, la formation, le mentorat, le leadership technique et l’innovation portée par l’IA, je travaille à la croisée de l’excellence en ingénierie, de la gouvernance de projet et de la progression des équipes. Je suis disponible pour des missions à temps partagé et des fonctions de leadership technique et stratégique.",
    cta: "Vous avez un nouveau projet en tête ? Parlons-en !",
    sectionAbout: "Biographie",
    sectionPortfolio: "Travail",
    sectionProjects: "Projets",
    sectionContact: "Contact",
    languageLabel: "Langue",
    portfolioIntro:
      "A vos côtés pour créer de la valeur a travers la qualité, la collaboration, l'innovation et la sécurité.",
    projectsIntro:
      "Projets open source et contributions a la communauté des développeurs.",
    professionalTitle: "Parcours professionnel",
    aboutOriginsTitle: "Les origines numériques",
    heroImageAlt: "Luigi Brandolini avec son IBM PS/1 80286 d'enfance",
    featuredProjectDescription:
      "Générateur déclaratif de formulaires pour Angular 20+ qui simplifie la création de formulaires complexes via une configuration basée sur le pattern décorateur. Disponible sur npm et activement maintenu sur GitHub.",
    featuredProjectTagOpenSource: "Open Source",
    contactFormIntro: "Écrivez-moi librement via le formulaire dédié de mon studio professionnel <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>.",
    contactFormCta: "Écrivez-moi",
    aboutOrigins: "Né à Atri (TE) le 25 février 1983, j’ai développé dès l’enfance un vif intérêt pour l’informatique et les ordinateurs. Malgré des études secondaires orientées vers les lettres, j’ai entrepris en autodidacte l’apprentissage de la programmation avec QBasic et Turbo Pascal 5.5, consacrant mon temps libre à expérimenter sur des projets personnels. Durant l’année scolaire 1999/2000, j’ai publié mon premier site web sur l’<a href='https://napoleonica.altervista.org' target='_blank' rel='noopener noreferrer' class='bio-link'>Époque napoléonienne</a>, toujours consultable sur AlterVista.",
    aboutBio:
      "Après avoir obtenu mon master en informatique et la qualification d'ingenieur en 2009, je vis aujourd'hui a Rome, ou je travaille comme ingenieur logiciel et formateur technique et scientifique et conseiller senior en informatique. En 2014, j'ai fondé Ermes Engineering, aujourd'hui <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>, un studio qui propose du conseil stratégique IT, de l'architecture logicielle et de la gouvernance technologique. J'ai collaboré avec Reply, Dedagroup, Honda S.p.A., Leonardo, l'Université de L'Aquila et IMT Atlantique (Nantes), en contribuant également a des publications scientifiques internationales. L'article <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> est mon travail de recherche académique le plus recent.",
    creativeTitle: "Au-delà du code",
    aboutCreative:
      "Parallèlement à ma carrière technique, je cultive depuis toujours une passion pour la musique, le théâtre et l’écriture.",
    musicTitle: "Musique",
    musicDescription: "Depuis le 4 août 2026, <a href='https://music.imusician.pro/a/vF8qeO25/' target='_blank' rel='noopener noreferrer' class='bio-link'><strong>Before Tomorrow</strong></a> est disponible sur toutes les principales plateformes musicales, un album réalisé en collaboration avec Gianluca Ferrante, mon cher ami musicien.",
    writingTitle: "Écriture",
    writingDescription:
      "Mon premier roman s’intitule <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'><strong>Ponte numero IX</strong></a>, une histoire qui explore les thèmes de l’amour, du voyage et des secondes chances dans la vie.",
    asyncContact: "Vous préférez l’asynchrone ? Contactez-moi sur LinkedIn ou GitHub.",
    readyToCollaborate: "Prêt à collaborer ? Je suis ouvert au conseil stratégique, au leadership technique et aux partenariats créatifs.",
  },
};

type PortfolioItem = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const portfolio: Record<Locale, PortfolioItem[]> = {
  it: [
    {
      title: "Project Management",
      description:
        "Supporto le organizzazioni nella gestione efficace dei progetti attraverso metodologie Agile e Scrum, migliorando governance, time-to-market e qualità del delivery. Analizzo e ottimizzo i workflow aziendali per aumentare efficienza operativa, automazione e controllo dei processi.",
      tags: ["Agile Delivery", "Scrum", "Project Governance", "Digital Transformation", "Process Optimization", "Workflow Automation", "Change Management", "IT Strategy"],
      link: "#",
    },
    {
      title: "Software Architecture",
      description:
        "Progetto e sviluppo architetture software scalabili, robuste e cloud-ready, basate su microservizi e sulle versioni più evolute di Java e Spring (Framework e Boot). Definisco soluzioni orientate a resilienza, osservabilità e performance, ottimizzando al contempo i costi infrastrutturali attraverso pratiche moderne di containerizzazione, orchestrazione e monitoraggio continuo.",
      tags: ["Microservices", "Cloud-Native", "Domain-Driven Design", "Event-Driven Architecture", "API Design", "Scalability", "Resilience", "Observability", "DevOps", "Containerization"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "Affianco le aziende nell'adozione strategica dell'Intelligenza Artificiale, trasformando le opportunità offerte dai modelli linguistici in soluzioni concrete e integrate nei processi aziendali. Progetto framework basati su LLM e DSL per garantire sviluppo guidato, compliance normativa e maggiore produttività dei team tecnici.",
      tags: ["AI Strategy", "Generative AI", "LLM Integration", "Conversational Interfaces", "DSL Engineering", "AI Governance", "Prompt Engineering", "Intelligent Automation", "Responsible AI"],
      link: "#",
    },
  ],
  en: [
    {
      title: "Project Management",
      description:
        "I support organizations in effective project management through Agile and Scrum methodologies, improving governance, time-to-market, and delivery quality. I analyze and optimize business workflows to increase operational efficiency, automation, and process control.",
      tags: ["Agile Delivery", "Scrum", "Project Governance", "Digital Transformation", "Process Optimization", "Workflow Automation", "Change Management", "IT Strategy"],
      link: "#",
    },
    {
      title: "Software Architecture",
      description:
        "I design and develop scalable, robust, cloud-ready software architectures based on microservices and the most advanced versions of Java and Spring (Framework and Boot). I define solutions focused on resilience, observability, and performance, while optimizing infrastructure costs through modern containerization, orchestration, and continuous monitoring practices.",
      tags: ["Microservices", "Cloud-Native", "Domain-Driven Design", "Event-Driven Architecture", "API Design", "Scalability", "Resilience", "Observability", "DevOps", "Containerization"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "I support companies in the strategic adoption of Artificial Intelligence, turning opportunities offered by language models into concrete solutions integrated into business processes. I design frameworks based on LLMs and DSLs to ensure guided development, regulatory compliance, and higher productivity for technical teams.",
      tags: ["AI Strategy", "Generative AI", "LLM Integration", "Conversational Interfaces", "DSL Engineering", "AI Governance", "Prompt Engineering", "Intelligent Automation", "Responsible AI"],
      link: "#",
    },
  ],
  es: [
    {
      title: "Project Management",
      description:
        "Apoyo a las organizaciones en la gestión eficaz de proyectos mediante metodologías Agile y Scrum, mejorando la gobernanza, el time-to-market y la calidad del delivery. Analizo y optimizo los flujos de trabajo empresariales para aumentar la eficiencia operativa, la automatización y el control de procesos.",
      tags: ["Agile Delivery", "Scrum", "Project Governance", "Digital Transformation", "Process Optimization", "Workflow Automation", "Change Management", "IT Strategy"],
      link: "#",
    },
    {
      title: "Software Architecture",
      description:
        "Diseño y desarrollo arquitecturas de software escalables, robustas y cloud-ready, basadas en microservicios y en las versiones más avanzadas de Java y Spring (Framework y Boot). Defino soluciones orientadas a resiliencia, observabilidad y rendimiento, optimizando al mismo tiempo los costes de infraestructura mediante prácticas modernas de contenedorización, orquestación y monitorización continua.",
      tags: ["Microservices", "Cloud-Native", "Domain-Driven Design", "Event-Driven Architecture", "API Design", "Scalability", "Resilience", "Observability", "DevOps", "Containerization"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "Acompaño a las empresas en la adopción estratégica de la Inteligencia Artificial, transformando las oportunidades de los modelos de lenguaje en soluciones concretas e integradas en los procesos de negocio. Diseño frameworks basados en LLM y DSL para garantizar desarrollo guiado, cumplimiento normativo y mayor productividad de los equipos técnicos.",
      tags: ["AI Strategy", "Generative AI", "LLM Integration", "Conversational Interfaces", "DSL Engineering", "AI Governance", "Prompt Engineering", "Intelligent Automation", "Responsible AI"],
      link: "#",
    },
  ],
  fr: [
    {
      title: "Project Management",
      description:
        "J'accompagne les organisations dans la gestion efficace des projets grâce aux méthodes Agile et Scrum, en améliorant la gouvernance, le time-to-market et la qualité du delivery. J'analyse et j'optimise les workflows d'entreprise afin d'augmenter l'efficacité opérationnelle, l'automatisation et le contrôle des processus.",
      tags: ["Agile Delivery", "Scrum", "Project Governance", "Digital Transformation", "Process Optimization", "Workflow Automation", "Change Management", "IT Strategy"],
      link: "#",
    },
    {
      title: "Software Architecture",
      description:
        "Je conçois et développe des architectures logicielles scalables, robustes et cloud-ready, basées sur des microservices et sur les versions les plus évoluées de Java et Spring (Framework et Boot). Je définis des solutions orientées vers la résilience, l'observabilité et les performances, tout en optimisant les coûts d'infrastructure grâce a des pratiques modernes de containerisation, d'orchestration et de monitoring continu.",
      tags: ["Microservices", "Cloud-Native", "Domain-Driven Design", "Event-Driven Architecture", "API Design", "Scalability", "Resilience", "Observability", "DevOps", "Containerization"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "J'accompagne les entreprises dans l'adoption stratégique de l'Intelligence Artificielle, en transformant les opportunités offertes par les modèles de langage en solutions concrètes et intégrées aux processus métier. Je conçois des frameworks basés sur des LLM et des DSL pour garantir un développement guidé, la conformité réglementaire et une meilleure productivité des équipes techniques.",
      tags: ["AI Strategy", "Generative AI", "LLM Integration", "Conversational Interfaces", "DSL Engineering", "AI Governance", "Prompt Engineering", "Intelligent Automation", "Responsible AI"],
      link: "#",
    },
  ],
};

export const socials = {
  github: "https://github.com/luigibrandolini",
  facebook: "https://www.facebook.com/ErmesSystems",
  instagram: "https://www.instagram.com/lb.creative.arts/",
  youtube: "https://www.youtube.com/@LuigiBrandolini",
  linkedin: "https://www.linkedin.com/in/luigibrandolini/",
};
