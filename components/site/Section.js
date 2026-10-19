export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="lp-section">
      <div className="lp-head">
        <span className="lp-index">{index}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
