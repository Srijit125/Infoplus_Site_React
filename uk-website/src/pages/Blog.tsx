import { PageHero } from "../components/shared/PageHero";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function Blog() {
  const posts = [
    {
      title: "The Future of Generative AI in Enterprise Solutions",
      category: "Artificial Intelligence",
      date: "Oct 12, 2026",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcnRpZmljaWFsJTIwSW50ZWxsaWdlbmNlJTIwVGVjaG5vbG9neXxlbnwxfHx8fDE3ODE1MjYwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      height: "400px",
    },
    {
      title: "How to Build a Scalable IT Infrastructure for 2027",
      category: "IT Services",
      date: "Sep 28, 2026",
      height: "300px",
      bg: "bg-[#381f55]",
    },
    {
      title: "Master Data Management: The Silent Engine of Growth",
      category: "Products",
      date: "Sep 15, 2026",
      image: "https://images.unsplash.com/photo-1549637642-90187f64f420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3Jwb3JhdGUlMjBPZmZpY2UlMjBNb2Rlcm58ZW58MXx8fHwxNzgxNTI2MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      height: "450px",
    },
    {
      title: "Top 5 Cybersecurity Threats to Watch Out For",
      category: "Security",
      date: "Aug 30, 2026",
      height: "350px",
      bg: "bg-[#261140]",
    },
    {
      title: "Why Staffing & Consulting Firms Are Shifting to Digital Platforms",
      category: "Consulting",
      date: "Aug 14, 2026",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXNpbmVzcyUyMFBlb3BsZSUyMENvbGxhYm9yYXRpb258ZW58MXx8fHwxNzgxNTI3MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      height: "500px",
    },
    {
      title: "Navigating the Complexities of SAP Consulting",
      category: "Enterprise",
      date: "Jul 22, 2026",
      height: "280px",
      bg: "bg-[#6128a6]",
    },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Insights & Perspectives"
        description="Explore our latest thinking on technology trends, digital transformation, and business strategy."
        badge="OUR BLOG"
        variant="centered"
      />

      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
            <Masonry gutter="24px">
              {posts.map((post, i) => (
                /* Use fade-only for masonry — translate would misalign column heights */
                <ScrollReveal key={i} direction="fade" delay={i * 90}>
                  <div
                    className={`group relative rounded-3xl overflow-hidden cursor-pointer ${post.bg ?? "bg-white"} shadow-sm hover:shadow-xl transition-all duration-500`}
                    style={{ height: post.height }}
                  >
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div
                      className={`absolute inset-0 ${post.image ? "bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" : "bg-transparent"} p-8 flex flex-col justify-end`}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${post.image ? "bg-[#f85d37] text-white" : "bg-white/20 text-white backdrop-blur-sm"}`}>
                          {post.category}
                        </span>
                        <span className={`text-sm ${post.image ? "text-slate-300" : "text-white/80"}`}>
                          {post.date}
                        </span>
                      </div>
                      <h3
                        className={`text-2xl font-bold leading-tight ${post.image || post.bg ? "text-white" : "text-[#111111]"} group-hover:-translate-y-2 transition-transform duration-300`}
                      >
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </div>
  );
}

export default Blog;
