"use client";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-black">
      <section className="w-full max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center relative z-10 min-h-[80vh] justify-center">
        <ScrollReveal>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tighter text-white mb-8">
            INFRASTRUCTURE <br /><span className="text-white">FOR DISCORD.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-white text-base md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
            Deploy enterprise-grade automation, AI moderation, and massive server structures in seconds. Built for scale.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <Link href="/chat" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Try AI Workspace
            </Link>
            <Link href="/templates" className="px-10 py-4 bg-black border border-neutral-800 text-white font-medium rounded-full hover:border-white transition-colors">
              View Templates
            </Link>
          </div>
        </ScrollReveal>
      </section>
      
      {/* Footer shows only on home page */}
      <Footer />
    </div>
  );
}
