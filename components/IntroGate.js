"use client";

import { useEffect, useState } from "react";
import Intro from "./Intro";

// Plays the intro once per browser session; skipped for reduced motion.
export default function IntroGate() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const seen = document.documentElement.dataset.introSeen !== undefined;
    if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) setShow(false);
    else try { sessionStorage.setItem("shri-intro", "1"); } catch {}
  }, []);
  return show ? <Intro onDone={() => setShow(false)} /> : null;
}
