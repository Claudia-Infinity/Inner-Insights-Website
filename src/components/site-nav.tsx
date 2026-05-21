"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Social handles — mirror the footer set so the drawer feels like a real
// brand surface, not just a list of routes.
const DRAWER_SOCIAL: { href: string; label: string; svg: React.ReactNode }[] = [
  { href: "https://instagram.com/innerinsights888", label: "Instagram", svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
  ) },
  { href: "https://www.tiktok.com/@claudiainfinityai", label: "TikTok", svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.3 8.8a6.5 6.5 0 0 1-3.8-1.2v7.1a5.4 5.4 0 1 1-5.4-5.4c.3 0 .5 0 .8.1v2.8a2.6 2.6 0 1 0 1.8 2.5V3h2.7a3.8 3.8 0 0 0 3.9 3.5v2.3z" /></svg>
  ) },
  { href: "https://facebook.com/innerinsights888", label: "Facebook", svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.2-1.5 1.6-1.5h1.6V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 3.9v2.4H7.8V14h2.7v8h3z" /></svg>
  ) },
  { href: "https://www.quora.com/profile/Claudia-Romo-34", label: "Quora", svg: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.3 2C7.2 2 3 6.2 3 11.3c0 5.1 4.2 9.3 9.3 9.3 1 0 2-.2 2.9-.5l1.5 1.9h3.5l-2.4-3c2.1-1.7 3.5-4.3 3.5-7.2 0-5.1-4.1-9.3-9.3-9.3zm.1 16c-3.2 0-5.4-2.8-5.4-6.2S9.3 5.5 12.4 5.5c3.2 0 5.4 2.9 5.4 6.3 0 1.5-.4 2.8-1.2 3.8-.6-.9-1.4-1.6-2.6-1.6-.9 0-1.8.4-2.4.9l1 1.6c.2-.1.4-.1.6-.1.9 0 1.3.9 1.6 1.7-.6.2-1.3.4-2 .4z" /></svg>
  ) },
];

const LEFT = [
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/merch", label: "Merch" },
];
const RIGHT = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative text-sm uppercase tracking-[0.2em] text-ink/90 transition-colors hover:text-plum-soft"
    >
      {label}
      <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when the mobile overlay is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Swipe-right-to-dismiss gesture on the drawer
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const start = touchStartX.current;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX ?? start;
    if (end - start > 60) setOpen(false); // swipe right > 60px = close
    touchStartX.current = null;
  };

  // Active route check (handles hash links and exact matches)
  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href.startsWith("/#")) return pathname === "/";
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/85 backdrop-blur-md">
      {/* Top gold hairline with slow shimmer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <span className="block h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-shimmer" />
      </div>

      <nav className="relative mx-auto flex h-20 md:h-24 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Desktop LEFT */}
        <ul className="hidden flex-1 items-center justify-end gap-10 md:flex">
          {LEFT.map((l) => (
            <li key={l.href}><NavLink {...l} /></li>
          ))}
        </ul>

        {/* Logo — slimmer, gold, with halo + hover bloom */}
        <Link href="/" aria-label="Inner Insights home" className="group relative md:mx-14">
          {/* Ambient halo behind logo */}
          <span
            className="pointer-events-none absolute inset-0 -m-3 rounded-full bg-gold/15 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100 animate-pulse-slow"
            aria-hidden
          />
          <Image
            src="/logo.png"
            alt="Inner Insights"
            width={420}
            height={168}
            preload
            className="relative h-14 md:h-16 w-auto transition duration-500 group-hover:scale-[1.03] [filter:brightness(1.2)_saturate(1.35)_drop-shadow(0_2px_18px_rgba(201,165,102,0.35))]"
          />
        </Link>

        {/* Desktop RIGHT */}
        <ul className="hidden flex-1 items-center justify-start gap-10 md:flex">
          {RIGHT.map((l) => (
            <li key={l.href}><NavLink {...l} /></li>
          ))}
        </ul>

        {/* Mobile menu trigger — modern morphing icon (two lines collapsing to a sparkle when active) */}
        <div className="flex flex-1 justify-end md:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition hover:border-gold/40 hover:bg-gold/10"
          >
            <span className="relative block h-5 w-6">
              {/* Two lines morphing into an X */}
              <span
                className={`absolute left-0 top-1.5 h-px w-full rounded-full bg-gold transition-all duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-full rounded-full bg-gold transition-all duration-300 ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
            {/* Tiny pulsing dot — adds the "spiritual / live" cue */}
            <span
              className={`absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-gold transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100 animate-pulse-slow"
              }`}
              aria-hidden
            />
          </button>
        </div>
      </nav>

      </header>
      {/* Mobile slide-in drawer — sibling of <header> so its z-index escapes the header's sticky+backdrop stacking context */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[100] flex md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Left spacer: a real <button> so taps reliably close on mobile, no propagation games */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`flex-1 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right-side drawer — solid charcoal, full-height flex column so the link list scrolls if needed */}
        <aside
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className={`relative my-auto mr-3 flex h-[78%] max-h-[620px] w-[68%] max-w-[280px] flex-col overflow-hidden rounded-3xl border border-gold/30 bg-[#181626]/85 backdrop-blur-xl shadow-[-30px_0_80px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-[calc(100%+1rem)]"
          }`}
        >
          {/* Top bar: brand + close */}
          <div className="relative flex shrink-0 items-center justify-between border-b border-white/5 px-5 pt-5 pb-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold">Inner Insights</p>
              <p className="mt-1 font-display text-sm italic text-ink/85">Claudia Romo</p>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] hover:border-gold/40 hover:bg-gold/10"
            >
              <span className="relative block h-4 w-4">
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 rounded-full bg-gold" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 rounded-full bg-gold" />
              </span>
            </button>
          </div>

          {/* Links */}
          <nav className="relative flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-0.5">
              {[...LEFT, ...RIGHT].map((l) => {
                const active = isActive(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`relative flex items-center justify-between rounded-lg px-4 py-3 text-base ${
                        active ? "bg-gold/10 text-gold" : "text-ink/90 hover:bg-white/[0.04]"
                      }`}
                    >
                      {active && (
                        <span
                          className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-gold"
                          aria-hidden
                        />
                      )}
                      <span className="font-display italic">{l.label}</span>
                      <span className={`text-sm ${active ? "text-gold" : "text-gold/50"}`} aria-hidden>
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom band: socials + primary CTA */}
          <div className="relative shrink-0 border-t border-white/5 bg-black/20 px-4 py-4 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2">
              {DRAWER_SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink/70 hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                >
                  {s.svg}
                </a>
              ))}
            </div>

            <a
              href="https://innerinsights.simplybook.me/v2/#book"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-gold px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-background shadow-[0_14px_40px_-12px_rgba(201,165,102,0.7)] hover:bg-gold/90"
            >
              Book a Session
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
