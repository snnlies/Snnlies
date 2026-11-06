"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [data, setData] = useState({ credits: 0 });
  const [status, setStatus] = useState({ online: false });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const userId = getCookie("snnlies_session");
    if (!userId) {
      router.push('/login');
      return;
    }

    Promise.all([
      fetch(`/api/data?endpoint=/api/user&userId=${userId}`).then(r => r.json()),
      fetch('/api/data?endpoint=/api/status').then(r => r.json())
    ]).then(([userData, statusData]) => {
      if (userData && !userData.error) setData(userData);
      if (statusData && !statusData.error) setStatus(statusData);
    }).catch(console.error).finally(() => setLoading(false));
  }, [router]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-black">Loading Dashboard...</div>;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-black mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
          <h3 className="text-neutral-500 font-semibold mb-2">Credits</h3>
          <h2 className="text-5xl font-bold text-black">{data.credits}</h2>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
          <h3 className="text-neutral-500 font-semibold mb-2">Bot Status</h3>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            {status.online ? <span className="w-3 h-3 bg-green-500 rounded-full"/> : <span className="w-3 h-3 bg-red-500 rounded-full"/>}
            {status.online ? "Online" : "Offline"}
          </h2>
        </div>
      </div>
    </div>
  );
}
