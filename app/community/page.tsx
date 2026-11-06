"use client";
import { useState } from "react";
import { playClickSound } from "../../utils/sound";

export default function Community() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    alert("Feedback sent successfully to the Snnlies team!");
    setFeedback("");
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 relative z-10 bg-white min-h-screen">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Community Hub</h1>
        <p className="text-black text-base md:text-lg font-medium">Updates, feedback, bug reports, and top members.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          
          {/* Feedback Form */}
          <div className="bg-white border border-neutral-200 p-8 rounded-[2rem] apple-shadow">
            <h2 className="text-2xl font-bold text-black mb-2">Send Feedback</h2>
            <p className="text-neutral-500 text-sm mb-6 font-medium">Have a new feature idea or found a bug? Let us know.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Describe your idea or issue..."
                className="w-full bg-[#FAFAFA] border border-neutral-200 rounded-2xl p-4 text-black text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none h-32"
                required
              />
              <button 
                type="submit"
                className="w-full py-3.5 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors duration-500 shadow-md"
              >
                Submit Feedback
              </button>
            </form>
          </div>

          {/* Bug Reports / Status */}
          <div className="bg-white border border-neutral-200 p-8 rounded-[2rem] apple-shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-black">Bug Tracker</h2>
              <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200">All Systems Operational</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl border border-neutral-100">
                <span className="text-sm font-semibold text-black">Dashboard loading slowly</span>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">Fixed</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl border border-neutral-100">
                <span className="text-sm font-semibold text-black">AI Chat syntax error</span>
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">In Review</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#FAFAFA] rounded-2xl border border-neutral-100">
                <span className="text-sm font-semibold text-black">Mobile Menu overlap</span>
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-md">Pending</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          
          {/* Latest Updates */}
          <div className="bg-white border border-neutral-200 p-8 rounded-[2rem] apple-shadow">
            <h2 className="text-2xl font-bold text-black mb-6">Latest Updates</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-xs text-neutral-400 font-bold mb-1">v2.1.0 • Today</p>
                <h3 className="text-black font-bold">New Community Hub</h3>
                <p className="text-sm text-neutral-500 font-medium mt-1">Added feedback forms, bug trackers, and member leaderboards.</p>
              </div>
              <div className="border-l-4 border-neutral-200 pl-4">
                <p className="text-xs text-neutral-400 font-bold mb-1">v2.0.0 • Last Week</p>
                <h3 className="text-black font-bold">Live AI Workspace</h3>
                <p className="text-sm text-neutral-500 font-medium mt-1">Split-screen AI chat that generates server structures in real-time.</p>
              </div>
            </div>
          </div>

          {/* Top Members */}
          <div className="bg-white border border-neutral-200 p-8 rounded-[2rem] apple-shadow">
            <h2 className="text-2xl font-bold text-black mb-6">Top Members</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-neutral-400">1</span>
                  <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-full" alt="User" />
                  <span className="text-sm font-bold text-black">Alex M.</span>
                </div>
                <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-md">⭐ VIP</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-neutral-400">2</span>
                  <img src="https://i.pravatar.cc/150?img=5" className="w-10 h-10 rounded-full" alt="User" />
                  <span className="text-sm font-bold text-black">Sarah K.</span>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">💎 Booster</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-neutral-400">3</span>
                  <img src="https://i.pravatar.cc/150?img=12" className="w-10 h-10 rounded-full" alt="User" />
                  <span className="text-sm font-bold text-black">David L.</span>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">🌱 Early</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
