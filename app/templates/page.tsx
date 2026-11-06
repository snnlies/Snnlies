"use client";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";

export default function Templates() {
  const categories = ["All", "Gaming", "Development", "Community", "Crypto", "Education"];
  
  const templates = [
    { name: "Esports Organization", cat: "Gaming", desc: "Tournament brackets, team tryout channels, and match scheduling automation.", users: "24k", color: "bg-white" },
    { name: "Open Source Project", cat: "Development", desc: "GitHub integrations, issue tracking feeds, and contributor recognition systems.", users: "18k", color: "bg-neutral-800" },
    { name: "Content Creator Hub", cat: "Community", desc: "YouTube/Twitch alerts, tiered subscriber roles, and exclusive content drops.", users: "45k", color: "bg-neutral-700" },
    { name: "NFT Marketplace", cat: "Crypto", desc: "Whitelist verification, automated smart-contract alerts, and floor price feeds.", users: "12k", color: "bg-white" },
    { name: "University Server", cat: "Education", desc: "Course-specific text channels, automated lecture reminders, and study groups.", users: "8k", color: "bg-neutral-600" },
    { name: "Startup Workspace", cat: "Development", desc: "Internal team comms, sprint planning channels, and CI/CD pipeline notifications.", users: "5k", color: "bg-neutral-900" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Production Templates</h1>
          <p className="text-white font-light max-w-xl mx-auto text-lg">Deploy fully configured server structures instantly. Built by industry experts for scale.</p>
        </div>
      </ScrollReveal>

      {/* Categories */}
      <ScrollReveal delay={100}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button key={i} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${i === 0 ? 'bg-white text-black border-white' : 'bg-black text-white border-neutral-800 hover:border-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="bg-black border border-neutral-800 p-8 rounded-3xl hover:border-white transition-colors duration-300 flex flex-col h-full group">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-full ${template.color} flex items-center justify-center`}>
                  <span className="text-black font-bold text-xl">{template.name.charAt(0)}</span>
                </div>
                <span className="text-xs font-medium text-white bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                  {template.cat}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
              <p className="text-white text-sm font-light leading-relaxed mb-8 flex-grow">{template.desc}</p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-900">
                <span className="text-xs font-medium text-neutral-400">{template.users} deployments</span>
                <button className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors">
                  Deploy
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      <ScrollReveal>
        <div className="mt-20 text-center">
          <p className="text-white text-sm mb-4">Can't find what you're looking for?</p>
          <Link href="/support" className="text-white font-medium hover:underline underline-offset-4">
            Request a custom template
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
