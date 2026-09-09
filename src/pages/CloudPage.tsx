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
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

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
    gradient: "from-[#242E72] to-[#EB9B3D]",
    tag: "SaaS",
    title: "Software-as-a-Service",
    desc: "Our SaaS solutions help you store data online efficiently and let you access it from a browser on any device no installation, no maintenance, no upfront infrastructure cost.",
  },
  {
    icon: Server,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    tag: "IaaS",
    title: "Infrastructure-as-a-Service",
    desc: "We turn your computing infrastructure into a flexible, cost-effective virtual setup managed entirely over the internet. This means less spent on the hardware and more control over how your system runs.",
  },
  {
    icon: Layers,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    tag: "PaaS",
    title: "Platform-as-a-Service",
    desc: "We take hosting, database security, and storage off your plate, so you're not tied down by long- term infrastructure investments. You get to focus on your product, not the plumbing behind it.",
  },
  {
    icon: BarChart2,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    tag: "Analytics",
    title: "Big Data Analytics Solutions",
    desc: "We store your data on the right cloud platform and turn it into insights you can use. Raw data becomes useful information that helps you make better decisions.",
  },
  {
    icon: Settings,
    gradient: "from-[#78350f] to-[#f59e0b]",
    tag: "Managed",
    title: "Managed Cloud",
    desc: "We handle your entire cloud infrastructure using the latest tools and techniques, so you get all the benefits of cloud without managing it yourself. That means fewer headaches and more time to focus on your business.",
  },
  {
    icon: Shield,
    gradient: "from-[#9a2600] to-[#F0783A]",
    tag: "Security",
    title: "Data Governance & Cyber Security",
    desc: "We protect your sensitive data from cyber threats with strong, proactive security measures. Whenever you need support, we're there to keep your systems safe.",
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
    gradient: "from-[#f59e0b] to-[#F0783A]",
    iconBg: "bg-[#fff8f0] border-[#f59e0b]/25",
    iconColor: "text-[#f59e0b]",
  },
  {
    name: "Azure",
    desc: "Microsoft Azure",
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    iconBg: "bg-[#eff6ff] border-[#3b82f6]/25",
    iconColor: "text-[#3b82f6]",
  },
  {
    name: "GCP",
    desc: "Google Cloud Platform",
    gradient: "from-[#064e3b] to-[#16a34a]",
    iconBg: "bg-[#f0fdf4] border-[#16a34a]/25",
    iconColor: "text-[#16a34a]",
  },
];

const CLOUD_FAQS: FAQItem[] = [
  {
    q: "Which cloud platform does Infoplus work with – AWS, Azure, or Google Cloud?",
    a: "All three. We choose the platform that genuinely fits your business needs and existing systems, rather than pushing you toward just one provider.",
  },
  {
    q: "What's the difference between SaaS, IaaS, and PaaS?",
    a: "SaaS is ready-to-use software online. IaaS gives you virtual infrastructure to build on. PaaS gives you a platform to develop and host applications without managing the underlying services yourself. We help you figure out which one — or which combination — fits your business.",
  },
  {
    q: "Is managed cloud only for large enterprises?",
    a: "No. Any business that wants to focus on running their operations, rather than managing cloud infrastructure themselves, can benefit — regardless of size.",
  },
  {
    q: "How does Infoplus keep our data secure once it's in the cloud?",
    a: "We build security into your cloud setup right from the start, not after something goes wrong. That means your data stays protected, monitored, and safe at all times — not just checked occasionally.",
  },
];

export default function CloudPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Cloud Portfolio & Migration Services | Infoplus UK"
        description="Planning, migration and managing cloud environments without breaking what already works. One of six core IT service lines at Infoplus."
        keywords="Cloud Service in UK, Cloud Services in UK, Cloud Service"
        path="/services/it-services/cloud-portfolio"
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Best Cloud Delivery Services in UK"
        description="We Offer Cloud Delivery Models That Scale With Your Business"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F0783A] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Explore Cloud Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Cloud Experts
          </Link>
        </div>
        {/* Provider badges */}
        {/* <div className="flex items-center justify-center gap-4 mt-10">
          {CLOUD_PROVIDERS.map(({ name, gradient }) => (
            <span
              key={name}
              className={`px-5 py-2 rounded-xl bg-linear-to-br ${gradient} text-white text-[13px] font-black tracking-wide shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)]`}
            >
              {name}
            </span>
          ))}
        </div> */}
      </PageHero>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#ffffff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Enterprise Cloud
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Secure, Scalable Cloud
                <br />
                <span className="text-[#EB9B3D]">for Modern Enterprises</span>
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
              <div className="bg-[#ffffff] border border-[rgba(13,17,45,0.08)] rounded-3xl p-8">
                <p className="text-[13px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-6">
                  Multi-Cloud Delivery
                </p>
                {CLOUD_PROVIDERS.map(({ name, desc }, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 py-3 ${i < 2 ? "border-b border-[rgba(13,17,45,0.08)]" : ""}`}
                    style={{
                      animation: `revealFade 500ms ease ${i * 130 + 200}ms both`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 flex items-center justify-center shrink-0">
                      <Cloud className="w-5 h-5 text-[#EB9B3D]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13.5px] font-bold text-[#111] leading-none mb-2">{name}</p>
                      <p className="text-[11px] text-[#888] leading-none mb-0">{desc}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#EB9B3D] ml-auto shrink-0" />
                  </div>
                ))}
                <div className="mt-6 pt-5 border-t border-[rgba(13,17,45,0.08)] text-center">
                  <p className="text-[11px] text-[#999] font-medium">
                    Through innovative solutions, we support you anywhere at
                    any time.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 6 Cloud Service Cards Cinematic grid ───────────── */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Service Models
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Our Cloud Services
              </h2>
              <p className="text-[16px] text-[#555] max-w-2xl mx-auto mt-4 leading-relaxed">
                A complete cloud portfolio spanning all delivery models 
                delivered with agility, security, and deep subject matter
                expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLOUD_SERVICES.map(
              ({ icon: SIcon, tag, title, desc }, i) => (
                <ScrollReveal
                  key={i}
                  direction="up"
                  variant="card"
                  delay={i * 85}
                >
                  <div className="group bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl overflow-hidden hover:border-[#EB9B3D]/30 hover:shadow-[0_16px_48px_-8px_rgba(235,155,61,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="p-7 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center">
                          <SIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#888] bg-[#ffffff] border border-[rgba(13,17,45,0.10)] rounded-full px-3 py-1">
                          {tag}
                        </span>
                      </div>
                      <h3 className="text-[16px] font-bold text-[#111] mb-3 group-hover:text-[#EB9B3D] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="text-[13.5px] text-[#666] leading-relaxed flex-1">
                        {desc}
                      </p>
                      <div className="flex items-center gap-1 text-[12px] font-semibold text-[#EB9B3D] group-hover:text-[#F0783A] transition-colors pt-5 border-t border-[#f0eff5]">
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

      {/* ── Our Solutions Cinematic dark list ──────────────── */}
      <section className="py-24 bg-[#0D112D] relative overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-96 h-96 rounded-full bg-[#EB9B3D]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-80 h-80 rounded-full bg-[#F0783A]/10 blur-[100px] pointer-events-none" />
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
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Why Choose Us
                </span>
                <h2 className="text-[34px] font-bold text-white mt-3 leading-tight mb-5">
                  Our Solutions &<br />
                  <span className="text-[#DA4D33]">Delivery Standards</span>
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
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-linear-to-b from-[#EB9B3D] via-[#EB9B3D]/50 to-transparent" />

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
                        <div className="w-10 h-10 rounded-full border-2 border-[#EB9B3D] bg-[#EB9B3D]/20 flex items-center justify-center relative z-10 group-hover:bg-[#EB9B3D] transition-colors duration-300">
                          <Zap className="w-4 h-4 text-[#DA4D33] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      {/* Card */}
                      <div className="flex-1 bg-white/4 border border-white/8 rounded-xl px-5 py-3.5 group-hover:bg-white/7 group-hover:border-[#EB9B3D]/30 transition-all duration-300">
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

      <FAQAccordion
        faqs={CLOUD_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about cloud services and how Infoplus helps your business move to the cloud."
      />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0D112D] to-[#242E72] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EB9B3D]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#F0783A]/10 blur-[80px] pointer-events-none" />
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F0783A] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start Cloud Migration
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
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
