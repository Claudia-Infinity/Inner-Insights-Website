"use client";

import { useState } from "react";
import BlogCard from "@/components/blog-card";
import type { Post } from "@/content/blog/posts";

const PAGE_SIZE = 12;

export default function BlogList({ posts }: { posts: Post[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 text-xs uppercase tracking-[0.25em] text-ink transition hover:border-gold hover:bg-gold/10"
          >
            Load more stories
            <span aria-hidden>↓</span>
          </button>
        </div>
      )}
      <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-muted">
        Showing {shown.length} of {posts.length}
      </p>
    </>
  );
}
