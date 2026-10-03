import { ButtonLink } from "@/components/ui/Button";
import type { CardContent } from "@/types/content";

export function PracticeAreaCard({
  title,
  description,
  href,
  ctaText = "Learn More",
}: CardContent) {
  return (
    <article className="practice-card">
      <div className="practice-card__icon-wrap" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="m3 7 9-4 9 4" />
          <path d="M6 9v3a3 3 0 0 0 6 0V9" />
          <path d="M18 9v3a3 3 0 0 1-6 0V9" />
          <path d="M5 21h14" />
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {href && (
        <ButtonLink href={href} variant="text">
          {ctaText}
        </ButtonLink>
      )}
    </article>
  );
}
