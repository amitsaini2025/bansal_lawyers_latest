import type { Metadata } from "next";
import { ButtonLink, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "[404 page title goes here]",
  description: "[404 page meta description goes here]",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Section tone="navy">
        <Container>
          <div className="section-header">
            <span className="eyebrow eyebrow--light">[Error 404 label]</span>
            <h1>[Page not found H1 goes here]</h1>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.15rem" }}>
              [Page not found introduction goes here]
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
              <ButtonLink href="/" variant="light">
                [Return home link]
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                [Contact firm link]
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div className="section-header">
            <span className="eyebrow">[Navigation pathways label]</span>
            <h2>[Alternative pathways heading goes here]</h2>
            <p>[Helpful links description goes here]</p>
          </div>

          <div className="card-grid">
            <article className="practice-card">
              <span className="practice-card__index" aria-hidden="true">01</span>
              <h3>[Practice areas card title]</h3>
              <p>[Practice areas directory description goes here]</p>
              <ButtonLink href="/immigration-lawyers-melbourne" variant="text">
                Explore Immigration Services
              </ButtonLink>
            </article>

            <article className="practice-card">
              <span className="practice-card__index" aria-hidden="true">02</span>
              <h3>[About firm card title]</h3>
              <p>[About firm overview description goes here]</p>
              <ButtonLink href="/about" variant="text">
                [Learn about our firm]
              </ButtonLink>
            </article>

            <article className="practice-card">
              <span className="practice-card__index" aria-hidden="true">03</span>
              <h3>[Legal articles card title]</h3>
              <p>[Legal insights and publications description goes here]</p>
              <ButtonLink href="/blog" variant="text">
                [Browse articles]
              </ButtonLink>
            </article>
          </div>
        </Container>
      </Section>
    </div>
  );
}
