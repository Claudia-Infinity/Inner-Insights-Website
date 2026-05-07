// Minimal markdown renderer — enough for Claudia's blog posts.
// Handles: ## h2, ### h3, * list items (grouped into <ul>), paragraphs,
// inline **bold** and *italic*, blank-line paragraph breaks.

import React from "react";

type InlineToken =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "italic"; value: string };

// Parse inline: **bold** and *italic*. Order matters — bold first, then italic.
function parseInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  const re = /(\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) tokens.push({ type: "text", value: text.slice(last, m.index) });
    if (m[2] !== undefined) tokens.push({ type: "bold", value: m[2] });
    else if (m[3] !== undefined) tokens.push({ type: "italic", value: m[3] });
    last = m.index + m[0].length;
  }
  if (last < text.length) tokens.push({ type: "text", value: text.slice(last) });
  return tokens;
}

function RenderInline({ text }: { text: string }) {
  const tokens = parseInline(text);
  return (
    <>
      {tokens.map((t, i) => {
        if (t.type === "bold")   return <strong key={i} className="font-semibold text-white">{t.value}</strong>;
        if (t.type === "italic") return <em key={i} className="italic text-plum-soft">{t.value}</em>;
        return <React.Fragment key={i}>{t.value}</React.Fragment>;
      })}
    </>
  );
}

type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p";  text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

function parseBlocks(md: string): Block[] {
  const lines = md.split(/\r?\n/);
  const blocks: Block[] = [];
  let buf: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let listItems: string[] = [];

  const flushPara = () => {
    if (buf.length) {
      blocks.push({ type: "p", text: buf.join(" ").trim() });
      buf = [];
    }
  };
  const flushList = () => {
    if (listType && listItems.length) {
      blocks.push({ type: listType, items: listItems });
      listItems = [];
      listType = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    // heading
    const h2 = /^##\s+(.+)$/.exec(line);
    const h3 = /^###\s+(.+)$/.exec(line);
    const li = /^\*\s+(.+)$/.exec(line);
    const oli = /^\d+\.\s+(.+)$/.exec(line);

    if (h2) {
      flushPara(); flushList();
      blocks.push({ type: "h2", text: h2[1] });
      continue;
    }
    if (h3) {
      flushPara(); flushList();
      blocks.push({ type: "h3", text: h3[1] });
      continue;
    }
    if (li) {
      flushPara();
      if (listType !== "ul") { flushList(); listType = "ul"; }
      listItems.push(li[1]);
      continue;
    }
    if (oli) {
      flushPara();
      if (listType !== "ol") { flushList(); listType = "ol"; }
      listItems.push(oli[1]);
      continue;
    }
    if (line === "") {
      flushPara(); flushList();
      continue;
    }
    // blank list breaker not hit — continue a paragraph (append)
    flushList();
    buf.push(line);
  }
  flushPara(); flushList();
  return blocks;
}

export default function Markdown({ source }: { source: string }) {
  const blocks = parseBlocks(source);
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        if (b.type === "h2") {
          return (
            <h2 key={i} className="font-display text-2xl sm:text-3xl italic font-medium text-white mt-10 mb-2">
              <RenderInline text={b.text} />
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3 key={i} className="text-lg sm:text-xl font-semibold text-white mt-6">
              <RenderInline text={b.text} />
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="ml-5 list-disc space-y-2 text-muted marker:text-gold/60">
              {b.items.map((it, j) => (
                <li key={j} className="leading-relaxed"><RenderInline text={it} /></li>
              ))}
            </ul>
          );
        }
        if (b.type === "ol") {
          return (
            <ol key={i} className="ml-5 list-decimal space-y-2 text-muted marker:text-gold/60">
              {b.items.map((it, j) => (
                <li key={j} className="leading-relaxed"><RenderInline text={it} /></li>
              ))}
            </ol>
          );
        }
        return (
          <p key={i} className="text-base leading-relaxed text-muted">
            <RenderInline text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
