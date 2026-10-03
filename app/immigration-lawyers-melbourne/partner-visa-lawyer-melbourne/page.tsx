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
  title: "Partner Visa Lawyer Melbourne | Spouse & De Facto Visa Advice",
  description:
    "Bansal Lawyers assists with partner visa applications, spouse visas, de facto relationship evidence, partner visa refusals and immigration advice in Melbourne.",
  path: "/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne",
  keywords: [
    "Partner Visa Lawyer Melbourne",
    "Partner Visa Lawyers Melbourne",
    "Spouse Visa Lawyer Melbourne",
    "De Facto Visa Lawyer Melbourne",
    "Partner Visa Australia",
    "Partner Visa Refusal Lawyer",
    "Migration Lawyer Melbourne",
  ],
});

const partnerMatters = [
  "Partner visa applications",
  "Spouse visa matters",
  "De facto partner visa matters",
  "Relationship evidence review",
  "Document preparation",
  "Statement preparation guidance",
  "Sponsor-related documents",
  "Requests for further information",
  "Partner visa refusal matters",
  "Partner visa appeal advice",
  "Immigration advice for couples",
];

const relationshipEvidence = [
  "Identity documents",
  "Marriage certificate, if applicable",
  "Proof of shared address",
  "Joint financial documents",
  "Communication records",
  "Photos together",
  "Travel records",
  "Statements from family or friends",
  "Evidence of social recognition",
  "Documents showing commitment to each other",
  "Personal statements from the applicant and sponsor",
];

const refusalConcerns = [
  "Insufficient relationship evidence",
  "Inconsistent information",
  "Concerns about whether the relationship is genuine",
  "Missing documents",
  "Sponsor-related issues",
  "Weak statements",
  "Failure to respond properly to requests",
  "Previous immigration history concerns",
];

const whyChoosePoints = [
  "Clear advice on partner visa requirements",
  "Review of relationship history and documents",
  "Guidance on evidence preparation",
  "Support with spouse and de facto partner visa matters",
  "Assistance with requests for further information",
  "Advice on partner visa refusal and appeal options",
  "Careful handling of sensitive relationship details",
];

const partnerFaqs = [
  {
    question: "Can Bansal Lawyers help with partner visa applications?",
    answer:
      "Yes. Bansal Lawyers assists with partner visa applications, spouse visa matters, de facto partner visa matters, relationship evidence, and document preparation.",
  },
  {
    question: "What evidence is needed for a partner visa?",
    answer:
      "Evidence may include identity documents, proof of relationship, shared financial documents, communication records, photos, travel records, joint commitments, and statements. The documents needed depend on your situation.",
  },
  {
    question: "Can you help if my partner visa is refused?",
    answer:
      "Yes. We can review the refusal decision, explain possible options, and assist with appeal or next-step advice where available.",
  },
  {
    question: "Do you help with de facto partner visa matters?",
    answer:
      "Yes. We assist with de facto partner visa matters and help clients understand what relationship evidence may be required.",
  },
  {
    question: "Should I get legal advice before applying for a partner visa?",
    answer:
      "Yes. Legal advice can help you understand the process, prepare stronger documents, and avoid common mistakes before lodging the application.",
  },
  {
    question: "Can you help respond to a request for further information?",
    answer:
      "Yes. We assist with reviewing the request, preparing documents, and responding clearly to the issues raised.",
  },
];

export default function PartnerVisaLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    {
      label: "Immigration Lawyers Melbourne",
      href: "/immigration-lawyers-melbourne/",
    },
    { label: "Partner Visa Lawyer Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(partnerFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Partner Visa Lawyer Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Partner Visa Lawyer Melbourne"
        intro={
          <>
            <p>
              Applying for a partner visa can be an important step for couples who want to build their life together in Australia. The process can feel stressful because the application usually requires strong relationship evidence, clear documents, and careful preparation.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers assists clients with partner visa applications, spouse visa matters, de facto relationship evidence, document review, and partner visa refusal concerns. As experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/"
                style={{ color: "var(--brand-blue-light)", textDecoration: "underline" }}
              >
                Immigration Lawyers Melbourne
              </Link>
              , we help you understand what needs to be prepared and how to approach the application based on your situation.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact/" }}
        secondaryAction={{
          label: "Speak With a Partner Visa Lawyer",
          href: "tel:+61422905860",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Comprehensive Relationship Proof Review",
          "RFI & Refusal Strategic Advice",
          "Direct Solicitor Management",
        ]}
      />

      {/* 2. Legal Advice for Partner Visa Applications [H2] */}
      <Section tone="white" id="legal-advice">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Strategic Preparation</span>
            <h2>Legal Advice for Partner Visa Applications</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A partner visa application is not just about filling in forms. The strength of the application often depends on how clearly the relationship is explained and supported with evidence.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Many couples are unsure about what documents to provide, how much evidence is enough, or how to explain their circumstances properly. Getting legal advice early can help reduce mistakes and improve the quality of the application.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              Bansal Lawyers can review your situation, explain the process, and guide you on the documents and information that may be needed.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Partner Visa Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Partner Visa Matters We Assist With"
            intro="Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {partnerMatters.map((matter) => (
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
            Each relationship is different, so the application should be prepared according to the facts of the relationship.
          </p>
        </Container>
      </Section>

      {/* 4. Relationship Evidence for Partner Visas [H2] */}
      <Section tone="white" id="relationship-evidence">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Documentary Proof</span>
            <h2>Relationship Evidence for Partner Visas</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Relationship evidence is one of the most important parts of a partner visa application. The documents should help show the nature of the relationship and support the information provided in the application.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Depending on the situation, evidence may include:
            </p>
            <div className="matters-grid" style={{ marginTop: "1rem" }}>
              {relationshipEvidence.map((evidence) => (
                <div key={evidence} className="matter-item">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{evidence}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.5rem" }}>
              Not every couple will have the same documents. The right evidence depends on the history and circumstances of the relationship.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Spouse Visa and De Facto Partner Visa Advice [H2] */}
      <Section tone="warm" id="spouse-and-defacto">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Relationship Categories</span>
            <h2>Spouse Visa and De Facto Partner Visa Advice</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Partner visa matters may involve married couples, de facto partners, long-distance relationships, couples living together, or couples with complex personal circumstances.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients by reviewing the relationship background, identifying possible document gaps, and explaining how the application can be prepared more clearly.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you are currently holding an international student visa and considering transitioning to a partner visa, an experienced{" "}
              <Link
                href="/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Student Visa Lawyer Melbourne
              </Link>{" "}
              can also ensure your current visa conditions and Bridging Visa transitions are managed without breach.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If there are issues such as previous visa refusals, relationship gaps, limited evidence, long-distance periods, or sponsor-related concerns, it is better to get advice before submitting the application.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Partner Visa Refusals [H2] */}
      <Section tone="white" id="refusals">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Adverse Decision Strategy</span>
            <h2>Partner Visa Refusals</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A partner visa refusal can be difficult, especially when the decision affects your relationship and future plans. The next step depends on the reasons for refusal and whether review options are available.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              If you have received an adverse decision from the Department, a dedicated{" "}
              <Link
                href="/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                Visa Refusal Lawyer Melbourne
              </Link>{" "}
              can review the refusal letter, while our{" "}
              <Link
                href="/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/"
                style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "underline" }}
              >
                ART Appeal Lawyer Melbourne
              </Link>{" "}
              practitioners can lodge and represent your appeal before the Administrative Review Tribunal.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Common concerns in partner visa refusal matters may involve:
            </p>
            <ul className="points-list">
              {refusalConcerns.map((concern) => (
                <li key={concern}>{concern}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              Bansal Lawyers can review the refusal decision, explain possible options, and assist with the next step where available.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Requests for Further Information [H2] */}
      <Section tone="warm" id="rfi">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Department Correspondence</span>
            <h2>Requests for Further Information</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              In some partner visa matters, the Department may request additional information or documents. These requests should be handled carefully because the response may affect the decision.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We assist clients with reviewing the request, identifying what documents may be needed, and preparing a clear response based on the issues raised.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Partner Visa Matters? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Client Support & Care</span>
            <h2>Why Choose Bansal Lawyers for Partner Visa Matters?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Partner visa matters are personal and document-heavy. The application should be prepared carefully so the relationship history is clear and supported.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {whyChoosePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We help clients understand what needs to be done before submitting or responding to a partner visa matter.
            </p>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With a Partner Visa Lawyer in Melbourne [H2] */}
      <CtaSection
        title="Speak With a Partner Visa Lawyer in Melbourne"
        text="If you are preparing a partner visa application, responding to a request for information, or dealing with a partner visa refusal, Bansal Lawyers can help you understand your next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Partner Visa Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Immigration Solicitor"
        badges={["Comprehensive relationship evidence check", "Onshore & offshore visa pathways", "Melbourne CBD & virtual consultations"]}
      />

      {/* 10. Frequently Asked Questions [H2] */}
      <Section tone="white" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>Frequently Asked Questions</h2>
            <Faq items={partnerFaqs} />
            <div
              style={{
                marginTop: "2.5rem",
                textAlign: "center",
                padding: "2rem",
                background: "var(--warm-50)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <p style={{ margin: "0 0 1rem", color: "var(--ink-secondary)", fontSize: "0.98rem" }}>
                Need expert review of your relationship documents before lodging with the Department?
              </p>
              <ButtonLink href="/contact/" variant="primary">
                Schedule a Document Assessment
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
