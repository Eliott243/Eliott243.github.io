// Toutes les données du portfolio. Modifie ce fichier pour mettre le site à jour.
// Les champs traduits s'écrivent { fr: '…', en: '…' } ; le reste est commun aux deux langues.

export const profile = {
  firstName: 'Elie',
  lastName: 'Katende',
  fullName: 'Elie Katende Kazwela',
  roleStrong: { fr: 'Développeur', en: 'Full stack' },
  roleLight: { fr: 'full stack', en: 'dev' },
  tagline: {
    fr: 'Développeur full stack basé à Kinshasa, je conçois des applications et des outils de données simples et utiles.',
    en: 'Full stack dev based in Kinshasa. I build applications and data tools that stay simple and useful.',
  },
  city: 'Kinshasa',
  address: {
    fr: '15e rue, av. Belle Cité, q. Ndanu, c/Limete — Kinshasa',
    en: '15th street, Belle Cité ave., Ndanu, Limete — Kinshasa',
  },
  phone: '+243 81 436 76 73',
  phoneRaw: '+243814367673',
  email: 'eliekatende35@gmail.com',
  cvUrl: { fr: '/CV_Elie_Katende_FR.pdf', en: '/CV_Elie_Katende_EN.pdf' },
  bio: {
    fr: [
      "Je suis développeur full stack. J'ai commencé par les données — nettoyer, fiabiliser, faire parler des bases qui servent à décider — avant d'aller vers le développement d'applications.",
      "J'aime les projets où la technique répond à un besoin réel : une analyse qui change une décision, une app qui rend un savoir accessible. Rigoureux sur le suivi, réactif face aux imprévus, je travaille volontiers en équipe et je documente ce que je construis.",
    ],
    en: [
      'I am a full stack dev. I started with data — cleaning it, making it reliable, turning databases into something people can decide with — before moving into application development.',
      'I like projects where the technical work answers a real need: an analysis that changes a decision, an app that makes knowledge accessible. I follow through carefully, react well to the unexpected, enjoy working in a team and document what I build.',
    ],
  },
};

export const socials = [
  { label: 'WhatsApp', href: `https://wa.me/${profile.phoneRaw.replace('+', '')}`, icon: 'whatsapp' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/elie-katende-583659329',
    icon: 'linkedin',
  },
  { label: 'GitHub', href: 'https://github.com/Eliott243', icon: 'github' },
  // TODO: remplacer par ton vrai profil Instagram
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
];

export const stats = [
  {
    value: 5,
    suffix: '',
    label: { fr: 'projets menés de bout en bout', en: 'projects delivered end to end' },
  },
  {
    value: 2,
    suffix: '',
    label: { fr: 'certifications data (Google, IBM)', en: 'data certifications (Google, IBM)' },
  },
  {
    value: 2,
    suffix: '',
    label: { fr: 'expériences professionnelles', en: 'professional experiences' },
  },
  { value: 2, suffix: '', label: { fr: 'langues de travail', en: 'working languages' } },
];

export const marqueeRows = [
  {
    fr: ['Python', 'SQL', 'Power BI', 'Analyse de données', 'ETL', 'Reporting'],
    en: ['Python', 'SQL', 'Power BI', 'Data analysis', 'ETL', 'Reporting'],
  },
  {
    fr: ['JavaScript', 'React Native', 'Expo', 'Chart.js', 'Explainable AI', 'Automatisme'],
    en: ['JavaScript', 'React Native', 'Expo', 'Chart.js', 'Explainable AI', 'Automation'],
  },
];

export const skillGroups = [
  {
    title: { fr: 'Données', en: 'Data' },
    items: {
      fr: ['Python', 'SQL', 'Power BI', 'Nettoyage & modélisation', 'Pipelines ETL', 'Reporting'],
      en: ['Python', 'SQL', 'Power BI', 'Cleaning & modelling', 'ETL pipelines', 'Reporting'],
    },
  },
  {
    title: { fr: 'Développement', en: 'Development' },
    items: {
      fr: ['JavaScript', 'React Native / Expo', 'Chart.js', 'Applications mobiles', 'Git'],
      en: ['JavaScript', 'React Native / Expo', 'Chart.js', 'Mobile apps', 'Git'],
    },
  },
  {
    title: { fr: 'Méthode', en: 'Approach' },
    items: {
      fr: [
        'Analyse critique',
        'Amélioration continue',
        'Rigueur dans le suivi',
        'Réactivité aux imprévus',
        'Assistance aux clients',
        'Travail en équipe',
      ],
      en: [
        'Critical analysis',
        'Continuous improvement',
        'Rigorous follow-up',
        'Calm under pressure',
        'Client support',
        'Teamwork',
      ],
    },
  },
];

export const projects = [
  {
    id: 'finlearn',
    title: 'FinLearn',
    year: '2026',
    stack: ['React Native', 'Expo', 'AsyncStorage'],
    image: '/projects/finlearn.svg',
    role: { fr: 'Conception et développement', en: 'Design and development' },
    summary: {
      fr: "Application mobile d'éducation financière pensée pour l'Afrique francophone : épargne, tontines digitales, mobile money et ETF, sans jargon.",
      en: 'Mobile financial-education app built for French-speaking Africa: saving, digital tontines, mobile money and ETFs, without the jargon.',
    },
    details: {
      fr: [
        'Parcours progressif par niveaux, quiz et badges pour maintenir la régularité.',
        'Simulateurs concrets : intérêts composés, tontine digitale, impact de l’inflation.',
        'Fonctionne hors ligne : toutes les données restent sur l’appareil, sans compte en ligne.',
      ],
      en: [
        'Level-by-level path with quizzes and badges to keep learners consistent.',
        'Hands-on simulators: compound interest, digital tontine, impact of inflation.',
        'Works offline: all data stays on the device, no online account required.',
      ],
    },
    links: [{ label: { fr: 'Code source', en: 'Source code' }, href: 'https://github.com/Eliott243/finlearn' }],
  },
  {
    id: 'plagiat-ia',
    title: { fr: 'Détection plagiat & IA', en: 'Plagiarism & AI detection' },
    year: '2025',
    stack: { fr: ['Analyse de texte', 'Classification'], en: ['Text analysis', 'Classification'] },
    image: '/projects/plagiat-ia.svg',
    role: { fr: 'Conception et développement', en: 'Design and development' },
    summary: {
      fr: "Application d'analyse de textes qui identifie les similitudes avec des sources existantes et les indices de génération par intelligence artificielle.",
      en: 'Text-analysis app that flags similarity with existing sources as well as signs of AI-generated writing.',
    },
    details: {
      fr: [
        'Analyse et classification de contenu pour automatiser l’évaluation des textes.',
        'Interface de restitution des résultats claire et exploitable par un correcteur.',
        'Réalisée pendant mon stage technicien à Nearest University (Nicosie).',
      ],
      en: [
        'Content analysis and classification to automate the review of submitted texts.',
        'Results presented clearly enough for a grader to act on them.',
        'Built during my technical internship at Nearest University (Nicosia).',
      ],
    },
    links: [], // TODO: ajouter un lien démo ou dépôt si disponible
  },
  {
    id: 'sales-analytics',
    title: 'Enterprise Sales Analytics',
    year: '2025',
    stack: ['Python', 'SQL', 'Chart.js'],
    image: '/projects/sales-analytics.svg',
    role: { fr: 'Data engineering & dataviz', en: 'Data engineering & dataviz' },
    summary: {
      fr: 'Pipeline ETL de bout en bout pour traiter et modéliser des données de ventes retail, avec tableaux de bord interactifs.',
      en: 'End-to-end ETL pipeline that processes and models retail sales data, with interactive dashboards.',
    },
    details: {
      fr: [
        'Modèles SQL transformant les données brutes en tables prêtes à l’analyse.',
        'Tableaux de bord pour évaluer la performance commerciale et les tendances.',
      ],
      en: [
        'SQL models turning raw exports into analysis-ready tables.',
        'Dashboards to track commercial performance and trends.',
      ],
    },
    links: [],
  },
  {
    id: 'churn',
    title: 'Customer Churn Analysis',
    year: '2024',
    stack: ['Python', 'SQL', 'Power BI'],
    image: '/projects/churn.svg',
    role: { fr: 'Analyse & restitution', en: 'Analysis & reporting' },
    summary: {
      fr: 'Analyse du comportement client pour identifier les facteurs de départ, avec segmentation et tableaux de bord de rétention.',
      en: 'Customer-behaviour analysis to identify what drives churn, with segmentation and retention dashboards.',
    },
    details: {
      fr: [
        'Exploration des données et segmentation pour isoler les moteurs du churn.',
        'Dashboards Power BI sur les KPI de rétention.',
        'Recommandations actionnables pour les équipes en charge de la fidélisation.',
      ],
      en: [
        'Data exploration and segmentation to isolate the drivers of churn.',
        'Power BI dashboards on retention KPIs.',
        'Actionable recommendations for the teams in charge of loyalty.',
      ],
    },
    links: [],
  },
  {
    id: 'orientation-ia',
    title: { fr: 'Student Orientation IA', en: 'Student Orientation AI' },
    year: '2024',
    stack: ['JavaScript', 'Explainable AI'],
    image: '/projects/orientation-ia.svg',
    role: { fr: 'Conception produit & développement', en: 'Product design & development' },
    summary: {
      fr: "Application d'orientation scolaire pour collégiens : elle analyse les bulletins et propose des filières en expliquant son raisonnement.",
      en: 'School-guidance app for middle-school students: it reads report cards and suggests tracks while explaining its reasoning.',
    },
    details: {
      fr: [
        'Recommandations explicables plutôt que score opaque.',
        'Accent mis sur la transparence et l’interprétabilité des suggestions.',
      ],
      en: [
        'Explainable recommendations instead of an opaque score.',
        'Focus on transparency and interpretability of every suggestion.',
      ],
    },
    links: [],
  },
];

export const timeline = [
  {
    kind: { fr: 'Expérience', en: 'Experience' },
    title: { fr: 'Stagiaire technicien', en: 'Technical intern' },
    org: { fr: 'Nearest University — Nicosie', en: 'Nearest University — Nicosia' },
    period: { fr: 'Juin 2025 — Novembre 2025', en: 'June 2025 — November 2025' },
    bullets: {
      fr: [
        "Projets d'amélioration continue pour optimiser les processus de fabrication.",
        'Maintenance préventive et corrective de systèmes automatisés en production.',
        "Développement d'une application de détection de plagiat et de contenu généré par IA.",
      ],
      en: [
        'Continuous-improvement projects to optimise manufacturing processes.',
        'Preventive and corrective maintenance of automated production systems.',
        'Built an application detecting plagiarism and AI-generated content.',
      ],
    },
  },
  {
    kind: { fr: 'Expérience', en: 'Experience' },
    title: { fr: 'Analyste de données', en: 'Data analyst' },
    org: 'Certech — Kinshasa',
    period: { fr: 'Septembre 2020 — Janvier 2022', en: 'September 2020 — January 2022' },
    bullets: {
      fr: [
        'Gestion des bases de données et intégrité des données dans les systèmes opérationnels.',
        'Nettoyage, organisation et standardisation des données pour le reporting.',
        'Rapports périodiques pour le suivi des activités et la prise de décision.',
        'Coordination avec les équipes pour des données fiables et à jour dans les délais.',
      ],
      en: [
        'Database management and data integrity across operational systems.',
        'Cleaning, organising and standardising data for reporting.',
        'Recurring reports to track activity and support decisions.',
        'Coordination with teams to keep data reliable and up to date on time.',
      ],
    },
  },
  {
    kind: { fr: 'Certification', en: 'Certification' },
    title: 'Google Data Analytics — Professional Certificate',
    org: 'Coursera',
    period: { fr: 'Formation en ligne', en: 'Online programme' },
    bullets: {
      fr: [
        'Nettoyage, analyse et visualisation de données.',
        'SQL, R et tableurs au service de la décision.',
        'Projets analytiques par cas pratiques suivant les standards du métier.',
      ],
      en: [
        'Data cleaning, analysis and visualisation.',
        'SQL, R and spreadsheets used for decision-making.',
        'Case-based analytics projects following industry standards.',
      ],
    },
  },
  {
    kind: { fr: 'Certification', en: 'Certification' },
    title: 'Relational Database Administrator with GenAI',
    org: 'IBM',
    period: { fr: 'Formation en ligne', en: 'Online programme' },
    bullets: {
      fr: ['Administration de bases de données relationnelles et usages de l’IA générative.'],
      en: ['Relational database administration and applied generative AI.'],
    },
  },
];

export const languages = [
  {
    name: { fr: 'Français', en: 'French' },
    level: { fr: 'Langue maternelle', en: 'Native speaker' },
  },
  {
    name: { fr: 'Anglais', en: 'English' },
    level: { fr: "Opérationnel — 4 ans d'étude", en: 'Working proficiency — 4 years of study' },
  },
];

export const navItems = [
  { id: 'accueil', label: { fr: 'Accueil', en: 'Home' } },
  { id: 'a-propos', label: { fr: 'À propos', en: 'About' } },
  { id: 'competences', label: { fr: 'Compétences', en: 'Skills' } },
  { id: 'projets', label: { fr: 'Projets', en: 'Projects' } },
  { id: 'parcours', label: { fr: 'Parcours', en: 'Journey' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
];

/** Libellés d'interface (titres de sections, boutons, formulaire, accessibilité). */
export const ui = {
  heroRegion: { fr: 'Présentation', en: 'Introduction' },
  portraitAlt: { fr: 'Portrait de', en: 'Portrait of' },
  scroll: { fr: 'Scroll', en: 'Scroll' },
  openMenu: { fr: 'Ouvrir le menu', en: 'Open menu' },
  closeMenu: { fr: 'Fermer le menu', en: 'Close menu' },
  mainNav: { fr: 'Navigation principale', en: 'Main navigation' },
  langSwitch: { fr: 'Passer en anglais', en: 'Switch to French' },
  aboutTitle: { solid: { fr: 'À propos', en: 'About' }, hollow: { fr: 'de moi', en: 'me' } },
  downloadCv: { fr: 'Télécharger mon CV', en: 'Download my CV' },
  languagesTitle: { fr: 'Langues', en: 'Languages' },
  skillsTitle: { hollow: { fr: 'Ce que', en: 'What' }, solid: { fr: 'je fais', en: 'I do' } },
  projectsTitle: { solid: { fr: 'Projets', en: 'Selected' }, hollow: { fr: 'récents', en: 'work' } },
  projectRole: { fr: 'Mon rôle', en: 'My role' },
  projectPreviewAlt: { fr: 'Aperçu du projet', en: 'Preview of' },
  projectDemoSoon: { fr: 'Lien de démonstration à venir.', en: 'Demo link coming soon.' },
  close: { fr: 'Fermer', en: 'Close' },
  cursorView: { fr: 'Voir', en: 'View' },
  timelineTitle: { hollow: { fr: 'Mon', en: 'My' }, solid: { fr: 'parcours', en: 'journey' } },
  contactTitle: {
    solid: { fr: 'Parlons', en: "Let's" },
    hollow: { fr: '-en', en: 'talk' },
    glue: { fr: '', en: ' ' },
  },
  formName: { fr: 'Nom', en: 'Name' },
  formEmail: { fr: 'Email', en: 'Email' },
  formMessage: { fr: 'Message', en: 'Message' },
  formSend: { fr: 'Envoyer', en: 'Send' },
  formSubject: { fr: 'Contact portfolio —', en: 'Portfolio contact —' },
  formNoName: { fr: 'sans nom', en: 'no name' },
  backToTop: { fr: 'Haut de page', en: 'Back to top' },
};
