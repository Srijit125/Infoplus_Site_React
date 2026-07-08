import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Target,
  Search,
  BarChart2,
  Globe,
  Zap,
  Server,
  Activity,
  RefreshCcw,
  Cpu,
  Layers,
  Shield,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type Pillar = {
  icon: LucideIcon;
  gradient: string;
  num: string;
  title: string;
  desc: string;
};
type AutoService = {
  icon: LucideIcon;
  gradient: string;
  title: string;
  desc: string;
};

const OUTCOMES = [
  {
    icon: Shield,
    gradient: "from-[#381f55] to-[#6128a6]",
    accentColor: "#aa3bff",
    title: "Highly Resilient Systems",
    desc: "Our solutions make IT systems highly resilient by detecting, avoiding, healing, and remediating any deviations from normal, healthy business function before users are ever impacted.",
    bullets: [
      "Proactive anomaly detection",
      "Self-healing remediation",
      "Zero-downtime operations",
      "Continuous health validation",
    ],
  },
  {
    icon: Zap,
    gradient: "from-[#9a2600] to-[#f85d37]",
    accentColor: "#f85d37",
    title: "Experimentation Platforms",
    desc: "They also make a platform for efficient experimentation so that businesses can react faster to failures and successes and pivot accordingly without excess wasted resources.",
    bullets: [
      "Rapid iteration cycles",
      "Failure-safe testing environments",
      "Faster market response",
      "Resource-efficient pivoting",
    ],
  },
];

const PILLARS: Pillar[] = [
  {
    icon: Target,
    gradient: "from-[#381f55] to-[#6128a6]",
    num: "01",
    title: "Recommend Level of Automation",
    desc: "Assess and recommend the right degree of automation for each business process balancing investment, risk, and business value delivered.",
  },
  {
    icon: Search,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    num: "02",
    title: "Identify the Right Parameters",
    desc: "Define the key metrics, triggers, and parameters that will drive automation success and enable continuous measurement.",
  },
  {
    icon: BarChart2,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    num: "03",
    title: "Evaluate the Business Process",
    desc: "Systematically assess existing processes to identify the best candidates for automation and map the impact on people and systems.",
  },
  {
    icon: Globe,
    gradient: "from-[#78350f] to-[#f59e0b]",
    num: "04",
    title: "Access the Operational Landscape",
    desc: "Understand the full operational environment, infrastructure dependencies, and automation readiness before committing to a roadmap.",
  },
];

const AUTO_SERVICES: AutoService[] = [
  {
    icon: Zap,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "Automated Predictions",
    desc: "AI-driven predictive models that anticipate system behaviour, demand spikes, and operational anomalies before they occur.",
  },
  {
    icon: Server,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "IT Automation Load Balancing & Auto-Scaling",
    desc: "Intelligent resource orchestration that automatically adjusts infrastructure capacity in real time to match demand.",
  },
  {
    icon: Activity,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Solutions to Improve Service Experience",
    desc: "Automated service desk, incident routing, and resolution workflows that dramatically improve end-user experience.",
  },
  {
    icon: RefreshCcw,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    title: "Agile Testing Automation",
    desc: "End-to-end test automation frameworks that integrate into CI/CD pipelines for continuous quality assurance.",
  },
  {
    icon: Cpu,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "Robotic Process Automation (RPA)",
    desc: "Software bots that replicate repetitive human tasks across applications freeing your workforce for higher-value work.",
  },
  {
    icon: Layers,
    gradient: "from-[#9a2600] to-[#f85d37]",
    title: "Industrial Automation",
    desc: "Automation solutions for manufacturing and industrial environments including SCADA, DCS, and motion control systems.",
  },
  {
    icon: RefreshCcw,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Integrated Automation",
    desc: "Cross-platform automation that connects disparate systems, APIs, and processes into a seamless, orchestrated workflow.",
  },
];

const AUTO_BENEFITS = [
  "Improved Quality",
  "Consistency",
  "Metric Visibility",
  "Enhanced Operational Efficiency",
  "Better Governance",
  "Reliability",
  "Reduced Costs of Operations",
];

const AUTO_TOOLS = [
  "BMC",
  "CA Technologies",
  "ServiceNow",
  "UI Path Excel Automation",
  "VMWare",
  "Zapier",
  "Open RPA",
  "Work Fusion",
  "ANN – Artificial Neural Network",
  "DCS – Distributed Control System",
  "HMI – Human Machine Interface",
  "SCADA – Supervisory Control & Data Acquisition",
  "Motion Control",
];

export default function AutomationPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Automation & Intelligent Process Automation"
        description="Accelerate operational efficiency with Infoplus Technologies UK's automation services. We implement RPA, intelligent process automation, and workflow solutions tailored to your business."
        path="/services/new-generation/automation"
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Automation"
        description="We Provide a Higher Degree of Experimentation and Agility"
        badge="NEW-GEN SERVICES"
        variant="centered"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Explore Automation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white">
            Scroll
          </p>
          <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
        </div>
      </PageHero>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Automation as a Service
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                The Next Critical Step
                <br />
                <span className="text-[#6128a6]">in IT Maturity.</span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Automation is the next critical step in IT maturity, building
                trust into IT systems and enabling innovation of new
                capabilities. Infoplus Technologies delivers automation
                solutions "as-a-service" and has successfully helped various
                industries with automation strategies and implementations.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Our clients not only reduced costs and turnaround times, but
                were also guided in effective redeployment of workforce. Our
                automation solutions did not kill JOBS.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85]">
                Our carefully selected and nurtured automation team believes and
                practises that automation should provide a higher degree of
                experimentation and increase agility across the entire
                organisation.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#0d0517] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/30 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#aa3bff] mb-5">
                    Our Automation Questions Framework
                  </p>
                  <p className="text-[13px] text-white/45 leading-relaxed mb-6">
                    Every automation roadmap starts with 10 key looming
                    questions from "where to start?" to "what's the winning
                    recipe for success?" We've derived our strategy from these.
                  </p>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-[48px] font-black text-white leading-none">
                      10
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">
                        Key Questions
                      </p>
                      <p className="text-[11px] text-white/35">
                        → 4 strategic pillars
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10 mb-5" />
                  <div className="grid grid-cols-2 gap-2">
                    {["Detect", "Avoid", "Heal", "Remediate"].map(
                      (action, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-lg px-3 py-2"
                          style={{
                            animation: `revealFade 400ms ease ${i * 80 + 300}ms both`,
                          }}
                        >
                          <Zap className="w-3.5 h-3.5 text-[#aa3bff] shrink-0" />
                          <span className="text-[12px] text-white/60 font-medium">
                            {action}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Two Outcomes Split Cinematic Cards ─────────────── */}
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
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Core Business Outcomes
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">
                Two Primary Outcomes
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {OUTCOMES.map(
              (
                { icon: OIcon, gradient, accentColor, title, desc, bullets },
                i,
              ) => (
                <ScrollReveal
                  key={i}
                  direction={i === 0 ? "left" : "right"}
                  duration={720}
                  delay={80}
                >
                  <div className="group bg-white/5 border border-white/8 rounded-2xl p-8 hover:border-[#6128a6]/30 hover:bg-white/7 transition-all duration-300 relative overflow-hidden h-full">
                    <div
                      className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                      style={{ background: accentColor }}
                    />
                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <OIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-[22px] font-bold text-white mb-4 leading-snug">
                        {title}
                      </h3>
                      <p className="text-[14px] text-white/55 leading-relaxed mb-6">
                        {desc}
                      </p>
                      <div className="space-y-2">
                        {bullets.map((b, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2.5 text-[13px] text-white/60"
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 shrink-0"
                              style={{ color: accentColor }}
                            />
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── 4 Pillars ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#ecdaff]/60 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Our Automation Strategy
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                4 Strategic Pillars
              </h2>
              <p className="text-[15px] text-[#555] max-w-2xl mx-auto mt-4 leading-relaxed">
                Derived from 10 key industry questions, our automation strategy
                is built on four foundational pillars that guide every
                engagement.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PILLARS.map(({ icon: PIcon, gradient, num, title, desc }, i) => (
              <ScrollReveal
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                duration={700}
                delay={i * 90}
              >
                <div className="group bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#6128a6]/25 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.10)] hover:-translate-y-1 transition-all duration-300">
                  <div className={`h-1.5 bg-linear-to-r ${gradient}`} />
                  <div className="p-7">
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <PIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[36px] font-black text-[#f0eff5] leading-none select-none">
                        {num}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-bold text-[#111] mb-3 group-hover:text-[#6128a6] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-[13.5px] text-[#666] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Services ─────────────────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Automation Capabilities
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Our Automation Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AUTO_SERVICES.map(({ icon: SIcon, gradient, title, desc }, i) => (
              <ScrollReveal
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                duration={680}
                delay={60}
              >
                <div className="group flex items-start gap-4 bg-[#f8f5ff] border border-[#e8e0f7] rounded-xl p-5 hover:bg-white hover:border-[#6128a6]/30 hover:shadow-[0_8px_24px_-4px_rgba(97,40,166,0.10)] transition-all duration-300">
                  <div
                    className={`w-11 h-11 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <SIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[#111] mb-1.5 group-hover:text-[#6128a6] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-[13px] text-[#666] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits + Tools Dark section ───────────────────── */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f85d37]/8 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <ScrollReveal direction="left" duration={700}>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                  Additional Benefits
                </span>
                <h2 className="text-[28px] font-bold text-white mt-3 mb-8">
                  What Our Solutions Provide
                </h2>
              </ScrollReveal>
              <div className="space-y-3">
                {AUTO_BENEFITS.map((benefit, i) => (
                  <ScrollReveal
                    key={i}
                    direction="left"
                    delay={i * 70}
                    duration={600}
                  >
                    <div className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-5 py-3.5 hover:bg-white/8 hover:border-[#6128a6]/30 transition-all duration-200 group">
                      <CheckCircle2 className="w-4 h-4 text-[#6128a6] shrink-0 group-hover:text-[#aa3bff] transition-colors" />
                      <span className="text-[14px] text-white/70 font-medium">
                        {benefit}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <ScrollReveal direction="right" duration={700}>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                  Technology Estate
                </span>
                <h2 className="text-[28px] font-bold text-white mt-3 mb-8">
                  Tools, Technologies & Frameworks
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={100} duration={600}>
                <div className="flex flex-wrap gap-2.5">
                  {AUTO_TOOLS.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-2 rounded-xl bg-white/8 border border-white/12 text-[12px] font-semibold text-white/60 hover:bg-[#6128a6]/20 hover:border-[#6128a6]/40 hover:text-[#aa3bff] transition-all duration-200 cursor-default"
                      style={{
                        animation: `revealFade 400ms ease ${i * 50 + 200}ms both`,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0d0517] to-[#381f55] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Automate with Confidence
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Resilient. Intelligent.
                  <br className="hidden md:block" />
                  Automated.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd to build automation
                  solutions that increase agility, reduce costs, and unlock
                  experimentation at scale.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start Your Automation Journey
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
