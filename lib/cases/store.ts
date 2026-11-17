import type { RowDataPacket } from "mysql2/promise";
import { builtInCases, staticCaseSlugs, type CaseCardItem } from "@/lib/cases/static";
import { plainTextFromHtml } from "@/lib/blog/html";
import { adminExecute, adminRows, columnsOf, tableReady } from "@/lib/admin/db";
import { slugTaken } from "@/lib/admin/data";
import type { CaseIngestDraft, CaseIngestPatch } from "@/lib/cases/ingest";

export const DEFAULT_CASE_IMAGE = "/images/cases/court-case-review.webp";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export interface PublishedCase {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  practiceArea: string;
  imageSrc: string;
  imageAlt: string;
  publishedAt: Date;
  modifiedAt: Date;
}

function pick(row: RowDataPacket, keys: string[]): string {
  for (const key of keys) {
    const value = row[key];
    if (value != null && String(value).trim()) return String(value).trim();
  }
  return "";
}

function asDate(value: unknown, fallback: Date): Date {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
  if (typeof value === "string" || typeof value === "number") {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return fallback;
}

function melbourneLabel(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).formatToParts(date);
  const day = parts.find((part) => part.type === "day")?.value ?? "1";
  const month = Number(parts.find((part) => part.type === "month")?.value ?? "1");
  const year = parts.find((part) => part.type === "year")?.value ?? "2026";
  return `${MONTHS[month - 1] ?? "Jan"} ${day}, ${year}`;
}

function localImage(value: string): string {
  if (!value.startsWith("/images/") || value.includes("..") || value.includes("\\")) return "";
  return value;
}

function publishedWhere(statusColumn: string): string {
  return `(${statusColumn} = 1 OR ${statusColumn} = '1' OR LOWER(${statusColumn}) = 'published')`;
}

async function publishedRows(): Promise<RowDataPacket[]> {
  const problem = await tableReady("recent_cases", ["id", "slug"]);
  if (problem) return [];
  const columns = await columnsOf("recent_cases");
  if (!columns.has("status")) return [];
  if (!columns.has("title")) return [];
  const order = ["published_at", "created_at", "updated_at", "id"].find((column) => columns.has(column)) ?? "id";
  return adminRows<RowDataPacket>(
    `SELECT * FROM recent_cases WHERE ${publishedWhere("status")} ORDER BY ${order} DESC LIMIT 200`
  );
}

function toCase(row: RowDataPacket): PublishedCase | null {
  const slug = pick(row, ["slug"]);
  const title = pick(row, ["title", "name"]);
  const body = pick(row, ["description", "content", "body"]);
  if (!slug || !title || !body) return null;
  const plain = plainTextFromHtml(body, 20_000);
  const now = new Date();
  const publishedAt = asDate(row.published_at ?? row.created_at ?? row.updated_at, now);
  const modifiedAt = asDate(row.updated_at ?? row.published_at ?? row.created_at, publishedAt);
  const imageSrc = localImage(pick(row, ["image", "featured_image", "thumbnail", "image_src"])) || DEFAULT_CASE_IMAGE;
  return {
    id: Number(row.id),
    slug,
    title,
    description: pick(row, ["short_description", "excerpt", "meta_description"]).slice(0, 255) || plain.slice(0, 240),
    body,
    practiceArea: pick(row, ["category", "practice_area"]) || "Case update",
    imageSrc,
    imageAlt: pick(row, ["image_alt"]) || title,
    publishedAt,
    modifiedAt,
  };
}

export async function listPublishedCases(): Promise<PublishedCase[]> {
  try {
    const rows = await publishedRows();
    return rows.map(toCase).filter((item): item is PublishedCase => item !== null);
  } catch (error) {
    console.error("[Success stories] Could not load published stories:", error);
    return [];
  }
}

export async function getPublishedCase(slug: string): Promise<PublishedCase | null> {
  if (staticCaseSlugs().has(slug)) return null;
  const cases = await listPublishedCases();
  return cases.find((item) => item.slug === slug) ?? null;
}

export function toCaseCard(item: PublishedCase): CaseCardItem {
  return {
    title: item.title,
    slug: `/success-stories/${item.slug}`,
    practiceArea: item.practiceArea,
    publishedDate: melbourneLabel(item.publishedAt),
    summary: item.description,
    imageSrc: item.imageSrc,
  };
}

export interface SavedCaseDraft {
  id: number;
  slug: string;
  published: boolean;
}

function rowPublished(row: RowDataPacket): boolean {
  const status = row.status;
  if (status === 1 || status === "1") return true;
  return typeof status === "string" && status.toLowerCase() === "published";
}

export async function saveIngestedCase(draft: CaseIngestDraft): Promise<SavedCaseDraft> {
  const problem = await tableReady("recent_cases", ["id", "slug"]);
  if (problem) throw new Error(problem);
  const columns = await columnsOf("recent_cases");
  if (!columns.has("title")) throw new Error("The recent_cases table has no title column.");
  if (!columns.has("description") && !columns.has("content") && !columns.has("body")) {
    throw new Error("The recent_cases table has no body column.");
  }
  if (!columns.has("status")) throw new Error("The recent_cases table has no status column.");
  if (staticCaseSlugs().has(draft.slug)) {
    throw new Error("That slug is already a case page built into the website. Choose another slug.");
  }
  if (await slugTaken("recent_cases", "slug", draft.slug, null)) {
    throw new Error("That slug is already used.");
  }

  const values = new Map<string, string | number | Date | null>();
  const put = (column: string, value: string | number | Date | null) => {
    if (columns.has(column)) values.set(column, value);
  };

  put("title", draft.title);
  put("slug", draft.slug);
  put("short_description", draft.shortDescription);
  put("description", draft.body);
  put("content", draft.body);
  put("body", draft.body);
  put("status", draft.published ? 1 : 0);
  put("category", draft.practiceArea);
  put("practice_area", draft.practiceArea);
  put("meta_title", draft.title.slice(0, 190));
  put("meta_description", draft.shortDescription.slice(0, 500));
  put("image", DEFAULT_CASE_IMAGE);
  put("image_alt", draft.title.slice(0, 250));

  const now = new Date();
  put("created_at", now);
  put("updated_at", now);
  if (draft.published) put("published_at", now);

  const entries = [...values.entries()];
  if (entries.length === 0) throw new Error("The recent_cases table has no columns this site can write.");
  const names = entries.map(([column]) => column).join(", ");
  const marks = entries.map(() => "?").join(", ");
  const result = await adminExecute(
    `INSERT INTO recent_cases (${names}) VALUES (${marks})`,
    entries.map(([, value]) => value)
  );
  return { id: result.insertId, slug: draft.slug, published: draft.published };
}

export async function findIngestedCase(ref: string): Promise<RowDataPacket | null> {
  const problem = await tableReady("recent_cases", ["id", "slug"]);
  if (problem) throw new Error(problem);
  let key = ref.trim();
  try {
    key = decodeURIComponent(key).trim();
  } catch {
    return null;
  }
  if (!key || key.length > 180) return null;
  if (/^\d+$/.test(key)) {
    const byId = await adminRows<RowDataPacket>("SELECT * FROM recent_cases WHERE id = ? LIMIT 1", [Number(key)]);
    if (byId[0]) return byId[0];
  }
  const bySlug = await adminRows<RowDataPacket>("SELECT * FROM recent_cases WHERE slug = ? LIMIT 1", [key]);
  return bySlug[0] ?? null;
}

export async function updateIngestedCase(ref: string, patch: CaseIngestPatch): Promise<SavedCaseDraft> {
  const row = await findIngestedCase(ref);
  if (!row) throw new Error("That success story was not found.");
  const id = Number(row.id);
  const columns = await columnsOf("recent_cases");
  if (!columns.has("status")) throw new Error("The recent_cases table has no status column.");

  const currentSlug = pick(row, ["slug"]);
  const nextSlug = patch.slug ?? currentSlug;
  if (!nextSlug) throw new Error("A usable slug is required.");
  if (patch.slug && patch.slug !== currentSlug) {
    if (staticCaseSlugs().has(patch.slug)) {
      throw new Error("That slug is already a case page built into the website. Choose another slug.");
    }
    if (await slugTaken("recent_cases", "slug", patch.slug, id)) throw new Error("That slug is already used.");
  }

  const values = new Map<string, string | number | Date | null>();
  const put = (column: string, value: string | number | Date | null) => {
    if (columns.has(column)) values.set(column, value);
  };

  if (patch.title) {
    put("title", patch.title);
    put("meta_title", patch.title.slice(0, 190));
    put("image_alt", patch.title.slice(0, 250));
  }
  if (patch.slug) put("slug", patch.slug);
  if (patch.body) {
    put("description", patch.body);
    put("content", patch.body);
    put("body", patch.body);
  }
  if (patch.shortDescription) {
    put("short_description", patch.shortDescription);
    put("meta_description", patch.shortDescription.slice(0, 500));
  }
  if (patch.practiceArea) {
    put("category", patch.practiceArea);
    put("practice_area", patch.practiceArea);
  }
  if (patch.published !== undefined) {
    put("status", patch.published ? 1 : 0);
    if (patch.published) put("published_at", new Date());
  }
  const changed = [...values.keys()];
  put("updated_at", new Date());
  if (changed.length === 0) throw new Error("The recent_cases table has no column for that change.");

  const entries = [...values.entries()];
  const assignments = entries.map(([column]) => `${column} = ?`).join(", ");
  await adminExecute(`UPDATE recent_cases SET ${assignments} WHERE id = ?`, [...entries.map(([, value]) => value), id]);
  return { id, slug: nextSlug, published: patch.published ?? rowPublished(row) };
}

export async function deleteIngestedCase(ref: string): Promise<{ id: number; slug: string }> {
  const row = await findIngestedCase(ref);
  if (!row) throw new Error("That success story was not found.");
  const id = Number(row.id);
  await adminExecute("DELETE FROM recent_cases WHERE id = ?", [id]);
  return { id, slug: pick(row, ["slug"]) };
}

export async function listRecentCaseCards(): Promise<CaseCardItem[]> {
  const reserved = new Set(builtInCases.map((item) => item.slug.replace(/\/$/, "")));
  const extras = (await listPublishedCases())
    .map(toCaseCard)
    .filter((item) => !reserved.has(item.slug.replace(/\/$/, "")));
  return [...extras, ...builtInCases];
}
