import { PageHero } from "../components/shared/PageHero";
import { Database, GraduationCap, ShieldCheck } from "lucide-react";

function ProductsPage() {
  const products = [
    {
      title: "Master Data Management",
      description:
        "Asset-intensive industries operate in a fast-paced environment with dizzying volumes of data. Our MDM solution brings standards, controls, and structure to your enterprise data.",
      icon: Database,
      features: [
        "Data Governance",
        "Quality Assurance",
        "Integration APIs",
        "Real-time Sync",
      ],
    },
    {
      title: "Education Solutions",
      description:
        "Comprehensive digital platforms tailored for the modern educational ecosystem, streamlining administration and enhancing the learning experience.",
      icon: GraduationCap,
      features: [
        "Student Portal",
        "Faculty Dashboard",
        "Attendance Tracking",
        "Assessment Tools",
      ],
    },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Software built for the future"
        description="Transforming dizzying volumes of data into structured, actionable insights with our suite of enterprise products."
        badge="OUR PRODUCTS"
        variant="centered"
      ></PageHero>

      <section className="py-24 bg-slate-900 text-white relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((prod, idx) => (
              <div
                key={idx}
                className=" backdrop-blur-xl border border-slate-700 p-10 rounded-3xl hover:bg-slate-800 transition-colors"
              >
                <prod.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4">{prod.title}</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {prod.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {prod.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-slate-900/50 px-4 py-3 rounded-xl border border-slate-700/50"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-slate-300">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
