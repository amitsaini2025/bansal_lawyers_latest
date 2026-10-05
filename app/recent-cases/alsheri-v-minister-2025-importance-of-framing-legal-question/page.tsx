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
  createBreadcrumbSchema,
  createCaseUpdateSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "The Crucial Importance of Correctly Framing the Legal Question — Alsheri v Minister 2025",
  description:
    "Case study of Alsheri v Minister for Immigration [2025] FedCFamC2G 242 examining Subclass 189 points test, Schedule 6D overseas employment, and jurisdictional error.",
  path: "/recent-cases/alsheri-v-minister-2025-importance-of-framing-legal-question",
  keywords: [
    "Alsheri v Minister 2025",
    "Alsheri v Minister for Immigration",
    "FedCFamC2G 242",
    "Subclass 189 Visa Appeal",
    "Schedule 6D Points Test",
    "Reg 2.26AC Definition of Employed",
    "Jurisdictional Error Framing Legal Question",
    "Immigration Lawyer Melbourne",
  ],
});

const relatedServices = [
  {
    title: "Skilled Migration Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/",
    description: "General Skilled Migration, points testing audits, and Subclass 189/190/491 counsel.",
  },
  {
    title: "Visa Refusal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
    description: "Decision record review, points calculation disputes, and statutory appeal deadlines.",
  },
  {
    title: "ART Appeal Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
    description: "Merits review representation before the Administrative Review Tribunal (ART).",
  },
  {
    title: "Immigration Lawyers Melbourne",
    href: "/immigration-lawyers-melbourne/",
    description: "Comprehensive Australian immigration law counsel and strategic visa advice.",
  },
  {
    title: "Immigration Document Review Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/",
    description: "Employment reference review, remuneration verification, and skills assessment auditing.",
  },
  {
    title: "Permanent Residency Lawyer Melbourne",
    href: "/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/",
    description: "Pathways to Australian permanent residency through skilled and independent streams.",
  },
];

export default function AlsheriCaseDetailPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Recent Cases", href: "/recent-cases" },
    { label: "Alsheri v Minister for Immigration [2025]" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData
        data={createCaseUpdateSchema({
          headline:
            "The Crucial Importance of Correctly Framing the Legal Question — Alsheri v Minister for Immigration 2025",
          description:
            "Case study of Alsheri v Minister for Immigration, Citizenship, Migrant Services and Multicultural Affairs [2025] FedCFamC2G 242 examining the crucial importance of correctly framing the legal question.",
          path: "/recent-cases/alsheri-v-minister-2025-importance-of-framing-legal-question",
          datePublished: "2025-04-11",
          dateModified: "2025-04-11",
          articleSection: "Immigration Law",
        })}
      />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Article Header */}
      <section
        style={{
          background: "var(--navy-900)",
          color: "var(--white)",
          padding: "clamp(2.5rem, 5vw, 4rem) 0 clamp(2rem, 4vw, 3rem)",
        }}
      >
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#93c5fd",
                  background: "rgba(147, 197, 253, 0.12)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "3px",
                  border: "1px solid rgba(147, 197, 253, 0.25)",
                }}
              >
                Immigration Law
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  letterSpacing: "0.04em",
                }}
              >
                Case Study &amp; Judicial Analysis
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                lineHeight: "1.25",
                color: "var(--white)",
                margin: "0 0 1.25rem",
              }}
            >
              The Crucial Importance of Correctly Framing the Legal Question — Alsheri v Minister for Immigration 2025
            </h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "center",
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.8)",
                paddingTop: "0.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <span>
                <strong>Published:</strong> Apr 11, 2025
              </span>
              <span>
                <strong>Citation:</strong> [2025] FedCFamC2G 242
              </span>
              <span>
                <strong>Decision Date:</strong> February 2025
              </span>
              <span>
                <strong>Jurisdiction:</strong> Federal Circuit and Family Court of Australia (Division 2)
              </span>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar
        items={[
          "Federal Circuit & Family Court Decision",
          "Skilled Independent Visa (Subclass 189)",
          "Schedule 6D Points & Jurisdictional Error",
          "Independent Legal Commentary",
        ]}
      />

      {/* Main Article Content */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            {/* Short introductory note */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                background: "var(--blue-50)",
                borderLeft: "4px solid var(--brand-blue)",
                borderRadius: "var(--radius-sm)",
                marginBottom: "2.5rem",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.96rem",
                  lineHeight: "1.65",
                  color: "var(--ink)",
                  fontStyle: "italic",
                }}
              >
                This case update is provided for general information only and should not be treated as legal
                advice. The outcome of any immigration matter depends on the facts, documents, evidence,
                deadlines, and legal circumstances of that matter.
              </p>
            </div>

            {/* Featured Legal Brief Visual */}
            <div
              style={{
                marginBottom: "2rem",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Image
                src="/images/cases/court-case-review.webp"
                alt="Federal Circuit Court Review - Alsheri v Minister 2025"
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

            {/* EXACT Case Content Provided — Preserved 100% Intact */}
            <article className="case-content" style={{ color: "var(--ink)", fontSize: "1.05rem", lineHeight: "1.8" }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.5rem", color: "var(--brand-blue)", marginBottom: "0.5rem" }}>
                  CASE STUDY: The Crucial Importance of Correctly Framing the Legal Question
                </h2>
                <p style={{ color: "var(--ink-secondary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                  Apr 11,2025
                </p>
                <p style={{ fontStyle: "italic", color: "var(--ink-secondary)", fontSize: "1rem", marginBottom: "1.5rem" }}>
                  Alsheri v Minister for Immigration, Citizenship, Migrant Services and Multicultural Affairs [2025] FedCFamC2G 242
                </p>
              </div>

              {/* Introduction */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Introduction
                </h3>
                <p>
                  This February 2025 Federal Circuit and Family Court decision highlights a fundamental principle in migration law: when reviewing visa decisions, tribunals must correctly identify and apply the legal test prescribed by the legislation. Judge McCabe&apos;s decision demonstrates that a tribunal&apos;s failure to clearly articulate the statutory test it is applying constitutes jurisdictional error, even when the outcome might appear reasonable based on the facts.
                </p>
              </section>

              {/* The Applicant's Background */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Applicant&apos;s Background
                </h3>
                <p>
                  Mr. Abdulrahman Alsheri, a Saudi Arabian citizen, was trained as a medical physicist who:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Commenced employment with the Saudi Ministry of Health in the medical imaging department of King Fahad Hospital in Al Baha on July 26, 2010
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Was described as &quot;well-regarded&quot; in a letter from the acting chief of radiology
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Had been physically present in Australia since 2016, having come to undertake further studies
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Initially completed a language course in Australia
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Subsequently undertook studies relevant to his career as a medical physicist
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Was scheduled to commence a PhD course in 2021
                  </li>
                </ul>
              </section>

              {/* Visa Application Timeline */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Visa Application Timeline
                </h3>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>April 18, 2018:</strong> Mr. Alsheri was invited to apply for a Skilled – Independent (points-tested) (Subclass 189) visa
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <strong>June 3, 2018:</strong> He lodged his visa application in response to the invitation
                  </li>
                </ul>
              </section>

              {/* Evidence Before the Tribunal */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Evidence Before the Tribunal
                </h3>
                <p>The Tribunal had before it several key documents:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Employment Certificate (May 24, 2016):</strong> Confirmed Mr. Alsheri remained on the payroll of the Ministry of Health
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Salary Certificate Letter (October 16, 2020):</strong> Stated Mr. Alsheri &quot;is a ministry employee and still on duty&quot; as of that date and confirmed he continued to draw a salary
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Scholarship Financial Guarantee (February 14, 2020):</strong> From the Ministry of Health&apos;s Director General of Training and Academic Affairs, stating the Ministry &quot;has agreed to sponsor financial support to [the applicant] for the PhD in Science&quot;
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Skills Assessment (April 9, 2018):</strong> From the Australian College of Physical Scientists and Engineers in Medicine, concluding the applicant&apos;s qualifications and work experience were commensurate with &quot;a three-year degree in physics plus 18 months full time experience working as a Medical Physicist&quot;
                  </li>
                </ul>
              </section>

              {/* The Legislative Framework */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Legislative Framework
                </h3>
                <p>The case hinged on the interpretation and application of two specific provisions:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Item 6D31 in Part 6D.3 of Schedule 6D to the Migration Regulations 1994:</strong> This provision allocates five points to an applicant if, at the time of invitation, the applicant &quot;had been employed outside Australia in: (a) the applicant&apos;s nominated skilled occupation; or (b) a closely related skilled occupation; for a period totalling at least 36 months in the 10 years immediately before that time.&quot;
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Regulation 2.26AC (6):</strong> This regulation defines &quot;employed&quot; for the purpose of Schedule 6D as &quot;engaged in an occupation for remuneration for at least 20 hours a week.&quot;
                  </li>
                </ul>
              </section>

              {/* The Tribunal's Reasoning */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Tribunal&apos;s Reasoning
                </h3>
                <p>In its decision, the Tribunal made the following key findings:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Mr. Alsheri had been on scholarships while still being an employee of the Ministry of Health
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The Saudi Ministry of Health paid his fees, living expenses, insurance, and other sundry expenses while he studied in Australia
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Mr. Alsheri worked in his occupation in Saudi Arabia for &quot;17 or 18 months&quot; before coming to Australia
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    He only returned to Saudi Arabia for holidays
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The applicant estimated he worked &quot;one or two hours a day answering emails which seek his opinion&quot; while in Australia
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Despite &quot;technically being employed by the Ministry of Health,&quot; the Tribunal did not consider that Mr. Alsheri was &quot;employed outside Australia in his nominated skilled occupation or a closely related skilled occupation&quot;
                  </li>
                </ul>
                <p>The Tribunal reasoned that:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "0.75rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    The 17-18 months when he worked as a medical physicist did not reach the minimum period of 36 months
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    He had resided in Australia except for visits back to his home country
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    His regular payments constituted &quot;scholarship payments&quot; rather than evidence of employment
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Answering emails while in Australia was &quot;incidental and does not amount to employment overseas&quot;
                  </li>
                </ul>
              </section>

              {/* The Court's Analysis */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Court&apos;s Analysis
                </h3>
                <p>
                  Judge McCabe identified a fundamental flaw in the Tribunal&apos;s approach. The Tribunal had failed to correctly frame and apply the legal test it was required to consider. Specifically:
                </p>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Failure to reference the legislative provisions:</strong> The Tribunal did not directly quote or even precisely use the words of item 6D31 or the definition of &quot;employed&quot; in reg 2.26AC(6)
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Imprecise paraphrasing:</strong> When the Tribunal attempted to summarize the test at paragraphs [16] and [25], it did so inaccurately, missing the nuance that reg 2.26AC(6) imports into the concept of being &quot;employed&quot;
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Ambiguous terminology:</strong> The Tribunal&apos;s finding that Mr. Alsheri was &quot;technically employed&quot; created confusion about what question the Tribunal was actually asking itself
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Focus on physical location:</strong> The Tribunal appeared to place excessive emphasis on Mr. Alsheri&apos;s physical presence in Australia rather than properly analyzing whether he met the regulatory definition of being &quot;engaged in an occupation for remuneration&quot;
                  </li>
                </ul>

                <p>Judge McCabe emphasized several key principles:</p>
                <blockquote
                  style={{
                    margin: "1.25rem 0",
                    padding: "1rem 1.25rem",
                    background: "var(--sand-50)",
                    borderLeft: "4px solid var(--brand-blue)",
                    borderRadius: "var(--radius-sm)",
                    fontStyle: "italic",
                  }}
                >
                  <p style={{ margin: "0 0 0.5rem" }}>
                    &quot;Every Tribunal review involves supplying an answer to a question derived from an enactment. Experience shows the trickiest part of that process will often lie in correctly framing the question.&quot;
                  </p>
                  <p style={{ margin: "0 0 0.5rem" }}>
                    &quot;The Tribunal commits a jurisdictional error where it misdirects itself by asking the wrong question.&quot;
                  </p>
                  <p style={{ margin: "0 0 0.5rem" }}>
                    &quot;If the Tribunal has misdirected itself, it is not open to the Court on appeal to reframe the question as it should have been asked and consider whether the Tribunal might have given the same answer.&quot;
                  </p>
                  <p style={{ margin: "0 0 0.5rem" }}>
                    &quot;The Court cannot rely on the facts as found by the Tribunal to supply a plausible answer to the question the Tribunal should have asked.&quot;
                  </p>
                  <p style={{ margin: 0 }}>
                    &quot;The Tribunal&apos;s fact-finding process does not occur in a vacuum. That forensic process is necessarily directed to finding facts that are relevant to answering the question divined from the statute.&quot;
                  </p>
                </blockquote>
              </section>

              {/* The Materiality of the Error */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Materiality of the Error
                </h3>
                <p>
                  Judge McCabe determined that the Tribunal&apos;s failure to correctly frame the legal question constituted a material jurisdictional error. Citing the High Court&apos;s decision in <em>LPDT v Minister for Immigration, Citizenship, Migrant Services and Multicultural Affairs [2024] HCA 12</em>, the Court confirmed an error is material where &quot;there is a realistic possibility that the decision that was made in fact could have been different if the error had not occurred.&quot;
                </p>
                <p>
                  The Court was satisfied that had the Tribunal correctly framed the question—specifically addressing whether Mr. Alsheri was &quot;engaged in an occupation for remuneration&quot; over the appropriate timeframe—its factual findings might have been different and certainly would have been more detailed.
                </p>
                <p>
                  Importantly, Judge McCabe rejected the argument that the Court could simply substitute its own reasoning by applying the correct test to the Tribunal&apos;s factual findings. The judge emphasized that the integrity of the fact-finding process is compromised when the decision-maker misconceives the legal question.
                </p>
              </section>

              {/* The Court's Decision */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  The Court&apos;s Decision
                </h3>
                <p>Based on this analysis, Judge McCabe:</p>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Issued a writ of certiorari quashing the Tribunal&apos;s decision
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    Issued a writ of mandamus directed to the Administrative Review Tribunal (the successor to the AAT) requiring it to remake the decision according to law
                  </li>
                </ul>
              </section>

              {/* Key Takeaways from the Decision */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Key Takeaways from the Decision
                </h3>
                <ul style={{ paddingLeft: "1.5rem", margin: "1rem 0" }}>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Precision in legal reasoning:</strong> Tribunals must precisely identify and apply the correct statutory test when making decisions
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Importance of legislative definitions:</strong> The specific regulatory definition of terms (in this case, &quot;employed&quot;) must be properly incorporated into the analysis
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Fact-finding guided by legal questions:</strong> A tribunal&apos;s understanding of the legal question shapes what facts it investigates and finds relevant
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Limits of judicial review:</strong> Courts cannot simply reframe the correct question and apply it to the facts as found by the tribunal
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong>Clear reasoning requirements:</strong> While tribunals need not quote legislation verbatim, their reasons must clearly demonstrate they understood and applied the correct test
                  </li>
                </ul>
              </section>

              {/* Conclusion */}
              <section style={{ marginBottom: "2rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--ink)", borderBottom: "1px solid var(--line)", paddingBottom: "0.4rem", marginBottom: "0.85rem" }}>
                  Conclusion
                </h3>
                <p>
                  Alsheri v Minister for Immigration serves as a crucial reminder that administrative decision-makers must correctly identify and engage with the legal tests prescribed by legislation. The case demonstrates that the path to a decision is as important as the decision itself—tribunals must ask the right question before they can provide the right answer.
                </p>
                <p>
                  The judgment reinforces that proper administrative decision-making is not just about reaching reasonable conclusions, but about reaching those conclusions through a legally sound process of reasoning. When tribunals fail to correctly frame and apply the statutory test, the resulting decision lacks legal foundation regardless of how reasonable it might otherwise appear.
                </p>
              </section>

              {/* Note / Disclaimer & Cross-Links */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.5rem",
                  background: "var(--sand-50)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.95rem",
                  color: "var(--ink-secondary)",
                }}
              >
                <p style={{ margin: 0, lineHeight: "1.7" }}>
                  <strong>Note:</strong> This case study is provided for informational purposes to highlight important developments in migration law. It was not handled by Bansal Lawyers but demonstrates the kinds of technical legal issues that can arise in skilled migration matters.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <li>
                    <a
                      href="https://www.bansallawyers.com.au/breaking-rental-agreement-early-in-australia"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Breaking a Rental Agreement Early in Australia →
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases/khanal-migration-english-language-requirements-covid-19-case-study"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Khanal Migration Case Study: English Language Requirements and COVID-19 Flexibility →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases/chikweu-v-minister-2024-federal-court-visa-refusal-overturn"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      When Tribunal Errors Matter: Chikweu v Minister 2024 Immigration Case →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases/student-visa-refusal-bias-jaggi-v-minister-2024"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Apprehended Bias in Student Visa Refusals: Jaggi v Minister 2024 Explained →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases/thakur-v-minister-for-immigration-2025-student-visa"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      Thakur v Minister for Immigration 2025 — Student Visa Case →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/recent-cases"
                      style={{ color: "var(--brand-blue)", textDecoration: "underline", fontWeight: 600 }}
                    >
                      ← Back to All Recent Cases
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* Related Legal Services Section */}
      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "54rem", margin: "0 auto" }}>
            <span className="eyebrow">Practical Legal Support</span>
            <h2>Related Legal Services</h2>
            <p style={{ color: "var(--ink-secondary)", marginTop: "0.5rem", marginBottom: "2rem" }}>
              Explore our specialized legal services for Australian skilled independent visas, points audits,
              and merits review:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 16rem), 1fr))",
                gap: "1.25rem",
              }}
            >
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  style={{
                    display: "block",
                    padding: "1.25rem",
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--brand-blue)",
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: "1.55",
                      color: "var(--ink-secondary)",
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Need Advice After a Visa Refusal? (CTA Section) */}
      <Section tone="white">
        <Container>
          <div
            style={{
              maxWidth: "54rem",
              margin: "0 auto",
              padding: "clamp(2rem, 4vw, 3rem)",
              background: "var(--navy-900)",
              color: "var(--white)",
              borderRadius: "var(--radius-md)",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#93c5fd",
                marginBottom: "0.75rem",
              }}
            >
              Immigration Assistance
            </span>
            <h2 style={{ color: "var(--white)", marginBottom: "1rem" }}>
              Need Legal Guidance for Skilled Migration or an Appeal?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.75",
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: "42rem",
                margin: "0 auto 1.75rem",
              }}
            >
              Whether you are preparing a points-tested application, navigating work experience definitions, or
              challenging an incorrect tribunal decision, our team can help.
            </p>
            <p
              style={{
                fontSize: "1.02rem",
                lineHeight: "1.7",
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: "42rem",
                margin: "0 auto 2rem",
              }}
            >
              Bansal Lawyers will review your documents, examine statutory requirements, and advise on your strongest
              legal pathway forward.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <ButtonLink href="/contact/" variant="primary">
                Book a Consultation
              </ButtonLink>
              <ButtonLink
                href="tel:+61422905860"
                variant="white-outline"
              >
                Speak With Our Immigration Team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
