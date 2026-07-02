import { Link } from "react-router";
import { ChevronRight, MapPin, Mail, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/helpers/ImageWithFallback";
import imgWorkspace from "../assets/images/imgWorkspace.png";
import imgMap from "../assets/images/imgMap.png";
import {
  industries,
  ourSolutions,
  ourValues,
  services,
} from "../assets/constants/types";
// retained for commented-out backup sections — safe to ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MultiUsageCard from "../components/cards/MultiUsageCard";
import IndexBanner from "../components/shared/IndexBanner";
import ClientCarousel from "../components/ui/ClientCarousel";
import { ScrollReveal } from "../components/ui/ScrollReveal";

/* ── Solution cards — enhanced for Our Work section ── */
const EXTRAS = [
  { href: "/services/it-services",        accent: "#f85d37", glow: "rgba(248,93,55,0.28)",  number: "01" },
  { href: "/products",                    accent: "#aa3bff", glow: "rgba(170,59,255,0.28)", number: "02" },
  { href: "/services/staffing-consulting",accent: "#f59e0b", glow: "rgba(245,158,11,0.28)",  number: "03" },
  { href: "/services/new-generation",     accent: "#10b981", glow: "rgba(16,185,129,0.28)", number: "04" },
];
const SOLUTION_CARDS = ourSolutions.map((sol, i) => ({ ...sol, ...EXTRAS[i] }));

/* ── AI service card accents ── */
const AI_ACCENTS = ["#aa3bff", "#f85d37", "#6128a6", "#aa3bff"];

/* ── Value card accents (cycles through 3 brand colours) ── */
const VALUE_ACCENTS = ["#6128a6", "#aa3bff", "#f85d37", "#6128a6", "#aa3bff", "#f85d37", "#6128a6"];

/* ── Office locations ── */
const LOCATIONS = [
  { country: "United Kingdom", address: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW.", accent: "#6128a6" },
  { country: "India",          address: "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai 600096.", accent: "#f85d37" },
  { country: "Germany",        address: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, 60327.", accent: "#aa3bff" },
];

function HomePage() {
  return (
    <div className="w-full">

      {/* 1. Hero */}
      <IndexBanner />

      {/* ═══════════════════════════════════════════════════════
          2. About Us — NEW DESIGN
          Bento-stack right column: image card + stat tiles + location strip
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-8%] w-[560px] h-[560px] rounded-full bg-[#ecdaff] opacity-55 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#f8f5ff] opacity-80 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 xl:gap-20 items-start">

            {/* Left: Copy */}
            <ScrollReveal direction="left">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-6">
                About Us
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#0d0517] leading-tight mb-7">
                Building Tomorrow's{" "}
                <span className="text-[#6128a6]">Digital Enterprises</span>{" "}
                Today
              </h2>
              <div className="space-y-4 mb-9">
                <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                  Infoplus Technologies UK Ltd is a forward-looking Information technology
                  company focused on building products, services, staffing, consulting,
                  and digital transformation needed for the next generation.
                </p>
                <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                  We combine the power of technology with our culture: Quality, Innovation,
                  and customer empathy — at the forefront of providing a comprehensive
                  portfolio of services for clients' evolving digital strategies.
                </p>
                <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                  Headquartered in Borehamwood, United Kingdom, we challenge industry norms
                  through our fixed-price and ongoing service contract methods, with a
                  unique performance-pricing model.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { label: "Quality First",    color: "#6128a6" },
                  { label: "Innovation",       color: "#aa3bff" },
                  { label: "Customer Empathy", color: "#f85d37" },
                ].map((p) => (
                  <span key={p.label} className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold border"
                    style={{ borderColor: `${p.color}35`, color: p.color, backgroundColor: `${p.color}0d` }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                    {p.label}
                  </span>
                ))}
              </div>
              <Link to="/about"
                className="group/btn inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.30)]">
                Know More About Us
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            </ScrollReveal>

            {/* Right: Bento stack */}
            <ScrollReveal direction="right" delay={150}>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(97,40,166,0.14)]">
                  <ImageWithFallback src={imgWorkspace} alt="Infoplus Office Workspace" className="w-full h-[220px] object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1e0a38]/75 via-[#1e0a38]/15 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-white text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f85d37] shrink-0 animate-pulse" />
                    ISO 14001:2015 Certified
                  </span>
                  <span className="absolute bottom-4 right-4 text-white/40 text-[11px] font-semibold uppercase tracking-widest">Est. 2003</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0d0517] rounded-2xl p-5 flex flex-col justify-between min-h-[110px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#aa3bff] opacity-10 blur-[30px]" />
                    <p className="text-[#aa3bff] text-[40px] font-black leading-none relative z-10">20+</p>
                    <p className="text-white/45 text-[13px] font-medium mt-2 relative z-10">Years of Excellence</p>
                  </div>
                  <div className="bg-[#f8f5ff] rounded-2xl p-5 border border-[#ecdaff] flex flex-col justify-between min-h-[110px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#6128a6] opacity-8 blur-[30px]" />
                    <p className="text-[#6128a6] text-[40px] font-black leading-none relative z-10">500+</p>
                    <p className="text-[#0d0517]/45 text-[13px] font-medium mt-2 relative z-10">Projects Delivered</p>
                  </div>
                </div>
                <div className="bg-linear-to-r from-[#f85d37] to-[#ff7a58] rounded-2xl p-4 flex items-center gap-4 shadow-[0_8px_24px_rgba(248,93,55,0.28)]">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[14px]">3 Global Offices</p>
                    <p className="text-white/70 text-[12px] mt-0.5">United Kingdom · India · Germany</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══ OLD ABOUT SECTION — BACKUP — START ═══
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f8f5ff] rounded-[24px] transform -translate-x-4 translate-y-4 -z-10" />
                <ImageWithFallback src={imgWorkspace} alt="Office Workspace" className="w-full rounded-[24px] object-cover shadow-lg" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={120}>
              <div>
                <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">About Us</span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-6 leading-tight">Forward-Looking IT Company</h2>
                <div className="space-y-5 mb-10">
                  <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                    Infoplus Technologies UK Ltd is a forward-looking Information technology company focused on building products, services, staffing, consulting, and digital transformation, needed for next-generation.
                  </p>
                  <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                    We combine the power of technology with our culture: Quality, Innovation, and customer empathy. Infoplus Technologies UK Ltd is at the forefront in providing a comprehensive portfolio of services to cater to the needs of clients' strategies in the evolving world of digital.
                  </p>
                  <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                    Headquartered at Borehamwood, United Kingdom, we challenge industry norms by holding ourselves accountable through our fixed-price and ongoing service contract methods, with a unique performance-pricing model.
                  </p>
                </div>
                <Link to="/about" className="bg-[#f85d37] text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors inline-flex items-center gap-2 group">
                  Know More About Us
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      ═══ OLD ABOUT SECTION — BACKUP — END ═══ */}

      {/* ═══════════════════════════════════════════════════════
          3. Our Work — NEW DESIGN
          Dark section rides up over the white About section.
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0d0517] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-[#381f55] opacity-35 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#6128a6] opacity-12 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest mb-5">Our Work</span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-5">
                Proactively Managed{" "}<span className="text-[#aa3bff]">IT Solutions</span>
              </h2>
              <p className="text-[15px] text-white/50 max-w-2xl mx-auto leading-relaxed">
                Our forward-thinking IT service CoE team designs end-to-end solutions for organisations to have a technology edge and stay ahead of the curve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SOLUTION_CARDS.map((sol, i) => (
              <ScrollReveal key={sol.title} variant="card" delay={i * 110}>
                <Link to={sol.href}
                  className="group relative flex flex-col h-full bg-white/4 border border-white/10 rounded-3xl p-7 hover:border-white/20 hover:shadow-[0_20px_56px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ background: `radial-gradient(ellipse at 25% 20%, ${sol.glow} 0%, transparent 65%)` }} />
                  <span aria-hidden className="absolute top-3 right-5 font-black text-[96px] leading-none select-none pointer-events-none"
                    style={{ color: `${sol.accent}0a` }}>{sol.number}</span>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${sol.accent}1a`, color: sol.accent }}>
                    <sol.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[20px] font-bold text-white mb-2 relative z-10">{sol.title}</h3>
                  <div className="w-8 h-0.5 rounded-full mb-4 group-hover:w-16 transition-all duration-300"
                    style={{ backgroundColor: `${sol.accent}70` }} />
                  <p className="text-[14px] text-white/55 leading-relaxed mb-5 group-hover:text-white/70 transition-colors duration-300 relative z-10">{sol.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {sol.features.map((f) => (
                      <span key={f} className="text-[11px] px-3 py-1 rounded-full font-semibold border"
                        style={{ borderColor: `${sol.accent}35`, color: sol.accent, backgroundColor: `${sol.accent}12` }}>{f}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-1.5 text-[13px] font-semibold relative z-10" style={{ color: sol.accent }}>
                    Explore Solutions
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OLD OUR WORK SECTION — BACKUP — START ═══
      <section className="py-24 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">Our Work</span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-5 leading-tight">Proactively Managed IT Solutions</h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-3xl text-justify">
                In order for a business to strive and to meet its planned objectives, supporting IT is not just enough but strategically led and proactively managed IT. Our forward-thinking IT service CoE team has been designing end-to-end solutions for organisations to have a technology edge and to be ahead of the curve.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourSolutions.map((solution, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 120}>
                <MultiUsageCard cardInfo={solution} type="solutions" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      ═══ OLD OUR WORK SECTION — BACKUP — END ═══ */}

      {/* ═══════════════════════════════════════════════════════
          4b. AI Services — CINEMATIC REDESIGN
          Deep dark bg, layered atmospheric lighting, gradient-border
          glass cards, sweep animation, gradient headline
      ═══════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#080010] relative overflow-hidden">

        {/* ── Atmospheric lighting ── */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Orange-violet burst — top right */}
          <div className="absolute -top-60 -right-40 w-200 h-200 rounded-full blur-[180px] opacity-20 animate-[pulse_7s_ease-in-out_infinite]"
            style={{ background: "radial-gradient(circle, #f85d37 0%, #aa3bff 50%, transparent 75%)" }} />
          {/* Deep violet — bottom left */}
          <div className="absolute -bottom-60 -left-40 w-175 h-175 rounded-full bg-[#6128a6] blur-[180px] opacity-[0.15] animate-[pulse_9s_ease-in-out_infinite_3s]" />
          {/* Subtle center orb */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 rounded-full bg-[#aa3bff] blur-[160px] opacity-[0.07] animate-[pulse_11s_ease-in-out_infinite_5s]" />
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          {/* Sweeping glow line */}
          <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-[#aa3bff]/40 to-transparent animate-[ai-sweep_10s_ease-in-out_infinite]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          {/* ── Cinematic headline ── */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#f85d37]/25 bg-[#f85d37]/8 text-[#f85d37] text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f85d37] animate-pulse shrink-0" />
                Artificial Intelligence
              </span>
              <h2 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
                Pioneering the Future
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f85d37] via-[#aa3bff] to-[#6128a6]">
                  with Artificial Intelligence
                </span>
              </h2>
              <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-relaxed">
                Infoplus Technologies is at the forefront of AI, helping organisations harness the power of intelligence to drive efficiency, innovation, and competitive advantage.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Stats filmstrip ── */}
          <ScrollReveal direction="up" delay={80}>
            <div className="grid grid-cols-3 mb-16 rounded-2xl overflow-hidden border border-white/6">
              {[
                { value: "4×",   label: "Productivity Boost", accent: "#f85d37" },
                { value: "40%",  label: "Cost Reduction",     accent: "#aa3bff" },
                { value: "24/7", label: "AI Availability",    accent: "#10b981" },
              ].map((s, i) => (
                <div key={i} className={`group flex flex-col items-center py-10 px-6 bg-white/2 hover:bg-white/5 transition-all duration-300 cursor-default ${i > 0 ? "border-l border-white/6" : ""}`}>
                  <p className="text-[44px] font-black leading-none mb-2 tabular-nums" style={{ color: s.accent }}>{s.value}</p>
                  <p className="text-[11px] text-white/35 font-semibold uppercase tracking-[0.15em]">{s.label}</p>
                  <div className="mt-5 h-0.5 w-8 rounded-full group-hover:w-20 transition-all duration-500" style={{ backgroundColor: s.accent }} />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* ── Service cards — gradient-border glass style ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {services.map((svc, i) => {
              const ACCENTS = ["#aa3bff", "#f85d37", "#10b981", "#06b6d4"];
              const accent = ACCENTS[i];
              return (
                <ScrollReveal key={svc.title} variant="card" delay={i * 110}>
                  {/* Gradient border wrapper */}
                  <div className="relative p-px rounded-2xl h-full"
                    style={{ background: `linear-gradient(135deg, ${accent}55 0%, transparent 45%, ${accent}22 100%)` }}>
                    <div className="group relative bg-[#080010] rounded-2xl p-7 h-full flex flex-col overflow-hidden hover:bg-[#0d0220] transition-all duration-500">
                      {/* Corner glow on hover */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-500 pointer-events-none"
                        style={{ backgroundColor: accent }} />
                      {/* Number watermark */}
                      <span className="absolute -bottom-3 -right-2 text-[90px] font-black leading-none select-none pointer-events-none opacity-[0.05]"
                        style={{ color: accent }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* Icon with pulsing ring */}
                      <div className="relative w-12 h-12 mb-5 shrink-0">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${accent}18` }}>
                          <svc.icon className="w-5 h-5" style={{ color: accent }} />
                        </div>
                        <span className="absolute inset-0 rounded-xl border-2 animate-ping opacity-20"
                          style={{ borderColor: accent }} />
                      </div>
                      {/* Title */}
                      <h4 className="text-[17px] font-bold text-white mb-1 relative z-10">{svc.title}</h4>
                      {/* Expanding accent line */}
                      <div className="w-8 h-0.5 rounded-full mb-4 group-hover:w-16 transition-all duration-500 relative z-10"
                        style={{ backgroundColor: accent }} />
                      {/* Description */}
                      <p className="text-[13px] text-white/45 leading-relaxed mb-5 flex-1 relative z-10">{svc.description}</p>
                      {/* Features */}
                      <ul className="space-y-2 relative z-10">
                        {svc.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2.5 text-[12px] text-white/35 group-hover:text-white/60 transition-colors duration-300">
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* ── CTAs ── */}
          <ScrollReveal direction="up" delay={160}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services/artificial-intelligence"
                className="group/btn inline-flex items-center gap-2.5 px-9 py-4 rounded-xl font-bold text-[15px] text-white transition-all duration-300 shadow-[0_0_40px_rgba(248,93,55,0.20)] hover:shadow-[0_0_70px_rgba(248,93,55,0.45)]"
                style={{ background: "linear-gradient(135deg, #f85d37 0%, #aa3bff 100%)" }}>
                Explore AI Services
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link to="/services"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/12 hover:border-white/25 text-white font-semibold text-[15px] transition-all duration-300">
                All Services
              </Link>
            </div>
          </ScrollReveal>

        </div>

        <style>{`
          @keyframes ai-sweep {
            0%   { top: 0%;   opacity: 0; }
            5%   { opacity: 1; }
            95%  { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. AI Services — NEW DESIGN
          Brand purple bg, white cards on the right for contrast
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#6128a6] relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-130 h-130 rounded-full bg-[#aa3bff] opacity-20 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-8%] w-105 h-105 rounded-full bg-[#1e0a38] opacity-50 blur-[130px] pointer-events-none" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">

            {/* Left: Headline + glass stat tiles + CTA */}
            <ScrollReveal direction="left">
              <span className="inline-block py-1 px-3 rounded-full bg-white/15 border border-white/25 text-white text-[11px] font-bold uppercase tracking-widest mb-6">
                AI Services
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-6">
                Pioneering the Future{" "}<span className="text-[#f85d37]">with AI</span>
              </h2>
              <p className="text-[15px] text-white/80 leading-relaxed mb-10 text-justify">
                Infoplus Technologies is at the forefront of Artificial Intelligence, helping organisations harness the power of AI to drive efficiency, innovation, and competitive advantage. Our dedicated AI Centre of Excellence combines deep technical expertise with industry knowledge.
              </p>

              {/* Micro-stats — glass pill tiles */}
              <div className="grid grid-cols-3 gap-3 mb-10">
                {[
                  { value: "4×",   label: "Productivity Boost" },
                  { value: "40%",  label: "Cost Reduction"     },
                  { value: "24/7", label: "AI Availability"    },
                ].map((s, i) => (
                  <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl px-3 py-4 border border-white/20 text-center">
                    <p className="text-[26px] font-black text-white leading-none mb-1">{s.value}</p>
                    <p className="text-[11px] text-white/65 font-medium leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/services/artificial-intelligence"
                  className="group/btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.40)]">
                  Explore AI Services
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 hover:border-white/40 text-white font-semibold text-[14px] transition-all duration-200">
                  All Services
                </Link>
              </div>
            </ScrollReveal>

            {/* Right: White service cards on brand purple background */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((svc, i) => {
                const accent = AI_ACCENTS[i];
                return (
                  <ScrollReveal key={svc.title} variant="card" delay={i * 90}>
                    <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_48px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${accent}14`, color: accent }}>
                        <svc.icon className="w-5 h-5" />
                      </div>
                      {/* Title */}
                      <h4 className="text-[15px] font-bold text-[#0d0517] mb-2">{svc.title}</h4>
                      {/* Expanding accent line */}
                      <div className="w-8 h-0.5 rounded-full mb-3 group-hover:w-14 transition-all duration-300"
                        style={{ backgroundColor: `${accent}80` }} />
                      {/* Description */}
                      <p className="text-[13px] text-[#555]/70 leading-relaxed mb-4 flex-1">{svc.description}</p>
                      {/* Features */}
                      <ul className="space-y-1.5">
                        {svc.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-[12px] text-[#555]/55">
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      ═══ OLD AI SERVICES SECTION — BACKUP — START ═══
      <section className="py-24 bg-[#6128a6] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div>
                <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">AI Services</span>
                <h2 className="text-[36px] font-bold mb-5 leading-tight">Pioneering the Future with AI</h2>
                <p className="text-[16px] text-white/85 leading-[1.75] mb-10 text-justify">
                  Infoplus Technologies is at the forefront of Artificial Intelligence, helping organisations harness the power of AI to drive efficiency, innovation, and competitive advantage. Our dedicated AI Centre of Excellence combines deep technical expertise with industry knowledge.
                </p>
                <Link to="/services" className="bg-[#f85d37] text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors inline-flex items-center gap-2 group">
                  Explore AI Services
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((ai, idx) => (
                <ScrollReveal key={idx} variant="card" delay={idx * 100}>
                  <MultiUsageCard cardInfo={ai} type="services" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      ═══ OLD AI SERVICES SECTION — BACKUP — END ═══

      {/* ═══════════════════════════════════════════════════════
          5. Our Values — NEW DESIGN
          White, rides up over the dark-purple AI section.
          Numbered watermark cards in a 4-col flex-wrap layout.
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-30">
        <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-50 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Values
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight mb-5">
                Driven By{" "}<span className="text-[#6128a6]">Excellence</span>
              </h2>
              <p className="text-[15px] text-[#555]/70 max-w-xl mx-auto leading-relaxed">
                The principles that guide every decision, every engagement, and every line of code we write.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-5">
            {ourValues.map((val, i) => {
              const accent = VALUE_ACCENTS[i];
              return (
                <ScrollReveal key={val.title} variant="card" delay={i * 75}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]">
                  <div className="group relative bg-white border border-[#ecdaff] rounded-2xl p-7 overflow-hidden hover:border-[#6128a6]/25 hover:shadow-[0_16px_48px_rgba(97,40,166,0.10)] transition-all duration-300 h-full">
                    {/* Watermark number */}
                    <span aria-hidden className="absolute top-3 right-4 font-black text-[68px] leading-none select-none pointer-events-none text-[#ecdaff]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${accent}14`, color: accent }}>
                      <val.icon className="w-6 h-6" />
                    </div>
                    {/* Accent line */}
                    <div className="w-8 h-0.5 rounded-full mb-4 group-hover:w-14 transition-all duration-300 relative z-10"
                      style={{ backgroundColor: `${accent}80` }} />
                    {/* Content */}
                    <h3 className="text-[17px] font-bold text-[#0d0517] mb-2 relative z-10">{val.title}</h3>
                    <p className="text-[14px] text-[#555]/65 leading-relaxed relative z-10">{val.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ OLD OUR VALUES SECTION — BACKUP — START ═══
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">Our Values</span>
              <h2 className="text-[36px] font-bold text-[#111111]">Driven By Excellence</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourValues.map((val, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 80}>
                <MultiUsageCard cardInfo={val} type="values" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      ═══ OLD OUR VALUES SECTION — BACKUP — END ═══ */}

      {/* ═══════════════════════════════════════════════════════
          6. Our Industries — NEW DESIGN
          Dark section rides up over white Values.
          14 industries in a 7-col icon grid.
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0d0517] relative overflow-hidden -mt-10 rounded-t-[3rem] z-40">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-40 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#6128a6] opacity-18 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Industries
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-5">
                Industries{" "}<span className="text-[#aa3bff]">We Serve</span>
              </h2>
              <p className="text-[15px] text-white/45 max-w-xl mx-auto leading-relaxed">
                From pharmaceuticals to fintech — our expertise spans every major vertical.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.label} direction="fade" delay={i * 40}>
                <div className="group bg-white/5 border border-white/8 rounded-2xl p-4 flex flex-col items-center gap-3 hover:bg-[#6128a6]/20 hover:border-[#6128a6]/45 hover:shadow-[0_8px_28px_rgba(97,40,166,0.22)] transition-all duration-300 cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center group-hover:bg-[#6128a6]/35 transition-colors duration-300">
                    <ind.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-white/50 group-hover:text-white text-[11px] font-semibold text-center leading-tight tracking-wide transition-colors duration-300">
                    {ind.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OLD OUR INDUSTRIES SECTION — BACKUP — START ═══
      <section className="py-24 bg-[#6128a6]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">Our Industries</span>
              <h2 className="text-[36px] font-bold text-white">Industries We Serve</h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap gap-4">
            {industries.map((ind, idx) => (
              <ScrollReveal key={idx} direction="fade" delay={idx * 45}>
                <MultiUsageCard cardInfo={ind} type="industries" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      ═══ OLD OUR INDUSTRIES SECTION — BACKUP — END ═══ */}

      {/* ──────────────────────────────────────────────
          7. Clients carousel (unchanged)
      ────────────────────────────────────────────── */}
      <ScrollReveal direction="fade">
        <ClientCarousel />
      </ScrollReveal>

      {/* ──────────────────────────────────────────────
          8. Global Presence (unchanged)
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">Global Reach</span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-5">Our Presence Worldwide</h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-2xl text-justify">
                We have a global reach with offices and operations across three countries — delivering world-class technology solutions wherever our clients need us.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={200}>
            <div className="flex justify-center mt-10">
              <ImageWithFallback src={imgMap} alt="World Map Locations" className="w-full max-w-5xl h-auto object-contain" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. Get in Touch — NEW DESIGN
          Light purple bg, premium location cards + polished form.
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-60 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#f8f5ff] opacity-80 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: heading + location cards */}
            <ScrollReveal direction="left">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-6">
                Get in Touch
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight mb-5">
                Let's Start a{" "}<span className="text-[#6128a6]">Project Together</span>
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] mb-10 text-justify">
                We'd love to hear from you. Fill out our form or drop us a direct message — we get back within one business day.
              </p>

              {/* Location cards */}
              <div className="space-y-3 mb-8">
                {LOCATIONS.map((loc) => (
                  <div key={loc.country}
                    className="group flex gap-4 items-start p-5 bg-white rounded-2xl border border-[#ecdaff] hover:border-[#6128a6]/25 hover:shadow-[0_8px_28px_rgba(97,40,166,0.09)] transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundColor: `${loc.accent}14`, color: loc.accent }}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0d0517] text-[15px] mb-1">{loc.country}</h5>
                      <p className="text-[13px] text-[#555]/75 leading-relaxed">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View all offices CTA */}
              <Link to="/contact#worldwide-presence"
                className="group/loc inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-[#ecdaff] hover:border-[#6128a6]/30 hover:shadow-[0_4px_18px_rgba(97,40,166,0.12)] text-[#6128a6] font-semibold text-[14px] transition-all duration-200 mb-5">
                <MapPin className="w-4 h-4 shrink-0" />
                View All 17 Offices Worldwide
                <ChevronRight className="w-4 h-4 group-hover/loc:translate-x-1 transition-transform duration-200" />
              </Link>

            </ScrollReveal>

            {/* Right: form card */}
            <ScrollReveal direction="right" delay={150}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(97,40,166,0.10)] border border-[#ecdaff]">
                <h3 className="text-[24px] font-bold text-[#0d0517] mb-1">Quick Enquiry</h3>
                <p className="text-[14px] text-[#555]/65 mb-8">Tell us about your project and we'll be in touch.</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-[#6128a6] mb-2">First Name</label>
                      <input type="text" placeholder="John"
                        className="w-full bg-[#f8f5ff] border border-[#ecdaff] rounded-xl px-4 py-3.5 text-[15px] text-[#0d0517] placeholder:text-[#bbb] focus:outline-none focus:border-[#6128a6] focus:shadow-[0_0_0_3px_rgba(97,40,166,0.09)] transition-all duration-200" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-[#6128a6] mb-2">Last Name</label>
                      <input type="text" placeholder="Doe"
                        className="w-full bg-[#f8f5ff] border border-[#ecdaff] rounded-xl px-4 py-3.5 text-[15px] text-[#0d0517] placeholder:text-[#bbb] focus:outline-none focus:border-[#6128a6] focus:shadow-[0_0_0_3px_rgba(97,40,166,0.09)] transition-all duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#6128a6] mb-2">Email Address</label>
                    <input type="email" placeholder="john@company.com"
                      className="w-full bg-[#f8f5ff] border border-[#ecdaff] rounded-xl px-4 py-3.5 text-[15px] text-[#0d0517] placeholder:text-[#bbb] focus:outline-none focus:border-[#6128a6] focus:shadow-[0_0_0_3px_rgba(97,40,166,0.09)] transition-all duration-200" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#6128a6] mb-2">Message</label>
                    <textarea rows={4} placeholder="Tell us about your project or inquiry..."
                      className="w-full bg-[#f8f5ff] border border-[#ecdaff] rounded-xl px-4 py-3.5 text-[15px] text-[#0d0517] placeholder:text-[#bbb] focus:outline-none focus:border-[#6128a6] focus:shadow-[0_0_0_3px_rgba(97,40,166,0.09)] transition-all duration-200 resize-none" />
                  </div>
                  <button type="submit"
                    className="group/sub w-full bg-linear-to-r from-[#f85d37] to-[#ff7a58] text-white rounded-xl py-4 font-bold text-[16px] hover:shadow-[0_8px_28px_rgba(248,93,55,0.40)] transition-all duration-300 flex items-center justify-center gap-2">
                    Send Message
                    <ChevronRight className="w-5 h-5 group-hover/sub:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>

                {/* Direct contact */}
                <div className="mt-8 pt-7 border-t border-[#ecdaff] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href="mailto:uk@infoplusltd.co.uk"
                    className="flex items-center gap-3 text-[13px] text-[#555] hover:text-[#6128a6] transition-colors duration-200 group/email">
                    <div className="w-8 h-8 rounded-lg bg-[#6128a6]/10 flex items-center justify-center shrink-0 group-hover/email:bg-[#6128a6]/20 transition-colors">
                      <Mail className="w-4 h-4 text-[#6128a6]" />
                    </div>
                    uk@infoplusltd.co.uk
                  </a>
                  <a href="tel:+442082073474"
                    className="flex items-center gap-3 text-[13px] text-[#555] hover:text-[#6128a6] transition-colors duration-200 group/phone">
                    <div className="w-8 h-8 rounded-lg bg-[#6128a6]/10 flex items-center justify-center shrink-0 group-hover/phone:bg-[#6128a6]/20 transition-colors">
                      <Phone className="w-4 h-4 text-[#6128a6]" />
                    </div>
                    +44 20 8207 3474
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══ OLD GET IN TOUCH SECTION — BACKUP — START ═══
      <section className="py-24 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">Get in Touch</span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-5 leading-tight">Let's Start a Project Together</h2>
                <p className="text-[16px] text-[#555555] leading-[1.75] mb-12 text-justify">
                  We'd love to hear from you. Please fill out our form or drop us an email and we'll get back to you within one business day.
                </p>
                <div className="space-y-8">
                  {[
                    { title: "United Kingdom", desc: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW.", icon: MapPin },
                    { title: "India",           desc: "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai 600096.", icon: MapPin },
                    { title: "Germany",         desc: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, 60327.", icon: MapPin },
                  ].map((loc, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                        <loc.icon className="w-5 h-5 text-[#555555]" />
                      </div>
                      <div>
                        <h5 className="text-[17px] font-semibold text-[#111111] mb-1">{loc.title}</h5>
                        <p className="text-[14px] text-[#555555] leading-relaxed text-justify">{loc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0px_20px_40px_rgba(0,0,0,0.04)] border border-slate-100">
                <h3 className="text-[24px] font-bold text-[#111111] mb-8">Quick Enquiry</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] text-[#555555] mb-2 font-medium tracking-wide">First Name</label>
                      <input type="text" placeholder="John" className="w-full bg-[#f8f5ff] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#6128a6] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#555555] mb-2 font-medium tracking-wide">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full bg-[#f8f5ff] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#6128a6] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#555555] mb-2 font-medium tracking-wide">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-[#f8f5ff] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#6128a6] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#555555] mb-2 font-medium tracking-wide">Message</label>
                    <textarea rows={4} placeholder="Write your message here..." className="w-full bg-[#f8f5ff] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#6128a6] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#f85d37] text-white rounded-lg px-8 py-4 font-semibold text-[16px] hover:bg-[#e04f2c] transition-colors">Send Message</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      ═══ OLD GET IN TOUCH SECTION — BACKUP — END ═══ */}

    </div>
  );
}

export default HomePage;
