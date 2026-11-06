"use client";
import { useState } from "react";

export default function Templates() {
  const [expandedTpl, setExpandedTpl] = useState<string | null>(null);
  const [selectedTpl, setSelectedTpl] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  
  // Mock servers for the selection modal
  const servers = [
    { id: "1568291865621430282", name: "Snnlies HQ", members: "1,204" },
    { id: "123456789012345678", name: "Gaming Community", members: "45,200" },
    { id: "987654321098765432", name: "Devs Hub", members: "8,900" }
  ];

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

  const handleConfirmDeploy = async (serverId: string) => {
    if (!selectedTpl) return;
    setLoading(true);

    try {
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guildId: serverId, templateName: selectedTpl.name })
      });
      const data = await res.json();
      alert(data.message || data.error);
      setSelectedTpl(null); // Close modal on success
    } catch (err) {
      alert("Failed to connect to Bot API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 relative z-10">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Mega Templates</h1>
        <p className="text-white/60 text-lg font-light">Review the exact structure, select your server, and deploy instantly.</p>
      </div>
      
      {/* TEMPLATES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-[#050505] border border-neutral-800 p-8 rounded-3xl flex flex-col hover:border-white/40 transition-colors duration-300">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{tpl.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{tpl.desc}</p>
              
              {/* REVIEW STRUCTURE BUTTON */}
              <button 
                onClick={() => setExpandedTpl(expandedTpl === tpl.id ? null : tpl.id)}
                className="w-full py-2.5 mb-4 bg-transparent border border-neutral-700 text-white text-sm font-medium rounded-full hover:bg-neutral-900 transition-colors"
              >
                {expandedTpl === tpl.id ? "Hide Structure" : "Review Structure"}
              </button>

              {/* REVIEW STRUCTURE UI */}
              {expandedTpl === tpl.id && (
                <div className="mb-6 p-5 bg-black border border-neutral-800 rounded-2xl space-y-5 max-h-72 overflow-y-auto animate-in fade-in slide-in-from-top-2">
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-widest mb-3 block border-b border-neutral-800 pb-2">Roles</span>
                    <div className="flex flex-wrap gap-2">
                      {tpl.roles.map((r, i) => (
                        <span key={i} className="text-xs text-white/80 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md">{r}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-white text-xs font-bold uppercase tracking-widest mb-3 block border-b border-neutral-800 pb-2">Channels</span>
                    {tpl.categories.map((cat, i) => (
                      <div key={i} className="mb-4">
                        <p className="text-sm font-semibold text-white/90 mb-2">{cat.name}</p>
                        <ul className="space-y-1.5 pl-2">
                          {cat.channels.map((ch, j) => (
                            <li key={j} className="text-xs text-white/50 flex items-center gap-2">
                              <span className="text-neutral-600">#</span> {ch}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* DEPLOY BUTTON (OPENS MODAL) */}
            <button 
              onClick={() => setSelectedTpl(tpl)}
              className="w-full py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all mt-auto"
            >
              Deploy Template
            </button>
          </div>
        ))}
      </div>

      {/* SERVER SELECTION MODAL */}
      {selectedTpl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-3xl w-full max-w-md p-8 shadow-2xl relative">
            <button 
              onClick={() => setSelectedTpl(null)}
              className="absolute top-6 right-6 text-neutral-500 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">Select Server</h2>
            <p className="text-white/50 text-sm mb-8">Choose where to deploy <strong className="text-white">{selectedTpl.name}</strong>.</p>

            <div className="space-y-3 mb-8">
              {servers.map((server) => (
                <button 
                  key={server.id}
                  onClick={() => handleConfirmDeploy(server.id)}
                  disabled={loading}
                  className="w-full flex items-center justify-between p-4 bg-black border border-neutral-800 rounded-2xl hover:border-white transition-colors group disabled:opacity-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-black transition-colors">
                      {server.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-semibold">{server.name}</h4>
                      <p className="text-white/40 text-xs">{server.members} members</p>
                    </div>
                  </div>
                  {loading ? (
                    <span className="text-xs text-white/50">Deploying...</span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-neutral-600 group-hover:text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                  )}
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-white/30">Make sure the Snnlies bot has Admin permissions in the selected server.</p>
          </div>
        </div>
      )}

    </div>
  );
}
