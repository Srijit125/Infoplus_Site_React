import { PageHero } from "../components/shared/PageHero";
import { Coffee, Heart, Globe, Zap } from "lucide-react";
import CareerPosting from "../components/ui/CareerPosting";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function CareersPage() {
  const perks = [
    { icon: Heart,  title: "Health & Wellbeing", desc: "Comprehensive coverage for you and your family." },
    { icon: Globe,  title: "Work Anywhere",       desc: "Flexible remote work and global office access." },
    { icon: Zap,    title: "Learning Budget",     desc: "Annual stipend for courses, books, and conferences." },
    { icon: Coffee, title: "Team Retreats",       desc: "Biannual gatherings to connect and celebrate." },
  ];

  const positions = [
    { role: "Senior Frontend Engineer",    team: "Engineering",  location: "Remote / UK" },
    { role: "AI Research Scientist",       team: "Data Science", location: "Germany"    },
    { role: "Product Designer",            team: "Design",       location: "Remote"     },
    { role: "Technical Account Manager",   team: "Sales",        location: "India"      },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Do the best work of your life"
        description="Join a global team of passionate builders, thinkers, and innovators dedicated to shaping the digital landscape."
        badge="CAREERS"
        variant="split"
        image="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBUZWNoJTIwV29ya3NwYWNlfGVufDF8fHx8MTc4MTUyNzMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
      >
        <div className="mt-8">
          <button className="bg-[#f85d37] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#e04f2c] transition-colors shadow-lg shadow-[#f85d37]/30">
            View Open Roles
          </button>
        </div>
      </PageHero>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Why work with us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <ScrollReveal direction="left">
              <div>
                <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-widest mb-3 block">
                  Why Us
                </span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-5">
                  Why work with us?
                </h2>
                <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                  We believe that great work happens when you're happy, healthy,
                  and challenged. We've built a culture that prioritises autonomy,
                  continuous learning, and cross-border collaboration.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {perks.map((perk, i) => (
                <ScrollReveal key={i} variant="card" delay={i * 90}>
                  <div className="group p-6 bg-[#f8f5ff] border border-[#e5e4e7] rounded-2xl hover:border-[#aa3bff]/30 hover:shadow-[0_8px_24px_rgba(97,40,166,0.09)] transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:bg-[#ecdaff] transition-colors">
                      <perk.icon className="w-5 h-5 text-[#6128a6]" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#111111] mb-2">{perk.title}</h3>
                    <p className="text-[13px] text-[#555555] leading-relaxed">{perk.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Open positions */}
          <ScrollReveal direction="up">
            <div className="mb-8">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-widest mb-3 block">
                Join Us
              </span>
              <h2 className="text-[36px] font-bold text-[#111111]">Open Positions</h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {positions.map((job, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <CareerPosting job={job} idx={idx} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default CareersPage;
