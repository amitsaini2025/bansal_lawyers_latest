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
    ];
  },
};

export default nextConfig;
