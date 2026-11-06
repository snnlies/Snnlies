"use client";
import { useState } from "react";
import { playClickSound } from "../../utils/sound";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedTpl, setSelectedTpl] = useState<any | null>(null);

  const templates = [
    { 
      id: "1", 
      name: "Mega Gaming", 
      desc: "Tournament brackets, LFG, voice rooms.",
      tag: "Gaming",
      color: "bg-purple-100 text-purple-700 border-purple-200",
      roles: ["👑 Founder", "🛡️ Admin", "⚔️ Moderator", "🎮 Pro Gamer", "🤖 Bot"],
      categories: [
        { name: "📌 START HERE", channels: ["📢 announcements", "📜 rules", "🎭 self-roles"] },
        { name: "🎮 GAMING ZONE", channels: ["looking-for-group", "tournaments", "clips-highlights"] },
        { name: "🔊 VOICE CHANNELS", channels: ["General VC", "Gaming VC 1", "Music Room"] }
      ]
    },
    { 
      id: "2", 
      name: "Enterprise Community", 
      desc: "Onboarding gates, AI auto-moderation.",
      tag: "Community",
      color: "bg-blue-100 text-blue-700 border-blue-200",
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
      tag: "Tech",
      color: "bg-green-100 text-green-700 border-green-200",
      roles: ["👑 Founder", "💻 Developer", "🎨 Designer", "🧪 Tester", "🤖 Bot"],
      categories: [
        { name: "📌 INFO", channels: ["📢 updates", "📜 rules"] },
        { name: "💻 CODE", channels: ["general", "bug-reports", "projects"] },
        { name: "🔊 MEETINGS", channels: ["Standup Room", "Pair Programming"] }
      ]
    },
    { 
      id: "4", 
      name: "Crypto & NFT", 
      desc: "Whitelist verification, price feeds.",
      tag: "Crypto",
      color: "bg-orange-100 text-orange-700 border-orange-200",
      roles: ["🐋 Whale", "💎 Holder", "🛡️ Mod", "✅ Verified", "👤 Guest"],
      categories: [
        { name: "📌 START HERE", channels: ["📢 announcements", "📜 rules", "🔗 official-links"] },
        { name: "📈 TRADING", channels: ["price-chat", "nft-drops", "whitelist-verify"] }
      ]
    },
    { 
      id: "5", 
      name: "Study Group", 
      desc: "Study timers, notes sharing, voice rooms.",
      tag: "Education",
      color: "bg-pink-100 text-pink-700 border-pink-200",
      roles: ["👑 Admin", "🎓 Tutor", "📚 Student"],
      categories: [
        { name: "📌 INFO", channels: ["📢 announcements", "📜 rules"] },
        { name: "📚 STUDY", channels: ["homework-help", "notes-resources", "study-timer"] },
        { name: "🎧 VOICE", channels: ["Study Room 1", "Study Room 2"] }
      ]
    },
  ];

  const handleDeploy = async (templateName: string) => {
    playClickSound();
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
      setSelectedTpl(null); // Close modal on success
    } catch (err) {
      alert("Failed to connect to Bot API");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 relative z-10 bg-white min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Mega Templates</h1>
        <p className="text-black text-base md:text-lg font-medium">Review the structure, then deploy instantly.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-white border border-neutral-200 p-8 rounded-[2rem] flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-700 apple-shadow group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tpl.color}`}>
                  {tpl.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{tpl.name}</h3>
              <p className="text-black text-sm leading-relaxed mb-8">{tpl.desc}</p>
            </div>
            
            <button 
              onClick={() => { playClickSound(); setSelectedTpl(tpl); }}
              className="w-full py-3.5 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors duration-500 mt-auto shadow-md"
            >
              Review & Deploy
            </button>
          </div>
        ))}
      </div>

      {/* POPUP MODAL FOR REVIEW */}
      {selectedTpl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-700">
          <div 
            className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl border border-neutral-100 overflow-hidden animate-in zoom-in-95 duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          >
            {/* Modal Header */}
            <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-white">
              <div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${selectedTpl.color} mb-2 inline-block`}>
                  {selectedTpl.tag}
                </span>
                <h2 className="text-3xl font-bold text-black tracking-tight">{selectedTpl.name}</h2>
              </div>
              <button 
                onClick={() => { playClickSound(); setSelectedTpl(null); }}
                className="p-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-black"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-8 max-h-[50vh] overflow-y-auto bg-[#FAFAFA]">
              <div className="mb-6">
                <h4 className="text-black font-bold text-sm uppercase tracking-widest mb-3">Roles to be created</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTpl.roles.map((role: string, i: number) => (
                    <span key={i} className="text-sm font-medium text-black bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-sm">{role}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-black font-bold text-sm uppercase tracking-widest mb-3">Channels & Categories</h4>
                <div className="space-y-4">
                  {selectedTpl.categories.map((cat: any, i: number) => (
                    <div key={i} className="bg-white border border-neutral-200 p-4 rounded-2xl shadow-sm">
                      <p className="text-black font-bold mb-2">{cat.name}</p>
                      <div className="space-y-1">
                        {cat.channels.map((ch: string, j: number) => (
                          <div key={j} className="text-neutral-500 text-sm flex items-center gap-2">
                            <span className="text-neutral-400 text-lg leading-none">#</span> {ch}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-neutral-100 bg-white">
              <button 
                onClick={() => handleDeploy(selectedTpl.name)}
                disabled={loading === selectedTpl.name}
                className="w-full py-4 bg-gradient-to-b from-blue-400 to-blue-500 text-white font-bold rounded-full hover:scale-[1.02] transition-transform duration-500 shadow-[0_8px_20px_rgba(59,130,246,0.3)] disabled:opacity-50"
              >
                {loading === selectedTpl.name ? "Deploying to Discord..." : "Deploy Template Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
