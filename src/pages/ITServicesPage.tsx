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
  Layers,
  Clock,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import imgCareerHero from "../assets/images/career_hero.jpg";
import { FAQAccordion } from "../components/shared/FAQAccordion";
import type { FAQItem } from "../components/shared/FAQAccordion";

/* â"€â"€ Service cards â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */
const SERVICES = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    href: "/services/it-services/artificial-intelligence",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Boost your business processes by applying artificial intelligence solutions for process automation, better decision-making and innovation.",
  },
  {
    icon: Code2,
    title: "Software Development",
    href: "/services/it-services/software-development",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Innovate fast and drive your business towards sustainable success with our Expert Team's web, mobile, and enterprise application development services.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    href: "/services/it-services/testing",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Ensure your product success by leveraging our end-to-end testing services. We help you mitigate risks, boost application performance and provide seamless user experience.",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    href: "/services/it-services/infrastructure-management",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Manage your IT infrastructure effectively with our proactive management services aimed at maximizing your efficiency and growing your business.",
  },
  {
    icon: Database,
    title: "SAP Consulting & Implementation",
    href: "/services/it-services/sap-consulting",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Realize the full potential of SAP with our consulting services. We provide customized SAP solutions aimed at improving efficiency and business performance.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    href: "/services/it-services/cyber-security",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Guard your business from malicious attacks using intelligent cybersecurity solutions which will secure your data and guarantee uninterrupted business operations.",
  },
  {
    icon: Cloud,
    title: "Cloud Portfolio",
    href: "/services/it-services/cloud-portfolio",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Optimize your cloud portfolio with customized solutions designed to provide high scalability and efficiency.",
  },
];

const IT_FAQS: FAQItem[] = [
  {
    q: "What are the IT Services Infoplus Technologies Provide?",
    a: "We offer End to End IT Solutions including: Software Development, Testing, Artificial Intelligence, Cyber Security, Cloud Portfolios, Infrastructure Management, & SAP Consulting.",
  },
  {
    q: "Which Industries Infoplus Technologies serve?",
    a: "Infoplus Technologies works with various businesses across different industries like: Software, Pharmaceuticals, Health Care, Insurance, Transport, Retail, Broadcasting, Manufacturing, Real Estate, Agriculture, Construction, Telecommunication, & Education etc.",
  },
  {
    q: "Can you provide customized software for your business?",
    a: "Yes. We offer to design and develop customized software in accordance with your business needs. Our services cover every aspect of the process including requirement analysis, UI/UX designing, development, testing, deployment, and maintenance.",
  },
  {
    q: "Does Infoplus Technologies provide ongoing support and maintenance after the completion of the project?",
    a: "Yes. Our Technical Experts take care of everything after the deployment of the project (24/7 Support).",
  },
];

export default function ITServicesPage() {
  return (
    <div className="w-full">
      <PageMeta
        title="IT Services Hub | Infoplus Technologies UK"
        description="Software development, testing, infrastructure management, SAP, cybersecurity & cloud, ground-up under one IT services division at Infoplus."
        keywords="IT service in UK, IT service, IT Services in UK"
        path="/services/it-services"
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        variant="gradient"
        badge="IT SERVICES"
        title="All Your IT Services Under One Roof"
        description="Delivering innovative technology solutions including Artificial Intelligence, Software Development, Testing, Infrastructure Management, SAP Consulting, Cyber Security and Cloud Portfolio for businesses worldwide."
      >
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-[14px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)]"
            style={{ background: "linear-gradient(135deg,#EB9B3D 0%,#DA4D33 100%)" }}
          >
            Discuss Your Project <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </PageHero>

      {/* Intro + Vision */}
      <section className="py-24 bg-[#ffffff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FEF0DC] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Intro text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Our Approach
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0D112D] leading-tight mb-6">
                  Strategically led.&nbsp;
                  <span className="text-[#EB9B3D]">Proactively managed.</span>
                </h2>
                <p className="text-[15px] text-[#0D112D]/65 leading-relaxed mb-5 text-justify">
                  In order for a business to strive and to meet its planned
                  objectives, supporting IT is not just enough it must be
                  strategically led and proactively managed. Our
                  forward-thinking IT service CoE (Center of Excellence) team
                  has been designing end-to-end solutions for organisations to
                  have a technology edge and to be ahead of the curve while
                  running their operations seriously, thus making their
                  infrastructure highly available.
                </p>
                <p className="text-[15px] text-[#0D112D]/65 leading-relaxed text-justify">
                  Infoplus Technologies has carefully structured different
                  business verticals to cater to the needs of every IT service
                  requirement at any time from software development and AI to
                  infrastructure management and cyber security.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision card + feature chips */}
            <ScrollReveal direction="right" delay={120}>
              <div className="space-y-5">
                {/* Vision card */}
                <div className="relative bg-[#0D112D] rounded-3xl p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#EB9B3D] opacity-20 blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#DA4D33]/20 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-[#DA4D33]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#DA4D33]">
                        Vision
                      </span>
                    </div>
                    <p className="text-[16px] text-white/85 leading-relaxed italic">
                      "We strive to support improvements in IT services and
                      solutions in order to make a visible positive contribution
                      to the client's IT growth strategy."
                    </p>
                    <div className="mt-5 h-px bg-linear-to-r from-[#EB9B3D]/60 via-[#DA4D33]/40 to-transparent" />
                    <p className="mt-3 text-[12px] text-white/40 font-semibold uppercase tracking-widest">
                      Infoplus Technologies IT CoE
                    </p>
                  </div>
                </div>

                {/* Feature chips */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Globe, label: "Europe & India", color: "#EB9B3D" },
                    { icon: Users, label: "Dedicated CoE", color: "#DA4D33" },
                    { icon: Zap, label: "End-to-End", color: "#F0783A" },
                  ].map((f, i) => (
                    <div
                      key={f.label}
                      className="flex flex-col items-center gap-2 bg-white border border-[#FEF0DC] rounded-2xl py-4 px-3 hover:border-[#EB9B3D]/30 hover:shadow-[0_4px_16px_rgba(235,155,61,0.08)] transition-all duration-300"
                      style={{
                        animation: `revealFade 350ms ease ${i * 80 + 300}ms both`,
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: `${f.color}15`,
                          color: f.color,
                        }}
                      >
                        <f.icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#0D112D]/70 text-center">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- Why Choose Us ----------------------------------------- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-8%] w-96 h-96 rounded-full bg-[#FEF0DC] opacity-50 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-8%] left-[-5%] w-72 h-72 rounded-full bg-[#EB9B3D]/10 blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Why Choose Us
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0D112D] leading-tight mb-6">
                  Why Choose Infoplus for{" "}
                  <span className="text-[#EB9B3D]">IT Services</span>
                </h2>
                <p className="text-[15px] text-[#555] leading-relaxed mb-10 text-justify">
                  At Infoplus, we believe technology should make business easier
                  rather than complicate its needs. Our technical teams work
                  closely with clients to deliver innovative, secure &amp;
                  scalable IT solutions tailored to their unique business needs.
                  From development to delivery we provide 24/7 support,
                  upholding commitment, transparency &amp; real business value.
                  We deliver projects on time with no compromise on quality,
                  fostering transparency, long-term partnerships, and helping
                  businesses confidently embrace digital transformation.
                </p>

                {/* Feature tiles */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: Layers,
                      label: "End to End IT Solutions",
                      desc: "Full-lifecycle coverage from strategy to delivery",
                      color: "#EB9B3D",
                    },
                    {
                      icon: Users,
                      label: "Skilled Team",
                      desc: "Experienced engineers across Europe & India",
                      color: "#DA4D33",
                    },
                    {
                      icon: Clock,
                      label: "24/7 Support",
                      desc: "Round-the-clock monitoring and assistance",
                      color: "#F0783A",
                    },
                    {
                      icon: Star,
                      label: "Focus on Quality",
                      desc: "No compromise on standards, every delivery",
                      color: "#14b8a6",
                    },
                    {
                      icon: Zap,
                      label: "Fast Delivery",
                      desc: "Agile execution without sacrificing quality",
                      color: "#F0783A",
                    },
                  ].map((f, i) => (
                    <div
                      key={f.label}
                      className={`flex items-start gap-3 p-4 rounded-2xl border border-[#f0ecf9] hover:border-[#EB9B3D]/25 hover:shadow-[0_4px_16px_rgba(235,155,61,0.08)] transition-all duration-300 bg-[#fafafe]${i === 4 ? " col-span-2" : ""}`}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${f.color}18`,
                          color: f.color,
                        }}
                      >
                        <f.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#0D112D] mb-0.5">
                          {f.label}
                        </p>
                        <p className="text-[12px] text-[#888] leading-snug">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Placeholder image panel */}
            <ScrollReveal direction="right" delay={120}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden h-120">
                  <img
                    src={imgCareerHero}
                    alt="Infoplus IT Services team"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(235,155,61,0.12)] border border-[#FEF0DC]">
                  <p className="text-[26px] font-black text-[#EB9B3D] leading-none mb-0">
                    20+
                  </p>
                  <p className="text-[11px] text-[#888]">
                    Years of IT Excellence
                  </p>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#F0783A] text-white rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(248,93,55,0.30)]">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-0">
                    ISO 27001
                  </p>
                  <p className="text-[10px] opacity-80">Certified</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ Services Grid â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#0D112D] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#242E72] opacity-35 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#EB9B3D] opacity-15 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our IT Service Verticals
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                Seven pillars of&nbsp;
                <span className="text-[#DA4D33]">IT excellence</span>
              </h2>
              <p className="text-[15px] text-white/50 mt-4 max-w-2xl mx-auto">
                Each vertical is purpose-built and CoE-backed click any service
                to explore the full offering.
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
                  className="group relative flex flex-col h-full bg-white/4 border border-white/8 rounded-3xl p-7 hover:bg-white/7 hover:border-[#EB9B3D]/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(235,155,61,0.20)] transition-all duration-300 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#EB9B3D]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${svc.gradient} flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svc.icon
                      className="w-5 h-5 text-white"
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold text-white mb-2 group-hover:text-[#DA4D33] transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Accent line */}
                  <div className="w-8 h-0.5 rounded-full mb-5 bg-[#EB9B3D]/50 group-hover:w-16 transition-all duration-300" />

                  {/* Description */}
                  <p className="text-[14px] text-white/55 leading-relaxed flex-1 group-hover:text-white/70 transition-colors duration-300 mb-0">
                    {svc.desc}
                  </p>

                  {/* Read More link */}
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

      <FAQAccordion
        faqs={IT_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        defaultOpen={0}
      />

      {/* â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#ffffff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #EB9B3D 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#141A3D] via-[#242E72] to-[#EB9B3D] rounded-3xl p-10 md:p-14 text-center overflow-hidden shadow-[0_32px_80px_rgba(235,155,61,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-80 h-80 rounded-full bg-[#DA4D33] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-[#F0783A] opacity-12 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Work With Us
              </span>
              <h2 className="relative z-10 text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white leading-tight mb-5">
                Ready to transform your IT landscape?
              </h2>
              <p className="relative z-10 text-[15px] text-white/60 mb-10 max-w-2xl mx-auto">
                Let our IT CoE team design a strategy that gives your
                organisation a genuine technology edge. Offices in Europe and
                India, available around the clock.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)]"
                  style={{
                    background:
                      "linear-gradient(135deg,#EB9B3D 0%,#DA4D33 100%)",
                  }}
                >
                  Start a Conversation
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
