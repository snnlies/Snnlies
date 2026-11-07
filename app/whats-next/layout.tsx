import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "What's Next",
  description: "The Snnlies roadmap: features in development, planned and being explored.",
  alternates: { canonical: "/whats-next" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
