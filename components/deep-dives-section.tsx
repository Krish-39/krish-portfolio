import { SectionHeader } from "@/components/section-header";
import { projects } from "@/src/data/projects";

const parts = [
  { key: "problem", label: "The problem" },
  { key: "built", label: "What I built" },
  { key: "tradeoff", label: "The tradeoff" },
  { key: "next", label: "What I’d do next" },
] as const;

// Native <details> keeps this zero-JS and fully keyboard accessible.
const DEEP_DIVE_IDS = ["nextfilm", "jaatland", "heart-attack-risk-prediction", "secure-network-order-system"];

export function DeepDivesSection() {
  const entries = DEEP_DIVE_IDS.map((id) => projects.find((project) => project.id === id)).filter(
    (project) => project !== undefined,
  );

  return (
    <section id="read" className="section-padding bg-primary">
      <div className="container-custom">
        <SectionHeader index="04" eyebrow="Project deep-dives" title="Read" />

        <div className="read-list">
          {entries.map((project, index) => (
            <details key={project.id} className="read-entry" open={index === 0}>
              <summary>
                <span className="read-entry__index">{String(index + 1).padStart(2, "0")}</span>
                <span className="read-entry__head">
                  <span className="read-entry__meta">{project.category}</span>
                  <span className="read-entry__title">{project.title}</span>
                  <span className="read-entry__hook">{project.deepDive.hook}</span>
                </span>
                <span className="read-entry__toggle" aria-hidden="true" />
              </summary>

              <div className="read-entry__body">
                {parts.map((part) => (
                  <div key={part.key} className="read-entry__part">
                    <h4>{part.label}</h4>
                    <p>{project.deepDive[part.key]}</p>
                  </div>
                ))}
                <ul className="read-entry__stack" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
