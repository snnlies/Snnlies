import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Changelog",
  description: "A history of Snnlies releases and what changed in each version.",
  alternates: { canonical: "/changelog" },
};

export default function Changelog() {
  const updates = [
    { version: "v1.2.0", date: "Today", desc: "Added Multi-Agent AI support and Credits system." },
    { version: "v1.1.0", date: "Last Week", desc: "Redesigned dashboard and implemented strict anti-bypass." },
    { version: "v1.0.0", date: "2 Weeks Ago", desc: "Initial release of Snnlies." },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-24 relative z-10 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-black">Changelog</h1>
      <div className="space-y-8 border-l border-neutral-200 ml-3">
        {updates.map((u, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute w-3 h-3 bg-black rounded-full -left-[6.5px] top-1.5"></div>
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-black font-bold text-lg">{u.version}</h3>
              <span className="text-neutral-500 text-xs uppercase tracking-wider">{u.date}</span>
            </div>
            <p className="text-neutral-600 text-sm">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
