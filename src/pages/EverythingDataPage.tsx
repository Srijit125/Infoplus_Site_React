import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  BarChart2,
  Database,
  Target,
  ArrowRight,
  Eye,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

type DataService = {
  icon: LucideIcon;
  gradient: string;
  title: string;
  desc: string;
  details: string;
};

const DATA_STEPS = [
  {
    num: "01",
    title: "Identify Business Objectives and problems",
    desc: "We start by understanding the business problems and goals that data can effectively solve.",
  },
  {
    num: "02",
    title: "Identify Key Stakeholders",
    desc: "We make sure that the right people are involved from the start.",
  },
  {
    num: "03",
    title: "Current State Assessment",
    desc: "We look honestly at where your data stands today. And evaluate existing data capabilities, tools, and infrastructure.",
  },
  {
    num: "04",
    title: "Analyse the Assessment Report",
    desc: "We turn that assessment into clear findings.",
  },
  {
    num: "05",
    title: "Prioritise Tasks",
    desc: "We focus on what matters most first, not everything at once.",
  },
  {
    num: "06",
    title: "Define the Roadmap",
    desc: "Build a clear, phased data transformation roadmap with milestones.",
  },
  {
    num: "07",
    title: "Develop & Deploy Solutions",
    desc: "We built and implement the right data solutions.",
  },
  {
    num: "08",
    title: "Govern the Ecosystem",
    desc: "Establish data governance for ongoing quality, compliance, and trust.",
  },
];

const DATA_SERVICES: DataService[] = [
  {
    icon: BarChart2,
    gradient: "from-[#242E72] to-[#EB9B3D]",
    title: "Data Analytics Consultation",
    desc: "Whether you're getting started or already an established business, we tailor our guidance to where you actually are. No generic advice- just support that fits your stage of growth.",
    details:
      "From initial data strategy through to analytics architecture and governance.",
  },
  {
    icon: Database,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Data Analysis Solutions",
    desc: "We look at your data from every angle- numbers, patterns, trends, and context- so nothing important is going to be missed. This gives you a more accurate picture to base decisions on.",
    details:
      "Comprehensive analytical methods to surface patterns, trends, and insights from your data.",
  },
  {
    icon: Eye,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Business Intelligence & Data Visualisation",
    desc: "We turn complicated data into clear visuals your whole team can actually understand at a glance. No more digging through spreadsheets to find the answer you need.",
    details:
      "Interactive BI dashboards and reports that empower every stakeholder to make data-informed decisions.",
  },
  {
    icon: Target,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "Business Problem Definition",
    desc: "What business problems to solve, helping you choose the right data problem to focus on. We work with your leadership team to identify and frame the right problems before investing in solutions.",
    details:
      "We work with your leadership team to identify and frame the right problems before investing in solutions.",
  },
  {
    icon: Zap,
    gradient: "from-[#9a2600] to-[#F0783A]",
    title: "MVP Definition & Analytics Culture",
    desc: "Choose MVP approach and define an analytics culture for overall business success. Define your minimum viable product for data initiatives and build a data-first culture organisation-wide.",
    details:
      "Define your minimum viable product for data initiatives and build a data-first culture organisation-wide.",
  },
];

const DATA_FAQS: FAQItem[] = [
  {
    q: "Is data analytics only useful for large companies with lots of data?",
    a: "No. Data analytics has become genuinely useful for businesses of any size — even a small business can make far better decisions with the right data approach.",
  },
  {
    q: "What's the difference between qualitative and quantitative data analysis?",
    a: "Quantitative analysis is about numbers. Qualitative is about the reasons behind those numbers. We use both, so you get the full picture.",
  },
  {
    q: "Why start with an MVP instead of building the full data solution straight away?",
    a: "Because it's less risky. You get to test what works first, before spending big.",
  },
  {
    q: "What does \"building an analytics culture\" mean for my business?",
    a: "It means your team uses data daily, not just now and then — it becomes part of how you work.",
  },
];

export default function EverythingDataPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Data Management Services | Infoplus Technologies UK"
        description="Scattered, inconsistent records turned into usable, standardised data, handled by the Infoplus New-Gen services team."
        keywords="Data Management Services in UK"
        path="/services/new-generation/everything-data"
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Your Data has Answers. We help you find them"
        description="We Help Clients with Data Quality Standards"
        badge="NEW-GEN SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] text-white font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)] group"
          >
            Start Your Data Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-[15px] transition-all duration-200 hover:bg-white/15"
          >
            Talk to Data Experts
          </Link>
        </div>
      </PageHero>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#ffffff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Data for Every Organisation
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Using Data is No Longer
                <br />
                <span className="text-[#EB9B3D]">
                  Limited to Big Companies.
                </span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Using data properly isn't just for big companies anymore- it's something every business can benefit from. Our data team helps you raise your data quality, pick the right tools, and build custom solutions, so you can make better decisions and strengthen relationships with clients and partners.
              </p>
              {/* <p className="text-[15.5px] text-[#555] leading-[1.85]">
                We closely work with clients to develop the right data strategy
                for their businesses so that they can evolve continuously. Data
                solutions will be developed and deployed using an agile
                approach, with robust information, analysis, and insights at
                every step.
              </p> */}
            </ScrollReveal>

            {/* Data flow visual */}
            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#ffffff] border border-[rgba(13,17,45,0.08)] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#EB9B3D]/8 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[13px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-6">
                    Data Solution Flow
                  </p>
                  {/* Pipeline visual */}
                  <div className="space-y-4 mb-6">
                    {[
                      { label: "Raw Data",   sub: "Sources & ingestion",  w: "35%"  },
                      { label: "Processing", sub: "Transform & cleanse",  w: "60%"  },
                      { label: "Analytics",  sub: "Insights & BI",        w: "80%"  },
                      { label: "Decision",   sub: "Actions & outcomes",   w: "100%" },
                    ].map(({ label, sub, w }, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[1fr_110px] items-center gap-3"
                        style={{ animation: `revealFade 450ms ease ${i * 100 + 200}ms both` }}
                      >
                        <div className="relative h-2 rounded-full bg-[rgba(13,17,45,0.06)] overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-[#EB9B3D] to-[#DA4D33] transition-all duration-300"
                            style={{ width: w }}
                          />
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#333] leading-none mb-2">{label}</p>
                          <p className="text-[11px] text-[#888] leading-none mb-0">{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[rgba(13,17,45,0.08)] pt-5 grid grid-cols-3 gap-3 text-center">
                    {[
                      ["Robust", "Information"],
                      ["Deep",   "Analysis"],
                      ["Sharp",  "Insights"],
                    ].map(([v, l], i) => (
                      <div key={i}>
                        <p className="text-[14px] font-black text-[#111] mb-0.5">{v}</p>
                        <p className="text-[10px] text-[#888]">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 8-Step Process Cinematic horizontal pills ─────── */}
      <section className="py-20 bg-[#0D112D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EB9B3D]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F0783A]/8 blur-[100px] pointer-events-none" />
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
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Technical Experts' Process
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">
                8-Step Data Delivery Framework
              </h2>
              <p className="text-[15px] text-white/45 max-w-2xl mx-auto mt-4">
                A structured, repeatable process to take your data strategy from
                vision to governed, value-generating reality.
              </p>
            </div>
          </ScrollReveal>

          {/* 4+4 grid on desktop, vertical on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DATA_STEPS.map(({ num, title, desc }, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                variant="card"
                delay={i * 70}
              >
                <div className="group bg-white/5 border border-white/8 rounded-2xl p-6 hover:bg-white/9 hover:border-[#EB9B3D]/40 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-[11px] font-black text-white">
                        {num}
                      </span>
                    </div>
                    <h3 className="text-[14px] font-bold text-white leading-snug group-hover:text-[#DA4D33] transition-colors m-0">
                      {title}
                    </h3>
                  </div>
                  <p className="text-[12.5px] text-white/45 leading-relaxed pl-13">
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Services ─────────────────────────────────────── */}
      <section className="py-24 bg-[#ffffff] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#FEF0DC]/60 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                What We Deliver
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Our Data Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA_SERVICES.map(({ icon: SIcon, title, desc, details }, i) => (
              <ScrollReveal
                key={i}
                direction="up"
                duration={700}
                delay={Math.floor(i / 2) * 80 + (i % 2) * 60}
              >
                <div className="group h-full bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl overflow-hidden hover:border-[#EB9B3D]/25 hover:shadow-[0_16px_48px_-8px_rgba(235,155,61,0.10)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="p-6 flex flex-col sm:flex-row gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <SIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold text-[#111] mb-3 group-hover:text-[#EB9B3D] transition-colors">
                        {title}
                      </h3>
                      <p className="text-[13.5px] text-[#666] leading-relaxed mb-2">
                        {desc}
                      </p>
                      <p className="text-[12.5px] text-[#888] italic leading-relaxed">
                        {details}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={DATA_FAQS} badge="FAQs" title="Frequently Asked Questions" subtitle="Common questions about our everything data services." />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0D112D] to-[#242E72] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EB9B3D]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#F0783A]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Unlock Your Data
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Better Data.
                  <br className="hidden md:block" />
                  Better Decisions.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd to build a robust
                  data strategy that drives real business outcomes from
                  quality standards to live analytics.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] text-white font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)] group"
                  >
                    Get a Data Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-[15px] transition-all duration-200 hover:bg-white/15"
                  >
                    Email Our Data Team
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
