import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Monitor, Activity, Clock, BarChart2, Shield,
  Globe, Layers, Server, TrendingUp, Users,
  Target, MessageSquare, Lock, CheckCircle2,
  ArrowRight, type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

type Benefit = {
  icon: LucideIcon;
  title: string;
  gradient: string;
};

type InfraService = {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
};

const BENEFITS: Benefit[] = [
  { icon: TrendingUp,    title: "Reduced IT Operations Cost",     gradient: "from-[#381f55] to-[#6128a6]" },
  { icon: Target,        title: "Increased Operational Efficiency", gradient: "from-[#0f766e] to-[#14b8a6]" },
  { icon: Activity,      title: "Improved Productivity",           gradient: "from-[#1e3a8a] to-[#3b82f6]" },
  { icon: Users,         title: "Intelligent Collaboration",       gradient: "from-[#4c1d95] to-[#7c3aed]" },
  { icon: Shield,        title: "Peace of Mind",                   gradient: "from-[#78350f] to-[#f59e0b]" },
  { icon: Lock,          title: "Enhanced IT Security",            gradient: "from-[#9a2600] to-[#f85d37]" },
  { icon: MessageSquare, title: "Rapid Response to IT Issues",     gradient: "from-[#1e3a8a] to-[#3b82f6]" },
  { icon: CheckCircle2,  title: "Additional Support",              gradient: "from-[#0f766e] to-[#14b8a6]" },
  { icon: Globe,         title: "Improved User Experience",        gradient: "from-[#381f55] to-[#6128a6]" },
];

const INFRA_SERVICES: InfraService[] = [
  {
    icon: Monitor,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "Infrastructure Monitoring & Real-time Dashboards",
    desc: "We give you a live, clear view of your systems, so you always know exactly what's happening, not what happened yesterday.",
  },
  {
    icon: Activity,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Application Monitoring & Management",
    desc: "We keep a close eye on your applications, catching issues early before they affect your users.",
  },
  {
    icon: Clock,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Availability Management",
    desc: "We work to keep your systems up and running consistently, minimising the downtime that costs your business.",
  },
  {
    icon: BarChart2,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    title: "Capacity Planning & Management",
    desc: "We plan ahead so your systems can handle growth rather than buckling under it when demand increases.",
  },
  {
    icon: TrendingUp,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "Performance & Load Monitoring",
    desc: "We track how your systems perform under real conditions, so slow downs get caught before your customers notice.",
  },
  {
    icon: Shield,
    gradient: "from-[#9a2600] to-[#f85d37]",
    title: "Vulnerability & Automatic Patch Management",
    desc: "We keep your systems updated and protected automatically, closing security gaps before they become a real risk.",
  },
  {
    icon: Globe,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Follow-the-Sun Support Model",
    desc: "We provide support around the clock, handed off across time zones, so help is always available when you need it.",
  },
  {
    icon: Layers,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "SIAM System Integration & Asset Management",
    desc: "We bring together your different systems and vendors into one coordinated approach, so nothing falls through the cracks.",
  },
  {
    icon: Activity,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Health Checks & Peak Season Programmes",
    desc: "We prepare your systems in advance for high-demand periods, so they hold up when it matters most.",
  },
  {
    icon: Target,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    title: "Consulting & Implementation Services",
    desc: "We guide you through infrastructure decisions and put the right solutions in place properly, from planning to execution.",
  },
  {
    icon: Server,
    gradient: "from-[#9a2600] to-[#f85d37]",
    title: "Data Center Migrations",
    desc: "We move your infrastructure to new environments carefully, minimising disruption to your day-to-day operations.",
  },
];

const INFRA_FAQS: FAQItem[] = [
  {
    q: "What's the difference between infrastructure Monitoring and Application Monitoring?",
    a: "Infrastructure monitoring checks your services, networks, and hardware. Application monitoring checks how your actual software is performing. We cover both, so nothing gets missed.",
  },
  {
    q: "What does 'Follow-the-sun' support mean?",
    a: "It means different teams around the world take turns supporting you, so help is always available, no matter what time it is for you.",
  },
  {
    q: "Why do we need capacity planning if everything's working fine right now?",
    a: "Because things can change fast as your business grows. Capacity planning ensures your systems are ready for that growth, rather than breaking down when it happens.",
  },
  {
    q: "Will a data centre migration disrupt our business?",
    a: "No — we move things carefully so your operations keep running smoothly.",
  },
];

export default function InfrastructurePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="IT Infrastructure Management Services"
        description="Ensure business continuity with Infoplus Technologies UK's infrastructure management. We provide proactive monitoring, support, and optimisation for your IT environment."
        path="/services/it-services/infrastructure-management"
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Best Infrastructure Management Services In UK"
        description="We Deliver Industry-Leading Best Practices and Technologies"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Get a Free Assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Experts
          </Link>
        </div>
      </PageHero>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text 3 cols */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left" duration={700}>
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  About Our Practice
                </span>
                <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                  Proactive Infrastructure Management<br />
                  <span className="text-[#6128a6]">for Global Enterprises</span>
                </h2>
                <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                  We've built our reputation by helping large, global organisations manage their technology and data proactively, not just reactively. Our infrastructure management provides a single, complete view of your systems and applications, so nothing gets missed.
                </p>
                <p className="text-[15.5px] text-[#555] leading-[1.85]">
                  Our main goal is simple: keep your downtime low and your business running smoothly. We deliver all of this using proven, industry- leading practices, working alongside trusted partners.
                </p>
              </ScrollReveal>
            </div>

            {/* Stats card 2 cols */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right" duration={700} delay={150}>
                <div className="bg-[#f8f5ff] border border-[#e8e0f7] rounded-3xl p-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#6128a6] mb-6">
                    Client-Proven Results
                  </p>
                  {[
                    { value: "40%", label: "Average cost reduction" },
                    { value: "99.9%", label: "Uptime SLA target" },
                    { value: "24/7", label: "Follow-the-sun support" },
                  ].map(({ value, label }, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between py-4 ${
                        i < 2 ? "border-b border-[#e8e0f7]" : ""
                      }`}
                      style={{ animation: `revealFade 500ms ease ${i * 120 + 200}ms both` }}
                    >
                      <p className="text-[13px] text-[#888]">{label}</p>
                      <p className="text-[22px] font-black text-[#111]">{value}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Benefits ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-96 h-96 rounded-full bg-[#6128a6]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-80 h-80 rounded-full bg-[#f85d37]/10 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Immediate Impact
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">Key Benefits</h2>
              <p className="text-[15px] text-white/45 max-w-2xl mx-auto mt-4">
                Through our customer-centric approach, competency, flexibility, and future-driven
                technology exposure, you can experience these key benefits immediately.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map(({ icon: BIcon, title, gradient }, i) => (
              <ScrollReveal key={i} direction="up" variant="card" delay={i * 70}>
                <div className="group flex items-center gap-4 bg-white/5 border border-white/8 rounded-xl px-5 py-4 hover:bg-white/9 hover:border-[#6128a6]/40 transition-all duration-300">
                  <div
                    className={`w-11 h-11 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <BIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[14px] font-semibold text-white/80 leading-snug">{title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Services Cinematic alternating cards ─────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#ecdaff]/60 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                What We Deliver
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">Our Services</h2>
              <p className="text-[16px] text-[#555] max-w-2xl mx-auto mt-4 leading-relaxed">
                With our proven experience in Infrastructure Management and Operations, we deliver
                an exclusive set of services designed for enterprise environments.
              </p>
            </div>
          </ScrollReveal>

          {/* Two-column service grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INFRA_SERVICES.map(({ icon: SIcon, gradient, title, desc }, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                duration={650}
                delay={Math.floor(i / 2) * 80}
                className="h-full"
              >
                <div className="group h-full flex items-start gap-5 bg-white border border-[#e5e4e7] rounded-2xl p-6 hover:border-[#6128a6]/30 hover:shadow-[0_12px_36px_-8px_rgba(97,40,166,0.10)] hover:-translate-y-0.5 transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <SIcon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-bold text-[#111] group-hover:text-[#6128a6] transition-colors leading-snug mb-2">
                      {title}
                    </h3>
                    <p className="text-[13.5px] text-[#666] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={INFRA_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about our infrastructure services. Can't find what you're looking for? Reach out to our team."
      />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0d0517] to-[#381f55] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Get Started Today
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Minimise Downtime.<br className="hidden md:block" />
                  Maximise Productivity.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Let Infoplus handle your IT infrastructure so you can focus on what matters most
                  growing your business. Our teams are available around the clock.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Request a Free Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
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
