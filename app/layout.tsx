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
    default: "Snnlies® | The #1 Best Discord Automation Platform",
    template: "%s | Snnlies®"
  },
  description: "Snnlies® is the top-rated enterprise-grade Discord automation platform. Build massive servers with 30+ channels, AI moderation, and instant templates in seconds.",
  applicationName: "Snnlies®",
  keywords: ["Snnlies®", "Best Discord Bot 2026", "Top Discord Automation", "Discord Server Builder", "AI Discord Bot"],
  authors: [{ name: "Sabine", url: "https://x.com/sabinebyy" }],
  creator: "Sabine",
  publisher: "Snnlies®",
  verification: { google: "googlef3d8874ae27da2e5" },
  alternates: { canonical: '/' },
  manifest: '/manifest.json',
  
  // OPENGRAPH (Discord, Facebook, LinkedIn)
  openGraph: {
    title: "Snnlies® | #1 Discord Automation",
    description: "Deploy massive Discord server structures in seconds with AI. Join the top communities using Snnlies.",
    url: "https://snnlies.vercel.app",
    siteName: "Snnlies®", 
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Snnlies Dashboard" }],
  },
  
  // TWITTER / X
  twitter: {
    card: "summary_large_image",
    title: "Snnlies® | #1 Discord Automation",
    description: "Build your dream Discord server with AI in seconds.",
    creator: "@sabinebyy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Snnlies Dashboard" }],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://snnlies.vercel.app/#website",
        "url": "https://snnlies.vercel.app/",
        "name": "Snnlies®",
        "description": "The #1 best enterprise-grade Discord automation platform.",
        "publisher": { "@id": "https://snnlies.vercel.app/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://snnlies.vercel.app/#organization",
        "name": "Snnlies®",
        "url": "https://snnlies.vercel.app",
        "logo": { "@type": "ImageObject", "url": "https://snnlies.vercel.app/icon.svg" },
        "founder": { "@type": "Person", "name": "Sabine" },
        "sameAs": ["https://discord.gg/9FP3afu4eb", "https://x.com/sabinebyy"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Snnlies®",
        "operatingSystem": "Web",
        "applicationCategory": "BusinessApplication",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "50000" }
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
