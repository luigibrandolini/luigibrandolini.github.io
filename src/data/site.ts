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
  creativeTitle: string;
  professionalTitle: string;
  asyncContact: string;
  readyToCollaborate: string;
  languageLabel: string;
  heroImageAlt: string;
  featuredProjectDescription: string;
  featuredProjectTagOpenSource: string;
}> = {
  it: {
    title: "Software Architect & Technical Project Manager",
    intro:
      "Nei primi anni '90, davanti ad un IBM PS/1 80286, nasceva la mia passione per la tecnologia. Oggi, progetto e aiuto a scalare sistemi software complessi, integrando strategia, architettura e delivery.",
    bio:
      "Con oltre 16 anni di esperienza in software enterprise, formazione, mentoring, leadership tecnica e innovazione guidata da AI, opero all'intersezione tra eccellenza ingegneristica, governance di progetto e crescita dei team. Sono disponibile per incarichi fractional e leadership tecnico-strategica.",
    cta: "Parliamo del tuo prossimo progetto",
    sectionAbout: "Biografia",
    sectionPortfolio: "Portfolio",
    sectionProjects: "Progetti",
    sectionContact: "Contatti",
    languageLabel: "Lingua",
    portfolioIntro:
      "Una selezione di programmi e iniziative che dimostrano approccio, impatto e collaborazione.",
    projectsIntro:
      "Progetti open source e contributi alla community di sviluppatori.",
    professionalTitle: "Percorso professionale",
    aboutOriginsTitle: "Le origini digitali",
    heroImageAlt: "Luigi Brandolini con il suo IBM PS/1 80286 d'infanzia",
    featuredProjectDescription:
      "Form builder dichiarativo per Angular 20+ che semplifica la creazione di form complessi tramite configurazione basata su decorator. Disponibile su npm e mantenuto attivamente su GitHub.",
    featuredProjectTagOpenSource: "Open Source",
    aboutOrigins:
      "Nato ad Atri (Abruzzo) nel 1983, ho sviluppato, sin dall’infanzia, un forte interesse per l’informatica e i computer. Nonostante il mio percorso liceale fosse ad indirizzo umanistico, ho intrapreso autonomamente lo studio della programmazione con QBasic e Turbo Pascal 5.5, dedicandomi nel tempo libero alla sperimentazione su progetti personali.",
    aboutBio:
      "Dopo la laurea magistrale in Informatica e l'abilitazione come ingegnere nel 2009, oggi vivo a Roma dove lavoro come ingegnere informatico e formatore tecnico-scientifico. Nel 2014 ho fondato Ermes Engineering, oggi <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>, uno studio che offre consulenza strategica IT, architetture software e governance tecnologica. Ho collaborato con Reply, Dedagroup, Honda S.p.A., Università degli Studi dell'Aquila e IMT Atlantique (Nantes), contribuendo anche a pubblicazioni scientifiche internazionali. L'articolo <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> è il mio ultimo lavoro di ricerca accademica.",
    creativeTitle: "Oltre il codice",
    aboutCreative:
      "Accanto alla carriera tecnica, coltivo da sempre la passione per il pianoforte, il teatro e la scrittura. Ho interpretato opere di Dürrenmatt e Woody Allen, e nel 2024 ho pubblicato il mio primo romanzo, <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'>Ponte numero IX</a>, una storia che esplora temi di amore, viaggi e seconde opportunità.",
    asyncContact: "Preferisci in asincrono ? Contattami su LinkedIn o GitHub.",
    readyToCollaborate: "Pronto a collaborare? Sono disponibile per advisory strategica, leadership tecnica e partnership creative.",
  },
  en: {
    title: "Software Architect & Technical Project Manager",
    intro:
      "In the early 1990s, in front of an IBM PS/1 80286, my passion for technology was taking shape. Today, I design and help scale complex software systems, integrating strategy, architecture, and delivery.",
    bio:
      "With 16+ years across enterprise software, technical leadership, and AI driven innovation, I operate at the intersection of engineering excellence, project governance, and team development. Available for fractional engagements and strategic technical leadership.",
    cta: "Let us talk about your next project",
    sectionAbout: "Biography",
    sectionPortfolio: "Portfolio",
    sectionProjects: "Projects",
    sectionContact: "Contact",
    languageLabel: "Language",
    portfolioIntro:
      "A selection of programs and initiatives that highlight approach, impact, and collaboration.",
    projectsIntro:
      "Open source projects and contributions to the developer community.",
    professionalTitle: "Professional journey",
    aboutOriginsTitle: "Digital origins",
    heroImageAlt: "Luigi Brandolini with his childhood IBM PS/1 80286",
    featuredProjectDescription:
      "Declarative form builder for Angular 20+ that simplifies complex form creation through decorator based configuration. Available on npm and actively maintained on GitHub.",
    featuredProjectTagOpenSource: "Open Source",
    aboutOrigins:
      "Born in Atri (Abruzzo) in 1983, I have been passionate about technology since I was a child: my first console was an ATARI 2600. At 14, in the 90s, I started programming with QBasic and Turbo Pascal 5.5, carving out time from my studies despite a demanding humanities education.",
    aboutBio:
      "After earning my master's degree in Computer Science and qualifying as an engineer in 2009, I now live in Rome, where I work as a software engineer and technical-scientific trainer. In 2014 I founded Ermes Engineering, now <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>, a studio that offers strategic IT consulting, software architecture, and technology governance. I have collaborated with Reply, Dedagroup, Honda S.p.A., University of L'Aquila, and IMT Atlantique (Nantes), also contributing to international scientific publications. The article <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> is my latest academic research work.",
    creativeTitle: "Beyond code",
    aboutCreative:
      "Alongside his technical career, Luigi has always cultivated a passion for piano, theater, and writing. He has performed in plays by Dürrenmatt and Woody Allen, and in 2024 published his first novel, <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'>Ponte numero IX</a> (Bridge Number Nine), a story exploring themes of love, travel, and second chances. The international edition <a href='https://a.co/d/0g3L6pHd' target='_blank' rel='noopener noreferrer' class='bio-link'>Deck Nine</a> is also available.",
    asyncContact: "Prefer async? Reach me through LinkedIn or GitHub.",
  readyToCollaborate: "Ready to collaborate? I am open to strategic advisory, technical leadership, and creative partnerships."},
  es: {
    title: "Software Architect y Technical Project Manager",
    intro:
      "A principios de los años 90, frente a un IBM PS/1 80286, iba naciendo mi pasión por la tecnología. Hoy diseño y ayudo a escalar sistemas de software complejos, integrando estrategia, arquitectura y delivery.",
    bio:
      "Con mas de 16 anos de experiencia en software enterprise, liderazgo tecnico e innovacion guiada por AI, opero en la interseccion de excelencia de ingenieria, gobernanza de programas y desarrollo de equipos. Disponible para colaboraciones fractional y liderazgo tecnico estrategico.",
    cta: "Hablemos de tu proximo proyecto",
    sectionAbout: "Biografia",
    sectionPortfolio: "Portafolio",
    sectionProjects: "Proyectos",
    sectionContact: "Contacto",
    languageLabel: "Idioma",
    portfolioIntro:
      "Una seleccion de programas e iniciativas que muestran enfoque, impacto y colaboracion.",
    projectsIntro:
      "Proyectos de codigo abierto y contribuciones a la comunidad de desarrolladores.",
    professionalTitle: "Trayectoria profesional",
    aboutOriginsTitle: "Los orígenes digitales",
    heroImageAlt: "Luigi Brandolini con su IBM PS/1 80286 de la infancia",
    featuredProjectDescription:
      "Constructor declarativo de formularios para Angular 20+ que simplifica la creacion de formularios complejos mediante configuracion basada en decoradores. Disponible en npm y mantenido activamente en GitHub.",
    featuredProjectTagOpenSource: "Código Abierto",
    aboutOrigins:
      "Nacido en Atri (Abruzzo) en 1983, siempre he sido un entusiasta de la tecnología: mi primera consola fue una ATARI 2600. A los 14 años, en los años 90, me acerqué a la programación con QBasic y Turbo Pascal 5.5, encontrando tiempo a pesar de una formación humanística exigente.",
    aboutBio:
      "Tras obtener mi maestria en Informatica y habilitarme como ingeniero en 2009, hoy vivo en Roma, donde trabajo como ingeniero de software y formador tecnico-cientifico. En 2014 funde Ermes Engineering, hoy <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>, un estudio que ofrece consultoria estrategica de TI, arquitectura de software y gobernanza tecnologica. He colaborado con Reply, Dedagroup, Honda S.p.A., Universidad de L'Aquila e IMT Atlantique (Nantes), contribuyendo tambien a publicaciones cientificas internacionales. El articulo <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> es mi trabajo mas reciente de investigacion academica.",
    creativeTitle: "Mas alla del codigo",
    aboutCreative:
      "Junto a su carrera tecnica, Luigi siempre ha cultivado la pasion por el piano, el teatro y la escritura. Ha actuado en obras de Dürrenmatt y Woody Allen, y en 2024 publico su primera novela, <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'>Ponte numero IX</a> (Puente Numero Nueve), una historia que explora temas de amor, viajes y segundas oportunidades. La edición internacional <a href='https://a.co/d/0g3L6pHd' target='_blank' rel='noopener noreferrer' class='bio-link'>Deck Nine</a> también está disponible.",
    asyncContact: "¿Prefieres lo asíncrono? Contáctame por LinkedIn o GitHub.",
    readyToCollaborate: "¿Listo para colaborar? Estoy abierto a asesoría estratégica, liderazgo técnico y colaboraciones creativas.",
  },
  fr: {
    title: "Software Architect et Technical Project Manager",
    intro:
      "Au début des années 90, devant un IBM PS/1 80286, ma passion pour la technologie prenait forme. Aujourd'hui, je conçois et j'aide à faire évoluer des systèmes logiciels complexes, en intégrant stratégie, architecture et delivery.",
    bio:
      "Avec plus de 16 ans dans le logiciel enterprise, le leadership technique et l innovation guidee par AI, j opere a l intersection de l excellence technique, de la gouvernance des programmes et du developpement des equipes. Disponible pour des engagements fractional et un leadership technique strategique.",
    cta: "Parlons de votre prochain projet",
    sectionAbout: "Biographie",
    sectionPortfolio: "Portfolio",
    sectionProjects: "Projets",
    sectionContact: "Contact",
    languageLabel: "Langue",
    portfolioIntro:
      "Une selection de programmes et d initiatives qui mettent en valeur l approche, l impact et la collaboration.",
    projectsIntro:
      "Projets open source et contributions a la communaute des developpeurs.",
    professionalTitle: "Parcours professionnel",
    aboutOriginsTitle: "Origines numeriques",
    heroImageAlt: "Luigi Brandolini avec son IBM PS/1 80286 d'enfance",
    featuredProjectDescription:
      "Generateur declaratif de formulaires pour Angular 20+ qui simplifie la creation de formulaires complexes via une configuration basee sur des decorateurs. Disponible sur npm et activement maintenu sur GitHub.",
    featuredProjectTagOpenSource: "Open Source",
    aboutOrigins:
      "Né à Atri (Abruzzes) en 1983, je suis passionné de technologie depuis l'enfance : ma première console fut une ATARI 2600. À 14 ans, dans les années 90, j'ai découvert la programmation avec QBasic et Turbo Pascal 5.5, trouvant du temps malgré des études littéraires exigeantes.",
    aboutBio:
      "Apres avoir obtenu mon master en informatique et la qualification d'ingenieur en 2009, je vis aujourd'hui a Rome, ou je travaille comme ingenieur logiciel et formateur technico-scientifique. En 2014, j'ai fonde Ermes Engineering, aujourd'hui <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>, un studio qui propose du conseil strategique IT, de l'architecture logicielle et de la gouvernance technologique. J'ai collabore avec Reply, Dedagroup, Honda S.p.A., l'Universite de L'Aquila et IMT Atlantique (Nantes), en contribuant egalement a des publications scientifiques internationales. L'article <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> est mon travail de recherche academique le plus recent.",
    creativeTitle: "Au dela du code",
    aboutCreative:
      "Parallelement a sa carriere technique, Luigi a toujours cultive une passion pour le piano, le theatre et l ecriture. Il a joue dans des pieces de Dürrenmatt et Woody Allen, et en 2024 a publie son premier roman, <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'>Ponte numero IX</a> (Pont Numero Neuf), une histoire explorant des themes d amour, de voyage et de secondes chances. L'édition internationale <a href='https://a.co/d/0g3L6pHd' target='_blank' rel='noopener noreferrer' class='bio-link'>Deck Nine</a> est également disponible.",
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
      title: "IT Consulting",
      description:
        "Supporto le organizzazioni nella gestione efficace dei progetti attraverso metodologie Agile e Scrum, migliorando governance, time-to-market e qualità del delivery. Analizzo e ottimizzo i workflow aziendali per aumentare efficienza operativa, automazione e controllo dei processi.",
      tags: ["HR", "Gestione", "Software"],
      link: "#",
    },
    {
      title: "Platform Modernization",
      description:
        "Accompagno l'evoluzione delle piattaforme applicative verso architetture a microservizi scalabili e cloud-ready. Miglioro resilienza, osservabilità e performance, ottimizzando al contempo i costi infrastrutturali attraverso pratiche moderne di containerizzazione, orchestrazione e monitoraggio continuo.",
      tags: ["Platform", "Affidabilità", "Cloud"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "Affianco le aziende nell'adozione strategica dell'Intelligenza Artificiale, trasformando le opportunità offerte dai modelli linguistici in soluzioni concrete e integrate nei processi aziendali. Progetto framework basati su LLM e DSL per garantire sviluppo guidato, compliance normativa e maggiore produttività dei team tecnici.",
      tags: ["AI", "Delivery", "Governance"],
      link: "#",
    },
  ],
  en: [
    {
      title: "IT Consulting",
      description:
        "I support organizations in effective project management through Agile and Scrum methodologies, improving governance, time-to-market, and delivery quality. I analyze and optimize business workflows to increase operational efficiency, automation, and process control.",
      tags: ["HR", "Management", "Software"],
      link: "#",
    },
    {
      title: "Platform Modernization",
      description:
        "I guide the evolution of application platforms toward scalable, cloud-ready microservices architectures. I improve resilience, observability, and performance while optimizing infrastructure costs through modern containerization, orchestration, and continuous monitoring practices.",
      tags: ["Platform", "Reliability", "Cloud"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "I support companies in the strategic adoption of Artificial Intelligence, turning opportunities offered by language models into concrete solutions integrated into business processes. I design frameworks based on LLMs and DSLs to ensure guided development, regulatory compliance, and higher productivity for technical teams.",
      tags: ["AI", "Delivery", "Governance"],
      link: "#",
    },
  ],
  es: [
    {
      title: "IT Consulting",
      description:
        "Apoyo a las organizaciones en la gestion eficaz de proyectos mediante metodologias Agile y Scrum, mejorando la gobernanza, el time-to-market y la calidad del delivery. Analizo y optimizo los flujos de trabajo empresariales para aumentar la eficiencia operativa, la automatizacion y el control de procesos.",
      tags: ["RR. HH.", "Gestion", "Software"],
      link: "#",
    },
    {
      title: "Platform Modernization",
      description:
        "Acompaño la evolucion de las plataformas aplicativas hacia arquitecturas de microservicios escalables y cloud-ready. Mejoro resiliencia, observabilidad y rendimiento, optimizando al mismo tiempo los costes de infraestructura mediante practicas modernas de contenedorizacion, orquestacion y monitorizacion continua.",
      tags: ["Plataforma", "Fiabilidad", "Cloud"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "Acompaño a las empresas en la adopcion estrategica de la Inteligencia Artificial, transformando las oportunidades de los modelos de lenguaje en soluciones concretas e integradas en los procesos de negocio. Diseño frameworks basados en LLM y DSL para garantizar desarrollo guiado, cumplimiento normativo y mayor productividad de los equipos tecnicos.",
      tags: ["AI", "Delivery", "Governance"],
      link: "#",
    },
  ],
  fr: [
    {
      title: "IT Consulting",
      description:
        "J'accompagne les organisations dans la gestion efficace des projets grâce aux methodes Agile et Scrum, en ameliorant la gouvernance, le time-to-market et la qualite du delivery. J'analyse et j'optimise les workflows d'entreprise afin d'augmenter l'efficacite operationnelle, l'automatisation et le controle des processus.",
      tags: ["RH", "Gestion", "Logiciel"],
      link: "#",
    },
    {
      title: "Platform Modernization",
      description:
        "J'accompagne l'evolution des plateformes applicatives vers des architectures microservices scalables et cloud-ready. J'ameliore la resilience, l'observabilite et les performances, tout en optimisant les couts d'infrastructure grace a des pratiques modernes de containerisation, d'orchestration et de monitoring continu.",
      tags: ["Plateforme", "Fiabilite", "Cloud"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "J'accompagne les entreprises dans l'adoption strategique de l'Intelligence Artificielle, en transformant les opportunites offertes par les modeles de langage en solutions concretes et integrees aux processus metier. Je conçois des frameworks bases sur des LLM et des DSL pour garantir un developpement guide, la conformite reglementaire et une meilleure productivite des equipes techniques.",
      tags: ["AI", "Delivery", "Governance"],
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
