"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { R, SECTIONS, detect } from "./engine";
import Sidebar from "./Sidebar";
import Composer from "./Composer";
import { BotMessage, UserMessage } from "./Message";
import { I } from "./Icons";
import { useTheme } from "../useTheme";

const MOBILE = "(max-width:860px)";

// Asks the Jev router which section a typed question belongs to.
// Resolves to null when Jev is unavailable, so the caller can fall back to detect().
async function classify(text) {
  try {
    const res = await fetch("/api/classify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text }) });
    const { intent } = await res.json();
    return intent ? { intent } : null;
  } catch {
    return null;
  }
}

export default function ChatApp() {
  const [thread, setThread] = useState([]);
  const [history, setHistory] = useState([]);
  const [chatting, setChatting] = useState(false);
  const [title, setTitle] = useState("Portfolio");
  const [active, setActive] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [greet, setGreet] = useState("Hi, I'm Shri.");
  const [toastState, setToastState] = useState({ msg: "", show: false });
  const [dark, toggleTheme] = useTheme();

  const busy = useRef(false);
  const historyRef = useRef([]);
  const nextId = useRef(0);
  const reduce = useRef(false);
  const scroller = useRef(null);
  const inputRef = useRef(null);
  const toastTimer = useRef(null);

  const sleep = (ms) => new Promise((r) => setTimeout(r, reduce.current ? 0 : ms));
  const scrollDown = () => {
    const s = scroller.current;
    s.scrollTo({ top: s.scrollHeight, behavior: reduce.current ? "auto" : "smooth" });
  };
  const closeDrawer = () => setOpen(false);

  const toast = useCallback((m) => {
    setToastState({ msg: m, show: true });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastState((t) => ({ ...t, show: false })), 1800);
  }, []);

  const askRef = useRef(null);
  // typed: the visitor wrote this question, so Jev routes it; clicks use forced/detect().
  askRef.current = async (raw, forced, typed = false) => {
    const text = raw.trim();
    if (!text || busy.current) return;
    busy.current = true;
    setChatting(true);
    const routing = !forced && typed ? classify(text) : null;
    let o = forced || (routing ? null : detect(text));
    setActive(o ? (o.intent === "project" ? "projects" : o.intent) : null);
    if (historyRef.current.length === 0) setTitle(text);
    historyRef.current = [...historyRef.current, text];
    setHistory(historyRef.current);

    const uid = nextId.current++;
    const bid = nextId.current++;
    const updateBot = (patch) => setThread((t) => t.map((m) => (m.id === bid ? { ...m, ...patch } : m)));
    flushSync(() => setThread((t) => [...t, { id: uid, role: "user", text }, { id: bid, role: "bot", phase: "thinking" }]));
    scrollDown();
    if (routing) {
      const [jev] = await Promise.all([routing, sleep(550)]);
      o = jev || detect(text);
      setActive(o.intent === "project" ? "projects" : o.intent);
    } else {
      await sleep(550);
    }

    const reply = (R[o.intent] || R.unknown)(o);
    const plain = reply.text.replace(/\*\*/g, "");
    if (!reduce.current) {
      updateBot({ phase: "stream", reply, shown: 0 });
      for (let i = 1; i <= plain.length; i += 2) {
        updateBot({ shown: i });
        await sleep(12);
      }
    }
    flushSync(() => updateBot({ phase: "done", reply }));
    scrollDown();
    busy.current = false;
    inputRef.current?.focus({ preventScroll: true });
  };
  const ask = useCallback((text, forced, typed) => askRef.current(text, forced, typed), []);

  const onSection = (s) => {
    ask(s.prompt, { intent: s.key });
    closeDrawer();
  };

  const newChat = () => {
    if (busy.current) return;
    setThread([]);
    historyRef.current = [];
    setHistory([]);
    setChatting(false);
    setTitle("Portfolio");
    setActive(null);
    closeDrawer();
    inputRef.current?.focus();
  };

  useEffect(() => {
    reduce.current = matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* greeting by time */
    const h = new Date().getHours();
    setGreet((h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening") + ", I'm Shri.");

    const mq = matchMedia(MOBILE);
    const sync = () => setMobile(mq.matches);
    sync();
    addEventListener("resize", sync);

    /* phone keyboard: fit the app to the visible area and keep the latest message in view */
    const vv = window.visualViewport;
    const fit = () => {
      const root = document.documentElement;
      const covered = innerHeight - vv.height > 1;
      if (covered) root.style.setProperty("--app-h", `calc(${vv.height}px - env(safe-area-inset-top, 0px))`);
      else root.style.removeProperty("--app-h");
      if (covered) window.scrollTo(0, 0);
      if (document.activeElement === inputRef.current) {
        const s = scroller.current;
        s.scrollTo({ top: s.scrollHeight, behavior: "auto" });
      }
    };
    vv?.addEventListener("resize", fit);

    /* deep links: #projects, #skills, ... */
    const hk = location.hash.slice(1);
    const hs = SECTIONS.find((s) => s.key === hk);
    if (hs) setTimeout(() => ask(hs.prompt, { intent: hs.key }), 0);

    return () => {
      removeEventListener("resize", sync);
      vv?.removeEventListener("resize", fit);
    };
  }, [ask]);

  const appClass = ["app", chatting && "chatting", collapsed && "collapsed", open && "open"].filter(Boolean).join(" ");
  const ctx = { ask, toast, reduce: reduce.current };

  return (
    <>
      <div className={appClass} id="app">
        <Sidebar
          active={active}
          history={history}
          dark={dark}
          onSection={onSection}
          onRecent={(t) => { ask(t, null, true); closeDrawer(); }}
          onNewChat={newChat}
          onCollapse={() => (matchMedia(MOBILE).matches ? closeDrawer() : setCollapsed(true))}
          onTheme={toggleTheme}
        />
        <div className="scrim" onClick={closeDrawer}></div>

        <main className="main">
          <div className="topbar">
            <button
              className="icon-btn"
              aria-label="Open sidebar"
              style={{ visibility: mobile || collapsed ? "visible" : "hidden" }}
              onClick={() => (matchMedia(MOBILE).matches ? setOpen(true) : setCollapsed((c) => !c))}
            >
              {I.panel}
            </button>
            <div className="title">{title}</div>
            <div className="spacer"></div>
          </div>

          <section className="hero">
            <h1><span className="brand-mark">S</span><span>{greet}</span></h1>
            <p>This portfolio works like a chat. Ask about my projects, skills or background, or pick a section from the sidebar. Every answer is an interactive panel.</p>
          </section>

          <div className="scroll" ref={scroller}>
            <div className="thread">
              {thread.map((m) =>
                m.role === "user" ? (
                  <UserMessage key={m.id} text={m.text} />
                ) : (
                  <BotMessage key={m.id} phase={m.phase} reply={m.reply} shown={m.shown} ctx={ctx} onFollow={(x) => ask(x)} />
                )
              )}
            </div>
          </div>

          <Composer inputRef={inputRef} mobile={mobile} onAsk={(v) => ask(v, null, true)} onSection={(s) => ask(s.prompt, { intent: s.key })} />
        </main>
      </div>
      <div className={`toast${toastState.show ? " show" : ""}`} role="status">{toastState.msg}</div>
    </>
  );
}
