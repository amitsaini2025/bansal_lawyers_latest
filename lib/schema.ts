import { businessDetails, siteUrl } from "@/lib/site";
import type { BreadcrumbItem, FaqItem } from "@/types/content";

export function createLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LawFirm", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: businessDetails.name,
    url: siteUrl,
    telephone: businessDetails.phone,
    email: businessDetails.email,
    priceRange: "$$",
    image: `${siteUrl}/images/logo.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessDetails.streetAddress,
      addressLocality: businessDetails.addressLocality,
      addressRegion: businessDetails.addressRegion,
      postalCode: businessDetails.postalCode,
      addressCountry: businessDetails.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-37.8164",
      longitude: "144.9650",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Melbourne",
      },
      {
        "@type": "AdministrativeArea",
        name: "Victoria",
      },
      {
        "@type": "Country",
        name: "Australia",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessDetails.phone,
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: ["English", "Hindi", "Punjabi"],
      },
      {
        "@type": "ContactPoint",
        telephone: businessDetails.nationalLine,
        contactType: "toll-free",
        areaServed: "AU",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61562008576642",
      "https://www.instagram.com/bansallawyers",
      "https://www.linkedin.com/company/bansallawyers",
      "https://twitter.com/BansalLawyers",
      "https://www.youtube.com/@BansalLawyers",
    ],
  };
}

export function createContactPageSchema() {
  const contactUrl = `${siteUrl}/contact`;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": contactUrl,
    url: contactUrl,
    name: "Contact Bansal Lawyers | Melbourne Lawyers on Collins Street",
    description:
      "Contact Bansal Lawyers in Melbourne CBD for legal support in migration, family, criminal, commercial, business, property, and conveyancing matters. Call 0422 905 860 or book a consultation.",
    mainEntity: createLegalServiceSchema(),
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? new URL(item.href, siteUrl).toString() : undefined,
    })),
  };
}

export function createFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.answer === "string" ? item.answer : "[Answer text goes here]",
      },
    })),
  };
}

export function createArticleSchema({
  title,
  description,
  path,
  datePublished = "2026-01-01",
  dateModified = "2026-01-01",
  authorName = "[Author name goes here]",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url: url,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Bansal Lawyers",
      url: siteUrl,
    },
  };
}

export function createCollectionPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    url: url,
    name: title,
    description: description,
    publisher: {
      "@type": "LawFirm",
      name: businessDetails.name,
      url: siteUrl,
    },
  };
}

export function createCaseUpdateSchema({
  headline,
  description,
  path,
  datePublished = "2025-08-23",
  dateModified = "2025-08-23",
  articleSection = "Immigration Law",
}: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  articleSection?: string;
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headline,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified,
    articleSection: articleSection,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url: url,
    author: {
      "@type": "LawFirm",
      name: "Bansal Lawyers",
      url: siteUrl,
    },
    publisher: {
      "@type": "LawFirm",
      name: "Bansal Lawyers",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
    },
  };
}

export function createAboutPageSchema() {
  const aboutUrl = `${siteUrl}/about`;

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": aboutUrl,
    url: aboutUrl,
    name: "About Bansal Lawyers | Trusted Law Firm in Melbourne",
    description:
      "Learn about Bansal Lawyers, a Melbourne law firm led by Ajay Bansal, providing legal services in immigration, family, criminal, commercial and property law.",
    mainEntity: {
      "@type": "LawFirm",
      name: "Bansal Lawyers",
      url: siteUrl,
      founder: {
        "@type": "Person",
        name: "Ajay Bansal",
        jobTitle: "Director & Principal Lawyer",
      },
      employee: [
        {
          "@type": "Person",
          name: "Ajay Bansal",
          jobTitle: "Director & Principal Lawyer",
        },
        {
          "@type": "Person",
          name: "Michael Saleh",
          jobTitle: "Solicitor",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Level 8, 278 Collins Street",
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        postalCode: "3000",
        addressCountry: "AU",
      },
      telephone: "0422 905 860",
    },
  };
}

