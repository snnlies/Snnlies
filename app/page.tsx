"use client";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: "What is Snnlies?", a: "An enterprise-grade Discord bot powered by next-generation AI, designed for absolute precision and scale." },
    { q: "How do Credits work?", a: "Your server gets a daily allocation of credits that reset every 24 hours to ensure fair usage and prevent abuse." },
    { q: "Is my data safe?", a: "Absolutely. TLS 1.3 encryption, zero-data-retention for AI processing, and strict anti-bypass systems." },
    { q: "Multi-language?", a: "Yes. Our AI natively understands and responds in over 50 languages." },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-black">
      
      {/* Mesh Gradient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      {/* 1. HERO SECTION (Editorial Typography) */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-24 pb-32 text-center flex flex-col items-center relative z-10 min-h-[85vh] justify-center">
        <ScrollReveal>
          <p className="text-neutral-400 text-sm tracking-[0.2em] uppercase mb-6 font-medium">Welcome to the future</p>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-9xl leading-[0.95] tracking-tight text-white mb-8">
            The Future of <br />
            <span className="text-neutral-500 italic">Discord</span> Automation.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mb-12 leading-relaxed font-light">
            Snnlies combines unmatched moderation, extreme customizability, and raw AI power into one minimalist platform. Built for 2026.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a href="/signup" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/features" className="px-10 py-4 border border-neutral-800 bg-transparent text-white font-semibold rounded-full hover:bg-neutral-900 transition-all duration-300">
              Explore Features
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. INFINITE MARQUEE (Trusted By) */}
      <section className="w-full border-y border-neutral-900 py-8 relative z-10 bg-black overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-16 md:gap-32 opacity-30 grayscale text-3xl md:text-5xl font-serif italic">
          <span>Discord</span>
          <span>Vercel</span>
          <span>GitHub</span>
          <span>Notion</span>
          <span>Stripe</span>
          <span>Linear</span>
          <span>Discord</span>
          <span>Vercel</span>
          <span>GitHub</span>
          <span>Notion</span>
          <span>Stripe</span>
          <span>Linear</span>
        </div>
      </section>

      {/* 3. BENTO GRID STATS (Creative Layout) */}
      <section className="w-full max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Box */}
          <ScrollReveal delay={0}>
            <div className="md:col-span-2 bg-neutral-950/50 border border-neutral-800/80 p-10 md:p-16 rounded-[2.5rem] flex flex-col justify-between h-full hover:border-neutral-600 transition-colors duration-500">
              <div className="w-2 h-2 rounded-full bg-white animate-ping mb-8"></div>
              <div>
                <h3 className="font-serif text-6xl md:text-8xl text-white mb-4">99.99%</h3>
                <p className="text-neutral-500 tracking-widest uppercase text-sm font-medium">Uptime SLA Guarantee</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Small Box 1 */}
          <ScrollReveal delay={100}>
            <div className="bg-neutral-950/50 border border-neutral-800/80 p-10 rounded-[2.5rem] flex flex-col justify-between h-full hover:border-neutral-600 transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-10 h-10 mb-8 text-neutral-500"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
              <div>
                <h3 className="font-serif text-5xl text-white mb-2">&lt;50ms</h3>
                <p className="text-neutral-500 text-xs tracking-widest uppercase font-medium">Global Latency</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Small Box 2 */}
          <ScrollReveal delay={200}>
            <div className="bg-neutral-950/50 border border-neutral-800/80 p-10 rounded-[2.5rem] flex flex-col justify-between h-full hover:border-neutral-600 transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-10 h-10 mb-8 text-neutral-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              <div>
                <h3 className="font-serif text-5xl text-white mb-2">Zero</h3>
                <p className="text-neutral-500 text-xs tracking-widest uppercase font-medium">Lag AI Engine</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Large Box 2 */}
          <ScrollReveal delay={300}>
            <div className="md:col-span-2 bg-neutral-950/50 border border-neutral-800/80 p-10 md:p-16 rounded-[2.5rem] flex flex-col justify-between h-full hover:border-neutral-600 transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-10 h-10 mb-8 text-neutral-500"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
              <div>
                <h3 className="font-serif text-5xl text-white mb-4">24/7 Monitoring</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-md">Active security systems constantly monitoring for threats, ensuring your community remains safe at all times.</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. CREDITS (Minimal List) */}
      <section className="w-full border-y border-neutral-900 bg-black py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-16 text-center">Credits & Limits</h2>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0}>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-neutral-800/50 rounded-3xl bg-neutral-950/30 hover:bg-neutral-900/50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-white mb-2">Daily Reset</h3>
                  <p className="text-neutral-500 text-sm font-light">Fresh allocation every 24 hours.</p>
                </div>
                <span className="text-neutral-600 text-sm tracking-widest uppercase">01</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-neutral-800/50 rounded-3xl bg-neutral-950/30 hover:bg-neutral-900/50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-white mb-2">Anti-Bypass System</h3>
                  <p className="text-neutral-500 text-sm font-light">Blocks alt-account spam automatically.</p>
                </div>
                <span className="text-neutral-600 text-sm tracking-widest uppercase">02</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-neutral-800/50 rounded-3xl bg-neutral-950/30 hover:bg-neutral-900/50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-medium text-white mb-2">Strict Enforcement</h3>
                  <p className="text-neutral-500 text-sm font-light">Zero tolerance for exploitation.</p>
                </div>
                <span className="text-neutral-600 text-sm tracking-widest uppercase">03</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full max-w-3xl mx-auto px-6 py-32 relative z-10">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-6xl mb-16 text-center text-white">FAQs</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="border border-neutral-800/50 rounded-3xl bg-neutral-950 overflow-hidden transition-all duration-300">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-neutral-900/50 transition-colors">
                  <span className="font-medium text-neutral-200">{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </button>
                <div className={`px-8 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/50 overflow-hidden transition-all duration-300 ${faqOpen === i ? "max-h-40 py-6 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"}`}>{faq.a}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}
