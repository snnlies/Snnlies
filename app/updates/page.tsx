export default function Updates() {
  const updates = [
    { version: "v2.0.0", date: "Oct 24, 2026", title: "Live AI Workspace", desc: "Introduced the split-screen AI chat that generates Discord server structures in real-time." },
    { version: "v1.5.0", date: "Oct 15, 2026", title: "Mega Templates", desc: "Added 30+ channel structures and advanced role hierarchies for one-click deployment." },
    { version: "v1.0.0", date: "Oct 01, 2026", title: "Initial Release", desc: "Snnlies is officially live. Automated moderation and basic templates launched." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Product Updates</h1>
      <p className="text-white/60 mb-12">The latest features and improvements to Snnlies.</p>
      
      <div className="space-y-6 border-l border-neutral-800 ml-3">
        {updates.map((u, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2"></div>
            <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl hover:border-white transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-white font-bold text-lg">{u.version}</span>
                <span className="text-xs text-white/50 bg-black px-2 py-1 rounded border border-neutral-800">{u.date}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{u.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{u.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
