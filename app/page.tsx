"use client";
import { useState } from "react";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    { q: "What exactly is Snnlies?", a: "Snnlies is a premium, enterprise-grade Discord bot designed to elevate your server. It combines advanced automation, next-generation moderation, and a powerful AI engine to keep your community engaged." },
    { q: "Is it free to use?", a: "Yes, we offer a highly capable free tier for all servers. For advanced features like unlimited AI conversations, custom branding, and priority 24/7 support, you can upgrade to our Premium plan." },
    { q: "How do I set up the bot?", a: "Setup takes less than 30 seconds. Simply click 'Login', authorize Snnlies for your server, and you're ready to go. All configurations can be managed from our web dashboard." },
    { q: "Can the AI speak multiple languages?", a: "Absolutely. Our AI engine natively understands and responds in over 50 languages, making it perfect for global communities." },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative">
      
      {/* Animated Glowing Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 1. HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-24 text-center flex flex-col items-center relative z-10 pt-24">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-in fade-in slide-in-from-bottom-4 duration-700">
          Snnlies
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Elevate your Discord server with unmatched moderation, extreme customizability, and raw AI power.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <a href="/login" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            Get Started
          </a>
          <a href="/features" className="px-10 py-4 border border-neutral-800 bg-black/50 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-neutral-900 transition-all duration-300 transform hover:scale-105">
            Explore Features
          </a>
        </div>
      </section>

      {/* 2. STATS SECTION WITH SF SYMBOLS */}
      <section className="w-full border-y border-neutral-800 bg-black/40 backdrop-blur-sm py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-800/50">
          
          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              {/* Server Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">10K+</h3>
            <p className="text-neutral-500 text-sm font-medium">Active Servers</p>
          </div>

          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              {/* Users Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">5M+</h3>
            <p className="text-neutral-500 text-sm font-medium">Users Reached</p>
          </div>

          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              {/* Uptime Bolt Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">99.9%</h3>
            <p className="text-neutral-500 text-sm font-medium">Uptime</p>
          </div>

          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              {/* Support Chat Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
            <p className="text-neutral-500 text-sm font-medium">Support</p>
          </div>

        </div>
      </section>

      {/* 3. FEATURES PREVIEW WITH SF SYMBOLS */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need.</h2>
          <p className="text-neutral-400 max-w-lg mx-auto font-light">Built for scale, security, and seamless community management.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-black/40 backdrop-blur-sm border border-neutral-800/80 p-8 rounded-3xl hover:border-neutral-500 hover:bg-neutral-900/50 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI Chat Integration</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Talk to your members using advanced AI. Human-like responses, instant knowledge, zero delay.</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-neutral-800/80 p-8 rounded-3xl hover:border-neutral-500 hover:bg-neutral-900/50 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Advanced Moderation</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Keep your server safe with auto-mod, anti-spam, and detailed logging systems.</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-neutral-800/80 p-8 rounded-3xl hover:border-neutral-500 hover:bg-neutral-900/50 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Web Dashboard</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Manage everything from this beautiful, real-time web interface. No commands needed.</p>
          </div>

        </div>
      </section>

      {/* 4. FAQ SECTION WITH ANIMATED CHEVRONS */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-800/80 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-900/50 transition-colors"
              >
                <span className="font-medium text-neutral-200">{faq.q}</span>
                {/* Animated SF Symbol Chevron */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2" 
                  stroke="currentColor" 
                  className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div 
                className={`px-6 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/50 overflow-hidden transition-all duration-300 ${
                  faqOpen === i ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24 text-center relative z-10">
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden group">
          {/* Subtle hover glow on CTA card */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">Ready to upgrade?</h2>
          <p className="text-neutral-400 mb-10 max-w-lg mx-auto font-light relative z-10">Join thousands of communities already using Snnlies to automate and enhance their Discord experience.</p>
          <a href="/login" className="relative z-10 inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Invite Snnlies Now
          </a>
        </div>
      </section>

    </div>
  );
}
