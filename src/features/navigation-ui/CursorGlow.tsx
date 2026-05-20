import { useEffect, useRef } from "react";

/**
 * Ambient cursor glow — a large, soft teal/cyan radial gradient blob
 * that lazily follows the mouse cursor, creating a subtle "light source"
 * effect on the dark background. Inspired by Linear.app / Stripe.
 *
 * - Uses requestAnimationFrame + lerp for buttery 60fps trailing.
 * - Pointer-events: none so it never blocks clicks.
 * - Hidden on touch-only devices (no mouse).
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Current rendered position (lerped)
    let currentX = 0;
    let currentY = 0;

    // Target position (actual mouse)
    let targetX = 0;
    let targetY = 0;

    // Whether we've received at least one mouse event
    let hasMouseMoved = false;

    // Lerp factor — lower = more lazy/floaty, higher = more snappy
    const LERP = 0.08;

    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMouseMoved) {
        // Snap to first position immediately so the glow doesn't slide in from (0,0)
        currentX = targetX;
        currentY = targetY;
        hasMouseMoved = true;
        glow.style.opacity = "1";
      }
    };

    const animate = () => {
      // Lerp towards target
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;

      // Translate relative to center of the glow element
      glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-0 hidden md:block"
      style={{
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(45,212,191,0.08) 0%, rgba(34,211,238,0.04) 35%, transparent 70%)",
        opacity: 0,
        transition: "opacity 0.6s ease",
        willChange: "transform",
      }}
    />
  );
}
