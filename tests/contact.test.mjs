import test from "node:test";
import assert from "node:assert/strict";
import { createContactHandler, validateEnquiry } from "../lib/contact.ts";

const enquiry = {
  name: "Test Visitor", email: "visitor@example.com", phone: "0422 000 000",
  subject: "Website test", matterType: "other", message: "This is a synthetic test enquiry.",
  consent: true, website: "",
};
const request = (body = enquiry, headers = {}) => new Request("https://firm.example/api/contact", {
  method: "POST", headers: { Origin: "https://firm.example", "Content-Type": "application/json", ...headers },
  body: JSON.stringify(body),
});

test("requires valid contact details, an allowed matter type and explicit consent", () => {
  for (const value of [
    { ...enquiry, consent: false }, { ...enquiry, email: "invalid" },
    { ...enquiry, phone: "abcdefgh" }, { ...enquiry, matterType: "unknown" },
    { ...enquiry, name: " " }, { ...enquiry, message: "short" },
    { ...enquiry, subject: "A\r\nB" }, { ...enquiry, website: "bot.example" },
    { ...enquiry, message: "x".repeat(6001) }, null, [],
  ]) assert.equal(validateEnquiry(value), null);
  assert.equal(validateEnquiry(enquiry)?.email, enquiry.email);
});

test("rejects cross-origin requests before any data leaves the server", async () => {
  let calls = 0;
  const handler = createContactHandler({ deliveryURL: "https://receiver.example", fetch: async () => { calls++; return new Response(); } });
  assert.equal((await handler(request(enquiry, { Origin: "https://attacker.example" }))).status, 403);
  assert.equal((await handler(request(enquiry, { "Sec-Fetch-Site": "cross-site" }))).status, 403);
  assert.equal((await handler(request(enquiry, { Origin: "null" }))).status, 403);
  assert.equal(calls, 0);
});

test("rejects oversized bodies even when Content-Length is missing", async () => {
  const handler = createContactHandler({});
  const response = await handler(request({ ...enquiry, message: "x".repeat(40000) }));
  assert.equal(response.status, 413);
});

test("rejects malformed JSON and unsupported content types", async () => {
  const handler = createContactHandler({});
  assert.equal((await handler(request(enquiry, { "Content-Type": "text/plain" }))).status, 415);
  const malformed = new Request("https://firm.example/api/contact", {
    method: "POST", headers: { Origin: "https://firm.example", "Content-Type": "application/json" }, body: "{",
  });
  assert.equal((await handler(malformed)).status, 400);
});

test("never reports delivery when service configuration is absent or unsafe", async () => {
  for (const deliveryURL of [undefined, "http://receiver.example", "https://user:password@receiver.example", "invalid"]) {
    let called = false;
    const handler = createContactHandler({ deliveryURL, fetch: async () => { called = true; return new Response(); } });
    assert.equal((await handler(request())).status, 503);
    assert.equal(called, false);
  }
});

test("delivery errors do not produce a false success response or leak provider details", async () => {
  for (const send of [async () => new Response("secret detail", { status: 500 }), async () => { throw new Error("credential detail"); }]) {
    const handler = createContactHandler({ deliveryURL: "https://receiver.example", fetch: send });
    const response = await handler(request());
    assert.equal(response.status, 502);
    assert.equal(await response.text(), '{"error":"delivery"}');
  }
});

test("forwards only validated fields, keeps credentials server-side and forbids redirects", async () => {
  let outgoing;
  const handler = createContactHandler({
    deliveryURL: "https://receiver.example/enquiries", deliveryToken: "test-token",
    fetch: async (url, options) => { outgoing = { url, options }; return new Response(null, { status: 202 }); },
  });
  const response = await handler(request({ ...enquiry, name: "  Test Visitor  ", unexpected: "ignored" }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal(outgoing.options.redirect, "error");
  assert.equal(outgoing.options.headers.Authorization, "Bearer test-token");
  const body = JSON.parse(outgoing.options.body);
  assert.equal(body.name, "Test Visitor");
  assert.equal(body.website, undefined);
  assert.equal(body.unexpected, undefined);
  assert.equal((await response.text()).includes("test-token"), false);
});

test("throttles bursts and permits requests after the window resets", async () => {
  let time = 1000;
  const handler = createContactHandler({ now: () => time, maxRequests: 2 });
  assert.equal((await handler(request())).status, 503);
  assert.equal((await handler(request())).status, 503);
  const limited = await handler(request());
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get("Retry-After"), "60");
  time += 60_001;
  assert.equal((await handler(request())).status, 503);
});
