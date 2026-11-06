"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            Snnlies
          </Link>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 text-white hover:text-neutral-400 transition-colors"
            aria-label="Open Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="max-w-6xl mx-auto w-full px-6 h-20 flex justify-between items-center shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white" onClick={() => setIsOpen(false)}>
              Snnlies
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-neutral-400 transition-colors"
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
              
              {/* Products */}
              <div>
                <h3 className="text-neutral-500 text-sm font-medium mb-4">Products</h3>
                <div className="flex flex-col gap-4">
                  <Link href="/features" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white hover:text-neutral-400 transition-colors">Features</Link>
                  <Link href="/integrations" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white hover:text-neutral-400 transition-colors">Integrations</Link>
                  <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white hover:text-neutral-400 transition-colors">Dashboard</Link>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-neutral-500 text-sm font-medium mb-4">Resources</h3>
                <div className="flex flex-col gap-4">
                  <Link href="/company" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white hover:text-neutral-400 transition-colors">Company</Link>
                  <Link href="/support" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white hover:text-neutral-400 transition-colors">Help Center</Link>
                  <Link href="/status" onClick={() => setIsOpen(false)} className="text-3xl font-medium text-white hover:text-neutral-400 transition-colors">Status</Link>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="p-6 shrink-0 max-w-6xl mx-auto w-full flex gap-4 pb-12">
            <Link href="/login" onClick={() => setIsOpen(false)} className="flex-1 text-center py-4 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors">
              Login
            </Link>
            <Link href="/signup" onClick={() => setIsOpen(false)} className="flex-1 text-center py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
