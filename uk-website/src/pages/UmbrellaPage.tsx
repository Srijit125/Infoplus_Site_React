import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Shield, FileText, CheckCircle2, Settings,
  TrendingUp, Zap, Users, Globe, ArrowRight,
  ChevronRight, type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type ServiceCard = {
  icon: LucideIcon;
  gradient: string;
  title: string;
  desc: string;
};

const WHAT_WE_HANDLE: ServiceCard[] = [
  {
    icon: FileText,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "Invoicing & Collections",
    desc: "We handle all invoicing, chasing, and collecting of your hard-earned cash from your agency or end client â€” so you never have to chase payments yourself.",
  },
  {
    icon: Settings,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Tax & NI Calculations",
    desc: "We calculate your Tax and National Insurance contributions at source â€” accurately and compliantly, so you are completely protected at all times.",
  },
  {
    icon: Shield,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Business Expenses",
    desc: "We process any legitimate budgeted business expenses as part of your payment structure, ensuring every eligible expense is captured and processed correctly.",
  },
  {
    icon: CheckCircle2,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "Full Compliance",
    desc: "Your payments are calculated correctly and you are completely protected and compliant â€” eliminating the stress and risk of running your own company structure.",
  },
];

const WHY_INFOPLUS = [
  {
    icon: TrendingUp,
    title: "Optimise Internal Processes",
    desc: "Streamlined operations that free you from admin burden and let you focus entirely on your contracting work.",
  },
  {
    icon: Users,
    title: "Improve Digital Customer Experience",
    desc: "A modern, seamless experience for contractors and agencies alike â€” fast, transparent, and always on.",
  },
  {
    icon: Zap,
    title: "Create a New Digital Business Model",
    desc: "Move beyond traditional employment models and embrace a smarter, more flexible way of working.",
  },
  {
    icon: Globe,
    title: "Establish an Agile & Innovative Culture",
    desc: "Join an umbrella service that continuously innovates â€” keeping you ahead of regulatory and market changes.",
  },
  {
    icon: Shield,
    title: "Launch New Value Networks",
    desc: "Access new digital ecosystems and value networks that expand your reach and opportunities as a contractor.",
  },
];

const BENEFITS = [
  "No personal liability â€” Infoplus acts as your employer",
  "No company formation, accounting, or tax returns required",
  "Immediate payroll setup â€” start contracting in days",
  "Full employment rights including statutory benefits",
  "Experts handle all the hassle so you can focus on delivery",
  "Safe, compliant, and HMRC-recognised umbrella structure",
];

export default function UmbrellaPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Umbrella Company Services"
        description="Simplify your contracting with Infoplus Technologies UK's umbrella company service. We provide compliant, hassle-free payroll and employment solutions for IT contractors across the UK."
        path="/services/staffing-consulting/umbrella-service"
      />
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PageHero
        title="Umbrella Service"
        description="We Take Care of All the Bits"
        badge="STAFFING & CONSULTING"
        variant="centered"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Get Started Today
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
          <p className="text-[10px] font-bold uppercase tracking-widest text-white">Scroll</p>
          <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
        </div>
      </PageHero>

      {/* â”€â”€ What Is an Umbrella Company â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                What We Do
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Contracting Made Simple.<br />
                <span className="text-[#6128a6]">Life Made Better.</span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Whether you're new to contracting or are an old hand, an umbrella company such as
                Infoplus is an extremely simple option if you can't face all the hassle, admin, tax
                issues, stress, and responsibility of running your own Ltd company.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                In simple terms, an umbrella company acts as an employer for independent contractors
                who work under temporary contracts â€” very often through an employment agency, but also
                directly with end clients. As an Infoplus employee, you really will be looked after.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85]">
                Umbrella companies like Infoplus are brilliant at offering contractors a first-class
                work-life balance â€” they take away the bulk of the stressful and time-consuming
                administration, paperwork, and hassle that's often associated with running your own
                company, without losing the financial benefit this style of working provides.
              </p>
            </ScrollReveal>

            {/* Benefits visual */}
            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#0d0517] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/30 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#aa3bff] mb-6">
                    Contractor Benefits
                  </p>
                  <div className="space-y-3">
                    {BENEFITS.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                        style={{ animation: `revealFade 400ms ease ${i * 80 + 200}ms both` }}
                      >
                        <div className="w-5 h-5 rounded-full bg-[#6128a6]/30 border border-[#6128a6]/50 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-[#aa3bff]" />
                        </div>
                        <p className="text-[13px] text-white/65 leading-relaxed">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ What We Handle â€” 4 Cinematic Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                All Handled For You
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">What We Take Care Of</h2>
              <p className="text-[15px] text-[#555] max-w-2xl mx-auto mt-4 leading-relaxed">
                We do all this so you can be sure your payments are calculated correctly and you are
                completely protected and compliant at all times.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHAT_WE_HANDLE.map(({ icon: HIcon, gradient, title, desc }, i) => (
              <ScrollReveal key={i} direction="up" variant="card" delay={i * 90}>
                <div className="group bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#6128a6]/25 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.10)] hover:-translate-y-1 transition-all duration-300">
                  <div className={`h-1.5 bg-linear-to-r ${gradient}`} />
                  <div className="p-8 flex gap-5 items-start">
                    <div className={`w-13 h-13 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <HIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-[#111] mb-2 group-hover:text-[#6128a6] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="text-[13.5px] text-[#666] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Why Infoplus â€” Cinematic dark rows â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-[#6128a6]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f85d37]/8 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                The Infoplus Difference
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">
                Why Choose Infoplus Umbrella?
              </h2>
              <p className="text-[15px] text-white/45 max-w-2xl mx-auto mt-4">
                Infoplus Umbrella Service is fast gaining a reputation for being the safest and
                most reliable choice for both contractors and agencies alike.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {WHY_INFOPLUS.map(({ icon: WIcon, title, desc }, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} direction={isEven ? "left" : "right"} duration={680} delay={60}>
                  <div className="group flex flex-col sm:flex-row gap-5 items-start bg-white/4 border border-white/8 rounded-2xl p-6 hover:bg-white/7 hover:border-[#6128a6]/30 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#6128a6]/8 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <WIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 relative z-10">
                      <h3 className="text-[17px] font-bold text-white mb-2 leading-snug">{title}</h3>
                      <p className="text-[13.5px] text-white/50 leading-relaxed">{desc}</p>
                    </div>

                    <ChevronRight className="w-5 h-5 text-white/15 group-hover:text-[#aa3bff] group-hover:translate-x-1 transition-all duration-300 shrink-0 self-center hidden sm:block" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€ Simple Steps â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-16 bg-[#f8f5ff] border-y border-[#e5e4e7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#888] text-center mb-8">
              Getting started is easy
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Contact Us", desc: "Fill in your details on the contact page or call us directly." },
              { step: "02", title: "We Set You Up", desc: "Our team handles all the onboarding paperwork and setup quickly." },
              { step: "03", title: "Start Contracting", desc: "Get paid accurately, compliantly, and on time â€” every time." },
            ].map(({ step, title, desc }, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100} variant="card">
                <div className="relative flex flex-col items-center text-center p-6 bg-white border border-[#e5e4e7] rounded-2xl hover:border-[#6128a6]/25 hover:shadow-[0_8px_24px_-4px_rgba(97,40,166,0.08)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center mb-4 shadow-[0_8px_24px_-4px_rgba(97,40,166,0.35)]">
                    <span className="text-[13px] font-black text-white">{step}</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-[#111] mb-2">{title}</h3>
                  <p className="text-[13px] text-[#666] leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0d0517] to-[#381f55] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Join Infoplus Umbrella
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Focus on Your Work.<br className="hidden md:block" />
                  Leave the Rest to Us.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  The safest, most reliable umbrella service for contractors and agencies alike.
                  Join Infoplus today â€” setup is fast, compliance is guaranteed.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Join Infoplus Umbrella
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

