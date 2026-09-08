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
} from "lucide-react";

/* ── Cookie type cards ────────────────────────────────────────── */
const COOKIE_TYPES = [
  {
    icon: ShieldCheck,
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    accent: "#EB9B3D",
    cardBg: "#F3F5FF",
    cardBorder: "rgba(13,17,45,0.10)",
    title: "Strictly Necessary Cookies",
    desc: "These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart, or make use of the e-billing services.",
  },
  {
    icon: BarChart3,
    gradient: "from-[#F0783A] to-[#EB9B3D]",
    accent: "#F0783A",
    cardBg: "#FEF8F0",
    cardBorder: "rgba(240,120,58,0.15)",
    title: "Analytical / Performance Cookies",
    desc: "They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users find what they are looking for easily.",
  },
  {
    icon: Settings2,
    gradient: "from-[#EB9B3D] to-[#F0783A]",
    accent: "#DA4D33",
    cardBg: "#FEF0DC",
    cardBorder: "rgba(235,155,61,0.20)",
    title: "Functionality Cookies",
    desc: "These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).",
  },
  {
    icon: Target,
    gradient: "from-[#DA4D33] to-[#EB9B3D]",
    accent: "#EB9B3D",
    cardBg: "#F3F5FF",
    cardBorder: "rgba(13,17,45,0.10)",
    title: "Targeting Cookies",
    desc: "These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.",
  },
];

/* ── First-party cookies ──────────────────────────────────────── */
const FIRST_PARTY = [
  { icon: Fingerprint, name: "Visitor ID",   desc: "this cookie is a numeric value that identifies unique visitors and provides coherence and consistency to a site visit" },
  { icon: FileText,    name: "Page Number",  desc: "this cookie identifies the page you are on" },
  { icon: Clock,       name: "Session ID",   desc: "this cookie identifies your website session" },
  { icon: CheckSquare, name: "Test",         desc: "this cookie checks whether or not your browser supports cookies" },
  { icon: ShoppingCart,name: "Order",        desc: "this cookie ensures that your shopping basket works correctly" },
];

export default function CookiePolicyPage() {
  return (
    <div className="w-full overflow-x-hidden">
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
        description="This policy explains the cookies we set on our website, what each one does, and how they help us deliver a better experience for every visitor."
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 text-[12px] font-semibold">
            <Cookie className="w-3.5 h-3.5 text-[#EB9B3D]" />
            GDPR Compliant
          </span>
        </div>
      </PageHero>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-105 h-105 rounded-full bg-[#EB9B3D] opacity-10 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
              Understanding Cookies
            </span>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0d0517] leading-tight mb-6">
              What is a cookie and why do we use them?
            </h2>
            <p className="text-[15.5px] text-[#555] leading-[1.85]">
              We use cookies on our sites for a number of purposes. They help us to provide you with a good experience when you browse our website and also allow us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies. A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer&rsquo;s hard drive.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Cookie Types ─────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Cookie Types
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0d0517] leading-tight">
                Types of Cookies We Use
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COOKIE_TYPES.map((ct, i) => {
              const CIcon = ct.icon;
              return (
                <ScrollReveal key={ct.title} variant="card" delay={i * 100}>
                  <div
                    className="group h-full rounded-2xl p-7 border hover:shadow-[0_12px_40px_-8px_rgba(235,155,61,0.13)] hover:-translate-y-1 transition-all duration-300"
                    style={{ backgroundColor: ct.cardBg, borderColor: ct.cardBorder }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${ct.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <CIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className="text-[17px] font-bold mb-3 leading-snug transition-colors duration-200"
                      style={{ color: "#0d0517" }}
                    >
                      {ct.title}
                    </h3>
                    <p className="text-[14px] text-[#555] leading-relaxed">{ct.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── First-party Infoplus Cookies ─────────────────────── */}
      <section className="py-24 bg-[#F3F5FF] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-100 h-100 rounded-full bg-[#EB9B3D] opacity-10 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">

          <ScrollReveal direction="up">
            <div className="text-center mb-4">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                First-party Infoplus Cookies
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0d0517] leading-tight mb-5">
                Cookies Set by Infoplus Technologies
              </h2>
              <p className="text-[15px] text-[#555] leading-relaxed max-w-2xl mx-auto">
                This website will set some cookies that are essential for the website to operate correctly. These cookies, none of which capture personally identifiable information, are as follows:
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4 mt-12">
            {FIRST_PARTY.map((cookie, i) => {
              const FIcon = cookie.icon;
              return (
                <ScrollReveal key={cookie.name} direction="left" delay={i * 80}>
                  <div className="group flex items-center gap-5 bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl px-6 py-5 hover:border-[#EB9B3D]/35 hover:shadow-[0_8px_32px_rgba(235,155,61,0.10)] transition-all duration-300">
                    <div className="w-1 h-12 rounded-full bg-linear-to-b from-[#EB9B3D] to-[#DA4D33] shrink-0" />
                    <div className="w-10 h-10 rounded-xl bg-[#EB9B3D]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FIcon className="w-5 h-5 text-[#EB9B3D]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-bold text-[#0d0517] mb-1">{cookie.name}</p>
                      <p className="text-[13px] text-[#555] leading-snug">{cookie.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
