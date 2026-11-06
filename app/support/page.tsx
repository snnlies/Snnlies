export default function Support() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-24 relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">Support</h1>
      <p className="text-neutral-400 font-light mb-12">Need help? We are here for you.</p>
      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        <a href="#" className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors">Join Discord Server</a>
        <a href="mailto:support@snnlies.com" className="w-full py-4 border border-neutral-800 bg-neutral-950 text-white font-semibold rounded-xl hover:bg-neutral-900 transition-colors">Email Support</a>
      </div>
    </div>
  );
}
