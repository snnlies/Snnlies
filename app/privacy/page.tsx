import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Snnlies collects, uses and protects your data: minimum collection, zero AI training, and deletion on request.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10 bg-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black">Privacy Policy</h1>
      <div className="space-y-6 text-neutral-600 leading-relaxed">
        <p>Last updated: November 7, 2026</p>
        <p>Your privacy is critically important to us. Snnlies only collects the absolute minimum data required to function (User ID, Server ID, and configuration settings).</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Data We Collect</h2>
        <p>We store configuration preferences and anonymized usage metrics. We do not log or store the content of messages unless explicitly required for a specific moderation feature (e.g., logging a deleted message, which can be disabled at any time).</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. AI Data Processing</h2>
        <p>When interacting with Snnlies AI, your prompts are processed securely. We do not use your server's data to train our foundational AI models.</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Cookies &amp; Sessions</h2>
        <p>We use a single session cookie (snnlies_session) created when you sign in with Discord, so the dashboard can recognise you. We do not use advertising or cross-site tracking cookies.</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Data Retention &amp; Deletion</h2>
        <p>Configuration data is kept while your server uses Snnlies. Remove the bot from your server and contact us through the Support page to request deletion of stored configuration and account data.</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Contact</h2>
        <p>Questions about this policy? Reach the team through our <a href="/support" className="underline font-semibold text-black">Support page</a> or by email at <a href="mailto:snnlies@outlook.com" className="underline font-semibold text-black">snnlies@outlook.com</a>.</p>
      </div>
    </div>
  );
}
