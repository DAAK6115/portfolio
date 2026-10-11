const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Azziz Ange Kevin Diomandé",
  handle: "DAAK6115",
  email: "diomandezazzizangekevin@gmail.com",
  phone: "+225 07 0315 6943",
  location: "Abidjan, Cocody Faya — Côte d'Ivoire",
  github: "https://github.com/DAAK6115",
  linkedin: "https://www.linkedin.com/in/azziz-ange-kevin-diomande-a907792b7/",
  // Mets ici le chemin de ton CV (ex: `${BASE}cv.pdf`) après l'avoir ajouté dans /public
  cv: null,
  roles: [
    "Développeur Web & Mobile",
    "Étudiant en Génie Logiciel",
    "Créateur de solutions numériques",
  ],
  startYear: 2023,
};

export const navLinks = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "projects", label: "Projets" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Parcours" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    name: "ARTISAN_CI",
    category: "Web",
    stack: ["React", "Django", "Tailwind"],
    desc: "Plateforme de mise en relation entre artisans et clients en Côte d'Ivoire.",
    image: `${BASE}projects/artisan_ci.jpg`,
    demoUrl: "https://artisan-ci-mauve.vercel.app",
    repoUrl: "https://github.com/DAAK6115/ARTISAN_CI",
    featured: true,
  },
  {
    name: "Dashboard de suivi de livres",
    category: "Web",
    stack: ["Django", "React", "API REST"],
    desc: "Visualisation des stocks, ventes et distributions par centre dans une interface web.",
    image: `${BASE}projects/gestion_livre.jpg`,
    demoUrl: "https://gestion-livre.onrender.com",
    repoUrl: "https://github.com/DAAK6115/gestion_livre",
    featured: true,
  },
  {
    name: "Pêche & Sensibilisation",
    category: "Mobile",
    stack: ["Flutter", "Dart", "Web"],
    desc: "Application de sensibilisation à la pêche responsable, accessible aussi dans le navigateur.",
    image: `${BASE}projects/peche_sensibilisation.jpg`,
    demoUrl: "https://daak6115.github.io/peche_sensibilisation/",
    repoUrl: "https://github.com/DAAK6115/peche_sensibilisation",
  },
  {
    name: "NexaFinance",
    category: "WordPress",
    stack: ["WordPress", "Design UX"],
    desc: "Site vitrine d'une société de conseil financier et de gestion pour les PME.",
    image: `${BASE}projects/nexafinance.jpg`,
    demoUrl: "https://nexafinance.net/",
  },
  {
    name: "DAAK_TECH",
    category: "WordPress",
    stack: ["WordPress", "Branding"],
    desc: "Site d'une start-up de solutions numériques sur mesure, maintenance, récupération de données et personnalisation de PC.",
    image: `${BASE}projects/daaktech.jpg`,
    demoUrl: "https://daaktech.com/",
  },
  {
    name: "Formulaire de récupération de données",
    category: "WordPress",
    stack: ["WordPress", "Formulaires"],
    desc: "Formulaire pour DocteurPc : informations client et type de support endommagé.",
    image: `${BASE}projects/recup_docteurpc.jpg`,
    demoUrl: "https://docteurpc.ci/formulaire-de-recuperation-de-donnees/",
  },
];

export const skillGroups = [
  { title: "Front-end", icon: "layout", items: ["React JS", "HTML", "CSS", "Tailwind CSS", "Framer Motion"] },
  { title: "Back-end & Données", icon: "server", items: ["Django", "API REST", "SQL Server"] },
  { title: "Mobile", icon: "phone", items: ["Flutter", "Dart"] },
  { title: "CMS & Outils", icon: "tool", items: ["WordPress", "Dolibarr", "Git & GitHub", "Trello", "Arduino"] },
  { title: "Design", icon: "pen", items: ["Design UX", "Adobe Photoshop", "Adobe Illustrator", "Canva"] },
  {
    title: "Maintenance IT",
    icon: "shield",
    items: ["Installation OS (PC & Mac)", "Récupération de données", "Activation Office & Windows"],
  },
];

export const softSkills = ["Travail en équipe", "Autonomie & curiosité", "Adaptabilité", "Sens du service client"];

export const timeline = [
  {
    type: "Formation",
    title: "Master — Informatique Génie Logiciel",
    place: "Institut Ivoirien de Technologie (IIT) — Grand-Bassam, VITIB",
    period: "2025 — Aujourd'hui",
    link: "https://www.iit.ci/",
  },
  {
    type: "Expérience",
    title: "Développeur web & mobile — projets personnels / freelance",
    place: "Indépendant",
    period: "2023 — Aujourd'hui",
    desc: "Applications web et mobiles, API, tableaux de bord et sites pour entrepreneurs, PME et associations.",
  },
  {
    type: "Expérience",
    title: "Maintenance informatique & récupération de données",
    place: "Particuliers et petites structures",
    period: "2024 — Aujourd'hui",
    desc: "Dépannage, installation, optimisation et récupération de données.",
  },
  {
    type: "Formation",
    title: "Licence — Informatique Génie Logiciel",
    place: "Institut Ivoirien de Technologie (IIT)",
    period: "2022 — 2025",
    link: "https://www.iit.ci/",
  },
];

export const services = [
  {
    icon: "layout",
    title: "Sites & applications web sur mesure",
    desc: "Interfaces modernes, rapides et accessibles, avec API et tableaux de bord adaptés à votre activité.",
  },
  {
    icon: "phone",
    title: "Applications mobiles",
    desc: "Apps Flutter claires et fluides pour accompagner vos utilisateurs partout.",
  },
  {
    icon: "tool",
    title: "Maintenance & support",
    desc: "Corrections, évolutions et suivi continu de vos applications, sites et postes de travail.",
  },
  {
    icon: "shield",
    title: "Récupération de données",
    desc: "Retrouver, nettoyer et structurer vos données importantes après une panne ou une perte.",
  },
];
