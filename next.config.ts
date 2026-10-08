import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Content-Security-Policy",
            value: "base-uri 'self'; object-src 'none'; form-action 'self'; frame-ancestors 'self'; script-src-attr 'none'",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/practice-areas",
        destination: "/immigration-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/practice-areas/immigration-law",
        destination: "/immigration-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/practice-areas/family-law",
        destination: "/family-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/practice-areas/commercial-law",
        destination: "/commercial-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/practice-areas/property-law",
        destination: "/property-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/practice-areas/civil-law",
        destination: "/civil-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/practice-areas/criminal-law",
        destination: "/criminal-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/visa-refusal-lawyer-melbourne",
        destination: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/thakur-v-minister-for-immigration-2025-student-visa",
        destination: "/recent-cases/thakur-v-minister-for-immigration-2025-student-visa",
        permanent: true,
      },
      {
        source: "/student-visa-refusal-bias-jaggi-v-minister-2024",
        destination: "/recent-cases/student-visa-refusal-bias-jaggi-v-minister-2024",
        permanent: true,
      },
      {
        source: "/chikweu-v-minister-2024-federal-court-visa-refusal-overturn",
        destination: "/recent-cases/chikweu-v-minister-2024-federal-court-visa-refusal-overturn",
        permanent: true,
      },
      {
        source: "/khanal-migration-english-language-requirements-covid-19-case-study",
        destination: "/recent-cases/khanal-migration-english-language-requirements-covid-19-case-study",
        permanent: true,
      },
      {
        source: "/alsheri-v-minister-2025-importance-of-framing-legal-question",
        destination: "/recent-cases/alsheri-v-minister-2025-importance-of-framing-legal-question",
        permanent: true,
      },
      {
        source: "/maazuddin-v-minister-2024-tribunal-decision-overturned",
        destination: "/recent-cases/maazuddin-v-minister-2024-tribunal-decision-overturned",
        permanent: true,
      },
      {
        source: "/blog/judicial-review-of-migration-decisions-in-australia",
        destination: "/blog/understanding-judicial-review-of-migration-decisions-in-australia",
        permanent: true,
      },
      {
        source: "/blog/judicial-review-of-migration-decisions-in-australia-a-guide-by-bansal-lawyers",
        destination: "/blog/understanding-judicial-review-of-migration-decisions-in-australia",
        permanent: true,
      },
      {
        source: "/case",
        destination: "/recent-cases",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/legal/privacy",
        permanent: true,
      },
      {
        source: "/disclaimer",
        destination: "/legal/disclaimer",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/legal/terms",
        permanent: true,
      },
      {
        source: "/migration-law",
        destination: "/immigration-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/family-law",
        destination: "/family-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/commercial-law",
        destination: "/commercial-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/property-law",
        destination: "/property-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/civil-law",
        destination: "/civil-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/criminal-law",
        destination: "/criminal-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/corporate-law",
        destination: "/commercial-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/personal-law",
        destination: "/civil-lawyers-melbourne",
        permanent: true,
      },
      {
        source: "/divorce",
        destination: "/family-lawyers-melbourne/divorce-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/divorce-lawyers-melbourne",
        destination: "/family-lawyers-melbourne/divorce-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/child-custody",
        destination: "/family-lawyers-melbourne/child-custody-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/family-violence",
        destination: "/family-lawyers-melbourne/family-violence-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/property-settlement",
        destination: "/family-lawyers-melbourne/property-settlement-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/family-violence-orders",
        destination: "/family-lawyers-melbourne/intervention-order-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/intervention-orders",
        destination: "/family-lawyers-melbourne/intervention-order-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/art-application",
        destination: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/visa-refusals-visa-cancellation",
        destination: "/immigration-lawyers-melbourne/visa-refusal-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/jurisdictional-error-federal-circuit-court-application",
        destination: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/federal-court-application",
        destination: "/immigration-lawyers-melbourne/art-appeal-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/traffic-offences",
        destination: "/criminal-lawyers-melbourne/traffic-offence-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/drink-driving-offences",
        destination: "/criminal-lawyers-melbourne/drink-driving-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/assault-charges",
        destination: "/criminal-lawyers-melbourne/assault-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/business-law",
        destination: "/commercial-lawyers-melbourne/business-legal-advice-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/leasing-or-selling-a-business",
        destination: "/commercial-lawyers-melbourne/business-sale-purchase-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/contracts-or-business-agreements",
        destination: "/commercial-lawyers-melbourne/business-contract-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/loan-agreement",
        destination: "/commercial-lawyers-melbourne/loan-agreement-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/conveyancing",
        destination: "/property-lawyers-melbourne/conveyancing-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/building-and-construction-disputes",
        destination: "/civil-lawyers-melbourne/property-related-dispute-lawyer-melbourne",
        permanent: true,
      },
      {
        source: "/caveats-disputes-and-removal",
        destination: "/property-lawyers-melbourne/property-dispute-lawyer-melbourne",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
