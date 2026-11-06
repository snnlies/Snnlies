"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { playClickSound } from "../utils/sound";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for cookie
    if (document.cookie.includes('snnlies_session')) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    playClickSound();
    document.cookie = "snnlies_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-full px-8 py-3.5 flex justify-between items-center w-full max-w-5xl shadow-lg">
          <Link href="/" onClick={playClickSound} className="text-xl font-bold tracking-tight text-black">Snnlies</Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-black">
            <Link href="/templates" onClick={playClickSound} className="hover:text-neutral-500">Templates</Link>
            {isLoggedIn && <Link href="/dashboard" onClick={playClickSound} className="hover:text-neutral-500">Dashboard</Link>}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800">Logout</button>
            ) : (
              <Link href="/login" onClick={playClickSound} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800">Login</Link>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>
      </nav>
    </>
  );
}
