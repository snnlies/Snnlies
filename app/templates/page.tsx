"use client";
import { useState } from "react";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);

  const templates = [
    { id: "1", name: "Mega Gaming", desc: "30+ Channels, 5 Roles. Tournament brackets, LFG, voice rooms.", tag: "Mega Structure" },
    { id: "2", name: "Enterprise Community", desc: "25+ Channels, 5 Roles. Onboarding gates, AI auto-moderation.", tag: "Premium" },
    { id: "3", name: "Developer Hub", desc: "20+ Channels. GitHub feeds, code help, pair programming.", tag: "Tech" },
  ];

  const handleDeploy = async (templateName: string) => {
    setLoading(templateName);
    const guildId = "1568291865621430282"; 

    try {
      const res = await fetch('/api/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guildId, templateName })
      });
      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      alert("Failed to connect to Bot API");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 relative z-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Mega Templates</h1>
        <p className="text-white/60 text-base md:text-lg">Deploy massive, fully-structured servers in seconds.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-neutral-950 border border-neutral-800 p-6 md:p-8 rounded-3xl flex flex-col hover:border-white transition-colors group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-black bg-white px-3 py-1 rounded-full uppercase tracking-wide">
                  {tpl.tag}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{tpl.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">{tpl.desc}</p>
            </div>
            <button 
              onClick={() => handleDeploy(tpl.name)}
              disabled={loading === tpl.name}
              className="w-full py-3.5 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 disabled:opacity-50 transition-all mt-auto"
            >
              {loading === tpl.name ? "Deploying..." : "Deploy Template"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
