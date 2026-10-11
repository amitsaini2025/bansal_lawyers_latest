import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui";
import { StructuredData } from "@/components/seo";
import { PractitionerProfile } from "@/components/team/PractitionerProfile";
import { createMetadata } from "@/lib/metadata";
import { createBreadcrumbSchema, createLegalServiceSchema } from "@/lib/schema";
import { businessDetails, siteUrl } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Ajay Bansal | Director & Principal Lawyer | Bansal Lawyers Melbourne",
  description: "Profile of Ajay Bansal, founding Director & Principal Lawyer at Bansal Lawyers Melbourne. 7 years of experience in immigration, family, property, commercial, criminal and civil law.",
  path: "/about/ajay-bansal",
  keywords: ["Ajay Bansal", "Ajay Bansal Lawyer Melbourne", "Principal Lawyer Bansal Lawyers", "Immigration Lawyer Ajay Bansal", "Melbourne Solicitor Ajay Bansal", "Bansal Lawyers Director"],
});

export default function AjayBansalProfilePage() {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Ajay Bansal" }];
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/about/ajay-bansal#person`,
    name: "Ajay Bansal",
    url: `${siteUrl}/about/ajay-bansal`,
    image: `${siteUrl}/images/team/ajay-bansal-director.webp`,
    jobTitle: "Director & Principal Lawyer",
    worksFor: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: businessDetails.streetAddress,
      addressLocality: businessDetails.addressLocality,
      addressRegion: businessDetails.addressRegion,
      postalCode: businessDetails.postalCode,
      addressCountry: "AU",
    },
    telephone: businessDetails.nationalLine,
    email: businessDetails.email,
    knowsLanguage: ["English", "Hindi", "Punjabi"],
    description: "Founding Director with 7 years of experience in Australia across immigration, family, property, commercial, criminal and civil law.",
  };

  return (
    <>
      <StructuredData data={createLegalServiceSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <StructuredData data={personSchema} />
      <Breadcrumbs items={breadcrumbs} />
      <PractitionerProfile
        name="Ajay Bansal"
        role="Director & Principal Lawyer"
        image="/images/team/ajay-bansal-director.webp"
        imageAlt="Ajay Bansal - Director & Principal Lawyer at Bansal Lawyers Melbourne"
        summary="Founding Director with 7 years of experience across immigration, family, property, commercial, criminal and civil law."
        credentials={[
          { label: "Experience", value: "7 years of experience" },
          { label: "Location", value: "Melbourne CBD" },
          { label: "Languages", value: "English, Hindi, Punjabi" },
          { label: "Consultations", value: "In-person and virtual" },
        ]}
        trustItems={["7 Years of Experience", "Victorian & Federal Court Advocacy", "Multidisciplinary Strategic Guidance", "Melbourne CBD & Virtual Consultations"]}
        biography={[
          "Ajay Bansal is the founding Director of Bansal Lawyers. He brings 7 years of experience to the firm and has worked with clients across a wide range of legal matters throughout Australia.",
          "His work covers immigration law, family law, property law, commercial law, criminal law, and civil matters. Over the years, he has assisted hundreds of clients with legal issues involving visas, family disputes, business transactions, property settlements, criminal charges, and other critical legal concerns.",
          "Ajay’s approach is straightforward. He focuses on understanding the client’s situation, explaining the legal position clearly, and helping the client make informed decisions without ambiguity or delay.",
        ]}
        focusAreas={[
          { title: "Immigration law", description: "Visa applications, refusals, cancellations, NOICC responses, and ART appeals." },
          { title: "Family law", description: "Separation, parenting arrangements, property settlement, and family violence matters." },
          { title: "Commercial & property law", description: "Business matters, contracts, transactions, property advice, and disputes." },
          { title: "Criminal & civil matters", description: "Criminal charges, civil disputes, evidence preparation, and representation." },
        ]}
        ctaText="Schedule a Consultation With Ajay Bansal"
      />
    </>
  );
}
