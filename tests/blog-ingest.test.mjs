import test from "node:test";
import assert from "node:assert/strict";
import { parseIngestPayload, parseIngestUpdate } from "../lib/blog/ingest.ts";
import { cleanEditorHtml, plainTextFromHtml, prepareEditorHtml, sanitizeBlogHtml } from "../lib/blog/html.ts";

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

test("editor html keeps article tags and turns inline bullets into lists", () => {
  const saved = cleanEditorHtml('<div><b>Bold</b> and <i>italic</i><script>alert(1)</script></div>');
  assert.equal(saved, "<p><strong>Bold</strong> and <em>italic</em></p>");

  const opened = prepareEditorHtml(
    "<p>To file for divorce in Australia: &bull; One spouse must be a citizen. &bull; The couple must have been apart for 12 months.</p><p>Bring: 1. The marriage certificate. 2. Proof of separation.</p>",
  );
  assert.match(opened, /<ul><li>One spouse must be a citizen\.<\/li><li>The couple must have been apart for 12 months\.<\/li><\/ul>/);
  assert.match(opened, /<ol><li>The marriage certificate\.<\/li><li>Proof of separation\.<\/li><\/ol>/);
  assert.equal(prepareEditorHtml("<h2>Keep</h2><p>Already structured.</p>"), "<h2>Keep</h2><p>Already structured.</p>");
});

test("update accepts a partial change and leaves status alone unless it is sent", () => {
  const missing = parseIngestUpdate({});
  assert.equal(missing.ok, false);

  const titleOnly = parseIngestUpdate({ title: "A clearer title for the draft" });
  assert.equal(titleOnly.ok, true);
  if (titleOnly.ok) {
    assert.equal(titleOnly.value.title, "A clearer title for the draft");
    assert.equal(titleOnly.value.published, undefined);
    assert.equal(titleOnly.value.body, undefined);
  }

  const short = parseIngestUpdate({
    body: "Too short to replace the article.",
  });
  assert.equal(short.ok, false);

  const unpublish = parseIngestUpdate({ status: "draft" });
  assert.equal(unpublish.ok, true);
  if (unpublish.ok) assert.equal(unpublish.value.published, false);
});

test("publishes only when the payload asks for it", () => {
  const body = "A".repeat(120);
  const draft = parseIngestPayload({ title: "Enough of a title here", body, publish: true });
  assert.equal(draft.ok, true);
  if (draft.ok) assert.equal(draft.value.published, true);
});
