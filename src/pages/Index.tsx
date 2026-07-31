import { useState, useEffect, useRef, type FormEvent } from "react";
import { Link } from "react-router";
import { ChevronRight, ChevronLeft, MapPin, Mail, Phone, Shield, Clock, Award, Headphones, Globe, Zap, Trophy, Star, Play, Quote } from "lucide-react";
import { ImageWithFallback } from "../components/helpers/ImageWithFallback";
import imgAboutUs from "../assets/images/Info_Landing_AboutSection.jpg";
import imgMap from "../assets/images/imgMap.png";
import {
  industries,
  ourSolutions,
  ourValues,
  services,
} from "../assets/constants/types";
// retained for commented-out backup sections – safe to ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import MultiUsageCard from "../components/cards/MultiUsageCard";
import IndexBanner from "../components/shared/IndexBanner";
import { PageMeta } from "../components/shared/PageMeta";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.infoplustechnologies.co.uk/#organization",
      "name": "Infoplus Technologies UK",
      "url": "https://www.infoplustechnologies.co.uk",
      "description": "Infoplus Technologies UK provides managed IT services, AI solutions, cloud computing, cyber security, SAP consulting and IT staffing across the United Kingdom.",
      "address": { "@type": "PostalAddress", "addressCountry": "GB" },
      "contactPoint": { "@type": "ContactPoint", "contactType": "customer service" },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://www.infoplustechnologies.co.uk/#website",
      "url": "https://www.infoplustechnologies.co.uk",
      "name": "Infoplus Technologies UK",
      "publisher": { "@id": "https://www.infoplustechnologies.co.uk/#organization" }
    }
  ]
};
import ClientCarousel from "../components/ui/ClientCarousel";
import { ScrollReveal } from "../components/ui/ScrollReveal";

/* â”€â”€ Solution cards enhanced for Our Work section â”€â”€ */
const EXTRAS = [
  {
    href: "/services/it-services",
    accent: "#f85d37",
    glow: "rgba(248,93,55,0.28)",
    number: "01",
  },
  {
    href: "/products",
    accent: "#aa3bff",
    glow: "rgba(170,59,255,0.28)",
    number: "02",
  },
  {
    href: "/services/staffing-consulting",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.28)",
    number: "03",
  },
  {
    href: "/services/new-generation",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.28)",
    number: "04",
  },
];
const SOLUTION_CARDS = ourSolutions.map((sol, i) => ({ ...sol, ...EXTRAS[i] }));

/* â”€â”€ Value card accents (cycles through 3 brand colours) â”€â”€ */
const VALUE_ACCENTS = [
  "#6128a6",
  "#aa3bff",
  "#f85d37",
  "#6128a6",
  "#aa3bff",
  "#f85d37",
  "#6128a6",
];

/* â”€â”€ Office locations (contact strip) â”€â”€ */
const LOCATIONS = [
  {
    country: "United Kingdom",
    address: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW.",
    accent: "#6128a6",
  },
  {
    country: "India",
    address:
      "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai 600096.",
    accent: "#f85d37",
  },
  {
    country: "Germany",
    address: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, 60327.",
    accent: "#aa3bff",
  },
];

/* ── Awards & Recognition data ── */
const AWARDS = [
  { icon: Trophy,    color: "#f59e0b", title: "Microsoft Solution Partner",  org: "Microsoft Corporation",         tag: "Technology Partner" },
  { icon: Shield,    color: "#6128a6", title: "ISO 27001 Certified",          org: "Information Security Mgmt.",    tag: "Certified"          },
  { icon: Award,     color: "#f85d37", title: "Clutch Top IT Company",        org: "Clutch Global Rankings",        tag: "2024"               },
  { icon: Star,      color: "#a855f7", title: "SAP Certified Partner",        org: "SAP SE",                        tag: "Technology Partner" },
  { icon: Globe,     color: "#14b8a6", title: "Cyber Essentials Plus",        org: "Nat. Cyber Security Centre",    tag: "Certified"          },
  { icon: Zap,       color: "#22c55e", title: "24+ Years of Excellence",      org: "Industry Recognition",          tag: "Since 2000"         },
] as const;

/* ── Client testimonials data ── */
const TESTIMONIALS = [
  {
    type: "text" as const,
    quote: "Infoplus Technologies transformed our IT infrastructure completely. Their expertise in cloud solutions drove a 40% improvement in our operational efficiency. Truly a trusted long-term partner.",
    name: "James Richardson",
    role: "Chief Technology Officer",
    company: "FinTech Solutions Ltd",
    initials: "JR",
    accent: "#6128a6",
    stars: 5,
  },
  {
    type: "video" as const,
    quote: "Their cybersecurity team identified vulnerabilities we didn't even know existed. We now have complete confidence in our data protection strategy.",
    name: "Sarah Mitchell",
    role: "IT Director",
    company: "Apex Healthcare UK",
    initials: "SM",
    accent: "#f85d37",
    stars: 5,
  },
  {
    type: "text" as const,
    quote: "From SAP consulting to IT staffing — Infoplus delivered beyond expectations every time. Their 98% client retention rate is no accident. Outstanding team and real outcomes.",
    name: "David Okafor",
    role: "Operations Manager",
    company: "Global Retail Group",
    initials: "DO",
    accent: "#14b8a6",
    stars: 5,
  },
  {
    type: "text" as const,
    quote: "The umbrella service and staffing solutions saved us months of recruitment headaches. Candidates were perfectly matched to our culture and technical requirements.",
    name: "Emma Clarke",
    role: "HR Director",
    company: "TechBridge UK",
    initials: "EC",
    accent: "#6366f1",
    stars: 5,
  },
  {
    type: "text" as const,
    quote: "Infoplus helped us migrate our entire SAP landscape to the cloud seamlessly. Their certified consultants brought structure, speed, and zero disruption to our operations.",
    name: "Michael Torres",
    role: "Head of IT",
    company: "BuildCore International",
    initials: "MT",
    accent: "#f59e0b",
    stars: 5,
  },
];

/* ── Our Team data ── */
const TEAM = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    bio: "Visionary leader with 24+ years driving global IT strategy and innovation.",
    initials: "RK",
    accent: "#6128a6",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Architect of enterprise cloud and AI solutions across 17 countries.",
    initials: "PS",
    accent: "#aa3bff",
    linkedin: "#",
  },
  {
    name: "James Bennett",
    role: "Head of IT Services",
    bio: "Expert in managed IT, infrastructure, and cybersecurity delivery.",
    initials: "JB",
    accent: "#f85d37",
    linkedin: "#",
  },
  {
    name: "Aisha Patel",
    role: "Director of SAP Practice",
    bio: "Certified SAP consultant specialising in S/4HANA transformations.",
    initials: "AP",
    accent: "#14b8a6",
    linkedin: "#",
  },
  {
    name: "Michael Carter",
    role: "Head of Staffing & Consulting",
    bio: "Connects top IT talent with leading organisations across the UK.",
    initials: "MC",
    accent: "#6366f1",
    linkedin: "#",
  },
  {
    name: "Sophie Williams",
    role: "Director of Business Development",
    bio: "Builds lasting partnerships and drives growth across new markets.",
    initials: "SW",
    accent: "#f59e0b",
    linkedin: "#",
  },
];

function HomePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", requirement: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);
  const [tIdx, setTIdx] = useState(0);
  const _textTs = TESTIMONIALS.filter(t => t.type === "text");
  const _videoTs = TESTIMONIALS.filter(t => t.type === "video");
  const tSlides = [
    ...Array.from({ length: Math.ceil(_textTs.length / 2) }, (_, i) => _textTs.slice(i * 2, i * 2 + 2)),
    ...Array.from({ length: Math.ceil(_videoTs.length / 2) }, (_, i) => _videoTs.slice(i * 2, i * 2 + 2)),
  ];
  const tTotal = tSlides.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setTIdx((i + tTotal) % tTotal);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => setTIdx(p => (p + 1) % tTotal), 6000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [tIdx, tTotal]);

  const validate = () => {
    const errs = { name: "", email: "", phone: "", requirement: "" };
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Contact number is required.";
    return errs;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.values(errs).every((v) => !v)) setSubmitted(true);
  };

  return (
    <div className="w-full">
      <PageMeta
        title="Managed IT Services & AI Solutions"
        description="Infoplus Technologies UK delivers expert managed IT services including AI, cloud computing, cyber security, SAP consulting and IT staffing solutions across the United Kingdom."
        path="/"
        jsonLd={homeJsonLd}
      />
      {/* 1. Hero */}
      <IndexBanner />

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          2. About Us NEW DESIGN
          Bento-stack right column: image card + stat tiles + location strip
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-28 bg-white relative overflow-hidden z-20">
        <div className="absolute top-[-10%] left-[-8%] w-[560px] h-[560px] rounded-full bg-[#ecdaff] opacity-55 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#f8f5ff] opacity-80 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6128a6 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-14 xl:gap-20 items-start">
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
                  Infoplus Technologies UK Ltd is a forward-looking Information
                  technology company focused on building products, services,
                  staffing, consulting, and digital transformation needed for
                  the next generation.
                </p>
                <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                  We combine the power of technology with our culture: Quality,
                  Innovation, and customer empathy at the forefront of
                  providing a comprehensive portfolio of services for clients'
                  evolving digital strategies.
                </p>
                <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                  Headquartered in Borehamwood, United Kingdom, we challenge
                  industry norms through our fixed-price and ongoing service
                  contract methods, with a unique performance-pricing model.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { label: "Quality First", color: "#6128a6" },
                  { label: "Innovation", color: "#aa3bff" },
                  { label: "Customer Empathy", color: "#f85d37" },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold border"
                    style={{
                      borderColor: `${p.color}35`,
                      color: p.color,
                      backgroundColor: `${p.color}0d`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    {p.label}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="w-full sm:w-auto group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.30)]"
              >
                Know More About Us
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            </ScrollReveal>

            {/* Right: Bento stack */}
            <ScrollReveal direction="right" delay={150}>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(97,40,166,0.14)]">
                  <ImageWithFallback
                    src={imgAboutUs}
                    alt="Infoplus Office Workspace"
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1e0a38]/75 via-[#1e0a38]/15 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-white text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f85d37] shrink-0 animate-pulse" />
                    ISO 14001:2015 Certified
                  </span>
                  <span className="absolute bottom-4 right-4 text-white/40 text-[11px] font-semibold uppercase tracking-widest">
                    Est. 2000
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0d0517] rounded-2xl p-5 flex flex-col justify-between min-h-[110px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#aa3bff] opacity-10 blur-[30px]" />
                    <p className="text-[#aa3bff] text-[40px] font-black leading-none relative z-10">
                      20+
                    </p>
                    <p className="text-white/45 text-[13px] font-medium mt-2 relative z-10">
                      Years of Excellence
                    </p>
                  </div>
                  <div className="bg-[#f8f5ff] rounded-2xl p-5 border border-[#ecdaff] flex flex-col justify-between min-h-[110px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#6128a6] opacity-8 blur-[30px]" />
                    <p className="text-[#6128a6] text-[40px] font-black leading-none relative z-10">
                      500+
                    </p>
                    <p className="text-[#0d0517]/45 text-[13px] font-medium mt-2 relative z-10">
                      Projects Delivered
                    </p>
                  </div>
                </div>
                <div className="bg-[#f0e8ff] border border-[#ecdaff] rounded-2xl p-4 flex items-start gap-4 shadow-[0_8px_24px_rgba(97,40,166,0.10)]">
                  <div className="w-10 h-10 rounded-xl bg-[#6128a6]/14 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#6128a6]" />
                  </div>
                  <div>
                    <p className="text-[#0d0517] font-bold text-[14px]">
                      17 Global Offices
                    </p>
                    <p className="text-[#0d0517]/55 text-[13px] mt-1 leading-[1.6]">
                      London · Manchester · Birmingham · Frankfurt · Paris · Amsterdam · New York · Chicago · San Francisco · Toronto · Sydney · Singapore · Tokyo · Chennai · Bangalore · Mumbai · Dubai
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â•â•â• OLD ABOUT SECTION BACKUP START â•â•â•
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
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">About Us</span>
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
      â•â•â• OLD ABOUT SECTION BACKUP END â•â•â• */}

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          3. Our Work NEW DESIGN
          Dark section rides up over the white About section.
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      {/* ══════════════════════════════════════════════════════
          2b. Why Choose Us
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden z-20">
        {/* Ambient orbs */}
        <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-[#ecdaff] opacity-50 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#d8c5f7] opacity-35 blur-[130px] pointer-events-none" />
        <div className="absolute top-[45%] right-[30%] w-[280px] h-[280px] rounded-full bg-[#f0e8ff] opacity-60 blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Why Choose Us
              </span>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-[#0d0517] leading-tight mb-4">
                Why Choose{" "}
                <span style={{ background: "linear-gradient(90deg,#aa3bff 0%,#f85d37 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Infoplus Technologies UK Ltd?
                </span>
              </h2>
              <p className="text-[16px] text-[#555]/70 max-w-2xl mx-auto leading-relaxed">
                Your trusted partner for comprehensive IT solutions, built on 24+ years of real-world expertise.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento grid — xl: 3 cols, md: 2 cols, mobile: 1 col */}
          <ScrollReveal direction="up" delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

              {/* Card 1 — Featured, spans 2 cols on xl */}
              <div className="xl:col-span-2 group relative rounded-3xl overflow-hidden border border-[#ecdaff] p-7 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center transition-all duration-300 hover:border-[#6128a6]/30 hover:shadow-[0_16px_48px_rgba(97,40,166,0.12)]"
                style={{ background: "linear-gradient(135deg,#f0e8ff 0%,#faf8ff 60%,#ffffff 100%)" }}>
                <span className="absolute top-4 right-5 text-[65px] font-black leading-none select-none pointer-events-none text-[#ecdaff]">01</span>
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ecdaff] opacity-40 blur-[60px] pointer-events-none" />
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center relative z-10" style={{ background: "linear-gradient(135deg,#6128a6 0%,#aa3bff 100%)" }}>
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="relative z-10">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#6128a6] mb-2">24+ Years of Experience</p>
                  <h3 className="text-[20px] md:text-[22px] font-bold text-[#0d0517] leading-snug">Solving Real IT Problems Since 2000</h3>
                  <p className="text-[14px] text-[#555]/70 leading-[1.75]">We have been solving real IT problems since 2000. This means we have already seen the challenges that your business is facing now; we know how to fix them properly.</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#aa3bff] to-transparent opacity-40" />
              </div>

              {/* Card 2 */}
              <div className="group relative rounded-3xl overflow-hidden border border-[#ecdaff] bg-white p-7 flex flex-col transition-all duration-300 hover:border-[#f85d37]/40 hover:shadow-[0_16px_48px_rgba(248,93,55,0.10)] hover:-translate-y-1">
                <span className="absolute top-4 right-5 text-[55px] font-black leading-none select-none pointer-events-none text-[#ecdaff]">02</span>
                <div className="absolute inset-0 bg-linear-to-br from-[#f85d37]/4 to-transparent pointer-events-none" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10" style={{ background: "rgba(248,93,55,0.12)", border: "1px solid rgba(248,93,55,0.20)" }}>
                  <Award className="w-6 h-6" style={{ color: "#f85d37" }} />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d0517] leading-snug relative z-10">Certified Specialists, Not Just Experienced</h3>
                <p className="text-[13px] text-[#555]/65 leading-[1.75] relative z-10 flex-1">Our teams include certified specialists across SAP, Cloud platforms & cybersecurity. You're getting services from the people who are genuinely qualified, not just experienced.</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#f85d37] to-transparent opacity-35" />
              </div>

              {/* Card 3 */}
              <div className="group relative rounded-3xl overflow-hidden border border-[#ecdaff] bg-white p-7 flex flex-col transition-all duration-300 hover:border-[#14b8a6]/40 hover:shadow-[0_16px_48px_rgba(20,184,166,0.10)] hover:-translate-y-1">
                <span className="absolute top-4 right-5 text-[55px] font-black leading-none select-none pointer-events-none text-[#ecdaff]">03</span>
                <div className="absolute inset-0 bg-linear-to-br from-[#14b8a6]/4 to-transparent pointer-events-none" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10" style={{ background: "rgba(20,184,166,0.12)", border: "1px solid rgba(20,184,166,0.20)" }}>
                  <Headphones className="w-6 h-6" style={{ color: "#14b8a6" }} />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d0517] leading-snug relative z-10">Ongoing Support That Never Walks Away</h3>
                <p className="text-[13px] text-[#555]/65 leading-[1.75] relative z-10 flex-1">We don't just set things up and walk away. We stay with you for ongoing support, so problems get fixed quickly, not weeks later.</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#14b8a6] to-transparent opacity-35" />
              </div>

              {/* Card 4 */}
              <div className="group relative rounded-3xl overflow-hidden border border-[#ecdaff] bg-white p-7 flex flex-col transition-all duration-300 hover:border-[#6366f1]/40 hover:shadow-[0_16px_48px_rgba(99,102,241,0.10)] hover:-translate-y-1">
                <span className="absolute top-4 right-5 text-[55px] font-black leading-none select-none pointer-events-none text-[#ecdaff]">04</span>
                <div className="absolute inset-0 bg-linear-to-br from-[#6366f1]/4 to-transparent pointer-events-none" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.20)" }}>
                  <Globe className="w-6 h-6" style={{ color: "#6366f1" }} />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d0517] leading-snug relative z-10">Support Spanning 17 Countries</h3>
                <p className="text-[13px] text-[#555]/65 leading-[1.75] relative z-10 flex-1">Our team works from across 17 countries, so support is never far away.</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#6366f1] to-transparent opacity-35" />
              </div>

              {/* Card 5 — md: full width so it centres, xl: normal 1 col */}
              <div className="md:col-span-2 xl:col-span-1 group relative rounded-3xl overflow-hidden border border-[#ecdaff] bg-white p-7 flex flex-col transition-all duration-300 hover:border-[#22c55e]/40 hover:shadow-[0_16px_48px_rgba(34,197,94,0.10)] hover:-translate-y-1">
                <span className="absolute top-4 right-5 text-[55px] font-black leading-none select-none pointer-events-none text-[#ecdaff]">05</span>
                <div className="absolute inset-0 bg-linear-to-br from-[#22c55e]/4 to-transparent pointer-events-none" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10" style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.20)" }}>
                  <Zap className="w-6 h-6" style={{ color: "#22c55e" }} />
                </div>
                <h3 className="text-[17px] font-bold text-[#0d0517] leading-snug relative z-10">IT That Actually Works for Your Business</h3>
                <p className="text-[13px] text-[#555]/65 leading-[1.75] relative z-10 flex-1">We don't just fix problems. We built IT that actually works for your business every day.</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#22c55e] to-transparent opacity-35" />
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. Our Work NEW DESIGN
          Dark section rides up over the Why Choose Us section.
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0d0517] relative overflow-hidden -mt-10 z-20">
        <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-[#381f55] opacity-35 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[#6128a6] opacity-12 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Work
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-5">
                Proactively Managed{" "}
                <span className="text-[#aa3bff]">IT Solutions</span>
              </h2>
              <p className="text-[15px] text-white/50 max-w-2xl mx-auto leading-relaxed">
                Our forward-thinking IT service CoE team designs end-to-end
                solutions for organisations to have a technology edge and stay
                ahead of the curve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SOLUTION_CARDS.map((sol, i) => (
              <ScrollReveal key={sol.title} variant="card" delay={i * 110}>
                <Link
                  to={sol.href}
                  className="group relative flex flex-col h-full bg-white/4 border border-white/10 rounded-3xl p-7 hover:border-white/20 hover:shadow-[0_20px_56px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `radial-gradient(ellipse at 25% 20%, ${sol.glow} 0%, transparent 65%)`,
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute top-3 right-5 font-black text-[96px] leading-none select-none pointer-events-none"
                    style={{ color: `${sol.accent}0a` }}
                  >
                    {sol.number}
                  </span>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: `${sol.accent}1a`,
                      color: sol.accent,
                    }}
                  >
                    <sol.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[20px] font-bold text-white mb-2 relative z-10">
                    {sol.title}
                  </h3>
                  <div
                    className="w-8 h-0.5 rounded-full mb-4 group-hover:w-16 transition-all duration-300"
                    style={{ backgroundColor: `${sol.accent}70` }}
                  />
                  <p className="text-[14px] text-white/55 leading-relaxed mb-5 group-hover:text-white/70 transition-colors duration-300 relative z-10">
                    {sol.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {sol.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] px-3 py-1 rounded-full font-semibold border"
                        style={{
                          borderColor: `${sol.accent}35`,
                          color: sol.accent,
                          backgroundColor: `${sol.accent}12`,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div
                    className="mt-auto flex items-center gap-1.5 text-[13px] font-semibold relative z-10"
                    style={{ color: sol.accent }}
                  >
                    Explore Solutions
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â• OLD OUR WORK SECTION BACKUP START â•â•â•
      <section className="py-24 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">Our Work</span>
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
      â•â•â• OLD OUR WORK SECTION BACKUP END â•â•â• */}

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          4b. AI Services CINEMATIC REDESIGN
          Deep dark bg, layered atmospheric lighting, gradient-border
          glass cards, sweep animation, gradient headline
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-32 bg-[#080010] relative overflow-hidden">
        {/* â”€â”€ Atmospheric lighting â”€â”€ */}
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* Orange-violet burst top right */}
          <div
            className="absolute -top-60 -right-40 w-200 h-200 rounded-full blur-[180px] opacity-20 animate-[pulse_7s_ease-in-out_infinite]"
            style={{
              background:
                "radial-gradient(circle, #f85d37 0%, #aa3bff 50%, transparent 75%)",
            }}
          />
          {/* Deep violet bottom left */}
          <div className="absolute -bottom-60 -left-40 w-175 h-175 rounded-full bg-[#6128a6] blur-[180px] opacity-[0.15] animate-[pulse_9s_ease-in-out_infinite_3s]" />
          {/* Subtle center orb */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-100 h-100 rounded-full bg-[#aa3bff] blur-[160px] opacity-[0.07] animate-[pulse_11s_ease-in-out_infinite_5s]" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Sweeping glow line */}
          <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-[#aa3bff]/40 to-transparent animate-[ai-sweep_10s_ease-in-out_infinite]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* â”€â”€ Cinematic headline â”€â”€ */}
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
                Infoplus Technologies is at the forefront of AI, helping
                organisations harness the power of intelligence to drive
                efficiency, innovation, and competitive advantage.
              </p>
            </div>
          </ScrollReveal>

          {/* â”€â”€ Stats filmstrip â”€â”€ */}
          <ScrollReveal direction="up" delay={80}>
            <div className="grid grid-cols-3 mb-16 rounded-2xl overflow-hidden border border-white/6">
              {[
                { value: "4x", label: "Productivity Boost", accent: "#f85d37" },
                { value: "40%", label: "Cost Reduction", accent: "#aa3bff" },
                { value: "24/7", label: "AI Availability", accent: "#10b981" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`group flex flex-col items-center py-10 px-6 bg-white/2 hover:bg-white/5 transition-all duration-300 cursor-default ${i > 0 ? "border-l border-white/6" : ""}`}
                >
                  <p
                    className="text-[44px] font-black leading-none mb-2 tabular-nums"
                    style={{ color: s.accent }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[11px] text-white/35 font-semibold uppercase tracking-[0.15em]">
                    {s.label}
                  </p>
                  <div
                    className="mt-5 h-0.5 w-8 rounded-full group-hover:w-20 transition-all duration-500"
                    style={{ backgroundColor: s.accent }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* â”€â”€ Service cards gradient-border glass style â”€â”€ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {services.map((svc, i) => {
              const ACCENTS = ["#aa3bff", "#f85d37", "#10b981", "#06b6d4"];
              const accent = ACCENTS[i];
              return (
                <ScrollReveal key={svc.title} variant="card" delay={i * 110}>
                  {/* Gradient border wrapper */}
                  <div
                    className="relative p-px rounded-2xl h-full"
                    style={{
                      background: `linear-gradient(135deg, ${accent}55 0%, transparent 45%, ${accent}22 100%)`,
                    }}
                  >
                    <div className="group relative bg-[#080010] rounded-2xl p-7 h-full flex flex-col overflow-hidden hover:bg-[#0d0220] transition-all duration-500">
                      {/* Corner glow on hover */}
                      <div
                        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-500 pointer-events-none"
                        style={{ backgroundColor: accent }}
                      />
                      {/* Number watermark */}
                      <span
                        className="absolute -bottom-3 -right-2 text-[90px] font-black leading-none select-none pointer-events-none opacity-[0.05]"
                        style={{ color: accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* Icon with pulsing ring */}
                      <div className="relative w-12 h-12 mb-5 shrink-0">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${accent}18` }}
                        >
                          <svc.icon
                            className="w-5 h-5"
                            style={{ color: accent }}
                          />
                        </div>
                        <span
                          className="absolute inset-0 rounded-xl border-2 animate-ping opacity-20"
                          style={{ borderColor: accent }}
                        />
                      </div>
                      {/* Title */}
                      <h4 className="text-[17px] font-bold text-white mb-1 relative z-10">
                        {svc.title}
                      </h4>
                      {/* Expanding accent line */}
                      <div
                        className="w-8 h-0.5 rounded-full mb-4 group-hover:w-16 transition-all duration-500 relative z-10"
                        style={{ backgroundColor: accent }}
                      />
                      {/* Description */}
                      <p className="text-[13px] text-white/45 leading-relaxed mb-5 flex-1 relative z-10">
                        {svc.description}
                      </p>
                      {/* Features */}
                      <ul className="space-y-2 relative z-10">
                        {svc.features.map((f, fi) => (
                          <li
                            key={fi}
                            className="flex items-center gap-2.5 text-[12px] text-white/35 group-hover:text-white/60 transition-colors duration-300"
                          >
                            <span
                              className="w-1 h-1 rounded-full shrink-0"
                              style={{ backgroundColor: accent }}
                            />
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

          {/* â”€â”€ CTAs â”€â”€ */}
          <ScrollReveal direction="up" delay={160}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services/it-services/artificial-intelligence"
                className="w-full sm:w-auto group/btn inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
              >
                Explore AI Services
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/12 hover:border-white/25 text-white font-semibold text-[15px] transition-all duration-300"
              >
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

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          5. Our Values NEW DESIGN
          White, rides up over the dark-purple AI section.
          Numbered watermark cards in a 4-col flex-wrap layout.
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-28 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-30">
        <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-50 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6128a6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Values
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight mb-5">
                Driven By <span className="text-[#6128a6]">Excellence</span>
              </h2>
              <p className="text-[15px] text-[#555]/70 max-w-xl mx-auto leading-relaxed">
                The principles that guide every decision, every engagement, and
                every line of code we write.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-5">
            {ourValues.map((val, i) => {
              const accent = VALUE_ACCENTS[i];
              return (
                <ScrollReveal
                  key={val.title}
                  variant="card"
                  delay={i * 75}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]"
                >
                  <div className="group relative bg-white border border-[#ecdaff] rounded-2xl p-7 overflow-hidden hover:border-[#6128a6]/25 hover:shadow-[0_16px_48px_rgba(97,40,166,0.10)] transition-all duration-300 h-full">
                    {/* Watermark number */}
                    <span
                      aria-hidden
                      className="absolute top-3 right-4 font-black text-[50px] leading-none select-none pointer-events-none text-[#ecdaff]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${accent}14`, color: accent }}
                    >
                      <val.icon className="w-6 h-6" />
                    </div>
                    {/* Accent line */}
                    <div
                      className="w-8 h-0.5 rounded-full mb-4 group-hover:w-14 transition-all duration-300 relative z-10"
                      style={{ backgroundColor: `${accent}80` }}
                    />
                    {/* Content */}
                    <h3 className="text-[17px] font-bold text-[#0d0517] mb-2 relative z-10">
                      {val.title}
                    </h3>
                    <p className="text-[14px] text-[#555]/65 leading-relaxed relative z-10">
                      {val.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* â•â•â• OLD OUR VALUES SECTION BACKUP START â•â•â•
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">Our Values</span>
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
      â•â•â• OLD OUR VALUES SECTION BACKUP END â•â•â• */}

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          6. Our Industries NEW DESIGN
          Dark section rides up over white Values.
          14 industries in a 7-col icon grid.
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-28 bg-[#0d0517] relative overflow-hidden -mt-10 rounded-t-[3rem] z-40">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-40 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#6128a6] opacity-18 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/15 text-white/60 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Industries
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-5">
                Industries <span className="text-[#aa3bff]">We Serve</span>
              </h2>
              <p className="text-[15px] text-white/45 max-w-xl mx-auto leading-relaxed">
                From pharmaceuticals to fintech our expertise spans every
                major vertical.
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

      {/* â•â•â• OLD OUR INDUSTRIES SECTION BACKUP START â•â•â•
      <section className="py-24 bg-[#6128a6]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">Our Industries</span>
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
      â•â•â• OLD OUR INDUSTRIES SECTION BACKUP END â•â•â• */}

      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          7. Clients carousel (unchanged)
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <ScrollReveal direction="fade">
        <ClientCarousel />
      </ScrollReveal>

      {/* ──────────────────────────────────────────────────────
          8a. Awards & Recognition
      ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-[-12%] right-[-6%] w-[550px] h-[550px] rounded-full bg-[#ecdaff] opacity-45 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-8%] left-[-4%] w-[420px] h-[420px] rounded-full bg-[#f0e8ff] opacity-55 blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.016] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Awards & Recognition
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight mb-4">
                Recognised for{" "}
                <span style={{ background: "linear-gradient(90deg,#6128a6 0%,#aa3bff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Excellence & Trust
                </span>
              </h2>
              <p className="text-[15px] text-[#555]/70 max-w-xl mx-auto leading-relaxed">
                Accreditations and recognitions that reflect our commitment to quality, security, and world-class IT delivery.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AWARDS.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div
                    key={i}
                    className="group relative bg-white border border-[#ecdaff] rounded-2xl p-6 overflow-hidden hover:shadow-[0_16px_48px_rgba(97,40,166,0.10)] transition-all duration-300 hover:-translate-y-1 flex items-start gap-5"
                    style={{ ["--hover-border" as string]: a.color + "66" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = a.color + "55")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
                  >
                    {/* Icon badge */}
                    <div
                      className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: a.color + "18", border: `1px solid ${a.color}30` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: a.color }} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="font-bold text-[#0d0517] text-[15px] leading-snug mb-0">{a.title}</p>
                      <p className="text-[12px] text-[#6b6375] leading-snug">{a.org}</p>
                      <span
                        className="inline-block py-0.5 px-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                        style={{ background: a.color + "15", color: a.color }}
                      >
                        {a.tag}
                      </span>
                    </div>

                    {/* Accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${a.color}, transparent)` }} />
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────
          8b. Client Testimonials
      ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[480px] h-[480px] rounded-full bg-[#ecdaff] opacity-50 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-8%] right-[-6%] w-[400px] h-[400px] rounded-full bg-[#e0d0f8] opacity-40 blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.016] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Client Testimonials
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight mb-4">
                What Our{" "}
                <span style={{ background: "linear-gradient(90deg,#6128a6 0%,#aa3bff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Clients Say
                </span>
              </h2>
              <p className="text-[15px] text-[#555]/70 max-w-xl mx-auto leading-relaxed">
                Real stories from the businesses we've helped transform with technology, talent, and trust.
              </p>
            </div>
          </ScrollReveal>

          {/* Carousel — text slides separate from video slides */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${tIdx * 100}%)` }}
              >
                {tSlides.map((pair, pi) => {
                  const isVideoSlide = pair.every(t => t.type === "video");
                  return (
                    <div key={pi} className="w-full flex-shrink-0">
                      {isVideoSlide ? (
                        /* ── Video slide: full-width horizontal layout ── */
                        <div className="flex flex-col gap-5">
                          {pair.map((t, ti) => (
                            <div key={ti} className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#ecdaff] shadow-[0_8px_40px_rgba(97,40,166,0.08)]">
                              {/* Dark video panel */}
                              <div
                                className="relative min-h-[280px] flex items-center justify-center overflow-hidden"
                                style={{ background: "linear-gradient(135deg,#1a0b2e 0%,#0d0517 60%,#120820 100%)" }}
                              >
                                <div className="absolute top-[-20%] left-[-10%] w-[280px] h-[280px] rounded-full bg-[#6128a6] opacity-20 blur-[60px] pointer-events-none" />
                                <div className="absolute bottom-[-10%] right-[-5%] w-[220px] h-[220px] rounded-full bg-[#f85d37] opacity-12 blur-[50px] pointer-events-none" />
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                                <button
                                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                  style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}
                                >
                                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                                  <span className="sr-only">Play video testimonial</span>
                                </button>
                                <div className="absolute bottom-5 left-5">
                                  <div className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5"
                                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                                    <Play className="w-3 h-3 text-white fill-white" />
                                    <span className="text-white text-[11px] font-semibold tracking-wide">Video Testimonial</span>
                                  </div>
                                </div>
                              </div>
                              {/* White text panel */}
                              <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
                                <div className="flex gap-1 mb-5">
                                  {Array.from({ length: t.stars }).map((_, s) => (
                                    <Star key={s} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                                  ))}
                                </div>
                                <Quote className="w-9 h-9 text-[#ecdaff] mb-4" />
                                <p className="text-[16px] md:text-[18px] text-[#0d0517] leading-[1.8] mb-8 font-medium italic">
                                  &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="flex items-center gap-4">
                                  <div
                                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-[15px] shadow-md"
                                    style={{ background: `linear-gradient(135deg,${t.accent} 0%,${t.accent}99 100%)` }}
                                  >
                                    {t.initials}
                                  </div>
                                  <div>
                                    <p className="font-bold text-[#0d0517] text-[15px] leading-snug mb-0">{t.name}</p>
                                    <p className="text-[13px] text-[#6b6375]">{t.role} &middot; {t.company}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* ── Text slide: 2 text cards per row ── */
                        <div className={`grid grid-cols-1 gap-5 items-stretch ${pair.length === 2 ? "md:grid-cols-2" : "max-w-2xl mx-auto"}`}>
                          {pair.map((t, ti) => (
                            <div key={ti} className="bg-white rounded-2xl border border-[#ecdaff] p-7 relative overflow-hidden shadow-[0_8px_40px_rgba(97,40,166,0.07)] flex flex-col">
                              <Quote className="absolute top-5 right-6 w-10 h-10 text-[#ecdaff]" />
                              <div className="flex gap-1 mb-5">
                                {Array.from({ length: t.stars }).map((_, s) => (
                                  <Star key={s} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                                ))}
                              </div>
                              <p className="text-[15px] md:text-[16px] text-[#0d0517] leading-[1.8] mb-7 font-medium italic flex-1">
                                &ldquo;{t.quote}&rdquo;
                              </p>
                              <div className="flex items-center gap-3.5">
                                <div
                                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-[15px] shadow-md"
                                  style={{ background: `linear-gradient(135deg,${t.accent} 0%,${t.accent}99 100%)` }}
                                >
                                  {t.initials}
                                </div>
                                <div>
                                  <p className="font-bold text-[#0d0517] text-[15px] leading-snug mb-0">{t.name}</p>
                                  <p className="text-[12px] text-[#6b6375]">{t.role} &middot; {t.company}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controls — dots + arrows */}
            <div className="flex items-center justify-center gap-3 mt-9">
              <button
                onClick={() => goTo(tIdx - 1)}
                aria-label="Previous"
                className="w-11 h-11 rounded-full border border-[#ecdaff] bg-white flex items-center justify-center text-[#6128a6] hover:bg-[#6128a6] hover:border-[#6128a6] hover:text-white transition-all duration-200 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {tSlides.map((_, di) => (
                <button
                  key={di}
                  onClick={() => goTo(di)}
                  aria-label={`Page ${di + 1}`}
                  className={`rounded-full transition-all duration-300 ${tIdx === di ? "w-7 h-3 bg-[#6128a6]" : "w-3 h-3 bg-[#d8c5f7] hover:bg-[#6128a6]/50"}`}
                />
              ))}
              <button
                onClick={() => goTo(tIdx + 1)}
                aria-label="Next"
                className="w-11 h-11 rounded-full border border-[#ecdaff] bg-white flex items-center justify-center text-[#6128a6] hover:bg-[#6128a6] hover:border-[#6128a6] hover:text-white transition-all duration-200 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8c. Our Team
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0d0517] relative overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-[-12%] right-[-6%] w-[600px] h-[600px] rounded-full bg-[#381f55] opacity-30 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-8%] left-[-5%] w-[480px] h-[480px] rounded-full bg-[#6128a6] opacity-15 blur-[130px] pointer-events-none" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#f85d37] opacity-[0.05] blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/15 border border-[#6128a6]/25 text-[#aa3bff] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Team
              </span>
              <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-tight mb-4">
                Meet the{" "}
                <span style={{ background: "linear-gradient(90deg,#aa3bff 0%,#f85d37 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
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
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} variant="card" delay={i * 60}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 flex flex-col items-center text-center overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.40)] h-full">
                  {/* Hover background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${member.accent}18 0%, transparent 65%)` }}
                  />

                  {/* Avatar */}
                  <div
                    className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-5 text-white font-black text-[28px] shadow-xl transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${member.accent} 0%, ${member.accent}cc 100%)` }}
                  >
                    {member.initials}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 pointer-events-none" />
                  </div>

                  {/* Name */}
                  <h3 className="text-[18px] font-bold text-white mb-1">{member.name}</h3>

                  {/* Role */}
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: member.accent }}>{member.role}</p>

                  {/* Bio */}
                  <p className="text-[13px] text-white/45 leading-relaxed flex-1 mb-6">{member.bio}</p>

                  {/* LinkedIn link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/50 hover:text-white hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 transition-all duration-200 text-[12px] font-semibold"
                    aria-label={`View ${member.name} on LinkedIn`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>

                  {/* Bottom accent on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${member.accent}, transparent)` }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
          8. Global Presence (unchanged)
      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="pt-24 pb-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-14 text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Global Reach
              </span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-5">
                Our Presence Worldwide
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-2xl mx-auto">
                We have a global reach with offices and operations across 11
                countries delivering world-class technology solutions wherever
                our clients need us.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={200}>
            <div className="flex justify-center mt-10">
              <ImageWithFallback
                src={imgMap}
                alt="World Map Locations"
                className="w-full max-w-5xl h-auto object-contain"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          9. Get in Touch NEW DESIGN
          Light purple bg, premium location cards + polished form.
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-28 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-60 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#f8f5ff] opacity-80 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6128a6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading + location cards */}
            <ScrollReveal direction="left">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-6">
                Get in Touch
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight mb-5">
                Let's Start a{" "}
                <span className="text-[#6128a6]">Project Together</span>
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] mb-10 text-justify">
                We'd love to hear from you. Fill out our form or drop us a
                direct message we get back within one business day.
              </p>

              {/* Location cards */}
              <div className="space-y-3 mb-8">
                {LOCATIONS.map((loc) => (
                  <div
                    key={loc.country}
                    className="group flex gap-4 items-start p-5 bg-white rounded-2xl border border-[#ecdaff] hover:border-[#6128a6]/25 hover:shadow-[0_8px_28px_rgba(97,40,166,0.09)] transition-all duration-300"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: `${loc.accent}14`,
                        color: loc.accent,
                      }}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#0d0517] text-[15px] mb-1">
                        {loc.country}
                      </h5>
                      <p className="text-[13px] text-[#555]/75 leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View all offices CTA */}
              <Link
                to="/contact#worldwide-presence"
                className="group/loc inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border border-[#ecdaff] hover:border-[#6128a6]/30 hover:shadow-[0_4px_18px_rgba(97,40,166,0.12)] text-[#6128a6] font-semibold text-[14px] transition-all duration-200 mb-5"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                View All 17 Offices Worldwide
                <ChevronRight className="w-4 h-4 group-hover/loc:translate-x-1 transition-transform duration-200" />
              </Link>
            </ScrollReveal>

            {/* Right: form card */}
            <ScrollReveal direction="right" delay={150}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(97,40,166,0.10)] border border-[#ecdaff]">
                <h3 className="text-[24px] font-bold text-[#0d0517] mb-1">
                  Quick Enquiry
                </h3>
                <p className="text-[14px] text-[#555]/65 mb-8">
                  Tell us about your project and we'll be in touch.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-[20px] font-bold text-[#0d0517] mb-2">Message Sent!</h4>
                    <p className="text-[14px] text-[#555]/65">We'll get back to you within one business day.</p>
                  </div>
                ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#333] mb-1.5">
                      Your Name <span className="text-[#f85d37]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border text-[15px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 transition-all ${errors.name ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-[#e5e4e7] bg-[#fafafa] focus:ring-[#6128a6]/20 focus:border-[#6128a6]"}`}
                    />
                    {errors.name && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#333] mb-1.5">
                      Email Address <span className="text-[#f85d37]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border text-[15px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 transition-all ${errors.email ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-[#e5e4e7] bg-[#fafafa] focus:ring-[#6128a6]/20 focus:border-[#6128a6]"}`}
                    />
                    {errors.email && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#333] mb-1.5">
                      Contact Number <span className="text-[#f85d37]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 20 0000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border text-[15px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 transition-all ${errors.phone ? "border-red-400 focus:ring-red-200 focus:border-red-400" : "border-[#e5e4e7] bg-[#fafafa] focus:ring-[#6128a6]/20 focus:border-[#6128a6]"}`}
                    />
                    {errors.phone && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#333] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project, challenge, or what you'd like to achieve…"
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e5e4e7] bg-[#fafafa] text-[15px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#6128a6]/20 focus:border-[#6128a6] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group/sub w-full bg-linear-to-r from-[#f85d37] to-[#ff7a58] text-white rounded-xl py-4 font-bold text-[16px] hover:shadow-[0_8px_28px_rgba(248,93,55,0.40)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message
                    <ChevronRight className="w-5 h-5 group-hover/sub:translate-x-1 transition-transform duration-200" />
                  </button>
                  <div className="flex items-start gap-2 text-[12px] text-[#888] mt-2">
                    <Shield className="w-5 h-5 text-[#6128a6]/50 shrink-0 mt-0.5" />
                    <span>We respect your privacy. We promise we won't spam you :)</span>
                  </div>
                </form>
                )}

                {/* Direct contact */}
                <div className="mt-8 pt-7 border-t border-[#ecdaff] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="flex items-center gap-3 text-[13px] text-[#555] hover:text-[#6128a6] transition-colors duration-200 group/email"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#6128a6]/10 flex items-center justify-center shrink-0 group-hover/email:bg-[#6128a6]/20 transition-colors">
                      <Mail className="w-4 h-4 text-[#6128a6]" />
                    </div>
                    uk@infoplusltd.co.uk
                  </a>
                  <a
                    href="tel:+442082073474"
                    className="flex items-center gap-3 text-[13px] text-[#555] hover:text-[#6128a6] transition-colors duration-200 group/phone"
                  >
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

      {/* â•â•â• OLD GET IN TOUCH SECTION BACKUP START â•â•â•
      <section className="py-24 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">Get in Touch</span>
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
      â•â•â• OLD GET IN TOUCH SECTION BACKUP END â•â•â• */}
    </div>
  );
}

export default HomePage;

