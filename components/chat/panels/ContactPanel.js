"use client";

import { P } from "@/data/portfolio";
import { I } from "../Icons";
import WidgetBox from "./WidgetBox";

export default function ContactPanel({ toast }) {
  const rows = [["Email", P.email], ["Location", P.location]].concat(P.phone ? [["Phone", P.phone]] : []);
  const copy = async (e, v) => {
    const b = e.currentTarget;
    try {
      await navigator.clipboard.writeText(v);
      toast("Copied to clipboard");
    } catch {
      const r = document.createRange();
      r.selectNodeContents(b.previousElementSibling);
      const s = getSelection();
      s.removeAllRanges();
      s.addRange(r);
      toast("Selected — press Ctrl/⌘ + C");
    }
  };
  return (
    <WidgetBox title="Contact">
      <div className="wbody">
        <div className="rows">
          {rows.map(([l, v]) => (
            <div key={l} className="crow">
              <span className="lbl">{l}</span>
              <span className="val">{v}</span>
              {l !== "Location" ? <button className="btn" onClick={(e) => copy(e, v)}>{I.copy}Copy</button> : null}
            </div>
          ))}
        </div>
        <div className="btn-row" style={{ marginTop: 14 }}>
          <a className="btn primary" href={`mailto:${P.email}`}>{I.mail}Write an email</a>
        </div>
      </div>
    </WidgetBox>
  );
}
