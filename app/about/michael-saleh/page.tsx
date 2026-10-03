import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  Container,
  CtaSection,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Michael Saleh | Solicitor | Bansal Lawyers Melbourne",
  description:
    "Profile of Michael Saleh, Solicitor at Bansal Lawyers Melbourne. Admitted to the Supreme Court of Victoria with experience in criminal defence, family law, civil litigation and commercial disputes.",
  path: "/about/michael-saleh",
  keywords: [
    "Michael Saleh",
    "Michael Saleh Solicitor",
    "Michael Saleh Lawyer Melbourne",
    "Criminal Lawyer Michael Saleh",
    "Family Lawyer Michael Saleh",
    "Bansal Lawyers Solicitor",
  ],
});

export default function MichaelSalehProfilePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Michael Saleh" },
  ];

  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      {/* Profile Hero Header */}
      <section
        style={{
          background: "linear-gradient(145deg, #071324 0%, #0d223f 50%, #153765 100%)",
          color: "#ffffff",
          paddingBlock: "clamp(3.5rem, 6vw, 5.5rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "center",
            }}
          >
            {/* Image Column */}
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                maxWidth: "420px",
                marginInline: "auto",
                width: "100%",
                aspectRatio: "3 / 4",
                background: "#09172b",
              }}
            >
              <Image
                src="/images/team/michael-saleh-solicitor.png"
                alt="Michael Saleh - Solicitor at Bansal Lawyers"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(7, 19, 36, 0.85) 0%, rgba(7, 19, 36, 0.2) 50%, transparent 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(255, 255, 255, 0.96)",
                  borderRadius: "16px",
                  padding: "1rem 1.25rem",
                  color: "#0f172a",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>Michael Saleh</div>
                <div style={{ fontSize: "0.86rem", color: "#64748b", fontWeight: 600 }}>
                  Solicitor
                </div>
              </div>
            </div>

            {/* Profile Intro Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.9rem",
                  borderRadius: "9999px",
                  background: "rgba(59, 130, 246, 0.15)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  color: "#93c5fd",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Practitioner Profile
              </div>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  marginBottom: "0.75rem",
                  color: "#ffffff",
                }}
              >
                Michael Saleh
              </h1>
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--brand-blue-light)",
                  marginBottom: "1.5rem",
                }}
              >
                Solicitor · Bansal Lawyers Melbourne
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "#cbd5e1",
                  maxWidth: "38rem",
                  marginBottom: "2rem",
                }}
              >
                Admitted to the Supreme Court of Victoria. Dedicated court advocate and solicitor with extensive experience across Victorian courts, tribunals, civil litigation, and criminal defence.
              </p>

              {/* Quick Details Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2.25rem",
                  maxWidth: "36rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700 }}>
                    Admission
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
                    Supreme Court VIC
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700 }}>
                    Education
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
                    Bachelor of Laws, GDLP
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8", fontWeight: 700 }}>
                    Languages
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
                    English, Arabic
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="button button--primary"
                  style={{ minWidth: "13rem", justifyContent: "center" }}
                >
                  Book Consultation With Michael
                </Link>
                <a
                  href="tel:+61422905860"
                  className="button button--secondary"
                  style={{ minWidth: "11rem", justifyContent: "center" }}
                >
                  Call 0422 905 860
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Supreme Court of Victoria Admitted",
          "Magistrates' Court & FCFCOA Advocacy",
          "VCAT Dispute Resolution Experience",
          "Direct Practitioner Representation",
        ]}
      />

      {/* In-depth Biography Section */}
      <Section tone="white" id="biography">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <SectionHeader
              title="Professional Background & Court Experience"
              intro="Measured guidance, rigorous evidentiary preparation, and dedicated court representation."
            />

            <div style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--ink)" }}>
              <p>
                Michael Saleh is a solicitor at Bansal Lawyers. He is admitted to the Supreme Court of Victoria and holds a Bachelor of Laws and a Graduate Diploma of Legal Practice.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Michael has extensive experience across criminal defence, family law, civil litigation, and commercial disputes. He has appeared regularly in the Magistrates’ Court of Victoria, the Federal Circuit and Family Court of Australia (FCFCOA), and the Victorian Civil and Administrative Tribunal (VCAT).
              </p>
              <p style={{ marginTop: "1rem" }}>
                His work involves helping clients understand complex legal documents, court processes, dispute strategy, and practical next steps. Michael takes a clear and measured approach when advising clients, especially in matters that involve significant stress, urgency, or uncertainty.
              </p>
              <p style={{ marginTop: "1rem" }}>
                He works closely with clients to review evidentiary requirements, formulate dispute strategies, and represent their rights vigorously before Victorian courts and tribunals.
              </p>
            </div>

            {/* Practice Areas */}
            <div style={{ marginTop: "3rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--navy-950)" }}>
                Litigation &amp; Practice Focus
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div style={{ padding: "1.25rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", borderLeft: "3.5px solid var(--brand-blue)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.4rem", color: "var(--navy-950)" }}>
                    Criminal Defence &amp; Bail
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", margin: 0, lineHeight: 1.55 }}>
                    Police interview guidance, urgent bail applications, traffic offences, assault, and court representation.
                  </p>
                </div>

                <div style={{ padding: "1.25rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", borderLeft: "3.5px solid var(--brand-blue)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.4rem", color: "var(--navy-950)" }}>
                    Family Law &amp; Parenting
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", margin: 0, lineHeight: 1.55 }}>
                    Parenting orders, child custody disputes, intervention orders (IVOs), and financial settlements.
                  </p>
                </div>

                <div style={{ padding: "1.25rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", borderLeft: "3.5px solid var(--brand-blue)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.4rem", color: "var(--navy-950)" }}>
                    Civil Litigation &amp; Disputes
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", margin: 0, lineHeight: 1.55 }}>
                    Breach of contract claims, debt disputes, civil court document drafting, and settlement negotiations.
                  </p>
                </div>

                <div style={{ padding: "1.25rem", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius-md)", borderLeft: "3.5px solid var(--brand-blue)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.4rem", color: "var(--navy-950)" }}>
                    Tribunals &amp; VCAT
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", margin: 0, lineHeight: 1.55 }}>
                    VCAT dispute hearings, residential/commercial tenancy disputes, and merits advocacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CtaSection
        title="Schedule a Consultation With Michael Saleh"
        text="Facing an urgent court date, criminal charge, intervention order, or civil dispute in Melbourne? Get experienced, direct advice from Michael Saleh."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call 0422 905 860",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Practitioner Contact"
        badges={[
          "Supreme Court of Victoria Admitted",
          "Magistrates' Court & VCAT Advocacy",
          "In-Person & Virtual Appointments",
        ]}
      />
    </>
  );
}
