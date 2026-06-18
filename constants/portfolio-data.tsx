import type { ReactNode } from "react";
import { ProjectBulletList } from "@/components/sub/project-bullet-list";
import { FaTelegram, FaFilePdf } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";

const HRAFN_TECH_STACK = [
  {
    label: "Core:",
    value: "Implemented NL2SQL to generate SQL queries from natural language",
  },
  {
    label: "Integrations:",
    value:
    "Tekion/CDK adapters and optional Playwright-based competitive crawlers",
  },
  {
    label: "Tech Stack:",
    value: "Next.js 14 (App Router), React 18 + TypeScript + shadcn/ui, Supabase, Tailwind CSS, PostgreSQL, pgvector, OpenAI, Pinecone, Stripe, Vercel",
  },
] as const;

const MUSHGPT_TECH_STACK = [
  {
    label: "",
    value: "Scraping data from websites and documents like pdf, TXT, etc.",
  },
  {
    label: "",
    value: "Implemented RAG for large-scale data using Pinecone and OpenAI.",
  },
  {
    label: "Tech Stack:",
    value: "MongoDB, Express.js, Tailwind CSS,React.js, React Native, Node.js, FastAPI, Django, AWS, OpenAI, Pinecone",
  },
] as const;

const ShipmentSystemPoc = [
  {
    label: "",
    value: "Built a full-stack app where LangChain extracts equipment, weight limits, pay requirements, and home base from a messy transcript, then filters and ranks loads using haversine distance across all three legs: deadhead to pickup, loaded miles, and deadhead home. Includes an interactive React + Google Maps UI to set truck location, visualize routes, and re-rank in real time.",
  },
  {
    label: "Tech Stack:",
    value: "Python, FastAPI, MongoDB, LangChain, React, Google Maps API",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "JavaScript",
    image: "https://techstack-generator.vercel.app/js-icon.svg",
    width: 80,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "https://techstack-generator.vercel.app/ts-icon.svg",
    width: 80,
    height: 65,
  },
  {
    skill_name: "React",
    image: "https://techstack-generator.vercel.app/react-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Vue.js",
    image: "https://skillicons.dev/icons?i=vue",
    width: 67,
    height: 80,
  },
  {
    skill_name: "Angular",
    image: "https://skillicons.dev/icons?i=angular",
    width: 65,
    height: 80,
  },
  {
    skill_name: "SCSS",
    image: "https://skillicons.dev/icons?i=sass",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "https://skillicons.dev/icons?i=tailwind",
    width: 75,
    height: 80,
  },
  {
    skill_name: "HTML5",
    image: "https://skillicons.dev/icons?i=html",
    width: 70,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "https://skillicons.dev/icons?i=css",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "https://skillicons.dev/icons?i=bootstrap",
    width: 56,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "https://techstack-generator.vercel.app/redux-icon.svg",
    width: 80,
    height: 60,
  },
  {
    skill_name: "Vuex / Pinia",
    image: "https://skillicons.dev/icons?i=pinia",
    width: 65,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 70,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "https://skillicons.dev/icons?i=php",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "https://skillicons.dev/icons?i=laravel",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "https://techstack-generator.vercel.app/python-icon.svg",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "https://techstack-generator.vercel.app/django-icon.svg",
    width: 60,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "https://skillicons.dev/icons?i=mongodb",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "https://skillicons.dev/icons?i=postgres",
    width: 70,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "https://techstack-generator.vercel.app/mysql-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "REST APIs",
    image: "https://techstack-generator.vercel.app/restapi-icon.svg",
    width: 70,
    height: 80,
  },
] as const;

export const AI_SKILL = [
  {
    skill_name: "AI",
    image: "https://skillicons.dev/icons?i=ai",
    width: 70,
    height: 70,
  },
  {
    skill_name: "OpenAI",
    image: "openai.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "LLMs",
    image: "llm.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "LangChain",
    image: "langchain.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "RAG",
    image: "rag.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Hugging Face",
    image: "huggingface.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PyTorch",
    image: "https://skillicons.dev/icons?i=pytorch",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Webpack",
    image: "https://skillicons.dev/icons?i=webpack",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Vite",
    image: "https://skillicons.dev/icons?i=vite",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Babel",
    image: "https://skillicons.dev/icons?i=babel",
    width: 65,
    height: 80,
  },
  {
    skill_name: "NPM",
    image: "https://skillicons.dev/icons?i=npm",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Yarn",
    image: "https://skillicons.dev/icons?i=yarn",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "https://skillicons.dev/icons?i=figma",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Storybook",
    image: "https://techstack-generator.vercel.app/storybook-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Agile / CI/CD / TDD",
    image: "https://skillicons.dev/icons?i=githubactions",
    width: 70,
    height: 70,
  },
] as const;

export type Project = {
  title: string;
  description: string | ReactNode;
  image: string;
  fields: string[];
  onlineLink?: string;
  sourceCodeLink?: string;
  videoLink?: string;
  galleryImages?: { src: string; alt?: string; description?: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Hrafn AI Dealer App",
    description: (
      <div>
        <p className="mt-2 text-gray-300">
          HRAFN is an alpha-stage dealer intelligence and recommendation engine
          that ingests dealer integration data and powers recommendations,
          execution logs, and aggregate-safe benchmarking. The platform provides
          dealers with real-time insights into inventory, sales, and competitive
          positioning through modern React dashboards and secure Supabase
          backend.
        </p>
        <ProjectBulletList items={[...HRAFN_TECH_STACK]} />
      </div>
    ),
    image: "/projects/hrafn/main.jpg",
    fields: ["AI", "Full-stack"],
    onlineLink: "https://dealer-webapp.vercel.app/",
    sourceCodeLink: "https://github.com/HRAFNAI/dealer_webapp",
    videoLink:
      "https://drive.google.com/file/d/1KYq3JyMdIeIyl6vL895YFtsNE4ANyV_b/view?usp=sharing",
    galleryImages: [
      { src: "/projects/hrafn/architecture.jpg", alt: "Hrafn AI Dealer App Architecture" },
      { src: "/projects/hrafn/image_1.jpg", alt: "Hrafn AI Dealer App" },
      { src: "/projects/hrafn/image_2.png", alt: "Hrafn AI Dealer App" },
      { src: "/projects/hrafn/image_3.png", alt: "Hrafn AI Dealer App" },
      { src: "/projects/hrafn/image_4.png", alt: "Hrafn AI Dealer App" },
    ],
  },
  {
    title: "MushGPT",
    description: (<div>
      <p className="mt-2 text-gray-300">MushGPT is an AI platform trained on thousands of hand selected research papers and websites to give you correct answer without hallucinations. Magic Myc is a psychedelic chatbot who speaks any language and is an expert on psychedelics, mycology, neuroscience and traditional healing modalities.</p>
      <ProjectBulletList items={[...MUSHGPT_TECH_STACK]} />
    </div>),
    image: "/projects/mushgpt_1.jpg",
    fields: ["AI", "Full-stack", "Mobile"],
    onlineLink: "https://mushgpt.com",
    videoLink: "https://www.youtube.com/watch?v=HrHI3yyaIJg&t=1s",
    galleryImages: [
      {
        src: "/projects/mushgpt_1.jpg",
        alt: "web App",
        description: "web App",
      },
      {
        src: "/projects/mushgpt_2.jpg",
        alt: "Mobile App",
        description: "Mobile App",
      },
    ],
  },
  {
    title: "Shipment System POC",
    description: (
      <div>
        <p className="mt-2 text-gray-300">
          Shipment System POC is an AI dispatch assistant that turns a driver phone call into a structured profile and ranks the best loads by true effective pay per mile.
        </p>
        <ProjectBulletList items={[...ShipmentSystemPoc]} />
      </div>
    ),
    image: "/projects/Cinesis/Screenshot_1.jpg",
    fields: ["AI", "Full-stack"],
    onlineLink: "https://cinesis-good-fit.vercel.app/",
    sourceCodeLink: "https://github.com/ChangDreamDev/Shipment-System-POC",
    galleryImages: [
      { src: "/projects/Cinesis/Screenshot_1.jpg", alt: "Shipment System POC" },
      { src: "/projects/Cinesis/Screenshot_2.jpg", alt: "Shipment System POC" },
      { src: "/projects/Cinesis/Screenshot_3.jpg", alt: "Shipment System POC" },
      { src: "/projects/Cinesis/Screenshot_4.jpg", alt: "Shipment System POC" },
    ],
  },
  {
    title: "Aphinity - 1:1 Introductions",
    description:
      "Developed Aphinity, a production-ready mobile application available on Google Play. Led the full development lifecycle including product architecture, UI/UX design, frontend and backend implementation, API integration, and deployment. Built with a focus on performance, scalability, and reliability to deliver a smooth and engaging user experience.",
    image: "/projects/7.png",
    fields: ["Mobile", "Full-stack"],
    onlineLink:
      "https://play.google.com/store/apps/details?id=com.aphinity.aphinity",
    galleryImages: [
      {
        src: "/projects/7.png",
        alt: "Aphinity - 1:1 Introductions",
        description: "Aphinity - 1:1 Introductions",
      },
    ],
  },
  {
    title: "ADCO Company Website",
    description:
      "Designed and developed a full-scale web solution for ADCO, covering UI/UX design, frontend and backend development, API integration, and seamless deployment. Built for performance, scalability, and security to deliver a smooth user experience.",
    image: "/projects/1.png",
    fields: ["Web", "Full-stack"],
    // onlineLink: "https://brandenforcers.com/",
  },
  {
    title: "Children Learning Platform",
    description:
      "Designed and developed a complete e-learning platform, including UI/UX design, full-stack development, and deployment. Built for an engaging and interactive user experience, ensuring seamless functionality and scalability.",
    image: "/projects/5.png",
    fields: ["Web", "E-learning", "Full-stack"],
    // onlineLink: "https://example.com",
  },
  {
    title: "Discord Bot Development",
    description:
      "Developed a powerful Discord bot with seamless API integration, custom commands, and automation. Built a full-featured UI with frontend and backend development for an intuitive and efficient user experience.",
    image: "/projects/6.png",
    fields: ["Bot", "Automation"],
    // onlineLink: "https://fullstackdev7dennis.vercel.app",
  },
  {
    title: "Casino Betting Platform",
    description:
      "Developed a secure and scalable casino betting site with full-stack development, seamless API integration, and OAuth for secure authentication. Built for speed, reliability, and an engaging user experience.",
    image: "/projects/2.png",
    fields: ["Web", "Full-stack"],
    // onlineLink: "https://example.com",
  },
  {
    title: "Expertise & Development",
    description:
      "Experienced in building websites and business applications with a focus on scalability, performance, and security. Skilled in full-stack development, writing clean, efficient code for both frontend and backend. Actively involved in software design, testing, and debugging to ensure seamless functionality and reliability.",
    image: "/projects/3.png",
    fields: ["Web", "Full-stack"],
    // onlineLink: "https://fullstackdev7dennis.vercel.app",
  },
  {
    title: "SolView Platform",
    description:
      "A decentralized platform enabling users to buy, sell, and stake SolView Solana tokens. Built with a React-TradingView widget for seamless trading. Staking rewards are calculated using APY, reflecting projected annual earnings based on compounding intervals. Integrated a launchpad smart contract, allowing users to securely purchase tokens during the launch phase.",
    image: "/projects/4.png",
    fields: ["Web3", "Web"],
    // onlineLink: "https://fullstackdev7dennis.vercel.app",
  },
] as const;

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const SOCIALS = [
  {
    name: "CV",
    icon: FaFilePdf,
    link: "https://drive.google.com/file/d/1DEJGy-lLrWixKxIBQM6q-EROaSIFQrv_/view?usp=sharing",
  },
  // {
  //   name: "Telegram",
  //   icon: FaTelegram,
  //   link: "https://t.me/ok0315",
  // },
  // {
  //   name: "Microsoft Teams",
  //   icon: FaMicrosoft,
  //   link: "",
  // },
  // {
  //   name: "Discord",
  //   icon: RxGithubLogo,
  //   link: "",
  // },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Telegram",
        icon: FaTelegram,
        link: "https://t.me/ok0315",
      },
      // {
      //   name: "Discord",
      //   icon: FaDiscord,
      //   link: ""
      // },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/ChangDreamDev",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/ChangDreamDev/ChangDreamDev",
};
