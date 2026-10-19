"use client";

import { useCallback, useEffect, useState } from "react";

const isDark = () => {
  const root = document.documentElement;
  return root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
};

// Light/dark toggle shared by every page. The saved choice is applied before
// first paint by the script in app/layout.js.
export function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(isDark()), []);
  const toggle = useCallback(() => {
    const root = document.documentElement;
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("shri-theme", root.dataset.theme); } catch {}
    setDark(isDark());
  }, []);
  return [dark, toggle];
}
