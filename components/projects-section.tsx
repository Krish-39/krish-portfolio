"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { projects, type Project } from "@/src/data/projects";

const filterOptions = ["All", "Full-Stack", "AI / ML", "Mobile", "Data", "Security", "Cloud"] as const;
type FilterValue = (typeof filterOptions)[number];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.filterGroup === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="PORTFOLIO" title="Featured Projects" flush />

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
            >
              <ProjectCard project={project} featured onSelect={setSelectedProject} />
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
              type="button"
              className="project-modal__close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              Close
            </button>

            <p className="eyebrow">PROJECT</p>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-bold">
              {selectedProject.title}
            </h3>
            <p className="project-modal__summary">{selectedProject.description}</p>

            <div className="project-modal__grid">
              <div>
                <h4>Problem / objective</h4>
                <p>{selectedProject.objective}</p>
              </div>
              <div>
                <h4>Architecture or approach</h4>
                <p>{selectedProject.approach}</p>
              </div>
              <div>
                <h4>What I learned</h4>
                <p>{selectedProject.learning}</p>
              </div>
              <div>
                <h4>Why it matters</h4>
                <p>{selectedProject.significance}</p>
              </div>
            </div>

            <div
              className="project-modal__stack"
              aria-label={`${selectedProject.title} technologies`}
            >
              {selectedProject.technologies.map((tech) => (
                <span key={`${selectedProject.id}-${tech}`}>{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
