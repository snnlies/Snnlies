"use client";
import { useState, useEffect } from "react";
import { playClickSound } from "../../utils/sound";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [servers, setServers] = useState<any[]>([]);

  useEffect(() => {
    // Fetch REAL servers from Termux
    fetch('/api/data?endpoint=/api/guilds')
      .then(res => res.json())
      .then(data => setServers(Array.isArray(data) ? data : []));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-[#FAFAFA]">
      <div className="w-full max-w-sm bg-white border border-neutral-200 p-8 rounded-[2.5rem] shadow-xl">
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Connect Discord</h2>
            <button onClick={() => { playClickSound(); setStep(2); }} className="w-full py-4 bg-[#5865F2] text-white font-semibold rounded-full hover:scale-105 transition-transform">Continue</button>
          </div>
        )}
        {step === 2 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Select Server</h2>
            <div className="flex flex-col gap-3 mb-6">
              {servers.length === 0 ? <p className="text-sm text-gray-500">Loading real servers...</p> : 
                servers.map(s => (
                  <button key={s.id} className="flex items-center gap-4 p-4 border border-neutral-200 rounded-2xl hover:border-black">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">{s.name.charAt(0)}</div>
                    <div className="text-left"><h3 className="text-black font-bold text-sm">{s.name}</h3><p className="text-gray-500 text-xs">{s.members} members</p></div>
                  </button>
                ))
              }
            </div>
            <button onClick={() => setStep(3)} className="w-full py-4 bg-black text-white font-semibold rounded-full">Deploy</button>
          </div>
        )}
        {step === 3 && <h2 className="text-2xl font-bold text-center">All Set!</h2>}
      </div>
    </div>
  );
}
