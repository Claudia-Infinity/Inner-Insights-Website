import type { Metadata } from "next";
import MerchCard from "@/components/merch-card";

export const metadata: Metadata = {
  title: "Shop",
  description: "Books, journals, digital guides, and gift cards from Inner Insights by Claudia Romo.",
};

type Item = {
  slug: string;
  title: string;
  subtitle?: string;
  img: string;
  href: string;
  cta?: string;
  external?: boolean;
  aspectClass?: string;
};

const BOOKS: Item[] = [
  {
    slug: "money-flows",
    title: "Money Flows With Ease",
    subtitle: "An inspiring manifestation journal with affirmations and easy money-flow practices.",
    img: "/images/merch/merch-book-money-flows-with-ease.jpg",
    href: "https://www.amazon.com/Money-Flows-Ease-Manifestation-Affirmations/dp/B0DS286K1J/ref=sr_1_5?crid=1BZ08FUDY9H2H",
    cta: "Buy on Amazon",
    external: true,
  },
  {
    slug: "new-year-new-you",
    title: "The New Year, New You Journal",
    subtitle: "Bring your vision to life and make it happen.",
    img: "/images/merch/merch-book-new-year-new-you.jpg",
    href: "https://www.amazon.com/New-Year-You-Journal-Vision/dp/B0DS53MZ6D/ref=sr_1_3?crid=1BZ08FUDY9H2H",
    cta: "Buy on Amazon",
    external: true,
  },
  {
    slug: "self-love-for-empaths",
    title: "Self-Love For Empaths",
    subtitle: "A self-love manifestation journal with quotes, activations, and energy calibration tips.",
    img: "/images/merch/merch-book-self-love-for-empaths.jpg",
    href: "https://www.amazon.com/Self-Love-Empaths-Manifestation-Activations-Unconditional/dp/B0DTJ8331G/ref=sr_1_1?crid=1BZ08FUDY9H2H",
    cta: "Buy on Amazon",
    external: true,
  },
  {
    slug: "rich-vibes",
    title: "The Rich Vibes Journal",
    subtitle: "Money affirmations and easy manifestation practices to attract more money.",
    img: "/images/merch/merch-the-rich-vibes-journal.jpg",
    href: "https://www.amazon.com/Rich-Vibes-Journal-Affirmations-Manifestation/dp/B0DS27L23N/ref=sr_1_4?crid=1BZ08FUDY9H2H",
    cta: "Buy on Amazon",
    external: true,
  },
];

const GUIDES: Item[] = [
  { slug: "vision-hacks",       title: "Vision Board Hacks",          subtitle: "Step-by-step to a vision board that actually works.", img: "/images/merch/guide-vision-board-hacks.jpeg",         href: "https://claudiainfinity.gumroad.com/l/kremsw",        cta: "Buy on Gumroad", external: true },
  { slug: "magnetize-vision",   title: "Magnetize Your Vision Board", subtitle: "Make your board a manifestation magnet.",            img: "/images/merch/guide-magnetize-your-vision-board.jpeg", href: "https://claudiainfinity.gumroad.com/l/tihgl",        cta: "Buy on Gumroad", external: true },
  { slug: "top-manifesting",    title: "Top Manifesting Secrets",     subtitle: "My highest-leverage manifestation practices.",       img: "/images/merch/guide-top-manifesting-secrets.jpeg",    href: "https://claudiainfinity.gumroad.com/l/tgays",        cta: "Buy on Gumroad", external: true },
  { slug: "intuitive-tarot",    title: "The Intuitive Tarot Guide",   subtitle: "Read cards with confidence and intuition.",          img: "/images/merch/guide-the-intuitive-tarot.jpeg",        href: "https://claudiainfinity.gumroad.com/l/orfaf",        cta: "Buy on Gumroad", external: true },
  { slug: "love-myself",        title: "How I Learned to Love Myself",subtitle: "The inner journey in a gentle workbook.",            img: "/images/merch/guide-how-i-learned-to-love-myself.jpeg",href: "https://claudiainfinity.gumroad.com/l/jrepv",        cta: "Buy on Gumroad", external: true },
  { slug: "sacred-space",       title: "Sacred Space: Creating an Altar", subtitle: "Create a space for meditation, magic, and ritual.", img: "/images/merch/guide-sacred-space-altar.jpeg",      href: "https://claudiainfinity.gumroad.com/l/altar",        cta: "Buy on Gumroad", external: true },
  { slug: "unlock-love",        title: "Unlock True Love",            subtitle: "A complete step-by-step attraction blueprint.",      img: "/images/merch/guide-unlock-true-love.jpeg",          href: "https://claudiainfinity.gumroad.com/l/truelove",     cta: "Buy on Gumroad", external: true },
  { slug: "attract-soulmate",   title: "Attract Your Soulmate Faster",subtitle: "Four powerful high-frequency love practices.",       img: "/images/merch/guide-attract-soulmate-faster.jpeg",   href: "https://claudiainfinity.gumroad.com/l/attractlovefast", cta: "Buy on Gumroad", external: true },
];

const GIFT_CARD_URL = "https://innerinsights.simplybook.me/v2/#gift-card";

const GIFTS: Item[] = [
  { slug: "gift-session",       title: "Gift Card — Session with Claudia",  subtitle: "One session of your giftee's choice.",              img: "/images/merch/gift-session-with-claudia.jpeg", href: GIFT_CARD_URL, cta: "Gift Now", external: true },
  { slug: "gift-class",         title: "Gift Card — Class with Claudia",    subtitle: "Entry to one of Claudia's intuitive classes.",      img: "/images/merch/gift-class-with-claudia.jpeg",   href: GIFT_CARD_URL, cta: "Gift Now", external: true },
  { slug: "gift-birthday",      title: "Gift Card — Birthday Reading",      subtitle: "A personalized forecast for the year ahead.",       img: "/images/merch/gift-birthday-reading.jpeg",     href: GIFT_CARD_URL, cta: "Gift Now", external: true },
  { slug: "gift-coaching",      title: "Gift Card — Coaching Session",      subtitle: "One à la carte intuitive coaching session.",        img: "/images/merch/gift-coaching-session.jpeg",     href: GIFT_CARD_URL, cta: "Gift Now", external: true },
];

// Claudia picks favourites later; these are sensible defaults.
const FEATURED: Item[] = [
  { ...BOOKS[2] },   // Self-Love For Empaths
  { ...GUIDES[0] },  // Vision Board Hacks
  { ...BOOKS[3] },   // Rich Vibes
  { ...GUIDES[7] },  // Attract Your Soulmate Faster
];

function CategoryHeading({ label }: { label: string }) {
  return (
    <header className="mb-6 flex items-center gap-4">
      <span className="text-[11px] uppercase tracking-[0.4em] text-gold">{label}</span>
      <span className="h-px flex-1 bg-gold/20" aria-hidden />
    </header>
  );
}

function Grid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((it) => (
        <MerchCard
          key={it.slug}
          title={it.title}
          subtitle={it.subtitle}
          img={it.img}
          href={it.href}
          cta={it.cta}
          external={it.external}
          aspectClass={it.aspectClass}
        />
      ))}
    </div>
  );
}

export default function MerchPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(201,165,102,0.1),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(151,71,255,0.1),transparent_55%)]" aria-hidden />

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <header className="text-center mb-14 scroll-reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Shop</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl italic font-medium">
            Inner Insights <span className="text-plum-soft">collection</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-muted">
            Books, guides, and gift cards to support your spiritual
            practice. Claudia&apos;s own words, tools, and teachings.
          </p>
        </header>

        {/* Featured */}
        <section className="mb-16 scroll-reveal">
          <div className="mx-auto mb-8 flex max-w-3xl items-center gap-6">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" aria-hidden />
            <h2 className="font-display text-2xl sm:text-3xl italic font-medium whitespace-nowrap">
              <span className="text-plum-soft">Featured</span> picks
            </h2>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" aria-hidden />
          </div>
          <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
            {FEATURED.map((it) => (
              <MerchCard
                key={`featured-${it.slug}`}
                title={it.title}
                subtitle={it.subtitle}
                img={it.img}
                href={it.href}
                cta={it.cta}
                external={it.external}
                badge="Featured"
              />
            ))}
          </div>
        </section>

        {/* Books */}
        <section className="mb-16 scroll-reveal">
          <CategoryHeading label="Books & Journals" />
          <Grid items={BOOKS} />
        </section>

        {/* Digital Guides */}
        <section className="mb-16 scroll-reveal">
          <CategoryHeading label="Digital Guides" />
          <Grid items={GUIDES} />
        </section>

        {/* Gift Cards */}
        <section className="mb-8 scroll-reveal">
          <CategoryHeading label="Gift Cards" />
          <Grid items={GIFTS} />
        </section>
      </section>
    </div>
  );
}
