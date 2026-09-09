import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import {
  Users, Target, Shield, Globe2,
  RefreshCw, TrendingUp, BarChart2, Star, Compass,
  CheckCircle2, ArrowRight, Eye,
} from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import imgAboutHero from "../assets/images/About Us Hero.png";

function About() {
  /* ── Existing data (kept) ─────────────────────────── */
  const stats = [
    { label: "Founded",           value: "2000"   },
    { label: "Global Offices",    value: "17"     },
    { label: "Enterprise Clients", value: "120+"  },
    { label: "Team Members",      value: "1,200+" },
  ];

  const cultureCards = [
    { icon: Target, title: "Mission Driven",  desc: "We follow the golden circle of Why, How, and What." },
    { icon: Shield, title: "Quality First",   desc: "We put quality first to deliver WOW services to all our clients." },
    { icon: Users,  title: "Customer Empathy", desc: "Developing strong client relationships through deep understanding." },
    { icon: Globe2, title: "Global Reach",    desc: "Headquartered in UK with presence in Germany and India." },
  ];

  /* ── New data ─────────────────────────────────────── */
  const values = [
    { icon: RefreshCw,  title: "Flexibility",        desc: "We are open to change and maintaining flexibility." },
    { icon: Compass,    title: "Planning",            desc: "We follow the golden circle of Why, How, and What." },
    { icon: TrendingUp, title: "Performance",         desc: "We value our people, encourage their development and reward their performance." },
    { icon: Users,      title: "Business Growth",     desc: "We develop client relationships through customer empathy." },
    { icon: Star,       title: "Quality",             desc: "We put quality first to deliver WOW services." },
    { icon: BarChart2,  title: "Financial Planning",  desc: "Provide visible positive contribution to the client's IT growth strategy." },
  ];

  const factBullets = [
    "Operating in 11 Countries.",
    "Preferred IT partner for many leading organizations.",
    "2 Decades with 120+ customers.",
    "State-of-art infrastructure in the UK and India.",
  ];

  const partnerBenefits = [
    "More Business opportunities",
    "Bridging the gap in expertise and knowledge",
    "New perspective",
    "Enhance MVP turnaround time",
    "Realize the benefits of their IT strategy sooner",
    "Augment their service offerings",
  ];

  const team = [
    { name: "Rajesh Kumar",     role: "CEO & Founder",                    bio: "Visionary leader with 24+ years driving global IT strategy and innovation.",             initials: "RK", accent: "#EB9B3D", image: "/team/rajesh-kumar.jpg",   linkedin: "#" },
    { name: "Priya Sharma",     role: "Chief Technology Officer",          bio: "Architect of enterprise cloud and AI solutions across 17 countries.",                    initials: "PS", accent: "#DA4D33", image: "/team/priya-sharma.jpg",   linkedin: "#" },
    { name: "James Bennett",    role: "Head of IT Services",               bio: "Expert in managed IT, infrastructure, and cybersecurity delivery.",                     initials: "JB", accent: "#F5A623", image: "/team/james-bennett.jpg",  linkedin: "#" },
    { name: "Aisha Patel",      role: "Director of SAP Practice",          bio: "Certified SAP consultant specialising in S/4HANA transformations.",                     initials: "AP", accent: "#F0783A", image: "/team/aisha-patel.jpg",    linkedin: "#" },
    { name: "Michael Carter",   role: "Head of Staffing & Consulting",     bio: "Connects top IT talent with leading organisations across the UK.",                      initials: "MC", accent: "#F5C66A", image: "/team/michael-carter.jpg", linkedin: "#" },
    { name: "Sophie Williams",  role: "Director of Business Development",  bio: "Builds lasting partnerships and drives growth across new markets.",                     initials: "SW", accent: "#EB9B3D", image: "/team/sophie-williams.jpg",linkedin: "#" },
  ];

  const milestones = [
    { year: "2010", title: "Infoplus Technologies Founded", desc: "Established by Srikanth Settipalli, laying the foundation for a global IT services company.", accent: "#EB9B3D" },
    { year: "2011", title: "Trusted Recruitment Vendor for Shell", desc: "Named a preferred recruitment partner for Shell Company — one of the Fortune 500 companies in the UK.", accent: "#DA4D33" },
    { year: "2012", title: "SmartEMS Wins JNTU Hyderabad Bid", desc: "Our SmartEMS system was selected as the winning bidder at Jawaharlal Nehru Technological University, Hyderabad.", accent: "#F5A623" },
    { year: "2013", title: "Acquired 3DM Engineering", desc: "Strategic acquisition of 3DM Engineering, extending our footprint into Kazakhstan and Central Asia.", accent: "#F0783A" },
    { year: "2015", title: "Acquired LearnEngg", desc: "Added LearnEngg — one of India's leading e-learning companies — to our expanding portfolio.", accent: "#F5C66A" },
    { year: "2019", title: "Digital Transformation IT Tower Launched", desc: "Commenced a focused IT Service tower for Digital Transformation, accelerating our clients' digital journeys.", accent: "#DA4D33" },
  ];

  return (
    <div className="w-full">
      <PageMeta
        title="About Infoplus Technologies UK Limited"
        description="Started in 2000, Infoplus runs on a performance–pricing model most IT firms don't offer – you pay for outcomes, not just hours logged."
        keywords="About us"
        path="/about"
      />

      {/* ── 1. HERO (EXISTING) ─────────────────────────── */}
      <PageHero
        title="We are shaping the future of digital"
        description="Infoplus Technologies UK Ltd is a forward-looking Information technology company focused on building products, services, staffing, consulting, and digital transformation."
        badge="ABOUT US"
        variant="split"
        image={imgAboutHero}
      >
        <div className="grid grid-cols-2 gap-8 mt-12">
          {stats.map((stat, i) => (
            <div key={i} className="border-l-2 border-[#DA4D33] pl-4">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── 2. WHO WE ARE (NEW) ────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left decorative year */}
            <ScrollReveal direction="left" className="lg:col-span-4">
              <div className="relative">
                <div className="text-[9rem] font-black leading-none text-[#EEF2FF] select-none pointer-events-none">2000</div>
                <div className="absolute inset-0 flex flex-col justify-center pl-2">
                  <span className="inline-block bg-[#DA4D33] text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 w-fit">
                    Born in 2000
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-[#EB9B3D]" />
                      <span className="text-[#EB9B3D] text-sm font-semibold">United Kingdom HQ</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-0.5 bg-[#DA4D33]" />
                      <span className="text-[#555555] text-sm">Borehamwood</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right content */}
            <ScrollReveal direction="right" className="lg:col-span-8">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Who We Are
                </span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-7">
                  Born in 2000, Built for{" "}
                  <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Tomorrow</span>
                </h2>
                <div className="space-y-5">
                  <p className="text-[16px] text-[#555555] leading-[1.8] text-justify">
                    Born in 2000, Infoplus Technologies UK Ltd is a forward-looking Information technology company focused on building products, services, staffing, consulting, and digital transformation, needed for next-generation. We combine the power of technology with our culture: Quality, Innovation, and customer empathy, Infoplus Technologies UK Ltd is at the forefront in providing a comprehensive portfolio of services to cater to the needs of clients&apos; strategies in the evolving world of digital.
                  </p>
                  <p className="text-[16px] text-[#555555] leading-[1.8] text-justify">
                    Headquartered at Borehamwood, United Kingdom, we challenge industry norms by holding ourselves accountable through our fixed-price and ongoing service contract methods, with a unique performance-pricing model.
                  </p>
                </div>

                {/* Accent blockquote */}
                <div className="mt-8 pl-5 border-l-4 border-[#DA4D33] bg-white rounded-r-2xl py-4 pr-6">
                  <p className="text-[15px] text-[#1A2444] font-semibold leading-relaxed italic">
                    "Combining the power of technology with Quality, Innovation, and customer empathy at the forefront of the evolving digital world."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. OUR VALUES (NEW) ────────────────────────── */}
      <section className="py-24 bg-[#141A3D] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#EB9B3D] opacity-20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#DA4D33] opacity-10 rounded-full blur-[80px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Values
              </span>
              <h2 className="text-[36px] font-bold text-white mb-4">
                What Drives Us{" "}
                <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Forward</span>
              </h2>
              <p className="text-white/50 text-[16px] max-w-2xl mx-auto">
                The principles that guide every decision, relationship, and product we build.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 90}>
                <div className="group h-full bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#DA4D33]/50 hover:shadow-[0_16px_40px_rgba(218,77,51,0.10)] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <val.icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-3">{val.title}</h3>
                  <p className="text-white/55 text-[14px] leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3b. IN THE NEWS ══ */}
      <section className="py-20 bg-[#141A3D] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <style>{`
          @keyframes tnNodePulse {
            0%   { transform: scale(1);    opacity: 0.55; }
            60%  { transform: scale(1.65); opacity: 0;    }
            100% { transform: scale(1.65); opacity: 0;    }
          }
          @keyframes tnYearFloat {
            0%,100% { transform: translateY(0);    }
            50%      { transform: translateY(-9px); }
          }
          @keyframes tnDotPulse {
            0%,100% { opacity: 0.75; transform: scale(1);    }
            50%      { opacity: 1;   transform: scale(1.18); }
          }
          @keyframes tnSpineFlow {
            0%   { background-position: 0 0; }
            100% { background-position: 0 120px; }
          }
        `}</style>

        {/* Ambient */}
        <div className="absolute inset-0 opacity-[0.013] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#EB9B3D] opacity-[0.08] blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#DA4D33] opacity-[0.05] blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-white/7 border border-white/12 text-[#DA4D33] text-[11px] font-bold uppercase tracking-widest mb-5">
                In the News
              </span>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-tight mb-4">
                Our Journey,{" "}
                <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Milestone by Milestone
                </span>
              </h2>
              <p className="text-[15px] text-white/40 max-w-xl mx-auto leading-relaxed">
                Over two decades of growth, strategic acquisitions, and global impact.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">

            {/* Spine — desktop center */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-px pointer-events-none overflow-hidden">
              <div className="w-px h-full"
                style={{ background: "linear-gradient(to bottom, transparent 0%, #EB9B3D 8%, #DA4D33 42%, #DA4D33 78%, transparent 100%)" }} />
            </div>

            {/* Spine — mobile left */}
            <div className="lg:hidden absolute left-7 top-0 bottom-0 w-px pointer-events-none"
              style={{ background: "linear-gradient(to bottom, transparent 0%, #EB9B3D 8%, #DA4D33 52%, #DA4D33 90%, transparent 100%)" }} />

            {milestones.map((m, i) => {
              const cardRight = i % 2 === 0;
              const num = String(i + 1).padStart(2, "0");
              const d1 = `${i * 0.38}s`;
              const d2 = `${i * 0.38 + 0.52}s`;
              const floatDur = `${3.8 + i * 0.25}s`;
              const floatDelay = `${i * 0.18}s`;

              const yearDisplay = (side: "left" | "right") => (
                <div className={`flex flex-col ${side === "left" ? "items-end pr-10 xl:pr-14" : "items-start pl-10 xl:pl-14"} select-none`}>
                  <div
                    className="font-black leading-none mb-3"
                    style={{
                      fontSize: "clamp(3.2rem,6vw,5.8rem)",
                      background: `linear-gradient(135deg,${m.accent} 0%,${m.accent}55 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: `tnYearFloat ${floatDur} ${floatDelay} ease-in-out infinite`,
                    }}>
                    {m.year}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/20">{num}&nbsp;/&nbsp;06</span>
                </div>
              );

              const card = (dir: "left" | "right") => (
                <ScrollReveal direction={dir} delay={i * 60}>
                  <div
                    className="group relative rounded-2xl overflow-hidden p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(0,0,0,0.55)]"
                    style={{
                      background: `linear-gradient(145deg,${m.accent}0d 0%,rgba(255,255,255,0.015) 100%)`,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}>
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-0.75 pointer-events-none"
                      style={{ background: `linear-gradient(90deg,transparent,${m.accent},transparent)` }} />
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{ boxShadow: `inset 0 0 40px ${m.accent}09` }} />
                    <div className="relative z-10">
                      {/* Year badge */}
                      <div className="flex items-center gap-2.5 mb-4">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{ background: `${m.accent}1a`, color: m.accent, border: `1px solid ${m.accent}38` }}>
                          {m.year}
                        </span>
                        <span className="text-[9px] text-white/20 font-bold uppercase tracking-wider">{num} / 06</span>
                      </div>
                      <h3 className="text-[16px] font-bold text-white mb-3 leading-snug">{m.title}</h3>
                      <p className="text-[13px] text-white/45 leading-relaxed">{m.desc}</p>
                    </div>
                    {/* Hover border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ border: `1px solid ${m.accent}30` }} />
                  </div>
                </ScrollReveal>
              );

              return (
                <div key={m.year} className={`relative${i < milestones.length - 1 ? " pb-14 lg:pb-16" : ""}`}>

                  {/* ═══ DESKTOP alternating layout ═══ */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_96px_1fr] lg:items-center">

                    {/* Left col */}
                    {cardRight ? yearDisplay("left") : card("left")}

                    {/* ── Spine node ── */}
                    <div className="relative flex items-center justify-center z-10">
                      {/* Outer pulse ring */}
                      <div
                        className="absolute w-20 h-20 rounded-full pointer-events-none"
                        style={{ border: `1.5px solid ${m.accent}22`, animation: `tnNodePulse 2.8s ${d1} ease-out infinite` }} />
                      {/* Inner pulse ring */}
                      <div
                        className="absolute w-14 h-14 rounded-full pointer-events-none"
                        style={{ border: `1.5px solid ${m.accent}35`, animation: `tnNodePulse 2.8s ${d2} ease-out infinite` }} />
                      {/* Node body */}
                      <div
                        className="relative w-11 h-11 rounded-full flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle at 35% 35%,${m.accent}40,rgba(13,5,23,0.96))`,
                          border: `2px solid ${m.accent}70`,
                          boxShadow: `0 0 18px ${m.accent}50, 0 0 42px ${m.accent}1a`,
                        }}>
                        {/* White-to-accent dot */}
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: `radial-gradient(circle,#ffffff 0%,${m.accent} 100%)`,
                            animation: `tnDotPulse 2s ${d1} ease-in-out infinite`,
                          }} />
                      </div>
                    </div>

                    {/* Right col */}
                    {cardRight ? card("right") : yearDisplay("right")}
                  </div>

                  {/* ═══ MOBILE layout ═══ */}
                  <div className="lg:hidden flex items-start gap-0 pl-2">
                    {/* Mini node */}
                    <div className="relative flex items-center justify-center shrink-0 mt-2.5 ml-4">
                      <div
                        className="absolute w-12 h-12 rounded-full pointer-events-none"
                        style={{ border: `1px solid ${m.accent}22`, animation: `tnNodePulse 2.8s ${d1} ease-out infinite` }} />
                      <div
                        className="relative w-7 h-7 rounded-full flex items-center justify-center z-10"
                        style={{
                          background: `radial-gradient(circle at 35% 35%,${m.accent}45,rgba(13,5,23,0.96))`,
                          border: `2px solid ${m.accent}65`,
                          boxShadow: `0 0 12px ${m.accent}40`,
                        }}>
                        <div className="w-2 h-2 rounded-full"
                          style={{ background: `radial-gradient(circle,#ffffff 0%,${m.accent} 100%)` }} />
                      </div>
                    </div>

                    {/* Mobile card */}
                    <div className="flex-1 ml-6">
                      <ScrollReveal direction="right" delay={i * 55}>
                        <div
                          className="group relative rounded-2xl overflow-hidden p-5 transition-all duration-500"
                          style={{
                            background: `linear-gradient(145deg,${m.accent}0d 0%,rgba(255,255,255,0.015) 100%)`,
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}>
                          <div className="absolute top-0 left-0 right-0 h-0.75 pointer-events-none"
                            style={{ background: `linear-gradient(90deg,transparent,${m.accent},transparent)` }} />
                          <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                              <span
                                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                                style={{ background: `${m.accent}1a`, color: m.accent, border: `1px solid ${m.accent}38` }}>
                                {m.year}
                              </span>
                              <span className="text-[9px] text-white/20 uppercase tracking-wider">{num} / 06</span>
                            </div>
                            <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">{m.title}</h3>
                            <p className="text-[12px] text-white/42 leading-relaxed">{m.desc}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 3c. IN THE NEWS — LITE VARIANT ══ */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-[-8%] left-[-5%] w-80 h-80 rounded-full bg-[#FEF0DC] opacity-55 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-8%] right-[-4%] w-72 h-72 rounded-full bg-[#DA4D33]/10 blur-[90px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-[#DA4D33]/3 blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Journey
              </span>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-[#111111] leading-tight mb-4">
                In the News,{" "}
                <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Milestone by Milestone
                </span>
              </h2>
              <p className="text-[15px] text-[#666666] max-w-xl mx-auto leading-relaxed">
                Over two decades of growth, strategic acquisitions, and global impact.
              </p>
            </div>
          </ScrollReveal>

          {/* ══ DESKTOP — horizontal infographic timeline ══ */}
          <div className="hidden lg:block">
            <div className="relative h-108">

              {/* Dashed spine */}
              <div className="absolute top-1/2 left-10 right-10 h-0 -translate-y-px pointer-events-none"
                style={{ borderTop: "2px dashed rgba(235,155,61,0.22)" }} />
              {/* Gradient colour tint on spine */}
              <div className="absolute top-1/2 left-10 right-10 h-px -translate-y-px pointer-events-none"
                style={{ background: "linear-gradient(90deg,transparent,#EB9B3D 12%,#DA4D33 48%,#DA4D33 85%,transparent)", opacity: 0.20 }} />

              {/* Columns */}
              <div className="grid h-full" style={{ gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))` }}>
                {milestones.map((m, i) => {
                  const above = i % 2 === 0;
                  return (
                    <ScrollReveal key={m.year} direction="up" delay={i * 75} className="h-full">
                      <div className="h-full flex flex-col items-center">

                        {/* TOP area (176px = h-44) */}
                        <div className="h-44 flex flex-col items-center justify-end px-2 pb-5 w-full">
                          {above && (
                            <div className="text-center w-full">
                              {/* Step badge */}
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-[11px] font-black mb-3"
                                style={{ background: `linear-gradient(135deg,${m.accent},${m.accent}cc)`, boxShadow: `0 2px 8px ${m.accent}35` }}>
                                {i + 1}
                              </div>
                              <h3 className="text-[12px] font-bold text-[#0D112D] mb-1.5 leading-snug">{m.title}</h3>
                              <p className="text-[10.5px] text-[#777777] leading-[1.6]">{m.desc}</p>
                            </div>
                          )}
                        </div>

                        {/* NODE area (80px = h-20) */}
                        <div className="h-20 flex flex-col items-center justify-center z-10">
                          {/* Top connector */}
                          <div className="w-px h-6 shrink-0"
                            style={{ background: `linear-gradient(to bottom,transparent,${m.accent}55)` }} />
                          {/* Year pill */}
                          <div
                            className="rounded-full px-5 py-2.5 text-white text-[14px] font-black whitespace-nowrap shrink-0"
                            style={{
                              background: `linear-gradient(135deg,${m.accent} 0%,${m.accent}cc 100%)`,
                              boxShadow: `0 4px 16px ${m.accent}40, 0 0 0 4px ${m.accent}14`,
                            }}>
                            {m.year}
                          </div>
                          {/* Bottom connector */}
                          <div className="w-px h-6 shrink-0"
                            style={{ background: `linear-gradient(to bottom,${m.accent}55,transparent)` }} />
                        </div>

                        {/* BOTTOM area (176px = h-44) */}
                        <div className="h-44 flex flex-col items-center justify-start px-2 pt-5 w-full">
                          {!above && (
                            <div className="text-center w-full">
                              {/* Step badge */}
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-[11px] font-black mb-3"
                                style={{ background: `linear-gradient(135deg,${m.accent},${m.accent}cc)`, boxShadow: `0 2px 8px ${m.accent}35` }}>
                                {i + 1}
                              </div>
                              <h3 className="text-[12px] font-bold text-[#0D112D] mb-1.5 leading-snug">{m.title}</h3>
                              <p className="text-[10.5px] text-[#777777] leading-[1.6]">{m.desc}</p>
                            </div>
                          )}
                        </div>

                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ══ MOBILE — pill + card list ══ */}
          <div className="lg:hidden space-y-6">
            {milestones.map((m, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <ScrollReveal key={m.year} direction="right" delay={i * 60}>
                  <div className="flex items-start gap-4">
                    {/* Year pill */}
                    <div className="shrink-0 mt-0.5">
                      <div
                        className="rounded-full px-4 py-2 text-white text-[13px] font-black whitespace-nowrap"
                        style={{
                          background: `linear-gradient(135deg,${m.accent},${m.accent}cc)`,
                          boxShadow: `0 3px 12px ${m.accent}35`,
                        }}>
                        {m.year}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 pl-4 border-l-2" style={{ borderColor: `${m.accent}30` }}>
                      <span className="text-[9px] font-black uppercase tracking-widest block mb-1" style={{ color: m.accent }}>{num} / 06</span>
                      <h3 className="text-[14px] font-bold text-[#0D112D] mb-1.5 leading-snug">{m.title}</h3>
                      <p className="text-[12px] text-[#666666] leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. FACTS / MISSION / VISION (NEW) ─────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">Facts</span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-4">
                Two Decades of{" "}
                <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Excellence</span>
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-4xl">
                As an end-to-end IT Service provider, we have the privilege of growing with our clients, partners, and employees. It is really a source of utmost pleasure to see that our company has grown organically over the last two decades by religiously practicing our core values.
              </p>
            </div>
          </ScrollReveal>

          {/* Key stats
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {keyStats.map((stat, i) => (
              <ScrollReveal key={i} variant="card" delay={i * 80}>
                <div className="text-center p-8 bg-white rounded-2xl border border-[#e5e4e7] shadow-sm hover:border-[#EB9B3D]/30 hover:shadow-[0_8px_24px_rgba(235,155,61,0.08)] transition-all duration-300">
                  <div className="text-[48px] font-black text-[#EB9B3D] leading-none mb-2">{stat.val}</div>
                  <div className="text-[12px] font-semibold text-[#555555] uppercase tracking-widest">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div> */}

          {/* Mission + Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <ScrollReveal direction="left">
              <div className="group h-full bg-white border border-[#e5e4e7] p-10 rounded-2xl hover:border-[#DA4D33]/40 hover:shadow-[0_12px_40px_rgba(218,77,51,0.08)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#FEF8F0] flex items-center justify-center mb-6 group-hover:bg-[#DA4D33] transition-colors duration-300">
                  <Target className="w-6 h-6 text-[#DA4D33] group-hover:text-white transition-colors duration-300" strokeWidth={1.6} />
                </div>
                <h3 className="text-[22px] font-bold text-[#111111] mb-4">Mission</h3>
                <p className="text-[15px] text-[#555555] leading-[1.8]">
                  Provide visible positive contribution to the client&apos;s IT growth strategy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="group h-full bg-white border border-[#e5e4e7] p-10 rounded-2xl hover:border-[#EB9B3D]/40 hover:shadow-[0_12px_40px_rgba(235,155,61,0.08)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#FEF0DC] flex items-center justify-center mb-6 group-hover:bg-[#EB9B3D] transition-colors duration-300">
                  <Eye className="w-6 h-6 text-[#EB9B3D] group-hover:text-white transition-colors duration-300" strokeWidth={1.6} />
                </div>
                <h3 className="text-[22px] font-bold text-[#111111] mb-4">Vision</h3>
                <p className="text-[15px] text-[#555555] leading-[1.8]">
                  Build the best IT product and service, use innovation in engineering and development, implement the highest standards of quality and ethical practices.
                </p>
              </div>
            </ScrollReveal>
          </div>

          Fact bullets
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {factBullets.map((fact, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="flex items-center gap-4 bg-white border border-[#e5e4e7] px-5 py-4 rounded-xl hover:border-[#EB9B3D]/30 hover:shadow-sm transition-all duration-300">
                  <div className="w-7 h-7 rounded-lg bg-[#FEF0DC] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#EB9B3D]" />
                  </div>
                  <span className="text-[15px] font-medium text-[#111111]">{fact}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4b. Our Team
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#141A3D] relative overflow-hidden">
        <style>{`
          @keyframes teamDrift {
            0%,100% { transform: translate(0,0) scale(1); }
            33%      { transform: translate(18px,-14px) scale(1.10); }
            66%      { transform: translate(-14px,10px) scale(0.93); }
          }
          @keyframes teamFloat {
            0%,100% { transform: translateY(0) scale(1);   opacity: 0.7; }
            50%      { transform: translateY(-11px) scale(1.15); opacity: 1;   }
          }
          @keyframes teamRingPulse {
            0%,100% { transform: scale(1);    opacity: 0.22; }
            50%      { transform: scale(1.22); opacity: 0.05; }
          }
          @keyframes teamOuterRingPulse {
            0%,100% { transform: scale(1);    opacity: 0.12; }
            50%      { transform: scale(1.35); opacity: 0;    }
          }
          .team-shimmer { transform: translateX(-130%) skewX(-14deg); transition: transform 0.85s cubic-bezier(0.4,0,0.2,1); }
          .group:hover .team-shimmer { transform: translateX(280%) skewX(-14deg); }
        `}</style>

        {/* Ambient orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-162.5 h-162.5 rounded-full bg-[#1A2444] opacity-28 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-[-8%] left-[-6%] w-125 h-125 rounded-full bg-[#EB9B3D] opacity-14 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-[38%] w-80 h-80 rounded-full bg-[#DA4D33] opacity-[0.05] blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/15 border border-[#EB9B3D]/25 text-[#DA4D33] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Team
              </span>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-tight mb-4">
                Meet the{" "}
                <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  People Behind Infoplus
                </span>
              </h2>
              <p className="text-[16px] text-white/45 max-w-2xl mx-auto leading-relaxed">
                Experienced professionals united by a passion for technology, talent, and delivering real-world impact.
              </p>
            </div>
          </ScrollReveal>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {team.map((member, i) => {
              const floatDur = `${3.2 + i * 0.28}s`;
              const delay    = `${i * 0.45}s`;
              const delay2   = `${i * 0.45 + 1}s`;
              return (
                <ScrollReveal key={member.name} variant="card" delay={i * 70}>
                  <div className="group relative rounded-2xl border border-white/10 overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.18] hover:shadow-[0_24px_64px_rgba(0,0,0,0.55)]"
                    style={{ background: "linear-gradient(160deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.02) 100%)" }}>

                    {/* ─── Avatar composition area ─── */}
                    <div className="relative h-67.5 shrink-0 overflow-hidden">

                      {/* Fallback bg (visible when image is absent or loading) */}
                      <div className="absolute inset-0 flex items-center justify-center select-none"
                        style={{ background: `linear-gradient(135deg,${member.accent}50 0%,rgba(13,5,23,0.96) 100%)` }}>
                        <span className="font-black leading-none pointer-events-none"
                          style={{ fontSize: 90, color: `${member.accent}18`, letterSpacing: "-0.06em" }}>
                          {member.initials}
                        </span>
                      </div>

                      {/* Photo */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
                      />

                      {/* Accent light leak — top-left corner */}
                      <div className="absolute top-0 left-0 w-50 h-27.5 pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at 0% 0%,${member.accent}40 0%,transparent 75%)` }} />

                      {/* Subtle tint over image */}
                      <div className="absolute inset-0 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom,${member.accent}1a 0%,transparent 50%)` }} />

                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-0.75 pointer-events-none"
                        style={{ background: `linear-gradient(90deg,transparent,${member.accent},transparent)` }} />

                      {/* Floating accent dots */}
                      <div className="absolute w-2.5 h-2.5 rounded-full shadow-lg pointer-events-none"
                        style={{ top: 20, right: 22, background: member.accent, animation: `teamFloat ${floatDur} ease-in-out infinite`, animationDelay: delay }} />
                      <div className="absolute w-1.5 h-1.5 rounded-full pointer-events-none opacity-65"
                        style={{ top: 36, right: 42, background: member.accent, animation: `teamFloat ${floatDur} ease-in-out infinite reverse`, animationDelay: delay2 }} />

                      {/* Hover shimmer sweep */}
                      <div className="team-shimmer absolute inset-y-0 w-[42%] pointer-events-none"
                        style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)" }} />

                      {/* Bottom gradient fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-25 pointer-events-none"
                        style={{ background: "linear-gradient(to bottom,transparent,rgba(13,5,23,0.98))" }} />
                    </div>

                    {/* ─── Info area ─── */}
                    <div className="flex flex-col flex-1 px-6 pt-4 pb-6">

                      {/* Accent rule */}
                      <div className="h-0.5 w-10 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
                        style={{ background: `linear-gradient(90deg,${member.accent},transparent)` }} />

                      {/* Role */}
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: member.accent }}>
                        {member.role}
                      </p>

                      {/* Name */}
                      <h3 className="text-[19px] font-bold text-white mb-3 leading-snug">{member.name}</h3>

                      {/* Bio */}
                      <p className="text-[13px] text-white/45 leading-relaxed flex-1 mb-5">{member.bio}</p>

                      {/* LinkedIn */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="self-start inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 text-white/45 text-[12px] font-semibold transition-all duration-200 hover:text-white hover:border-[#0A66C2]/55 hover:bg-[#0A66C2]/12"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>

                    {/* Bottom accent bar (hover reveal) */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `linear-gradient(90deg,transparent,${member.accent},transparent)` }} />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CULTURE & VISION CARDS (EXISTING kept) ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Identity
              </span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-5">
                Empowering Digital{" "}
                <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Success</span>
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-3xl text-justify">
                We combine the power of technology with our culture: Quality, Innovation, and customer empathy. Infoplus Technologies UK Ltd is at the forefront in providing a comprehensive portfolio of services to cater to the needs of clients&apos; strategies in the evolving world of digital.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureCards.map((item, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 100} className="h-full">
                <div className="group h-full p-8 bg-white border border-[#e5e4e7] rounded-2xl hover:border-[#DA4D33]/30 hover:shadow-[0_8px_32px_rgba(235,155,61,0.10)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#111111] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#555555] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. CULTURE TEXT (NEW) ──────────────────────── */}
      <section className="py-24 bg-[#141A3D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#EB9B3D] opacity-15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DA4D33] opacity-[0.07] rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left decorative card */}
            <ScrollReveal direction="left">
              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-10 overflow-hidden min-h-100 flex flex-col justify-between">
                <div className="absolute -top-6 -right-6 text-[7rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                  Culture
                </div>
                <div className="relative z-10 space-y-5">
                  {["Collaboration", "Future Thinking", "Risk-Taking", "Client-Focused", "Innovation"].map((val, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#DA4D33] shrink-0" />
                      <span className="text-white/75 text-[17px] font-medium">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="relative z-10 mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/40 text-[14px] italic leading-relaxed">
                    "We celebrate success and look to improve it constantly."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right text */}
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                  Our Culture
                </span>
                <h2 className="text-[36px] font-bold text-white mb-7">
                  Our Most Valuable{" "}
                  <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Resource</span>
                </h2>
                <p className="text-[16px] text-white/60 leading-[1.85] text-justify">
                  At Infoplus Technologies UK Ltd, our most valuable resource is our people – with a diversified skill set, varied culture, and out-of-the-box options. Our team is client-focused with deep pride in their work. We believe in a culture rooted in collaboration, future thinking, and risk-taking. We hire smart and passionate professionals who thrive to understand the big picture. We celebrate success and look to improve it constantly. We have respect for the commitments we make and try to make every effort to meet or exceed them. We all have fun activities for employees to attend outside of work.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── 7. PARTNERSHIPS (NEW) ──────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left intro */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Partnerships
                </span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-6">
                  Building{" "}
                  <span style={{ background: "linear-gradient(90deg,#EB9B3D 0%,#DA4D33 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Together</span>
                </h2>
                <div className="space-y-5">
                  <p className="text-[16px] text-[#555555] leading-[1.8] text-justify">
                    Right from the inception, we have been identifying and craving for the right partners to drive our next-generation strategy and to answer prevalent business needs. Our service offerings and products across the industries are complimented by our partners.
                  </p>
                  <p className="text-[16px] text-[#555555] leading-[1.8] text-justify">
                    Our partner ecosystem includes go-to-market alliances, specialist partnerships for niche technologies, and partnerships for specific customer requirements; this system allows us to provide best-in-class solutions for our customers&apos; specific requirements.
                  </p>
                  <p className="text-[15px] text-[#EB9B3D] font-semibold">
                    Through partnerships, we continue to see the following benefits:
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right benefits */}
            <div className="space-y-3">
              {partnerBenefits.map((benefit, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 80}>
                  <div className="flex items-center gap-4 bg-white border border-[#e5e4e7] p-5 rounded-xl hover:border-[#EB9B3D]/30 hover:shadow-[0_4px_20px_rgba(235,155,61,0.07)] transition-all duration-300 group">
                    <div className="w-9 h-9 rounded-xl bg-[#FEF0DC] flex items-center justify-center shrink-0 group-hover:bg-[#EB9B3D] transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-[#EB9B3D] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[15px] font-medium text-[#111111]">{benefit}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
