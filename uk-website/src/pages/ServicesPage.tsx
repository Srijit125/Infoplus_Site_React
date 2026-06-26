import { PageHero } from "../components/shared/PageHero";
import {
  BrainCircuit,
  Code2,
  Database,
  Rocket,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router";

export function ServicesPage() {
  const services = [
    {
      title: "Artificial Intelligence",
      icon: BrainCircuit,
      color: "bg-purple-100 text-purple-700",
      items: ["Machine Learning", "NLP", "Generative AI", "AI Automation"],
      span: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "IT Services",
      icon: Code2,
      color: "bg-blue-100 text-blue-700",
      items: ["Software Dev", "Testing", "Infra Management", "SAP Consulting"],
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "Data & Products",
      icon: Database,
      color: "bg-emerald-100 text-emerald-700",
      items: ["Master Data", "Education Solutions", "Data Security"],
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "New-Gen Solutions",
      icon: Rocket,
      color: "bg-orange-100 text-orange-700",
      items: ["Enterprise Transform", "Automation", "Everything Data"],
      span: "md:col-span-2 lg:col-span-2",
    },
    {
      title: "Staffing & Consulting",
      icon: Briefcase,
      color: "bg-rose-100 text-rose-700",
      items: ["IT Staffing", "Consulting", "Umbrella Service"],
      span: "md:col-span-1 lg:col-span-3",
    },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Proactively Managed IT Solutions"
        description="We design end-to-end solutions for organizations to have a technology edge and stay ahead of the curve while running operations seamlessly."
        badge="OUR SERVICES"
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </PageHero>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group ${srv.span}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${srv.color}`}
                >
                  <srv.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {srv.title}
                </h3>
                <ul className="space-y-4">
                  {srv.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-600 font-medium"
                    >
                      <CheckCircle2
                        className={`w-5 h-5 ${srv.color.split(" ")[1]}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
