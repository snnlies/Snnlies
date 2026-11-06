"use client";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState } from "react";
import { playClickSound } from "../utils/sound";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: "What is Snnlies?", a: "Snnlies is the #1 premium, enterprise-grade Discord bot designed to elevate your server. It combines advanced automation, next-generation moderation, and a powerful AI engine." },
    { q: "How do Credits work?", a: "Your server gets a daily allocation of credits that reset every 24 hours to prevent abuse. Light communities run perfectly on the free tier." },
    { q: "Is my data safe?", a: "Yes. TLS 1.3 encryption, zero-data-retention for AI, and strict anti-bypass systems." },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-white">
      
      {/* Semantic HTML Hack for SEO */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-24 pb-20 text-center flex flex-col items-center relative z-10 min-h-[75vh] justify-center">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[1] md:leading-[0.9] tracking-tighter text-black mb-8 w-full">
            MEGA DISCORD <br /><span className="text-black">AI AUTOMATION.</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <h2 className="text-black text-base md:text-xl max-w-2xl mb-12 leading-relaxed font-medium px-2">
            Deploy enterprise-grade automation, AI moderation, and massive server structures in seconds. The ultimate SaaS for server owners.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto px-4 sm:px-0">
            <Link href="/chat" onClick={playClickSound} className="px-10 py-4 bg-gradient-to-b from-blue-400 to-blue-500 text-white font-semibold text-lg rounded-full hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_8px_20px_rgba(59,130,246,0.3)] text-center w-full sm:w-auto">
              Try AI Workspace
            </Link>
            <Link href="/templates" onClick={playClickSound} className="px-10 py-4 bg-white border border-neutral-200 text-black font-semibold text-lg rounded-full hover:bg-neutral-50 hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] apple-shadow text-center w-full sm:w-auto">
              View Templates
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* SEO Keyword Section */}
      <section className="w-full border-y border-neutral-100 py-12 relative z-10 bg-white">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-8">Trusted by next-gen Discord communities</h3>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-70">
              <span className="text-2xl font-bold text-black tracking-tighter">Discord</span>
              <span className="text-2xl font-bold text-black tracking-tighter">Vercel</span>
              <span className="text-2xl font-bold text-black tracking-tighter">GitHub</span>
              <span className="text-2xl font-bold text-black tracking-tighter">Notion</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Features with SEO Keywords */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24 relative z-10 bg-white">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-black">Everything you need to scale.</h2>
            <p className="text-black text-lg max-w-lg mx-auto font-medium">Built for scale, security, and seamless community management.</p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0} className="md:col-span-2">
            <article className="bg-white border border-neutral-200 p-8 md:p-10 rounded-[2rem] apple-shadow h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-700 ease-out">
              <div className="w-14 h-14 rounded-full bg-neutral-50 flex items-center justify-center mb-8 border border-neutral-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">Advanced AI Discord Engine</h3>
                <p className="text-black text-base leading-relaxed">Natural language processing that understands context, tone, and intent. Automate moderation easily.</p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <article className="bg-white border border-neutral-200 p-8 md:p-10 rounded-[2rem] apple-shadow h-full flex flex-col justify-between hover:-translate-y-2 transition-transform duration-700 ease-out">
              <div className="w-14 h-14 rounded-full bg-neutral-50 flex items-center justify-center mb-8 border border-neutral-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-3 tracking-tight">Ironclad Server Security</h3>
                <p className="text-black text-sm leading-relaxed">TLS 1.3 encryption and zero data retention policies for your Discord server.</p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl mx-auto px-4 md:px-6 py-24 relative z-10 bg-white border-t border-neutral-100">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight text-black">FAQs</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden apple-shadow transition-shadow duration-700">
                <button onClick={() => { playClickSound(); setFaqOpen(faqOpen === i ? null : i); }} className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors duration-500">
                  <span className="font-bold text-black text-base md:text-lg">{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={`w-5 h-5 text-black transition-transform duration-500 ease-out ${faqOpen === i ? "rotate-180" : ""}`}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                </button>
                <div className={`px-6 md:px-8 text-black text-sm md:text-base leading-relaxed border-t border-neutral-100 overflow-hidden transition-all duration-700 ease-in-out ${faqOpen === i ? "max-h-40 py-5 md:py-6 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"}`}>{faq.a}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
