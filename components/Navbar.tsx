"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { playClickSound } from "../utils/sound";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false); // Fixes hydration glitch
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setIsLoggedIn(document.cookie.includes('snnlies_session'));
  }, [pathname]);

  const handleLogout = () => {
    playClickSound();
    document.cookie = "snnlies_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    router.push('/');
  };

  // Don't render auth buttons until mounted to prevent Next.js hydration errors
  if (!mounted) return null;

  return (
    <>
      {/* FLOATING PILL NAVBAR */}
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 transition-transform duration-700">
        <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-full px-6 md:px-8 py-3.5 flex justify-between items-center w-full max-w-5xl apple-shadow">
          
          <Link href="/" onClick={playClickSound} className="text-xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity">
            Snnlies
          </Link>
          
          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-black">
            <Link href="/templates" onClick={playClickSound} className="relative group py-2">
              Templates
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 group-hover:w-full"></span>
            </Link>
            {isLoggedIn && (
              <Link href="/dashboard" onClick={playClickSound} className="relative group py-2">
                Dashboard
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 group-hover:w-full"></span>
              </Link>
            )}
          </div>

          {/* DESKTOP AUTH BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="px-6 py-2.5 bg-neutral-100 text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-500">
                Logout
              </button>
            ) : (
              <Link href="/login" onClick={playClickSound} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 hover:scale-105 transition-all duration-500 shadow-md">
                Login
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => { playClickSound(); setIsOpen(!isOpen); }} className="md:hidden p-2 text-black hover:rotate-90 transition-transform duration-500">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE FLOATING POPUP MENU (Not full screen) */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm animate-in fade-in duration-500 md:hidden" 
            onClick={() => { playClickSound(); setIsOpen(false); }}
          ></div>
          
          <div className="fixed top-24 left-4 right-4 z-50 md:hidden animate-in fade-in zoom-in-95 duration-500 origin-top">
            <div className="bg-white/95 backdrop-blur-2xl border border-neutral-200 rounded-[2rem] p-6 shadow-2xl">
              <div className="flex flex-col gap-5">
                <Link href="/templates" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-2xl font-semibold text-black hover:text-neutral-500 transition-colors">Templates</Link>
                
                {isLoggedIn && (
                  <Link href="/dashboard" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-2xl font-semibold text-black hover:text-neutral-500 transition-colors">Dashboard</Link>
                )}
                
                <div className="h-[1px] bg-neutral-200 my-2"></div>
                
                {isLoggedIn ? (
                  <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full text-center py-3.5 bg-neutral-100 text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-500">
                    Logout
                  </button>
                ) : (
                  <Link href="/login" onClick={() => { playClickSound(); setIsOpen(false); }} className="w-full text-center py-3.5 bg-black text-white font-semibold rounded-full shadow-md hover:bg-neutral-800 transition-colors duration-500">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
