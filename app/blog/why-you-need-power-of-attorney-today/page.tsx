import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import { DynamicArticleMeta } from "@/components/blog/DynamicArticleMeta";
import { RecommendedArticles } from "@/components/blog/RecommendedArticles";

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
  title:
    "The Importance of Having a Power of Attorney Today | Bansal Lawyers",
  description:
    "Why having a Power of Attorney (POA) in Australia is crucial: General POA, Enduring Power of Attorney (EPOA), Supportive POA, fiduciary duties, and safeguarding your future.",
  path: "/blog/why-you-need-power-of-attorney-today",
  keywords: [
    "Power of Attorney Australia",
    "Enduring Power of Attorney Melbourne",
    "General Power of Attorney Victoria",
    "Supportive Power of Attorney Act 2014",
    "Medical Power of Attorney Melbourne",
    "Estate Planning Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label: "The Importance of Having a Power of Attorney Today",
  },
];

const relatedCivilServices = [
  {
    title: "Document Preparation Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/document-preparation-lawyer-melbourne/",
    description:
      "Professional drafting and execution of Powers of Attorney, statutory declarations, deeds, and binding legal documents.",
  },
  {
    title: "Court Document Preparation",
    href: "/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/",
    description:
      "Preparation of formal legal documentation, affidavits, and submissions for Victorian tribunals and courts.",
  },
  {
    title: "Civil Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/",
    description:
      "Legal representation and strategic dispute resolution for individuals and families across Victoria.",
  },
  {
    title: "Business Legal Advice Melbourne",
    href: "/commercial-lawyers-melbourne/business-legal-advice-lawyer-melbourne/",
    description:
      "Comprehensive advisory on business continuity, director authorizations, and delegation of powers.",
  },
  {
    title: "Property Transfer Lawyer Melbourne",
    href: "/property-lawyers-melbourne/property-transfer-lawyer-melbourne/",
    description:
      "Assistance with property conveyancing and title transfers executed under Power of Attorney authority.",
  },
  {
    title: "Civil Lawyers Melbourne",
    href: "/civil-lawyers-melbourne/",
    description:
      "Full spectrum civil law advocacy, estate document planning, and contract advisory across Victoria.",
  },
];

export default function WhyYouNeedPowerOfAttorneyTodayPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title: "The Importance of Having a Power of Attorney Today",
          description:
            "Why having a Power of Attorney (POA) in Australia is crucial: General POA, Enduring Power of Attorney (EPOA), Supportive POA, fiduciary duties, and safeguarding your future.",
          path: "/blog/why-you-need-power-of-attorney-today",
          datePublished: "2025-01-13",
          dateModified: "2025-01-13",
          authorName: "Bansal Lawyers",
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
              The Importance of Having a Power of Attorney Today
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 13, 2025"
              category="Civil & Estate Law"
              initialWords={975}
              initialReadTime="5 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Powers of Attorney Act 2014 (Vic)",
          "General, Enduring & Supportive POA Drafting",
          "Authorized Professional Witnessing & Certification",
          "Melbourne CBD & Victoria-Wide Advisory",
        ]}
      />

      {/* Main Content Layout */}
      <Section tone="white">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              maxWidth: "56rem",
              margin: "0 auto",
            }}
          >
            {/* Main Article Body */}
            <article
              style={{
                background: "#ffffff",
                padding: "clamp(1.75rem, 4vw, 3rem)",
                borderRadius: "1rem",
                boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
                border: "1px solid #e2e8f0",
                fontSize: "1.0625rem",
                lineHeight: "1.75",
                color: "#334155",
              }}
            >
              {/* Featured Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "clamp(220px, 35vw, 380px)",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  marginBottom: "2.25rem",
                }}
              >
                <Image
                  src="/images/melbourne-legal-chambers.webp"
                  alt="The Importance of Having a Power of Attorney Today"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Subheading / Introduction */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                  color: "var(--navy-900)",
                  marginTop: "0",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Securing Your Future: Why You Need a Power of Attorney Today
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Planning for the future is crucial, and one of the most important steps you can take is ensuring that your personal, financial, and healthcare decisions are in trusted hands. Thats where a Power of Attorney (POA) comes in a legal document that allows you to appoint someone (your Attorney) to make decisions on your behalf, should you become unable to do so.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                At Bansal Lawyers, we simplify the process to give you peace of mind, ensuring that your legal needs are handled with expertise and care.
              </p>

              {/* Section 1 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                What is a Power of Attorney?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                A Power of Attorney gives someone the authority to manage your affairs in situations where you cannot. You decide who your Attorney is and what decisions they can make—whether for healthcare, finances, or personal matters.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                In Australia, a Power of Attorney (POA) is a powerful legal document that allows you to appoint a trusted individual (or multiple people) to make decisions on your behalf. Choosing the right type of POA depends on your circumstances, future plans, and level of trust in the person you are appointing. At Bansal Lawyers, our team of experienced legal professionals helps clients across Melbourne understand and draft Powers of Attorney that offer protection, peace of mind, and legal certainty.
              </p>

              {/* Section 2 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Types of Powers of Attorney: Which One is Right for You?
              </h2>

              {/* 1. General Power of Attorney */}
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderLeft: "4px solid #2563eb",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--navy-900)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  1. General Power of Attorney
                </h3>
                <p style={{ marginBottom: "0.75rem", fontSize: "0.98rem" }}>
                  A General Power of Attorney is suitable for short-term or temporary circumstances, such as when you are:
                </p>
                <ul
                  style={{
                    margin: "0 0 0.75rem",
                    paddingLeft: "1.25rem",
                    fontSize: "0.95rem",
                    color: "#475569",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  <li>Travelling overseas for an extended period</li>
                  <li>Temporarily hospitalised or unwell</li>
                  <li>Engaged in financial matters where you need someone else to act on your behalf</li>
                </ul>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                  However, it is important to know that this form of POA becomes invalid if you lose mental capacity. This means if you suffer from a serious illness or accident that impacts your decision-making ability, the General POA automatically ends. It is best used in situations where you remain mentally capable but are unavailable or prefer someone else to act temporarily.
                </p>
              </div>

              {/* 2. Enduring Power of Attorney */}
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderLeft: "4px solid #059669",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--navy-900)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  2. Enduring Power of Attorney
                </h3>
                <p style={{ marginBottom: "0.75rem", fontSize: "0.98rem" }}>
                  The Enduring Power of Attorney (EPOA) is a more permanent and comprehensive arrangement. This document continues to be legally valid even if you lose the capacity to make decisions. It is especially helpful in cases involving:
                </p>
                <ul
                  style={{
                    margin: "0 0 0.75rem",
                    paddingLeft: "1.25rem",
                    fontSize: "0.95rem",
                    color: "#475569",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  <li>Progressive illnesses like dementia or Alzheimer’s</li>
                  <li>Advanced age and age-related cognitive decline</li>
                  <li>Long-term planning for disability or incapacity</li>
                </ul>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                  An Enduring POA ensures that a person you trust can continue making decisions about your financial, legal, and sometimes personal matters without requiring court intervention. It is a vital document for seniors and individuals with chronic health conditions who want to plan responsibly for the future.
                </p>
              </div>

              {/* 3. Supportive Power of Attorney */}
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderLeft: "4px solid #d97706",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--navy-900)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  3. Supportive Power of Attorney
                </h3>
                <p style={{ marginBottom: "0.75rem", fontSize: "0.98rem" }}>
                  This lesser-known but highly valuable POA is designed specifically to support individuals with cognitive or intellectual disabilities. Unlike other types of POA, a Supportive Power of Attorney does not transfer decision-making authority.
                </p>
                <p style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>
                  Instead, it enables the principal (the person making the POA) to appoint a supporter to help them:
                </p>
                <ul
                  style={{
                    margin: "0 0 0.75rem",
                    paddingLeft: "1.25rem",
                    fontSize: "0.95rem",
                    color: "#475569",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  <li>Understand and access information</li>
                  <li>Communicate their decisions to others</li>
                  <li>Make informed choices about daily life or finances</li>
                </ul>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                  This approach respects the autonomy of individuals living with disabilities while giving them the help they need to make decisions independently. It is a progressive and empowering legal tool.
                </p>
              </div>

              {/* Section 3 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Why Should You Set Up a POA?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Without a legally binding Power of Attorney in place, critical decisions about your health, finances, and personal care may be made by someone the court appoints—someone who may not know or honour your wishes. By setting up a POA with the help of Bansal Lawyers – Best Lawyers in Melbourne, you take proactive control over who can act on your behalf and in what capacity.
              </p>

              <div
                style={{
                  background: "#eff6ff",
                  borderLeft: "4px solid #3b82f6",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: 0, color: "#1e3a8a", fontWeight: 500 }}>
                  Establishing a POA is not just a legal formality—it’s a strategic step in protecting your dignity, assets, and personal values.
                </p>
              </div>

              {/* Section 4 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                How Does It Protect You?
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Your Attorney can make decisions about:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    Financial Matters
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Your Attorney can step in to manage your banking, investments, superannuation, property transactions, payment of bills, and even running a business if you are unable to do so. This ensures continuity and financial stability during times of illness, incapacity, or absence.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    Personal and Healthcare Decisions
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    Depending on the scope of your POA, your appointed person may be able to make decisions about your medical care, living arrangements, lifestyle preferences, and other personal choices—ensuring your comfort and care align with your values.
                  </p>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "0.5rem",
                    padding: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--navy-900)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    Specific Legal or Property Matters
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#475569" }}>
                    You can create a POA for a limited or specific purpose, such as selling a house, handling one investment, or settling legal matters. This allows targeted and legally protected delegation.
                  </p>
                </div>
              </div>

              <p style={{ marginBottom: "2rem" }}>
                You can even appoint multiple Attorneys and specify how they make decisions (together or separately).
              </p>

              {/* Section 5 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                The Attorney’s Duties: What You Should Know
              </h2>

              <p style={{ marginBottom: "2rem" }}>
                Attorneys must act in your best interests—making decisions based on your preferences and ensuring that they avoid conflicts of interest. They’re legally bound to manage your affairs responsibly and with transparency.
              </p>

              {/* Section 6 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Who Should You Appoint?
              </h2>

              <p style={{ marginBottom: "2rem" }}>
                Choose someone trustworthy, responsible, and willing to act on your behalf when needed. Think about their reliability, availability, and capacity for making important decisions.
              </p>

              {/* Section 7 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Setting It Up: Fast &amp; Simple
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Setting up a POA involves:
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "0.75rem",
                  border: "1px solid #e2e8f0",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <li>Choosing your Attorney and defining their powers.</li>
                  <li>Getting it witnessed by two independent witnesses (including one authorized professional, like a lawyer).</li>
                  <li>Signing the document and distributing certified copies to your Attorney and relevant institutions.</li>
                </ul>
              </div>

              {/* Section 8 */}
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.3rem, 2.3vw, 1.7rem)",
                  color: "var(--navy-900)",
                  marginTop: "2.25rem",
                  marginBottom: "1.25rem",
                  lineHeight: "1.3",
                  fontWeight: 700,
                }}
              >
                Why Wait? Plan for the Future Today
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                A Power of Attorney helps protect your interests, ensuring that your affairs are managed just the way you would. It’s simple, but incredibly important. At Bansal Lawyers, best lawyers in Melbourne Australia, we make the process straightforward and hassle-free.
              </p>

              <p style={{ marginBottom: "2rem" }}>
                <Link
                  href="/contact"
                  style={{
                    color: "#2563eb",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  Contact Us Today
                </Link>{" "}
                to set up a Power of Attorney and ensure that your decisions are always in trusted hands.
              </p>

              {/* CTA Box */}
              <div
                style={{
                  background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
                  color: "var(--white)",
                  padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  borderRadius: "0.875rem",
                  marginTop: "2.5rem",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    color: "var(--white)",
                    fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                  }}
                >
                  Safeguard Your Future with an Enduring Power of Attorney
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1rem",
                    maxWidth: "36rem",
                    margin: "0 auto 1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  Consult Bansal Lawyers in Melbourne to draft and execute legally compliant General, Enduring, or Supportive Powers of Attorney tailored to your personal and financial needs.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Book a Legal Consultation
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Practice Areas */}
            <div
              style={{
                background: "#ffffff",
                padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
                borderRadius: "1rem",
                boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.35rem",
                  color: "var(--navy-900)",
                  marginBottom: "1.25rem",
                  fontWeight: 700,
                }}
              >
                Related Practice Areas &amp; Resources
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {relatedCivilServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    style={{
                      display: "block",
                      padding: "1.2rem",
                      borderRadius: "0.5rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 0.4rem",
                        fontSize: "1.05rem",
                        color: "var(--navy-900)",
                        fontWeight: 600,
                      }}
                    >
                      {service.title} &rarr;
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.875rem",
                        color: "#64748b",
                        lineHeight: "1.5",
                      }}
                    >
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/why-you-need-power-of-attorney-today" />
          </div>
        </Container>
      </Section>
    </>
  );
}
