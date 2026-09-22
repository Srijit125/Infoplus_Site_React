import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../helpers/ImageWithFallback";
import {
  ChevronRight, ChevronLeft,
  Code2, Shield, Bug, Database, Cloud, Server,
  Users2, Briefcase, Umbrella, Building2, Zap,
  BrainCircuit, Sparkles, Activity, MessageSquare,
} from "lucide-react";
import imgSlide1 from "../../assets/images/Image 1.jpg";
import imgSlide2 from "../../assets/images/AI Hero.png";
import imgSlide3 from "../../assets/images/Info_Landing_AboutSection.jpg";
import imgSlide4 from "../../assets/images/Image 2.jpg";
import "./hero-animations.css";

/* ─── Types ──────────────────────────────────────── */
interface ServiceChip {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

interface SlideA {
  variant: "a";
  titlePart1: string;
  titleHL: string;
  titlePart2: string;
  description: string;
  bg: string;
  orb1: string; orb2: string; orb3: string;
  accent: string;
  sh1: string; sh2: string;
  btnColor?: string;
  serviceHref: string;
  serviceLabel: string;
  image: string;
}

interface SlideB {
  variant: "b";
  eyebrow: string;
  title: string;
  titleHL: string;
  titlePost?: string;
  description: string;
  services: ServiceChip[];
  stats: { value: string; label: string }[];
  statsBar?: boolean;
  ctaLabel: string;
  ctaHref: string;
  bg: string;
  bgEdge: string;
  orb1: string; orb2: string; orb3: string;
  accent: string;
  sh1: string; sh2: string;
  image: string;
  imageFit?: "cover" | "contain";
}

export type AnySlide = SlideA | SlideB;

/* ─── Slide data ─────────────────────────────────── */
const T2_BG_B  = "linear-gradient(135deg, #0D112D 0%, #1A2444 100%)";
const T2_EDGE  = "#0D112D";
const T2_ORB1  = "#EB9B3D";
const T2_ORB2  = "#DA4D33";
const T2_ORB3  = "#F5A623";
const T2_ACC   = "#EB9B3D";
const T2_SH1   = "#F5C66A";
const T2_SH2   = "#F0783A";

export const SLIDES_ALL: AnySlide[] = [
  /* ── Slide 1 — All IT Services ── */
  {
    variant: "b",
    eyebrow: "Managed IT Services",
    title:    "All Your ",
    titleHL:  "IT Services",
    titlePost: "Under One Roof",
    description: "All the IT Solutions you need – One trusted partner. Simplify, secure, & scale everything.",
    services: [
      { label: "Software Development",      href: "/services/it-services/software-development",       Icon: Code2    },
      { label: "Testing",                   href: "/services/it-services/testing",                    Icon: Bug      },
      { label: "Infrastructure Management", href: "/services/it-services/infrastructure-management",  Icon: Server   },
      { label: "SAP Consulting",            href: "/services/it-services/sap-consulting",             Icon: Database },
      { label: "Cyber Security",            href: "/services/it-services/cyber-security",             Icon: Shield   },
      { label: "Cloud Portfolio",           href: "/services/it-services/cloud-portfolio",            Icon: Cloud    },
    ],
    stats: [
      { value: "98%",  label: "Client Retention Rate" },
      { value: "20+",  label: "Years' Experience"      },
      { value: "120+", label: "Clients Served"         },
    ],
    ctaLabel: "Explore IT Services",
    ctaHref:  "/services/it-services",
    bg: T2_BG_B, bgEdge: T2_EDGE,
    orb1: T2_ORB1, orb2: T2_ORB2, orb3: T2_ORB3,
    accent: T2_ACC, sh1: T2_SH1, sh2: T2_SH2,
    image: imgSlide1,
  },

  /* ── Slide 2 — Artificial Intelligence ── */
  {
    variant: "b",
    eyebrow: "AI Centre of Excellence",
    title:    "Pioneering the Future with ",
    titleHL:  "Artificial Intelligence",
    description: "Boost your business with intelligent AI solutions — process automation, smarter decision-making, and continuous innovation powered by machine learning, NLP and generative AI.",
    services: [
      { label: "Machine Learning",           href: "/services/it-services/artificial-intelligence", Icon: BrainCircuit  },
      { label: "Natural Language Processing", href: "/services/it-services/artificial-intelligence", Icon: MessageSquare },
      { label: "Generative AI",              href: "/services/it-services/artificial-intelligence", Icon: Sparkles      },
      { label: "AI Automation",              href: "/services/it-services/artificial-intelligence", Icon: Activity      },
    ],
    stats: [
      { value: "40%",  label: "Cost Reduction"  },
      { value: "24/7", label: "AI Availability" },
      { value: "120+", label: "Clients Served"  },
    ],
    ctaLabel: "Explore AI Services",
    ctaHref:  "/services/it-services/artificial-intelligence",
    bg: T2_BG_B, bgEdge: T2_EDGE,
    orb1: T2_ORB1, orb2: T2_ORB2, orb3: T2_ORB3,
    accent: T2_ACC, sh1: T2_SH1, sh2: T2_SH2,
    image: imgSlide2,
    imageFit: "contain",
  },

  /* ── Slide 3 — Recruitment Agency ── */
  {
    variant: "b",
    eyebrow: "Staffing & Consulting",
    title:    "Best ",
    titleHL:  "Recruitment Agency",
    titlePost: "in U.K",
    description: "Whether you are looking for FTE (Full Time Employee) / Contract Role (C2H) – Infoplus Technologies offers the best service with 99% Client retention rate.",
    services: [
      { label: "IT Staffing Solutions",   href: "/services/staffing-consulting/it-staffing-solutions",   Icon: Users2    },
      { label: "IT Consulting Solutions", href: "/services/staffing-consulting/it-consulting-solutions",  Icon: Briefcase },
      { label: "Umbrella Service",        href: "/services/staffing-consulting/umbrella-service",         Icon: Umbrella  },
    ],
    stats: [
      { value: "98%",  label: "Client Retention Rate" },
      { value: "20+",  label: "Years' Experience"      },
      { value: "120+", label: "Clients Served"         },
    ],
    statsBar: true,
    ctaLabel: "Explore Staffing & Consulting",
    ctaHref:  "/services/staffing-consulting",
    bg: T2_BG_B, bgEdge: T2_EDGE,
    orb1: T2_ORB1, orb2: T2_ORB2, orb3: T2_ORB3,
    accent: T2_ACC, sh1: T2_SH1, sh2: T2_SH2,
    image: imgSlide3,
  },

  /* ── Slide 4 — New Gen IT Solutions ── */
  {
    variant: "b",
    eyebrow: "Next-Gen Technology",
    title:    "New Gen ",
    titleHL:  "IT Solutions",
    titlePost: "– Smarter Technology, Greater Impact",
    description: "Empowering business with New gen IT Service that drive innovation, agility & growth.",
    services: [
      { label: "Enterprise Transformation", href: "/services/new-generation/enterprise-transformation", Icon: Building2 },
      { label: "Everything Data",           href: "/services/new-generation/everything-data",           Icon: Database  },
      { label: "Automation",                href: "/services/new-generation/automation",                Icon: Zap       },
    ],
    stats: [
      { value: "Innovation", label: "Solutions"  },
      { value: "Expert",     label: "Teams"       },
      { value: "Ready",      label: "Future"      },
      { value: "End-to-End", label: "Support"     },
    ],
    statsBar: true,
    ctaLabel: "Explore New Gen Services",
    ctaHref:  "/services/new-generation",
    bg: T2_BG_B, bgEdge: T2_EDGE,
    orb1: T2_ORB1, orb2: T2_ORB2, orb3: T2_ORB3,
    accent: T2_ACC, sh1: T2_SH1, sh2: T2_SH2,
    image: imgSlide4,
  },
];

/* ─── Stats for variant-A slides ─────────────────── */
const STATS_A = [
  { value: "20+",  label: "Years Experience" },
  { value: "120+", label: "Clients Served"   },
  { value: "98%",  label: "Client Retention" },
];

const EXIT_MS = 420;

/* ─── Variant A left-column content ─────────────── */
function SlideContent({
  slide,
  stats,
  active,
  total,
  accent,
  exiting,
  onGoTo,
}: {
  slide: SlideA;
  stats: typeof STATS_A;
  active: number;
  total: number;
  accent: string;
  exiting: boolean;
  onGoTo: (i: number) => void;
}) {
  const s = slide;
  const cin = (n: number) => (exiting ? "" : `hero-cin-${n}`);
  return (
    <div
      className="max-w-xl text-left"
      style={
        exiting
          ? { animation: "contentExit 0.42s cubic-bezier(0.4,0,1,1) both", position: "absolute", top: 0, left: 0, width: "100%", pointerEvents: "none" }
          : {}
      }
    >
      {/* Badge */}
      <div className={`${cin(1)} mb-4`}>
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold text-white/80"
          style={{
            border: `1px solid ${s.accent}55`,
            background: `linear-gradient(90deg, ${s.accent}18, ${s.orb2}28, ${s.accent}18)`,
            backgroundSize: "200% auto",
            animation: "shimmer 5s linear infinite",
          }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: s.sh1, boxShadow: `0 0 6px ${s.sh1}`,
              display: "inline-block", flexShrink: 0,
            }}
          />
          Infoplus Technologies
        </span>
      </div>

      {/* Headline */}
      <h1 className={`${cin(2)} text-[20px] lg:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] mb-4 tracking-tight`}>
        {s.titlePart1}
        <span
          style={{
            background: `linear-gradient(90deg, ${s.sh1} 0%, ${s.sh2} 50%, ${s.sh1} 100%)`,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
          }}
        >
          {s.titleHL}
        </span>
        {s.titlePart2 && (<><br />{s.titlePart2}</>)}
      </h1>

      {/* Description */}
      <p className={`${cin(3)} text-[16px] text-white/70 leading-relaxed mb-7 font-normal`}>
        {s.description}
      </p>

      {/* CTAs */}
      <div className={`${cin(4)} flex flex-col sm:flex-row gap-4 items-center`}>
        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 group text-white px-8 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(235,155,61,0.55)]"
          style={{
            background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)",
            boxShadow: "0 8px 28px rgba(235,155,61,0.35)",
          }}
        >
          Get Started
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to={s.serviceHref}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/8 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-white/15 transition-all backdrop-blur-sm"
        >
          {s.serviceLabel}
        </Link>
      </div>

      {/* Stats */}
      <div className={`${cin(5)} mt-8 flex gap-4 sm:gap-8 flex-wrap`}>
        {stats.map((st) => (
          <div
            key={st.label}
            className="flex flex-col gap-1 pl-4"
            style={{ borderLeft: `2px solid ${s.accent}55` }}
          >
            <span className="text-[20px] lg:text-[28px] font-bold text-white leading-none">{st.value}</span>
            <span className="text-[12px] text-white/50 tracking-wide">{st.label}</span>
          </div>
        ))}
      </div>

      {/* Slide navigation */}
      <div className={`${cin(6)} mt-8 flex items-center gap-3`}>
        <button
          onClick={() => onGoTo((active - 1 + total) % total)}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2 items-center">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === active ? 24 : 8,
                height:     8,
                background: i === active ? accent : "rgba(255,255,255,0.30)",
                boxShadow:  i === active ? `0 0 8px ${accent}` : "none",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => onGoTo((active + 1) % total)}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <span className="text-[12px] text-white/35 ml-1 tabular-nums select-none">
          {active + 1} / {total}
        </span>
      </div>
    </div>
  );
}

/* ─── Variant B left-column content ─────────────── */
function SlideContentB({
  slide,
  active,
  total,
  exiting,
  onGoTo,
}: {
  slide: SlideB;
  active: number;
  total: number;
  exiting: boolean;
  onGoTo: (i: number) => void;
}) {
  const s = slide;
  const cin = (n: number) => (exiting ? "" : `hero-cin-${n}`);

  return (
    <div
      className="text-left"
      style={
        exiting
          ? { animation: "contentExit 0.42s cubic-bezier(0.4,0,1,1) both", position: "absolute", top: 0, left: 0, width: "100%", pointerEvents: "none" }
          : {}
      }
    >
      {/* Badge */}
      <div className={`${cin(1)} mb-4`}>
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold text-white/80"
          style={{
            border: `1px solid ${s.accent}55`,
            background: `linear-gradient(90deg, ${s.accent}18, transparent, ${s.accent}18)`,
            backgroundSize: "200% auto",
            animation: "shimmer 5s linear infinite",
          }}
        >
          <span
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: s.sh1, boxShadow: `0 0 6px ${s.sh1}`,
              display: "inline-block", flexShrink: 0,
            }}
          />
          {s.eyebrow}
        </span>
      </div>

      {/* Headline */}
      <h1 className={`${cin(2)} text-[24px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-bold text-white leading-[1.1] mb-3 md:mb-4 tracking-tight`}>
        {s.title}
        <span
          style={{
            background: `linear-gradient(90deg, ${s.sh1} 0%, ${s.sh2} 50%, ${s.sh1} 100%)`,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
          }}
        >
          {s.titleHL}
        </span>
        {s.titlePost && <><br />{s.titlePost}</>}
      </h1>

      {/* Description */}
      <p className={`${cin(3)} text-[13px] sm:text-[14px] md:text-[15px] text-white/65 leading-relaxed mb-4 md:mb-6`}>
        {s.description}
      </p>

      {/* Service chips — each links to its respective service page */}
      <div className={`${cin(4)} flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-5`}>
        {s.services.map(({ label, href, Icon }) => (
          <Link
            key={label}
            to={href}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              background: `${s.accent}14`,
              border: `1px solid ${s.accent}30`,
              textDecoration: "none",
            }}
          >
            <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.sh1 }} />
            <span className="text-[11px] text-white/70 leading-tight font-medium whitespace-nowrap">{label}</span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className={`${cin(5)} flex flex-col sm:flex-row gap-4 items-start sm:items-center`}>
        <Link
          to={s.ctaHref}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 group text-white px-8 py-3.5 rounded-full font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(235,155,61,0.55)]"
          style={{
            background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)",
            boxShadow: "0 8px 28px rgba(235,155,61,0.35)",
          }}
        >
          {s.ctaLabel}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/8 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-white/15 transition-all backdrop-blur-sm"
        >
          Get Started
        </Link>
      </div>

      {/* Stats — inline after CTA (hidden when using bottom stats bar) */}
      {!s.statsBar && (
        <div className={`${cin(6)} mt-5 flex flex-wrap gap-6`}>
          {s.stats.map((st) => (
            <div
              key={st.label}
              className="flex flex-col gap-1 pl-4"
              style={{ borderLeft: `2px solid ${s.accent}55` }}
            >
              <span className="text-[24px] font-bold text-white leading-none">{st.value}</span>
              <span className="text-[12px] text-white/50 tracking-wide">{st.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Navigation — cin-6 when using bottom bar, cin-7 when stats are inline */}
      <div className={`${s.statsBar ? cin(6) : cin(7)} mt-6 flex items-center gap-3`}>
        <button
          onClick={() => onGoTo((active - 1 + total) % total)}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2 items-center">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width:      i === active ? 24 : 8,
                height:     8,
                background: i === active ? s.accent : "rgba(255,255,255,0.30)",
                boxShadow:  i === active ? `0 0 8px ${s.accent}` : "none",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => onGoTo((active + 1) % total)}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <span className="text-[12px] text-white/35 ml-1 tabular-nums select-none">
          {active + 1} / {total}
        </span>
      </div>
    </div>
  );
}

/* ─── Main banner ────────────────────────────────── */
function IndexBanner({ slides: slidesProp }: { slides?: AnySlide[] } = {}) {
  const SLIDES = slidesProp ?? SLIDES_ALL;
  const [active, setActive]           = useState(0);
  const [exitingIdx, setExitingIdx]   = useState<number | null>(null);
  const [enterKey, setEnterKey]       = useState(0);
  const [flashKey, setFlashKey]       = useState(0);
  const [bgKey, setBgKey]             = useState(0);
  const [paused, setPaused]           = useState(false);
  const prevIdxRef                    = useRef<number | null>(null);
  const transitioning                 = useRef(false);
  const exitTimer                     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const heroRef                       = useRef<HTMLElement>(null);

  const handleScrollDown = () => {
    const next = heroRef.current?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goTo = useCallback(
    (toIdx: number) => {
      if (toIdx === active || transitioning.current) return;
      transitioning.current = true;

      setExitingIdx(active);
      setFlashKey((k) => k + 1);
      prevIdxRef.current = active;

      if (exitTimer.current) clearTimeout(exitTimer.current);
      exitTimer.current = setTimeout(() => {
        setActive(toIdx);
        setBgKey((k) => k + 1);
        setEnterKey((k) => k + 1);
        setExitingIdx(null);
        transitioning.current = false;
      }, EXIT_MS);
    },
    [active],
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => goTo((active + 1) % SLIDES.length), 5500);
    return () => clearTimeout(t);
  }, [active, paused, goTo]);

  useEffect(() => () => { if (exitTimer.current) clearTimeout(exitTimer.current); }, []);

  const s = SLIDES[active];

  /* shared helper: render the correct content component for any slide */
  const renderContent = (slide: AnySlide, key: string, isExiting: boolean) => {
    if (slide.variant === "a") {
      return (
        <SlideContent
          key={key}
          slide={slide}
          stats={STATS_A}
          active={active}
          total={SLIDES.length}
          accent={slide.accent}
          exiting={isExiting}
          onGoTo={goTo}
        />
      );
    }
    return (
      <SlideContentB
        key={key}
        slide={{ ...slide, statsBar: false }}
        active={active}
        total={SLIDES.length}
        exiting={isExiting}
        onGoTo={goTo}
      />
    );
  };

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background gradient layers ── */}
      <div className="absolute inset-0 overflow-hidden">
        {bgKey > 0 && prevIdxRef.current !== null && (
          <div
            key={`prev-${bgKey}`}
            style={{
              position: "absolute", inset: 0,
              background: SLIDES[prevIdxRef.current].bg,
              animation: "bgZoomOut 680ms cubic-bezier(0.4,0,1,1) forwards",
            }}
          />
        )}
        <div
          key={`curr-${bgKey}`}
          style={{
            position: "absolute", inset: 0,
            background: s.bg,
            opacity: bgKey === 0 ? 1 : 0,
            animation: bgKey > 0 ? "bgZoomIn 800ms cubic-bezier(0.16,1,0.3,1) forwards" : "none",
          }}
        />
      </div>

      {/* ── Cinematic light sweep ── */}
      {flashKey > 0 && (
        <div
          key={`flash-${flashKey}`}
          style={{
            position: "absolute", inset: 0, zIndex: 30,
            background: "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.09) 50%, transparent 75%)",
            animation: "lightSweep 600ms cubic-bezier(0.4,0,0.6,1) forwards",
            pointerEvents: "none",
          }}
        />
      )}

      {/* ── Ambient orbs ── */}
      <div key={`orbs-${active}`} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div style={{ position: "absolute", width: 640, height: 640, borderRadius: "50%", top: "-15%", right: "-8%", background: `radial-gradient(circle, ${s.orb1} 0%, transparent 68%)`, filter: "blur(90px)", opacity: 0.28, animation: "orb1 13s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", bottom: "-12%", left: "-6%", background: `radial-gradient(circle, ${s.orb2} 0%, transparent 68%)`, filter: "blur(80px)", opacity: 0.30, animation: "orb2 16s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", top: "38%", left: "28%", background: `radial-gradient(circle, ${s.orb3} 0%, transparent 68%)`, filter: "blur(70px)", opacity: 0.12, animation: "orb3 19s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "44px 44px", animation: "dotPulse 7s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, transparent 48%, rgba(255,255,255,0.025) 50%, transparent 52%)", backgroundSize: "100% 88px" }} />
      </div>

      {/* ══════════════════════════════════════════════
          VARIANT A — original two-column grid layout
      ══════════════════════════════════════════════ */}
      {s.variant === "a" && (
        <div className="relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
          <div className="container mx-auto px-6 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left column */}
            <div className="relative">
              {exitingIdx !== null && renderContent(SLIDES[exitingIdx], `exit-${flashKey}`, true)}
              {renderContent(s, `enter-${enterKey}`, false)}
            </div>

            {/* Right: floating image with orbit rings */}
            <div
              key={`img-${enterKey}`}
              className="relative flex justify-center lg:justify-end"
              style={{ animation: "imgCinema 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s both" }}
            >
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                <div style={{ width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, ${s.accent}22 0%, transparent 70%)`, animation: "pulseRing 4.5s ease-in-out infinite" }} />
              </div>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                <div style={{ width: 470, height: 470, borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.12)", animation: "rotateSlow 40s linear infinite" }} />
              </div>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                <div style={{ width: 380, height: 380, borderRadius: "50%", border: `1px solid ${s.accent}25`, animation: "rotateSlow 25s linear infinite reverse" }} />
              </div>
              <ImageWithFallback
                src={s.image}
                alt={`${s.titlePart1}${s.titleHL} visual`}
                className="relative z-10 w-120 max-w-full h-auto object-contain drop-shadow-2xl"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
            </div>
          </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          VARIANT B — two-column grid (matches About Us hero style)
      ══════════════════════════════════════════════ */}
      {s.variant === "b" && (
        <div className="relative z-10 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
          <div className="container mx-auto px-6 max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left content */}
              <div className="relative">
                {exitingIdx !== null && renderContent(SLIDES[exitingIdx], `exit-${flashKey}`, true)}
                {renderContent(s, `enter-${enterKey}`, false)}
              </div>

              {/* Right: image card — natural height, matches About Us hero */}
              <div
                key={`img-${enterKey}`}
                className="relative"
                style={{ animation: "imgCinema 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s both" }}
              >
                <div
                  className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4 opacity-30 blur-2xl"
                  style={{ background: s.accent }}
                />
                <img
                  src={s.image}
                  alt="Visual"
                  className={`w-full h-64 sm:h-80 lg:h-104 xl:h-120 rounded-3xl shadow-2xl relative z-10 ${s.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 z-20 pointer-events-none" />
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── Bottom vignette ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)", zIndex: 1 }}
      />

      {/* ── Scroll indicator (variant A only) ── */}
      {s.variant === "a" && (
        <button
          onClick={handleScrollDown}
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-white/30 hover:text-white/60 transition-colors duration-300 z-10"
          style={{ animation: "fadeIn 1s ease 1.2s both" }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div
            className="w-px h-10 bg-linear-to-b from-current to-transparent"
            style={{ animation: "float 2s ease-in-out infinite" }}
          />
        </button>
      )}
    </section>
  );
}

export default IndexBanner;
