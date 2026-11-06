export default function Status() {
  const services = [
    { name: "Snnlies Bot", status: "Operational" },
    { name: "Agent Engine", status: "Operational" },
    { name: "Authentication", status: "Operational" },
    { name: "Web Dashboard", status: "Operational" },
    { name: "Database", status: "Operational" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 relative z-10 bg-white min-h-screen">
      <div className="w-full bg-green-50 border border-green-200 p-4 rounded-xl mb-12 flex items-center gap-3 shadow-sm">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <p className="text-green-800 text-sm font-bold">All systems are operating normally.</p>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-black mb-2 tracking-tight">System Status</h1>
      <p className="text-black font-medium mb-12">Live status of Snnlies infrastructure.</p>

      <div className="border border-neutral-200 rounded-[2rem] overflow-hidden apple-shadow bg-white">
        {services.map((service, i) => (
          <div key={i} className={`flex items-center justify-between p-6 ${i !== services.length - 1 ? 'border-b border-neutral-200' : ''}`}>
            <span className="text-black font-bold">{service.name}</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="text-black text-sm font-semibold">{service.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
