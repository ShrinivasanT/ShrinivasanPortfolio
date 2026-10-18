"use client";

import { P } from "@/data/portfolio";
import { allTags } from "../tags";
import WidgetBox from "./WidgetBox";

// The project tag a skill stands for: the full name, the name before "(...)", or the text inside it.
function tagFor(n) {
  const base = n.replace(/\s*\(.*\)$/, "");
  const abbr = /\(([^)]+)\)$/.exec(n)?.[1];
  return allTags.find((t) => t === n || t === base || t === abbr);
}

export default function SkillsPanel({ ask, toast }) {
  const pick = (n) => {
    const tag = tagFor(n);
    if (tag) ask(`Show projects using ${tag}`, { intent: "projects", tag });
    else toast(`No listed project uses ${n.replace(/\s*\(.*\)$/, "")} yet`);
  };
  return (
    <WidgetBox title="Skills" count={`${P.skills.reduce((n, g) => n + g.items.length, 0)} skills`}>
      <div className="wbody">
        <div className="sk-groups">
          {P.skills.map((g) => (
            <div key={g.group} className="sk-group">
              <h5>{g.group}</h5>
              <div className="sk-list">
                {g.items.map((n) => (
                  <button key={n} className="sk" onClick={() => pick(n)}>
                    {tagFor(n) ? <i aria-hidden="true"></i> : null}
                    {n}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hint">Skills with a dot have projects you can open.</div>
      </div>
    </WidgetBox>
  );
}
