import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Snnlies: join the Discord server or send feedback to the team.",
  alternates: { canonical: "/support" },
};

export default function Support() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-24 relative z-10 text-center bg-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-black">Support</h1>
      <p className="text-neutral-600 mb-12">Need help? We are here for you.</p>
      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        <a href="https://discord.gg/N2QKNV8Hys" target="_blank" rel="noreferrer" className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-neutral-800 transition-colors">Join Discord Server</a>
        <a href="mailto:snnlies@outlook.com" className="w-full py-4 border border-neutral-300 bg-white text-black font-semibold rounded-xl hover:bg-neutral-50 transition-colors">Email Support</a>
        <a href="/community" className="w-full py-4 border border-neutral-300 bg-white text-black font-semibold rounded-xl hover:bg-neutral-50 transition-colors">Send Feedback</a>
      </div>
      <p className="text-neutral-500 text-sm mt-8">The fastest way to reach the team is the Discord server above, or email us at <a href="mailto:snnlies@outlook.com" className="underline font-semibold text-black">snnlies@outlook.com</a>. Use Send Feedback for bug reports and feature ideas.</p>
    </div>
  );
}
