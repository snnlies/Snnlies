import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "System Status",
  description: "Live status of the Snnlies Discord bot and API.",
  alternates: { canonical: "/status" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
