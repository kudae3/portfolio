// Portfolio knowledge base about Kudae
// Each document will be embedded and retrieved for RAG

export interface KnowledgeEntry {
  id: string;
  content: string;
  category: string;
}

export const portfolioKnowledge: KnowledgeEntry[] = [
  // === PERSONAL & PROFESSIONAL INTRO ===
  {
    id: "intro",
    content:
      "Kudae Sithu is a full-stack web developer with 2+ years of professional experience. He is passionate about building modern, responsive web applications and enjoys working with both front-end and back-end technologies. Kudae is always eager to learn new tools and frameworks to improve his skills. He describes himself as someone who believes in the power of technology to solve real-world problems and aims to create clean, efficient, and scalable applications that provide exceptional user experiences.",
    category: "about",
  },
  {
    id: "personal-interests",
    content:
      "Beyond coding, Kudae enjoys exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. He is always eager to learn and grow both professionally and personally. He has a strong dedication to continuous learning and staying up-to-date with the latest web development trends and best practices.",
    category: "about",
  },
  {
    id: "mission-values",
    content:
      "Kudae's mission is to create clean, efficient, and scalable applications that not only meet technical requirements but also provide exceptional user experiences. He believes in the power of technology to solve real-world problems and is committed to delivering high-quality solutions that make a positive impact.",
    category: "about",
  },

  // === FRONTEND SKILLS ===
  {
    id: "skills-frontend-react-nextjs",
    content:
      "Kudae is highly proficient in React and Next.js with 80% proficiency level. He has extensive experience building modern single-page applications and server-side rendered applications using these frameworks. He uses React for component-based architecture and Next.js for production-ready applications with features like server-side rendering, static site generation, and API routes.",
    category: "skills",
  },
  {
    id: "skills-frontend-vue",
    content:
      "Kudae has strong expertise in Vue.js with 85% proficiency level. He has used Vue.js extensively during his professional work at Creative Coder Myanmar, particularly in developing complex frontend applications including a full-stack music streaming platform. He is skilled in Vue.js state management, reactive components, and building responsive user interfaces.",
    category: "skills",
  },
  {
    id: "skills-frontend-typescript",
    content:
      "Kudae is proficient in TypeScript and uses it extensively in his projects. TypeScript is a key technology in his tech stack, appearing in multiple projects including his Telegram chatbot, corporate web application, and this portfolio. He values TypeScript for its type safety, better developer experience, and improved code quality.",
    category: "skills",
  },
  {
    id: "skills-frontend-tailwind",
    content:
      "Kudae is highly skilled in Tailwind CSS, which he uses as his primary CSS framework. His portfolio showcases extensive use of Tailwind CSS for styling, including custom animations, responsive design, and utility-first CSS patterns. He combines Tailwind with components from shadcn/ui to create beautiful and functional user interfaces.",
    category: "skills",
  },
  {
    id: "skills-frontend-animations",
    content:
      "Kudae has advanced skills in web animations using Framer Motion and GSAP. His portfolio demonstrates smooth animations, split text effects, shiny text animations, infinite moving cards, shooting stars, and various other animation techniques. He creates engaging user experiences through well-crafted motion design and interactive elements.",
    category: "skills",
  },

  // === BACKEND SKILLS ===
  {
    id: "skills-backend-nodejs",
    content:
      "Kudae is experienced in backend development with Node.js, showing 75% proficiency. He has built multiple backend systems including a Telegram chatbot using Node.js and Express, and a subscription management system with robust APIs for managing subscriptions, payments, and user accounts. He is skilled in creating RESTful APIs, handling authentication, and implementing server-side logic.",
    category: "skills",
  },
  {
    id: "skills-backend-laravel",
    content:
      "Kudae has strong expertise in Laravel with 85% proficiency level. During his time at Creative Coder Myanmar, he worked extensively with Laravel, developing and maintaining web applications, creating backend APIs, and integrating Laravel backend systems with frontend frameworks. He contributed to real-world projects including e-commerce platforms and LMS (Learning Management Systems).",
    category: "skills",
  },
  {
    id: "skills-backend-express",
    content:
      "Kudae is proficient in Express.js for Node.js backend development. He has used Express to build RESTful APIs, implement middleware, handle routing, and create server-side applications. His projects include a subscription management system and a Telegram bot, both utilizing Express for backend functionality.",
    category: "skills",
  },

  // === DATABASE SKILLS ===
  {
    id: "skills-databases",
    content:
      "Kudae has 75% proficiency in database technologies including MongoDB, MySQL, and ChromaDB. He has experience with both SQL and NoSQL databases. He has implemented MongoDB in multiple projects including his corporate web application and subscription management system. He also works with MySQL for relational database needs and ChromaDB as a vector database for AI-powered features.",
    category: "skills",
  },
  {
    id: "skills-mongodb",
    content:
      "Kudae is experienced with MongoDB as his primary NoSQL database. He has used MongoDB in projects like the subscription management system, corporate web application, and other full-stack applications. He understands document-based data modeling, queries, indexes, and integrating MongoDB with Node.js and Next.js applications.",
    category: "skills",
  },
  {
    id: "skills-chromadb",
    content:
      "Kudae works with ChromaDB, a vector database used for AI and machine learning applications. In his portfolio, he has implemented a seeding script (seed-chromadb.ts) to populate the vector database with embeddings. ChromaDB is used to power the RAG (Retrieval-Augmented Generation) chatbot on his portfolio website, enabling semantic search and context-aware responses.",
    category: "skills",
  },

  // === AI & MACHINE LEARNING ===
  {
    id: "skills-ai-rag-systems",
    content:
      "Kudae specializes in building RAG (Retrieval-Augmented Generation) systems. His portfolio website features a RAG-powered chatbot that uses ChromaDB for vector storage, HuggingFace embeddings for semantic understanding, and language models for generating context-aware responses. He has implemented the full RAG pipeline including document embedding, semantic search, and answer generation.",
    category: "skills",
  },
  {
    id: "skills-ai-embeddings",
    content:
      "Kudae works with embeddings and vector databases. He uses HuggingFace's Inference API (@huggingface/inference) and Chroma's default embeddings (@chroma-core/default-embed) for creating vector representations of text. His portfolio includes embedding transformation logic (transformer/embed.ts) and knowledge seeding scripts that convert documents into embeddings for semantic search.",
    category: "skills",
  },
  {
    id: "skills-ai-integration",
    content:
      "Kudae integrates AI capabilities into modern web applications. His portfolio demonstrates this through features like an intelligent chatbot that can answer questions about his background, skills, and projects. He combines traditional web development with cutting-edge AI technologies to create innovative user experiences.",
    category: "skills",
  },

  // === WORK EXPERIENCE ===
  {
    id: "experience-creative-coder-intern",
    content:
      "From January 2025 to March 2025, Kudae worked as an Intern Web Developer at Creative Coder Myanmar. During this internship, he developed and maintained web applications using Laravel, Vue.js, and React.js. He collaborated with designers and developers to create responsive and user-friendly interfaces, contributed to real-world projects including e-commerce and LMS platforms, and enhanced application performance and user experience through optimization techniques.",
    category: "experience",
  },
  {
    id: "experience-creative-coder-junior",
    content:
      "From March 2025 to October 2025, Kudae was promoted to Junior Web Developer at Creative Coder Myanmar. In this role, he architected and developed a full-stack music streaming platform (https://djpackmm.com/) in collaboration with other developers. The platform features user authentication, purchase workflows, downloading tracks, and real-time audio streaming. He led frontend development using Vue.js with complex state management, integrated Laravel backend APIs, and optimized database queries for improved performance.",
    category: "experience",
  },
  {
    id: "experience-mentorship",
    content:
      "During his time as a Junior Web Developer at Creative Coder Myanmar, Kudae took on mentorship responsibilities. He mentored intern developers, sharing his knowledge and helping them grow in their roles. He also collaborated cross-functionally with design and backend teams to deliver pixel-perfect, user-centric applications.",
    category: "experience",
  },
  {
    id: "experience-total-years",
    content:
      "Kudae has 2+ years of professional web development experience. He has progressed from an intern to a junior developer, working on real-world production applications and gaining expertise across the full technology stack. He has completed 7+ projects throughout his career, working with 8+ different technologies.",
    category: "experience",
  },

  // === PROJECTS ===
  {
    id: "project-music-streaming",
    content:
      "Kudae architected and developed a full-stack music streaming platform at https://djpackmm.com/ while working at Creative Coder Myanmar. This was a collaborative project featuring user authentication, purchase workflows, track downloading capabilities, and real-time audio streaming. The frontend was built with Vue.js implementing complex state management and responsive UI components, while the backend used Laravel with optimized database queries for improved performance.",
    category: "projects",
  },
  {
    id: "project-telegram-bot",
    content:
      "Kudae built a motivational Telegram chatbot (https://t.me/moti_hub_bot) that provides inspirational quotes and interacts with users through a simple and intuitive interface. The bot is built with TypeScript, Node.js, Express, and the Telegram Bot API. It demonstrates his ability to create automated conversational interfaces and work with third-party APIs.",
    category: "projects",
  },
  {
    id: "project-subscription-system",
    content:
      "Kudae developed a subscription management system with a robust Node.js backend. The system includes comprehensive APIs for managing subscriptions, payments, and user accounts, with validation and secure data handling. Built with Node.js, Express, MongoDB, and JavaScript, this project showcases his backend development skills and ability to handle complex business logic. The code is available on GitHub at https://github.com/kudae3/Subscription-tracker.",
    category: "projects",
  },
  {
    id: "project-corporate-web-app",
    content:
      "Kudae created a full-stack corporate web application featuring a job board. The application allows admin users to manage job postings and includes secure user authentication powered by Clerk. Built with Next.js, TypeScript, Tailwind CSS, MongoDB, shadcn/ui components, and Clerk authentication, this project demonstrates his full-stack capabilities. A demo video is available at https://youtu.be/7fTBW_BLmHM?si=qBGzzJhFgb57-mnw.",
    category: "projects",
  },
  {
    id: "project-hyperui-contribution",
    content:
      "Kudae contributed to Hyper UI, an open-source component library. He developed modal components with advanced input fields, improving usability and accessibility for the library's users. This contribution involved working with Next.js, Tailwind CSS, React, and JavaScript. His modal components can be seen at https://www.hyperui.dev/components/application/modals. This demonstrates his commitment to open-source contribution and community involvement.",
    category: "projects",
  },
  {
    id: "project-portfolio-website",
    content:
      "Kudae's portfolio website (this site) is built with Next.js, React, TypeScript, and Tailwind CSS. It showcases advanced features including a RAG-powered chatbot using ChromaDB and HuggingFace embeddings, smooth animations with Framer Motion and GSAP, modern UI components with shadcn/ui, shooting stars background effects, split text animations, infinite moving cards for certificates, and a responsive design. The portfolio includes sections for About, Work Experience with timeline, Projects showcase, Certificates, Contact form powered by Resend, and social media links.",
    category: "projects",
  },

  // === TECHNICAL STACK ===
  {
    id: "tech-stack-overview",
    content:
      "Kudae's technology stack includes: Frontend - React, Next.js, Vue.js, TypeScript, JavaScript, Tailwind CSS, shadcn/ui; Backend - Node.js, Express, Laravel; Databases - MongoDB, MySQL, ChromaDB; AI/ML - HuggingFace, ChromaDB, RAG systems, embeddings; Animation - Framer Motion, GSAP; Authentication - Clerk; Email - Resend; Development Tools - TypeScript, ESLint, tsx; Package Management - npm. He works with 8+ different technologies and continues to expand his skill set.",
    category: "skills",
  },
  {
    id: "tech-stack-ui-libraries",
    content:
      "Kudae uses modern UI libraries and components including shadcn/ui for accessible component primitives, Tailwind CSS for utility-first styling, Framer Motion for smooth animations and transitions, GSAP for advanced animation sequences, react-icons for icon components, and custom UI components he has built including animated-content, count-up, infinite-moving-cards, shiny-text, shooting-stars, split-text, stars-background, and timeline components.",
    category: "skills",
  },

  // === CERTIFICATES & EDUCATION ===
  {
    id: "certificate-meta-frontend",
    content:
      "Kudae has completed the 'Introduction to Front-end Development' certification from Meta (Facebook). This certificate demonstrates his understanding of fundamental frontend development concepts, HTML, CSS, JavaScript, and modern web development practices from one of the world's leading technology companies.",
    category: "education",
  },
  {
    id: "certificate-python-michigan",
    content:
      "Kudae earned a 'Python Data Structures' certificate from the University of Michigan. This certification covers Python programming fundamentals, data structures including lists, dictionaries, tuples, and demonstrates his ability to work with Python for data manipulation and algorithmic problem-solving.",
    category: "education",
  },
  {
    id: "certificate-diploma-software",
    content:
      "Kudae holds a Diploma in Software Engineering from the European Open University. This diploma provides comprehensive coverage of software engineering principles, development methodologies, and best practices in building robust software systems.",
    category: "education",
  },

  // === GOALS & FUTURE ===
  {
    id: "future-goals",
    content:
      "Kudae's upcoming goals include: Mastering Next.js and React for frontend innovation, exploring DevOps and CI/CD pipelines, and contributing to open-source projects or building a personal SaaS project. He continues to grow as a full-stack developer and is committed to expanding his skill set to include modern development practices and cloud technologies.",
    category: "about",
  },

  // === CONTACT & AVAILABILITY ===
  {
    id: "contact-info",
    content:
      "You can contact Kudae Sithu through his portfolio website's contact form, which is powered by Resend for reliable email delivery. He is open to collaboration opportunities, freelance work, full-time positions, and discussing new projects. His contact information and social media links are available on his portfolio website. He is responsive and welcomes inquiries about his work.",
    category: "contact",
  },
  {
    id: "collaboration-interests",
    content:
      "Kudae is interested in opportunities involving full-stack web development, frontend development with React/Next.js/Vue.js, backend development with Node.js/Laravel, AI integration and RAG systems, building SaaS applications, open-source contributions, and innovative web projects. He is particularly excited about projects that combine modern web technologies with AI capabilities.",
    category: "contact",
  },

  // === PORTFOLIO FEATURES ===
  {
    id: "portfolio-chatbot",
    content:
      "This portfolio website features an intelligent RAG-powered chatbot that can answer questions about Kudae's background, skills, experience, and projects. The chatbot uses ChromaDB for vector storage, HuggingFace embeddings for semantic understanding, and retrieves relevant information from a knowledge base to provide accurate, context-aware responses. The chat API is implemented in Next.js API routes (api/chat/route.ts).",
    category: "projects",
  },
  {
    id: "portfolio-components",
    content:
      "The portfolio includes custom-built components: About section with skills and stats, BottomNav for mobile navigation, Certificates showcase with infinite moving cards, ChatBot for AI-powered assistance, ContactMe form with Resend integration, CTA (Call-to-Action) sections, Hero section with animated tech stack icons, MyTimeline showing work experience, Navbar for site navigation, Socials for social media links, Work section displaying projects, and various UI components for animations and effects.",
    category: "projects",
  },

  // === TECHNICAL EXPERTISE DETAILS ===
  {
    id: "expertise-fullstack",
    content:
      "Kudae is a true full-stack developer with the ability to handle both frontend and backend development. He has built complete applications from database design to UI/UX implementation. His full-stack projects include the music streaming platform with Vue.js frontend and Laravel backend, the corporate job board with Next.js and MongoDB, and this portfolio with Next.js, AI features, and vector database integration.",
    category: "skills",
  },
  {
    id: "expertise-responsive-design",
    content:
      "Kudae excels at creating responsive and mobile-friendly web applications. His portfolio demonstrates extensive use of responsive design patterns with Tailwind CSS, including mobile-first approach, breakpoints for different screen sizes (md:, lg:), responsive navigation with BottomNav for mobile, responsive grid layouts, and adaptive typography. All his projects are fully responsive and provide excellent user experiences across devices.",
    category: "skills",
  },
  {
    id: "expertise-performance",
    content:
      "Kudae focuses on application performance and optimization. During his work at Creative Coder Myanmar, he enhanced application performance through optimization techniques, optimized database queries for the music streaming platform, and implemented best practices for web performance. He uses Next.js features like image optimization, code splitting, and server-side rendering to ensure fast load times.",
    category: "skills",
  },
  {
    id: "expertise-api-development",
    content:
      "Kudae has strong expertise in API development and integration. He has built RESTful APIs with Node.js/Express and Laravel, integrated third-party APIs like Telegram Bot API, HuggingFace API, and Clerk authentication, created Next.js API routes for chat, contact, embedding, and knowledge retrieval, and implemented secure authentication and authorization flows. He understands API design principles, versioning, and documentation.",
    category: "skills",
  },

  // === SOFT SKILLS ===
  {
    id: "soft-skills-collaboration",
    content:
      "Kudae has demonstrated strong collaboration skills throughout his career. At Creative Coder Myanmar, he collaborated with designers and developers to create user-friendly interfaces, worked cross-functionally with design and backend teams, participated in team-based development of the music streaming platform, and mentored intern developers. He values teamwork and effective communication in development processes.",
    category: "about",
  },
  {
    id: "soft-skills-learning",
    content:
      "Kudae is passionate about continuous learning and staying current with technology trends. He has progressed from intern to junior developer in a short time, earned multiple professional certificates from Meta and University of Michigan, learned new frameworks and technologies independently, and actively explores new tools and best practices. His dedication to learning is demonstrated by his 100% dedication stat on his portfolio.",
    category: "about",
  },

  // === WORK STYLE & PHILOSOPHY ===
  {
    id: "work-philosophy",
    content:
      "Kudae's work philosophy centers on creating clean, efficient, and scalable code. He believes in writing maintainable code that follows best practices, building user-centric applications with exceptional UX, solving real-world problems through technology, balancing technical excellence with practical delivery, and continuous improvement and refactoring. His code demonstrates attention to detail, proper TypeScript usage, and modern development patterns.",
    category: "about",
  },

  // === PERSONAL INFORMATION ===
  {
    id: "personal-info-basic",
    content:
      "Kudae Sithu is a male developer born on July 6, 2003, making him approximately 22-23 years old. He can be reached at kudaesithu2@gmail.com or by phone at +959751025121. His GitHub profile is at https://github.com/kudae3 and his portfolio website is at https://www.kudae-sithu.codes/",
    category: "contact",
  },
  {
    id: "personal-info-languages",
    content:
      "Kudae Sithu is multilingual. He speaks Burmese as his mother tongue and is proficient in English. This language proficiency enables him to work effectively in international development teams and communicate with global clients.",
    category: "about",
  },

  // === EDUCATION DETAILS ===
  {
    id: "education-european-open-university",
    content:
      "Kudae attended European Open University from October 2022 to December 2023, where he earned a Diploma in Software Engineering. This diploma provided him with comprehensive knowledge of software engineering principles, development methodologies, and best practices in building robust software systems.",
    category: "education",
  },
  {
    id: "education-university-of-people",
    content:
      "Kudae is pursuing a Bachelor's Degree in Computer Science at the University of the People, enrolled from August 2022 to January 2026. This degree program covers fundamental computer science concepts, algorithms, data structures, software engineering, and theoretical foundations of computing.",
    category: "education",
  },

  // === ADDITIONAL TECHNICAL SKILLS ===
  {
    id: "skills-programming-languages",
    content:
      "Kudae's core programming languages are JavaScript and PHP. He uses JavaScript for both frontend and backend development with Node.js, React, Vue.js, and Next.js. PHP is his language of choice for Laravel backend development. He also has knowledge of Python from his certification in Python Data Structures from the University of Michigan.",
    category: "skills",
  },
  {
    id: "skills-firebase",
    content:
      "Kudae has experience with Firebase, Google's backend-as-a-service platform. He can work with Firebase for real-time databases, authentication, cloud storage, hosting, and other backend services. This complements his expertise in traditional databases like MongoDB and MySQL.",
    category: "skills",
  },
  {
    id: "skills-redis",
    content:
      "Kudae has experience with Redis, an in-memory data structure store used as a database, cache, and message broker. Redis knowledge demonstrates his understanding of caching strategies, session management, and performance optimization techniques for high-traffic applications.",
    category: "skills",
  },
  {
    id: "skills-agile-git",
    content:
      "Kudae is familiar with Agile development workflows and Git-based collaboration. He uses Git and GitHub for version control, understands branching strategies, pull requests, code reviews, and collaborative development practices. His experience at Creative Coder Myanmar involved working in team environments with modern development workflows.",
    category: "skills",
  },
  {
    id: "skills-react-flow",
    content:
      "Kudae has experience with React Flow, a library for building node-based editors and interactive diagrams. He used React Flow when developing the Messenger Chatbot admin panel at Creative Coder Myanmar, creating an intuitive visual interface for chatbot flow management.",
    category: "skills",
  },
  {
    id: "skills-tanstack",
    content:
      "Kudae works with TanStack (formerly React Query) for data fetching, caching, and state management in React applications. He implemented TanStack in his Corporate Web Application project for the admin dashboard, enabling efficient real-time application management with optimized data synchronization.",
    category: "skills",
  },

  // === ENHANCED PROJECT DETAILS ===
  {
    id: "project-djpack-detailed",
    content:
      "At DJ Pack MM (https://djpackmm.com), Kudae co-developed a full-featured music streaming platform taking ownership of both front-end and back-end modules using Laravel and Vue.js. He designed and implemented major user-centric features including music ordering system, payout system for artists, track downloading functionality, likes system, follow/following functionality for users and artists, and real-time notifications to enhance engagement and usability. This comprehensive platform demonstrates his ability to build complex, feature-rich applications.",
    category: "projects",
  },
  {
    id: "project-messenger-chatbot",
    content:
      "Kudae developed a Messenger Chatbot for Creative Coder Myanmar (https://www.facebook.com/creativecodermm). He configured Messenger integration through Meta's Developer platform for seamless chatbot connectivity. He designed and implemented a dynamic, user-friendly admin panel using React.js and React Flow for intuitive control and management of chatbot flows. This project showcases his ability to integrate with Meta's APIs and create visual flow-based interfaces.",
    category: "projects",
  },
  {
    id: "project-ecommerce-october",
    content:
      "Kudae built an E-Commerce Web Application at onlineoctober.com using Laravel and Vue.js for a seamless SPA-like experience. He designed and integrated interactive sales performance charts, allowing administrators to easily monitor monthly and annual revenue trends. He optimized performance and enhanced UI/UX for better customer engagement. This project demonstrates his ability to build complete e-commerce solutions with data visualization and business analytics.",
    category: "projects",
  },
  {
    id: "project-learning-platform",
    content:
      "Kudae contributed to the Online Learning Platform at creativecodermm.com, a dynamic e-learning platform built with Laravel and Vue.js. He implemented a user-friendly Issue Reporting feature to streamline user feedback and bug tracking. He resolved various user-reported issues and re-designed an intuitive UI for a better learning experience. This work shows his ability to contribute to educational technology and improve user experience based on feedback.",
    category: "projects",
  },
  {
    id: "project-corporate-detailed",
    content:
      "Kudae's Corporate Web Application (https://github.com/kudae3/digital-tide and https://youtu.be/7fTBW_BLmHM?si=BqUkCskvlFgPU0h5) is a modern full-stack application using React.js, Next.js, and Clerk for authentication. It features a dynamic Job Application system similar to LinkedIn, Indeed, and other job board websites. The application includes an Admin Dashboard for real-time application management with MongoDB, TanStack for data management, and role-based access controls for security. This project showcases his ability to build enterprise-level applications with complex authentication and authorization.",
    category: "projects",
  },
  {
    id: "project-telegram-detailed",
    content:
      "Kudae's Telegram Chatbot (https://t.me/moti_hub_bot) was developed using TypeScript, Telegraf framework, and Express. The bot delivers motivational quotes based on user mood or chosen authors. He built interactive conversation flows with custom keyboard commands, implemented webhook-based architecture for efficient message handling, and integrated API calls to fetch quote and author data. This demonstrates his expertise in building conversational interfaces and working with the Telegram Bot API.",
    category: "projects",
  },

  // === PROFESSIONAL SUMMARY ===
  {
    id: "professional-summary",
    content:
      "Kudae Sithu is a Full-Stack Web Developer with hands-on experience building scalable applications using Laravel, Node.js, Vue.js, Next.js, and React.js. He has proven ability to contribute to production-grade codebases and solve real-world problems with clean, efficient code. His technical skills include JavaScript and PHP programming, frontend development with Vue.js, React.js, and Next.js, backend development with Laravel, RESTful APIs, and Node.js (Express.js), database management with MySQL, Firebase, MongoDB (Mongoose), and Redis, and version control with Git and GitHub.",
    category: "about",
  },

  // === PROJECT COUNT & SCOPE ===
  {
    id: "projects-professional",
    content:
      "During his time at Creative Coder Myanmar, Kudae contributed to four major professional projects: DJ Pack MM music streaming platform, Messenger Chatbot with admin panel, E-Commerce Web Application (onlineoctober.com), and Online Learning Platform (creativecodermm.com). Each project was production-grade and served real users, demonstrating his ability to deliver professional-quality work.",
    category: "experience",
  },
  {
    id: "projects-personal-complete",
    content:
      "Kudae has built multiple personal projects to showcase his skills and explore new technologies. These include the Corporate Web Application with job board functionality, Telegram motivational chatbot, Subscription Management System, HyperUI open-source contribution, and this portfolio website with AI-powered chatbot. His personal projects demonstrate initiative, continuous learning, and passion for development beyond professional work.",
    category: "projects",
  },
  {
    id: "current-job-status",
    content:
      "Kudae is curretnly working as a Software Developer at ATG Co., Ltd. He built both Mobile, and Web Application",
    category: "experience",
  },

  // === TECHNICAL CAPABILITIES ===
  {
    id: "capabilities-restful-apis",
    content:
      "Kudae has extensive experience designing and implementing RESTful APIs. He has built APIs with Laravel for the music streaming platform and e-commerce application, created Node.js/Express APIs for the subscription management system and Telegram bot, and implemented Next.js API routes for this portfolio. He understands REST principles, HTTP methods, status codes, and API best practices.",
    category: "skills",
  },
  {
    id: "capabilities-real-time-features",
    content:
      "Kudae has implemented real-time features in his applications, including real-time notifications in the DJ Pack MM music streaming platform, real-time application management dashboard using TanStack in the corporate web app, and webhook-based real-time message handling in the Telegram chatbot. He understands the challenges and solutions for building responsive, real-time user experiences.",
    category: "skills",
  },
  {
    id: "capabilities-data-visualization",
    content:
      "Kudae has experience with data visualization and business analytics. In the E-Commerce Web Application, he designed and integrated interactive sales performance charts allowing administrators to monitor monthly and annual revenue trends. This demonstrates his ability to present complex data in user-friendly, actionable formats.",
    category: "skills",
  },
  {
    id: "capabilities-authentication-authorization",
    content:
      "Kudae implements secure authentication and authorization systems. He has worked with Clerk for modern authentication in Next.js applications, implemented role-based access controls in the corporate web application admin dashboard, built user authentication for the music streaming platform with Laravel, and integrated Meta's authentication for the Messenger chatbot. He understands security best practices, session management, and user privacy.",
    category: "skills",
  },
  {
    id: "capabilities-ui-ux-optimization",
    content:
      "Kudae focuses on UI/UX optimization and user-centric design. He enhanced UI/UX for the e-commerce platform to improve customer engagement, re-designed the learning platform UI for better user experience, implemented user-friendly features like issue reporting, and created intuitive admin panels with visual flow editors. He balances aesthetics with functionality to create delightful user experiences.",
    category: "skills",
  },
];
