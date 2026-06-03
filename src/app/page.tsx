import Link from "next/link";
import Image from "next/image";
import HeroParallax from "@/components/hero-parallax";
import MoonDivider from "@/components/moon-divider";
import TestimonialsMarquee from "@/components/testimonials-marquee";
import ServiceCard from "@/components/service-card";
import LifePathNumberForm from "@/components/life-path-number-form";
import FAQSection from "@/components/faq-section";

type Ribbon = { label: string; className: string };

type Service = {
  slug: string;
  title: string;
  img: string;
  blurb: string;
  ribbon?: Ribbon;
  objectPosition?: string;
  href?: string;
};

const RIBBON_GOLD: Ribbon     = { label: "Gold",      className: "bg-gold text-background" };
const RIBBON_PLATINUM: Ribbon = { label: "Platinum",  className: "bg-gradient-to-br from-[#d8d2e8] to-[#a39bbd] text-background" };
const RIBBON_VIP: Ribbon      = { label: "VIP",       className: "bg-plum text-white" };
const RIBBON_ALACARTE: Ribbon = { label: "À la carte",className: "bg-plum-soft text-background" };

const SPIRITUAL: Service[] = [
  { slug: "card-reading",   title: "Card Reading",      img: "/images/services/claudia/service-tarot-card-reading-session.jpg",       blurb: "One-on-one sitting for the questions on your heart.",     href: "https://innerinsights.simplybook.me/v2/#book/category/1/count/1/" },
  { slug: "energy-healing", title: "Energy Healing",    img: "/images/services/claudia/service-energy-healing-session.jpg",           blurb: "Release what no longer serves in body, mind, and spirit.", href: "https://innerinsights.simplybook.me/v2/#book/service/8" },
  { slug: "smudge",         title: "Smudge Ceremony",   img: "/images/services/claudia/service-spiritual-smudge-stick-ceremony.jpg",  blurb: "Cleanse your space and your spirit with ceremony.",        href: "https://innerinsights.simplybook.me/v2/#book/service/7" },
];

const GROWTH: Service[] = [
  // Claudia in Red Suit — served via Drive thumbnail endpoint (configured
  // in next.config.ts). When a higher-res local copy lands in /public/brief-assets/
  // claudia-red-suit.jpg we can swap to that for better LCP.
  { slug: "discovery-call",     title: "Discovery Call",         img: "/images/claudia/Denim Glasses.JPG",  blurb: "A free Zoom discovery call to illuminate your path and explore how coaching or mentorship can support your next evolution.", href: "https://innerinsights.simplybook.me/v2/#book/service/26" },
  { slug: "development",        title: "Ability Training",       img: "/images/services/claudia/service-developmental-coaching.jpg",   blurb: "Open and train your own intuitive gifts.",                                       href: "https://innerinsights.simplybook.me/v2/#book/service/6" },
  { slug: "coaching-gold",      title: "Life Coaching",          img: "/images/services/claudia/service-life-coaching-gold.jpg",       blurb: "3-Month foundational program for clarity and momentum.",     ribbon: RIBBON_GOLD,     href: "https://innerinsights.simplybook.me/v2/#packages/8" },
  { slug: "coaching-platinum",  title: "Life Coaching",          img: "/images/services/claudia/service-life-coaching-platinum.jpg",   blurb: "3-Month deeper mentorship with higher-touch access.",        ribbon: RIBBON_PLATINUM, href: "https://innerinsights.simplybook.me/v2/#packages/9" },
  { slug: "coaching-vip",       title: "Life Coaching",          img: "/images/services/claudia/service-life-coaching-vip.jpg",        blurb: "3-Month immersive partnership for empire builders and visionaries.", ribbon: RIBBON_VIP,      href: "https://innerinsights.simplybook.me/v2/#packages/10", objectPosition: "center 15%" },
  { slug: "coaching-alacarte",  title: "Life Coaching",          img: "/images/services/claudia/service-life-coaching-alacarte.jpg",   blurb: "Pay-per-session support, come as you need.",           ribbon: RIBBON_ALACARTE, href: "https://innerinsights.simplybook.me/v2/#book/category/5/count/1/" },
];

const MENTORSHIP: Service[] = [
  {
    slug: "mentorship-gold",
    title: "Coach Mentorship",
    img: "/images/services/claudia/service-coach-mentorship-gold.jpeg",
    blurb: "Coach mentorship program for coaching clients launching their own practice.",
    ribbon: RIBBON_GOLD,
    href: "https://innerinsights.simplybook.me/v2/#packages/15",
  },
  {
    slug: "mentorship-vip",
    title: "Coach Mentorship",
    img: "/images/services/claudia/service-coach-mentorship-vip.jpeg",
    blurb: "VIP-tier mentorship with high-touch access while you build your coaching practice.",
    ribbon: RIBBON_VIP,
    href: "https://innerinsights.simplybook.me/v2/#packages/16",
  },
];

const BUNDLES: Service[] = [
  {
    slug: "bundle-card-phone",
    title: "3 Card Reading Bundle",
    img: "/images/merch/cards-hrdyf.jpg",
    blurb: "Three sessions by phone at a discounted rate.",
    href: "https://innerinsights.simplybook.me/v2/#packages/11",
  },
  {
    slug: "bundle-card-zoom",
    title: "3 Card Reading Bundle",
    img: "/images/merch/cards-hrdyf.jpg",
    blurb: "Three sessions by Zoom at a discounted rate.",
    href: "https://innerinsights.simplybook.me/v2/#packages/12",
  },
  {
    slug: "bundle-energy-phone",
    title: "3 Energy Healing Bundle",
    img: "/images/merch/reiki-c1yse.jpg",
    blurb: "Three distance healing sessions by phone.",
    href: "https://innerinsights.simplybook.me/v2/#packages/14",
  },
  {
    slug: "bundle-energy-zoom",
    title: "3 Energy Healing Bundle",
    img: "/images/merch/energy-ynkep.jpg",
    blurb: "Three distance healing sessions by Zoom.",
    href: "https://innerinsights.simplybook.me/v2/#packages/13",
  },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO: full-bleed portrait spans right→left, fades into bg ── */}
      <section className="relative [overflow-x:clip] [overflow-y:visible] min-h-[78vh] md:min-h-[62vh] flex items-start md:items-center pb-0 pt-72 md:pt-0">
        {/* Portrait: sits behind, extends slightly below the hero so it blends into the intro text */}
        <HeroParallax speed={0.22} className="absolute top-0 right-0 -bottom-32 md:-bottom-40 w-full md:w-[75%] lg:w-[65%]">
          <div className="relative h-full w-full" aria-hidden>
            <Image
              src="/images/claudia/Black Top.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 75vw, 100vw"
              preload
              className="object-cover object-[50%_center] md:object-[70%_center]"
            />
            {/* On mobile the face sits on the LEFT, so the text overlay needs to read on the right.
                Default gradient blends from background-on-left to transparent-on-right (good for desktop where face is on right).
                On mobile we flip: transparent on the left (preserving the face), background fading in from the right. */}
            <div className="absolute inset-0 bg-gradient-to-l from-background via-background/85 via-30% to-transparent md:bg-gradient-to-r" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[60%] md:h-56 bg-gradient-to-t from-background via-background/90 to-transparent" />
          </div>
        </HeroParallax>

        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(201,165,102,0.12),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_80%,rgba(151,71,255,0.1),transparent_55%)]" aria-hidden />

        {/* Copy — breathe, not crowded */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="max-w-lg text-center md:text-left">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.5em] text-gold">
              Claudia Romo
            </p>
            <h1 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-medium italic text-white leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
              <span className="block">Psychic <span className="text-plum-soft">Medium</span></span>
              <span className="block mt-2">&amp; Life <span className="text-plum-soft">Coach</span></span>
            </h1>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://innerinsights.simplybook.me/v2/#book"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gold px-8 py-3 text-sm font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold/90 hover:shadow-gold/30 transition"
              >
                Book a Session
              </a>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Moon divider between hero and intro */}
      <div className="py-2"><MoonDivider /></div>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-4 pb-20 text-center scroll-reveal">
        <h2 className="text-3xl sm:text-4xl font-light">
          Hi, I&apos;m <span className="italic text-plum-soft">Claudia.</span>
        </h2>
        <div className="mt-6 space-y-5 text-muted leading-relaxed">
          <p>
            Whether you&apos;re aiming to build an empire, create a legacy or
            want personalized psychic guidance on how to live a life bursting
            with love, connection, freedom, and prosperity, I&apos;ve got
            your back.
          </p>
          <p>
            I&apos;ll be your dedicated{" "}
            <span className="italic text-plum-soft">Spiritual Bestie</span> and{" "}
            <span className="italic text-gold">Imperfect Ally</span> on
            this exhilarating roller coaster called life.
          </p>
          <p className="text-ink">Work with me, it will be fun!</p>
        </div>
        <div className="mt-8">
          <Link href="/about" className="text-gold underline underline-offset-4 hover:text-plum-soft">
            Read my story →
          </Link>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-40 scroll-reveal">
        <div className="mx-auto mb-12 flex max-w-3xl items-center gap-6 px-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" aria-hidden />
          <h2 className="font-display text-3xl sm:text-4xl italic font-medium whitespace-nowrap">
            How can I <span className="text-plum-soft">guide you?</span>
          </h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" aria-hidden />
        </div>

        {/* Spiritual Guidance — single readings + multi-session bundles */}
        <div className="mb-12">
          <header className="mb-5 flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Spiritual Guidance</span>
            <span className="h-px flex-1 bg-gold/20" aria-hidden />
          </header>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {SPIRITUAL.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>

          {/* Session Bundles nested inside Spiritual Guidance */}
          <div className="mt-10">
            <header className="mb-4 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold/80">Session Bundles</span>
              <span className="h-px flex-1 bg-gold/15" aria-hidden />
            </header>
            <p className="mb-5 max-w-2xl text-sm text-muted leading-relaxed">
              Three-session packages of Card Readings or Energy Healing, by phone or Zoom, at a discounted rate.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              {BUNDLES.map((s) => <ServiceCard key={s.slug} {...s} />)}
            </div>
          </div>
        </div>

        {/* Personal Growth */}
        <div className="mb-12">
          <header className="mb-5 flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Personal Growth</span>
            <span className="h-px flex-1 bg-gold/20" aria-hidden />
          </header>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {GROWTH.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>

        {/* Coach Mentorship — for former coaching clients launching their own practice */}
        <div>
          <header className="mb-3 flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Coach Mentorship</span>
            <span className="h-px flex-1 bg-gold/20" aria-hidden />
          </header>
          <p className="mb-5 max-w-2xl text-sm text-muted leading-relaxed">
            For coaching clients ready to start their own coaching practice.{" "}
            <span className="italic font-bold text-plum-soft">The Imperfect Coach Mentorship Experience</span> includes
            mentorship, professional and spiritual frameworks, and the business access you need to launch with confidence.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:max-w-3xl">
            {MENTORSHIP.map((s) => <ServiceCard key={s.slug} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── TESTIMONIALS (marquee) ────────────────────────────── */}
      <TestimonialsMarquee />

      <div className="py-4"><MoonDivider /></div>

      {/* ── FREE LIFE PATH NUMBER ASSESSMENT (inlined with lead magnet) ── */}
      <section id="life-path-number" className="relative overflow-hidden border-y border-white/5 scroll-mt-40">
        {/* Ambient motion: drifting orbs, kept gentle */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-drift-slow" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-plum/12 blur-3xl animate-drift-slow-reverse" aria-hidden />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div className="scroll-slide-left">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Free Guide</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl italic font-medium leading-tight">
              What is your <span className="text-plum-soft">life path number</span>—really?
            </h2>
            <div className="mt-4 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                You&apos;ve always felt there was more to your story than coincidence. Patterns
                that repeat. Lessons that won&apos;t let go. A quiet sense that your life is
                trying to teach you something important.
              </p>
              <p>
                Your <span className="italic text-plum-soft">Life Path Number</span>{" "}
                reveals the core energy you&apos;re here to embody — your natural strengths, hidden challenges, and the soul
                lessons shaping your journey across a lifetime.
              </p>
              <p>
                It&apos;s not just a number; it&apos;s a mirror reflecting who you are becoming and
                how you&apos;re meant to move through the world.
              </p>
            </div>

            <LifePathNumberForm source="home-life-path" />
          </div>

          <div className="relative scroll-slide-right">
            {/* Ambient glow behind portrait */}
            <div className="absolute -inset-6 bg-[radial-gradient(ellipse_at_center,rgba(201,165,102,0.25),transparent_65%)] blur-2xl animate-pulse-slow" aria-hidden />
            {/* Portrait with soft radial mask that blends edges into bg */}
            <div
              className="relative mx-auto max-w-[18rem] aspect-[4/5] [mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_92%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_92%)]"
            >
              <Image
                src="/images/services/Love Your Life.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
