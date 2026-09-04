import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Motion } from "@/components/motion";
import { Nav } from "@/components/nav";
import { COMPANY, EMAIL, SITE_NAME, SITE_URL, VESTIGE_URL } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Pinehollow Studios is an independent software studio in the United Kingdom, now building Vestige, a golf app for iPhone.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Independent software studio`,
    template: `%s — ${SITE_NAME}`,
  },
  description,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: `${SITE_NAME} — Independent software studio`,
    description,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    // images resolve from app/opengraph-image.tsx
  },
  twitter: { card: "summary_large_image" },
  // The ?v= is a cache-buster — bump it whenever the mark changes; browsers
  // cache favicons in a separate store that ignores hard refreshes.
  icons: {
    icon: [{ url: "/icon?v=3", sizes: "192x192", type: "image/png" }],
    shortcut: [{ url: "/icon?v=3", type: "image/png" }],
    apple: [{ url: "/apple-icon?v=3", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#060A0F",
  colorScheme: "dark",
  viewportFit: "cover",
};

/** Structured data for the Knowledge Graph: who this site belongs to and what it links to. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: COMPANY.name,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon?v=3`,
      email: EMAIL,
      foundingDate: "2026",
      address: { "@type": "PostalAddress", addressCountry: "GB" },
      sameAs: [VESTIGE_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "en-GB",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={manrope.variable}>
      <body>
        <a href="#main" className="ph-skip">Skip to content</a>
        <Nav />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <Motion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
