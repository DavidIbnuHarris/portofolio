import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://infix-portfolio.vercel.app"; // TODO: Ganti dengan domain Vercel Anda nanti

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "INFiX — Informatics Engineering Student",
  description: portfolioData.identity.about,
  openGraph: {
    title: "INFiX — Informatics Engineering Student",
    description: portfolioData.identity.about,
    url: siteUrl,
    siteName: "INFiX Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // SEO Schema menggunakan data INFiX
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.identity.name,
    jobTitle: portfolioData.identity.role,
    email: portfolioData.identity.contact.email,
    url: siteUrl,
  };

  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}