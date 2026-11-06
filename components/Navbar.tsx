"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <div className="bg-white/80 backdrop-blur-xl border border-neutral-200 rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl apple-shadow">
          <Link href="/" className="text-xl font-bold tracking-tight text-black">Snnlies</Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <Link href="/chat" className="hover:text-black transition-colors">AI Workspace</Link>
            <Link href="/templates" className="hover:text-black transition-colors">Templates</Link>
            
            <div className="relative py-2" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
              <button className="flex items-center gap-1 hover:text-black transition-colors">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              {dropdown && (
                <div className="absolute top-full left-0 w-48 bg-white border border-neutral-200 rounded-xl p-2 shadow-xl animate-in fade-in slide-in-from-top-2">
                  <Link href="/blog" className="block px-4 py-2 text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-lg">Blog</Link>
                  <Link href="/news" className="block px-4 py-2 text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-lg">News</Link>
                  <Link href="/updates" className="block px-4 py-2 text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-lg">Updates</Link>
                  <Link href="/status" className="block px-4 py-2 text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-lg">Status</Link>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-neutral-600 hover:text-black transition-colors">Sign in</Link>
            <Link href="/signup" className="px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors shadow-md">Get Started</Link>
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>
      </nav>
      
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-in fade-in duration-300">
          <div className="w-full px-6 h-16 flex justify-between items-center shrink-0 border-b border-neutral-200">
            <Link href="/" className="text-xl font-bold text-black" onClick={() => setIsOpen(false)}>Snnlies</Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-grow px-6 py-8 flex flex-col gap-6 overflow-y-auto">
            <Link href="/chat" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black">AI Workspace</Link>
            <Link href="/templates" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black">Templates</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black">Blog</Link>
            <Link href="/news" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black">News</Link>
            <Link href="/updates" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-black">Updates</Link>
          </div>
          <div className="p-6 flex flex-col gap-4 pb-12 border-t border-neutral-200">
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-neutral-100 text-black font-semibold rounded-full">Sign in</Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-black text-white font-semibold rounded-full shadow-md">Get Started</Link>
          </div>
        </div>
      )}
    </>
  );
}
