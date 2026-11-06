import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <div className="bg-neutral-950/80 backdrop-blur-lg border border-neutral-800 rounded-full px-6 py-3 flex justify-between items-center w-full max-w-4xl shadow-[0_0_20px_rgba(0,0,0,0.8)]">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-white hover:text-neutral-300 transition">
          snnlies.
        </Link>
        
        {/* Desktop Links (Hidden on tiny screens) */}
        <div className="hidden sm:flex gap-6 text-sm font-medium text-neutral-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
        </div>
        
        {/* Login Button */}
        <Link href="/login" className="px-5 py-2 bg-white text-black text-xs sm:text-sm font-semibold rounded-full hover:bg-neutral-200 transition">
          Login
        </Link>
        
      </div>
    </nav>
  );
}
