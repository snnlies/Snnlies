import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Admin() {
  const session = (await cookies()).get("snnlies_session");
  if (!session) redirect("/login");
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 relative z-10 text-center bg-white">
      <h1 className="text-3xl font-bold text-black mb-8">Super Admin Panel</h1>
      <p className="text-neutral-500 mb-8">Only visible to the owner.</p>
      <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-3xl inline-block text-left">
        <h3 className="text-white font-bold mb-4">System Controls</h3>
        <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm mb-4">Give Credits</button>
      </div>
    </div>
  );
}
