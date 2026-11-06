"use client";
import { useState, useEffect } from "react";
export default function Status() {
  const [status, setStatus] = useState({ online: false, ping: 0, uptime: 0, guilds: 0, users: 0 });
  useEffect(() => { fetch('/api/data?endpoint=/api/status').then(r => r.json()).then(d => setStatus(d)); }, []);
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className={`p-4 rounded-xl mb-12 flex items-center gap-3 ${status.online ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border`}>
        <div className={`w-3 h-3 rounded-full ${status.online ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <p className="font-bold">{status.online ? "All Systems Operational" : "System Outage"}</p>
      </div>
      <div className="grid gap-4">
        <div className="p-6 border border-neutral-200 rounded-2xl flex justify-between"><span>Discord Bot</span><span className="font-bold">{status.online ? "Online" : "Offline"}</span></div>
        <div className="p-6 border border-neutral-200 rounded-2xl flex justify-between"><span>API Latency</span><span className="font-bold">{status.ping}ms</span></div>
        <div className="p-6 border border-neutral-200 rounded-2xl flex justify-between"><span>Total Servers</span><span className="font-bold">{status.guilds}</span></div>
        <div className="p-6 border border-neutral-200 rounded-2xl flex justify-between"><span>Total Users</span><span className="font-bold">{status.users}</span></div>
      </div>
    </div>
  );
}
