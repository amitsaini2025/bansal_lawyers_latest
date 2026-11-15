import { timingSafeEqual } from "crypto";
import { blogArticles } from "@/lib/blog-data";
import { slugify } from "@/lib/admin/labels";
import { plainTextFromHtml, sanitizeBlogHtml } from "@/lib/blog/html";

export interface IngestDraft {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  body: string;
  published: boolean;
}

export function ingestSecretConfigured(): boolean {
  return Boolean(process.env.BLOG_INGEST_SECRET?.trim());
}

export function ingestAuthorized(authorization: string | null): boolean {
  const secret = process.env.BLOG_INGEST_SECRET?.trim() ?? "";
  if (!secret || !authorization) return false;
  const match = /^Bearer\s+(\S+)$/i.exec(authorization.trim());
  if (!match) return false;
  const given = Buffer.from(match[1]);
  const expected = Buffer.from(secret);
  if (given.length !== expected.length) return false;
  return timingSafeEqual(given, expected);
}

export function staticBlogSlugs(): Set<string> {
  return new Set(blogArticles.map((article) => article.href.replace(/^\/blog\//, "").replace(/\/$/, "")));
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function parseIngestPayload(input: unknown): { ok: true; value: IngestDraft } | { ok: false; error: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, error: "Send a JSON object with title and body." };
  }
  const body = input as Record<string, unknown>;
  const title = text(body.title, 250);
  if (title.length < 8) return { ok: false, error: "A title of at least 8 characters is required." };

  const slug = slugify(text(body.slug, 180) || title);
  if (!slug || slug.length < 3) return { ok: false, error: "A usable slug is required." };
  if (staticBlogSlugs().has(slug)) {
    return { ok: false, error: "That slug is already a page built into the website. Choose another slug." };
  }

  const rawBody = text(body.body, 500_000) || text(body.content, 500_000) || text(body.description, 500_000);
  const html = sanitizeBlogHtml(rawBody);
  const plain = plainTextFromHtml(html, 20_000);
  if (plain.length < 80) return { ok: false, error: "The article body is too short." };

  const category = text(body.category, 80) || "Legal updates";
  const shortDescription = (text(body.short_description, 255) || plain).slice(0, 255);
  const status = text(body.status, 20).toLowerCase();
  const published = body.publish === true || status === "published" || status === "1" || body.status === 1;

  return {
    ok: true,
    value: { title, slug, category, shortDescription, body: html, published },
  };
}
