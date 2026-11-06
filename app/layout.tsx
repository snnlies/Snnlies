import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snnlies | Premium AI Agent",
  description: "The next generation of intelligent Discord automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col selection:bg-white selection:text-black`}>
        <Navbar />
        <main className="flex-grow w-full pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
