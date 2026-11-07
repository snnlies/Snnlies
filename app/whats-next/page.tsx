"use client";

export default function WhatsNextPage() {
  const roadmap = [
    { title: "Google & GitHub Login", desc: "Allow users to sign in with Google or GitHub and link their Discord account.", status: "In Development", color: "bg-blue-100 text-blue-700", icon: "🔐" },
    { title: "AI Workspace (Gemini API)", desc: "Chat with an AI to generate custom Discord server templates instantly.", status: "In Development", color: "bg-blue-100 text-blue-700", icon: "🤖" },
    { title: "Web Reaction Roles", desc: "Allow users to claim roles directly from the website dashboard.", status: "Planned", color: "bg-purple-100 text-purple-700", icon: "🎭" },
    { title: "Custom Domain Support", desc: "Let Premium users connect their own custom domains to their Snnlies dashboard.", status: "Planned", color: "bg-purple-100 text-purple-700", icon: "🌐" },
    { title: "Mobile App (iOS/Android)", desc: "A dedicated app to manage your servers on the go.", status: "Exploring", color: "bg-orange-100 text-orange-700", icon: "📱" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 bg-white min-h-screen">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">What's Next</h1>
        <p className="text-neutral-500 text-lg">The roadmap for Snnlies. Vote on features in our Discord!</p>
      </div>

      <div className="grid gap-4">
        {roadmap.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white border border-neutral-200 rounded-[2rem] hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="text-neutral-500 text-sm max-w-md">{item.desc}</p>
              </div>
            </div>
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${item.color} shrink-0`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
