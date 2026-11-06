export default function Security() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">Security & Privacy</h1>
      <div className="space-y-8 text-neutral-400 font-light leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">End-to-End Encryption</h2>
          <p>All data transmitted between your Discord server, our dashboard, and our AI processing units is encrypted using industry-standard TLS 1.3. We never store message content on our servers.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Zero Data Leaking Policy</h2>
          <p>We do not sell, rent, or share your data with third parties. Our AI models are sandboxed, ensuring that your community's private conversations cannot be accessed or leaked.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">High-End Infrastructure</h2>
          <p>Snnlies operates on enterprise-grade servers with DDoS protection, automated threat detection, and 24/7 real-time monitoring to guarantee 99.99% uptime.</p>
        </section>
      </div>
    </div>
  );
}
