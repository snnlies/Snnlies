export default function Status() {
  const services = [
    { name: "Snnlies Bot", status: "Operational" },
    { name: "Agent Engine", status: "Operational" },
    { name: "Authentication", status: "Operational" },
    { name: "Web Dashboard", status: "Operational" },
    { name: "Database", status: "Operational" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 relative z-10">
      <div className="w-full bg-black border border-neutral-800 p-4 rounded-xl mb-12 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <p className="text-white text-sm font-medium">All systems are operating normally.</p>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">System Status</h1>
      <p className="text-white/60 text-sm mb-12">Live status of Snnlies infrastructure.</p>

      <div className="border border-neutral-800 rounded-2xl overflow-hidden">
        {services.map((service, i) => (
          <div key={i} className={`flex items-center justify-between p-4 md:p-6 bg-neutral-950 ${i !== services.length - 1 ? 'border-b border-neutral-800' : ''}`}>
            <span className="text-white font-medium text-sm md:text-base">{service.name}</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-white/80 text-xs md:text-sm">{service.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
