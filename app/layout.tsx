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
  title: "Snnlies® | The #1 Best Discord Automation",
  description: "Build massive servers with AI moderation and instant templates.",
  // Social Media Sharing Banner
  openGraph: {
    title: "Snnlies® | The #1 Best Discord Automation",
    description: "Build massive servers with AI moderation and instant templates.",
    url: "https://snnlies.vercel.app",
    siteName: "Snnlies®",
    images: [
      {
        url: "/banner.png", // Path to your new banner
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
    images: ["/banner.png"], // Path to your new banner
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
