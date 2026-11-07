"use client";
import { playSound } from "../../utils/sound";

export default function WhatsNewPage() {
  const updates = [
    { version: "v3.2.0", date: "Today", title: "Voting & Poll System", desc: "Added /poll and /suggest commands with automatic reaction voting and trending alerts.", tag: "Feature", tagColor: "bg-green-100 text-green-700" },
    { version: "v3.1.0", date: "Yesterday", title: "Auto-News Broadcast", desc: "Send global announcements to every server directly from the Dashboard.", tag: "Feature", tagColor: "bg-blue-100 text-blue-700" },
    { version: "v3.0.0", date: "2 Days Ago", title: "Mega Templates & Onboarding", desc: "Introduced massive 30+ channel templates with a beautiful tree view and the new user onboarding flow.", tag: "Major Update", tagColor: "bg-purple-100 text-purple-700" },
    { version: "v2.5.0", date: "Last Week", title: "Super Fast Bot", desc: "Upgraded the bot to instantly reply, added /meme, /clear, and Auto-Moderation.", tag: "Bot Update", tagColor: "bg-orange-100 text-orange-700" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 bg-white min-h-screen">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">What's New</h1>
        <p className="text-neutral-500 text-lg">The latest features and improvements to Snnlies.</p>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
        {updates.map((u, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 bg-white text-neutral-500 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-[2rem] border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${u.tagColor}`}>{u.tag}</span>
                <span className="text-xs font-bold text-neutral-400">{u.date}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{u.title} <span className="text-sm text-neutral-400 font-medium ml-2">{u.version}</span></h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{u.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
