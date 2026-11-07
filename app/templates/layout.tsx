import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mega Templates",
  description: "One-click Discord server templates with full channel structures and role hierarchies.",
  alternates: { canonical: "/templates" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
