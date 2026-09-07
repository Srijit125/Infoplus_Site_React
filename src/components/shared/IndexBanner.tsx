import { useState, useEffect, useCallback, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../helpers/ImageWithFallback";
import {
  ChevronRight, ChevronLeft,
  Code2, Cpu, Shield, Bug, Database, Cloud, Server,
  Users2, Briefcase, Umbrella, Building2, Zap,
} from "lucide-react";
import imgSlide1 from "../../assets/images/AI Service Slide 1.png";
import imgSlide2 from "../../assets/images/Global IT Company Slide 2.png";
import imgSlide3 from "../../assets/images/Product Development Slide 3.png";
import imgSlide4 from "../../assets/images/IT Services Slide 4.png";
import imgSlide5 from "../../assets/images/Digital Capability Slide 5.png";
import imgSlide6 from "../../assets/images/Staffing & Consulting Slide 6.png";
import imgSlideRec1 from "../../assets/images/Info_Landing_AboutSection.jpg";
import "./hero-animations.css";

/* ─── Types ──────────────────────────────────────── */
interface ServiceChip {
  label: string;
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
}

export type AnySlide = SlideA | SlideB;

/* ─── Slide data ─────────────────────────────────── */
export const SLIDES_ALL: AnySlide[] = [
  /* ── Variant A — original 6 ── */
  {
    variant: "a",
    titlePart1:  "Artificial ",
    titleHL:     "Intelligence",
    titlePart2:  "Services",
    description: "Harness the power of AI to transform your business.",
    bg:      "linear-gradient(135deg, #0d0517 0%, #1e0a38 25%, #381f55 55%, #4a1a6e 80%, #261140 100%)",
    orb1: "#aa3bff", orb2: "#6128a6", orb3: "#f85d37",
    accent: "#aa3bff", sh1: "#c084fc", sh2: "#f85d37",
    btnColor: "#f85d37",
    serviceHref: "/services/it-services/artificial-intelligence", serviceLabel: "AI Services",
    image: imgSlide1,
  },
  {
    variant: "a",
    titlePart1:  "Global IT ",
    titleHL:     "Company",
    titlePart2:  "",
    description: "For Innovative IT Solutions and Service.",
    bg:      "linear-gradient(135deg, #020b1a 0%, #061a3a 25%, #0d3060 60%, #0a2050 100%)",
    orb1: "#3b82f6", orb2: "#1d4ed8", orb3: "#06b6d4",
    accent: "#3b82f6", sh1: "#60a5fa", sh2: "#06b6d4",
    serviceHref: "/services/it-services", serviceLabel: "Our Services",
    image: imgSlide2,
  },
  {
    variant: "a",
    titlePart1:  "Product ",
    titleHL:     "Development",
    titlePart2:  "",
    description: "More Compelling and Memorable products through simplicity in design.",
    bg:      "linear-gradient(135deg, #0a0000 0%, #180000 25%, #2e0808 60%, #200505 100%)",
    orb1: "#ef4444", orb2: "#b91c1c", orb3: "#f97316",
    accent: "#ef4444", sh1: "#fca5a5", sh2: "#fb923c",
    btnColor: "#f85d37",
    serviceHref: "/services/it-services/software-development", serviceLabel: "Product Development",
    image: imgSlide3,
  },
  {
    variant: "a",
    titlePart1:  "IT ",
    titleHL:     "Services",
    titlePart2:  "",
    description: "Provides focal point of knowledge management to help the client business to improve.",
    bg:      "linear-gradient(135deg, #180800 0%, #301500 25%, #4a2200 60%, #361000 100%)",
    orb1: "#f85d37", orb2: "#ea580c", orb3: "#f59e0b",
    accent: "#f85d37", sh1: "#fb923c", sh2: "#f59e0b",
    serviceHref: "/services/it-services", serviceLabel: "IT Services",
    image: imgSlide4,
  },
  {
    variant: "a",
    titlePart1:  "Digital ",
    titleHL:     "Capability",
    titlePart2:  "",
    description: "Partner to propel your digital transformation journey.",
    bg:      "linear-gradient(135deg, #06001a 0%, #0f0035 25%, #1c005c 60%, #120045 100%)",
    orb1: "#818cf8", orb2: "#6366f1", orb3: "#a78bfa",
    accent: "#818cf8", sh1: "#a5b4fc", sh2: "#c084fc",
    serviceHref: "/services/new-generation", serviceLabel: "New-Gen Services",
    image: imgSlide5,
  },
  {
    variant: "a",
    titlePart1:  "Staffing & ",
    titleHL:     "Consulting",
    titlePart2:  "",
    description: "Connect with pre-vetted IT professionals who deliver from day one permanent placements, contract roles, umbrella services, and specialist consulting for every engagement.",
    bg:      "linear-gradient(135deg, #001a0f 0%, #002a18 25%, #003d28 60%, #002e1e 100%)",
    orb1: "#10b981", orb2: "#059669", orb3: "#34d399",
    accent: "#10b981", sh1: "#6ee7b7", sh2: "#34d399",
    btnColor: "#f85d37",
    serviceHref: "/services/staffing-consulting", serviceLabel: "Staffing & Consulting",
    image: imgSlide6,
  },

  /* ── Variant B — magazine-split layout ── */

  /* Slide 7 — All IT Services */
  {
    variant: "b",
    eyebrow: "Managed IT Services",
    title:    "All Your ",
    titleHL:  "IT Services",
    titlePost: "Under One Roof",
    description:
      "All the IT Solutions you need – One trusted partner. Simplify, secure, & scale everything.",
    services: [
      { label: "Software Development",    Icon: Code2    },
      { label: "Artificial Intelligence", Icon: Cpu      },
      { label: "Cyber Security",          Icon: Shield   },
      { label: "Testing",                 Icon: Bug      },
      { label: "SAP Consulting",          Icon: Database },
      { label: "Cloud Portfolio",         Icon: Cloud    },
      { label: "Infrastructure Mgmt",     Icon: Server   },
    ],
    stats: [
      { value: "98%",  label: "Client Retention Rate" },
      { value: "20+",  label: "Years' Experience"      },
      { value: "120+", label: "Clients Served"         },
    ],
    ctaLabel: "Book A Demo",
    ctaHref:  "/contact",
    bg:      "linear-gradient(135deg, #080612 0%, #0e0c2e 30%, #13104a 65%, #0a0820 100%)",
    bgEdge:  "#080612",
    orb1: "#6366f1", orb2: "#4338ca", orb3: "#818cf8",
    accent: "#6366f1", sh1: "#a5b4fc", sh2: "#818cf8",
    image: imgSlideRec1,
  },

  /* Slide 8 — Recruitment Agency */
  {
    variant: "b",
    eyebrow: "Staffing & Consulting",
    title:    "Best ",
    titleHL:  "Recruitment Agency",
    titlePost: "in U.K",
    description:
      "Whether you are looking for FTE (Full Time Employee) / Contract Role (C2H) – Infoplus Technologies offers the best service with 99% Client retention rate.",
    services: [
      { label: "IT Staffing Solutions",   Icon: Users2    },
      { label: "IT Consulting Solutions", Icon: Briefcase },
      { label: "Umbrella Service",        Icon: Umbrella  },
    ],
    stats: [
      { value: "98%",  label: "Client Retention Rate" },
      { value: "20+",  label: "Years' Experience"      },
      { value: "120+", label: "Clients Served"         },
    ],
    statsBar: true,
    ctaLabel: "Book A Demo",
    ctaHref:  "/contact",
    bg:      "linear-gradient(135deg, #04100f 0%, #0a2220 30%, #0d2f2b 65%, #09201d 100%)",
    bgEdge:  "#04100f",
    orb1: "#14b8a6", orb2: "#0f766e", orb3: "#22d3ee",
    accent: "#14b8a6", sh1: "#5eead4", sh2: "#2dd4bf",
    image: imgSlideRec1,
  },

  /* Slide 9 — New Gen IT Solutions */
  {
    variant: "b",
    eyebrow: "Next-Gen Technology",
    title:    "New Gen ",
    titleHL:  "IT Solutions",
    titlePost: "– Smarter Technology, Greater Impact",
    description:
      "Empowering business with New gen IT Service that drive innovation, agility & growth.",
    services: [
      { label: "Enterprise Transformation", Icon: Building2 },
      { label: "Everything Data",           Icon: Database  },
      { label: "Automation",               Icon: Zap       },
    ],
    stats: [
      { value: "Innovation", label: "Solutions"  },
      { value: "Expert",     label: "Teams"       },
      { value: "Ready",      label: "Future"      },
      { value: "End-to-End", label: "Support"     },
    ],
    statsBar: true,
    ctaLabel: "Book A Demo",
    ctaHref:  "/contact",
    bg:      "linear-gradient(135deg, #0a0614 0%, #150b2a 30%, #1e1040 65%, #0f0820 100%)",
    bgEdge:  "#0a0614",
    orb1: "#a855f7", orb2: "#7c3aed", orb3: "#c084fc",
    accent: "#a855f7", sh1: "#d8b4fe", sh2: "#c084fc",
    image: imgSlideRec1,
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
      <h1 className={`${cin(2)} text-[40px] md:text-[52px] font-bold text-white leading-[1.08] mb-4 tracking-tight`}>
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
          className="w-full sm:w-auto flex items-center justify-center gap-2 group text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all"
          style={{
            background: s.btnColor ?? s.accent,
            boxShadow: `0 8px 28px ${s.btnColor ?? s.accent}55`,
          }}
        >
          Get Started
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to={s.serviceHref}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/8 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-white/15 transition-all backdrop-blur-sm"
        >
          {s.serviceLabel}
        </Link>
      </div>

      {/* Stats */}
      <div className={`${cin(5)} mt-10 flex gap-8 flex-wrap`}>
        {stats.map((st) => (
          <div
            key={st.label}
            className="flex flex-col gap-1 pl-4"
            style={{ borderLeft: `2px solid ${s.accent}55` }}
          >
            <span className="text-[28px] font-bold text-white leading-none">{st.value}</span>
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

      {/* Service chips — auto-width per chip, wrap naturally across rows */}
      <div className={`${cin(4)} flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-5`}>
        {s.services.map(({ label, Icon }) => (
          <div
            key={label}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5"
            style={{
              background: `${s.accent}14`,
              border: `1px solid ${s.accent}30`,
            }}
          >
            <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.sh1 }} />
            <span className="text-[11px] text-white/70 leading-tight font-medium whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className={`${cin(5)} flex flex-col sm:flex-row gap-4 items-start sm:items-center`}>
        <Link
          to={s.ctaHref}
          className="w-full sm:w-auto flex items-center justify-center gap-2 group text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all"
          style={{
            background: s.accent,
            boxShadow: `0 8px 28px ${s.accent}55`,
          }}
        >
          {s.ctaLabel}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        slide={slide}
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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
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
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-28 pb-24">
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
      )}

      {/* ══════════════════════════════════════════════
          VARIANT B — magazine split: full-bleed right image
          Right image starts at header bottom (80px).
          Content + stats bar are a flex-1 column: stats naturally
          sit at the bottom when there is screen space, and flow
          below content when the screen is too short.
      ══════════════════════════════════════════════ */}
      {s.variant === "b" && (
        <>
          {/* Full-bleed right image — rounded left corners, responsive width, top aligned with content */}
          <div
            key={`img-${enterKey}`}
            className="absolute right-0 hidden md:block md:w-[40%] lg:w-[36%] xl:w-[42%] 2xl:w-[44%] overflow-hidden"
            style={{
              top: "7rem",
              bottom: 0,
              zIndex: 5,
              borderTopLeftRadius: "2rem",
              borderBottomLeftRadius: "2rem",
              animation: "imgCinema 0.9s cubic-bezier(0.16,1,0.3,1) 0.08s both",
            }}
          >
            <img
              src={s.image}
              alt="Recruitment visual"
              className="w-full h-full object-cover object-center"
            />
            {/* Blend left edge into the background */}
            <div
              className="absolute inset-y-0 left-0 w-16 md:w-24 lg:w-44 pointer-events-none"
              style={{ background: `linear-gradient(to right, ${s.bgEdge} 0%, transparent 100%)` }}
            />
            {/* Bottom vignette only — no top overlay so image is visible from the header bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.50), transparent)" }} />
          </div>

          {/*
            Content + stats as a single flex-1 column child of the section.
            flex-1 fills the full section height; padding-top clears the header.
            Inside: content area grows (flex-1) → stats bar naturally at the bottom.
            On screens where everything fits, stats land at the viewport bottom.
            On shorter screens, the block grows and stats flow below content.
          */}
          <div
            className="w-full flex flex-col flex-1 relative"
            style={{ paddingTop: "80px", zIndex: 10 }}
          >
            {/* Content — top-aligned so badge starts at 7rem (= header 80px + pt-8 32px),
                matching the image top exactly for clean visual alignment */}
            <div className="flex-1 flex items-start pt-5 sm:pt-7 md:pt-8 pb-5 sm:pb-7 md:pb-8">
              <div className="container mx-auto px-6 max-w-7xl w-full">
                {/* 52% wide on desktop; gap widens at larger breakpoints alongside image */}
                <div className="md:w-[56%] lg:w-[52%] xl:w-[50%] relative">
                  {exitingIdx !== null && renderContent(SLIDES[exitingIdx], `exit-${flashKey}`, true)}
                  {renderContent(s, `enter-${enterKey}`, false)}
                </div>
              </div>
            </div>

            {/* Mobile image — shown below content, hidden on md+ where absolute image takes over */}
            <div className="md:hidden w-full relative overflow-hidden rounded-t-2xl" style={{ height: 220 }}>
              <img
                src={s.image}
                alt="Visual"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }} />
            </div>

            {/* Bottom stats bar — only for slides with statsBar: true */}
            {s.statsBar && (
              <div
                style={{
                  background: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderTop: `1px solid ${s.accent}28`,
                }}
              >
                <div className="container mx-auto px-6 max-w-7xl">
                  <div className="flex items-center py-3 sm:py-5">
                    {s.stats.map((st, i) => (
                      <Fragment key={st.label}>
                        {i > 0 && <div className="w-px h-9 bg-white/15 shrink-0" />}
                        <div className="flex-1 flex flex-col items-center gap-0.5 text-center">
                          <span className="text-[18px] sm:text-[22px] md:text-[26px] font-bold leading-none tabular-nums" style={{ color: s.sh1 }}>
                            {st.value}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-white/50 tracking-wide uppercase">
                            {st.label}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
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
