export function SectionHeader({
  index,
  eyebrow,
  title,
  flush = false,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  flush?: boolean;
}) {
  return (
    <div className={`section-header${flush ? " section-header--flush" : ""}`}>
      <p className="section-header__rule">
        {index ? <span className="section-header__index">{index}</span> : null}
        <span className="eyebrow">{eyebrow}</span>
      </p>
      <h2>{title}</h2>
    </div>
  );
}
