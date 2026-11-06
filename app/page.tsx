"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUrl = "https://discord.com/oauth2/authorize?client_id=1568201630112030760&response_type=code&redirect_uri=https%3A%2F%2Fsnnlies.vercel.app%2Fapi%2Fauth%2Fcallback%2Fdiscord&integration_type=0&scope=identify+openid+connections+guilds+guilds.join+applications.commands";
  const botUrl = "https://discord.com/oauth2/authorize?client_id=1568201630112030760&permissions=8&integration_type=0&scope=bot+applications.commands";

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "ai", content: data.reply }]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mt-10 mb-4 tracking-tighter">
        snnlies.
      </h1>
      <p className="text-neutral-400 text-sm md:text-base max-w-md mb-8">
        Experience the pinnacle of Discord automation. Minimalist design, absolute precision.
      </p>
      
      <div className="flex gap-4 flex-col sm:flex-row mb-12">
        <a href={loginUrl} className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition">
          Login with Discord
        </a>
        <a href={botUrl} className="px-8 py-3 border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-900 transition">
          Invite Bot
        </a>
      </div>

      {/* AI Chat Area */}
      <div className="w-full max-w-2xl flex flex-col flex-grow bg-black border border-neutral-800 rounded-2xl p-4 mb-4">
        <div className="flex-grow overflow-y-auto mb-4 space-y-4 max-h-[40vh]">
          {messages.length === 0 && (
            <p className="text-neutral-500 text-sm my-10">Ask Snnlies AI anything...</p>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm text-left ${
                msg.role === "user" 
                  ? "bg-white text-black" 
                  : "bg-neutral-900 text-white border border-neutral-800"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-2xl bg-neutral-900 text-neutral-400 text-sm animate-pulse">
                Snnlies is thinking...
              </div>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-grow bg-neutral-900 text-white border border-neutral-800 rounded-full px-4 py-3 outline-none focus:border-neutral-500 transition text-sm"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
