import { PageHero } from "../components/shared/PageHero";
import { Users, Target, Shield, Globe2 } from "lucide-react";

function About() {
  const stats = [
    { label: "Founded", value: "2006" },
    { label: "Global Offices", value: "3" },
    { label: "Enterprise Clients", value: "500+" },
    { label: "Team Members", value: "1,200+" },
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
            <div key={i} className="border-l-2 border-blue-600 pl-4">
              <div className="text-3xl font-black text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Culture & Vision
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We combine the power of technology with our culture: Quality,
              Innovation, and customer empathy. Infoplus Technologies UK Ltd is
              at the forefront in providing a comprehensive portfolio of
              services to cater to the needs of clients' strategies in the
              evolving world of digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Mission Driven",
                desc: "We follow the golden circle of Why, How, and What.",
              },
              {
                icon: Shield,
                title: "Quality First",
                desc: "We put quality first to deliver WOW services to all our clients.",
              },
              {
                icon: Users,
                title: "Customer Empathy",
                desc: "Developing strong client relationships through deep understanding.",
              },
              {
                icon: Globe2,
                title: "Global Reach",
                desc: "Headquartered in UK with presence in Germany and India.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <item.icon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
