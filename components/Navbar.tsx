import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800 bg-black/80 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-neutral-300 transition">
          snnlies.
        </Link>
        <div className="flex gap-6 text-sm font-medium text-neutral-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link href="/login" className="px-5 py-2 bg-white text-black rounded-full hover:bg-neutral-200 transition">Login</Link>
        </div>
      </div>
    </nav>
  );
}
