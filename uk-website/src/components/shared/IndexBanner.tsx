import { Link } from "react-router-dom";
import { ImageWithFallback } from "../helpers/ImageWithFallback";
import { ChevronRight } from "lucide-react";
import imgAiRobot from "../../assets/images/imgAiRobot.png";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Clients Served" },
  { value: "98%", label: "Client Retention" },
];

function IndexBanner() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d0517 0%, #1e0a38 25%, #381f55 55%, #4a1a6e 80%, #261140 100%)",
      }}
    >
      <style>{`
        @keyframes orb1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(50px, -70px) scale(1.12); }
          66%       { transform: translate(-35px, 45px) scale(0.9); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40%       { transform: translate(-60px, 35px) scale(1.18); }
          70%       { transform: translate(40px, -55px) scale(0.85); }
        }
        @keyframes orb3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(25px, 25px) scale(1.06); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-22px); }
        }
        @keyframes pulseRing {
          0%, 100% { transform: scale(1);    opacity: 0.25; }
          50%       { transform: scale(1.1); opacity: 0.08; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.05; }
          50%       { opacity: 0.12; }
        }
        .hero-fade-1 { animation: fadeInUp 0.75s ease 0.1s both; }
        .hero-fade-2 { animation: fadeInUp 0.75s ease 0.28s both; }
        .hero-fade-3 { animation: fadeInUp 0.75s ease 0.46s both; }
        .hero-fade-4 { animation: fadeInUp 0.75s ease 0.64s both; }
        .hero-fade-5 { animation: fadeInUp 0.75s ease 0.82s both; }
        .hero-img    { animation: fadeIn   1s    ease 0.4s  both; }
      `}</style>

      {/* ── Animated background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orb 1 — top-right violet */}
        <div
          style={{
            position: "absolute",
            width: 640,
            height: 640,
            borderRadius: "50%",
            top: "-15%",
            right: "-8%",
            background: "radial-gradient(circle, #aa3bff 0%, transparent 68%)",
            filter: "blur(90px)",
            opacity: 0.28,
            animation: "orb1 13s ease-in-out infinite",
          }}
        />
        {/* Orb 2 — bottom-left deep purple */}
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            bottom: "-12%",
            left: "-6%",
            background: "radial-gradient(circle, #6128a6 0%, transparent 68%)",
            filter: "blur(80px)",
            opacity: 0.3,
            animation: "orb2 16s ease-in-out infinite",
          }}
        />
        {/* Orb 3 — center-left warm accent */}
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            top: "38%",
            left: "28%",
            background: "radial-gradient(circle, #f85d37 0%, transparent 68%)",
            filter: "blur(70px)",
            opacity: 0.12,
            animation: "orb3 19s ease-in-out infinite",
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            animation: "dotPulse 7s ease-in-out infinite",
          }}
        />

        {/* Subtle horizontal rule lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(0deg, transparent 48%, rgba(255,255,255,0.025) 50%, transparent 52%)",
            backgroundSize: "100% 88px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-28 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — copy */}
          <div className="max-w-xl text-left">
            {/* Badge */}
            <div className="hero-fade-1 mb-4">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#ecdaff] border border-[#aa3bff]/35"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(170,59,255,0.12), rgba(97,40,166,0.2), rgba(170,59,255,0.12))",
                  backgroundSize: "200% auto",
                  animation: "shimmer 5s linear infinite",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#c084fc",
                    boxShadow: "0 0 6px #c084fc",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Infoplus Technologies
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-fade-2 text-[40px] md:text-[52px] font-bold text-white leading-[1.08] mb-4 tracking-tight">
              Artificial{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #c084fc 0%, #f85d37 50%, #c084fc 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                Intelligence
              </span>
              <br />
              Services
            </h1>

            <p className="hero-fade-3 text-[16px] text-white/70 leading-relaxed mb-7 font-normal">
              Proactively managed IT solutions that power smarter products,
              faster delivery, and lasting digital transformation.
            </p>

            {/* CTAs */}
            <div className="hero-fade-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="flex items-center gap-2 group bg-[#f85d37] text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-[#e04f2c] transition-all"
                style={{ boxShadow: "0 8px 28px rgba(248,93,55,0.35)" }}
              >
                Get Started
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 bg-white/8 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-white/15 transition-all backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-fade-5 mt-10 flex gap-8 flex-wrap">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 border-l-2 border-[#aa3bff]/40 pl-4">
                  <span className="text-[28px] font-bold text-white leading-none">
                    {s.value}
                  </span>
                  <span className="text-[12px] text-white/50 tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — robot image */}
          <div className="hero-img relative flex justify-center lg:justify-end">
            {/* Soft glow behind image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: 420,
                  height: 420,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(170,59,255,0.18) 0%, transparent 70%)",
                  animation: "pulseRing 4.5s ease-in-out infinite",
                }}
              />
            </div>

            {/* Rotating dashed orbit ring */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: 470,
                  height: 470,
                  borderRadius: "50%",
                  border: "1px dashed rgba(255,255,255,0.12)",
                  animation: "rotateSlow 40s linear infinite",
                }}
              />
            </div>

            {/* Second counter-rotating ring */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: 380,
                  height: 380,
                  borderRadius: "50%",
                  border: "1px solid rgba(170,59,255,0.15)",
                  animation: "rotateSlow 25s linear infinite reverse",
                }}
              />
            </div>

            <ImageWithFallback
              src={imgAiRobot}
              alt="AI Robot"
              className="relative z-10 w-[480px] max-w-full h-auto object-contain drop-shadow-2xl"
              style={{ animation: "float 6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(13,5,23,0.5), transparent)",
        }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "fadeIn 1s ease 1.2s both" }}
      >
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div
          className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
          style={{ animation: "float 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

export default IndexBanner;
