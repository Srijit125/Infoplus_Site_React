import { PageHero } from "../components/shared/PageHero";
import { Users, Target, Shield, Globe2 } from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function About() {
  const stats = [
    { label: "Founded",          value: "2006"  },
    { label: "Global Offices",   value: "3"     },
    { label: "Enterprise Clients", value: "500+" },
    { label: "Team Members",     value: "1,200+" },
  ];

  const culture = [
    { icon: Target,  title: "Mission Driven",    desc: "We follow the golden circle of Why, How, and What." },
    { icon: Shield,  title: "Quality First",      desc: "We put quality first to deliver WOW services to all our clients." },
    { icon: Users,   title: "Customer Empathy",   desc: "Developing strong client relationships through deep understanding." },
    { icon: Globe2,  title: "Global Reach",       desc: "Headquartered in UK with presence in Germany and India." },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="We are shaping the future of digital"
        description="Infoplus Technologies UK Ltd is a forward-looking Information technology company focused on building products, services, staffing, consulting, and digital transformation."
        badge="ABOUT US"
        variant="split"
        image="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3Jwb3JhdGUlMjBUZWFtJTIwTW9kZXJufGVufDF8fHx8MTc4MTUyNzMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
      >
        <div className="grid grid-cols-2 gap-8 mt-12">
          {stats.map((stat, i) => (
            <div key={i} className="border-l-2 border-[#6128a6] pl-4">
              <div className="text-3xl font-black text-[#111111] mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-[#555555] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Culture & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-widest mb-3 block">
                Who We Are
              </span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-5">
                Our Culture &amp; Vision
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-3xl text-justify">
                We combine the power of technology with our culture: Quality,
                Innovation, and customer empathy. Infoplus Technologies UK Ltd is
                at the forefront in providing a comprehensive portfolio of services
                to cater to the needs of clients' strategies in the evolving world
                of digital.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 100}>
                <div className="group p-8 bg-[#f8f5ff] border border-[#e5e4e7] rounded-2xl hover:border-[#aa3bff]/30 hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#ecdaff] transition-colors">
                    <item.icon className="w-6 h-6 text-[#6128a6]" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#111111] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#555555] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
