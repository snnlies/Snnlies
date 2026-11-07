import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AI Workspace",
  description: "Chat with the Snnlies AI to generate Discord server structures, moderation and automation in seconds.",
  alternates: { canonical: "/chat" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
