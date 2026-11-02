export type DeepDive = {
  /** One line shown when the entry is collapsed. */
  hook: string;
  problem: string;
  built: string;
  tradeoff: string;
  next: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  filterGroup: "Full-Stack" | "AI / ML" | "Mobile" | "Data" | "Security" | "Cloud";
  description: string;
  technologies: string[];
  /** Screenshot in /public/projects, 16:10 works best. */
  image: { src: string; alt: string } | null;
  github: string | null;
  liveDemo: string | null;
  /** Shown in the hero spotlight. */
  featured: boolean;
  /** "Solo", or the team size for group work. */
  team: string;
  /** One sentence: what I personally did. */
  contribution: string;
  /** The data flow drawn on the card, left to right. */
  pipeline: string[];
  /** Long-form write-up for the case-study dialog and the Deep-dives section. */
  deepDive: DeepDive;
};

export const projects: Project[] = [
  {
    id: "nextfilm",
    title: "NextFilm",
    category: "AI-powered movie & series discovery",
    filterGroup: "AI / ML",
    description:
      "Describe a mood (“a slow, sad space movie”) and get five picks from Gemini, backed by TMDb data, Reddit recommendation threads and a personal watchlist.",
    technologies: [
      "React",
      "Vite",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions",
      "Gemini API",
      "TMDb API",
      "Python",
      "scikit-learn",
    ],
    image: { src: "/projects/nextfilm.webp", alt: "NextFilm home page with the AI search box" },
    github: "https://github.com/Krish-39/AI_SE04_NextFilm",
    liveDemo: "https://nextfilm-84dc1.web.app",
    featured: true,
    team: "Team of 4",
    contribution:
      "Wrote most of the code (43 of the repo’s 51 commits): the React app, Firebase auth and watchlist, and the Cloud Function that turns a mood into picks.",
    pipeline: ["Mood prompt", "Gemini + Reddit", "TMDb", "Your picks"],
    deepDive: {
      hook: "Turning “I want something sad, set in space” into five films you can actually watch tonight.",
      problem:
        "Streaming catalogues are huge, and genre filters don’t capture what people really ask for, which is a mood or a vague plot. Our course brief (DA120B) was to build a recommender that cuts down that search time.",
      built:
        "A React + Vite app on Firebase. A Cloud Function sends the user’s prompt to Gemini, adds what people recommend in Reddit communities like r/MovieSuggestions, and resolves every title against TMDb for posters, trailers and where to watch. Watchlists live per user in Firestore. Alongside it, we built content-based, collaborative (SVD) and hybrid recommenders in Python on MovieLens 1M as the offline study for the report.",
      tradeoff:
        "The live app doesn’t serve our Python models. MovieLens 1M stops around the year 2000 and hosting a model server costs money, so an LLM over TMDb’s current catalogue gave fresher picks for free. The models stayed an evaluation study instead of a production feature.",
      next: "Feed real watchlist data back into the hybrid model and compare its picks against Gemini’s on the same prompts, instead of judging quality by eye.",
    },
  },
  {
    id: "jaatland",
    title: "Jaatland",
    category: "Full-stack e-commerce store",
    filterGroup: "Full-Stack",
    description:
      "A clothing store with filters, a persistent cart, Stripe checkout (card, Klarna, SEPA), order history and an admin dashboard. Live at store.krriss.cloud.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe Payment Intents"],
    image: { src: "/projects/jaatland.webp", alt: "Jaatland store home page with featured products" },
    github: "https://github.com/Krish-39/Jaatland-Project",
    liveDemo: "https://store.krriss.cloud",
    featured: true,
    team: "Solo",
    contribution:
      "Built the whole store: catalogue and filters, cart, Stripe checkout through a Next.js API route, order history and the admin dashboard.",
    pipeline: ["Catalogue", "Cart", "Payment Intent", "Order"],
    deepDive: {
      hook: "A small clothing brand’s store, end to end: from size filters to a real Stripe payment.",
      problem:
        "I wanted to understand everything a real shop needs beyond a product grid: filtering, a cart that survives a page reload, a payment flow that never exposes secret keys, and a back office to see orders and revenue.",
      built:
        "A Next.js App Router store. Shoppers filter by size, colour and price, and the cart and order history persist in the browser. Checkout calls a server route that creates a Stripe Payment Intent (card, Klarna or SEPA) with the secret key kept on the server. An admin page shows product, order and revenue totals and lets me edit products and the homepage.",
      tradeoff:
        "To ship quickly, the cart total is sent from the browser and orders live in localStorage. That’s fine for a demo with Stripe test cards, but it means the server trusts the client’s price and orders don’t follow you to another device.",
      next: "Move products and orders into a database, calculate the price on the server from product IDs, and confirm orders with a Stripe webhook instead of the client.",
    },
  },
  {
    id: "stockmart",
    title: "StockMart",
    category: "Stock market app: research, Figma, Flutter + web",
    filterGroup: "Mobile",
    description:
      "A stock market app taken from research to code: competitor analysis, personas and a usability-tested Figma prototype, then built as a Flutter app and a matching web app with live quotes, charts and news.",
    technologies: ["Figma", "Flutter", "Dart", "fl_chart", "Geolocator", "JavaScript", "Bootstrap 5", "Chart.js", "PHP", "Finnhub API"],
    image: { src: "/projects/stockmart.webp", alt: "StockMart web app Markets page with a grid of live stock cards" },
    github: "https://github.com/Krish-39/StockMart",
    liveDemo: null,
    featured: true,
    team: "Solo",
    contribution:
      "Did the research and the 7-screen Figma prototype, ran a usability test with 5 people, then built the Flutter app and the web version from the design.",
    pipeline: ["Research", "Figma prototype", "User testing", "Flutter + web"],
    deepDive: {
      hook: "Between Bloomberg’s complexity and Robinhood’s oversimplification: a stock app designed with users, then built twice.",
      problem:
        "Finance apps tend to be either too complex for everyday investors or too simple for people who track a real portfolio. After comparing Robinhood, Bloomberg, Yahoo Finance, Webull and eToro, I designed for two personas: a beginner who wants only what matters, and an older investor who needs large, high-contrast text.",
      built:
        "A dark-theme Figma prototype with 7 screens (sign-in, home, markets and news, stock detail, portfolio, Pro upgrade) on a small design system: DM Sans for text, DM Mono for every number, and WCAG 2.1 AA contrast. I then built it as a Flutter app (live Finnhub quotes, news and candle charts with fl_chart, and your country detected with Geolocator) and as a web app with Bootstrap 5, Chart.js and a market filter by country.",
      tradeoff:
        "Usability testing with 5 people changed the design: stock rows didn’t look tappable, timestamps were too faint, the annual-price toggle was missed, and one colour-blind tester couldn’t tell gains from losses. Adding borders, more contrast, a savings badge and ▲/▼ arrows fixed those. On the build side, the web app calls the market APIs straight from the browser and the login only lives in the PHP session, which kept the exam project simple but isn’t production-safe.",
      next: "Move the API keys behind a small server proxy, store accounts in a real database, and add the price tooltips testers asked for on the portfolio chart.",
    },
  },
  {
    id: "netflix-sentiment",
    title: "Netflix Sentiment on Reddit",
    category: "Big data & NLP pipeline",
    filterGroup: "Data",
    description:
      "A pipeline that collects Reddit posts about Netflix, cleans the text, scores each post’s sentiment, stores everything in PostgreSQL and charts the results.",
    technologies: ["Python", "Reddit API (PRAW)", "pandas", "NLTK", "TextBlob", "PostgreSQL", "Plotly", "Matplotlib"],
    image: { src: "/projects/netflix-sentiment.webp", alt: "Chart of 242 Reddit posts about Netflix: 45% positive, 43% neutral, 12% negative" },
    github: null,
    liveDemo: null,
    featured: false,
    team: "Team of 2",
    contribution:
      "Built the pipeline with a teammate: Reddit collection with PRAW, text cleaning, TextBlob scoring, PostgreSQL storage and the Plotly charts.",
    pipeline: ["Reddit API", "Cleaning", "TextBlob", "PostgreSQL", "Charts"],
    deepDive: {
      hook: "What does Reddit actually think of Netflix? 242 posts, scored and charted.",
      problem:
        "For a Big Data & Analytics course we wanted to measure public opinion about Netflix and its biggest shows (Squid Game, Stranger Things) from organic discussion rather than surveys, and turn it into something the business could act on.",
      built:
        "A Python pipeline: PRAW pulls posts for each keyword from the Reddit API, a cleaning step strips URLs, emojis and stopwords, and TextBlob gives every post a polarity from −1 to +1, labelled positive above 0.1 and negative below −0.1. Results go into PostgreSQL for querying and into Plotly and Matplotlib charts. Of 242 posts, 45% came out positive, 43% neutral and 12% negative; complaints clustered around the app’s interface and pricing.",
      tradeoff:
        "TextBlob is a word-list model: fast, free and easy to explain, but it misses sarcasm and slang, which is part of why so many posts landed in the neutral band. And 242 posts collected in one day is a snapshot, not a trend.",
      next: "Collect over several weeks to see real trends, hand-label a sample to measure accuracy, and compare TextBlob against a transformer model like BERT.",
    },
  },
  {
    id: "cloud-infrastructure-deployment",
    title: "AWS Cloud Web Application",
    category: "Highly available cloud architecture",
    filterGroup: "Cloud",
    description:
      "A web application on EC2 behind an Application Load Balancer, with Auto Scaling and a managed MySQL database on Amazon RDS.",
    technologies: ["AWS EC2", "Apache", "Application Load Balancer", "Auto Scaling", "Amazon RDS", "MySQL"],
    image: null,
    github: null,
    liveDemo: null,
    featured: true,
    team: "Solo",
    contribution:
      "Set up EC2 with Apache, connected Amazon RDS (MySQL), and configured the load balancer and Auto Scaling group.",
    pipeline: ["Users", "Load balancer", "EC2 group", "RDS"],
    deepDive: {
      hook: "Keeping a web app online when a server dies or traffic spikes.",
      problem: "Deploy a web application so it keeps serving users when one server fails and grows when traffic rises.",
      built:
        "Apache on EC2 instances in an Auto Scaling group behind an Application Load Balancer, with the database on Amazon RDS MySQL so the web servers stay stateless and replaceable.",
      tradeoff:
        "Moving the database to RDS costs more than MySQL on the same instance, but it is what lets any web server be thrown away and replaced safely.",
      next: "Describe the whole setup as code (Terraform or CloudFormation) so it can be rebuilt in minutes.",
    },
  },
  {
    id: "secure-network-order-system",
    title: "Secure Order System",
    category: "Applied cryptography",
    filterGroup: "Security",
    description:
      "An order protocol that encrypts, signs and verifies every message, and detects tampering and replayed messages.",
    technologies: ["Python", "RSA-2048", "AES-256-GCM", "SHA-256", "Digital signatures", "Scapy", "pytest"],
    image: null,
    github: null,
    liveDemo: null,
    featured: false,
    team: "Solo",
    contribution:
      "Implemented hybrid RSA + AES-GCM encryption, signatures and replay protection, with tests and traffic inspection in Scapy.",
    pipeline: ["Order", "AES-GCM + RSA", "Signature", "Verified"],
    deepDive: {
      hook: "What it takes for an order to arrive secret, unaltered and only once.",
      problem:
        "An order sent over a network can be read, changed or replayed. The system had to stop all three, not just encrypt the message.",
      built:
        "Hybrid encryption: each order is encrypted with a fresh AES-256-GCM key, and that key is wrapped with RSA-2048. Messages are signed, and checks catch tampered or replayed messages. Tests cover the crypto paths, and Scapy was used to look at the traffic itself.",
      tradeoff:
        "Hybrid encryption adds a step compared with RSA alone, but RSA can only encrypt tiny payloads and is slow. AES-GCM handles the data and also detects tampering.",
      next: "Swap the custom handshake for TLS 1.3 with mutual authentication and compare what that gives for free.",
    },
  },
  {
    id: "heart-attack-risk-prediction",
    title: "Heart Attack Risk Prediction",
    category: "Machine learning on health data",
    filterGroup: "AI / ML",
    description:
      "A model that predicts heart-attack risk from structured patient data, comparing logistic regression and random forest and tuning for recall.",
    technologies: ["Python", "scikit-learn", "Logistic Regression", "Random Forest", "pandas", "Model evaluation"],
    image: null,
    github: null,
    liveDemo: null,
    featured: false,
    team: "Solo",
    contribution:
      "Prepared the data, compared the models, and found and fixed a misapplied prediction threshold that was hurting recall.",
    pipeline: ["Patient data", "Preprocessing", "Models", "Risk + metrics"],
    deepDive: {
      hook: "In medical screening, missing a sick patient costs far more than a false alarm.",
      problem:
        "Predict which patients are at risk of a heart attack from structured health data, and choose a model based on the metric that actually matters for screening.",
      built:
        "A Python pipeline that cleans and prepares the data, trains logistic regression and random forest models, and evaluates them side by side. While checking the results I found that the prediction threshold had been applied inconsistently and the reported metrics didn’t match. Fixing it gave substantially better recall.",
      tradeoff:
        "Optimising for recall means accepting more false positives. For screening, that’s the right trade: a follow-up test is cheap, and a missed case is not.",
      next: "Add cross-validation and calibration plots, and explain individual predictions so the model could be trusted by a clinician.",
    },
  },
  {
    id: "car-modification-database",
    title: "Car Modification Database",
    category: "Relational design & SQL reporting",
    filterGroup: "Data",
    description:
      "A normalised database for a car-modification business, with SQL queries for reporting and business analysis.",
    technologies: ["SQL", "Relational modelling", "Normalisation", "Reporting queries"],
    image: null,
    github: null,
    liveDemo: null,
    featured: false,
    team: "Solo",
    contribution: "Designed the normalised schema and wrote the SQL reporting queries.",
    pipeline: ["Requirements", "ER model", "Schema", "Reports"],
    deepDive: {
      hook: "Modelling a real workshop’s data so the owner can answer business questions.",
      problem: "A car-modification business needed its data in one consistent place that it could query for reports.",
      built: "An entity-relationship model normalised into a relational schema, plus SQL queries for reporting and analysis.",
      tradeoff: "Normalisation removes duplicate data but means more joins in every report.",
      next: "Add views for the most common reports and index the columns they filter on.",
    },
  },
];
