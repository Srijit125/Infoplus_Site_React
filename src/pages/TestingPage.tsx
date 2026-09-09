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
import imgCareerHero from "../assets/images/career_hero.jpg";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

type TestType = {
  icon: LucideIcon;
  gradient: string;
  title: string;
  desc: string;
};

type SolutionItem = {
  icon: LucideIcon;
  title: string;
  tagline: string;
};

const TESTING_TYPES: TestType[] = [
  {
    icon: Globe,
    gradient: "from-[#242E72] to-[#EB9B3D]",
    title: "SOA / Web Services Testing",
    desc: "We check that your systems, APIs, and services communicate with each other correctly. This stops silent failures and broken connections between the platforms you rely on.",
  },
  {
    icon: Zap,
    gradient: "from-[#9a2600] to-[#F0783A]",
    title: "Load & Performance Testing",
    desc: "We test how your software behaves under real-world pressure, not just ideal conditions. You find out where the limits are before your users do.",
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
    title: "Unit/ Integration/ system/ User Acceptance Testing (UAT)",
    desc: "We test your software at every stage – big and small- to make sure it all works together properly.",
  },
  {
    icon: Activity,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "Functional & Compatibility Testing",
    desc: "We check that every feature works exactly the way it's supposed to. We also make sure it runs smoothly on all the devices, browsers, and platforms your users are likely to use.",
  },
];

const SOLUTIONS: SolutionItem[] = [
  {
    icon: Target,
    title: "Software Testing Is Important",
    tagline: "So, Do Not Start From Scratch Again.",
  },
  {
    icon: Users,
    title: "Test So That Customers Do Not Lose Confidence",
    tagline: "In The Software.",
  },
  {
    icon: Search,
    title: "To Know If The Product Has Bad Hidden Features",
    tagline: "Surface defects before they reach your users.",
  },
  {
    icon: AlertCircle,
    title: "The Software Will Not End Up As An Error",
    tagline: "Prevent critical failures from reaching production.",
  },
  {
    icon: Zap,
    title: "Test to Determine Software Performance",
    tagline: "Understand how your software behaves under real conditions.",
  },
  {
    icon: CheckCircle2,
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

const TESTING_FAQS: FAQItem[] = [
  {
    q: "What's the difference between Load testing and performance testing?",
    a: "Load testing checks how your software is working when lots of people are using it at the same time. Performance testing checks how fast and stable it is overall. We check both, so nothing gets missed.",
  },
  {
    q: "If we already do security testing, do we still need penetration testing?",
    a: "Yes, it tests your system like a real attacker would, which is different from regular security checks.",
  },
  {
    q: "What's the difference between system testing and user acceptance testing?",
    a: "System testing checks that the technical side works. User acceptance testing checks that real users can actually use it properly.",
  },
  {
    q: "How long does testing usually take?",
    a: "It depends on how big or complex your software is. We look at each project individually, rather than using a fixed timeline, so testing is thorough without wasting time.",
  },
];

export default function TestingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Software Testing Services | Infoplus Technologies UK"
        description="Quality assurance and testing services from Infoplus, catching defects before release rather than after customers report them."
        keywords="Software Testing Service in UK, Software Testing Services in UK"
        path="/services/it-services/testing"
      />
      {/* â"€â"€ Hero â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <PageHero
        title="Best Testing services in UK"
        description="We're Delivering Quality Products & Services"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F0783A] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Get Started
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

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-[-10%] right-[-8%] w-96 h-96 rounded-full bg-[#FEF0DC] opacity-50 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-8%] left-[-5%] w-72 h-72 rounded-full bg-[#EB9B3D]/10 blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — content */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Why Choose Us
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0D112D] leading-tight mb-6">
                  Why Choose Infoplus for{" "}
                  <span className="text-[#EB9B3D]">Software Testing</span>
                </h2>
                <p className="text-[15px] text-[#555] leading-relaxed mb-4 text-justify">
                  Our testing centre of excellence brings real programming depth to every project, not just a
                  checklist mentality. We build testing into how software gets developed, so quality isn't a
                  last-minute scramble before launch.
                </p>
                <p className="text-[15px] text-[#555] leading-relaxed mb-10 text-justify">
                  Whether you need a single round of testing or an ongoing QA (Quality Assurance) Partner, we
                  tailor our approach to your product and your technology, not a generic template.
                </p>

                {/* Feature tiles */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Target,       label: "Proven expertise in developing Testing strategies and solutions",              color: "#EB9B3D" },
                    { icon: Globe,        label: "Delivers simplified and cost-effective testing solutions across the globe",    color: "#DA4D33" },
                    { icon: Zap,          label: "Adds inspiration and innovation to business",                                  color: "#F0783A" },
                    { icon: Shield,       label: "Commitment to quality, timely delivery, round the clock support",             color: "#14b8a6" },
                    { icon: Users,        label: "Nurtured a winning team that has a passion for excellence",                   color: "#F0783A" },
                  ].map((f, i) => (
                    <div
                      key={f.label}
                      className={`flex items-center gap-3 p-4 rounded-2xl border border-[#f0ecf9] hover:border-[#EB9B3D]/25 hover:shadow-[0_4px_16px_rgba(235,155,61,0.08)] transition-all duration-300 bg-[#fafafe]${i === 4 ? " col-span-2" : ""}`}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${f.color}18`, color: f.color }}
                      >
                        <f.icon className="w-4 h-4" />
                      </div>
                      <p className="text-[13px] font-semibold text-[#0D112D] leading-snug">{f.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — image panel */}
            <ScrollReveal direction="right" delay={120}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden lg:min-h-[500px]">
                  <img
                    src={imgCareerHero}
                    alt="Infoplus Testing team at work"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(235,155,61,0.12)] border border-[#FEF0DC]">
                  <p className="text-[26px] font-black text-[#EB9B3D] leading-none mb-0">100%</p>
                  <p className="text-[11px] text-[#888]">Coverage Goal</p>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#F0783A] text-white rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(248,93,55,0.30)]">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-0">QA CoE</p>
                  <p className="text-[10px] opacity-80">Certified</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* â"€â"€ Testing Types â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
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
                  className="h-full"
                >
                  <div className="group h-full flex flex-col bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_-8px_rgba(235,155,61,0.12)] hover:-translate-y-1 hover:border-[#EB9B3D]/25 transition-all duration-300">
                    <div className="flex-1 p-7 flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center mb-5 shrink-0">
                        <TIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                      </div>
                      <h3 className="text-[16px] font-bold text-[#111] mb-3 leading-snug group-hover:text-[#EB9B3D] transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-[13.5px] text-[#666] leading-relaxed flex-1">
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

      {/* â"€â"€ Our Solutions â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-20 bg-[#0D112D] relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-[#EB9B3D]/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F0783A]/10 blur-[80px] pointer-events-none" />
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
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
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
            {SOLUTIONS.map(({ icon: SIcon, title, tagline }, i) => (
              <ScrollReveal key={i} direction="fade" delay={i * 80}>
                <div className="group bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/8 hover:border-[#EB9B3D]/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center shrink-0">
                      <SIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-[15px] font-bold text-white leading-snug mb-0">
                      {title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-white/45 leading-relaxed italic">
                    {tagline}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Strategy Cinematic Vertical Timeline â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#ffffff] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Sticky heading */}
            <div className="lg:sticky lg:top-[120px]">
              <ScrollReveal direction="left" duration={700}>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Our Process
                </span>
                <h2 className="text-[36px] font-bold text-[#111] mt-3 leading-tight">
                  Our Strategy for
                  <br />
                  <span className="text-[#EB9B3D]">Flawless Delivery</span>
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
                      <p className="text-[36px] font-black text-[#EB9B3D] leading-none">
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
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-linear-to-b from-[#EB9B3D] via-[#EB9B3D]/50 to-transparent" />

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
                        <div className="w-10 h-10 rounded-full bg-[#EB9B3D] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-[11px] font-black text-white">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        {/* Pulse ring on hover */}
                        <span className="absolute inset-0 rounded-full border-2 border-[#EB9B3D]/40 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
                      </div>

                      {/* Content card */}
                      <div className="flex-1 bg-[#ffffff] border border-[rgba(13,17,45,0.08)] rounded-xl px-5 py-4 group-hover:bg-white group-hover:border-[#EB9B3D]/30 group-hover:shadow-[0_8px_24px_-4px_rgba(235,155,61,0.10)] transition-all duration-300">
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

      <FAQAccordion
        faqs={TESTING_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about our testing services. Can't find what you're looking for? Reach out to our team."
      />

      {/* â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0D112D] to-[#242E72] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EB9B3D]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#F0783A]/10 blur-[80px] pointer-events-none" />
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F0783A] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start a Testing Engagement
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

