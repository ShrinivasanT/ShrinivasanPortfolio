"use client";
import React, { useEffect, useRef, useState } from "react";
// Adjust the path if needed

export default function TitleWithUnderline({
  children,
  as = "h2",
  className = "text-3xl sm:text-4xl font-extrabold mb-4 text-center",
}) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 150;
      setIsVisible(inView);
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const Tag = as; // Dynamic heading tag

  return (
    <div ref={ref} className={`title-container ${isVisible ? "scrolles" : ""}`}>
      <Tag className={className}>{children}</Tag>
      <div className="dash justify-center" />
    </div>
  );
}
