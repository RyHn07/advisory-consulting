import { useEffect } from "react";

/**
 * Global scroll-reveal hook. Observes every element with [data-reveal]
 * and toggles the `is-visible` class when it enters the viewport.
 * Re-scans on route changes via a MutationObserver on <main>.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-children]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const observe = () => {
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal]:not(.is-visible), [data-reveal-children]:not(.is-visible)",
        )
        .forEach((el) => io.observe(el));
    };

    observe();

    const mo = new MutationObserver(() => observe());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
