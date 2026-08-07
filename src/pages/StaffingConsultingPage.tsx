import { useState, Fragment } from "react";
import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  Users,
  Lightbulb,
  Umbrella,
  ChevronRight,
  ChevronLeft,
  Globe,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  Star,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import imgSlideRec1 from "../assets/images/Info_Landing_AboutSection.jpg";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

/* â"€â"€ Services â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */
const SERVICES = [
  {
    icon: Users,
    title: "IT Staffing Solutions",
    href: "/services/staffing-consulting/it-staffing-solutions",
    gradient: "from-[#381f55] to-[#6128a6]",
    desc: "We find and place the right IT People for your team- not just anyone who matches the job on the given title on paper. We handle everything from the search to onboarding, and even after the project ends, we make the off-boarding smooth too.",
    highlights: ["Contract Staffing", "Contract-to-Hire", "Permanent Placement", "Partnership Models"],
  },
  {
    icon: Lightbulb,
    title: "IT Consulting Solutions",
    href: "/services/staffing-consulting/it-consulting-solutions",
    gradient: "from-[#381f55] to-[#6128a6]",
    desc: "Our consultants have experience with both old systems and the newest Technology, so your project gets done properly and on time. We can help build software, move to the cloud to keep your systems secure, and more.",
    highlights: ["Technology Strategy", "Architecture Review", "Digital Transformation", "CoE Setup"],
  },
  {
    icon: Umbrella,
    title: "Umbrella Service",
    href: "/services/staffing-consulting/umbrella-service",
    gradient: "from-[#381f55] to-[#6128a6]",
    desc: "We take care of the paperwork side of hiring contractors- we handle the pay, tax, and paperwork for contractors, so you don't have to. It keeps things simple and stress-free for everyone involved.",
    highlights: ["Payroll Management", "Tax Compliance", "IR35 Guidance", "Contractor Support"],
  },
];

/* â"€â"€ Stats â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */

/* â"€â"€ Differentiators â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */
const DIFFERENTIATORS = [
  { icon: Globe,     label: "Global Reach",        sub: "Europe & India delivery hubs" },
  { icon: TrendingUp,label: "Proven Process",      sub: "Two decades of refinement" },
  { icon: Briefcase, label: "Domain Expertise",    sub: "All major IT verticals" },
  { icon: Clock,     label: "Speed to Deploy",     sub: "Rapid resource mobilisation" },
];

const STAFFING_FAQS: FAQItem[] = [
  {
    q: "What is the difference between IT Staffing and IT Consulting at Infoplus?",
    a: "Staffing is all about placing the right person or team into the right business — whether it is short-term or long-term. Consulting is all about bringing expert guidance and helping deliver a specific project. Many clients use both at the same time.",
  },
  {
    q: "How fast can Infoplus find me the right person?",
    a: "We have dedicated recruitment teams across the UK, Europe, and India, so we can move more quickly than you think. All our candidates are skill-tested beforehand, so you don't have to wait through a long hiring process.",
  },
  {
    q: "What is an Umbrella Service, and do I need one?",
    a: "An Umbrella Service manages the employment administration. In simple words, it's a service that handles the pay, tax, and paperwork for the contractors, so neither you nor the contractor must deal with it directly. If you're hiring contract staff, this makes it much easier.",
  },
  {
    q: "Do you only help with short projects, or long-term hiring too?",
    a: "Both. Whether you need someone for a three-month project or a long-term team member, we can arrange it either way — based on what works for you.",
  },
];

export default function StaffingConsultingPage() {
  const [currentBanner, setCurrentBanner] = useState(0);

  return (
    <div className="w-full">
      <PageMeta
        title="IT Staffing & Consulting Services"
        description="Find the right talent and expertise with Infoplus Technologies UK's staffing and consulting services. We place skilled IT professionals for permanent, contract, and umbrella roles."
        path="/services/staffing-consulting"
      />

      {/* ── Hero carousel ─────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentBanner * 100}%)` }}
        >

          {/* Slide 0 — original PageHero */}
          <div className="w-full shrink-0">
            <PageHero
              badge="STAFFING & CONSULTING"
              title="We are Providing the Best Staff for Clients"
              description="Having worked with clients from a wide range of services and domains globally over the last two decades, our Staffing and Consulting teams have developed a unique method to improve alignment of business and technology."
              variant="gradient"
            >
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                >
                  Find Your Talent
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
          </div>

          {/* Slide 1 — Best Recruitment Agency */}
          <div className="w-full shrink-0">
            <section
              className="relative overflow-hidden flex flex-col"
              style={{
                minHeight: "75vh",
                background: "linear-gradient(135deg, #04100f 0%, #0a2220 30%, #0d2f2b 65%, #09201d 100%)",
              }}
            >
              {/* Ambient orbs + dot grid */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div style={{ position: "absolute", width: 640, height: 640, borderRadius: "50%", top: "-15%", right: "-8%", background: "radial-gradient(circle, #14b8a6 0%, transparent 68%)", filter: "blur(90px)", opacity: 0.28 }} />
                <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", bottom: "-12%", left: "-6%", background: "radial-gradient(circle, #0f766e 0%, transparent 68%)", filter: "blur(80px)", opacity: 0.30 }} />
                <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", top: "38%", left: "28%", background: "radial-gradient(circle, #22d3ee 0%, transparent 68%)", filter: "blur(70px)", opacity: 0.12 }} />
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "44px 44px", opacity: 0.4 }} />
              </div>

              {/* Right image — desktop */}
              <div
                className="absolute right-0 hidden md:block md:w-[40%] lg:w-[38%] xl:w-[42%] overflow-hidden"
                style={{ top: 0, bottom: 0, zIndex: 5, borderTopLeftRadius: "2rem", borderBottomLeftRadius: "2rem" }}
              >
                <img src={imgSlideRec1} alt="Staffing visual" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-y-0 left-0 w-24 lg:w-44 pointer-events-none" style={{ background: "linear-gradient(to right, #04100f 0%, transparent 100%)" }} />
                <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
              </div>

              {/* Content + stats column */}
              <div className="flex-1 flex flex-col relative z-10">
                <div className="flex-1 flex items-center pt-28 pb-8">
                  <div className="container mx-auto px-6 max-w-7xl w-full">
                    <div className="md:w-[56%] lg:w-[52%] xl:w-[50%]">

                      {/* Badge */}
                      <div className="mb-5">
                        <span
                          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold text-white/80"
                          style={{ border: "1px solid #14b8a655", background: "linear-gradient(90deg, #14b8a618, transparent, #14b8a618)" }}
                        >
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#5eead4", boxShadow: "0 0 6px #5eead4", display: "inline-block", flexShrink: 0 }} />
                          Staffing &amp; Consulting
                        </span>
                      </div>

                      {/* Headline */}
                      <h1 className="text-[clamp(1.8rem,5vw,3rem)] font-bold text-white leading-[1.1] mb-4 tracking-tight">
                        Best{" "}
                        <span style={{ background: "linear-gradient(90deg, #5eead4 0%, #2dd4bf 50%, #5eead4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                          Recruitment Agency
                        </span>
                        &nbsp;in U.K
                      </h1>

                      {/* Description */}
                      <p className="text-[14px] md:text-[15px] text-white/65 leading-relaxed mb-6 max-w-xl">
                        Whether you are looking for FTE (Full Time Employee) / Contract Role (C2H) – Infoplus Technologies offers the best service with 99% Client retention rate.
                      </p>

                      {/* Service chips */}
                      <div className="flex flex-wrap gap-2 mb-7">
                        {[
                          { label: "IT Staffing Solutions",   Icon: Users     },
                          { label: "IT Consulting Solutions", Icon: Lightbulb },
                          { label: "Umbrella Service",        Icon: Umbrella  },
                        ].map(({ label, Icon }) => (
                          <div
                            key={label}
                            className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5"
                            style={{ background: "#14b8a614", border: "1px solid #14b8a630" }}
                          >
                            <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: "#5eead4" }} />
                            <span className="text-[11px] text-white/70 font-medium whitespace-nowrap">{label}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[15px] text-white transition-all group"
                        style={{ background: "#14b8a6", boxShadow: "0 8px 28px #14b8a655" }}
                      >
                        Book A Demo
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                    </div>
                  </div>
                </div>

                {/* Mobile image */}
                <div className="md:hidden w-full relative overflow-hidden rounded-t-2xl" style={{ height: 220 }}>
                  <img src={imgSlideRec1} alt="Staffing visual" className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }} />
                </div>

                {/* Stats bar */}
                <div style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderTop: "1px solid #14b8a628" }}>
                  <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center py-3 sm:py-5">
                      {[
                        { value: "98%",  label: "Client Retention Rate" },
                        { value: "20+",  label: "Years' Experience"      },
                        { value: "120+", label: "Clients Served"         },
                      ].map((st, i) => (
                        <Fragment key={st.label}>
                          {i > 0 && <div className="w-px h-9 bg-white/15 shrink-0" />}
                          <div className="flex-1 flex flex-col items-center gap-0.5 text-center">
                            <span className="text-[18px] sm:text-[22px] md:text-[26px] font-bold leading-none tabular-nums" style={{ color: "#5eead4" }}>
                              {st.value}
                            </span>
                            <span className="text-[10px] sm:text-[11px] text-white/50 tracking-wide uppercase">
                              {st.label}
                            </span>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>{/* end slides strip */}

        {/* Arrow — prev */}
        <button
          onClick={() => setCurrentBanner((b) => Math.max(0, b - 1))}
          aria-label="Previous banner"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30"
          disabled={currentBanner === 0}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Arrow — next */}
        <button
          onClick={() => setCurrentBanner((b) => Math.min(1, b + 1))}
          aria-label="Next banner"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 disabled:opacity-30"
          disabled={currentBanner === 1}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              aria-label={`Go to banner ${idx + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentBanner === idx ? "24px" : "8px",
                height: "8px",
                backgroundColor: currentBanner === idx ? "#14b8a6" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

      </div>{/* end Hero carousel */}

      {/* â"€â"€ Intro + Differentiators â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
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

      {/* ── Why Choose Infoplus ──────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f8f5ff] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ecdaff] opacity-50 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Why Choose Us
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight mb-5 max-w-3xl mx-auto">
                Why Choose Infoplus for{" "}
                <span className="text-[#6128a6]">Staffing &amp; Consulting?</span>
              </h2>
              <p className="text-[15px] text-[#555] max-w-2xl mx-auto leading-relaxed">
                Getting the wrong advice on a project, or hiring the wrong person for the work, costs you time and money. We help you get it right — the first time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              {
                num: "01",
                icon: TrendingUp,
                title: "20+ Years. Real Experience.",
                desc: "We've been placing IT Staff and delivering IT projects for over 20 years, across the UK, Europe, and beyond. We've gained a lot of experience in finding people who fit the job — not just on paper, but in real skills and real teamwork.",
                accent: "#6128a6",
                gradient: "from-[#381f55] to-[#6128a6]",
                cardBg: "#f8f5ff",
                cardBorder: "#e4dcf5",
                hoverShadow: "hover:shadow-[0_20px_60px_-12px_rgba(97,40,166,0.18)]",
              },
              {
                num: "02",
                icon: Lightbulb,
                title: "We Go Beyond the CV.",
                desc: "Our team doesn't just look at the CV and hire people. We believe that even if the CV is extraordinary, it doesn't mean they're the perfect fit. We understand the technology itself — so we know who can genuinely do the job, not just talk about it.",
                accent: "#f85d37",
                gradient: "from-[#7c2d12] to-[#f85d37]",
                cardBg: "#fff8f6",
                cardBorder: "#fde0d6",
                hoverShadow: "hover:shadow-[0_20px_60px_-12px_rgba(248,93,55,0.14)]",
              },
              {
                num: "03",
                icon: Users,
                title: "Ready When You Need Us.",
                desc: "Need one expert for a short project? Or a full team for something bigger? Either way, our people are checked, prepared and ready to start when you need them — right away, not weeks later.",
                accent: "#aa3bff",
                gradient: "from-[#5b21b6] to-[#aa3bff]",
                cardBg: "#faf5ff",
                cardBorder: "#e9d5ff",
                hoverShadow: "hover:shadow-[0_20px_60px_-12px_rgba(170,59,255,0.14)]",
              },
            ] as const).map((item, i) => (
              <ScrollReveal key={item.num} variant="card" delay={i * 120}>
                <div
                  className={`group relative flex flex-col h-full rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 overflow-hidden ${item.hoverShadow}`}
                  style={{ background: item.cardBg, borderColor: item.cardBorder }}
                >
                  {/* Number watermark */}
                  <div
                    className="absolute -top-3 -right-1 text-[110px] font-black leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                    style={{ color: `${item.accent}18` }}
                  >
                    {item.num}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold text-[#0d0517] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Animated accent bar */}
                  <div
                    className="h-[3px] w-8 rounded-full mb-5 group-hover:w-16 transition-all duration-300"
                    style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}70)` }}
                  />

                  {/* Description */}
                  <p className="text-[14px] text-[#555] leading-relaxed flex-1">
                    {item.desc}
                  </p>

                  {/* Bottom glow on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.accent}55, transparent)` }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Services Cards â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
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
                  className="group relative flex flex-col h-full bg-white/4 border border-white/8 rounded-3xl p-7 hover:bg-white/7 hover:border-[#6128a6]/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.20)] transition-all duration-300 overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${svc.gradient} flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <svc.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold text-white mb-2 group-hover:text-[#aa3bff] transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <div className="w-8 h-0.5 rounded-full bg-[#6128a6]/50 mb-5 group-hover:w-16 transition-all duration-300" />

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
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#aa3bff] shrink-0" />
                        <span className="text-[12px] text-white/50 leading-tight">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="mt-6 flex items-center gap-1.5 text-[13px] font-semibold text-[#f85d37]">
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={STAFFING_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about our staffing and consulting services."
      />

      {/* â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
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
                  className="w-full sm:w-auto group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                >
                  Start a Conversation
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


