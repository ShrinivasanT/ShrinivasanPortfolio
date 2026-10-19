import Link from "next/link";
import { I } from "./Icons";
import { SECTIONS } from "./engine";
import { P } from "@/data/portfolio";

export default function Sidebar({ active, history, dark, onSection, onRecent, onNewChat, onCollapse, onTheme }) {
  return (
    <aside className="side" id="side" aria-label="Portfolio sections">
      <div className="side-top">
        <Link className="brand" href="/" title="Back to portfolio"><span className="brand-mark">S</span>shri.ai</Link>
        <button className="icon-btn" aria-label="Close sidebar" onClick={onCollapse}>{I.panel}</button>
      </div>
      <button className="new-chat" onClick={onNewChat}>{I.plus}New chat</button>
      <div className="side-label">Explore</div>
      <nav className="nav">
        {SECTIONS.map((s, i) => (
          <button key={s.key} className={active === s.key ? "active" : undefined} style={{ "--i": i }} onClick={() => onSection(s)}>
            {I[s.icon]}<span>{s.label}</span>
          </button>
        ))}
      </nav>
      <div className="recents">
        <div className="side-label">Recents</div>
        <div>
          {history.length ? (
            history.slice().reverse().slice(0, 12).map((t, i) => (
              <button key={i} title={t} onClick={() => onRecent(t)}>{t}</button>
            ))
          ) : (
            <div className="empty">Your questions will show up here.</div>
          )}
        </div>
      </div>
      <div className="profile">
        <div className="avatar">ST</div>
        <div className="profile-meta"><b>{P.name}</b><span>{P.role} · {P.location.split(",")[0]}</span></div>
        <button className="icon-btn" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} onClick={onTheme}>
          {dark ? I.sun : I.moon}
        </button>
      </div>
    </aside>
  );
}
