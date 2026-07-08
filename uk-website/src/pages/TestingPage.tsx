import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Globe,
  Zap,
  Shield,
  Layers,
  Activity,
  Search,
  RefreshCcw,
  Target,
  Users,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type TestType = {
  icon: LucideIcon;
  gradient: string;
  title: string;
  desc: string;
};

type SolutionItem = {
  icon: LucideIcon;
  number: string;
  title: string;
  tagline: string;
};

const TESTING_TYPES: TestType[] = [
  {
    icon: Globe,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "SOA / Web Services Testing",
    desc: "Comprehensive testing of service-oriented architecture and web services to ensure seamless integration and performance across distributed systems.",
  },
  {
    icon: Zap,
    gradient: "from-[#9a2600] to-[#f85d37]",
    title: "Load & Performance Testing",
    desc: "Simulate real-world traffic conditions to evaluate system behaviour under peak load and identify performance bottlenecks before they affect users.",
  },
  {
    icon: RefreshCcw,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Regression & Penetration Testing",
    desc: "Ensure existing functionality remains intact after changes, and systematically identify security vulnerabilities through structured penetration tests.",
  },
  {
    icon: Shield,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    title: "Security Testing",
    desc: "Identify and address security risks across your applications and APIs to protect against unauthorised access, injection attacks, and data breaches.",
  },
  {
    icon: Layers,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Unit / Integration / System / UAT",
    desc: "Full-spectrum testing from unit-level code validation through integration checks, system-wide testing, and final user acceptance testing with real users.",
  },
  {
    icon: Activity,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "Functional & Compatibility Testing",
    desc: "Verify that software functions exactly as intended across different platforms, browsers, devices, and operating system configurations.",
  },
];

const SOLUTIONS: SolutionItem[] = [
  {
    icon: Target,
    number: "01",
    title: "Software Testing Is Important",
    tagline: "So, Do Not Start From Scratch Again.",
  },
  {
    icon: Users,
    number: "02",
    title: "Test So That Customers Do Not Lose Confidence",
    tagline: "In The Software.",
  },
  {
    icon: Search,
    number: "03",
    title: "To Know If The Product Has Bad Hidden Features",
    tagline: "Surface defects before they reach your users.",
  },
  {
    icon: AlertCircle,
    number: "04",
    title: "The Software Will Not End Up As An Error",
    tagline: "Prevent critical failures from reaching production.",
  },
  {
    icon: Zap,
    number: "05",
    title: "Test to Determine Software Performance",
    tagline: "Understand how your software behaves under real conditions.",
  },
  {
    icon: CheckCircle2,
    number: "06",
    title: "Verify All Aspects Of The Software",
    tagline: "Comprehensive validation across every feature and user flow.",
  },
];

const STRATEGY_STEPS = [
  "Gather client's requirements",
  "Develop test strategy after assessing environment thoroughly",
  "Choose the right testing tools and framework",
  "Develop automation plan and design",
  "Set up a test environment",
  "Build automation solutions and deploy them in a test environment",
  "Execute solutions and manage defects (Bug fixing / verification / tracking)",
  "Baseline and deploy in Production",
];

const WHY_COE = [
  "Proven expertise in developing Testing strategies and solutions",
  "Delivers simplified and cost-effective testing solutions across the globe",
  "Strong programming background of testing professionals",
  "Commitment to quality, timely delivery, round the clock support",
  "Adds inspiration and innovation to business",
  "Helps software development and maintenance teams regain time for the things that matter",
  "Nurtured a winning team that has a passion for excellence",
];

export default function TestingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Software Testing & QA Services"
        description="Ensure software quality with Infoplus Technologies UK's testing services. Our QA experts deliver functional, performance, security, and automation testing for reliable software."
        path="/services/it-services/testing"
      />
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PageHero
        title="Testing"
        description="We're Delivering Quality Products & Services"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Experts
          </Link>
        </div>
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white">
            Scroll
          </p>
          <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
        </div>
      </PageHero>

      {/* â”€â”€ CoE Intro â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <ScrollReveal direction="fade">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
              Testing Center of Excellence
            </span>
            <h2 className="text-[36px] font-bold text-[#111] mt-3 mb-6">
              Quality Is Not an Act, It's a Habit
            </h2>
            <p className="text-[16px] text-[#555] leading-[1.85] max-w-3xl mx-auto">
              Infoplus Testing Center of Excellence believes the following, and
              the team ensures that it practises these tenets every time. As
              offerings, Infoplus delivers testing services across different
              types of testing built on a foundation of precision, automation,
              and an unwavering commitment to quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* â”€â”€ Testing Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Our Testing Services
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Comprehensive Testing Coverage
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTING_TYPES.map((t, i) => {
              const TIcon = t.icon;
              return (
                <ScrollReveal
                  key={i}
                  direction="up"
                  variant="card"
                  delay={i * 90}
                >
                  <div className="group bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.12)] hover:-translate-y-1 hover:border-[#6128a6]/25 transition-all duration-300">
                    <div className={`h-1.5 bg-linear-to-r ${t.gradient}`} />
                    <div className="p-7">
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${t.gradient} flex items-center justify-center mb-5`}
                      >
                        <TIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[16px] font-bold text-[#111] mb-3 leading-snug group-hover:text-[#6128a6] transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-[13.5px] text-[#666] leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€ Our Solutions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-[#6128a6]/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Why Testing Matters
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">
                Our Solutions
              </h2>
              <p className="text-[15px] text-white/45 max-w-2xl mx-auto mt-4">
                Software Testing Is Important. So, Do Not Start From Scratch
                Again.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map(({ icon: SIcon, number, title, tagline }, i) => (
              <ScrollReveal key={i} direction="fade" delay={i * 80}>
                <div className="group bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-[#6128a6]/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center shrink-0">
                      <SIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[32px] font-black text-white/8 leading-none self-end mb-1">
                      {number}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-white mt-4 mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[13px] text-white/45 leading-relaxed italic">
                    {tagline}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Strategy Cinematic Vertical Timeline â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Sticky heading */}
            <div className="lg:sticky lg:top-[120px]">
              <ScrollReveal direction="left" duration={700}>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                  Our Process
                </span>
                <h2 className="text-[36px] font-bold text-[#111] mt-3 leading-tight">
                  Our Strategy for
                  <br />
                  <span className="text-[#6128a6]">Flawless Delivery</span>
                </h2>
                <p className="text-[15.5px] text-[#555] leading-[1.85] mt-5">
                  A structured, repeatable testing strategy tailored to your
                  environment. Every engagement follows this proven eight-step
                  process to ensure complete coverage and zero-surprise
                  deployments.
                </p>
                {/* Decorative stat */}
                <div className="flex gap-8 mt-8 pt-8 border-t border-[#f0eff5]">
                  {[
                    { value: "8", label: "Process Steps" },
                    { value: "100%", label: "Coverage Goal" },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <p className="text-[36px] font-black text-[#6128a6] leading-none">
                        {value}
                      </p>
                      <p className="text-[12px] text-[#888] mt-1 font-medium">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Vertical timeline */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-linear-to-b from-[#6128a6] via-[#6128a6]/50 to-transparent" />

              <div className="space-y-1">
                {STRATEGY_STEPS.map((step, i) => (
                  <ScrollReveal
                    key={i}
                    direction="right"
                    delay={i * 90}
                    duration={600}
                  >
                    <div className="flex gap-5 pb-6 group">
                      {/* Circle on the line */}
                      <div className="relative shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-full bg-[#6128a6] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-[11px] font-black text-white">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        {/* Pulse ring on hover */}
                        <span className="absolute inset-0 rounded-full border-2 border-[#6128a6]/40 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
                      </div>

                      {/* Content card */}
                      <div className="flex-1 bg-[#f8f5ff] border border-[#e8e0f7] rounded-xl px-5 py-4 group-hover:bg-white group-hover:border-[#6128a6]/30 group-hover:shadow-[0_8px_24px_-4px_rgba(97,40,166,0.10)] transition-all duration-300">
                        <p className="text-[14.5px] text-[#333] font-medium leading-relaxed">
                          {step}
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

      {/* â”€â”€ Why Infoplus CoE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-20 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#ecdaff]/60 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                The Infoplus Difference
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Why Infoplus Testing CoE?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_COE.map((point, i) => (
              <ScrollReveal
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 70}
              >
                <div className="flex items-start gap-4 bg-white border border-[#e5e4e7] rounded-xl p-5 hover:border-[#6128a6]/30 hover:shadow-[0_8px_24px_-4px_rgba(97,40,166,0.08)] transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#ecdaff] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6128a6]" />
                  </div>
                  <p className="text-[14.5px] text-[#333] font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* Full-width last item if odd count */}
            {WHY_COE.length % 2 !== 0 && <div className="hidden md:block" />}
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
                  Ready to Test?
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Ship Software You Can Trust
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Testing CoE to ensure your software
                  meets the highest quality standards on time and within
                  budget.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start a Testing Engagement
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

