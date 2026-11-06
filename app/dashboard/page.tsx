"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [credits, setCredits] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch real credits from Termux DB via our proxy
    fetch('/api/data?endpoint=/api/user&userId=1568291865621430282')
      .then(res => res.json())
      .then(data => { if(data.credits) setCredits(data.credits); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10 bg-[#F5F5F7] min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-8 tracking-tight">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-neutral-200 p-8 rounded-[2rem] shadow-sm">
          <h3 className="text-black font-semibold mb-2">Total Credits</h3>
          <h2 className="text-5xl font-bold text-black">{loading ? "..." : credits}</h2>
          <p className="text-green-500 text-sm font-medium mt-2">Real DB Data</p>
        </div>
      </div>
    </div>
  );
}
