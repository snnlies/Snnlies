"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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
    <div className="flex flex-col items-center p-6 text-center">
      <h1 className="text-5xl md:text-8xl font-bold mt-12 mb-6 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        snnlies.
      </h1>
      <p className="text-neutral-400 text-lg max-w-md mb-12">
        Experience the pinnacle of Discord automation. Minimalist design, absolute precision.
      </p>

      <div className="w-full max-w-2xl flex flex-col bg-black border border-neutral-800 rounded-2xl p-4 mb-12 shadow-2xl shadow-neutral-900/50">
        <div className="flex-grow overflow-y-auto mb-4 space-y-4 max-h-[40vh]">
          {messages.length === 0 && (
            <p className="text-neutral-500 text-sm my-10">Ask Snnlies AI anything...</p>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm text-left ${
                msg.role === "user" ? "bg-white text-black" : "bg-neutral-900 text-white border border-neutral-800"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-2xl bg-neutral-900 text-neutral-400 text-sm animate-pulse">Snnlies is thinking...</div>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <input
            type="text" value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-grow bg-neutral-900 text-white border border-neutral-800 rounded-full px-4 py-3 outline-none focus:border-neutral-500 transition text-sm"
          />
          <button onClick={sendMessage} disabled={loading} className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition disabled:opacity-50">Send</button>
        </div>
      </div>
    </div>
  );
}
