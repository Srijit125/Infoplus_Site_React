import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  Rocket,
  Database,
  Cpu,
  ChevronRight,
  TrendingUp,
  Zap,
  BarChart3,
  CheckCircle2,
  Layers,
  RefreshCw,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

/* â”€â”€ Services â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SERVICES = [
  {
    icon: TrendingUp,
    title: "Enterprise Transformations",
    href: "/services/new-generation/enterprise-transformation",
    accent: "#6128a6",
    glow: "rgba(97,40,166,0.22)",
    desc: "Our Generation Z engineers in the digital transformation team specialise in re-architecting and modernising legacy systems into agile, lean platforms. We guide organisations through every phase strategy, roadmap, execution, and change management so transformation is lasting, not just surface-level.",
    highlights: ["Legacy Modernisation", "Change Management", "Agile Adoption", "Digital Roadmaps"],
  },
  {
    icon: Database,
    title: "Everything Data",
    href: "/services/new-generation/everything-data",
    accent: "#aa3bff",
    glow: "rgba(170,59,255,0.22)",
    desc: "Using data is NO longer limited to big companies. It is now widely accessible and the primary driver of competitive advantage. Infoplus helps organisations build end-to-end data pipelines, analytics platforms, and governance frameworks that turn raw data into strategic business intelligence at scale.",
    highlights: ["Data Pipelines", "Analytics Platforms", "Data Governance", "BI & Reporting"],
  },
  {
    icon: Cpu,
    title: "Automation",
    href: "/services/new-generation/automation",
    accent: "#f85d37",
    glow: "rgba(248,93,55,0.22)",
    desc: "Automation is the next critical step in IT maturity, building the bridge between today's operations and tomorrow's intelligent enterprise. Infoplus designs and implements RPA, intelligent process automation, and AI-driven workflow solutions that eliminate manual bottlenecks and free your teams for higher-value work.",
    highlights: ["RPA Implementation", "Intelligent Workflows", "Process Mining", "AI Automation"],
  },
];

/* â”€â”€ Stats â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const STATS = [
  { value: "3",   label: "New-Gen Service Verticals",   color: "#aa3bff" },
  { value: "CoE", label: "Digital Center of Excellence", color: "#f85d37" },
  { value: "16%", label: "Projected Efficiency Gain",   color: "#aa3bff" },
  { value: "0",   label: "Tolerance for Legacy Drag",   color: "#f85d37" },
];

/* â”€â”€ Why next-gen â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const WHY_NEXTGEN = [
  { icon: Rocket,    label: "Ahead of the Curve",    sub: "Stay ahead of competitors who delay" },
  { icon: RefreshCw, label: "Legacy to Agile",       sub: "Streamline outdated models into lean" },
  { icon: Globe,     label: "Market Position",       sub: "Protect your market share proactively" },
  { icon: Layers,    label: "Modern Solutions",      sub: "Transformation-centric methodologies" },
];

export default function NewGenServicesPage() {
  return (
    <div className="w-full">
      <PageMeta
        title="New Generation IT Services"
        description="Lead your digital future with Infoplus Technologies UK's new generation services enterprise transformation, data analytics, and intelligent automation for the modern enterprise."
        path="/services/new-generation"
      />
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PageHero
        badge="NEW-GEN SOLUTIONS"
        title="We are Providing the Best Solutions for Clients"
        description="Business goals and technologies are changing at unprecedented speed. Organisations that fail to implement next-generation innovative solutions will lose their market position. Our Digital CoE team keeps you ahead."
        variant="gradient"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
          >
            Start Transforming
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-[14px] transition-all duration-200"
          >
            All Services
          </Link>
        </div>
      </PageHero>

      {/* â”€â”€ Intro + Why New-Gen â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  The Imperative
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0d0517] leading-tight mb-6">
                  Adapt at speed or&nbsp;
                  <span className="text-[#6128a6]">lose the race.</span>
                </h2>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed mb-5 text-justify">
                  Business goals and technologies are changing at an unprecedented speed, which requires companies
                  to adapt to the latest solutions continuously. Organisations that fail to implement next-generation,
                  innovative solutions will lose their space in the market in NO time.
                </p>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed mb-5 text-justify">
                  We at Infoplus Technologies UK Ltd are pleased to inform you that our Digital Center of Excellence
                  team can help organisations to stay ahead of the competition through our modern solutions and
                  committed expert engineers.
                </p>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed text-justify">
                  By implementing transformation-centric methodologies, we streamline legacy models and solutions
                  into more agile and lean platforms ready for the future.
                </p>
              </div>
            </ScrollReveal>

            {/* Why next-gen grid */}
            <ScrollReveal direction="right" delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {WHY_NEXTGEN.map((w, i) => (
                  <div
                    key={w.label}
                    className="group bg-white border border-[#ecdaff] rounded-2xl p-6 hover:border-[#6128a6]/35 hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] transition-all duration-300"
                    style={{ animation: `revealFade 400ms ease ${i * 80 + 200}ms both` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#6128a6]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <w.icon className="w-5 h-5 text-[#6128a6]" />
                    </div>
                    <p className="text-[14px] font-bold text-[#0d0517] mb-1">{w.label}</p>
                    <p className="text-[12px] text-[#0d0517]/50">{w.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ Stats â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-14 bg-[#1e0a38] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 80}>
                <div className="text-center">
                  <p className="text-[clamp(2rem,4vw,3rem)] font-black leading-none mb-2" style={{ color: s.color }}>
                    {s.value}
                  </p>
                  <p className="text-[13px] text-white/50">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Services Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-35 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#6128a6] opacity-15 blur-[110px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Services
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                Three pillars of&nbsp;
                <span className="text-[#aa3bff]">next-gen innovation</span>
              </h2>
              <p className="text-[15px] text-white/50 mt-4 max-w-2xl mx-auto">
                Each service is delivered by our Digital CoE specialist engineers who live at the intersection of
                strategy and execution. Click any service to explore in depth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.title} variant="card" delay={i * 100}>
                <Link
                  to={svc.href}
                  className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-opacity-60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-400 overflow-hidden"
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ background: `radial-gradient(ellipse at 20% 20%, ${svc.glow} 0%, transparent 65%)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${svc.accent}20`, color: svc.accent }}
                  >
                    <svc.icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[19px] font-bold mb-2"
                    style={{ color: svc.accent }}
                  >
                    {svc.title}
                  </h3>
                  <div
                    className="w-8 h-0.5 rounded-full mb-5 group-hover:w-16 transition-all duration-400"
                    style={{ backgroundColor: `${svc.accent}60` }}
                  />

                  {/* Description */}
                  <p className="text-[14px] text-white/55 leading-relaxed flex-1 group-hover:text-white/70 transition-colors duration-300">
                    {svc.desc}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {svc.highlights.map((h, hi) => (
                      <div
                        key={h}
                        className="flex items-center gap-1.5"
                        style={{ animation: `revealFade 300ms ease ${hi * 50 + 200}ms both` }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: svc.accent }} />
                        <span className="text-[12px] text-white/45 leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <div
                    className="mt-6 flex items-center gap-1.5 text-[13px] font-semibold"
                    style={{ color: svc.accent }}
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Digital CoE spotlight â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#f8f5ff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Data-Driven Decisions",
                desc: "Every transformation recommendation is backed by data, not assumptions. We measure outcomes and iterate continuously.",
                accent: "#6128a6",
              },
              {
                icon: Zap,
                title: "Speed of Execution",
                desc: "Transformation-centric methodologies let us move fast without sacrificing quality agile by design, not just by name.",
                accent: "#aa3bff",
              },
              {
                icon: Globe,
                title: "Future-Ready Architecture",
                desc: "Solutions are built with extensibility at their core, ensuring your platform can evolve as quickly as your business does.",
                accent: "#f85d37",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} variant="card" delay={i * 100}>
                <div className="group bg-white border border-[#ecdaff] rounded-3xl p-8 hover:border-[#6128a6]/30 hover:shadow-[0_12px_40px_rgba(97,40,166,0.10)] transition-all duration-400 h-full">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${card.accent}12`, color: card.accent }}
                  >
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0d0517] mb-3">{card.title}</h3>
                  <p className="text-[14px] text-[#0d0517]/60 leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-40 blur-[130px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#1e0a38] via-[#381f55] to-[#6128a6] rounded-3xl p-10 md:p-14 text-center overflow-hidden shadow-[0_32px_80px_rgba(97,40,166,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-80 h-80 rounded-full bg-[#aa3bff] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-[#f85d37] opacity-12 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Digital CoE
              </span>
              <h2 className="relative z-10 text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white leading-tight mb-5">
                Ready to become a next-gen organisation?
              </h2>
              <p className="relative z-10 text-[15px] text-white/60 mb-10 max-w-2xl mx-auto">
                Our Digital CoE experts are standing by to assess your current state, define your target
                architecture, and build a transformation roadmap that delivers real, measurable results.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                >
                  Talk to Our CoE Team
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-[15px] transition-all duration-200"
                >
                  All Service Areas
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}


