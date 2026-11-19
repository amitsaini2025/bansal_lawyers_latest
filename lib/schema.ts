import { ajayBansalFaqSchemaEntities } from "@/lib/ajay-bansal-faqs";
import { businessDetails, siteUrl } from "@/lib/site";
import type { BreadcrumbItem, FaqItem } from "@/types/content";

const homeUrl = `${siteUrl}/`;
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const homeWebPageId = `${siteUrl}/#webpage`;
const homeFaqId = `${siteUrl}/#homepage-faq`;

export const HOME_PAGE_SCHEMA_TITLE =
  "Lawyers in Melbourne | Immigration, Family, Criminal & Commercial Law";
export const HOME_PAGE_SCHEMA_DESCRIPTION =
  "Explore immigration, family, criminal, commercial, property and civil law services from Bansal Lawyers in Melbourne.";

/** Canonical organization LegalService used across page JSON-LD graphs. */
function createOrganizationLegalService() {
  return {
    "@type": "LegalService" as const,
    "@id": organizationId,
    name: businessDetails.name,
    alternateName: "Bansal Lawyers Melbourne",
    url: homeUrl,
    telephone: businessDetails.nationalLine,
    email: businessDetails.email,
    address: {
      "@type": "PostalAddress" as const,
      streetAddress: businessDetails.streetAddress,
      addressLocality: businessDetails.addressLocality,
      addressRegion: businessDetails.addressRegion,
      postalCode: businessDetails.postalCode,
      addressCountry: businessDetails.addressCountry,
    },
    areaServed: {
      "@type": "City" as const,
      name: "Melbourne",
    },
  };
}

/** Homepage JSON-LD @graph: LegalService, WebSite, WebPage, FAQPage (linked entities). */
export function createHomePageGraphSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationLegalService(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": homeWebPageId,
        url: homeUrl,
        name: HOME_PAGE_SCHEMA_TITLE,
        description: HOME_PAGE_SCHEMA_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        hasPart: { "@id": homeFaqId },
        inLanguage: "en-AU",
      },
      {
        "@type": "FAQPage",
        "@id": homeFaqId,
        url: homeUrl,
        isPartOf: { "@id": homeWebPageId },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.answerText ??
              (typeof item.answer === "string" ? item.answer : ""),
          },
        })),
      },
    ],
  };
}

export function createLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    ...createOrganizationLegalService(),
  };
}

export const IMMIGRATION_LAWYERS_PAGE_TITLE =
  "Immigration Lawyers Melbourne, VIC 3000 | Bansal Lawyers";
export const IMMIGRATION_LAWYERS_PAGE_DESCRIPTION =
  "Immigration lawyers in Melbourne for visa refusals, cancellations, ART appeals, judicial review, character decisions, and citizenship refusals. Call 1300 226 725.";

/** Immigration lawyers page JSON-LD @graph (LegalService, WebPage, WebSite, breadcrumbs, team, FAQ). */
export function createImmigrationLawyersPageSchema(faqs: FaqItem[]) {
  const pageUrl = `${siteUrl}/immigration-lawyers-melbourne`;
  const pageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;
  const ajayId = `${pageUrl}#ajay-bansal`;
  const michaelId = `${pageUrl}#michael-saleh`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...createOrganizationLegalService(),
        employee: [{ "@id": ajayId }, { "@id": michaelId }],
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: IMMIGRATION_LAWYERS_PAGE_TITLE,
        description: IMMIGRATION_LAWYERS_PAGE_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
        hasPart: [{ "@id": faqId }],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Immigration Lawyers Melbourne",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Person",
        "@id": ajayId,
        name: "Ajay Bansal",
        jobTitle: "Director & Principal Lawyer",
        email: businessDetails.email,
        worksFor: { "@id": organizationId },
        url: ajayId,
      },
      {
        "@type": "Person",
        "@id": michaelId,
        name: "Michael Saleh",
        jobTitle: "Solicitor",
        email: businessDetails.email,
        worksFor: { "@id": organizationId },
        url: michaelId,
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${pageUrl}#faqs`,
        isPartOf: { "@id": pageId },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.answerText ??
              (typeof item.answer === "string" ? item.answer : ""),
          },
        })),
      },
    ],
  };
}

export const INDIAN_LAWYERS_MELBOURNE_PAGE_TITLE =
  "Indian Lawyers in Melbourne | Family, Criminal, Disputes & Wills Law";
export const INDIAN_LAWYERS_MELBOURNE_PAGE_DESCRIPTION =
  "Need an Indian lawyer in Melbourne? Bansal Lawyers offers legal advice in family, criminal, civil, commercial and dispute matters. Advice in English, Hindi and Punjabi. Contact our team today to discuss your legal needs.";

const INDIAN_LAWYERS_MELBOURNE_CONTENT_NAME = "Indian Legal Services in Melbourne";
const INDIAN_LAWYERS_MELBOURNE_CONTENT_DESCRIPTION =
  "Information about legal assistance available through Bansal Lawyers for family law, criminal law, civil matters, commercial matters, business disputes, property settlements and wills.";

/** Indian lawyers Melbourne page JSON-LD @graph: WebPage, CreativeWork, FAQPage. */
export function createIndianLawyersMelbournePageGraphSchema(faqs: FaqItem[]) {
  const pageUrl = `${siteUrl}/indian-lawyers-melbourne`;
  const pageId = `${pageUrl}#webpage`;
  const contentId = `${pageUrl}#content`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: INDIAN_LAWYERS_MELBOURNE_PAGE_TITLE,
        description: INDIAN_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": contentId },
        hasPart: { "@id": faqId },
      },
      {
        "@type": "CreativeWork",
        "@id": contentId,
        name: INDIAN_LAWYERS_MELBOURNE_CONTENT_NAME,
        description: INDIAN_LAWYERS_MELBOURNE_CONTENT_DESCRIPTION,
        inLanguage: "en-AU",
        publisher: { "@id": organizationId },
        about: { "@id": organizationId },
        isPartOf: { "@id": pageId },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: pageUrl,
        name: "Frequently Asked Questions – Indian Lawyers in Melbourne",
        inLanguage: "en-AU",
        isPartOf: { "@id": pageId },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.answerText ??
              (typeof item.answer === "string" ? item.answer : ""),
          },
        })),
      },
    ],
  };
}

export const CRIMINAL_LAWYERS_MELBOURNE_PAGE_TITLE =
  "Indian Criminal Lawyers in Melbourne | Criminal Defence & Court Representation";
export const CRIMINAL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION =
  "Need a criminal lawyer in Melbourne? Bansal Lawyers provides criminal defence advice and representation for summary offences, traffic matters, bail applications and court hearings. Legal assistance in English, Hindi and Punjabi. Contact our team today to discuss your legal needs.";

const CRIMINAL_SERVICE_DESCRIPTION =
  "Bansal Lawyers provides criminal defence legal advice and representation in Melbourne, assisting with Magistrates' Court matters, bail applications, police interviews, traffic offences, licence suspensions, assault and property offences, intervention order breaches and criminal appeals. Legal assistance is available in English, Hindi and Punjabi.";

/** Criminal lawyers Melbourne hub JSON-LD @graph: WebPage, Service, BreadcrumbList, FAQPage. */
export function createCriminalLawyersMelbournePageGraphSchema(faqs: FaqItem[]) {
  const pageUrl = `${siteUrl}/criminal-lawyers-melbourne`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: CRIMINAL_LAWYERS_MELBOURNE_PAGE_TITLE,
        description: CRIMINAL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        mainEntity: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Criminal Defence Legal Services in Melbourne",
        serviceType: [
          "Criminal Defence Legal Advice",
          "Criminal Court Representation",
          "Magistrates' Court Representation",
          "Bail Applications",
          "Police Interview Legal Advice",
          "Traffic Offence Legal Services",
          "Intervention Order Breach Defence",
          "Assault Charge Defence",
          "Criminal Appeals",
          "Plea in Mitigation Representation",
        ],
        url: pageUrl,
        description: CRIMINAL_SERVICE_DESCRIPTION,
        provider: { "@id": organizationId },
        areaServed: [
          { "@type": "City", name: "Melbourne" },
          { "@type": "AdministrativeArea", name: "Victoria" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Indian Criminal Lawyers in Melbourne",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: pageUrl,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.answerText ??
              (typeof item.answer === "string" ? item.answer : ""),
          },
        })),
      },
    ],
  };
}

export const FAMILY_LAWYERS_MELBOURNE_PAGE_TITLE =
  "Indian Family Lawyers in Melbourne | Hindi & Punjabi Speaking Legal Help";
export const FAMILY_LAWYERS_MELBOURNE_PAGE_DESCRIPTION =
  "Need a family lawyer in Melbourne? Bansal Lawyers provides legal advice and representation for divorce, parenting arrangements, property settlements, consent orders and family violence matters. Legal assistance in English, Hindi and Punjabi. Contact our team today to discuss your family law needs.";

const FAMILY_LAWYERS_MELBOURNE_SERVICE_DESCRIPTION =
  "Bansal Lawyers provides family law advice and representation in Melbourne, assisting with divorce and separation, parenting arrangements, child custody, property settlements, spousal maintenance, consent orders, binding financial agreements and family violence intervention orders. The firm also assists with matters involving marriages registered in India and provides legal assistance in English, Hindi and Punjabi.";

/** Family lawyers Melbourne hub JSON-LD @graph. */
export function createFamilyLawyersMelbournePageGraphSchema(faqs: FaqItem[]) {
  const pageUrl = `${siteUrl}/family-lawyers-melbourne`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationLegalService(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: FAMILY_LAWYERS_MELBOURNE_PAGE_TITLE,
        description: FAMILY_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        mainEntity: { "@id": serviceId },
        publisher: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Family Law Legal Services in Melbourne",
        serviceType: [
          "Divorce and Separation",
          "Indian Divorce Legal Services",
          "Parenting Arrangements",
          "Child Custody and Parenting Orders",
          "Property Settlement After Separation",
          "Property Division",
          "Spousal Maintenance",
          "Financial Support After Separation",
          "Family Law Consent Orders",
          "Parenting Consent Orders",
          "Property Consent Orders",
          "Binding Financial Agreements",
          "Prenuptial and Postnuptial Agreements",
          "Family Violence Legal Advice",
          "Family Violence Intervention Orders",
          "Intervention Order Applications and Responses",
        ],
        url: pageUrl,
        description: FAMILY_LAWYERS_MELBOURNE_SERVICE_DESCRIPTION,
        provider: { "@id": organizationId },
        areaServed: [
          { "@type": "City", name: "Melbourne" },
          { "@type": "AdministrativeArea", name: "Victoria" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Family Law Services in Melbourne",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Divorce and Separation",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Divorce and Separation Legal Services",
                    url: `${pageUrl}/divorce-lawyer-melbourne`,
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Parenting Arrangements and Child Custody",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Parenting Arrangements and Child Custody Legal Services",
                    url: `${pageUrl}/child-custody-lawyer-melbourne`,
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Property Settlement",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Property Settlement After Separation",
                    url: `${pageUrl}/property-settlement-lawyer-melbourne`,
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Spousal Maintenance",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Spousal Maintenance Legal Services",
                    url: `${pageUrl}/spousal-maintenance-lawyer-melbourne`,
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Consent Orders",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Family Law Consent Orders",
                    url: `${pageUrl}/consent-orders-lawyer-melbourne`,
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Binding Financial Agreements",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Binding Financial Agreements",
                    url: `${pageUrl}/binding-financial-agreement-lawyer-melbourne`,
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Family Violence and Intervention Orders",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Family Violence and Intervention Order Legal Services",
                    url: `${pageUrl}/family-violence-lawyer-melbourne`,
                  },
                },
              ],
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Indian Family Lawyers in Melbourne",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: pageUrl,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.answerText ??
              (typeof item.answer === "string" ? item.answer : ""),
          },
        })),
      },
    ],
  };
}

export const COMMERCIAL_LAWYERS_MELBOURNE_PAGE_TITLE =
  "Indian Commercial Lawyers in Melbourne | Hindi & Punjabi Speaking Legal Help";
export const COMMERCIAL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION =
  "Need Indian Commercial Lawyers in Melbourne? Get guidance on business agreements, contract reviews, commercial disputes and debt recovery. Book a consultation.";

const COMMERCIAL_LAWYERS_MELBOURNE_SERVICE_DESCRIPTION =
  "Commercial legal assistance for businesses, business owners, entrepreneurs, professionals and investors in Melbourne. Services include business contracts, commercial agreements, loan agreements, shareholder agreements, partnership agreements, business sales and purchases, commercial disputes and debt recovery.";

/** Commercial lawyers Melbourne hub JSON-LD @graph. */
export function createCommercialLawyersMelbournePageGraphSchema(faqs: FaqItem[]) {
  const pageUrl = `${siteUrl}/commercial-lawyers-melbourne`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationLegalService(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: COMMERCIAL_LAWYERS_MELBOURNE_PAGE_TITLE,
        description: COMMERCIAL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        about: { "@id": serviceId },
        publisher: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: "en-AU",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Indian Commercial Lawyers in Melbourne",
        serviceType: "Commercial Legal Services",
        description: COMMERCIAL_LAWYERS_MELBOURNE_SERVICE_DESCRIPTION,
        provider: { "@id": organizationId },
        areaServed: { "@type": "City", name: "Melbourne" },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Indian Commercial Lawyers in Melbourne",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.answerText ??
              (typeof item.answer === "string" ? item.answer : ""),
          },
        })),
      },
    ],
  };
}

export const PROPERTY_LAWYERS_MELBOURNE_PAGE_TITLE =
  "Indian Property Lawyers in Melbourne | Hindi & Punjabi Speaking Legal Help";
export const PROPERTY_LAWYERS_MELBOURNE_PAGE_DESCRIPTION =
  "Need property lawyers in Melbourne? Bansal Lawyers assists with property purchases, sales, contract reviews, leases, settlements and property disputes. Book a consultation today.";

const PROPERTY_LAWYERS_MELBOURNE_CREATIVEWORK_DESCRIPTION =
  "Information about property legal services offered by Bansal Lawyers, including property purchases, sales, contract reviews, leases, settlements and property-related disputes in Melbourne.";

const PROPERTY_LAWYERS_MELBOURNE_SERVICE_DESCRIPTION =
  "Property legal assistance in Melbourne, including property contract reviews, buying and selling property, conveyancing-related legal support, commercial and residential leases, settlement issues, property disputes and property-related legal notices.";

/** Property lawyers Melbourne hub JSON-LD @graph. */
export function createPropertyLawyersMelbournePageGraphSchema(faqs: FaqItem[]) {
  const pageUrl = `${siteUrl}/property-lawyers-melbourne`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const creativeWorkId = `${pageUrl}#creativework`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationLegalService(),
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: PROPERTY_LAWYERS_MELBOURNE_PAGE_TITLE,
        description: PROPERTY_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        about: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "CreativeWork",
        "@id": creativeWorkId,
        name: "Property Lawyers Melbourne",
        url: pageUrl,
        description: PROPERTY_LAWYERS_MELBOURNE_CREATIVEWORK_DESCRIPTION,
        inLanguage: "en-AU",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Property Legal Services in Melbourne",
        serviceType: "Property-Related Legal Services",
        url: pageUrl,
        description: PROPERTY_LAWYERS_MELBOURNE_SERVICE_DESCRIPTION,
        provider: { "@id": organizationId },
        areaServed: { "@type": "City", name: "Melbourne" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Property Lawyers Melbourne",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: pageUrl,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.answerText ??
              (typeof item.answer === "string" ? item.answer : ""),
          },
        })),
      },
    ],
  };
}

export const CIVIL_LAWYERS_MELBOURNE_PAGE_TITLE =
  "Civil Dispute Lawyers in Melbourne | Bansal Lawyers";
export const CIVIL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION =
  "Need civil lawyers in Melbourne? Bansal Lawyers assists with contract disputes, debt recovery, legal notices and civil litigation. Contact our team today.";

const CIVIL_SERVICE_DESCRIPTION =
  "Bansal Lawyers assists individuals and businesses with civil disputes, contract disagreements, debt recovery, legal notices, negotiation and court-related matters in Melbourne.";

/** Civil lawyers Melbourne hub JSON-LD @graph. */
export function createCivilLawyersMelbournePageGraphSchema(faqs: FaqItem[]) {
  const pageUrl = `${siteUrl}/civil-lawyers-melbourne`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationLegalService(),
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: CIVIL_LAWYERS_MELBOURNE_PAGE_TITLE,
        description: CIVIL_LAWYERS_MELBOURNE_PAGE_DESCRIPTION,
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        about: { "@id": serviceId },
        mainEntity: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/collins-street-office.webp`,
        },
        inLanguage: "en-AU",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Civil Dispute Lawyers in Melbourne",
        serviceType: [
          "Civil Dispute Resolution",
          "Civil Litigation",
          "Contract Disputes",
          "Debt Recovery",
          "Debt Disputes",
          "Legal Notices",
          "Breach of Contract Disputes",
          "Dispute Resolution",
        ],
        description: CIVIL_SERVICE_DESCRIPTION,
        provider: { "@id": organizationId },
        areaServed: [
          { "@type": "City", name: "Melbourne" },
          { "@type": "AdministrativeArea", name: "Victoria" },
        ],
        audience: [
          { "@type": "Audience", audienceType: "Individuals" },
          { "@type": "Audience", audienceType: "Businesses" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Civil Lawyers Melbourne",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: pageUrl,
        isPartOf: { "@id": pageId },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.answerText ??
              (typeof item.answer === "string" ? item.answer : ""),
          },
        })),
      },
    ],
  };
}

const CONTACT_PAGE_SCHEMA_NAME = "Contact Bansal Lawyers | Melbourne Lawyers";
const CONTACT_PAGE_SCHEMA_DESCRIPTION =
  "Contact Bansal Lawyers in Melbourne CBD for enquiries about immigration, family, criminal, commercial, property and civil law. Call 1300 226 725 or request a consultation.";

/** Contact page JSON-LD @graph: ContactPage, WebSite, LegalService, BreadcrumbList. */
export function createContactPageGraphSchema() {
  const contactUrl = `${siteUrl}/contact`;
  const contactWebPageId = `${contactUrl}#webpage`;
  const contactBreadcrumbId = `${contactUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": contactWebPageId,
        url: contactUrl,
        name: CONTACT_PAGE_SCHEMA_NAME,
        description: CONTACT_PAGE_SCHEMA_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": organizationId },
        breadcrumb: { "@id": contactBreadcrumbId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        inLanguage: "en-AU",
        publisher: { "@id": organizationId },
      },
      createOrganizationLegalService(),
      {
        "@type": "BreadcrumbList",
        "@id": contactBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Bansal Lawyers",
            item: contactUrl,
          },
        ],
      },
    ],
  };
}

/** @deprecated Use createContactPageGraphSchema on the contact page. */
export function createContactPageSchema() {
  return createContactPageGraphSchema();
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

export function createFaqSchema(items: FaqItem[], path?: string) {
  const pageUrl = path ? new URL(path, `${siteUrl}/`).toString().replace(/\/$/, "") : undefined;
  const mainEntity = items.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text:
        item.answerText ??
        (typeof item.answer === "string" ? item.answer : "[Answer text goes here]"),
    },
  }));

  if (pageUrl) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      inLanguage: "en-AU",
      mainEntity,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

export function createArticleSchema({
  title,
  description,
  path,
  datePublished = "2026-01-01",
  dateModified = "2026-01-01",
  authorName = "Ajay Bansal",
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  const url = new URL(path, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image ? new URL(image, siteUrl).toString() : `${siteUrl}/images/logo.webp`,
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

const ABOUT_PAGE_SCHEMA_NAME = "About Bansal Lawyers | Trusted Law Firm in Melbourne";
const ABOUT_PAGE_SCHEMA_DESCRIPTION =
  "Learn about Bansal Lawyers, a Melbourne law firm led by Ajay Bansal, providing legal services in immigration, family, criminal, commercial and property law.";

/** About page JSON-LD @graph: LegalService, AboutPage, WebSite, Person, BreadcrumbList. */
export function createAboutPageGraphSchema() {
  const aboutUrl = `${siteUrl}/about`;
  const aboutWebPageId = `${aboutUrl}#webpage`;
  const aboutBreadcrumbId = `${aboutUrl}#breadcrumb`;
  const ajayId = `${siteUrl}/about/ajay-bansal#person`;
  const michaelId = `${siteUrl}/about/michael-saleh#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...createOrganizationLegalService(),
        founder: { "@id": ajayId },
        employee: [{ "@id": ajayId }, { "@id": michaelId }],
      },
      {
        "@type": "AboutPage",
        "@id": aboutWebPageId,
        url: aboutUrl,
        name: ABOUT_PAGE_SCHEMA_NAME,
        description: ABOUT_PAGE_SCHEMA_DESCRIPTION,
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": organizationId },
        breadcrumb: { "@id": aboutBreadcrumbId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        inLanguage: "en-AU",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Person",
        "@id": ajayId,
        name: "Ajay Bansal",
        jobTitle: "Director & Principal Lawyer",
        url: `${siteUrl}/about/ajay-bansal`,
        worksFor: { "@id": organizationId },
      },
      {
        "@type": "Person",
        "@id": michaelId,
        name: "Michael Saleh",
        jobTitle: "Solicitor",
        url: `${siteUrl}/about/michael-saleh`,
        worksFor: { "@id": organizationId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": aboutBreadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Bansal Lawyers",
            item: aboutUrl,
          },
        ],
      },
    ],
  };
}

/** @deprecated Use createAboutPageGraphSchema on the about page. */
export function createAboutPageSchema() {
  return createAboutPageGraphSchema();
}

const AJAY_BANSAL_PERSON_DESCRIPTION =
  "Looking for an Indian lawyer in Melbourne? Ajay Bansal founding Director & Principal Lawyer at Bansal Lawyers offers legal guidance in English, Hindi and Punjabi across family, criminal, civil and commercial law. Contact our team today to book a consultation!";

/** Ajay Bansal profile JSON-LD @graph: Person, BreadcrumbList, FAQPage. */
export function createAjayBansalPageGraphSchema() {
  const profileUrl = `${siteUrl}/about/ajay-bansal`;
  const personId = `${profileUrl}#person`;
  const breadcrumbId = `${profileUrl}#breadcrumb`;
  const faqId = `${profileUrl}#faqs`;
  const aboutUrl = `${siteUrl}/about`;
  const mobileTel = businessDetails.phone;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Ajay Bansal",
        url: profileUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": profileUrl,
        },
        image: `${siteUrl}/images/team/ajay-bansal-director.webp`,
        jobTitle: "Director & Principal Lawyer",
        worksFor: createOrganizationLegalService(),
        telephone: mobileTel,
        email: businessDetails.email,
        knowsLanguage: ["English", "Hindi", "Punjabi"],
        description: AJAY_BANSAL_PERSON_DESCRIPTION,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: aboutUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Ajay Bansal",
            item: profileUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: `${profileUrl}#faqs`,
        mainEntity: ajayBansalFaqSchemaEntities(),
      },
    ],
  };
}

const PROPERTY_CONTRACT_REVIEW_VICTORIA_BLOG_PATH =
  "/blog/property-contract-review-victoria";

/** Property Contract Review Victoria blog JSON-LD @graph: Organization, WebSite, WebPage, BlogPosting, BreadcrumbList, FAQPage. */
export function createPropertyContractReviewVictoriaBlogGraphSchema(
  faqs: FaqItem[]
) {
  const pageUrl = `${siteUrl}${PROPERTY_CONTRACT_REVIEW_VICTORIA_BLOG_PATH}`;
  const webpageId = `${pageUrl}#webpage`;
  const articleId = `${pageUrl}#article`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: businessDetails.name,
        url: homeUrl,
        telephone: businessDetails.nationalLine,
        email: businessDetails.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessDetails.streetAddress,
          addressLocality: businessDetails.addressLocality,
          addressRegion: businessDetails.addressRegion,
          postalCode: businessDetails.postalCode,
          addressCountry: businessDetails.addressCountry,
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homeUrl,
        name: businessDetails.name,
        publisher: { "@id": organizationId },
        inLanguage: "en-AU",
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: "Property Contract Review Victoria: What to Check Before Signing",
        description:
          "Buying property in Victoria? Learn what to check in your contract of sale, Section 32, special conditions, title, cooling-off rights and settlement terms.",
        inLanguage: "en-AU",
        isPartOf: { "@id": websiteId },
        publisher: { "@id": organizationId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": articleId },
      },
      {
        "@type": "BlogPosting",
        "@id": articleId,
        mainEntityOfPage: { "@id": webpageId },
        headline: "What to Check Before Signing a Property Contract in Victoria",
        description:
          "A practical guide to reviewing a property contract in Victoria, including Section 32 vendor statements, title checks, special conditions, cooling-off rights and settlement terms.",
        inLanguage: "en-AU",
        articleSection: "Property Law",
        keywords: [
          "Property Contract Review Victoria",
          "Property Contract Review Melbourne",
          "Section 32 Vendor Statement",
          "Contract of Sale Victoria",
          "Special Conditions in Property Contracts",
          "Cooling-Off Period Victoria",
          "Property Lawyers Melbourne",
        ],
        author: {
          "@type": "Organization",
          "@id": organizationId,
          name: businessDetails.name,
        },
        publisher: { "@id": organizationId },
        about: {
          "@type": "Thing",
          name: "Property Contract Review in Victoria",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Property Contract Review Victoria",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: pageUrl,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: typeof item.answer === "string" ? item.answer : "",
          },
        })),
      },
    ],
  };
}

