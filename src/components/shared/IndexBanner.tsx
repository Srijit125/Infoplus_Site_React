import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../helpers/ImageWithFallback";
import { ChevronRight, ChevronLeft } from "lucide-react";
import imgSlide1 from "../../assets/images/AI Service Slide 1.png";
import imgSlide2 from "../../assets/images/Global IT Company Slide 2.png";
import imgSlide3 from "../../assets/images/Product Development Slide 3.png";
import imgSlide4 from "../../assets/images/IT Services Slide 4.png";
import imgSlide5 from "../../assets/images/Digital Capability Slide 5.png";
import imgSlide6 from "../../assets/images/Staffing & Consulting Slide 6.png";
import "./hero-animations.css";

interface Slide {
  titlePart1: string;
  titleHL: string;
  titlePart2: string;
  description: string;
  bg: string;
  orb1: string;
  orb2: string;
  orb3: string;
  accent: string;
  sh1: string;
  sh2: string;
  btnColor?: string;
  serviceHref: string;
  serviceLabel: string;
  image: string;
}

const SLIDES: Slide[] = [
  {
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
    titlePart1:  "Global IT ",
    titleHL:     "Company",
    titlePart2:  "",
    description: "For Innovative IT Solutions and Service.",
    bg:      "linear-gradient(135deg, #020b1a 0%, #061a3a 25%, #0d3060 60%, #0a2050 100%)",
    orb1: "#3b82f6", orb2: "#1d4ed8", orb3: "#06b6d4",
    accent: "#3b82f6", sh1: "#60a5fa", sh2: "#06b6d4",
    serviceHref: "/services", serviceLabel: "Our Services",
    image: imgSlide2,
  },
  {
    titlePart1:  "Product ",
    titleHL:     "Development",
    titlePart2:  "",
    description: "More Compelling and Memorable products through simplicity in design.",
    bg:      "linear-gradient(135deg, #0a0000 0%, #180000 25%, #2e0808 60%, #200505 100%)",
    orb1: "#ef4444", orb2: "#b91c1c", orb3: "#f97316",
    accent: "#ef4444", sh1: "#fca5a5", sh2: "#fb923c",
    btnColor: "#f85d37",
    serviceHref: "/services/it-services/cyber-security", serviceLabel: "Cyber Security",
    image: imgSlide3,
  },
  {
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
];

const STATS = [
  { value: "15+",  label: "Years Experience" },
  { value: "200+", label: "Clients Served"   },
  { value: "98%",  label: "Client Retention" },
];

const EXIT_MS = 420;

// Renders the left-column content for a given slide + key combo
function SlideContent({
  slide,
  stats,
  active,
  total,
  accent,
  exiting,
  onGoTo,
}: {
  slide: Slide;
  stats: typeof STATS;
  active: number;
  total: number;
  accent: string;
  exiting: boolean;
  onGoTo: (i: number) => void;
}) {
  const s = slide;
  // When exiting, suppress child enter-animations (wrapper handles the whole exit)
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
      <div className={`${cin(4)} flex flex-wrap gap-4 items-center`}>
        <Link
          to="/contact"
          className="flex items-center gap-2 group text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] transition-all"
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
          className="flex items-center gap-2 bg-white/8 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-white/15 transition-all backdrop-blur-sm"
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

function IndexBanner() {
  const [active, setActive]           = useState(0);
  const [exitingIdx, setExitingIdx]   = useState<number | null>(null);
  const [enterKey, setEnterKey]       = useState(0);
  const [flashKey, setFlashKey]       = useState(0);
  const [bgKey, setBgKey]             = useState(0);
  const [paused, setPaused]           = useState(false);
  const prevIdxRef                    = useRef<number | null>(null);
  const transitioning                 = useRef(false);
  const exitTimer                     = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (toIdx: number) => {
      if (toIdx === active || transitioning.current) return;
      transitioning.current = true;

      // Phase 1 exit current + fire flash
      setExitingIdx(active);
      setFlashKey((k) => k + 1);
      prevIdxRef.current = active;

      if (exitTimer.current) clearTimeout(exitTimer.current);
      exitTimer.current = setTimeout(() => {
        // Phase 2 swap & enter
        setActive(toIdx);
        setBgKey((k) => k + 1);
        setEnterKey((k) => k + 1);
        setExitingIdx(null);
        transitioning.current = false;
      }, EXIT_MS);
    },
    [active],
  );

  // Auto-advance (full cycle = exit + enter + dwell)
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => goTo((active + 1) % SLIDES.length), 5500);
    return () => clearTimeout(t);
  }, [active, paused, goTo]);

  // Cleanup timer on unmount
  useEffect(() => () => { if (exitTimer.current) clearTimeout(exitTimer.current); }, []);

  const s = SLIDES[active];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background gradient layers ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Previous gradient zooms out + blurs */}
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
        {/* Current gradient zooms in */}
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

      {/* ── Cinematic light sweep (fires on each transition) ── */}
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

      {/* ── Ambient orbs (re-keyed on active to reset drift) ── */}
      <div
        key={`orbs-${active}`}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div style={{ position: "absolute", width: 640, height: 640, borderRadius: "50%", top: "-15%", right: "-8%", background: `radial-gradient(circle, ${s.orb1} 0%, transparent 68%)`, filter: "blur(90px)", opacity: 0.28, animation: "orb1 13s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", bottom: "-12%", left: "-6%", background: `radial-gradient(circle, ${s.orb2} 0%, transparent 68%)`, filter: "blur(80px)", opacity: 0.30, animation: "orb2 16s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", top: "38%", left: "28%", background: `radial-gradient(circle, ${s.orb3} 0%, transparent 68%)`, filter: "blur(70px)", opacity: 0.12, animation: "orb3 19s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "44px 44px", animation: "dotPulse 7s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, transparent 48%, rgba(255,255,255,0.025) 50%, transparent 52%)", backgroundSize: "100% 88px" }} />
      </div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left column stacked exit + enter */}
          <div className="relative">
            {/* Exiting slide (absolutely positioned, plays exit anim) */}
            {exitingIdx !== null && (
              <SlideContent
                key={`exit-${flashKey}`}
                slide={SLIDES[exitingIdx]}
                stats={STATS}
                active={exitingIdx}
                total={SLIDES.length}
                accent={SLIDES[exitingIdx].accent}
                exiting
                onGoTo={goTo}
              />
            )}
            {/* Entering slide (normal flow, plays enter anim) */}
            <SlideContent
              key={`enter-${enterKey}`}
              slide={s}
              stats={STATS}
              active={active}
              total={SLIDES.length}
              accent={s.accent}
              exiting={false}
              onGoTo={goTo}
            />
          </div>

          {/* Right image (re-keyed for cinematic re-entrance) */}
          <div
            key={`img-${enterKey}`}
            className="relative flex justify-center lg:justify-end"
            style={{ animation: "imgCinema 0.9s cubic-bezier(0.16,1,0.3,1) 0.12s both" }}
          >
            {/* Glow pulse */}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
              <div style={{ width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, ${s.accent}22 0%, transparent 70%)`, animation: "pulseRing 4.5s ease-in-out infinite" }} />
            </div>
            {/* Orbit rings */}
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

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent)" }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeIn 1s ease 1.2s both" }}
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div
          className="w-px h-10 bg-linear-to-b from-white/25 to-transparent"
          style={{ animation: "float 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

export default IndexBanner;
