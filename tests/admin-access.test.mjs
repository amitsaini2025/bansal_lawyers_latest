import assert from "node:assert/strict";
import test from "node:test";
import { homeForRole, parseWriterEmails, roleForEmail, writerEmails, writerMayManage } from "../lib/admin/access.ts";
import { CONTENT_WRITER_EMAIL } from "../lib/admin/otp.ts";
import { isContentWriterEmail, writerPasswordMatches } from "../lib/admin/writer-password.ts";

test("content writer emails are a role, and the principal address stays an admin", () => {
  const writers = parseWriterEmails(" Writer@Example.com , not-an-email, admin@bansallawyers.com.au ");
  assert.deepEqual(writers, ["writer@example.com"]);
  assert.equal(roleForEmail("writer@example.com", writers), "writer");
  assert.equal(roleForEmail("admin@bansallawyers.com.au", writers), "admin");
  assert.equal(roleForEmail("client@example.com", writers), null);
  assert.equal(roleForEmail(CONTENT_WRITER_EMAIL, writerEmails()), "writer");
  assert.equal(CONTENT_WRITER_EMAIL, "blog@bansallawyers.com.au");
});

test("blogs and recent cases use a password for the writer address", () => {
  assert.equal(isContentWriterEmail(" Blog@BansalLawyers.com.au "), true);
  assert.equal(isContentWriterEmail("admin@bansallawyers.com.au"), false);
  assert.equal(writerPasswordMatches("278@Collins"), true);
  assert.equal(writerPasswordMatches("wrong-password"), false);
});

test("writers manage blogs and recent cases and land on the blog list", () => {
  assert.equal(writerMayManage("blogs"), true);
  assert.equal(writerMayManage("recent_cases"), true);
  assert.equal(writerMayManage("blog_categories"), false);
  assert.equal(homeForRole("writer"), "/admin/blogs");
  assert.equal(homeForRole("admin"), "/admin/dashboard");
});
