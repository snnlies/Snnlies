import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../../../lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.desc,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.desc, url: `https://snnlies.vercel.app/blog/${post.slug}`, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16 relative z-10 bg-white min-h-screen">
      <Link href="/blog" className="text-sm font-bold text-neutral-500 hover:text-black transition-colors">← Back to Blog</Link>
      <div className="flex items-center gap-3 text-xs font-bold text-neutral-500 mt-8 mb-4 uppercase tracking-wider">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
        <span>{post.read}</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 tracking-tight">{post.title}</h1>
      <p className="text-lg text-neutral-600 font-medium mb-10">{post.desc}</p>
      <div className="space-y-6">
        {post.content.map((para, i) => (
          <p key={i} className="text-black text-base leading-relaxed">{para}</p>
        ))}
      </div>
    </div>
  );
}
