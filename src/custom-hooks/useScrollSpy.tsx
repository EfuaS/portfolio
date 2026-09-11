import { useState, useEffect } from "react";
import { isProgrammaticScroll } from "../utils/scrollToSection";

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  // Callers pass a fresh array literal on every render, so depend on the
  // contents instead of the identity — otherwise every state update tears down
  // and rebuilds all the observers.
  const key = sectionIds.join(",");

  useEffect(() => {
    const ids = key.split(",").filter(Boolean);

    const listeners = ids.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            setActiveId(id);

            // Don't fight a nav click: while it animates, every section it
            // passes over would otherwise overwrite the destination hash.
            if (isProgrammaticScroll()) return;
            window.history.replaceState(null, "", `#${id}`);
          });
        },
        { rootMargin: `-${offset}px 0px -70% 0px` }, // Adjusts when the "active" switch happens
      );

      observer.observe(element);
      return observer;
    });

    return () => listeners.forEach((o) => o?.disconnect());
  }, [key, offset]);

  return activeId;
};
