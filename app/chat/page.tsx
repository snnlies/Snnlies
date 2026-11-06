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

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isGenerating]);

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
        setPreviewChannels([
          { category: "📌 START HERE", channels: ["📢 announcements", "📜 rules"] },
          { category: "💬 COMMUNITY", channels: ["general-chat", "memes", "media"] },
        ]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", content: "Network error." }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-7rem)] flex flex-col md:flex-row bg-white border-t border-neutral-200 overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col border-r border-neutral-200 relative bg-white">
        <div className="p-4 border-b border-neutral-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold shadow-sm">S</div>
          <div>
            <h2 className="text-black font-semibold text-sm">Snnlies AI</h2>
            <p className="text-neutral-400 text-xs">Gemini 1.5 Flash</p>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[#FAFAFA]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "ai" && (
                <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black font-bold text-xs mr-3 shrink-0 mt-1 shadow-sm">S</div>
              )}
              <div className={`px-5 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                msg.role === "user" 
                  ? "bg-black text-white rounded-tr-sm shadow-md" 
                  : "bg-white border border-neutral-200 text-neutral-800 rounded-tl-sm shadow-sm"
              }`}>
                {msg.role === "ai" ? (
                  <div className="prose prose-sm max-w-none prose-pre:bg-neutral-100 prose-pre:text-black">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : msg.content}
              </div>
            </div>
          ))}
          {isGenerating && (
            <div className="flex justify-start items-center">
               <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black font-bold text-xs mr-3 shrink-0 shadow-sm">S</div>
               <div className="text-neutral-400 text-sm animate-pulse">Snnlies is thinking...</div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-neutral-200">
          <div className="relative flex items-center">
            <input
              type="text" value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Describe your dream server..."
              className="w-full bg-[#FAFAFA] text-black border border-neutral-200 rounded-full pl-6 pr-16 py-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all text-sm shadow-inner"
              disabled={isGenerating}
            />
            <button 
              onClick={handleSend} disabled={isGenerating || !input.trim()}
              className="absolute right-2 w-10 h-10 flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-500 text-white rounded-full hover:scale-105 transition-transform shadow-[0_4px_10px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:shadow-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#FAFAFA] flex flex-col">
        <div className="p-4 border-b border-neutral-200 bg-white flex justify-between items-center shadow-sm z-10">
          <div>
            <h2 className="text-black font-semibold text-sm">Live Server Preview</h2>
            <p className="text-neutral-400 text-xs">Updates in real-time</p>
          </div>
        </div>

        <div className="flex-grow p-6 flex flex-col">
          {previewChannels.length === 0 ? (
            <div className="flex-grow flex items-center justify-center text-neutral-400 text-sm border-2 border-dashed border-neutral-200 rounded-3xl bg-white/50">
              Waiting for AI to generate...
            </div>
          ) : (
            <div className="bg-white border border-neutral-200 rounded-3xl h-full p-6 overflow-y-auto animate-in fade-in zoom-in-95 duration-500 shadow-xl">
              <div className="mb-4 pb-4 border-b border-neutral-100">
                <h3 className="text-black font-bold">My Custom Server</h3>
              </div>
              <div className="space-y-6">
                {previewChannels.map((cat, i) => (
                  <div key={i}>
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">{cat.category}</p>
                    <div className="space-y-1">
                      {cat.channels.map((ch, j) => (
                        <div key={j} className="text-neutral-600 text-sm hover:bg-neutral-50 px-3 py-2 rounded-xl cursor-pointer flex items-center gap-2 transition-colors border border-transparent hover:border-neutral-200">
                          <span className="text-neutral-400 text-lg leading-none">#</span> {ch}
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
