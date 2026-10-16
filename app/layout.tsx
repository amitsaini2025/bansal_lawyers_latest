import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/700.css";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import { Footer, Header } from "@/components/layout";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import "./refinements.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b1a36",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bansal Lawyers | Melbourne Law Firm",
    template: "%s | Bansal Lawyers",
  },
  description:
    "Bansal Lawyers is a Melbourne law firm providing strategic legal counsel in immigration, family, commercial, criminal, property and civil law.",
  openGraph: {
    title: "Bansal Lawyers | Melbourne Law Firm",
    description:
      "Bansal Lawyers is a Melbourne law firm providing strategic legal counsel in immigration, family, commercial, criminal, property and civil law.",
    url: siteUrl,
    siteName: "Bansal Lawyers",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: `${siteUrl}/images/collins-street-office.webp`,
        width: 1376,
        height: 768,
        type: "image/webp",
        alt: "Bansal Lawyers — Melbourne Law Firm on Collins Street",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bansal Lawyers | Melbourne Law Firm",
    description:
      "Bansal Lawyers is a Melbourne law firm providing strategic legal counsel in immigration, family, commercial, criminal, property and civil law.",
    images: [`${siteUrl}/images/collins-street-office.webp`],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <SiteChrome header={<Header />} footer={<Footer />}>
          {children}
        </SiteChrome>
        <MicrosoftClarity />
      </body>
    </html>
  );
}
