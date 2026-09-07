import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import {
  ChevronRight, MapPin, Mail, Phone,
  Clock, Award, Headphones, Globe, Zap,
  ArrowRight, CheckCircle2,
  Trophy, Star, Quote, Shield,
} from "lucide-react";
import { industries, ourSolutions, ourValues, services } from "../assets/constants/types";
import { PageMeta } from "../components/shared/PageMeta";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import ClientCarousel from "../components/ui/ClientCarousel";
import { ImageWithFallback } from "../components/helpers/ImageWithFallback";
import imgMap from "../assets/images/imgMap.png";

/* ─────────────────────────────────────────────────────────────────
   Theme 2 — Design System Tokens
───────────────────────────────────────────────────────────────── */
const BG  = "linear-gradient(135deg, #0D112D 0%, #242E72 100%)";
const ACC = "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)";
const SRF = "#141A3D";
const SAL = "#1A2444";
const BRD = "rgba(169,180,214,0.15)";
const TP  = "#FFFFFF";
const TS  = "#A9B4D6";
const TA  = "#DB5434";
const FF  = "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const card  = { background: SAL, border: `1px solid ${BRD}`, borderRadius: 12 };
const lcard = { background: "#F3F5FF", border: "1px solid rgba(13,17,45,0.07)", borderRadius: 12 };
const WH1   = "#101223";
const WH2   = "#4A4F63";

/* ─────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "20+",  label: "Years of Excellence" },
  { value: "500+", label: "Projects Delivered"  },
  { value: "17",   label: "Global Offices"      },
  { value: "200+", label: "Certified Experts"   },
];

const WHY = [
  { icon: Clock,      title: "24+ Years of Experience",        desc: "Solving real IT problems since 2000 — we have already seen the challenges your business faces and know how to fix them properly." },
  { icon: Award,      title: "Certified Specialists",           desc: "Our teams include certified experts across SAP, Cloud platforms and cyber-security. Genuinely qualified, not just experienced." },
  { icon: Headphones, title: "Ongoing Support",                 desc: "We don't just set things up and walk away. Ongoing support means problems are fixed quickly, not weeks later." },
  { icon: Globe,      title: "17-Country Reach",                desc: "Our team works across 17 countries, so support is always close, whatever your time zone or location." },
  { icon: Zap,        title: "IT That Works for Your Business", desc: "We don't just fix problems — we build IT that actively works for your business every single day." },
];

const SOL_EXTRAS = [
  { href: "/services/it-services"         },
  { href: "/products"                     },
  { href: "/services/staffing-consulting" },
  { href: "/services/new-generation"      },
];
const SOLUTION_CARDS = ourSolutions.map((s, i) => ({ ...s, ...SOL_EXTRAS[i] }));

const LOCATIONS = [
  { country: "United Kingdom", address: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW.", icon: MapPin },
  { country: "India",          address: "No. 99, 1st Floor, Greeta Tower, Perungudi, Chennai 600096.",   icon: MapPin },
  { country: "Germany",        address: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, Frankfurt.", icon: MapPin },
];

const HERO_TAGS = ["Artificial Intelligence", "Cloud Solutions", "Cyber Security", "SAP Consulting", "IT Staffing", "Digital Transformation"];

const AWARDS_T2 = [
  { icon: Trophy,  title: "Microsoft Solution Partner",  org: "Microsoft Corporation",         tag: "Technology Partner" },
  { icon: Shield,  title: "ISO 27001 Certified",          org: "Information Security Mgmt.",    tag: "Certified"          },
  { icon: Award,   title: "Clutch Top IT Company",        org: "Clutch Global Rankings",        tag: "2024"               },
  { icon: Star,    title: "SAP Certified Partner",        org: "SAP SE",                        tag: "Technology Partner" },
  { icon: Globe,   title: "Cyber Essentials Plus",        org: "Nat. Cyber Security Centre",    tag: "Certified"          },
  { icon: Zap,     title: "24+ Years of Excellence",      org: "Industry Recognition",          tag: "Since 2000"         },
];

const TESTIMONIALS_T2 = [
  { quote: "Their team guided us through every stage of our digital transformation. Practical, transparent advice focused on long-term business value.", name: "James Richardson", role: "CTO · FinTech Solutions Ltd", initials: "JR" },
  { quote: "Their cybersecurity experts identified risks we hadn't considered and helped strengthen our infrastructure without disrupting the business.", name: "Sarah Mitchell", role: "IT Director · Apex Healthcare UK", initials: "SM" },
  { quote: "The automation solution reduced repetitive work and improved productivity. Implementation was smooth from start to finish.", name: "David Okafor", role: "Operations Manager · Global Retail Group", initials: "DO" },
  { quote: "Infoplus helped us migrate our SAP landscape to cloud seamlessly. Zero disruption and certified consultants throughout.", name: "Michael Torres", role: "Head of IT · BuildCore International", initials: "MT" },
];

const TEAM_T2 = [
  { name: "Rajesh Kumar",    role: "CEO & Founder",               bio: "24+ years driving global IT strategy and innovation.",               initials: "RK" },
  { name: "Priya Sharma",    role: "Chief Technology Officer",    bio: "Architect of enterprise cloud and AI solutions across 17 countries.",  initials: "PS" },
  { name: "James Bennett",   role: "Head of IT Services",         bio: "Expert in managed IT, infrastructure, and cybersecurity delivery.",   initials: "JB" },
  { name: "Aisha Patel",     role: "Director of SAP Practice",    bio: "Certified SAP consultant specialising in S/4HANA transformations.",   initials: "AP" },
  { name: "Michael Carter",  role: "Head of Staffing",            bio: "Connects top IT talent with leading organisations across the UK.",    initials: "MC" },
  { name: "Sophie Williams", role: "Director of Business Dev.",   bio: "Builds lasting partnerships and drives growth across new markets.",   initials: "SW" },
];

/* ─────────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────────── */
function Eyebrow({ label }: { label: string }) {
  return (
    <span style={{
      display: "inline-block", color: TA,
      background: "rgba(219,84,52,0.10)", border: "1px solid rgba(219,84,52,0.22)",
      borderRadius: 999, padding: "4px 14px", fontSize: 11, fontWeight: 700,
      letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 20,
    }}>
      {label}
    </span>
  );
}

function AccentBadge({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div style={{ background: ACC, borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginBottom: 20 }}>
      <Icon style={{ width: 22, height: 22, color: TP }} />
    </div>
  );
}

/* Hover-aware industry pill */
function IndustryPill({ ind }: { ind: { label: string; icon: React.ElementType } }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        background: hov ? ACC : SAL,
        border: `1px solid ${hov ? "transparent" : BRD}`,
        borderRadius: 999, padding: "10px 18px",
        display: "flex", alignItems: "center", gap: 8,
        cursor: "default", transition: "all 0.22s",
        transform: hov ? "scale(1.04)" : "scale(1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <ind.icon style={{ width: 15, height: 15, color: hov ? "#FFFFFF" : "#EB9B3D", transition: "color 0.22s" }} />
      <span style={{ color: hov ? "#FFFFFF" : TS, fontSize: 13, fontWeight: 600, transition: "color 0.22s" }}>
        {ind.label}
      </span>
    </div>
  );
}

/* Ghost button (dark surface) */
function GhostBtn({ to, children }: { to: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={to}
      style={{
        background: hov ? "#1f2d55" : SAL,
        border: `1px solid ${BRD}`, borderRadius: 999, padding: "12px 24px",
        fontWeight: 600, color: TP, display: "inline-flex", alignItems: "center", gap: 8,
        textDecoration: "none", transition: "all 0.2s",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </Link>
  );
}


function T2ContactForm() {
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
    <div style={{ ...card, padding: 40, textAlign: "center" }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
        <CheckCircle2 style={{ width: 28, height: 28, color: "#16A34A" }} />
      </div>
      <p style={{ color: TP, fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Message Sent!</p>
      <p style={{ color: TS, fontSize: 14 }}>We'll get back to you within one business day.</p>
    </div>
  );

  return (
    <div style={{ ...card, padding: "32px 36px" }}>
      <p style={{ color: TP, fontWeight: 700, fontSize: 22, marginBottom: 6 }}>Quick Enquiry</p>
      <p style={{ color: TS, fontSize: 14, marginBottom: 24 }}>Tell us about your project and we'll be in touch.</p>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {(["name", "email", "phone"] as const).map(key => (
          <div key={key}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: TP, marginBottom: 6 }}>
              {{ name: "Your Name", email: "Email Address", phone: "Contact Number" }[key]}{" "}
              <span style={{ color: "#EB9B3D" }}>*</span>
            </label>
            <input
              type={{ name: "text", email: "email", phone: "tel" }[key]}
              placeholder={{ name: "John Smith", email: "john@company.com", phone: "+44 20 0000 0000" }[key]}
              value={form[key]}
              onChange={e => setForm({ ...form, [key]: e.target.value })}
              style={{
                width: "100%", padding: "12px 16px", borderRadius: 8, fontSize: 14,
                border: `1px solid ${errors[key] ? "#EF4444" : BRD}`,
                background: errors[key] ? "rgba(239,68,68,0.08)" : SAL,
                color: TP, outline: "none", boxSizing: "border-box",
              }}
            />
            {errors[key] && <p style={{ color: "#EF4444", fontSize: 12, marginTop: 4 }}>{errors[key]}</p>}
          </div>
        ))}
        <div>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: TP, marginBottom: 6 }}>Message</label>
          <textarea rows={4} placeholder="Tell us about your project…"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            style={{
              width: "100%", padding: "12px 16px", borderRadius: 8, fontSize: 14,
              border: `1px solid ${BRD}`, background: SAL, color: TP,
              outline: "none", resize: "none", boxSizing: "border-box",
            }}
          />
        </div>
        <button type="submit"
          style={{ width: "100%", background: ACC, color: TP, borderRadius: 999, padding: "14px 24px", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "opacity 0.2s" }}
          className="hover:opacity-85">
          Send Message <ChevronRight style={{ width: 18, height: 18 }} />
        </button>
        <p style={{ color: TS, fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
          <Shield style={{ width: 14, height: 14, color: "#EB9B3D", flexShrink: 0 }} />
          We respect your privacy and won't spam you.
        </p>
      </form>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────── */
export default function IndexTheme2() {
  return (
    <div style={{ fontFamily: FF }}>
      <PageMeta
        title="Managed IT Services & AI Solutions — Theme 2"
        description="Infoplus Technologies UK delivers expert managed IT services including AI, cloud computing, cyber security, SAP consulting and IT staffing solutions."
        path="/home-2"
      />

      {/* ══ 1. Hero — Custom dark gradient ══ */}
      <section style={{ background: BG, position: "relative", overflow: "hidden", paddingTop: "clamp(100px,14vw,140px)", paddingBottom: "clamp(100px,14vw,140px)" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle,#ffffff 1px,transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(235,155,61,0.14) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(36,46,114,0.55) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container mx-auto px-6 max-w-5xl text-center" style={{ position: "relative", zIndex: 1, color: TP }}>
          <ScrollReveal direction="up">
            <Eyebrow label="Managed IT & AI Solutions" />
            <h1 style={{ color: TP, fontWeight: 900, fontSize: "clamp(2.25rem,6vw,4rem)", lineHeight: 1.1, marginBottom: 24 }}>
              Transform Your Business<br />with{" "}
              <span style={{ background: ACC, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Intelligent IT
              </span>
            </h1>
            <p style={{ color: TS, fontSize: "clamp(15px,2vw,18px)", lineHeight: 1.75, maxWidth: 600, margin: "0 auto 44px" }}>
              24+ years of expertise delivering AI, cloud, cyber security, SAP consulting, and staffing solutions across 17 countries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link to="/contact"
                style={{ background: ACC, borderRadius: 999, padding: "14px 32px", fontWeight: 700, color: TP, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", fontSize: 15, transition: "all 0.2s" }}
                className="hover:opacity-85 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.40)]">
                Get Started <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <GhostBtn to="/about">Learn More</GhostBtn>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {HERO_TAGS.map(tag => (
                <span key={tag} style={{ color: TS, background: "rgba(169,180,214,0.08)", border: `1px solid ${BRD}`, borderRadius: 999, padding: "6px 14px", fontSize: 12, fontWeight: 600 }}>
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 2. Stats Band — dark (SRF) ══ */}
      <section className="py-14" style={{ background: SRF }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} direction="up" delay={i * 70}>
                <div style={{ ...card, padding: "32px 24px", transition: "all 0.25s" }}
                  className="flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(235,155,61,0.14)] cursor-default">
                  <p style={{ color: "#EB9B3D", fontWeight: 900, fontSize: 48, lineHeight: 1, marginBottom: 10 }} className="tabular-nums">
                    {s.value}
                  </p>
                  <p style={{ color: TS, fontWeight: 600, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    {s.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. About Us — white ══ */}
      <section className="py-28" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <ScrollReveal direction="left">
              <Eyebrow label="About Us" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(2rem,4vw,2.75rem)", lineHeight: 1.2, marginBottom: 24 }}>
                Building Tomorrow&rsquo;s{" "}
                <span style={{ background: ACC, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Digital Enterprises
                </span>
              </h2>
              <div style={{ color: WH2, fontSize: 15, lineHeight: 1.8 }} className="space-y-4 mb-8">
                <p>Infoplus Technologies UK Ltd is a forward-looking IT company focused on building products, services, staffing, consulting, and digital transformation needed for the next generation.</p>
                <p>Headquartered in Borehamwood, United Kingdom, we challenge industry norms through fixed-price contracts and a unique performance-pricing model.</p>
                <p>We combine the power of technology with our culture: Quality, Innovation, and customer empathy at the forefront of providing a comprehensive portfolio of services.</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Quality First", "Innovation", "Customer Empathy"].map(t => (
                  <span key={t} style={{ color: WH2, background: "rgba(13,17,45,0.05)", border: "1px solid rgba(13,17,45,0.10)", borderRadius: 999, padding: "6px 14px", fontSize: 13, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <CheckCircle2 style={{ width: 13, height: 13, color: "#EB9B3D" }} />
                    {t}
                  </span>
                ))}
              </div>
              <Link to="/about"
                style={{ background: ACC, borderRadius: 999, padding: "12px 24px", fontWeight: 600, color: TP, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", transition: "all 0.2s" }}
                className="hover:opacity-85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(235,155,61,0.35)]">
                Know More About Us
                <ChevronRight style={{ width: 16, height: 16 }} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2" style={{ ...lcard, background: "#ECEFFE", padding: 0, minHeight: 140, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, opacity: 0.35, backgroundImage: "radial-gradient(circle,rgba(13,17,45,0.12) 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p style={{ color: WH2, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Est. 2000</p>
                    <p style={{ color: WH1, fontSize: 22, fontWeight: 700 }}>Infoplus Technologies</p>
                    <p style={{ color: WH2, fontSize: 14 }}>United Kingdom Ltd</p>
                  </div>
                  <span style={{ position: "absolute", top: 12, left: 12, display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(235,155,61,0.12)", border: "1px solid rgba(235,155,61,0.28)", borderRadius: 999, padding: "4px 10px", color: "#C07020", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#EB9B3D", display: "inline-block", flexShrink: 0 }} />
                    ISO 14001:2015 Certified
                  </span>
                </div>
                <div style={{ ...lcard, padding: "20px 24px", minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.25s" }} className="hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(13,17,45,0.08)]">
                  <p style={{ color: "#EB9B3D", fontWeight: 900, fontSize: 40, lineHeight: 1 }}>20+</p>
                  <p style={{ color: WH2, fontSize: 13, fontWeight: 600 }}>Years of Excellence</p>
                </div>
                <div style={{ ...lcard, background: "#ECEFFE", padding: "20px 24px", minHeight: 110, display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.25s" }} className="hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(13,17,45,0.08)]">
                  <p style={{ color: "#DA4D33", fontWeight: 900, fontSize: 40, lineHeight: 1 }}>500+</p>
                  <p style={{ color: WH2, fontSize: 13, fontWeight: 600 }}>Projects Delivered</p>
                </div>
                <div className="col-span-2 flex items-start gap-4" style={{ ...lcard, padding: "16px 20px" }}>
                  <div style={{ background: ACC, borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <MapPin style={{ width: 16, height: 16, color: TP }} />
                  </div>
                  <div>
                    <p style={{ color: WH1, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>17 Global Offices</p>
                    <p style={{ color: WH2, fontSize: 12, lineHeight: 1.65 }}>
                      UK · India · Germany · Sweden · Netherlands · Belgium · Ireland · Switzerland · Poland · Czech Republic · Spain · France · Austria · Italy · Romania · Bulgaria · UAE
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 4. Why Choose Us — dark (SRF) ══ */}
      <section className="py-28" style={{ background: SRF }}>
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <Eyebrow label="Why Choose Us" />
              <h2 style={{ color: TP, fontWeight: 700, fontSize: "clamp(1.75rem,4vw,2.75rem)", lineHeight: 1.2, marginBottom: 16 }}>
                Why Choose Infoplus Technologies?
              </h2>
              <p style={{ color: TS, fontSize: 15, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
                Your trusted partner for comprehensive IT solutions, built on 24+ years of real-world expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY.map((w, i) => (
              <ScrollReveal key={w.title} direction="up" delay={i * 70}>
                <div style={{ ...card, padding: "28px 24px", height: "100%", transition: "all 0.25s" }}
                  className="hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(235,155,61,0.12)] hover:border-[rgba(235,155,61,0.25)]">
                  <AccentBadge icon={w.icon} />
                  <h3 style={{ color: TP, fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{w.title}</h3>
                  <p style={{ color: TS, fontSize: 14, lineHeight: 1.75 }}>{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal direction="up" delay={WHY.length * 70} className="sm:col-span-2 lg:col-span-3">
              <div style={{ background: ACC, borderRadius: 12, padding: "28px 32px" }}
                className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p style={{ color: TP, fontWeight: 700, fontSize: 20, marginBottom: 6 }}>Ready to Transform Your IT?</p>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>Talk to an expert — no sales pressure, just straight answers.</p>
                </div>
                <Link to="/contact"
                  style={{ background: SAL, border: `1px solid ${BRD}`, borderRadius: 999, padding: "12px 24px", fontWeight: 600, color: TP, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", flexShrink: 0, transition: "all 0.2s" }}
                  className="hover:-translate-y-0.5 hover:bg-[#1f2d55]">
                  Get in Touch <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══ 5. Our Work — white ══ */}
      <section className="py-28" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <Eyebrow label="Our Work" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(1.75rem,4vw,2.75rem)", lineHeight: 1.2, marginBottom: 16 }}>
                Proactively Managed IT Solutions
              </h2>
              <p style={{ color: WH2, fontSize: 15, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
                End-to-end solutions designed by our IT Centre of Excellence so your organisation stays ahead of the curve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SOLUTION_CARDS.map((sol, i) => (
              <ScrollReveal key={sol.title} direction="up" delay={i * 90}>
                <Link to={sol.href}
                  style={{ ...lcard, padding: "28px", display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", transition: "all 0.3s" }}
                  className="group hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(13,17,45,0.12)] hover:border-[rgba(235,155,61,0.35)]">
                  <div style={{ background: ACC, borderRadius: "50%", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, transition: "transform 0.3s" }}
                    className="group-hover:scale-110">
                    <sol.icon style={{ width: 22, height: 22, color: TP }} />
                  </div>
                  <h3 style={{ color: WH1, fontWeight: 700, fontSize: 19, marginBottom: 8 }}>{sol.title}</h3>
                  <p style={{ color: WH2, fontSize: 14, lineHeight: 1.75, marginBottom: 16, flex: 1 }}>{sol.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {sol.features.map(f => (
                      <span key={f} style={{ color: WH2, background: "rgba(13,17,45,0.05)", border: "1px solid rgba(13,17,45,0.08)", borderRadius: 999, padding: "4px 12px", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>
                        {f}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#EB9B3D", fontSize: 13, fontWeight: 700 }}>
                    Explore Solutions
                    <ChevronRight style={{ width: 14, height: 14 }} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. AI Services — dark (SRF) ══ */}
      <section className="py-28" style={{ background: SRF }}>
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <Eyebrow label="Artificial Intelligence" />
              <h2 style={{ color: TP, fontWeight: 700, fontSize: "clamp(1.75rem,4vw,2.75rem)", lineHeight: 1.2, marginBottom: 16 }}>
                Pioneering the Future with AI
              </h2>
              <p style={{ color: TS, fontSize: 15, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
                Harness the power of artificial intelligence to drive efficiency, innovation, and competitive advantage.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div className="grid grid-cols-3 mb-12 overflow-hidden" style={{ border: `1px solid ${BRD}`, borderRadius: 12 }}>
              {[
                { value: "4x",   label: "Productivity Boost" },
                { value: "40%",  label: "Cost Reduction"     },
                { value: "24/7", label: "AI Availability"    },
              ].map((s, i) => (
                <div key={s.label}
                  style={{ padding: "32px 24px", borderLeft: i > 0 ? `1px solid ${BRD}` : "none", transition: "background 0.2s" }}
                  className="flex flex-col items-center text-center group hover:bg-[#1f2d55]">
                  <p style={{ color: "#EB9B3D", fontWeight: 900, fontSize: 40, lineHeight: 1, marginBottom: 8 }} className="tabular-nums">{s.value}</p>
                  <p style={{ color: TS, fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} direction="up" delay={i * 80}>
                <div style={{ ...card, padding: "28px 24px", transition: "all 0.25s" }}
                  className="hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(235,155,61,0.12)] hover:border-[rgba(235,155,61,0.25)]">
                  <AccentBadge icon={svc.icon} />
                  <h4 style={{ color: TP, fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{svc.title}</h4>
                  <p style={{ color: TS, fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{svc.description}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {svc.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, color: TS, fontSize: 13 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#EB9B3D", flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={160}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services/it-services/artificial-intelligence"
                style={{ background: ACC, borderRadius: 999, padding: "12px 24px", fontWeight: 600, color: TP, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", transition: "all 0.2s" }}
                className="hover:opacity-85 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(235,155,61,0.35)]">
                Explore AI Services <ChevronRight style={{ width: 16, height: 16 }} />
              </Link>
              <GhostBtn to="/services">All Services</GhostBtn>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 7. Our Values — white ══ */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <Eyebrow label="Our Values" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(1.75rem,4vw,2.75rem)", lineHeight: 1.2, marginBottom: 16 }}>
                Driven By Excellence
              </h2>
              <p style={{ color: WH2, fontSize: 15, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
                The principles that guide every decision, every engagement, and every line of code we write.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ourValues.map((val, i) => (
              <ScrollReveal key={val.title} variant="card" delay={i * 70}>
                <div style={{ ...lcard, padding: "24px 20px", height: "100%", transition: "all 0.25s" }}
                  className="hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(13,17,45,0.10)] hover:border-[rgba(235,155,61,0.30)]">
                  <div style={{ background: ACC, borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <val.icon style={{ width: 20, height: 20, color: TP }} />
                  </div>
                  <h3 style={{ color: WH1, fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{val.title}</h3>
                  <p style={{ color: WH2, fontSize: 13, lineHeight: 1.7 }}>{val.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. Industries — dark (BG gradient) ══ */}
      <section className="py-20" style={{ background: BG }}>
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <Eyebrow label="Our Industries" />
              <h2 style={{ color: TP, fontWeight: 700, fontSize: "clamp(1.75rem,4vw,2.75rem)", lineHeight: 1.2, marginBottom: 16 }}>
                Industries We Serve
              </h2>
              <p style={{ color: TS, fontSize: 15, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
                From pharmaceuticals to fintech — our expertise spans every major vertical.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.label} direction="fade" delay={i * 35}>
                <IndustryPill ind={ind} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. Clients Carousel — white ══ */}
      <section style={{ background: "#FFFFFF" }}>
        <ClientCarousel />
      </section>

      {/* ══ 10. Awards & Recognition — dark (SRF) ══ */}
      <section className="py-24" style={{ background: SRF }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <Eyebrow label="Awards & Recognition" />
              <h2 style={{ color: TP, fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 1.2, marginBottom: 12 }}>
                Recognised for Excellence &amp; Trust
              </h2>
              <p style={{ color: TS, fontSize: 15, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                Accreditations and recognitions that reflect our commitment to quality, security, and world-class IT delivery.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AWARDS_T2.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div key={i}
                    style={{ ...card, padding: "24px", transition: "all 0.3s", display: "flex", alignItems: "flex-start", gap: 16 }}
                    className="group hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(235,155,61,0.14)] hover:border-[rgba(235,155,61,0.30)]">
                    <div style={{ flexShrink: 0, background: "linear-gradient(135deg,#EB9B3D22,#DA4D3322)", borderRadius: "50%", width: 52, height: 52, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s" }}
                      className="group-hover:scale-110">
                      <Icon style={{ width: 24, height: 24, color: "#EB9B3D" }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: TP, fontSize: 15, marginBottom: 2 }}>{a.title}</p>
                      <p style={{ fontSize: 12, color: TS, marginBottom: 6 }}>{a.org}</p>
                      <span style={{ background: "rgba(235,155,61,0.12)", color: "#EB9B3D", borderRadius: 999, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{a.tag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 11. Client Testimonials — white ══ */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <Eyebrow label="Client Testimonials" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 1.2, marginBottom: 12 }}>
                What Our Clients Say
              </h2>
              <p style={{ color: WH2, fontSize: 15, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
                Real stories from businesses we&rsquo;ve helped transform with technology, talent, and trust.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TESTIMONIALS_T2.map((t, i) => (
              <ScrollReveal key={t.name} variant="card" delay={i * 90}>
                <div style={{ ...lcard, padding: "28px", position: "relative", overflow: "hidden", height: "100%" }}
                  className="flex flex-col hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(13,17,45,0.10)] hover:border-[rgba(235,155,61,0.30)] transition-all duration-300">
                  <Quote style={{ position: "absolute", top: 20, right: 20, width: 36, height: 36, color: "rgba(13,17,45,0.06)" }} />
                  <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} style={{ width: 14, height: 14, color: "#EB9B3D", fill: "#EB9B3D" }} />)}
                  </div>
                  <p style={{ color: WH2, fontSize: 15, lineHeight: 1.8, fontStyle: "italic", flex: 1, marginBottom: 20 }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ background: ACC, borderRadius: "50%", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: TP, fontWeight: 800, fontSize: 14 }}>{t.initials}</span>
                    </div>
                    <div>
                      <p style={{ color: WH1, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>{t.name}</p>
                      <p style={{ color: WH2, fontSize: 12 }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 12. Our Team — dark (BG gradient) ══ */}
      <section className="py-28" style={{ background: BG }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <Eyebrow label="Our Team" />
              <h2 style={{ color: TP, fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 1.2, marginBottom: 14 }}>
                Meet the People Behind Infoplus
              </h2>
              <p style={{ color: TS, fontSize: 15, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
                Experienced professionals united by a passion for technology and delivering real-world impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {TEAM_T2.map((member, i) => (
              <ScrollReveal key={member.name} variant="card" delay={i * 70}>
                <div style={{ ...card, padding: "28px", transition: "all 0.3s" }}
                  className="hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.30)] hover:border-[rgba(235,155,61,0.30)]">
                  <div style={{ background: ACC, borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, flexShrink: 0 }}>
                    <span style={{ color: TP, fontWeight: 800, fontSize: 18 }}>{member.initials}</span>
                  </div>
                  <p style={{ color: "#EB9B3D", fontWeight: 600, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>{member.role}</p>
                  <h3 style={{ color: TP, fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{member.name}</h3>
                  <p style={{ color: TS, fontSize: 13, lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 13. Global Presence — white ══ */}
      <section className="pt-24 pb-10" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <Eyebrow label="Global Reach" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 1.2, marginBottom: 12 }}>
                Our Presence Worldwide
              </h2>
              <p style={{ color: WH2, fontSize: 15, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
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

      {/* ══ 14. Office Locations — white ══ */}
      <section className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <Eyebrow label="Our Offices" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 1.2, marginBottom: 16 }}>
                Global Presence
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {LOCATIONS.map((loc, i) => (
              <ScrollReveal key={loc.country} direction="up" delay={i * 80}>
                <div style={{ ...lcard, padding: "24px", transition: "all 0.25s" }}
                  className="hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(13,17,45,0.10)] hover:border-[rgba(235,155,61,0.30)]">
                  <div style={{ background: ACC, borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <loc.icon style={{ width: 18, height: 18, color: TP }} />
                  </div>
                  <p style={{ color: WH1, fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{loc.country}</p>
                  <p style={{ color: WH2, fontSize: 13, lineHeight: 1.65 }}>{loc.address}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={240}>
            <div style={{ ...lcard, padding: "20px 28px" }} className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="mailto:info@infoplustechnologies.co.uk"
                style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit", transition: "transform 0.2s" }}
                className="hover:-translate-y-0.5">
                <div style={{ background: ACC, borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail style={{ width: 18, height: 18, color: TP }} />
                </div>
                <div>
                  <p style={{ color: WH2, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>Email Us</p>
                  <p style={{ color: WH1, fontSize: 14, fontWeight: 700 }}>info@infoplustechnologies.co.uk</p>
                </div>
              </a>
              <div style={{ width: 1, height: 40, background: "rgba(13,17,45,0.10)" }} className="hidden sm:block" />
              <a href="tel:+447853045836"
                style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit", transition: "transform 0.2s" }}
                className="hover:-translate-y-0.5">
                <div style={{ background: "#F3F5FF", border: "1px solid rgba(13,17,45,0.10)", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone style={{ width: 18, height: 18, color: "#EB9B3D" }} />
                </div>
                <div>
                  <p style={{ color: WH2, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>Call Us</p>
                  <p style={{ color: WH1, fontSize: 14, fontWeight: 700 }}>+44 785 304 5836</p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ 15. Get in Touch — light ══ */}
      <section className="py-28" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <Eyebrow label="Get in Touch" />
              <h2 style={{ color: WH1, fontWeight: 700, fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 1.2, marginBottom: 16 }}>
                Let&rsquo;s Start a Project Together
              </h2>
              <p style={{ color: WH2, fontSize: 16, lineHeight: 1.75, marginBottom: 28 }}>
                We&rsquo;d love to hear from you. Fill out our form or drop us a message — we get back within one business day.
              </p>
              <div className="space-y-3 mb-6">
                {LOCATIONS.map(loc => (
                  <div key={loc.country}
                    style={{ ...lcard, padding: "16px 20px", display: "flex", gap: 14, alignItems: "flex-start", transition: "all 0.25s" }}
                    className="hover:-translate-y-0.5 hover:border-[rgba(235,155,61,0.30)] hover:shadow-[0_6px_20px_rgba(13,17,45,0.07)]">
                    <div style={{ background: ACC, borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin style={{ width: 18, height: 18, color: TP }} />
                    </div>
                    <div>
                      <p style={{ color: WH1, fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{loc.country}</p>
                      <p style={{ color: WH2, fontSize: 13, lineHeight: 1.6 }}>{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact#worldwide-presence"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#EB9B3D", fontWeight: 600, fontSize: 14, textDecoration: "none" }}
                className="hover:opacity-80">
                <MapPin style={{ width: 16, height: 16 }} />
                View All 17 Offices Worldwide
                <ChevronRight style={{ width: 16, height: 16 }} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <T2ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
}
