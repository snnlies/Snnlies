"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatWorkspace() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "ai", content: "Hello! I am Snnlies AI. Describe the server you want to build, and I will generate the structure live." }
  ]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewChannels, setPreviewChannels] = useState<{ category: string; channels: string[] }[]>([]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  const handleSend = async () => {
    if (!input.trim() || isGenerating) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsGenerating(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
        
        // Fake the live preview generation based on the AI's response
        setPreviewChannels([
          { category: "📌 START HERE", channels: ["📢 announcements", "📜 rules"] },
          { category: "💬 COMMUNITY", channels: ["general-chat", "memes", "media"] },
          { category: "🎮 GAMING", channels: ["looking-for-group", "tournaments"] }
        ]);
      } else {
        setMessages(prev => [...prev, { role: "ai", content: "Error: " + (data.error || "Failed to connect to AI.") }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", content: "Network error. Please try again." }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-8rem)] flex flex-col md:flex-row bg-black border-t border-neutral-900 overflow-hidden">
      
      {/* LEFT SIDE: CHAT INTERFACE */}
      <div className="w-full md:w-1/2 flex flex-col border-r border-neutral-900 relative">
        <div className="p-4 border-b border-neutral-900 bg-black flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">S</div>
          <div>
            <h2 className="text-white font-semibold text-sm">Snnlies AI</h2>
            <p className="text-neutral-500 text-xs">Gemini 1.5 Flash</p>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "ai" && (
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-bold text-xs mr-3 shrink-0 mt-1">S</div>
              )}
              <div className={`px-5 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                msg.role === "user" 
                  ? "bg-white text-black rounded-tr-sm" 
                  : "bg-neutral-950 border border-neutral-800 text-white rounded-tl-sm overflow-x-auto"
              }`}>
                {msg.role === "ai" ? (
                  <div className="prose prose-invert prose-sm max-w-none prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          {isGenerating && (
            <div className="flex justify-start items-center">
               <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white font-bold text-xs mr-3 shrink-0">S</div>
               <div className="text-neutral-500 text-sm animate-pulse">Snnlies is thinking...</div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 bg-black border-t border-neutral-900">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Describe your dream server..."
              className="w-full bg-neutral-950 text-white border border-neutral-800 rounded-full pl-6 pr-14 py-4 outline-none focus:border-white transition-colors text-sm"
              disabled={isGenerating}
            />
            <button 
              onClick={handleSend}
              disabled={isGenerating || !input.trim()}
              className="absolute right-2 bg-white text-black p-2 rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: LIVE PREVIEW */}
      <div className="w-full md:w-1/2 bg-[#0a0a0a] flex flex-col">
        <div className="p-4 border-b border-neutral-900 bg-black flex justify-between items-center">
          <div>
            <h2 className="text-white font-semibold text-sm">Live Server Preview</h2>
            <p className="text-neutral-500 text-xs">Updates in real-time</p>
          </div>
          <button 
            disabled={previewChannels.length === 0}
            className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full disabled:opacity-30 transition-opacity"
          >
            Deploy to Discord
          </button>
        </div>

        <div className="flex-grow p-6 flex flex-col">
          {previewChannels.length === 0 ? (
            <div className="flex-grow flex items-center justify-center text-neutral-600 text-sm border-2 border-dashed border-neutral-800 rounded-3xl">
              Waiting for AI to generate...
            </div>
          ) : (
            <div className="bg-black border border-neutral-800 rounded-2xl h-full p-4 overflow-y-auto animate-in fade-in zoom-in-95 duration-500">
              <div className="mb-4 pb-4 border-b border-neutral-800">
                <h3 className="text-white font-bold">My Custom Server</h3>
              </div>
              <div className="space-y-6">
                {previewChannels.map((cat, i) => (
                  <div key={i}>
                    <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-2">{cat.category}</p>
                    <div className="space-y-1">
                      {cat.channels.map((ch, j) => (
                        <div key={j} className="text-neutral-400 text-sm hover:bg-neutral-900 px-2 py-1.5 rounded cursor-pointer flex items-center gap-2">
                          <span className="text-neutral-600 text-lg leading-none">#</span> {ch}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
