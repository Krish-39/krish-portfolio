import { profile } from "@/src/data/profile";

// "Spec sheet" for Krish, styled like a car brochure. Edit the rows in profile.spec.
export function SpecSheet() {
  return (
    <div className="hero__visual">
      <section className="spec-sheet" aria-label="Spec sheet">
        <header className="spec-sheet__head">
          <span className="eyebrow">Spec sheet</span>
          <span className="spec-sheet__model">{profile.spec.model}</span>
        </header>

        <dl className="spec-sheet__rows">
          {profile.spec.rows.map((row) => (
            <div key={row.label} className="spec-sheet__row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        <footer className="spec-sheet__foot">
          <span>{profile.spec.footerLeft}</span>
          <span>{profile.spec.footerRight}</span>
        </footer>
      </section>
    </div>
  );
}
