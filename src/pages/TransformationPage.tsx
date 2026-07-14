import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Settings,
  Users,
  Zap,
  Network,
  Server,
  RefreshCcw,
  ArrowRight,
  ChevronRight,
  Target,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type Goal = {
  num: string;
  icon: LucideIcon;
  gradient: string;
  title: string;
  desc: string;
};
type Pillar = {
  label: string;
  desc: string;
  gradient: string;
  icon: LucideIcon;
};

const GOALS: Goal[] = [
  {
    num: "01",
    icon: Settings,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "Optimise Internal Processes",
    desc: "Streamline and automate internal workflows to eliminate waste, reduce operational costs, and free teams to focus on high-value work.",
  },
  {
    num: "02",
    icon: Users,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Improve Digital Customer Experience",
    desc: "Create seamless, personalised digital interactions that delight customers at every touchpoint across all channels and devices.",
  },
  {
    num: "03",
    icon: Zap,
    gradient: "from-[#9a2600] to-[#f85d37]",
    title: "Create a New Digital Business Model",
    desc: "Reimagine how your organisation creates, delivers, and captures value through digital-first, platform-enabled business models.",
  },
  {
    num: "04",
    icon: RefreshCcw,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Establish an Agile & Innovative Culture",
    desc: "Build an organisational culture that embraces change, encourages experimentation, and rewards innovation at every level of the business.",
  },
  {
    num: "05",
    icon: Network,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "Launch New Value Networks & Ecosystems",
    desc: "Extend reach by participating in and leading digital ecosystems that create new opportunities, partnerships, and revenue streams.",
  },
];

const PILLARS: Pillar[] = [
  {
    label: "Information",
    desc: "Unifying data across the enterprise for a single source of truth and intelligent decision-making",
    gradient: "from-[#381f55] to-[#6128a6]",
    icon: Server,
  },
  {
    label: "Process",
    desc: "Streamlining workflows with intelligent automation and smart orchestration layers",
    gradient: "from-[#9a2600] to-[#f85d37]",
    icon: Settings,
  },
  {
    label: "Work",
    desc: "Modernising how teams collaborate, deliver outcomes, and continuously innovate together",
    gradient: "from-[#0f766e] to-[#14b8a6]",
    icon: Zap,
  },
  {
    label: "People",
    desc: "Building digital literacy and agile mindsets throughout every layer of the organisation",
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    icon: Users,
  },
];

const STRATEGY_STEPS = [
  {
    title: "Digital Maturity Assessment",
    desc: "Perform a Digital Maturity Assessment against five key areas: Vision, Culture, Adoption, Execution, and Growth.",
  },
  {
    title: "Provide Recommendations",
    desc: 'Provide clear, prioritised recommendations based on the "Digital Maturity Assessment Report" findings.',
  },
  {
    title: "Develop a Digital Strategy",
    desc: "Develop a comprehensive Digital Strategy considering the above recommendations and business context.",
  },
  {
    title: "Build a Delivery Team",
    desc: "Assemble and onboard a dedicated team to deliver the agreed digital strategy and roadmap.",
  },
  {
    title: "Tribe Delivery Model",
    desc: "The tribe works closely with the client, based on the agreed resourcing and collaboration model.",
  },
  {
    title: "Validate & Scale",
    desc: "Validate that the enterprise is an Agile Enterprise by creating a sustainable Digital Core and penetrating Digital Literacy.",
  },
];

const MATURITY_AREAS = ["Vision", "Culture", "Adoption", "Execution", "Growth"];

export default function TransformationPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Enterprise Digital Transformation Services"
        description="Accelerate your digital journey with Infoplus Technologies UK's enterprise transformation services. We help organisations modernise, innovate, and thrive in a digital landscape."
        path="/services/new-generation/enterprise-transformation"
      />
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PageHero
        title="Enterprise Transformation"
        description="We Enable Digital Across the World"
        badge="NEW-GEN SERVICES"
        variant="centered"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Start Your Transformation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
        {/* 20 Success Factors badge */}
        <div className="mt-10 flex items-center justify-center">
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white/70 text-[12px] font-semibold">
            <span className="w-6 h-6 rounded-full bg-[#f85d37] flex items-center justify-center text-[10px] font-black text-white">
              20
            </span>
            Carefully devised success factors for Digital Transformation
          </span>
        </div>
      </PageHero>

      {/* â”€â”€ Intro â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Generation Z Engineering
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Digital is Not a Tool.
                <br />
                <span className="text-[#6128a6]">
                  It's an Organisation-Wide Mindset.
                </span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Our Generation Z engineers in the digital transformation team
                strongly believe that for today's enterprise, adapting to the
                latest technologies is not enough it's about using "digital"
                across the entire organisation. We enable digital across the
                world by integrating Information, Process, Work, and People.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85]">
                It is a known fact that transformations are hard, and digital
                ones are even harder. But we have carefully devised 20 success
                factors to make Digital Transformations successful for the
                first time and every time.
              </p>
            </ScrollReveal>

            {/* Maturity Areas card */}
            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#0d0517] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/30 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#aa3bff] mb-5">
                    5 Digital Maturity Areas
                  </p>
                  <div className="space-y-3 mb-7">
                    {MATURITY_AREAS.map((area, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                        style={{
                          animation: `revealFade 400ms ease ${i * 90 + 200}ms both`,
                        }}
                      >
                        <div
                          className="h-2 rounded-full bg-linear-to-r from-[#6128a6] to-[#aa3bff] transition-all duration-300"
                          style={{ width: `${100 - i * 8}%` }}
                        />
                        <span className="text-[13px] text-white/65 font-medium shrink-0">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-6 text-center">
                    <p className="text-[32px] font-black text-white leading-none">
                      20
                    </p>
                    <p className="text-[12px] text-white/35 mt-1">
                      Transformation Success Factors
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ 4 Integration Pillars â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-96 h-96 rounded-full bg-[#6128a6]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-80 h-80 rounded-full bg-[#f85d37]/10 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                How We Enable Digital
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">
                Integrating 4 Core Dimensions
              </h2>
              <p className="text-[15px] text-white/45 max-w-xl mx-auto mt-4">
                We enable digital across the world by integrating Information,
                Process, Work, and People.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map(({ label, desc, gradient, icon: PIcon }, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                variant="card"
                delay={i * 100}
              >
                <div className="group bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/8 hover:border-[#6128a6]/35 transition-all duration-300 h-full text-center flex flex-col items-center">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <PIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[18px] font-black text-white mb-3">
                    {label}
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed flex-1">
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Top 5 Goals Cinematic numbered cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#ecdaff]/60 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Strategic Goals
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Our Top 5 Goals
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {GOALS.map(({ num, icon: GIcon, gradient, title, desc }, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal
                  key={i}
                  direction={isEven ? "left" : "right"}
                  duration={700}
                  delay={60}
                >
                  <div className="group bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#6128a6]/25 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.10)] hover:-translate-y-0.5 transition-all duration-300">
                    <div className={`h-1 bg-linear-to-r ${gradient}`} />
                    <div className="p-7 flex flex-col sm:flex-row gap-5 items-start">
                      {/* Icon + Number */}
                      <div className="shrink-0 flex items-center gap-4">
                        <div
                          className={`w-13 h-13 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <GIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[40px] font-black text-[#f0eff5] leading-none select-none">
                          {num}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[18px] font-bold text-[#111] mb-2 group-hover:text-[#6128a6] transition-colors leading-snug">
                          {title}
                        </h3>
                        <p className="text-[14px] text-[#666] leading-relaxed">
                          {desc}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#ccc] group-hover:text-[#6128a6] group-hover:translate-x-1 transition-all duration-300 shrink-0 self-center hidden sm:block" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€ Strategy 6-Step Vertical Timeline â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Sticky heading */}
            <div className="lg:sticky lg:top-[120px]">
              <ScrollReveal direction="left" duration={720}>
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Our Approach
                </span>
                <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                  Our Digital
                  <br />
                  <span className="text-[#6128a6]">
                    Transformation Strategy
                  </span>
                </h2>
                <p className="text-[15.5px] text-[#555] leading-[1.85]">
                  A proven six-step approach to make your digital transformation
                  successful from initial assessment through to validated,
                  scalable execution.
                </p>
                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-[#6128a6]">
                  <Target className="w-4 h-4" />
                  Assessed across 5 Maturity Dimensions
                </div>
              </ScrollReveal>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-linear-to-b from-[#6128a6] via-[#6128a6]/50 to-transparent lg:left-[27px]" />
              <div className="space-y-3">
                {STRATEGY_STEPS.map(({ title, desc }, i) => (
                  <ScrollReveal
                    key={i}
                    direction="right"
                    delay={i * 100}
                    duration={660}
                  >
                    <div className="flex gap-6 group">
                      <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 lg:w-14 lg:h-14">
                          <span className="text-[11px] font-black text-white lg:text-[13px]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 pb-5">
                        <div className="bg-[#f8f5ff] border border-[#e8e0f7] rounded-2xl p-5 group-hover:bg-white group-hover:border-[#6128a6]/30 group-hover:shadow-[0_8px_32px_-8px_rgba(97,40,166,0.12)] transition-all duration-300">
                          <h3 className="text-[15px] font-bold text-[#111] mb-2 group-hover:text-[#6128a6] transition-colors">
                            {title}
                          </h3>
                          <p className="text-[13px] text-[#555] leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0d0517] to-[#381f55] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Begin Your Digital Journey
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Transform Your Enterprise.
                  <br className="hidden md:block" />
                  Lead the Digital Era.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd to drive a
                  successful digital transformation guided by 20 proven
                  success factors and our Generation Z engineers.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start a Maturity Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
                  >
                    Email Our Team
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

