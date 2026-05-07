import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/content/blog/posts";
import BlogCard from "@/components/blog-card";
import PostReactions from "@/components/post-reactions";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, rituals, and intuitive guidance from Claudia Romo at Inner Insights.",
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(201,165,102,0.1),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(151,71,255,0.1),transparent_55%)]" aria-hidden />

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <header className="text-center mb-14 scroll-reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Journal</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl italic font-medium">
            Want more <span className="text-plum-soft">insights?</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-muted">
            Rituals, astrology forecasts, life coaching, and soulful essays,
            delivered in my own words.
          </p>
        </header>

        {/* Featured post */}
        <article className="mb-16 grid gap-8 md:grid-cols-[1.2fr_1fr] items-center scroll-reveal">
          <Link href={`/blog/${featured.slug}`} className="group relative block overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
            <div className="relative aspect-[16/10] bg-gradient-to-br from-surface-2 via-surface to-background">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden />
            </div>
          </Link>
          <div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">Featured</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted">{featured.date}</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl italic font-medium leading-tight">
              <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-plum-soft">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-4 text-muted leading-relaxed">{featured.excerpt}</p>

            <div className="mt-6 flex items-center gap-4">
              <PostReactions slug={featured.slug} viewsSeed={featured.viewsSeed} variant="inline" />
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-xs uppercase tracking-[0.25em] text-ink transition hover:border-gold hover:bg-gold/10"
              >
                Read article
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Rest of the grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
