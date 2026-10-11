import { businessDetails, siteUrl } from "@/lib/site";
import type { BreadcrumbItem, FaqItem } from "@/types/content";

export function createLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LawFirm", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: businessDetails.name,
    alternateName: "Bansal Lawyers Melbourne",
    description:
      "Melbourne law firm at Level 8/278 Collins St, Melbourne VIC 3000 providing strategic legal representation in Australian immigration law, ART appeals, family law, criminal defence, commercial law, property & conveyancing, and civil litigation.",
    url: siteUrl,
    telephone: businessDetails.nationalLine,
    email: businessDetails.email,
    priceRange: "$$",
    image: `${siteUrl}/images/logo.webp`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo.webp`,
    },
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
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Level+8%2F278+Collins+St+Melbourne+VIC+3000",
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
    knowsAbout: [
      "Australian Immigration Law",
      "Administrative Review Tribunal (ART) Appeals",
      "Visa Refusals and Visa Cancellations (s56, s57, s116, s501)",
      "Family Law, Divorce, Parenting Orders and Property Settlement",
      "Criminal Defence and Magistrates' Court Representation",
      "Commercial Law, Business Contracts and Shareholder Agreements",
      "Property Law, Conveyancing and Retail/Commercial Leases",
      "Civil Litigation and VCAT/Court Dispute Resolution",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessDetails.nationalLine,
        contactType: "customer service",
        areaServed: "AU",
        availableLanguage: ["English", "Hindi", "Punjabi"],
      },
      {
        "@type": "ContactPoint",
        telephone: businessDetails.phone,
        contactType: "Direct Solicitor Line",
        areaServed: "AU",
        availableLanguage: ["English", "Hindi", "Punjabi"],
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
        opens: "10:00",
        closes: "18:00",
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
    "@id": `${contactUrl}#webpage`,
    url: contactUrl,
    name: "Contact Bansal Lawyers | Melbourne Lawyers on Collins Street",
    description:
      "Contact Bansal Lawyers at Level 8/278 Collins St, Melbourne VIC 3000 for legal support in migration, family, criminal, commercial, property, and civil matters. Call 1300 226 725 or book a consultation.",
    inLanguage: "en-AU",
    mainEntity: {
      "@id": `${siteUrl}/#organization`,
    },
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
  authorName = "Ajay Bansal",
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
    image: `${siteUrl}/images/logo.webp`,
    inLanguage: "en-AU",
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
      url: `${siteUrl}/about/ajay-bansal`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
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
    "@id": `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    inLanguage: "en-AU",
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: businessDetails.name,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
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
    image: `${siteUrl}/images/logo.webp`,
    inLanguage: "en-AU",
    datePublished: datePublished,
    dateModified: dateModified,
    articleSection: articleSection,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url: url,
    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };
}

export function createAboutPageSchema() {
  const aboutUrl = `${siteUrl}/about`;

  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${aboutUrl}#webpage`,
    url: aboutUrl,
    name: "About Bansal Lawyers | Trusted Law Firm in Melbourne",
    description:
      "Learn about Bansal Lawyers, a Melbourne law firm led by Ajay Bansal at Level 8/278 Collins St, providing legal services in immigration, family, criminal, commercial, property and civil law.",
    inLanguage: "en-AU",
    mainEntity: {
      "@type": ["LegalService", "LawFirm", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Bansal Lawyers",
      url: siteUrl,
      image: `${siteUrl}/images/logo.webp`,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.webp`,
      },
      priceRange: "$$",
      telephone: businessDetails.nationalLine,
      email: businessDetails.email,
      founder: {
        "@type": "Person",
        name: "Ajay Bansal",
        jobTitle: "Director & Principal Lawyer",
        url: `${siteUrl}/about/ajay-bansal`,
      },
      employee: [
        {
          "@type": "Person",
          name: "Ajay Bansal",
          jobTitle: "Director & Principal Lawyer",
          url: `${siteUrl}/about/ajay-bansal`,
        },
        {
          "@type": "Person",
          name: "Michael Saleh",
          jobTitle: "Solicitor",
          url: `${siteUrl}/about/michael-saleh`,
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: businessDetails.streetAddress,
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        postalCode: "3000",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-37.8164",
        longitude: "144.9650",
      },
    },
  };
}

