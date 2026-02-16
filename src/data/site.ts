export const site = {
  name: "Luigi Brandolini",
  url: "https://luigibrandolini.github.io/",
  tagline: "Software Architect, Technical Project Manager, and creative technologist",
};

export const seo = {
  title: "Luigi Brandolini | Software Architect & Technical Project Manager",
  description:
    "Aiuto le organizzazioni a progettare, costruire e scalare sistemi software complessi, allineando strategia, architettura e delivery.",
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
      "Aiuto le organizzazioni a progettare, costruire e scalare sistemi software complessi, allineando strategia, architettura e delivery.",
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
      "Dopo la laurea magistrale in Informatica e l'abilitazione come ingegnere nel 2009, oggi vivo a Roma dove lavoro come ingegnere informatico e formatore tecnico-scientifico. Nel 2014 ho fondato Ermes Engineering (oggi <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>), uno studio che offre consulenza strategica IT, architetture software e governance tecnologica. Ho collaborato con Reply, Dedagroup, Honda S.p.A., Università degli Studi dell'Aquila e IMT Atlantique (Nantes), contribuendo anche a pubblicazioni scientifiche internazionali. L'articolo <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a> è il mio ultimo lavoro di ricerca accademica.",
    creativeTitle: "Oltre il codice",
    aboutCreative:
      "Accanto alla carriera tecnica, coltivo da sempre la passione per il pianoforte, il teatro e la scrittura. Ho interpretato opere di Dürrenmatt e Woody Allen, e nel 2024 ho pubblicato il mio primo romanzo, <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'>Ponte numero IX</a>, una storia che esplora temi di amore, viaggi e seconde opportunità.",
    asyncContact: "Preferisci in asincrono ? Contattami su LinkedIn o GitHub.",
    readyToCollaborate: "Pronto a collaborare? Sono disponibile per advisory strategica, leadership tecnica e partnership creative.",
  },
  en: {
    title: "Software Architect & Technical Project Manager",
    intro:
      "I help organizations design, build, and scale complex software systems by aligning strategy, architecture, and delivery.",
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
      "Born in Atri (Abruzzo, Italy) in 1983, Luigi now lives in Rome where he works as a software engineer and technical trainer. After earning a master's degree in Computer Science and professional engineering certification, in 2014 he founded Ermes Engineering (now <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>), a consultancy focused on strategic IT advisory, software architecture, and technology governance. He has collaborated with Reply, Dedagroup, Honda S.p.A., University of L'Aquila, and IMT Atlantique (Nantes), contributing to international scientific publications.<br/><br/>His latest academic work is the article <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a>.",
    creativeTitle: "Beyond code",
    aboutCreative:
      "Alongside his technical career, Luigi has always cultivated a passion for piano, theater, and writing. He has performed in plays by Dürrenmatt and Woody Allen, and in 2024 published his first novel, <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'>Ponte numero IX</a> (Bridge Number Nine), a story exploring themes of love, travel, and second chances. The international edition <a href='https://a.co/d/0g3L6pHd' target='_blank' rel='noopener noreferrer' class='bio-link'>Deck Nine</a> is also available.",
    asyncContact: "Prefer async? Reach me through LinkedIn or GitHub.",
  readyToCollaborate: "Ready to collaborate? I am open to strategic advisory, technical leadership, and creative partnerships."},
  es: {
    title: "Software Architect y Technical Project Manager",
    intro:
      "Ayudo a organizaciones a disenar, construir y escalar sistemas de software complejos, alineando estrategia, arquitectura y entrega.",
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
      "Nacido en Atri (Abruzzo, Italia) en 1983, Luigi vive ahora en Roma donde trabaja como ingeniero de software y formador tecnico. Tras obtener una maestria en Informatica y la certificacion profesional de ingeniero, en 2014 fundo Ermes Engineering (ahora <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>), una consultoria enfocada en asesoria estrategica de TI, arquitectura de software y gobernanza tecnologica. Ha colaborado con Reply, Dedagroup, Honda S.p.A., Universidad de L'Aquila e IMT Atlantique (Nantes), contribuyendo a publicaciones cientificas internacionales.<br/><br/>Su último trabajo académico es el artículo <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a>.",
    creativeTitle: "Mas alla del codigo",
    aboutCreative:
      "Junto a su carrera tecnica, Luigi siempre ha cultivado la pasion por el piano, el teatro y la escritura. Ha actuado en obras de Dürrenmatt y Woody Allen, y en 2024 publico su primera novela, <a href='https://amzn.eu/d/02OQ3CzI' target='_blank' rel='noopener noreferrer' class='bio-link'>Ponte numero IX</a> (Puente Numero Nueve), una historia que explora temas de amor, viajes y segundas oportunidades. La edición internacional <a href='https://a.co/d/0g3L6pHd' target='_blank' rel='noopener noreferrer' class='bio-link'>Deck Nine</a> también está disponible.",
    asyncContact: "¿Prefieres lo asíncrono? Contáctame por LinkedIn o GitHub.",
    readyToCollaborate: "¿Listo para colaborar? Estoy abierto a asesoría estratégica, liderazgo técnico y colaboraciones creativas.",
  },
  fr: {
    title: "Software Architect et Technical Project Manager",
    intro:
      "J'aide les organisations a concevoir, construire et faire evoluer des systemes logiciels complexes, en alignant strategie, architecture et delivery.",
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
      "Né à Atri (Abruzzes, Italie) en 1983, Luigi vit aujourd'hui à Rome où il travaille comme ingénieur logiciel et formateur technique. Après avoir obtenu un master en informatique et la certification professionnelle d'ingénieur, en 2014 il a fondé Ermes Engineering (aujourd'hui <a href='https://www.ermesystems.com' target='_blank' rel='noopener noreferrer' class='bio-link'>Ermes Systems</a>), un cabinet de conseil axé sur le conseil stratégique IT, l'architecture logicielle et la gouvernance technologique. Il a collaboré avec Reply, Dedagroup, Honda S.p.A., l'Université de L'Aquila et IMT Atlantique (Nantes), contribuant à des publications scientifiques internationales.<br/><br/>Son dernier travail académique est l'article <a href='https://ceur-ws.org/Vol-4122/paper16.pdf' target='_blank' rel='noopener noreferrer' class='bio-link'>A language workbench extension to generate conversational interfaces for domain-specific languages</a>.",
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
        "Consulenze manageriali rivolte alla gestione dei progetti mediante approccio SCRUM/Agile e all'automazione dei workflow aziendali.",
      tags: ["HR", "Gestione", "Software"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "Sviluppo di langium-llm per abilitare lo sviluppo di codice compliant con DSL attraverso interfacce conversazionali.",
      tags: ["AI", "Delivery", "Governance"],
      link: "#",
    },
    {
      title: "Platform Modernization",
      description:
        "Passaggio ad architetture a Microservizi e miglioramento della scalabilità applicativa, focalizzato su affidabilità, osservabilità ed efficienza dei costi.",
      tags: ["Platform", "Affidabilità", "Cloud"],
      link: "#",
    },
  ],
  en: [
    {
      title: "IT Consulting",
      description:
        "Management consulting focused on project delivery through a SCRUM/Agile approach and on business workflow automation.",
      tags: ["HR", "Management", "Software"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "Development of langium-llm to enable DSL compliant code creation through conversational interfaces.",
      tags: ["AI", "Delivery", "Governance"],
      link: "#",
    },
    {
      title: "Platform Modernization",
      description:
        "Transition to Microservices architectures and improved application scalability, focused on reliability, observability, and cost efficiency.",
      tags: ["Platform", "Reliability", "Cloud"],
      link: "#",
    },
  ],
  es: [
    {
      title: "IT Consulting",
      description:
        "Consultoria de gestion orientada a la direccion de proyectos mediante enfoque SCRUM/Agile y a la automatizacion de flujos de trabajo empresariales.",
      tags: ["RR. HH.", "Gestion", "Software"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "Desarrollo de langium-llm para habilitar la creacion de codigo compatible con DSL mediante interfaces conversacionales.",
      tags: ["AI", "Delivery", "Governance"],
      link: "#",
    },
    {
      title: "Platform Modernization",
      description:
        "Transicion a arquitecturas de Microservicios y mejora de la escalabilidad de la aplicacion, centrada en fiabilidad, observabilidad y eficiencia de costes.",
      tags: ["Plataforma", "Fiabilidad", "Cloud"],
      link: "#",
    },
  ],
  fr: [
    {
      title: "IT Consulting",
      description:
        "Conseil en management axe sur la conduite de projets via une approche SCRUM/Agile et sur l'automatisation des workflows d'entreprise.",
      tags: ["RH", "Gestion", "Logiciel"],
      link: "#",
    },
    {
      title: "AI Enablement",
      description:
        "Developpement de langium-llm pour permettre la creation de code conforme aux DSL via des interfaces conversationnelles.",
      tags: ["AI", "Delivery", "Governance"],
      link: "#",
    },
    {
      title: "Platform Modernization",
      description:
        "Transition vers des architectures Microservices et amelioration de la scalabilite applicative, centree sur la fiabilite, l'observabilite et l'efficacite des couts.",
      tags: ["Plateforme", "Fiabilite", "Cloud"],
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
