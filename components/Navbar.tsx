"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <div className="bg-black/80 backdrop-blur-xl border border-neutral-800 rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl shadow-2xl">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">Snnlies</Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
            <Link href="/chat" className="hover:text-neutral-400 transition-colors">AI Workspace</Link>
            <Link href="/templates" className="hover:text-neutral-400 transition-colors">Templates</Link>
            <Link href="/dashboard" className="hover:text-neutral-400 transition-colors">Dashboard</Link>
            <Link href="/status" className="hover:text-neutral-400 transition-colors">Status</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-white hover:text-neutral-400 transition-colors">Sign in</Link>
            <Link href="/signup" className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors">Get Started</Link>
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col animate-in fade-in duration-300">
          <div className="w-full px-6 h-16 flex justify-between items-center shrink-0 border-b border-neutral-900">
            <Link href="/" className="text-xl font-bold text-white" onClick={() => setIsOpen(false)}>Snnlies</Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-grow px-6 py-8 flex flex-col gap-6 overflow-y-auto">
            <Link href="/chat" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white">AI Workspace</Link>
            <Link href="/templates" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white">Templates</Link>
            <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white">Dashboard</Link>
            <Link href="/status" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white">Status</Link>
          </div>
          <div className="p-6 flex flex-col gap-4 pb-12 border-t border-neutral-900">
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-neutral-900 text-white font-medium rounded-full">Sign in</Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-white text-black font-semibold rounded-full">Get Started</Link>
          </div>
        </div>
      )}
    </>
  );
}
