export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-bold mb-4 text-lg tracking-tight">Snnlies</h3>
          <p className="text-neutral-500 leading-relaxed font-light">Premium Discord automation. Minimalist design, absolute precision.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide text-xs uppercase">Product</h4>
          <ul className="space-y-3 text-neutral-500">
            <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
            <li><a href="/status" className="hover:text-white transition-colors">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide text-xs uppercase">Resources</h4>
          <ul className="space-y-3 text-neutral-500">
            <li><a href="/changelog" className="hover:text-white transition-colors">Changelog</a></li>
            <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
            <li><a href="/security" className="hover:text-white transition-colors">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 tracking-wide text-xs uppercase">Legal</h4>
          <ul className="space-y-3 text-neutral-500">
            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
            <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 flex justify-center text-neutral-600 text-xs tracking-wide">
        <p>Snnlies © 2026-2027</p>
      </div>
    </footer>
  );
}
