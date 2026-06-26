import { PageHero } from "../components/shared/PageHero";
import { Coffee, Heart, Globe, Zap } from "lucide-react";
import CareerPosting from "../components/ui/CareerPosting";

function CareersPage() {
  const perks = [
    {
      icon: Heart,
      title: "Health & Wellbeing",
      desc: "Comprehensive coverage for you and your family.",
    },
    {
      icon: Globe,
      title: "Work Anywhere",
      desc: "Flexible remote work and global office access.",
    },
    {
      icon: Zap,
      title: "Learning Budget",
      desc: "Annual stipend for courses, books, and conferences.",
    },
    {
      icon: Coffee,
      title: "Team Retreats",
      desc: "Biannual gatherings to connect and celebrate.",
    },
  ];

  const positions = [
    {
      role: "Senior Frontend Engineer",
      team: "Engineering",
      location: "Remote / UK",
    },
    {
      role: "AI Research Scientist",
      team: "Data Science",
      location: "Germany",
    },
    { role: "Product Designer", team: "Design", location: "Remote" },
    { role: "Technical Account Manager", team: "Sales", location: "India" },
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
          <button className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
            View Open Roles
          </button>
        </div>
      </PageHero>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why work with us?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We believe that great work happens when you're happy, healthy,
                and challenged. We've built a culture that prioritizes autonomy,
                continuous learning, and cross-border collaboration.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {perks.map((perk, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl">
                  <perk.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-slate-600">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Open Positions
            </h2>
            <div className="flex flex-col gap-4">
              {positions.map((job, idx) => (
                <CareerPosting job={job} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
