"use client";

import { useState } from "react";
import { P } from "@/data/portfolio";
import { I } from "../Icons";
import WidgetBox from "./WidgetBox";

export default function ExperiencePanel() {
  const src = P.experience;
  const [open, setOpen] = useState({ 0: true });
  return (
    <WidgetBox title="Experience" count={`${src.items.length} roles`} sample={src.sample}>
      <div className="wbody">
        <div className="tl">
          {src.items.map((x, i) => (
            <div key={i} className={`tl-item${x.current ? " current" : ""}`}>
              <div className="tl-dot"></div>
              <div className="tl-main">
                <div className="tl-top">
                  <b>{x.role}</b>
                  {x.when ? <span className="when">{x.when}</span> : null}
                </div>
                <div className="tl-org">{x.org}</div>
                {x.points ? (
                  <>
                    <button className="tl-toggle" aria-expanded={!!open[i]} onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}>
                      {open[i] ? "Hide" : "Show"} details {I.chev}
                    </button>
                    <div className="tl-more" hidden={!open[i]}>
                      <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </WidgetBox>
  );
}
