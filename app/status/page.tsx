export default function Status() {
  const services = [
    { name: "Discord Bot", status: "Operational" },
    { name: "Web Dashboard", status: "Operational" },
    { name: "AI Engine", status: "Operational" },
    { name: "Database", status: "Operational" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-24 relative z-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">System Status</h1>
      <div className="flex items-center gap-3 mb-12">
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        <p className="text-green-500 font-medium">All systems operational</p>
      </div>
      <div className="space-y-4">
        {services.map((s, i) => (
          <div key={i} className="flex justify-between items-center p-5 border border-neutral-800 rounded-xl bg-neutral-950">
            <span className="text-white font-medium">{s.name}</span>
            <span className="text-neutral-400 text-sm">{s.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
