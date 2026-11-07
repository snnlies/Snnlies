"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { playSound } from "../utils/sound";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setIsLoggedIn(document.cookie.includes('snnlies_session'));
  }, []);

  const handleLogout = () => {
    playSound('tap');
    document.cookie = "snnlies_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-full px-6 md:px-8 py-3.5 flex justify-between items-center w-full max-w-6xl shadow-lg apple-shadow">
        <Link href="/" onClick={() => playSound('tap')} className="text-xl font-bold tracking-tight text-black">Snnlies</Link>
        
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-black">
          <Link href="/chat" onClick={() => playSound('tap')} className="hover:text-neutral-500">AI Workspace</Link>
          <Link href="/templates" onClick={() => playSound('tap')} className="hover:text-neutral-500">Templates</Link>
          <Link href="/community" onClick={() => playSound('tap')} className="hover:text-neutral-500">Community</Link>
          <Link href="/dashboard" onClick={() => playSound('tap')} className="hover:text-neutral-500">Dashboard</Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {mounted && isLoggedIn ? (
            <button onClick={handleLogout} className="px-6 py-2.5 bg-neutral-100 text-black text-sm font-semibold rounded-full hover:bg-neutral-200">Logout</button>
          ) : (
            <Link href="/login" onClick={() => playSound('tap')} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800">Login</Link>
          )}
        </div>

        <button onClick={() => { playSound('tap'); setIsOpen(!isOpen); }} className="lg:hidden p-2 text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        </button>
      </div>
    </nav>
  );
}
