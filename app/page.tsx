"use client";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: "What is Snnlies?", a: "A premium, enterprise-grade Discord bot with AI moderation and automation." },
    { q: "How do Credits work?", a: "Your server gets a daily allocation of credits that reset every 24 hours to prevent abuse." },
    { q: "Is my data safe?", a: "Yes. TLS 1.3 encryption, zero-data-retention for AI, and strict anti-bypass systems." },
    { q: "Multi-language?", a: "Yes. Our AI natively understands and responds in over 50 languages." },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

      {/* 1. HERO */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-24 pb-24 text-center flex flex-col items-center relative z-10 min-h-[75vh] justify-center">
        <ScrollReveal>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Snnlies</h1>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">Elevate your Discord server with unmatched moderation and raw AI power.</p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a href="/signup" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">Get Started</a>
            <a href="/features" className="px-8 py-4 border border-neutral-800 bg-black/50 text-white font-semibold rounded-full hover:bg-neutral-900 transition-all duration-300 transform hover:scale-105">Features</a>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. TRUSTED BY */}
      <section className="w-full border-y border-neutral-900 py-16 relative z-10 bg-black">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold text-neutral-600 uppercase tracking-[0.2em] mb-8">Powering next-gen communities</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale">
              <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">Discord</span>
              <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">Vercel</span>
              <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">GitHub</span>
              <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">Notion</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. STATS */}
      <section className="w-full py-24 relative z-10 bg-black">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <ScrollReveal delay={0}><div className="group"><div className="flex justify-center mb-4"><div className="w-2 h-2 rounded-full bg-white animate-ping"></div></div><h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-neutral-300 transition-colors">99.99%</h3><p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">Uptime</p></div></ScrollReveal>
          <ScrollReveal delay={100}><div className="group"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-auto mb-4 text-neutral-500 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg><h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-neutral-300 transition-colors">&lt;50ms</h3><p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">Latency</p></div></ScrollReveal>
          <ScrollReveal delay={200}><div className="group"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-auto mb-4 text-neutral-500 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg><h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-neutral-300 transition-colors">Zero-Lag</h3><p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">AI Engine</p></div></ScrollReveal>
          <ScrollReveal delay={300}><div className="group"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-auto mb-4 text-neutral-500 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg><h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-neutral-300 transition-colors">24/7</h3><p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">Monitoring</p></div></ScrollReveal>
        </div>
      </section>

      {/* 4. CREDITS */}
      <section className="w-full border-y border-neutral-900 bg-neutral-950/20 py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Credits & Limits</h2>
              <p className="text-neutral-400 font-light">High-end security. Anti-bypass systems. Daily resets.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ScrollReveal delay={0}><div className="text-center p-8 border border-neutral-800 rounded-[2rem] bg-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mx-auto mb-4 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg><h3 className="text-lg font-bold text-white mb-2">Daily Reset</h3><p className="text-neutral-500 text-sm font-light">Fresh allocation every 24 hours.</p></div></ScrollReveal>
            <ScrollReveal delay={100}><div className="text-center p-8 border border-neutral-800 rounded-[2rem] bg-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mx-auto mb-4 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg><h3 className="text-lg font-bold text-white mb-2">Anti-Bypass</h3><p className="text-neutral-500 text-sm font-light">Blocks alt-account spam automatically.</p></div></ScrollReveal>
            <ScrollReveal delay={200}><div className="text-center p-8 border border-neutral-800 rounded-[2rem] bg-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mx-auto mb-4 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg><h3 className="text-lg font-bold text-white mb-2">Strict Rules</h3><p className="text-neutral-500 text-sm font-light">Zero tolerance for exploitation.</p></div></ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">FAQs</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="border border-neutral-800/50 rounded-[2rem] bg-neutral-950 overflow-hidden transition-all duration-300">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full px-6 md:px-8 py-5 text-left flex justify-between items-center hover:bg-neutral-900/50 transition-colors">
                  <span className="font-medium text-sm md:text-base text-neutral-200">{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </button>
                <div className={`px-6 md:px-8 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/50 overflow-hidden transition-all duration-300 ${faqOpen === i ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"}`}>{faq.a}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
