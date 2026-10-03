import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  Container,
  CtaSection,
  Hero,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createAboutPageSchema, createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "About Bansal Lawyers | Trusted Law Firm in Melbourne",
  description:
    "Learn about Bansal Lawyers, a Melbourne law firm led by Ajay Bansal, providing legal services in immigration, family, criminal, commercial and property law.",
  path: "/about",
  keywords: [
    "Law Firm Melbourne",
    "Lawyers in Melbourne",
    "Melbourne Legal Services",
    "Immigration Lawyers Melbourne",
    "Family Lawyers Melbourne",
    "Commercial Lawyers Melbourne",
    "Criminal Lawyers Melbourne",
    "Property Lawyers Melbourne",
  ],
});

const differentPoints = [
  "Clear legal advice delivered in plain language without unnecessary jargon",
  "Careful, meticulous review of facts, evidence, documents, and court deadlines",
  "Practical guidance tailored to your specific commercial or personal situation",
  "Multidisciplinary support across commercial, family, immigration, criminal, property, and civil law",
  "Professional, confidential handling of sensitive, high-stakes, and urgent matters",
  "Multilingual legal advice in English, Hindi, Punjabi, and Arabic",
  "Melbourne-based legal practice centrally located at Level 8, 278 Collins Street",
  "Unwavering focus on proactive client communication, transparency, and preparation",
];

const coreValues = [
  {
    num: "01",
    title: "Integrity",
    description:
      "We believe legal advice should be honest, clear, and responsible. Clients deserve to understand both the strengths and the risks in their matter before making major life or business decisions.",
  },
  {
    num: "02",
    title: "Excellence",
    description:
      "We take preparation seriously. Whether the matter involves immigration documents, family law issues, court submissions, contracts, property transactions, or disputes, we focus on detail and proper legal process.",
  },
  {
    num: "03",
    title: "Client Focus",
    description:
      "Every client’s situation is unique. We take the time to understand the issue, explain the available avenues, and provide legal guidance that fits each client’s personal or business circumstances.",
  },
  {
    num: "04",
    title: "Clear Communication",
    description:
      "Legal matters should not be hidden behind confusing language. We aim to communicate clearly and promptly so you always know what is happening and what steps come next.",
  },
  {
    num: "05",
    title: "Practical Solutions",
    description:
      "Our advice is focused on real outcomes, not unnecessary complication or prolonged dispute. We help clients make informed decisions based on the law, the documents, the risks, and the practical path forward.",
  },
];

const whoWeHelp = [
  "Migrants and Australian visa applicants",
  "Families going through separation, divorce, or financial division",
  "Parents seeking clear, child-focused parenting arrangements",
  "Individuals facing police interviews, traffic offences, or criminal charges",
  "Business owners, entrepreneurs, and commercial companies",
  "Property buyers, sellers, landlords, and commercial tenants",
  "Skilled professionals, international students, and employer sponsors",
  "Individuals and businesses involved in civil litigation or debt disputes",
  "Clients needing legal advice before signing commercial or property contracts",
  "Clients responding to urgent court appearances, tribunal hearings, or government notices",
];

const practiceClusters = [
  {
    title: "Immigration Law",
    anchorText: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description:
      "Assisting with visa applications, visa refusals, cancellations, ART appeals, partner visas, student visas, skilled migration, employer sponsorship, PR, and citizenship.",
  },
  {
    title: "Family Law",
    anchorText: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description:
      "Calm, practical advice for divorce, parenting arrangements, child custody, property settlement, consent orders, binding financial agreements, and family violence matters.",
  },
  {
    title: "Criminal Law",
    anchorText: "Criminal Lawyers Melbourne",
    href: "/criminal-lawyers-melbourne/",
    description:
      "Defending criminal charges, traffic offences, police interviews, bail applications, intervention order breaches, assault, and Magistrates' Court representation.",
  },
  {
    title: "Commercial & Business Law",
    anchorText: "Commercial Lawyers Melbourne",
    href: "/commercial-lawyers-melbourne/",
    description:
      "Business contracts, commercial agreements, shareholder and partnership deeds, loan documentation, business sales, commercial disputes, and debt recovery.",
  },
  {
    title: "Property Law",
    anchorText: "Property Lawyers Melbourne",
    href: "/property-lawyers-melbourne/",
    description:
      "Property contract review, residential and commercial conveyancing, commercial leasing, Section 32 vendor disclosures, off-the-plan advice, and caveat disputes.",
  },
  {
    title: "Civil Law & Disputes",
    anchorText: "Civil Lawyers Melbourne",
    href: "/civil-lawyers-melbourne/",
    description:
      "Civil litigation, letters of demand, contract and debt disputes, VCAT hearings, dispute negotiation, deed of release preparation, and Magistrates' Court claims.",
  },
];

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Bansal Lawyers" },
  ];

  return (
    <>
      <StructuredData data={createAboutPageSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section */}
      <Hero
        eyebrow="Law Firm Melbourne"
        title="About Bansal Lawyers"
        intro={
          <>
            <p>
              Bansal Lawyers is a Melbourne-based law firm providing legal services across immigration law, family law, criminal law, commercial law, property law, civil law, and business-related matters.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              Led by Director and Principal Lawyer Ajay Bansal, our firm supports individuals, families, migrants, professionals, and business owners with clear legal advice and practical guidance.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              We understand that legal matters can feel stressful and difficult to manage. Our role is to help clients understand their position, know their options, and take the right next step with confidence.
            </p>
          </>
        }
        primaryAction={{ label: "Meet Our Team", href: "#our-team" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact" }}
      />

      {/* Trust Highlights */}
      <TrustBar
        items={[
          "Collins Street Melbourne CBD",
          "Over 15 Years Legal Experience",
          "Multilingual Legal Advice",
          "Direct Solicitor Communication",
        ]}
      />

      {/* 2. Firm Ethos & Location Section (Side-by-Side in a Single Section) */}
      <Section tone="white">
        <div className="about-split-section">
          <div className="about-split-content">
            <span className="eyebrow">Melbourne Legal Services</span>
            <h2>A Melbourne Law Firm Focused on Clear Legal Advice</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Bansal Lawyers was built with a simple purpose: to provide legal support that is practical, honest, and easy to understand.
            </p>
            <p style={{ fontSize: "1.02rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.85rem" }}>
              Clients come to us with different legal concerns. Some need help with a visa issue. Some are going through separation or a family dispute. Others may be facing a criminal charge, reviewing a business agreement, buying property, or dealing with a civil dispute.
            </p>
            <p style={{ fontSize: "1.02rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.85rem" }}>
              Every matter is different. That is why we take time to understand the facts, review the documents, explain the risks, and guide clients through the process in plain language.
            </p>
          </div>

          <div className="about-split-media">
            <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "var(--shadow)" }}>
              <Image
                src="/images/collins-street-office.webp"
                alt="Bansal Lawyers Collins Street Legal Chambers, Melbourne CBD"
                width={800}
                height={600}
                sizes="(max-width: 960px) 100vw, 520px"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Meet Our Team Section (Side-by-Side in a Single Section) */}
      <Section tone="warm" id="our-team">
        <Container>
          <SectionHeader
            eyebrow="Legal Leadership & Practitioners"
            title="Meet Our Legal Team"
            intro="Experienced Melbourne legal professionals committed to clear communication, thorough preparation, and practical advice."
          />

          <div className="about-team-grid">
            {/* Person 1: Ajay Bansal */}
            <article className="team-card-compact">
              <div className="team-card-compact__media">
                <Image
                  src="/images/team/ajay-bansal-director.webp"
                  alt="Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne"
                  width={768}
                  height={1024}
                  sizes="(max-width: 860px) 100vw, 540px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
              </div>

              <div className="team-card-compact__body">
                <div className="team-card-compact__header">
                  <div>
                    <h3 className="team-card-compact__name">Ajay Bansal</h3>
                    <span className="team-card-compact__role">Director & Principal Lawyer</span>
                  </div>
                  <span className="team-member-badge">15+ Years Legal Experience</span>
                </div>

                <div className="team-card-compact__bio">
                  <p>
                    Ajay Bansal is the founding Director of Bansal Lawyers. He brings over 15 years of legal experience to the firm and has worked with clients across a wide range of legal matters in Australia.
                  </p>
                  <p>
                    His work covers immigration law, family law, property law, commercial law, criminal law, and civil matters. Over the years, he has assisted hundreds of clients with legal issues involving visas, family disputes, business matters, property transactions, criminal charges, and other legal concerns.
                  </p>
                  <p>
                    Ajay’s approach is straightforward. He focuses on understanding the client’s situation, explaining the legal position clearly, and helping the client make informed decisions.
                  </p>
                  <p>
                    He believes clients should not be left confused by legal language or unclear processes. His focus is on practical advice, careful preparation, and professional support at each stage of the matter.
                  </p>
                </div>

                <div className="team-card-compact__meta">
                  <div className="team-card-compact__languages">
                    <strong>Languages Spoken:</strong> English, Hindi, Punjabi
                  </div>
                  <Link href="/contact" className="button button--primary button--compact" style={{ width: "100%", justifyContent: "center" }}>
                    Schedule Consultation With Ajay Bansal →
                  </Link>
                </div>
              </div>
            </article>

            {/* Person 2: Michael Saleh */}
            <article className="team-card-compact">
              <div className="team-card-compact__media">
                <Image
                  src="/images/team/michael-saleh-solicitor.png"
                  alt="Michael Saleh - Solicitor at Bansal Lawyers Melbourne"
                  width={822}
                  height={1024}
                  sizes="(max-width: 860px) 100vw, 540px"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
              </div>

              <div className="team-card-compact__body">
                <div className="team-card-compact__header">
                  <div>
                    <h3 className="team-card-compact__name">Michael Saleh</h3>
                    <span className="team-card-compact__role">Solicitor</span>
                  </div>
                  <span className="team-member-badge">Supreme Court of Victoria</span>
                </div>

                <div className="team-card-compact__bio">
                  <p>
                    Michael Saleh is a solicitor at Bansal Lawyers. He is admitted to the Supreme Court of Victoria and holds a Bachelor of Laws and a Graduate Diploma of Legal Practice.
                  </p>
                  <p>
                    Michael has experience across criminal law, family law, civil litigation, and commercial matters. He has appeared in the Magistrates’ Court, the Federal Circuit and Family Court of Australia, and VCAT.
                  </p>
                  <p>
                    His work involves helping clients understand legal documents, court processes, dispute issues, and practical next steps. Michael takes a clear and measured approach when advising clients, especially in matters that involve stress, urgency, or uncertainty.
                  </p>
                  <p>
                    He works closely with clients to review evidentiary requirements, formulate dispute strategies, and represent their rights vigorously before Victorian courts and tribunals.
                  </p>
                </div>

                <div className="team-card-compact__meta">
                  <div className="team-card-compact__languages">
                    <strong>Languages Spoken:</strong> English, Arabic
                  </div>
                  <Link href="/contact" className="button button--primary button--compact" style={{ width: "100%", justifyContent: "center" }}>
                    Schedule Consultation With Michael Saleh →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* 4. Our Practice Areas Section */}
      <Section tone="white" id="practice-areas">
        <Container>
          <SectionHeader
            eyebrow="Multidisciplinary Legal Services"
            title="Our Practice Areas"
            intro="Bansal Lawyers provides legal services across key personal, commercial, and court-related practice areas in Victoria."
          />

          <div className="practice-cluster-grid">
            {practiceClusters.map((cluster) => (
              <Link
                key={cluster.title}
                href={cluster.href}
                className="practice-cluster-card"
                title={`Explore ${cluster.anchorText}`}
              >
                <h3>
                  <span>{cluster.title}</span>
                  <span className="cluster-arrow" aria-hidden="true">→</span>
                </h3>
                <p>{cluster.description}</p>
                <span className="practice-cluster-link">
                  {cluster.anchorText} →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Our Story Section (Image Left, Content Right) */}
      <Section tone="warm" id="our-story">
        <div className="about-split-section about-split-section--reverse">
          <div className="about-split-media">
            <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "var(--shadow)" }}>
              <Image
                src="/images/melbourne-legal-chambers.webp"
                alt="Bansal Lawyers Melbourne Legal Chambers Consultation Suite"
                width={800}
                height={600}
                sizes="(max-width: 960px) 100vw, 520px"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          <div className="about-split-content">
            <h2>Our Story</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Bansal Lawyers was established with a clear focus on providing reliable legal services built around client needs.
            </p>
            <p style={{ fontSize: "1.02rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.85rem" }}>
              From the beginning, the firm has focused on practical legal advice, strong preparation, and respectful client communication. Over time, Bansal Lawyers has grown into a Melbourne law firm assisting clients across immigration, family, criminal, commercial, property, civil, and business law matters.
            </p>
            <p style={{ fontSize: "1.02rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.85rem" }}>
              We combine traditional legal values with a practical modern approach. That means we value preparation, ethics, confidentiality, and professionalism, while also making sure clients receive clear explanations and responsive support.
            </p>
            <p style={{ fontSize: "1.02rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.85rem" }}>
              Our work is guided by a simple belief: clients should understand their matter before making important legal decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. What Makes Bansal Lawyers Different */}
      <Section tone="white" id="why-different">
        <SectionHeader
          eyebrow="Our Approach"
          title="What Makes Bansal Lawyers Different"
          intro="Clients choose Bansal Lawyers because we take a personal and practical approach to legal work, without making matters more complicated than they need to be."
        />

        <div className="different-points-grid">
          {differentPoints.map((point, index) => (
            <div key={point} className="different-point-card">
              <div className="different-point-card__header">
                <span className="different-point-card__index">{`0${index + 1}`}</span>
              </div>
              <p className="different-point-card__text">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Our Core Values */}
      <Section tone="warm" id="core-values">
        <SectionHeader
          eyebrow="Guiding Principles"
          title="Our Core Values"
          intro="The fundamental standards that drive our legal advice, representation, and professional client service."
        />

        <div className="values-grid">
          {coreValues.map((value) => (
            <div key={value.num} className="value-card">
              <div className="value-card__header">
                <span className="value-card__num">{value.num}</span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Who We Help */}
      <Section tone="white" id="who-we-help">
        <SectionHeader
          eyebrow="Our Clients"
          title="Who We Help"
          intro="Bansal Lawyers assists a wide range of individuals, families, professionals, and companies across Victoria and Australia."
        />

        <div className="client-types-grid">
          {whoWeHelp.map((client) => (
            <div key={client} className="client-type-item">
              <span>{client}</span>
            </div>
          ))}
        </div>

        <p style={{ color: "var(--ink-secondary)", marginTop: "2rem", fontSize: "1.02rem", maxWidth: "48rem", lineHeight: "1.7" }}>
          Whether your matter is personal, business-related, urgent, or document-heavy, we help you understand the legal process and take the next step with confidence.
        </p>
      </Section>

      {/* 9. Final Call to Action */}
      <CtaSection
        eyebrow="Consult A Melbourne Lawyer"
        title="Speak With Bansal Lawyers"
        text="If you need legal advice in Melbourne, Bansal Lawyers can help you understand your position and available options. Whether your matter involves immigration, family law, criminal law, commercial law, property law, civil law, or a business issue, our team is ready to guide you."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Contact Our Legal Team", href: "/contact" }}
      />
    </>
  );
}
