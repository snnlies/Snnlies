"use client";
import { useState, useEffect, useCallback } from "react";

type StatusData = { online: boolean; ping: number; uptime: number; guilds: number; users: number };
type Phase = "loading" | "ready" | "unavailable";

export default function Status() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [status, setStatus] = useState<StatusData | null>(null);

  const load = useCallback(() => {
    setPhase("loading");
    fetch('/api/data?endpoint=/api/status')
      .then(r => r.json())
      .then(d => {
        if (d && typeof d.online === 'boolean' && !d.error) { setStatus(d); setPhase("ready"); }
        else setPhase("unavailable");
      })
      .catch(() => setPhase("unavailable"));
  }, []);

  useEffect(() => { load(); }, [load]);

  const fmt = (v?: number) => (typeof v === 'number' ? v.toLocaleString() : "—");

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-black mb-8">System Status</h1>

      {phase === "loading" && (
        <div className="p-4 rounded-xl mb-12 flex items-center gap-3 bg-neutral-50 border border-neutral-200" role="status">
          <div className="w-3 h-3 rounded-full bg-neutral-300 animate-pulse"></div>
          <p className="font-bold text-black">Checking status…</p>
        </div>
      )}

      {phase === "unavailable" && (
        <div className="p-4 rounded-xl mb-12 flex flex-wrap items-center gap-3 bg-amber-50 border border-amber-200">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <p className="font-bold text-black">Live status is unavailable right now — we could not reach the status service, so no figures are shown instead of guessing.</p>
          <button onClick={load} className="px-4 py-1.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800">Retry</button>
        </div>
      )}

      {phase === "ready" && status && (
        <div className={`p-4 rounded-xl mb-12 flex items-center gap-3 ${status.online ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border`}>
          <div className={`w-3 h-3 rounded-full ${status.online ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <p className="font-bold text-black">{status.online ? "All Systems Operational" : "System Outage"}</p>
        </div>
      )}

      <div className="grid gap-4">
        <div className="p-6 border border-neutral-200 rounded-2xl flex justify-between"><span>Discord Bot</span><span className="font-bold">{phase === "ready" && status ? (status.online ? "Online" : "Offline") : "—"}</span></div>
        <div className="p-6 border border-neutral-200 rounded-2xl flex justify-between"><span>API Latency</span><span className="font-bold">{phase === "ready" && status ? `${status.ping}ms` : "—"}</span></div>
        <div className="p-6 border border-neutral-200 rounded-2xl flex justify-between"><span>Total Servers</span><span className="font-bold">{phase === "ready" && status ? fmt(status.guilds) : "—"}</span></div>
        <div className="p-6 border border-neutral-200 rounded-2xl flex justify-between"><span>Total Users</span><span className="font-bold">{phase === "ready" && status ? fmt(status.users) : "—"}</span></div>
      </div>
    </div>
  );
}
