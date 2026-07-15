import { PageMeta } from "../components/shared/PageMeta";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { POSTS, CAT_COLORS, CAT_GRADIENT } from "../data/blogPosts";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function CategoryBadge({ category }: { category: string }) {
  const [bg, color] = CAT_COLORS[category] ?? ["#f3f4f6", "#6b7280"];
  return (
    <span
      className="inline-block px-3.5 py-1 rounded-full text-[12px] font-bold uppercase tracking-widest"
      style={{ background: bg, color }}
    >
      {category}
    </span>
  );
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = POSTS.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#f8f5ff] gap-4">
        <h2 className="text-2xl font-bold text-[#111]">Article not found</h2>
        <Link
          to="/blog"
          className="flex items-center gap-2 text-[#6128a6] font-semibold hover:text-[#f85d37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const related = POSTS.filter(
    (p) => p.id !== post.id && p.category === post.category
  ).slice(0, 3);

  return (
    <div className="w-full">
      <PageMeta
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
      />
      {/* Article Hero */}
      <section className="bg-[#0d0517] relative overflow-hidden pt-40 pb-16">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#6128a6]/20 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Category + tags row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <CategoryBadge category={post.category} />
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/10 text-white/60 text-[11px] font-medium"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-[32px] md:text-[44px] font-bold text-white leading-[1.15] mb-8 max-w-3xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#6128a6] to-[#aa3bff] flex items-center justify-center text-white text-[13px] font-bold">
                {initials(post.author)}
              </div>
              <div>
                <p className="text-white text-[14px] font-semibold mb-0">{post.author}</p>
                <p className="text-white/40 text-[12px]">Author</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-1.5 text-white/50 text-[13px]">
              <Calendar className="w-4 h-4" />
              {post.displayDate}
            </div>
            <div className="flex items-center gap-1.5 text-white/50 text-[13px]">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Featured image (if exists) */}
      {post.image && (
        <div className="bg-[#0d0517] pb-0">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="relative h-[420px] rounded-2xl overflow-hidden -mb-16 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* Article body */}
      <section className={`bg-white -mt-10 rounded-t-[3rem] z-20 ${post.image ? "pt-28" : "pt-16"} pb-20`}>
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Excerpt lead */}
          <p className="text-[19px] text-[#333] leading-[1.7] font-medium border-l-4 border-[#6128a6] pl-6 mb-10 italic">
            {post.excerpt}
          </p>

          {/* Content blocks */}
          <div>
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-[24px] font-bold text-[#111] mt-12 mb-5 border-l-[3px] border-[#6128a6] pl-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="my-6 space-y-4">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#ecdaff] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6128a6]" />
                        </span>
                        <span className="text-[16px] text-[#444] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-[17px] text-[#444] leading-[1.85] mb-6">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Tags footer */}
          <div className="mt-12 pt-8 border-t border-[#f0eff5] flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#f8f5ff] text-[#6128a6] text-[12px] font-medium border border-[#e8e0f7]"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Author box */}
          <div className="mt-10 flex items-start gap-5 bg-[#f8f5ff] border border-[#e5e4e7] rounded-2xl p-6">
            <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#6128a6] to-[#aa3bff] flex items-center justify-center text-white text-[18px] font-bold flex-shrink-0">
              {initials(post.author)}
            </div>
            <div>
              <p className="text-[16px] font-bold text-[#111] mb-1">{post.author}</p>
              <p className="text-[13px] text-[#888]">
                Senior Technology Consultant at Infoplus Technologies. Specialising in{" "}
                {post.category} strategy and delivery for enterprise clients across the UK and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-[#f8f5ff]">
          <div className="container mx-auto px-6 max-w-7xl">
            <ScrollReveal direction="fade">
              <div className="mb-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Keep Reading
                </span>
                <h2 className="text-[28px] font-bold text-[#111]">Related Articles</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp, idx) => (
                <ScrollReveal key={rp.id} direction="fade" variant="card" delay={idx * 80}>
                  <Link to={`/blog/${rp.id}`} className="block group h-full">
                    <article className="h-full flex flex-col bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#6128a6]/30 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.12)] hover:-translate-y-1 transition-all duration-300">
                      <div className="relative h-44 flex-shrink-0">
                        {rp.image ? (
                          <>
                            <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                          </>
                        ) : (
                          <div className={`w-full h-full ${CAT_GRADIENT[rp.category] ?? "bg-[#1e0a38]"} flex items-center justify-center`}>
                            <span className="text-white/8 text-[72px] font-black leading-none select-none">{rp.category.charAt(0)}</span>
                          </div>
                        )}
                        <div className="absolute bottom-3 left-4">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white backdrop-blur-sm">
                            {rp.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-[11px] text-[#999] mb-2">
                          <Calendar className="w-3 h-3" />{rp.displayDate}
                          <span className="text-[#ddd]">·</span>
                          <Clock className="w-3 h-3" />{rp.readTime}
                        </div>
                        <h3 className="text-[15px] font-bold text-[#111] leading-snug group-hover:text-[#6128a6] transition-colors line-clamp-2">
                          {rp.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1e0a38] text-white text-[14px] font-semibold hover:bg-[#6128a6] transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" /> All Articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
