"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { education, educationHighlights, skillGroups } from "@/src/data/profile";

export function EducationSection() {
  return (
    <section id="education" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeader eyebrow="BACKGROUND" title="Education & Academic Focus" />

        <div className="education-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
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
          </motion.div>

          <motion.div
            className="panel"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <h3 className="panel__title">Coursework, Focus & Languages</h3>
            <div className="education-highlights">
              {educationHighlights.map((group) => (
                <div className="education-highlights__group" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
              <div className="education-highlights__group">
                <h4>Languages</h4>
                <ul>
                  {skillGroups.find((group) => group.title === "Languages")?.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
