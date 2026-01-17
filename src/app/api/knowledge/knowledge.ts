// Portfolio knowledge base about Kudae
// Each document will be embedded and retrieved for RAG

export interface KnowledgeEntry {
  id: string;
  content: string;
  category: string;
}

export const portfolioKnowledge: KnowledgeEntry[] = [
  {
    id: "intro",
    content:
      "Kudae Sithu is a full-stack developer with over 2 years of professional experience.",
    category: "about",
  },
  {
    id: "interests",
    content:
      "Kudae enjoys learning new technologies and contributing to open-source projects.",
    category: "about",
  },
  {
    id: "hobbies",
    content: "Outside coding, Kudae enjoys gaming and watching TV series.",
    category: "about",
  },
  {
    id: "favorite-series",
    content:
      "Kudae's favorite series is Game of Thrones. His favorite character is Tyrion Lannister.",
    category: "about",
  },
  {
    id: "skill-react",
    content: "Kudae builds frontend applications using React.",
    category: "frontend-skills",
  },
  {
    id: "skill-nextjs",
    content: "Kudae uses Next.js for full-stack React applications.",
    category: "frontend-skills",
  },
  {
    id: "skill-vue",
    content:
      "Kudae has professional experience building applications with Vue.js.",
    category: "frontend-skills",
  },
  {
    id: "skill-typescript",
    content: "Kudae uses TypeScript for type-safe development.",
    category: "frontend-skills",
  },
  {
    id: "skill-tailwind",
    content: "Kudae uses Tailwind CSS as his primary styling framework.",
    category: "frontend-skills",
  },
  {
    id: "skill-animations",
    content: "Kudae builds UI animations using Framer Motion and GSAP.",
    category: "frontend-skills",
  },
  {
    id: "skill-nodejs",
    content: "Kudae builds backend services using Node.js.",
    category: "backend-skills",
  },
  {
    id: "skill-express",
    content: "Kudae builds RESTful APIs using Express.js.",
    category: "backend-skills",
  },
  {
    id: "skill-laravel",
    content:
      "Kudae has professional experience developing backend systems with Laravel.",
    category: "backend-skills",
  },
  {
    id: "skill-react-native",
    content: "Kudae builds cross-platform mobile apps using React Native.",
    category: "mobile-skills",
  },
  {
    id: "skill-flutter",
    content: "Kudae builds cross-platform mobile apps using Flutter.",
    category: "mobile-skills",
  },
  {
    id: "skill-mongodb",
    content: "Kudae uses MongoDB for NoSQL database solutions.",
    category: "database-skills",
  },
  {
    id: "skill-mysql",
    content: "Kudae uses MySQL for relational databases.",
    category: "database-skills",
  },
  {
    id: "skill-firebase",
    content: "Kudae uses Firebase for authentication and real-time data.",
    category: "database-skills",
  },
  {
    id: "skill-chromadb",
    content: "Kudae uses ChromaDB as a vector database for RAG systems.",
    category: "database-skills",
  },
  {
    id: "skill-rag",
    content: "Kudae builds Retrieval-Augmented Generation (RAG) systems.",
    category: "ai-skills",
  },
  {
    id: "skill-embeddings",
    content: "Kudae generates embeddings using HuggingFace models.",
    category: "ai-skills",
  },
  {
    id: "portfolio-chatbot",
    content:
      "The AI chatbot on this portfolio was custom-built by Kudae himself, not purchased. He developed it using RAG (Retrieval-Augmented Generation) technology with ChromaDB vector database, HuggingFace embeddings, and Llama AI. It's a fully custom implementation showcasing his AI development skills.",
    category: "ai-skills",
  },
  {
    id: "experience-intern",
    content: "Intern Web Developer at Creative Coder Myanmar (Jan-Mar 2025).",
    category: "experience",
  },
  {
    id: "experience-junior",
    content: "Junior Web Developer at Creative Coder Myanmar (Mar-Oct 2025).",
    category: "experience",
  },
  {
    id: "experience-current",
    content: "Currently works as a Software Developer at ATG Co., Ltd.",
    category: "experience",
  },
  {
    id: "project-djpack",
    content:
      "Built DJ Pack MM music streaming platform using Vue.js and Laravel.",
    category: "projects",
  },
  {
    id: "project-telegram-bot",
    content: "Built a Telegram motivational bot using TypeScript and Node.js.",
    category: "projects",
  },
  {
    id: "project-subscription",
    content:
      "Built a subscription management system using Node.js and MongoDB.",
    category: "projects",
  },
  {
    id: "project-corporate",
    content: "Built a job board web app using Next.js, MongoDB, and Clerk.",
    category: "projects",
  },
  {
    id: "project-hyperui",
    content:
      "Contributed modal components to the Hyper UI open-source library.",
    category: "projects",
  },
  {
    id: "project-portfolio",
    content:
      "Built a portfolio website with Next.js, animations, and RAG chatbot.",
    category: "projects",
  },
  {
    id: "education-diploma",
    content: "Diploma in Software Engineering from European Open University.",
    category: "education",
  },
  {
    id: "education-bachelor",
    content:
      "Bachelor’s degree in Computer Science at University of the People.",
    category: "education",
  },
  {
    id: "cert-meta",
    content: "Meta Front-End Development Certificate.",
    category: "education",
  },
  {
    id: "cert-python",
    content: "Python Data Structures Certificate from University of Michigan.",
    category: "education",
  },
  {
    id: "contact",
    content:
      "Contact Kudae via portfolio website or GitHub (github.com/kudae3).",
    category: "contact",
  },
];
