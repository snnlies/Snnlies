"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { playSound } from "../../utils/sound";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [servers, setServers] = useState<any[]>([]);
  const [selectedServer, setSelectedServer] = useState("");
  const [activeTemplate, setActiveTemplate] = useState<any | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!document.cookie.includes('snnlies_session')) router.push('/login');
    fetch('/api/data?endpoint=/api/guilds').then(res => res.json()).then(data => {
      if (Array.isArray(data) && data.length > 0) { setServers(data); setSelectedServer(data[0].id); }
    }).catch(() => {});
  }, [router]);

  const templates = [
    { id: "esports", name: "Mega Esports", tag: "Gaming", color: "bg-blue-100 text-blue-700",
      roles: ["👑 Owner", "🛡️ Admin", "⚔️ Mod", "🎮 Pro", "🏆 Captain", "⭐ VIP", "🤖 Bot", "👤 User"],
      categories: [
        { name: "📌 Info", channels: ["📢 updates", "📜 rules", "🎭 roles", "🎫 ticket", "🤝 partners"] },
        { name: "💬 Chat", channels: ["💬 general", "👋 intros", "😂 memes", "📸 media", "💡 ideas", "🤖 commands"] },
        { name: "🎮 Play", channels: ["🔍 lfg", "🏆 scrims", "🎬 clips", "📰 news", "🎁 giveaways", "📊 results"] },
        { name: "🔊 Voice", channels: ["🔊 Lounge", "🎮 Game 1", "🎮 Game 2", "🏆 Stage", "🎵 Music", "💤 AFK"] },
        { name: "🛡️ Staff", channels: ["💬 staff-chat", "📝 logs", "🚨 reports"] }
      ]
    },
    { id: "creator", name: "Creator Hub", tag: "Media", color: "bg-pink-100 text-pink-700",
      roles: ["👑 Owner", "🛡️ Admin", "🎬 Creator", "🌟 VIP", "🎨 Artist", "🤝 Partner", "🤖 Bot", "👤 User"],
      categories: [
        { name: "📌 Info", channels: ["📢 news", "📜 rules", "🔗 links", "🎫 ticket"] },
        { name: "💬 Chat", channels: ["💬 general", "👋 intros", "💡 ideas", "😂 memes"] },
        { name: "🎬 Media", channels: ["🎥 videos", "📺 streams", "🎨 art", "🎵 music"] },
        { name: "🔊 Voice", channels: ["🔊 Lounge", "🎙️ Podcast", "🎬 Stream", "🎵 Music", "💤 AFK"] },
        { name: "🛡️ Staff", channels: ["💬 staff-chat", "📝 logs"] }
      ]
    }
  ];

  const handleDeploy = async () => {
    if (!selectedServer) return setToast({ msg: "Please select a server.", type: "error" });
    setLoading(activeTemplate.name);
    playSound('tap');
    try {
      const res = await fetch('/api/data?endpoint=/api/deploy', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guildId: selectedServer, template: activeTemplate, secret: 'snnlies_super_secret_2026' })
      });
      const data = await res.json();
      if (data.success) { playSound('success'); setToast({ msg: data.message, type: "success" }); setActiveTemplate(null); } 
      else { playSound('error'); setToast({ msg: data.error, type: "error" }); }
    } catch (err) { playSound('error'); setToast({ msg: "Failed to connect.", type: "error" }); } finally { setLoading(null); }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative min-h-screen">
      {toast && (<div className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-xl shadow-2xl z-[100] animate-in slide-in-from-top-4 ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{toast.msg}</div>)}
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Mega Templates</h1>
        <p className="text-neutral-500 text-lg">The biggest, most powerful server structures.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-white border border-neutral-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${tpl.color}`}>{tpl.tag}</span>
                <span className="text-xs font-bold text-neutral-400 bg-neutral-100 px-2 py-1 rounded-md">30+ Channels</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{tpl.name}</h3>
            </div>
            <button onClick={() => { playSound('tap'); setActiveTemplate(tpl); }} className="w-full py-4 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors mt-6">Review Structure</button>
          </div>
        ))}
      </div>

      {activeTemplate && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            <div className="p-6 md:p-8 border-b flex justify-between items-center bg-white shrink-0">
              <div>
                <h2 className="text-3xl font-bold text-black">{activeTemplate.name}</h2>
                <p className="text-sm text-neutral-500 mt-1">{activeTemplate.roles.length} Roles • {activeTemplate.categories.length} Categories</p>
              </div>
              <button onClick={() => { playSound('tap'); setActiveTemplate(null); }} className="p-2 bg-neutral-100 rounded-full font-bold hover:bg-neutral-200">✕</button>
            </div>
            
            {/* Clean Minimal Tree View */}
            <div className="p-6 md:p-8 overflow-y-auto bg-[#FAFAFA] flex-grow">
              <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-neutral-500">Roles included</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {activeTemplate.roles.map((r:string, i:number) => <span key={i} className="bg-white border px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">{r}</span>)}
              </div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-neutral-500">Tree Structure</h4>
              <div className="space-y-4 pl-4 border-l-2 border-neutral-200">
                {activeTemplate.categories.map((c:any, i:number) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[18px] top-2 w-4 h-[2px] bg-neutral-200"></div>
                    <p className="font-bold text-black mb-2">{c.name}</p>
                    <div className="pl-4 border-l-2 border-neutral-200 space-y-2 mt-2">
                      {c.channels.map((ch:string, j:number) => (
                        <div key={j} className="relative">
                          <div className="absolute -left-[18px] top-2 w-4 h-[2px] bg-neutral-200"></div>
                          <p className="text-sm text-neutral-600">{ch}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white border-t shrink-0">
              <select value={selectedServer} onChange={e => setSelectedServer(e.target.value)} className="w-full p-4 mb-4 border rounded-xl bg-gray-50 text-black outline-none focus:border-black font-medium">
                {servers.map(s => <option key={s.id} value={s.id}>{s.name} ({s.members} members)</option>)}
              </select>
              <button onClick={handleDeploy} disabled={loading === activeTemplate.name} className="w-full py-4 bg-blue-500 text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-colors shadow-lg disabled:opacity-50">
                {loading === activeTemplate.name ? "Deploying..." : "Deploy Mega Template"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
