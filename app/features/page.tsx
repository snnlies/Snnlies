export default function Features() {
  const features = [
    { title: "AI Chat Integration", desc: "Powered by Google Gemini. Talk to your server members with human-like AI." },
    { title: "Premium Moderation", desc: "Auto-mod, anti-spam, and logging with absolute precision." },
    { title: "Custom Music", desc: "High-quality, zero-lag music streaming from Spotify and YouTube." },
    { title: "Leveling & Economy", desc: "Engage your community with XP, rewards, and a custom virtual economy." },
    { title: "Dashboard Control", desc: "Manage everything from this beautiful web dashboard in real-time." },
    { title: "24/7 Uptime", desc: "Hosted with high availability. Your bot never sleeps." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h2 className="text-4xl font-bold mb-4">Mega Features</h2>
      <p className="text-neutral-400 mb-12 max-w-lg mx-auto">Everything you need to run a premium Discord server, packed into one powerful bot.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {features.map((f, i) => (
          <div key={i} className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-600 transition">
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
