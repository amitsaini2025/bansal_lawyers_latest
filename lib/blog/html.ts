const ALLOWED_TAGS = new Set(["p", "br", "h2", "h3", "h4", "ul", "ol", "li", "strong", "em", "a", "blockquote"]);

/** Browser editing commands use b, i, and div. Map those before the allow-list runs. */
function mapEditorTags(input: string): string {
  return input
    .replace(/<\s*b(\s[^>]*)?>/gi, "<strong>")
    .replace(/<\/\s*b\s*>/gi, "</strong>")
    .replace(/<\s*i(\s[^>]*)?>/gi, "<em>")
    .replace(/<\/\s*i\s*>/gi, "</em>")
    .replace(/<\s*h1(\s[^>]*)?>/gi, "<h2>")
    .replace(/<\/\s*h1\s*>/gi, "</h2>")
    .replace(/<\s*div(\s[^>]*)?>/gi, "<p>")
    .replace(/<\/\s*div\s*>/gi, "</p>");
}

function flattenParagraphs(html: string): string {
  let current = html;
  for (let i = 0; i < 4; i += 1) {
    const next = current.replace(/<p>\s*<p>/gi, "<p>").replace(/<\/p>\s*<\/p>/gi, "</p>");
    if (next === current) return current;
    current = next;
  }
  return current;
}

function inlineList(inner: string): string | null {
  const withBullets = inner.replace(/&bull;|&#8226;|&#x2022;/gi, "•");
  if (withBullets.includes("•")) {
    const parts = withBullets.split(/\s*•\s*/);
    const intro = parts[0].trim();
    const items = parts
      .slice(1)
      .map((item) => item.replace(/(?:\s*<br>\s*)+$/gi, "").trim())
      .filter(Boolean);
    if (items.length > 0) {
      return `${intro ? `<p>${intro}</p>` : ""}<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    }
  }

  const hits: { n: number; start: number; contentStart: number }[] = [];
  const re = /(?:^|(?<=\s))(\d+)\.\s+/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(inner))) {
    hits.push({ n: Number(match[1]), start: match.index, contentStart: match.index + match[0].length });
  }
  const first = hits.findIndex((hit) => hit.n === 1);
  if (first < 0) return null;
  const seq = [hits[first]];
  for (let i = first + 1; i < hits.length; i += 1) {
    if (hits[i].n !== seq[seq.length - 1].n + 1) break;
    seq.push(hits[i]);
  }
  if (seq.length < 2) return null;
  const intro = inner.slice(0, seq[0].start).trim();
  const items = seq
    .map((hit, index) => {
      const end = index + 1 < seq.length ? seq[index + 1].start : inner.length;
      return inner.slice(hit.contentStart, end).trim();
    })
    .filter(Boolean);
  if (items.length < 2) return null;
  return `${intro ? `<p>${intro}</p>` : ""}<ol>${items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
}

/** Turns inline • / 1. 2. 3. runs inside a paragraph into real lists. */
function tidyArticleHtml(html: string): string {
  return flattenParagraphs(html).replace(/<p>([\s\S]*?)<\/p>/gi, (full, inner: string) => inlineList(inner) ?? full);
}

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
      if (!href) return "";
      return `<a href="${escapeAttr(href)}" rel="noopener noreferrer">`;
    })
    .trim();
}

/** HTML saved from the editor: allowed tags only, with browser tags rewritten. */
export function cleanEditorHtml(input: string): string {
  return flattenParagraphs(sanitizeBlogHtml(mapEditorTags(input)));
}

/** First open of a draft: same cleanup, plus inline bullets and numbered runs become lists. */
export function prepareEditorHtml(input: string): string {
  return tidyArticleHtml(cleanEditorHtml(input));
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
