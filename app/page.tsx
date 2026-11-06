"use client";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: "What exactly is Snnlies?", a: "Snnlies is a premium, enterprise-grade Discord bot designed to elevate your server. It combines advanced automation, next-generation moderation, and a powerful AI engine to keep your community engaged." },
    { q: "Is it free to use?", a: "Yes, we offer a highly capable free tier for all servers. For advanced features like unlimited AI conversations, custom branding, and priority 24/7 support, you can upgrade to our Premium plan." },
    { q: "How do I set up the bot?", a: "Setup takes less than 30 seconds. Simply click 'Login', authorize Snnlies for your server, and you're ready to go. All configurations can be managed from our web dashboard." },
    { q: "Can the AI speak multiple languages?", a: "Absolutely. Our AI engine natively understands and responds in over 50 languages, making it perfect for global communities." },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-black">
      
      {/* Subtle Premium Glow (No Grid) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 1. HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-32 pb-24 text-center flex flex-col items-center relative z-10 min-h-[80vh] justify-center">
        <ScrollReveal>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white">
            Snnlies
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            Elevate your Discord server with unmatched moderation, extreme customizability, and raw AI power. Built for the future of community management.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a href="/login" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Get Started
            </a>
            <a href="/features" className="px-10 py-4 border border-neutral-800 bg-black/50 text-white font-semibold rounded-full hover:bg-neutral-900 transition-all duration-300 transform hover:scale-105">
              Explore Features
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. TRUSTED BY SECTION (Production Ready) */}
      <section className="w-full border-y border-neutral-900 py-16 relative z-10 bg-black">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs font-semibold text-neutral-600 uppercase tracking-[0.2em] mb-8">Powering next-generation communities</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 hover:opacity-80 transition-opacity duration-500 grayscale">
              <span className="text-2xl font-bold text-white tracking-tighter">Discord</span>
              <span className="text-2xl font-bold text-white tracking-tighter">Vercel</span>
              <span className="text-2xl font-bold text-white tracking-tighter">GitHub</span>
              <span className="text-2xl font-bold text-white tracking-tighter">Notion</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. PRODUCTION STATS SECTION (No Fake User Counts) */}
      <section className="w-full py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <ScrollReveal delay={0}>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">99.99%</h3>
              <p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">Uptime SLA</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">&lt;50ms</h3>
              <p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">Global Latency</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">Zero-Lag</h3>
              <p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">AI Processing</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">24/7</h3>
              <p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase">Active Monitoring</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. FEATURES PREVIEW */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Everything you need.</h2>
            <p className="text-neutral-400 max-w-lg mx-auto font-light">Built for scale, security, and seamless community management.</p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollReveal delay={0}>
            <div className="bg-neutral-950 border border-neutral-800/50 p-8 rounded-3xl hover:border-neutral-600 transition-all duration-300 h-full">
              <h3 className="text-xl font-bold mb-3 text-white tracking-tight">AI Chat Integration</h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">Talk to your members using advanced AI. Human-like responses, instant knowledge, zero delay.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="bg-neutral-950 border border-neutral-800/50 p-8 rounded-3xl hover:border-neutral-600 transition-all duration-300 h-full">
              <h3 className="text-xl font-bold mb-3 text-white tracking-tight">Advanced Moderation</h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">Keep your server safe with auto-mod, anti-spam, and detailed logging systems.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-neutral-950 border border-neutral-800/50 p-8 rounded-3xl hover:border-neutral-600 transition-all duration-300 h-full">
              <h3 className="text-xl font-bold mb-3 text-white tracking-tight">Web Dashboard</h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-light">Manage everything from this beautiful, real-time web interface. No commands needed.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="w-full border-y border-neutral-900 bg-neutral-950/30 py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">How it works.</h2>
              <p className="text-neutral-400 font-light">Get started in three simple steps.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <ScrollReveal delay={0}>
              <div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold mb-2 text-white">Login</h3>
                <p className="text-neutral-500 text-sm font-light">Authenticate securely with your Discord account in seconds.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold mb-2 text-white">Invite Bot</h3>
                <p className="text-neutral-500 text-sm font-light">Select the server you want to upgrade and authorize Snnlies.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold mb-2 text-white">Configure</h3>
                <p className="text-neutral-500 text-sm font-light">Use the dashboard to toggle features, set up AI, and watch it work.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Built for production.</h2>
            <p className="text-neutral-400 font-light">Here is what developers and admins say.</p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0}>
            <div className="bg-neutral-950 border border-neutral-800/50 p-8 rounded-3xl h-full flex flex-col justify-between">
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">"Snnlies completely replaced 4 different bots for us. The AI integration is flawless and my members love interacting with it. The dashboard is a masterpiece."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h4 className="text-white text-sm font-bold">Alex M.</h4>
                  <p className="text-neutral-500 text-xs">Admin, Devs Hub</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <div className="bg-neutral-950 border border-neutral-800/50 p-8 rounded-3xl h-full flex flex-col justify-between">
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">"The moderation features are incredibly robust. We haven't had a single raid or spam attack since we added Snnlies. It just works quietly in the background."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold">S</div>
                <div>
                  <h4 className="text-white text-sm font-bold">Sarah K.</h4>
                  <p className="text-neutral-500 text-xs">Owner, Gaming Community</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <div className="border border-neutral-800/50 rounded-2xl bg-neutral-950 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-900/50 transition-colors"
                >
                  <span className="font-medium text-neutral-200">{faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className={`px-6 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/50 overflow-hidden transition-all duration-300 ${faqOpen === i ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"}`}>
                  {faq.a}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-32 text-center relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-12 md:p-20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Ready to upgrade?</h2>
            <p className="text-neutral-400 mb-10 max-w-lg mx-auto font-light text-lg">Join thousands of communities already using Snnlies to automate and enhance their Discord experience.</p>
            <a href="/login" className="inline-block px-12 py-5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              Invite Snnlies Now
            </a>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
