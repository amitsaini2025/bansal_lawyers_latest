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
    "Judicial Review of Migration Decisions Guide | Bansal Lawyers",
  description:
    "A guide by Bansal Lawyers to judicial review of migration decisions in the Federal Circuit and Family Court of Australia: jurisdictional error, 35-day limits, and processes.",
  path: "/blog/understanding-judicial-review-of-migration-decisions-in-australia",
  keywords: [
    "Judicial Review Migration Decisions Australia",
    "Jurisdictional Error Immigration Law",
    "Federal Circuit and Family Court Migration",
    "35 Day Judicial Review Time Limit",
    "ART Decision Appeal Federal Court",
    "Migration Litigation Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Understanding Judicial Review of Migration Decisions in Australia",
  },
];

const relatedCourtServices = [
  {
    title: "Civil Litigation Lawyer Melbourne",
    href: "/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/",
    description:
      "Judicial review and court advocacy in the Federal Circuit and Family Court and Federal Court of Australia.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description:
      "Challenging adverse migration and refugee decisions before the Administrative Review Tribunal.",
  },
  {
    title: "Court Document Preparation",
    href: "/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/",
    description:
      "Drafting originating applications, grounds of jurisdictional error, and supporting affidavit evidence.",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description:
      "Comprehensive legal analysis and tactical appeals for partner, skilled, and student visa refusals.",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description:
      "Full-spectrum migration law advice, ministerial intervention, and federal appellate advocacy.",
  },
];

export default function JudicialReviewMigrationDecisionsPage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Understanding Judicial Review of Migration Decisions in Australia",
          description:
            "A comprehensive guide by Bansal Lawyers to judicial review in the Federal Circuit and Family Court of Australia: jurisdictional error, 35-day time limits, affidavit requirements, and hearings.",
          path: "/blog/understanding-judicial-review-of-migration-decisions-in-australia",
          datePublished: "2024-12-19",
          dateModified: "2024-12-19",
          authorName: "Bansal Lawyers",
        })}
      />
      <StructuredData data={createLegalServiceSchema()} />

      {/* Hero Section - NO BADGE/PILL ABOVE H1 */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#ffffff",
          padding: "3.5rem 0 3rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container>
          <Breadcrumbs items={breadcrumbs} />

          <div style={{ maxWidth: "860px", marginTop: "1.5rem" }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Understanding Judicial Review of Migration Decisions in Australia
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                color: "#38bdf8",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              Judicial Review of Migration Decisions in Australia: A Guide by
              Bansal Lawyers
            </p>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "#cbd5e1",
                marginBottom: "1.75rem",
                maxWidth: "760px",
              }}
            >
              Migration law in Australia can be complex and difficult to
              navigate. Individuals seeking to challenge decisions related to
              visas, immigration matters, and other migration-related issues
              often find themselves in need of legal guidance. One of the key
              legal processes for such challenges is judicial review.
            </p>

            <DynamicArticleMeta
              publishedDate="Dec 19, 2024"
              category="Immigration Law"
              initialWords={979}
              initialReadTime="5 min read"
            />
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <TrustBar
        items={[
          "Federal Circuit & Family Court Representation",
          "Jurisdictional Error Assessment & Briefing",
          "Strict 35-Day Statutory Deadline Compliance",
          "Affidavit & Originating Application Drafting",
        ]}
      />

      {/* Main Content Area */}
      <Section tone="white">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            <div style={{ maxWidth: "860px", margin: "0 auto", width: "100%" }}>
              {/* Featured Image */}
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "2.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <Image
                  src="/images/cases/court-case-review.webp"
                  alt="Judicial Review of Migration Decisions in Australia Federal Court"
                  width={900}
                  height={480}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Introductory Lead Box */}
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  borderLeft: "4px solid #0284c7",
                  padding: "1.5rem 1.75rem",
                  borderRadius: "0 12px 12px 0",
                  marginBottom: "2.5rem",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    color: "#1e293b",
                    marginBottom: "1rem",
                    fontWeight: 500,
                  }}
                >
                  Migration law in Australia can be complex and difficult to
                  navigate. Individuals seeking to challenge decisions related to
                  visas, immigration matters, and other migration-related issues
                  often find themselves in need of legal guidance. One of the key
                  legal processes for such challenges is judicial review.
                </p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  At Bansal Lawyers, we specialize in providing expert advice and
                  representation for clients facing migration decisions that they
                  believe have involved jurisdictional errors. This article
                  provides an overview of judicial review of migration decisions
                  by the Federal Circuit and Family Court of Australia (the
                  Court), including important processes and considerations.
                </p>
              </div>

              {/* Section 1: What is Judicial Review in Migration Cases? */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <Link
                    href="/blog/exciting-changes-to-australias-administrative-review-system"
                    style={{
                      color: "#0284c7",
                      textDecoration: "none",
                    }}
                  >
                    What is Judicial Review in Migration Cases?
                  </Link>
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  Judicial review is a process where a court reviews the
                  lawfulness of a decision made by a government body or
                  administrative authority. In the case of migration decisions,
                  this means that if you are dissatisfied with a decision related
                  to your visa application, you may request the Federal Circuit
                  and Family Court of Australia to review it.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  However, it is essential to understand that the court does not
                  review the merits of your visa application. Instead, it
                  focuses on whether a jurisdictional error was made. A
                  jurisdictional error occurs when the decision-maker (e.g., the
                  Minister for Immigration or members of the Administrative
                  Review Tribunal (ART) or Immigration Assessment Authority
                  (IAA)) has:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {[
                    "Failed to follow the correct legal procedures.",
                    "Misinterpreted or applied the law incorrectly.",
                    "Acted beyond their legal powers.",
                  ].map((err, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "1rem 1.25rem",
                        borderRadius: "10px",
                        backgroundColor: "#fef2f2",
                        border: "1px solid #fecaca",
                      }}
                    >
                      <span style={{ color: "#dc2626", fontWeight: 700, fontSize: "1.2rem" }}>
                        ✕
                      </span>
                      <span style={{ fontSize: "1.025rem", color: "#991b1b", fontWeight: 500 }}>
                        {err}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  The Court will only determine whether such an error occurred
                  and will not evaluate the substance of your visa application
                  itself.
                </p>
              </div>

              {/* Section 2: What the Court Can and Cannot Do */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  What the Court Can and Cannot Do
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.25rem",
                  }}
                >
                  The Court has specific powers when reviewing a migration
                  decision:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {/* The Court CAN */}
                  <div
                    style={{
                      border: "1px solid #bbf7d0",
                      borderRadius: "14px",
                      backgroundColor: "#f0fdf4",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <span style={{ fontSize: "1.3rem" }}>✓</span>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "#166534",
                          margin: 0,
                        }}
                      >
                        The Court can:
                      </h3>
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "1.25rem",
                        color: "#14532d",
                        fontSize: "0.975rem",
                        lineHeight: 1.7,
                      }}
                    >
                      <li>Identify if a jurisdictional error has occurred.</li>
                      <li>
                        Refer your case back to the decision-maker (such as the
                        Minister or ART) for reconsideration.
                      </li>
                      <li>
                        Prevent the Minister from acting on a flawed decision.
                      </li>
                    </ul>
                  </div>

                  {/* The Court CANNOT */}
                  <div
                    style={{
                      border: "1px solid #fecaca",
                      borderRadius: "14px",
                      backgroundColor: "#fef2f2",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <span style={{ fontSize: "1.3rem" }}>✕</span>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "#991b1b",
                          margin: 0,
                        }}
                      >
                        The Court cannot:
                      </h3>
                    </div>
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "1.25rem",
                        color: "#7f1d1d",
                        fontSize: "0.975rem",
                        lineHeight: 1.7,
                      }}
                    >
                      <li>Reconsider the facts of your visa application.</li>
                      <li>
                        Take into account new factual information, except if it
                        is relevant to whether a jurisdictional error occurred.
                      </li>
                      <li>Grant you a visa directly.</li>
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: "#334155",
                      margin: 0,
                    }}
                  >
                    It is important to understand that the Federal Circuit and
                    Family Court of Australia will not grant a visa even if the
                    decision was flawed, but rather it ensures that the
                    decision-making process is lawful and follows due process.
                  </p>
                </div>
              </div>

              {/* Section 3: Time Limits for Filing a Judicial Review Application */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Time Limits for Filing a Judicial Review Application
                </h2>

                <div
                  style={{
                    backgroundColor: "#fff7ed",
                    border: "1px solid #fdba74",
                    borderRadius: "14px",
                    padding: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>⏰</span>
                    <strong
                      style={{
                        fontSize: "1.2rem",
                        color: "#9a3412",
                        fontWeight: 800,
                      }}
                    >
                      Strict 35-Day Filing Deadline
                    </strong>
                  </div>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      color: "#7c2d12",
                      margin: 0,
                    }}
                  >
                    In order to request a judicial review of a migration
                    decision, you must file an application within 35 days of the
                    decision date. Failing to meet this deadline could result in
                    your application being dismissed.
                  </p>
                </div>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  If you need more time, you can request an extension, but you
                  must explain why you were unable to meet the original time
                  frame. The Court will then decide whether to grant an extension
                  based on your circumstances.
                </p>
              </div>

              {/* Section 4: The Process of Applying for Judicial Review */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  The Process of Applying for Judicial Review
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  To initiate judicial review, you must complete an application
                  and an affidavit. Your application should clearly identify the
                  jurisdictional error that you believe occurred in the
                  decision-making process. The affidavit should detail the facts
                  and circumstances surrounding the error and include the
                  decision to be reviewed, as well as any statement of reasons
                  for the decision.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  Once your application is filed, you must serve a copy of the
                  application and supporting documents to the Minister (or the
                  relevant decision-making body) within a specific time frame.
                </p>
              </div>

              {/* Section 5: Court Hearings and Your Role */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Court Hearings and Your Role
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  Once your application is filed and served, the Court will
                  allocate a hearing date. The hearing allows both parties—the
                  applicant (you) and the Minister&apos;s legal
                  representative—to present arguments regarding the alleged
                  jurisdictional error. It’s important to note that unless
                  excused, you must attend the hearing, as failure to do so may
                  lead to your case being dismissed.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  In some cases, the Court may decide that you have not shown an
                  arguable case and may dismiss your application before the final
                  hearing.
                </p>
              </div>

              {/* Section 6: Legal Costs and Fees */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Legal Costs and Fees
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  Filing a judicial review application comes with associated
                  costs. You will need to pay a fee when you submit your
                  application and another fee if the case goes to a final
                  hearing. There are exceptions, such as if you are in financial
                  hardship or hold certain government concession cards. For more
                  details about fees, contact the Federal Circuit and Family Court
                  of Australia or visit their website.
                </p>

                <div
                  style={{
                    backgroundColor: "#fef2f2",
                    border: "1px solid #fecaca",
                    borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <strong
                    style={{
                      color: "#991b1b",
                      display: "block",
                      marginBottom: "0.35rem",
                      fontSize: "1.05rem",
                    }}
                  >
                    Adverse Costs Orders:
                  </strong>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "#7f1d1d",
                      margin: 0,
                    }}
                  >
                    Additionally, the unsuccessful party typically must pay the
                    legal costs of the successful party. If you withdraw your
                    case, you may also be required to cover some of the costs
                    incurred by the other party.
                  </p>
                </div>
              </div>

              {/* Section 7: Confidentiality and Protection Visas */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Confidentiality and Protection Visas
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  In some instances, court hearings may be closed to the public,
                  particularly when sensitive matters, such as protection visas,
                  are involved. In these cases, the Court is also prohibited from
                  publishing your identity to protect your privacy.
                </p>
              </div>

              {/* Section 8: When to Seek Legal Advice */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  When to Seek Legal Advice
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1rem",
                  }}
                >
                  Judicial review is a highly technical process that requires a
                  solid understanding of legal procedures. At Bansal Lawyers, we
                  strongly recommend seeking professional legal advice if you are
                  considering judicial review for your visa decision. Our
                  experienced migration lawyers can assess your case, help you
                  understand whether there has been a jurisdictional error, and
                  guide you through the application and hearing process.
                </p>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    margin: 0,
                  }}
                >
                  In complex migration matters, the right legal advice can make
                  all the difference. We provide tailored support to ensure that
                  you understand your options and the legal steps you need to
                  take.
                </p>
              </div>

              {/* Section 9: Contact Bansal Lawyers for Assistance */}
              <div style={{ marginBottom: "2.75rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1rem",
                    borderBottom: "2px solid #e2e8f0",
                    paddingBottom: "0.5rem",
                  }}
                >
                  Contact Bansal Lawyers for Assistance
                </h2>

                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "#334155",
                    marginBottom: "1.5rem",
                  }}
                >
                  If you believe that a migration decision has been made
                  unlawfully or improperly and you are considering judicial
                  review, Bansal Lawyers is here to assist you. Our expert team
                  can offer advice on your case, help you prepare the necessary
                  documents, and represent you throughout the judicial review
                  process.
                </p>

                {/* Callout Box */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                    color: "#ffffff",
                    borderRadius: "16px",
                    padding: "2rem",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Protect Your Rights Under Australian Migration Law
                  </h3>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.65,
                      color: "#e2e8f0",
                      marginBottom: "1.5rem",
                    }}
                  >
                    Don’t navigate the complexities of judicial review alone.{" "}
                    <Link
                      href="/contact"
                      style={{
                        color: "#38bdf8",
                        fontWeight: 700,
                        textDecoration: "underline",
                      }}
                    >
                      Contact us today
                    </Link>{" "}
                    to schedule a consultation and protect your rights under
                    Australian migration law.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    <ButtonLink href="/contact" variant="primary">
                      Book A Consultation
                    </ButtonLink>
                    <ButtonLink
                      href="/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/"
                      variant="secondary"
                    >
                      Civil Litigation Services
                    </ButtonLink>
                  </div>
                </div>
              </div>

              {/* Author / Practice Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1.5rem",
                  backgroundColor: "#f8fafc",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "3rem",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#0284c7",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    flexShrink: 0,
                  }}
                >
                  BL
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 0.25rem",
                    }}
                  >
                    Bansal Lawyers Federal Litigation Practice
                  </h3>
                  <p
                    style={{
                      fontSize: "0.925rem",
                      lineHeight: 1.5,
                      color: "#64748b",
                      margin: 0,
                    }}
                  >
                    Bansal Lawyers provides specialized legal representation
                    before the Federal Circuit and Family Court of Australia and
                    the Federal Court of Australia, identifying jurisdictional
                    errors and securing remittal orders.
                  </p>
                </div>
              </div>

              {/* Related Services */}
              <div>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                  }}
                >
                  Related Legal Services
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {relatedCourtServices.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      style={{
                        display: "block",
                        padding: "1.25rem",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "#0284c7",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {service.title} &rarr;
                      </h4>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: 1.5,
                          color: "#64748b",
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

            {/* Recommended Articles Grid */}
            <RecommendedArticles currentHref="/blog/understanding-judicial-review-of-migration-decisions-in-australia" />
          </div>
        </Container>
      </Section>
    </>
  );
}
