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

  const templates = [
    { name: "Gaming Hub", desc: "LFG channels, voice rooms, and automated tournament brackets.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
    { name: "Developer Space", desc: "Code sharing channels, GitHub feeds, and AI debugging.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { name: "Community Central", desc: "Welcome gates, leveling systems, and auto-moderation.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-black">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center relative z-10 min-h-[75vh] justify-center">
        <ScrollReveal delay={100}>
          <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-bold leading-[0.95] tracking-tighter text-white mb-6">
            AUTOMATION <br />
            <span className="text-white">REDEFINED.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-white text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light">
            Experience the pinnacle of Discord automation. Minimalist design, absolute precision, and raw AI power.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a href="/signup" className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              Start Building
            </a>
            <a href="/features" className="px-8 py-3.5 bg-black border border-neutral-800 text-white font-medium rounded-full hover:border-white transition-colors">
              Read Docs
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* TEMPLATES */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 relative z-10 border-t border-neutral-900">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-3 tracking-tight">Professional Templates</h2>
            <p className="text-white font-light max-w-lg mx-auto text-sm">Deploy a fully configured server structure in one click. Built by experts.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {templates.map((template, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="bg-black border border-neutral-800 p-6 rounded-2xl hover:border-white transition-colors duration-300 flex flex-col h-full">
                <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d={template.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{template.name}</h3>
                <p className="text-white text-sm font-light leading-relaxed mb-6 flex-grow">{template.desc}</p>
                <button className="w-full py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-white hover:text-black transition-colors">
                  Deploy Template
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* BENTO FEATURES */}
      <section className="w-full max-w-6xl mx-auto px-6 py-20 relative z-10 border-t border-neutral-900">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-12 text-center tracking-tight">Everything you need.</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ScrollReveal delay={0} className="md:col-span-2">
            <div className="bg-black border border-neutral-800 p-8 rounded-2xl hover:border-white h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Advanced AI Engine</h3>
                <p className="text-white text-sm leading-relaxed font-light">Natural language processing that understands context, tone, and intent.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-black border border-neutral-800 p-8 rounded-2xl hover:border-white h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2 tracking-tight">Ironclad Security</h3>
                <p className="text-white text-xs leading-relaxed font-light">TLS 1.3 encryption and zero data retention policies.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-black border border-neutral-800 p-8 rounded-2xl hover:border-white h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2 tracking-tight">Zero Latency</h3>
                <p className="text-white text-xs leading-relaxed font-light">Edge computing ensures sub-50ms response times.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600} className="md:col-span-2">
            <div className="bg-black border border-neutral-800 p-8 rounded-2xl hover:border-white h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Real-Time Dashboard</h3>
                <p className="text-white text-sm leading-relaxed font-light">Manage every aspect of your bot from a beautifully crafted interface. No commands required.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQS */}
      <section className="w-full max-w-3xl mx-auto px-6 py-20 relative z-10 border-t border-neutral-900">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-center tracking-tight text-white">FAQs</h2>
        </ScrollReveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="border border-neutral-800 rounded-xl bg-black overflow-hidden">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-900 transition-colors">
                  <span className="font-medium text-white text-sm md:text-base">{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`w-4 h-4 text-white transition-transform duration-500 ${faqOpen === i ? "rotate-180" : ""}`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </button>
                <div className={`px-6 text-white text-sm leading-relaxed border-t border-neutral-800 overflow-hidden transition-all duration-500 ease-in-out ${faqOpen === i ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"}`}>{faq.a}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}
