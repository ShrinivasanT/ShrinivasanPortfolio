"use client";

import { useEffect, useState } from "react";
import { P } from "@/data/portfolio";

// Full-page intro: logo mark, name written letter by letter, then a wipe up to
// reveal the page. Click or press any key to skip.
export default function Intro({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const skip = () => setLeaving(true);
    addEventListener("keydown", skip);
    return () => removeEventListener("keydown", skip);
  }, []);

  let n = 0;
  return (
    <div
      className={`intro${leaving ? " leaving" : ""}`}
      aria-hidden="true"
      onClick={() => setLeaving(true)}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === "intro-out") onDone();
      }}
    >
      <div className="intro-inner">
        <span className="brand-mark intro-mark">S</span>
        <div className="intro-name">
          {P.name.split(" ").map((w, wi) => (
            <span key={wi} className="intro-word">
              {[...w].map((ch, ci) => (
                <span key={ci} className="intro-ch" style={{ "--i": n++ }}>{ch}</span>
              ))}
            </span>
          ))}
        </div>
        <span className="intro-rule"></span>
        <span className="intro-role">{P.role} · {P.location.split(",")[0]}</span>
      </div>
    </div>
  );
}
