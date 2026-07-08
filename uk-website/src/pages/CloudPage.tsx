import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Cloud,
  Server,
  Layers,
  BarChart2,
  Shield,
  Settings,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type CloudService = {
  icon: LucideIcon;
  gradient: string;
  tag: string;
  title: string;
  desc: string;
};

const CLOUD_SERVICES: CloudService[] = [
  {
    icon: Cloud,
    gradient: "from-[#381f55] to-[#6128a6]",
    tag: "SaaS",
    title: "Software-as-a-Service",
    desc: "Our SaaS solutions help you store data online efficiently and let you access it from a browser on any device — no installation, no maintenance, no upfront infrastructure cost.",
  },
  {
    icon: Server,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    tag: "IaaS",
    title: "Infrastructure-as-a-Service",
    desc: "Cost-optimised solutions that powerfully virtualise your entire computing infrastructure and successfully manage it over the Internet — on demand, at scale.",
  },
  {
    icon: Layers,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    tag: "PaaS",
    title: "Platform-as-a-Service",
    desc: "Outsource hosting, database security, and storage so that you can avoid long-term investments and focus entirely on building and delivering your applications.",
  },
  {
    icon: BarChart2,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    tag: "Analytics",
    title: "Big Data Analytics Solutions",
    desc: "Your big data will be stored on the right cloud platform and Infoplus Analytics solutions process that data effectively — turning raw information into actionable business insights.",
  },
  {
    icon: Settings,
    gradient: "from-[#78350f] to-[#f59e0b]",
    tag: "Managed",
    title: "Managed Cloud",
    desc: "Infoplus manages your cloud infrastructure using cutting-edge technologies, enabling you to realise the full benefits of cloud computing without the operational burden.",
  },
  {
    icon: Shield,
    gradient: "from-[#9a2600] to-[#f85d37]",
    tag: "Security",
    title: "Data Governance & Cyber Security",
    desc: "Increase your data security to protect sensitive data from cyber threats and ensure compliance with data governance frameworks — across all cloud environments.",
  },
];

const OUR_SOLUTIONS = [
  "All services and solutions are delivered in an agile and flexible approach",
  "Strong subject matter expertise in providing end-to-end cloud managed services",
  "Delivered various cloud services such as consulting, administration, troubleshooting, management, monitoring, and security",
  "Worked closely with clients on their agile transformation journey by designing and delivering cloud migration, cloud infrastructure optimisation, and evolution solutions",
  "Twenty-four seven, three hundred sixty-five days support",
  "Focused team solutions for Continuous Integration and Continuous Delivery/Deployment (CI/CD)",
  "For the highest quality, our quality assurance team developed quality plans which include Functional, Performance, and Business Reassurance",
];

const CLOUD_PROVIDERS = [
  {
    name: "AWS",
    desc: "Amazon Web Services",
    gradient: "from-[#f59e0b] to-[#f85d37]",
  },
  {
    name: "Azure",
    desc: "Microsoft Azure",
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
  },
  {
    name: "GCP",
    desc: "Google Cloud Platform",
    gradient: "from-[#0f766e] to-[#14b8a6]",
  },
];

export default function CloudPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Cloud Computing Services &amp; Solutions"
        description="Transform your business with Infoplus Technologies UK's cloud services. We deliver cloud strategy, migration, and management across AWS, Azure, and Google Cloud platforms."
        path="/services/it-services/cloud-portfolio"
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Cloud Portfolio"
        description="We Offer Cloud Delivery Models That Scale With Your Business"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Explore Cloud Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Cloud Experts
          </Link>
        </div>
        {/* Provider badges */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {CLOUD_PROVIDERS.map(({ name, gradient }) => (
            <span
              key={name}
              className={`px-5 py-2 rounded-xl bg-linear-to-br ${gradient} text-white text-[13px] font-black tracking-wide shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)]`}
            >
              {name}
            </span>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 opacity-40">
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
                Enterprise Cloud
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Secure, Scalable Cloud
                <br />
                <span className="text-[#6128a6]">for Modern Enterprises</span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Infoplus cloud portfolio is an enterprise cloud service offering
                secure and scalable cloud solutions, including private, public,
                and managed cloud services. We help you meet compliance,
                security, and business continuity goals.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85]">
                Our experts at Infoplus cloud portfolio have successfully
                collaborated with many industry giants to modernise their
                applications and infrastructure. We offer services through all
                the available cloud delivery models such as AWS, Azure, and
                Google Cloud.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#0d0517] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/30 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#aa3bff] mb-6">
                    Multi-Cloud Delivery
                  </p>
                  {CLOUD_PROVIDERS.map(({ name, desc, gradient }, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 py-4 ${i < 2 ? "border-b border-white/8" : ""}`}
                      style={{
                        animation: `revealFade 500ms ease ${i * 130 + 200}ms both`,
                      }}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0`}
                      >
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[16px] font-black text-white">
                          {name}
                        </p>
                        <p className="text-[12px] text-white/40">{desc}</p>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-[#aa3bff] ml-auto shrink-0" />
                    </div>
                  ))}
                  <div className="mt-6 pt-5 border-t border-white/8 text-center">
                    <p className="text-[11px] text-white/30 font-medium">
                      Through innovative solutions, we support you anywhere at
                      any time.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 6 Cloud Service Cards — Cinematic grid ───────────── */}
      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Service Models
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Our Cloud Services
              </h2>
              <p className="text-[16px] text-[#555] max-w-2xl mx-auto mt-4 leading-relaxed">
                A complete cloud portfolio spanning all delivery models —
                delivered with agility, security, and deep subject matter
                expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLOUD_SERVICES.map(
              ({ icon: SIcon, gradient, tag, title, desc }, i) => (
                <ScrollReveal
                  key={i}
                  direction="up"
                  variant="card"
                  delay={i * 85}
                >
                  <div className="group bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#6128a6]/30 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                    {/* Accent gradient bar */}
                    <div className={`h-1.5 bg-linear-to-r ${gradient}`} />
                    <div className="p-7 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center`}
                        >
                          <SIcon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#888] bg-[#f8f5ff] border border-[#e5e4e7] rounded-full px-3 py-1">
                          {tag}
                        </span>
                      </div>
                      <h3 className="text-[16px] font-bold text-[#111] mb-3 group-hover:text-[#6128a6] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="text-[13.5px] text-[#666] leading-relaxed flex-1">
                        {desc}
                      </p>
                      <div className="flex items-center gap-1 text-[12px] font-semibold text-[#6128a6] group-hover:text-[#f85d37] transition-colors mt-5 pt-5 border-t border-[#f0eff5]">
                        Learn More <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── Our Solutions — Cinematic dark list ──────────────── */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Sticky heading */}
            <div className="lg:sticky lg:top-[120px]">
              <ScrollReveal direction="left" duration={720}>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                  Why Choose Us
                </span>
                <h2 className="text-[34px] font-bold text-white mt-3 leading-tight mb-5">
                  Our Solutions &<br />
                  <span className="text-[#aa3bff]">Delivery Standards</span>
                </h2>
                <p className="text-[15px] text-white/50 leading-relaxed mb-8">
                  All services and solutions are delivered in an agile and
                  flexible approach with strong subject matter expertise and a
                  commitment to continuous improvement.
                </p>
                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "365", label: "Days/year support" },
                    { value: "24/7", label: "Cloud monitoring" },
                    { value: "CI/CD", label: "Focused delivery" },
                    { value: "3", label: "Cloud platforms" },
                  ].map(({ value, label }, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/8 rounded-xl p-4"
                      style={{
                        animation: `revealFade 500ms ease ${i * 100 + 200}ms both`,
                      }}
                    >
                      <p className="text-[22px] font-black text-white leading-none mb-1">
                        {value}
                      </p>
                      <p className="text-[11px] text-white/35 font-medium">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Vertical animated solution list */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-linear-to-b from-[#6128a6] via-[#6128a6]/50 to-transparent" />

              <div className="space-y-2">
                {OUR_SOLUTIONS.map((sol, i) => (
                  <ScrollReveal
                    key={i}
                    direction="right"
                    delay={i * 90}
                    duration={600}
                  >
                    <div className="flex gap-5 pb-2 group">
                      {/* Circle on the line */}
                      <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full border-2 border-[#6128a6] bg-[#6128a6]/20 flex items-center justify-center relative z-10 group-hover:bg-[#6128a6] transition-colors duration-300">
                          <Zap className="w-4 h-4 text-[#aa3bff] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      {/* Card */}
                      <div className="flex-1 bg-white/4 border border-white/8 rounded-xl px-5 py-3.5 group-hover:bg-white/7 group-hover:border-[#6128a6]/30 transition-all duration-300">
                        <p className="text-[14px] text-white/65 font-medium leading-relaxed">
                          {sol}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
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
                  Move to the Cloud
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Modernise Your Infrastructure
                  <br className="hidden md:block" />
                  with Confidence
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd for your cloud
                  transformation. Secure, scalable, and agile cloud solutions
                  delivered around the clock.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start Cloud Migration
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
                  >
                    Email Our Cloud Team
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
