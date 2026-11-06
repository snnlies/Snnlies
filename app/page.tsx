"use client";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-[#FAFAFA]">
      <section className="w-full max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center relative z-10 min-h-[85vh] justify-center">
        
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
        
        {/* Exact Apple Sliding Button from your inspiration */}
        <ScrollReveal delay={400}>
          <div className="flex items-center justify-center mt-4">
            <Link 
              href="/chat" 
              className="group relative flex items-center p-2 bg-[#EBEBEB] rounded-full transition-all duration-500 ease-out hover:bg-[#E0E0E0] hover:shadow-lg cursor-pointer"
            >
              <span className="flex items-center justify-center bg-white px-10 py-4 rounded-full shadow-[0_2px_15px_rgba(0,0,0,0.08)] text-black font-semibold text-xl transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-x-1">
                Get Started
              </span>
              <span className="pl-5 pr-4 text-black transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </ScrollReveal>
        
      </section>
      <Footer />
    </div>
  );
}
