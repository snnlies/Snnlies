"use client";
import { useState } from "react";
import { playClickSound } from "../../utils/sound";

export default function Referral() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://snnlies.vercel.app/invite?ref=SNN123";

  const handleCopy = () => {
    playClickSound();
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-12 relative z-10 bg-[#FAFAFA] min-h-screen">
      
      {/* HEADER & 3D AVATARS */}
      <div className="text-center mb-10">
        <div className="flex justify-center items-center -space-x-4 mb-8">
          {/* Mock 3D floating avatars */}
          <div className="w-20 h-24 bg-white/50 backdrop-blur-md rounded-[2rem] shadow-xl border border-white/50 transform -rotate-12 translate-y-4 flex items-center justify-center">
            <img src="https://i.pravatar.cc/150?img=1" className="w-12 h-12 rounded-full opacity-50" alt="User" />
          </div>
          <div className="w-24 h-32 bg-gradient-to-b from-blue-100 to-blue-50 rounded-[2.5rem] shadow-2xl border border-white z-10 flex flex-col items-center justify-center relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-400 to-blue-500 flex items-center justify-center shadow-inner mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>
            </div>
            <span className="text-xs font-bold text-blue-900">Smile</span>
          </div>
          <div className="w-20 h-24 bg-white/50 backdrop-blur-md rounded-[2rem] shadow-xl border border-white/50 transform rotate-12 translate-y-4 flex items-center justify-center relative">
            <img src="https://i.pravatar.cc/150?img=5" className="w-12 h-12 rounded-full opacity-70" alt="User" />
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="green" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-3 tracking-tight">Invite 3 Friends</h1>
        <p className="text-black font-medium text-lg">Then be an early bird. Earn 50 Credits per friend.</p>
      </div>

      {/* REFERRAL LINK BOX */}
      <div className="bg-white border border-neutral-200 rounded-3xl p-2 flex items-center shadow-lg mb-8 apple-shadow">
        <div className="flex-grow flex items-center gap-3 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-neutral-400"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
          <input type="text" readOnly value={referralLink} className="bg-transparent text-black font-semibold text-sm outline-none w-full" />
        </div>
        <button 
          onClick={handleCopy}
          className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-500 ${copied ? 'bg-green-100 text-green-700' : 'bg-black text-white hover:bg-neutral-800'}`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* STATS GRID */}
      <div className="bg-white border border-neutral-200 rounded-[2rem] p-8 shadow-sm mb-8 flex justify-between text-center">
        <div>
          <h3 className="text-3xl font-bold text-black mb-1">03</h3>
          <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Friends Invited</p>
        </div>
        <div className="w-[1px] bg-neutral-200"></div>
        <div>
          <h3 className="text-3xl font-bold text-black mb-1">02</h3>
          <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Friends Verified</p>
        </div>
        <div className="w-[1px] bg-neutral-200"></div>
        <div>
          <h3 className="text-3xl font-bold text-black mb-1">100</h3>
          <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Credits Earned</p>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white border border-neutral-200 rounded-[2rem] p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-black">Recent Activity</h2>
          <button className="text-sm font-bold text-neutral-400 hover:text-black transition-colors duration-500">View All</button>
        </div>
        
        <div className="space-y-4">
          {/* Activity 1 */}
          <div className="flex justify-between items-center p-3 hover:bg-[#FAFAFA] rounded-2xl transition-colors duration-500 cursor-default">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg">ER</div>
              <div>
                <h3 className="text-black font-bold">Emma Rachel</h3>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md mt-1 inline-block border border-green-200">Verified</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-bold">+50 Credits</p>
              <p className="text-xs text-neutral-400 font-medium">2h ago</p>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="flex justify-between items-center p-3 hover:bg-[#FAFAFA] rounded-2xl transition-colors duration-500 cursor-default">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-lg">JK</div>
              <div>
                <h3 className="text-black font-bold">James Ken</h3>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md mt-1 inline-block border border-orange-200">Pending</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-neutral-400 font-bold">+0 Credits</p>
              <p className="text-xs text-neutral-400 font-medium">5h ago</p>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="flex justify-between items-center p-3 hover:bg-[#FAFAFA] rounded-2xl transition-colors duration-500 cursor-default">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-200 text-black flex items-center justify-center font-bold text-lg">DP</div>
              <div>
                <h3 className="text-black font-bold">Daniel Peter</h3>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md mt-1 inline-block border border-green-200">Verified</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-bold">+50 Credits</p>
              <p className="text-xs text-neutral-400 font-medium">1d ago</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
