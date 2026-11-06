"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatWorkspace() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "ai", content: "How can I help you today? Tell us what you need, and we'll handle the rest." }
  ]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { text: "Create Gaming Server", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { text: "Setup Auto-Mod", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { text: "Generate Welcome Message", color: "bg-green-100 text-green-700 border-green-200" },
  ];

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isGenerating]);

  const handleSend = async (msgText?: string) => {
    const textToSend = msgText || input;
    if (!textToSend.trim() || isGenerating) return;
    
    setMessages(prev => [...prev, { role: "user", content: textToSend }]);
    setInput("");
    setIsGenerating(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend })
      });
      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", content: "Network error." }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col bg-white border border-neutral-200 rounded-[2rem] overflow-hidden shadow-xl relative">
      
      {/* Header */}
      <div className="p-4 border-b border-neutral-100 flex items-center gap-3 bg-white z-10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold shadow-sm">S</div>
        <div>
          <h2 className="text-black font-semibold text-sm">Snnlies AI</h2>
          <p className="text-neutral-400 text-xs">Agent is ready</p>
        </div>
      </div>

      {/* Chat Area with subtle mesh background */}
      <div className="flex-grow overflow-y-auto p-6 space-y-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-pink-50 opacity-50 pointer-events-none"></div>

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} relative z-10`}>
            {msg.role === "ai" && (
              <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black font-bold text-xs mr-3 shrink-0 mt-1 shadow-sm">S</div>
            )}
            <div className={`px-5 py-4 rounded-3xl max-w-[85%] text-sm leading-relaxed ${
              msg.role === "user" 
                ? "bg-black text-white rounded-tr-sm shadow-md" 
                : "bg-white/80 backdrop-blur-md border border-neutral-200 text-neutral-800 rounded-tl-sm shadow-sm"
            }`}>
              {msg.role === "ai" ? (
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : msg.content}
            </div>
          </div>
        ))}
        {isGenerating && (
          <div className="flex justify-start items-center relative z-10">
             <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-black font-bold text-xs mr-3 shrink-0 shadow-sm">S</div>
             <div className="text-neutral-500 text-sm animate-pulse bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">Snnlies is thinking...</div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/80 backdrop-blur-md border-t border-neutral-100 z-10">
        
        {/* Quick Prompts */}
        <div className="flex flex-wrap gap-2 mb-4">
          {quickPrompts.map((prompt, i) => (
            <button 
              key={i} 
              onClick={() => handleSend(prompt.text)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border ${prompt.color} hover:scale-105 transition-transform shadow-sm`}
            >
              {prompt.text}
            </button>
          ))}
        </div>

        <div className="relative flex items-center bg-white border border-neutral-200 rounded-full p-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <input
            type="text" value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-grow bg-transparent text-black px-4 py-3 outline-none text-sm placeholder-neutral-400"
            disabled={isGenerating}
          />
          <button 
            onClick={() => handleSend()} disabled={isGenerating || !input.trim()}
            className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-500 text-white rounded-full hover:scale-105 transition-transform shadow-md disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
