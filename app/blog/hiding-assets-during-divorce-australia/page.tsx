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
  title:
    "Hiding Assets During Divorce in Australia: Legal Risks & Asset Protection | Bansal Lawyers",
  description:
    "Learn about the legal risks of hiding assets during divorce in Australia, court penalties, loss of credibility, criminal charges, and legitimate asset protection strategies.",
  path: "/blog/hiding-assets-during-divorce-australia",
  keywords: [
    "Hiding Assets During Divorce Australia",
    "Duty of Disclosure Family Law Australia",
    "Asset Protection Divorce Melbourne",
    "Family Court Asset Concealment Penalties",
    "Binding Financial Agreement Melbourne",
    "Property Settlement Lawyer Melbourne",
    "Family Lawyers Melbourne",
    "Bansal Lawyers Blog",
  ],
});

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Hiding Assets During Divorce in Australia: Legal Risks & Asset Protection",
  },
];

const relatedFamilyServices = [
  {
    title: "Property Settlement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
    description: "Asset division, superannuation splitting, property valuations, and financial dispute resolution.",
  },
  {
    title: "Binding Financial Agreement Lawyer Melbourne",
    href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
    description: "Pre-nuptial, post-nuptial, and post-separation binding agreements protecting personal and business wealth.",
  },
  {
    title: "Divorce Lawyer Melbourne",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
    description: "Sole and joint divorce applications, separation proof under one roof, and court filings.",
  },
  {
    title: "Consent Orders Lawyer Melbourne",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
    description: "Legally binding financial and parenting consent orders approved by the Family Court.",
  },
  {
    title: "Spousal Maintenance Lawyer Melbourne",
    href: "/family-lawyers-melbourne/spousal-maintenance-lawyer-melbourne/",
    description: "Financial support assessments, negotiation, and applications under the Family Law Act 1975.",
  },
  {
    title: "Family Lawyers Melbourne",
    href: "/family-lawyers-melbourne/",
    description: "Full-service family law representation, dispute resolution, and court advocacy in Melbourne.",
  },
];

export default function HidingAssetsDuringDivorcePage() {
  return (
    <>
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData
        data={createArticleSchema({
          title:
            "Hiding Assets During Divorce in Australia: Legal Risks & Asset Protection",
          description:
            "Learn about the legal risks of hiding assets during divorce in Australia, court penalties, loss of credibility, criminal charges, and legitimate asset protection strategies.",
          path: "/blog/hiding-assets-during-divorce-australia",
          datePublished: "2025-01-24",
          dateModified: "2025-01-24",
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
              Hiding Assets During Divorce in Australia: Legal Risks &amp; Asset Protection
            </h1>

            {/* Meta Strip: Jan 24, 2025 | 4 min read | 658 words | Bansal Lawyers */}
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
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Jan 24, 2025
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
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                4 min read
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
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                658 words
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
                  aria-hidden="true"
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
          "Family Law Act 1975 Compliance",
          "Strict Full Duty of Financial Disclosure",
          "Binding Financial Agreements (BFAs)",
          "Melbourne CBD & Virtual Consultations",
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
                src="/images/legal-consultation-clarity.webp"
                alt="Family law consultation regarding asset disclosure and divorce in Melbourne"
                width={1200}
                height={630}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                priority
              />
            </div>

            {/* Content Body */}
            <article style={{ display: "grid", gap: "2.25rem", color: "var(--ink-700)", lineHeight: 1.8 }}>
              {/* Introduction & Section 1: Legal Consequences */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  Legal Consequences of Hiding Assets
                </h2>
                <p style={{ fontSize: "1.08rem", marginBottom: "1.25rem" }}>
                  Hiding assets during a divorce is not only unethical but can lead to severe legal consequences in Australia. Here are the key consequences:
                </p>

                <div style={{ display: "grid", gap: "1.25rem" }}>
                  {/* Consequence 1 */}
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        color: "var(--navy-900)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      1. Fines and Financial Penalties
                    </h3>
                    <p style={{ margin: 0 }}>
                      If a party is found to have hidden assets or provided false financial information, the court may impose monetary fines as a punishment. These fines serve as both a deterrent and a penalty for non-compliance with court orders and disclosure obligations.
                    </p>
                  </div>

                  {/* Consequence 2 */}
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        color: "var(--navy-900)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      2. Loss of Credibility Before the Court
                    </h3>
                    <p style={{ margin: 0 }}>
                      Honesty is vital in family law proceedings. If the court discovers that one party has lied or concealed assets, that individual may lose credibility. This loss of trust can heavily influence the outcome of the case, particularly in disputes over property division or child custody, where character and honesty are considered.
                    </p>
                  </div>

                  {/* Consequence 3 */}
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        color: "var(--navy-900)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      3. Imprisonment in Serious Cases
                    </h3>
                    <p style={{ margin: 0 }}>
                      In the most serious instances, hiding assets may lead to criminal charges, such as perjury (lying under oath) or fraud. If convicted, individuals may face imprisonment, especially when the dishonesty is proven to be deliberate, ongoing, and significantly damaging.
                    </p>
                  </div>

                  {/* Consequence 4 */}
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        color: "var(--navy-900)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      4. Criminal Charges
                    </h3>
                    <p style={{ marginBottom: "0.75rem" }}>
                      Beyond family law, deceptive conduct during a divorce can result in criminal proceedings. Charges may include:
                    </p>
                    <ul style={{ paddingLeft: "1.25rem", margin: "0 0 0.75rem", display: "grid", gap: "0.35rem" }}>
                      <li><strong>Fraud</strong></li>
                      <li><strong>Perjury</strong></li>
                      <li><strong>Contempt of court</strong></li>
                    </ul>
                    <p style={{ margin: 0 }}>
                      These charges can lead to a criminal record, further fines, and custodial sentences, thereby severely impacting a person&apos;s personal and professional life.
                    </p>
                  </div>

                  {/* Consequence 5 */}
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        color: "var(--navy-900)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      5. Unfavourable Property Settlement
                    </h3>
                    <p style={{ margin: 0 }}>
                      If it&apos;s proven that one party has attempted to conceal assets, the court has the authority to redistribute property and financial resources in favour of the honest party. The court may award a larger share of the matrimonial pool to the disadvantaged party as a form of compensation for the dishonest behaviour.
                    </p>
                  </div>

                  {/* Consequence 6 */}
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        color: "var(--navy-900)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      6. Reimbursement of Legal Costs
                    </h3>
                    <p style={{ margin: 0 }}>
                      Family court proceedings can become significantly more complex and prolonged when one party is dishonest. The court may order the party who concealed assets to pay the legal costs incurred by the other party, including additional investigation fees, forensic accountants, or legal consultations.
                    </p>
                  </div>

                  {/* Consequence 7 */}
                  <div
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "var(--radius-sm)",
                      borderLeft: "4px solid var(--navy-800)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        color: "var(--navy-900)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      7. Court-Ordered Compensation
                    </h3>
                    <p style={{ margin: 0 }}>
                      If the dishonest conduct caused direct financial harm or delay, the court may order specific compensation to the other party. This could be in the form of a lump sum or additional assets being transferred to balance the losses incurred due to the deceit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Strict Duty of Disclosure Section */}
              <section>
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(234, 240, 246, 0.9) 0%, rgba(245, 242, 235, 0.95) 100%)",
                    padding: "1.75rem 2rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      color: "var(--navy-900)",
                      marginTop: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    The Strict Legal Duty of Disclosure
                  </h2>
                  <p style={{ marginBottom: "1rem" }}>
                    In every divorce or property settlement case, both parties are under a strict legal duty of disclosure. This means you must provide complete, honest, and up-to-date information about your financial circumstances, including:
                  </p>
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      margin: "0 0 1.25rem",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "0.5rem",
                    }}
                  >
                    <li>Bank accounts</li>
                    <li>Investments and shares</li>
                    <li>Real estate holdings</li>
                    <li>Business interests</li>
                    <li>Superannuation</li>
                    <li>Debts and liabilities</li>
                    <li>Any significant financial resources or income</li>
                  </ul>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--ink-600)" }}>
                    Under the <em>Family Law Rules</em>, the duty of disclosure begins from the negotiation phase and continues until all property orders or agreements are finalized.
                  </p>
                </div>
              </section>

              {/* Why Full Disclosure Matters */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  Why Full Disclosure Matters
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  The duty of disclosure ensures that the division of assets is just and equitable. It allows the court—and both parties—to have a complete understanding of the financial landscape before making binding decisions.
                </p>
                <p style={{ marginBottom: "0.75rem", fontWeight: 600, color: "var(--navy-900)" }}>
                  Failing to disclose assets, even unintentionally, can:
                </p>
                <ul
                  style={{
                    paddingLeft: "1.25rem",
                    margin: "0 0 1.5rem",
                    display: "grid",
                    gap: "0.5rem",
                  }}
                >
                  <li><strong>Invalidate court orders:</strong> Finalised consent orders or court orders can be set aside under Section 79A of the Family Law Act 1975 if miscarriage of justice occurred due to suppression of evidence or false information.</li>
                  <li><strong>Delay proceedings:</strong> Lack of transparency creates prolonged disputes, extensive interrogatories, subpoenas, and forensic investigations.</li>
                  <li><strong>Invite severe penalties:</strong> Costs orders, contempt sanctions, and adverse inferences drawn against the non-disclosing party.</li>
                </ul>
              </section>

              {/* Legitimate Asset Protection */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--navy-900)",
                    marginBottom: "1rem",
                  }}
                >
                  How to Protect Your Assets in a Divorce
                </h2>
                <p style={{ marginBottom: "1.25rem" }}>
                  Legitimate ways to protect your assets during a divorce in Australia include:
                </p>
                <div style={{ display: "grid", gap: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1rem 1.25rem",
                      background: "var(--sand-50)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>🛡️</span>
                    <div>
                      <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                        Enter into a Binding Financial Agreement (BFA)
                      </strong>
                      <span>Establish clear asset division ahead of time with formal legal advice and certification.</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1rem 1.25rem",
                      background: "var(--sand-50)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>📋</span>
                    <div>
                      <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                        Keep Clear Financial Records
                      </strong>
                      <span>Maintain detailed records to prevent misrepresentation of assets and liabilities.</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1rem 1.25rem",
                      background: "var(--sand-50)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>🔍</span>
                    <div>
                      <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                        Identify All Assets
                      </strong>
                      <span>Ensure you account for all joint and separate assets accurately.</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1rem 1.25rem",
                      background: "var(--sand-50)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>🏦</span>
                    <div>
                      <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                        Maintain Separate Bank Accounts
                      </strong>
                      <span>Keep finances separate to avoid complications and confusion during the separation period.</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1rem 1.25rem",
                      background: "var(--sand-50)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>📜</span>
                    <div>
                      <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                        Change Your Will and Beneficiary Nominations
                      </strong>
                      <span>Update these documents post-separation, including superannuation binding death benefit nominations.</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1rem 1.25rem",
                      background: "var(--sand-50)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>💳</span>
                    <div>
                      <strong style={{ color: "var(--navy-900)", display: "block", marginBottom: "0.25rem" }}>
                        Close Joint Credit Cards
                      </strong>
                      <span>Protect yourself from shared debt accumulation and unilateral credit liabilities.</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Information Section */}
              <section>
                <div
                  style={{
                    background: "var(--sand-50)",
                    padding: "1.75rem 2rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.45rem",
                      color: "var(--navy-900)",
                      marginTop: 0,
                      marginBottom: "1rem",
                    }}
                  >
                    Related Information on{" "}
                    <Link
                      href="/family-lawyers-melbourne"
                      style={{ color: "var(--navy-900)", textDecoration: "underline" }}
                    >
                      Divorce and Family Law in Australia
                    </Link>
                  </h2>
                  <div style={{ display: "grid", gap: "1rem" }}>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>Divorce Application Victoria:</strong> Learn about the application process and fees. The current fee is $1,100, and applications can be submitted online via the Commonwealth Courts Portal.
                    </div>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>How Do I Get a Divorce in Australia:</strong> File a divorce application with the Federal Circuit and Family Court of Australia. A 12-month separation period is generally required.
                    </div>
                    <div>
                      <strong style={{ color: "var(--navy-900)" }}>Getting Divorced in Australia:</strong> Submit a divorce application online, and after meeting all requirements, the court may grant the divorce following a waiting period.
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Box */}
              <div
                style={{
                  background: "var(--navy-900)",
                  color: "var(--white)",
                  padding: "2.25rem 2rem",
                  borderRadius: "var(--radius-md)",
                  marginTop: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "var(--white)",
                    marginTop: 0,
                    marginBottom: "0.75rem",
                  }}
                >
                  Need Strategic Advice on Property Division or Asset Protection?
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Whether you need to draft a robust Binding Financial Agreement, ensure full compliance with the Family Court duty of disclosure, or protect your financial future during separation, Bansal Lawyers provides strategic, confidential, and compassionate guidance.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <ButtonLink href="/book-an-appointment" variant="primary">
                    Book a Confidential Consultation
                  </ButtonLink>
                  <ButtonLink href="/family-lawyers-melbourne/property-settlement-lawyer-melbourne" variant="secondary">
                    Explore Property Settlement Services
                  </ButtonLink>
                </div>
              </div>
            </article>

            {/* Related Practice Areas Grid */}
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--line)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.5rem",
                  color: "var(--navy-900)",
                  marginBottom: "0.5rem",
                }}
              >
                Related Family Law Practice Areas
              </h2>
              <p
                style={{
                  color: "var(--ink-600)",
                  fontSize: "0.95rem",
                  marginBottom: "1.5rem",
                }}
              >
                Our Melbourne family lawyers assist individuals and couples across Victoria with transparent, strategic legal solutions.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {relatedFamilyServices.map((service) => (
                  <div
                    key={service.href}
                    style={{
                      background: "var(--sand-50)",
                      padding: "1.25rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--line)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "var(--navy-900)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--ink-600)",
                          lineHeight: 1.6,
                          marginBottom: "1rem",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "var(--navy-800)",
                        textDecoration: "underline",
                      }}
                    >
                      View Service Details &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
