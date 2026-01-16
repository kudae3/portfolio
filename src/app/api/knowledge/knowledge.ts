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
      "Kudae is a software developer and engineer with expertise in web development, AI, and modern technologies. He builds innovative solutions and has a strong portfolio showcasing various projects.",
    category: "about",
  },
  {
    id: "skills-frontend",
    content:
      "Kudae has strong skills in frontend development including React, Next.js, TypeScript, Tailwind CSS, and modern web technologies. He creates responsive and beautiful user interfaces.",
    category: "skills",
  },
  {
    id: "skills-backend",
    content:
      "Kudae is experienced in backend development with Node.js, API development, database design, and server-side technologies. He builds robust and scalable backend systems.",
    category: "skills",
  },
  {
    id: "skills-ai",
    content:
      "Kudae specializes in AI and machine learning, working with RAG systems, embeddings, vector databases like ChromaDB, and language models. He integrates AI capabilities into modern web applications.",
    category: "skills",
  },
  {
    id: "contact",
    content:
      "You can contact Kudae through his portfolio website's contact form. He is open to collaboration, freelance opportunities, and discussing new projects.",
    category: "contact",
  },
  {
    id: "technologies",
    content:
      "Kudae works with technologies including Next.js, React, TypeScript, TailwindCSS, Node.js, ChromaDB, HuggingFace, AI models, and modern web development tools.",
    category: "skills",
  },
  {
    id: "projects-portfolio",
    content:
      "This portfolio website showcases Kudae's work and implements advanced features like RAG-powered chatbot, smooth animations with Framer Motion, and modern UI components.",
    category: "projects",
  },
  {
    id: "experience",
    content:
      "Kudae has experience building full-stack applications, implementing AI features, creating responsive designs, and delivering production-ready solutions for various projects.",
    category: "experience",
  },
];
