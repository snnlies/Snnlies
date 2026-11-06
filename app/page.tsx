"use client";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: "How does the AI work?", a: "Snnlies uses state-of-the-art LLMs to understand context, moderate chats, and generate human-like responses instantly." },
    { q: "Is it really zero-lag?", a: "Yes. Our infrastructure is built on edge networks, ensuring sub-50ms latency globally." },
    { q: "Can I customize the bot?", a: "Absolutely. You can change its name, avatar, personality, and command prefixes directly from the dashboard." },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-black">
      
      {/* High-Quality AMOLED Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] glow-orb pointer-events-none"></div>

      {/* 1. HERO */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 text-center flex flex-col items-center relative z-10 min-h-[85vh] justify-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/50 border border-neutral-800 text-xs font-medium text-neutral-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            v2.0 Now Available
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h1 className="font-serif text-6xl sm:text-8xl md:text-[7rem] leading-[0.9] tracking-tight text-gradient mb-8">
            Automation <br />
            <span className="italic text-neutral-500">Redefined.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mb-12 leading-relaxed font-light">
            Experience the pinnacle of Discord automation. Minimalist design, absolute precision, and raw AI power.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a href="/signup" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300">
              Start Building
            </a>
            <a href="/features" className="px-8 py-4 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-all duration-300">
              Read Docs
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <section className="w-full py-10 relative z-10 bg-black border-y border-neutral-900/50 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-16 opacity-30 grayscale text-2xl md:text-3xl font-medium tracking-tight">
          <span>Discord</span><span>/</span><span>Vercel</span><span>/</span><span>GitHub</span><span>/</span><span>Notion</span><span>/</span><span>Linear</span><span>/</span>
          <span>Discord</span><span>/</span><span>Vercel</span><span>/</span><span>GitHub</span><span>/</span><span>Notion</span><span>/</span><span>Linear</span><span>/</span>
        </div>
      </section>

      {/* 3. LIVE TERMINAL DEMO (NEW FEATURE) */}
      <section className="w-full max-w-5xl mx-auto px-6 py-32 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Zero Configuration.</h2>
            <p className="text-neutral-500 font-light">Deploy in seconds with our CLI.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-950 border-b border-neutral-800">
              <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
              <span className="ml-4 text-xs text-neutral-600 font-mono">snnlies-cli</span>
            </div>
            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-sm text-neutral-300 space-y-3">
              <p><span className="text-neutral-500">$</span> npx snnlies deploy</p>
              <p className="text-neutral-500">Initializing environment...</p>
              <p className="text-neutral-500">Connecting to Discord API...</p>
              <p className="text-white">✔ Authentication successful.</p>
              <p className="text-white">✔ AI Engine attached (Gemini).</p>
              <p className="text-white">✔ Moderation rules loaded.</p>
              <p className="text-green-500">Deployment successful! Bot is live.</p>
              <p><span className="text-neutral-500">$</span> <span className="animate-pulse">_</span></p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. BENTO GRID FEATURES (NEW LAYOUT) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-16 text-center">Everything you need.</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Box 1 (Large) */}
          <ScrollReveal delay={0}>
            <div className="md:col-span-2 bg-neutral-950/40 border border-neutral-800/60 p-10 rounded-[2rem] hover:bg-neutral-900/40 transition-colors h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">Advanced AI Engine</h3>
                <p className="text-neutral-500 text-base leading-relaxed font-light">Natural language processing that understands context, tone, and intent. Perfect for community management.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Box 2 (Small) */}
          <ScrollReveal delay={100}>
            <div className="bg-neutral-950/40 border border-neutral-800/60 p-10 rounded-[2rem] hover:bg-neutral-900/40 transition-colors h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Ironclad Security</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light">TLS 1.3 encryption and zero data retention policies.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Box 3 (Small) */}
          <ScrollReveal delay={200}>
            <div className="bg-neutral-950/40 border border-neutral-800/60 p-10 rounded-[2rem] hover:bg-neutral-900/40 transition-colors h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Zero Latency</h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-light">Edge computing ensures sub-50ms response times globally.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Box 4 (Large) */}
          <ScrollReveal delay={300}>
            <div className="md:col-span-2 bg-neutral-950/40 border border-neutral-800/60 p-10 rounded-[2rem] hover:bg-neutral-900/40 transition-colors h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">Real-Time Dashboard</h3>
                <p className="text-neutral-500 text-base leading-relaxed font-light">Manage every aspect of your bot from a beautifully crafted interface. No commands required.</p>
              </div>
            </div>
          </ScrollReveal>
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
              <div className="border border-neutral-800/60 rounded-3xl bg-neutral-950/40 backdrop-blur-sm overflow-hidden transition-all duration-300">
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
