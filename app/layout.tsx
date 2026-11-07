import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const space = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space" });

export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };
export const metadata: Metadata = { metadataBase: new URL('https://snnlies.vercel.app'), title: "Snnlies®" };

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
