"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [servers, setServers] = useState<any[]>([]);
  const [selectedServer, setSelectedServer] = useState("");
  const [activeTemplate, setActiveTemplate] = useState<any | null>(null);
  
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // Check if user has a session (Cookie check on server-side is better, but for UI we check localStorage or an API)
    const cookies = document.cookie;
    if (!cookies.includes('snnlies_session')) {
      // If no cookie, redirect to login
      router.push('/login');
    } else {
      setIsLoggedIn(true);
      // Fetch real servers
      fetch('/api/data?endpoint=/api/guilds')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            setServers(data);
            setSelectedServer(data[0].id);
          }
        });
    }
    setCheckingAuth(false);
  }, [router]);

  if (checkingAuth || !isLoggedIn) return <div className="min-h-screen flex items-center justify-center text-black">Checking authentication...</div>;

  const templates = [
    {
      id: "gaming", name: "Mega Gaming", tag: "Gaming", color: "bg-blue-100 text-blue-700 border-blue-200",
      roles: ["👑 Founder", "🛡️ Admin", "⚔️ Moderator", "🎮 Pro Gamer"],
      categories: [{ name: "📌 START HERE", channels: ["📢 announcements", "📜 rules", "🎭 self-roles"] }, { name: "💬 COMMUNITY", channels: ["general-chat", "memes", "media"] }]
    },
    {
      id: "community", name: "Enterprise Community", tag: "Community", color: "bg-purple-100 text-purple-700 border-purple-200",
      roles: ["👑 Owner", "💼 Manager", "🛡️ Security", "✅ Verified"],
      categories: [{ name: "📌 INFORMATION", channels: ["📢 announcements", "📜 rules"] }, { name: "💬 GENERAL", channels: ["general-chat", "introductions"] }]
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
      if (data.success) setToast({ msg: data.message, type: "success" }); else setToast({ msg: data.error, type: "error" });
    } catch (err) { setToast({ msg: "Failed to connect.", type: "error" }); } finally { setLoading(null); }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative min-h-screen">
      {toast && (<div className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-xl shadow-2xl z-[100] ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{toast.msg}</div>)}
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Mega Templates</h1>
        <p className="text-neutral-500 text-lg">Select a template to deploy to your server.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-white border border-neutral-200 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between">
            <div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tpl.color} mb-4 inline-block`}>{tpl.tag}</span>
              <h3 className="text-2xl font-bold text-black mb-3">{tpl.name}</h3>
            </div>
            <button onClick={() => setActiveTemplate(tpl)} className="w-full py-4 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors mt-6">Review & Deploy</button>
          </div>
        ))}
      </div>

      {activeTemplate && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="p-8 border-b flex justify-between items-center">
              <h2 className="text-3xl font-bold text-black">{activeTemplate.name}</h2>
              <button onClick={() => setActiveTemplate(null)} className="p-2 bg-neutral-100 rounded-full font-bold">✕</button>
            </div>
            <div className="p-8 max-h-[50vh] overflow-y-auto bg-[#FAFAFA]">
              <h4 className="font-bold text-xs uppercase mb-3">Roles</h4>
              <div className="flex flex-wrap gap-2 mb-6">{activeTemplate.roles.map((r:string, i:number) => <span key={i} className="bg-white border px-3 py-1 rounded-lg text-sm">{r}</span>)}</div>
              <h4 className="font-bold text-xs uppercase mb-3">Channels</h4>
              {activeTemplate.categories.map((c:any, i:number) => <div key={i} className="bg-white p-4 rounded-xl mb-2"><p className="font-bold mb-1">{c.name}</p>{c.channels.map((ch:string, j:number) => <p key={j} className="text-sm text-gray-500"># {ch}</p>)}</div>)}
            </div>
            <div className="p-6 bg-white border-t">
              <select value={selectedServer} onChange={e => setSelectedServer(e.target.value)} className="w-full p-3 mb-4 border rounded-xl bg-gray-50 text-black">
                {servers.map(s => <option key={s.id} value={s.id}>{s.name} ({s.members} members)</option>)}
              </select>
              <button onClick={handleDeploy} disabled={loading === activeTemplate.name} className="w-full py-4 bg-blue-500 text-white font-bold rounded-full disabled:opacity-50">
                {loading === activeTemplate.name ? "Deploying..." : "Deploy Template Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
