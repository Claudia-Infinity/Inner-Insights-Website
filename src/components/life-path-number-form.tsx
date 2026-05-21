"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { computeLifePath, getArchetype, type LifePathNumber } from "@/lib/life-path-number";

type Stage = "input" | "result" | "subscribed";

export default function LifePathNumberForm({ source = "life-path-number" }: { source?: string }) {
  const [month, setMonth] = useState<string>("");
  const [day, setDay]   = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [stage, setStage] = useState<Stage>("input");
  const [number, setNumber] = useState<LifePathNumber | null>(null);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const archetype = useMemo(() => (number ? getArchetype(number) : null), [number]);

  function handleCompute(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const m = Number(month), d = Number(day), y = Number(year);
    try {
      const n = computeLifePath(m, d, y);
      setNumber(n);
      setStage("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid date");
    }
  }

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, lifePathNumber: number, dob: `${month}/${day}/${year}` }),
      });
    } catch {}
    setSubmitting(false);
    setStage("subscribed");
  }

  if (stage === "input") {
    return (
      <form onSubmit={handleCompute} className="mt-6 space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Enter your birthday</p>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label htmlFor="lpn-month" className="sr-only">Month</label>
            <input
              id="lpn-month"
              type="number"
              required
              min={1}
              max={12}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="MM"
              className="w-full rounded-full border border-white/10 bg-background/60 px-4 py-3 text-center text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40"
            />
          </div>
          <div>
            <label htmlFor="lpn-day" className="sr-only">Day</label>
            <input
              id="lpn-day"
              type="number"
              required
              min={1}
              max={31}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="DD"
              className="w-full rounded-full border border-white/10 bg-background/60 px-4 py-3 text-center text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40"
            />
          </div>
          <div>
            <label htmlFor="lpn-year" className="sr-only">Year</label>
            <input
              id="lpn-year"
              type="number"
              required
              min={1900}
              max={2100}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="YYYY"
              className="w-full rounded-full border border-white/10 bg-background/60 px-4 py-3 text-center text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40"
            />
          </div>
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-background hover:bg-gold/90 transition"
        >
          Reveal my Life Path Number
        </button>
      </form>
    );
  }

  if (stage === "result" && archetype) {
    return (
      <div className="mt-6 space-y-6">
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-surface/60 to-surface/30 p-6 sm:p-8 shadow-lg shadow-gold/10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Your Life Path Number</p>
          <div className="mt-3 flex items-baseline gap-4">
            <span className="font-display text-6xl sm:text-7xl font-medium italic text-plum-soft drop-shadow-[0_2px_20px_rgba(151,71,255,0.3)]">
              {archetype.number}
            </span>
            <span className="font-display text-2xl sm:text-3xl italic text-ink">
              {archetype.title}
            </span>
          </div>
          <p className="mt-4 text-base text-ink/90">{archetype.oneLine}</p>
          <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Strengths</p>
              <ul className="mt-2 space-y-1 text-muted">
                {archetype.strengths.map((s) => <li key={s}>· {s}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Shadows</p>
              <ul className="mt-2 space-y-1 text-muted">
                {archetype.shadows.map((s) => <li key={s}>· {s}</li>)}
              </ul>
            </div>
          </div>
          <p className="mt-5 italic text-plum-soft border-l-2 border-gold/40 pl-4">
            {archetype.callingCard}
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="rounded-2xl border border-white/10 bg-surface/30 p-5 sm:p-6">
          <p className="text-sm font-medium text-ink">Want the full Life Path Number Guide?</p>
          <p className="mt-1 text-xs text-muted">Drop your email and I&apos;ll send the complete PDF — purpose, relationships, career, and the lessons your number is here to teach you.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-white/10 bg-background/60 px-5 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40"
            />
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-background hover:bg-gold/90 disabled:opacity-60 transition"
            >
              {submitting ? "…" : "Send me the guide"}
            </button>
          </div>
        </form>

        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <a
            href="https://innerinsights.simplybook.me/v2/#book/category/1/count/1/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-gold/30 bg-surface/40 p-4 transition hover:border-gold hover:bg-surface/60"
          >
            <p className="text-base font-medium text-ink">🔮 Book a Card Reading</p>
            <p className="mt-1 text-xs text-muted">Personalized insight into how your Life Path Number is expressing itself right now.</p>
          </a>
          <Link
            href="/#services"
            className="block rounded-xl border border-plum/30 bg-surface/40 p-4 transition hover:border-plum hover:bg-surface/60"
          >
            <p className="text-base font-medium text-ink">🌱 Explore Life Coaching</p>
            <p className="mt-1 text-xs text-muted">Use your number as a foundation for conscious, aligned, long-term transformation.</p>
          </Link>
        </div>
      </div>
    );
  }

  // subscribed
  return (
    <div className="mt-6 rounded-2xl border border-gold/30 bg-surface/40 p-6 text-center">
      <p className="text-sm text-plum-soft">Welcome, seeker ✨ Your Life Path Number Guide is ready — check your inbox, or download it now below.</p>
      <a
        href="https://drive.google.com/file/d/1xmMBxbzHf2tMWmFwDj6dS8uFbkiXOskJ/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-background transition hover:bg-gold/90"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
        Open the Life Path Number Guide (PDF)
      </a>
    </div>
  );
}
