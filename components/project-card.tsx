import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/src/data/projects";

export function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index?: number;
  onSelect?: (project: Project) => void;
}) {
  return (
    <article id={project.id} className="project-card" aria-label={project.title}>
      {project.image ? (
        <div className="project-card__shot">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1200}
            height={750}
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      ) : null}

      <div className="project-card__topbar">
        <span className="project-card__meta">
          {index ? <span className="project-card__index">{String(index).padStart(2, "0")}</span> : null}
          <span className="project-card__filter">{project.filterGroup}</span>
        </span>
        <span className="project-card__category">{project.team}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__subtitle">{project.category}</p>
        <p>{project.description}</p>

        <ol className="pipeline" aria-label={`${project.title} data flow`}>
          {project.pipeline.map((step, stepIndex) => (
            <li key={step} style={{ "--i": stepIndex } as CSSProperties}>
              {step}
            </li>
          ))}
        </ol>

        <div className="project-card__focus">
          <span className="project-card__focus-label">What I did</span>
          <p>{project.contribution}</p>
        </div>

        <div className="project-card__tech" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <span key={`${project.id}-${tech}`}>{tech}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <button type="button" className="btn btn-secondary btn-small" onClick={() => onSelect?.(project)}>
            Read case study <span aria-hidden="true">→</span>
          </button>
          {project.liveDemo ? (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-link">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
              Code <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
