import { P } from "@/data/portfolio";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <div className="lp-skills">
        {P.skills.map((g) => (
          <div key={g.group} className="lp-skill-row">
            <h5>{g.group}<span>{g.items.length}</span></h5>
            <div className="sk-list">
              {g.items.map((n) => <span key={n} className="sk">{n}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
