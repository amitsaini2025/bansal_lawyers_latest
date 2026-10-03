import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export type CtaSectionProps = {
  eyebrow?: string;
  title: string;
  text: ReactNode;
  action: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  phone?: string;
  phoneLabel?: string;
  badges?: string[];
};

export function CtaSection({
  eyebrow,
  title,
  text,
  action,
  secondaryAction,
  phone = "0422 905 860",
  phoneLabel = "Direct Solicitor Line",
  badges = [
    "Strictly confidential consultation",
    "Prompt response to urgent matters",
    "Melbourne CBD & virtual appointments",
  ],
}: CtaSectionProps) {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-section__grid">
          <div className="cta-section__content">
            {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
            <h2>{title}</h2>
            <div className="cta-section__text">
              {typeof text === "string" ? <p>{text}</p> : text}
            </div>
          </div>

          <div className="cta-section__card">
            <div className="cta-card__badge-row">
              <span className="cta-card__pulse-dot" aria-hidden="true" />
              <span className="cta-card__badge-text">Priority Legal Consultation</span>
            </div>

            <div className="cta-card__phone-block">
              <span className="cta-card__phone-label">{phoneLabel}</span>
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="cta-card__phone-link">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{phone}</span>
              </a>
            </div>

            <div className="cta-card__actions">
              <ButtonLink href={action.href} variant="light" className="cta-card__btn-primary">
                {action.label}
              </ButtonLink>
              {secondaryAction && (
                <ButtonLink href={secondaryAction.href} variant="white-outline" className="cta-card__btn-secondary">
                  {secondaryAction.label}
                </ButtonLink>
              )}
            </div>

            {badges && badges.length > 0 && (
              <ul className="cta-card__badges">
                {badges.map((badge, idx) => (
                  <li key={idx}>
                    <svg
                      width="14"
                      height="14"
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
                    <span>{badge}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
