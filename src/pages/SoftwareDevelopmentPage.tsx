import { PageMeta } from "../components/shared/PageMeta";
import { FAQAccordion } from "../components/shared/FAQAccordion";
import type { FAQItem } from "../components/shared/FAQAccordion";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Eye,
  Wifi,
  GitBranch,
  FileText,
  Video,
  Code2,
  CheckCircle2,
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type Service = {
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  number: string;
  title: string;
  intro: string;
  highlights: string[];
  techLabel: string;
  techStack: string[];
};

const SERVICES: Service[] = [
  {
    icon: Globe,
    gradient: "from-[#242E72] to-[#EB9B3D]",
    accentColor: "#EB9B3D",
    number: "01",
    title: "Web Development",
    intro:
      "Our custom web application development team can design and develop web applications that fit your needs by adopting the latest technologies and frameworks. Please see our range of web application types.",
    highlights: [
      "Static Web Applications",
      "Dynamic Web Applications",
      "E-Commerce",
      "Content Management System",
      "Animated Web Applications",
      "Define analytics culture for overall success",
    ],
    techLabel: "Technologies & Frameworks",
    techStack: [
      "HTML",
      "CSS",
      "PHP",
      "ASP.NET",
      "ColdFusion",
      "Ruby on Rails",
      "JavaScript",
      "Ajax",
      "Perl",
      "Python",
      "jQuery",
      "Dojo Toolkit",
    ],
  },
  {
    icon: Smartphone,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    accentColor: "#3b82f6",
    number: "02",
    title: "Application Development",
    intro:
      "We have application development services for all types including Android, IOS, and Cross-Platform. With Infoplus you will experience the best applications designed for every industry. For example, we have proven our mettle by developing solutions for the following industries.",
    highlights: [
      "Educational",
      "Healthcare",
      "E-Commerce",
      "Retail",
      "Automation",
      "Entertainment",
      "Banking",
    ],
    techLabel: "Core Technologies",
    techStack: [
      "Node.JS",
      "JS Framework",
      "CSS Framework",
      "PHP",
      "HTML",
      "Swift",
      "C++",
      "JAVA",
    ],
  },
  {
    icon: Eye,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    accentColor: "#7c3aed",
    number: "03",
    title: "AR & VR Solutions",
    intro:
      "Our AR & VR designers help you create impressive experiences that boost how customers engage with your business – from fully virtual worlds to enhanced views of the real one, we handle the whole process end-to-end.",
    highlights: [
      "End-to-end AR/VR solution process",
      "Fully computer-generated world experiences",
      "Immediate environment view integration",
      "Cross-platform deployment",
      "Immersive visualization systems",
      "3D interactive environments",
    ],
    techLabel: "AR / VR Platforms",
    techStack: [
      "Google ARCore",
      "Apple ARKit",
      "MaxST",
      "Unity",
      "Unreal Engine 4",
      "CryEngine",
    ],
  },
  {
    icon: Wifi,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    accentColor: "#14b8a6",
    number: "04",
    title: "IoT Solutions",
    intro:
      "Our IoT research and development team constantly explores new ways to connect devices for smarter monitoring and efficiency. With trusted partners, we can build IoT solutions across almost any industry.",
    highlights: [
      "Computer devices",
      "Wireless Sensors",
      "Industrial equipment",
      "Medical devices",
      "Mobile devices",
      "All industries covered",
    ],
    techLabel: "Device Ecosystem",
    techStack: [
      "Computer Devices",
      "Wireless Sensors",
      "Industrial Equipment",
      "Medical Devices",
      "Mobile Devices",
    ],
  },
  {
    icon: GitBranch,
    gradient: "from-[#9a2600] to-[#F0783A]",
    accentColor: "#F0783A",
    number: "05",
    title: "Software Development Models",
    intro:
      "Based on the client's requirement, we suggest and choose the best model that fits. Infoplus Software development team possesses specialist knowledge of all the leading software development methodologies.",
    highlights: [
      "Agile Software Development",
      "Scrum & Kanban",
      "Extreme Programming",
      "Lean Development",
      "Waterfall Model",
      "Hybrid Methodologies",
    ],
    techLabel: "Methodologies",
    techStack: [
      "Agile / Scrum / Kanban",
      "Extreme Programming",
      "Lean Development",
      "Waterfall Model",
    ],
  },
];

const CORE_VALUES: { icon: LucideIcon; label: string }[] = [
  { icon: Clock, label: "Availability" },
  { icon: TrendingUp, label: "Scalability" },
  { icon: Shield, label: "Reliability" },
  { icon: Eye, label: "Lucidity" },
];

const ENGAGE_STEPS: {
  icon: LucideIcon;
  step: string;
  title: string;
  desc: string;
}[] = [
  {
    icon: FileText,
    step: "01",
    title: "Share Your Requirement",
    desc: "Share your requirement or interest. Tell us your project goals, challenges, and desired outcomes. We'll review your needs thoroughly before the next step.",
  },
  {
    icon: Video,
    step: "02",
    title: "Expert Consultation",
    desc: "Our experts will have a meeting at your convenient time and location to discuss the best approach tailored to your business needs.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Free Prototype",
    desc: "We develop a prototype for your solution without any cost so you can validate the concept and experience our quality before making a commitment.",
  },
];

const SD_FAQS: FAQItem[] = [
  {
    q: "Which Technologies does Infoplus use for web development?",
    a: "We use a wide mix of tools, including HTML, CSS, JavaScript, PHP, ASP.NET, Ruby on Rails, Ajax, Python, and jQuery. We pick whichever ones genuinely fit your project, not a fixed set.",
  },
  {
    q: "Can Infoplus build both Android and iOS apps, or do we need separate teams?",
    a: "Just one team. We build Android, iOS, and cross-platform apps together, so you don't need to hire different companies for each.",
  },
  {
    q: "Is AR & VR only useful for gaming businesses?",
    a: "No. Any business that wants to engage customers better — like retail, real estate, or education — can benefit from AR & VR, not just gaming companies.",
  },
  {
    q: "How do you choose the right software development model for our project?",
    a: "We look at your specific needs first, then pick the best-fit approach — whether that's Agile, Waterfall, Extreme Programming, or Lean — instead of using the same process for every project.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Software Development Services | Infoplus UK"
        description="Web platforms, custom applications and outsourced product development, built by Infoplus Technologies UK Limited's development teams."
        keywords="Software development service in UK, Software development services in UK"
        path="/services/it-services/software-development"
      />
      {/* â"€â"€ Hero â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <PageHero
        title="Best Software Development Services in UK"
        description="Technology that Grows As You Do"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] text-white font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)] group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            onClick={() => {
              document
                .getElementById("sd-services")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-[15px] transition-all duration-200 hover:bg-white/15 cursor-pointer"
          >
            Explore Services
          </button>
        </div>
      </PageHero>

      {/* â"€â"€ Intro / Mission â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        {/* faint orb */}
        <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-[#ffffff] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={700}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Who We Are
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-3 leading-tight">
                Pioneer in Innovative &<br />
                <span className="text-[#EB9B3D]">
                  Mission-Critical Software
                </span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mt-6">
                Our development teams work across Europe and India, so we can support different clients in the way that suits them best. We've spent over two decades designing, building, and deploying custom software that becomes a real asset to your business, not another IT expense.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={700} delay={120}>
              <div className="bg-[#ffffff] border border-[rgba(13,17,45,0.08)] rounded-3xl p-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-5">
                  Our Core Development Values
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {CORE_VALUES.map(({ icon: ValIcon, label }, i) => (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 bg-white border border-[rgba(13,17,45,0.10)] rounded-xl px-4 py-3 hover:border-[#EB9B3D]/30 hover:shadow-[0_4px_12px_-4px_rgba(235,155,61,0.10)] transition-all duration-200"
                      style={{
                        animation: `revealFade 500ms ease ${i * 100 + 200}ms both`,
                      }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EB9B3D]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <ValIcon className="w-5 h-5 text-[#EB9B3D]" strokeWidth={1.6} />
                      </div>
                      <span className="text-[14px] font-semibold text-[#333]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[rgba(13,17,45,0.08)] pt-6">
                  <p className="text-[13px] text-[#888] leading-relaxed">
                    Infoplus consistently considers not only current trends,
                    but also carefully performs research on the future of
                    software development. Our services are predominantly
                    focused on these four core values.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ Service Sections (Cinematic Alternating) â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div id="sd-services" style={{ scrollMarginTop: "88px" }}>
        {SERVICES.map((svc, i) => {
          const SvcIcon = svc.icon;
          const isEven = i % 2 === 0;

          return (
            <section
              key={i}
              className={`py-24 relative overflow-hidden ${
                isEven ? "bg-[#ffffff]" : "bg-white"
              }`}
            >
              {/* Faint giant number background */}
              <div
                className="absolute select-none pointer-events-none font-black text-[240px] leading-none opacity-[0.035]"
                style={{
                  color: svc.accentColor,
                  top: "50%",
                  [isEven ? "right" : "left"]: "-0.05em",
                  transform: "translateY(-50%)",
                }}
              >
                {svc.number}
              </div>

              <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                  style={isEven ? {} : { direction: "rtl" }}
                >
                  {/* Text side */}
                  <ScrollReveal
                    direction={isEven ? "left" : "right"}
                    duration={720}
                    // style={{ direction: "ltr" } as React.CSSProperties}
                  >
                    <div style={{ direction: "ltr" }}>
                      {/* Icon + Title inline */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center shrink-0">
                          <SvcIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                        </div>
                        <h2 className="text-[32px] font-bold text-[#111] leading-tight mb-0">
                          {svc.title}
                        </h2>
                      </div>
                      <p className="text-[15.5px] text-[#555] leading-[1.8] mb-7">
                        {svc.intro}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {svc.highlights.map((h, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#EB9B3D]" />
                            <span className="text-[13.5px] text-[#444] font-medium">
                              {h}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Tech stack visual card */}
                  <ScrollReveal direction="fade" duration={800} delay={200}>
                    <div style={{ direction: "ltr" }}>
                      <div className="bg-[#0D112D] rounded-3xl p-8 relative overflow-hidden">
                        {/* gradient orb inside */}
                        <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-30 pointer-events-none bg-[#EB9B3D]" />
                        <div className="relative z-10">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-5">
                            {svc.techLabel}
                          </p>
                          <div className="flex flex-wrap gap-2.5">
                            {svc.techStack.map((tech, k) => (
                              <span
                                key={k}
                                className="px-3.5 py-2 rounded-xl text-[12.5px] font-semibold border bg-[#EB9B3D]/10 border-[#EB9B3D]/30 text-[#EB9B3D]"
                                style={{
                                  animation: `revealFade 400ms ease ${k * 60 + 100}ms both`,
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Decorative bottom bar */}
                          <div className="mt-8 pt-6 border-t border-white/8">
                            <div className="flex items-center gap-2">
                              <div className="h-1.5 rounded-full flex-1 bg-linear-to-r from-[#EB9B3D] to-transparent" />
                              <span className="text-[11px] text-white/25 font-medium">
                                {svc.techStack.length} Technologies
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* â"€â"€ How to Engage â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#0D112D] relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-0 left-[-10%] w-96 h-96 rounded-full bg-[#EB9B3D]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-80 h-80 rounded-full bg-[#F0783A]/10 blur-[100px] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Getting Started
              </span>
              <h2 className="text-[36px] font-bold text-white mt-3">
                How To Engage?
              </h2>
              <p className="text-[16px] text-white/50 max-w-2xl mx-auto mt-4 leading-relaxed">
                Based on the client's requirement, we suggest and choose the
                best model that fits. Our Software development team possesses
                specialist knowledge of all leading software development
                methodologies.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {ENGAGE_STEPS.map(({ icon: StepIcon, step, title, desc }, i) => (
                <ScrollReveal
                  key={i}
                  direction="up"
                  variant="card"
                  delay={i * 130}
                  className="h-full"
                >
                  <div className="relative h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-[#EB9B3D]/40 transition-all duration-300 group">
                    {/* Step number badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center shrink-0 relative">
                        <StepIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                        {/* Pulse ring */}
                        <span className="absolute inset-0 rounded-xl border border-[#EB9B3D]/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                      </div>
                      <span className="text-[28px] font-black text-white/10 leading-none">
                        {step}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">
                      {title}
                    </h3>
                    <p className="text-[14px] text-white/50 leading-relaxed flex-1">
                      {desc}
                    </p>

                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={SD_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        defaultOpen={0}
      />

      {/* â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0D112D] to-[#242E72] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EB9B3D]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#F0783A]/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Ready to Build?
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Let's Build Something Remarkable
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd to bring your
                  software vision to life. Our teams in Europe and India are
                  ready to deliver high-quality, scalable solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] text-white font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)] group"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-[15px] transition-all duration-200 hover:bg-white/15"
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

