const ALLOWED_TAGS = new Set(["p", "br", "h2", "h3", "h4", "ul", "ol", "li", "strong", "em", "a", "blockquote"]);

function escapeText(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value: string): string {
  return escapeText(value).replace(/"/g, "&quot;");
}

function safeUrl(value: string): string | null {
  const url = value.trim();
  if (url.startsWith("/") && !url.startsWith("//")) return url;
  if (/^https?:\/\//i.test(url)) return url;
  if (/^mailto:[^\s]+$/i.test(url)) return url;
  return null;
}

/** Keeps a small set of article tags. Plain text becomes paragraphs. */
export function sanitizeBlogHtml(input: string): string {
  const source = input.replace(/\u0000/g, "").trim();
  if (!source) return "";
  if (!/<[a-z!/]/i.test(source)) {
    return source
      .split(/\n{2,}/)
      .map((paragraph) => `<p>${escapeText(paragraph).replace(/\n/g, "<br>")}</p>`)
      .join("");
  }

  const withoutDangerousBlocks = source
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\s*(script|style|iframe|object|embed|form|svg|math)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|style|iframe|object|embed|form|svg|math)\b[^>]*\/?\s*>/gi, "");

  return withoutDangerousBlocks
    .replace(/<\/?\s*([a-z0-9]+)([^>]*)>/gi, (match, rawTag: string, rawAttrs: string) => {
      const tag = rawTag.toLowerCase();
      if (!ALLOWED_TAGS.has(tag)) return "";
      if (match.startsWith("</")) return `</${tag}>`;
      if (tag === "br") return "<br>";
      if (tag !== "a") return `<${tag}>`;
      const hrefMatch = /href\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(rawAttrs);
      const href = safeUrl(hrefMatch?.[1] || hrefMatch?.[2] || hrefMatch?.[3] || "");
      if (!href) return "<a>";
      return `<a href="${escapeAttr(href)}" rel="noopener noreferrer">`;
    })
    .trim();
}

export function plainTextFromHtml(html: string, max = 240): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}
