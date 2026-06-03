"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { useMemo, useState } from "react";

export const Projects = () => {
  const PAGE_SIZE = 3;
  const [activeField, setActiveField] = useState<string>("All");
  const [page, setPage] = useState(1);

  const fields = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => p.fields.forEach((f) => set.add(f)));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    if (activeField === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.fields.includes(activeField));
  }, [activeField]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const pageItems = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center pb-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="w-full px-10">
        <div className="flex flex-wrap items-center justify-center gap-3 pb-10">
          {fields.map((field) => {
            const isActive = field === activeField;
            return (
              <button
                key={field}
                type="button"
                onClick={() => {
                  setActiveField(field);
                  setPage(1);
                }}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-purple-400 bg-purple-500/20 text-white"
                    : "border-white/10 bg-white/5 text-gray-200 hover:bg-white/10",
                ].join(" ")}
              >
                {field}
              </button>
            );
          })}
        </div>
      </div>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {pageItems.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            onlineLink={project.onlineLink}
            sourceCodeLink={project.sourceCodeLink}
            videoLink={project.videoLink}
            galleryImages={project.galleryImages}
          />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={safePage <= 1}
          className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 disabled:opacity-40 hover:bg-white/10"
        >
          Prev
        </button>
        <p className="text-sm text-gray-300">
          Page {safePage} / {pageCount}
        </p>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          disabled={safePage >= pageCount}
          className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 disabled:opacity-40 hover:bg-white/10"
        >
          Next
        </button>
      </div>
      
    </section>
  );
};
