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
    "Affidavits, Statutory Declarations & Evidence | Bansal Lawyers",
  description:
    "A guide by Bansal Lawyers explaining the differences between affidavits, statutory declarations, and statements of evidence in Australian law: sworn facts, authorized witnesses, and court admissibility.",
  path: "/blog/understanding-affidavits-statutory-declarations-statements-of-evidence",
  keywords: [
    "Affidavit Australia",
    "Statutory Declaration Victoria",
    "Witness Statement Evidence Australia",
    "Court Document Preparation Melbourne",
    "Authorized Witness Justice of the Peace",
    "Statutory Declarations Act 1959",
    "Civil Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Understanding Affidavit, Statutory Declarations, and Statements of Evidence",
  },
];

const relatedCivilServices = [
  {
    title: "Court Document Preparation",
    href: "/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/",
    description:
      "Expert drafting of affidavits, sworn evidence, originating motions, and court submissions across Victoria.",
  },
  {
    title: "Document Preparation Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/document-preparation-lawyer-melbourne/",
    description:
      "Statutory declarations, formal notices, deeds of release, and binding legal agreements.",
  },
  {
    title: "Civil Litigation Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/",
    description:
      "Strategic trial advocacy, witness statements, and evidentiary management in Magistrates, County, and Supreme Courts.",
  },
  {
    title: "Civil Dispute Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/",
    description:
      "Early dispute resolution, pre-litigation correspondence, and mediation assistance.",
  },
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description:
      "Affidavit drafting for marriage separation under one roof and family court filings.",
  },
  {
    title: "Civil Lawyers Melbourne",
    href: "/civil-lawyers-melbourne/",
    description:
      "Comprehensive civil, administrative, and commercial legal advisory across Victoria.",
  },
];

export default function AffidavitsStatutoryDeclarationsGuidePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Understanding Affidavit, Statutory Declarations, and Statements of Evidence",
          description:
            "A guide by Bansal Lawyers explaining the differences between affidavits, statutory declarations, and statements of evidence in Australian law: sworn facts, authorized witnesses, and court admissibility.",
          path: "/blog/understanding-affidavits-statutory-declarations-statements-of-evidence",
          datePublished: "2025-01-07",
          dateModified: "2025-01-07",
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
              Understanding Affidavit, Statutory Declarations, and Statements of Evidence
            </h1>

            <DynamicArticleMeta
              publishedDate="Jan 07, 2025"
              category="Civil & Estate Law"
              initialWords={756}
              initialReadTime="4 min read"
            />
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Evidence Act 1995 (Cth) & Victoria Evidence Standards",
          "Oaths and Affirmations Act 2018 (Vic) Compliance",
          "Authorized Professional Legal Witnessing & Certification",
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
                  alt="Understanding Affidavit, Statutory Declarations, and Statements of Evidence"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Introduction */}
              <p style={{ marginBottom: "2rem" }}>
                Navigating legal documents can be confusing, especially when terms like affidavit, statutory declaration, and statement of evidence are used interchangeably. While they all serve to present evidence, they each have unique roles in the legal system. At Bansal Lawyers, we’re here to simplify these terms and guide you through the process.
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
                1. Affidavit: A Sworn Statement of Fact
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                An affidavit is a written declaration of facts that the person (known as the deponent) swears or affirms to be true in the presence of an authorised witness, such as a Justice of the Peace (JP), lawyer, notary public, or police officer. It is a formal document often used in legal proceedings as a substitute for oral testimony. If the affidavit is accepted by the court and not challenged, it can serve as the witness’s official testimony without the need for live appearance.
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "0.75rem",
                  border: "1px solid #e2e8f0",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.75rem" }}>
                  Common Uses:
                </strong>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    fontSize: "0.98rem",
                    color: "#475569",
                  }}
                >
                  <li>Family law matters (e.g., custody, divorce proceedings)</li>
                  <li>Civil litigation</li>
                  <li>Probate and estate matters</li>
                  <li>Immigration and visa applications</li>
                </ul>
              </div>

              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--navy-900)",
                  marginTop: "1.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                How to Make an Affidavit:
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Draft the Statement:</strong> Clearly write the facts you want to declare. Use numbered paragraphs to make the document easy to read and reference.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Find an Authorised Witness:</strong> This could be a JP, solicitor, police officer, or another person qualified under the relevant state or federal law.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Don’t Sign It Yet:</strong> Only sign the affidavit in the presence of the witness.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Take an Oath or Affirmation:</strong> Depending on your beliefs, you will either swear (religious) or affirm (non-religious) that the contents are true.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Sign in Front of the Witness:</strong> The witness will also sign and certify the affidavit.
                </div>
              </div>

              <div
                style={{
                  background: "#fef2f2",
                  borderLeft: "4px solid #ef4444",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#991b1b" }}>
                  <strong>Note:</strong> Making a false affidavit is a serious offence and may result in fines, imprisonment, or charges of perjury.
                </p>
              </div>

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
                2. Statutory Declaration: A Legal Declaration Outside Court
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                A statutory declaration is a written statement that a person solemnly declares to be true, used in non-judicial contexts where there is a legal need to affirm the accuracy of information. Although it is not used in court proceedings, it is still a legally binding document, and false declarations can attract penalties under state or federal legislation.
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "0.75rem",
                  border: "1px solid #e2e8f0",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.75rem" }}>
                  Common Uses:
                </strong>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    fontSize: "0.98rem",
                    color: "#475569",
                  }}
                >
                  <li>Confirming identity or address</li>
                  <li>Declaring the loss of official documents</li>
                  <li>Statements for insurance claims</li>
                  <li>Confirming personal details for visa or government forms</li>
                </ul>
              </div>

              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--navy-900)",
                  marginTop: "1.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                How to Make a Statutory Declaration:
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Obtain the Correct Form:</strong> Different forms may be required depending on the jurisdiction (e.g., Commonwealth vs State).
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Complete the Declaration:</strong> Include your full name, address, and the statement you are declaring to be true.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Do Not Sign Yet:</strong> Wait until you are with an authorised witness.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Swear or Affirm in Front of a Witness:</strong> Like with an affidavit, you will either swear or affirm the statement.
                </div>
                <div
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <strong style={{ color: "#2563eb" }}>Sign in the Presence of the Witness:</strong> The witness must watch you sign and then sign and date the declaration themselves.
                </div>
              </div>

              <div
                style={{
                  background: "#eff6ff",
                  borderLeft: "4px solid #3b82f6",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#1e3a8a" }}>
                  Penalties for false declarations may include fines or imprisonment under the Statutory Declarations Act 1959 (for Commonwealth declarations) or relevant state laws.
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
                3. Statement of Evidence: A Signed Account of Testimony
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                A statement of evidence (also known as a witness statement) is a document that records a witness’s account of events relevant to a legal matter. Unlike an affidavit or statutory declaration, it is not sworn or affirmed, but it is still signed and dated by the witness. The person who provides the statement can be called to court to verify the truth of the content under oath during trial.
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "0.75rem",
                  border: "1px solid #e2e8f0",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.75rem" }}>
                  Common Uses:
                </strong>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    fontSize: "0.98rem",
                    color: "#475569",
                  }}
                >
                  <li>Civil litigation or tribunal matters</li>
                  <li>Personal injury claims</li>
                  <li>Workplace investigations</li>
                  <li>Criminal cases (preliminary witness interviews)</li>
                </ul>
              </div>

              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--navy-900)",
                  marginTop: "1.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                Key Features:
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  It includes a detailed narrative of what the witness saw, heard, or experienced.
                </li>
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  The document should be clear, factual, and free of speculation or opinion unless specifically relevant.
                </li>
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  It is generally prepared by the witness, or with the help of a lawyer or investigator.
                </li>
                <li
                  style={{
                    background: "#f8fafc",
                    padding: "1rem 1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  The witness must be ready to attend court and testify, confirming the accuracy of the statement.
                </li>
              </ul>

              <p style={{ marginBottom: "1.5rem" }}>
                Unlike affidavits, witness statements are not automatically admissible as evidence unless verified in court. However, they are crucial tools in trial preparation and disclosure.
              </p>

              <div
                style={{
                  background: "#fffbeb",
                  borderLeft: "4px solid #d97706",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#92400e" }}>
                  <strong>Important:</strong> If you make a false statement in an affidavit or statutory declaration, it’s a criminal offense and can result in serious penalties, including imprisonment.
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
                Conclusion
              </h2>

              <p style={{ marginBottom: "1.25rem" }}>
                Understanding the difference between these legal documents is key for anyone involved in legal matters. Whether you need to make an affidavit, statutory declaration, or statement of evidence, Bansal Lawyers is here to help guide you through the process and ensure your documents are accurate and legally sound.{" "}
                <Link
                  href="/contact"
                  style={{
                    color: "#2563eb",
                    fontWeight: 600,
                    textDecoration: "underline",
                  }}
                >
                  Contact us today
                </Link>{" "}
                for professional advice!
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
                  Need Professional Document Preparation or Witnessing?
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
                  Bansal Lawyers in Melbourne provides comprehensive legal drafting and witnessing of affidavits, statutory declarations, and witness statements.
                </p>
                <div style={{ display: "inline-block" }}>
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                  >
                    Speak with a Civil Lawyer
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Civil Services */}
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
                Related Civil Practice Areas &amp; Services
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
            <RecommendedArticles currentHref="/blog/understanding-affidavits-statutory-declarations-statements-of-evidence" />
          </div>
        </Container>
      </Section>
    </>
  );
}
