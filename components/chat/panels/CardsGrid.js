import WidgetBox from "./WidgetBox";

export default function CardsGrid({ title, src }) {
  return (
    <WidgetBox title={title} count={`${src.items.length} entries`} sample={src.sample}>
      <div className="wbody">
        <div className="cards2">
          {src.items.map((x) => (
            <div key={x.title} className="ecard">
              <span className="kind">{x.kind}</span>
              <b>{x.title}</b>
              <span>{x.org}</span>
              {x.note ? <span>{x.note}</span> : null}
              {x.when ? <span className="when">{x.when}</span> : null}
            </div>
          ))}
        </div>
      </div>
    </WidgetBox>
  );
}
