"use client";

import { useState } from "react";

const MAX_MESSAGE = 500;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("done");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-surface/60 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Message received</p>
        <h3 className="mt-4 font-display text-2xl italic">Thank you ✨</h3>
        <p className="mt-3 text-muted">
          Claudia will personally read your note and get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-gold underline underline-offset-4 hover:text-plum-soft"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="c-name"  label="Name"   value={form.name}  onChange={(v) => update("name", v)}  required />
        <Field id="c-email" label="Email"  value={form.email} onChange={(v) => update("email", v)} required type="email" />
      </div>
      <Field id="c-phone" label="Phone" value={form.phone} onChange={(v) => update("phone", v)} type="tel" />

      <div>
        <label htmlFor="c-message" className="block text-xs uppercase tracking-[0.3em] text-gold">
          Message
        </label>
        <textarea
          id="c-message"
          required
          rows={5}
          maxLength={MAX_MESSAGE}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40"
          placeholder="Tell me a little about what's on your heart…"
        />
        <p className="mt-1 text-right text-[11px] text-muted/70">
          {form.message.length}/{MAX_MESSAGE}
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-300">
          Something went wrong. Please try again or email claudia@innerinsights.shop.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-background shadow-lg shadow-gold/20 transition hover:bg-gold/90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-[0.3em] text-gold">
        {label}
        {required && <span className="ml-1 text-plum-soft">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-full border border-white/10 bg-background/60 px-5 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40"
      />
    </div>
  );
}
