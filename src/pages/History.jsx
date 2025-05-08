import React from "react";

const experiences = [
  {
    title: "Lido Finance",
    period: "Oct 2024 – Present",
    role: "Senior Full-stack Developer",
    description:
      "Focused on frontend development and Web3 integration. Built and maintained React-based interfaces for Ethereum staking dApps. Integrated Ethers.js and Web3.js for blockchain functionality, ensuring secure and performant interactions with smart contracts."
  },
  {
    title: "Pontem Network",
    period: "Jun 2022 – Apr 2024",
    role: "Senior Full-stack Engineer / Tech Lead",
    description:
      "Architected and led the development of Web3 products on the Aptos blockchain, including Pontem Wallet, LiquidSwap (DEX), and PontemAI. Engineered a backend powered by LangchainJS and vector databases for AI chat flows. Oversaw technical hiring, introduced modular codebases, and led cross-functional planning between product and engineering teams."
  },
  {
    title: "SoTrusty",
    period: "Sep 2021 – Jun 2022",
    role: "Senior Frontend Developer",
    description:
      "Developed and maintained a high-performance Angular-based eCommerce platform. Led the UI revamp using mobile-first design principles and modern testing strategies. Upgraded legacy code from Angular v6 to v12, increasing maintainability and performance."
  },
  {
    title: "Wing",
    period: "Jan 2020 – May 2022",
    role: "Frontend Developer",
    description:
      "Created seamless onboarding experiences and eCommerce storefronts using React and Next.js with SSR and SPA techniques. Built reusable components and integrated analytics to optimize customer journey and business intelligence."
  },
  {
    title: "Leviossa",
    period: "Sep 2019 – Apr 2021",
    role: "Team Manager / Tech Lead",
    description:
      "Managed a growing JavaScript development team and mentored junior engineers. Designed development processes, implemented Agile ceremonies, and enforced coding standards. Directed architecture decisions and tech stack selection across several products."
  },
  {
    title: "Company Group 'DUNICE'",
    period: "Oct 2016 – Sep 2019",
    role: "Web Software Developer",
    description:
      "Worked across diverse domains, developing booking systems, logistics integrations, community platforms, and health apps. Delivered features such as dynamic calendars, Stripe payments, real-time chat, geolocation services, and Google Maps integrations."
  },
  {
    title: "Freelancer",
    period: "May 2013 – Oct 2016",
    role: "Web Developer",
    description:
      "Delivered full-stack applications and landing pages for global clients. Specialized in fast-loading responsive sites and refactored existing codebases to improve performance and SEO. Built strong communication and remote collaboration skills."
  }
];

const education = [
  {
    title: "Software Development Academy - Romania",
    period: "2012 – 2013",
    role: "Web Development Program",
    description:
      "Completed an intensive web development bootcamp focused on full-stack JavaScript, responsive UI, and real-world project development with Agile teams."
  },
  {
    title: "National University of Science and Technology POLITEHNICA Bucharest",
    period: "2007 – 2012",
    role: "Automation and Control",
    description:
      "Studied industrial automation systems, control theory, and real-time processing. Built a strong foundation in engineering problem-solving and system design."
  }
];

const History = () => (
  <section id="history" className="scroll-mt-24 border-t border-gray-300 dark:border-gray-700 py-12">
    <h3 className="text-2xl font-semibold mb-6 text-center">📜 History</h3>
    <div className="relative flex flex-col items-center">
      <div className="absolute w-1 bg-gray-400 dark:bg-gray-600 h-full left-1/2 transform -translate-x-1/2"></div>
      {[...experiences, ...education].map((item, index) => (
        <div
          key={index}
          className={`mb-10 w-full md:w-1/2 px-4 relative ${index % 2 === 0 ? "md:self-start" : "md:self-end"}`}
        >
          <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow">{item.period}</span>
            <h4 className="text-lg font-bold">{item.title}</h4>
            {item.role && <p className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-1">{item.role}</p>}
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default History;