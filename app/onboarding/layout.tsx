import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Get Started",
  description: "Set up your first Snnlies server in a few quick steps.",
  alternates: { canonical: "/onboarding" },
  robots: { index: false, follow: false },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
