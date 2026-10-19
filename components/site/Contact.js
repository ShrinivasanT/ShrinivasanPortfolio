"use client";

import { useState } from "react";
import { P } from "@/data/portfolio";
import { I } from "../chat/Icons";
import Section from "./Section";

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const rows = [["Email", P.email], ["Location", P.location]].concat(P.phone ? [["Phone", P.phone]] : []);
  const copy = async (label, v) => {
    try {
      await navigator.clipboard.writeText(v);
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    } catch {}
  };
  return (
    <Section id="contact" index="06" title="Contact">
      <div className="lp-contact">
        <div className="rows">
          {rows.map(([l, v]) => (
            <div key={l} className="crow">
              <span className="lbl">{l}</span>
              <span className="val">{v}</span>
              {l !== "Location" ? (
                <button className="btn" onClick={() => copy(l, v)}>{I.copy}{copied === l ? "Copied" : "Copy"}</button>
              ) : null}
            </div>
          ))}
          <div className="btn-row" style={{ marginTop: 14 }}>
            <a className="btn primary" href={`mailto:${P.email}`}>{I.mail}Write an email</a>
          </div>
        </div>
        <div className="soc">
          {P.socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener">
              <span className="ic">{I[s.icon]}</span>
              <div><b>{s.name}</b><span>{s.handle}</span></div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
