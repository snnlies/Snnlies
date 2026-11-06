"use client";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden relative bg-[#F9FAFB]">
      <section className="w-full max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center relative z-10 min-h-[85vh] justify-center">
        
        <div className="relative mb-8">
           {/* Soft mesh glow behind text */}
           <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-[80px] opacity-40 rounded-full"></div>
           <ScrollReveal>
            <h1 className="text-5xl sm:text-7xl font-bold leading-[1.1] tracking-tight text-black relative z-10">
              Magic GPT
            </h1>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <p className="text-neutral-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium">
            Tell us what you need, and we'll handle the rest. Build your Discord server in seconds.
          </p>
        </ScrollReveal>
        
        {/* Large Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12">
          <ScrollReveal delay={300}>
            <Link href="/templates" className="flex flex-col items-start p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-[2rem] h-48 hover:scale-105 transition-transform duration-300 shadow-sm border border-white/50 relative overflow-hidden group">
               <span className="text-blue-900 font-bold text-lg z-10">Create<br/>Gaming Server</span>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-400/40 transition-colors"></div>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Link href="/templates" className="flex flex-col items-start p-6 bg-gradient-to-br from-pink-100 to-orange-100 rounded-[2rem] h-48 hover:scale-105 transition-transform duration-300 shadow-sm border border-white/50 relative overflow-hidden group">
               <span className="text-pink-900 font-bold text-lg z-10">Create<br/>Community</span>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl group-hover:bg-pink-400/40 transition-colors"></div>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <Link href="/chat" className="flex flex-col items-start p-6 bg-gradient-to-br from-green-100 to-teal-100 rounded-[2rem] h-48 hover:scale-105 transition-transform duration-300 shadow-sm border border-white/50 relative overflow-hidden group">
               <span className="text-green-900 font-bold text-lg z-10">Ask AI<br/>Anything</span>
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400/20 rounded-full blur-xl group-hover:bg-green-400/40 transition-colors"></div>
            </Link>
          </ScrollReveal>
        </div>

        {/* Input Pill (Mockup for Home) */}
        <ScrollReveal delay={600}>
          <Link href="/chat" className="w-full max-w-2xl bg-white border border-neutral-200 rounded-full px-6 py-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-neutral-400 font-medium">Ask me anything...</span>
            <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>
            </div>
          </Link>
        </ScrollReveal>

      </section>
      <Footer />
    </div>
  );
}
