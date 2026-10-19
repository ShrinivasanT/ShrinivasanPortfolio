"use client";

import Link from "next/link";
import { I } from "../chat/Icons";
import { useTheme } from "../useTheme";

const LINKS = [
  ["top", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function SiteHeader() {
  const [dark, toggle] = useTheme();
  return (
    <header className="lp-header">
      <div className="lp-header-in">
        <nav className="lp-nav" aria-label="Sections">
          {LINKS.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="lp-actions">
          <button className="icon-btn" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} onClick={toggle}>
            {dark ? I.sun : I.moon}
          </button>
          <Link className="btn primary" href="/playground">{I.chat}<span className="lp-long">Open playground</span><span className="lp-short">Playground</span></Link>
        </div>
      </div>
    </header>
  );
}
