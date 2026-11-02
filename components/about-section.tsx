import { SectionHeader } from "@/components/section-header";
import { about, profile } from "@/src/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionHeader index="01" eyebrow="Who I am" title="About" />

        <div className="about-grid">
          <div className="about-story">
            {about.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="about-availability">
              <span className="availability-dot" aria-hidden="true" />
              Available for a 6+ month internship
            </p>
          </div>

          <aside className="about-panel" aria-label="Interests and focus">
            <div>
              <h3>Interests</h3>
              <ul>
                {about.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Focus areas</h3>
              <ul>
                {about.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="about-panel__meta">
              {about.languages}
              <br />
              {profile.location}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
