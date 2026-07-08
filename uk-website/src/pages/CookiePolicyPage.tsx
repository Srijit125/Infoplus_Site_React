import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  ShieldCheck,
  BarChart3,
  Settings2,
  Target,
  Cookie,
  Fingerprint,
  FileText,
  Clock,
  CheckSquare,
  ShoppingCart,
  Lock,
  ChevronRight,
  RefreshCw,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Cookie category data ────────────────────────────────────── */
const CATEGORIES = [
  {
    icon: ShieldCheck,
    title: "Strictly Necessary Cookies",
    category: "Required",
    accent: "#6128a6",
    glow: "rgba(97,40,166,0.22)",
    canOptOut: false,
    desc: "These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart, or make use of the e-billing services.",
  },
  {
    icon: BarChart3,
    title: "Analytical / Performance Cookies",
    category: "Analytics",
    accent: "#aa3bff",
    glow: "rgba(170,59,255,0.22)",
    canOptOut: true,
    desc: "They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users find what they are looking for easily.",
  },
  {
    icon: Settings2,
    title: "Functionality Cookies",
    category: "Preferences",
    accent: "#6128a6",
    glow: "rgba(97,40,166,0.22)",
    canOptOut: true,
    desc: "These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).",
  },
  {
    icon: Target,
    title: "Targeting Cookies",
    category: "Marketing",
    accent: "#f85d37",
    glow: "rgba(248,93,55,0.22)",
    canOptOut: true,
    desc: "These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.",
  },
];

/* ── First-party cookie data ──────────────────────────────────── */
const FIRST_PARTY = [
  {
    name: "Visitor ID",
    icon: Fingerprint,
    purpose: "A numeric value that identifies unique visitors and provides coherence and consistency to a site visit.",
  },
  {
    name: "Page Number",
    icon: FileText,
    purpose: "Identifies the page you are currently on during your site visit.",
  },
  {
    name: "Session ID",
    icon: Clock,
    purpose: "Identifies your current website session to maintain continuity as you navigate across pages.",
  },
  {
    name: "Test",
    icon: CheckSquare,
    purpose: "Checks whether or not your browser supports cookies so the site can function correctly.",
  },
  {
    name: "Order",
    icon: ShoppingCart,
    purpose: "Ensures that your shopping basket works correctly throughout your session.",
  },
];

/* ── Key facts strip ─────────────────────────────────────────── */
const KEY_FACTS = [
  { value: "4",     label: "Cookie Categories",     color: "#6128a6" },
  { value: "5",     label: "First-party Cookies",   color: "#aa3bff" },
  { value: "0",     label: "PII Captured",          color: "#6128a6" },
  { value: "GDPR",  label: "Compliant",             color: "#f85d37" },
];

export default function CookiePolicyPage() {
  const handleResetConsent = () => {
    localStorage.removeItem("infoplus-cookie-consent");
    sessionStorage.removeItem("cookie-banner-dismissed");
    window.location.reload();
  };

  return (
    <div className="w-full">
      <PageMeta
        title="Cookie Policy"
        description="Read the Infoplus Technologies UK Cookie Policy to understand how we use cookies and similar technologies on our website to improve your experience."
        path="/cookie-policy"
        noIndex
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        badge="LEGAL"
        title="Cookie Policy"
        description="We use cookies on our sites for a number of purposes. They help us provide you with a good experience when you browse our website and allow us to improve our site."
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 text-[12px] font-semibold">
            <Cookie className="w-3.5 h-3.5 text-[#aa3bff]" />
            Last Updated: June 2025
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f85d37]/10 border border-[#f85d37]/30 text-[#f85d37] text-[12px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            GDPR Compliant
          </span>
        </div>
      </PageHero>

      {/* ── What are cookies ─────────────────────────────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Understanding Cookies
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0d0517] leading-tight mb-6">
                  What is a cookie and why do&nbsp;
                  <span className="text-[#6128a6]">we use them?</span>
                </h2>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed mb-5 text-justify">
                  A cookie is a small file of letters and numbers that we store on your browser or the hard
                  drive of your computer if you agree. Cookies contain information that is transferred to
                  your computer's hard drive.
                </p>
                <p className="text-[15px] text-[#0d0517]/65 leading-relaxed mb-8 text-justify">
                  By continuing to browse the site, you are agreeing to our use of cookies. They help us
                  to provide you with a good experience when you browse our website and also allow us to
                  improve our site.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Secure", "Transparent", "Minimal", "GDPR-Ready"].map((tag, i) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[12px] font-semibold"
                      style={{ animation: `revealFade 400ms ease ${i * 70 + 200}ms both` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Visual card */}
            <ScrollReveal direction="right" delay={120}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#6128a6] opacity-10 blur-[80px] rounded-full scale-75 pointer-events-none" />
                <div className="relative bg-white border border-[#ecdaff] rounded-3xl p-8 shadow-[0_8px_48px_rgba(97,40,166,0.08)]">
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#6128a6] to-[#aa3bff] flex items-center justify-center mb-6">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0d0517] mb-5">How cookies work</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", text: "You visit our website for the first time" },
                      { step: "2", text: "Our server sends a small cookie to your browser" },
                      { step: "3", text: "Your browser stores it on your device" },
                      { step: "4", text: "On return visits, the cookie is sent back to us" },
                      { step: "5", text: "We use it to recognise you and improve your experience" },
                    ].map((s, i) => (
                      <div
                        key={s.step}
                        className="flex items-start gap-3"
                        style={{ animation: `revealFade 350ms ease ${i * 80 + 300}ms both` }}
                      >
                        <div className="w-6 h-6 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/25 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold text-[#6128a6]">{s.step}</span>
                        </div>
                        <p className="text-[13px] text-[#0d0517]/65 leading-snug mt-0.5">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  {/* connecting line */}
                  <div className="absolute left-[50px] top-[104px] bottom-[68px] w-px bg-[#6128a6]/15 pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Key facts strip ──────────────────────────────────── */}
      <section className="py-14 bg-[#1e0a38] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_FACTS.map((kf, i) => (
              <ScrollReveal key={kf.label} direction="up" delay={i * 100}>
                <div className="text-center">
                  <p className="text-[clamp(2rem,4vw,3rem)] font-black leading-none mb-2" style={{ color: kf.color }}>
                    {kf.value}
                  </p>
                  <p className="text-[13px] text-white/50">{kf.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cookie Categories ────────────────────────────────── */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#6128a6] opacity-20 blur-[110px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Cookie Categories
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                Types of cookies we&nbsp;
                <span className="text-[#aa3bff]">use</span>
              </h2>
              <p className="text-[15px] text-white/50 mt-4 max-w-2xl mx-auto">
                We deploy four distinct categories of cookies — only strictly necessary cookies are
                always active; the remaining categories can be controlled through your preferences.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.title} variant="card" delay={i * 100}>
                <div
                  className="group relative h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-opacity-50 transition-all duration-400 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ background: `radial-gradient(ellipse at 20% 20%, ${cat.glow} 0%, transparent 65%)` }}
                  />

                  <div className="relative z-10">
                    {/* Icon + badge row */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${cat.accent}20`, color: cat.accent }}
                      >
                        <cat.icon className="w-6 h-6" />
                      </div>
                      <div className="flex gap-2">
                        {/* Category badge */}
                        <span
                          className="px-3 py-1 rounded-full text-[11px] font-bold border"
                          style={{
                            borderColor: `${cat.accent}35`,
                            backgroundColor: `${cat.accent}12`,
                            color: cat.accent,
                          }}
                        >
                          {cat.category}
                        </span>
                        {/* Can opt-out indicator */}
                        {cat.canOptOut ? (
                          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-green-500/10 border border-green-500/20 text-green-400">
                            Optional
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/8 border border-white/15 text-white/50">
                            <Lock className="w-2.5 h-2.5" />
                            Always On
                          </span>
                        )}
                      </div>
                    </div>

                    <h3
                      className="text-[18px] font-bold mb-3"
                      style={{ color: cat.accent }}
                    >
                      {cat.title}
                    </h3>
                    <div className="w-10 h-0.5 rounded-full mb-4" style={{ backgroundColor: `${cat.accent}50` }} />
                    <p className="text-[14px] text-white/60 leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── First-party Infoplus cookies ─────────────────────── */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                First-party Infoplus Cookies
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight">
                Cookies set by&nbsp;
                <span className="text-[#6128a6]">Infoplus Technologies</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div className="flex items-start gap-3 bg-[#6128a6]/06 border border-[#6128a6]/15 rounded-2xl px-5 py-4 mb-10 max-w-3xl mx-auto">
              <Info className="w-5 h-5 text-[#6128a6] shrink-0 mt-0.5" />
              <p className="text-[14px] text-[#0d0517]/65 leading-relaxed">
                This website sets some cookies that are essential for the website to operate correctly.{" "}
                <strong className="text-[#0d0517]/80">None of these capture personally identifiable information.</strong>
              </p>
            </div>
          </ScrollReveal>

          {/* Cookie rows */}
          <div className="space-y-4">
            {FIRST_PARTY.map((cookie, i) => (
              <ScrollReveal key={cookie.name} direction="left" delay={i * 80}>
                <div className="group flex items-center gap-5 bg-white border border-[#ecdaff] rounded-2xl px-6 py-5 hover:border-[#6128a6]/35 hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] transition-all duration-300">
                  {/* Left accent bar */}
                  <div className="w-1 h-12 rounded-full bg-linear-to-b from-[#6128a6] to-[#aa3bff] shrink-0" />

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#6128a6]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <cookie.icon className="w-5 h-5 text-[#6128a6]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-bold text-[#0d0517] mb-1">{cookie.name}</p>
                    <p className="text-[13px] text-[#0d0517]/60 leading-snug">{cookie.purpose}</p>
                  </div>

                  {/* Badge */}
                  <span className="shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] hidden sm:inline-flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5" />
                    Essential
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manage Your Preferences ──────────────────────────── */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#1e0a38] via-[#381f55] to-[#6128a6] rounded-3xl p-10 md:p-14 overflow-hidden shadow-[0_32px_80px_rgba(97,40,166,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-72 h-72 rounded-full bg-[#aa3bff] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-60 h-60 rounded-full bg-[#f85d37] opacity-12 blur-[80px] pointer-events-none" />

              <div className="relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                  Your Control
                </span>
                <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white leading-tight mb-4">
                  Manage your cookie preferences
                </h2>
                <p className="text-[15px] text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
                  You can update your cookie preferences at any time. Resetting will remove your
                  saved choice and show the cookie consent banner again on your next page load.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleResetConsent}
                    className="group/btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                  >
                    <RefreshCw className="w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-400" />
                    Reset Cookie Preferences
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-[14px] transition-all duration-200"
                  >
                    Cookie Questions?
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
