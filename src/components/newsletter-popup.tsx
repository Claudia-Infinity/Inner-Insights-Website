"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ii-newsletter-popup";
const DELAY_MS = 25_000;       // show after 25s of dwell time
const SCROLL_PCT = 0.45;       // OR after 45% scroll, whichever first

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try { if (localStorage.getItem(STORAGE_KEY)) return; } catch {}

    let triggered = false;
    const fire = () => {
      if (triggered) return;
      triggered = true;
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };

    const onScroll = () => {
      const scrolled =
        (window.scrollY + window.innerHeight) /
        Math.max(document.documentElement.scrollHeight, 1);
      if (scrolled >= SCROLL_PCT) fire();
    };
    const timer = window.setTimeout(fire, DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function dismiss() {
    setOpen(false);
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch {}
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter-popup" }),
      });
    } catch {}
    setStatus("done");
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch {}
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Join the mailing list"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={dismiss}
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gold/25 bg-surface p-6 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
        <button
          type="button"
          aria-label="Close"
          onClick={dismiss}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-background/60 text-ink transition hover:bg-background"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="2" y1="2" x2="12" y2="12" />
            <line x1="12" y1="2" x2="2" y2="12" />
          </svg>
        </button>

        {status === "done" ? (
          <div className="py-2 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">You&apos;re in</p>
            <h2 className="mt-2 font-display text-xl italic text-white">Welcome ✨</h2>
            <p className="mt-2 text-sm text-muted">
              Your first insight is on its way.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Free · Monthly</p>
            <h2 className="mt-2 font-display text-xl sm:text-2xl italic text-white">
              Join my mailing list
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              One thoughtful email a month. No spam.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
              <label htmlFor="newsletter-popup-email" className="sr-only">Email</label>
              <input
                id="newsletter-popup-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-full border border-white/10 bg-background/60 px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold/90 disabled:opacity-60"
              >
                {status === "submitting" ? "…" : "Subscribe"}
              </button>
            </form>
            <button
              type="button"
              onClick={dismiss}
              className="mt-3 text-[11px] text-muted/70 underline underline-offset-4 hover:text-ink"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
