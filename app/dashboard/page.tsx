"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [data, setData] = useState({ credits: 0, invites: 0, badge: "Loading..." });
  const [status, setStatus] = useState({ online: false, ping: 0 });
  const [error, setError] = useState(false);

  useEffect(() => {
    // Read the real logged-in user ID from the cookie
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const userId = getCookie("snnlies_session");

    if (userId) {
      fetch(`/api/data?endpoint=/api/user&userId=${userId}`)
        .then(r => r.json())
        .then(d => { if(d.error) setError(true); else setData(d); })
        .catch(() => setError(true));
    } else {
      setError(true);
    }

    fetch('/api/data?endpoint=/api/status')
      .then(r => r.json())
      .then(d => setStatus(d))
      .catch(() => {});
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-black mb-8">Real Dashboard</h1>
      {error ? (
        <p className="text-red-500 font-bold">Failed to load data. Please log in or check bot connection.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
            <h3 className="text-neutral-500 font-semibold mb-2">Your Credits</h3>
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
      )}
    </div>
  );
}
