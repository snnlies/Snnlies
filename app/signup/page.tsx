"use client";
import { useState } from "react";
import Link from "next/link";
import { playClickSound } from "../../utils/sound";

export default function SignUp() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 relative z-10 bg-[#FAFAFA]">
      
      {/* Progress Indicator */}
      <div className="flex items-center gap-3 mb-10">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-700 ${step >= 1 ? 'bg-black text-white shadow-md' : 'bg-neutral-200 text-neutral-500'}`}>1</div>
        <div className={`w-12 h-[2px] rounded-full transition-colors duration-700 ${step >= 2 ? 'bg-black' : 'bg-neutral-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-700 ${step >= 2 ? 'bg-black text-white shadow-md' : 'bg-neutral-200 text-neutral-500'}`}>2</div>
        <div className={`w-12 h-[2px] rounded-full transition-colors duration-700 ${step >= 3 ? 'bg-black' : 'bg-neutral-200'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-700 ${step >= 3 ? 'bg-black text-white shadow-md' : 'bg-neutral-200 text-neutral-500'}`}>3</div>
      </div>

      <div className="w-full max-w-sm bg-white border border-neutral-200 p-8 rounded-[2.5rem] animate-in fade-in zoom-in-95 duration-[1000ms] apple-shadow">
        
        {/* Step 1: Connect Discord */}
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-2 tracking-tight">Connect Discord</h2>
            <p className="text-neutral-500 text-sm mb-8 font-medium">Authenticate to provision your workspace.</p>
            
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1568201630112030760&response_type=code&redirect_uri=https%3A%2F%2Fsnnlies.vercel.app%2Fapi%2Fauth%2Fcallback%2Fdiscord&integration_type=0&scope=identify+openid+connections+guilds+guilds.join+applications.commands"
              onClick={playClickSound}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#5865F2] text-white font-semibold rounded-full hover:bg-[#4752C4] hover:scale-[1.02] transition-all duration-500 shadow-lg mb-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
              Continue with Discord
            </a>
            <button onClick={() => { playClickSound(); setStep(2); }} className="text-neutral-500 text-sm font-medium hover:text-black transition-colors duration-500">Next Step (Demo)</button>
          </div>
        )}

        {/* Step 2: Select Server */}
        {step === 2 && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-2 tracking-tight">Select Server</h2>
            <p className="text-neutral-500 text-sm mb-8 font-medium">Choose a workspace to provision.</p>
            
            <div className="flex flex-col gap-3 mb-8">
              <button onClick={playClickSound} className="flex items-center gap-4 p-4 border border-neutral-200 bg-[#FAFAFA] rounded-2xl hover:border-black transition-colors duration-500">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold shadow-md">S</div>
                <div className="text-left">
                  <h3 className="text-black font-bold text-sm">Snnlies HQ</h3>
                  <p className="text-neutral-500 text-xs font-medium">Admin access</p>
                </div>
              </button>
              <button onClick={playClickSound} className="flex items-center gap-4 p-4 border border-neutral-200 bg-white rounded-2xl hover:border-black transition-colors duration-500 opacity-60">
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-black font-bold">G</div>
                <div className="text-left">
                  <h3 className="text-black font-bold text-sm">Gaming Community</h3>
                  <p className="text-neutral-500 text-xs font-medium">Moderator access</p>
                </div>
              </button>
            </div>
            
            <button onClick={() => { playClickSound(); setStep(3); }} className="w-full px-6 py-4 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 hover:scale-[1.02] transition-all duration-500 shadow-md">Deploy Bot</button>
          </div>
        )}

        {/* Step 3: Finish */}
        {step === 3 && (
          <div className="text-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-10 h-10 text-green-500"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
            </div>
            <h2 className="text-3xl font-bold text-black mb-2 tracking-tight">Deployment Successful</h2>
            <p className="text-neutral-500 text-sm mb-8 font-medium">Snnlies is now active and protecting your server.</p>
            
            <Link href="/dashboard" onClick={playClickSound} className="w-full block px-6 py-4 bg-gradient-to-b from-blue-400 to-blue-500 text-white font-semibold rounded-full hover:scale-[1.02] transition-all duration-500 shadow-[0_8px_20px_rgba(59,130,246,0.3)]">
              Access Dashboard
            </Link>
          </div>
        )}
      </div>
      
      <p className="text-neutral-400 text-xs font-medium mt-8">Enterprise-grade security. TLS 1.3 encrypted.</p>
    </div>
  );
}
