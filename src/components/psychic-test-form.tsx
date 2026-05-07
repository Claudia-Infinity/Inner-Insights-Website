"use client";

import { useState } from "react";

const PDF_URL = "/downloads/psychic-assessment.pdf";

export default function PsychicTestForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");

    // TODO: wire to real email service (Mailchimp / ConvertKit / custom API)
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "psychic-test" }),
      });
    } catch {
      // Intentional: still deliver the PDF even if the subscribe call fails.
    }

    // Trigger PDF download
    const a = document.createElement("a");
    a.href = PDF_URL;
    a.download = "Psychic-Assessment.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-surface/60 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Your gift is on the way</p>
        <h3 className="mt-4 font-display text-2xl italic">Check your downloads</h3>
        <p className="mt-3 text-muted">
          Your Psychic Assessment is downloading now. Pour a cup of tea and take
          your time with it.
        </p>
        <a
          href={PDF_URL}
          download="Psychic-Assessment.pdf"
          className="mt-6 inline-flex items-center gap-2 text-sm text-gold underline underline-offset-4 hover:text-plum-soft"
        >
          Didn&apos;t start? Download again →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-surface/60 p-8">
      <label htmlFor="psychic-email" className="block text-xs uppercase tracking-[0.3em] text-gold">
        Email
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="psychic-email"
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
          className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-background shadow-lg shadow-gold/20 transition hover:bg-gold/90 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send me the PDF"}
        </button>
      </div>
    </form>
  );
}
