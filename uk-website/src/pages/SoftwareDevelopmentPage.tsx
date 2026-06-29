import { Link } from "react-router-dom";
import {
  Globe, Smartphone, Eye, Wifi, GitBranch,
  FileText, Video, Code2, CheckCircle2, ArrowRight,
  ChevronRight, type LucideIcon,
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
    gradient: "from-[#381f55] to-[#6128a6]",
    accentColor: "#6128a6",
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
      "HTML", "CSS", "PHP", "ASP.NET",
      "ColdFusion", "Ruby on Rails", "JavaScript",
      "Ajax", "Perl", "Python", "jQuery", "Dojo Toolkit",
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
      "Automotive",
      "Entertainment",
      "Banking",
    ],
    techLabel: "Core Technologies",
    techStack: [
      "Node.JS", "JS Framework", "CSS Framework",
      "PHP", "HTML", "Swift", "C++", "JAVA",
    ],
  },
  {
    icon: Eye,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    accentColor: "#7c3aed",
    number: "03",
    title: "AR & VR Solutions",
    intro:
      "To increase the engagement with customers, our AR&VR designers can help with the end-to-end solution process so that our clients can explore fully computer-generated worlds and can have a view of the immediate environment.",
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
      "Google ARCore", "Apple ARKit", "MaxST",
      "Unity", "Unreal Engine 4", "CryEngine",
    ],
  },
  {
    icon: Wifi,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    accentColor: "#14b8a6",
    number: "04",
    title: "IoT Solutions",
    intro:
      "As IoT has a long way to go and there is still a lot of untapped potential, our IoT R&D team constantly looks for ways and means to connect different devices for more meaningful efficiencies and monitoring. Infoplus has the ability to build devices through its esteemed partners. We develop IoT solutions for almost all industries.",
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
      "Computer Devices", "Wireless Sensors",
      "Industrial Equipment", "Medical Devices", "Mobile Devices",
    ],
  },
  {
    icon: GitBranch,
    gradient: "from-[#9a2600] to-[#f85d37]",
    accentColor: "#f85d37",
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

const CORE_VALUES = ["Availability", "Scalability", "Reliability", "Lucidity"];

const ENGAGE_STEPS: { icon: LucideIcon; step: string; title: string; desc: string }[] = [
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
    desc: "We develop a prototype for your solution without any cost — so you can validate the concept and experience our quality before making a commitment.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Software Development"
        description="Emerging into High Technology Trends"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
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
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Explore Services
          </button>
        </div>
        {/* Animated scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white">Scroll</p>
          <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
        </div>
      </PageHero>

      {/* ── Intro / Mission ───────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* faint orb */}
        <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={700}>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Who We Are
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-3 leading-tight">
                Pioneer in Innovative &<br />
                <span className="text-[#6128a6]">Mission-Critical Software</span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mt-6">
                Our development teams are based in Europe and India to fulfil the needs of different
                delivery models of our clients. Infoplus is a pioneer in designing, developing, and
                deployment of innovative and customised business-critical software systems and solutions.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mt-4">
                With more than two decades of operation, Infoplus Technologies has grown into an
                internationally recognised staffing service provider because of its innovative technical
                savvy engineering teams. Through a clear vision and a customised plan, these teams provide
                cutting-edge services to industry giants, mid-sized companies, and unicorns.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={700} delay={120}>
              <div className="bg-[#0d0517] rounded-3xl p-8 relative overflow-hidden">
                {/* orb inside card */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/30 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#aa3bff] mb-5">
                    Our Core Development Values
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {CORE_VALUES.map((v, i) => (
                      <div
                        key={v}
                        className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                        style={{
                          animation: `revealFade 500ms ease ${i * 100 + 200}ms both`,
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#aa3bff] shrink-0" />
                        <span className="text-[14px] font-semibold text-white">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      Infoplus consistently considers not only current trends, but also carefully
                      performs research on the future of software development. Our services are
                      predominantly focused on these four core values.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Service Sections (Cinematic Alternating) ─────────── */}
      <div id="sd-services" style={{ scrollMarginTop: "88px" }}>
        {SERVICES.map((svc, i) => {
          const SvcIcon = svc.icon;
          const isEven = i % 2 === 0;

          return (
            <section
              key={i}
              className={`py-24 relative overflow-hidden ${
                isEven ? "bg-[#f8f5ff]" : "bg-white"
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
                    style={{ direction: "ltr" } as React.CSSProperties}
                  >
                    <div style={{ direction: "ltr" }}>
                      {/* Service number + icon */}
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`w-12 h-12 rounded-xl bg-linear-to-br ${svc.gradient} flex items-center justify-center`}
                        >
                          <SvcIcon className="w-6 h-6 text-white" />
                        </div>
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest"
                          style={{ color: svc.accentColor }}
                        >
                          Service {svc.number}
                        </span>
                      </div>

                      <h2 className="text-[32px] font-bold text-[#111] leading-tight mb-5">
                        {svc.title}
                      </h2>
                      <p className="text-[15.5px] text-[#555] leading-[1.8] mb-7">{svc.intro}</p>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {svc.highlights.map((h, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0"
                              style={{ color: svc.accentColor }}
                            />
                            <span className="text-[13.5px] text-[#444] font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Tech stack visual card */}
                  <ScrollReveal direction="fade" duration={800} delay={200}>
                    <div style={{ direction: "ltr" }}>
                      <div className="bg-[#0d0517] rounded-3xl p-8 relative overflow-hidden">
                        {/* gradient orb inside */}
                        <div
                          className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-30 pointer-events-none"
                          style={{ background: svc.accentColor }}
                        />
                        <div className="relative z-10">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-5">
                            {svc.techLabel}
                          </p>
                          <div className="flex flex-wrap gap-2.5">
                            {svc.techStack.map((tech, k) => (
                              <span
                                key={k}
                                className="px-3.5 py-2 rounded-xl text-[12.5px] font-semibold border"
                                style={{
                                  backgroundColor: `${svc.accentColor}15`,
                                  borderColor: `${svc.accentColor}35`,
                                  color: svc.accentColor === "#14b8a6"
                                    ? "#5eead4"
                                    : svc.accentColor === "#3b82f6"
                                    ? "#93c5fd"
                                    : "#d4b4fe",
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
                              <div
                                className="h-1.5 rounded-full flex-1"
                                style={{
                                  background: `linear-gradient(to right, ${svc.accentColor}, transparent)`,
                                }}
                              />
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

      {/* ── How to Engage ────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-0 left-[-10%] w-96 h-96 rounded-full bg-[#6128a6]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-80 h-80 rounded-full bg-[#f85d37]/10 blur-[100px] pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                Getting Started
              </span>
              <h2 className="text-[36px] font-bold text-white mt-3">How To Engage?</h2>
              <p className="text-[16px] text-white/50 max-w-2xl mx-auto mt-4 leading-relaxed">
                Based on the client's requirement, we suggest and choose the best model that fits.
                Our Software development team possesses specialist knowledge of all leading
                software development methodologies.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {ENGAGE_STEPS.map(({ icon: StepIcon, step, title, desc }, i) => (
                <ScrollReveal key={i} direction="up" variant="card" delay={i * 130}>
                  <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-[#6128a6]/40 transition-all duration-300 group">
                    {/* Step number badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center relative">
                        <StepIcon className="w-6 h-6 text-white" />
                        {/* Pulse ring */}
                        <span className="absolute inset-0 rounded-2xl border border-[#6128a6]/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                      </div>
                      <span className="text-[28px] font-black text-white/10 leading-none">
                        {step}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-bold text-white mb-3 leading-snug">
                      {title}
                    </h3>
                    <p className="text-[14px] text-white/50 leading-relaxed">{desc}</p>

                    <div className="mt-6 flex items-center gap-1.5 text-[12px] font-semibold text-[#aa3bff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
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
                  Ready to Build?
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight">
                  Let's Build Something Remarkable
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd to bring your software vision to life.
                  Our teams in Europe and India are ready to deliver high-quality, scalable solutions.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Start Your Project
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
