import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/content/blog/posts";
import PostReactions from "./post-reactions";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface/40 shadow-xl transition duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_60px_-20px_rgba(201,165,102,0.35)]">
      <Link href={`/blog/${post.slug}`} className="relative block">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface-2 via-surface to-background">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/30 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/70 to-transparent" aria-hidden />
        </div>
      </Link>

      <div className="relative flex flex-1 flex-col p-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{post.date}</p>
        <Link href={`/blog/${post.slug}`} className="mt-3">
          <h3 className="font-display text-xl italic leading-snug text-white transition-colors group-hover:text-plum-soft">
            {post.title}
          </h3>
        </Link>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
          <PostReactions slug={post.slug} viewsSeed={post.viewsSeed} />
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-gold transition-colors group-hover:text-plum-soft"
          >
            Read
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
