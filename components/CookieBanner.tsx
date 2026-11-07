"use client";
import { useState, useEffect } from "react";
import { playSound } from "../utils/sound";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("snnlies_cookie_consent");
    if (!consent) {
      // Show after a short delay for a better user experience
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "declined") => {
    playSound('tap');
    localStorage.setItem("snnlies_cookie_consent", choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md z-[200] animate-in slide-in-from-bottom-12 duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
      <div className="bg-white/95 backdrop-blur-2xl border border-neutral-200 p-6 rounded-[2rem] shadow-2xl flex flex-col gap-4">
        <div>
          <h4 className="text-black font-bold mb-1 flex items-center gap-2">
            🍪 Cookie Settings
          </h4>
          <p className="text-neutral-500 text-sm leading-relaxed">
            We use cookies to enhance your experience, analyze site traffic, and personalize content. Read our <a href="/privacy" className="underline hover:text-black">Privacy Policy</a>.
          </p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => handleConsent("accepted")} 
            className="flex-1 py-3 bg-black text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors shadow-md"
          >
            Accept All
          </button>
          <button 
            onClick={() => handleConsent("declined")} 
            className="flex-1 py-3 bg-neutral-100 text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
