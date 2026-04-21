import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getSiteContent } from "@/lib/data";
import "./globals.css";

const site = getSiteContent();

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.brandName} | ${site.brandTagline}`,
    template: `%s | ${site.brandName}`
  },
  description:
    "A premium fashion product showcase for brands, categories and curated catalog presentation.",
  applicationName: site.brandName,
  keywords: [
    "fashion showcase",
    "brand catalog",
    "lookbook website",
    "luxury product display",
    "showroom website",
    "fashion products"
  ],
  authors: [{ name: site.brandName }],
  creator: site.brandName,
  publisher: site.brandName,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.siteUrl,
    siteName: site.brandName,
    title: `${site.brandName} | ${site.brandTagline}`,
    description:
      "A premium fashion product showcase for brands, categories and curated catalog presentation.",
    images: [
      {
        url: site.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${site.brandName} luxury fashion showcase homepage preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandName} | ${site.brandTagline}`,
    description:
      "A premium fashion product showcase for brands, categories and curated catalog presentation.",
    images: [site.defaultOgImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(31,35,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(31,35,32,0.03)_1px,transparent_1px)] bg-[size:88px_88px] opacity-40" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(216,184,146,0.18),transparent_55%)]" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
