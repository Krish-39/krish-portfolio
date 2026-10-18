"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/src/data/projects";

export function EngineeringMap({ projects }: { projects: Project[] }) {
  const featuredProjects = useMemo(() => {
    const featured = projects.filter((project) => project.featured);
    return featured.length ? featured : projects;
  }, [projects]);
  const [activeId, setActiveId] = useState(featuredProjects[0]?.id ?? "");
  const activeProject = featuredProjects.find((project) => project.id === activeId) ?? featuredProjects[0];

  const handleExplore = () => {
    if (!activeProject) return;
    document.getElementById(activeProject.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  if (!activeProject) return null;

  return (
    <div className="hero__visual">
      <section className="project-radar" aria-label="Interactive project spotlight">
        <div className="project-radar__topline">
          <span className="project-radar__eyebrow"><i aria-hidden="true" /> ENGINEERING FIELD NOTES</span>
          <span className="project-radar__counter">{String(featuredProjects.findIndex((project) => project.id === activeProject.id) + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}</span>
        </div>
        <div className="project-radar__intro">
          <p>Pick a project. See how I think.</p>
          <span>Problem → approach → technology</span>
        </div>
        <div className="project-radar__body">
          <nav className="project-radar__index" aria-label="Choose a project">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={`project-radar__item ${activeProject.id === project.id ? "is-active" : ""}`}
                onClick={() => setActiveId(project.id)}
                aria-pressed={activeProject.id === project.id}
              >
                <span className="project-radar__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-radar__item-copy">
                  <strong>{project.title}</strong>
                  <small>{project.filterGroup}</small>
                </span>
                <span className="project-radar__arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </nav>
          <article className="project-radar__case" aria-live="polite">
            <div className="project-radar__case-top">
              <span>NOW IN FOCUS</span>
              <span className="project-radar__category">{activeProject.filterGroup}</span>
            </div>
            <h3>{activeProject.title}</h3>
            <p className="project-radar__subtitle">{activeProject.category}</p>
            <div className="project-radar__insight">
              <div>
                <span>THE CHALLENGE</span>
                <p>{activeProject.objective}</p>
              </div>
              <div>
                <span>MY APPROACH</span>
                <p>{activeProject.contribution}</p>
              </div>
            </div>
            <div className="project-radar__stack" aria-label="Technologies used">
              {activeProject.technologies.slice(0, 5).map((technology) => (
                <span key={`${activeProject.id}-${technology}`}>{technology}</span>
              ))}
            </div>
            <button type="button" className="project-radar__cta" onClick={handleExplore}>
              Explore this build <span aria-hidden="true">↓</span>
            </button>
          </article>
        </div>
        <div className="project-radar__footer">
          <span>BUILT THROUGH CURIOSITY, DEBUGGED WITH COFFEE</span>
          <span aria-hidden="true">✳</span>
        </div>
      </section>
    </div>
  );
}
