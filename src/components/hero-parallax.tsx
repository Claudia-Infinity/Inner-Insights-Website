"use client";

/**
 * HeroParallax — wraps the hero portrait div and applies a subtle
 * scroll-driven translate on the image so it drifts upward at ~25%
 * of the user's scroll speed. Cinematic depth, never distracting.
 *
 * Behavior:
 *  - Only translates while the hero is roughly in view (translate maxes
 *    out at the section's height) so we don't over-shift on long pages.
 *  - Uses requestAnimationFrame for smoothness, passive scroll for perf.
 *  - Honors prefers-reduced-motion.
 *  - SSR-safe: no transform applied until the client mount.
 */

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Speed factor. 0 = no parallax. 0.25 = drift at quarter speed. */
  speed?: number;
  className?: string;
};

export default function HeroParallax({ children, speed = 0.25, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let pending = false;

    const apply = () => {
      pending = false;
      const y = window.scrollY;
      // Cap the parallax shift so it never drifts off-screen on long scrolls.
      const max = el.offsetHeight ?? 600;
      const shift = Math.min(y * speed, max * 0.4);
      el.style.transform = `translate3d(0, ${shift}px, 0)`;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      raf = window.requestAnimationFrame(apply);
    };

    apply(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced, speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
