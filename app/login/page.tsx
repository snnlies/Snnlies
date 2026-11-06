"use client";
import { playClickSound } from "../../utils/sound";

export default function Login() {
  const loginUrl = "https://discord.com/oauth2/authorize?client_id=1568201630112030760&response_type=code&redirect_uri=https%3A%2F%2Fsnnlies.vercel.app%2Fapi%2Fauth%2Fcallback%2Fdiscord&integration_type=0&scope=identify+openid+connections+guilds+guilds.join+applications.commands";
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4">
      <div className="w-full max-w-sm bg-white border border-neutral-200 p-10 rounded-[2.5rem] shadow-xl text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>
        </div>
        <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">Welcome Back</h1>
        <p className="text-neutral-500 text-sm mb-8 font-medium">Sign in to manage your servers and credits.</p>
        
        <a 
          href={loginUrl}
          onClick={playClickSound}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#5865F2] text-white font-semibold rounded-full hover:bg-[#4752C4] hover:scale-[1.02] transition-all duration-500 shadow-[0_8px_20px_rgba(88,101,242,0.3)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
          Continue with Discord
        </a>
        <p className="text-xs text-neutral-400 mt-6 font-medium">Don't have an account? <a href="/signup" className="text-black hover:underline">Sign up</a></p>
      </div>
    </div>
  );
}
