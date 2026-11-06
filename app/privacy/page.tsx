export default function Privacy() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">Privacy Policy</h1>
      <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
        <p>Last updated: 2026</p>
        <p>Your privacy is critically important to us. Snnlies only collects the absolute minimum data required to function (User ID, Server ID, and configuration settings).</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Data We Collect</h2>
        <p>We store configuration preferences and anonymized usage metrics. We do not log or store the content of messages unless explicitly required for a specific moderation feature (e.g., logging a deleted message, which can be disabled at any time).</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. AI Data Processing</h2>
        <p>When interacting with Snnlies AI, your prompts are processed securely. We do not use your server's data to train our foundational AI models.</p>
      </div>
    </div>
  );
}
