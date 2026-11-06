import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const space = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-space" 
});

export const metadata: Metadata = {
  title: "Snnlies | The Future of Automation",
  description: "Enterprise-grade Discord automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${space.variable} font-sans bg-black text-white min-h-screen flex flex-col selection:bg-white selection:text-black antialiased`}>
        <Navbar />
        <main className="flex-grow w-full pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
