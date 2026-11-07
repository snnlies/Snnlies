import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "What's New",
  description: "The latest features and improvements to Snnlies.",
  alternates: { canonical: "/whats-new" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
