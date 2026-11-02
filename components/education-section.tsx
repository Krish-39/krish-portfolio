import { SectionHeader } from "@/components/section-header";
import { education, educationHighlights } from "@/src/data/profile";

export function EducationSection() {
  return (
    <section id="education" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeader index="05" eyebrow="Background" title="Education & Academic Focus" />

        <div className="education-grid">
          <div>
            <div className="timeline">
              {education.map((entry) => (
                <div key={`${entry.institution}-${entry.degree}`} className="timeline__item">
                  <span className="timeline__dot" aria-hidden="true" />
                  <h3 className="timeline__institution">{entry.institution}</h3>
                  <p className="timeline__degree">
                    {entry.degree}
                    {entry.location ? ` — ${entry.location}` : ""}
                  </p>
                  {entry.period ? (
                    <span className="timeline__period">{entry.period}</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <h3 className="panel__title">Coursework & focus</h3>
            <div className="education-highlights">
              {educationHighlights.map((group) => (
                <div className="education-highlights__group" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
