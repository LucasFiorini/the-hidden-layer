import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-neon-green text-sm font-mono">cat ~/blog/index.md</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">blog</h1>
        <p className="text-slate-400">
          Thoughts on software, systems, and things I find interesting.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="bg-dark-700/30 border border-neon-green/10 rounded-lg p-12 text-center">
          <p className="text-slate-500 text-sm font-mono">
            <span className="text-neon-green">$</span> find . -name &quot;*.mdx&quot;<br />
            <span className="text-slate-600">no posts yet — stay tuned</span>
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group bg-dark-700/30 hover:bg-dark-700/60 border border-neon-green/10 hover:border-neon-green/30 rounded-lg p-6 transition-all duration-200">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-lg font-bold text-white group-hover:text-neon-green transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-xs text-slate-600 whitespace-nowrap shrink-0 mt-1">
                    {post.readingTime}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-neon-cyan/60 border border-neon-cyan/20 rounded px-2 py-0.5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-slate-600">{post.date}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
