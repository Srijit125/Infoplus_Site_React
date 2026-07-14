import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { Link } from "react-router-dom";
import { Database, GraduationCap, CheckCircle2, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function ProductsPage() {
  const products = [
    {
      title: "Master Data Management",
      path: "/products/master-data-management",
      description:
        "Asset-intensive industries operate in a fast-paced environment with dizzying volumes of data. Our MDM solution brings standards, controls, and structure to your enterprise data.",
      icon: Database,
      features: ["Data Governance", "Quality Assurance", "Integration APIs", "Real-time Sync"],
    },
    {
      title: "Education Solutions",
      path: "/products/education-solutions",
      description:
        "Comprehensive digital platforms tailored for the modern educational ecosystem, streamlining administration and enhancing the learning experience.",
      icon: GraduationCap,
      features: ["Student Portal", "Faculty Dashboard", "Attendance Tracking", "Assessment Tools"],
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Products | IT Software Solutions"
        description="Discover Infoplus Technologies UK's product portfolio including Master Data Management and Education Solutions purpose-built software for enterprise efficiency and digital transformation."
        path="/products"
      />
      <PageHero
        title="Software built for the future"
        description="Transforming dizzying volumes of data into structured, actionable insights with our suite of enterprise products."
        badge="OUR PRODUCTS"
        variant="centered"
      />

      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ecdaff]/50 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((prod, idx) => (
              <ScrollReveal key={idx} direction={idx === 0 ? "left" : "right"} duration={720} delay={idx * 120}>
                <div className="group h-full bg-white border border-[#e8e0f7] p-10 rounded-3xl hover:border-[#6128a6]/25 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <prod.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-[24px] font-bold mb-4 text-[#111] group-hover:text-[#6128a6] transition-colors leading-snug">
                    {prod.title}
                  </h2>
                  <p className="text-[15px] text-[#555] leading-relaxed mb-6">
                    {prod.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#f8f5ff] border border-[#e8e0f7] px-4 py-3 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-[#6128a6] shrink-0" />
                        <span className="text-[13px] font-medium text-[#444]">{feat}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      to={prod.path}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#f85d37] hover:gap-3 transition-all duration-200"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
