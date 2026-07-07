import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../helpers/ImageWithFallback";
import { ChevronRight, ChevronLeft } from "lucide-react";
import imgAiRobot from "../../assets/images/imgAiRobot.png";

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
}

const SLIDES: Slide[] = [
  {
    titlePart1:  "Artificial ",
    titleHL:     "Intelligence",
    titlePart2:  "Services",
    description: "Proactively managed IT solutions that power smarter products, faster delivery, and lasting digital transformation.",
    bg:      "linear-gradient(135deg, #0d0517 0%, #1e0a38 25%, #381f55 55%, #4a1a6e 80%, #261140 100%)",
    orb1: "#aa3bff", orb2: "#6128a6", orb3: "#f85d37",
    accent: "#aa3bff", sh1: "#c084fc", sh2: "#f85d37",
    btnColor: "#f85d37",
    serviceHref: "/services/it-services/artificial-intelligence", serviceLabel: "AI Services",
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
  },
  {
    titlePart1:  "Product ",
    titleHL:     "Development",
    titlePart2:  "",
    description: "More Compelling and Memorable products through simplicity in design.",
    bg:      "linear-gradient(135deg, #150010 0%, #280020 25%, #420035 60%, #300028 100%)",
    orb1: "#d946ef", orb2: "#a21caf", orb3: "#e879f9",
    accent: "#d946ef", sh1: "#e879f9", sh2: "#a78bfa",
    serviceHref: "/services/it-services/software-development", serviceLabel: "Software Dev",
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
  },
  {
    titlePart1:  "Staffing and ",
    titleHL:     "Consulting",
    titlePart2:  "",
    description: "Select Hard and Manage easy.",
    bg:      "linear-gradient(135deg, #001515 0%, #002525 25%, #004040 60%, #003030 100%)",
    orb1: "#0d9488", orb2: "#0f766e", orb3: "#2dd4bf",
    accent: "#0d9488", sh1: "#2dd4bf", sh2: "#06b6d4",
    serviceHref: "/services/staffing-consulting", serviceLabel: "Staffing & Consulting",
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

      // Phase 1 — exit current + fire flash
      setExitingIdx(active);
      setFlashKey((k) => k + 1);
      prevIdxRef.current = active;

      if (exitTimer.current) clearTimeout(exitTimer.current);
      exitTimer.current = setTimeout(() => {
        // Phase 2 — swap & enter
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
      {/* ── CSS ── */}
      <style>{`
        /* ── Ambient orbs ── */
        @keyframes orb1 {
          0%,100% { transform: translate(0px,   0px) scale(1);    }
          33%      { transform: translate(50px, -70px) scale(1.12); }
          66%      { transform: translate(-35px, 45px) scale(0.9);  }
        }
        @keyframes orb2 {
          0%,100% { transform: translate(0px,    0px) scale(1);    }
          40%      { transform: translate(-60px,  35px) scale(1.18); }
          70%      { transform: translate( 40px, -55px) scale(0.85); }
        }
        @keyframes orb3 {
          0%,100% { transform: translate(0px,  0px) scale(1);    }
          50%      { transform: translate(25px, 25px) scale(1.06); }
        }

        /* ── Looping effects ── */
        @keyframes float {
          0%,100% { transform: translateY(0px);   }
          50%      { transform: translateY(-22px); }
        }
        @keyframes pulseRing {
          0%,100% { transform: scale(1);    opacity: 0.25; }
          50%      { transform: scale(1.1); opacity: 0.08; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes dotPulse {
          0%,100% { opacity: 0.05; }
          50%      { opacity: 0.12; }
        }

        /* ── Background cinematic transition ── */
        @keyframes bgZoomIn {
          0%   { opacity: 0; transform: scale(1.10); }
          100% { opacity: 1; transform: scale(1);    }
        }
        @keyframes bgZoomOut {
          0%   { opacity: 1; transform: scale(1);    filter: blur(0px); }
          100% { opacity: 0; transform: scale(0.92); filter: blur(4px); }
        }

        /* ── Cinematic light sweep ── */
        @keyframes lightSweep {
          0%   { transform: translateX(-160%) skewX(-22deg); opacity: 1;   }
          100% { transform: translateX(320%)  skewX(-22deg); opacity: 0.1; }
        }

        /* ── Content exit (old slide flies up + blurs) ── */
        @keyframes contentExit {
          0%   { opacity: 1; transform: translateY(0px)   scale(1);    filter: blur(0px); }
          100% { opacity: 0; transform: translateY(-48px) scale(0.95); filter: blur(8px); }
        }

        /* ── Content enter (spring curve: overshoot then settle) ── */
        @keyframes cinematicIn {
          0%   { opacity: 0; transform: translateY(68px)  scale(0.93); filter: blur(10px); }
          40%  {             filter: blur(0px); }
          74%  {             transform: translateY(-5px)  scale(1.005); }
          100% { opacity: 1; transform: translateY(0px)   scale(1);    filter: blur(0px); }
        }

        /* ── Image cinematic enter (slide + spring) ── */
        @keyframes imgCinema {
          0%   { opacity: 0; transform: translateX(55px) scale(0.84); filter: blur(8px); }
          50%  { filter: blur(0px); }
          76%  { transform: translateX(-7px) scale(1.03); }
          100% { opacity: 1; transform: translateX(0px)  scale(1);   filter: blur(0px); }
        }

        /* ── Staggered content enter classes ── */
        .hero-cin-1 { animation: cinematicIn 0.72s cubic-bezier(0.16,1,0.3,1) 0.00s both; }
        .hero-cin-2 { animation: cinematicIn 0.72s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .hero-cin-3 { animation: cinematicIn 0.72s cubic-bezier(0.16,1,0.3,1) 0.16s both; }
        .hero-cin-4 { animation: cinematicIn 0.72s cubic-bezier(0.16,1,0.3,1) 0.24s both; }
        .hero-cin-5 { animation: cinematicIn 0.72s cubic-bezier(0.16,1,0.3,1) 0.32s both; }
        .hero-cin-6 { animation: cinematicIn 0.72s cubic-bezier(0.16,1,0.3,1) 0.40s both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /*
        ════════════════════════════════════════════════════════════════
        ANIMATION OPTION BACKUPS — swap in by replacing the active
        keyframes above with any block below.
        ════════════════════════════════════════════════════════════════

        ── OPTION A: Kinetic Spring (CURRENTLY ACTIVE) ──────────────
        bgZoomIn / bgZoomOut  +  lightSweep  +  contentExit  +  cinematicIn  +  imgCinema
        (keyframes already defined above — this is the active option)

        ── OPTION B: Film Rail ──────────────────────────────────────
        Replace bgZoomIn with bgSlideIn, bgZoomOut with bgSlideOut.
        Replace contentExit with contentExitLeft, cinematicIn with contentEnterRight.
        Replace imgCinema with imgRail.
        Remove lightSweep flash overlay from JSX.

        @keyframes bgSlideIn {
          0%   { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes bgSlideOut {
          0%   { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes contentExitLeft {
          0%   { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-50px); }
        }
        @keyframes contentEnterRight {
          0%   { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes imgRail {
          0%   { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .hero-cin-1 { animation: contentEnterRight 0.56s cubic-bezier(0.25,0.46,0.45,0.94) 0.00s both; }
        .hero-cin-2 { animation: contentEnterRight 0.56s cubic-bezier(0.25,0.46,0.45,0.94) 0.07s both; }
        .hero-cin-3 { animation: contentEnterRight 0.56s cubic-bezier(0.25,0.46,0.45,0.94) 0.14s both; }
        .hero-cin-4 { animation: contentEnterRight 0.56s cubic-bezier(0.25,0.46,0.45,0.94) 0.21s both; }
        .hero-cin-5 { animation: contentEnterRight 0.56s cubic-bezier(0.25,0.46,0.45,0.94) 0.28s both; }
        .hero-cin-6 { animation: contentEnterRight 0.56s cubic-bezier(0.25,0.46,0.45,0.94) 0.34s both; }

        ── OPTION C: Iris Burst ─────────────────────────────────────
        Keep bgZoomIn/bgZoomOut. Replace contentExit/cinematicIn with iris versions.
        Remove lightSweep. EXIT_MS → 500.

        @keyframes contentExitIris {
          0%   { opacity: 1; clip-path: circle(150% at 50% 45%); transform: scale(1); }
          70%  { opacity: 0.3; clip-path: circle(10% at 50% 45%); transform: scale(0.9); }
          100% { opacity: 0;   clip-path: circle(0%  at 50% 45%); transform: scale(0.85); }
        }
        @keyframes contentEnterIris {
          0%   { opacity: 0.9; clip-path: circle(0%   at 50% 45%); }
          100% { opacity: 1;   clip-path: circle(150% at 50% 45%); }
        }
        @keyframes imgIris {
          0%   { opacity: 0; clip-path: circle(0%   at 50% 50%); }
          100% { opacity: 1; clip-path: circle(150% at 50% 50%); }
        }
        .hero-cin-1 { animation: contentEnterIris 0.72s cubic-bezier(0.16,1,0.3,1) 0.00s both; }
        .hero-cin-2 { animation: contentEnterIris 0.72s cubic-bezier(0.16,1,0.3,1) 0.10s both; }
        .hero-cin-3 { animation: contentEnterIris 0.72s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .hero-cin-4 { animation: contentEnterIris 0.72s cubic-bezier(0.16,1,0.3,1) 0.26s both; }
        .hero-cin-5 { animation: contentEnterIris 0.72s cubic-bezier(0.16,1,0.3,1) 0.34s both; }
        .hero-cin-6 { animation: contentEnterIris 0.72s cubic-bezier(0.16,1,0.3,1) 0.40s both; }

        ── OPTION D: Velocity Zoom ──────────────────────────────────
        Replace contentExit with contentExitZoom, cinematicIn with contentEnterZoom.
        Replace bgZoomOut with bgBlastOut, bgZoomIn with bgPunchIn.
        Flash overlay should be white (rgba(255,255,255,0.22)). EXIT_MS → 350.

        @keyframes contentExitZoom {
          0%   { opacity: 1; transform: scale(1);    filter: blur(0); }
          35%  { opacity: 0.4; }
          100% { opacity: 0; transform: scale(2.5); filter: blur(18px); }
        }
        @keyframes contentEnterZoom {
          0%   { opacity: 0; transform: scale(0.32); filter: blur(16px); }
          55%  { filter: blur(0); }
          76%  { transform: scale(1.04); }
          100% { opacity: 1; transform: scale(1);    filter: blur(0); }
        }
        @keyframes imgZoom {
          0%   { opacity: 0; transform: scale(0.4); filter: blur(14px); }
          60%  { filter: blur(0); }
          80%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1);  filter: blur(0); }
        }
        @keyframes bgBlastOut {
          0%   { opacity: 1; transform: scale(1);   filter: blur(0); }
          100% { opacity: 0; transform: scale(3.5); filter: blur(20px); }
        }
        @keyframes bgPunchIn {
          0%   { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1);   }
        }
        .hero-cin-1 { animation: contentEnterZoom 0.72s cubic-bezier(0.16,1,0.3,1) 0.00s both; }
        .hero-cin-2 { animation: contentEnterZoom 0.72s cubic-bezier(0.16,1,0.3,1) 0.09s both; }
        .hero-cin-3 { animation: contentEnterZoom 0.72s cubic-bezier(0.16,1,0.3,1) 0.17s both; }
        .hero-cin-4 { animation: contentEnterZoom 0.72s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
        .hero-cin-5 { animation: contentEnterZoom 0.72s cubic-bezier(0.16,1,0.3,1) 0.33s both; }
        .hero-cin-6 { animation: contentEnterZoom 0.72s cubic-bezier(0.16,1,0.3,1) 0.40s both; }

        ── OPTION E: Glitch Frame ───────────────────────────────────
        Replace contentExit with contentExitGlitch, cinematicIn with contentEnterGlitch.
        Keep bgZoomIn/bgZoomOut. Flash overlay: rgba(0,255,200,0.08). EXIT_MS → 400.
        Optionally add 2 absolutely-positioned <div> glitch bars in JSX.

        @keyframes contentExitGlitch {
          0%   { opacity:1; transform:none; filter:none; }
          20%  { transform:translateX(-6px) skewX(3deg);  filter:hue-rotate(80deg)  brightness(1.5); }
          40%  { transform:translateX( 5px) skewX(-2deg); filter:hue-rotate(200deg) brightness(2); }
          65%  { transform:translateX(-3px);               filter:hue-rotate(320deg) brightness(0.7); }
          80%  { opacity:0.3; transform:translateX(2px) scaleY(0.97); filter:none; }
          100% { opacity:0; transform:none; filter:none; }
        }
        @keyframes contentEnterGlitch {
          0%   { opacity:0; transform:translateX(6px) skewX(-4deg); filter:hue-rotate(260deg) brightness(2); }
          25%  { transform:translateX(-4px) skewX(2deg); filter:hue-rotate(120deg); }
          55%  { transform:translateX( 2px);              filter:hue-rotate(30deg); }
          75%  { transform:translateX(-1px);               filter:none; }
          100% { opacity:1; transform:none; filter:none; }
        }
        @keyframes imgGlitch {
          0%   { opacity:0; transform:translateX(5px) skewX(-3deg); filter:hue-rotate(240deg) brightness(1.8); }
          40%  { filter:none; }
          70%  { transform:translateX(-3px); }
          100% { opacity:1; transform:none; filter:none; }
        }
        .hero-cin-1 { animation: contentEnterGlitch 0.55s steps(6) 0.00s both; }
        .hero-cin-2 { animation: contentEnterGlitch 0.55s steps(6) 0.07s both; }
        .hero-cin-3 { animation: contentEnterGlitch 0.55s steps(6) 0.13s both; }
        .hero-cin-4 { animation: contentEnterGlitch 0.55s steps(6) 0.19s both; }
        .hero-cin-5 { animation: contentEnterGlitch 0.55s steps(6) 0.25s both; }
        .hero-cin-6 { animation: contentEnterGlitch 0.55s steps(6) 0.30s both; }

        ════════════════════════════════════════════════════════════════
        END BACKUP OPTIONS
        ════════════════════════════════════════════════════════════════
        */
      `}</style>

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

          {/* Left column — stacked exit + enter */}
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

          {/* Right — image (re-keyed for cinematic re-entrance) */}
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
              src={imgAiRobot}
              alt="Hero visual"
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
