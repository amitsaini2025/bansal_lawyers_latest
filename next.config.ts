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
    ];
  },
};

export default nextConfig;
