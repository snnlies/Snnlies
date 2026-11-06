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
    // Home page will strictly show "Snnlies" in Google Search
    default: "Snnlies",
    // Subpages will show "Page Name | Snnlies"
    template: "%s | Snnlies"
  },
  description: "Snnlies is the #1 enterprise-grade Discord automation platform. Deploy massive servers with 30+ channels, AI moderation, and instant templates in seconds.",
  applicationName: "Snnlies",
  keywords: ["Snnlies", "Discord Bot", "AI Automation", "Discord Server Templates", "Discord Moderation", "SaaS"],
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
    // This forces Google and Social Media to show "Snnlies" as the site name
    siteName: "Snnlies", 
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Snnlies" }],
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
  // 1000% GEO HACK: Strict WebSite Schema for Google Site Name
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://snnlies.vercel.app/#website",
        "url": "https://snnlies.vercel.app/",
        "name": "Snnlies", // This is the primary Site Name
        "alternateName": ["Snnlies Bot", "Snnlies App", "Snnlies Discord"],
        "description": "Enterprise-grade Discord automation and AI server templates.",
        "publisher": {
          "@id": "https://snnlies.vercel.app/#organization"
        },
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
        "logo": {
          "@type": "ImageObject",
          "url": "https://snnlies.vercel.app/icon-512x512.png"
        },
        "sameAs": ["https://twitter.com/snnlies", "https://github.com/snnlies"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Snnlies",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "5000" }
      }
    ]
  };

  return (
    <html lang="en" className="bg-white scroll-smooth">
      <head>
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
