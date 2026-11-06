export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 2-Column Link Layout */}
        <div className="grid grid-cols-2 gap-x-8 mb-16">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-medium text-lg">Products</h4>
              <a href="/marketplace" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Marketplace</a>
              <a href="/integrations" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Integrations</a>
              <a href="/pricing" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Pricing</a>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-white font-medium text-lg">Terms & Policies</h4>
              <a href="/privacy" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Privacy Policy</a>
              <a href="/teen-safety" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Teen Safety</a>
              <a href="/credit-terms" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Credit Terms</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-medium text-lg">Resources</h4>
              <a href="/company" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Company</a>
              <a href="/partners" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Partners</a>
              <a href="/news" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">News</a>
              <a href="/contact" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Contact</a>
              <a href="/support" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Help Center</a>
              <a href="/status" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Status</a>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-white font-medium text-lg opacity-0 select-none">&nbsp;</h4>
              <a href="/terms-of-use" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Terms of Use</a>
              <a href="/usage-policy" className="text-neutral-500 hover:text-white transition-colors text-sm font-light">Usage Policy</a>
            </div>
          </div>
        </div>

        <hr className="border-neutral-800 mb-8" />

        {/* Compact Language Selector (All Countries) */}
        <div className="mb-12">
          <div className="relative inline-flex items-center">
            <select 
              defaultValue="en-UK"
              className="appearance-none pl-10 pr-10 py-2.5 bg-neutral-900 rounded-full text-white text-sm font-medium hover:bg-neutral-800 transition-colors cursor-pointer outline-none border border-transparent focus:border-neutral-600 w-auto max-w-[250px] truncate"
            >
              <option value="en-UK">English (United Kingdom)</option>
              <option value="en-US">English (United States)</option>
              <option value="hi-IN">हिन्दी (India)</option>
              <option value="es-ES">Español (Spain)</option>
              <option value="fr-FR">Français (France)</option>
              <option value="de-DE">Deutsch (Germany)</option>
              <option value="ja-JP">日本語 (Japan)</option>
              <option value="ko-KR">한국어 (Korea)</option>
              <option value="pt-BR">Português (Brazil)</option>
              <option value="ru-RU">Русский (Russia)</option>
              <option value="ar-SA">العربية (Saudi Arabia)</option>
            </select>
            
            {/* Globe Icon */}
            <div className="absolute left-3.5 pointer-events-none text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            {/* Chevron Down */}
            <div className="absolute right-3.5 pointer-events-none text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Left, Socials Right */}
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-neutral-500 text-sm font-light">
            © Snnlies 2026.
          </p>
          
          <div className="flex items-center gap-5 text-neutral-500">
            {/* Discord */}
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            </a>
            {/* X (xAI) */}
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
