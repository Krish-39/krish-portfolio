import type { Project } from "@/src/data/projects";

function getDiagram(project: Project) {
  switch (project.id) {
    case "nextfilm":
      return ["Preferences", "Recommendation", "TMDb / Gemini", "Results"];
    case "jaatland":
      return ["Products", "Cart", "Checkout", "Stripe"];
    case "stockmart":
      return ["Market data", "Insights", "Charts", "Decisions"];
    case "heart-attack-risk-prediction":
      return ["Health data", "Model", "Risk score", "Evaluation"];
    case "secure-network-order-system":
      return ["Request", "Encryption", "Verification", "Secure order"];
    case "cloud-infrastructure-deployment":
      return ["Compute", "Network", "Data", "Scale"];
    default:
      return ["Build", "Test", "Ship", "Iterate"];
  }
}

export function ProjectCard({
  project,
  featured = false,
  onSelect,
}: {
  project: Project;
  featured?: boolean;
  onSelect?: (project: Project) => void;
}) {
  const diagram = getDiagram(project);

  return (
    <article
      id={project.id}
      className={`project-card h-full${featured ? " project-card--featured" : ""}`}
      aria-label={project.title}
    >
      <div className="project-card__topbar">
        <span className="project-card__filter">{project.filterGroup}</span>
        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-card__diagram" aria-hidden="true">
          {diagram.map((step, index) => (
            <span key={`${project.id}-${step}`} className="project-card__diagram-step">
              {step}
              {index < diagram.length - 1 ? <span className="project-card__diagram-arrow">→</span> : null}
            </span>
          ))}
        </div>

        <div className="project-card__focus">
          <span className="project-card__focus-label">Engineering focus</span>
          <p>{project.contribution}</p>
        </div>

        <div className="project-card__tech" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <span key={`${project.title}-${tech}`}>{tech}</span>
          ))}
        </div>

        <div className="project-card__actions">
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-small"
            >
              View project
            </a>
          ) : (
            <button type="button" className="btn btn-secondary btn-small" onClick={() => onSelect?.(project)}>
              View project
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
