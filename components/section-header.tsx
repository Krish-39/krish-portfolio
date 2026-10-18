export function SectionHeader({
  eyebrow,
  title,
  flush = false,
}: {
  eyebrow: string;
  title: string;
  flush?: boolean;
}) {
  return (
    <div className={`section-header${flush ? " section-header--flush" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <span className="section-header__bar" aria-hidden="true" />
    </div>
  );
}
