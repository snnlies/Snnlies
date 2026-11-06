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
  authors: [{ name: "Snnlies Team", url: "https://snnlies.vercel.app" }],
  creator: "Snnlies",
  publisher: "Snnlies",
  verification: {
    google: "googlef3d8874ae27da2e5", // Added Google Verification Meta
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Snnlies | Enterprise Discord Automation",
    description: "Deploy massive Discord server structures in seconds.",
    url: "https://snnlies.vercel.app",
    siteName: "Snnlies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://snnlies.vercel.app/opengraph-image.jpg", // Placeholder for OG Image
        width: 1200,
        height: 630,
        alt: "Snnlies Dashboard",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snnlies",
    description: "Enterprise-grade Discord automation.",
    creator: "@snnlies",
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
  // JSON-LD Structured Data for GEO (Software + Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
        "@type": "Organization",
        "name": "Snnlies",
        "url": "https://snnlies.vercel.app",
        "logo": "https://snnlies.vercel.app/icon-512x512.png",
        "sameAs": [
          "https://twitter.com/snnlies",
          "https://github.com/snnlies"
        ]
      }
    ]
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
