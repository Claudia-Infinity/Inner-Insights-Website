"use client";

import { useEffect, useState } from "react";

type Props = {
  slug: string;
  /** Baseline view count (until we wire a real counter). */
  viewsSeed: number;
  /** Render variant. "inline" is compact for cards, "panel" is larger for article pages. */
  variant?: "inline" | "panel";
  /** When true, record a view on mount. Use only on article pages. */
  trackView?: boolean;
};

const HEART_KEY  = (slug: string) => `ii-heart-${slug}`;
const VIEWED_KEY = (slug: string) => `ii-viewed-${slug}`;
const COUNT_KEY  = (slug: string) => `ii-count-${slug}`;

export default function PostReactions({ slug, viewsSeed, variant = "inline", trackView = false }: Props) {
  const [hearted, setHearted] = useState(false);
  const [views, setViews] = useState(viewsSeed);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      setHearted(localStorage.getItem(HEART_KEY(slug)) === "1");
    } catch {}

    // Local-only view counter. Persists across sessions so the number feels real,
    // but every browser counts independently. Swap for a server-backed count later.
    let current = viewsSeed;
    try {
      const stored = localStorage.getItem(COUNT_KEY(slug));
      if (stored) current = Math.max(viewsSeed, Number(stored) || viewsSeed);
    } catch {}

    if (trackView) {
      try {
        const already = sessionStorage.getItem(VIEWED_KEY(slug));
        if (!already) {
          current += 1;
          sessionStorage.setItem(VIEWED_KEY(slug), "1");
          localStorage.setItem(COUNT_KEY(slug), String(current));
        }
      } catch {}
    }

    setViews(current);
  }, [slug, viewsSeed, trackView]);

  function toggleHeart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const next = !hearted;
    setHearted(next);
    try { localStorage.setItem(HEART_KEY(slug), next ? "1" : "0"); } catch {}
    // Add 1 to the view count when someone hearts the post
    if (next) {
      setViews(prev => {
        const updated = prev + 1;
        try { localStorage.setItem(COUNT_KEY(slug), String(updated)); } catch {}
        return updated;
      });
    }
  }

  const large = variant === "panel";
  const wrapClass = large
    ? "flex items-center gap-5 text-sm"
    : "flex items-center gap-3 text-xs";
  const btnBase = large
    ? "flex h-9 items-center gap-2 rounded-full border px-3 text-sm transition"
    : "flex h-7 items-center gap-1.5 rounded-full border px-2.5 text-[11px] transition";

  return (
    <div className={wrapClass}>
      <button
        type="button"
        onClick={toggleHeart}
        aria-pressed={hearted}
        aria-label={hearted ? "Unlike" : "Like"}
        className={`${btnBase} ${hearted
          ? "border-plum bg-plum/15 text-plum-soft"
          : "border-white/10 text-ink/80 hover:border-plum/40 hover:text-plum-soft"}`}
      >
        <svg width={large ? 16 : 13} height={large ? 16 : 13} viewBox="0 0 24 24" aria-hidden
          fill={hearted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
        {large && <span>{hearted ? "Loved" : "Love"}</span>}
      </button>

      <span className={`inline-flex items-center gap-1.5 text-muted ${large ? "text-sm" : "text-[11px]"}`}>
        <svg width={large ? 16 : 13} height={large ? 16 : 13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span>{views.toLocaleString()}</span>
        {large && <span className="ml-0.5 text-muted/70">views</span>}
      </span>
    </div>
  );
}
