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
        <ScrollReveal delay={400}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <Link href="/chat" className="px-10 py-4 bg-gradient-to-b from-blue-400 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-all shadow-[0_8px_20px_rgba(59,130,246,0.3)]">
              Try AI Workspace
            </Link>
            <Link href="/templates" className="px-10 py-4 bg-white border border-neutral-200 text-black font-semibold rounded-full hover:bg-neutral-50 transition-colors apple-shadow">
              View Templates
            </Link>
          </div>
        </ScrollReveal>
      </section>
      <Footer />
    </div>
  );
}
