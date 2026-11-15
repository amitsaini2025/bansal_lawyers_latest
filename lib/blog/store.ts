import type { RowDataPacket } from "mysql2/promise";
import type { BlogArticleItem } from "@/components/blog/BlogListClient";
import { blogArticles } from "@/lib/blog-data";
import type { IngestDraft } from "@/lib/blog/ingest";
import { plainTextFromHtml } from "@/lib/blog/html";
import { adminExecute, adminRows, columnsOf, tableReady } from "@/lib/admin/db";
import { slugTaken } from "@/lib/admin/data";

const DEFAULT_IMAGE = "/images/melbourne-legal-chambers.webp";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export interface PublishedBlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  category: string;
  imageSrc: string;
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
  if (value.startsWith("/images/") && !value.includes("..")) return value;
  return DEFAULT_IMAGE;
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
  const imageSrc = localImage(pick(row, ["image", "featured_image", "image_src", "thumbnail"]));
  return {
    id: Number(row.id),
    slug,
    title,
    description: pick(row, ["short_description", "excerpt", "meta_description"]).slice(0, 255) || plain.slice(0, 240),
    body,
    category,
    imageSrc,
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

async function categoryId(name: string): Promise<number | null> {
  const columns = await columnsOf("blog_categories").catch(() => new Set<string>());
  if (!columns.has("id") || !columns.has("name")) return null;
  const rows = columns.has("slug")
    ? await adminRows<RowDataPacket>(
        "SELECT id FROM blog_categories WHERE name = ? OR slug = ? ORDER BY id LIMIT 1",
        [name, name]
      )
    : await adminRows<RowDataPacket>("SELECT id FROM blog_categories WHERE name = ? ORDER BY id LIMIT 1", [name]);
  return rows[0] ? Number(rows[0].id) : null;
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
  put("image", DEFAULT_IMAGE);
  put("featured_image", DEFAULT_IMAGE);
  put("image_src", DEFAULT_IMAGE);

  if (columns.has("parent_category")) {
    put("parent_category", await categoryId(draft.category));
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
