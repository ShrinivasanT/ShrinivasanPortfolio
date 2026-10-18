"use client";

import { useRef, useState } from "react";
import { I } from "./Icons";
import { SECTIONS } from "./engine";
import { ROUTER } from "@/data/router";

const SUGGEST = ["projects", "skills", "experience", "contact"].map((k) => SECTIONS.find((x) => x.key === k));

export default function Composer({ inputRef, onAsk, onSection, mobile }) {
  const [value, setValue] = useState("");
  const formRef = useRef(null);

  const grow = () => {
    const q = inputRef.current;
    q.style.height = "auto";
    q.style.height = Math.min(q.scrollHeight, 180) + "px";
  };

  return (
    <div className="composer-wrap">
      <form
        className="composer"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const v = value;
          setValue("");
          inputRef.current.value = "";
          grow();
          onAsk(v);
        }}
      >
        <label htmlFor="q" className="sr" hidden>Ask a question</label>
        <textarea
          id="q"
          ref={inputRef}
          rows={1}
          placeholder={mobile ? "Ask me anything…" : "Ask me anything, e.g. “What projects have you done?”"}
          value={value}
          maxLength={ROUTER.maxChars}
          onChange={(e) => { setValue(e.target.value); grow(); }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              formRef.current.requestSubmit();
            }
          }}
        />
        <div className="composer-row">
          <span className="chip-model">shri-portfolio · v1</span>
          <span className={`chip-count${value.length >= ROUTER.maxChars * 0.9 ? " near" : ""}`} aria-live="polite">
            {value.length} / {ROUTER.maxChars}
          </span>
          <button type="submit" className="send" aria-label="Send" disabled={!value.trim()}>{I.arrow}</button>
        </div>
      </form>
      <div className="suggest" style={{ maxWidth: 780, margin: "14px auto 0" }}>
        {SUGGEST.map((s, i) => (
          <button key={s.key} style={{ "--i": i }} onClick={() => onSection(s)}>{I[s.icon]}{s.prompt}</button>
        ))}
      </div>
      <div className="fineprint">Answers come from my portfolio data, not a live model.</div>
    </div>
  );
}
