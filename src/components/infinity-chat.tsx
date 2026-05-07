"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

const GREETING =
  "Hi ✨ I'm Infinity, your AI assistant. I can help you explore services, find the right article, or start a booking. What are you curious about?";

const QUICK_PROMPTS = [
  "Tell me about Claudia's services",
  "Which coaching tier fits me?",
  "Recommend a blog post",
  "How do I book a session?",
];

function PartText({ text }: { text: string }) {
  // Render **bold**, *italic*, and [link](url) inline.
  const parts: React.ReactNode[] = [];
  const re = /(\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[2] !== undefined)       parts.push(<strong key={`b${i}`} className="font-semibold text-white">{m[2]}</strong>);
    else if (m[3] !== undefined)  parts.push(<em     key={`i${i}`} className="italic text-plum-soft">{m[3]}</em>);
    else if (m[4] !== undefined)  parts.push(
      <a key={`a${i}`} href={m[5]} className="text-gold underline underline-offset-2 hover:text-plum-soft" target={m[5].startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{m[4]}</a>
    );
    last = m.index + m[0].length; i++;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, k) => <span key={k}>{p}</span>)}</>;
}

export default function InfinityChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [messages, open]);

  const busy = status === "submitted" || status === "streaming";

  function handleSend(text: string) {
    const t = text.trim();
    if (!t || busy) return;
    sendMessage({ text: t });
    setInput("");
  }

  return (
    <>
      {/* Floating button — layered, high-tech, fades in on load */}
      <div
        className={`fixed bottom-6 right-6 z-[90] h-16 w-16 ${open ? "" : "animate-fab-enter"}`}
      >
        {/* Expanding ping rings (radar pulse) */}
        {!open && (
          <>
            <span className="pointer-events-none absolute inset-0 rounded-full border border-gold/50 animate-fab-ring-ping" aria-hidden />
            <span className="pointer-events-none absolute inset-0 rounded-full border border-plum-soft/40 animate-fab-ring-ping [animation-delay:1.4s]" aria-hidden />
          </>
        )}

        {/* Orbiting gold particle */}
        {!open && (
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(201,165,102,0.9)] animate-fab-orbit"
            aria-hidden
          />
        )}

        <button
          type="button"
          aria-label={open ? "Close Infinity" : "Open Infinity chat"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`group relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_30%,#c8a7ff,#9747ff_45%,#2a0f4a_95%)] text-white ring-1 ring-gold/40 transition-transform hover:scale-105 ${open ? "shadow-[0_15px_45px_-10px_rgba(151,71,255,0.55)]" : "animate-fab-breath"}`}
        >
          {/* Inner glass highlight */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/25 via-transparent to-transparent" aria-hidden />
          {/* Subtle noise/sparkle: tiny drifting stars */}
          {!open && (
            <>
              <span className="pointer-events-none absolute top-2 left-3 h-0.5 w-0.5 rounded-full bg-gold/90 animate-twinkle-1" aria-hidden />
              <span className="pointer-events-none absolute bottom-3 right-3 h-0.5 w-0.5 rounded-full bg-gold/80 animate-twinkle-2" aria-hidden />
              <span className="pointer-events-none absolute top-3 right-4 h-0.5 w-0.5 rounded-full bg-plum-soft/90 animate-twinkle-3" aria-hidden />
            </>
          )}

          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            // Clean lemniscate (∞) glyph
            <svg width="30" height="18" viewBox="0 0 60 30" fill="none" aria-hidden>
              <path
                d="M10 15 C 10 6, 24 6, 30 15 C 36 24, 50 24, 50 15 C 50 6, 36 6, 30 15 C 24 24, 10 24, 10 15 Z"
                stroke="url(#infGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="infGrad" x1="0" y1="0" x2="60" y2="0">
                  <stop offset="0%"   stopColor="#c9a566" />
                  <stop offset="50%"  stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#c9a566" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </button>
      </div>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Infinity chat"
          className="fixed bottom-24 right-4 z-[90] flex w-[min(22rem,calc(100vw-2rem))] max-h-[min(32rem,calc(100vh-8rem))] flex-col overflow-hidden rounded-2xl border border-gold/20 bg-surface shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)] sm:right-6"
        >
          {/* Header */}
          <header className="relative flex items-center gap-3 border-b border-white/5 bg-gradient-to-br from-surface-2 to-surface px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-plum/20 ring-1 ring-gold/40">
              <svg width="18" height="18" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-gold" aria-hidden>
                <path d="M12 12c0-5 5-8 9-4 3 3 5 8 9 4s3-8-1-8-5 5-8 8c-4 4-9 4-9-1s4-5 6-3z" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="font-display text-base italic text-white">Infinity</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Your AI assistant</p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ink/80 hover:bg-white/5 hover:text-white"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </header>

          {/* Messages */}
          <div ref={scrollerRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.length === 0 && (
              <div className="rounded-xl bg-plum/10 border border-plum/20 p-3 text-sm text-ink/90">
                <PartText text={GREETING} />
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.role === "user"
                    ? "ml-8 rounded-xl bg-gold/15 border border-gold/30 p-3 text-sm text-ink"
                    : "mr-8 rounded-xl bg-plum/10 border border-plum/20 p-3 text-sm text-ink/90"
                }
              >
                {m.parts.map((part, i) =>
                  part.type === "text" ? <PartText key={i} text={part.text} /> : null
                )}
              </div>
            ))}
            {busy && (
              <div className="mr-8 flex items-center gap-2 rounded-xl bg-plum/10 border border-plum/20 p-3 text-sm text-muted">
                <span className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse [animation-delay:300ms]" />
                </span>
                <span className="text-xs">Infinity is thinking</span>
              </div>
            )}
            {error && (
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-xs text-red-200">
                Infinity is resting for a moment. Meanwhile, the{" "}
                <a href="/contact" className="underline hover:text-red-100">contact form</a> is wide open.
              </div>
            )}
          </div>

          {/* Quick prompts (only on empty state) */}
          {messages.length === 0 && (
            <div className="border-t border-white/5 px-4 py-2">
              <div className="flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSend(q)}
                    className="rounded-full border border-white/10 bg-background/60 px-3 py-1.5 text-[11px] text-ink/80 transition hover:border-gold/40 hover:text-gold"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="flex items-center gap-2 border-t border-white/5 bg-background/60 p-3"
          >
            <label htmlFor="infinity-input" className="sr-only">Message Infinity</label>
            <input
              id="infinity-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={busy}
              placeholder="Ask Infinity…"
              className="flex-1 rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-plum/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-background transition hover:bg-gold/90 disabled:opacity-50"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M2 12l20-9-5 20-5-9-10-2z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
