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

const legalTeamMembers = [
  {
    name: "Ajay Bansal",
    role: "Director & Principal Lawyer",
    email: "info@bansallawyers.com.au",
    phone: "0422 905 860",
    phoneHref: "tel:+61422905860",
    profileHref: "/about/ajay-bansal",
    image: "/images/team/ajay-bansal-director.webp",
    alt: "Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne",
  },
  {
    name: "Michael Saleh",
    role: "Solicitor",
    email: "info@bansallawyers.com.au",
    phone: "0422 905 860",
    phoneHref: "tel:+61422905860",
    profileHref: "/about/michael-saleh",
    image: "/images/team/michael-saleh-solicitor.png",
    alt: "Michael Saleh - Solicitor at Bansal Lawyers Melbourne",
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

      {/* 3. Meet Our Team Section (Clean Showcase Matching Design Spec) */}
      <Section tone="white" id="our-team">
        <Container>
          <div className="team-clean-header">
            <div className="team-clean-eyebrow">
              <span className="team-clean-eyebrow__line" aria-hidden="true" />
              <span>LEGAL PRACTITIONERS</span>
            </div>
            <h2 className="team-clean-title">
              Meet Our <span className="team-clean-title__serif">Legal Team</span>
            </h2>
            <p className="team-clean-intro">
              Experienced Melbourne legal professionals committed to clear communication, thorough preparation, and practical advice.
            </p>
          </div>

          <div className="team-clean-grid">
            {legalTeamMembers.map((member) => (
              <article key={member.name} className="team-clean-card">
                <Link
                  href={member.profileHref}
                  className="team-clean-card__media-link"
                  title={`View ${member.name}'s profile`}
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 580px) 100vw, (max-width: 1080px) 50vw, 25vw"
                    className="team-clean-card__img"
                  />
                </Link>

                <div className="team-clean-card__content">
                  <h3 className="team-clean-card__name">
                    <Link href={member.profileHref}>
                      {member.name}
                    </Link>
                  </h3>
                  <a
                    href={`mailto:${member.email}`}
                    className="team-clean-card__email"
                    title={`Email ${member.name}`}
                  >
                    {member.email}
                  </a>
                  <p className="team-clean-card__role">{member.role}</p>

                  <div className="team-clean-card__socials">
                    <a
                      href={member.phoneHref}
                      className="team-clean-card__icon-link"
                      title={`Call ${member.name}: ${member.phone}`}
                      aria-label={`Call ${member.name}`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="team-clean-card__icon-link"
                      title={`Send email to ${member.name}`}
                      aria-label={`Send email to ${member.name}`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </a>
                    <Link
                      href={member.profileHref}
                      className="team-clean-card__icon-link"
                      title={`View ${member.name}'s profile`}
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <polyline points="17 11 19 13 23 9" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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
