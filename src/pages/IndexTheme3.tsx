import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import {
  ChevronRight, MapPin, Mail, Phone,
  ArrowRight, CheckCircle2,
  Clock, Award, Headphones, Globe, Zap,
  Trophy, Star, Quote, Shield,
} from "lucide-react";
import { industries, ourSolutions, ourValues, services } from "../assets/constants/types";
import { PageMeta } from "../components/shared/PageMeta";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import ClientCarousel from "../components/ui/ClientCarousel";
import IndexBanner, { SLIDES_ALL, type AnySlide } from "../components/shared/IndexBanner";
import imgMap from "../assets/images/imgMap.png";
import { ImageWithFallback } from "../components/helpers/ImageWithFallback";

/* ─────────────────────────────────────────────────────────────────
   Theme 3 — Corporate Blue & White Design System (lightened)
───────────────────────────────────────────────────────────────── */
const NAVY  = "#152A6E";  // lightened from #0D1B4B
const ROYAL = "#1E55CC";  // lightened from #1A47B8
const GRAD  = `linear-gradient(135deg, ${NAVY} 0%, ${ROYAL} 100%)`;
const SKY   = "#0EA5E9";
const SURF  = "#EEF3FF";
const TP    = "#FFFFFF";
const TH    = "#0D1B4B";
const TB    = "#475569";
const TD    = "#E2E8F0";
const TDS   = "#94A3B8";
const BRD   = "rgba(30,85,204,0.12)";
const DBRD  = "rgba(255,255,255,0.10)";

const wcard = { background: "#FFFFFF", border: `1px solid ${BRD}`, borderRadius: 16, boxShadow: "0 2px 8px rgba(30,85,204,0.05)" };
const scard = { background: SURF, border: `1px solid ${BRD}`, borderRadius: 16 };
const dcard = { background: "rgba(255,255,255,0.06)", border: `1px solid ${DBRD}`, borderRadius: 16 };

/* ─────────────────────────────────────────────────────────────────
   Corporate Blue hero slides — slides 1–6 only, all in T3 palette
───────────────────────────────────────────────────────────────── */
const SLIDES_T3: AnySlide[] = SLIDES_ALL.slice(0, 6).map(slide => ({
  ...slide,
  bg:       `linear-gradient(135deg, ${NAVY} 0%, ${ROYAL} 100%)`,
  orb1:     ROYAL, orb2: SKY, orb3: "#3B82F6",
  accent:   SKY,
  sh1:      "#60A5FA", sh2: "#93C5FD",
  btnColor: ROYAL,
}));

/* ─────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────── */
const SOL_EXTRAS = [
  { href: "/services/it-services",         accent: ROYAL, shadow: "rgba(30,85,204,0.22)"  },
  { href: "/products",                      accent: SKY,   shadow: "rgba(14,165,233,0.22)" },
  { href: "/services/staffing-consulting",  accent: ROYAL, shadow: "rgba(30,85,204,0.22)"  },
  { href: "/services/new-generation",       accent: SKY,   shadow: "rgba(14,165,233,0.22)" },
];
const SOLUTION_CARDS = ourSolutions.map((s, i) => ({ ...s, ...SOL_EXTRAS[i] }));

const SVC_ACCENTS = [SKY, ROYAL, SKY, ROYAL];

const STATS = [
  { value: "20+",  label: "Years",    color: ROYAL },
  { value: "500+", label: "Projects", color: SKY   },
  { value: "17",   label: "Countries",color: ROYAL },
  { value: "200+", label: "Experts",  color: SKY   },
];

const WHY_T3 = [
  { icon: Clock,      title: "24+ Years of Experience",         desc: "Solving real IT challenges since 2000 — we have already seen the problems your business faces and know how to fix them." },
  { icon: Award,      title: "Certified Specialists",           desc: "Our teams hold certifications across SAP, Cloud and cybersecurity — genuinely qualified, not just experienced." },
  { icon: Headphones, title: "Ongoing Support",                 desc: "We don't just deploy and walk away. Ongoing support means issues are resolved quickly, not weeks later." },
  { icon: Globe,      title: "17-Country Reach",                desc: "Our team operates across 17 countries, so expert support is always accessible whatever your time zone." },
  { icon: Zap,        title: "IT That Works for Your Business", desc: "We don't just fix problems — we build IT that actively drives your business forward every day." },
];

const AWARDS_T3 = [
  { icon: Trophy,  color: ROYAL, title: "Microsoft Solution Partner",  org: "Microsoft Corporation",         tag: "Technology Partner" },
  { icon: Shield,  color: SKY,   title: "ISO 27001 Certified",          org: "Information Security Mgmt.",    tag: "Certified"          },
  { icon: Award,   color: ROYAL, title: "Clutch Top IT Company",        org: "Clutch Global Rankings",        tag: "2024"               },
  { icon: Star,    color: SKY,   title: "SAP Certified Partner",        org: "SAP SE",                        tag: "Technology Partner" },
  { icon: Globe,   color: ROYAL, title: "Cyber Essentials Plus",        org: "Nat. Cyber Security Centre",    tag: "Certified"          },
  { icon: Zap,     color: SKY,   title: "24+ Years of Excellence",      org: "Industry Recognition",          tag: "Since 2000"         },
];

const TESTIMONIALS_T3 = [
  { quote: "Their team guided us through every stage of our digital transformation. The advice was practical, transparent, and focused on long-term business value.", name: "James Richardson", role: "CTO · FinTech Solutions Ltd", initials: "JR", color: ROYAL },
  { quote: "Their cybersecurity experts identified risks we hadn't considered and helped strengthen our infrastructure without disrupting our business.", name: "Sarah Mitchell", role: "IT Director · Apex Healthcare UK", initials: "SM", color: SKY },
  { quote: "The automation solution reduced repetitive work and improved productivity. Implementation was smooth from start to finish.", name: "David Okafor", role: "Operations Manager · Global Retail Group", initials: "DO", color: ROYAL },
  { quote: "Infoplus helped us migrate our entire SAP landscape to cloud seamlessly. Zero disruption and certified consultants all the way.", name: "Michael Torres", role: "Head of IT · BuildCore International", initials: "MT", color: SKY },
];

const TEAM_T3 = [
  { name: "Rajesh Kumar",    role: "CEO & Founder",               bio: "24+ years driving global IT strategy and innovation.",              initials: "RK", color: ROYAL },
  { name: "Priya Sharma",    role: "Chief Technology Officer",    bio: "Architect of enterprise cloud and AI solutions across 17 countries.", initials: "PS", color: SKY   },
  { name: "James Bennett",   role: "Head of IT Services",         bio: "Expert in managed IT, infrastructure, and cybersecurity delivery.",  initials: "JB", color: ROYAL },
  { name: "Aisha Patel",     role: "Director of SAP Practice",    bio: "Certified SAP consultant specialising in S/4HANA transformations.",  initials: "AP", color: SKY   },
  { name: "Michael Carter",  role: "Head of Staffing",            bio: "Connects top IT talent with leading organisations across the UK.",   initials: "MC", color: ROYAL },
  { name: "Sophie Williams", role: "Director of Business Dev.",   bio: "Builds lasting partnerships and drives growth across new markets.",  initials: "SW", color: SKY   },
];

const LOCATIONS = [
  { country: "United Kingdom", address: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW.", accent: ROYAL },
  { country: "India",          address: "No. 99, 1st Floor, Greeta Tower, Perungudi, Chennai 600096.",    accent: SKY   },
  { country: "Germany",        address: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, Frankfurt.", accent: ROYAL },
];

/* ─────────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────────── */
function T3Eyebrow({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span style={{
      display: "inline-block",
      background: dark ? "rgba(14,165,233,0.12)" : "#DBEAFE",
      color: dark ? SKY : ROYAL,
      border: dark ? "1px solid rgba(14,165,233,0.28)" : `1px solid ${BRD}`,
      borderRadius: 6, padding: "4px 12px", fontSize: 11, fontWeight: 700,
      letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18,
    }}>
      {label}
    </span>
  );
}

function T3IndustryPill({ ind }: { ind: { label: string; icon: React.ElementType } }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        background: hov ? ROYAL : "#FFFFFF",
        border: `1px solid ${hov ? ROYAL : BRD}`,
        borderRadius: 8, padding: "10px 18px",
        display: "flex", alignItems: "center", gap: 8,
        cursor: "default", transition: "all 0.22s",
        transform: hov ? "scale(1.04)" : "scale(1)",
        boxShadow: hov ? "0 4px 16px rgba(30,85,204,0.20)" : "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <ind.icon style={{ width: 15, height: 15, color: hov ? "#FFFFFF" : ROYAL, transition: "color 0.22s" }} />
      <span style={{ color: hov ? "#FFFFFF" : TB, fontSize: 13, fontWeight: 600, transition: "color 0.22s" }}>
        {ind.label}
      </span>
    </div>
  );
}

function T3ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = { name: "", email: "", phone: "" };
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.phone.trim()) e.phone = "Phone is required.";
    return e;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.values(errs).every(v => !v)) setSent(true);
  };

  if (sent) return (
    <div style={{ ...wcard, padding: 40, textAlign: "center" }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
        <CheckCircle2 style={{ width: 28, height: 28, color: "#16A34A" }} />
      </div>
      <p style={{ color: TH, fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Message Sent!</p>
      <p style={{ color: TB, fontSize: 14 }}>We'll get back to you within one business day.</p>
    </div>
  );

  return (
    <div style={{ ...wcard, padding: "32px 36px" }}>
      <p style={{ color: TH, fontWeight: 700, fontSize: 22, marginBottom: 6 }}>Quick Enquiry</p>
      <p style={{ color: TB, fontSize: 14, marginBottom: 24 }}>Tell us about your project and we'll be in touch.</p>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {(["name", "email", "phone"] as const).map(key => (
          <div key={key}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: TH, marginBottom: 6 }}>
              {{ name: "Your Name", email: "Email Address", phone: "Contact Number" }[key]}{" "}
              <span style={{ color: ROYAL }}>*</span>
            </label>
            <input
              type={{ name: "text", email: "email", phone: "tel" }[key]}
              placeholder={{ name: "John Smith", email: "john@company.com", phone: "+44 20 0000 0000" }[key]}
              value={form[key]}
              onChange={e => setForm({ ...form, [key]: e.target.value })}
              style={{
                width: "100%", padding: "12px 16px", borderRadius: 8, fontSize: 14,
                border: `1px solid ${errors[key] ? "#EF4444" : BRD}`,
                background: errors[key] ? "#FEF2F2" : "#F8FAFF",
                color: TH, outline: "none", boxSizing: "border-box",
              }}
            />
            {errors[key] && <p style={{ color: "#EF4444", fontSize: 12, marginTop: 4 }}>{errors[key]}</p>}
          </div>
        ))}
        <div>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: TH, marginBottom: 6 }}>Message</label>
          <textarea rows={4} placeholder="Tell us about your project…"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            style={{
              width: "100%", padding: "12px 16px", borderRadius: 8, fontSize: 14,
              border: `1px solid ${BRD}`, background: "#F8FAFF", color: TH,
              outline: "none", resize: "none", boxSizing: "border-box",
            }}
          />
        </div>
        <button type="submit"
          style={{ width: "100%", background: GRAD, color: TP, borderRadius: 8, padding: "14px 24px", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "opacity 0.2s" }}
          className="hover:opacity-90">
          Send Message <ChevronRight style={{ width: 18, height: 18 }} />
        </button>
        <p style={{ color: TB, fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
          <Shield style={{ width: 14, height: 14, color: ROYAL, flexShrink: 0 }} />
          We respect your privacy and won't spam you.
        </p>
      </form>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────── */
export default function IndexTheme3() {
  return (
    <div className="w-full" style={{ background: "#FFFFFF" }}>
      <PageMeta
        title="Managed IT Services & AI Solutions — Theme 3"
        description="Infoplus Technologies UK delivers expert managed IT services including AI, cloud computing, cyber security, SAP consulting and IT staffing solutions."
        path="/home-3"
      />

      {/* ══ 1. Hero — corporate blue slides 1–6 ══ */}
      <IndexBanner slides={SLIDES_T3} />

      {/* ══ 2. Quick Stats ══ */}
      <section style={{ background: SURF }} className="py-14">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 60}>
                <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "28px 24px", borderBottom: `3px solid ${s.color}`, boxShadow: "0 2px 8px rgba(30,85,204,0.06)", transition: "all 0.25s" }}
                  className="flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(30,85,204,0.12)]">
                  <p className="tabular-nums" style={{ color: s.color, fontWeight: 900, fontSize: 48, lineHeight: 1, marginBottom: 8 }}>{s.value}</p>
                  <p style={{ color: TB, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. About ══ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, borderRadius: "50%", background: "#DBEAFE", opacity: 0.45, filter: "blur(120px)", pointerEvents: "none" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <T3Eyebrow label="About Us" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(2rem,4.5vw,3.25rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24 }}>
                Building Tomorrow&rsquo;s{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Digital Future
                </span>
              </h2>
              <div style={{ color: TB, fontSize: 16, lineHeight: 1.8 }} className="space-y-4 mb-8">
                <p>Infoplus Technologies UK Ltd is a forward-looking IT company focused on building products, services, staffing, consulting, and digital transformation needed for the next generation.</p>
                <p>Headquartered in Borehamwood, United Kingdom, we challenge industry norms through fixed-price contracts and a performance-pricing model that holds us accountable to your outcomes.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Quality First", "Innovation", "Customer Empathy"].map((t, i) => {
                  const c = [ROYAL, SKY, ROYAL][i];
                  return (
                    <span key={t} style={{ background: `${c}10`, color: c, border: `1px solid ${c}28`, borderRadius: 999, padding: "6px 14px", fontSize: 13, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle2 style={{ width: 13, height: 13 }} />
                      {t}
                    </span>
                  );
                })}
              </div>
              <Link to="/about"
                style={{ background: GRAD, borderRadius: 8, padding: "12px 24px", fontWeight: 700, color: TP, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", fontSize: 15, transition: "all 0.2s" }}
                className="hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,85,204,0.30)]">
                Know More About Us <ChevronRight style={{ width: 16, height: 16 }} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <div className="space-y-4">
                <div style={{ background: GRAD, borderRadius: 16, padding: "32px 28px", position: "relative", overflow: "hidden", minHeight: 130 }}>
                  <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <p style={{ color: "rgba(255,255,255,0.60)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Est. 2000</p>
                    <p style={{ color: TP, fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>Infoplus Technologies</p>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>United Kingdom Ltd</p>
                  </div>
                  <span style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, padding: "4px 10px", color: TP, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    ISO 14001:2015
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div style={{ ...wcard, padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 110, transition: "all 0.25s" }} className="hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(30,85,204,0.12)]">
                    <p style={{ color: ROYAL, fontWeight: 900, fontSize: 40, lineHeight: 1 }}>20+</p>
                    <p style={{ color: TB, fontSize: 13, fontWeight: 600 }}>Years of Excellence</p>
                  </div>
                  <div style={{ ...scard, padding: "20px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 110, transition: "all 0.25s" }} className="hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(30,85,204,0.10)]">
                    <p style={{ color: SKY, fontWeight: 900, fontSize: 40, lineHeight: 1 }}>500+</p>
                    <p style={{ color: TB, fontSize: 13, fontWeight: 600 }}>Projects Delivered</p>
                  </div>
                </div>
                <div style={{ ...wcard, padding: "16px 20px" }} className="flex items-start gap-4">
                  <div style={{ background: `${ROYAL}12`, width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <MapPin style={{ width: 18, height: 18, color: ROYAL }} />
                  </div>
                  <div>
                    <p style={{ color: TH, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>17 Global Offices</p>
                    <p style={{ color: TB, fontSize: 12, lineHeight: 1.65 }}>
                      UK · India · Germany · Sweden · Netherlands · Belgium · Ireland · Switzerland · Poland · Czech Republic · Spain · France · Austria · Italy · Romania · Bulgaria · UAE
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 4. Why Choose Us ══ */}
      <section className="py-28" style={{ background: SURF }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <T3Eyebrow label="Why Choose Us" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(1.9rem,4vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Why Choose{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Infoplus Technologies?
                </span>
              </h2>
              <p style={{ color: TB, fontSize: 15, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
                Your trusted partner for comprehensive IT solutions, built on 24+ years of real-world expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_T3.map((w, i) => (
              <ScrollReveal key={w.title} direction="up" delay={i * 70}>
                <div style={{ ...wcard, padding: "28px 24px", height: "100%", transition: "all 0.25s" }}
                  className="hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(30,85,204,0.12)] hover:border-[rgba(30,85,204,0.28)]">
                  <div style={{ background: `${[ROYAL, SKY, ROYAL, SKY, ROYAL][i]}14`, borderRadius: 12, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color: [ROYAL, SKY, ROYAL, SKY, ROYAL][i] }}>
                    <w.icon style={{ width: 22, height: 22 }} />
                  </div>
                  <h3 style={{ color: TH, fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{w.title}</h3>
                  <p style={{ color: TB, fontSize: 14, lineHeight: 1.75 }}>{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal direction="up" delay={WHY_T3.length * 70} className="sm:col-span-2 lg:col-span-3">
              <div style={{ background: GRAD, borderRadius: 12, padding: "28px 32px" }}
                className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p style={{ color: TP, fontWeight: 700, fontSize: 20, marginBottom: 6 }}>Ready to Transform Your IT?</p>
                  <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 14 }}>Talk to an expert — no sales pressure, just straight answers.</p>
                </div>
                <Link to="/contact"
                  style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.30)", borderRadius: 8, padding: "12px 24px", fontWeight: 600, color: TP, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0, transition: "all 0.2s" }}
                  className="hover:bg-white/25 hover:-translate-y-0.5">
                  Get in Touch <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 5. Our Work ══ */}
      <section className="py-28" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <T3Eyebrow label="Our Work" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Proactively Managed
                <br />
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  IT Solutions
                </span>
              </h2>
              <p style={{ color: TB, fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
                Our IT Centre of Excellence designs end-to-end solutions so your business has a technology edge.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SOLUTION_CARDS.map((sol, i) => (
              <ScrollReveal key={sol.title} variant="card" delay={i * 100}>
                <Link to={sol.href}
                  style={{ ...wcard, padding: "28px", display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", borderLeft: `4px solid ${sol.accent}`, transition: "all 0.3s" }}
                  className="group hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(30,85,204,0.14)]">
                  <div style={{ background: `${sol.accent}12`, borderRadius: 12, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, transition: "transform 0.3s" }}
                    className="group-hover:scale-110">
                    <sol.icon style={{ width: 22, height: 22, color: sol.accent }} />
                  </div>
                  <h3 style={{ color: TH, fontWeight: 700, fontSize: 19, marginBottom: 8 }}>{sol.title}</h3>
                  <div style={{ width: 32, height: 3, background: sol.accent, borderRadius: 2, marginBottom: 16, transition: "width 0.3s" }} className="group-hover:w-20" />
                  <p style={{ color: TB, fontSize: 14, lineHeight: 1.75, marginBottom: 16, flex: 1 }}>{sol.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sol.features.map(f => (
                      <span key={f} style={{ color: sol.accent, background: `${sol.accent}10`, border: `1px solid ${sol.accent}28`, borderRadius: 999, padding: "4px 12px", fontSize: 11, fontWeight: 600 }}>{f}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: sol.accent, fontSize: 13, fontWeight: 700 }}>
                    Explore Solutions
                    <ChevronRight style={{ width: 14, height: 14 }} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. AI Services — dark navy ══ */}
      <section className="py-28 relative overflow-hidden" style={{ background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${SKY}22 0%, transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${ROYAL}33 0%, transparent 70%)`, pointerEvents: "none" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <T3Eyebrow label="Artificial Intelligence" dark />
              <h2 style={{ color: TD, fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Pioneering the Future
                <br />
                <span style={{ background: `linear-gradient(135deg, ${SKY} 0%, ${ROYAL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  with AI
                </span>
              </h2>
              <p style={{ color: TDS, fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
                Harness intelligence to drive efficiency, innovation, and competitive advantage across your organisation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div className="grid grid-cols-3 mb-12 overflow-hidden" style={{ border: `1px solid ${DBRD}`, borderRadius: 16 }}>
              {[
                { value: "4x",   label: "Productivity Boost",  accent: SKY   },
                { value: "40%",  label: "Cost Reduction",       accent: ROYAL },
                { value: "24/7", label: "AI Availability",      accent: SKY   },
              ].map((s, i) => (
                <div key={i}
                  style={{ padding: "32px 24px", borderLeft: i > 0 ? `1px solid ${DBRD}` : "none", transition: "background 0.2s" }}
                  className="flex flex-col items-center text-center hover:bg-white/5">
                  <p className="tabular-nums" style={{ color: s.accent, fontWeight: 900, fontSize: 40, lineHeight: 1, marginBottom: 8 }}>{s.value}</p>
                  <p style={{ color: TDS, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {services.map((svc, i) => {
              const accent = SVC_ACCENTS[i];
              return (
                <ScrollReveal key={svc.title} variant="card" delay={i * 100}>
                  <div className="relative p-px rounded-2xl h-full"
                    style={{ background: `linear-gradient(135deg,${accent}55 0%,transparent 50%,${accent}22 100%)` }}>
                    <div style={{ ...dcard, background: "#0E1E4A", padding: "28px", height: "100%", display: "flex", flexDirection: "column", transition: "background 0.3s" }}
                      className="group rounded-2xl hover:bg-[#182E6A]">
                      <div style={{ background: `${accent}15`, borderRadius: 12, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                        <svc.icon style={{ width: 22, height: 22, color: accent }} />
                      </div>
                      <h4 style={{ color: TD, fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{svc.title}</h4>
                      <div style={{ width: 28, height: 2, background: accent, borderRadius: 2, marginBottom: 16, transition: "width 0.3s" }} className="group-hover:w-14" />
                      <p style={{ color: TDS, fontSize: 14, lineHeight: 1.75, marginBottom: 16, flex: 1 }}>{svc.description}</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                        {svc.features.map(f => (
                          <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, color: TDS, fontSize: 13, transition: "color 0.3s" }} className="group-hover:text-slate-300">
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: accent, flexShrink: 0 }} />
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

          <ScrollReveal direction="up" delay={160}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services/it-services/artificial-intelligence"
                style={{ background: `linear-gradient(135deg, ${SKY} 0%, ${ROYAL} 100%)`, borderRadius: 8, padding: "13px 28px", fontWeight: 700, color: TP, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", fontSize: 15, transition: "all 0.2s", boxShadow: `0 8px 24px ${SKY}44` }}
                className="hover:opacity-90 hover:-translate-y-0.5">
                Explore AI Services <ChevronRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link to="/services"
                style={{ background: "rgba(255,255,255,0.08)", border: `1px solid ${DBRD}`, borderRadius: 8, padding: "13px 28px", fontWeight: 600, color: TD, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", fontSize: 15, transition: "all 0.2s" }}
                className="hover:bg-white/14 hover:-translate-y-0.5">
                All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 7. Values ══ */}
      <section className="py-28" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <T3Eyebrow label="Our Values" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(1.9rem,4vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Driven By{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Excellence
                </span>
              </h2>
              <p style={{ color: TB, fontSize: 15, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                The principles that guide every decision, every engagement, and every line of code we write.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ourValues.map((val, i) => {
              const accent = [ROYAL, SKY, ROYAL, SKY, ROYAL, SKY, ROYAL][i];
              return (
                <ScrollReveal key={val.title} variant="card" delay={i * 60}>
                  <div style={{ ...wcard, padding: "24px", height: "100%", transition: "all 0.3s", borderTop: `3px solid ${accent}` }}
                    className="hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(30,85,204,0.12)]">
                    <div style={{ background: `${accent}12`, width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: accent }}>
                      <val.icon style={{ width: 20, height: 20 }} />
                    </div>
                    <h3 style={{ color: TH, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{val.title}</h3>
                    <p style={{ color: TB, fontSize: 13, lineHeight: 1.7 }}>{val.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 8. Industries ══ */}
      <section className="py-24" style={{ background: SURF }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <T3Eyebrow label="Our Industries" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(1.9rem,4vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Industries{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  We Serve
                </span>
              </h2>
              <p style={{ color: TB, fontSize: 15, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
                From pharmaceuticals to fintech — our expertise spans every major vertical.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.label} direction="fade" delay={i * 35}>
                <T3IndustryPill ind={ind} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. Client Logos ══ */}
      <section style={{ background: "#FFFFFF", borderTop: `1px solid ${BRD}`, borderBottom: `1px solid ${BRD}` }}>
        <ClientCarousel />
      </section>

      {/* ══ 10. Awards & Recognition ══ */}
      <section className="py-24" style={{ background: SURF }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <T3Eyebrow label="Awards & Recognition" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 12 }}>
                Recognised for{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Excellence &amp; Trust
                </span>
              </h2>
              <p style={{ color: TB, fontSize: 15, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                Accreditations and recognitions that reflect our commitment to quality, security, and world-class IT delivery.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AWARDS_T3.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div key={i}
                    style={{ ...wcard, padding: "24px", transition: "all 0.3s", display: "flex", alignItems: "flex-start", gap: 16 }}
                    className="group hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(30,85,204,0.12)]"
                    onMouseEnter={e => (e.currentTarget.style.borderColor = `${a.color}44`)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = BRD)}>
                    <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: 12, background: `${a.color}14`, border: `1px solid ${a.color}25`, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s" }} className="group-hover:scale-110">
                      <Icon style={{ width: 24, height: 24, color: a.color }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: TH, fontSize: 15, marginBottom: 2 }}>{a.title}</p>
                      <p style={{ fontSize: 12, color: TB, marginBottom: 6 }}>{a.org}</p>
                      <span style={{ background: `${a.color}12`, color: a.color, borderRadius: 999, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{a.tag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 11. Client Testimonials ══ */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <T3Eyebrow label="Client Testimonials" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 12 }}>
                What Our{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Clients Say
                </span>
              </h2>
              <p style={{ color: TB, fontSize: 15, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
                Real stories from the businesses we've helped transform with technology, talent, and trust.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TESTIMONIALS_T3.map((t, i) => (
              <ScrollReveal key={t.name} variant="card" delay={i * 90}>
                <div style={{ ...wcard, padding: "28px", position: "relative", overflow: "hidden", height: "100%" }}
                  className="flex flex-col hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(30,85,204,0.12)] transition-all duration-300">
                  <Quote style={{ position: "absolute", top: 20, right: 20, width: 36, height: 36, color: BRD }} />
                  <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} style={{ width: 14, height: 14, color: "#F59E0B", fill: "#F59E0B" }} />)}
                  </div>
                  <p style={{ color: TH, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", flex: 1, marginBottom: 20 }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `linear-gradient(135deg,${t.color},${t.color}99)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: TP, fontWeight: 800, fontSize: 14 }}>{t.initials}</span>
                    </div>
                    <div>
                      <p style={{ color: TH, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{t.name}</p>
                      <p style={{ color: TB, fontSize: 12 }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 12. Our Team ══ */}
      <section className="py-28 relative overflow-hidden" style={{ background: NAVY }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.022, backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${ROYAL}30 0%,transparent 65%)`, pointerEvents: "none" }} />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <T3Eyebrow label="Our Team" dark />
              <h2 style={{ color: TD, fontWeight: 800, fontSize: "clamp(1.9rem,4vw,3rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 14 }}>
                Meet the{" "}
                <span style={{ background: `linear-gradient(135deg, ${SKY} 0%, ${ROYAL} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  People Behind Infoplus
                </span>
              </h2>
              <p style={{ color: TDS, fontSize: 16, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
                Experienced professionals united by a passion for technology and delivering real-world impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {TEAM_T3.map((member, i) => (
              <ScrollReveal key={member.name} variant="card" delay={i * 70}>
                <div style={{ ...dcard, padding: "28px", transition: "all 0.3s" }}
                  className="group hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(0,0,0,0.35)] hover:border-white/20">
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: `linear-gradient(135deg,${member.color},${member.color}90)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <span style={{ color: TP, fontWeight: 800, fontSize: 18 }}>{member.initials}</span>
                  </div>
                  <p style={{ color: member.color, fontWeight: 700, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>{member.role}</p>
                  <h3 style={{ color: TD, fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{member.name}</h3>
                  <p style={{ color: TDS, fontSize: 13, lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 13. Global Presence ══ */}
      <section className="pt-24 pb-10" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <T3Eyebrow label="Global Reach" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 12 }}>
                Our{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Presence Worldwide
                </span>
              </h2>
              <p style={{ color: TB, fontSize: 15, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
                With offices across 17 countries, we deliver world-class technology solutions wherever our clients need us.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={150}>
            <div className="flex justify-center mt-6">
              <ImageWithFallback src={imgMap} alt="World Map — Infoplus Global Offices" className="w-full max-w-5xl h-auto object-contain" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 14. Office Locations ══ */}
      <section className="py-20" style={{ background: "#FFFFFF", borderTop: `1px solid ${BRD}` }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <T3Eyebrow label="Our Offices" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Global{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Presence
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {LOCATIONS.map((loc, i) => (
              <ScrollReveal key={loc.country} direction="up" delay={i * 80}>
                <div style={{ ...wcard, padding: "24px", transition: "all 0.25s" }}
                  className="hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(30,85,204,0.12)]">
                  <div style={{ background: `${loc.accent}12`, width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <MapPin style={{ width: 18, height: 18, color: loc.accent }} />
                  </div>
                  <p style={{ color: TH, fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{loc.country}</p>
                  <p style={{ color: TB, fontSize: 13, lineHeight: 1.65 }}>{loc.address}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={240}>
            <div style={{ ...wcard, padding: "20px 28px" }} className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="mailto:info@infoplustechnologies.co.uk"
                style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit", transition: "transform 0.2s" }}
                className="hover:-translate-y-0.5">
                <div style={{ background: `${ROYAL}12`, width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail style={{ width: 18, height: 18, color: ROYAL }} />
                </div>
                <div>
                  <p style={{ color: TB, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>Email</p>
                  <p style={{ color: TH, fontSize: 14, fontWeight: 700 }}>info@infoplustechnologies.co.uk</p>
                </div>
              </a>
              <div style={{ width: 1, height: 40, background: BRD }} className="hidden sm:block" />
              <a href="tel:+447853045836"
                style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit", transition: "transform 0.2s" }}
                className="hover:-translate-y-0.5">
                <div style={{ background: `${SKY}12`, width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone style={{ width: 18, height: 18, color: SKY }} />
                </div>
                <div>
                  <p style={{ color: TB, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>Phone</p>
                  <p style={{ color: TH, fontSize: 14, fontWeight: 700 }}>+44 785 304 5836</p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 15. Get in Touch ══ */}
      <section className="py-28" style={{ background: SURF }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <T3Eyebrow label="Get in Touch" />
              <h2 style={{ color: TH, fontWeight: 800, fontSize: "clamp(1.75rem,3.5vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
                Let&rsquo;s Start a{" "}
                <span style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Project Together
                </span>
              </h2>
              <p style={{ color: TB, fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                We&rsquo;d love to hear from you. Fill out our form or drop us a message — we get back within one business day.
              </p>
              <div className="space-y-3 mb-6">
                {LOCATIONS.map(loc => (
                  <div key={loc.country}
                    style={{ ...wcard, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", transition: "all 0.25s" }}
                    className="hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,85,204,0.10)]">
                    <div style={{ background: `${loc.accent}12`, width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin style={{ width: 18, height: 18, color: loc.accent }} />
                    </div>
                    <div>
                      <p style={{ color: TH, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{loc.country}</p>
                      <p style={{ color: TB, fontSize: 13, lineHeight: 1.6 }}>{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact#worldwide-presence"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, color: ROYAL, fontWeight: 600, fontSize: 14, textDecoration: "none" }}
                className="hover:opacity-80">
                <MapPin style={{ width: 16, height: 16 }} />
                View All 17 Offices Worldwide
                <ChevronRight style={{ width: 16, height: 16 }} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <T3ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
