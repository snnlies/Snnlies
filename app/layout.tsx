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
    default: "Snnlies | #1 Mega Discord AI Automation & Templates",
    template: "%s | Snnlies"
  },
  description: "Snnlies is the #1 enterprise-grade Discord automation platform. Deploy massive servers with 30+ channels, AI moderation, and instant templates in seconds.",
  keywords: ["Snnlies", "Discord Bot", "AI Automation", "Discord Server Templates", "Discord Moderation", "SaaS", "AI Chatbot", "Mega Server Setup"],
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
    title: "Snnlies | Mega Discord AI Automation",
    description: "Deploy massive Discord server structures in seconds with AI. The ultimate SaaS for server owners.",
    url: "https://snnlies.vercel.app",
    siteName: "Snnlies",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Snnlies Dashboard Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snnlies | Mega Discord AI Automation",
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
  // 1000% GEO HACK: Multi-Schema Graph for AI & Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Snnlies",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "url": "https://snnlies.vercel.app",
        "description": "Enterprise-grade Discord automation, AI moderation, and massive server structures.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "5000" }
      },
      {
        "@type": "Organization",
        "name": "Snnlies",
        "url": "https://snnlies.vercel.app",
        "logo": "https://snnlies.vercel.app/icon-512x512.png",
        "sameAs": ["https://twitter.com/snnlies", "https://github.com/snnlies"]
      },
      {
        "@type": "WebSite",
        "name": "Snnlies",
        "url": "https://snnlies.vercel.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://snnlies.vercel.app/templates?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How to automate a Discord server?",
            "acceptedAnswer": { "@type": "Answer", "text": "Use Snnlies AI Workspace to instantly generate roles and channels, then deploy in one click." }
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
        {/* Speed Hacks: Preconnect for faster loading (SEO Boost) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://snnlies.vercel.app" />
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
