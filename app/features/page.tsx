export default function Features() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Mega Features</h1>
        <p className="text-neutral-400 max-w-lg mx-auto font-light text-lg">Everything you need to run a premium Discord server, packed into one powerful bot.</p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Box 1 (Large) */}
        <div className="md:col-span-2 glow-card bg-neutral-950 border border-neutral-800/50 p-10 rounded-3xl hover:border-neutral-600 transition-all duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mb-6 text-neutral-400 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>
          <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">Advanced AI Chat</h3>
          <p className="text-neutral-500 text-base leading-relaxed font-light mb-6">Talk to your members using advanced AI. Human-like responses, instant knowledge, zero delay. Built on top of state-of-the-art neural networks.</p>
        </div>

        {/* Box 2 (Small) */}
        <div className="glow-card bg-neutral-950 border border-neutral-800/50 p-10 rounded-3xl hover:border-neutral-600 transition-all duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mb-6 text-neutral-400 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
          <h3 className="text-xl font-bold mb-3 text-white tracking-tight">Ironclad Moderation</h3>
          <p className="text-neutral-500 text-sm leading-relaxed font-light">Keep your server safe with auto-mod, anti-spam, and detailed logging systems.</p>
        </div>

        {/* Box 3 (Small) */}
        <div className="glow-card bg-neutral-950 border border-neutral-800/50 p-10 rounded-3xl hover:border-neutral-600 transition-all duration-300 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mb-6 text-neutral-400 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>
          <h3 className="text-xl font-bold mb-3 text-white tracking-tight">Web Dashboard</h3>
          <p className="text-neutral-500 text-sm leading-relaxed font-light">Manage everything from this beautiful, real-time web interface. No commands needed.</p>
        </div>

        {/* Box 4 (Large) */}
        <div className="md:col-span-2 glow-card bg-neutral-950 border border-neutral-800/50 p-10 rounded-3xl hover:border-neutral-600 transition-all duration-300 group flex flex-col justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mb-6 text-neutral-400 group-hover:text-white transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
          <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">High-End Security</h3>
          <p className="text-neutral-500 text-base leading-relaxed font-light">Your data is encrypted with TLS 1.3. We employ strict anti-bypass algorithms to ensure fair usage and prevent malicious actors from compromising your community.</p>
        </div>

      </div>
    </div>
  );
}
