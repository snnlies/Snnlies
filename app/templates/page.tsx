"use client";
import { useState } from "react";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);

  const templates = [
    { id: "1", name: "Mega Gaming", desc: "30+ Channels, 5 Roles. Tournament brackets, LFG, voice rooms.", tag: "Mega Structure", tagColor: "bg-purple-100 text-purple-700 border-purple-200" },
    { id: "2", name: "Enterprise Community", desc: "25+ Channels, 5 Roles. Onboarding gates, AI auto-moderation.", tag: "Premium", tagColor: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: "3", name: "Developer Hub", desc: "20+ Channels. GitHub feeds, code help, pair programming.", tag: "Tech", tagColor: "bg-green-100 text-green-700 border-green-200" },
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
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 relative z-10 bg-[#FAFAFA] min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Mega Templates</h1>
        <p className="text-neutral-500 text-base md:text-lg font-medium">Deploy massive, fully-structured servers in seconds.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-white border border-neutral-200 p-8 rounded-[2rem] flex flex-col hover:shadow-xl transition-all duration-300 group apple-shadow">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${tpl.tagColor}`}>
                  {tpl.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">{tpl.name}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-8">{tpl.desc}</p>
            </div>
            <button 
              onClick={() => handleDeploy(tpl.name)}
              disabled={loading === tpl.name}
              className="w-full py-3.5 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 disabled:opacity-50 transition-all mt-auto shadow-md"
            >
              {loading === tpl.name ? "Deploying..." : "Deploy Template"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
