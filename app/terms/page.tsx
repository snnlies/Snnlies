export default function Terms() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">Terms of Service</h1>
      <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
        <p>By using Snnlies, you agree to these terms.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Fair Use & Limits</h2>
        <p>Snnlies operates on a credit-based system to ensure high availability for everyone. Limits are strictly enforced and reset daily. Any attempt to bypass these limits via scripts, alt accounts, or exploits will result in an immediate and permanent ban from the service.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Availability</h2>
        <p>We strive for 99.99% uptime but are not liable for outages caused by Discord API failures or unforeseen infrastructure issues.</p>
      </div>
    </div>
  );
}
