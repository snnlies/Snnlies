"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Navbar strictly locked to top, pure black, bold text */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            Snnlies.
          </Link>
          
          {/* Desktop Menu with Dropdowns */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-400">
            <div 
              className="relative group"
              onMouseEnter={() => setDropdown("product")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="hover:text-white flex items-center gap-1 py-2">
                Product
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              {/* Dropdown Menu */}
              {dropdown === "product" && (
                <div className="absolute top-full left-0 w-48 bg-black border border-neutral-800 rounded-xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <Link href="/features" className="block px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg">Features</Link>
                  <Link href="/integrations" className="block px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg">Integrations</Link>
                  <Link href="/changelog" className="block px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg">Changelog</Link>
                </div>
              )}
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setDropdown("resources")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="hover:text-white flex items-center gap-1 py-2">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </button>
              {dropdown === "resources" && (
                <div className="absolute top-full left-0 w-48 bg-black border border-neutral-800 rounded-xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  <Link href="/support" className="block px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg">Help Center</Link>
                  <Link href="/status" className="block px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg">System Status</Link>
                </div>
              )}
            </div>

            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold text-neutral-400 hover:text-white">
              Sign in
            </Link>
            <Link href="/signup" className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-neutral-200">
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-white hover:text-neutral-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col animate-in fade-in duration-300">
          <div className="w-full px-6 h-20 flex justify-between items-center shrink-0 border-b border-neutral-900">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white" onClick={() => setIsOpen(false)}>Snnlies.</Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-grow px-6 py-10 flex flex-col gap-8 overflow-y-auto">
            <Link href="/features" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white">Features</Link>
            <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white">Dashboard</Link>
            <Link href="/status" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white">Status</Link>
            <Link href="/support" onClick={() => setIsOpen(false)} className="text-4xl font-bold text-white">Support</Link>
          </div>
          <div className="p-6 flex flex-col gap-4 pb-12 border-t border-neutral-900">
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-4 bg-neutral-900 text-white font-bold rounded-full">Sign in</Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="w-full text-center py-4 bg-white text-black font-bold rounded-full">Get Started</Link>
          </div>
        </div>
      )}
    </>
  );
}
