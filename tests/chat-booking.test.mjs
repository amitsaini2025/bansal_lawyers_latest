import test from "node:test";
import assert from "node:assert/strict";
import { addDays, parseLooseDate, parseLooseTime, upcomingOpenDates } from "../lib/chat/parse.ts";
import { advanceGuided } from "../lib/chat/guided.ts";

const today = "2026-10-17";

test("parses the dates clients actually type", () => {
  assert.equal(parseLooseDate("tomorrow", today), "2026-10-18");
  assert.equal(parseLooseDate("next Monday", today), "2026-10-19");
  assert.equal(parseLooseDate("21 October", today), "2026-10-21");
  assert.equal(parseLooseDate("21/10/2026", today), "2026-10-21");
  assert.equal(parseLooseDate("2026-10-22", today), "2026-10-22");
  assert.equal(parseLooseDate("10:30 AM", today), null);
});

test("parses consultation times into the calendar label", () => {
  assert.equal(parseLooseTime("10:30 am"), "10:30 AM");
  assert.equal(parseLooseTime("2pm"), "2:00 PM");
  assert.equal(parseLooseTime("14:00"), "2:00 PM");
});

test("skips closed weekdays when offering dates", () => {
  const dates = upcomingOpenDates(today, [0, 6], ["2026-10-19"], 3);
  assert.deepEqual(dates, ["2026-10-20", "2026-10-21", "2026-10-22"]);
  assert.equal(addDays(today, 1), "2026-10-18");
});

const catalog = {
  services: [
    { id: 2, title: "10 Minute Free Consultation", duration: 10, durationLabel: "10 mins", priceAud: 0, priceLabel: "Free", isFree: true, allowsPromo: false },
    { id: 1, title: "30 Minute Consultation", duration: 30, durationLabel: "30 mins", priceAud: 150, priceLabel: "$150 AUD", isFree: false, allowsPromo: true },
  ],
  matters: [{ id: 2, title: "Family Law" }],
  disabledWeekdays: [0, 6],
  disabledDates: [today],
  today,
  calendarAvailable: true,
  paymentEnabled: true,
};

test("answers a basic question before offering to book", () => {
  const greeting = advanceGuided(catalog, {}, "");
  assert.match(greeting.reply, /ask me about consultations/i);
  assert.equal(greeting.draft.booking, undefined);
  assert.ok(greeting.suggestions.includes("Book a consultation"));

  const fees = advanceGuided(catalog, greeting.draft, "How much does a consultation cost?");
  assert.match(fees.reply, /\$150 AUD/);
  assert.equal(fees.draft.booking, undefined);

  const booking = advanceGuided(catalog, fees.draft, "Book a consultation");
  assert.equal(booking.draft.booking, true);
  assert.match(booking.reply, /which length/i);
});

test("walks a booking up to the confirmation summary", () => {
  let draft = {};
  const steps = [
    ["30 minute", "legal matter"],
    ["Family Law", "How would you like to meet"],
    ["Phone", "Which day"],
    ["21 October", "Checking open times"],
  ];
  for (const [text, expected] of steps) {
    const turn = advanceGuided(catalog, draft, text);
    assert.match(turn.reply, new RegExp(expected, "i"));
    draft = turn.draft;
  }
  assert.equal(draft.serviceId, 1);
  assert.equal(draft.noeId, 2);
  assert.equal(draft.consultationType, "Phone");
  assert.equal(draft.isoDate, "2026-10-21");

  const withTime = advanceGuided(catalog, draft, "10:30 AM", ["10:30 AM", "11:00 AM"]);
  assert.equal(withTime.draft.timeLabel, "10:30 AM");
  assert.match(withTime.reply, /full name/i);

  const named = advanceGuided(catalog, withTime.draft, "Mary Anne");
  const emailed = advanceGuided(catalog, named.draft, "mary@example.com");
  const phoned = advanceGuided(catalog, emailed.draft, "0422 905 860");
  const detailed = advanceGuided(catalog, phoned.draft, "I need advice about parenting arrangements.");
  assert.equal(detailed.draft.awaitingConfirm, true);
  assert.match(detailed.reply, /Shall I book this/);

  const confirmed = advanceGuided(catalog, detailed.draft, "Yes, book it");
  assert.equal(confirmed.bookingBody?.date, "2026-10-21");
  assert.equal(confirmed.bookingBody?.time, "10:30 AM");
  assert.equal(confirmed.bookingBody?.email, "mary@example.com");
});
