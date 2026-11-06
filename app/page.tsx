"use client";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import Link from "next/link";
import { playClickSound } from "../utils/sound";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#FAFAFA]">
      
      {/* HERO TEXT */}
      <div className="w-full max-w-6xl mx-auto px-4 text-center pt-24 pb-16">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[1] md:leading-[0.9] tracking-tighter text-black mb-6">
            INFRASTRUCTURE <br /> FOR DISCORD.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-black text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Deploy enterprise-grade automation, AI moderation, and massive server structures in seconds. Built for scale.
          </p>
        </ScrollReveal>
      </div>

      {/* BENTO GRID CTA */}
      <div className="w-full max-w-4xl px-4 pb-24">
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 1. STICKY NOTE CARD (Left) */}
            <div className="bg-white border border-neutral-200 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[320px] hover:shadow-2xl transition-shadow duration-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 object-cover" src="https://i.pravatar.cc/150?img=11" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 object-cover" src="https://i.pravatar.cc/150?img=12" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 object-cover" src="https://i.pravatar.cc/150?img=13" alt="User" />
                </div>
                <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full">Edited 2 mins ago</span>
              </div>
              
              {/* Playful Handwriting Style Text */}
              <div>
                <h3 className="text-6xl font-serif italic text-blue-500 leading-[1.1] mb-2 drop-shadow-sm">Build your<br/>dream server</h3>
                <p className="text-sm font-bold text-neutral-400">With Snnlies AI</p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4 min-h-[320px]">
              
              {/* 2. RED CARD (Top Right) */}
              <Link href="/chat" onClick={playClickSound} className="flex-1 bg-gradient-to-br from-red-500 to-red-600 rounded-[2.5rem] p-8 flex justify-between items-center text-white shadow-lg hover:scale-[1.02] transition-transform duration-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-7xl font-bold z-10 tracking-tighter">01</h3>
                <div className="text-right z-10">
                  <span className="text-xs font-bold bg-black/20 px-2 py-1 rounded-md mb-1 inline-block backdrop-blur-sm">AI Chat</span>
                  <p className="text-sm font-semibold">Workspace</p>
                </div>
              </Link>

              {/* 3. GREEN GRADIENT CARD (Middle Right) */}
              <Link href="/templates" onClick={playClickSound} className="flex-1 bg-gradient-to-b from-green-50 to-teal-50 border border-green-100 rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center shadow-lg hover:scale-[1.02] transition-transform duration-700 relative overflow-hidden group">
                <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-200/50 to-transparent group-hover:scale-150 transition-transform duration-700"></div>
                <p className="text-2xl font-bold text-green-900 z-10 mb-1">Deploy Templates</p>
                <span className="text-xs font-bold text-green-700 bg-green-200/50 px-3 py-1 rounded-full z-10">Instantly</span>
              </Link>

              {/* 4. DARK PILL (Bottom Right) */}
              <Link href="/dashboard" onClick={playClickSound} className="h-20 bg-neutral-900 rounded-full p-4 flex justify-center items-center text-white shadow-lg hover:scale-[1.02] transition-transform duration-700 relative group">
                <span className="absolute left-6 text-xs font-bold bg-neutral-800 px-3 py-1 rounded-lg text-neutral-300 shadow-inner">Live</span>
                <p className="text-lg font-bold tracking-[0.3em] text-neutral-200 ml-4">DASHBOARD</p>
              </Link>

            </div>
          </div>
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}
