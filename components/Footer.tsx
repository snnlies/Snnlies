export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-bold mb-4 text-lg tracking-tight">Snnlies</h3>
          <p className="text-neutral-500 leading-relaxed">Premium Discord automation & AI solutions. Minimalist design, absolute precision.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-neutral-400">
            <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="/login" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Support Server</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 flex justify-center text-neutral-500 text-xs tracking-wide">
        <p>Snnlies © 2026-2027</p>
      </div>
    </footer>
  );
}
