"use client";
import Link from "next/link";
import { playClickSound } from "../utils/sound";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-black font-bold text-base mb-2">Products</h4>
            <Link href="/chat" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">AI Workspace</Link>
            <Link href="/templates" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Templates</Link>
            <Link href="/dashboard" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Dashboard</Link>
            <Link href="/referral" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Referral</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-black font-bold text-base mb-2">Community</h4>
            <Link href="/community" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Community Hub</Link>
            <Link href="/status" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">System Status</Link>
            <Link href="/support" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Help Center</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-black font-bold text-base mb-2">Resources</h4>
            <Link href="/blog" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Blog</Link>
            <Link href="/news" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">News</Link>
            <Link href="/updates" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Updates</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-black font-bold text-base mb-2">Legal</h4>
            <Link href="/privacy" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Privacy Policy</Link>
            <Link href="/terms" onClick={playClickSound} className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Terms of Service</Link>
            <a href="https://github.com/snnlies/Snnlies/blob/main/LICENSE" target="_blank" rel="noreferrer" className="text-black hover:text-neutral-500 transition-colors duration-500 text-sm font-medium">Copyright Info</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 border-t border-neutral-200">
          <p className="text-black text-sm font-bold text-center md:text-left">
            © 2026 Snnlies®. All Rights Reserved. <br className="md:hidden" />
            <span className="text-neutral-500">Owned by Sabine.</span>
          </p>
          
          {/* Real Social Links */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a 
              href="https://discord.gg/9FP3afu4eb" 
              target="_blank" 
              rel="noreferrer"
              onClick={playClickSound}
              aria-label="Snnlies on Discord"
              className="p-2 bg-neutral-100 rounded-full text-black hover:bg-neutral-200 hover:scale-110 transition-all duration-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            </a>
            <a 
              href="https://x.com/sabinebyy" 
              target="_blank" 
              rel="noreferrer"
              onClick={playClickSound}
              aria-label="Snnlies on X"
              className="p-2 bg-neutral-100 rounded-full text-black hover:bg-neutral-200 hover:scale-110 transition-all duration-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
