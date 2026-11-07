import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space" });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://snnlies.vercel.app'),
  title: {
    default: "Snnlies® | The #1 Best Discord Automation",
    template: "%s | Snnlies®",
  },
  description: "Build massive servers with AI moderation and instant templates.",
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  // Browser tab logo (logo.png in public/, same image as app/icon.png)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  // Social Media Sharing Banner (banner.png in public/)
  openGraph: {
    title: "Snnlies® | The #1 Best Discord Automation",
    description: "Build massive servers with AI moderation and instant templates.",
    url: "https://snnlies.vercel.app",
    siteName: "Snnlies®",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Snnlies Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snnlies® | The #1 Best Discord Automation",
    description: "Build massive servers with AI moderation and instant templates.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-white">
      <body suppressHydrationWarning className={`${space.variable} font-sans bg-white text-black min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-grow w-full pt-28 bg-white">{children}</main>
      </body>
    </html>
  );
}
