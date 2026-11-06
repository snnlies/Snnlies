"use client";
import { useState } from "react";

export default function Templates() {
  const [loading, setLoading] = useState<string | null>(null);

  const templates = [
    { id: "1", name: "Gaming", desc: "LFG channels and tournament brackets." },
    { id: "2", name: "Community", desc: "Welcome gates and auto-moderation." },
  ];

  const handleDeploy = async (templateName: string) => {
    setLoading(templateName);
    // Your Real Discord Server ID
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
    <div className="w-full max-w-6xl mx-auto px-6 py-16 relative z-10">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">Production Templates</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((tpl) => (
          <div key={tpl.id} className="bg-black border border-neutral-800 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{tpl.name}</h3>
              <p className="text-white/60 text-sm mb-6">{tpl.desc}</p>
            </div>
            <button 
              onClick={() => handleDeploy(tpl.name)}
              disabled={loading === tpl.name}
              className="w-full py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 disabled:opacity-50"
            >
              {loading === tpl.name ? "Deploying..." : "Deploy Template"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
