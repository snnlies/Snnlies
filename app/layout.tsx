import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space" });

export const metadata: Metadata = {
  metadataBase: new URL('https://snnlies.vercel.app'),
  title: {
    default: "Snnlies | Enterprise Discord Automation",
    template: "%s | Snnlies"
  },
  description: "Deploy enterprise-grade automation, AI moderation, and massive Discord server structures in seconds. Built for scale.",
  keywords: ["Discord Bot", "AI Automation", "Discord Server Templates", "Discord Moderation", "SaaS", "AI Chatbot"],
  authors: [{ name: "Snnlies Team" }],
  openGraph: {
    title: "Snnlies | Enterprise Discord Automation",
    description: "Deploy massive Discord server structures in seconds.",
    url: "https://snnlies.vercel.app",
    siteName: "Snnlies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snnlies",
    description: "Enterprise-grade Discord automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // JSON-LD Structured Data for GEO (Generative Engine Optimization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Snnlies",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Premium Discord automation and AI solutions. Deploy massive server structures in seconds.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1024"
    }
  };

  return (
    <html lang="en" className="bg-white scroll-smooth">
      <body className={`${space.variable} font-sans bg-white text-black min-h-screen flex flex-col antialiased`}>
        {/* GEO Script Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow w-full pt-28">{children}</main>
      </body>
    </html>
  );
}
