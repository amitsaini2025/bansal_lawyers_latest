import test from "node:test";
import assert from "node:assert/strict";
import { parseCaseIngestPayload, parseCaseIngestUpdate } from "../lib/cases/ingest.ts";

const body =
  "A Federal Circuit decision set aside the refusal because the tribunal asked the wrong statutory question. This note is general information about that kind of error, not advice for a particular visa.";

test("accepts a draft case and builds the slug from the title", () => {
  const draft = parseCaseIngestPayload({
    title: "Section 501 cancellation reviewed in Melbourne",
    category: "Immigration Law",
    body,
    status: "draft",
  });
  assert.equal(draft.ok, true);
  if (draft.ok) {
    assert.equal(draft.value.published, false);
    assert.equal(draft.value.practiceArea, "Immigration Law");
    assert.equal(draft.value.slug, "section-501-cancellation-reviewed-in-melbourne");
    assert.match(draft.value.body, /<p>/);
  }
});

test("rejects a story that is too short", () => {
  assert.equal(parseCaseIngestPayload({ title: "Short", body: "Too small." }).ok, false);
});

test("publishes only when the payload asks for it", () => {
  const draft = parseCaseIngestPayload({ title: "Enough of a case title", body, publish: true });
  assert.equal(draft.ok, true);
  if (draft.ok) assert.equal(draft.value.published, true);
});

test("update accepts a partial change and leaves status alone unless it is sent", () => {
  assert.equal(parseCaseIngestUpdate({}).ok, false);
  const titleOnly = parseCaseIngestUpdate({ title: "A clearer case title here" });
  assert.equal(titleOnly.ok, true);
  if (titleOnly.ok) {
    assert.equal(titleOnly.value.title, "A clearer case title here");
    assert.equal(titleOnly.value.published, undefined);
  }
  const unpublish = parseCaseIngestUpdate({ status: "draft" });
  assert.equal(unpublish.ok, true);
  if (unpublish.ok) assert.equal(unpublish.value.published, false);
});
