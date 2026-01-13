export const portfolioData = {
    hero: {
        name: "Hannan Butt",
        role: "AI Engineer | Frontend Developer",
        subHeadline: "AI & No-Code Enthusiast",
        location: "Gujranwala, Pakistan",
        email: "hannanbutt.dev@gmail.com",
        phone: "+92-3206290016",
        summary:
            "I’m an AI Engineer and Frontend Developer focused on machine learning with Python and AI-driven automation. I design and build responsive web applications using React and TypeScript, aligning modern frontend development with practical AI to deliver efficient, scalable solutions.",
        socialLinks: {
            github: "https://github.com/Hannanbutt1256/",
            linkedin: "https://www.linkedin.com/in/hannanb/",
            kaggle: "https://www.kaggle.com/hannanbuttdev",
        },
        resumeLink: "/hannan-butt.pdf", // Assuming file is in public folder
    },
    projects: [
        {
            title: "Fake News Detection System",
            techUsed: ["Python", "ASP.NET", "Scikit-learn", "Pandas"],
            description:
                "Designed a machine learning-based system to detect and classify fake news articles. Developed the backend in ASP.NET and the ML model in Python.",
            links: {
                github: "https://github.com/Hannanbutt1256/Urde-Fake-News-Detection-System",
                kaggle: "https://www.kaggle.com/datasets/hannanbuttdev/urdu-news-articles-original-and-translated",
            },
        },
        {
            title: "Data-Driven Analysis of Pakistan Real Estate",
            isFeatured: true,
            techUsed: ["Python", "Pandas", "Numpy"],
            description:
                "Conducted EDA on real estate datasets to uncover market trends. Cleaned and processed large datasets; visualized price trends and distributions.",
            links: {
                demo: "https://media.licdn.com/dms/document/media/v2/D4D1FAQGV5Jr2M_bmxA/feedshare-document-pdf-analyzed/B4DZsxcYomHwAY-/0/1766061087888?e=1767225600&v=beta&t=P3utlCI9-vdsSEc1WokUmYbcRKbbZpWtQtk__5quLMc",
                kaggle: "https://www.kaggle.com/code/hannanbuttdev/exploratory-data-analysis-on-real-estate-data"
            },
        },
        {
            title: "Blog and Podcast Platform",
            techUsed: [
                "React.js",
                "TypeScript",
                "Firebase",
                "Stripe",
                "Tailwind CSS",
                "Lexical Editor",
                "Zod",
                "Yup",
            ],
            description:
                "Engineered a platform with Firebase auth, protected routing, and Stripe subscription integration. Integrated Lexical rich text editor for content creation.",
            links: {
                demo: "https://mad-dev.vercel.app/",
                github: "https://github.com/Hannanbutt1256/MadDev"
            },
        },
    ],
    skills: [
        {
            category: "Frontend",
            items: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
        },
        {
            category: "Backend & Database",
            items: ["ASP.NET", "Firebase", "MS SQL"],
        },
        {
            category: "AI & Data Science",
            items: ["Python", "Pandas", "Numpy", "Scikit-learn", "EDA"],
        },
        {
            category: "Tools & Others",
            items: ["Git", "Redux Thunk", "Zod", "Yup"],
        },
    ],
    experience: [
        {
            company: "Brackets",
            location: "Gujranwala, Pakistan",
            role: "Frontend Intern",
            duration: "October 2024 – December 2024",
            description: [
                "Built responsive user interfaces using HTML, CSS, JavaScript, React, and TypeScript.",
                "Integrated Tailwind CSS, Redux Thunk, and Yup for form validation.",
                "Optimized frontend performance through efficient state management and reusable components.",
                "Collaborated with senior developers to deliver project features.",
            ],
        },
    ],
    education: [
        {
            institution: "University of the Punjab (Gujranwala Campus)",
            degree: "Bachelor’s in Computer Science",
            duration: "Dec 2020 – June 2024",
            grade: "GPA: 2.95",
        },
    ],
    certifications: [
        {
            title: "AI Bootcamp",
            issuer: "Atomcamp",
            date: "Nov 2025 – Ongoing",
            details:
                "Focusing on data cleaning, EDA, feature engineering, and evaluating ML models (ROC-AUC, R², etc.).",
        },
    ],
};
