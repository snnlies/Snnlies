export default function Updates() {
  const updates = [
    { version: "v2.0.0", date: "Oct 24, 2026", title: "Live AI Workspace", desc: "Introduced the split-screen AI chat that generates Discord server structures in real-time.", color: "bg-black text-white" },
    { version: "v1.5.0", date: "Oct 15, 2026", title: "Mega Templates", desc: "Added 30+ channel structures and advanced role hierarchies for one-click deployment.", color: "bg-neutral-200 text-black" },
    { version: "v1.0.0", date: "Oct 01, 2026", title: "Initial Release", desc: "Snnlies is officially live. Automated moderation and basic templates launched.", color: "bg-neutral-200 text-black" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 relative z-10 bg-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Product Updates</h1>
      <p className="text-black font-medium mb-12">The latest features and improvements to Snnlies.</p>
      
      <div className="space-y-6 border-l-2 border-neutral-200 ml-3">
        {updates.map((u, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute w-4 h-4 bg-white border-4 border-black rounded-full -left-[9px] top-2 shadow-sm"></div>
            <div className="bg-white border border-neutral-200 p-8 rounded-[2rem] hover:shadow-lg transition-all apple-shadow">
              <div className="flex items-center gap-4 mb-2">
                <span className={`text-white font-bold text-sm px-3 py-1 rounded-full ${u.color}`}>{u.version}</span>
                <span className="text-xs text-black font-semibold">{u.date}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{u.title}</h3>
              <p className="text-black text-sm leading-relaxed">{u.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
