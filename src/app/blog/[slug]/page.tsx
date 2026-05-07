import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS } from "@/content/blog/posts";
import Markdown from "@/components/markdown";
import PostReactions from "@/components/post-reactions";
import BlogCard from "@/components/blog-card";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="relative overflow-hidden">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(201,165,102,0.1),transparent_55%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_90%,rgba(151,71,255,0.1),transparent_55%)]" aria-hidden />

      {/* ── HEADER ───────────────────────────────────────────── */}
      <header className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.3em] text-gold hover:text-plum-soft">
          <span aria-hidden>←</span> Back to all posts
        </Link>
        <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-muted">{post.date}</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl italic font-medium leading-[1.1] text-white">
          {post.title}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
          {post.excerpt}
        </p>
        <div className="mt-6 flex justify-center">
          <PostReactions slug={post.slug} viewsSeed={post.viewsSeed} variant="panel" trackView />
        </div>
      </header>

      {/* ── HERO IMAGE ───────────────────────────────────────── */}
      <figure className="relative mx-auto mb-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(201,165,102,0.15),transparent_70%)] blur-2xl" aria-hidden />
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl ring-1 ring-white/5 shadow-2xl [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 80vw, 100vw"
            quality={90}
            priority
            className="object-cover"
          />
          {/* Subtle brand glow overlay to tie image to palette */}
          <div className="absolute inset-0 bg-gradient-to-br from-plum/10 via-transparent to-gold/10 mix-blend-overlay pointer-events-none" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" aria-hidden />
        </div>
      </figure>

      {/* ── BODY ─────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 pb-20">
        <Markdown source={post.body} />

        {/* End-of-post reactions + CTA */}
        <div className="mt-14 rounded-2xl border border-white/5 bg-surface/40 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Enjoyed this?</p>
              <p className="mt-1 text-sm text-muted">Give it some love and share it with a soul who needs it.</p>
            </div>
            <PostReactions slug={post.slug} viewsSeed={post.viewsSeed} variant="panel" />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-gold/20 hover:bg-gold/90 transition"
            >
              Contact me
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Book a service
            </Link>
          </div>
        </div>
      </div>

      {/* ── RELATED ──────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto mb-10 flex max-w-3xl items-center gap-6 px-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" aria-hidden />
          <h2 className="font-display text-2xl sm:text-3xl italic font-medium whitespace-nowrap">
            Keep <span className="text-plum-soft">reading</span>
          </h2>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" aria-hidden />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </section>
    </article>
  );
}
