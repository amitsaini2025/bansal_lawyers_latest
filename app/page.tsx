import type { Metadata } from "next";
import Image from "next/image";
import { StructuredData } from "@/components/seo";
import {
  ButtonLink,
  Container,
  CtaSection,
  Faq,
  Hero,
  HeroBookingPlaceholder,
  ImageTextSection,
  PracticeAreaCard,
  ProcessSteps,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createFaqSchema, createLegalServiceSchema } from "@/lib/schema";
import { TypingHeroTitle } from "@/components/ui/TypingHeroTitle";

export const metadata: Metadata = createMetadata({
  title: "Lawyers in Melbourne | Immigration, Family, Criminal & Commercial Law",
  description:
    "Bansal Lawyers is a Melbourne law firm helping clients with immigration, family, criminal, commercial, property and civil law matters. Book a consultation today.",
  path: "/",
  keywords: [
    "Lawyers in Melbourne",
    "Immigration Lawyers Melbourne",
    "Family Lawyers Melbourne",
    "Criminal Lawyers Melbourne",
    "Commercial Lawyers Melbourne",
    "Property Lawyers Melbourne",
    "Civil Lawyers Melbourne",
    "Law Firm Melbourne",
    "Legal Services Melbourne",
  ],
});

const corePracticeAreas = [
  {
    title: "Immigration Law",
    description:
      "Our immigration lawyers in Melbourne help with visa applications, visa refusals, visa cancellations, Administrative Review Tribunal (ART) appeals, partner visas, student visas, skilled migration, permanent residency, and citizenship matters.",
    href: "/immigration-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Family Law",
    description:
      "Our family lawyers in Melbourne advise on divorce, separation, parenting arrangements, property settlement, consent orders, family violence matters, and intervention orders.",
    href: "/family-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Criminal Law",
    description:
      "Our criminal lawyers in Melbourne provide legal support for criminal charges, traffic offences, police matters, bail applications, intervention order breaches, and court representation.",
    href: "/criminal-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Commercial Law",
    description:
      "Our commercial lawyers in Melbourne assist with business contracts, commercial agreements, loan agreements, shareholder matters, business transactions, disputes, and debt recovery.",
    href: "/commercial-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Property Law",
    description:
      "Our property lawyers in Melbourne give legal advice for buying, selling, leasing, contract review, conveyancing support, property disputes, and settlement-related matters.",
    href: "/property-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Civil Law",
    description:
      "Our civil lawyers in Melbourne support clients with civil disputes, legal notices, debt disputes, contract disputes, negotiation, document preparation, and court-related processes.",
    href: "/civil-lawyers-melbourne",
    ctaText: "Learn More",
  },
];

const whyChoosePoints = [
  "Clear and practical legal advice",
  "Support across multiple areas of law",
  "Careful review of documents and deadlines",
  "Honest explanation of legal options",
  "Professional handling of sensitive matters",
  "Melbourne-based legal support",
];

const whoWeHelpClients = [
  "Individuals",
  "Families",
  "Migrants",
  "Students",
  "Professionals",
  "Business Owners",
  "Property Buyers",
  "Landlords",
  "Tenants",
  "People Involved in Legal Disputes",
];

const processSteps = [
  {
    title: "1. Contact Our Team",
    description:
      "Share a short summary of your legal matter by phone, email, or enquiry form.",
  },
  {
    title: "2. Consultation and Review",
    description:
      "We review your situation, documents, deadlines, and key legal concerns.",
  },
  {
    title: "3. Clear Legal Advice",
    description:
      "You receive practical advice about your options and possible next steps.",
  },
  {
    title: "4. Preparation and Support",
    description:
      "Where required, we assist with applications, responses, contracts, notices, negotiations, or court documents.",
  },
];

const homepageFaqs = [
  {
    question: "How much does a legal consultation cost?",
    answer:
      "Fees depend on the type of matter and how much work is involved. When you book, our team can tell you the consultation fee up front. If you go ahead with the matter, we explain how costs are likely to work before any work begins, so nothing comes as a surprise.",
  },
  {
    question: "Can I have a consultation online or by phone?",
    answer:
      "Yes. If you can't come to the office, or you are interstate or overseas, you can book a phone or video consultation. Just let us know your preference when you enquire.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "We ask you to explain what has happened and go through any documents you have. We then outline your options, any time limits that apply, and what the next steps could be. You leave knowing where you stand, and you can decide whether to proceed with us.",
  },
  {
    question: "What documents should I bring?",
    answer:
      "It depends on the matter, but bring anything related to it. That could be letters or notices, visa decision records, court or police paperwork, contracts, agreements, or identification. If you are unsure, bring what you have. We can tell you what else is needed.",
  },
  {
    question: "How long will my legal matter take?",
    answer:
      "Timeframes vary a lot. A contract review may take days, while a court matter, a property settlement, or an appeal can take months. We give you a realistic estimate once we have reviewed your situation, and we update you if anything changes.",
  },
  {
    question: "Are there deadlines I need to worry about?",
    answer:
      "Often, yes. Time limits can apply to ART reviews, court dates, responding to notices, and other legal steps. Some are very short, so it is worth seeking advice as soon as you receive a decision or document.",
  },
  {
    question: "What if my matter involves more than one area of law?",
    answer:
      "This is common. A separation can affect a visa, and a business dispute can involve property. Because our team works across several areas of law, we can look at the whole picture rather than one issue at a time.",
  },
  {
    question: "What if I'm not sure which type of lawyer I need?",
    answer:
      "That's fine. Tell us briefly what has happened when you contact us, and we'll point you to the right person on our team. You don't need to work out the legal category before you call.",
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createFaqSchema(homepageFaqs)} />

      {/* 1. Hero Section */}
      <Hero
        title={<TypingHeroTitle />}
        intro={
          <>
            <p>
              Bansal Lawyers is a Melbourne law firm that helps people and businesses with legal matters, from visas and separations to contracts and court dates.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              We&apos;ll talk through your options in words you can follow, and stay with you at every step.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Legal Team",
          href: "/contact",
        }}
        aside={<HeroBookingPlaceholder />}
      />

      {/* Trust Highlights Bar */}
      <TrustBar
        items={[
          "Melbourne Legal Practice",
          "Plain-English Advice",
          "Multi-Practice Team",
          "Direct Solicitor Contact",
        ]}
      />

      {/* 2. Trust / Quick Intro Section */}
      <Section tone="white" id="trust-clarity">
        <div className="trust-clarity-grid">
          <div className="trust-clarity-content">
            <span className="eyebrow">Trust & Clarity</span>
            <h2>Legal Help That Starts With Clear Advice</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)" }}>
              When you are dealing with a legal matter, the first thing you need is clarity. Bansal Lawyers helps clients understand their position, their options, and the next steps before making important decisions.
            </p>
            <p style={{ marginTop: "1rem", color: "var(--ink-secondary)", fontSize: "1.05rem", lineHeight: "1.7" }}>
              We provide legal services in Melbourne for personal, family, and business matters. Each matter is handled with proper attention, clear communication, and practical legal guidance.
            </p>
            <div style={{ marginTop: "1.75rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <ButtonLink href="/contact" variant="primary">
                Book a Consultation
              </ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Learn More About Our Firm
              </ButtonLink>
            </div>
          </div>

          <div className="trust-clarity-media">
            <div className="trust-clarity-media-frame">
              <Image
                src="/images/legal-consultation-clarity.webp"
                alt="Bansal Lawyers Melbourne Legal Advice and Consultation on Collins Street"
                width={800}
                height={600}
                sizes="(max-width: 900px) 100vw, 540px"
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

      {/* 3. Practice Areas Section */}
      <Section tone="warm" id="practice-areas">
        <SectionHeader
          eyebrow="Key Practice Areas"
          title="Our Legal Services"
          intro="Bansal Lawyers provides legal support across key areas of law for individuals, families, migrants, professionals, and business owners."
        />
        <div className="card-grid">
          {corePracticeAreas.map((card) => (
            <PracticeAreaCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      {/* 4. Why Choose Section */}
      <Section tone="white" id="why-choose">
        <ImageTextSection
          eyebrow="Why Choose Bansal Lawyers"
          title="Why Clients Choose Bansal Lawyers"
          imageSrc="/images/melbourne-legal-chambers.webp"
          imageAlt="Bansal Lawyers Executive Legal Consultation Suite in Melbourne CBD"
          body={
            <>
              <p>
                Clients choose Bansal Lawyers because we explain legal issues in a way that is easy to understand. We do not overcomplicate the process. We review the facts, explain the risks, and help you decide what needs to be done next.
              </p>
              <ul className="points-list">
                {whyChoosePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </>
          }
          action={{ label: "Learn More About Our Firm", href: "/about" }}
        />
      </Section>

      {/* 5. Who We Help Section */}
      <Section tone="warm" id="who-we-help">
        <Container>
          <SectionHeader
            eyebrow="Client Representation"
            title="Who We Help"
            intro="We work with individuals, families, migrants, students, professionals, business owners, property buyers, landlords, tenants, and people involved in legal disputes."
          />
          <div className="who-we-help-grid">
            {whoWeHelpClients.map((client) => (
              <div key={client} className="who-we-help-card">
                <div className="who-we-help-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="who-we-help-card__title">{client}</h3>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--ink-secondary)", marginTop: "2rem", fontSize: "1.02rem", maxWidth: "48rem", lineHeight: "1.7" }}>
            Whether the matter is personal, business-related, or urgent, we help clients understand the process and take the right next step.
          </p>
        </Container>
      </Section>

      {/* 6. Process Section */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Transparent Legal Journey"
          title="How the Process Works"
          intro="We believe in simple, step-by-step guidance so you always know where your legal matter stands."
        />
        <ProcessSteps items={processSteps} />
      </Section>

      {/* 7. Urgent Advice CTA Section */}
      <CtaSection
        eyebrow="Time-Critical Advice"
        title="Need Legal Advice Before Taking the Next Step?"
        text={
          <>
            <p>
              Some legal matters have strict time limits. Visa refusals, court dates, police matters, family violence issues, contract disputes, and property settlements should not be delayed.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              If you are unsure what to do next, speak with Bansal Lawyers early and get clear advice before making important decisions.
            </p>
          </>
        }
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: "Speak With Our Legal Team", href: "tel:+61422905860" }}
      />

      {/* 8. FAQ Section */}
      <Section tone="warm" id="faq">
        <Faq
          items={homepageFaqs}
          subtitle="Find answers to common questions about our legal services, practice areas, and consultation process in Melbourne."
        />
      </Section>
    </>
  );
}
