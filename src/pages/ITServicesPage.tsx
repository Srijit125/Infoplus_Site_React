import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  Code2,
  FlaskConical,
  Server,
  Database,
  ShieldCheck,
  Cloud,
  BrainCircuit,
  ChevronRight,
  Lightbulb,
  Globe,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

/* â”€â”€ Service cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SERVICES = [
  {
    icon: Code2,
    title: "Software Development",
    href: "/services/it-services/software-development",
    accent: "#6128a6",
    glow: "rgba(97,40,166,0.22)",
    tag: "IT Services",
    desc: "Our development teams are based in Europe and India to fulfil the needs of different delivery models. We design, develop, and deploy innovative, customised business-critical software systems web, mobile, AR&VR, and IoT solutions that make technology a true asset to your business.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    href: "/services/it-services/testing",
    accent: "#aa3bff",
    glow: "rgba(170,59,255,0.22)",
    tag: "IT Services",
    desc: "Infoplus Testing Center of Excellence believes that quality isn't just checking for defects it is preventing them. Our structured test methodologies cover functional, performance, security, and automation testing to ensure your product launches flawlessly.",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    href: "/services/it-services/infrastructure-management",
    accent: "#6128a6",
    glow: "rgba(97,40,166,0.22)",
    tag: "IT Services",
    desc: "Infoplus has built its reputation helping leading global organisations achieve optimal IT infrastructure performance. From 24/7 monitoring and incident management to cloud migration and disaster recovery, we keep your operations highly available.",
  },
  {
    icon: Database,
    title: "SAP Consulting & Implementation",
    href: "/services/it-services/sap-consulting",
    accent: "#aa3bff",
    glow: "rgba(170,59,255,0.22)",
    tag: "IT Services",
    desc: "Our SAP Consulting and Implementation approach at Infoplus clearly focuses on delivering business value. We cover the full SAP landscape ERP, BI, S/4HANA providing design, build, and rollout services tailored to your industry and delivery model.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    href: "/services/it-services/cyber-security",
    accent: "#f85d37",
    glow: "rgba(248,93,55,0.22)",
    tag: "IT Services",
    desc: "Infoplus cyber security services include a Security Operations Centre, vulnerability scanning, penetration testing, compliance management, and incident response providing end-to-end protection so your organisation stays resilient against evolving threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Portfolio",
    href: "/services/it-services/cloud-portfolio",
    accent: "#6128a6",
    glow: "rgba(97,40,166,0.22)",
    tag: "IT Services",
    desc: "Infoplus Cloud Portfolio is an enterprise cloud service offering spanning AWS, Azure, and GCP. From cloud strategy and migration to managed operations and cost optimisation, we guide your cloud journey from inception to full production scale.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    href: "/services/it-services/artificial-intelligence",
    accent: "#aa3bff",
    glow: "rgba(170,59,255,0.22)",
    tag: "IT Services",
    featured: true,
    desc: "Infoplus Technologies is at the forefront of Artificial Intelligence innovation. Our AI CoE delivers machine learning, NLP, generative AI, computer vision, and intelligent automation solutions that transform raw data into strategic business intelligence.",
  },
];

/* â”€â”€ Stats â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const STATS = [
  { value: "7",    label: "IT Service Verticals",  color: "#aa3bff" },
  { value: "20+",  label: "Years of Expertise",    color: "#f85d37" },
  { value: "2",    label: "Continents, 1 Mission", color: "#aa3bff" },
  { value: "24/7", label: "Support & Monitoring",  color: "#f85d37" },
];

export default function ITServicesPage() {
  return (
    <div className="w-full">
      <PageMeta
        title="IT Services | Managed IT Solutions"
        description="Explore Infoplus Technologies UK's full range of IT services including AI, software development, testing, infrastructure management, SAP consulting, cyber security, and cloud solutions."
        path="/services/it-services"
      />
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PageHero
        badge="IT SERVICES"
        title="We are Providing the Best Services for Clients"
        description="Supporting IT is not just enough it must be strategically led and proactively managed. Our forward-thinking IT CoE team designs end-to-end solutions so organisations gain a technology edge and stay ahead of the curve."
        variant="gradient"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
          >
            Discuss Your Project
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

      {/* â”€â”€ Intro + Vision â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Intro text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Our Approach
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0d0517] leading-tight mb-6">
                  Strategically led.&nbsp;
                  <span className="text-[#6128a6]">Proactively managed.</span>
                </h2>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed mb-5 text-justify">
                  In order for a business to strive and to meet its planned objectives, supporting IT is not just
                  enough it must be strategically led and proactively managed. Our forward-thinking IT service
                  CoE (Center of Excellence) team has been designing end-to-end solutions for organisations to
                  have a technology edge and to be ahead of the curve while running their operations seriously,
                  thus making their infrastructure highly available.
                </p>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed text-justify">
                  Infoplus Technologies has carefully structured different business verticals to cater to the
                  needs of every IT service requirement at any time from software development and AI to
                  infrastructure management and cyber security.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision card + feature chips */}
            <ScrollReveal direction="right" delay={120}>
              <div className="space-y-5">
                {/* Vision card */}
                <div className="relative bg-[#0d0517] rounded-3xl p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#6128a6] opacity-20 blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#aa3bff]/20 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-[#aa3bff]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#aa3bff]">
                        Vision
                      </span>
                    </div>
                    <p className="text-[16px] text-white/85 leading-relaxed italic">
                      "We strive to support improvements in IT services and solutions in order to make a visible
                      positive contribution to the client's IT growth strategy."
                    </p>
                    <div className="mt-5 h-px bg-linear-to-r from-[#6128a6]/60 via-[#aa3bff]/40 to-transparent" />
                    <p className="mt-3 text-[12px] text-white/40 font-semibold uppercase tracking-widest">
                      Infoplus Technologies IT CoE
                    </p>
                  </div>
                </div>

                {/* Feature chips */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Globe,  label: "Europe & India",    color: "#6128a6" },
                    { icon: Users,  label: "Dedicated CoE",     color: "#aa3bff" },
                    { icon: Zap,    label: "End-to-End",        color: "#f85d37" },
                  ].map((f, i) => (
                    <div
                      key={f.label}
                      className="flex flex-col items-center gap-2 bg-white border border-[#ecdaff] rounded-2xl py-4 px-3 hover:border-[#6128a6]/30 hover:shadow-[0_4px_16px_rgba(97,40,166,0.08)] transition-all duration-300"
                      style={{ animation: `revealFade 350ms ease ${i * 80 + 300}ms both` }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${f.color}15`, color: f.color }}
                      >
                        <f.icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#0d0517]/70 text-center">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ Stats strip â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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

      {/* â”€â”€ Services Grid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#381f55] opacity-35 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#6128a6] opacity-15 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our IT Service Verticals
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                Seven pillars of&nbsp;
                <span className="text-[#aa3bff]">IT excellence</span>
              </h2>
              <p className="text-[15px] text-white/50 mt-4 max-w-2xl mx-auto">
                Each vertical is purpose-built and CoE-backed click any service to explore the full offering.
              </p>
            </div>
          </ScrollReveal>

          {/* Flex wrap 7 cards auto-centre the last item */}
          <div className="flex flex-wrap justify-center gap-6">
            {SERVICES.map((svc, i) => (
              <ScrollReveal
                key={svc.title}
                variant="card"
                delay={i * 80}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <Link
                  to={svc.href}
                  className="group relative flex flex-col h-full rounded-3xl p-7 transition-all duration-400 overflow-hidden border border-[#6128a6]/25 hover:border-[#aa3bff]/55 hover:shadow-[0_20px_56px_rgba(97,40,166,0.28)]"
                  style={{ background: "linear-gradient(135deg, #0d0517 0%, #1a0830 55%, #261140 100%)" }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(170,59,255,0.18) 0%, transparent 65%)" }}
                  />

                  {/* Featured badge */}
                  {svc.featured && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#f85d37]/20 border border-[#f85d37]/40 text-[#f85d37]">
                      Flagship
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "linear-gradient(135deg, #6128a6 0%, #aa3bff 100%)" }}
                  >
                    <svc.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-bold mb-2 text-[#ecdaff] group-hover:text-white transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Accent line */}
                  <div className="w-8 h-0.5 rounded-full mb-4 bg-[#aa3bff] group-hover:w-16 transition-all duration-400" />

                  {/* Description */}
                  <p className="text-[14px] text-white/55 leading-relaxed flex-1 group-hover:text-white/70 transition-colors duration-300 line-clamp-4">
                    {svc.desc}
                  </p>

                  {/* Read More link */}
                  <div className="mt-6 flex items-center gap-1.5 text-[13px] font-semibold text-[#f85d37] transition-all duration-300">
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#1e0a38] via-[#381f55] to-[#6128a6] rounded-3xl p-10 md:p-14 text-center overflow-hidden shadow-[0_32px_80px_rgba(97,40,166,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-80 h-80 rounded-full bg-[#aa3bff] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-[#f85d37] opacity-12 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Work With Us
              </span>
              <h2 className="relative z-10 text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white leading-tight mb-5">
                Ready to transform your IT landscape?
              </h2>
              <p className="relative z-10 text-[15px] text-white/60 mb-10 max-w-2xl mx-auto">
                Let our IT CoE team design a strategy that gives your organisation a genuine technology edge.
                Offices in Europe and India, available around the clock.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                >
                  Start a Conversation
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


