import { Link } from "react-router-dom";
import {
  Briefcase, Code2, UserCheck, Cpu,
  MessageSquare, CheckCircle2, ArrowRight,
  ChevronRight, Target, Zap, type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type Tower = {
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  number: string;
  title: string;
  desc: string;
  tags: string[];
};

type StrategyStep = {
  step: string;
  title: string;
  desc: string;
  highlight?: string;
};

const TOWERS: Tower[] = [
  {
    icon: Briefcase,
    gradient: "from-[#381f55] to-[#6128a6]",
    accentColor: "#6128a6",
    number: "01",
    title: "Enterprise Consulting",
    desc: "We help enterprises store, manage, and access critical data online efficiently — letting stakeholders access insights from any browser, on any device, at any time.",
    tags: ["Enterprise Architecture", "Digital Strategy", "Business Process", "Governance"],
  },
  {
    icon: Code2,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    accentColor: "#3b82f6",
    number: "02",
    title: "Solution Consulting",
    desc: "End-to-end solution design and delivery across application development, product development, data analytics, CRM, web portals, automation, and testing.",
    tags: ["App Dev", "Product Dev", "Data Analytics", "CRM", "Web Portals", "Automation", "Testing"],
  },
  {
    icon: UserCheck,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    accentColor: "#14b8a6",
    number: "03",
    title: "Introduction with the Right Talent",
    desc: "Connecting organisations with the right experts for in-house operations, Data Centre migrations to the cloud, Data centre consolidation, IT Support, and Project Services.",
    tags: ["Data Centre Migration", "Cloud Transition", "IT Support", "Project Services"],
  },
  {
    icon: Cpu,
    gradient: "from-[#78350f] to-[#f59e0b]",
    accentColor: "#f59e0b",
    number: "04",
    title: "Technology Consulting",
    desc: "Deep-dive technical consulting across the full infrastructure and data stack — from storage and backup to enterprise platforms and cutting-edge technologies.",
    tags: ["Storage", "Backup", "Database", "Middleware", "Unix", "SharePoint", "Security", "Network", "Salesforce", "ServiceNow", "Big Data", "IoT", "AI", "ML"],
  },
];

const STRATEGY_STEPS: StrategyStep[] = [
  {
    step: "01",
    title: "Send Your Requirements",
    desc: "Send your requirements through Contact Us, over the phone. Tell us your objectives, technical needs, and business dynamics.",
  },
  {
    step: "02",
    title: "Talk to Industry & Domain Experts",
    desc: "Relevant Infoplus Technology directors will have a call with you at your convenient time to understand your objectives, technical needs, and organisation dynamics.",
  },
  {
    step: "03",
    title: "Introduction with the Right Talent",
    desc: "The directors identify the right experts for your business needs within 48 hours and introduce them to you — no delays, no guesswork.",
    highlight: "Within 48 hours",
  },
  {
    step: "04",
    title: "Pursue Period",
    desc: "Work with your new team for a trial period or on MVP. Pay and proceed only if you are satisfied. Our strike rate in this phase is over 90%.",
    highlight: "90%+ Strike Rate",
  },
];

export default function ConsultingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="IT Consulting Solutions"
        description="We Provide Premier Quality IT Consultants"
        badge="STAFFING & CONSULTING"
        variant="centered"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Our Experts
          </Link>
        </div>
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white">Scroll</p>
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
                Our Consulting Practice
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Deep Expertise.<br />
                <span className="text-[#6128a6]">Proven Track Record.</span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Infoplus Technologies uses expertise and a deep technical background to provide
                premier quality IT Consultants with a deep understanding of both legacy and
                cutting-edge frameworks and technologies.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85]">
                Our consulting team has a proven track record of executing IT projects on time and
                on budget. Our consulting teams are broadly categorised into 4 sub-towers, covering
                almost every industry, technology, and domain.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#0d0517] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/30 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#aa3bff] mb-6">
                    Why Our Consultants
                  </p>
                  {[
                    { value: "4", label: "Consulting sub-towers" },
                    { value: "48h", label: "Talent introduction time" },
                    { value: "90%+", label: "Client satisfaction rate" },
                  ].map(({ value, label }, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between py-4 ${i < 2 ? "border-b border-white/8" : ""}`}
                      style={{ animation: `revealFade 500ms ease ${i * 130 + 200}ms both` }}
                    >
                      <p className="text-[13px] text-white/50">{label}</p>
                      <p className="text-[24px] font-black text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 4 Sub-Towers — Cinematic alternating ─────────────── */}
      <section className="py-20 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#ecdaff]/60 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Consulting Coverage
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">Our 4 Sub-Towers</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {TOWERS.map(({ icon: TIcon, gradient, accentColor, number, title, desc, tags }, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} direction={isEven ? "left" : "right"} duration={700} delay={60}>
                  <div className="group bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#6128a6]/25 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.10)] hover:-translate-y-0.5 transition-all duration-300">
                    {/* Top gradient accent */}
                    <div className={`h-1 bg-linear-to-r ${gradient}`} />
                    <div className="p-7 flex flex-col sm:flex-row gap-6 items-start">
                      {/* Icon + number */}
                      <div className="shrink-0">
                        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <TIcon className="w-7 h-7 text-white" />
                        </div>
                        <p className="text-[11px] font-black text-[#ccc] mt-2 text-center">{number}</p>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className="text-[19px] font-bold mb-3 leading-snug group-hover:text-[#6128a6] transition-colors"
                          style={{ color: "#111" }}
                        >
                          {title}
                        </h3>
                        <p className="text-[14px] text-[#666] leading-relaxed mb-5">{desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, j) => (
                            <span
                              key={j}
                              className="px-3 py-1.5 rounded-lg text-[11.5px] font-semibold border"
                              style={{
                                backgroundColor: `${accentColor}10`,
                                borderColor: `${accentColor}30`,
                                color: accentColor,
                                animation: `revealFade 350ms ease ${j * 50 + 200}ms both`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Strategy — 4-Step Numbered Timeline ──────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-16">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                How We Work
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-2">Our Strategy</h2>
              <p className="text-[15px] text-[#555] max-w-xl mx-auto mt-4 leading-relaxed">
                A simple, effective 4-step process from requirement to expert delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-linear-to-b from-[#6128a6] via-[#6128a6]/50 to-transparent lg:left-[31px]" />

            <div className="space-y-3">
              {STRATEGY_STEPS.map(({ step, title, desc, highlight }, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 110} duration={680}>
                  <div className="flex gap-6">
                    {/* Circle */}
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-300 lg:w-16 lg:h-16">
                        <span className="text-[11px] font-black text-white lg:text-[13px]">{step}</span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 pb-6 group">
                      <div className="bg-[#f8f5ff] border border-[#e8e0f7] rounded-2xl p-6 hover:bg-white hover:border-[#6128a6]/30 hover:shadow-[0_8px_32px_-8px_rgba(97,40,166,0.12)] transition-all duration-300">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-[17px] font-bold text-[#111] group-hover:text-[#6128a6] transition-colors leading-snug">
                            {title}
                          </h3>
                          {highlight && (
                            <span className="shrink-0 px-3 py-1 rounded-full bg-[#6128a6] text-white text-[10px] font-bold uppercase tracking-wide">
                              {highlight}
                            </span>
                          )}
                        </div>
                        <p className="text-[13.5px] text-[#555] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
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
                  Engage Our Experts
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight">
                  Premier IT Consultants.<br className="hidden md:block" />
                  On Demand.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  From enterprise strategy to deep technical delivery — Infoplus Technologies
                  connects you with the right experts in 48 hours. Pay only if satisfied.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Engage a Consultant
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
                  >
                    Email Our Consulting Team
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
