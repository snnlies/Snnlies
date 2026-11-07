"use client";
import { useState, useEffect } from "react";
import { playSound } from "../utils/sound";

export default function WhatsNew() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('snnlies_v3_update');
    if (!hasSeen) {
      setTimeout(() => setShow(true), 2000); // Show after 2 seconds
    }
  }, []);

  const closeModal = () => {
    playSound('tap');
    localStorage.setItem('snnlies_v3_update', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 text-center animate-in zoom-in-95 duration-500">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🎉</div>
        <h2 className="text-3xl font-bold text-black mb-2">What's New in v3.0</h2>
        <p className="text-neutral-500 text-sm mb-8">Huge updates just landed.</p>
        
        <div className="space-y-4 text-left mb-8">
          <div className="flex items-start gap-3"><span className="text-xl">🚀</span><div><h4 className="font-bold text-black">Mega Templates</h4><p className="text-xs text-neutral-500">Deploy 30+ channel server structures instantly.</p></div></div>
          <div className="flex items-start gap-3"><span className="text-xl">📢</span><div><h4 className="font-bold text-black">Auto-News Broadcast</h4><p className="text-xs text-neutral-500">Send global updates to all servers from your Dashboard.</p></div></div>
          <div className="flex items-start gap-3"><span className="text-xl">🛡️</span><div><h4 className="font-bold text-black">Super Bot</h4><p className="text-xs text-neutral-500">New commands like /meme and advanced Auto-Mod.</p></div></div>
        </div>

        <button onClick={closeModal} className="w-full py-4 bg-black text-white font-bold rounded-full hover:bg-neutral-800 transition-colors">
          Awesome, let's go!
        </button>
      </div>
    </div>
  );
}
