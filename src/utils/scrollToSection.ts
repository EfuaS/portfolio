import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/** Height of the fixed header, so a section isn't scrolled under it. */
const HEADER_OFFSET = 96;

let programmaticScroll = false;

/**
 * True while a nav-initiated scroll is animating.
 *
 * The scroll spy uses this to stop rewriting the URL hash mid-flight — without
 * it, every section the viewport passes over overwrites the destination.
 */
export const isProgrammaticScroll = () => programmaticScroll;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll to a section, GSAP-style.
 *
 * We can't rely on CSS `scroll-behavior: smooth` because ScrollTrigger moves
 * the scrollbar itself while pinning, and the two animations cancel each other
 * out. ScrollToPlugin drives the same scroll position ScrollTrigger reads, so
 * pinned sections stay in sync.
 *
 * Sections that are pinned (My Journey, My Works) are scrolled to their
 * ScrollTrigger's start position rather than the element's top — the element's
 * top is the top of the pin-spacer, which is empty padding.
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  // A pinned section is wrapped in a pin-spacer, so its element top is empty
  // padding — scroll to where its ScrollTrigger starts instead, which is the
  // scroll position at which the content is actually on screen.
  const trigger = ScrollTrigger.getById(id);
  const pinStart = trigger?.start;
  const usePin = typeof pinStart === "number" && pinStart > 0;

  const y = usePin ? pinStart : element;
  const offsetY = usePin ? 0 : HEADER_OFFSET;
  const duration = prefersReducedMotion() ? 0 : 1;

  programmaticScroll = true;

  gsap.to(window, {
    duration,
    ease: "power2.inOut",
    scrollTo: { y, offsetY, autoKill: false },
    onComplete: () => {
      programmaticScroll = false;
      window.history.replaceState(null, "", `#${id}`);
    },
    // Safety net so the flag can never stay stuck on if the tween is killed.
    onInterrupt: () => {
      programmaticScroll = false;
    },
  });
}
