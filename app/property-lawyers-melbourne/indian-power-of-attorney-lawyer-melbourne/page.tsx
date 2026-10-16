import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo";
import {
  Breadcrumbs,
  Container,
  CtaSection,
  Faq,
  Hero,
  Section,
  SectionHeader,
  TrustBar,
} from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createFaqSchema, createLegalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Indian Power of Attorney Lawyer Melbourne | POA for Use in India",
  description:
    "Bansal Lawyers helps clients in Melbourne draft and review a power of attorney for use in India, including property, banking and one-off transactions, and refers you to a notary public for signing.",
  path: "/property-lawyers-melbourne/indian-power-of-attorney-lawyer-melbourne",
  keywords: [
    "Indian Power of Attorney Melbourne",
    "Power of Attorney for India from Australia",
    "NRI Power of Attorney Melbourne",
    "POA for Property in India",
    "Special Power of Attorney India Melbourne",
    "Power of Attorney Drafting Melbourne",
    "Indian POA Lawyer Melbourne",
  ],
});

const poaSituations = [
  "Sale, purchase or gift of a named property in India",
  "Managing, leasing or maintaining property while you are in Australia",
  "Mutation, possession or other land-record steps with a local authority",
  "Operating or closing an NRI or resident bank account in India",
  "Signing or collecting documents that you cannot attend in person",
  "A court, tribunal or authority appearance through an appointed person",
  "A one-off transaction that should be limited to a specific act",
  "Replacing or revoking an existing power of attorney",
];

const afterNotarySteps = [
  {
    title: "Apostille in Australia",
    text: "The notarised original is lodged with the Department of Foreign Affairs and Trade. DFAT checks the notary’s signature and seal and attaches an apostille to the document. India and Australia are both parties to the Hague Apostille Convention, so an apostille is the Australian legalisation step. The Indian Ministry of External Affairs says a document apostilled by a member country should not need a further consular attestation. A bank or local office can still ask for something more, so that should be checked against what the receiving authority wants.",
  },
  {
    title: "Send the original to India",
    text: "The attorney in India needs the apostilled original, not a scan. Keep a copy in Australia. The three-month stamping period below runs from when the original is first received in India, so the date it arrives matters.",
  },
  {
    title: "Stamp duty in India",
    text: "A power of attorney signed only outside India can be stamped within three months after it is first received in India. In practice the attorney, or a local adviser, presents it for adjudication and pays the duty assessed. The amount depends on the state and on whether the power is general or authorises a dealing with immovable property. If it is presented after three months, the authority may refuse to treat it as duly stamped, and a penalty can apply.",
  },
  {
    title: "Registration, where the power requires it",
    text: "Not every power of attorney has to be registered. A power that creates, assigns or extinguishes a right in immovable property generally must be registered with the Sub-Registrar for the area where the property is. The attorney presents it in India. You do not have to travel for that appointment. A narrower authority, such as permission to present one document, is not always treated the same way.",
  },
  {
    title: "The attorney then uses the power",
    text: "Once the document has been accepted, the attorney can do only what it authorises: sign a sale or gift deed, deal with a bank, or attend an authority. The power of attorney is not itself the sale or the transfer. Those later documents have their own stamp duty and registration requirements.",
  },
];

const helpPoints = [
  "What you need done in India, and whether a general or special power of attorney is suitable",
  "The property, account or matter the document must identify",
  "Who the attorney will be, and what they are and are not authorised to do",
  "Whether the power should be limited by time, purpose or a single transaction",
  "How the document should be signed in Australia so an authority in India is more likely to accept it",
  "That signing before a notary public is arranged with a notary outside the firm, followed by a DFAT apostille",
  "That stamping, adjudication and, where the law requires it, registration are completed in India and depend on the state and the receiving office",
];

const poaFaqs = [
  {
    question: "Can Bansal Lawyers prepare a power of attorney for use in India?",
    answer:
      "Yes. We help clients in Melbourne draft or review a power of attorney intended for use in India. What the document should say depends on the transaction, the person you are appointing, and the office in India that will rely on it. We are not a notary public. Where the document must be signed before a notary, we refer you to one.",
  },
  {
    question: "What is the difference between a general and a special power of attorney?",
    answer:
      "A general power of attorney gives broader authority to manage affairs. A special, or specific, power of attorney is limited to a named act, such as selling one property or operating one account. A narrower document is often easier for a buyer, bank or registrar to accept, and it limits what the attorney can do.",
  },
  {
    question: "Does a power of attorney transfer my property in India?",
    answer:
      "No. A power of attorney authorises someone to act for you. It does not itself transfer title. Where land is being sold or gifted, the attorney uses the power to sign the transaction documents. Those documents, and any registration they require, are separate from the power of attorney.",
  },
  {
    question: "Do you notarize the power of attorney?",
    answer:
      "No. Bansal Lawyers is not a notary public. For use in India, the document is commonly signed before a notary public and then apostilled by the Department of Foreign Affairs and Trade. We prepare or review the document, explain that signing step, and refer you to a notary public to complete it. Some banks and local offices still ask for a particular form of attestation, so we check the purpose of the document before you attend the notary.",
  },
  {
    question: "Does the power of attorney also need to be stamped or registered in India?",
    answer:
      "Often, yes. An instrument executed outside India may need to be stamped or adjudicated after it arrives in India, and a power that deals with immovable property may need to be registered. The rules differ by state and by the type of power. We explain what usually still has to happen in India so your attorney or local adviser can complete those steps.",
  },
  {
    question: "What should I bring to the appointment?",
    answer:
      "Photo identification, the full names and addresses of you and the person you are appointing, and the details of the property, account or matter. If you already have a draft from India, or a list of powers a bank or buyer has asked for, bring that as well.",
  },
];

export default function IndianPowerOfAttorneyLawyerMelbournePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne" },
    { label: "Indian Power of Attorney" },
  ];

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={createFaqSchema(poaFaqs)} />

      <Breadcrumbs items={breadcrumbs} />

      <Hero
        eyebrow="Bansal Lawyers · Melbourne"
        title="Indian Power of Attorney Lawyer Melbourne"
        intro={
          <>
            <p>
              If you live in Australia and need someone in India to sign, manage or attend to a matter
              for you, the document has to be drafted for that purpose and executed in a form an Indian
              authority is likely to accept.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              Bansal Lawyers helps clients in Melbourne draft and review a power of attorney for use in
              India. Where it must be signed before a notary public, we refer you to one. We also explain
              the apostille and India-side steps that usually follow.
            </p>
          </>
        }
        primaryAction={{ label: "Speak With a Lawyer", href: "tel:+61422905860" }}
        secondaryAction={{ label: "Book a Consultation", href: "/contact/" }}
      />

      <TrustBar
        items={[
          "Property, Banking and One-Off Powers",
          "Drafted for the Transaction in India",
          "Referral to a Notary Public",
          "English, Hindi and Punjabi",
        ]}
      />

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">For Use in India</span>
            <h2>A Power of Attorney Prepared in Melbourne</h2>
            <p style={{ fontSize: "1.08rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A power of attorney lets you appoint a person in India to do specified acts on your behalf.
              Clients usually need one because they cannot travel for a property sale, a bank requirement,
              a land-record step, or a document that must be signed in person.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The useful document is the one that matches the transaction. A broad power can be rejected,
              or it can authorise more than you intended. A special power that names the property, the
              account or the act is often what a buyer, bank or sub-registrar asks to see.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              We take instructions in Melbourne and draft or review the power. We are not a notary public.
              If the document needs to be signed before a notary, we refer you to one. Consultations are
              available in English, Hindi and Punjabi. Stamping, adjudication and
              registration, where they are required, are completed in India and depend on the state and
              the office that will rely on the document.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <SectionHeader
            eyebrow="How We Can Help"
            title="Indian Power of Attorney Matters We Assist With"
            intro="We prepare powers of attorney for clients in Melbourne who need someone in India to act for them, including:"
          />
          <div className="matters-grid">
            {poaSituations.map((item) => (
              <div key={item} className="matter-item">
                <svg className="matter-item__icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">What We Check</span>
            <h2>What We Look at Before the Document Is Signed</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Before a power is finalised, we work through the instructions that decide its wording:
            </p>
            <ul className="points-list" style={{ marginTop: "1rem" }}>
              {helpPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              If a bank, buyer or relative in India has already sent a draft, we review it against what
              you actually want the attorney to do. Signing a draft you have not read is a common source
              of delay, because the receiving office then asks for a fresh document.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">After the Notary</span>
            <h2>What Happens After Notarisation</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              Signing before a notary public is one step. Bansal Lawyers does not notarize the document
              and does not carry out the steps below. We explain which of them usually apply, refer you
              to a notary for the signing, and leave the India-side steps to the attorney or a local
              adviser.
            </p>
            <ol className="points-list" style={{ marginTop: "1.25rem", paddingLeft: "1.25rem" }}>
              {afterNotarySteps.map((step) => (
                <li key={step.title} style={{ marginTop: "1rem" }}>
                  <strong>{step.title}.</strong> {step.text}
                </li>
              ))}
            </ol>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "1.25rem" }}>
              We do not lodge the apostille, and we do not stamp or register the document in India.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            <span className="eyebrow">Limits</span>
            <h2>What a Power of Attorney Does Not Do</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink)", marginTop: "1rem" }}>
              A power of attorney is authority to act. It is not a sale deed, a gift deed or a transfer of
              title. Indian courts have treated a power, even with a sale agreement and a will, as
              insufficient by itself to convey ownership of land. If the aim is to sell or gift property,
              the attorney must still complete the transaction documents that the law requires.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              The power should also be no wider than the job. Authority to sell one flat should not be
              drafted as authority to deal with every asset you own. You can revoke a power, but
              revocation has to be communicated to the attorney and, where the power has been relied on,
              to the people who may act on it.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--ink-secondary)", marginTop: "0.75rem" }}>
              This page is about a power of attorney prepared in Australia for use in India. It is separate
              from an Australian enduring power of attorney under Victorian law. If you need both, we can
              explain which document does which job.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              Related property work is covered on our{" "}
              <Link href="/property-lawyers-melbourne/property-transfer-lawyer-melbourne/">
                property transfer
              </Link>{" "}
              and{" "}
              <Link href="/property-lawyers-melbourne/">property lawyers</Link> pages.
            </p>
          </div>
        </Container>
      </Section>

      <CtaSection
        title="Speak With Us About an Indian Power of Attorney"
        text="Before you sign a draft sent from India, or appoint someone to sell, manage or attend to a matter for you, speak with us about the wording. If a notary public is required, we will refer you to one, and we will explain what still has to be done in India."
        action={{ label: "Book a Consultation", href: "/contact" }}
        secondaryAction={{
          label: "Speak With Our Property Law Team",
          href: "tel:+61422905860",
        }}
        phone="1300 226 725"
        phoneLabel="Direct Property Solicitor"
        badges={["Drafted around the transaction", "Referral to a notary public", "English, Hindi and Punjabi"]}
      />

      <Section tone="warm" id="faqs">
        <Faq items={poaFaqs} />
      </Section>
    </>
  );
}
