import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
      <body className={`${inter.variable} font-sans bg-black text-white min-h-screen flex flex-col selection:bg-white selection:text-black antialiased`}>
        <Navbar />
        <main className="flex-grow w-full pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
