import test from "node:test";
import assert from "node:assert/strict";
import { parseIngestPayload } from "../lib/blog/ingest.ts";
import { plainTextFromHtml, sanitizeBlogHtml } from "../lib/blog/html.ts";

test("turns plain text into paragraphs and strips scripts", () => {
  const html = sanitizeBlogHtml("First paragraph.\n\nSecond line.");
  assert.equal(html, "<p>First paragraph.</p><p>Second line.</p>");

  const cleaned = sanitizeBlogHtml('<p>Safe</p><script>alert(1)</script><a href="javascript:alert(1)">bad</a><a href="/contact">ok</a>');
  assert.equal(cleaned.includes("script"), false);
  assert.equal(cleaned.includes("javascript:"), false);
  assert.match(cleaned, /href="\/contact"/);
  assert.ok(plainTextFromHtml(cleaned).includes("Safe"));
});

test("rejects a short post and a slug that already has a built-in page", () => {
  assert.equal(parseIngestPayload({ title: "Short", body: "Too small." }).ok, false);
  const taken = parseIngestPayload({
    title: "Parenting orders again",
    slug: "parenting-orders-vs-parenting-plans-australia",
    body: "This body is long enough to look like an article, with enough words that the ingest check should look past the length rule and stop on the slug.",
  });
  assert.equal(taken.ok, false);

  const draft = parseIngestPayload({
    title: "Section 501 visa cancellation in Melbourne",
    category: "Immigration Law",
    body: "<h2>What a cancellation notice means</h2><p>A notice of intention to consider cancellation is a deadline. Get the date from the letter, gather the documents it asks for, and get advice before you answer.</p><p>This is general information for people in Melbourne, not advice on a particular visa.</p>",
    status: "draft",
  });
  assert.equal(draft.ok, true);
  if (draft.ok) {
    assert.equal(draft.value.published, false);
    assert.equal(draft.value.slug, "section-501-visa-cancellation-in-melbourne");
    assert.match(draft.value.body, /<h2>/);
  }
});

test("publishes only when the payload asks for it", () => {
  const body = "A".repeat(120);
  const draft = parseIngestPayload({ title: "Enough of a title here", body, publish: true });
  assert.equal(draft.ok, true);
  if (draft.ok) assert.equal(draft.value.published, true);
});
