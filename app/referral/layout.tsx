import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Referral Program",
  description: "Invite friends to Snnlies and earn 50 credits for every verified referral.",
  alternates: { canonical: "/referral" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
