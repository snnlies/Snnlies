"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-2xl border-0 outline-none">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium tracking-tight text-white hover:text-neutral-400 transition-colors">
            Snnlies
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/status" className="hover:text-white transition-colors">Status</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link href="/signup" className="hidden md:block px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              Get Started
            </Link>
            <button 
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-white hover:text-neutral-400 transition-colors outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto w-full px-6 h-24 flex justify-between items-center shrink-0">
            <Link href="/" className="text-xl font-medium text-white" onClick={() => setIsOpen(false)}>Snnlies</Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-white outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-grow px-6 py-8 flex flex-col gap-8">
            <Link href="/features" onClick={() => setIsOpen(false)} className="text-4xl font-serif text-white">Features</Link>
            <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-4xl font-serif text-white">Dashboard</Link>
            <Link href="/status" onClick={() => setIsOpen(false)} className="text-4xl font-serif text-white">Status</Link>
          </div>
          <div className="p-6 flex flex-col gap-4 pb-12">
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-4 bg-neutral-900 text-white font-semibold rounded-full">Sign in</Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-4 bg-white text-black font-semibold rounded-full">Get Started</Link>
          </div>
        </div>
      )}
    </>
  );
}
