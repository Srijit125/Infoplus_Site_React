import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { Database, GraduationCap, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function ProductsPage() {
  const products = [
    {
      title: "Master Data Management",
      description:
        "Asset-intensive industries operate in a fast-paced environment with dizzying volumes of data. Our MDM solution brings standards, controls, and structure to your enterprise data.",
      icon: Database,
      features: ["Data Governance", "Quality Assurance", "Integration APIs", "Real-time Sync"],
    },
    {
      title: "Education Solutions",
      description:
        "Comprehensive digital platforms tailored for the modern educational ecosystem, streamlining administration and enhancing the learning experience.",
      icon: GraduationCap,
      features: ["Student Portal", "Faculty Dashboard", "Attendance Tracking", "Assessment Tools"],
    },
  ];

  return (
    <div className="w-full">
      <PageMeta
        title="Products | IT Software Solutions"
        description="Discover Infoplus Technologies UK's product portfolio including Master Data Management and Education Solutions — purpose-built software for enterprise efficiency and digital transformation."
        path="/products"
      />
      <PageHero
        title="Software built for the future"
        description="Transforming dizzying volumes of data into structured, actionable insights with our suite of enterprise products."
        badge="OUR PRODUCTS"
        variant="centered"
      />

      <section className="py-24 bg-[#1e0a38] text-white relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((prod, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 150}>
                <div className="group h-full bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 hover:border-[#aa3bff]/40 hover:shadow-[0_16px_48px_rgba(170,59,255,0.12)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#6128a6] to-[#aa3bff] flex items-center justify-center mb-6">
                    <prod.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-[28px] font-bold mb-4 text-white">{prod.title}</h2>
                  <p className="text-white/70 text-[16px] leading-relaxed mb-8 text-justify">
                    {prod.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-[#aa3bff] shrink-0" />
                        <span className="text-[13px] font-medium text-white/80">{feat}</span>
                      </div>
                    ))}
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
