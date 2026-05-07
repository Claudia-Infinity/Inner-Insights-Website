"use client";

import { useState } from "react";

export default function MailingListForm({ source = "about" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
    } catch {}
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="mt-5 text-sm text-plum-soft">Welcome, soul sister ✨ Check your inbox.</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
      <label htmlFor={`ml-email-${source}`} className="sr-only">Email</label>
      <input
        id={`ml-email-${source}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-full border border-white/10 bg-background/60 px-5 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-background hover:bg-gold/90 disabled:opacity-60"
      >
        {status === "submitting" ? "…" : "Subscribe"}
      </button>
    </form>
  );
}
