import Image from "next/image";

type Ribbon = { label: string; className: string };

type Props = {
  slug: string;
  title: string;
  img: string;
  blurb: string;
  ribbon?: Ribbon;
  objectPosition?: string;
  href?: string;
};

const BOOKING_URL = "https://innerinsights.simplybook.me/v2/";

export default function ServiceCard({ title, img, blurb, ribbon, objectPosition, href }: Props) {
  return (
    <a
      href={href ?? BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="scroll-reveal group relative block overflow-hidden rounded-2xl border border-white/5 bg-surface/40 shadow-xl transition duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_60px_-20px_rgba(201,165,102,0.4)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          style={objectPosition ? { objectPosition } : undefined}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Blend edges into dark background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-background/30 opacity-60 mix-blend-multiply" aria-hidden />

        {/* Corner ribbon */}
        {ribbon && (
          <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 overflow-hidden">
            <span
              className={`absolute left-1/2 top-5 block w-[140%] -translate-x-1/2 rotate-45 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.2em] shadow-md ${ribbon.className}`}
            >
              {ribbon.label}
            </span>
          </div>
        )}

        {/* Gold hairline on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition duration-500 group-hover:ring-gold/40" aria-hidden />
      </div>

      <div className="relative p-4">
        <h3 className="font-display text-lg italic text-white">{title}</h3>
        <div className="mt-1.5 h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
        <p className="mt-2 text-xs leading-relaxed text-muted">{blurb}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-gold transition-colors group-hover:text-plum-soft">
          Book
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}
