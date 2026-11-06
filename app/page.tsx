"use client";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-black">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-16 pb-24 text-center flex flex-col items-center relative z-10">
        <ScrollReveal>
          <h1 className="text-5xl sm:text-7xl md:text-[6rem] font-bold leading-[1] tracking-tighter text-white mb-8">
            AUTOMATION <br />
            REDEFINED.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-white text-base md:text-lg max-w-xl mb-12 leading-relaxed font-light">
            The next generation of Discord automation. Advanced moderation, intelligent AI, and absolute precision.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <Link href="/signup" className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              Deploy Snnlies
            </Link>
            <Link href="/templates" className="px-8 py-3.5 bg-black border border-neutral-800 text-white font-medium rounded-full hover:border-white transition-colors">
              View Templates
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ONECORD STYLE AGENT CHAT */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-24 relative z-10">
        <ScrollReveal>
          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="flex flex-col gap-6">
              
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-white text-black px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm font-medium">
                  My server feels messy. Can you sort out the channels and set up auto-moderation?
                </div>
              </div>

              {/* Agent Message */}
              <div className="flex justify-start">
                <div className="flex gap-4 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-black border border-neutral-800 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 px-5 py-3 rounded-2xl rounded-tl-sm text-sm text-white font-light leading-relaxed">
                    I've prepared a cleaner layout. I've created categories for General, Community, and Voice. I also enabled AI moderation to block spam and slurs automatically.
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-white text-black px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm font-medium">
                  Perfect. What about custom welcome messages?
                </div>
              </div>

              {/* Agent Message */}
              <div className="flex justify-start">
                <div className="flex gap-4 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-black border border-neutral-800 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 px-5 py-3 rounded-2xl rounded-tl-sm text-sm text-white font-light leading-relaxed">
                    Done. I've deployed a custom welcome message with user tagging and a generated welcome image. Everything is live.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* STATS SECTION */}
      <section className="w-full border-y border-neutral-900 py-16 relative z-10 bg-black">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <ScrollReveal delay={0}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">9.6K</h3>
            <p className="text-white text-xs font-medium uppercase tracking-widest">Active Users</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">28.7K</h3>
            <p className="text-white text-xs font-medium uppercase tracking-widest">Servers</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">99.9%</h3>
            <p className="text-white text-xs font-medium uppercase tracking-widest">Uptime</p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">24/7</h3>
            <p className="text-white text-xs font-medium uppercase tracking-widest">Support</p>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
