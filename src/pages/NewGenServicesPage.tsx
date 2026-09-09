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
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

/* â"€â"€ Services â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */
const SERVICES = [
  {
    icon: TrendingUp,
    title: "Enterprise Transformations",
    href: "/services/new-generation/enterprise-transformation",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "We help you update old systems and habits so your business runs in a modern way. It's about changing how the whole company operates. Not just adding new tools. The business transforms from the current state to the updated version. And staying up to date.",
    highlights: ["Legacy Modernisation", "Change Management", "Agile Adoption", "Digital Roadmaps"],
  },
  {
    icon: Database,
    title: "Everything Data",
    href: "/services/new-generation/everything-data",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "In this service, we help you understand and use the data your business already has, no matter how big or small you are, so it actually helps you make better decisions. Good decisions need good data, and we make sure your data is actually being used, not ignored.",
    highlights: ["Data Pipelines", "Analytics Platforms", "Data Governance", "BI & Reporting"],
  },
  {
    icon: Cpu,
    title: "Automation",
    href: "/services/new-generation/automation",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "We handle the repetitive, manual tasks so your team can spend on the work that really matters. We take the boring, repeated tasks off your team's hands. This saves time, reduces mistakes, and lets your team focus on more important work.",
    highlights: ["RPA Implementation", "Intelligent Workflows", "Process Mining", "AI Automation"],
  },
];

/* â"€â"€ Why next-gen â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */
const WHY_NEXTGEN = [
  { icon: Rocket,    label: "Ahead of the Curve",    sub: "Stay ahead of competitors who delay" },
  { icon: RefreshCw, label: "Legacy to Agile",       sub: "Streamline outdated models into lean" },
  { icon: Globe,     label: "Market Position",       sub: "Protect your market share proactively" },
  { icon: Layers,    label: "Modern Solutions",      sub: "Transformation-centric methodologies" },
];

const NEWGEN_FAQS: FAQItem[] = [
  {
    q: "What does \"new generation IT Services\" mean?",
    a: "It means the newer, smarter side of IT — it's not just about fixing systems. It's actually helping your business use data and automation properly.",
  },
  {
    q: "Is Enterprise Transformation only for big companies?",
    a: "No — any business using old systems or old ways of working can benefit. It's about how you work, not how big you are.",
  },
  {
    q: "What kind of work can Automation take over?",
    a: "Simple, repeated tasks — like entering data, creating routine reports, and everyday jobs that don't need someone to think hard, just doing them.",
  },
  {
    q: "What does \"Everything Data\" do differently?",
    a: "Regular IT support keeps your systems running smoothly. But Everything Data goes a step further — it helps you actually use your information to make smarter business decisions.",
  },
];

export default function NewGenServicesPage() {
  return (
    <div className="w-full">
      <PageMeta
        title="New Generation IT Services"
        description="Lead your digital future with Infoplus Technologies UK's new generation services enterprise transformation, data analytics, and intelligent automation for the modern enterprise."
        path="/services/new-generation"
      />
      {/* â"€â"€ Hero â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <PageHero
        badge="NEW-GEN SOLUTIONS"
        title="Next-Generation IT Services for Smarter Business Growth"
        description="Modern Problems Need Modern Solutions."
        variant="gradient"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F0783A] hover:bg-[#e84d27] text-white font-bold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
          >
            Start Transforming
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-[14px] transition-all duration-200"
          >
            All Services
          </Link>
        </div>
      </PageHero>

      {/* â"€â"€ Intro + Why New-Gen â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#ffffff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FEF0DC] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  The Imperative
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0D112D] leading-tight mb-6">
                  Adapt at speed or&nbsp;
                  <span className="text-[#EB9B3D]">lose the race.</span>
                </h2>
                <p className="text-[15px] text-[#0D112D]/65 leading-relaxed mb-5 text-justify">
                  Business goals and technologies are changing at an unprecedented speed, which requires companies
                  to adapt to the latest solutions continuously. Organisations that fail to implement next-generation,
                  innovative solutions will lose their space in the market in NO time.
                </p>
                <p className="text-[15px] text-[#0D112D]/65 leading-relaxed mb-5 text-justify">
                  We at Infoplus Technologies UK Ltd are pleased to inform you that our Digital Center of Excellence
                  team can help organisations to stay ahead of the competition through our modern solutions and
                  committed expert engineers.
                </p>
                <p className="text-[15px] text-[#0D112D]/65 leading-relaxed text-justify">
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
                    className="group bg-white border border-[#FEF0DC] rounded-2xl p-6 hover:border-[#EB9B3D]/35 hover:shadow-[0_8px_32px_rgba(235,155,61,0.10)] transition-all duration-300"
                    style={{ animation: `revealFade 400ms ease ${i * 80 + 200}ms both` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EB9B3D]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <w.icon className="w-5 h-5 text-[#EB9B3D]" />
                    </div>
                    <p className="text-[14px] font-bold text-[#0D112D] mb-1">{w.label}</p>
                    <p className="text-[12px] text-[#0D112D]/50">{w.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ Why Choose Infoplus â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 rounded-full bg-[#ffffff] blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Why Choose Us
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0D112D] leading-tight max-w-3xl mx-auto">
                Why Choose Infoplus for{" "}
                <span className="text-[#EB9B3D]">New Generation IT Services?</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              {
                num: "01", icon: TrendingUp,
                gradient: "from-[#EB9B3D] to-[#DA4D33]", accent: "#EB9B3D",
                cardBg: "#ffffff", cardBorder: "#e4dcf5",
                hoverShadow: "hover:shadow-[0_20px_60px_-12px_rgba(235,155,61,0.18)]",
                title: "We Keep You Ahead",
                desc: "Technology is always changing, and businesses that don't keep up fall behind — we make sure you don't.",
              },
              {
                num: "02", icon: Zap,
                gradient: "from-[#EB9B3D] to-[#DA4D33]", accent: "#F0783A",
                cardBg: "#fff8f6", cardBorder: "#fde0d6",
                hoverShadow: "hover:shadow-[0_20px_60px_-12px_rgba(248,93,55,0.14)]",
                title: "Real, Practical Improvements",
                desc: "We help you replace outdated systems, put your data to real use, and automate the tasks that waste your team's time.",
              },
              {
                num: "03", icon: Rocket,
                gradient: "from-[#EB9B3D] to-[#DA4D33]", accent: "#DA4D33",
                cardBg: "#faf5ff", cardBorder: "#e9d5ff",
                hoverShadow: "hover:shadow-[0_20px_60px_-12px_rgba(218,77,51,0.14)]",
                title: "Your Path, Built by Us",
                desc: "Whatever \"moving forward\" looks like for your business, we build the path to get you there.",
              },
            ] as const).map((item, i) => (
              <ScrollReveal key={item.num} variant="card" delay={i * 120}>
                <div
                  className={`group relative flex flex-col h-full rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 overflow-hidden ${item.hoverShadow}`}
                  style={{ background: item.cardBg, borderColor: item.cardBorder }}
                >
                  <span
                    className="absolute -top-3 -right-1 text-[110px] font-black leading-none select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    style={{ color: item.accent + "18" }}
                  >{item.num}</span>
                  <div className={`relative z-10 w-12 h-12 rounded-xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.20)]`}>
                    <item.icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="relative z-10 text-[19px] font-bold text-[#0D112D] mb-3 leading-snug">{item.title}</h3>
                  <div className="relative z-10 h-[3px] w-8 rounded-full mb-5 group-hover:w-16 transition-all duration-300" style={{ background: item.accent }} />
                  <p className="relative z-10 text-[14px] text-[#555] leading-relaxed flex-1">{item.desc}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `linear-gradient(to top, ${item.accent}12, transparent)` }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Services Cards â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#0D112D] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#242E72] opacity-35 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#EB9B3D] opacity-15 blur-[110px] pointer-events-none" />
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
                <span className="text-[#DA4D33]">next-gen innovation</span>
              </h2>
              {/* <p className="text-[15px] text-white/50 mt-4 max-w-2xl mx-auto">
                Each service is delivered by our Digital CoE specialist engineers who live at the intersection of
                strategy and execution. Click any service to explore in depth.
              </p> */}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.title} variant="card" delay={i * 100}>
                <Link
                  to={svc.href}
                  className="group relative flex flex-col h-full bg-white/4 border border-white/8 rounded-3xl p-7 hover:bg-white/7 hover:border-[#EB9B3D]/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(235,155,61,0.20)] transition-all duration-300 overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#EB9B3D]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${svc.gradient} flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <svc.icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold text-white mb-2 group-hover:text-[#DA4D33] transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <div className="w-8 h-0.5 rounded-full mb-5 bg-[#EB9B3D]/50 group-hover:w-16 transition-all duration-300" />

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
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DA4D33] shrink-0" />
                        <span className="text-[12px] text-white/50 leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="mt-6 flex items-center gap-1.5 text-[13px] font-semibold text-[#F0783A]">
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Digital CoE spotlight â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-20 bg-[#ffffff] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#FEF0DC]/60 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Data-Driven Decisions",
                desc: "Every transformation recommendation is backed by data, not assumptions. We measure outcomes and iterate continuously.",
              },
              {
                icon: Zap,
                title: "Speed of Execution",
                desc: "Transformation-centric methodologies let us move fast without sacrificing quality agile by design, not just by name.",
              },
              {
                icon: Globe,
                title: "Future-Ready Architecture",
                desc: "Solutions are built with extensibility at their core, ensuring your platform can evolve as quickly as your business does.",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} variant="card" delay={i * 100}>
                <div className="group h-full bg-white border border-[rgba(13,17,45,0.10)] rounded-3xl p-8 hover:border-[#EB9B3D]/25 hover:shadow-[0_12px_40px_-4px_rgba(235,155,61,0.10)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[17px] font-bold text-[#111] mb-3 group-hover:text-[#EB9B3D] transition-colors duration-300">{card.title}</h3>
                  <p className="text-[14px] text-[#555] leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={NEWGEN_FAQS} badge="FAQs" title="Frequently Asked Questions" subtitle="Common questions about our new generation IT services." />

      {/* â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#ffffff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#141A3D] via-[#242E72] to-[#EB9B3D] rounded-3xl p-10 md:p-14 text-center overflow-hidden shadow-[0_32px_80px_rgba(235,155,61,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-80 h-80 rounded-full bg-[#DA4D33] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-[#F0783A] opacity-12 blur-[80px] pointer-events-none" />

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
                  className="w-full sm:w-auto group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F0783A] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                >
                  Talk to Our CoE Team
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-[15px] transition-all duration-200"
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


