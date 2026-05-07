import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import MailingListForm from "@/components/mailing-list-form";

export const metadata: Metadata = {
  title: "About Claudia",
  description:
    "Spiritual teacher with a twist. Psychic medium, intuitive life coach, and energy healer based in Dallas, Texas.",
};

const HIGHLIGHTS = [
  { label: "Founder",     body: "of Inner Insights, where spiritual practice meets scientific inquiry." },
  { label: "Roles",       body: "Psychic Medium · Intuitive Life Coach · Energy Healer." },
  { label: "Clients",     body: "Business leaders, government officials, entrepreneurs, and celebrities worldwide." },
  { label: "Program",     body: "Creator of The Imperfect Coach, evidence-based coaching + mediumship." },
  { label: "Languages",   body: "Fluent in English and Spanish." },
  { label: "Based in",    body: "Dallas, Texas." },
];

export default function AboutPage() {
  return (
    <div>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(201,165,102,0.12),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(151,71,255,0.1),transparent_55%)]" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div className="relative order-2 md:order-1 md:sticky md:top-44">
            {/* Ambient glow behind portrait */}
            <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(201,165,102,0.22),transparent_65%)] blur-2xl" aria-hidden />
            {/* Portrait with soft radial mask so edges blend into the background */}
            <div
              className="relative aspect-[4/5] [mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_92%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_92%)]"
            >
              <Image
                src="/images/claudia/Red Scarf.jpg"
                alt="Claudia Romo"
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">About</p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl italic font-medium leading-[1.05]">
              A spiritual teacher <br />with a{" "}
              <span className="text-plum-soft">twist.</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Hi, I&apos;m Claudia Romo, founder of Inner Insights, where I
              merge spiritual practice with scientific inquiry. As a Psychic
              Medium, Intuitive Life Coach, and Energy Healer, I offer an
              approachable pathway to elevated living.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://innerinsights.simplybook.me/v2/#book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold/90 transition"
              >
                Book a Session
              </a>
              <Link
                href="/#services"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 scroll-reveal">
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-ink/90">
          <p>
            My methodology integrates scientific investigation alongside
            intuitive mentoring, enabling people to develop their own inner
            wisdom. I collaborate with a diverse clientele including business
            leaders, government officials, entrepreneurs, and celebrities
            across the globe, helping them construct lives that reflect their
            core values and optimal capabilities.
          </p>
          <p>
            I developed{" "}
            <span className="italic text-plum-soft">The Imperfect Coach</span>,
            a program combining evidence-based coaching methods, actionable
            insights, and mediumship abilities. It motivates clients to
            reimagine their journeys and embrace previously avoided
            possibilities.
          </p>
          <p>
            Drawing on decades of professional history and worldwide clients,
            I find fulfillment in teaching through self-paced educational
            offerings, curated digital resources, and publications released
            under the pseudonym{" "}
            <span className="italic text-plum-soft">Claudia Infinity</span>.
            My central aim is to make spiritual development both genuine and
            accessible.
          </p>
          <p>
            Outside of work, I love traveling internationally, experiencing
            diverse cuisines, and building relationships with like-minded
            souls.
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHTS ─────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 scroll-reveal">
        <div className="mb-10 flex max-w-3xl mx-auto items-center gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" aria-hidden />
          <h2 className="font-display text-2xl sm:text-3xl italic font-medium whitespace-nowrap">
            At a <span className="text-plum-soft">glance</span>
          </h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" aria-hidden />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <article key={h.label} className="rounded-2xl border border-white/5 bg-surface/50 p-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{h.label}</p>
              <div className="mt-2 h-px w-8 bg-gold/50" />
              <p className="mt-3 text-sm leading-relaxed text-ink/85">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center scroll-reveal">
        <h2 className="font-display text-3xl sm:text-4xl italic font-medium">
          Ready to <span className="text-plum-soft">begin?</span>
        </h2>
        <p className="mt-4 text-muted">
          Say hi, ask a question, or tell me what you&apos;re working on.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold/90 transition"
          >
            Contact me
          </Link>
        </div>

        <div className="mt-10 mx-auto max-w-xl rounded-2xl border border-white/5 bg-surface/40 p-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Stay in touch</p>
          <h3 className="mt-3 font-display text-xl italic text-white">
            Join my mailing list
          </h3>
          <p className="mt-2 text-sm text-muted">
            New-moon rituals, seasonal energy updates, and private offers,
            delivered once a month.
          </p>
          <MailingListForm />
        </div>
      </section>
    </div>
  );
}
