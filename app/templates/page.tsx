"use client";
import { useState, useEffect } from "react";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  
  // Real Servers State
  const [servers, setServers] = useState<any[]>([]);
  const [selectedServer, setSelectedServer] = useState("");
  
  // Modal State
  const [activeTemplate, setActiveTemplate] = useState<any | null>(null);

  useEffect(() => {
    // Fetch real servers from your Termux bot
    fetch('/api/data?endpoint=/api/guilds')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setServers(data);
          setSelectedServer(data[0].id);
        }
      });
  }, []);

  // MEGA TEMPLATE DATA
  const templates = [
    {
      id: "gaming",
      name: "Mega Gaming",
      desc: "The ultimate server for esports teams, clans, and gaming communities.",
      tag: "Gaming",
      color: "bg-blue-100 text-blue-700 border-blue-200",
      roles: ["👑 Founder", "🛡️ Admin", "⚔️ Moderator", "🎮 Pro Gamer", "🤖 Bots"],
      categories: [
        { name: "📌 START HERE", channels: ["📢 announcements", "📜 rules", "🎭 self-roles", "🎫 open-ticket"] },
        { name: "💬 COMMUNITY", channels: ["general-chat", "memes", "media", "bot-commands"] },
        { name: "🎮 GAMING ZONE", channels: ["looking-for-group", "tournaments", "clips-highlights"] },
        { name: "🔊 VOICE CHANNELS", channels: ["General VC", "Gaming VC 1", "Music Room"] }
      ]
    },
    {
      id: "community",
      name: "Enterprise Community",
      desc: "A structured hub for creators and large general communities.",
      tag: "Community",
      color: "bg-purple-100 text-purple-700 border-purple-200",
      roles: ["👑 Owner", "💼 Manager", "🛡️ Security", "✅ Verified", "👤 Member"],
      categories: [
        { name: "📌 INFORMATION", channels: ["📢 announcements", "📜 rules", "🤝 partnerships"] },
        { name: "💬 GENERAL", channels: ["general-chat", "introductions", "suggestions"] },
        { name: "🎨 CREATORS", channels: ["art-showcase", "music-share", "youtube-videos"] },
        { name: "🛡️ STAFF ONLY", channels: ["staff-chat", "mod-logs", "reports"] }
      ]
    },
    {
      id: "developer",
      name: "Developer Hub",
      desc: "Perfect for coding communities, open-source projects, and tech teams.",
      tag: "Tech",
      color: "bg-green-100 text-green-700 border-green-200",
      roles: ["👑 Admin", "💻 Developer", "🎨 Designer", "🧪 Tester", "🤖 CI/CD"],
      categories: [
        { name: "📌 INFO", channels: ["📢 updates", "📜 guidelines", "🔗 resources"] },
        { name: "💻 CODE", channels: ["general", "bug-reports", "projects", "code-help"] },
        { name: "🔊 MEETINGS", channels: ["Standup Room", "Pair Programming"] }
      ]
    },
    {
      id: "crypto",
      name: "Crypto & NFT",
      desc: "Secure setup for token projects, NFT drops, and trading.",
      tag: "Crypto",
      color: "bg-orange-100 text-orange-700 border-orange-200",
      roles: ["🐋 Whale", "💎 Holder", "🛡️ Mod", "✅ Verified", "👤 Guest"],
      categories: [
        { name: "📌 START HERE", channels: ["📢 announcements", "📜 rules", "🔗 official-links"] },
        { name: "📈 TRADING", channels: ["price-chat", "nft-drops", "whitelist-verify"] },
        { name: "🔊 VOICE", channels: ["Trading Floor", "Community VC"] }
      ]
    }
  ];

  const handleDeploy = async () => {
    if (!selectedServer) {
      setToast({ msg: "Please select a server first.", type: "error" });
      return;
    }
    setLoading(activeTemplate.name);

    try {
      const res = await fetch('/api/data?endpoint=/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guildId: selectedServer,
          templateName: activeTemplate.name,
          secret: 'snnlies_super_secret_2026'
        })
      });
      const data = await res.json();
      
      if (data.success) {
        setToast({ msg: data.message, type: "success" });
        setActiveTemplate(null); // Close modal on success
      } else {
        setToast({ msg: data.error, type: "error" });
      }
    } catch (err) {
      setToast({ msg: "Failed to connect to bot API.", type: "error" });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative min-h-screen">
      
      {/* TOAST NOTIFICATION */}
      {toast && (
        <div className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-xl shadow-2xl z-[100] animate-in slide-in-from-top-4 fade-in ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {toast.msg}
          <button onClick={() => setToast(null)} className="ml-4 font-bold">✕</button>
        </div>
      )}

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Mega Templates</h1>
        <p className="text-neutral-500 text-lg">Review the exact structure, select your server, and deploy instantly.</p>
      </div>

      {/* TEMPLATE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-white border border-neutral-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tpl.color}`}>
                  {tpl.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{tpl.name}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">{tpl.desc}</p>
            </div>
            
            <button 
              onClick={() => setActiveTemplate(tpl)}
              className="w-full py-4 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors shadow-md"
            >
              Review & Deploy
            </button>
          </div>
        ))}
      </div>

      {/* MEGA POPUP MODAL */}
      {activeTemplate && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-500">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
            
            {/* Modal Header */}
            <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-white">
              <div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${activeTemplate.color} mb-2 inline-block`}>
                  {activeTemplate.tag}
                </span>
                <h2 className="text-3xl font-bold text-black tracking-tight">{activeTemplate.name}</h2>
              </div>
              <button onClick={() => setActiveTemplate(null)} className="p-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 text-black"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Modal Body (Scrollable MEGA LIST) */}
            <div className="p-8 max-h-[50vh] overflow-y-auto bg-[#FAFAFA]">
              <div className="mb-8">
                <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-3 border-b border-neutral-200 pb-2">Roles to be created</h4>
                <div className="flex flex-wrap gap-2">
                  {activeTemplate.roles.map((role: string, i: number) => (
                    <span key={i} className="text-sm font-medium text-black bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-sm">{role}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-3 border-b border-neutral-200 pb-2">Categories & Channels</h4>
                <div className="space-y-4">
                  {activeTemplate.categories.map((cat: any, i: number) => (
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

            {/* Modal Footer (Server Selection + Deploy) */}
            <div className="p-6 border-t border-neutral-100 bg-white">
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Select Target Server</label>
              <select 
                value={selectedServer} 
                onChange={e => setSelectedServer(e.target.value)} 
                className="w-full p-3 mb-4 border border-neutral-300 rounded-xl bg-neutral-50 text-black outline-none focus:border-black transition-colors"
              >
                {servers.length === 0 && <option value="">No servers found. Invite bot first.</option>}
                {servers.map(s => <option key={s.id} value={s.id}>{s.name} ({s.members} members)</option>)}
              </select>

              <button 
                onClick={handleDeploy}
                disabled={loading === activeTemplate.name}
                className="w-full py-4 bg-gradient-to-b from-blue-400 to-blue-500 text-white font-bold rounded-full hover:scale-[1.02] transition-transform duration-500 shadow-[0_8px_20px_rgba(59,130,246,0.3)] disabled:opacity-50"
              >
                {loading === activeTemplate.name ? "Deploying Mega Structure..." : "Deploy Template Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
