import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { BrainCircuit, Code2, Database, Rocket, Briefcase, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../components/ui/ScrollReveal";

export function ServicesPage() {
  const services = [
    {
      title: "Artificial Intelligence",
      icon: BrainCircuit,
      color: "bg-[#ecdaff] text-[#6128a6]",
      items: ["Machine Learning", "NLP", "Generative AI", "AI Automation"],
      span: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "IT Services",
      icon: Code2,
      color: "bg-[#f8f5ff] text-[#381f55]",
      items: ["Software Dev", "Testing", "Infra Management", "SAP Consulting"],
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Data & Products",
      icon: Database,
      color: "bg-[#f8f5ff] text-[#381f55]",
      items: ["Master Data", "Education Solutions", "Data Security"],
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "New-Gen Solutions",
      icon: Rocket,
      color: "bg-[#fff3ef] text-[#f85d37]",
      items: ["Enterprise Transform", "Automation", "Everything Data"],
      span: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "Staffing & Consulting",
      icon: Briefcase,
      color: "bg-[#ecdaff] text-[#6128a6]",
      items: ["IT Staffing", "Consulting", "Umbrella Service"],
      span: "md:col-span-1 lg:col-span-3",
    },
  ];

  return (
    <div className="w-full">
      <PageMeta
        title="IT Services & Technology Solutions"
        description="Discover Infoplus Technologies UK's comprehensive services: managed IT, AI, cloud, cyber security, SAP consulting, digital transformation, staffing, and consulting solutions."
        path="/services"
      />
      <PageHero
        title="Proactively Managed IT Solutions"
        description="We design end-to-end solutions for organizations to have a technology edge and stay ahead of the curve while running operations seamlessly."
        badge="OUR SERVICES"
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="bg-[#381f55] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6128a6] transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </PageHero>

      <section className="py-24 bg-[#f8f5ff] relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 100} className={srv.span}>
                <div className="h-full group bg-white rounded-2xl p-8 shadow-sm border border-[#e5e4e7] hover:border-[#aa3bff]/30 hover:shadow-[0_12px_40px_rgba(97,40,166,0.10)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${srv.color}`}>
                    <srv.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#111111] mb-5 group-hover:text-[#6128a6] transition-colors">
                    {srv.title}
                  </h3>
                  <ul className="space-y-3">
                    {srv.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[15px] text-[#555555] font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#6128a6] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
