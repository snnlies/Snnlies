import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, guides, and tutorials on Discord automation, server structure and AI moderation from Snnlies.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16 relative z-10 bg-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Snnlies Blog</h1>
      <p className="text-black font-medium mb-12">Insights, guides, and tutorials on Discord automation.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white border border-neutral-200 p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 group flex flex-col apple-shadow">
            <article className="flex flex-col flex-grow">
              <div className="flex items-center gap-3 text-xs font-bold text-neutral-500 mb-4 uppercase tracking-wider">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                <span>{post.read}</span>
              </div>
              <h2 className="text-xl font-bold text-black mb-3 group-hover:underline decoration-black underline-offset-4">{post.title}</h2>
              <p className="text-black text-sm leading-relaxed mb-8 flex-grow">{post.desc}</p>
              <span className="text-black text-sm font-bold flex items-center gap-2">
                Read Article
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
