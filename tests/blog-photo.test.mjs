import test from "node:test";
import assert from "node:assert/strict";
import sharp from "sharp";
import { BLOG_FULL, BLOG_THUMB, coverSize, renderBlogPhoto } from "../lib/blog/photo.ts";

test("keeps a 16:9 crop and does not enlarge a smaller photo", () => {
  assert.deepEqual(coverSize(1920, 1080, BLOG_FULL.width, BLOG_FULL.height), { width: 1600, height: 900 });
  assert.deepEqual(coverSize(1920, 1080, BLOG_THUMB.width, BLOG_THUMB.height), { width: 960, height: 540 });
  assert.deepEqual(coverSize(1000, 1000, BLOG_FULL.width, BLOG_FULL.height), { width: 1000, height: 563 });
});

test("turns a photo into two WebP files at the list and article sizes", async () => {
  const source = await sharp({
    create: { width: 2000, height: 1400, channels: 3, background: { r: 20, g: 50, b: 90 } },
  })
    .jpeg()
    .toBuffer();
  const rendered = await renderBlogPhoto(source);
  const thumb = await sharp(rendered.thumb).metadata();
  const full = await sharp(rendered.full).metadata();
  assert.equal(thumb.format, "webp");
  assert.equal(full.format, "webp");
  assert.equal(thumb.width, BLOG_THUMB.width);
  assert.equal(thumb.height, BLOG_THUMB.height);
  assert.equal(full.width, BLOG_FULL.width);
  assert.equal(full.height, BLOG_FULL.height);
  assert.ok(rendered.thumb.length < source.length);
  assert.ok(rendered.full.length < source.length);
});

test("rejects a photo that is too small to crop sharply", async () => {
  const source = await sharp({
    create: { width: 400, height: 300, channels: 3, background: { r: 1, g: 1, b: 1 } },
  })
    .png()
    .toBuffer();
  await assert.rejects(renderBlogPhoto(source), /960×540/);
});
