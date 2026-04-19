"use client";

import { useEffect, useRef, useState } from "react";

export function useRevealOnScroll(threshold = 0.2) {
  const sectionRef = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasEnteredView(true);
        observer.disconnect();
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { sectionRef, hasEnteredView };
}
