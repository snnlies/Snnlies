export default function News() {
  const news = [
    { date: "Oct 25, 2026", title: "Snnlies Partners with Top Gaming Networks", desc: "We are excited to announce our new partnership to bring AI automation to over 50,000 gaming communities.", tag: "Partnership" },
    { date: "Oct 20, 2026", title: "Snnlies reaches 10,000 Active Servers", desc: "A massive milestone! Thank you to all the developers and server owners who trust our infrastructure.", tag: "Milestone" },
    { date: "Oct 12, 2026", title: "New Data Privacy Protocols Implemented", desc: "We have upgraded our zero-data-retention policies to ensure maximum security for your community.", tag: "Security" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Latest News</h1>
      <p className="text-white/60 mb-12">Announcements, partnerships, and milestones.</p>
      
      <div className="grid gap-6">
        {news.map((n, i) => (
          <div key={i} className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl hover:border-white transition-colors">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-black bg-white px-3 py-1 rounded-full font-bold uppercase">{n.tag}</span>
              <span className="text-xs text-white/50">{n.date}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{n.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
