import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4">
      <div className="bg-black/60 backdrop-blur-xl border border-neutral-800/80 rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl shadow-2xl">
        
        {/* Left Side Text */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-neutral-300 transition-colors">
          Snnlies
        </Link>
        
        {/* Right Side Main Menu */}
        <div className="flex items-center gap-6 md:gap-8 text-xs md:text-sm font-medium text-neutral-400">
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          </div>
          <Link href="/login" className="px-5 md:px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
            Login
          </Link>
        </div>
        
      </div>
    </nav>
  );
}
