import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Snnlies account with Discord and automate your server instantly.",
  alternates: { canonical: "/signup" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
