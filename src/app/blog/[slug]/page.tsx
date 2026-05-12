import { getPost, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) notFound();

  return (
    <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-20">
      <div className="mb-12">
        <Link href="/blog" className="text-sm text-slate-500 hover:text-neon-green transition-colors mb-8 inline-block">
          ← back to blog
        </Link>

        <div className="flex items-center gap-3 mb-4 text-xs text-slate-600">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>

        <div className="flex gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-neon-cyan/60 border border-neon-cyan/20 rounded px-2 py-0.5">
              #{tag}
            </span>
          ))}
        </div>

        <div className="w-full h-px bg-neon-green/10 mb-12" />
      </div>

      <article className="prose-dark max-w-none leading-relaxed space-y-4 text-slate-300">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
