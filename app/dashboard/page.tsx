"use client";
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [data, setData] = useState({ credits: 0, invites: 0 });
  const [status, setStatus] = useState({ online: false, ping: 0, uptime: 0 });
  useEffect(() => {
    fetch('/api/data?endpoint=/api/user&userId=1568291865621430282').then(r => r.json()).then(d => setData(d));
    fetch('/api/data?endpoint=/api/status').then(r => r.json()).then(d => setStatus(d));
  }, []);
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 bg-[#F5F5F7] min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-8">Real Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200">
          <h3 className="text-neutral-500 font-semibold mb-2">Credits</h3>
          <h2 className="text-5xl font-bold text-black">{data.credits}</h2>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200">
          <h3 className="text-neutral-500 font-semibold mb-2">Bot Status</h3>
          <h2 className="text-3xl font-bold text-black flex items-center gap-2">
            {status.online ? <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/> : <span className="w-3 h-3 bg-red-500 rounded-full"/>}
            {status.online ? "Online" : "Offline"}
          </h2>
          <p className="text-sm text-neutral-400 mt-2">Ping: {status.ping}ms | Uptime: {Math.floor(status.uptime/60)}m</p>
        </div>
      </div>
    </div>
  );
}
