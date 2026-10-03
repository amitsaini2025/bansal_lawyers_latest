import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

import { HeroBookingPlaceholder } from "@/components/ui/HeroBookingPlaceholder";

export type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  compact?: boolean;
  aside?: ReactNode;
};

export function Hero({
  eyebrow,
  title,
  intro,
  primaryAction,
  secondaryAction,
  compact = false,
  aside,
}: HeroProps) {
  return (
    <section className={`hero${compact ? " hero--compact" : ""}`}>
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
            {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
            <h1>{title}</h1>
            {intro && (typeof intro === "string" ? <p>{intro}</p> : intro)}
            {(primaryAction || secondaryAction) && (
              <div className="hero__actions">
                {primaryAction && (
                  <ButtonLink href={primaryAction.href} variant="light">
                    {primaryAction.label}
                  </ButtonLink>
                )}
                {secondaryAction && (
                  <ButtonLink href={secondaryAction.href} variant="white-outline">
                    {secondaryAction.label}
                  </ButtonLink>
                )}
              </div>
            )}
          </div>
          {aside !== undefined ? aside : <HeroBookingPlaceholder />}
        </div>
      </Container>
    </section>
  );
}
