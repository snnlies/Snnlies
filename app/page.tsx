"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "ai", content: data.reply }]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    { q: "What is Snnlies?", a: "Snnlies is a premium, AI-powered Discord bot designed to elevate your server with advanced automation, moderation, and Gemini AI integration." },
    { q: "Is it free to use?", a: "Yes! We offer a robust free tier. For advanced features like unlimited AI chats and custom branding, you can upgrade to our Premium plan." },
    { q: "How do I setup the bot?", a: "Simply click 'Invite Bot', authorize it for your server, and you are ready to go." },
    { q: "Does it support multiple languages?", a: "Absolutely. Snnlies AI can understand and respond in over 50 languages natively." },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      
      {/* 1. HERO SECTION (Starts immediately now) */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-24 text-center flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 text-xs font-semibold text-neutral-400 mb-6 tracking-wide uppercase">
          Powered by Google Gemini AI
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          snnlies.
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          The absolute pinnacle of Discord automation. Unmatched moderation, extreme customizability, and raw AI power — all in one minimalist bot.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <a href="/login" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition transform hover:scale-105">
            Get Started for Free
          </a>
          <a href="/features" className="px-8 py-4 border border-neutral-700 text-white font-bold rounded-full hover:bg-neutral-900 transition transform hover:scale-105">
            Explore Features
          </a>
        </div>
      </section>

      {/* 2. AI CHAT DEMO SECTION */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-center text-2xl font-bold mb-6 text-white">Experience the AI</h2>
        <div className="w-full flex flex-col bg-neutral-950 border border-neutral-800 rounded-3xl p-4 shadow-2xl shadow-neutral-900/50">
          <div className="flex-grow overflow-y-auto mb-4 space-y-4 max-h-[30vh] min-h-[200px]">
            {messages.length === 0 && (
              <p className="text-neutral-600 text-sm my-16 text-center">Ask Snnlies AI anything...</p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-5 py-3 rounded-2xl max-w-[85%] text-sm text-left ${
                  msg.role === "user" ? "bg-white text-black" : "bg-neutral-900 text-white border border-neutral-800"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-5 py-3 rounded-2xl bg-neutral-900 text-neutral-400 text-sm animate-pulse">Snnlies is thinking...</div>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="text" value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-grow bg-neutral-900 text-white border border-neutral-800 rounded-full px-5 py-3 outline-none focus:border-neutral-500 transition text-sm"
            />
            <button onClick={sendMessage} disabled={loading} className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-neutral-200 transition disabled:opacity-50">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="w-full border-y border-neutral-800 bg-neutral-950/50 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h3 className="text-4xl font-bold text-white mb-2">10K+</h3><p className="text-neutral-500 text-sm">Active Servers</p></div>
          <div><h3 className="text-4xl font-bold text-white mb-2">5M+</h3><p className="text-neutral-500 text-sm">Users Reached</p></div>
          <div><h3 className="text-4xl font-bold text-white mb-2">99.9%</h3><p className="text-neutral-500 text-sm">Uptime</p></div>
          <div><h3 className="text-4xl font-bold text-white mb-2">24/7</h3><p className="text-neutral-500 text-sm">Support</p></div>
        </div>
      </section>

      {/* 4. FEATURES PREVIEW */}
      <section className="w-full max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for the Future</h2>
          <p className="text-neutral-400 max-w-lg mx-auto">Everything you need to run a premium community, packed into one powerful bot.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:border-neutral-600 transition">
            <h3 className="text-xl font-bold mb-3">AI Chat Integration</h3>
            <p className="text-neutral-500 text-sm">Talk to your members using Google Gemini. Human-like responses, instant knowledge.</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:border-neutral-600 transition">
            <h3 className="text-xl font-bold mb-3">Advanced Moderation</h3>
            <p className="text-neutral-500 text-sm">Keep your server safe with auto-mod, anti-spam, and detailed logging systems.</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:border-neutral-600 transition">
            <h3 className="text-xl font-bold mb-3">Web Dashboard</h3>
            <p className="text-neutral-500 text-sm">Manage everything from this beautiful, real-time web interface.</p>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-800 rounded-2xl bg-neutral-950 overflow-hidden">
              <button 
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-900 transition"
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <span className="text-neutral-500 text-xl">{faqOpen === i ? "−" : "+"}</span>
              </button>
              {faqOpen === i && (
                <div className="px-6 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24 text-center">
        <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-12 md:p-20 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your server?</h2>
          <p className="text-neutral-400 mb-10 max-w-lg mx-auto">Join thousands of communities already using Snnlies to automate and enhance their Discord experience.</p>
          <a href="/login" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition transform hover:scale-105">
            Invite Snnlies Now
          </a>
        </div>
      </section>

    </div>
  );
}
