"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { playClickSound } from "../utils/sound";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "AI Workspace", href: "/chat" },
    { name: "Templates", href: "/templates" },
    { name: "Community", href: "/community" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-6 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          showNavbar ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-full px-6 md:px-8 py-3.5 flex justify-between items-center w-full max-w-5xl apple-shadow relative z-50">
          <Link href="/" onClick={playClickSound} className="text-xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity duration-[1000ms]">Snnlies</Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-black">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={playClickSound} className="relative group py-2">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-[1500ms] group-hover:w-full"></span>
              </Link>
            ))}
            
            <div className="relative group py-2">
              <button onClick={playClickSound} className="flex items-center gap-1 cursor-pointer hover:text-neutral-600 transition-colors duration-[1000ms]">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-[1500ms]"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-[1000ms] origin-top scale-90 group-hover:scale-100">
                <div className="bg-white border border-neutral-200 rounded-2xl p-2 shadow-xl">
                  <Link href="/news" onClick={playClickSound} className="block px-4 py-3 text-black hover:bg-neutral-50 rounded-xl transition-colors duration-500">News</Link>
                  <Link href="/updates" onClick={playClickSound} className="block px-4 py-3 text-black hover:bg-neutral-50 rounded-xl transition-colors duration-500">Updates</Link>
                  <Link href="/status" onClick={playClickSound} className="block px-4 py-3 text-black hover:bg-neutral-50 rounded-xl transition-colors duration-500">Status</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" onClick={playClickSound} className="text-sm font-semibold text-neutral-500 hover:text-black transition-colors duration-[1000ms]">Sign in</Link>
            <Link href="/signup" onClick={playClickSound} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 hover:scale-105 transition-all duration-[1000ms] shadow-md">Get Started</Link>
          </div>

          <button onClick={() => { playClickSound(); setIsOpen(!isOpen); }} className="md:hidden p-2 text-black hover:rotate-90 transition-transform duration-[1000ms]">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm animate-in fade-in duration-[1000ms]" onClick={() => { playClickSound(); setIsOpen(false); }}></div>
          <div className="fixed top-24 left-4 right-4 z-50 md:hidden animate-in fade-in zoom-in-95 duration-[1000ms] origin-top">
            <div className="bg-white/95 backdrop-blur-2xl border border-neutral-200 rounded-[2rem] p-6 shadow-2xl">
              <div className="flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <Link key={link.name} href={link.href} onClick={() => { playClickSound(); setIsOpen(false); }} className="text-2xl font-semibold text-black hover:text-neutral-500 transition-colors duration-500" style={{ animationDelay: (i * 100) + 'ms' }}>{link.name}</Link>
                ))}
                <div className="h-[1px] bg-neutral-200 my-2"></div>
                <Link href="/news" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-xl font-medium text-neutral-600 hover:text-black transition-colors duration-500">News</Link>
                <Link href="/updates" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-xl font-medium text-neutral-600 hover:text-black transition-colors duration-500">Updates</Link>
                <Link href="/status" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-xl font-medium text-neutral-600 hover:text-black transition-colors duration-500">Status</Link>
                <div className="flex flex-col gap-3 mt-4">
                  <Link href="/login" onClick={() => { playClickSound(); setIsOpen(false); }} className="w-full text-center py-3.5 bg-neutral-100 text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-500">Sign in</Link>
                  <Link href="/signup" onClick={() => { playClickSound(); setIsOpen(false); }} className="w-full text-center py-3.5 bg-black text-white font-semibold rounded-full shadow-md hover:bg-neutral-800 transition-colors duration-500">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
