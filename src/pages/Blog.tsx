import { PageMeta } from "../components/shared/PageMeta";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/shared/PageHero";
import { Search, Calendar, Clock, ArrowRight, X, Tag } from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { POSTS, CATEGORIES, CAT_COLORS, CAT_GRADIENT } from "../data/blogPosts";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function CategoryBadge({ category, overlay = false }: { category: string; overlay?: boolean }) {
  const [bg, color] = CAT_COLORS[category] ?? ["#f3f4f6", "#6b7280"];
  if (overlay) {
    return (
      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm bg-white/15 text-white">
        {category}
      </span>
    );
  }
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest"
      style={{ background: bg, color }}
    >
      {category}
    </span>
  );
}

function Blog() {
  const [catFilter, setCatFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortBy, setSortBy] = useState("latest");

  const clearFilters = () => {
    setCatFilter("All");
    setSearch("");
    setDateFilter("all");
    setSortBy("latest");
  };

  const hasFilter = catFilter !== "All" || search.trim() !== "" || dateFilter !== "all";

  const filteredPosts = useMemo(() => {
    const now = new Date();
    return POSTS.filter((p) => {
      const matchCat = catFilter === "All" || p.category === catFilter;
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.author.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const postDate = new Date(p.isoDate);
      let matchDate = true;
      if (dateFilter === "month") {
        matchDate =
          postDate.getFullYear() === now.getFullYear() &&
          postDate.getMonth() === now.getMonth();
      } else if (dateFilter === "quarter") {
        const cutoff = new Date(now);
        cutoff.setMonth(cutoff.getMonth() - 3);
        matchDate = postDate >= cutoff;
      } else if (dateFilter === "year") {
        matchDate = postDate.getFullYear() === now.getFullYear();
      }
      return matchCat && matchSearch && matchDate;
    }).sort((a, b) => {
      const da = new Date(a.isoDate).getTime();
      const db = new Date(b.isoDate).getTime();
      return sortBy === "oldest" ? da - db : db - da;
    });
  }, [catFilter, search, dateFilter, sortBy]);

  const showFeatured = !hasFilter && filteredPosts.length > 0 && !!filteredPosts[0].featured;
  const featuredPost = showFeatured ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="w-full">
      <PageMeta
        title="IT Insights & Technology Blog"
        description="Explore the Infoplus Technologies UK blog for expert insights on AI, cloud computing, cyber security, digital transformation, and the latest enterprise IT trends."
        path="/blog"
      />
      <PageHero
        title="Insights & Perspectives"
        description="Explore our latest thinking on technology trends, digital transformation, and business strategy."
        badge="OUR BLOG"
        variant="centered"
      />

      <section className="py-20 bg-white relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Filter Panel */}
          <ScrollReveal direction="fade" className="mb-10">
            <div className="bg-white rounded-2xl border border-[#e5e4e7] p-6 shadow-sm">
              <div className="flex flex-wrap gap-4 mb-5">
                {/* Search */}
                <div className="relative flex-1 min-w-[220px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#aaa] pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-11 pr-10 py-3 rounded-xl border border-[#e5e4e7] bg-[#fafafa] text-[14px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#EB9B3D]/20 focus:border-[#EB9B3D] transition-all"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaa] hover:text-[#333] transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {/* Date */}
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-[#e5e4e7] bg-[#fafafa] text-[14px] text-[#333] focus:outline-none focus:ring-2 focus:ring-[#EB9B3D]/20 focus:border-[#EB9B3D] cursor-pointer transition-all min-w-[160px]"
                >
                  <option value="all">All Time</option>
                  <option value="month">This Month</option>
                  <option value="quarter">Last 3 Months</option>
                  <option value="year">This Year</option>
                </select>
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-[#e5e4e7] bg-[#fafafa] text-[14px] text-[#333] focus:outline-none focus:ring-2 focus:ring-[#EB9B3D]/20 focus:border-[#EB9B3D] cursor-pointer transition-all min-w-[150px]"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCatFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 border cursor-pointer ${
                      catFilter === cat
                        ? "bg-[#141A3D] text-white border-[#141A3D]"
                        : "bg-white text-[#555] border-[#e5e4e7] hover:border-[#EB9B3D]/40 hover:text-[#EB9B3D]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Results bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-[14px] text-[#666]">
              Showing{" "}
              <span className="font-semibold text-[#111]">{filteredPosts.length}</span>{" "}
              of{" "}
              <span className="font-semibold text-[#111]">{POSTS.length}</span>{" "}
              articles
            </p>
            {hasFilter && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-[13px] font-medium text-[#EB9B3D] hover:text-[#DA4D33] transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" /> Clear all filters
              </button>
            )}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <ScrollReveal direction="fade" className="mb-12">
              <div className="group grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-[#e5e4e7] bg-white hover:border-[#EB9B3D]/30 hover:shadow-[0_24px_64px_-12px_rgba(235,155,61,0.15)] transition-all duration-500">
                <div className="relative h-72 lg:h-auto min-h-[340px] overflow-hidden">
                  <img
                    src={featuredPost.image!}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0d0517]/50 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#EB9B3D] text-white">
                      Featured
                    </span>
                    <CategoryBadge category={featuredPost.category} overlay />
                  </div>
                </div>

                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[13px] text-[#888] mb-4">
                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{featuredPost.displayDate}</span>
                    <span className="text-[#ddd]">·</span>
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <Link to={`/blog/${featuredPost.id}`}>
                    <h2 className="text-[26px] lg:text-[30px] font-bold text-[#111] leading-snug mb-4 hover:text-[#EB9B3D] transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-[15px] text-[#555] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FEF0DC] text-[#EB9B3D] text-[12px] font-medium border border-[rgba(235,155,61,0.20)]"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">
                        {initials(featuredPost.author)}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#222] mb-0">{featuredPost.author}</p>
                        <p className="text-[11px] text-[#aaa]">Author</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-white text-[14px] font-bold transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)] group/btn"
                      style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Blog Grid */}
          {gridPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post, idx) => (
                <ScrollReveal key={post.id} direction="fade" variant="card" delay={Math.min(idx, 5) * 80}>
                  <article className="group h-full flex flex-col bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#EB9B3D]/30 hover:shadow-[0_16px_48px_-8px_rgba(235,155,61,0.12)] hover:-translate-y-1 transition-all duration-300">

                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      {post.image ? (
                        <>
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                          <div className="absolute bottom-3 left-4">
                            <CategoryBadge category={post.category} overlay />
                          </div>
                        </>
                      ) : (
                        <div className={`w-full h-full ${CAT_GRADIENT[post.category] ?? "bg-[#1e0a38]"} flex items-center justify-center relative`}>
                          <span className="text-white/8 text-[80px] font-black leading-none select-none">
                            {post.category.charAt(0)}
                          </span>
                          <div className="absolute bottom-3 left-4">
                            <CategoryBadge category={post.category} overlay />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-[12px] text-[#999] mb-3">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{post.displayDate}</span>
                        <span className="text-[#ddd]">·</span>
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{post.readTime}</span>
                      </div>

                      <Link to={`/blog/${post.id}`}>
                        <h3 className="text-[16px] font-bold text-[#111] leading-snug mb-3 hover:text-[#EB9B3D] transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-[13px] text-[#666] leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-md text-[11px] bg-[#FEF0DC] text-[#EB9B3D] border border-[rgba(235,155,61,0.20)]">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3.5 border-t border-[rgba(13,17,45,0.08)] mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                            {initials(post.author)}
                          </div>
                          <span className="text-[12px] text-[#666]">{post.author}</span>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center gap-1 text-[12px] font-semibold text-[#EB9B3D] hover:text-[#DA4D33] transition-colors duration-200 group/btn"
                        >
                          Read More
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-full bg-white border border-[#e5e4e7] flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Search className="w-8 h-8 text-[#EB9B3D]/40" />
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-2">No articles found</h3>
              <p className="text-[15px] text-[#666] mb-8">
                Try adjusting your filters or searching a different keyword.
              </p>
              <button
                onClick={clearFilters}
                className="px-7 py-3 rounded-full text-white text-[14px] font-bold transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)] cursor-pointer"
                style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;
