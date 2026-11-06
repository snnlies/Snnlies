export default function Dashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10 bg-[#F5F5F7] min-h-screen">
      
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black tracking-tight">Dashboard</h1>
          <p className="text-neutral-500 font-medium">Welcome back to Snnlies.</p>
        </div>
        <div className="flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold border border-red-200">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          New Update Available
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        
        {/* Widget 1: Credits & Timer (Pink Pastel) */}
        <div className="md:col-span-1 bg-[#FFF0F0] border border-[#FFE0E0] p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-64">
          <div className="flex justify-between items-start">
            <h3 className="text-red-900 font-semibold">Credits</h3>
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">PRO</span>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-red-950 mb-1">8,450</h2>
            <p className="text-red-700/60 text-sm font-medium">Resets in 14h 22m</p>
          </div>
        </div>

        {/* Widget 2: Bot Status (White Calendar Style) */}
        <div className="md:col-span-2 bg-white border border-neutral-200 p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-64">
          <div className="flex justify-between items-start">
            <h3 className="text-black font-semibold">System Status</h3>
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="flex items-end gap-8">
            <div>
              <p className="text-neutral-400 text-sm font-medium mb-1">Bot Latency</p>
              <h2 className="text-4xl font-bold text-black">42ms</h2>
            </div>
            <div>
              <p className="text-neutral-400 text-sm font-medium mb-1">Uptime</p>
              <h2 className="text-4xl font-bold text-black">99.9%</h2>
            </div>
          </div>
        </div>

        {/* Widget 3: Profile (Purple Pastel) */}
        <div className="md:col-span-1 bg-[#F0E6FF] border border-[#E6D0FF] p-6 rounded-[2rem] shadow-sm flex flex-col items-center justify-center h-64 text-center">
          <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-lg mb-4 flex items-center justify-center text-3xl font-bold text-black">
            S
          </div>
          <h3 className="text-purple-950 font-bold text-lg">Snnlies HQ</h3>
          <p className="text-purple-700/60 text-sm font-medium">Admin Access</p>
        </div>

        {/* Widget 4: AI Usage (Orange Pastel) */}
        <div className="md:col-span-2 bg-[#FFF5E6] border border-[#FFE4C4] p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-64">
          <div className="flex justify-between items-start">
            <h3 className="text-orange-950 font-semibold">AI Usage</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-orange-500"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-orange-950 mb-2">1,204</h2>
            <div className="w-full bg-orange-200/50 rounded-full h-2">
              <div className="bg-orange-400 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        {/* Widget 5: Activity (Green Pastel) */}
        <div className="md:col-span-2 bg-[#E6F9E9] border border-[#D0F0D5] p-6 rounded-[2rem] shadow-sm flex flex-col justify-between h-64">
          <div className="flex justify-between items-start">
            <h3 className="text-green-950 font-semibold">Recent Activity</h3>
            <span className="text-xs font-bold text-green-700 bg-green-200/50 px-2 py-1 rounded-md">Live</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm text-green-900 font-medium">AI Chat module enabled</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm text-green-900 font-medium">Blocked spam attempt</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm text-green-900 font-medium">Welcome message updated</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
