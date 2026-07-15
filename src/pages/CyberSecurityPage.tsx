import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Shield,
  Eye,
  Search,
  Settings,
  AlertCircle,
  Lock,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type CyberService = {
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  title: string;
  desc: string;
  features: string[];
};

const CYBER_SERVICES: CyberService[] = [
  {
    icon: Eye,
    gradient: "from-[#381f55] to-[#6128a6]",
    accentColor: "#aa3bff",
    title: "Threat Detection & Response",
    desc: "Proactively monitor for threats, and for every threat found, investigate and exterminate. Our Security Operations Center provides 24/7 monitoring with advanced threat intelligence and real-time response capabilities.",
    features: [
      "24/7 SOC monitoring",
      "Advanced threat intelligence",
      "Real-time incident response",
      "Threat extermination & reporting",
    ],
  },
  {
    icon: Search,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    accentColor: "#93c5fd",
    title: "Security Assessment & Compliance",
    desc: "Validates all security services, right from basic to full network management, and addresses gaps. We ensure your systems meet regulatory compliance requirements and industry standards.",
    features: [
      "Full network assessment",
      "Regulatory compliance audit",
      "Security gap analysis",
      "Remediation roadmap",
    ],
  },
  {
    icon: AlertCircle,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    accentColor: "#5eead4",
    title: "Vulnerability Remediation",
    desc: "We work with you to identify and fix only security vulnerabilities in your infrastructure, applications, and networks prioritised by risk severity and business impact.",
    features: [
      "Vulnerability scanning",
      "Risk-based prioritisation",
      "Automated patch management",
      "Verification & re-testing",
    ],
  },
  {
    icon: Settings,
    gradient: "from-[#78350f] to-[#f59e0b]",
    accentColor: "#fcd34d",
    title: "Security Operations",
    desc: "Customisation, performance optimisation, and bug fixes for your security stack. We optimise your security tools, processes, and policies for maximum effectiveness and operational efficiency.",
    features: [
      "Security tool optimisation",
      "Performance tuning",
      "Bug fixes & hardening",
      "Policy & process improvement",
    ],
  },
];

const AI_CAPABILITIES = [
  "AI & ML-powered behavioural analysis",
  "Human behaviour insight detection",
  "Anomaly detection in real time",
  "Cryptography and malware expertise",
  "Software exploit analysis",
  "Security auditing & network review",
];

export default function CyberSecurityPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Cyber Security Services & Solutions"
        description="Protect your organisation with Infoplus Technologies UK's cyber security services. We provide threat detection, risk management, compliance, and end-to-end security solutions."
        path="/services/it-services/cyber-security"
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Cyber Security"
        description="We Protect Our Clients from Security-Related Issues"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Secure Your Business
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Request a Security Audit
          </Link>
        </div>
      </PageHero>

      {/* ── Intro + AI Capabilities ──────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Security Practice
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Advanced Security for
                <br />
                <span className="text-[#6128a6]">a Threat-Filled World</span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Infoplus cyber security services include a security operations
                center and security engineering capability. To protect our
                clients from security-related issues, our operations and
                products continuously evolve through security policies,
                products, and testing.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-5">
                Our dedicated security teams have proven expertise in
                cryptography, malware, and software exploits. One standout
                value-add we provide is applying AI and Machine Learning
                technologies to get insights from human behaviour helping
                industry-leading organisations provide secure access while
                improving employee value-proposition.
              </p>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#6128a6]">
                <Shield className="w-4 h-4" />
                Security Operations Center (SOC) + Engineering Capability
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#f8f5ff] border border-[#e8e0f7] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/8 blur-[60px] pointer-events-none" />
                {/* Scanning circle */}
                <div className="relative flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full border-2 border-[#6128a6]/20 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-full border-2 border-[#6128a6]/35 flex items-center justify-center relative">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div
                      className="absolute top-[50%] left-[50%] w-12 h-px bg-[#6128a6]/50 origin-left"
                      style={{ animation: "spin 3s linear infinite", transformOrigin: "left center" }}
                    />
                  </div>
                </div>
                <div className="relative z-10">
                  <p className="text-[13px] font-bold uppercase tracking-widest text-[#6128a6] mb-4 text-center">
                    AI-Powered Security Capabilities
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {AI_CAPABILITIES.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-[13px] text-[#555]"
                        style={{ animation: `revealFade 400ms ease ${i * 80 + 200}ms both` }}
                      >
                        <Lock className="w-3.5 h-3.5 text-[#6128a6] shrink-0" />
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 4 Core Security Services Cinematic Cards ───────── */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-[#6128a6]/15 blur-[120px] pointer-events-none" />
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
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Security Portfolio
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">
                Our Services
              </h2>
              <p className="text-[15px] text-white/45 max-w-2xl mx-auto mt-4">
                Our security portfolio of services safeguards organisations
                while driving growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {CYBER_SERVICES.map(
              (
                { icon: SIcon, gradient, accentColor, title, desc, features },
                i,
              ) => {
                const isEven = i % 2 === 0;
                return (
                  <ScrollReveal
                    key={i}
                    direction={isEven ? "left" : "right"}
                    duration={700}
                    delay={60}
                  >
                    <div className="group bg-white/4 border border-white/8 rounded-2xl p-7 hover:bg-white/7 hover:border-[#6128a6]/30 transition-all duration-300 relative overflow-hidden">
                      {/* Accent glow on hover */}
                      <div
                        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                        style={{ background: accentColor }}
                      />

                      <div className="relative z-10 flex flex-col md:flex-row gap-7 items-start">
                        {/* Icon + gradient bar */}
                        <div className="shrink-0">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <SIcon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-[20px] font-bold text-white mb-3 leading-snug">
                            {title}
                          </h3>
                          <p className="text-[14px] text-white/55 leading-relaxed mb-5">
                            {desc}
                          </p>

                          {/* Feature chips */}
                          <div className="flex flex-wrap gap-2">
                            {features.map((f, j) => (
                              <span
                                key={j}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold border"
                                style={{
                                  backgroundColor: `${accentColor}12`,
                                  borderColor: `${accentColor}30`,
                                  color: accentColor,
                                }}
                              >
                                <CheckCircle2 className="w-3 h-3" />
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#aa3bff] group-hover:translate-x-1 transition-all duration-300 shrink-0 self-center hidden md:block" />
                      </div>
                    </div>
                  </ScrollReveal>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ── Trust Stats ──────────────────────────────────────── */}
      <section className="py-16 bg-[#f8f5ff] border-y border-[#e5e4e7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "24/7", label: "SOC monitoring coverage" },
              { value: "AI + ML", label: "Behavioural threat analysis" },
              { value: "100%", label: "Compliance focus" },
              { value: "0", label: "Tolerance for unresolved threats" },
            ].map(({ value, label }, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="text-center p-6 rounded-2xl bg-white border border-[#e5e4e7]">
                  <p className="text-[32px] font-black text-[#6128a6] leading-none mb-2">
                    {value}
                  </p>
                  <p className="text-[12.5px] text-[#666] font-medium leading-snug">
                    {label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0d0517] to-[#381f55] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Stay Protected
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Don't Wait for a Breach.
                  <br className="hidden md:block" />
                  Act Now.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Cyber Security to build a resilient,
                  proactive security posture. Our expert team is ready to
                  protect your organisation round the clock.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Request a Security Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
                  >
                    Email Our Security Team
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
