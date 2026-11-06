export default function Dashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10 flex flex-col md:flex-row gap-8">
      
      {/* Sidebar - Long Pill Style */}
      <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
        <div className="flex items-center gap-3 px-4 py-3 bg-neutral-900 rounded-full border border-neutral-800 mb-6">
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">S</div>
          <div>
            <h3 className="text-sm font-bold text-white leading-tight">Snnlies HQ</h3>
            <p className="text-xs text-neutral-500">Admin</p>
          </div>
        </div>
        <button className="text-left px-6 py-3 rounded-full bg-white text-black text-sm font-semibold transition-colors shadow-sm">Overview</button>
        <button className="text-left px-6 py-3 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors">AI Settings</button>
        <button className="text-left px-6 py-3 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors">Moderation</button>
        <button className="text-left px-6 py-3 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-900 text-sm font-medium transition-colors">Credits & Usage</button>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">Server Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-neutral-950 border border-neutral-800 px-6 py-8 rounded-[2rem]">
            <p className="text-sm text-neutral-500 mb-2">Total Credits</p>
            <h2 className="text-3xl font-bold text-white">8,450</h2>
            <p className="text-xs text-green-500 mt-3 font-medium">Resets in 14h 22m</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 px-6 py-8 rounded-[2rem]">
            <p className="text-sm text-neutral-500 mb-2">AI Messages</p>
            <h2 className="text-3xl font-bold text-white">1,204</h2>
            <p className="text-xs text-neutral-400 mt-3 font-medium">This month</p>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 px-6 py-8 rounded-[2rem]">
            <p className="text-sm text-neutral-500 mb-2">Active Modules</p>
            <h2 className="text-3xl font-bold text-white">12</h2>
            <p className="text-xs text-neutral-400 mt-3 font-medium">All systems operational</p>
          </div>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-[2rem]">
          <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-sm text-neutral-300">AI Chat module enabled</p>
              </div>
              <p className="text-xs text-neutral-600">2 mins ago</p>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <p className="text-sm text-neutral-300">Blocked spam attempt by user</p>
              </div>
              <p className="text-xs text-neutral-600">15 mins ago</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <p className="text-sm text-neutral-300">Welcome message updated</p>
              </div>
              <p className="text-xs text-neutral-600">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
