"use client";

import { FormEvent, useRef, useState } from "react";
import { businessDetails } from "@/lib/site";

interface HeroBookingFormProps {
  defaultPracticeArea?: string;
}

export function HeroBookingPlaceholder({
  defaultPracticeArea = "migration",
}: HeroBookingFormProps) {
  // Normalize practice area slug to match /api/contact validation
  const normalizedDefault = (() => {
    switch (defaultPracticeArea) {
      case "immigration":
        return "migration";
      case "family":
        return "family-law";
      case "commercial":
        return "commercial-law";
      case "property":
        return "property-law";
      case "civil":
        return "civil-law";
      case "criminal":
        return "criminal-law";
      default:
        return defaultPracticeArea || "migration";
    }
  })();

  const [selectedFormat, setSelectedFormat] = useState<"office" | "phone" | "video">("office");
  const [matterType, setMatterType] = useState<string>(normalizedDefault);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const statusRef = useRef<HTMLDivElement>(null);

  const formatLabels: Record<"office" | "phone" | "video", string> = {
    office: "Melbourne CBD Office (530 Little Collins St)",
    phone: "Telephone Consultation",
    video: "Secure Video Conference",
  };

  const matterLabels: Record<string, string> = {
    migration: "Immigration & Visas",
    "family-law": "Family Law & Divorce",
    "commercial-law": "Commercial & Business",
    "property-law": "Property & Conveyancing",
    "civil-law": "Civil Litigation & Disputes",
    "criminal-law": "Criminal Defence",
    other: "General Legal Matter",
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    // Format clean subject and detailed message for legal intake
    const subject = `Consultation Request: ${matterLabels[matterType] || matterType} (${
      selectedFormat.toUpperCase()
    })`;

    const finalMessage = message.trim().length >= 10
      ? `Preferred Format: ${formatLabels[selectedFormat]}\n\nClient Notes:\n${message.trim()}`
      : `Preferred Format: ${formatLabels[selectedFormat]}\n\nClient requested a consultation for ${
          matterLabels[matterType] || matterType
        }.`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject,
          matterType,
          message: finalMessage,
          consent: true,
          website: "", // Honeypot
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        if (statusRef.current) {
          statusRef.current.focus();
        }
      } else {
        const errorData = await response.json().catch(() => null);
        if (response.status === 429) {
          setError("Too many requests. Please wait a few moments or call 0422 905 860.");
        } else if (response.status === 400 && errorData?.error) {
          setError(errorData.error);
        } else {
          setError("Your enquiry could not be submitted. Please call our team directly.");
        }
      }
    } catch {
      setError("Network connection issue. Please call 0422 905 860 or email info@bansallawyers.com.au.");
    } finally {
      setLoading(false);
    }
  }

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="hero-booking-card" aria-label="Book a Legal Consultation">
      {/* Top Banner / Status */}
      <div className="hero-booking-card__top">
        <div className="hero-booking-card__status">
          <span className="hero-booking-card__pulsing-dot" aria-hidden="true" />
          <span className="hero-booking-card__status-text">Direct Legal Consultation</span>
        </div>
        <span className="hero-booking-card__wireframe-badge">Melbourne CBD</span>
      </div>

      <div className="hero-booking-card__header">
        <h3 className="hero-booking-card__title">Book a Consultation</h3>
        <p className="hero-booking-card__subtitle">
          Confidential legal advice at our Melbourne CBD office, by phone or secure video.
        </p>
      </div>

      {submitted ? (
        /* Confirmed Submission Screen */
        <div
          ref={statusRef}
          tabIndex={-1}
          style={{
            padding: "1.75rem 1rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}
          role="status"
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#dcfce7",
              color: "#15803d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h4
            style={{
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "var(--navy-950)",
              margin: 0,
            }}
          >
            Consultation Request Received
          </h4>

          <p
            style={{
              fontSize: "0.85rem",
              color: "#475569",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Thank you, <strong>{name}</strong>. Your enquiry has been routed directly to our
            Melbourne solicitors. We will review your matter and contact you promptly.
          </p>

          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "0.65rem 0.85rem",
              width: "100%",
              fontSize: "0.78rem",
              color: "#334155",
              textAlign: "left",
              marginTop: "0.25rem",
            }}
          >
            <div><strong>Matter:</strong> {matterLabels[matterType] || matterType}</div>
            <div style={{ marginTop: "0.2rem" }}>
              <strong>Format:</strong> {formatLabels[selectedFormat]}
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", width: "100%", marginTop: "0.5rem" }}>
            <a
              href="tel:+61422905860"
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.35rem",
                padding: "0.6rem",
                backgroundColor: "var(--brand-blue)",
                color: "#ffffff",
                borderRadius: "6px",
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 0422 905 860
            </a>

            <button
              type="button"
              onClick={handleReset}
              style={{
                flex: 1,
                padding: "0.6rem",
                backgroundColor: "#f1f5f9",
                color: "#334155",
                border: "1px solid #cbd5e1",
                borderRadius: "6px",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              New Enquiry
            </button>
          </div>
        </div>
      ) : (
        /* Real Functional Form */
        <form className="hero-booking-card__form" onSubmit={handleSubmit} aria-busy={loading}>
          {error && (
            <div
              style={{
                padding: "0.65rem 0.85rem",
                backgroundColor: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "6px",
                color: "#b91c1c",
                fontSize: "0.8rem",
                lineHeight: 1.4,
              }}
              role="alert"
            >
              {error}
            </div>
          )}

          {/* Hidden Honeypot */}
          <div style={{ display: "none" }} aria-hidden="true">
            <input
              name="bl_hp_field"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              readOnly
              onFocus={(event) => event.currentTarget.removeAttribute("readonly")}
              data-lpignore="true"
              data-1p-ignore
            />
          </div>

          {/* Field 1: Practice Area */}
          <div className="booking-field">
            <label htmlFor="hero-booking-practice" className="booking-field__label">
              Select Practice Area
            </label>
            <div className="booking-select-wrapper">
              <select
                id="hero-booking-practice"
                className="booking-select"
                value={matterType}
                onChange={(e) => setMatterType(e.target.value)}
                required
              >
                <option value="migration">Immigration Law (Visas, Refusals &amp; Appeals)</option>
                <option value="family-law">Family Law (Divorce, Custody &amp; Property)</option>
                <option value="commercial-law">Commercial Law (Contracts &amp; Disputes)</option>
                <option value="property-law">Property Law &amp; Conveyancing</option>
                <option value="civil-law">Civil Litigation &amp; Dispute Resolution</option>
                <option value="criminal-law">Criminal Defence &amp; Court Representation</option>
                <option value="other">Other Legal Matter</option>
              </select>
            </div>
          </div>

          {/* Field 2: Consultation Format Toggle */}
          <div className="booking-field">
            <span className="booking-field__label">Consultation Format</span>
            <div className="booking-formats-grid" role="radiogroup" aria-label="Consultation Format">
              <button
                type="button"
                className={`booking-format-btn ${selectedFormat === "office" ? "booking-format-btn--active" : ""}`}
                onClick={() => setSelectedFormat("office")}
                aria-checked={selectedFormat === "office"}
                role="radio"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm4 0h2v2h-2V5zm-4 4h2v2H7V9zm4 0h2v2h-2V9zm-4 4h2v2H7v-2zm4 0h2v2h-2v-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>CBD Office</span>
              </button>

              <button
                type="button"
                className={`booking-format-btn ${selectedFormat === "phone" ? "booking-format-btn--active" : ""}`}
                onClick={() => setSelectedFormat("phone")}
                aria-checked={selectedFormat === "phone"}
                role="radio"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Phone</span>
              </button>

              <button
                type="button"
                className={`booking-format-btn ${selectedFormat === "video" ? "booking-format-btn--active" : ""}`}
                onClick={() => setSelectedFormat("video")}
                aria-checked={selectedFormat === "video"}
                role="radio"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <span>Video</span>
              </button>
            </div>
          </div>

          {/* Field 3: Full Name & Phone Number */}
          <div className="booking-inputs-grid">
            <div className="booking-input-wrap">
              <label htmlFor="hero-name" className="booking-field__label" style={{ fontSize: "0.7rem", marginBottom: "0.2rem", display: "block" }}>
                Full Name *
              </label>
              <input
                id="hero-name"
                type="text"
                className="booking-input"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength={2}
                maxLength={100}
              />
            </div>

            <div className="booking-input-wrap">
              <label htmlFor="hero-phone" className="booking-field__label" style={{ fontSize: "0.7rem", marginBottom: "0.2rem", display: "block" }}>
                Phone Number *
              </label>
              <input
                id="hero-phone"
                type="tel"
                className="booking-input"
                placeholder="e.g. 0422 905 860"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                minLength={8}
                maxLength={25}
              />
            </div>
          </div>

          {/* Field 4: Email Address */}
          <div className="booking-input-wrap">
            <label htmlFor="hero-email" className="booking-field__label" style={{ fontSize: "0.7rem", marginBottom: "0.2rem", display: "block" }}>
              Email Address *
            </label>
            <input
              id="hero-email"
              type="email"
              className="booking-input"
              placeholder="e.g. yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={254}
            />
          </div>

          {/* Field 5: Brief Situation / Notes */}
          <div className="booking-input-wrap">
            <label htmlFor="hero-message" className="booking-field__label" style={{ fontSize: "0.7rem", marginBottom: "0.2rem", display: "block" }}>
              Brief Details / Urgent Deadlines (Optional)
            </label>
            <textarea
              id="hero-message"
              className="booking-input"
              placeholder="Briefly describe your situation, key dates, or tribunal/court notice..."
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ resize: "vertical", minHeight: "2.6rem" }}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="booking-submit-btn" disabled={loading}>
            <span>{loading ? "Submitting Request..." : "Schedule Consultation"}</span>
            {!loading && (
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--ink-secondary)",
              lineHeight: 1.4,
              margin: "0.4rem 0 0",
              textAlign: "center",
            }}
          >
            Confidential enquiry. By submitting, you agree to contact by Bansal Lawyers Melbourne.
          </p>
        </form>
      )}

      {/* Footer / Urgent call */}
      <div className="hero-booking-card__footer">
        <div className="hero-booking-card__urgent">
          <span>Urgent deadline or court date?</span>
          <a href={businessDetails.phoneTel} className="hero-booking-card__urgent-tel">
            Call {businessDetails.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

// Re-export with HeroContactForm alias for natural semantic usage
export { HeroBookingPlaceholder as HeroContactForm };
