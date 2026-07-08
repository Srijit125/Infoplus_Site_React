import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import {
  Users, Target, Shield, Globe2,
  RefreshCw, TrendingUp, BarChart2, Star, Compass,
  CheckCircle2, ArrowRight, Eye,
} from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function About() {
  /* ── Existing data (kept) ─────────────────────────── */
  const stats = [
    { label: "Founded",           value: "2006"   },
    { label: "Global Offices",    value: "3"      },
    { label: "Enterprise Clients", value: "500+"  },
    { label: "Team Members",      value: "1,200+" },
  ];

  const cultureCards = [
    { icon: Target, title: "Mission Driven",  desc: "We follow the golden circle of Why, How, and What." },
    { icon: Shield, title: "Quality First",   desc: "We put quality first to deliver WOW services to all our clients." },
    { icon: Users,  title: "Customer Empathy", desc: "Developing strong client relationships through deep understanding." },
    { icon: Globe2, title: "Global Reach",    desc: "Headquartered in UK with presence in Germany and India." },
  ];

  /* ── New data ─────────────────────────────────────── */
  const values = [
    { icon: RefreshCw,  title: "Flexibility",        desc: "We are open to change and maintaining flexibility." },
    { icon: Compass,    title: "Planning",            desc: "We follow the golden circle of Why, How, and What." },
    { icon: TrendingUp, title: "Performance",         desc: "We value our people, encourage their development and reward their performance." },
    { icon: Users,      title: "Business Growth",     desc: "We develop client relationships through customer empathy." },
    { icon: Star,       title: "Quality",             desc: "We put quality first to deliver WOW services." },
    { icon: BarChart2,  title: "Financial Planning",  desc: "Provide visible positive contribution to the client's IT growth strategy." },
  ];

  const keyStats = [
    { val: "16+",  label: "Countries"     },
    { val: "120+", label: "Customers"     },
    { val: "20+",  label: "Years"         },
    { val: "2",    label: "Global Offices" },
  ];

  const factBullets = [
    "Operating in 16 Countries.",
    "Preferred IT partner for many leading organizations.",
    "2 Decades with 120+ customers.",
    "State-of-art infrastructure in the UK and India.",
  ];

  const partnerBenefits = [
    "More Business opportunities",
    "Bridging the gap in expertise and knowledge",
    "New perspective",
    "Enhance MVP turnaround time",
    "Realize the benefits of their IT strategy sooner",
    "Augment their service offerings",
  ];

  return (
    <div className="w-full">
      <PageMeta
        title="About Infoplus Technologies UK"
        description="Learn about Infoplus Technologies UK — a global IT company founded in 2006 with offices worldwide, delivering managed IT services, AI, cloud computing, and digital transformation."
        path="/about"
      />

      {/* ── 1. HERO (EXISTING) ─────────────────────────── */}
      <PageHero
        title="We are shaping the future of digital"
        description="Infoplus Technologies UK Ltd is a forward-looking Information technology company focused on building products, services, staffing, consulting, and digital transformation."
        badge="ABOUT US"
        variant="split"
        image="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb3Jwb3JhdGUlMjBUZWFtJTIwTW9kZXJufGVufDF8fHx8MTc4MTUyNzMxNHww&ixlib=rb-4.1.0&q=80&w=1080"
      >
        <div className="grid grid-cols-2 gap-8 mt-12">
          {stats.map((stat, i) => (
            <div key={i} className="border-l-2 border-[#aa3bff] pl-4">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── 2. WHO WE ARE (NEW) ────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left decorative year */}
            <ScrollReveal direction="left" className="lg:col-span-4">
              <div className="relative">
                <div className="text-[9rem] font-black leading-none text-[#f0ecf8] select-none pointer-events-none">2000</div>
                <div className="absolute inset-0 flex flex-col justify-center pl-2">
                  <span className="inline-block bg-[#f85d37] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 w-fit">
                    Born in 2000
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-[#6128a6]" />
                      <span className="text-[#6128a6] text-sm font-semibold">United Kingdom HQ</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-[#f85d37]" />
                      <span className="text-[#555555] text-sm">Borehamwood</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right content */}
            <ScrollReveal direction="right" className="lg:col-span-8">
              <div>
                <span className="text-[#f85d37] text-[11px] font-bold uppercase tracking-widest mb-3 block">
                  Who We Are
                </span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-7">
                  Born in 2000, Built for Tomorrow
                </h2>
                <div className="space-y-5">
                  <p className="text-[16px] text-[#555555] leading-[1.8] text-justify">
                    Born in 2000, Infoplus Technologies UK Ltd is a forward-looking Information technology company focused on building products, services, staffing, consulting, and digital transformation, needed for next-generation. We combine the power of technology with our culture: Quality, Innovation, and customer empathy, Infoplus Technologies UK Ltd is at the forefront in providing a comprehensive portfolio of services to cater to the needs of clients&apos; strategies in the evolving world of digital.
                  </p>
                  <p className="text-[16px] text-[#555555] leading-[1.8] text-justify">
                    Headquartered at Borehamwood, United Kingdom, we challenge industry norms by holding ourselves accountable through our fixed-price and ongoing service contract methods, with a unique performance-pricing model.
                  </p>
                </div>

                {/* Accent blockquote */}
                <div className="mt-8 pl-5 border-l-4 border-[#aa3bff] bg-[#f8f5ff] rounded-r-2xl py-4 pr-6">
                  <p className="text-[15px] text-[#381f55] font-semibold leading-relaxed italic">
                    "Combining the power of technology with Quality, Innovation, and customer empathy — at the forefront of the evolving digital world."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. OUR VALUES (NEW) ────────────────────────── */}
      <section className="py-24 bg-[#1e0a38] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#6128a6] opacity-20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#f85d37] opacity-10 rounded-full blur-[80px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Values
              </span>
              <h2 className="text-[36px] font-bold text-white mb-4">What Drives Us Forward</h2>
              <p className="text-white/50 text-[16px] max-w-2xl mx-auto">
                The principles that guide every decision, relationship, and product we build.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 90}>
                <div className="group h-full bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#aa3bff]/50 hover:shadow-[0_16px_40px_rgba(170,59,255,0.10)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#6128a6] to-[#aa3bff] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <val.icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-3">{val.title}</h3>
                  <p className="text-white/55 text-[14px] leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FACTS / MISSION / VISION (NEW) ─────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[11px] font-bold uppercase tracking-widest mb-3 block">Facts</span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-4">Two Decades of Excellence</h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-2xl">
                As an end-to-end IT Service provider, we have the privilege of growing with our clients, partners, and employees, organically, over the last two decades by religiously practicing our core values.
              </p>
            </div>
          </ScrollReveal>

          {/* Key stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {keyStats.map((stat, i) => (
              <ScrollReveal key={i} variant="card" delay={i * 80}>
                <div className="text-center p-8 bg-white rounded-2xl border border-[#e5e4e7] shadow-sm hover:border-[#6128a6]/30 hover:shadow-[0_8px_24px_rgba(97,40,166,0.08)] transition-all duration-300">
                  <div className="text-[48px] font-black text-[#6128a6] leading-none mb-2">{stat.val}</div>
                  <div className="text-[12px] font-semibold text-[#555555] uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <ScrollReveal direction="left">
              <div className="group h-full bg-white border border-[#e5e4e7] p-10 rounded-2xl hover:border-[#f85d37]/40 hover:shadow-[0_12px_40px_rgba(248,93,55,0.08)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#fff3ef] flex items-center justify-center mb-6 group-hover:bg-[#f85d37] transition-colors duration-300">
                  <Target className="w-6 h-6 text-[#f85d37] group-hover:text-white transition-colors duration-300" strokeWidth={1.6} />
                </div>
                <h3 className="text-[22px] font-bold text-[#111111] mb-4">Mission</h3>
                <p className="text-[15px] text-[#555555] leading-[1.8]">
                  Provide visible positive contribution to the client&apos;s IT growth strategy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="group h-full bg-white border border-[#e5e4e7] p-10 rounded-2xl hover:border-[#6128a6]/40 hover:shadow-[0_12px_40px_rgba(97,40,166,0.08)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#ecdaff] flex items-center justify-center mb-6 group-hover:bg-[#6128a6] transition-colors duration-300">
                  <Eye className="w-6 h-6 text-[#6128a6] group-hover:text-white transition-colors duration-300" strokeWidth={1.6} />
                </div>
                <h3 className="text-[22px] font-bold text-[#111111] mb-4">Vision</h3>
                <p className="text-[15px] text-[#555555] leading-[1.8]">
                  Build the best IT product and service, use innovation in engineering and development, implement the highest standards of quality and ethical practices.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Fact bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {factBullets.map((fact, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="flex items-center gap-4 bg-white border border-[#e5e4e7] px-5 py-4 rounded-xl hover:border-[#6128a6]/30 hover:shadow-sm transition-all duration-300">
                  <div className="w-7 h-7 rounded-lg bg-[#ecdaff] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#6128a6]" />
                  </div>
                  <span className="text-[15px] font-medium text-[#111111]">{fact}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. CULTURE & VISION CARDS (EXISTING — kept) ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[11px] font-bold uppercase tracking-widest mb-3 block">
                Who We Are
              </span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-5">
                Our Culture &amp; Vision
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-3xl text-justify">
                We combine the power of technology with our culture: Quality, Innovation, and customer empathy. Infoplus Technologies UK Ltd is at the forefront in providing a comprehensive portfolio of services to cater to the needs of clients&apos; strategies in the evolving world of digital.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureCards.map((item, idx) => (
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

      {/* ── 6. CULTURE TEXT (NEW) ──────────────────────── */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#6128a6] opacity-15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f85d37] opacity-[0.07] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left decorative card */}
            <ScrollReveal direction="left">
              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-10 overflow-hidden min-h-[400px] flex flex-col justify-between">
                <div className="absolute -top-6 -right-6 text-[7rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                  Culture
                </div>
                <div className="relative z-10 space-y-5">
                  {["Collaboration", "Future Thinking", "Risk-Taking", "Client-Focused", "Innovation"].map((val, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#aa3bff] shrink-0" />
                      <span className="text-white/75 text-[17px] font-medium">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/40 text-[14px] italic leading-relaxed">
                    "We celebrate success and look to improve it constantly."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right text */}
            <ScrollReveal direction="right">
              <div>
                <span className="text-[#f85d37] text-[11px] font-bold uppercase tracking-widest mb-3 block">
                  Our Culture
                </span>
                <h2 className="text-[36px] font-bold text-white mb-7">
                  Our Most Valuable Resource
                </h2>
                <p className="text-[16px] text-white/60 leading-[1.85] text-justify">
                  At Infoplus Technologies UK Ltd, our most valuable resource is our people – with a diversified skill set, varied culture, and out-of-the-box options. Our team is client-focused with deep pride in their work. We believe in a culture rooted in collaboration, future thinking, and risk-taking. We hire smart and passionate professionals who thrive to understand the big picture. We celebrate success and look to improve it constantly. We have respect for the commitments we make and try to make every effort to meet or exceed them. We all have fun activities for employees to attend outside of work.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 7. PARTNERSHIPS (NEW) ──────────────────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left intro */}
            <ScrollReveal direction="left">
              <div>
                <span className="text-[#f85d37] text-[11px] font-bold uppercase tracking-widest mb-3 block">
                  Partnerships
                </span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-6">
                  Building Together
                </h2>
                <div className="space-y-5">
                  <p className="text-[16px] text-[#555555] leading-[1.8] text-justify">
                    Right from the inception, we have been identifying and craving for the right partners to drive our next-generation strategy and to answer prevalent business needs. Our service offerings and products across the industries are complimented by our partners.
                  </p>
                  <p className="text-[16px] text-[#555555] leading-[1.8] text-justify">
                    Our partner ecosystem includes go-to-market alliances, specialist partnerships for niche technologies, and partnerships for specific customer requirements; this system allows us to provide best-in-class solutions for our customers&apos; specific requirements.
                  </p>
                  <p className="text-[15px] text-[#6128a6] font-semibold">
                    Through partnerships, we continue to see the following benefits:
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right benefits */}
            <div className="space-y-3">
              {partnerBenefits.map((benefit, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 80}>
                  <div className="flex items-center gap-4 bg-white border border-[#e5e4e7] p-5 rounded-xl hover:border-[#6128a6]/30 hover:shadow-[0_4px_20px_rgba(97,40,166,0.07)] transition-all duration-300 group">
                    <div className="w-9 h-9 rounded-xl bg-[#ecdaff] flex items-center justify-center shrink-0 group-hover:bg-[#6128a6] transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-[#6128a6] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[15px] font-medium text-[#111111]">{benefit}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
