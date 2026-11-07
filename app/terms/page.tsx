import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Snnlies: accounts, credits, fair use, availability and changes.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-24 relative z-10 bg-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black">Terms of Service</h1>
      <div className="space-y-6 text-neutral-600 leading-relaxed">
        <p>Last updated: November 7, 2026. By using Snnlies, you agree to these terms.</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Accounts</h2>
        <p>You sign in to Snnlies through Discord and are responsible for activity on servers you manage with it. You must follow Discord's own Terms of Service while using Snnlies.</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Fair Use &amp; Limits</h2>
        <p>Snnlies operates on a credit-based system to ensure high availability for everyone. Limits are strictly enforced and reset daily. Any attempt to bypass these limits via scripts, alt accounts, or exploits will result in an immediate and permanent ban from the service.</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Availability</h2>
        <p>We strive for 99.99% uptime but are not liable for outages caused by Discord API failures or unforeseen infrastructure issues.</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Changes to These Terms</h2>
        <p>We may update these terms as the service evolves. The current version will always be posted on this page with its update date, and continued use of Snnlies after a change means you accept the updated terms.</p>
        <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Contact</h2>
        <p>Questions about these terms? Reach the team through our <a href="/support" className="underline font-semibold text-black">Support page</a> or by email at <a href="mailto:snnlies@outlook.com" className="underline font-semibold text-black">snnlies@outlook.com</a>.</p>
      </div>
    </div>
  );
}
