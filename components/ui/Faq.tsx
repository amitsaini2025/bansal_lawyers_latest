import Link from "next/link";
import type { FaqItem } from "@/types/content";

export interface FaqProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  contactTitle?: string;
  contactText?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactHref?: string;
  hideContactCard?: boolean;
  className?: string;
}

export function Faq({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Quick answers before you start.",
  contactTitle = "Have another question?",
  contactText = "Speak with our legal team or send us an email.",
  contactEmail = "info@bansallawyers.com.au",
  contactPhone = "0422 905 860",
  contactHref = "/contact",
  hideContactCard = false,
  className = "",
}: FaqProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={`faq-split-layout ${className}`.trim()}>
      {/* Left Column: Title, Subtitle, Contact Card */}
      <div className="faq-split-left">
        <div className="faq-split-header">
          <h2 className="faq-split-title">{title}</h2>
          <p className="faq-split-subtitle">{subtitle}</p>
        </div>

        {!hideContactCard && (
          <div className="faq-contact-card">
            <h3 className="faq-contact-card__title">{contactTitle}</h3>
            <p className="faq-contact-card__text">{contactText}</p>
            
            <div className="faq-contact-card__actions">
              <a
                href={`mailto:${contactEmail}`}
                className="faq-contact-card__pill"
                title={`Email Bansal Lawyers at ${contactEmail}`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{contactEmail}</span>
              </a>

              <div className="faq-contact-card__secondary">
                <Link href={contactHref} className="faq-contact-card__consult-link">
                  Book a Consultation →
                </Link>
                {contactPhone && (
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="faq-contact-card__phone-link"
                    title={`Call Bansal Lawyers: ${contactPhone}`}
                  >
                    Call {contactPhone}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: FAQ Accordion Pills */}
      <div className="faq-split-right">
        <div className="faq-pills-list">
          {items.map((item, index) => (
            <details key={`${item.question}-${index}`} className="faq-pill-item">
              <summary className="faq-pill-summary">
                <span className="faq-pill-question">{item.question}</span>
                <span className="faq-pill-chevron" aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>
              <div className="faq-pill-answer">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
