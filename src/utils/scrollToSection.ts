import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Height of the fixed header, so a section isn't scrolled under it. */
const HEADER_OFFSET = 96;
/** How long to wait for a smooth scroll before giving up on it. */
const SETTLE_MS = 1200;

let programmaticScroll = false;
let settleTimer: number | undefined;

/**
 * True while a nav-initiated scroll is in flight.
 *
 * The scroll spy uses this to stop rewriting the URL hash mid-flight — without
 * it, every section the viewport passes over would overwrite the destination.
 */
export const isProgrammaticScroll = () => programmaticScroll;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const maxScroll = () =>
  Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

/**
 * Scroll to a section.
 *
 * Two things make this less trivial than a plain anchor jump:
 *
 * 1. A pinned section (My Journey, My Works) is wrapped in a ScrollTrigger
 *    pin-spacer, so the element's own top is empty padding — an anchor jump
 *    lands on a blank screen. We target the section's ScrollTrigger start
 *    instead, which is the position at which its content is on screen.
 *
 * 2. Global CSS `scroll-behavior: smooth` is not an option, because it also
 *    applies to the scrollbar writes ScrollTrigger makes while pinning. A
 *    one-shot programmatic smooth scroll only animates when we ask it to.
 *
 * Arrival is guaranteed rather than assumed: if the smooth animation stalls or
 * never runs (some environments disable it), we snap to the target instead of
 * stranding the visitor halfway. A real scroll gesture cancels that, so we
 * never yank the page back from someone who changed their mind.
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const trigger = ScrollTrigger.getById(id);
  const pinStart = trigger?.start;
  const usePin = typeof pinStart === "number" && pinStart > 0;

  const desired = usePin
    ? pinStart
    : element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  const target = Math.min(Math.max(0, desired), maxScroll());

  let interrupted = false;
  const interrupt = () => {
    interrupted = true;
  };
  const gestures = ["wheel", "touchstart", "keydown"] as const;
  gestures.forEach((e) =>
    window.addEventListener(e, interrupt, { passive: true }),
  );

  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    window.clearTimeout(settleTimer);
    window.removeEventListener("scrollend", finish);
    gestures.forEach((e) => window.removeEventListener(e, interrupt));

    if (!interrupted && Math.abs(window.scrollY - target) > 4) {
      window.scrollTo({ top: target, behavior: "auto" });
    }
    programmaticScroll = false;
    window.history.replaceState(null, "", `#${id}`);
  };

  programmaticScroll = true;
  window.scrollTo({
    top: target,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });

  window.clearTimeout(settleTimer);
  window.addEventListener("scrollend", finish, { once: true });
  // Fallback: Safari and older browsers have no `scrollend`.
  settleTimer = window.setTimeout(finish, SETTLE_MS);
}
