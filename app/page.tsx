"use client";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-black">
      {/* HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-24 pb-32 text-center flex flex-col items-center relative z-10 min-h-[85vh] justify-center">
        <ScrollReveal>
          <h1 className="text-6xl sm:text-8xl md:text-[7rem] font-bold leading-[0.9] tracking-tighter text-white mb-8">
            INFRASTRUCTURE <br />
            <span className="text-white">FOR DISCORD.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-white text-base md:text-xl max-w-2xl mb-12 leading-relaxed font-light">
            Deploy enterprise-grade automation, AI moderation, and massive server structures in seconds. Built for scale.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <Link href="/signup" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              Deploy Snnlies
            </Link>
            <Link href="/templates" className="px-10 py-4 bg-black border border-neutral-800 text-white font-medium rounded-full hover:border-white transition-colors">
              View Templates
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* STATS SECTION */}
      <section className="w-full border-y border-neutral-900 py-16 relative z-10 bg-black">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <ScrollReveal delay={0}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">9.6K</h3>
            <p className="text-white text-xs font-medium uppercase tracking-widest">Active Users</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">28.7K</h3>
            <p className="text-white text-xs font-medium uppercase tracking-widest">Servers</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">99.9%</h3>
            <p className="text-white text-xs font-medium uppercase tracking-widest">Uptime</p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">24/7</h3>
            <p className="text-white text-xs font-medium uppercase tracking-widest">Support</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
