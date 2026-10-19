import { P } from "@/data/portfolio";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="03" title="Experience">
      <div className="tl lp-tl">
        {P.experience.items.map((x, i) => (
          <div key={i} className={`tl-item${x.current ? " current" : ""}`}>
            <div className="tl-dot"></div>
            <div className="tl-main">
              <div className="tl-top">
                <b>{x.role}</b>
                {x.when ? <span className="when">{x.when}</span> : null}
              </div>
              <div className="tl-org">{x.org}</div>
              {x.points ? (
                <div className="tl-more"><ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
