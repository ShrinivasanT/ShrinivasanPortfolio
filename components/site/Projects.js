import { P } from "@/data/portfolio";
import { I } from "../chat/Icons";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" index="01" title="Projects">
      <div className="lp-grid">
        {P.projects.map((p) => (
          <article key={p.id} className="pcard lp-card">
            <span className="kind">{p.kind}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <details className="lp-more">
              <summary>Highlights {I.chev}</summary>
              <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </details>
            <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            {p.link ? (
              <a className="lp-link" href={p.link} target="_blank" rel="noopener">View project {I.ext}</a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
