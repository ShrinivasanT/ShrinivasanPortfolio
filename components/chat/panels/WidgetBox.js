export default function WidgetBox({ title, count, sample, children }) {
  return (
    <div className="wbox">
      <div className="whead">
        <h3>{title}</h3>
        {count ? <span className="count">{count}</span> : null}
        <span className="grow"></span>
        {sample ? <span className="sample" title="Placeholder content to replace">sample data</span> : null}
      </div>
      {children}
    </div>
  );
}
