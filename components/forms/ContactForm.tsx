"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { TurnstileWidget } from "@/components/booking/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { businessDetails } from "@/lib/site";

const HONEYPOT_INPUT_NAME = "bl_hp_field";

function formValue(values: FormData, key: string): string {
  const value = values.get(key);
  return typeof value === "string" ? value : "";
}

function honeypotValue(values: FormData, email: string): string {
  const raw = formValue(values, HONEYPOT_INPUT_NAME);
  if (!raw) return "";
  // Browsers sometimes autofill trap fields with the email address.
  if (raw.trim().toLowerCase() === email.trim().toLowerCase()) return "";
  return raw;
}

type ContactFormProps = {
  /** Cloudflare Turnstile site key; the security check is skipped when null. */
  turnstileSiteKey?: string | null;
};

export function ContactForm({ turnstileSiteKey = null }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const statusRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<AbortController | null>(null);

  useEffect(() => () => {
    const request = requestRef.current;
    requestRef.current = null;
    request?.abort();
  }, []);
  useEffect(() => { if (submitted || error) statusRef.current?.focus(); }, [submitted, error]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading || !event.currentTarget.reportValidity()) return;
    if (turnstileSiteKey && !turnstileToken) {
      setError("Please wait for the security check to finish, then try again.");
      return;
    }
    setLoading(true);
    setError(null);
    const values = new FormData(event.currentTarget);
    const email = formValue(values, "email");
    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: formValue(values, "name"),
          email,
          phone: formValue(values, "phone"),
          subject: formValue(values, "subject"),
          matterType: formValue(values, "matterType"),
          message: formValue(values, "message"),
          consent: values.get("consent") === "on",
          website: honeypotValue(values, email),
          turnstileToken,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(response.status === 503
          ? "Online enquiries are temporarily unavailable. Please call or email our team."
          : response.status === 429
            ? "Please wait a few minutes before trying again, or call our team."
            : response.status === 422
              ? "Security verification failed. Please complete the check and try again."
              : response.status === 400
                ? "Please check your details and try again."
                : "Your message could not be sent. Please try again, or contact our team directly.");
      }
    } catch {
      if (requestRef.current === controller) {
        setError("Your message could not be sent. Please try again, or contact our team directly.");
      }
    } finally {
      clearTimeout(timeout);
      if (requestRef.current === controller) {
        requestRef.current = null;
        setLoading(false);
      }
      if (turnstileSiteKey) {
        setTurnstileToken("");
        setTurnstileKey((key) => key + 1);
      }
    }
  }

  if (submitted) {
    return (
      <div ref={statusRef} className="form-status" role="status" tabIndex={-1}>
        <h3 style={{ marginTop: 0, color: "var(--success)", fontSize: "1.25rem" }}>
          Thank You for Reaching Out
        </h3>
        <p style={{ marginBottom: 0 }}>
          Your message has been sent to our Melbourne legal team. We review all incoming enquiries promptly and will contact you during business hours to discuss your matter and next steps.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={loading}>
      {error && (
        <div ref={statusRef} className="form-error" role="alert" tabIndex={-1}>
          <p>{error}</p>
          <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>{" · "}
          <a href={businessDetails.emailMailto}>{businessDetails.email}</a>
        </div>
      )}
      <div className="form-grid">
        <label>
          <span>Full Name *</span>
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="e.g. John Smith"
          />
        </label>
        <label>
          <span>Email Address *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="e.g. john@example.com.au"
          />
        </label>
        <label>
          <span>Phone Number *</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={40}
            placeholder="e.g. 0422 905 860"
          />
        </label>
        <label>
          <span>Subject *</span>
          <input
            name="subject"
            type="text"
            required
            minLength={2}
            maxLength={160}
            placeholder="e.g. Urgent Visa Matter / Property Purchase"
          />
        </label>
        <label className="form-grid__wide">
          <span>Legal Matter Type *</span>
          <select name="matterType" defaultValue="" required>
            <option value="" disabled>
              Select your legal matter...
            </option>
            <option value="migration">Migration / Visa Matter</option>
            <option value="family-law">Family Law</option>
            <option value="criminal-law">Criminal Law</option>
            <option value="commercial-law">Commercial / Business Law</option>
            <option value="property-law">Property / Conveyancing</option>
            <option value="civil-law">Civil Law</option>
            <option value="other">Other Legal Matter</option>
          </select>
        </label>
        <label className="form-grid__wide">
          <span>Message *</span>
          <textarea
            name="message"
            rows={5}
            required
            minLength={10}
            maxLength={6000}
            placeholder="Please briefly describe your situation, key dates, deadlines, or court appearances if applicable..."
          />
        </label>
        <label className="form-consent form-grid__wide">
          <input name="consent" type="checkbox" required />
          <span>
            By submitting this form, you agree to be contacted by Bansal Lawyers about your enquiry.
          </span>
        </label>
      </div>
      <div className="form-honeypot" aria-hidden="true">
        <input
          name={HONEYPOT_INPUT_NAME}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          readOnly
          onFocus={(event) => event.currentTarget.removeAttribute("readonly")}
          aria-hidden="true"
          data-lpignore="true"
          data-1p-ignore
        />
      </div>
      {turnstileSiteKey && (
        <TurnstileWidget key={turnstileKey} siteKey={turnstileSiteKey} onToken={setTurnstileToken} />
      )}
      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
