import Link from "next/link";
import { P } from "@/data/portfolio";
import { I } from "../chat/Icons";

export default function Hero() {
  const skills = P.skills.reduce((n, g) => n + g.items.length, 0);
  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero-text">
        <span className="lp-eyebrow" style={{ "--i": 0 }}><i></i>{P.role} · {P.location}</span>
        <h1 style={{ "--i": 1 }}>{P.name}</h1>
        <p className="lp-bio" style={{ "--i": 2 }}>{P.bio}</p>
        <div className="btn-row lp-cta" style={{ "--i": 3 }}>
          <Link className="btn primary" href="/playground">{I.chat}Open playground</Link>
          <a className="btn" href="#contact">{I.mail}Get in touch</a>
          <a className="btn" href="/ShriResume.pdf" target="_blank" rel="noopener">Resume {I.ext}</a>
        </div>
        <div className="stats" style={{ "--i": 4 }}>
          <div><b>{P.projects.length}</b><span>projects</span></div>
          <div><b>{skills}</b><span>skills</span></div>
          <div><b>{P.experience.items.length}</b><span>roles</span></div>
        </div>
      </div>
    </section>
  );
}
