import type { Metadata } from "next";
import Image from "next/image";
import { StructuredData } from "@/components/seo";
import {
  ButtonLink,
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
      "Our immigration lawyers in Melbourne help with visa applications, refusals and cancellations, and with reviews at the Administrative Review Tribunal (ART). We also handle partner visas, student visas, skilled migration, permanent residency and citizenship.",
    href: "/immigration-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Family Law",
    description:
      "Our family lawyers in Melbourne advise on divorce, separation, parenting arrangements, property settlement and consent orders. We also help with family violence matters, including applying for or responding to intervention orders.",
    href: "/family-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Criminal Law",
    description:
      "Our criminal lawyers in Melbourne act for people facing criminal charges, traffic offences and police matters. That includes bail applications, intervention order breaches and representation in court.",
    href: "/criminal-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Commercial Law",
    description:
      "Our commercial lawyers in Melbourne help business owners with contracts, commercial and loan agreements, shareholder matters, and buying or selling a business. The aim is to get agreements right before problems start.",
    href: "/commercial-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Property Law",
    description:
      "Our property lawyers in Melbourne advise on buying, selling and leasing property, contract review and conveyancing. We also help with property disputes and with sale and purchase settlements.",
    href: "/property-lawyers-melbourne",
    ctaText: "Learn More",
  },
  {
    title: "Civil Law",
    description:
      "Our civil lawyers in Melbourne act in civil disputes, including contract disputes, debt recovery and debt disputes, legal notices and negotiation. We prepare the documents, and we guide you through court processes if a matter goes that far.",
    href: "/civil-lawyers-melbourne",
    ctaText: "Learn More",
  },
];

const whyChoosePoints = [
  "Clear, practical advice",
  "Six areas of law under one roof",
  "Careful checks of documents and deadlines",
  "Honest explanations of your options",
  "Sensitive matters handled with care",
  "A Melbourne-based team",
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
      "Tell us briefly what's happening, by phone, email or the enquiry form.",
  },
  {
    title: "2. Consultation and Review",
    description:
      "We go through your situation, your documents and any deadlines.",
  },
  {
    title: "3. Clear Legal Advice",
    description:
      "We explain your options and what could happen next.",
  },
  {
    title: "4. Preparation and Support",
    description:
      "If you go ahead, we help with applications, responses, contracts, notices, negotiations or court documents.",
  },
];

const homepageFaqs = [
  {
    question: "How much does a legal consultation cost?",
    answer:
      "It depends on the type of matter and how much work is involved. When you book, our team will tell you the consultation fee up front. If you decide to go ahead, we'll explain how costs are likely to work before we start, so there are no surprises.",
  },
  {
    question: "Can I have a consultation online or by phone?",
    answer:
      "Yes. If you can't get to the office, or you're interstate or overseas, you can book a phone or video consultation. Just tell us which you'd prefer when you get in touch.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "You tell us what's happened, and we go through any documents you have. Then we set out your options, any time limits that apply and what the next steps could be. You'll leave knowing where you stand, and it's up to you whether to go ahead with us.",
  },
  {
    question: "What documents should I bring?",
    answer:
      "It depends on the matter, but bring anything connected to it. That might be letters or notices, visa decision records, court or police paperwork, contracts, agreements or ID. If you're not sure, bring what you have and we'll tell you what else we need.",
  },
  {
    question: "How long will my legal matter take?",
    answer:
      "It varies a lot. A contract review might take a few days, while a court matter, a property settlement or an ART review can take months. Once we've looked at your situation we'll give you a realistic estimate, and we'll tell you if anything changes.",
  },
  {
    question: "Are there deadlines I need to worry about?",
    answer:
      "Often, yes. Time limits can apply to ART reviews, court dates, notices and other legal steps, and some are short. If you've just received a decision or a document, it's worth getting advice straight away.",
  },
  {
    question: "What if my matter involves more than one area of law?",
    answer:
      "That happens a lot. A separation can affect a visa, and a business dispute can involve property. Because our team works across several areas of law, we can look at the whole picture instead of one issue at a time.",
  },
  {
    question: "What if I'm not sure which type of lawyer I need?",
    answer:
      "That's fine. Tell us briefly what's happened when you get in touch, and we'll point you to the right person on our team. You don't need to work out the legal category before you call.",
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
            <h2>Legal Help That Starts With Clear Advice</h2>
            <p style={{ fontSize: "1.12rem", lineHeight: "1.75", color: "var(--ink)" }}>
              When you&apos;re dealing with a legal problem, the first thing you need is a straight answer. We help you understand where you stand, what your options are and what could happen next, before you commit to anything.
            </p>
            <p style={{ marginTop: "1rem", color: "var(--ink-secondary)", fontSize: "1.05rem", lineHeight: "1.7" }}>
              We act for people in Melbourne on personal, family and business matters. Every matter gets proper attention, and we keep you updated in plain terms.
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
          title="Our Legal Services"
          intro="We work across six areas of law for individuals, families, migrants, professionals and business owners."
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
          title="Why Clients Choose Us"
          imageSrc="/images/melbourne-legal-chambers.webp"
          imageAlt="Bansal Lawyers Executive Legal Consultation Suite in Melbourne CBD"
          body={
            <>
              <p>
                People come to us because we explain things simply. We look at the facts, tell you about the risks, and help you decide what to do next. No jargon and no pressure.
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
        <SectionHeader
          title="Who We Help"
          intro="Our clients range from students and young families to professionals and business owners. Some come to us with a routine matter and others with something urgent. Either way, we'll explain how the process works and what to do first."
        />
        <ul className="who-we-help-chips" aria-label="Client Groups We Help">
          {whoWeHelpClients.map((client) => (
            <li key={client} className="who-we-help-chip">
              {client}
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. Process Section */}
      <Section tone="white">
        <SectionHeader
          title="How the Process Works"
          intro="It's a simple process, and you'll know where your matter stands at each step."
        />
        <ProcessSteps items={processSteps} />
      </Section>

      {/* 7. Urgent Advice CTA Section */}
      <CtaSection
        title="Need Legal Advice Before Taking the Next Step?"
        text="Some legal matters run on strict time limits. Visa refusals, court dates, police matters, family violence issues, contract disputes and property settlement dates shouldn't wait. If you're not sure what to do, talk to us early. It's far easier to deal with a problem before a deadline than after one."
        action={{ label: "Book a Consultation", href: "/contact" }}
      />

      {/* 8. FAQ Section */}
      <Section tone="warm" id="faq">
        <Faq
          items={homepageFaqs}
          title="Frequently Asked Questions"
          subtitle="Quick answers to what people usually ask before they book."
          contactTitle="Have a specific question about your legal matter?"
          contactButtonLabel="Speak With Our Team"
          contactHref="/contact"
        />
      </Section>
    </>
  );
}
