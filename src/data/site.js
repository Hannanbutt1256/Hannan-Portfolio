// hannanlabs — site content. Single source of truth for every page.
// Voice: confident, short, no em dashes. Periods over commas for punch.

export const identity = {
  name: "Hannan Butt",
  wordmark: "HANNANLABS",
  handle: "@hannanlabs",
  location: "Gujranwala, PK",
  email: "hannanbutt.dev@gmail.com",
  resume: "/hannan-butt.pdf",
  social: {
    instagram: "https://instagram.com/hannanlabs",
    email: "mailto:hannanbutt.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/hannan-butt-112b3a24b",
    github: "https://github.com/Hannanbutt1256/",
    kaggle: "https://www.kaggle.com/hannanbuttdev",
  },
};

export const nav = [
  { label: "HOME", to: "/" },
  { label: "WORK", to: "/work" },
  { label: "LAB", to: "/lab" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

export const home = {
  eyebrow: "AI ENGINEER & AI CREATIVE DIRECTOR",
  kicker: "Hi, I'm Hannan.",
  headline: { solid: "I BUILD WITH AI", outline: "I CREATE WITH AI" },
  intro:
    "A Computer Science grad who builds intelligent systems and directs cinematic AI ad creative. On one side: agentic AI, automation, and ML that ships. On the other: product ads that look like a studio shot them. Most people pick one. I run both.",
  cta: "SEE THE WORK",
  services: [
    {
      n: "01",
      title: "BUILD",
      copy: "Agentic AI systems, ML/DL/CV/NLP models, and full-stack apps engineered to actually run in production.",
    },
    {
      n: "02",
      title: "AUTOMATE",
      copy: "Business workflows wired into AI agents with CrewAI, n8n, LangChain, and FastAPI so the busywork runs itself.",
    },
    {
      n: "03",
      title: "CREATE",
      copy: "Cinematic AI product ads, hero shots, and video concepts directed and prompted frame by frame.",
    },
  ],
};

export const workIntro = {
  eyebrow: "SELECTED WORK",
  headline: { solid: "BUILT TO", outline: "SHIP" },
  intro:
    "Agent swarms, ML models, and real products. A look at what happens when engineering meets AI.",
};

// Projects — ordered. `slug` drives /work/:slug detail routes.
export const projects = [
  {
    slug: "autonomous-dataset-auditor",
    n: "01",
    title: "AUTONOMOUS DATASET AUDITOR",
    tagline: "Drop a CSV. Get a 9-agent audit back.",
    tags: ["CrewAI", "FastAPI", "GPT-4o-mini", "Azure"],
    featured: true,
    headline: { solid: "NINE AGENTS", outline: "ONE AUDIT" },
    problemStatement:
      "ML teams ship models on top of datasets nobody fully audited. This fixes that.",
    meta: [
      { k: "ROLE", v: "Solo build. AI engineering, agents, deployment." },
      { k: "SYSTEM", v: "9-agent CrewAI swarm, sequential pipeline." },
      { k: "OUTPUT", v: "JSON + Markdown reports, readiness analysis." },
    ],
    problem: [
      "Bad data is the silent killer of ML projects. Bias hides in subgroups. Leakage sneaks in through columns that look harmless.",
      "Schema errors and missing values rot a model from the inside. Most teams find out after the model is already wrong. Auditing all of it by hand takes days, and it gets skipped under deadline. The audit needed to be automatic, thorough, and impossible to skip.",
    ],
    build: [
      "I built a swarm of nine CrewAI agents that audit a dataset end to end. You drop a CSV. The crew takes it from there, running sequentially and passing findings down the line.",
      "The backend runs on Python and FastAPI with GPT-4o-mini powering the agents, deployed on Azure Container Apps. The frontend sits on Vercel. Supabase handles Google auth and the dataset bucket. Every run returns concrete preprocessing recommendations, not just a list of problems.",
    ],
    swarm: [
      { n: "01", name: "Dataset Schema Auditor", role: "Catches structural and type errors." },
      { n: "02", name: "Bias & Fairness Auditor", role: "Digs into subgroup outcomes." },
      { n: "03", name: "Leakage Hunter", role: "Chases target, proxy, and temporal leakage." },
      { n: "04", name: "Data Quality Auditor", role: "Flags missing and dirty values." },
      { n: "05", name: "Feature Readiness Analyst", role: "Scores how model-ready each feature is." },
      { n: "06", name: "Report Generator", role: "Stitches it all into clean output." },
    ],
    resultsNote: "First test run on the Titanic dataset. Every number below was surfaced automatically.",
    results: [
      { stat: "74.2 / 18.9%", note: "Female vs male survival. The model would have learned gender as destiny." },
      { stat: "96.8 / 13.5%", note: "Intersectional gap. First-class women vs third-class men, caught in one pass." },
      { stat: "77.1%", note: "Missing Cabin values, plus 19.87% missing Age. Cabin also flagged as subtle location leakage." },
      { stat: "61.6 / 38.4", note: "Target imbalance ratio, reported with a readiness verdict: clean and mitigate before training." },
    ],
    stack: ["Python", "FastAPI", "CrewAI", "GPT-4o-mini", "Azure Container Apps", "Vercel", "Supabase"],
    limitation: "Very long audits can hit Azure timeout limits. A queued-job refactor is next on the roadmap.",
    links: [
      { label: "GitHub", href: "https://github.com/Hannanbutt1256/Autonomous-Dataset-Auditor-for-Machine-Learning-Teams" },
    ],
  },
  {
    slug: "pakistan-real-estate-analysis",
    n: "02",
    title: "PAKISTAN REAL ESTATE ANALYSIS",
    tagline: "Reading the property market in the data.",
    tags: ["Pandas", "NumPy", "EDA", "Kaggle"],
    featured: true,
    headline: { solid: "THE MARKET", outline: "IN DATA" },
    problemStatement: "Pakistan's property market has a story buried in messy data.",
    meta: [
      { k: "ROLE", v: "Data analysis, cleaning, visualization." },
      { k: "METHOD", v: "Exploratory data analysis in Python." },
      { k: "OUTPUT", v: "Published Kaggle notebook." },
    ],
    problem: [
      "Real estate data is large, dirty, and inconsistent. The patterns that matter, price trends, regional gaps, distribution skews, only show up after the cleaning is done.",
      "The goal was to turn raw listings into a clear read on the market.",
    ],
    build: [
      "I ran a full exploratory data analysis in Python with Pandas and NumPy. First the unglamorous part: cleaning large, messy datasets into something trustworthy.",
      "Then the analysis: price trends, distributions, and the relationships that drive value. I visualized the findings to make the market legible at a glance, then published the full notebook on Kaggle.",
    ],
    swarm: [],
    resultsNote: "What the analysis surfaced.",
    results: [
      { stat: "Trends", note: "Surfaced price trends and distribution patterns across the market." },
      { stat: "Clean", note: "Cleaned and structured large, messy real estate datasets." },
      { stat: "Public", note: "Notebook published openly on Kaggle." },
    ],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Kaggle"],
    limitation: "",
    links: [
      { label: "Kaggle", href: "https://www.kaggle.com/code/hannanbuttdev/exploratory-data-analysis-on-real-estate-data" },
    ],
  },
  {
    slug: "maddev-platform",
    n: "03",
    title: "MADDEV BLOG & PODCAST PLATFORM",
    tagline: "A full subscription platform, end to end.",
    tags: ["React", "TypeScript", "Firebase", "Stripe", "Lexical"],
    featured: false,
    headline: { solid: "WRITE.", outline: "STREAM. EARN." },
    problemStatement: "Creators need one platform to publish, gate, and get paid.",
    meta: [
      { k: "ROLE", v: "Full-stack build, end to end." },
      { k: "AUTH", v: "Firebase auth with protected routes." },
      { k: "BILLING", v: "Stripe subscriptions." },
    ],
    problem: [
      "Blogging tools, podcast hosting, paywalls, and auth usually live in four different products.",
      "MadDev brings them into one platform where a creator can write, publish, and charge for access without stitching tools together.",
    ],
    build: [
      "I built MadDev in React and TypeScript. Firebase handles authentication with protected routes guarding member-only content.",
      "The writing experience runs on the Lexical rich-text editor, so posts feel like a real editor, not a text box. Stripe powers subscriptions and gated access. Tailwind drives the UI, and Zod plus Yup keep every form and payload validated.",
    ],
    swarm: [],
    resultsNote: "What shipped.",
    results: [
      { stat: "Live", note: "Deployed and running at mad-dev.vercel.app." },
      { stat: "Paid", note: "Stripe subscriptions for gated, paid content." },
      { stat: "Editor", note: "Lexical rich-text editor for real publishing." },
    ],
    stack: ["React", "TypeScript", "Firebase", "Stripe", "Lexical", "Tailwind", "Zod"],
    limitation: "",
    links: [
      { label: "Live demo", href: "https://mad-dev.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Hannanbutt1256/MadDev" },
    ],
  },
  {
    slug: "spam-detection-nlp",
    n: "04",
    title: "SPAM DETECTION NLP APP",
    tagline: "Catching spam at 95% accuracy, message by message.",
    tags: ["Python", "NLTK", "scikit-learn", "Streamlit"],
    featured: false,
    headline: { solid: "SPAM OR", outline: "HAM" },
    problemStatement: "Every inbox needs a fast, reliable line between real messages and junk.",
    meta: [
      { k: "ROLE", v: "NLP pipeline and model comparison." },
      { k: "DATA", v: "SMS spam / ham dataset." },
      { k: "OUTPUT", v: "Streamlit app with full metrics." },
    ],
    problem: [
      "SMS spam is noisy, short, and adversarial. The signal lives in word patterns most filters miss.",
      "The goal was a classifier that nails spam without burying real messages, and a way to see exactly how each model performs.",
    ],
    build: [
      "I built a clean NLP pipeline in Python. Polars for fast data handling, NLTK for language work. Preprocessing ran in stages: lowercasing, regex punctuation removal, tokenization, stopword removal, then lemmatization.",
      "Then I trained and compared a full lineup: Logistic Regression, Naive Bayes, SVM, KNN, Decision Tree, Random Forest, and a Voting Classifier. The whole thing ships as a Streamlit app with a confusion matrix, ROC curve, and a side-by-side model comparison chart.",
    ],
    swarm: [],
    resultsNote: "Model accuracy, head to head.",
    results: [
      { stat: "95.43%", note: "Random Forest won the lineup." },
      { stat: "92.46%", note: "Decision Tree came second." },
      { stat: "89.08%", note: "KNN rounded out the top three." },
    ],
    stack: ["Python", "Polars", "NLTK", "scikit-learn", "Streamlit"],
    limitation: "",
    links: [],
  },
  {
    slug: "forest-covertype",
    n: "05",
    title: "FOREST COVERTYPE CLASSIFIER",
    tagline: "When trees beat deep nets on tabular data.",
    tags: ["scikit-learn", "TensorFlow", "UCI"],
    featured: false,
    headline: { solid: "TREES VS", outline: "NEURONS" },
    problemStatement: "Does deep learning actually beat classic ML on structured tabular data?",
    meta: [
      { k: "ROLE", v: "Modeling and benchmarking." },
      { k: "DATA", v: "UCI Forest CoverType." },
      { k: "MATCHUP", v: "Random Forest vs deep net." },
    ],
    problem: [
      "Deep learning gets the hype, but a lot of real-world data is just structured tables.",
      "I wanted to test the assumption head-on: train a tree-based model and a neural net on the same UCI CoverType data and see which one actually wins.",
    ],
    build: [
      "I set up a fair fight. A stratified train-test split kept class balance honest. Standardization put features on equal footing.",
      "On one side, a Random Forest. On the other, a dense neural network: 128 ReLU into 64 ReLU into a softmax output. Same data, same prep, two philosophies. Along the way I worked through overfitting, underfitting, and where each model breaks.",
    ],
    swarm: [],
    resultsNote: "What the benchmark showed.",
    results: [
      { stat: "Trees win", note: "The tree-based model matched and often beat the deep net." },
      { stat: "Insight", note: "Structured tabular data still favors trees." },
      { stat: "Mapped", note: "Charted where each model overfits and underfits." },
    ],
    stack: ["Python", "scikit-learn", "TensorFlow", "NumPy", "Pandas"],
    limitation: "",
    links: [],
  },
  {
    slug: "fruit-classifier-cv",
    n: "06",
    title: "FRUIT CLASSIFIER · COMPUTER VISION",
    tagline: "Transfer learning that knows its produce.",
    tags: ["MobileNetV2", "TensorFlow", "CV"],
    featured: false,
    headline: { solid: "SEES THE", outline: "FRUIT" },
    problemStatement: "Build an image classifier that's accurate without training from scratch.",
    meta: [
      { k: "ROLE", v: "Computer vision, transfer learning." },
      { k: "BACKBONE", v: "MobileNetV2." },
      { k: "OUTPUT", v: "Prediction fn + failure analysis." },
    ],
    problem: [
      "Training a vision model from zero needs huge data and compute.",
      "The smarter move is transfer learning: stand on a model that already understands images, then teach it your specific classes.",
    ],
    build: [
      "I used MobileNetV2 as the backbone, feeding it 224x224 images with augmentation to widen the data.",
      "The training ran in two phases. First, freeze the base and train the new classification head. Then unfreeze and fine-tune for the last bit of accuracy. The output layer is a multi-class softmax. I built the full toolkit around it: a prediction function with confidence, training curves, a classification report, a confusion matrix, and a misclassified-image viewer.",
    ],
    swarm: [],
    resultsNote: "What I shipped.",
    results: [
      { stat: "2-phase", note: "Frozen base, then fine-tuned for accuracy." },
      { stat: "Confidence", note: "Prediction function returns per-class confidence." },
      { stat: "Analysis", note: "Misclassified viewer for failure analysis." },
    ],
    stack: ["Python", "TensorFlow", "Keras", "MobileNetV2", "NumPy"],
    limitation: "",
    links: [],
  },
  {
    slug: "urdu-fake-news",
    n: "07",
    title: "URDU FAKE NEWS DETECTOR",
    tagline: "Fact-checking Urdu news with ML.",
    tags: ["Python", "scikit-learn", "ASP.NET"],
    featured: false,
    headline: { solid: "REAL OR", outline: "FAKE" },
    problemStatement: "Most fake-news tooling ignores Urdu entirely.",
    meta: [
      { k: "ROLE", v: "Dataset + model + backend." },
      { k: "DATA", v: "Original Urdu news dataset." },
      { k: "SERVING", v: "ASP.NET backend." },
    ],
    problem: [
      "Misinformation spreads fast in Urdu, but the ML resources to fight it barely exist. There was no clean dataset and no ready classifier.",
      "So I built both.",
    ],
    build: [
      "First I assembled and published an Urdu news dataset on Kaggle, since the data simply wasn't out there.",
      "Then I trained a classification model in Python with scikit-learn and Pandas to separate real news from fake. I wired the model into an ASP.NET backend so it could serve predictions through a real application layer.",
    ],
    swarm: [],
    resultsNote: "What it delivered.",
    results: [
      { stat: "Dataset", note: "Published an original Urdu news dataset on Kaggle." },
      { stat: "Classifier", note: "Trained an Urdu real-vs-fake classifier from scratch." },
      { stat: "Served", note: "Predictions delivered through an ASP.NET backend." },
    ],
    stack: ["Python", "scikit-learn", "Pandas", "ASP.NET", "Kaggle"],
    limitation: "",
    links: [
      { label: "GitHub", href: "https://github.com/Hannanbutt1256/Urde-Fake-News-Detection-System" },
      { label: "Kaggle", href: "https://www.kaggle.com/datasets/hannanbuttdev/urdu-news-articles-original-and-translated" },
    ],
  },
];

export const lab = {
  eyebrow: "AI AD CREATIVE DIRECTION",
  headline: { solid: "SHOT WITH", outline: "NO CAMERA" },
  intro:
    "The other half of the work. Cinematic AI product ads directed prompt by prompt, frame by frame. Perfume, skincare, and brand films built with AI. No studio. No camera. Just direction.",
  brands: ["Lattafa", "Jenpharm", "Magnific", "Minimax Hailuo 02"],
  // Live Instagram embeds. Add a clean permalink to `embedUrl` to render a card.
  reels: [
    {
      n: "01",
      type: "Reel",
      title: "Lattafa Khamrah — Cinematic Refresh",
      caption: "From warm amber to icy blue. Khamrah gets a cinematic AI refresh for Lattafa.",
      hashtags: "#AICommercial #AIProductVideo #PerfumeAd #Lattafa #HannanLabs",
      embedUrl: "https://www.instagram.com/reel/DZP71x2KmmL/",
    },
    {
      n: "02",
      type: "Reel",
      title: "Clarévo Anti Acne Soap — AI Ad",
      caption: "Clean skincare visuals, cinematic motion, and product storytelling for Jenpharm.",
      hashtags: "#AIAds #AIVideo #ProductAds #SkincareAds #aiproductphotography",
      embedUrl: "https://www.instagram.com/reel/DZOUaP6qq9L/",
    },
    {
      n: "03",
      type: "Post",
      title: "Khamrah — Summer Side",
      caption: "Fresh, bold, and reimagined through AI visuals for Lattafa.",
      hashtags: "#AIAds #ProductAd #Lattafa #Khamrah #HannanLabs",
      embedUrl: "https://www.instagram.com/p/DZP7IaxihGe/",
    },
    {
      n: "04",
      type: "Post",
      title: "Clarévo — Product Stills",
      caption: "AI product photography and storytelling for Jenpharm's Clarévo line.",
      hashtags: "#AIAds #ProductAds #SkincareAds #Jenpharm #aiproductphotography",
      embedUrl: "https://www.instagram.com/p/DZOUQd-ikMa/",
    },
  ],
};

export const about = {
  eyebrow: "ABOUT",
  headline: { solid: "ENGINEER.", outline: "DIRECTOR." },
  facts: [
    { k: "BASED IN", v: "Gujranwala, PK" },
    { k: "DEGREE", v: "BS Computer Science" },
    { k: "UNIVERSITY", v: "Punjab, Gujranwala" },
    { k: "NOW", v: "AI Bootcamp @ Atomcamp", spark: true },
  ],
  story: [
    "I studied Computer Science at the University of the Punjab, Gujranwala Campus, and graduated in 2024. That gave me the engineering foundation. AI gave me the range.",
    "I started where most developers do, building frontends and shipping web apps, including a frontend internship at Brackets. But I kept pulling toward the harder, more interesting problems: agents that think, models that predict, systems that automate the work people hate doing.",
    "Then I found the creative side. The same AI that powers my agents could direct ad films and product shots that look genuinely expensive. So I started doing both. Building intelligent systems by day, directing cinematic AI ads on the other screen.",
    "That combination is the whole point. I'm not just an AI developer, and I'm not just a creative. I sit where technical systems, business automation, and AI media meet.",
  ],
  principles: [
    { title: "SHIP IT", copy: "A model in a notebook isn't a product. It runs in production or it doesn't count." },
    { title: "CLEAR > CLEVER", copy: "The best system is the one people actually use, not the most complex one." },
    { title: "BOTH SIDES", copy: "Engineering and creative aren't separate skills here. They feed each other." },
    { title: "HONEST", copy: "I'll tell you what doesn't work yet. No magic, no overselling." },
  ],
};

export const contact = {
  eyebrow: "STAY IN TOUCH",
  headline: { solid: "LET'S BUILD", outline: "SOMETHING" },
  intro:
    "Got a system to build, a workflow to automate, or an ad that needs to look like a film? Pick a channel. I reply fast.",
  channels: [
    { k: "INSTAGRAM", v: "@hannanlabs", href: identity.social.instagram },
    { k: "EMAIL", v: "hannanbutt.dev@gmail.com", href: identity.social.email },
    { k: "LINKEDIN", v: "in/hannan-butt", href: identity.social.linkedin },
    { k: "GITHUB", v: "Hannanbutt1256", href: identity.social.github },
    { k: "KAGGLE", v: "hannanbuttdev", href: identity.social.kaggle },
    { k: "RÉSUMÉ", v: "View PDF", href: identity.resume },
  ],
};

export const featuredHomeProjects = projects.slice(0, 4);
