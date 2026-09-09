import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  ShieldCheck,
  BarChart3,
  Settings2,
  Target,
  Cookie,
  Clock,
  RefreshCw,
  Globe,
  Monitor,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";

/* ── Design tokens (inline — matches amber/navy system) ─────────── */
const AMB   = "#EB9B3D";
const CORAL = "#DA4D33";
const NAVY  = "#141A3D";
const DARK  = "#0D112D";
const WH1   = "#101223";
const WH2   = "#4A4F63";
const ACC   = "linear-gradient(135deg,#EB9B3D 0%,#DA4D33 100%)";

/* ── Cookie type cards ─────────────────────────────────────────── */
const COOKIE_TYPES = [
  {
    icon: ShieldCheck,
    title: "Essential Cookies",
    desc: "These keep the website running smoothly. They let you move between pages, sign in securely, and submit forms without issues. Since the site can't work without them, you can't turn these off.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance",
    desc: "These cookies quietly track how people use our site — which pages visitors stay on longer, and when visitors encounter errors. We never see any personal information. This tells us what's working well and what needs improvement.",
  },
  {
    icon: Settings2,
    title: "Functionality Cookies",
    desc: "These remember little things like your preferred language, your region, or how you like the page laid out. Instead of adjusting settings every visit, the site simply remembers and picks up where you left off.",
  },
  {
    icon: Target,
    title: "Targeting & Advertising",
    desc: "These help us show you content that is actually relevant to you and let us check whether our advertising is doing its job. They simply note that you visited our site, and that information may occasionally be shared with trusted advertising partners.",
  },
];

/* ── Why we use cookies — bullet reasons ───────────────────────── */
const WHY_BULLETS = [
  "Keeping the site technically stable and secure.",
  "Letting us see which pages actually help visitors, and which need work.",
  "Remembering your preferences so you're not repeating yourself on every visit.",
  "Helping us understand how visitors discover Infoplus, which shapes our content and outreach.",
  "Supporting the occasional advertising campaign that introduces our services to new audiences.",
];

/* ── Browser control instructions ──────────────────────────────── */
const BROWSERS = [
  { name: "Google Chrome",    path: "Settings → Privacy and security → Cookies and other site data" },
  { name: "Mozilla Firefox",  path: "Settings → Privacy and security → Cookies and site data" },
  { name: "Safari",           path: "Preferences → Privacy → Manage Website Data" },
  { name: "Microsoft Edge",   path: "Settings → Cookies and site permissions" },
];

/* ── Your browser controls — bullet list ───────────────────────── */
const BROWSER_CONTROLS = [
  "See exactly what cookies are stored and delete them one by one.",
  "Block cookies from third parties.",
  "Block cookies from specific sites.",
  "Stop all cookies from being set in the first place.",
  "Clear everything out automatically when you close the browser.",
];

/* ── Sub-components ─────────────────────────────────────────────── */
function SectionEyebrow({ label }: { label: string }) {
  return (
    <span style={{
      display: "inline-block", color: CORAL,
      background: "rgba(219,84,52,0.10)", border: "1px solid rgba(219,84,52,0.22)",
      borderRadius: 999, padding: "4px 14px", fontSize: 11, fontWeight: 700,
      letterSpacing: "0.13em", textTransform: "uppercase" as const, marginBottom: 16,
    }}>
      {label}
    </span>
  );
}

function AmberBulletLight({ text }: { text: string }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: AMB, flexShrink: 0, marginTop: 7 }} />
      <span style={{ color: "rgba(169,180,214,0.85)", fontSize: 15, lineHeight: 1.7 }}>{text}</span>
    </li>
  );
}

export default function CookiePolicyPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="Cookie Policy | Infoplus Technologies UK"
        description="Find out how Infoplus Technologies uses cookies on our website, why we use them, and how they help us improve website functionality, performance, and your browsing experience."
        keywords="Infoplus Technologies Cookie Policy, cookie policy, website cookies, cookies and tracking, cookie preferences, website privacy, Infoplus Technologies"
        path="/cookie-policy"
        noIndex
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <PageHero
        badge="LEGAL"
        title="Cookie Policy"
        description="We want your visit to infoplusltd.co.uk to be smooth, secure, and useful. This page explains what cookies are, why we use them, and how you can control them — in plain English."
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/30 text-[#EB9B3D] text-[12px] font-semibold">
            <Cookie className="w-3.5 h-3.5" />
            GDPR Compliant
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-[12px] font-semibold">
            Last Updated: August 2026
          </span>
        </div>
      </PageHero>

      {/* ── What Are Cookies — white intro ───────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: AMB }} />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, ${AMB} 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />

        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <SectionEyebrow label="Understanding Cookies" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.4rem)", lineHeight: 1.25, marginBottom: 20 }}>
                What Are Cookies?
              </h2>
              <p style={{ color: WH2, fontSize: 15.5, lineHeight: 1.85 }}>
                Cookies are small text files that get placed on your computer, phone, or tablet when you visit a website — they're all common, almost every website uses them in some form. Cookies help the site remember things about your visit, like your preferences or how you found us, so your next visit works a little better.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div style={{
              background: "rgba(235,155,61,0.05)", border: "1px solid rgba(235,155,61,0.18)",
              borderRadius: 16, padding: "24px 28px",
            }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ background: ACC, borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ShieldCheck style={{ width: 18, height: 18, color: "#fff" }} />
                </div>
                <p style={{ color: WH2, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
                  Cookies don't harm your device, and they can't run programs or carry viruses. Think of them as small notes a website leaves itself so it can recognise you next time.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why We Rely on Cookies — dark navy ───────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: NAVY }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: `radial-gradient(circle, ${AMB} 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-20" style={{ background: AMB }} />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <ScrollReveal direction="left">
              <SectionEyebrow label="Why We Use Cookies" />
              <h2 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.4rem)", lineHeight: 1.25, marginBottom: 20 }}>
                Why we rely on cookies at Infoplus
              </h2>
              <p style={{ color: "rgba(169,180,214,0.9)", fontSize: 15, lineHeight: 1.8, marginBottom: 0 }}>
                As a managed IT Services and AI Solutions provider working with businesses across 17 countries, our website needs to be reliable, fast, and genuinely useful to the people who visit it — whether they are exploring our SAP consulting services, researching our AI Centre of Excellence, or simply trying to get in touch with our team. Cookies help us deliver that experience.
              </p>
              <p style={{ color: "rgba(169,180,214,0.7)", fontSize: 14, lineHeight: 1.7, marginTop: 16, padding: "14px 18px", borderLeft: `3px solid ${AMB}`, borderRadius: "0 8px 8px 0", background: "rgba(235,155,61,0.07)" }}>
                We're not interested in collecting anything personal about you, and we never trade cookie data for profit.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={80}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(169,180,214,0.15)", borderRadius: 16, padding: "28px 24px" }}>
                <p style={{ color: AMB, fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 18 }}>
                  Cookies help us by:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {WHY_BULLETS.map((item, i) => (
                    <AmberBulletLight key={i} text={item} />
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Cookie Types — 4-col grid ─────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, ${AMB} 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionEyebrow label="Cookie Types" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.4rem)", lineHeight: 1.25 }}>
                What each type of cookie actually does
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COOKIE_TYPES.map((ct, i) => {
              const CIcon = ct.icon;
              return (
                <ScrollReveal key={ct.title} variant="card" delay={i * 100} className="h-full">
                  <div className="group h-full bg-white rounded-2xl p-6 border border-[rgba(13,17,45,0.10)] hover:border-[rgba(235,155,61,0.30)] hover:shadow-[0_12px_40px_-8px_rgba(235,155,61,0.14)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: ACC }}>
                      <CIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-[16px] font-bold mb-3 leading-snug group-hover:text-[#EB9B3D] transition-colors duration-200"
                      style={{ color: WH1 }}>
                      {ct.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed" style={{ color: WH2 }}>{ct.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Third-Party Cookies + Cookie Duration ────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#F8F9FC" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Third-Party */}
            <ScrollReveal direction="left" className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 border border-[rgba(13,17,45,0.10)] hover:border-[rgba(235,155,61,0.25)] hover:shadow-[0_8px_32px_rgba(235,155,61,0.10)] transition-all duration-300">
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ background: ACC, borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Globe style={{ width: 20, height: 20, color: "#fff" }} />
                  </div>
                  <h3 style={{ color: WH1, fontWeight: 700, fontSize: 19 }}>Third-Party Cookies</h3>
                </div>
                <p style={{ color: WH2, fontSize: 14.5, lineHeight: 1.8 }}>
                  There are a few cookies on our site that don't come directly from us. They're set by outside tools we use, like analytics software or social media buttons. These companies handle their own cookies under their own rules, which we don't control. If you'd like the full picture, it's worth checking their privacy pages directly.
                </p>
              </div>
            </ScrollReveal>

            {/* Cookie Duration */}
            <ScrollReveal direction="right" delay={80} className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 border border-[rgba(13,17,45,0.10)] hover:border-[rgba(235,155,61,0.25)] hover:shadow-[0_8px_32px_rgba(235,155,61,0.10)] transition-all duration-300">
                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ color: WH1, fontWeight: 700, fontSize: 19, marginBottom: 4 }}>How Long Do Cookies Last?</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "rgba(235,155,61,0.05)", border: "1px solid rgba(235,155,61,0.15)", borderRadius: 12, padding: "16px 18px" }}>
                    <div style={{ background: ACC, borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock style={{ width: 16, height: 16, color: "#fff" }} />
                    </div>
                    <div>
                      <p style={{ color: WH1, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Session Cookies</p>
                      <p style={{ color: WH2, fontSize: 13.5, lineHeight: 1.7 }}>Short-lived — they disappear the moment you close your browser.</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "rgba(235,155,61,0.05)", border: "1px solid rgba(235,155,61,0.15)", borderRadius: 12, padding: "16px 18px" }}>
                    <div style={{ background: ACC, borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <RefreshCw style={{ width: 16, height: 16, color: "#fff" }} />
                    </div>
                    <div>
                      <p style={{ color: WH1, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Persistent Cookies</p>
                      <p style={{ color: WH2, fontSize: 13.5, lineHeight: 1.7 }}>Hang around longer — sometimes for weeks — so the site can recognise you on your next visit. Unless you choose to delete them sooner.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Managing Cookies — dark navy ─────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: DARK }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: `radial-gradient(circle, ${AMB} 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-15" style={{ background: CORAL }} />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <SectionEyebrow label="Your Control" />
              <h2 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.4rem)", lineHeight: 1.25, marginBottom: 16 }}>
                Managing and Controlling Cookies
              </h2>
              <p style={{ color: "rgba(169,180,214,0.85)", fontSize: 15, maxWidth: 540, margin: "0 auto", lineHeight: 1.75 }}>
                At the end of the day, it's your call. Your browser gives you full control.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* What you can do */}
            <ScrollReveal direction="left" delay={60}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(169,180,214,0.12)", borderRadius: 16, padding: "28px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ background: ACC, borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle2 style={{ width: 18, height: 18, color: "#fff" }} />
                  </div>
                  <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 16 }}>What you can do in your browser:</p>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {BROWSER_CONTROLS.map((item, i) => (
                    <AmberBulletLight key={i} text={item} />
                  ))}
                </ul>
                <p style={{ color: "rgba(169,180,214,0.65)", fontSize: 13, lineHeight: 1.7, marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(169,180,214,0.10)" }}>
                  If you turn cookies off or clear them out, some features on this site might not run quite as smoothly.
                </p>
              </div>
            </ScrollReveal>

            {/* Browser settings */}
            <ScrollReveal direction="right" delay={100}>
              <div>
                <p style={{ color: AMB, fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 16 }}>
                  Find these settings here:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {BROWSERS.map((b, i) => (
                    <ScrollReveal key={b.name} direction="right" delay={i * 60}>
                      <div style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(169,180,214,0.12)", borderRadius: 12, padding: "14px 18px", transition: "all 0.2s" }}
                        className="hover:bg-[rgba(235,155,61,0.06)] hover:border-[rgba(235,155,61,0.25)]">
                        <div style={{ background: ACC, borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Monitor style={{ width: 15, height: 15, color: "#fff" }} />
                        </div>
                        <div>
                          <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 13.5, marginBottom: 3 }}>{b.name}</p>
                          <p style={{ color: "rgba(169,180,214,0.70)", fontSize: 12.5, lineHeight: 1.5 }}>{b.path}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Changes + Contact — white ─────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: AMB }} />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/* Changes */}
            <ScrollReveal direction="left" className="h-full">
              <div className="h-full bg-white rounded-2xl p-8 border border-[rgba(13,17,45,0.10)] hover:border-[rgba(235,155,61,0.22)] hover:shadow-[0_8px_32px_rgba(235,155,61,0.08)] transition-all duration-300">
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <div style={{ background: ACC, borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <RefreshCw style={{ width: 18, height: 18, color: "#fff" }} />
                  </div>
                  <h3 style={{ color: WH1, fontWeight: 700, fontSize: 19 }}>Changes to This Policy</h3>
                </div>
                <p style={{ color: WH2, fontSize: 14.5, lineHeight: 1.8 }}>
                  Things change continuously — technology, regulations, even how we run our business. So we may update this policy every now and then to keep it accurate. Whenever we do, you'll find the latest version right here on this page.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal direction="right" delay={80} className="h-full">
              <div className="h-full rounded-2xl p-8 relative overflow-hidden" style={{ background: NAVY }}>
                <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
                  style={{ backgroundImage: `radial-gradient(circle, ${AMB} 1px, transparent 1px)`, backgroundSize: "20px 20px" }} />

                <div className="relative z-10">
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                    <div style={{ background: ACC, borderRadius: 10, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin style={{ width: 18, height: 18, color: "#fff" }} />
                    </div>
                    <h3 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 19 }}>Contact Us</h3>
                  </div>

                  <p style={{ color: "rgba(169,180,214,0.85)", fontSize: 14.5, lineHeight: 1.8, marginBottom: 20 }}>
                    Got questions about how we use cookies, or anything else on this page? We'd genuinely like to hear from you.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: AMB, flexShrink: 0, marginTop: 7 }} />
                      <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: 14, margin: 0 }}>Infoplus Technologies UK Limited</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <MapPin style={{ width: 14, height: 14, color: AMB, flexShrink: 0, marginTop: 2 }} />
                      <p style={{ color: "rgba(169,180,214,0.80)", fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>
                        6 Capital Business Park, Manor Way,<br />Borehamwood, United Kingdom, WD6 1GW
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                      <Globe style={{ width: 14, height: 14, color: AMB, flexShrink: 0 }} />
                      <a href="https://infoplusltd.co.uk" target="_blank" rel="noopener noreferrer"
                        style={{ color: AMB, fontSize: 13.5, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
                        className="hover:underline">
                        infoplusltd.co.uk <ExternalLink style={{ width: 11, height: 11 }} />
                      </a>
                    </div>
                  </div>

                  <div style={{ marginTop: 22 }}>
                    <Link to="/contact"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ACC, borderRadius: 999, padding: "10px 20px", color: "#fff", fontWeight: 600, fontSize: 13, textDecoration: "none", transition: "all 0.2s" }}
                      className="hover:opacity-85 hover:-translate-y-0.5">
                      Get in Touch <ChevronRight style={{ width: 14, height: 14 }} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
