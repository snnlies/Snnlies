import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Community Hub",
  description: "Join the Snnlies community, send feedback and get help from other server owners.",
  alternates: { canonical: "/community" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
