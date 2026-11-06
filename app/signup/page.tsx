"use client";
import { useState } from "react";

export default function SignUp() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full min-h-[75vh] flex flex-col items-center justify-center px-6 relative z-10">
      
      <div className="flex items-center gap-4 mb-16">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-600'}`}>1</div>
        <div className={`w-16 h-[1px] ${step >= 2 ? 'bg-white' : 'bg-neutral-800'}`}></div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-600'}`}>2</div>
        <div className={`w-16 h-[1px] ${step >= 3 ? 'bg-white' : 'bg-neutral-800'}`}></div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'bg-white text-black' : 'bg-neutral-900 text-neutral-600'}`}>3</div>
      </div>

      {step === 1 && (
        <div className="text-center animate-in fade-in zoom-in-95 duration-500 w-full max-w-sm">
          <h2 className="font-serif text-4xl text-white mb-4">Connect Discord</h2>
          <p className="text-neutral-500 text-sm mb-10 font-light">Link your account to get started with Snnlies.</p>
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1568201630112030760&response_type=code&redirect_uri=https%3A%2F%2Fsnnlies.vercel.app%2Fapi%2Fauth%2Fcallback%2Fdiscord&integration_type=0&scope=identify+openid+connections+guilds+guilds.join+applications.commands"
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            Continue with Discord
          </a>
          <button onClick={() => setStep(2)} className="text-neutral-500 text-sm hover:text-white transition-colors">Next Step</button>
        </div>
      )}

      {step === 2 && (
        <div className="text-center animate-in fade-in zoom-in-95 duration-500 w-full max-w-md">
          <h2 className="font-serif text-4xl text-white mb-4">Select Server</h2>
          <p className="text-neutral-500 text-sm mb-10 font-light">Choose which server you want to manage.</p>
          
          <div className="flex flex-col gap-4 mb-10">
            <button className="flex items-center gap-4 p-5 border border-neutral-700 bg-neutral-900 rounded-3xl hover:border-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold">S</div>
              <div className="text-left">
                <h3 className="text-white font-medium text-base">Snnlies HQ</h3>
                <p className="text-neutral-500 text-sm">1,204 members</p>
              </div>
            </button>
            <button className="flex items-center gap-4 p-5 border border-neutral-800 bg-black rounded-3xl hover:border-neutral-600 transition-colors opacity-50">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 font-bold">G</div>
              <div className="text-left">
                <h3 className="text-neutral-400 font-medium text-base">Gaming Community</h3>
                <p className="text-neutral-600 text-sm">45,200 members</p>
              </div>
            </button>
          </div>
          
          <button onClick={() => setStep(3)} className="w-full px-6 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">Continue</button>
        </div>
      )}

      {step === 3 && (
        <div className="text-center animate-in fade-in zoom-in-95 duration-500 w-full max-w-sm">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="black" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
          </div>
          <h2 className="font-serif text-4xl text-white mb-4">All Set!</h2>
          <p className="text-neutral-500 text-sm mb-10 font-light">Snnlies is now active on your server. Head to the dashboard to customize settings.</p>
          <a href="/dashboard" className="w-full block px-6 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">Go to Dashboard</a>
        </div>
      )}

    </div>
  );
}
