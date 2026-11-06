"use client";
import { useState } from "react";
import Link from "next/link";
import { playClickSound } from "../utils/sound";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "AI Workspace", href: "/chat" },
    { name: "Templates", href: "/templates" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <div className="bg-white/90 backdrop-blur-xl border border-neutral-200 rounded-full px-8 py-3.5 flex justify-between items-center w-full max-w-5xl apple-shadow transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
          <Link href="/" onClick={playClickSound} className="text-xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity duration-700">Snnlies</Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-black">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={playClickSound} className="relative group py-2">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full"></span>
              </Link>
            ))}
            
            <div className="relative group py-2">
              <button onClick={playClickSound} className="flex items-center gap-1 cursor-pointer hover:text-neutral-600 transition-colors duration-700">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top scale-95 group-hover:scale-100">
                <div className="bg-white border border-neutral-200 rounded-2xl p-2 shadow-xl">
                  <Link href="/news" onClick={playClickSound} className="block px-4 py-3 text-black hover:bg-neutral-50 rounded-xl transition-colors duration-300">News</Link>
                  <Link href="/updates" onClick={playClickSound} className="block px-4 py-3 text-black hover:bg-neutral-50 rounded-xl transition-colors duration-300">Updates</Link>
                  <Link href="/status" onClick={playClickSound} className="block px-4 py-3 text-black hover:bg-neutral-50 rounded-xl transition-colors duration-300">Status</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" onClick={playClickSound} className="text-sm font-semibold text-neutral-500 hover:text-black transition-colors duration-700">Sign in</Link>
            <Link href="/signup" onClick={playClickSound} className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-md">Get Started</Link>
          </div>

          <button onClick={() => { playClickSound(); setIsOpen(true); }} className="md:hidden p-2 text-black hover:rotate-90 transition-transform duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>
      </nav>
      
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-in fade-in zoom-in-95 duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
          <div className="w-full px-6 h-16 flex justify-between items-center shrink-0 border-b border-neutral-200">
            <Link href="/" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-xl font-bold text-black">Snnlies</Link>
            <button onClick={() => { playClickSound(); setIsOpen(false); }} className="p-2 text-black hover:rotate-90 transition-transform duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-grow px-6 py-8 flex flex-col gap-6 overflow-y-auto">
            {navLinks.map((link, i) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => { playClickSound(); setIsOpen(false); }} 
                className="text-3xl font-medium text-black animate-in slide-in-from-bottom-4 fade-in duration-700" 
                style={{ animationDelay: (i * 100) + 'ms' }}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/news" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-3xl font-medium text-black animate-in slide-in-from-bottom-4 fade-in duration-700" style={{ animationDelay: '400ms' }}>News</Link>
            <Link href="/updates" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-3xl font-medium text-black animate-in slide-in-from-bottom-4 fade-in duration-700" style={{ animationDelay: '500ms' }}>Updates</Link>
            <Link href="/status" onClick={() => { playClickSound(); setIsOpen(false); }} className="text-3xl font-medium text-black animate-in slide-in-from-bottom-4 fade-in duration-700" style={{ animationDelay: '600ms' }}>Status</Link>
          </div>
          <div className="p-6 flex flex-col gap-4 pb-12 border-t border-neutral-200">
            <Link href="/login" onClick={() => { playClickSound(); setIsOpen(false); }} className="w-full text-center py-3 bg-neutral-100 text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-500">Sign in</Link>
            <Link href="/signup" onClick={() => { playClickSound(); setIsOpen(false); }} className="w-full text-center py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-neutral-800 transition-colors duration-500">Get Started</Link>
          </div>
        </div>
      )}
    </>
  );
}
