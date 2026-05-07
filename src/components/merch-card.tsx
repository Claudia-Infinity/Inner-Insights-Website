import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  img: string;
  href: string;
  cta?: string;
  badge?: string;
  external?: boolean;
  /** Container aspect, e.g. "aspect-[3/4]" — set to match the source for full-content display. */
  aspectClass?: string;
};

// Book covers are portrait and vary in crop — use object-contain on a
// branded gradient backdrop so nothing gets chopped off, matching how she
// intended it to be shown.
export default function MerchCard({ title, subtitle, img, href, cta = "Buy Now", badge, external, aspectClass = "aspect-[3/4]" }: Props) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};
  return (
    <a
      href={href}
      {...linkProps}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface/40 shadow-xl transition duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_60px_-20px_rgba(201,165,102,0.4)]"
    >
      {badge && (
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-background shadow-md">
          {badge}
        </span>
      )}

      <div className={`relative ${aspectClass} overflow-hidden bg-gradient-to-br from-surface-2 via-surface to-background`}>
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition duration-500 group-hover:ring-gold/30" aria-hidden />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <h3 className="font-display text-base italic leading-snug text-white">{title}</h3>
        {subtitle && <p className="mt-2 text-xs leading-relaxed text-muted">{subtitle}</p>}
        <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-gold transition-colors group-hover:text-plum-soft">
          {cta}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </a>
  );
}
