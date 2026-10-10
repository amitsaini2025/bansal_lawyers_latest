"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { TurnstileWidget } from "@/components/booking/TurnstileWidget";
import {
  CONSULTATION_TYPES,
  formatAud,
  isoToDdMmYyyy,
  melbourneToday,
  timeSlotLabels,
  type ConsultationService,
  type ConsultationType,
  type NatureOfEnquiry,
} from "@/lib/booking/services";
import { businessDetails } from "@/lib/site";

type StepId = "duration" | "type" | "datetime" | "info" | "confirm";

const STEPS: { id: StepId; label: string; icon: IconName }[] = [
  { id: "duration", label: "Duration", icon: "clock" },
  { id: "type", label: "Type", icon: "calendar" },
  { id: "datetime", label: "Date & Time", icon: "calendarCheck" },
  { id: "info", label: "Your Info", icon: "user" },
  { id: "confirm", label: "Confirm", icon: "check" },
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MAX_MONTHS_AHEAD = 12;
const AUTO_ADVANCE_MS = 400;
const SUBMIT_TIMEOUT_MS = 30_000;

interface AvailabilityState {
  disabledWeekdays: number[];
  disabledDates: string[];
  today: string;
  timeSlotLabels: string[];
}

interface FieldErrors {
  [field: string]: string | undefined;
}

export interface BookingWizardProps {
  services: ConsultationService[];
  natureOfEnquiry: NatureOfEnquiry[];
  /** Cloudflare Turnstile site key; the security check is skipped when null. */
  turnstileSiteKey?: string | null;
  /** Paid bookings need online payment; until it is enabled the final step asks clients to call instead. */
  paymentEnabled?: boolean;
}

interface BookingConfirmation {
  appointmentId: number | null;
  message: string;
}

function weekdayOf(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

function toIso(year: number, monthIndex: number, day: number): string {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function longDateLabel(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${WEEKDAY_SHORT[weekdayOf(iso)]}, ${d} ${MONTH_NAMES[m - 1]} ${y}`;
}

function sameSlot(a: string, b: string): boolean {
  return a.trim().replace(/\s+/g, " ").toLowerCase() === b.trim().replace(/\s+/g, " ").toLowerCase();
}

export function BookingWizard({
  services,
  natureOfEnquiry,
  turnstileSiteKey = null,
  paymentEnabled = false,
}: BookingWizardProps) {
  const [step, setStep] = useState<StepId>("duration");
  const [maxReached, setMaxReached] = useState(0);

  const [serviceId, setServiceId] = useState<number | null>(null);
  const [showFreeModal, setShowFreeModal] = useState(false);
  const [freeAcknowledged, setFreeAcknowledged] = useState(false);
  const [consultationType, setConsultationType] = useState<ConsultationType | "">("");

  const [availability, setAvailability] = useState<AvailabilityState>(() => ({
    disabledWeekdays: [0, 6],
    disabledDates: [],
    today: melbourneToday(),
    timeSlotLabels: timeSlotLabels(),
  }));
  const [viewMonth, setViewMonth] = useState(() => {
    const [y, m] = melbourneToday().split("-").map(Number);
    return { year: y, month: m - 1 };
  });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [unavailableSlots, setUnavailableSlots] = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const slotRequestRef = useRef(0);

  const [noeId, setNoeId] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [applyingPromo, setApplyingPromo] = useState(false);
  const [promoMessage, setPromoMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [stepErrors, setStepErrors] = useState<string[]>([]);

  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const service = useMemo(() => services.find((s) => s.id === serviceId) ?? null, [services, serviceId]);
  const baseFee = service?.priceAud ?? 0;
  const finalAmount = Math.max(0, baseFee - discountAmount);
  const consultationLabel = CONSULTATION_TYPES.find((t) => t.value === consultationType)?.title ?? "Not selected";
  const durationSummary = service ? `${service.durationLabel} (${service.priceLabel})` : "Not selected";
  const selectedDateLabel = selectedDate ? isoToDdMmYyyy(selectedDate) : "";

  useEffect(() => {
    let cancelled = false;
    fetch("/api/booking/config", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.success) return;
        setAvailability({
          disabledWeekdays: Array.isArray(data.disabledWeekdays) ? data.disabledWeekdays : [0, 6],
          disabledDates: Array.isArray(data.disabledDates) ? data.disabledDates : [],
          today: typeof data.today === "string" ? data.today : melbourneToday(),
          timeSlotLabels:
            Array.isArray(data.timeSlotLabels) && data.timeSlotLabels.length ? data.timeSlotLabels : timeSlotLabels(),
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [step]);

  function goTo(target: StepId) {
    const index = STEPS.findIndex((s) => s.id === target);
    setFieldErrors({});
    setStepErrors([]);
    setSubmitError(null);
    setStep(target);
    setMaxReached((prev) => Math.max(prev, index));
  }

  function autoAdvance(target: StepId) {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(() => goTo(target), AUTO_ADVANCE_MS);
  }

  function goBack() {
    const index = STEPS.findIndex((s) => s.id === step);
    if (index > 0) goTo(STEPS[index - 1].id);
  }

  function resetPromo() {
    setPromoCode("");
    setPromoApplied(false);
    setPromoMessage(null);
    setDiscountAmount(0);
  }

  function selectDuration(next: ConsultationService) {
    setServiceId(next.id);
    setFreeAcknowledged(false);
    resetPromo();
    if (next.isFree) {
      setShowFreeModal(true);
      return;
    }
    autoAdvance("type");
  }

  function confirmFreeConsult() {
    if (!freeAcknowledged) return;
    setShowFreeModal(false);
    autoAdvance("type");
  }

  function cancelFreeConsult() {
    setShowFreeModal(false);
    setServiceId(null);
    setFreeAcknowledged(false);
  }

  function selectConsultationType(value: ConsultationType) {
    setConsultationType(value);
    setSelectedDate(null);
    setSelectedTime(null);
    setUnavailableSlots([]);
    autoAdvance("datetime");
  }

  function isDateDisabled(iso: string): boolean {
    if (iso <= availability.today) return true;
    if (availability.disabledWeekdays.includes(weekdayOf(iso))) return true;
    return availability.disabledDates.includes(iso);
  }

  async function loadSlots(iso: string, forService: number) {
    const requestId = ++slotRequestRef.current;
    setSlotsLoading(true);
    setSlotsError(null);
    setUnavailableSlots([]);

    const fetchSlots = async (includeCrm: boolean, timeoutMs: number) => {
      const res = await fetch(
        `/api/booking/slots?date=${iso}&serviceId=${forService}&includeCrm=${includeCrm ? 1 : 0}`,
        { cache: "no-store", signal: AbortSignal.timeout(timeoutMs) }
      );
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success || !Array.isArray(data.unavailableSlots)) {
        throw new Error(data?.message || "Unable to load time slots.");
      }
      return data.unavailableSlots as string[];
    };

    try {
      const local = await fetchSlots(false, 10_000);
      if (requestId !== slotRequestRef.current) return;
      setUnavailableSlots(local);
      setSlotsLoading(false);

      fetchSlots(true, 8_000)
        .then((all) => {
          if (requestId !== slotRequestRef.current) return;
          setUnavailableSlots((prev) => [...new Set([...prev, ...all])]);
          setSelectedTime((current) => (current && all.some((slot) => sameSlot(slot, current)) ? null : current));
        })
        .catch(() => {});
    } catch {
      if (requestId !== slotRequestRef.current) return;
      setSlotsLoading(false);
      setSlotsError("We couldn't load live availability. Please try another date or call us to book.");
    }
  }

  function selectDate(iso: string) {
    if (isDateDisabled(iso) || !serviceId) return;
    setSelectedDate(iso);
    setSelectedTime(null);
    setStepErrors([]);
    void loadSlots(iso, serviceId);
  }

  function selectTime(slot: string) {
    setSelectedTime(slot);
    setStepErrors([]);
    autoAdvance("info");
  }

  function validateStep(target: StepId): FieldErrors {
    const errors: FieldErrors = {};
    if (target === "duration" && !serviceId) errors.duration = "Please select a consultation duration";
    if (target === "type" && !consultationType) errors.consultation_type = "Please select a consultation type";
    if (target === "datetime" && (!selectedDate || !selectedTime)) errors.datetime = "Please select a date and time";
    if (target === "info") {
      if (!noeId) errors.noe_id = "Please select a type of legal matter";
      const name = fullname.trim();
      if (!name) errors.fullname = "Full name is required";
      else if (!/^[a-zA-Z\s]+$/.test(name)) errors.fullname = "Full name may only contain letters and spaces";
      else if (name.length > 255) errors.fullname = "Full name is too long";
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = "Valid email is required";
      const phoneValue = phone.trim();
      if (!phoneValue) errors.phone = "Phone number is required";
      else if (!/^[\d\s\-+()]+$/.test(phoneValue) || phoneValue.length > 20)
        errors.phone = "Enter a valid phone number (digits, spaces, + - ( ) only)";
      const details = description.trim();
      if (!details) errors.description = "Details of enquiry are required";
      else if (details.length > 1000) errors.description = "Please keep details under 1000 characters";
    }
    return errors;
  }

  function goNext() {
    const order: StepId[] = step === "info" ? ["duration", "type", "datetime", "info"] : [step];
    const errors = order.reduce<FieldErrors>((acc, id) => ({ ...acc, ...validateStep(id) }), {});
    const messages = Object.values(errors).filter((m): m is string => Boolean(m));
    if (messages.length) {
      setFieldErrors(errors);
      setStepErrors(messages);
      return;
    }
    const index = STEPS.findIndex((s) => s.id === step);
    if (index < STEPS.length - 1) goTo(STEPS[index + 1].id);
  }

  async function applyPromo() {
    if (!service?.allowsPromo) {
      setPromoMessage({ text: "Promo codes are not available for this consultation type.", type: "error" });
      return;
    }
    const code = promoCode.trim();
    if (!code) {
      setPromoMessage({ text: "Please enter a promo code", type: "error" });
      return;
    }
    setApplyingPromo(true);
    try {
      const res = await fetch("/api/booking/promo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promoCode: code, serviceId: service.id }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        const discount = Number(data.discountAmount) || 0;
        setDiscountAmount(discount);
        setPromoApplied(true);
        setPromoMessage({
          text:
            service.priceAud - discount <= 0
              ? "Promo code applied! Free consultation!"
              : `Promo code applied! You saved ${formatAud(discount)}`,
          type: "success",
        });
      } else {
        setPromoMessage({
          text: res.status === 429 ? "Too many attempts. Please wait before trying again." : data?.message || "Invalid promo code.",
          type: "error",
        });
      }
    } catch {
      setPromoMessage({ text: "Could not check the promo code. Please try again.", type: "error" });
    } finally {
      setApplyingPromo(false);
    }
  }

  function returnToDateStep(message: string, clearDate: boolean) {
    goTo("datetime");
    setSelectedTime(null);
    if (clearDate) {
      setSelectedDate(null);
      setUnavailableSlots([]);
    } else if (selectedDate && serviceId) {
      void loadSlots(selectedDate, serviceId);
    }
    setStepErrors([message]);
  }

  async function submitBooking() {
    if (submitting) return;

    const errors = (["duration", "type", "datetime", "info"] as StepId[]).reduce<FieldErrors>(
      (acc, id) => ({ ...acc, ...validateStep(id) }),
      {}
    );
    const messages = Object.values(errors).filter((m): m is string => Boolean(m));
    if (messages.length) {
      setFieldErrors(errors);
      setStepErrors(messages);
      return;
    }
    if (turnstileSiteKey && !turnstileToken) {
      setSubmitError("Please wait for the security check to finish, then try again.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(SUBMIT_TIMEOUT_MS),
        body: JSON.stringify({
          serviceId,
          consultationType,
          date: selectedDate,
          time: selectedTime,
          noeId: Number(noeId),
          fullname: fullname.trim(),
          email: email.trim(),
          phone: phone.trim(),
          description: description.trim(),
          promoCode: promoApplied ? promoCode.trim() : "",
          freeConsultAcknowledged: service?.isFree ? freeAcknowledged : false,
          turnstileToken,
          website_url: honeypot,
        }),
      });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setConfirmation({
          appointmentId: typeof data.appointmentId === "number" ? data.appointmentId : null,
          message: typeof data.message === "string" ? data.message : "Your appointment is booked.",
        });
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const message: string =
        res.status === 429
          ? "Too many booking attempts. Please wait a moment before trying again."
          : data?.errors && typeof data.errors === "object"
            ? Object.values(data.errors as Record<string, string>).join(" ")
            : data?.message || "We couldn't complete your booking. Please try again.";

      if (data?.code === "SLOT_TAKEN" || data?.code === "BUSY") {
        returnToDateStep(message, false);
      } else if (data?.code === "DATE_UNAVAILABLE") {
        returnToDateStep(message, true);
      } else {
        setSubmitError(message);
      }
    } catch {
      setSubmitError(
        `We couldn't reach the booking service. Please check your connection and try again, or call ${businessDetails.phone}.`
      );
    } finally {
      setSubmitting(false);
      if (turnstileSiteKey) {
        setTurnstileToken("");
        setTurnstileKey((key) => key + 1);
      }
    }
  }

  const calendarDays = useMemo(() => {
    const { year, month } = viewMonth;
    const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();
    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const cells: (string | null)[] = Array.from({ length: firstWeekday }, () => null);
    for (let day = 1; day <= daysInMonth; day += 1) cells.push(toIso(year, month, day));
    return cells;
  }, [viewMonth]);

  const [todayYear, todayMonth] = availability.today.split("-").map(Number);
  const monthOffset = (viewMonth.year - todayYear) * 12 + (viewMonth.month - (todayMonth - 1));

  function shiftMonth(delta: number) {
    setViewMonth(({ year, month }) => {
      const next = new Date(Date.UTC(year, month + delta, 1));
      return { year: next.getUTCFullYear(), month: next.getUTCMonth() };
    });
  }

  const slots = availability.timeSlotLabels.map((label) => ({
    time: label,
    available: !unavailableSlots.some((slot) => sameSlot(slot, label)),
  }));

  const stepIndex = STEPS.findIndex((s) => s.id === step);
  const showFloatingNav = step !== "duration";
  const floatingNextLabel = step === "info" ? "Review & Confirm" : step === "confirm" ? null : "Next";
  const canSubmit = finalAmount <= 0 || paymentEnabled;

  if (confirmation) {
    return (
      <div className="appt">
        <div className="appt-card">
          <div className="appt-panel-wrap" ref={panelRef}>
            <section className="appt-panel appt-success" role="status">
              <span className="appt-success__icon"><Icon name="check" /></span>
              <h2 className="appt-panel__title">Your Appointment Is Booked</h2>
              <p className="appt-panel__subtitle">{confirmation.message}</p>
              <Summary rows={[
                ...(confirmation.appointmentId ? [["Reference", `#${confirmation.appointmentId}`] as [string, string]] : []),
                ["Duration", durationSummary],
                ["Type", consultationLabel],
                ["Date", selectedDateLabel],
                ["Time", `${selectedTime ?? ""} (Melbourne time)`],
                ["Name", fullname],
                ["Email", email],
              ]} />
              <p className="appt-legal">
                A confirmation email is on its way to {email}. Need to change anything? Call{" "}
                <a href={businessDetails.phoneTel}>{businessDetails.phone}</a> or email{" "}
                <a href={businessDetails.emailMailto}>{businessDetails.email}</a>.
              </p>
              <div className="appt-actions">
                <Link href="/" className="button button--primary">Back to Home</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="appt">
      <div className="appt-card">
        <nav className="appt-steps" aria-label="Booking progress">
          {STEPS.map((s, index) => (
            <button
              key={s.id}
              type="button"
              className={`appt-step${step === s.id ? " appt-step--active" : ""}${index < stepIndex ? " appt-step--done" : ""}`}
              onClick={() => index <= maxReached && goTo(s.id)}
              disabled={index > maxReached}
              aria-current={step === s.id ? "step" : undefined}
            >
              <Icon name={s.icon} />
              <span>{s.label}</span>
            </button>
          ))}
        </nav>

        <div className="appt-panel-wrap" ref={panelRef}>
          {stepErrors.length > 0 && (
            <div className="appt-error-list" role="alert">
              <strong>Please complete the following:</strong>
              <ul>
                {stepErrors.map((msg) => (
                  <li key={msg}>{msg}</li>
                ))}
              </ul>
            </div>
          )}

          {step === "duration" && (
            <Panel icon="clock" title="Choose Your Consultation Duration"
              subtitle="Select how much time you need. All options include expert legal advice from our Melbourne team.">
              <div className="appt-option-grid">
                {services.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`appt-option${serviceId === s.id ? " appt-option--selected" : ""}`}
                    onClick={() => selectDuration(s)}
                    aria-pressed={serviceId === s.id}
                  >
                    <span className="appt-option__header">
                      <span className="appt-option__icon"><Icon name={s.isFree ? "gift" : s.duration >= 60 ? "hourglass" : "clock"} /></span>
                      <span>
                        <span className="appt-option__title">{s.durationLabel} Consultation</span>
                        <span className="appt-option__badge">
                          {s.isFree ? "First time only" : s.duration >= 60 ? "Extended session" : "Most popular"}
                        </span>
                      </span>
                      <span className="appt-option__price">{s.priceLabel}</span>
                    </span>
                    <span className="appt-option__desc">
                      {s.isFree
                        ? "A complimentary 10-minute introduction for first-time clients."
                        : s.duration >= 60
                          ? "Up to one hour for complex matters, document review, and a clear action plan."
                          : "30 minutes of focused legal advice — ideal for most immigration, family, and business matters."}
                    </span>
                  </button>
                ))}
              </div>
            </Panel>
          )}

          {step === "type" && (
            <Panel icon="calendar" title="Choose Your Consultation Type" subtitle={<>Selected duration: <strong>{durationSummary}</strong></>}>
              <div className="appt-option-grid">
                {CONSULTATION_TYPES.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    className={`appt-option${consultationType === t.value ? " appt-option--selected" : ""}`}
                    onClick={() => selectConsultationType(t.value)}
                    aria-pressed={consultationType === t.value}
                  >
                    <span className="appt-option__header">
                      <span className="appt-option__icon">
                        <Icon name={t.value === "In-person" ? "building" : t.value === "Phone" ? "phone" : "video"} />
                      </span>
                      <span>
                        <span className="appt-option__title">{t.title}</span>
                        <span className="appt-option__badge">{t.badge}</span>
                      </span>
                    </span>
                    <span className="appt-option__desc">{t.description}</span>
                  </button>
                ))}
              </div>
              <Actions onBack={goBack} />
            </Panel>
          )}

          {step === "datetime" && (
            <Panel icon="calendarCheck" title="Select Date & Time" subtitle="All times are Melbourne, Australia (AEST/AEDT)">
              <div className="appt-calendar-layout">
                <div className="appt-calendar" aria-label="Select appointment date">
                  <div className="appt-calendar__head">
                    <button type="button" onClick={() => shiftMonth(-1)} disabled={monthOffset <= 0} aria-label="Previous month">‹</button>
                    <span>{MONTH_NAMES[viewMonth.month]} {viewMonth.year}</span>
                    <button type="button" onClick={() => shiftMonth(1)} disabled={monthOffset >= MAX_MONTHS_AHEAD} aria-label="Next month">›</button>
                  </div>
                  <div className="appt-calendar__grid" role="grid">
                    {WEEKDAY_SHORT.map((d) => (
                      <span key={d} className="appt-calendar__weekday" role="columnheader">{d}</span>
                    ))}
                    {calendarDays.map((iso, index) =>
                      iso ? (
                        <button
                          key={iso}
                          type="button"
                          role="gridcell"
                          className={`appt-calendar__day${selectedDate === iso ? " appt-calendar__day--selected" : ""}`}
                          disabled={isDateDisabled(iso)}
                          onClick={() => selectDate(iso)}
                          aria-label={longDateLabel(iso)}
                          aria-selected={selectedDate === iso}
                        >
                          {Number(iso.slice(8))}
                        </button>
                      ) : (
                        <span key={`blank-${index}`} aria-hidden="true" />
                      )
                    )}
                  </div>
                </div>

                <div className="appt-slots">
                  <h3 className="appt-option__title">
                    {selectedDate ? `Available times for ${longDateLabel(selectedDate)}` : "Select a date first"}
                  </h3>
                  {slotsLoading && <p className="appt-muted">Loading time slots...</p>}
                  {slotsError && <p className="appt-field-error">{slotsError}</p>}
                  {selectedDate && !slotsLoading && !slotsError && (
                    slots.some((s) => s.available) ? (
                      <div className="appt-slots__grid">
                        {slots.map((slot) => (
                          <button
                            key={slot.time}
                            type="button"
                            className={`appt-slot${selectedTime === slot.time ? " appt-slot--selected" : ""}`}
                            disabled={!slot.available}
                            onClick={() => selectTime(slot.time)}
                            aria-pressed={selectedTime === slot.time}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="appt-muted">No slots available for this date.</p>
                    )
                  )}
                </div>
              </div>
              <Actions onBack={goBack} onNext={goNext} nextLabel="Next Step" />
            </Panel>
          )}

          {step === "info" && (
            <Panel icon="user" title="Your Details" subtitle="Tell us who you are and briefly what your matter is about.">
              <Summary rows={[
                ["Duration", durationSummary],
                ["Consultation Type", consultationLabel],
                ["Date & Time", selectedDate && selectedTime ? `${selectedDateLabel} at ${selectedTime}` : "Not selected"],
              ]} />

              <Field id="appt-noe" label="Type of Legal Matter" error={fieldErrors.noe_id}>
                <select id="appt-noe" className="appt-input" value={noeId} onChange={(e) => setNoeId(e.target.value)} required>
                  <option value="">Select the type of legal matter</option>
                  {natureOfEnquiry.map((n) => (
                    <option key={n.id} value={n.id}>{n.title}</option>
                  ))}
                </select>
              </Field>
              <div className="appt-field-row">
                <Field id="appt-name" label="Full Name" error={fieldErrors.fullname}>
                  <input id="appt-name" className="appt-input" value={fullname} onChange={(e) => setFullname(e.target.value)}
                    placeholder="Enter your full name" autoComplete="name" maxLength={255} required />
                </Field>
                <Field id="appt-phone" label="Phone" error={fieldErrors.phone}>
                  <input id="appt-phone" type="tel" className="appt-input" value={phone} onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number" autoComplete="tel" maxLength={20} required />
                </Field>
              </div>
              <Field id="appt-email" label="Email" error={fieldErrors.email}>
                <input id="appt-email" type="email" className="appt-input" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" autoComplete="email" maxLength={255} required />
              </Field>
              <Field id="appt-description" label="Details Of Enquiry" error={fieldErrors.description}>
                <textarea id="appt-description" className="appt-input appt-textarea" value={description}
                  onChange={(e) => setDescription(e.target.value)} placeholder="Please provide details about your legal matter"
                  maxLength={1000} rows={4} required />
              </Field>
              <LegalNotice />
              <Actions onBack={goBack} onNext={goNext} nextLabel="Review & Confirm" />
            </Panel>
          )}

          {step === "confirm" && (
            <Panel icon="check" title="Confirm Your Appointment">
              <Summary rows={[
                ["Duration", durationSummary],
                ["Type", consultationLabel],
                ["Name", fullname],
                ["Email", email],
                ["Phone", phone],
                ["Date", selectedDateLabel],
                ["Time", selectedTime ?? ""],
              ]} />

              {service?.allowsPromo && (
                <div className="appt-promo">
                  <h3 className="appt-option__title">Have a Promo Code?</h3>
                  <div className="appt-promo__row">
                    <input className="appt-input" value={promoCode} onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter your promo code" disabled={promoApplied} maxLength={50} aria-label="Promo code" />
                    <button type="button" className="button button--primary button--compact" onClick={applyPromo}
                      disabled={applyingPromo || promoApplied}>
                      {applyingPromo ? "Checking..." : promoApplied ? "Applied" : "Apply"}
                    </button>
                    {promoApplied && (
                      <button type="button" className="button button--secondary button--compact" onClick={resetPromo}>Reset</button>
                    )}
                  </div>
                  {promoMessage && (
                    <p className={promoMessage.type === "success" ? "appt-promo__msg--success" : "appt-field-error"}>{promoMessage.text}</p>
                  )}
                </div>
              )}

              <div className="appt-payment">
                <div><span>Consultation Fee:</span><span>{formatAud(baseFee)}</span></div>
                {discountAmount > 0 && <div><span>Discount:</span><span>-{formatAud(discountAmount)}</span></div>}
                <div className="appt-payment__total"><span>Total:</span><span>{formatAud(finalAmount)}</span></div>
              </div>

              <LegalNotice />

              {!canSubmit && (
                <div className="appt-notice" role="status">
                  Online payment for paid consultations is being finalised. To secure this time now, please call{" "}
                  <a href={businessDetails.phoneTel}>{businessDetails.phone}</a> or email{" "}
                  <a href={businessDetails.emailMailto}>{businessDetails.email}</a> with the details above.
                </div>
              )}

              {submitError && (
                <div className="appt-error-list" role="alert">{submitError}</div>
              )}

              <input
                type="text"
                name="website_url"
                className="appt-hp"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              {canSubmit && turnstileSiteKey && (
                <TurnstileWidget key={turnstileKey} siteKey={turnstileSiteKey} onToken={setTurnstileToken} />
              )}

              <Actions onBack={goBack}>
                <button type="button" className="button button--primary" disabled={!canSubmit || submitting}
                  onClick={submitBooking} aria-busy={submitting}>
                  {submitting
                    ? "Booking..."
                    : finalAmount <= 0
                      ? "Complete Booking"
                      : `Pay & Submit ${formatAud(finalAmount)}`}
                </button>
              </Actions>
            </Panel>
          )}
        </div>
      </div>

      {showFloatingNav && (
        <div className="appt-floating-nav">
          <button type="button" className="button button--secondary button--compact" onClick={goBack}>← Back</button>
          {floatingNextLabel && (step !== "type" || consultationType) && (
            <button type="button" className="button button--primary button--compact" onClick={goNext}>{floatingNextLabel} →</button>
          )}
        </div>
      )}

      {showFreeModal && (
        <div className="appt-modal-overlay" onClick={(e) => e.target === e.currentTarget && cancelFreeConsult()}
          onKeyDown={(e) => e.key === "Escape" && cancelFreeConsult()} role="presentation">
          <div className="appt-modal" role="dialog" aria-modal="true" aria-labelledby="appt-free-title">
            <h3 id="appt-free-title">Free 10-Minute Consultation</h3>
            <p>Please read and confirm the following before continuing:</p>
            <ul>
              <li><strong>First-time clients only</strong> — available once per client.</li>
              <li><strong>Eligibility review</strong> — your matter must be suitable for discussion within 10 minutes.</li>
              <li><strong>Complete your details</strong> — provide thorough enquiry details.</li>
              <li><strong>Overrun policy</strong> — time exceeding 10 minutes may be charged with prior notice.</li>
            </ul>
            <label className="appt-ack">
              <input type="checkbox" checked={freeAcknowledged} onChange={(e) => setFreeAcknowledged(e.target.checked)} autoFocus />
              <span>I understand and accept these terms for the free 10-minute consultation.</span>
            </label>
            <div className="appt-actions">
              <button type="button" className="button button--secondary button--compact" onClick={cancelFreeConsult}>Choose Another Option</button>
              <button type="button" className="button button--primary button--compact" onClick={confirmFreeConsult} disabled={!freeAcknowledged}>
                I Understand &amp; Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Panel({ icon, title, subtitle, children }: { icon: IconName; title: string; subtitle?: ReactNode; children: ReactNode }) {
  return (
    <section className="appt-panel">
      <h2 className="appt-panel__title"><Icon name={icon} /> {title}</h2>
      {subtitle && <p className="appt-panel__subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}

function Actions({ onBack, onNext, nextLabel, children }: { onBack?: () => void; onNext?: () => void; nextLabel?: string; children?: ReactNode }) {
  return (
    <div className="appt-actions">
      {onBack && <button type="button" className="button button--secondary button--compact" onClick={onBack}>Back</button>}
      {onNext && <button type="button" className="button button--primary button--compact" onClick={onNext}>{nextLabel ?? "Next"}</button>}
      {children}
    </div>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className={`appt-field${error ? " appt-field--error" : ""}`}>
      <label className="appt-label" htmlFor={id}>{label}</label>
      {children}
      {error && <p className="appt-field-error">{error}</p>}
    </div>
  );
}

function Summary({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="appt-summary">
      {rows.map(([label, value]) => (
        <div key={label} className="appt-summary__row">
          <dt>{label}</dt>
          <dd>{value || "—"}</dd>
        </div>
      ))}
    </dl>
  );
}

function LegalNotice() {
  return (
    <p className="appt-legal">
      Submitting this form does not create a solicitor–client relationship. Please don&apos;t include highly sensitive
      documents; we will request what we need once your consultation is confirmed.
    </p>
  );
}

type IconName = "clock" | "calendar" | "calendarCheck" | "user" | "check" | "gift" | "hourglass" | "building" | "phone" | "video";

const ICON_PATHS: Record<IconName, string[]> = {
  clock: ["M12 6v6l4 2", "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"],
  calendar: ["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"],
  calendarCheck: ["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "m9 16 2 2 4-4"],
  user: ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"],
  check: ["M22 11.08V12a10 10 0 1 1-5.93-9.14", "m9 11 3 3L22 4"],
  gift: ["M20 12v10H4V12", "M2 7h20v5H2z", "M12 22V7", "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z", "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"],
  hourglass: ["M5 22h14", "M5 2h14", "M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22", "M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"],
  building: ["M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z", "M6 12H4a2 2 0 0 0-2 2v8h4", "M18 9h2a2 2 0 0 1 2 2v11h-4", "M10 6h4", "M10 10h4", "M10 14h4", "M10 18h4"],
  phone: ["M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"],
  video: ["m16 13 5.22 3.48a.5.5 0 0 0 .78-.42V7.94a.5.5 0 0 0-.78-.42L16 11", "M4 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"],
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg className="appt-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[name].map((d) => <path key={d} d={d} />)}
    </svg>
  );
}
