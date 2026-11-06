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
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 1. HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-12 text-center flex flex-col items-center relative z-10 pt-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-sm">
          Snnlies
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
          Elevate your Discord server with unmatched moderation, extreme customizability, and raw AI power.
        </p>
      </section>

      {/* 2. MULTI-AGENT CHAT DEMO SECTION */}
      <section className="w-full max-w-3xl mx-auto px-4 pb-24 relative z-10">
        <div className="w-full flex flex-col bg-black/60 backdrop-blur-xl border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative">
          
          {/* Chat Header - Multi Agent */}
          <div className="bg-neutral-900/60 px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm border-2 border-black z-10">
                  L
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-800 text-white flex items-center justify-center font-bold text-sm border-2 border-black">
                  N
                </div>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  Lumi and Nova
                </h3>
                <p className="text-neutral-500 text-xs">Snnlies AI Agents</p>
              </div>
            </div>
            <div className="hidden sm:block text-xs font-medium text-neutral-400 bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800">
              Live Preview
            </div>
          </div>

          {/* Chat Messages Area - Multi Agent Chatting */}
          <div className="flex-grow p-6 space-y-6 h-[400px] overflow-hidden relative">
            
            {/* Lumi (Left) */}
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-1">
                L
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 mb-1 ml-1 font-medium">Lumi (Community Agent)</p>
                <div className="px-5 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-sm text-sm max-w-[85%] leading-relaxed">
                  Hi there. I am Lumi. I handle welcome messages, community vibes, and custom emojis. Welcome to the server.
                </div>
              </div>
            </div>

            {/* User (Right) */}
            <div className="flex justify-end">
              <div className="px-5 py-3 rounded-2xl bg-white text-black font-medium rounded-tr-sm text-sm max-w-[80%]">
                Thanks Lumi. Can you and Nova help me set up auto-moderation too?
              </div>
            </div>

            {/* Nova (Left) */}
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-neutral-800 text-white border border-neutral-700 flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-1">
                N
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 mb-1 ml-1 font-medium">Nova (Tech Agent)</p>
                <div className="px-5 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-sm text-sm max-w-[85%] leading-relaxed">
                  Already on it. I have configured anti-spam and link filters. I will monitor the server 24/7. You are safe with me.
                </div>
              </div>
            </div>

            {/* Lumi (Left again) */}
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs mr-3 shrink-0 mt-1">
                L
              </div>
              <div>
                <p className="text-[10px] text-neutral-500 mb-1 ml-1 font-medium">Lumi (Community Agent)</p>
                <div className="px-5 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-sm text-sm max-w-[85%] leading-relaxed">
                  And I just drafted a cute welcome message for your new members. Want to see it?
                </div>
              </div>
            </div>

            {/* Fade effect at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          </div>

          {/* Chat Input Area (CTA) */}
          <div className="p-6 bg-neutral-950/90 border-t border-neutral-800 text-center relative z-20">
            <p className="text-neutral-400 text-sm mb-4">Join the conversation. Experience Snnlies Multi-Agent AI.</p>
            <a href="/login" className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Login to Continue
            </a>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="w-full border-y border-neutral-800 bg-black/40 backdrop-blur-sm py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-800/50">
          <div><h3 className="text-4xl font-bold text-white mb-2">10K+</h3><p className="text-neutral-500 text-sm font-medium">Active Servers</p></div>
          <div><h3 className="text-4xl font-bold text-white mb-2">5M+</h3><p className="text-neutral-500 text-sm font-medium">Users Reached</p></div>
          <div><h3 className="text-4xl font-bold text-white mb-2">99.9%</h3><p className="text-neutral-500 text-sm font-medium">Uptime</p></div>
          <div><h3 className="text-4xl font-bold text-white mb-2">24/7</h3><p className="text-neutral-500 text-sm font-medium">Support</p></div>
        </div>
      </section>

      {/* 4. FEATURES PREVIEW */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need.</h2>
          <p className="text-neutral-400 max-w-lg mx-auto font-light">Built for scale, security, and seamless community management.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/40 backdrop-blur-sm border border-neutral-800/80 p-8 rounded-3xl hover:border-neutral-600 transition-colors group">
            <h3 className="text-lg font-bold mb-3 text-white">AI Chat Integration</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Talk to your members using advanced AI. Human-like responses, instant knowledge, zero delay.</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-neutral-800/80 p-8 rounded-3xl hover:border-neutral-600 transition-colors group">
            <h3 className="text-lg font-bold mb-3 text-white">Advanced Moderation</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Keep your server safe with auto-mod, anti-spam, and detailed logging systems.</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-neutral-800/80 p-8 rounded-3xl hover:border-neutral-600 transition-colors group">
            <h3 className="text-lg font-bold mb-3 text-white">Web Dashboard</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Manage everything from this beautiful, real-time web interface. No commands needed.</p>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-800/80 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden">
              <button 
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-900/50 transition-colors"
              >
                <span className="font-medium text-neutral-200">{faq.q}</span>
                <span className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">
                  {faqOpen === i ? "Close" : "Open"}
                </span>
              </button>
              {faqOpen === i && (
                <div className="px-6 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24 text-center relative z-10">
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-12 md:p-20 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to upgrade?</h2>
          <p className="text-neutral-400 mb-10 max-w-lg mx-auto font-light">Join thousands of communities already using Snnlies to automate and enhance their Discord experience.</p>
          <a href="/login" className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Invite Snnlies Now
          </a>
        </div>
      </section>

    </div>
  );
}
