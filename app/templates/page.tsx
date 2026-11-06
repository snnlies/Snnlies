"use client";
import { useState, useEffect } from "react";
import { playClickSound } from "../../utils/sound";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedTpl, setSelectedTpl] = useState<any | null>(null);

  // Fix Background Scroll Issue when popup is open
  useEffect(() => {
    if (selectedTpl) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedTpl]);

  const templates = [
    { 
      id: "1", name: "Mega Gaming", desc: "Tournament brackets, LFG, voice rooms.", tag: "Gaming", color: "bg-purple-100 text-purple-700 border-purple-200",
      roles: ["👑 Founder", "🛡️ Admin", "⚔️ Moderator", "🎮 Pro Gamer", "🤖 Bot"],
      categories: [{ name: "📌 START HERE", channels: ["📢 announcements", "📜 rules", "🎭 self-roles"] }, { name: "🎮 GAMING", channels: ["looking-for-group", "tournaments", "clips"] }]
    },
    { 
      id: "2", name: "Enterprise Community", desc: "Onboarding gates, AI auto-moderation.", tag: "Community", color: "bg-blue-100 text-blue-700 border-blue-200",
      roles: ["👑 Owner", "💼 Manager", "🛡️ Security", "✅ Verified"],
      categories: [{ name: "📌 INFORMATION", channels: ["📢 announcements", "📜 rules"] }, { name: "💬 GENERAL", channels: ["general-chat", "introductions"] }]
    },
    { 
      id: "3", name: "Developer Hub", desc: "GitHub feeds, code help, pair programming.", tag: "Tech", color: "bg-green-100 text-green-700 border-green-200",
      roles: ["👑 Founder", "💻 Developer", "🎨 Designer", "🧪 Tester"],
      categories: [{ name: "💻 CODE", channels: ["general", "bug-reports", "projects"] }, { name: "🔊 MEETINGS", channels: ["Standup Room", "Pair Programming"] }]
    },
    { 
      id: "4", name: "Crypto & NFT", desc: "Whitelist verification, price feeds.", tag: "Crypto", color: "bg-orange-100 text-orange-700 border-orange-200",
      roles: ["🐋 Whale", "💎 Holder", "🛡️ Mod", "✅ Verified"],
      categories: [{ name: "📈 TRADING", channels: ["price-chat", "nft-drops", "whitelist-verify"] }]
    },
    { 
      id: "5", name: "Anime Kingdom", desc: "Manga recommendations, watch parties.", tag: "Anime", color: "bg-rose-100 text-rose-700 border-rose-200",
      roles: ["👑 Admin", "🌸 Otaku", "⛩️ Senpai", "👤 Member"],
      categories: [{ name: "⛩️ ANIME", channels: ["anime-chat", "manga-recommendations", "watch-party"] }, { name: "🔊 VOICE", channels: ["Anime VC 1", "Anime VC 2"] }]
    },
    { 
      id: "6", name: "Music Lounge", desc: "Spotify feeds, jam sessions, bot commands.", tag: "Music", color: "bg-indigo-100 text-indigo-700 border-indigo-200",
      roles: ["👑 DJ", "🎧 Listener", "🎵 Artist"],
      categories: [{ name: "🎵 MUSIC", channels: ["spotify-feeds", "song-suggestions", "music-bot"] }, { name: "🔊 VOICE", channels: ["Music Lounge", "Jam Room"] }]
    },
    { 
      id: "7", name: "Startup Workspace", desc: "Internal team comms, sprint planning.", tag: "Business", color: "bg-amber-100 text-amber-700 border-amber-200",
      roles: ["👑 Founder", "📈 Manager", "💻 Dev", "🎨 Design"],
      categories: [{ name: "🏢 WORKSPACE", channels: ["team-chat", "sprint-planning", "design-and-ui"] }]
    },
    { 
      id: "8", name: "Study Group", desc: "Study timers, notes sharing, voice rooms.", tag: "Education", color: "bg-pink-100 text-pink-700 border-pink-200",
      roles: ["👑 Admin", "🎓 Tutor", "📚 Student"],
      categories: [{ name: "📚 STUDY", channels: ["homework-help", "notes-resources", "study-timer"] }, { name: "🎧 VOICE", channels: ["Study Room 1", "Study Room 2"] }]
    },
    { 
      id: "9", name: "Roleplay World", desc: "Character creation, story channels, lore.", tag: "Roleplay", color: "bg-teal-100 text-teal-700 border-teal-200",
      roles: ["👑 Game Master", "🧝 Hero", "🧙 Mage", "👤 NPC"],
      categories: [{ name: "📜 LORE", channels: ["character-sheets", "story-archive", "rules"] }, { name: "🎭 ROLEPLAY", channels: ["tavern", "forest", "castle"] }]
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
      setSelectedTpl(null);
    } catch (err) {
      alert("Failed to connect to Bot API");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 relative z-10 bg-white min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Mega Templates</h1>
        <p className="text-black text-base md:text-lg font-medium">Review the structure, then deploy instantly.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-white border border-neutral-200 p-8 rounded-[2rem] flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 apple-shadow group">
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-md animate-in fade-in duration-[1000ms]">
          <div 
            className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl border border-neutral-100 overflow-hidden animate-in zoom-in-95 duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
          >
            <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-white">
              <div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${selectedTpl.color} mb-2 inline-block`}>
                  {selectedTpl.tag}
                </span>
                <h2 className="text-3xl font-bold text-black tracking-tight">{selectedTpl.name}</h2>
              </div>
              <button 
                onClick={() => { playClickSound(); setSelectedTpl(null); }}
                className="p-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors duration-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-black"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

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
