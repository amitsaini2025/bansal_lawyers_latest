import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
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
  "Advice in plain language",
  "Support when things at home are stressful",
  "A careful read of your documents and the facts",
  "Guidance on parenting and property",
  "Help with consent orders and negotiations",
  "Sensitive matters handled with care",
];

const familyFaqs = [
  {
    question: "Do I need a lawyer to get a divorce?",
    answer:
      "No, you can apply yourself. But if there are children, property or complicated finances involved, a lawyer can save you from costly mistakes. We help with divorce applications, separation advice and the issues that come with them.",
  },
  {
    question: "Can a lawyer help with child custody and parenting arrangements?",
    answer:
      "Yes. We help with parenting arrangements, negotiations and consent orders. Most parents have to try mediation before applying to court, and we can guide you through that too.",
  },
  {
    question: "How long do I have to settle property after separation?",
    answer:
      "If you were married, generally 12 months from the date your divorce takes effect. If you were in a de facto relationship, two years from the end of the relationship. We help with property settlements involving assets, debts, super, business interests and other financial arrangements.",
  },
  {
    question: "Can you help with family violence and intervention orders?",
    answer:
      "Yes. We assist with family violence matters, intervention orders and the family law issues that go with them. If you're in immediate danger, call 000.",
  },
  {
    question: "When should I contact a family lawyer?",
    answer:
      "As early as you can. Maybe you're separating, or dealing with parenting issues, or you've been served with legal documents, or you're worried about property or safety. Any of those is a good time.",
  },
  {
    question: "How long does a divorce take in Melbourne?",
    answer:
      "You need to be separated for 12 months before you can apply. After you file, timing depends on how busy the court is. If you have no children under 18, you often don't have to attend the hearing. Once the divorce order is made, it takes effect one month and one day later, and that's when the divorce becomes final.",
  },
  {
    question: "Do I have to go to court to sort out parenting arrangements?",
    answer:
      "Not always. Many parents reach agreement through negotiation or mediation and then make it official with consent orders. Court is usually the next step when agreement isn't possible, or when safety is a concern.",
  },
  {
    question: "How is property divided after separation?",
    answer:
      "There's no fixed formula. The court looks at what each person has contributed, financially and otherwise, and what each of you will need going forward. Then it decides on an outcome that's just and equitable.",
  },
  {
    question: "Is there a time limit for property settlement?",
    answer:
      "Yes. For married couples, generally 12 months from when the divorce takes effect. For de facto couples, two years from the end of the relationship. After that, you need the court's permission to apply, and it isn't guaranteed.",
  },
  {
    question: "Can I get an intervention order without going to court?",
    answer:
      "Not quite. Only a court can make an intervention order. But you don't always have to wait for a hearing to be protected. In some situations, police can issue a family violence safety notice on the spot. That gives you temporary protection until a court decides whether to make an intervention order.",
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
        title="Family Lawyers in Melbourne"
        intro={
          <>
            <p>
              Separation is rarely tidy. Add parenting, money and paperwork, and it can feel like too much at once. We&apos;re a Melbourne family law firm. We tell you where you stand and what your options are, without the jargon, and we stay with you through the process.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call Our Family Law Team",
          href: "tel:+61422905860",
        }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="family" />}
      />

      <TrustBar
        items={[
          "Collins St Office and Remote Consultations",
          "Consent Orders and Court Representation",
          "Plain-English Legal Guidance",
          "Prompt Matter Assessment",
          "Focused Legal Advice",
        ]}
      />

      {/* 2. Clear Advice for Family Law Matters [H2] */}
      <Section tone="white">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Clear Advice for Family Law Matters</h2>
          <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A family problem turns into a legal one, and suddenly there are forms, deadlines and decisions you didn&apos;t ask for. Good advice cuts through that. You learn what needs doing, which documents to gather and what choices you really have.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We keep things calm and practical. If a matter can be settled without a fight, we&apos;ll try that first. If it can&apos;t, we&apos;ll get you ready for court. Family law matters in Melbourne are heard in the Federal Circuit and Family Court of Australia. Intervention orders go to the Magistrates&apos; Court of Victoria.
          </p>
        </div>
      </Section>

      {/* 3. Family Law Matters We Assist With [H2] */}
      <Section tone="warm" id="matters">
        <SectionHeader
          title="Family Law Matters We Assist With"
          intro="We act for clients on:"
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
      </Section>

      {/* 4. Divorce and Separation [H2] */}
      <Section tone="white" id="divorce-and-separation">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Divorce and Separation</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Ending a marriage on paper is one thing. Sorting out the kids, the house and the money is another, and that&apos;s usually where people need the most help.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            You can apply for a divorce after 12 months of separation. That can include time spent living under the same roof. The divorce itself only ends the marriage. Parenting and property are dealt with separately. If you have children under 18, the court also has to be satisfied they&apos;ll be properly cared for before it grants the divorce.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our divorce lawyers in Melbourne prepare the application and paperwork and help with everything else that comes with it.
          </p>
        </div>
      </Section>

      {/* 5. Parenting and Child Custody Matters [H2] */}
      <Section tone="warm" id="parenting-and-custody">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Children&apos;s Best Interests</span>
          <h2>Parenting and Child Custody Matters</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Parenting disputes get tense quickly, especially over where the kids live, school, travel, contact and safety.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Most people search for &ldquo;custody&rdquo;, but the law doesn&apos;t use that word. It talks about parenting arrangements and parenting orders, and the test is always what&apos;s best for the child. Before going to court, most parents have to try family dispute resolution (mediation). There are exceptions, such as family violence or urgency.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our child custody lawyers in Melbourne can help with parenting arrangements, negotiations, consent orders and court if it comes to that. We can also explain where child support fits in.
          </p>
        </div>
      </Section>

      {/* 6. Property Settlement [H2] */}
      <Section tone="white" id="property-settlement">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Financial Division & Superannuation</span>
          <h2>Property Settlement</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Property settlement covers a lot more than the house. Savings, loans, super, investments, a business, any debts. It all counts.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            As property settlement lawyers in Melbourne, we&apos;ll tell you where you stand and get the paperwork ready. If you and your ex agree, the deal can be made binding in one of two ways. Consent orders are approved by the court. A binding financial agreement is a private agreement, and each of you needs independent legal advice for it to hold up. We also advise on spousal maintenance when one person needs financial support.
          </p>

          <div className="deadline-alert-box" style={{ marginTop: "1.25rem" }}>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong>Watch the time limits.</strong>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                If you were married, you generally have 12 months from the date the divorce takes effect. For a de facto relationship, it&apos;s two years from the end of the relationship. Spousal maintenance generally follows the same limits. If you&apos;re close to either date, talk to a lawyer now.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Family Violence and Intervention Orders [H2] */}
      <Section tone="warm" id="family-violence">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Safety & Protection</span>
          <h2>Family Violence and Intervention Orders</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Family violence matters can involve safety, parenting arrangements, the police and the courts, often all at once. They need quick, careful attention.
          </p>

          <div className="deadline-alert-box" style={{ margin: "1.25rem 0" }}>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong>If you are in immediate danger, call 000.</strong>
              <p style={{ margin: "0.25rem 0 0", fontSize: "0.92rem", color: "#7a271a" }}>
                For 24/7 family violence crisis support, call 1800RESPECT on 1800 737 732 or Safe Steps on 1800 015 188.
              </p>
            </div>
          </div>

          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1rem" }}>
            In Victoria, intervention orders come under the Family Violence Protection Act 2008 and are usually dealt with in the Magistrates&apos; Court. Only a court can make one. In urgent situations, police can issue a family violence safety notice, which protects you temporarily until the court looks at it.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Our family violence lawyers in Melbourne act for people applying for an order and for people responding to one. If parenting or property issues are tied up in it, we deal with those too.
          </p>
        </div>
      </Section>

      {/* 8. Why Choose Bansal Lawyers for Family Law? [H2] */}
      <Section tone="white" id="why-choose">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Why Choose Bansal Lawyers for Family Law?</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Family law takes patience as much as legal knowledge. You need someone who explains things clearly and does the preparation properly. This is what you get from us:
          </p>
          <ul className="points-list" style={{ marginTop: "1.5rem" }}>
            {approachPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 9. Speak With Family Lawyers in Melbourne [H2] */}
      <CtaSection
        title="Speak With Family Lawyers in Melbourne"
        text="Separating, divorcing, arguing over parenting or property, or dealing with family violence? Get in touch and we'll help you work out your next step."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Call Our Family Law Team",
          href: "tel:+61422905860",
        }}
        phone="0422 905 860"
        phoneLabel="Direct Family Law Line"
        badges={[
          "Strictly confidential family legal advice",
          "Prompt response to urgent matters",
          "Melbourne CBD & virtual consultations",
        ]}
      />

      {/* 10. FAQs [H2] */}
      <Section tone="warm" id="faqs">
        <Faq
          items={familyFaqs}
          title="Frequently Asked Questions"
          subtitle="Quick answers to what people usually ask before they book."
          contactTitle="Need confidential advice about your family law situation?"
          contactButtonLabel="Book a Confidential Consultation"
          contactHref="/contact"
        />
      </Section>
    </>
  );
}
