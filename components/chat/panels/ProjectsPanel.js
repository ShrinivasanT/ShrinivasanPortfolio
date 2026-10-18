"use client";

import { useEffect, useRef, useState } from "react";
import { P } from "@/data/portfolio";
import { I } from "../Icons";
import { allTags } from "../tags";
import WidgetBox from "./WidgetBox";

const kindStyle = { fontFamily: "var(--f-mono)", fontSize: "10.5px", letterSpacing: ".07em", textTransform: "uppercase", color: "var(--accent)" };

export default function ProjectsPanel({ tag, openId, ask, reduce }) {
  const [active, setActive] = useState(tag || "All");
  const [open, setOpen] = useState(openId);
  const detailRef = useRef(null);
  const clicked = useRef(false);
  const tags = ["All", ...allTags];
  const list = P.projects.filter((p) => active === "All" || p.tags.includes(active));
  const sel = P.projects.find((p) => p.id === open);

  useEffect(() => {
    if (!clicked.current) return;
    clicked.current = false;
    detailRef.current?.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }, [open, reduce]);

  const toggle = (id) => {
    clicked.current = true;
    setOpen((o) => (o === id ? null : id));
  };

  return (
    <WidgetBox title="Projects" count={`${list.length} of ${P.projects.length}`}>
      <div className="filters" role="group" aria-label="Filter by technology">
        {tags.map((t) => (
          <button key={t} aria-pressed={t === active} onClick={() => setActive(t)}>{t}</button>
        ))}
      </div>
      {list.length ? (
        <div className="pgrid">
          {list.map((p) => (
            <button key={p.id} className="pcard" aria-expanded={p.id === open} onClick={() => toggle(p.id)}>
              <span className="kind">{p.kind}</span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </button>
          ))}
        </div>
      ) : (
        <div className="empty-filter">No projects with that technology yet.</div>
      )}
      {sel ? (
        <div className="pdetail" ref={detailRef}>
          <div>
            <span className="kind" style={kindStyle}>{sel.kind}</span>
            <h4>{sel.title}</h4>
          </div>
          <p style={{ margin: 0 }}>{sel.desc}</p>
          <ul>{sel.points.map((x) => <li key={x}>{x}</li>)}</ul>
          <div className="tags">{sel.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
          <div className="btn-row">
            {sel.link ? (
              <a className="btn primary" href={sel.link} target="_blank" rel="noopener">View project {I.ext}</a>
            ) : null}
            <button className="btn" onClick={() => ask(`Which other projects use ${sel.tags[0]}?`)}>More with {sel.tags[0]}</button>
            <button className="btn" onClick={() => setOpen(null)}>Close</button>
          </div>
        </div>
      ) : null}
    </WidgetBox>
  );
}
