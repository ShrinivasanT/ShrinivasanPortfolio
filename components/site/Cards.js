export default function Cards({ items }) {
  return (
    <div className="cards2">
      {items.map((x) => (
        <div key={x.title} className="ecard">
          <span className="kind">{x.kind}</span>
          <b>{x.title}</b>
          <span>{x.org}</span>
          {x.note ? <span>{x.note}</span> : null}
          {x.when ? <span className="when">{x.when}</span> : null}
        </div>
      ))}
    </div>
  );
}
