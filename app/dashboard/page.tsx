"use client";
import { useState, useEffect } from "react";
import { playSound } from "../../utils/sound";
import WhatsNew from "../../components/WhatsNew";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState({ credits: 0 });
  const [status, setStatus] = useState({ online: false });
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{msg: string, type: 'success'|'error'} | null>(null);

  useEffect(() => {
    const getCookie = (name: string) => document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
    const userId = getCookie("snnlies_session");

    if (!userId) { router.replace('/login'); return; }
    if (userId) {
      Promise.all([
        fetch(`/api/data?endpoint=/api/user&userId=${userId}`).then(r => r.json()),
        fetch('/api/data?endpoint=/api/status').then(r => r.json())
      ]).then(([userData, statusData]) => {
        if (userData && !userData.error) setData(userData);
        if (statusData && !statusData.error) setStatus(statusData);
      }).catch(console.error).finally(() => setLoading(false));
    }
  }, [router]);

  const handleBroadcast = async () => {
    if (!news.trim()) return;
    setSending(true);
    playSound('tap');
    try {
      const res = await fetch('/api/data?endpoint=/api/broadcast', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: news })
      });
      const data = await res.json();
      if (data.success) { playSound('success'); setToast({ msg: data.message, type: 'success' }); setNews(""); }
      else { playSound('error'); setToast({ msg: data.error, type: 'error' }); }
    } catch (e) { playSound('error'); setToast({ msg: "Failed to connect.", type: 'error' }); }
    setSending(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-black font-bold bg-white">Loading Dashboard...</div>;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 bg-white min-h-screen">
      <WhatsNew />
      
      {toast && (<div className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-xl shadow-2xl z-[100] ${toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{toast.msg}</div>)}
      
      <h1 className="text-3xl font-bold text-black mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
          <h3 className="text-neutral-500 font-semibold mb-2">Credits</h3>
          <h2 className="text-5xl font-bold text-black">{data.credits}</h2>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
          <h3 className="text-neutral-500 font-semibold mb-2">Bot Status</h3>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            {status.online ? <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/> : <span className="w-3 h-3 bg-red-500 rounded-full"/>}
            {status.online ? "Online" : "Offline"}
          </h2>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
        <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">📢 Send Global Update</h3>
        <p className="text-sm text-neutral-500 mb-4">Instantly send an announcement to the #general or #announcements channel of every server.</p>
        <textarea 
          value={news} onChange={(e) => setNews(e.target.value)}
          placeholder="Type your update here..."
          className="w-full bg-[#FAFAFA] border border-neutral-200 rounded-2xl p-4 text-black outline-none focus:border-black transition-colors h-32 resize-none mb-4"
        />
        <button onClick={handleBroadcast} disabled={sending || !news.trim()} className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 disabled:opacity-50">
          {sending ? "Broadcasting..." : "Send Auto-News"}
        </button>
      </div>
    </div>
  );
}
