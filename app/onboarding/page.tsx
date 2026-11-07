"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { playSound } from "../../utils/sound";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [serverType, setServerType] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const router = useRouter();

  const handleComplete = async () => {
    playSound('success');
    const getCookie = (name: string) => document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
    const userId = getCookie("snnlies_session");
    if (userId) {
      await fetch('/api/onboarding', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, serverType, mainGoal })
      });
    }
    router.push('/dashboard');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="bg-white border border-neutral-200 p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full max-w-lg animate-in zoom-in-95 duration-500">
        
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2">
            <div className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-black' : 'bg-neutral-200'}`}></div>
            <div className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-black' : 'bg-neutral-200'}`}></div>
          </div>
          <button onClick={() => router.push('/dashboard')} className="text-xs font-bold text-neutral-400 hover:text-black">Skip</button>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold text-black mb-2">What are you building?</h2>
            <p className="text-neutral-500 mb-8">Select the type of server you want to create.</p>
            <div className="flex flex-wrap gap-3">
              {['🎮 Gaming', '💬 Community', '🎨 Creator', '🪙 Crypto', '📚 Study'].map(opt => (
                <button key={opt} onClick={() => { playSound('tap'); setServerType(opt); setStep(2); }} className="px-5 py-3 rounded-full border border-neutral-200 bg-neutral-50 text-black font-semibold hover:border-black hover:bg-neutral-100 transition-all">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold text-black mb-2">What is your main goal?</h2>
            <p className="text-neutral-500 mb-8">How can Snnlies help you best?</p>
            <div className="flex flex-wrap gap-3">
              {['🚀 Build Fast', '🛡️ Auto-Mod', '🧠 AI Chatbot', '🎨 Custom Design'].map(opt => (
                <button key={opt} onClick={() => { playSound('tap'); setMainGoal(opt); handleComplete(); }} className="px-5 py-3 rounded-full border border-neutral-200 bg-neutral-50 text-black font-semibold hover:border-black hover:bg-neutral-100 transition-all">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
