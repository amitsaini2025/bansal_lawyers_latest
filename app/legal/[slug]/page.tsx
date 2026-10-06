import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/seo";
import { Breadcrumbs, CtaSection, Hero, Section } from "@/components/ui";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema } from "@/lib/schema";
import { businessDetails, policySlugs } from "@/lib/site";

type PolicySection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type PolicyPage = {
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  sections: PolicySection[];
};

const lastUpdated = "5 October 2026";

const policyPages: Record<(typeof policySlugs)[number], PolicyPage> = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Your privacy",
    intro: "How Bansal Lawyers collects, uses, stores and handles personal information.",
    description: "Bansal Lawyers privacy policy explaining how we handle personal information in connection with legal enquiries and our website.",
    sections: [
      { title: "Our commitment to privacy", paragraphs: [
        "Bansal Lawyers respects the privacy of people who contact us, use our website or engage us for legal services. This policy explains our usual approach to handling personal information in connection with our legal practice and website.",
        "We aim to handle personal information in accordance with applicable Australian privacy law, including the Privacy Act 1988 (Cth) where it applies. This policy does not limit any obligations of confidentiality owed to a client under professional rules or an engagement agreement.",
      ] },
      { title: "Personal information we may collect", paragraphs: ["The information we collect depends on how you interact with us and the legal matter involved. We collect information directly from you where practicable, including when you call, email, attend our office, submit an enquiry or provide documents during a legal matter."], items: [
        "contact details, such as your name, email address, telephone number and address;",
        "information about your enquiry, legal matter, relevant dates and documents you choose to provide;",
        "identity, financial, employment, family, health, immigration, criminal-history or other sensitive information where it is relevant to legal services and you provide it or authorise its collection; and",
        "limited technical information associated with an online enquiry, such as the request IP address and browser information, used to protect the website and prevent misuse.",
      ] },
      { title: "Why we collect and use information", items: [
        "responding to enquiries and arranging consultations;",
        "assessing whether and how we may assist with a legal matter, including conflict checks where appropriate;",
        "providing legal services, communicating with clients and maintaining matter records;",
        "meeting legal, regulatory, professional, accounting and risk-management obligations;",
        "protecting the security and integrity of our systems and website; and",
        "otherwise with your consent or as permitted or required by law.",
      ] },
      { title: "Disclosure of information", paragraphs: ["We do not sell personal information. We may disclose information where reasonably necessary for the purposes described above, with your authority, or where required or permitted by law."], items: [
        "courts, tribunals, government agencies, regulators, opposing parties or their representatives where necessary for your matter;",
        "professional advisers, expert witnesses, barristers, interpreters, service providers and other parties engaged for a legal matter;",
        "technology, communications, document-management, accounting and payment providers that help us operate our practice; and",
        "law-enforcement bodies or other parties where disclosure is required or authorised by law, or is necessary to address a serious risk.",
      ] },
      { title: "Storage, security and overseas handling", paragraphs: [
        "We take reasonable steps to protect personal information from misuse, interference, loss and unauthorised access, modification or disclosure. Safeguards include access controls, secure systems and procedures appropriate to the nature of the information we hold.",
        "Some service providers that support our communications or technology may store or process information outside Australia. Where this occurs, we take reasonable steps to use providers and arrangements appropriate to the information and applicable law. We cannot guarantee the security of information transmitted over the internet; please avoid sending highly sensitive documents through an unprotected channel unless we have asked you to do so securely.",
      ] },
      { title: "Access, correction and complaints", paragraphs: [
        "You may ask us for access to, or correction of, personal information we hold about you. We may need to verify your identity and may decline a request where the law permits. We will explain the reason if we cannot provide access or make a requested correction.",
        "If you have a privacy concern or complaint, please contact us using the details below. We will investigate and respond within a reasonable time. If you remain dissatisfied, you may be able to contact the Office of the Australian Information Commissioner.",
      ] },
      { title: "Contact us", paragraphs: [
        `For privacy requests or concerns, contact Bansal Lawyers at ${businessDetails.email}, call ${businessDetails.phone}, or write to ${businessDetails.address}.`,
        "We may update this policy when our practices or legal obligations change. The current version is published on this website.",
      ] },
    ],
  },
  terms: {
    title: "Terms of Service",
    eyebrow: "Website terms",
    intro: "The terms that apply to your use of the Bansal Lawyers website.",
    description: "Terms of service for use of the Bansal Lawyers website, including permitted use, intellectual property and jurisdiction.",
    sections: [
      { title: "Acceptance of these terms", paragraphs: [
        "These terms apply when you access or use this website. By continuing to use the website, you agree to these terms. If you do not agree, please do not use the website.",
        "These terms apply to the website only. Legal services are provided only under a separate written engagement or other agreement accepted by Bansal Lawyers.",
      ] },
      { title: "Permitted use", items: [
        "use the website lawfully and for personal or legitimate business purposes;",
        "not interfere with, damage, disrupt or gain unauthorised access to the website, its systems or other users' information;",
        "not use automated tools to scrape, harvest or reproduce website content except where permitted by law; and",
        "not submit information that is unlawful, misleading, infringing, malicious or harmful.",
      ] },
      { title: "Website information", paragraphs: [
        "We aim to keep website information accurate and current, but it is general information only and may not reflect legal developments or your circumstances. Content can change without notice. You should obtain advice tailored to your matter before acting or deciding not to act.",
        "The website may describe areas in which we can assist. It does not promise that we will accept a matter, achieve a particular outcome or be available at a particular time.",
      ] },
      { title: "Enquiries and communications", paragraphs: [
        "Submitting an online enquiry, calling us or emailing us does not create a solicitor-client relationship. Do not assume that Bansal Lawyers is acting for you until we have confirmed this in writing.",
        "Please do not send confidential or time-critical documents through the website unless we ask you to do so. If your matter has a deadline, court date or urgent safety issue, call the office directly and seek immediate assistance appropriate to the circumstances.",
      ] },
      { title: "Intellectual property and links", paragraphs: [
        "Unless stated otherwise, the website design, text, graphics, branding and other material are owned by or licensed to Bansal Lawyers. You may view, download or print content for personal, non-commercial reference only. You must not reproduce, adapt, distribute or commercially exploit website material without our prior written permission, except where permitted by law.",
        "This website may link to third-party websites for convenience. Bansal Lawyers does not control, endorse or accept responsibility for third-party content, availability or privacy practices.",
      ] },
      { title: "Liability and governing law", paragraphs: [
        "To the extent permitted by law, Bansal Lawyers excludes liability for loss arising from use of, or reliance on, this website or its content. Nothing in these terms excludes rights or remedies that cannot lawfully be excluded.",
        "These terms are governed by the laws of Victoria, Australia. The courts of Victoria and courts entitled to hear appeals from them have jurisdiction in connection with these terms.",
      ] },
      { title: "Changes and contact", paragraphs: ["We may update these terms from time to time by publishing a revised version on this website. If you have a question about the website or these terms, contact Bansal Lawyers using the details below."] },
    ],
  },
  disclaimer: {
    title: "Legal Disclaimer",
    eyebrow: "Important information",
    intro: "The limits of information published on the Bansal Lawyers website.",
    description: "Legal disclaimer for the Bansal Lawyers website. Website content is general information and is not legal advice.",
    sections: [
      { title: "General information only", paragraphs: [
        "The material on this website is provided for general information. It is not legal advice and is not intended to be a substitute for advice from a qualified lawyer about your particular circumstances.",
        "Law changes, facts matter and deadlines can be strict. Information may not be complete, current or applicable to your situation. You should obtain tailored legal advice before relying on website content or taking action.",
      ] },
      { title: "No solicitor-client relationship", paragraphs: [
        "Viewing this website, using a contact form, sending an email or speaking with a member of our team does not create a solicitor-client relationship. Bansal Lawyers acts for you only after we have confirmed our engagement and agreed the terms on which we will act.",
        "Until we confirm an engagement, we may be unable to treat information as confidential or act to protect a legal deadline. Do not delay seeking advice because you have submitted an enquiry.",
      ] },
      { title: "No guarantee of outcome", paragraphs: ["Legal outcomes depend on the facts, evidence, applicable law, decisions of courts and tribunals, and actions of other parties. Past matters, examples, testimonials or case summaries do not guarantee or predict a similar outcome in another matter."] },
      { title: "External material and communications", paragraphs: [
        "Links to third-party websites, legislation, agencies or other resources are included for convenience only. Bansal Lawyers does not control or endorse those resources and is not responsible for their content, availability or security.",
        "Email and internet communications may not be secure or error-free. Do not send sensitive documents or confidential information electronically unless we have provided an appropriate method or requested the information.",
      ] },
      { title: "Liability", paragraphs: ["To the extent permitted by law, Bansal Lawyers does not accept liability for loss arising from reliance on information published on this website. Nothing in this disclaimer excludes liability that cannot lawfully be excluded."] },
      { title: "Urgent matters", paragraphs: ["If you have an urgent legal issue, a court date, a statutory deadline or an immediate safety concern, contact the appropriate emergency service, court, government agency or lawyer without delay. You can contact Bansal Lawyers directly using the details below."] },
    ],
  },
};

type LegalPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = policyPages[slug as keyof typeof policyPages];
  if (!policy) return {};
  return createMetadata({ title: `${policy.title} | Bansal Lawyers`, description: policy.description, path: `/legal/${slug}` });
}

export default async function LegalPolicyPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const policy = policyPages[slug as keyof typeof policyPages];
  if (!policy) notFound();
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Legal information" }, { label: policy.title }];

  return <>
    <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
    <Breadcrumbs items={breadcrumbs} />
    <Hero compact eyebrow={policy.eyebrow} title={policy.title} intro={policy.intro} aside={<div className="policy-meta"><span>Australia</span><time dateTime="2026-10-05">Last updated: {lastUpdated}</time></div>} />
    <Section tone="warm"><article className="prose" aria-label={policy.title}>
      {policy.sections.map((section) => <section key={section.title}>
        <h2>{section.title}</h2>
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.items ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
      </section>)}
      <p>You can contact us by phone on <a href={businessDetails.phoneTel}>{businessDetails.phone}</a>, by email at <a href={businessDetails.emailMailto}>{businessDetails.email}</a>, or through our <Link href="/contact">contact page</Link>.</p>
    </article></Section>
    <CtaSection title="Need advice about a legal matter?" text="Contact Bansal Lawyers to discuss your circumstances with our Melbourne legal team." action={{ label: "Contact Bansal Lawyers", href: "/contact" }} secondaryAction={{ label: `Call ${businessDetails.phone}`, href: businessDetails.phoneTel }} />
  </>;
}
