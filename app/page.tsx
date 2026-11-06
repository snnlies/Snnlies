export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Premium subtle glow (Only white/grey, no mixed colors) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/30 via-black to-black pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-6 space-y-10">
        {/* Brand Name */}
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          snnlies.
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral-400 font-light max-w-lg leading-relaxed">
          Experience the pinnacle of Discord automation. 
          Minimalist design, absolute precision, and raw AI power.
        </p>

        {/* Premium Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 pt-4">
          <a
            href="#"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105"
          >
            Login with Discord
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-900 transition-all duration-300 transform hover:scale-105"
          >
            Invite Bot
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-sm text-neutral-600 font-medium tracking-widest uppercase">
        © {new Date().getFullYear()} Snnlies. All rights reserved.
      </div>
    </main>
  );
}
