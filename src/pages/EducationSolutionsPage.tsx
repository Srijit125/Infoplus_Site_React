import { PageMeta } from "../components/shared/PageMeta";
import { useState } from "react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  BookOpen,
  MessageSquare,
  Layers,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Lightbulb,
  Globe,
  Zap,
  FlaskConical,
  Cpu,
  PenTool,
  Star,
  BookMarked,
  Brain,
  Image,
} from "lucide-react";

/* ── Product Cards ─────────────────────────────────────────── */
const PRODUCT_TYPES = [
  {
    icon: BookOpen,
    title: "Content Products",
    desc: "We are open to change and maintaining flexibility rich multimedia content built for every technical student and professional.",
    color: "#6128a6",
    glow: "rgba(97,40,166,0.25)",
  },
  {
    icon: MessageSquare,
    title: "Q & A Products",
    desc: "We value our people, encourage their development and reward their performance targeted Q&A tools built around exam success.",
    color: "#aa3bff",
    glow: "rgba(170,59,255,0.25)",
  },
  {
    icon: Layers,
    title: "Learning Objects",
    desc: "We put quality first to deliver WOW services modular, reusable learning objects designed for deeper conceptual understanding.",
    color: "#f85d37",
    glow: "rgba(248,93,55,0.25)",
  },
];

/* ── Devices ───────────────────────────────────────────────── */
const DEVICES = [
  { icon: Monitor, label: "PC" },
  { icon: Laptop, label: "Laptop" },
  { icon: Tablet, label: "TAB" },
  { icon: Smartphone, label: "Mobile" },
];

/* ── Uniqueness Stats ──────────────────────────────────────── */
const UNIQUENESS_STATS = [
  { value: "4.5K", label: "Lecture Hours of Digital Content", accent: "#6128a6" },
  { value: "1.00L", label: "3D/2D Demonstrations", accent: "#aa3bff" },
  { value: "6.75L", label: "Page of Content", accent: "#f85d37" },
  { value: "8.25K", label: "Solved Tutorial Problems", accent: "#6128a6" },
  { value: "1.80L", label: "Multiple Choice Questions", accent: "#aa3bff" },
  { value: "250", label: "Question & Answers APPs", accent: "#f85d37" },
];

/* ── Tabs ──────────────────────────────────────────────────── */
const TABS = [
  "Approach",
  "Model",
  "Depth of Content",
  "Features",
  "Benefits",
] as const;
type Tab = (typeof TABS)[number];

/* ── Approach steps ────────────────────────────────────────── */
const APPROACH_STEPS = [
  { icon: BookMarked, label: "Fundamental Law", num: "01" },
  { icon: Zap, label: "Working Principle", num: "02" },
  { icon: FlaskConical, label: "Derivation", num: "03" },
  { icon: Cpu, label: "Construction", num: "04" },
  { icon: PenTool, label: "Solved Tutorial Problem", num: "05" },
  { icon: Lightbulb, label: "Application", num: "06" },
];

/* ── Model quadrants ───────────────────────────────────────── */
const MODEL_QUADRANTS = [
  {
    label: "Two Quadrant Approach",
    desc: "Concepts & Fundamentals (Indian method) paired with Products & Applications (Western method) two complementary halves of deep engineering mastery.",
    quads: ["Concepts", "Fundamentals", "Products", "Applications"],
    accent: "#6128a6",
  },
  {
    label: "Four Quadrant Approach",
    desc: "An extended model integrating Theory, Practice, Demonstration, and Assessment all four pillars necessary for a complete engineering education journey.",
    quads: ["Theory", "Practice", "Demonstration", "Assessment"],
    accent: "#aa3bff",
  },
];

/* ── Depth methods ─────────────────────────────────────────── */
const DEPTH_METHODS = [
  {
    num: "01",
    title: "Structured Hierarchy",
    subtitle: "Unit → Chapter → Topic",
    desc: "Content is arranged unit wise, then chapter wise, then topic wise, following lesson planning as per the university/Board/NCVT syllabus. Text content is supported by sketches, images, and embedded 3D visual demonstrations, followed by self-assessment.",
    features: [
      "Reference text books for given topic/subject",
      "Links to other open resources on the World Wide Web",
      "Summary of Units and Measurements applicable to a specific product",
      "Summarized table detailing all formulae across the subject",
    ],
    accent: "#6128a6",
  },
  {
    num: "02",
    title: "Demonstration Hub (D-Hub)",
    subtitle: "200+ 3D/2D Demonstrations",
    desc: "The D-Hub in the Home panel provides a collection of all the 3D/2D demonstrations arranged topic-wise. It is a single-point access for all visual demonstrations available for the subject approximately 200+ per subject.",
    features: [
      "All demos arranged topic-wise in one place",
      "3D and 2D visual formats",
      "200+ demonstrations per subject",
      "Single-click access from Home panel",
    ],
    accent: "#aa3bff",
  },
  {
    num: "03",
    title: "Q&A Examination App",
    subtitle: "75% Typical Success Rate",
    desc: "Towards the examination, students require targeted support to score higher. The Q&A product covers every subject's past 5 semesters and reflects a typical success rate of around 75%. Delivered as an Android and Desktop application.",
    features: [
      "Last 5 semesters of experience baked in",
      "~75% typical success rate across subjects",
      "Available as Android app",
      "Available as Desktop app",
    ],
    accent: "#f85d37",
  },
];

/* ── Feature groups ────────────────────────────────────────── */
const FEATURE_GROUPS = [
  {
    label: "Content Reference Features",
    accent: "#6128a6",
    items: [
      "Reference textbooks for given topic/subject",
      "Links to other open resources on the World Wide Web",
      "Summary of Units and Measurements across the subject",
      "A summarized table detailing all formulae across the subject",
    ],
  },
  {
    label: "Problem-Solving Features",
    accent: "#aa3bff",
    items: [
      "Solved Problems with visual explanations",
      "Important formulae for quick review",
      "3D visual demonstrations for complex concepts",
      "Self-assessment after every topic",
    ],
  },
];

/* ── Benefit groups ────────────────────────────────────────── */
const BENEFIT_GROUPS = [
  {
    audience: "Student",
    icon: GraduationCap,
    accent: "#6128a6",
    glow: "rgba(97,40,166,0.2)",
    items: [
      "Improved comprehension and retention",
      "Better attention and attendance in the classroom",
      "Significant improvement in score of the average student",
      "Positive shift in mean score of the class",
      "3D visual medium triggers higher-order thinking skills",
      "Brings diversity through multimedia and interpersonal nature",
      "Language independence for wider accessibility",
      "Making students industry-ready",
    ],
  },
  {
    audience: "Teacher",
    icon: BookOpen,
    accent: "#aa3bff",
    glow: "rgba(170,59,255,0.2)",
    items: [
      "Best practices by experienced teachers for conducting class",
      "Better quality of material available for explanation",
      "Standardization of course content with flexibility",
      "Time to complete course is reduced more time for tutorials",
      "Less blackboard writing more time for problem-solving",
      "Discussing university examination papers made easier",
      "Fast-tracks development of effective and efficient teachers",
    ],
  },
  {
    audience: "Government",
    icon: Globe,
    accent: "#f85d37",
    glow: "rgba(248,93,55,0.2)",
    items: [
      "Enhanced employability of outgoing students",
      "Addresses lack of faculties especially in rural areas",
      "Supplements lack of industry visits via virtual Industry classroom content",
      "Complements lack of adequate infrastructure with equipment models",
      "Pleasantly compels completion of syllabus within duration",
      "Improved attendance across institutions",
      "Classroom content standardization including remote locations",
      "3D/2D visuals annotated in simple English language-independent",
    ],
  },
];

export default function EducationSolutionsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Approach");

  return (
    <div className="w-full">
      <PageMeta
        title="Education Technology Solutions"
        description="Discover Infoplus Technologies UK's education solutions a comprehensive EdTech platform designed to streamline learning management, student engagement, and institutional efficiency."
        path="/products/education-solutions"
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        badge="PRODUCTS"
        title="Education Solutions"
        description="One-step learning solution for every technical student and professional. Learnengg is proud to be part of the NEAT initiative by MHRD & AICTE bringing the best technological products in education on a single platform for the convenience of learners."
        variant="gradient"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://neat.aicte-india.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f85d37]/15 border border-[#f85d37]/40 text-[#f85d37] text-[13px] font-semibold hover:bg-[#f85d37]/25 transition-colors"
          >
            <Star className="w-3.5 h-3.5" />
            NEAT · AICTE India
          </a>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[13px] font-semibold">
            <Brain className="w-3.5 h-3.5" />
            AI-Powered Learning
          </span>
        </div>
      </PageHero>

      {/* ── Product Types ────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Platform
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight">
                We provide a platform for the&nbsp;
                <span className="text-[#6128a6]">convenience of learners</span>
              </h2>
              <p className="text-[16px] text-[#0d0517]/60 mt-4 max-w-3xl mx-auto">
                Technology Products using Artificial Intelligence for customized
                learning or e-content in niche areas having highly employable
                skills identified and showcased on the NEAT portal.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCT_TYPES.map((p, i) => (
              <ScrollReveal key={p.title} variant="card" delay={i * 120}>
                <div className="group relative h-full bg-white border border-[#ecdaff] rounded-3xl p-8 hover:shadow-[0_16px_48px_rgba(97,40,166,0.1)] transition-all duration-400 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `radial-gradient(ellipse at 20% 20%, ${p.glow} 0%, transparent 65%)`,
                    }}
                  />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${p.color}15`, color: p.color }}
                  >
                    <p.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0d0517] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-[#0d0517]/65 leading-relaxed">
                    {p.desc}
                  </p>
                  <div
                    className="w-10 h-0.5 rounded-full mt-5"
                    style={{ backgroundColor: p.color }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Uniqueness ───────────────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ecdaff]/60 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f8f5ff] blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Uniqueness
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#111] leading-tight">
                Scale that sets us{" "}
                <span className="text-[#6128a6]">apart</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {UNIQUENESS_STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} direction="up" delay={i * 80}>
                <div className="group relative bg-[#f8f5ff] border border-[#e8e0f7] rounded-2xl p-7 hover:bg-white hover:border-[#6128a6]/25 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.12)] hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 50% 30%, ${stat.accent}12 0%, transparent 70%)` }}
                  />
                  <p
                    className="text-[clamp(2rem,4vw,2.75rem)] font-black leading-none mb-3 relative z-10"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </p>
                  <div
                    className="w-10 h-0.5 rounded-full mx-auto mb-3"
                    style={{ backgroundColor: `${stat.accent}40` }}
                  />
                  <p className="text-[13.5px] text-[#555] leading-snug relative z-10">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Limitless Learning ───────────────────────────────── */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full bg-[#6128a6] opacity-20 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-6">
                  Anywhere, Anytime
                </span>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-tight mb-6">
                  Limitless Learning.{" "}
                  <span className="text-[#aa3bff]">
                    Limitless Possibilities.
                  </span>
                </h2>
                <p className="text-[16px] text-white/60 leading-relaxed mb-10">
                  Learning can happen anywhere both online and offline with
                  our Content Product and Important Question & Answers on any
                  device, featuring enhanced navigation and faster streaming for
                  any-time learning.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Online", "Offline", "Any Time", "Any Pace"].map(
                    (tag, i) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full border border-[#aa3bff]/40 bg-[#aa3bff]/10 text-[#aa3bff] text-[13px] font-semibold"
                        style={{
                          animation: `revealFade 400ms ease ${i * 80 + 200}ms both`,
                        }}
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Devices visual */}
            <ScrollReveal direction="right" delay={150}>
              <div className="relative">
                {/* glow blob */}
                <div className="absolute inset-0 bg-[#6128a6] opacity-20 blur-[80px] rounded-full scale-75" />

                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10">
                  <p className="text-[12px] font-bold uppercase tracking-widest text-white/40 text-center mb-8">
                    Available On Every Device
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {DEVICES.map((d, i) => (
                      <div
                        key={d.label}
                        className="group flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#aa3bff]/40 hover:shadow-[0_8px_24px_rgba(170,59,255,0.15)] transition-all duration-300"
                        style={{
                          animation: `cardTiltIn 500ms cubic-bezier(0.22,1,0.36,1) ${i * 80 + 300}ms both`,
                        }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#6128a6] to-[#aa3bff] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <d.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-[14px] font-semibold text-white/80">
                          {d.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* NEAT badge */}
                  <div className="mt-6 flex items-center justify-center gap-3 bg-white/5 border border-[#f85d37]/20 rounded-2xl px-5 py-4">
                    <Star className="w-5 h-5 text-[#f85d37] shrink-0" />
                    <p className="text-[13px] text-white/70">
                      <span className="text-[#f85d37] font-bold">
                        NEAT Initiative
                      </span>{" "}
                      MHRD & AICTE certified platform
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Tabbed Explorer ──────────────────────────────────── */}
      <section className="bg-[#f8f5ff] relative">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6128a6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pt-24 container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Explore the Platform
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight">
                Everything you need to know
              </h2>
            </div>
          </ScrollReveal>
        </div>

        {/* Sticky tab bar */}
        <div className="sticky top-16 z-30 bg-[#f8f5ff]/95 backdrop-blur-sm border-b border-[#e8e0f7]">
          <div className="container mx-auto px-6 max-w-7xl py-4">
            <div className="flex flex-wrap justify-center gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={[
                    "px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-250 cursor-pointer",
                    activeTab === tab
                      ? "bg-[#6128a6] text-white shadow-[0_8px_24px_rgba(97,40,166,0.30)]"
                      : "bg-white border border-[#ecdaff] text-[#0d0517]/60 hover:border-[#6128a6]/40 hover:text-[#6128a6]",
                  ].join(" ")}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 pb-24 container mx-auto px-6 max-w-7xl relative z-10">
          {/* Tab content panel */}
          <div
            key={activeTab}
            style={{ animation: "revealFade 350ms ease both" }}
          >
            {/* ─ APPROACH ─ */}
            {activeTab === "Approach" && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0d0517] mb-4">
                    Our Approach
                  </h3>
                  <p className="text-[16px] text-[#0d0517]/65 max-w-3xl mx-auto">
                    The solution offered is by combining the best Indian and
                    Western ways of Teaching and Learning. In India, Engineering
                    is taught through Concepts and Fundamentals, while in the
                    West, it is done through Products and Applications.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {APPROACH_STEPS.map((step, i) => (
                    <div
                      key={step.label}
                      className="group relative bg-white border border-[#ecdaff] rounded-2xl overflow-hidden hover:border-[#6128a6]/40 hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] transition-all duration-300"
                      style={{
                        animation: `cardTiltIn 500ms cubic-bezier(0.22,1,0.36,1) ${i * 80}ms both`,
                      }}
                    >
                      {/* Image placeholder */}
                      <div className="h-44 bg-[#6128a6]/5 border-b border-[#ecdaff] flex items-center justify-center relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-[0.04]"
                          style={{
                            backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                          }}
                        />
                        <div className="flex flex-col items-center gap-2 text-[#6128a6]/25 relative z-10">
                          <Image className="w-10 h-10" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Image Placeholder</span>
                        </div>
                      </div>
                      {/* Card body */}
                      <div className="p-7 relative">
                        <div className="absolute top-4 right-4 text-[48px] font-black text-[#6128a6] opacity-[0.06] leading-none select-none pointer-events-none">
                          {step.num}
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-[#6128a6]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-5 h-5 text-[#6128a6]" />
                        </div>
                        <p className="text-[15px] font-bold text-[#0d0517]">
                          {step.label}
                        </p>
                        <div className="w-8 h-0.5 rounded-full bg-[#6128a6]/40 mt-3 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─ MODEL ─ */}
            {activeTab === "Model" && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0d0517] mb-4">
                    Academic Model
                  </h3>
                  <p className="text-[16px] text-[#0d0517]/65 max-w-3xl mx-auto">
                    The solution offered is by combining the best Indian and
                    Western ways of Teaching and Learning. In India, Engineering
                    is taught through Concepts and Fundamentals, while in the
                    West, it is done through Products and Applications.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {MODEL_QUADRANTS.map((model, i) => (
                    <div
                      key={model.label}
                      className="bg-white border border-[#ecdaff] rounded-3xl overflow-hidden hover:shadow-[0_16px_48px_rgba(97,40,166,0.10)] transition-all duration-400"
                      style={{
                        animation: `revealFade 400ms ease ${i * 120}ms both`,
                      }}
                    >
                      {/* Image placeholder */}
                      <div
                        className="h-44 flex items-center justify-center relative overflow-hidden border-b border-[#ecdaff]"
                        style={{ background: `linear-gradient(135deg, ${model.accent}0d 0%, ${model.accent}05 100%)` }}
                      >
                        <div
                          className="absolute inset-0 opacity-[0.04]"
                          style={{
                            backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                          }}
                        />
                        <div className="flex flex-col items-center gap-2 relative z-10" style={{ color: `${model.accent}40` }}>
                          <Image className="w-10 h-10" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Image Placeholder</span>
                        </div>
                      </div>
                      <div className="p-8">
                        <h4
                          className="text-[18px] font-bold mb-3"
                          style={{ color: model.accent }}
                        >
                          {model.label}
                        </h4>
                        <p className="text-[14px] text-[#0d0517]/65 leading-relaxed mb-7">
                          {model.desc}
                        </p>
                        {/* Quadrant grid */}
                        <div className="grid grid-cols-2 gap-2">
                          {model.quads.map((q, qi) => (
                            <div
                              key={q}
                              className="rounded-xl border text-center py-4 px-3 text-[13px] font-semibold transition-all duration-300 hover:scale-105"
                              style={{
                                borderColor: `${model.accent}30`,
                                backgroundColor: `${model.accent}08`,
                                color: model.accent,
                                animation: `revealFade 300ms ease ${qi * 60 + 200}ms both`,
                              }}
                            >
                              {q}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─ DEPTH OF CONTENT ─ */}
            {activeTab === "Depth of Content" && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0d0517] mb-4">
                    Depth of Content
                  </h3>
                  <p className="text-[16px] text-[#0d0517]/65 max-w-3xl mx-auto">
                    Our content is structured with precision — from university-aligned hierarchies and 3D/2D visual demonstrations to targeted Q&A examination tools, every layer is designed to deepen understanding and improve outcomes.
                  </p>
                </div>
                <div className="space-y-8">
                {DEPTH_METHODS.map((method, i) => (
                  <div
                    key={method.num}
                    className="bg-white border border-[#ecdaff] rounded-3xl p-8 hover:shadow-[0_12px_40px_rgba(97,40,166,0.10)] transition-all duration-400 overflow-hidden relative"
                    style={{
                      animation: `revealFade 400ms ease ${i * 100}ms both`,
                    }}
                  >
                    {/* Giant faded number */}
                    <span
                      className="absolute -bottom-4 -right-2 text-[120px] font-black leading-none pointer-events-none select-none"
                      style={{ color: method.accent, opacity: 0.05 }}
                    >
                      {method.num}
                    </span>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-black text-white"
                            style={{ backgroundColor: method.accent }}
                          >
                            {method.num}
                          </span>
                          <div>
                            <h4 className="text-[17px] font-bold text-[#0d0517]">
                              {method.title}
                            </h4>
                            <p
                              className="text-[12px] font-semibold"
                              style={{ color: method.accent }}
                            >
                              {method.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-[14px] text-[#0d0517]/65 leading-relaxed">
                          {method.desc}
                        </p>
                      </div>
                      <div>
                        <p
                          className="text-[11px] font-bold uppercase tracking-widest mb-3"
                          style={{ color: method.accent }}
                        >
                          Key Features
                        </p>
                        <ul className="space-y-3">
                          {method.features.map((feat, fi) => (
                            <li key={fi} className="flex items-start gap-3">
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{
                                  backgroundColor: `${method.accent}15`,
                                  color: method.accent,
                                }}
                              >
                                <CheckCircle2 className="w-3 h-3" />
                              </div>
                              <span className="text-[14px] text-[#0d0517]/70 leading-snug">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            )}

            {/* ─ FEATURES ─ */}
            {activeTab === "Features" && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0d0517] mb-4">
                    Platform Features
                  </h3>
                  <p className="text-[16px] text-[#0d0517]/65 max-w-2xl mx-auto">
                    Every feature is designed to deliver a richer, more
                    effective learning experience for both students and
                    educators.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {FEATURE_GROUPS.map((fg, i) => (
                    <div
                      key={fg.label}
                      className="bg-white border border-[#ecdaff] rounded-3xl overflow-hidden hover:shadow-[0_16px_48px_rgba(97,40,166,0.10)] transition-all duration-400"
                      style={{
                        animation: `cardTiltIn 500ms cubic-bezier(0.22,1,0.36,1) ${i * 120}ms both`,
                      }}
                    >
                      {/* placeholder image strip */}
                      <div
                        className="h-48 flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${fg.accent}20 0%, ${fg.accent}08 100%)`,
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, #6128a6 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${fg.accent}20`,
                            color: fg.accent,
                          }}
                        >
                          {i === 0 ? (
                            <BookMarked className="w-8 h-8" />
                          ) : (
                            <PenTool className="w-8 h-8" />
                          )}
                        </div>
                        <span className="absolute bottom-3 right-3 text-[10px] font-semibold uppercase tracking-widest opacity-30">
                          Image Placeholder
                        </span>
                      </div>
                      <div className="p-7">
                        <h4
                          className="text-[16px] font-bold mb-5"
                          style={{ color: fg.accent }}
                        >
                          {fg.label}
                        </h4>
                        <ul className="space-y-3">
                          {fg.items.map((item, fi) => (
                            <li key={fi} className="flex items-start gap-3">
                              <ChevronRight
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: fg.accent }}
                              />
                              <span className="text-[14px] text-[#0d0517]/70 leading-snug">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─ BENEFITS ─ */}
            {activeTab === "Benefits" && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0d0517] mb-4">
                    Benefits for Every Stakeholder
                  </h3>
                  <p className="text-[16px] text-[#0d0517]/65 max-w-2xl mx-auto">
                    Learnengg delivers measurable outcomes for students,
                    educators, and governments alike.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {BENEFIT_GROUPS.map((bg, i) => (
                    <div
                      key={bg.audience}
                      className="group relative bg-white border border-[#ecdaff] rounded-3xl p-8 hover:shadow-[0_16px_48px_rgba(97,40,166,0.10)] transition-all duration-400 overflow-hidden"
                      style={{
                        animation: `cardTiltIn 500ms cubic-bezier(0.22,1,0.36,1) ${i * 100}ms both`,
                      }}
                    >
                      {/* hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                        style={{
                          background: `radial-gradient(ellipse at 20% 10%, ${bg.glow} 0%, transparent 60%)`,
                        }}
                      />
                      <div className="relative z-10">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: `${bg.accent}15`,
                            color: bg.accent,
                          }}
                        >
                          <bg.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-[20px] font-bold text-[#0d0517] mb-1">
                          {bg.audience}
                        </h4>
                        <div
                          className="w-10 h-0.5 rounded-full mb-6"
                          style={{ backgroundColor: bg.accent }}
                        />
                        <ul className="space-y-2.5">
                          {bg.items.map((item, ii) => (
                            <li
                              key={ii}
                              className="flex items-start gap-2.5"
                              style={{
                                animation: `revealFade 300ms ease ${ii * 50 + 150}ms both`,
                              }}
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px]"
                                style={{ backgroundColor: bg.accent }}
                              />
                              <span className="text-[13px] text-[#0d0517]/65 leading-snug">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────── */}
      <section className="py-16 bg-[#1e0a38] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "200+",
                label: "3D Demonstrations per Subject",
                color: "#aa3bff",
              },
              {
                value: "75%",
                label: "Typical Q&A Success Rate",
                color: "#f85d37",
              },
              {
                value: "NEAT",
                label: "AICTE India Certified Platform",
                color: "#aa3bff",
              },
              {
                value: "5",
                label: "Semesters of Q&A Experience",
                color: "#f85d37",
              },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} direction="up" delay={i * 100}>
                <div className="text-center">
                  <p
                    className="text-[clamp(2rem,4vw,3rem)] font-black leading-none mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-white/50 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6128a6 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#1e0a38] via-[#381f55] to-[#6128a6] rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-[0_32px_80px_rgba(97,40,166,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-80 h-80 rounded-full bg-[#aa3bff] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-[#f85d37] opacity-15 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-6">
                Get Started
              </span>
              <h2 className="relative z-10 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-5">
                Ready to transform learning outcomes?
              </h2>
              <p className="relative z-10 text-[16px] text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
                Join the NEAT initiative and bring AI-powered, multimedia-rich
                engineering education to your institution available online and
                offline, on every device.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                >
                  Request a Demo
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-[15px] transition-all duration-200"
                >
                  View All Products
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
