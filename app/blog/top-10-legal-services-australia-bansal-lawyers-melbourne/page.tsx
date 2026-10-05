import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  Section,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createArticleSchema,
  createBreadcrumbSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Top 10 Legal Services in Australia | Bansal Lawyers Melbourne",
  description:
    "An overview of 10 common legal services in Australia including immigration, family law, criminal defence, employment, property, business law, and civil disputes from Bansal Lawyers Melbourne.",
  path: "/blog/top-10-legal-services-australia-bansal-lawyers-melbourne",
  keywords: [
    "Top 10 Legal Services in Australia",
    "Legal Services Australia",
    "Lawyers in Melbourne",
    "Immigration Lawyers Melbourne",
    "Family Lawyers Melbourne",
    "Criminal Lawyers Melbourne",
    "Commercial Lawyers Melbourne",
    "Property Lawyers Melbourne",
    "Bansal Lawyers Melbourne",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Top 10 Legal Services in Australia" },
];

const practiceAreaLinks = [
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description: "Visa applications, AAT/ART merits review, cancellations, citizenship and compliance.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description: "Divorce, child custody, parenting arrangements, property settlements and consent orders.",
  },
  {
    title: "Criminal Lawyers Melbourne",
    href: "/criminal-lawyers-melbourne/",
    description: "Police interviews, bail applications, Magistrates' Court representation and criminal defence.",
  },
  {
    title: "Commercial Lawyers Melbourne",
    href: "/commercial-lawyers-melbourne/",
    description: "Contracts, business sale and purchase agreements, shareholder deeds and debt recovery.",
  },
  {
    title: "Property Lawyers Melbourne",
    href: "/property-lawyers-melbourne/",
    description: "Conveyancing, Section 32 vendor statements, commercial leasing and property disputes.",
  },
  {
    title: "Civil Lawyers Melbourne",
    href: "/civil-lawyers-melbourne/",
    description: "Civil litigation, debt dispute resolution, negotiation and court document preparation.",
  },
];

export default function Top10LegalServicesPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title: "Top 10 Legal Services in Australia",
          description:
            "An overview of 10 common legal services in Australia including immigration, family law, criminal defence, employment, property, business law, and civil disputes from Bansal Lawyers Melbourne.",
          path: "/blog/top-10-legal-services-australia-bansal-lawyers-melbourne",
          datePublished: "2025-09-26",
          dateModified: "2025-09-26",
          authorName: "Ajay Bansal",
        })}
      />
      <StructuredData data={createLegalServiceSchema()} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Article Header Hero */}
      <section
        style={{
          background: "var(--navy-900)",
          color: "var(--white)",
          padding: "clamp(2.75rem, 5.5vw, 4.25rem) 0 clamp(2.25rem, 4.5vw, 3.25rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
                lineHeight: "1.22",
                color: "var(--white)",
                margin: "0 0 1.25rem",
                fontWeight: 700,
              }}
            >
              Top 10 Legal Services in Australia
            </h1>

            {/* Meta Strip: Sep 26, 2025 | 3 min read | 575 words | Bansal Lawyers */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem 2rem",
                alignItems: "center",
                fontSize: "0.92rem",
                color: "rgba(255, 255, 255, 0.85)",
                paddingTop: "0.75rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#93c5fd" }}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Sep 26, 2025
              </span>

              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#93c5fd" }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                3 min read
              </span>

              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#93c5fd" }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                575 words
              </span>

              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#93c5fd" }}
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Bansal Lawyers
              </span>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Immigration, Family & Commercial Law",
          "Administrative Review Tribunal (ART) Matters",
          "Direct Solicitor Communication",
        ]}
      />

      {/* Main Article Content */}
      <Section tone="white">
        <Container>
          <div
            style={{
              maxWidth: "56rem",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
            }}
          >
            {/* Featured Visual Image */}
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Image
                src="/images/melbourne-legal-chambers.webp"
                alt="Legal Services in Australia overview at Bansal Lawyers Melbourne chambers"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 860px"
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* Content Body */}
            <article
              className="article-content"
              style={{
                color: "var(--ink)",
                fontSize: "1.06rem",
                lineHeight: "1.8",
              }}
            >
              {/* Introduction */}
              <div
                style={{
                  fontSize: "1.12rem",
                  lineHeight: "1.75",
                  color: "var(--navy-950)",
                  marginBottom: "2rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    color: "var(--navy-950)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Legal Services in Australia
                </h2>
                <p>
                  Australia&apos;s legal system gives people, families, and businesses a way to resolve disputes and protect their rights. Immigration, family, criminal, property, and business issues often need legal advice. This article outlines 10 common legal services in Australia, and how Bansal Lawyers in Melbourne can help with them.
                </p>
              </div>

              {/* Top 10 Services List */}
              <div style={{ display: "grid", gap: "2rem", marginBottom: "2.5rem" }}>
                {/* 1. Immigration Law Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    1. Immigration Law Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    Australia remains a top destination for skilled migration, student visas and family reunification. Immigration lawyers handle visa applications, appeals, permanent residency advice and citizenship processes. At <Link href="/immigration-lawyers-melbourne/" style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}>Bansal Lawyers in Melbourne</Link>, we advise on complex immigration matters — including matters before the Administrative Review Tribunal (ART).
                  </p>
                </section>

                {/* 2. Family Law Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    2. Family Law Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    Matters related to Family disputes like divorce, custody of child, parenting arrangements, and property settlements with required compassionate with strategic legal guidance. Family lawyers in Australia ensure that both side of parties (Parents) rights and children’s interests are protected during sensitive times.
                  </p>
                </section>

                {/* 3. Criminal Law Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    3. Criminal Law Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    Facing criminal charges in Australia can be overwhelming. Criminal lawyers will defend clients against charges of assault, theft, drug-related offences, and traffic violations. Lawyers also give services for providing assistance on bail applications, trials, and appeals.
                  </p>
                </section>

                {/* 4. Employment Law Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    4. Employment Law Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    In Australia Employment lawyers provide advice for workplace disputes, unfair dismissals, workplace harassment, and contractual rights of the clients. With Australia’s strict workplace laws, employees and employers alike often seek legal clarity to protect their interests.
                  </p>
                </section>

                {/* 5. Property & Conveyancing Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    5. Property & Conveyancing Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    Buying or selling property in Australia involves contracts, settlements, and title transfers. Property lawyers’ preventive clients from disputes, fraud, or contract issues, making property transactions stable and protected.
                  </p>
                </section>

                {/* 6. Corporate & Business Law Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    6. Corporate & Business Law Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    From small businesses to global corporations, legal consultation is significant for contracts, mergers, acquisitions, compliance, and intellectual property protection. Corporate lawyers help businesses avoid probability while to make sure regulatory acceptance.
                  </p>
                </section>

                {/* 7. Personal Injury & Compensation Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    7. Personal Injury & Compensation Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    If someone agonize an injury at work, in a public place, or due to medical carelessness, recompense lawyers help in securing acknowledged claims. This area is one of the most common legal services in Australia.
                  </p>
                </section>

                {/* 8. Wills & Estate Planning */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    8. Wills & Estate Planning
                  </h2>
                  <p style={{ margin: 0 }}>
                    Lawyers directing attention to in wills and estates help clients long range planning. This encompass drafting wills, setting up trusts, and managing probate and estate disputes. These assistances make certain assets are safeguarded and dispense according to desire.
                  </p>
                </section>

                {/* 9. Civil Litigation Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    9. Civil Litigation Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    Disputes between individuals, businesses, or organizations frequently end up in civil lawsuits. Lawyers in this area allocate with rupture of contract, debt recovery, calumny, and commercial disputes.
                  </p>
                </section>

                {/* 10. Intellectual Property (IP) Services */}
                <section style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.3rem",
                      color: "var(--navy-950)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    10. Intellectual Property (IP) Services
                  </h2>
                  <p style={{ margin: 0 }}>
                    With Australia’s growing high-tech industry, implement strong digital security is crucial. IP lawyers yield kindness for trademarks, patents, copyrights, and trade secrets to safeguard artistic and business advantage.
                  </p>
                </section>
              </div>

              {/* How Bansal Lawyers Can Help */}
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                    color: "var(--navy-950)",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "2px solid #e2e8f0",
                  }}
                >
                  How Bansal Lawyers Can Help
                </h2>
                <p>
                  Bansal Lawyers in Melbourne offers a wide range of legal services including immigration law, family law, criminal defence, property matters, and civil disputes. What sets them apart is their client-focused approach, deep legal expertise, and strong track record of results.
                </p>
                <p>
                  If you need any legal help with a complicated visa application, a sensitive family matter, or business compliance, Bansal Lawyers provide reliable, ethical, and tailored legal solutions to individuals and businesses across Melbourne.
                </p>
              </section>

              {/* Final Thoughts */}
              <section
                style={{
                  marginBottom: "2.5rem",
                  padding: "1.5rem",
                  background: "#f8fafc",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--navy-950)",
                    marginTop: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  Final Thoughts
                </h2>
                <p style={{ marginBottom: "0.75rem" }}>
                  The legal industry in Australia offers a wide spectrum of services that cater to personal, family, and business needs. By understanding these top 10 legal services, Australians can make informed decisions when choosing the right legal support. And if you’re in Melbourne, Bansal Lawyers can provide clear advice on the legal issues described above.
                </p>
                <p style={{ margin: 0, fontWeight: 700, color: "var(--navy-950)" }}>
                  AB
                </p>
              </section>

              {/* Consultation Next Steps Card */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "2rem",
                  background: "var(--navy-900)",
                  color: "#ffffff",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <h3 style={{ margin: 0, color: "#ffffff", fontSize: "1.35rem" }}>
                  Speak to Bansal Lawyers Melbourne
                </h3>
                <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.88)", lineHeight: "1.65" }}>
                  Contact our Melbourne legal team for clear, confidential legal advice at our Collins Street office, by phone, or via secure video consultation.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem" }}>
                  <ButtonLink href="/contact" variant="light">
                    Book a Consultation
                  </ButtonLink>
                  <ButtonLink href="tel:+61422905860" variant="white-outline">
                    Call 0422 905 860
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Practice Areas Grid */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--line)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.35rem",
                  color: "var(--navy-950)",
                  marginBottom: "1.5rem",
                }}
              >
                Our Melbourne Practice Areas
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1rem",
                }}
              >
                {practiceAreaLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    style={{
                      display: "block",
                      padding: "1.25rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "var(--radius-sm)",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        color: "var(--brand-blue)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--ink-secondary)",
                        lineHeight: "1.5",
                        margin: 0,
                      }}
                    >
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
