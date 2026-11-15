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
  TrustBar,
} from "@/components/ui";
import { getTurnstileSiteKey } from "@/lib/booking/turnstile";
import { createMetadata } from "@/lib/metadata";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createLegalServiceSchema,
} from "@/lib/schema";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { businessDetails } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Wills Lawyers Melbourne | Australia & India",
  description:
    "Melbourne lawyers for wills covering assets in Australia and India, Victorian and Indian powers of attorney, and contested wills or family provision claims.",
  path: "/wills-lawyers-melbourne",
  keywords: [
    "Wills Lawyers Melbourne",
    "Will for Assets in India",
    "Estate Lawyers Melbourne",
    "Family Provision Claim Victoria",
    "Enduring Power of Attorney Melbourne",
    "Indian Power of Attorney Melbourne",
  ],
});

const willPoints = [
  "A will for assets held in Australia",
  "A separate will for land and other property in India, drafted so it does not revoke the Australian will",
  "Appointing an executor in Australia, and an executor who can deal with the Indian estate",
  "Guardianship wishes for children under 18",
  "Updating a will after marriage, divorce, a new property, or a death in the family",
  "Reviewing a will prepared overseas before you rely on it here",
];

const poaPoints = [
  "An enduring power of attorney under the Powers of Attorney Act 2014 (Vic), for financial and personal decisions",
  "An appointment of a medical treatment decision maker for health decisions in Victoria",
  "An Indian power of attorney when someone in India must sell, lease or manage property for you",
  "Checking that an Australian power of attorney is not being asked to do a job only an Indian document can do",
];

const willsFaqs = [
  {
    question: "Do I need a separate will for property in India?",
    answer:
      "Often, yes, if you own land or other immovable property in India. That property is dealt with under the law of the place where it sits. A will signed only in Melbourne is not always the document an Indian registry, bank or court will act on. A later will made in India can also revoke your Australian will if the revocation clause is too wide. We draft the two wills so each one covers the assets it is meant to cover.",
  },
  {
    question: "Does an Australian power of attorney work in India?",
    answer:
      "Usually, no. An enduring power of attorney made in Victoria appoints someone to make decisions under Victorian law. If a relative needs to sign, sell or manage property in India, the document is generally an Indian power of attorney, prepared for that transaction and completed with the notarisation and India-side steps the receiving office expects.",
  },
  {
    question: "Who can challenge a will in Victoria?",
    answer:
      "Certain family members and dependants can ask the Supreme Court of Victoria for further provision from an estate under Part IV of the Administration and Probate Act 1958. The application is generally due within six months of the grant of probate. Who can apply, and what the court looks at, depends on the relationship and the estate.",
  },
  {
    question: "What should I bring to a will appointment?",
    answer:
      "A list of assets in Australia and in India, the names and addresses of the people you want to appoint and provide for, and any current will or power of attorney. If a bank or relative in India has sent a draft, bring that as well.",
  },
];

export default function WillsLawyersMelbournePage() {
  const turnstileSiteKey = getTurnstileSiteKey();
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Wills Lawyers Melbourne" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(willsFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Wills Lawyers in Melbourne"
        intro={
          <>
            <p>
              A will is the document that says who receives your property, and who has the job of collecting it, when you die. If you live in Melbourne and still own assets in India, one will is not always enough.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers drafts wills for assets in Australia, coordinates a separate will for property in India, and prepares the powers of attorney you may need while you are alive. Advice is available in English, Hindi and Punjabi.
            </p>
          </>
        }
        primaryAction={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: `Call ${businessDetails.phone}`, href: businessDetails.phoneTel }}
        aside={<HeroBookingPlaceholder defaultPracticeArea="other" turnstileSiteKey={turnstileSiteKey} />}
      />

      <TrustBar
        items={[
          "Wills for Australia and India",
          "Victorian Powers of Attorney",
          "Family Provision Claims",
          "English, Hindi and Punjabi",
        ]}
      />

      <Section tone="white">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>A Will Made for the Property You Actually Hold</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            In Victoria, a will generally has to be in writing, signed by you, and witnessed by two people who are present at the same time. Those formalities come from the Wills Act 1997 (Vic). A document that does not meet them can fail, or it can force your family into a court application just to have it recognised.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Marriage can revoke a will made beforehand. Divorce can cancel gifts to a former spouse and their appointment as executor. A will that still names the wrong people, or that ignores a property bought later, is a common reason estates become disputes.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We take instructions on the assets, the people you want to provide for, and who should be executor. The matters we draft for include:
          </p>
          <ul className="points-list" style={{ marginTop: "1rem" }}>
            {willPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="warm" id="australia-and-india">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">Two Countries</span>
          <h2>Wills for Assets in Australia and India</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            Land and other immovable property are dealt with under the law of the place where the property is. A flat, a house or farmland in India is not treated the same way as money in an Australian bank account. A single Australian will can cover your Australian estate. For the Indian property, a separate will that meets Indian formalities is often the document a sub-registrar, a bank or a court will accept.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            The two wills have to be drafted together. A later will that says it revokes all earlier wills can wipe out the Australian will without anyone noticing. Each document should say which assets it covers, and that it does not revoke the will made for the other country.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Succession rules in India are not the same for every religion. What a Hindu, Sikh, Christian or Muslim testator can leave, and to whom, can differ. We ask about that before anything is drafted. Probate or other authority steps in India depend on the city, the asset and the personal law that applies. We explain which of those steps usually remain for your executor in India.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            Clients from the Indian community can also read how this work sits alongside family and business matters on our{" "}
            <Link href="/indian-lawyers-melbourne/">Indian lawyers in Melbourne</Link> page.
          </p>
        </div>
      </Section>

      <Section tone="white" id="powers-of-attorney">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <h2>Powers of Attorney</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A will does nothing while you are alive. If you want someone to deal with a bank, a property or a decision if you cannot, that authority is a power of attorney, or a medical appointment, made now.
          </p>
          <ul className="points-list" style={{ marginTop: "1rem" }}>
            {poaPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1rem" }}>
            Bansal Lawyers is not a notary public. Where an Indian power of attorney must be signed before a notary, we refer you to one. The signing, apostille and India-side stamping steps are set out on our{" "}
            <Link href="/property-lawyers-melbourne/indian-power-of-attorney-lawyer-melbourne/">
              Indian power of attorney
            </Link>{" "}
            page.
          </p>
        </div>
      </Section>

      <Section tone="warm" id="contested-wills">
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <span className="eyebrow">After a Death</span>
          <h2>Contested Wills and Family Provision Claims</h2>
          <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
            A will can still be challenged after it is signed. In Victoria, eligible people can apply to the Supreme Court for further provision from an estate under Part IV of the Administration and Probate Act 1958. The claim is not a request to rewrite the will from scratch. The court looks at the relationship, the needs of the applicant, and the size of the estate.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            The usual time limit is six months from the grant of probate or letters of administration. Waiting until the estate has been distributed makes the claim harder. If you have been left out, or if you are an executor who has received a challenge, get advice before that date passes.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
            We also advise executors on the practical steps: finding the will, identifying the assets in Australia and overseas, and responding to a family member who says the will is unfair or was not properly signed.
          </p>
        </div>
      </Section>

      <CtaSection
        title="Talk to a Lawyer About Your Will"
        text="Bring a list of what you own in Australia and in India. We will tell you whether you need one will or two, and which powers of attorney fit."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{ label: `Call ${businessDetails.phone}`, href: businessDetails.phoneTel }}
        phone="1300 226 725"
        phoneLabel="Call the Office"
        badges={[
          "Collins Street office and online consultations",
          "Wills drafted so they do not revoke each other",
          "English, Hindi and Punjabi",
        ]}
      />

      <RelatedServices
        heading="Related services"
        intro="A will often sits next to other family, property and India-related documents. These are the pages clients usually need alongside estate planning."
        links={[
          {
            title: "Indian Power of Attorney Lawyer Melbourne",
            href: "/property-lawyers-melbourne/indian-power-of-attorney-lawyer-melbourne/",
            description: "A power of attorney signed in Melbourne for property or other matters in India.",
          },
          {
            title: "Binding Financial Agreement Lawyer Melbourne",
            href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
            description: "Financial agreements that can change what a will, or the family law rules, would otherwise do.",
          },
          {
            title: "Property Settlement Lawyer Melbourne",
            href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
            description: "Separating the asset pool before a will is updated, or after a relationship ends.",
          },
          {
            title: "Indian Lawyers Melbourne",
            href: "/indian-lawyers-melbourne/",
            description: "How wills, property and family matters are handled for clients with ties to India.",
          },
        ]}
      />

      <Section tone="warm" id="faqs">
        <Faq
          items={willsFaqs}
          title="Frequently Asked Questions"
          subtitle="Common questions before a will or estate appointment."
          contactTitle="Need advice on a will or an estate?"
          contactButtonLabel="Book a Consultation"
          contactHref="/contact"
        />
      </Section>
    </>
  );
}
