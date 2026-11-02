"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { projects, type Project } from "@/src/data/projects";

const caseStudyParts = [
  { key: "problem", label: "The problem" },
  { key: "built", label: "What I built" },
  { key: "tradeoff", label: "The tradeoff" },
  { key: "next", label: "What I’d do next" },
] as const;

const filterOptions = ["All", "Full-Stack", "AI / ML", "Mobile", "Data", "Security", "Cloud"] as const;
type FilterValue = (typeof filterOptions)[number];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // The ⌘K menu opens case studies through this event.
  useEffect(() => {
    const onOpen = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      const project = projects.find((item) => item.id === id);
      if (project) setSelectedProject(project);
    };
    window.addEventListener("open-case-study", onOpen);
    return () => window.removeEventListener("open-case-study", onOpen);
  }, []);

  // Modal behaviour: focus the close button, lock page scroll, close on Escape,
  // and hand focus back to whatever opened it.
  useEffect(() => {
    if (!selectedProject) return;
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.filterGroup === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <SectionHeader index="02" eyebrow="Selected work" title="Featured Projects" flush />

          <div className="filter-row" aria-label="Project filters">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`filter-chip${activeFilter === option ? " is-active" : ""}`}
                onClick={() => setActiveFilter(option)}
                aria-pressed={activeFilter === option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={activeFilter === "All" && index === 0 ? "project-grid__lead" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
            >
              <ProjectCard
                project={project}
                index={projects.indexOf(project) + 1}
                lead={activeFilter === "All" && index === 0}
                onSelect={setSelectedProject}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="project-modal__backdrop"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />
          <motion.div
            className="project-modal__panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="project-modal__close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              Close · Esc
            </button>

            <p className="eyebrow">
              Case study · {selectedProject.team}
            </p>
            <h3 id="project-modal-title" className="project-modal__title">
              {selectedProject.title}
            </h3>
            <p className="project-modal__summary">{selectedProject.description}</p>

            {selectedProject.image ? (
              <div className="project-modal__shot">
                <Image
                  src={selectedProject.image.src}
                  alt={selectedProject.image.alt}
                  width={1200}
                  height={750}
                  sizes="(min-width: 768px) 46rem, 100vw"
                />
              </div>
            ) : null}

            <div className="project-modal__grid">
              {caseStudyParts.map((part) => (
                <div key={part.key}>
                  <h4>{part.label}</h4>
                  <p>{selectedProject.deepDive[part.key]}</p>
                </div>
              ))}
            </div>

            <div
              className="project-modal__stack"
              aria-label={`${selectedProject.title} technologies`}
            >
              {selectedProject.technologies.map((tech) => (
                <span key={`${selectedProject.id}-${tech}`}>{tech}</span>
              ))}
            </div>

            {selectedProject.liveDemo || selectedProject.github ? (
              <div className="project-modal__links">
                {selectedProject.liveDemo ? (
                  <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="nothing-btn nothing-btn--primary">
                    Open live demo <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {selectedProject.github ? (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="nothing-btn">
                    View code on GitHub <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            ) : null}
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
