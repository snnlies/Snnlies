export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black py-16 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold text-xl tracking-tight">Snnlies</h3>
          <p className="text-neutral-500 text-sm font-light">
            Premium Discord automation.
          </p>
          <p className="text-neutral-600 text-xs tracking-wide mt-4">
            Snnlies © 2026-2027
          </p>
        </div>

        {/* Right Side: Minimal Links (Two Columns) */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm font-light">
          <a href="/features" className="text-neutral-400 hover:text-white transition-colors duration-200">Features</a>
          <a href="/dashboard" className="text-neutral-400 hover:text-white transition-colors duration-200">Dashboard</a>
          <a href="/status" className="text-neutral-400 hover:text-white transition-colors duration-200">Status</a>
          <a href="/changelog" className="text-neutral-400 hover:text-white transition-colors duration-200">Changelog</a>
          <a href="/support" className="text-neutral-400 hover:text-white transition-colors duration-200">Support</a>
          <a href="/security" className="text-neutral-400 hover:text-white transition-colors duration-200">Security</a>
          <a href="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-200">Privacy</a>
          <a href="/terms" className="text-neutral-400 hover:text-white transition-colors duration-200">Terms</a>
        </div>

      </div>
    </footer>
  );
}
