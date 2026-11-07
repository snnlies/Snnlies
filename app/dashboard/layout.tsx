import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your Snnlies servers, credits and bot status.",
  alternates: { canonical: "/dashboard" },
  robots: { index: false, follow: false },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
