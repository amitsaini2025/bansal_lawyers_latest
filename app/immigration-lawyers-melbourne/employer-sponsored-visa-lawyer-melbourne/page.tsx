import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  CtaSection,
  Faq,
  Hero,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title:
    "Employer Sponsored Visa Lawyer Melbourne | Work Visa & Sponsorship Advice",
  description:
    "Bansal Lawyers assists with employer sponsored visas, work visa advice, nomination matters, sponsor documents, 482 visa issues, refusals and migration planning.",
  path: "/immigration-lawyers-melbourne/employer-sponsored-visa-lawyer-melbourne",
  keywords: [
    "Employer Sponsored Visa Lawyer Melbourne",
    "Employer Sponsored Visa Lawyers Melbourne",
    "Work Visa Lawyer Melbourne",
    "Sponsored Visa Lawyer Melbourne",
    "482 Visa Lawyer Melbourne",
    "Employer Nomination Lawyer Melbourne",
    "Migration Lawyer Melbourne",
  ],
});

const sponsoredMatters = [
  "Employer sponsored visa advice",
  "Work visa advice",
  "Sponsorship document review",
  "Nomination-related matters",
  "482 visa matters",
  "Employer nomination issues",
  "Skilled worker visa concerns",
  "Business document review",
  "Employment contract review",
  "Requests for further information",
  "Visa refusal matters",
  "Sponsor compliance concerns",
  "Permanent residency pathway advice",
];

const businessDocuments = [
  "Business registration details",
  "Financial documents",
  "Organisational information",
  "Position description",
  "Employment contract",
  "Evidence of business activity",
  "Payroll or staffing information",
  "Market salary evidence",
  "Documents supporting the need for the role",
];

const nominationIssues = [
  "Incorrect occupation selection",
  "Weak job description",
  "Duties that do not match the occupation",
  "Salary or employment condition concerns",
  "Insufficient business evidence",
  "Questions about whether the role is genuine",
  "Incomplete supporting documents",
  "Sponsor compliance concerns",
];

const applicantIssues = [
  "Weak employment evidence",
  "Qualification concerns",
  "Skills or experience gaps",
  "English requirement concerns",
  "Previous visa refusals",
  "Health or character concerns",
  "Inconsistent documents",
  "Missing records",
];

const refusalIssues = [
  "Nomination concerns",
  "Sponsor evidence problems",
  "Genuine position concerns",
  "Salary or employment condition issues",
  "Applicant skills or experience concerns",
  "Missing documents",
  "Inconsistent information",
  "Failure to respond properly to requests",
];

const whyChoosePoints = [
  "Clear advice for employers and skilled workers",
  "Review of business and applicant documents",
  "Guidance on nomination and occupation concerns",
  "Support with 482 visa and work visa matters",
  "Assistance with requests for further information",
  "Advice on refusal and appeal options",
  "Migration planning based on the facts of the matter",
];

const sponsoredFaqs = [
  {
    question: "Can Bansal Lawyers help with employer sponsored visas?",
    answer:
      "Yes. Bansal Lawyers assists employers and skilled workers with employer sponsored visa advice, work visa matters, nomination issues, document review, and refusal concerns.",
  },
  {
    question: "Do employers need documents to sponsor a worker?",
    answer:
      "Yes. Employers may need business documents, position details, employment contracts, salary evidence, and documents showing the need for the nominated role.",
  },
  {
    question: "Can you help with 482 visa matters?",
    answer:
      "Yes. We assist with 482 visa-related advice, document review, nomination concerns, applicant requirements, and refusal matters.",
  },
  {
    question: "What can cause an employer sponsored visa refusal?",
    answer:
      "Refusals may happen due to nomination issues, weak business evidence, genuine position concerns, salary problems, applicant eligibility concerns, missing documents, or inconsistent information.",
  },
  {
    question: "Can an employer sponsored visa lead to permanent residency?",
    answer:
      "Some employer sponsored pathways may support permanent residency options, depending on the visa type, occupation, employer, work history, and eligibility.",
  },
  {
    question: "Should the employer and applicant both get legal advice?",
    answer:
      "Yes. Because both the employer and applicant documents matter, getting advice early can help reduce mistakes and prepare the application more clearly.",
  },
];

export default function EmployerSponsoredVisaLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne",
    },
    { label: "Employer Sponsored Visa Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(sponsoredFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Employer Sponsored Visa Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Employer Sponsored Visa Lawyer Melbourne"
        intro={
          <>
            <p>
              Employer sponsored visas can help Australian businesses bring
              skilled workers into roles that need the right experience and
              qualifications. For employees, these visas can also create a pathway
              to work and build a future in Australia.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              The process can involve employer sponsorship, nomination
              requirements, occupation criteria, skills, work experience, market
              salary, business documents, and visa eligibility. Because several
              parties are involved, the application needs to be prepared
              carefully.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists employers, business owners, skilled workers,
              and professionals with employer sponsored visa matters in Melbourne
              and across Australia. We help clients understand the requirements,
              review documents, and prepare the next step based on the
              situation. As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we provide comprehensive advice across all sponsorship stages.
            </p>
          </>
        }
        primaryAction={{
          label: "Speak With an Employer Sponsored Visa Lawyer",
          href: "tel:+61422905860",
        }}
        secondaryAction={{
          label: "Book a Consultation",
          href: "/contact/",
        }}
      />

      <TrustBar
        items={[
          "Standard Business Sponsorship (SBS) & Compliance",
          "Subclass 482 TSS, 494 & 186 ENS Nominations",
          "Genuine Position & Labour Market Testing (LMT) Proof",
          "Melbourne CBD Office & Remote Consultations",
        ]}
      />

      {/* 2. Legal Advice for Employer Sponsored Visa Matters [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Preparation</span>
            <h2>Legal Advice for Employer Sponsored Visa Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Employer sponsored visa matters should be planned properly from the
              beginning. A weak nomination, missing business evidence, unclear
              job duties, or unsupported employment documents can create delays or
              refusal risks.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Before applying, it is important to understand:
            </p>
            <ul className="points-list">
              <li>Whether the employer can sponsor the worker</li>
              <li>Whether the nominated role is suitable</li>
              <li>Whether the occupation requirements are met</li>
              <li>What business documents may be required</li>
              <li>Whether salary and employment conditions are properly supported</li>
              <li>Whether the worker meets skills, experience, English, health, and character requirements</li>
              <li>Whether there are any previous visa or compliance concerns</li>
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review the employer and applicant details before
              advising on the next step.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Employer Sponsored Visa Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Employer Sponsored Visa Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {sponsoredMatters.map((matter) => (
              <div key={matter} className="matter-item">
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{matter}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem", color: "var(--navy-950)", fontWeight: 600 }}>
            Each matter should be reviewed based on the business, the nominated
            role, the worker&apos;s background, and the immigration requirements.
            If you are exploring independent skilled pathways alongside employer
            sponsorship, consult our{" "}
            <Link
              href="/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/"
              style={{ color: "var(--brand-blue)", textDecoration: "underline" }}
            >
              Skilled Migration Lawyer Melbourne
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* 4. Employer Sponsorship and Business Documents [H2] */}
      <Section tone="white" id="business-documents">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Employer Compliance</span>
            <h2>Employer Sponsorship and Business Documents</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The employer side of the application is important. The business may
              need to show that it is operating, that the position is genuine,
              and that the employment terms are properly documented.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Business documents may include:
            </p>
            <ul className="points-list">
              {businessDocuments.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              The documents required can vary depending on the visa pathway and
              the facts of the matter.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Nomination and Occupation Requirements [H2] */}
      <Section tone="warm" id="nomination-requirements">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Position Scrutiny</span>
            <h2>Nomination and Occupation Requirements</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The nominated role should match the correct occupation and duties.
              Problems can arise when the position description is unclear, the
              occupation is incorrectly selected, or the evidence does not support
              the need for the role.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common nomination issues may involve:
            </p>
            <ul className="points-list">
              {nominationIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can help review the nomination concerns and advise
              on how the matter should be prepared.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Work Visa Applicant Requirements [H2] */}
      <Section tone="white" id="applicant-requirements">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Worker Eligibility</span>
            <h2>Work Visa Applicant Requirements</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              The visa applicant must usually show that they meet the relevant
              requirements for the sponsored role. This may involve
              qualifications, work experience, English language ability, health,
              character, and immigration history.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Applicant issues may include:
            </p>
            <ul className="points-list">
              {applicantIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We assist applicants with document review and advice before
              submission or response.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Employer Sponsored Visa Refusals [H2] */}
      <Section tone="warm" id="refusals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Adverse Outcomes</span>
            <h2>Employer Sponsored Visa Refusals</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              An employer sponsored visa refusal can affect both the business and
              the worker. The next step depends on the reasons for refusal and
              whether review options are available. If you have received a
              negative decision, working with a{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              and an experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART Appeal Lawyer Melbourne
              </Link>{" "}
              is essential to protect statutory appeal timeframes before the
              Administrative Review Tribunal.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Common refusal issues may include:
            </p>
            <ul className="points-list">
              {refusalIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If an employer sponsored visa has been refused, the refusal letter
              should be reviewed carefully before deciding whether to appeal,
              reapply, or consider another option.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Permanent Residency Pathways [H2] */}
      <Section tone="white" id="pr-pathways">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Long-Term Settlement</span>
            <h2>Permanent Residency Pathways</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Some employer sponsored visa pathways may support long-term work
              and permanent residency options. The right pathway depends on the
              worker’s occupation, experience, employer support, visa history,
              and eligibility.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Transitioning from temporary work visas to permanent status
              requires coordinated legal strategy. A qualified{" "}
              <Link
                href="/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Permanent Residency Lawyer Melbourne
              </Link>{" "}
              at Bansal Lawyers can guide employers and employees through
              Subclass 186 Employer Nomination Scheme (ENS) streams.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers can assist with employer sponsored migration
              planning and help clients understand possible future options.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Why Choose Bansal Lawyers for Employer Sponsored Visa Matters? [H2] */}
      <Section tone="warm" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Trusted Melbourne Firm</span>
            <h2>
              Why Choose Bansal Lawyers for Employer Sponsored Visa Matters?
            </h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Employer sponsored visa matters need coordination between the
              employer and the applicant. The documents must be clear, consistent,
              and relevant to the visa requirements.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--navy-950)", fontWeight: 600, marginTop: "1.5rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {whyChoosePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We help clients understand what needs attention before the
              application or response is submitted.
            </p>
          </div>
        </Container>
      </Section>

      {/* 10. Speak With an Employer Sponsored Visa Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With an Employer Sponsored Visa Lawyer in Melbourne"
        text="If you are an employer looking to sponsor a worker, or a skilled worker seeking work visa advice, Bansal Lawyers can help you understand the process and requirements."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Sponsorship Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Standard business sponsorship & nominations", "Subclass 482, 186 & DAMA guidance", "Melbourne CBD & virtual consultations"]}
      />

      {/* Topic Cluster Quick Links */}
      <Section tone="warm" id="related-services">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Practice Network</span>
            <h2 style={{ marginBottom: "1.5rem" }}>
              Related Immigration Legal Services
            </h2>
            <div className="practice-areas-grid">
              <Link
                href="/immigration-lawyers-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Immigration Lawyers Melbourne</h3>
                <p>
                  Comprehensive migration law services for individuals,
                  sponsoring employers, and corporate clients.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Skilled Migration Lawyer Melbourne</h3>
                <p>
                  General Skilled Migration pathways, skills assessments, and
                  points-tested visas.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Visa Refusal Lawyer Melbourne</h3>
                <p>
                  Strategic advice and options following nomination or visa
                  application refusals.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>ART Appeal Lawyer Melbourne</h3>
                <p>
                  Administrative Review Tribunal appeal representation for
                  refused nominations and visas.
                </p>
              </Link>
              <Link
                href="/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/"
                className="practice-card"
                style={{ textDecoration: "none" }}
              >
                <h3>Permanent Residency Lawyer Melbourne</h3>
                <p>
                  PR transition planning including Subclass 186 Employer
                  Nomination Scheme (ENS) pathways.
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Faq items={sponsoredFaqs} />
      </Section>
    </>
  );
}
