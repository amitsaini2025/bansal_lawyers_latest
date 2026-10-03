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
  title: "Family Lawyers Melbourne | Divorce, Parenting & Property",
  description:
    "Family lawyers in Melbourne for divorce, parenting, property settlement, consent orders and family violence. Book a consultation with Bansal Lawyers.",
  path: "/family-lawyers-melbourne",
  keywords: [
    "Family Lawyers Melbourne",
    "Divorce Lawyers Melbourne",
    "Child Custody Lawyers Melbourne",
    "Property Settlement Lawyers Melbourne",
    "Family Violence Lawyers Melbourne",
    "Consent Orders Melbourne",
    "Binding Financial Agreements Melbourne",
    "Parenting Arrangements Melbourne",
  ],
});

const familyMatters = [
  {
    title: "Divorce",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
  },
  {
    title: "Separation advice",
    href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
  },
  {
    title: "Parenting arrangements",
    href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
  },
  {
    title: "Child custody matters",
    href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
  },
  {
    title: "Property settlement",
    href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
  },
  {
    title: "Consent orders",
    href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
  },
  {
    title: "Binding financial agreements",
    href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
  },
  {
    title: "Family violence matters",
    href: "/family-lawyers-melbourne/family-violence-lawyer-melbourne/",
  },
  {
    title: "Intervention orders",
    href: "/family-lawyers-melbourne/intervention-order-lawyer-melbourne/",
  },
  {
    title: "Spousal maintenance",
    href: "/family-lawyers-melbourne/spousal-maintenance-lawyer-melbourne/",
  },
  {
    title: "Child support issues",
    href: "/family-lawyers-melbourne/child-support-lawyer-melbourne/",
  },
  {
    title: "Family law negotiations",
    href: "/family-lawyers-melbourne/family-dispute-resolution-lawyer-melbourne/",
  },
];

const approachPoints = [
  "Practical advice in plain language",
  "Support during stressful family situations",
  "Careful review of documents and facts",
  "Guidance on parenting and property matters",
  "Help with consent orders and negotiations",
  "Professional handling of sensitive matters",
];

const familyFaqs = [
  {
    question: "Do I need a lawyer to get a divorce?",
    answer:
      "No, you can apply yourself. But if children, property or a complicated financial situation are involved, a lawyer can help you avoid mistakes. We assist with divorce applications, separation advice and the related family law issues.",
  },
  {
    question: "Can a lawyer help with child custody and parenting arrangements?",
    answer:
      "Yes. We help with parenting arrangements, child custody matters, consent orders and negotiations. Most parents need to try mediation before applying to court, and we can guide you through that too.",
  },
  {
    question: "How long do I have to settle property after separation?",
    answer:
      "Generally 12 months from the date a divorce order takes effect, or two years from the end of a de facto relationship. We assist with property settlement involving assets, debts, superannuation, business interests and other financial arrangements.",
  },
  {
    question: "Can you help with family violence and intervention orders?",
    answer:
      "Yes. We assist with family violence matters, intervention orders and related family law issues. If you're in immediate danger, call 000.",
  },
  {
    question: "When should I contact a family lawyer?",
    answer:
      "As early as you can. That includes when you're separating, dealing with parenting issues, receiving legal documents, or concerned about property or safety.",
  },
  {
    question: "How long does a divorce take in Melbourne?",
    answer:
      "You need to be separated for 12 months before you can apply. Once the application is filed, it usually takes a few months for a hearing date, although timing varies with the court's workload.",
  },
  {
    question: "Do I have to go to court to sort out parenting arrangements?",
    answer:
      "Not always. Many parents reach agreement through negotiation or mediation and formalise it with consent orders. Court is generally the option when agreement isn't possible or when safety is a concern.",
  },
  {
    question: "How is property divided after separation?",
    answer:
      "There's no fixed formula. The court considers what each person brought into the relationship, what they've contributed since, and what each will need in future, then decides what is fair.",
  },
  {
    question: "Is there a time limit for property settlement?",
    answer:
      "Yes. Generally 12 months from the divorce order for married couples, and two years from separation for de facto couples. Extensions are possible but not guaranteed.",
  },
  {
    question: "Can I get an intervention order without going to court?",
    answer:
      "In some situations, police can issue a family violence safety notice on the spot. A court then decides whether a longer-term intervention order is made.",
  },
];

export default function FamilyLawyersMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Family Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(familyFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero Section: Family Lawyers in Melbourne [H1] */}
      <Hero
        eyebrow="Bansal Lawyers · Melbourne CBD"
        title="Family Lawyers in Melbourne"
        intro={
          <>
            <p>
              Family law matters are personal, and they&apos;re hard to manage without proper legal advice. Separation, divorce, parenting arrangements, property settlement, family violence and consent orders can all affect your family, your finances and your future.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers is a Melbourne family law firm. We help clients understand their rights, responsibilities and options, and we support them through each stage of the process.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call Our Family Law Team",
          href: "tel:+61422905860",
        }}
      />

      <TrustBar
        items={[
          "Collins St Office & Remote Consultations",
          "Consent Orders & Court Representation",
          "Plain-English Legal Guidance",
          "Prompt Matter Assessment",
        ]}
      />

      {/* 2. Clear Advice for Family Law Matters [H2] */}
      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Focused Legal Counsel</span>
            <h2>Clear Advice for Family Law Matters</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              When a family issue turns into a legal one, emotions can make decisions harder. Good advice helps you see what needs to be done, which documents you&apos;ll need, and what options are open to you.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We aim to keep our guidance calm, clear and practical. Where we can, we help clients resolve matters without unnecessary conflict. Where court action is needed, we make sure you&apos;re properly prepared. In Melbourne, family law matters are heard in the Federal Circuit and Family Court of Australia, while intervention orders go through the Magistrates&apos; Court of Victoria.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. Family Law Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <Container>
          <SectionHeader
            eyebrow="Comprehensive Practice"
            title="Family Law Matters We Assist With"
            intro="As family lawyers in Melbourne, Bansal Lawyers can assist with:"
          />
          <div className="matters-grid">
            {familyMatters.map((matter) => (
              <Link
                key={matter.title}
                href={matter.href}
                className="matter-item"
                title={`Explore ${matter.title}`}
              >
                <svg
                  className="matter-item__icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{matter.title}</span>
                <svg
                  className="matter-item__arrow"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Divorce and Separation [H2] */}
      <Section tone="white" id="divorce-and-separation">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Marriage Dissolution & Separation</span>
            <h2>Divorce and Separation</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Divorce and separation involve more than ending a relationship. You may also need advice about the children, the property, your finances and what happens next.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              In Australia, you can apply for a divorce once you&apos;ve been separated for at least 12 months, and you can be separated while still living under the same roof. The divorce only ends the marriage, though. Parenting and property still have to be sorted out separately. Our divorce lawyers in Melbourne help with the application, the documents and the related issues that need to be resolved.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Parenting and Child Custody Matters [H2] */}
      <Section tone="warm" id="parenting-and-custody">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Children&apos;s Best Interests</span>
            <h2>Parenting and Child Custody Matters</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Parenting matters need care, especially when the children&apos;s living arrangements, schooling, travel, communication or safety are involved.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              &ldquo;Custody&rdquo; is the word most people search for, but the law talks about parenting arrangements and parenting orders, and the focus is what&apos;s best for the child. Before applying to a court, most parents need to try family dispute resolution (mediation), unless an exception applies, such as family violence or urgency. Our child custody lawyers in Melbourne help with parenting arrangements, negotiations, consent orders and court steps where they&apos;re needed. We can also explain how child support fits in.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Property Settlement [H2] */}
      <Section tone="white" id="property-settlement">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Financial Division & Superannuation</span>
            <h2>Property Settlement</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Property settlement can cover the family home, savings, loans, business interests, superannuation, investments and any other assets or debts.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              As property settlement lawyers in Melbourne, we help you understand where you stand, prepare the documents and work towards a practical outcome. If you and your ex-partner agree, we can put it into consent orders or a binding financial agreement so it&apos;s legally enforceable. We can also advise on spousal maintenance where one person needs financial support. Time limits apply: generally 12 months from the date a divorce takes effect, or two years from the end of a de facto relationship. If you&apos;re close to those dates, get advice early.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. Family Violence and Intervention Orders [H2] */}
      <Section tone="warm" id="family-violence">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Safety & Protection</span>
            <h2>Family Violence and Intervention Orders</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Family violence matters need prompt and careful attention. They can involve safety concerns, parenting arrangements, police involvement or court orders.
            </p>

            <div className="deadline-alert-box">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <strong>If you are in immediate danger, call 000 immediately.</strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                  For 24/7 family violence crisis support, contact 1800RESPECT on 1800 737 732 or the Safe Steps Crisis Line on 1800 015 188.
                </p>
              </div>
            </div>

            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              In Victoria, intervention orders are made under the Family Violence Protection Act 2008, usually in the Magistrates&apos; Court. Our family violence lawyers in Melbourne assist people applying for an order and people responding to one, and we deal with any related parenting or property issues.
            </p>
          </div>
        </Container>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Family Law? [H2] */}
      <Section tone="white" id="why-choose">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Client Support & Advocacy</span>
            <h2>Why Choose Bansal Lawyers for Family Law?</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Family law takes more than legal knowledge. It takes patience, clear communication and careful preparation.
            </p>
            <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--navy-950)", marginTop: "1.25rem", marginBottom: "0.75rem" }}>
              Our approach includes:
            </p>
            <ul className="points-list">
              {approachPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* 9. Speak With Family Lawyers in Melbourne [H2] */}
      <CtaSection
        title="Speak With Family Lawyers in Melbourne"
        text="If you're dealing with separation, divorce, parenting issues, property settlement or family violence, Bansal Lawyers can help you work out your next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Solicitor"
        badges={["Strictly confidential family legal advice", "Prompt response to urgent matters", "Melbourne CBD & virtual consultations"]}
      />

      {/* 10. FAQs [H2] */}
      <Section tone="white" id="faqs">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Clear Answers</span>
            <h2 style={{ marginBottom: "2rem" }}>FAQs</h2>
            <Faq items={familyFaqs} />
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
                Need confidential advice regarding your family law situation?
              </p>
              <ButtonLink href="/contact" variant="primary">
                Book a Confidential Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
