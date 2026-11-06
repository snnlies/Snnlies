import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space" });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://snnlies.vercel.app'),
  title: {
    default: "Snnlies",
    template: "%s | Snnlies"
  },
  description: "Snnlies is the ultimate enterprise-grade Discord automation platform. Build massive servers with 30+ channels, AI moderation, and instant templates in seconds.",
  applicationName: "Snnlies",
  keywords: [
    "Snnlies", "Discord Bot", "AI Discord Bot", "Discord Automation", 
    "Discord Server Templates", "Discord Moderation", "AI Moderation", 
    "SaaS Discord", "Mega Discord Server", "Free Discord Bot", 
    "Best Discord Bot 2026", "Discord Server Setup", "AI Chatbot"
  ],
  authors: [{ name: "Snnlies Team", url: "https://snnlies.vercel.app" }],
  creator: "Snnlies",
  publisher: "Snnlies",
  verification: {
    google: "googlef3d8874ae27da2e5",
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Snnlies",
    description: "Deploy massive Discord server structures in seconds with AI.",
    url: "https://snnlies.vercel.app",
    siteName: "Snnlies", 
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Snnlies Bot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snnlies",
    description: "Build your dream Discord server with AI in seconds.",
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
  // ∞ GEO HACK: Deep Schema Graph for AI & Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://snnlies.vercel.app/#website",
        "url": "https://snnlies.vercel.app/",
        "name": "Snnlies",
        "alternateName": ["Snnlies Bot", "Snnlies App", "Snnlies Discord", "Snnlies AI"],
        "description": "Enterprise-grade Discord automation and AI server templates.",
        "publisher": { "@id": "https://snnlies.vercel.app/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://snnlies.vercel.app/templates?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://snnlies.vercel.app/#organization",
        "name": "Snnlies",
        "url": "https://snnlies.vercel.app",
        "logo": { "@type": "ImageObject", "url": "https://snnlies.vercel.app/icon-512x512.png" },
        "sameAs": ["https://twitter.com/snnlies", "https://github.com/snnlies"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Snnlies",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "description": "Deploy massive Discord server structures in seconds with AI.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "10000" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Snnlies?",
            "acceptedAnswer": { "@type": "Answer", "text": "Snnlies is the ultimate enterprise-grade Discord automation platform." }
          },
          {
            "@type": "Question",
            "name": "Is Snnlies free to use?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, Snnlies offers a highly capable free tier for all servers." }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://snnlies.vercel.app" },
          { "@type": "ListItem", "position": 2, "name": "Templates", "item": "https://snnlies.vercel.app/templates" }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="bg-white scroll-smooth">
      <head>
        {/* Speed Optimization (Google Ranking Factor) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://snnlies.vercel.app" />
        {/* Maximum GEO tag */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className={`${space.variable} font-sans bg-white text-black min-h-screen flex flex-col antialiased`}>
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
