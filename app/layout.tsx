import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Instrument_Serif({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: "Snnlies | The Future of Automation",
  description: "Experience the pinnacle of Discord automation with raw AI power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${serif.variable} font-sans bg-black text-white min-h-screen flex flex-col selection:bg-white selection:text-black`}>
        <Navbar />
        <main className="flex-grow w-full pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
