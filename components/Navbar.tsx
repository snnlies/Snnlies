import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4">
      <div className="bg-neutral-950/90 backdrop-blur-xl border border-neutral-800 rounded-full px-5 py-3 flex justify-between items-center w-full max-w-4xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white hover:text-neutral-300 transition">
          snnlies.
        </Link>
        
        {/* Links - Now visible on mobile too, just smaller text */}
        <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium text-neutral-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
        </div>
        
        {/* Login Button */}
        <Link href="/login" className="px-4 md:px-6 py-2 bg-white text-black text-xs md:text-sm font-bold rounded-full hover:bg-neutral-200 transition">
          Login
        </Link>
        
      </div>
    </nav>
  );
}
