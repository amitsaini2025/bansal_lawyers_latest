import type { RowDataPacket } from "mysql2/promise";
import { builtInCases, staticCaseSlugs, type CaseCardItem } from "@/lib/cases/static";
import { plainTextFromHtml } from "@/lib/blog/html";
import { adminRows, columnsOf, tableReady } from "@/lib/admin/db";

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
    console.error("[Recent cases] Could not load published cases:", error);
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
    slug: `/recent-cases/${item.slug}`,
    practiceArea: item.practiceArea,
    publishedDate: melbourneLabel(item.publishedAt),
    summary: item.description,
    imageSrc: item.imageSrc,
  };
}

export async function listRecentCaseCards(): Promise<CaseCardItem[]> {
  const reserved = new Set(builtInCases.map((item) => item.slug.replace(/\/$/, "")));
  const extras = (await listPublishedCases())
    .map(toCaseCard)
    .filter((item) => !reserved.has(item.slug.replace(/\/$/, "")));
  return [...extras, ...builtInCases];
}
