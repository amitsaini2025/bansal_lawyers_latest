export type SubPageItem = {
  title: string;
  href: string;
  description?: string;
  badge?: string;
};

export type CorePracticeModule = {
  id: string;
  title: string;
  href: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  subPages: SubPageItem[];
};

export const megaMenuModules: CorePracticeModule[] = [
  {
    id: "immigration",
    title: "Immigration Law",
    href: "/immigration-lawyers-melbourne",
    tagline: "Visas, Refusals & ART Appeals",
    description:
      "Comprehensive Australian migration guidance for visas, appeals, refusals, cancellations, and citizenship.",
    status: "live",
    subPages: [
      {
        title: "Visa Applications",
        href: "/immigration-lawyers-melbourne/visa-application-lawyer-melbourne/",
        description: "Application review, eligibility checks and strategic advice",
      },
      {
        title: "Visa Refusals",
        href: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne/",
        description: "Review refusal grounds, ART appeal rights and next steps",
      },
      {
        title: "Visa Cancellations",
        href: "/immigration-lawyers-melbourne/visa-cancellation-lawyer-melbourne/",
        description: "NOICC responses, character notices and urgent revocation",
      },
      {
        title: "ART Appeals",
        href: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne/",
        description: "Administrative Review Tribunal representation and merits appeals",
      },
      {
        title: "Partner Visas",
        href: "/immigration-lawyers-melbourne/partner-visa-lawyer-melbourne/",
        description: "Subclass 820/801 & 309/100 relationship evidence and guidance",
      },
      {
        title: "Student Visas",
        href: "/immigration-lawyers-melbourne/student-visa-lawyer-melbourne/",
        description: "Subclass 500, Genuine Student requirements and course changes",
      },
      {
        title: "Skilled Migration",
        href: "/immigration-lawyers-melbourne/skilled-migration-lawyer-melbourne/",
        description: "Points-tested visas 189, 190, 491 and skills assessments",
      },
      {
        title: "Employer Sponsored Visas",
        href: "/immigration-lawyers-melbourne/employer-sponsored-visa-lawyer-melbourne/",
        description: "Subclass 482 TSS, 186 ENS and employer nomination support",
      },
      {
        title: "Permanent Residency",
        href: "/immigration-lawyers-melbourne/permanent-residency-lawyer-melbourne/",
        description: "Strategic PR pathways, document review and transition planning",
      },
      {
        title: "Citizenship Matters",
        href: "/immigration-lawyers-melbourne/citizenship-lawyer-australia/",
        description: "Australian citizenship eligibility, applications and refusals",
      },
      {
        title: "Requests for Further Info",
        href: "/immigration-lawyers-melbourne/request-for-further-information-lawyer-melbourne/",
        description: "Section 56 RFI responses, document audits and deadline management",
      },
      {
        title: "Immigration Document Review",
        href: "/immigration-lawyers-melbourne/immigration-document-review-lawyer-melbourne/",
        description: "Pre-lodgement evidence audits to minimize refusal risks",
      },
    ],
  },
  {
    id: "family",
    title: "Family Law",
    href: "/family-lawyers-melbourne",
    tagline: "Divorce, Custody & Settlements",
    description:
      "Compassionate, practical legal representation for separation, parenting arrangements, and financial settlements.",
    status: "live",
    subPages: [
      {
        title: "Divorce & Separation",
        href: "/family-lawyers-melbourne/divorce-lawyer-melbourne/",
        description: "Sole & joint applications, separation under one roof and dissolution",
      },
      {
        title: "Child Custody & Parenting",
        href: "/family-lawyers-melbourne/child-custody-lawyer-melbourne/",
        description: "Parenting arrangements, living arrangements and parental rights",
      },
      {
        title: "Property Settlement",
        href: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne/",
        description: "Asset division, family home, superannuation splits and debts",
      },
      {
        title: "Consent Orders",
        href: "/family-lawyers-melbourne/consent-orders-lawyer-melbourne/",
        description: "Court-approved binding parenting and property agreements",
      },
      {
        title: "Binding Financial Agreements",
        href: "/family-lawyers-melbourne/binding-financial-agreement-lawyer-melbourne/",
        description: "Independent legal advice for prenups, postnups and separation BFAs",
      },
      {
        title: "Family Violence Law",
        href: "/family-lawyers-melbourne/family-violence-lawyer-melbourne/",
        description: "Confidential guidance for family safety, orders and parenting impact",
      },
      {
        title: "Intervention Orders (IVO)",
        href: "/family-lawyers-melbourne/intervention-order-lawyer-melbourne/",
        description: "Magistrates' Court IVO applications, responses and conditions",
      },
      {
        title: "Spousal Maintenance",
        href: "/family-lawyers-melbourne/spousal-maintenance-lawyer-melbourne/",
        description: "Financial support claims, capacity assessment and settlement terms",
      },
      {
        title: "Child Support Advice",
        href: "/family-lawyers-melbourne/child-support-lawyer-melbourne/",
        description: "Private agreements, care percentage disputes and special expenses",
      },
      {
        title: "Family Dispute Resolution",
        href: "/family-lawyers-melbourne/family-dispute-resolution-lawyer-melbourne/",
        description: "Out-of-court mediation preparation, negotiation and settlements",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Law",
    href: "/commercial-lawyers-melbourne",
    tagline: "Contracts, Agreements & Disputes",
    description:
      "Strategic commercial legal counsel for businesses, contracts, agreements, corporate governance and commercial disputes across Victoria.",
    status: "live",
    subPages: [
      {
        title: "Business Contracts",
        href: "/commercial-lawyers-melbourne/business-contract-lawyer-melbourne/",
        description: "Drafting, review, negotiation and commercial terms",
      },
      {
        title: "Contract Review",
        href: "/commercial-lawyers-melbourne/contract-review-lawyer-melbourne/",
        description: "Independent pre-signing risk, indemnity and liability audits",
      },
      {
        title: "Commercial Agreements",
        href: "/commercial-lawyers-melbourne/commercial-agreement-lawyer-melbourne/",
        description: "Service terms, supplier agreements, contractor agreements and NDAs",
      },
      {
        title: "Loan Agreements",
        href: "/commercial-lawyers-melbourne/loan-agreement-lawyer-melbourne/",
        description: "Commercial lending, private loans, security and PPSR terms",
      },
      {
        title: "Shareholder Agreements",
        href: "/commercial-lawyers-melbourne/shareholder-agreement-lawyer-melbourne/",
        description: "Governance, equity transfers, director duties and deadlocks",
      },
      {
        title: "Partnership Agreements",
        href: "/commercial-lawyers-melbourne/partnership-agreement-lawyer-melbourne/",
        description: "Capital contributions, profit sharing, roles and partner exits",
      },
      {
        title: "Business Sale & Purchase",
        href: "/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne/",
        description: "Due diligence, contract review, lease transfers and settlement",
      },
      {
        title: "Commercial Disputes",
        href: "/commercial-lawyers-melbourne/commercial-dispute-lawyer-melbourne/",
        description: "Breach of contract, partner disputes and VCAT/court action",
      },
      {
        title: "Debt Recovery",
        href: "/commercial-lawyers-melbourne/debt-recovery-lawyer-melbourne/",
        description: "Overdue invoices, letters of demand and statutory demands",
      },
      {
        title: "Business Legal Advice",
        href: "/commercial-lawyers-melbourne/business-legal-advice-lawyer-melbourne/",
        description: "Strategic legal guidance for business owners and directors",
      },
      {
        title: "Negotiations & Settlements",
        href: "/commercial-lawyers-melbourne/negotiations-settlements-lawyer-melbourne/",
        description: "Out-of-court dispute resolution and binding deeds of release",
      },
      {
        title: "Legal Notices",
        href: "/commercial-lawyers-melbourne/legal-notice-lawyer-melbourne/",
        description: "Formal letters of demand, breach notices and legal responses",
      },
    ],
  },
  {
    id: "property",
    title: "Property Law",
    href: "/property-lawyers-melbourne",
    tagline: "Conveyancing, Leases & Title Advice",
    description:
      "Reliable property law advice for residential and commercial purchases, sales, leasing, and title disputes.",
    status: "live",
    subPages: [
      {
        title: "Buying Property",
        href: "/property-lawyers-melbourne/buying-property-lawyer-melbourne/",
        description: "Contract review, conditions, settlement dates and purchase advice",
      },
      {
        title: "Selling Property",
        href: "/property-lawyers-melbourne/selling-property-lawyer-melbourne/",
        description: "Sale documents, disclosure, conditions and settlement obligations",
      },
      {
        title: "Property Contract Review",
        href: "/property-lawyers-melbourne/property-contract-review-lawyer-melbourne/",
        description: "Special conditions, finance clauses and settlement terms checked",
      },
      {
        title: "Conveyancing",
        href: "/property-lawyers-melbourne/conveyancing-lawyer-melbourne/",
        description: "Conveyancing-related legal support for transfers and settlement",
      },
      {
        title: "Commercial Leases",
        href: "/property-lawyers-melbourne/commercial-lease-lawyer-melbourne/",
        description: "Rent, outgoings, renewals, fit-out and make-good obligations",
      },
      {
        title: "Residential Leases",
        href: "/property-lawyers-melbourne/residential-lease-lawyer-melbourne/",
        description: "Rental agreements, notices, bond issues and tenancy disputes",
      },
      {
        title: "Property Disputes",
        href: "/property-lawyers-melbourne/property-dispute-lawyer-melbourne/",
        description: "Contract, lease and settlement disputes, notices and negotiations",
      },
      {
        title: "Property Settlement",
        href: "/property-lawyers-melbourne/property-settlement-lawyer-melbourne/",
        description: "Missed settlement dates, delays, documents and adjustments",
      },
      {
        title: "Property Transfers",
        href: "/property-lawyers-melbourne/property-transfer-lawyer-melbourne/",
        description: "Ownership changes, transfer documents and title details",
      },
      {
        title: "Landlord & Tenant",
        href: "/property-lawyers-melbourne/landlord-tenant-lawyer-melbourne/",
        description: "Lease obligations, unpaid rent, repairs and bond disputes",
      },
      {
        title: "Property Legal Notices",
        href: "/property-lawyers-melbourne/property-legal-notice-lawyer-melbourne/",
        description: "Lease notices, breach notices, demand letters and responses",
      },
    ],
  },
  {
    id: "civil",
    title: "Civil Law",
    href: "/civil-lawyers-melbourne",
    tagline: "Disputes, Notices & Litigation Support",
    description:
      "Strategic dispute resolution, legal notices, negotiation, and civil litigation advice across Victoria.",
    status: "live",
    subPages: [
      {
        title: "Civil Dispute Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/civil-dispute-lawyer-melbourne/",
        description: "Early dispute assessment, legal notices, negotiation and practical resolution advice",
      },
      {
        title: "Contract Dispute Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/contract-dispute-lawyer-melbourne/",
        description: "Breach of contract claims, agreement interpretation, notices and dispute advice",
      },
      {
        title: "Debt Dispute Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/debt-dispute-lawyer-melbourne/",
        description: "Unpaid invoices, disputed payments, demand letters and resolution steps",
      },
      {
        title: "Legal Notice Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/legal-notice-lawyer-melbourne/",
        description: "Drafting, reviewing and responding to formal letters of demand and breach notices",
      },
      {
        title: "Negotiation Support Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/negotiation-support-lawyer-melbourne/",
        description: "Dispute settlement discussions, offer reviews and binding deed of settlement drafting",
      },
      {
        title: "Document Preparation Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/document-preparation-lawyer-melbourne/",
        description: "Legal letters, claim responses, settlement documents and evidence organisation",
      },
      {
        title: "Property-Related Dispute Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/property-related-dispute-lawyer-melbourne/",
        description: "Lease disagreements, vendor-buyer issues, settlement disputes and notices",
      },
      {
        title: "Business-Related Dispute Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/business-related-dispute-lawyer-melbourne/",
        description: "Supplier disputes, partner disagreements, payment issues and commercial notices",
      },
      {
        title: "Court Document Preparation Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/court-document-preparation-lawyer-melbourne/",
        description: "Drafting statements of claim, defences, affidavits and tribunal filings",
      },
      {
        title: "Civil Litigation Lawyer Melbourne",
        href: "/civil-lawyers-melbourne/civil-litigation-lawyer-melbourne/",
        description: "Strategic court dispute representation, litigation risk analysis and advice",
      },
    ],
  },
  {
    id: "criminal",
    title: "Criminal Law",
    href: "/criminal-lawyers-melbourne",
    tagline: "Court Appearances, Bail & Defence",
    description:
      "Strategic criminal defence representation in Magistrates' and County Court proceedings across Victoria.",
    status: "live",
    subPages: [
      {
        title: "Assault Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/assault-lawyer-melbourne/",
        description: "Assault charges, violence allegations, evidence review and defence",
      },
      {
        title: "Theft Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/theft-lawyer-melbourne/",
        description: "Theft allegations, workplace matters, police interviews and defence",
      },
      {
        title: "Fraud Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/fraud-lawyer-melbourne/",
        description: "Dishonesty offences, financial allegations, document review and court advice",
      },
      {
        title: "Drug Offence Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/drug-offence-lawyer-melbourne/",
        description: "Possession, trafficking allegations, police search issues and court advice",
      },
      {
        title: "Traffic Offence Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/traffic-offence-lawyer-melbourne/",
        description: "Careless driving, licence suspensions, demerit points and court hearings",
      },
      {
        title: "Drink Driving Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/drink-driving-lawyer-melbourne/",
        description: "DUI charges, roadside testing issues, licence cancellations and appeals",
      },
      {
        title: "Family Violence Criminal Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/family-violence-criminal-lawyer-melbourne/",
        description: "Family violence criminal charges, IVO connections and court representation",
      },
      {
        title: "Bail Application Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/bail-application-lawyer-melbourne/",
        description: "Urgent bail applications, condition variations and court hearings",
      },
      {
        title: "Intervention Order Breach Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/intervention-order-breach-lawyer-melbourne/",
        description: "IVO contravention charges, condition disputes and criminal court defence",
      },
      {
        title: "Police Interview Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/police-interview-lawyer-melbourne/",
        description: "Right to silence, pre-interview legal advice and police station representation",
      },
      {
        title: "Court Representation Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/court-representation-lawyer-melbourne/",
        description: "Magistrates' and County Court appearances, plea hearings and contested matters",
      },
      {
        title: "Criminal Defence Lawyer Melbourne",
        href: "/criminal-lawyers-melbourne/criminal-defence-lawyer-melbourne/",
        description: "Comprehensive criminal defence counsel, charge evaluation and trial advocacy",
      },
    ],
  },
];
