import { randomBytes } from "node:crypto";
import { unlink, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/** Blog cards are 16:9 and about 480px wide, so the thumbnail is 2× that. */
export const BLOG_THUMB = { width: 960, height: 540 } as const;
/** Article preview sits in a column about 736px wide, so the full photo is about 2× that. */
export const BLOG_FULL = { width: 1600, height: 900 } as const;

const UPLOAD_PREFIX = "/images/blog/uploads/";
const ACCEPTED = new Set(["jpeg", "png", "webp"]);
const MAX_BYTES = 8 * 1024 * 1024;

export class BlogPhotoError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BlogPhotoError";
  }
}

function inscribed(srcWidth: number, srcHeight: number, ratio: number) {
  if (srcWidth / srcHeight > ratio) {
    const height = srcHeight;
    return { width: Math.min(srcWidth, Math.round(height * ratio)), height };
  }
  const width = srcWidth;
  return { width, height: Math.min(srcHeight, Math.round(width / ratio)) };
}

/** Largest 16:9 crop that fits inside the source and the requested maximum. */
export function coverSize(
  srcWidth: number,
  srcHeight: number,
  maxWidth: number,
  maxHeight: number
): { width: number; height: number } {
  const crop = inscribed(srcWidth, srcHeight, maxWidth / maxHeight);
  const scale = Math.min(1, maxWidth / crop.width, maxHeight / crop.height);
  return {
    width: Math.max(1, Math.round(crop.width * scale)),
    height: Math.max(1, Math.round(crop.height * scale)),
  };
}

async function readPhoto(input: Buffer) {
  if (input.length > MAX_BYTES) throw new BlogPhotoError("Use a photo under 8 MB.");
  let meta;
  try {
    meta = await sharp(input, { failOn: "error", limitInputPixels: 25_000_000, animated: false }).rotate().metadata();
  } catch {
    throw new BlogPhotoError("Use a JPEG, PNG, or WebP photo.");
  }
  const format = meta.format ?? "";
  if (!ACCEPTED.has(format) || !meta.width || !meta.height) {
    throw new BlogPhotoError("Use a JPEG, PNG, or WebP photo.");
  }
  const largest = inscribed(meta.width, meta.height, BLOG_THUMB.width / BLOG_THUMB.height);
  if (largest.width < BLOG_THUMB.width || largest.height < BLOG_THUMB.height) {
    throw new BlogPhotoError("Use a photo at least 1600×900. The smallest photo that stays sharp is 960×540.");
  }
  return { width: meta.width, height: meta.height };
}

async function render(input: Buffer, size: { width: number; height: number }, quality: number) {
  return sharp(input, { failOn: "error", limitInputPixels: 25_000_000, animated: false })
    .rotate()
    .resize(size.width, size.height, { fit: "cover", position: "attention", withoutEnlargement: true })
    .webp({ quality, effort: 5, smartSubsample: true })
    .toBuffer();
}

/** Crops to 16:9 and writes a small thumbnail plus a larger article photo, both WebP. */
export async function renderBlogPhoto(input: Buffer) {
  const source = await readPhoto(input);
  const thumbSize = coverSize(source.width, source.height, BLOG_THUMB.width, BLOG_THUMB.height);
  const fullSize = coverSize(source.width, source.height, BLOG_FULL.width, BLOG_FULL.height);
  const [thumb, full] = await Promise.all([
    render(input, thumbSize, 64),
    render(input, fullSize, 72),
  ]);
  return { thumb, full, thumbSize, fullSize };
}

function safeSlug(slug: string) {
  const cleaned = slug.toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/^-+|-+$/g, "").slice(0, 80);
  return cleaned || "post";
}

export async function storeBlogPhoto(input: Buffer, slug: string) {
  const rendered = await renderBlogPhoto(input);
  const stamp = randomBytes(4).toString("hex");
  const base = `${safeSlug(slug)}-${stamp}`;
  const dir = path.join(process.cwd(), "public", "images", "blog", "uploads");
  await mkdir(dir, { recursive: true });
  const thumbName = `${base}-thumb.webp`;
  const fullName = `${base}.webp`;
  await Promise.all([
    writeFile(path.join(dir, thumbName), rendered.thumb),
    writeFile(path.join(dir, fullName), rendered.full),
  ]);
  return {
    thumb: `${UPLOAD_PREFIX}${thumbName}`,
    full: `${UPLOAD_PREFIX}${fullName}`,
    thumbBytes: rendered.thumb.length,
    fullBytes: rendered.full.length,
  };
}

export function uploadFilePath(publicPath: string): string | null {
  if (!publicPath.startsWith(UPLOAD_PREFIX)) return null;
  const name = publicPath.slice(UPLOAD_PREFIX.length);
  if (!/^[a-z0-9-]+\.webp$/.test(name)) return null;
  const root = path.resolve(process.cwd(), "public", "images", "blog", "uploads");
  const file = path.resolve(root, name);
  if (file !== root && !file.startsWith(root + path.sep)) return null;
  return file;
}

export async function deleteBlogUploads(publicPaths: string[]) {
  const files = [...new Set(publicPaths.map(uploadFilePath).filter((file): file is string => Boolean(file)))];
  await Promise.all(files.map((file) => unlink(file).catch(() => undefined)));
}
