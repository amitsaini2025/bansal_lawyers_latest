import type { RowDataPacket } from "mysql2/promise";
import type { BlogArticleItem } from "@/components/blog/BlogListClient";
import { blogArticles } from "@/lib/blog-data";
import { slugify } from "@/lib/admin/labels";
import { staticBlogSlugs, type IngestDraft, type IngestPatch } from "@/lib/blog/ingest";
import { plainTextFromHtml } from "@/lib/blog/html";
import { adminExecute, adminRows, columnsOf, tableReady } from "@/lib/admin/db";
import { slugTaken } from "@/lib/admin/data";

export const DEFAULT_BLOG_IMAGE = "/images/melbourne-legal-chambers.webp";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export interface PublishedBlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  category: string;
  imageSrc: string;
  imageFull: string;
  imageAlt: string;
  publishedAt: Date;
  modifiedAt: Date;
  readTime: string;
  wordCount: number;
}

export interface SavedBlogDraft {
  id: number;
  slug: string;
  published: boolean;
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
  return value === DEFAULT_BLOG_IMAGE ? "" : value;
}

function articleImage(thumb: string, featured: string): string {
  if (featured && !featured.endsWith("-thumb.webp")) return featured;
  if (thumb.endsWith("-thumb.webp")) return thumb.replace(/-thumb\.webp$/, ".webp");
  return thumb;
}

function readTime(words: number): string {
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function publishedWhere(statusColumn: string): string {
  return `(${statusColumn} = 1 OR ${statusColumn} = '1' OR LOWER(${statusColumn}) = 'published')`;
}

async function publishedRows(): Promise<RowDataPacket[]> {
  const problem = await tableReady("blogs", ["id", "slug"]);
  if (problem) return [];
  const columns = await columnsOf("blogs");
  if (!columns.has("status")) return [];
  const titleColumn = columns.has("title") ? "title" : columns.has("name") ? "name" : "";
  if (!titleColumn) return [];
  const order = ["published_at", "created_at", "updated_at", "id"].find((column) => columns.has(column)) ?? "id";
  const categoryColumns = await columnsOf("blog_categories").catch(() => new Set<string>());
  const canJoin = columns.has("parent_category") && categoryColumns.has("id") && categoryColumns.has("name");
  const select = canJoin ? "blogs.*, blog_categories.name AS category_name" : "blogs.*";
  const join = canJoin ? "LEFT JOIN blog_categories ON blog_categories.id = blogs.parent_category" : "";
  return adminRows<RowDataPacket>(
    `SELECT ${select} FROM blogs ${join} WHERE ${publishedWhere("blogs.status")} ORDER BY blogs.${order} DESC LIMIT 200`
  );
}

function toPost(row: RowDataPacket): PublishedBlogPost | null {
  const slug = pick(row, ["slug"]);
  const title = pick(row, ["title", "name"]);
  const body = pick(row, ["description", "content", "body"]);
  if (!slug || !title || !body) return null;
  const plain = plainTextFromHtml(body, 20_000);
  const words = plain.split(/\s+/).filter(Boolean).length;
  const now = new Date();
  const publishedAt = asDate(row.published_at ?? row.created_at ?? row.updated_at, now);
  const modifiedAt = asDate(row.updated_at ?? row.published_at ?? row.created_at, publishedAt);
  const category = pick(row, ["category_name", "category"]) || "Legal updates";
  const thumb = localImage(pick(row, ["thumbnail", "image", "image_src"]));
  const featured = localImage(pick(row, ["featured_image"]));
  const imageSrc = thumb || featured || DEFAULT_BLOG_IMAGE;
  const imageFull = articleImage(imageSrc === DEFAULT_BLOG_IMAGE ? "" : imageSrc, featured) || imageSrc;
  return {
    id: Number(row.id),
    slug,
    title,
    description: pick(row, ["short_description", "excerpt", "meta_description"]).slice(0, 255) || plain.slice(0, 240),
    body,
    category,
    imageSrc,
    imageFull,
    imageAlt: title,
    publishedAt,
    modifiedAt,
    readTime: readTime(words),
    wordCount: words,
  };
}

export async function listPublishedBlogPosts(): Promise<PublishedBlogPost[]> {
  try {
    const rows = await publishedRows();
    return rows.map(toPost).filter((post): post is PublishedBlogPost => post !== null);
  } catch (error) {
    console.error("[Blog] Could not load published posts:", error);
    return [];
  }
}

export async function getPublishedBlogPost(slug: string): Promise<PublishedBlogPost | null> {
  const posts = await listPublishedBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export function toBlogCard(post: PublishedBlogPost): BlogArticleItem {
  return {
    id: `db-${post.id}`,
    title: post.title,
    eyebrow: post.category,
    category: post.category,
    description: post.description,
    href: `/blog/${post.slug}`,
    imageSrc: post.imageSrc,
    imageAlt: post.imageAlt,
    publishedDate: melbourneLabel(post.publishedAt),
    readTime: post.readTime,
  };
}

export async function listBlogIndexArticles(): Promise<BlogArticleItem[]> {
  const staticHrefs = new Set(blogArticles.map((article) => article.href.replace(/\/$/, "")));
  const extras = (await listPublishedBlogPosts())
    .map(toBlogCard)
    .filter((article) => !staticHrefs.has(article.href));
  return [...extras, ...blogArticles];
}

function plainCategory(value: string): string {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&#0*38;/g, "&")
    .replace(/&#x0*26;/gi, "&")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function categoryNameKey(value: string): string {
  return plainCategory(value).toLowerCase();
}

async function categoryColumns(): Promise<Set<string>> {
  return columnsOf("blog_categories").catch(() => new Set<string>());
}

/** Match a category name the same way a person would: case, spacing, and &amp; do not matter. */
async function categoryId(name: string): Promise<number | null> {
  const columns = await categoryColumns();
  if (!columns.has("id") || !columns.has("name")) return null;
  const wantedName = categoryNameKey(name);
  const wantedSlug = slugify(plainCategory(name));
  if (!wantedName) return null;
  const rows = await adminRows<RowDataPacket>(
    columns.has("slug") ? "SELECT id, name, slug FROM blog_categories" : "SELECT id, name FROM blog_categories"
  );
  let slugHit: number | null = null;
  for (const row of rows) {
    if (categoryNameKey(String(row.name ?? "")) === wantedName) return Number(row.id);
    if (!wantedSlug) continue;
    const storedSlug = String(row.slug ?? "").trim().toLowerCase();
    const nameSlug = slugify(plainCategory(String(row.name ?? "")));
    if (storedSlug === wantedSlug || nameSlug === wantedSlug) slugHit ??= Number(row.id);
  }
  return slugHit;
}

/**
 * POST already accepts any category string. Updates must accept the same strings.
 * When the name is not already a row, create it so parent_category can point at it.
 */
async function ensureCategoryId(name: string): Promise<number | null> {
  const found = await categoryId(name);
  if (found) return found;
  const columns = await categoryColumns();
  if (!columns.has("id") || !columns.has("name")) return null;
  const clean = plainCategory(name).slice(0, 255);
  if (!clean) return null;
  const values = new Map<string, string | number | Date | null>();
  values.set("name", clean);
  if (columns.has("slug")) values.set("slug", (slugify(clean) || "category").slice(0, 200));
  if (columns.has("status")) values.set("status", 1);
  const now = new Date();
  if (columns.has("created_at")) values.set("created_at", now);
  if (columns.has("updated_at")) values.set("updated_at", now);
  const entries = [...values.entries()];
  const result = await adminExecute(
    `INSERT INTO blog_categories (${entries.map(([column]) => column).join(", ")}) VALUES (${entries.map(() => "?").join(", ")})`,
    entries.map(([, value]) => value)
  );
  return result.insertId || (await categoryId(clean));
}

export async function saveIngestedBlog(draft: IngestDraft): Promise<SavedBlogDraft> {
  const problem = await tableReady("blogs", ["id", "slug"]);
  if (problem) throw new Error(problem);
  const columns = await columnsOf("blogs");
  if (!columns.has("title") && !columns.has("name")) throw new Error("The blogs table has no title column.");
  if (!columns.has("description") && !columns.has("content") && !columns.has("body")) {
    throw new Error("The blogs table has no body column.");
  }
  if (!columns.has("status")) throw new Error("The blogs table has no status column.");
  if (await slugTaken("blogs", "slug", draft.slug, null)) {
    throw new Error("That slug is already used.");
  }

  const values = new Map<string, string | number | Date | null>();
  const put = (column: string, value: string | number | Date | null) => {
    if (columns.has(column)) values.set(column, value);
  };

  put("title", draft.title);
  put("name", draft.title);
  put("slug", draft.slug);
  put("short_description", draft.shortDescription);
  put("description", draft.body);
  put("content", draft.body);
  put("body", draft.body);
  put("status", draft.published ? 1 : 0);
  put("category", draft.category);
  put("meta_title", draft.title.slice(0, 250));
  put("meta_description", draft.shortDescription.slice(0, 500));
  put("author", "Bansal Lawyers");
  put("image", DEFAULT_BLOG_IMAGE);
  put("featured_image", DEFAULT_BLOG_IMAGE);
  put("image_src", DEFAULT_BLOG_IMAGE);

  if (columns.has("parent_category")) {
    put("parent_category", await ensureCategoryId(draft.category));
  }

  const now = new Date();
  put("created_at", now);
  put("updated_at", now);
  if (draft.published) put("published_at", now);

  const entries = [...values.entries()];
  if (entries.length === 0) throw new Error("The blogs table has no columns this site can write.");
  const names = entries.map(([column]) => column).join(", ");
  const marks = entries.map(() => "?").join(", ");
  const result = await adminExecute(
    `INSERT INTO blogs (${names}) VALUES (${marks})`,
    entries.map(([, value]) => value)
  );
  return { id: result.insertId, slug: draft.slug, published: draft.published };
}

function rowPublished(row: RowDataPacket): boolean {
  const status = row.status;
  if (status === 1 || status === "1") return true;
  return typeof status === "string" && status.toLowerCase() === "published";
}

export async function findIngestedBlog(ref: string): Promise<RowDataPacket | null> {
  const problem = await tableReady("blogs", ["id", "slug"]);
  if (problem) throw new Error(problem);
  let key = ref.trim();
  try {
    key = decodeURIComponent(key).trim();
  } catch {
    return null;
  }
  if (!key || key.length > 180) return null;
  if (/^\d+$/.test(key)) {
    const byId = await adminRows<RowDataPacket>("SELECT * FROM blogs WHERE id = ? LIMIT 1", [Number(key)]);
    if (byId[0]) return byId[0];
  }
  const bySlug = await adminRows<RowDataPacket>("SELECT * FROM blogs WHERE slug = ? LIMIT 1", [key]);
  return bySlug[0] ?? null;
}

export async function updateIngestedBlog(ref: string, patch: IngestPatch): Promise<SavedBlogDraft> {
  const row = await findIngestedBlog(ref);
  if (!row) throw new Error("That blog post was not found.");
  const id = Number(row.id);
  const columns = await columnsOf("blogs");
  if (!columns.has("status")) throw new Error("The blogs table has no status column.");

  const currentSlug = pick(row, ["slug"]);
  const nextSlug = patch.slug ?? currentSlug;
  if (!nextSlug) throw new Error("A usable slug is required.");
  if (patch.slug && patch.slug !== currentSlug) {
    if (staticBlogSlugs().has(patch.slug)) {
      throw new Error("That slug is already a page built into the website. Choose another slug.");
    }
    if (await slugTaken("blogs", "slug", patch.slug, id)) throw new Error("That slug is already used.");
  }

  const values = new Map<string, string | number | Date | null>();
  const put = (column: string, value: string | number | Date | null) => {
    if (columns.has(column)) values.set(column, value);
  };

  if (patch.title) {
    put("title", patch.title);
    put("name", patch.title);
    put("meta_title", patch.title.slice(0, 250));
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
  if (patch.category) {
    if (columns.has("parent_category")) {
      const matched = await ensureCategoryId(patch.category);
      if (matched) put("parent_category", matched);
      else if (!columns.has("category")) throw new Error("That category does not exist.");
    }
    if (columns.has("category")) put("category", patch.category);
  }
  if (patch.published !== undefined) {
    put("status", patch.published ? 1 : 0);
    if (patch.published) put("published_at", new Date());
  }
  const changed = [...values.keys()];
  put("updated_at", new Date());
  if (changed.length === 0) throw new Error("The blogs table has no column for that change.");

  const entries = [...values.entries()];
  const assignments = entries.map(([column]) => `${column} = ?`).join(", ");
  await adminExecute(`UPDATE blogs SET ${assignments} WHERE id = ?`, [...entries.map(([, value]) => value), id]);
  return { id, slug: nextSlug, published: patch.published ?? rowPublished(row) };
}

export async function deleteIngestedBlog(ref: string): Promise<{ id: number; slug: string }> {
  const row = await findIngestedBlog(ref);
  if (!row) throw new Error("That blog post was not found.");
  const id = Number(row.id);
  await adminExecute("DELETE FROM blogs WHERE id = ?", [id]);
  return { id, slug: pick(row, ["slug"]) };
}
