import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Clock, Zap, Users, Database, Globe,
  FileText, RefreshCcw, UserCheck, Network,
  CheckCircle2, ArrowRight, ChevronRight, Briefcase,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type StaffingModel = {
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  tag: string;
  title: string;
  desc: string;
};

type ApproachStep = {
  step: string;
  title: string;
  bullets: string[];
};

const STATS = [
  { icon: Briefcase, value: "1", label: "Dedicated BRM + Account Manager per client" },
  { icon: Clock,     value: "8h",  label: "CV response lead time" },
  { icon: Zap,       value: "1d",  label: "Candidate deployment time" },
  { icon: Database,  value: "100K+", label: "Profiles in internal database" },
  { icon: Globe,     value: "10",  label: "Dedicated global staffing offices" },
];

const STAFFING_MODELS: StaffingModel[] = [
  {
    icon: FileText,
    gradient: "from-[#381f55] to-[#6128a6]",
    accentColor: "#aa3bff",
    tag: "Model 01",
    title: "Contract Staffing",
    desc: "When you need to quickly ramp up projects, Infoplus Technologies provides cost-efficient and right candidates who can fit the bill to get the job done. Our contract staffing services help accomplish your goals without adding employee headcount and associated long-term costs.",
  },
  {
    icon: RefreshCcw,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    accentColor: "#93c5fd",
    tag: "Model 02",
    title: "Contract to Hire",
    desc: "At Infoplus Technologies, we provide flexibility to hire contractors deployed in your projects temporarily. The contractor can become your permanent employee in the future if you are interested in converting the temporary position into permanent employment.",
  },
  {
    icon: UserCheck,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    accentColor: "#5eead4",
    tag: "Model 03",
    title: "Permanent Placement",
    desc: "It is inevitable that every organisation will need to increase staff for new business or replace an employee due to reorg or restructuring. Infoplus comes handy here a business relationship manager with strong technical talent works with the client on an end-to-end process.",
  },
  {
    icon: Network,
    gradient: "from-[#78350f] to-[#f59e0b]",
    accentColor: "#fcd34d",
    tag: "Model 04",
    title: "Partnership Programme",
    desc: "We strongly believe in the right partnerships that are pioneers in the IT staffing process. For this, we run a recruitment partner programme. If you meet the criteria and are interested, please fill in the details on the contact page so that our expert will get in touch with you.",
  },
];

const STAFFING_ACTIVITIES = {
  core: [
    "Recruitment (External & Internal)",
    "Selection and Employment",
    "Decision-Making and Final Match",
  ],
  support: [
    "Legal Compliance",
    "Planning and Job Analysis",
    "Rewards Management",
  ],
};

const COUNTRIES = ["United Kingdom", "United States", "Germany", "Netherlands", "Belgium", "Sweden", "India"];

const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Request Flow",
    bullets: [
      "Request flows from Client to Infoplus Business Relationship Manager",
      "Requirements are Evaluated, Discussed with the Account Manager, and approved by BRM",
      "Finalised Requirement posted on Infoplus Portal by dedicated Team Leader",
    ],
  },
  {
    step: "02",
    title: "Recruiter Assignment",
    bullets: [
      "Recruiters assigned by the associated Account Manager",
      "Automated email goes to assigned Recruiters, all Recruiters, Account Manager, and BRM",
      "Queries raised by Recruiters addressed by the Account Manager",
    ],
  },
  {
    step: "03",
    title: "Search / Hunt Begins",
    bullets: [
      "In-house talent pool and database reviewed first, then external search begins",
      "After stringent assessment, qualified CVs shared with the client as approved by the Manager",
    ],
  },
];

export default function StaffingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="IT Staffing Solutions"
        description="Access skilled IT professionals through Infoplus Technologies UK's staffing solutions. We specialise in placing expert talent across AI, cloud, cyber security, SAP, and software development."
        path="/services/staffing-consulting/it-staffing-solutions"
      />
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PageHero
        title="IT Staffing Solutions"
        description="We Add Value to Our Client's Staffing Requirements"
        badge="STAFFING & CONSULTING"
        variant="centered"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Hire Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Partnership Programme
          </Link>
        </div>
      </PageHero>

      {/* â”€â”€ Stats Strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 bg-white border-b border-[#f0eff5]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {STATS.map(({ icon: SIcon, value, label }, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="group flex flex-col items-center text-center gap-2 p-6 rounded-2xl bg-[#f8f5ff] border border-[#e8e0f7] hover:bg-white hover:shadow-[0_8px_32px_-8px_rgba(97,40,166,0.14)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center mb-1">
                    <SIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[28px] font-black text-[#6128a6] leading-none">{value}</p>
                  <p className="text-[12px] text-[#666] font-medium leading-snug">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Intro â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                20+ Years of Excellence
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Internationally Recognised<br />
                <span className="text-[#6128a6]">Staffing Service Provider</span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                With more than two decades of operation, Infoplus Technologies has grown into an
                internationally recognised staffing service provider because of its innovative
                technical savvy engineering teams. Through a clear vision and a customised plan,
                these teams provide cutting-edge staffing services to all IT companies including
                industry giants, mid-sized companies, and unicorns.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85]">
                We add value to our clients' staffing requirements, coming from different business
                spectrums. We have different engagement models tailored for every business and
                industry need. These engagements are clearly documented and adhered to through
                Master Service Agreements (MSA) highly customisable based on client needs.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#0d0517] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/30 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#aa3bff] mb-5">
                    Our Global Presence
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {COUNTRIES.map((country, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 py-2.5 border-b border-white/8 last:border-0"
                        style={{ animation: `revealFade 400ms ease ${i * 70 + 200}ms both` }}
                      >
                        <Globe className="w-4 h-4 text-[#6128a6] shrink-0" />
                        <span className="text-[13.5px] text-white/70 font-medium">{country}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-white/20 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ Staffing Models Cinematic Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-[#6128a6]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f85d37]/8 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Engagement Models
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">Our Staffing Models</h2>
              <p className="text-[15px] text-white/45 max-w-2xl mx-auto mt-4 leading-relaxed">
                We manage hiring, employment, and payroll while our contractor is busy at your
                location. Swift access to qualified talent with an expert approach to matching the
                right candidate for the right position.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {STAFFING_MODELS.map(({ icon: MIcon, gradient, accentColor, tag, title, desc }, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} direction={isEven ? "left" : "right"} duration={700} delay={60}>
                  <div className="group bg-white/4 border border-white/8 rounded-2xl p-7 hover:bg-white/7 hover:border-[#6128a6]/30 transition-all duration-300 relative overflow-hidden">
                    <div
                      className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-12 transition-opacity duration-500 pointer-events-none"
                      style={{ background: accentColor }}
                    />
                    <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                      <div className="shrink-0">
                        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <MIcon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                            style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}12` }}
                          >
                            {tag}
                          </span>
                        </div>
                        <h3 className="text-[20px] font-bold text-white mb-3 leading-snug">{title}</h3>
                        <p className="text-[14px] text-white/55 leading-relaxed">{desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#aa3bff] group-hover:translate-x-1 transition-all duration-300 shrink-0 self-center hidden sm:block" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€ Core vs Support Activities â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#f8f5ff] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                How We Operate
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-2">
                All Models. Two Task Sets.
              </h2>
              <p className="text-[15px] text-[#555] max-w-xl mx-auto mt-3">
                All our staffing models predominantly implement two different sets of tasks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Core */}
            <ScrollReveal direction="left" duration={700}>
              <div className="bg-white border border-[#e5e4e7] rounded-2xl p-8 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.10)] hover:border-[#6128a6]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#111]">Core Staffing Activities</h3>
                </div>
                <div className="space-y-3">
                  {STAFFING_ACTIVITIES.core.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 bg-[#f8f5ff] rounded-xl border border-[#e8e0f7]"
                      style={{ animation: `revealFade 400ms ease ${i * 80 + 200}ms both` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6128a6] shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-[#333] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Support */}
            <ScrollReveal direction="right" duration={700} delay={100}>
              <div className="bg-white border border-[#e5e4e7] rounded-2xl p-8 hover:shadow-[0_16px_48px_-8px_rgba(248,93,55,0.08)] hover:border-[#f85d37]/25 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#9a2600] to-[#f85d37] flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[18px] font-bold text-[#111]">Support Activities</h3>
                </div>
                <div className="space-y-3">
                  {STAFFING_ACTIVITIES.support.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 bg-[#fff3ef] rounded-xl border border-[#f85d37]/15"
                      style={{ animation: `revealFade 400ms ease ${i * 80 + 200}ms both` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#f85d37] shrink-0 mt-0.5" />
                      <span className="text-[13.5px] text-[#333] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ Our Approach Cinematic Flow â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Process
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-2">Our Approach</h2>
              <p className="text-[15px] text-[#555] max-w-2xl mx-auto mt-4 leading-relaxed">
                Our simple and effective staffing strategy is not just about hiring employees 
                it's about making the best staffing choices to address the core business needs of
                our clients.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-linear-to-b from-[#6128a6] via-[#6128a6]/50 to-transparent lg:left-[27px]" />

            <div className="space-y-3">
              {APPROACH_STEPS.map(({ step, title, bullets }, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 120} duration={680}>
                  <div className="flex gap-6">
                    {/* Circle */}
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center relative z-10 lg:w-14 lg:h-14">
                        <span className="text-[11px] font-black text-white lg:text-[13px]">{step}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-[#f8f5ff] border border-[#e8e0f7] rounded-2xl p-6 hover:bg-white hover:border-[#6128a6]/30 hover:shadow-[0_8px_32px_-8px_rgba(97,40,166,0.12)] transition-all duration-300 group">
                        <h3 className="text-[17px] font-bold text-[#111] mb-4 group-hover:text-[#6128a6] transition-colors">
                          {title}
                        </h3>
                        <div className="space-y-2.5">
                          {bullets.map((b, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <ChevronRight className="w-4 h-4 text-[#6128a6] shrink-0 mt-0.5" />
                              <p className="text-[13.5px] text-[#555] leading-relaxed">{b}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
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
                  Find Your Next Hire
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  The Right Talent.<br className="hidden md:block" />
                  The Right Time.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd for your IT staffing needs. With 100K+
                  profiles, 10 global offices, and 1-day deployment we're ready when you are.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start Hiring Today
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
                  >
                    Email Our Staffing Team
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

