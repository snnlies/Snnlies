export default function Dashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
        <div className="flex items-center gap-3 px-4 py-3 bg-neutral-900 rounded-2xl border border-neutral-800 mb-6">
          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">S</div>
          <div>
            <h3 className="text-sm font-bold text-white">Snnlies HQ</h3>
            <p className="text-xs text-neutral-400">Admin</p>
          </div>
        </div>
        <button className="text-left px-5 py-3 rounded-xl bg-white text-black text-sm font-semibold">Overview</button>
        <button className="text-left px-5 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors">AI Settings</button>
        <button className="text-left px-5 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors">Moderation</button>
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">Server Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Total Credits</p>
            <h2 className="text-4xl font-bold text-white mb-2">8,450</h2>
            <p className="text-xs text-green-500 font-medium">Resets in 14h</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">AI Messages</p>
            <h2 className="text-4xl font-bold text-white mb-2">1,204</h2>
            <p className="text-xs text-neutral-400 font-medium">This month</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Active Modules</p>
            <h2 className="text-4xl font-bold text-white mb-2">12</h2>
            <p className="text-xs text-neutral-400 font-medium">All operational</p>
          </div>
        </div>
      </div>
    </div>
  );
}
