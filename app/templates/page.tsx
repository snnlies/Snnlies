"use client";
import { useState } from "react";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);
  const [expandedTpl, setExpandedTpl] = useState<string | null>(null);

  const templates = [
    { 
      id: "1", 
      name: "Mega Gaming", 
      desc: "Tournament brackets, LFG, voice rooms.",
      roles: ["👑 Founder", "🛡️ Admin", "⚔️ Moderator", "🎮 Pro Gamer", "🤖 Bot"],
      categories: [
        { name: "📌 START HERE", channels: ["📢 announcements", "📜 rules", "🎭 self-roles", "🎫 open-a-ticket"] },
        { name: "💬 COMMUNITY", channels: ["general-chat", "memes", "media", "bot-commands", "suggestions"] },
        { name: "🎮 GAMING ZONE", channels: ["looking-for-group", "tournaments", "clips-highlights"] },
        { name: "🔊 VOICE CHANNELS", channels: ["General VC", "Gaming VC 1", "Gaming VC 2", "Music Room"] }
      ]
    },
    { 
      id: "2", 
      name: "Enterprise Community", 
      desc: "Onboarding gates, AI auto-moderation.",
      roles: ["👑 Owner", "💼 Manager", "🛡️ Security", "🤝 Partner", "✅ Verified", "👤 Member"],
      categories: [
        { name: "📌 INFORMATION", channels: ["📢 announcements", "📜 rules", "🤝 partnerships"] },
        { name: "💬 GENERAL", channels: ["general-chat", "introductions", "suggestions"] },
        { name: "🛡️ STAFF ONLY", channels: ["staff-chat", "mod-logs", "reports"] }
      ]
    },
    { 
      id: "3", 
      name: "Developer Hub", 
      desc: "GitHub feeds, code help, pair programming.",
      roles: ["👑 Founder", "💻 Developer", "🎨 Designer", "🧪 Tester", "🤖 Bot"],
      categories: [
        { name: "📌 INFO", channels: ["📢 updates", "📜 rules"] },
        { name: "💻 CODE", channels: ["general", "bug-reports", "projects", "code-help"] },
        { name: "🔊 MEETINGS", channels: ["Standup Room", "Pair Programming"] }
      ]
    }
  ];

  const handleDeploy = async (templateName: string) => {
    setLoading(templateName);
    const guildId = "1568291865621430282"; 

    try {
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guildId, templateName })
      });
      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      alert("Failed to connect to Bot API");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 relative z-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mega Templates</h1>
        <p className="text-white/60 text-lg">Review the exact structure before deploying.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-neutral-950 border border-neutral-800 p-6 rounded-3xl flex flex-col hover:border-white transition-colors">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{tpl.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{tpl.desc}</p>
              
              <button 
                onClick={() => setExpandedTpl(expandedTpl === tpl.id ? null : tpl.id)}
                className="w-full py-2 mb-4 bg-transparent border border-neutral-700 text-white text-sm font-medium rounded-lg hover:bg-neutral-900 transition-colors"
              >
                {expandedTpl === tpl.id ? "Hide Structure" : "Review Structure"}
              </button>

              {expandedTpl === tpl.id && (
                <div className="mb-6 p-4 bg-black border border-neutral-800 rounded-xl space-y-4 max-h-64 overflow-y-auto">
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider mb-2 block">Roles</span>
                    <div className="flex flex-wrap gap-2">
                      {tpl.roles.map((r, i) => <span key={i} className="text-xs text-white/80 bg-neutral-900 px-2 py-1 rounded-md">{r}</span>)}
                    </div>
                  </div>
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider mb-2 block">Categories & Channels</span>
                    {tpl.categories.map((cat, i) => (
                      <div key={i} className="mb-3">
                        <p className="text-sm font-semibold text-white mb-1">{cat.name}</p>
                        <ul className="space-y-1">
                          {cat.channels.map((ch, j) => <li key={j} className="text-xs text-white/60"># {ch}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleDeploy(tpl.name)}
              disabled={loading === tpl.name}
              className="w-full py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 disabled:opacity-50 transition-all mt-auto"
            >
              {loading === tpl.name ? "Deploying..." : "Deploy Template"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
