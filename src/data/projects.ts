export type Project = {
  id: string;
  title: string;
  category: string;
  filterGroup: "Full-Stack" | "AI / ML" | "Mobile" | "Data" | "Security" | "Cloud";
  description: string;
  technologies: string[];
  image: string | null;
  github: string | null;
  liveDemo: string | null;
  caseStudy: string | null;
  featured: boolean;
  contribution: string;
  objective: string;
  approach: string;
  learning: string;
  significance: string;
};

export const projects: Project[] = [
  {
    id: "nextfilm",
    title: "NextFilm",
    category: "AI-Powered Movie Recommendation System",
    filterGroup: "AI / ML",
    description:
      "A personalized movie recommendation platform that combines recommendation logic with an intuitive browsing experience for discovering relevant titles.",
    technologies: [
      "React / Vite",
      "JavaScript",
      "Firebase",
      "Firebase Authentication",
      "Firestore",
      "TMDb",
      "Gemini AI",
      "Recommendation Systems",
    ],
    image: null,
    github: null,
    liveDemo: null,
    caseStudy: null,
    featured: true,
    contribution: "Built a recommendation-driven product flow using a full-stack frontend and contextual recommendation logic.",
    objective:
      "To build a product experience around relevant movie discovery using recommendation logic and an intuitive user journey.",
    approach:
      "The project pulled together a clean frontend, data-driven recommendations, and user-focused browsing flow to make relevant titles easy to discover.",
    learning:
      "I improved my understanding of how product decisions, recommendation design, and data flows work together in a usable application.",
    significance:
      "Recommendation systems are a practical example of how software can combine data, user context, and UX to create useful outcomes.",
  },
  {
    id: "jaatland",
    title: "Jaatland",
    category: "Full-Stack E-Commerce Web Platform",
    filterGroup: "Full-Stack",
    description:
      "A commerce application designed for product discovery, cart handling, and checkout flows with a modular full-stack architecture.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Stripe API"],
    image: null,
    github: null,
    liveDemo: "https://www.krriss.cloud",
    caseStudy: null,
    featured: true,
    contribution: "Implemented product flows and frontend architecture for a full-stack commerce experience with a clean user journey.",
    objective:
      "To design a complete commerce flow that supports product browsing, cart interaction, and checkout usability.",
    approach:
      "The application focused on a clear customer journey and a structured frontend architecture so the store felt coherent and easy to navigate.",
    learning:
      "I strengthened my understanding of product flow design, state management patterns, and how interface clarity affects the overall experience.",
    significance:
      "E-commerce systems are a strong example of how software must balance product UX, backend coordination, and a reliable user journey.",
  },
  {
    id: "stockmart",
    title: "StockMart",
    category: "Flutter Investment Dashboard",
    filterGroup: "Mobile",
    description:
      "A mobile-first stock tracking and market exploration app focused on price insight, charting, and location-aware market context.",
    technologies: ["Flutter", "Dart", "Stock APIs", "Charts", "Geolocation"],
    image: null,
    github: null,
    liveDemo: null,
    caseStudy: null,
    featured: true,
    contribution: "Designed a mobile interface around financial data exploration, chart interpretation, and usability.",
    objective:
      "To make stock and market information easier to explore in a mobile-first interface for quick decision support.",
    approach:
      "The app organized market data into a user-friendly dashboard and focused on clarity, data interpretation, and mobile usability.",
    learning:
      "I learnt how interface design shapes how users understand technical data and make decisions from it.",
    significance:
      "Good product design matters even in data-heavy tools because clarity determines whether insight can actually be used.",
  },
  {
    id: "cloud-infrastructure-deployment",
    title: "AWS Cloud Web Application",
    category: "Highly Available and Scalable Cloud Architecture",
    filterGroup: "Cloud",
    description:
      "Deployed a web application on AWS EC2, configured Apache as the web server, and connected it to Amazon RDS with MySQL. Added an Application Load Balancer and Auto Scaling for availability and scale.",
    technologies: ["AWS EC2", "Apache", "Application Load Balancer", "Auto Scaling", "Amazon RDS", "MySQL"],
    image: null,
    github: null,
    liveDemo: null,
    caseStudy: null,
    featured: true,
    contribution:
      "Deployed an AWS-hosted web application, configured Apache, set up an Application Load Balancer and Auto Scaling, and used Amazon RDS with MySQL.",
    objective:
      "Deploy a web application on AWS with a managed database and infrastructure configured for availability and scaling.",
    approach:
      "Hosted the application on EC2 with Apache, connected Amazon RDS MySQL, and configured an Application Load Balancer and Auto Scaling.",
    learning:
      "Gained practical experience with AWS compute, web-server configuration, managed databases, load balancing, and scaling.",
    significance:
      "The project demonstrates how cloud infrastructure components work together to deploy and scale a web application.",
  },
  {
    id: "car-modification-database",
    title: "Car Modification Business Database System",
    category: "Relational Database Design & SQL Reporting",
    filterGroup: "Data",
    description:
      "Designed a normalized relational database for a car-modification business and developed SQL queries for reporting and business analysis.",
    technologies: ["SQL", "Relational Data Modeling", "Database Normalization", "Reporting Queries"],
    image: null,
    github: null,
    liveDemo: null,
    caseStudy: null,
    featured: false,
    contribution: "Designed the normalized database and wrote SQL reporting queries to support business analysis.",
    objective: "Model the data needs of a car-modification business in a structured relational database.",
    approach: "Applied relational data modeling and normalization principles, then developed SQL queries for reporting and analysis.",
    learning: "Applied database design and SQL reporting to a business-analysis context.",
    significance: "A well-modeled relational database helps organize business information and make it useful for reporting.",
  },
  {
    id: "heart-attack-risk-prediction",
    title: "Heart Attack Risk Prediction",
    category: "Machine Learning",
    filterGroup: "Data",
    description:
      "A predictive ML project using structured health data to compare model performance and evaluate risk factors.",
    technologies: [
      "Python",
      "Machine Learning",
      "Logistic Regression",
      "Random Forest",
      "Data preprocessing",
      "Model evaluation",
    ],
    image: null,
    github: null,
    liveDemo: null,
    caseStudy: null,
    featured: false,
    contribution: "Compared modeling approaches and evaluated predictive performance with careful data preparation and model selection.",
    objective:
      "To compare model performance and evaluate risk factors using a structured health dataset.",
    approach:
      "The project used data preparation, model comparison, and evaluation techniques to understand which modeling choices offered the strongest results.",
    learning:
      "I developed a clearer understanding of how machine learning models behave with real data and how careful evaluation shapes model selection.",
    significance:
      "This is a useful example of how data science and engineering work together to turn raw information into practical decision support.",
  },
  {
    id: "secure-network-order-system",
    title: "Secure Network Order System / IT Security",
    category: "IT Security",
    filterGroup: "Security",
    description:
      "A security-focused order system project demonstrating cryptography, message integrity checks, and replay protection.",
    technologies: [
      "Python",
      "RSA",
      "AES-GCM",
      "SHA-256",
      "Scapy",
      "Digital signatures",
      "Replay/tampering detection",
    ],
    image: null,
    github: null,
    liveDemo: null,
    caseStudy: null,
    featured: false,
    contribution: "Applied cryptographic patterns and protocol validation to secure a system workflow and verify message integrity.",
    objective:
      "To design a secure communication flow with message integrity and replay protection.",
    approach:
      "The project used cryptographic primitives and protocol checks to protect order data and validate communication between parties.",
    learning:
      "I strengthened my understanding of how security requirements translate into practical engineering decisions and verification methods.",
    significance:
      "Security is fundamental to trust in software systems, and these principles are essential in real-world engineering work.",
  },
];
