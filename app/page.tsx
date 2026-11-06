"use client";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-[#FAFAFA]">
      <section className="w-full max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center relative z-10 min-h-[80vh] justify-center">
        <ScrollReveal>
          <h1 className="text-6xl sm:text-8xl md:text-[7rem] font-bold leading-[0.9] tracking-tighter text-black mb-8">
            INFRASTRUCTURE <br /><span className="text-neutral-400">FOR DISCORD.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-neutral-600 text-base md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
            Deploy enterprise-grade automation, AI moderation, and massive server structures in seconds. Built for scale.
          </p>
        </ScrollReveal>
        
        {/* Apple Sliding Button */}
        <ScrollReveal delay={400}>
          <Link href="/chat" className="group relative flex items-center p-1.5 bg-[#EBEBEB] rounded-full transition-all duration-300 hover:bg-[#E0E0E0]">
            <span className="flex items-center justify-center bg-white px-8 py-3.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-black font-semibold text-lg transition-transform duration-300 group-hover:scale-105">
              Get Started
            </span>
            <span className="pl-4 pr-3 text-black transition-transform duration-300 group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </ScrollReveal>
      </section>
      <Footer />
    </div>
  );
}
