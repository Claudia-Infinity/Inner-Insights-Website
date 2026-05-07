import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Claudia Romo, psychic medium, energy healer, and life coach serving clients worldwide.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(201,165,102,0.12),transparent_60%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,rgba(151,71,255,0.12),transparent_55%)]" aria-hidden />

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] items-start">
          {/* Left: form */}
          <div className="scroll-reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Inner Insights</p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl italic font-medium leading-tight">
              Want to get in <span className="text-plum-soft">touch?</span>
            </h1>
            <p className="mt-4 text-muted">
              Spiritual guide &amp; psychic medium, serving clients worldwide.
              Drop a note and I&apos;ll get back to you personally.
            </p>

            <div className="mt-8">
              <ContactForm />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:claudia@innerinsights.shop"
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-surface/40 p-4 transition hover:border-gold/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Email</p>
                  <p className="text-sm text-ink/90 group-hover:text-plum-soft">claudia@innerinsights.shop</p>
                </div>
              </a>
              <a
                href="tel:+12146865188"
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-surface/40 p-4 transition hover:border-gold/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Phone</p>
                  <p className="text-sm text-ink/90 group-hover:text-plum-soft">(214) 686-5188</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: portrait — White Shirt, blended into bg */}
          <div className="relative order-first md:order-last md:sticky md:top-44">
            <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(201,165,102,0.25),transparent_65%)] blur-2xl" aria-hidden />
            <div
              className="relative aspect-[4/5] [mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_92%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_92%)]"
            >
              <Image
                src="/images/claudia/White Shirt.jpg"
                alt="Claudia Romo"
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
