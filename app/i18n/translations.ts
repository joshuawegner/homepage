export type Language = 'en' | 'de';

export interface Translations {
  // Navbar
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  // Hero
  hero: {
    available: string;
    greeting: string;
    name: string;
    title: string;
    description: string;
    viewWork: string;
    getInTouch: string;
    scroll: string;
  };
  // About
  about: {
    sectionTitle: string;
    heading: string;
    headingHighlight: string;
    paragraph1: string;
    paragraph2: string;
    yearsExp: string;
    projectsCount: string;
    projects: string;
    clients: string;
    years: string;
  };
  // Skills
  skills: {
    sectionTitle: string;
    heading: string;
    frontend: string;
    backend: string;
    devops: string;
    tools: string;
  };
  // Projects
  projects: {
    sectionTitle: string;
    heading: string;
    liveDemo: string;
    github: string;
    items: {
      ecommerce: { title: string; description: string };
      taskManagement: { title: string; description: string };
      aiContent: { title: string; description: string };
      finance: { title: string; description: string };
      socialMedia: { title: string; description: string };
      portfolio: { title: string; description: string };
    };
  };
  // Contact
  contact: {
    sectionTitle: string;
    heading: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    socialText: string;
  };
  // Footer
  footer: {
    rights: string;
    builtWith: string;
  };
  // Metadata
  meta: {
    title: string;
    description: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for freelance work',
      greeting: "Hi, I'm",
      name: 'Max Mustermann',
      title: 'Full Stack Developer',
      description:
        'I craft beautiful, performant web applications with modern technologies. Passionate about clean code, great UX, and turning ideas into reality.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      scroll: 'Scroll',
    },
    about: {
      sectionTitle: 'About Me',
      heading: 'Crafting Digital Experiences with',
      headingHighlight: 'Passion & Precision',
      paragraph1:
        "I'm a Full Stack Developer based in San Francisco with over 5 years of experience building web applications that make a difference. My journey started with curiosity about how websites work, and has evolved into a passion for creating seamless user experiences.",
      paragraph2:
        "I specialize in React, Node.js, and cloud technologies, with a keen eye for design and performance optimization. When I'm not coding, you'll find me contributing to open source, mentoring aspiring developers, or exploring the great outdoors.",
      yearsExp: '5+ Years Exp',
      projectsCount: '50+ Projects',
      projects: 'Projects',
      clients: 'Clients',
      years: 'Years',
    },
    skills: {
      sectionTitle: 'What I Do',
      heading: 'Skills & Technologies',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      tools: 'Tools',
    },
    projects: {
      sectionTitle: 'My Work',
      heading: 'Featured Projects',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      items: {
        ecommerce: {
          title: 'E-Commerce Platform',
          description:
            'A full-featured online store with real-time inventory, payment processing, and admin dashboard.',
        },
        taskManagement: {
          title: 'Task Management App',
          description:
            'Collaborative project management tool with real-time updates, kanban boards, and team analytics.',
        },
        aiContent: {
          title: 'AI Content Generator',
          description:
            'Machine learning powered content creation platform with natural language processing capabilities.',
        },
        finance: {
          title: 'Finance Dashboard',
          description:
            'Interactive financial analytics dashboard with data visualization and reporting features.',
        },
        socialMedia: {
          title: 'Social Media App',
          description:
            'Mobile-first social platform with stories, messaging, and content sharing features.',
        },
        portfolio: {
          title: 'Developer Portfolio',
          description:
            'Modern portfolio template with dark mode, animations, and responsive design.',
        },
      },
    },
    contact: {
      sectionTitle: 'Get In Touch',
      heading: "Let's Work Together",
      description:
        "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Project Inquiry',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      sendButton: 'Send Message',
      socialText: 'Or connect with me on social media',
    },
    footer: {
      rights: 'No rights reserved.',
      builtWith: 'Built with',
    },
    meta: {
      title: 'Max Mustermann | Full Stack Developer',
      description:
        'Portfolio of Max Mustermann - Full Stack Developer specializing in React, Node.js, and cloud technologies.',
    },
  },
  de: {
    nav: {
      home: 'Start',
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      available: 'Verfügbar für Freelance-Projekte',
      greeting: 'Hallo, ich bin',
      name: 'Max Mustermann',
      title: 'Full Stack Entwickler',
      description:
        'Ich entwickle ansprechende, performante Webanwendungen mit modernen Technologien. Leidenschaftlich für sauberen Code, großartige UX und die Umsetzung von Ideen in die Realität.',
      viewWork: 'Meine Arbeit ansehen',
      getInTouch: 'Kontakt aufnehmen',
      scroll: 'Scrollen',
    },
    about: {
      sectionTitle: 'Über mich',
      heading: 'Digitale Erlebnisse mit',
      headingHighlight: 'Leidenschaft & Präzision',
      paragraph1:
        'Ich bin ein Full Stack Entwickler aus San Francisco mit über 5 Jahren Erfahrung in der Entwicklung von Webanwendungen, die einen Unterschied machen. Meine Reise begann mit der Neugier, wie Websites funktionieren, und hat sich zu einer Leidenschaft für nahtlose Benutzererlebnisse entwickelt.',
      paragraph2:
        'Ich spezialisiere mich auf React, Node.js und Cloud-Technologien, mit einem scharfen Auge für Design und Performance-Optimierung. Wenn ich nicht programmiere, trage ich zu Open Source bei, berate angehende Entwickler oder erkunde die Natur.',
      yearsExp: '5+ Jahre Erfahrung',
      projectsCount: '50+ Projekte',
      projects: 'Projekte',
      clients: 'Kunden',
      years: 'Jahre',
    },
    skills: {
      sectionTitle: 'Was ich mache',
      heading: 'Fähigkeiten & Technologien',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      tools: 'Werkzeuge',
    },
    projects: {
      sectionTitle: 'Meine Arbeit',
      heading: 'Ausgewählte Projekte',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      items: {
        ecommerce: {
          title: 'E-Commerce Plattform',
          description:
            'Ein vollständiger Online-Shop mit Echtzeit-Inventar, Zahlungsabwicklung und Admin-Dashboard.',
        },
        taskManagement: {
          title: 'Aufgabenverwaltung',
          description:
            'Kollaboratives Projektmanagement-Tool mit Echtzeit-Updates, Kanban-Boards und Team-Analysen.',
        },
        aiContent: {
          title: 'KI-Inhaltsgenerator',
          description:
            'Auf maschinellem Lernen basierende Content-Erstellungsplattform mit natürlicher Sprachverarbeitung.',
        },
        finance: {
          title: 'Finanz-Dashboard',
          description:
            'Interaktives Finanzanalyse-Dashboard mit Datenvisualisierung und Berichtsfunktionen.',
        },
        socialMedia: {
          title: 'Social Media App',
          description:
            'Mobile-First soziale Plattform mit Stories, Messaging und Content-Sharing-Funktionen.',
        },
        portfolio: {
          title: 'Entwickler-Portfolio',
          description:
            'Moderne Portfolio-Vorlage mit Dark Mode, Animationen und responsivem Design.',
        },
      },
    },
    contact: {
      sectionTitle: 'Kontakt aufnehmen',
      heading: 'Lass uns zusammenarbeiten',
      description:
        'Ich freue mich immer über neue Projekte und Möglichkeiten. Ob Sie eine Frage haben oder einfach Hallo sagen möchten - melden Sie sich gerne!',
      nameLabel: 'Name',
      namePlaceholder: 'Max Mustermann',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'max@beispiel.de',
      subjectLabel: 'Betreff',
      subjectPlaceholder: 'Projektanfrage',
      messageLabel: 'Nachricht',
      messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt...',
      sendButton: 'Nachricht senden',
      socialText: 'Oder verbinden Sie sich mit mir in sozialen Medien',
    },
    footer: {
      rights: 'Keine Rechte vorbehalten.',
      builtWith: 'Erstellt mit',
    },
    meta: {
      title: 'Max Mustermann | Full Stack Entwickler',
      description:
        'Portfolio von Max Mustermann - Full Stack Entwickler spezialisiert auf React, Node.js und Cloud-Technologien.',
    },
  },
};
