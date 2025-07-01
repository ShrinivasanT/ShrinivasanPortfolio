"use client";

import { useRef } from "react";

export default function SpotlightHeading() {
  const headingRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top } = headingRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    headingRef.current.style.setProperty("--x", `${x}px`);
    headingRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={headingRef}
      onMouseMove={handleMouseMove}
      className="relative group inline-block overflow-hidden"
    >
      <h1 className="animate-in fade-in slide-in-from-bottom-5 duration-700 text-5xl sm:text-8xl font-extrabold mb-4 text-center dark:bg-white text-transparent bg-clip-text bg-black spotlight-heading cursor-none">
        Welcome
      </h1>
    </div>
  );
}
