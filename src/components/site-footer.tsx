import Link from "next/link";
import Image from "next/image";

const SOCIAL: { href: string; label: string; icon: React.ReactNode }[] = [
  {
    href: "https://instagram.com/innerinsights888",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/TheInnerInsights888",
    label: "Facebook",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.2-1.5 1.6-1.5h1.6V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 3.9v2.4H7.8V14h2.7v8h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@claudiainfinityai",
    label: "TikTok",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.3 8.8a6.5 6.5 0 0 1-3.8-1.2v7.1a5.4 5.4 0 1 1-5.4-5.4c.3 0 .5 0 .8.1v2.8a2.6 2.6 0 1 0 1.8 2.5V3h2.7a3.8 3.8 0 0 0 3.9 3.5v2.3z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/claudiavromo/",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5.01A2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.6c0-1.3 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3V21H9z" />
      </svg>
    ),
  },
  {
    href: "https://www.quora.com/profile/Claudia-Romo-34",
    label: "Quora",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12.3 2C7.2 2 3 6.2 3 11.3c0 5.1 4.2 9.3 9.3 9.3 1 0 2-.2 2.9-.5l1.5 1.9h3.5l-2.4-3c2.1-1.7 3.5-4.3 3.5-7.2 0-5.1-4.1-9.3-9.3-9.3zm.1 16c-3.2 0-5.4-2.8-5.4-6.2S9.3 5.5 12.4 5.5c3.2 0 5.4 2.9 5.4 6.3 0 1.5-.4 2.8-1.2 3.8-.6-.9-1.4-1.6-2.6-1.6-.9 0-1.8.4-2.4.9l1 1.6c.2-.1.4-.1.6-.1.9 0 1.3.9 1.6 1.7-.6.2-1.3.4-2 .4z" />
      </svg>
    ),
  },
];

const EXPLORE = [
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/merch", label: "Shop" },
  { href: "/life-path-number", label: "Free Life Path Number Assessment" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-gold/20 bg-surface/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand + tagline */}
        <div className="md:col-span-2">
          <Image
            src="/logo.png"
            alt="Inner Insights"
            width={260}
            height={104}
            className="h-20 w-auto [filter:brightness(1.15)_saturate(1.25)]"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Guidance for the intuitive soul. Psychic readings, energy healing,
            and life coaching with Claudia Romo.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gold">Dallas, Texas</p>

          <div className="mt-6 flex items-center gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                rel="noopener noreferrer"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink transition hover:border-gold hover:bg-gold/10 hover:text-gold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {EXPLORE.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink/85 transition hover:text-plum-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="mailto:claudia@innerinsights.shop" className="text-ink/85 transition hover:text-plum-soft">
                claudia@innerinsights.shop
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-ink/85 transition hover:text-plum-soft">
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Inner Insights · Claudia Romo</p>
          <p className="text-xs text-muted/70">Made with love in Dallas, TX</p>
        </div>
      </div>
    </footer>
  );
}
