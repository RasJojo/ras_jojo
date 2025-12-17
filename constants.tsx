import { Experience, Hackathon, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: "Product Owner",
    company: "Solocal",
    period: "Actuel",
    description: "Pilotage de la roadmap produit et gestion du backlog pour les solutions digitales locales.",
    technologies: ["Jira", "Agile", "Product Management"]
  },
  {
    id: '2',
    role: "Chef de Projet IA",
    company: "LAB-EVENT",
    period: "Sept 2024 – Mars 2025",
    description: "Pilotage de sprints agiles pour l'intégration d'IA. Coordination transversale (Produit, Tech, CRM). Réflexion fonctionnelle et UI/UX.",
    technologies: ["Jira", "IA", "UI/UX", "CRM"]
  },
  {
    id: '3',
    role: "Développeur Web",
    company: "Douanes Malagasy",
    period: "Juin 2023 – Août 2023",
    description: "Développement d'une plateforme de suivi administratif. Gestion de la relation utilisateurs et rédaction de la documentation technique.",
    technologies: ["HTML/CSS", "Node.js", "JavaScript"]
  },
  {
    id: '4',
    role: "Stagiaire CMS",
    company: "Tata Consultancy Services",
    period: "Juil 2022 – Août 2022",
    description: "Conception et développement d'un CMS personnalisé et de plugins WordPress. Accompagnement client.",
    technologies: ["WordPress", "PHP", "CMS"]
  }
];

export const HACKATHONS: Hackathon[] = [
  {
    id: 'h1',
    name: "Paris Blockchain Week",
    year: "2025",
    project: "Projet DeFi",
    award: "🥇 1ère Place",
    description: "Développement d'une solution blockchain innovante lors de la PBW.",
    tags: ["Blockchain", "Web3"]
  },
  {
    id: 'h2',
    name: "XRPL Hacks",
    year: "2024",
    project: "XRPL Solution",
    award: "🥇 1ère Place",
    description: "Innovation sur le ledger XRP pour optimiser les transactions.",
    tags: ["XRPL", "DeFi"]
  },
  {
    id: 'h3',
    name: "Paris Blockchain Week",
    year: "2025",
    project: "Track Secondaire",
    award: "🥈 2ème Place",
    description: "Double victoire lors de la même édition sur un track parallèle.",
    tags: ["Web3", "Innovation"]
  },
  {
    id: 'h4',
    name: "Algorand Hackathon",
    year: "2024",
    project: "Algo dApp",
    award: "🥈 2ème Place",
    description: "Création d'une dApp sur l'écosystème Algorand.",
    tags: ["Algorand", "Smart Contracts"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Hashira Finance",
    description: "Protocole DeFi sur SUI permettant aux utilisateurs de créer leurs propres vaults de lending personnalisés.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    technologies: ["Sui Move", "DeFi", "Lending"]
  },
  {
    id: 'p2',
    title: "Transparance",
    description: "Plateforme de publication de contenu décentralisée sur XRPL sans backend, garantissant la résistance à la censure.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    link: "https://github.com/JoelaRAS/transparent",
    technologies: ["XRPL", "DeSo", "No-Backend"]
  },
  {
    id: 'p3',
    title: "Shingo",
    description: "Marketplace décentralisée sur Solana pour l'achat et la vente de signaux de trading vérifiés on-chain.",
    imageUrl: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    imageFit: "contain",
    link: "https://github.com/JoelaRAS/shingo",
    technologies: ["Solana", "Rust", "Marketplace"]
  },
  {
    id: 'p4',
    title: "LifeOs",
    description: "Application 'Second Brain' pour gérer tous les aspects de la vie : sport, alimentation, finances et productivité.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2960&auto=format&fit=crop",
    link: "https://github.com/JoelaRAS/jojolifechange",
    technologies: ["Productivity", "React Native", "Finance"]
  }
];

export const BIO = `Je suis Rasamimanana Joela, aussi connu sous le nom de Rasamimanana Andritiana Joela (Ras Jojo / Ras_Jojo), Product Owner et passionné de Blockchain. 
J'aime transformer des idées et des besoins en produits concrets. 
Expert en méthodologie Agile et stratégie produit, je fusionne vision technique et expérience utilisateur pour bâtir le Web3.`;

export const EDUCATION = [
  {
    school: "IIM Digital School",
    degree: "Master Digital Management",
    period: "Actuellement"
  },
  {
    school: "ESILV",
    degree: "Bachelor Ingénierie Numérique",
    period: "3 ans"
  }
];
