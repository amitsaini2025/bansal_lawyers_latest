import { slugify } from "@/lib/admin/labels";
import { plainTextFromHtml, sanitizeBlogHtml } from "@/lib/blog/html";
import { staticCaseSlugs } from "@/lib/cases/static";

export interface CaseIngestDraft {
  title: string;
  slug: string;
  practiceArea: string;
  shortDescription: string;
  body: string;
  published: boolean;
}

export interface CaseIngestPatch {
  title?: string;
  slug?: string;
  practiceArea?: string;
  shortDescription?: string;
  body?: string;
  published?: boolean;
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function wantsPublished(body: Record<string, unknown>): boolean {
  const status = text(body.status, 20).toLowerCase();
  return body.publish === true || status === "published" || status === "1" || body.status === 1;
}

function reserved(slug: string): boolean {
  return staticCaseSlugs().has(slug);
}

export function parseCaseIngestPayload(input: unknown): { ok: true; value: CaseIngestDraft } | { ok: false; error: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, error: "Send a JSON object with title and body." };
  }
  const body = input as Record<string, unknown>;
  const title = text(body.title, 250);
  if (title.length < 8) return { ok: false, error: "A title of at least 8 characters is required." };

  const slug = slugify(text(body.slug, 180) || title);
  if (!slug || slug.length < 3) return { ok: false, error: "A usable slug is required." };
  if (reserved(slug)) {
    return { ok: false, error: "That slug is already a case page built into the website. Choose another slug." };
  }

  const rawBody = text(body.body, 500_000) || text(body.content, 500_000) || text(body.description, 500_000);
  const html = sanitizeBlogHtml(rawBody);
  const plain = plainTextFromHtml(html, 20_000);
  if (plain.length < 80) return { ok: false, error: "The case body is too short." };

  const practiceArea = text(body.category, 80) || text(body.practice_area, 80) || "Case update";
  const shortDescription = (text(body.short_description, 255) || plain).slice(0, 255);

  return {
    ok: true,
    value: { title, slug, practiceArea, shortDescription, body: html, published: wantsPublished(body) },
  };
}

export function parseCaseIngestUpdate(input: unknown): { ok: true; value: CaseIngestPatch } | { ok: false; error: string } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, error: "Send a JSON object with the fields to change." };
  }
  const body = input as Record<string, unknown>;
  const patch: CaseIngestPatch = {};

  if ("title" in body) {
    const title = text(body.title, 250);
    if (title.length < 8) return { ok: false, error: "A title of at least 8 characters is required." };
    patch.title = title;
  }

  if ("slug" in body) {
    const slug = slugify(text(body.slug, 180));
    if (!slug || slug.length < 3) return { ok: false, error: "A usable slug is required." };
    if (reserved(slug)) {
      return { ok: false, error: "That slug is already a case page built into the website. Choose another slug." };
    }
    patch.slug = slug;
  }

  if ("body" in body || "content" in body || "description" in body) {
    const rawBody = text(body.body, 500_000) || text(body.content, 500_000) || text(body.description, 500_000);
    const html = sanitizeBlogHtml(rawBody);
    if (plainTextFromHtml(html, 20_000).length < 80) return { ok: false, error: "The case body is too short." };
    patch.body = html;
  }

  if ("category" in body || "practice_area" in body) {
    const practiceArea = text(body.category, 80) || text(body.practice_area, 80);
    if (!practiceArea) return { ok: false, error: "Practice area cannot be empty." };
    patch.practiceArea = practiceArea;
  }

  if ("short_description" in body) {
    const shortDescription = text(body.short_description, 255);
    if (!shortDescription) return { ok: false, error: "Short description cannot be empty." };
    patch.shortDescription = shortDescription;
  }

  if ("status" in body || "publish" in body) patch.published = wantsPublished(body);

  if (
    patch.title === undefined &&
    patch.slug === undefined &&
    patch.practiceArea === undefined &&
    patch.shortDescription === undefined &&
    patch.body === undefined &&
    patch.published === undefined
  ) {
    return {
      ok: false,
      error: "Send at least one field to update: title, slug, category, short_description, body, or status.",
    };
  }

  return { ok: true, value: patch };
}
