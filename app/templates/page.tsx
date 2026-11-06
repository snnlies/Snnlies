"use client";
import { useState, useEffect } from "react";
export default function Templates() {
  const [loading, setLoading] = useState<string|null>(null);
  const [toast, setToast] = useState<{msg: string, type: 'success'|'error'}|null>(null);
  const [servers, setServers] = useState<any[]>([]);
  const [selectedServer, setSelectedServer] = useState("");

  useEffect(() => { fetch('/api/data?endpoint=/api/guilds').then(r => r.json()).then(d => { if(Array.isArray(d)) { setServers(d); if(d.length > 0) setSelectedServer(d[0].id); } }); }, []);

  const handleDeploy = async (templateName: string) => {
    if (!selectedServer) return setToast({msg: "Please select a server first.", type: 'error'});
    setLoading(templateName);
    try {
      const res = await fetch('/api/data?endpoint=/api/deploy', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ guildId: selectedServer, templateName, secret: 'snnlies_super_secret_2026' }) });
      const data = await res.json();
      if (data.success) setToast({msg: data.message, type: 'success'});
      else setToast({msg: data.error, type: 'error'});
    } catch (err) { setToast({msg: "Failed to connect to bot", type: 'error'}); } finally { setLoading(null); }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative">
      {toast && (
        <div className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-xl shadow-2xl z-50 animate-in slide-in-from-top-4 fade-in ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {toast.msg}
          <button onClick={() => setToast(null)} className="ml-4 font-bold">✕</button>
        </div>
      )}
      <h1 className="text-4xl font-bold text-black mb-8">Mega Templates</h1>
      
      <div className="mb-8">
        <label className="block text-sm font-bold mb-2">Select Target Server</label>
        <select value={selectedServer} onChange={e => setSelectedServer(e.target.value)} className="w-full max-w-md p-3 border border-neutral-300 rounded-xl bg-white text-black">
          {servers.length === 0 && <option value="">No servers found. Invite bot first.</option>}
          {servers.map(s => <option key={s.id} value={s.id}>{s.name} ({s.members} members)</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-neutral-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-2xl font-bold mb-2">Mega Gaming</h3>
          <p className="text-neutral-500 mb-6">30+ Channels, 5 Roles. Tournament brackets, LFG, voice rooms.</p>
          <button onClick={() => handleDeploy('Mega Gaming')} disabled={loading === 'Mega Gaming'} className="w-full py-3.5 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 disabled:opacity-50">
            {loading === 'Mega Gaming' ? "Deploying..." : "Deploy Template"}
          </button>
        </div>
        <div className="bg-white border border-neutral-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all">
          <h3 className="text-2xl font-bold mb-2">Enterprise Community</h3>
          <p className="text-neutral-500 mb-6">25+ Channels, 5 Roles. Onboarding gates, AI auto-moderation.</p>
          <button onClick={() => handleDeploy('Enterprise Community')} disabled={loading === 'Enterprise Community'} className="w-full py-3.5 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 disabled:opacity-50">
            {loading === 'Enterprise Community' ? "Deploying..." : "Deploy Template"}
          </button>
        </div>
      </div>
    </div>
  );
}
