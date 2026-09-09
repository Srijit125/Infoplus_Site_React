import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Settings,
  Users,
  Zap,
  Network,
  Server,
  RefreshCcw,
  ArrowRight,
  Target,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

type Goal = {
  num: string;
  icon: LucideIcon;
  gradient: string;
  title: string;
  desc: string;
};
type Pillar = {
  label: string;
  desc: string;
  gradient: string;
  icon: LucideIcon;
};

const GOALS: Goal[] = [
  {
    num: "01",
    icon: Settings,
    gradient: "from-[#242E72] to-[#EB9B3D]",
    title: "Optimise Internal Processes",
    desc: "We simplify the everyday workflows that slow your team down.",
  },
  {
    num: "02",
    icon: Users,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Improve Digital Customer Experience",
    desc: "we make every digital touchpoint with your customers smoother and more reliable.",
  },
  {
    num: "03",
    icon: Zap,
    gradient: "from-[#9a2600] to-[#F0783A]",
    title: "Create a New Digital Business Model",
    desc: "we help you find new ways to deliver value. Not just digitise the old ones.",
  },
  {
    num: "04",
    icon: RefreshCcw,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Establish an Agile & Innovative Culture",
    desc: "we help your organisation become one that adapts quickly, instead of resisting change.",
  },
  {
    num: "05",
    icon: Network,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "Launch New Value Networks & Digital Ecosystems",
    desc: "we connect you into wider digital opportunities beyond your own four walls.",
  },
];

const PILLARS: Pillar[] = [
  {
    label: "Information",
    desc: "Unifying data across the enterprise for a single source of truth and intelligent decision-making",
    gradient: "from-[#242E72] to-[#EB9B3D]",
    icon: Server,
  },
  {
    label: "Process",
    desc: "Streamlining workflows with intelligent automation and smart orchestration layers",
    gradient: "from-[#9a2600] to-[#F0783A]",
    icon: Settings,
  },
  {
    label: "Work",
    desc: "Modernising how teams collaborate, deliver outcomes, and continuously innovate together",
    gradient: "from-[#0f766e] to-[#14b8a6]",
    icon: Zap,
  },
  {
    label: "People",
    desc: "Building digital literacy and agile mindsets throughout every layer of the organisation",
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    icon: Users,
  },
];

const STRATEGY_STEPS = [
  {
    title: "Assess Your Digital Maturity",
    desc: "we evaluate your business across five key areas: Vision, Culture, Adoption, Execution, and Growth.",
  },
  {
    title: "Give Clear Recommendations",
    desc: "Based on the assessment, we tell you exactly where the gaps and opportunities are.",
  },
  {
    title: "Build a Tailored Digital Strategy",
    desc: "we shape a strategy around those specific recommendations, not a generic template.",
  },
  {
    title: "Assemble the Right Delivery Team",
    desc: "we build a team that is actually suited to the strategy, not just who is good at writing it.",
  },
  {
    title: "Work Closely With Your Business",
    desc: "Our team works hand in hand with yours, based on a resourcing model that's agreed together.",
  },
  {
    title: "Validate Real, Lasting Change",
    desc: "We confirm your organisation has become genuinely agile, with digital thinking built into its core – not just surface- level change.",
  },
];

const MATURITY_AREAS = ["Vision", "Culture", "Adoption", "Execution", "Growth"];

const TRANSFORMATION_FAQS: FAQItem[] = [
  {
    q: "What's the difference between digital transformation and just adopting new technology?",
    a: "New technology is just tools. Digital transformation means changing how your whole business works.",
  },
  {
    q: "How long does digital transformation usually take?",
    a: "It depends on your business. We check where your business is and where it is starting from, then we plan accordingly — instead of following a fixed timeline.",
  },
  {
    q: "What is a digital maturity assessment, and why does it matter?",
    a: "It's a check-up of your business across five key areas: vision, culture, adoption, execution, and growth — so we know exactly where to help.",
  },
  {
    q: "Is digital transformation only for large companies?",
    a: "No — any business that wants to modernise can benefit, whatever the size.",
  },
];

export default function TransformationPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Enterprise Digital Transformation Services"
        description="Accelerate your digital journey with Infoplus Technologies UK's enterprise transformation services. We help organisations modernise, innovate, and thrive in a digital landscape."
        path="/services/new-generation/enterprise-transformation"
      />
      {/* â"€â"€ Hero â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <PageHero
        title="End to End Enterprise Transformation for Modern Business"
        description="We Enable Digital Across the World"
        badge="NEW-GEN SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F0783A] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Start Your Transformation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Our Team
          </Link>
        </div>
        {/* 20 Success Factors badge */}
        <div className="mt-10 flex items-center justify-center">
          <span className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white/80 text-[13px] font-semibold">
            <span className="w-8 h-8 rounded-full bg-[#F0783A] flex items-center justify-center text-[12px] font-black text-white shrink-0">
              20
            </span>
            Carefully devised success factors for Digital Transformation
          </span>
        </div>
      </PageHero>

      {/* â"€â"€ Intro â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#ffffff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Generation Z Engineering
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Digital is Not a Tool.
                <br />
                <span className="text-[#EB9B3D]">
                  It's an Organisation-Wide Mindset.
                </span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Adopting new technology isn't the same as truly transforming a business. Real digital transformation means weaving "digital" into everything – how information flows, how work gets done, and how people operate day to day.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85]">
                We know transformations are hard, and digital ones are harder still. That's why we work from a proven set of success factors, refined through real client work, instead of a one- size-fits-all playbook.
              </p>
            </ScrollReveal>

            {/* Maturity Areas card */}
            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#ffffff] border border-[rgba(13,17,45,0.08)] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#EB9B3D]/8 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[13px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-5">
                    5 Digital Maturity Areas
                  </p>
                  <div className="space-y-3 mb-7">
                    {MATURITY_AREAS.map((area, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                        style={{
                          animation: `revealFade 400ms ease ${i * 90 + 200}ms both`,
                        }}
                      >
                        <div
                          className="h-2 rounded-full bg-linear-to-r from-[#EB9B3D] to-[#DA4D33] transition-all duration-300"
                          style={{ width: `${100 - i * 8}%` }}
                        />
                        <span className="text-[13px] text-[#444] font-medium shrink-0">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[rgba(13,17,45,0.08)] pt-6 text-center">
                    <p className="text-[32px] font-black text-[#111] leading-none">
                      20
                    </p>
                    <p className="text-[12px] text-[#888] mt-1">
                      Transformation Success Factors
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ 4 Integration Pillars â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-20 bg-[#0D112D] relative overflow-hidden">
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
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                How We Enable Digital
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">
                Integrating 4 Core Dimensions
              </h2>
              <p className="text-[15px] text-white/45 max-w-xl mx-auto mt-4">
                We enable digital across the world by integrating Information,
                Process, Work, and People.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map(({ label, desc, gradient, icon: PIcon }, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                variant="card"
                delay={i * 100}
              >
                <div className="group bg-white/5 border border-white/8 rounded-2xl p-7 hover:bg-white/8 hover:border-[#EB9B3D]/35 transition-all duration-300 h-full text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <PIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[18px] font-black text-white mb-3">
                    {label}
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed flex-1">
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Top 5 Goals Cinematic numbered cards â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#ffffff] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FEF0DC]/60 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Strategic Goals
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Our Top 5 Goals
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOALS.map(({ icon: GIcon, gradient, title, desc }, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                duration={700}
                delay={Math.floor(i / 2) * 80 + (i % 2) * 60}
              >
                <div className="group h-full bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl overflow-hidden hover:border-[#EB9B3D]/25 hover:shadow-[0_16px_48px_-8px_rgba(235,155,61,0.10)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="p-7 flex flex-col sm:flex-row gap-5 items-start">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <GIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-bold text-[#111] mb-2 group-hover:text-[#EB9B3D] transition-colors leading-snug">
                        {title}
                      </h3>
                      <p className="text-[14px] text-[#666] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Strategy 6-Step Vertical Timeline â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#ffffff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Sticky heading */}
            <div className="lg:sticky lg:top-[120px]">
              <ScrollReveal direction="left" duration={720}>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Our Approach
                </span>
                <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                  Our Digital
                  <br />
                  <span className="text-[#EB9B3D]">
                    Transformation Strategy
                  </span>
                </h2>
                <p className="text-[15.5px] text-[#555] leading-[1.85]">
                  A proven six-step approach to make your digital transformation
                  successful from initial assessment through to validated,
                  scalable execution.
                </p>
                <div className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-[#EB9B3D]">
                  <Target className="w-4 h-4" />
                  Assessed across 5 Maturity Dimensions
                </div>
              </ScrollReveal>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-linear-to-b from-[#EB9B3D] via-[#EB9B3D]/50 to-transparent lg:left-[27px]" />
              <div className="space-y-3">
                {STRATEGY_STEPS.map(({ title, desc }, i) => (
                  <ScrollReveal
                    key={i}
                    direction="right"
                    delay={i * 100}
                    duration={660}
                  >
                    <div className="flex gap-6 group">
                      <div className="shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 lg:w-14 lg:h-14">
                          <span className="text-[11px] font-black text-white lg:text-[13px]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 pb-5">
                        <div className="bg-[#ffffff] border border-[rgba(13,17,45,0.08)] rounded-2xl p-5 group-hover:bg-white group-hover:border-[#EB9B3D]/30 group-hover:shadow-[0_8px_32px_-8px_rgba(235,155,61,0.12)] transition-all duration-300">
                          <h3 className="text-[15px] font-bold text-[#111] mb-2 group-hover:text-[#EB9B3D] transition-colors">
                            {title}
                          </h3>
                          <p className="text-[13px] text-[#555] leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={TRANSFORMATION_FAQS} badge="FAQs" title="Frequently Asked Questions" subtitle="Common questions about our enterprise digital transformation services." />

      {/* â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0D112D] to-[#242E72] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EB9B3D]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#F0783A]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Begin Your Digital Journey
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Transform Your Enterprise.
                  <br className="hidden md:block" />
                  Lead the Digital Era.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd to drive a
                  successful digital transformation guided by 20 proven
                  success factors and our Generation Z engineers.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F0783A] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start a Maturity Assessment
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

