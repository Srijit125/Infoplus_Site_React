import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  Users,
  Lightbulb,
  Umbrella,
  ChevronRight,
  Globe,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  Star,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

/* â”€â”€ Services â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SERVICES = [
  {
    icon: Users,
    title: "IT Staffing Solutions",
    href: "/services/staffing-consulting/it-staffing-solutions",
    accent: "#6128a6",
    glow: "rgba(97,40,166,0.22)",
    desc: "With more than two decades of operation, Infoplus Technologies has grown into an internationally recognised staffing service provider. Through a clear vision and a customised plan, our engineering teams provide cutting-edge staffing services to all IT companies from industry giants to mid-sized and unicorn firms.",
    highlights: ["Contract Staffing", "Contract-to-Hire", "Permanent Placement", "Partnership Models"],
  },
  {
    icon: Lightbulb,
    title: "IT Consulting Solutions",
    href: "/services/staffing-consulting/it-consulting-solutions",
    accent: "#aa3bff",
    glow: "rgba(170,59,255,0.22)",
    desc: "Infoplus Technologies uses deep expertise and technical background to provide consulting solutions across multiple technology stacks and business domains. Our consultants combine industry best practices with hands-on delivery experience to drive measurable outcomes for your organisation.",
    highlights: ["Technology Strategy", "Architecture Review", "Digital Transformation", "CoE Setup"],
  },
  {
    icon: Umbrella,
    title: "Umbrella Service",
    href: "/services/staffing-consulting/umbrella-service",
    accent: "#f85d37",
    glow: "rgba(248,93,55,0.22)",
    desc: "Whether you're new to contracting or are an old hand, an umbrella service through Infoplus simplifies your working life. We handle all payroll, compliance, and administrative requirements so you can focus entirely on your contract work with complete peace of mind.",
    highlights: ["Payroll Management", "Tax Compliance", "IR35 Guidance", "Contractor Support"],
  },
];

/* â”€â”€ Stats â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const STATS = [
  { value: "20+",  label: "Years of Staffing Experience", color: "#aa3bff" },
  { value: "500+", label: "Placements Delivered",         color: "#f85d37" },
  { value: "3",    label: "Staffing Service Models",      color: "#aa3bff" },
  { value: "2",    label: "Continents, 1 Delivery Team",  color: "#f85d37" },
];

/* â”€â”€ Differentiators â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const DIFFERENTIATORS = [
  { icon: Globe,     label: "Global Reach",        sub: "Europe & India delivery hubs" },
  { icon: TrendingUp,label: "Proven Process",      sub: "Two decades of refinement" },
  { icon: Briefcase, label: "Domain Expertise",    sub: "All major IT verticals" },
  { icon: Clock,     label: "Speed to Deploy",     sub: "Rapid resource mobilisation" },
];

export default function StaffingConsultingPage() {
  return (
    <div className="w-full">
      <PageMeta
        title="IT Staffing & Consulting Services"
        description="Find the right talent and expertise with Infoplus Technologies UK's staffing and consulting services. We place skilled IT professionals for permanent, contract, and umbrella roles."
        path="/services/staffing-consulting"
      />
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PageHero
        badge="STAFFING & CONSULTING"
        title="We are Providing the Best Staff for Clients"
        description="Having worked with clients from a wide range of services and domains globally over the last two decades, our Staffing and Consulting teams have developed a unique method to improve alignment of business and technology."
        variant="gradient"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
          >
            Find Your Talent
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

      {/* â”€â”€ Intro + Differentiators â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Our Approach
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0d0517] leading-tight mb-6">
                  Business and technology.&nbsp;
                  <span className="text-[#6128a6]">Perfectly aligned.</span>
                </h2>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed mb-5 text-justify">
                  Having worked with clients from a wide range of services and domains globally over the last two
                  decades, our Staffing and Consulting teams have developed and inculcated a unique method to
                  improve the alignment of business and technology through proven process efficiencies, reduced
                  cost, and enhanced business value of IT.
                </p>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed text-justify">
                  We work with some of the largest and fast-growing mid-sized companies in the world, providing
                  consulting and staffing solutions to their needs using proven business-focused approaches.
                </p>
              </div>
            </ScrollReveal>

            {/* Differentiator grid */}
            <ScrollReveal direction="right" delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {DIFFERENTIATORS.map((d, i) => (
                  <div
                    key={d.label}
                    className="group bg-white border border-[#ecdaff] rounded-2xl p-6 hover:border-[#6128a6]/35 hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] transition-all duration-300"
                    style={{ animation: `revealFade 400ms ease ${i * 80 + 200}ms both` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#6128a6]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <d.icon className="w-5 h-5 text-[#6128a6]" />
                    </div>
                    <p className="text-[14px] font-bold text-[#0d0517] mb-1">{d.label}</p>
                    <p className="text-[12px] text-[#0d0517]/50">{d.sub}</p>
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
                Three ways we&nbsp;
                <span className="text-[#aa3bff]">serve you</span>
              </h2>
              <p className="text-[15px] text-white/50 mt-4 max-w-2xl mx-auto">
                From placing the right talent to guiding your technology strategy click any service to explore in depth.
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

              <Star className="relative z-10 w-8 h-8 text-[#aa3bff] mx-auto mb-4" />
              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Work With Us
              </span>
              <h2 className="relative z-10 text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white leading-tight mb-5">
                Build your perfect team today
              </h2>
              <p className="relative z-10 text-[15px] text-white/60 mb-10 max-w-2xl mx-auto">
                Whether you need a single specialist, a full delivery team, or expert consulting guidance,
                our two-decade track record delivers talent you can trust.
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


