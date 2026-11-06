"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { playClickSound } from "../utils/sound";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
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

  if (!mounted) return null;

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-full px-6 md:px-8 py-3.5 flex justify-between items-center w-full max-w-6xl apple-shadow">
          
          <Link href="/" onClick={playClickSound} className="text-xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity">
            Snnlies
          </Link>
          
          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-black">
            <Link href="/chat" onClick={playClickSound} className="relative group py-2">
              AI Workspace
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 group-hover:w-full"></span>
            </Link>
            <Link href="/templates" onClick={playClickSound} className="relative group py-2">
              Templates
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 group-hover:w-full"></span>
            </Link>
            <Link href="/community" onClick={playClickSound} className="relative group py-2">
              Community
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 group-hover:w-full"></span>
            </Link>
            <Link href="/referral" onClick={playClickSound} className="relative group py-2">
              Referral
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 group-hover:w-full"></span>
            </Link>

            {/* Resources Dropdown */}
            <div className="relative py-2" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
              <button onClick={playClickSound} className="flex items-center gap-1 hover:text-neutral-600 transition-colors">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              {dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-white border border-neutral-200 rounded-2xl p-2 shadow-xl">
                    <Link href="/blog" onClick={playClickSound} className="block px-4 py-2 text-black hover:bg-neutral-50 rounded-xl transition-colors">Blog</Link>
                    <Link href="/news" onClick={playClickSound} className="block px-4 py-2 text-black hover:bg-neutral-50 rounded-xl transition-colors">News</Link>
                    <Link href="/updates" onClick={playClickSound} className="block px-4 py-2 text-black hover:bg-neutral-50 rounded-xl transition-colors">Updates</Link>
                    <Link href="/status" onClick={playClickSound} className="block px-4 py-2 text-black hover:bg-neutral-50 rounded-xl transition-colors">Status</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DESKTOP AUTH */}
          <div className="hidden lg:flex items-center gap-4">
            {isLoggedIn && (
              <Link href="/dashboard" onClick={playClickSound} className="text-sm font-semibold text-neutral-500 hover:text-black transition-colors">
                Dashboard
              </Link>
            )}
            {isLoggedIn ? (
              <button onClick={handleLogout} className="px-6 py-2.5 bg-neutral-100 text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-500">Logout</button>
            ) : (
              <Link href="/login" onClick={playClickSound} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 hover:scale-105 transition-all duration-500 shadow-md">Login</Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => { playClickSound(); setIsOpen(!isOpen); }} className="lg:hidden p-2 text-black hover:rotate-90 transition-transform duration-500">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE FLOATING POPUP */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm animate-in fade-in duration-500 lg:hidden" onClick={() => { playClickSound(); setIsOpen(false); }}></div>
          <div className="fixed top-24 left-4 right-4 z-50 lg:hidden animate-in fade-in zoom-in-95 duration-500 origin-top">
            <div className="bg-white/95 backdrop-blur-2xl border border-neutral-200 rounded-[2rem] p-6 shadow-2xl max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col gap-5">
                <Link href="/chat" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-2xl font-semibold text-black hover:text-neutral-500 transition-colors">AI Workspace</Link>
                <Link href="/templates" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-2xl font-semibold text-black hover:text-neutral-500 transition-colors">Templates</Link>
                <Link href="/community" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-2xl font-semibold text-black hover:text-neutral-500 transition-colors">Community</Link>
                <Link href="/referral" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-2xl font-semibold text-black hover:text-neutral-500 transition-colors">Referral</Link>
                
                {isLoggedIn && (
                  <Link href="/dashboard" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-2xl font-semibold text-black hover:text-neutral-500 transition-colors">Dashboard</Link>
                )}
                
                <div className="h-[1px] bg-neutral-200 my-2"></div>
                
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Resources</p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/blog" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-lg font-medium text-neutral-600 hover:text-black">Blog</Link>
                  <Link href="/news" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-lg font-medium text-neutral-600 hover:text-black">News</Link>
                  <Link href="/updates" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-lg font-medium text-neutral-600 hover:text-black">Updates</Link>
                  <Link href="/status" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-lg font-medium text-neutral-600 hover:text-black">Status</Link>
                </div>

                <div className="h-[1px] bg-neutral-200 my-2"></div>
                
                {isLoggedIn ? (
                  <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full text-center py-3.5 bg-neutral-100 text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-500">Logout</button>
                ) : (
                  <Link href="/login" onClick={() => { playClickSound(); setIsOpen(false); }} className="w-full text-center py-3.5 bg-black text-white font-semibold rounded-full shadow-md hover:bg-neutral-800 transition-colors duration-500">Login</Link>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
