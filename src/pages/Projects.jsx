// File: src/pages/Projects.jsx
import React, { useState } from "react";
import Modal from "../components/Modal";

const projects = [
  {
    title: "Pontem Wallet",
    image: "/images/pontem-wallet.png",
    link: "https://pontem.network/wallet",
    github: "https://github.com/pontem-network/pontem-wallet-extension",
    tech: ["React", "TypeScript", "Tailwind", "Web3"],
    description: "A secure browser extension wallet for Aptos, enabling token storage, transaction signing, and dApp interaction."
  },
  {
    title: "LiquidSwap",
    image: "/images/liquidswap.png",
    link: "https://app.liquidswap.com",
    github: null,
    tech: ["React", "Aptos", "Blockchain", "DEX"],
    description: "The first DEX on Aptos, supporting AMM-based swaps with a sleek UI and custom Aptos SDK integration."
  },
  {
    title: "Wing eCommerce",
    image: "/images/wing-ecommerce.png",
    link: "https://wing.com",
    github: null,
    tech: ["Next.js", "React", "Tailwind", "SSR"],
    description: "A modern eCommerce platform built with server-side rendering, dynamic product onboarding, and tailored checkout flows."
  }
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-gray-300 dark:border-gray-700 py-12 px-4">
      <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-600">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded cursor-pointer hover:opacity-80"
                onClick={() => setSelectedIndex(index)}
              />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex gap-4 text-sm">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Site
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-gray-700 dark:text-gray-300">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <Modal
          projects={projects}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
};

export default Projects;