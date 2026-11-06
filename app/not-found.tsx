import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-black px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 tracking-tighter">404</h1>
      <p className="text-neutral-400 text-lg mb-8 font-light">Lost in the void? This page does not exist.</p>
      <Link href="/" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
        Return Home
      </Link>
    </div>
  );
}
