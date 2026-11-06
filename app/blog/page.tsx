export default function Blog() {
  const posts = [
    { title: "How to structure a 10,000 member Discord server", desc: "Learn the exact channel categories, role hierarchies, and moderation bots top creators use to manage massive communities.", date: "Oct 22, 2026", read: "5 min read" },
    { title: "The rise of AI in Discord moderation", desc: "Why traditional auto-mod is dead, and how context-aware AI models are preventing toxicity before it happens.", date: "Oct 18, 2026", read: "4 min read" },
    { title: "Building a custom economy system with Snnlies", desc: "A step-by-step guide to setting up virtual credits, shops, and leveling systems to keep your members engaged.", date: "Oct 10, 2026", read: "7 min read" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16 relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Snnlies Blog</h1>
      <p className="text-white/60 mb-12">Insights, guides, and tutorials on Discord automation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <div key={i} className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:border-white transition-colors group flex flex-col cursor-pointer">
            <div className="flex items-center gap-3 text-xs text-white/50 mb-4">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
              <span>{post.read}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:underline decoration-white/30 underline-offset-4">{post.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">{post.desc}</p>
            <div className="text-white text-sm font-semibold flex items-center gap-2">
              Read Article 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
