"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [servers, setServers] = useState<any[]>([]);
  const [selectedServer, setSelectedServer] = useState("");
  const [activeTemplate, setActiveTemplate] = useState<any | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!document.cookie.includes('snnlies_session')) {
      router.push('/login');
      return;
    }
    setIsAuth(true);
    
    fetch('/api/data?endpoint=/api/guilds')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setServers(data);
          setSelectedServer(data[0].id);
        }
      }).catch(() => {});
  }, [router]);

  // MEGA TEMPLATES (30+ Channels & 10+ Roles)
  const templates = [
    {
      id: "esports", name: "Mega Esports", tag: "Gaming", color: "bg-blue-100 text-blue-700",
      roles: ["👑 Founder", "💼 Co-Founder", "🛡️ Admin", "⚔️ Mod", "🧪 Trial Mod", "🎮 Pro Player", "🏆 Team Captain", "⭐ VIP", "🤖 Bots", "👤 Member"],
      categories: [
        { name: "📌 START HERE", channels: ["📢 announcements", "📜 rules", "🎭 self-roles", "🎫 open-ticket", "📢 partner-pings"] },
        { name: "💬 COMMUNITY", channels: ["general-chat", "memes", "media", "bot-commands", "suggestions", "introductions"] },
        { name: "🎮 ESPORTS", channels: ["tournaments", "scrims-lfg", "clips-highlights", "match-results", "team-announcements"] },
        { name: "🔊 VOICE", channels: ["General VC", "Gaming VC 1", "Gaming VC 2", "Tournament Stage", "AFK Room"] },
        { name: "🛡️ STAFF ONLY", channels: ["staff-chat", "mod-logs", "reports", "ticket-logs"] }
      ]
    },
    {
      id: "enterprise", name: "Mega Enterprise", tag: "Community", color: "bg-purple-100 text-purple-700",
      roles: ["👑 Owner", "💼 Manager", "🛡️ Security", "🤝 Partner", "💎 Premium", "✅ Verified", "👤 Member", "🤖 Bot", "🎨 Designer", "💻 Developer"],
      categories: [
        { name: "📌 INFORMATION", channels: ["📢 announcements", "📜 rules", "🤝 partnerships", "🎉 giveaways", "📰 updates"] },
        { name: "💬 GENERAL", channels: ["general-chat", "introductions", "suggestions", "memes", "media", "bot-commands"] },
        { name: "💼 WORKSPACE", channels: ["team-chat", "sprint-planning", "design-and-ui", "code-reviews"] },
        { name: "🎫 SUPPORT", channels: ["help-center", "open-ticket", "report-bug"] },
        { name: "🔊 VOICE", channels: ["Lounge", "Meeting Room 1", "Meeting Room 2", "Music Room", "AFK"] },
        { name: "🛡️ STAFF ONLY", channels: ["staff-chat", "mod-logs", "audit-logs"] }
      ]
    }
  ];

  const handleDeploy = async () => {
    if (!selectedServer) return setToast({ msg: "Please select a server.", type: "error" });
    setLoading(activeTemplate.name);
    try {
      const res = await fetch('/api/data?endpoint=/api/deploy', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guildId: selectedServer, template: activeTemplate, secret: 'snnlies_super_secret_2026' })
      });
      const data = await res.json();
      if (data.success) { setToast({ msg: data.message, type: "success" }); setActiveTemplate(null); } 
      else { setToast({ msg: data.error, type: "error" }); }
    } catch (err) { setToast({ msg: "Failed to connect.", type: "error" }); } finally { setLoading(null); }
  };

  if (!isAuth) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative min-h-screen">
      {toast && (<div className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-xl shadow-2xl z-[100] ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{toast.msg}</div>)}
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Mega Templates</h1>
        <p className="text-neutral-500 text-lg">The biggest, most powerful server structures on Discord.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-white border border-neutral-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${tpl.color}`}>{tpl.tag}</span>
                <span className="text-xs font-bold text-neutral-400 bg-neutral-100 px-2 py-1 rounded-md">30+ Channels</span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{tpl.name}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">Includes {tpl.roles.length} Roles and {tpl.categories.length} Categories. Complete, fully structured server.</p>
            </div>
            <button onClick={() => setActiveTemplate(tpl)} className="w-full py-4 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors">Review Structure</button>
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
              <button onClick={() => setActiveTemplate(null)} className="p-2 bg-neutral-100 rounded-full font-bold hover:bg-neutral-200">✕</button>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto bg-[#FAFAFA] flex-grow">
              <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-neutral-500">Roles included</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {activeTemplate.roles.map((r:string, i:number) => <span key={i} className="bg-white border px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">{r}</span>)}
              </div>

              <h4 className="font-bold text-xs uppercase tracking-wider mb-3 text-neutral-500">Categories & Channels</h4>
              <div className="space-y-4">
                {activeTemplate.categories.map((c:any, i:number) => (
                  <div key={i} className="bg-white p-5 rounded-2xl border shadow-sm">
                    <p className="font-bold mb-3">{c.name}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {c.channels.map((ch:string, j:number) => <p key={j} className="text-sm text-neutral-500 flex items-center gap-2"><span className="text-neutral-300">#</span> {ch}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white border-t shrink-0">
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Deploy to Server</label>
              <select value={selectedServer} onChange={e => setSelectedServer(e.target.value)} className="w-full p-4 mb-4 border rounded-xl bg-gray-50 text-black outline-none focus:border-black font-medium">
                {servers.length === 0 && <option value="">No servers found. Invite bot first.</option>}
                {servers.map(s => <option key={s.id} value={s.id}>{s.name} ({s.members} members)</option>)}
              </select>
              <button onClick={handleDeploy} disabled={loading === activeTemplate.name} className="w-full py-4 bg-blue-500 text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-colors shadow-lg disabled:opacity-50 flex justify-center items-center gap-2">
                {loading === activeTemplate.name ? (
                  <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Building Server...</>
                ) : "Deploy Mega Template"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
