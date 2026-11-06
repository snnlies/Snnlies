export default function Dashboard() {
  // Mock servers for UI demonstration
  const servers = [
    { name: "Snnlies HQ", members: "1,204", role: "Admin" },
    { name: "Gaming Community", members: "45,200", role: "Moderator" },
    { name: "Devs Hub", members: "8,900", role: "Member" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-2">Your Servers</h2>
      <p className="text-neutral-400 mb-10">Select a server to manage Snnlies AI Agent.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((server, i) => (
          <div key={i} className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition cursor-pointer group">
            <div className="w-16 h-16 bg-neutral-900 rounded-full mb-4 flex items-center justify-center text-xl font-bold group-hover:bg-white group-hover:text-black transition">
              {server.name.charAt(0)}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{server.name}</h3>
            <p className="text-sm text-neutral-500 mb-4">{server.members} Members</p>
            <div className="inline-block px-3 py-1 bg-neutral-900 text-xs text-neutral-300 rounded-full border border-neutral-800">
              {server.role}
            </div>
          </div>
        ))}
        
        {/* Add Server Button */}
        <a href="https://discord.com/oauth2/authorize?client_id=1568201630112030760&permissions=8&integration_type=0&scope=bot+applications.commands" className="border border-dashed border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center text-neutral-500 hover:text-white hover:border-neutral-500 transition min-h-[200px]">
          <span className="text-4xl mb-2">+</span>
          <span>Add to New Server</span>
        </a>
      </div>
    </div>
  );
}
