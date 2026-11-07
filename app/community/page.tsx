"use client";
import { useState } from "react";
export default function Community() {
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending');
    await fetch('/api/data?endpoint=/api/feedback', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ message: feedback }) });
    setStatus('sent'); setFeedback("");
    setTimeout(() => setStatus('idle'), 3000);
  };
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-black mb-4">Community Hub</h1>
      <p className="text-neutral-600 text-lg mb-8">Meet other server owners, share what you are building, and shape what Snnlies does next.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <a href="https://discord.gg/9FP3afu4eb" target="_blank" rel="noreferrer" className="bg-white p-6 border border-neutral-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold text-black mb-2">Join the Discord Server</h2>
          <p className="text-neutral-600 text-sm">Chat with the team and other community owners, get announcements first, and vote on the roadmap.</p>
        </a>
        <a href="/support" className="bg-white p-6 border border-neutral-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-bold text-black mb-2">Need Help?</h2>
          <p className="text-neutral-600 text-sm">Visit Support for help with your account, credits, templates and the AI Workspace.</p>
        </a>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 border border-neutral-200 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Send Feedback</h2>
        <textarea value={feedback} onChange={e => setFeedback(e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 p-4 rounded-xl mb-4 outline-none focus:border-black" placeholder="Describe your issue or idea..." required />
        <button disabled={status === 'sending' || status === 'sent'} className="w-full py-3 bg-black text-white font-bold rounded-xl disabled:opacity-50">
          {status === 'sending' ? 'Sending...' : status === 'sent' ? '✅ Sent to Database!' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}
