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
      
      {/* 1. HERO SECTION (Massive Bold Typography) */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 text-center flex flex-col items-center relative z-10 min-h-[85vh] justify-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-bold text-neutral-400 mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            v2.0 Now Available
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h1 className="text-6xl sm:text-8xl md:text-[8rem] font-bold leading-[0.9] tracking-tighter text-white mb-8">
            AUTOMATION <br />
            <span className="text-neutral-600">REDEFINED.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed font-medium">
            Experience the pinnacle of Discord automation. Minimalist design, absolute precision, and raw AI power.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a href="/signup" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 hover:scale-105 transition-transform duration-300">
              Start Building
            </a>
            <a href="/features" className="px-10 py-4 bg-neutral-950 border border-neutral-800 text-white font-bold rounded-full hover:bg-neutral-900 hover:scale-105 transition-transform duration-300">
              Read Docs
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. REAL HUMAN TESTIMONIALS (Adds Human Touch) */}
      <section className="w-full border-y border-neutral-900 py-24 relative z-10 bg-black">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">Loved by creators.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:border-neutral-600 transition-colors">
                <p className="text-neutral-300 text-lg leading-relaxed mb-6 font-medium">"Snnlies completely replaced 4 different bots for us. The AI integration is flawless and my members love it. The dashboard is a masterpiece."</p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-12 h-12 rounded-full border border-neutral-700" />
                  <div>
                    <h4 className="text-white font-bold">Alex M.</h4>
                    <p className="text-neutral-500 text-sm">Admin, Devs Hub</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:border-neutral-600 transition-colors">
                <p className="text-neutral-300 text-lg leading-relaxed mb-6 font-medium">"The moderation features are incredibly robust. We haven't had a single raid or spam attack since we added Snnlies. It just works."</p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?img=5" alt="User" className="w-12 h-12 rounded-full border border-neutral-700" />
                  <div>
                    <h4 className="text-white font-bold">Sarah K.</h4>
                    <p className="text-neutral-500 text-sm">Owner, Gaming Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. BENTO GRID FEATURES */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center tracking-tight">Everything you need.</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0} className="md:col-span-2">
            <div className="bg-neutral-950 border border-neutral-800 p-10 rounded-[2rem] hover:border-neutral-600 h-full flex flex-col justify-between group">
              <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Advanced AI Engine</h3>
                <p className="text-neutral-400 text-base leading-relaxed">Natural language processing that understands context, tone, and intent.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-neutral-950 border border-neutral-800 p-10 rounded-[2rem] hover:border-neutral-600 h-full flex flex-col justify-between group">
              <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Ironclad Security</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">TLS 1.3 encryption and zero data retention policies.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-neutral-950 border border-neutral-800 p-10 rounded-[2rem] hover:border-neutral-600 h-full flex flex-col justify-between group">
              <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Zero Latency</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">Edge computing ensures sub-50ms response times.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="md:col-span-2">
            <div className="bg-neutral-950 border border-neutral-800 p-10 rounded-[2rem] hover:border-neutral-600 h-full flex flex-col justify-between group">
              <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Real-Time Dashboard</h3>
                <p className="text-neutral-400 text-base leading-relaxed">Manage every aspect of your bot from a beautifully crafted interface. No commands required.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="w-full max-w-4xl mx-auto px-6 py-32 relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight text-white">FAQs</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="border border-neutral-800 rounded-3xl bg-neutral-950 overflow-hidden">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-neutral-900">
                  <span className="font-bold text-white">{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </button>
                <div className={`px-8 text-neutral-400 text-base leading-relaxed border-t border-neutral-800 overflow-hidden transition-all duration-300 ease-in-out ${faqOpen === i ? "max-h-40 py-6 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"}`}>{faq.a}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}
