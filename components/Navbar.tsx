"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { playClickSound } from "../utils/sound";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsLoggedIn(document.cookie.includes('snnlies_session'));
  }, [pathname]);

  const handleLogout = () => {
    playClickSound();
    document.cookie = "snnlies_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-full px-6 md:px-8 py-3.5 flex justify-between items-center w-full max-w-5xl shadow-lg">
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

          <button onClick={() => { playClickSound(); setIsOpen(!isOpen); }} className="md:hidden p-2 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-in fade-in zoom-in-95 duration-300">
          <div className="w-full px-6 h-16 flex justify-between items-center shrink-0 border-b border-neutral-200">
            <Link href="/" className="text-xl font-bold text-black" onClick={() => setIsOpen(false)}>Snnlies</Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-grow px-6 py-8 flex flex-col gap-6">
            <Link href="/templates" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black">Templates</Link>
            {isLoggedIn && <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black">Dashboard</Link>}
          </div>
          <div className="p-6 border-t border-neutral-200">
            {isLoggedIn ? (
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full py-3 bg-black text-white font-semibold rounded-full">Logout</button>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)} className="block w-full text-center py-3 bg-black text-white font-semibold rounded-full">Login</Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
