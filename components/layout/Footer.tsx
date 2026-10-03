import Image from "next/image";
import Link from "next/link";
import { businessDetails } from "@/lib/site";

const footerPracticeAreas = [
  { label: "Immigration Lawyers Melbourne", href: "/immigration-lawyers-melbourne/" },
  { label: "Family Lawyers Melbourne", href: "/family-lawyers-melbourne/" },
  { label: "Criminal Lawyers Melbourne", href: "/criminal-lawyers-melbourne/" },
  { label: "Commercial Lawyers Melbourne", href: "/commercial-lawyers-melbourne/" },
  { label: "Property Lawyers Melbourne", href: "/property-lawyers-melbourne/" },
  { label: "Civil Lawyers Melbourne", href: "/civil-lawyers-melbourne/" },
];

const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Bansal Lawyers", href: "/about/" },
  { label: "Recent Cases", href: "/recent-cases/" },
  { label: "Blog & Legal Updates", href: "/blog/" },
  { label: "Contact Our Legal Team", href: "/contact/" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* 1. Brand & Firm Info */}
        <div className="footer-brand">
          <Link className="brand brand--light" href="/" aria-label="Bansal Lawyers home">
            <Image
              src="/images/logo-white.webp"
              alt="Bansal Lawyers"
              width={212}
              height={56}
              className="brand__img brand__img--footer"
            />
          </Link>
          <p>
            Bansal Lawyers is a Melbourne law firm providing strategic counsel and practical guidance across immigration, family, criminal, commercial, property, and civil law matters.
          </p>

          <div className="footer-socials" style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }} aria-label="Footer social media links">
            <a
              href="https://www.linkedin.com/company/bansal-lawyers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: "2.25rem",
                height: "2.25rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
                transition: "all 0.15s ease",
              }}
            >
              <svg style={{ width: "1.1rem", height: "1.1rem" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/bansallawyers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                width: "2.25rem",
                height: "2.25rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
                transition: "all 0.15s ease",
              }}
            >
              <svg style={{ width: "1.1rem", height: "1.1rem" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/bansallawyers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: "2.25rem",
                height: "2.25rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
                transition: "all 0.15s ease",
              }}
            >
              <svg style={{ width: "1.1rem", height: "1.1rem" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://wa.me/61422905860"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                width: "2.25rem",
                height: "2.25rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#ffffff",
                transition: "all 0.15s ease",
              }}
            >
              <svg style={{ width: "1.1rem", height: "1.1rem" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.7-.71 1.7 0 1 .73 1.97.83 2.11.1.13 1.4 2.2 3.44 3.05 1.71.71 2.06.57 2.43.53.37-.03 1.2-.49 1.37-.96.17-.48.17-.89.12-.97-.05-.08-.19-.13-.41-.24-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11-.15.22-.59.71-.72.86-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.43-.37-.37-.5-.38l-.43-.01z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 2. Navigation Column */}
        <div>
          <h2 className="footer-heading">Navigation</h2>
          <ul className="footer-links">
            {footerNavLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Practice Areas Column */}
        <div>
          <h2 className="footer-heading">Practice Areas</h2>
          <ul className="footer-links">
            {footerPracticeAreas.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Melbourne Office Contact */}
        <div>
          <h2 className="footer-heading">Melbourne Office</h2>
          <address className="footer-contact">
            <span>{businessDetails.address}</span>
            <a href={businessDetails.phoneTel}>
              <strong>Direct:</strong> {businessDetails.phone}
            </a>
            <a href={businessDetails.nationalLineTel}>
              <strong>National:</strong> {businessDetails.nationalLineDisplay}
            </a>
            <a href={businessDetails.emailMailto}>
              <strong>Email:</strong> {businessDetails.email}
            </a>
            <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.65)", marginTop: "0.25rem" }}>
              Mon – Fri: 8:30 AM – 5:30 PM AEST
            </span>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bansal Lawyers. All rights reserved.</span>
        <div>
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms of Service</Link>
          <Link href="/legal/disclaimer">Legal Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
