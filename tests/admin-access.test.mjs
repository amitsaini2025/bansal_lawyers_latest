import assert from "node:assert/strict";
import test from "node:test";
import { homeForRole, parseWriterEmails, roleForEmail, writerEmails, writerMayManage } from "../lib/admin/access.ts";
import { CONTENT_WRITER_EMAIL } from "../lib/admin/otp.ts";

test("content writer emails are a role, and the principal address stays an admin", () => {
  const writers = parseWriterEmails(" Writer@Example.com , not-an-email, admin@bansallawyers.com.au ");
  assert.deepEqual(writers, ["writer@example.com"]);
  assert.equal(roleForEmail("writer@example.com", writers), "writer");
  assert.equal(roleForEmail("admin@bansallawyers.com.au", writers), "admin");
  assert.equal(roleForEmail("client@example.com", writers), null);
  assert.equal(roleForEmail(CONTENT_WRITER_EMAIL, writerEmails()), "writer");
  assert.equal(CONTENT_WRITER_EMAIL, "bansallawyersvrushali@gmail.com");
});

test("writers manage blogs and success stories and land on the blog list", () => {
  assert.equal(writerMayManage("blogs"), true);
  assert.equal(writerMayManage("recent_cases"), true);
  assert.equal(writerMayManage("blog_categories"), false);
  assert.equal(homeForRole("writer"), "/admin/blogs");
  assert.equal(homeForRole("admin"), "/admin/dashboard");
});
