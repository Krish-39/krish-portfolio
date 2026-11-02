import { SectionHeader } from "@/components/section-header";
import { skillGroups } from "@/src/data/profile";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeader index="03" eyebrow="Toolkit" title="Skills, Strengths & Languages" />

        <dl className="spec-table">
          {skillGroups.map((group, index) => (
            <div key={group.title} className="spec-table__row">
              <dt>
                <span className="spec-table__index">{String(index + 1).padStart(2, "0")}</span>
                {group.title}
              </dt>
              <dd>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
