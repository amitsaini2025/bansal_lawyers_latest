import assert from "node:assert/strict";
import test from "node:test";
import { appointmentStatus, slugify } from "../lib/admin/labels.ts";
import { hashLoginCode, loginCodeMatches, readOtpChallenge, signOtpChallenge } from "../lib/admin/otp.ts";
import { readAdminSession, signAdminSession } from "../lib/admin/session.ts";

const secret = "test-secret-value-32";

test("admin session round-trips and rejects tampering", () => {
  const exp = Math.floor(Date.now() / 1000) + 60;
  const token = signAdminSession(12, exp, secret);
  assert.deepEqual(readAdminSession(token, Date.now(), secret), { id: 12, exp });
  assert.equal(readAdminSession(`${token}x`, Date.now(), secret), null);
  assert.equal(readAdminSession(token, exp * 1000 + 1000, secret), null);
});

test("admin login codes round-trip and reject a wrong code", () => {
  const exp = Math.floor(Date.now() / 1000) + 60;
  const codeHash = hashLoginCode(4, "123456", secret);
  const token = signOtpChallenge({ id: 4, codeHash, exp, attempts: 0 }, secret);
  const challenge = readOtpChallenge(token, Date.now(), secret);
  assert.ok(challenge);
  assert.equal(loginCodeMatches(4, "123456", challenge.codeHash, secret), true);
  assert.equal(loginCodeMatches(4, "000000", challenge.codeHash, secret), false);
  assert.equal(readOtpChallenge(`${token}x`, Date.now(), secret), null);
  assert.equal(readOtpChallenge(token, exp * 1000 + 1000, secret), null);
});

test("appointment statuses keep the previous admin labels", () => {
  assert.equal(appointmentStatus(0).label, "Pending");
  assert.equal(appointmentStatus(7).label, "Cancelled");
  assert.equal(appointmentStatus(10).label, "Payment Success");
});

test("slugs match the public URL style", () => {
  assert.equal(slugify("Family Law & Divorce"), "family-law-divorce");
});
