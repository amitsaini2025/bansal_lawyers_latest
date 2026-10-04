"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeroBookingPlaceholder({
  defaultPracticeArea = "immigration",
}: {
  defaultPracticeArea?: string;
} = {}) {
  const router = useRouter();
  const [selectedFormat, setSelectedFormat] = useState<"office" | "phone" | "video">("office");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM");
  const [practiceArea, setPracticeArea] = useState<string>(defaultPracticeArea);
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  return (
    <div className="hero-booking-card" aria-label="Appointment Booking Mockup Preview">
      {/* Mockup Window Frame Bar */}
      <div className="hero-booking-card__mockup-bar">
        <div className="mockup-dots" aria-hidden="true">
          <span className="mockup-dot mockup-dot--red" />
          <span className="mockup-dot mockup-dot--yellow" />
          <span className="mockup-dot mockup-dot--green" />
        </div>
        <div className="mockup-title-badge">
          <span className="mockup-sparkle">✦</span>
          <span>BOOKING PREVIEW</span>
        </div>
        <span className="mockup-status-pill">Interactive Mockup</span>
      </div>

      {/* Top Banner / Status */}
      <div className="hero-booking-card__top">
        <div className="hero-booking-card__status">
          <span className="hero-booking-card__pulsing-dot" aria-hidden="true" />
          <span className="hero-booking-card__status-text">Direct Appointment Booking</span>
        </div>
        <span className="hero-booking-card__wireframe-badge">Melbourne CBD</span>
      </div>

      <div className="hero-booking-card__header">
        <h3 className="hero-booking-card__title">Book a Consultation</h3>
        <p className="hero-booking-card__subtitle">
          Confidential legal advice at our Melbourne CBD office, by phone or by secure video.
        </p>
      </div>

      <form
        className="hero-booking-card__form"
        onSubmit={(e) => {
          e.preventDefault();
          const query = new URLSearchParams({
            practice: practiceArea,
            format: selectedFormat,
            slot: selectedSlot,
            ...(name ? { name } : {}),
            ...(contact ? { contact } : {}),
          });
          router.push(`/contact?${query.toString()}`);
        }}
      >
        {/* Step 1: Practice Area */}
        <div className="booking-field">
          <label htmlFor="booking-practice" className="booking-field__label">
            Select Practice Area
          </label>
          <div className="booking-select-wrapper">
            <select
              id="booking-practice"
              className="booking-select"
              value={practiceArea}
              onChange={(e) => setPracticeArea(e.target.value)}
            >
              <option value="immigration">Immigration Law (Visas, Refusals & Appeals)</option>
              <option value="family">Family Law (Divorce, Custody & Property)</option>
              <option value="commercial">Commercial Law (Contracts, Disputes & Business Matters)</option>
              <option value="property">Property Law & Conveyancing</option>
              <option value="civil">Civil Litigation & Dispute Resolution</option>
              <option value="criminal">Criminal Law & Court Matters</option>
            </select>
          </div>
        </div>

        {/* Step 2: Consultation Format (In-Office / Phone / Video) */}
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
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm4 0h2v2h-2V5zm-4 4h2v2H7V9zm4 0h2v2h-2V9zm-4 4h2v2H7v-2zm4 0h2v2h-2v-2z" clipRule="evenodd" />
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

        {/* Step 3: Date & Preferred Time Slots Wireframe */}
        <div className="booking-field">
          <div className="booking-field__row">
            <span className="booking-field__label">Available Time Slots</span>
            <span className="booking-field__date-indicator">Next: Today / Tomorrow</span>
          </div>
          <div className="booking-slots-grid">
            {["10:00 AM", "11:30 AM", "2:00 PM", "4:15 PM"].map((slot) => (
              <button
                key={slot}
                type="button"
                className={`booking-slot-btn ${selectedSlot === slot ? "booking-slot-btn--active" : ""}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Quick Contact Details */}
        <div className="booking-inputs-grid">
          <div className="booking-input-wrap">
            <label htmlFor="booking-name" className="booking-field__label-sr">Your Full Name</label>
            <input
              id="booking-name"
              type="text"
              className="booking-input"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="booking-input-wrap">
            <label htmlFor="booking-contact" className="booking-field__label-sr">Phone or Email</label>
            <input
              id="booking-contact"
              type="text"
              className="booking-input"
              placeholder="Phone or Email"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Action Button */}
        <button type="submit" className="booking-submit-btn">
          <span>Schedule Consultation</span>
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <p style={{ fontSize: "0.72rem", color: "var(--ink-secondary)", lineHeight: "1.4", margin: "0.65rem 0 0", textAlign: "center" }}>
          By sending this form, you agree to our Privacy Policy. Sending it doesn&apos;t create a lawyer-client relationship.
        </p>
      </form>

      {/* Mockup helper note + Urgent call */}
      <div className="hero-booking-card__footer">
        <div className="hero-booking-card__mockup-note">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>Interactive preview — routes directly to our legal intake team</span>
        </div>
        <div className="hero-booking-card__urgent">
          <span>Urgent deadline or hearing date?</span>
          <a href="tel:0422905860" className="hero-booking-card__urgent-tel">
            Call 0422 905 860
          </a>
        </div>
      </div>
    </div>
  );
}
