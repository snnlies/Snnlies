import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "News",
  description: "Announcements, partnerships, and milestones from Snnlies.",
  alternates: { canonical: "/news" },
};

export default function News() {
  const news = [
    { date: "Oct 25, 2026", title: "Snnlies Partners with Top Gaming Networks", desc: "We are excited to announce our new partnership to bring AI automation to over 50,000 gaming communities.", tag: "Partnership", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { date: "Oct 20, 2026", title: "Snnlies reaches 10,000 Active Servers", desc: "A massive milestone! Thank you to all the developers and server owners who trust our infrastructure.", tag: "Milestone", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { date: "Oct 12, 2026", title: "New Data Privacy Protocols Implemented", desc: "We have upgraded our zero-data-retention policies to ensure maximum security for your community.", tag: "Security", color: "bg-green-100 text-green-700 border-green-200" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 relative z-10 bg-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Latest News</h1>
      <p className="text-black font-medium mb-12">Announcements, partnerships, and milestones.</p>
      
      <div className="grid gap-6">
        {news.map((n, i) => (
          <div key={i} className="bg-white border border-neutral-200 p-8 rounded-[2rem] hover:shadow-lg transition-all apple-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs px-3 py-1 rounded-full font-bold border ${n.color}`}>{n.tag}</span>
              <span className="text-xs text-black font-semibold">{n.date}</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">{n.title}</h3>
            <p className="text-black text-sm leading-relaxed">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
