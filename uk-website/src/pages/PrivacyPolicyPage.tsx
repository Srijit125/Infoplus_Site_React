import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  Shield,
  Database,
  Settings2,
  Scale,
  Globe,
  UserCheck,
  Lock,
  Clock,
  Cookie,
  Mail,
  ChevronRight,
  CheckCircle2,
  Info,
  Eye,
  Trash2,
  Download,
  Ban,
  Edit3,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Summary highlights ──────────────────────────────────────── */
const HIGHLIGHTS = [
  {
    icon: Shield,
    label: "GDPR Compliant",
    sub: "UK & EU data protection law",
    color: "#6128a6",
  },
  {
    icon: Lock,
    label: "Secure Processing",
    sub: "Encrypted, access-controlled",
    color: "#aa3bff",
  },
  {
    icon: Globe,
    label: "International Transfers",
    sub: "Europe & India offices",
    color: "#f85d37",
  },
  {
    icon: UserCheck,
    label: "Your Rights",
    sub: "Access, erase, port, object",
    color: "#6128a6",
  },
];

/* ── GDPR Rights ─────────────────────────────────────────────── */
const GDPR_RIGHTS = [
  { icon: Eye,       right: "Right to Access",       desc: "Request a copy of the personal data we hold about you." },
  { icon: Edit3,     right: "Right to Rectification", desc: "Have inaccurate or incomplete data corrected." },
  { icon: Trash2,    right: "Right to Erasure",       desc: "Request deletion of your data where no longer necessary." },
  { icon: Ban,       right: "Right to Restriction",   desc: "Restrict how we process your data in certain circumstances." },
  { icon: Download,  right: "Right to Portability",   desc: "Receive your data in a structured, machine-readable format." },
  { icon: AlertCircle, right: "Right to Object",      desc: "Object to processing based on legitimate interests or direct marketing." },
];

/* ── Sections ─────────────────────────────────────────────────── */
const SECTIONS = [
  {
    id: "introduction",
    num: "01",
    icon: Shield,
    title: "Introduction & Data Controller",
    accent: "#6128a6",
    intro:
      "Infoplus Technologies Ltd is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website or engage our services. We act as Data Controller for personal data processed in connection with our business activities.",
    bullets: [
      "Data Controller: Infoplus Technologies Ltd, registered in England and Wales",
      "We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018",
      "This policy applies to all personal data collected through our website, services, and communications",
      "We may update this policy periodically — the revision date at the top reflects the latest version",
    ],
    highlight: null,
  },
  {
    id: "data-collected",
    num: "02",
    icon: Database,
    title: "Information We Collect",
    accent: "#aa3bff",
    intro:
      "We collect personal data through various interactions with our website and during service engagements. The categories of data we may collect include:",
    bullets: [
      "Identity Data — name, username, title, company name",
      "Contact Data — email address, phone number, postal address",
      "Professional Data — job title, skills, employment history (for staffing services)",
      "Technical Data — IP address, browser type, device identifiers, cookies",
      "Usage Data — pages visited, time on site, click patterns, referral sources",
      "Communications Data — emails, enquiry forms, and correspondence with us",
      "Financial Data — billing information, payment records (processed securely via third parties)",
      "Recruitment Data — CVs, application forms, and right-to-work documentation",
    ],
    highlight:
      "We only collect data that is necessary for the specified purpose. We do not sell personal data to third parties.",
  },
  {
    id: "how-we-use",
    num: "03",
    icon: Settings2,
    title: "How We Use Your Data",
    accent: "#6128a6",
    intro:
      "We use personal data for specific, legitimate purposes. We do not use your data in ways that are incompatible with those purposes. Our primary uses include:",
    bullets: [
      "Providing and managing our IT services and staffing engagements",
      "Responding to enquiries, proposals, and communications",
      "Processing applications for employment or contractor placements",
      "Sending service updates, invoices, and contract-related notifications",
      "Improving our website functionality and user experience via analytics",
      "Complying with legal and regulatory obligations",
      "Preventing fraud and ensuring platform security",
      "Marketing our services to business contacts where we have a legitimate interest or consent",
    ],
    highlight: null,
  },
  {
    id: "legal-basis",
    num: "04",
    icon: Scale,
    title: "Legal Basis for Processing",
    accent: "#aa3bff",
    intro:
      "Under UK GDPR, we must have a lawful basis for every processing activity. The basis we rely on depends on the specific purpose:",
    bullets: [
      "Contract Performance — processing necessary to fulfil our service contracts",
      "Legitimate Interests — business analytics, security, and B2B marketing where balanced against your rights",
      "Legal Obligation — complying with tax, employment, and regulatory requirements",
      "Consent — optional marketing emails, non-essential cookies, and recruitment processing",
      "Vital Interests — in emergency situations to protect life",
    ],
    highlight:
      "Where we rely on consent, you have the right to withdraw it at any time. Withdrawal does not affect the lawfulness of processing prior to withdrawal.",
  },
  {
    id: "sharing",
    num: "05",
    icon: Globe,
    title: "Data Sharing & International Transfers",
    accent: "#f85d37",
    intro:
      "We do not sell your personal data. We may share it with carefully selected third parties for the purposes described in this policy. All sharing is governed by appropriate data protection agreements.",
    bullets: [
      "Service Providers — IT infrastructure, hosting, analytics, and CRM platforms",
      "Staffing Clients — candidate data shared with client organisations for placement purposes (with consent)",
      "Professional Advisors — accountants, legal counsel, and auditors under strict confidentiality",
      "Regulatory Authorities — HMRC, ICO, or other bodies where legally required",
      "Business Transfers — in connection with a merger, acquisition, or asset sale",
    ],
    highlight:
      "Data may be transferred to our offices in India under appropriate international transfer mechanisms (Standard Contractual Clauses or adequacy decisions).",
  },
  {
    id: "security",
    num: "07",
    icon: Lock,
    title: "Data Security",
    accent: "#6128a6",
    intro:
      "We implement robust technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or disclosure. Our security framework includes:",
    bullets: [
      "TLS/SSL encryption for all data in transit",
      "Access controls and role-based permissions for internal systems",
      "Regular security audits and penetration testing",
      "Employee training on data protection and information security",
      "Incident response procedures and breach notification protocols",
      "Secure data disposal and destruction policies",
    ],
    highlight:
      "Despite our best efforts, no transmission over the internet is 100% secure. Please notify us immediately at uk@infoplusltd.co.uk if you suspect any breach.",
  },
  {
    id: "retention",
    num: "08",
    icon: Clock,
    title: "Data Retention",
    accent: "#aa3bff",
    intro:
      "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, and reporting obligations:",
    bullets: [
      "Client data — 7 years after contract end (tax and legal compliance)",
      "Candidate/recruitment data — 1 year if no placement, 7 years if placed",
      "Website analytics data — 26 months (anonymised after 6 months)",
      "Marketing consent records — until consent is withdrawn, plus 3 years",
      "Security logs — 12 months",
      "CCTV footage (office premises) — 30 days unless required for an incident",
    ],
    highlight: null,
  },
  {
    id: "cookies",
    num: "09",
    icon: Cookie,
    title: "Cookies & Tracking Technologies",
    accent: "#f85d37",
    intro:
      "Our website uses cookies and similar tracking technologies to enhance your experience and analyse traffic. For full details on the types of cookies we use and your choices:",
    bullets: [
      "Strictly necessary cookies are always active and cannot be disabled",
      "Analytical and performance cookies help us understand how visitors use the site",
      "Functionality cookies remember your preferences and personalise content",
      "Targeting cookies are used to deliver relevant advertising",
    ],
    highlight: null,
    cookieLink: true,
  },
  {
    id: "changes",
    num: "10",
    icon: Settings2,
    title: "Changes to This Policy",
    accent: "#6128a6",
    intro:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will provide notice of material changes:",
    bullets: [
      "The effective date at the top of this page will be updated",
      "For significant changes, we will notify you by email or prominent website notice",
      "Continued use of our services after the effective date constitutes acceptance",
      "We encourage you to review this policy periodically",
    ],
    highlight: null,
  },
  {
    id: "contact",
    num: "11",
    icon: Mail,
    title: "Contact, Complaints & DPO",
    accent: "#aa3bff",
    intro:
      "If you have any questions about this Privacy Policy, wish to exercise your rights, or have a complaint about how we handle your data, please contact us:",
    bullets: [
      "Email: uk@infoplusltd.co.uk",
      "Phone: +44 20 8207 3474",
      "Post: Infoplus Technologies Ltd, United Kingdom",
      "We aim to respond to all requests within 30 days",
      "You also have the right to lodge a complaint with the ICO at ico.org.uk",
    ],
    highlight:
      "For data protection enquiries, please mark your communication 'Data Protection' to ensure it reaches the appropriate team member.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        badge="LEGAL"
        title="Privacy Policy"
        description="Infoplus Technologies Ltd is committed to protecting your privacy and personal data. This policy explains what data we collect, how we use it, and your rights under UK GDPR."
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 text-[12px] font-semibold">
            <Shield className="w-3.5 h-3.5 text-[#aa3bff]" />
            Effective Date: June 2025
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f85d37]/10 border border-[#f85d37]/30 text-[#f85d37] text-[12px] font-semibold">
            <UserCheck className="w-3.5 h-3.5" />
            UK GDPR Compliant
          </span>
        </div>
      </PageHero>

      {/* ── At a Glance ──────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f5ff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ecdaff] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-4">
                At a Glance
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0d0517]">
                Key privacy commitments
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {HIGHLIGHTS.map((h, i) => (
              <ScrollReveal key={h.label} variant="card" delay={i * 80}>
                <div className="group bg-white border border-[#ecdaff] rounded-2xl p-6 text-center hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] transition-all duration-300 h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${h.color}15`, color: h.color }}
                  >
                    <h.icon className="w-5 h-5" />
                  </div>
                  <p className="text-[14px] font-bold text-[#0d0517] mb-1">{h.label}</p>
                  <p className="text-[12px] text-[#0d0517]/50">{h.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={80}>
            <div className="flex items-start gap-3 bg-[#6128a6]/06 border border-[#6128a6]/15 rounded-2xl px-5 py-4 max-w-3xl mx-auto">
              <Info className="w-5 h-5 text-[#6128a6] shrink-0 mt-0.5" />
              <p className="text-[14px] text-[#0d0517]/65 leading-relaxed">
                We never sell your personal data. We process only what is necessary and hold it only as long as
                legally required. You can exercise your rights at any time by contacting{" "}
                <a href="mailto:uk@infoplusltd.co.uk" className="text-[#6128a6] hover:underline">
                  uk@infoplusltd.co.uk
                </a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GDPR Rights spotlight ────────────────────────────── */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#6128a6] opacity-20 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Section 06
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                Your&nbsp;
                <span className="text-[#aa3bff]">GDPR Rights</span>
              </h2>
              <p className="text-[15px] text-white/50 mt-4 max-w-2xl mx-auto">
                Under UK GDPR you have the following rights in respect of the personal data we hold about you.
                All requests are free of charge and will be actioned within 30 days.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GDPR_RIGHTS.map((r, i) => (
              <ScrollReveal key={r.right} variant="card" delay={i * 80}>
                <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#aa3bff]/35 hover:shadow-[0_8px_32px_rgba(170,59,255,0.12)] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#aa3bff]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <r.icon className="w-5 h-5 text-[#aa3bff]" />
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-2">{r.right}</h3>
                  <p className="text-[13px] text-white/55 leading-relaxed">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-10 text-center">
              <p className="text-[13px] text-white/40 mb-4">
                To exercise any of these rights, contact us at
              </p>
              <a
                href="mailto:uk@infoplusltd.co.uk"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#aa3bff]/15 border border-[#aa3bff]/30 text-[#aa3bff] text-[13px] font-semibold hover:bg-[#aa3bff]/25 transition-colors"
              >
                <Mail className="w-4 h-4" />
                uk@infoplusltd.co.uk
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Full Sections ────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f5ff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">

            {/* Sticky TOC */}
            <aside className="lg:sticky lg:top-[100px] lg:self-start hidden lg:block">
              <ScrollReveal direction="left">
                <div className="bg-white border border-[#ecdaff] rounded-2xl p-5 shadow-[0_4px_24px_rgba(97,40,166,0.07)]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#6128a6] mb-4">
                    Contents
                  </p>
                  <ul className="space-y-1">
                    {SECTIONS.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] text-[#0d0517]/55 hover:text-[#6128a6] hover:bg-[#6128a6]/06 transition-all duration-200 group"
                        >
                          <span className="text-[10px] font-black w-5 shrink-0" style={{ color: s.accent }}>
                            {s.num}
                          </span>
                          <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                            {s.title}
                          </span>
                        </a>
                      </li>
                    ))}

                    {/* GDPR link */}
                    <li>
                      <a
                        href="#gdpr-rights"
                        className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] text-[#6128a6] font-semibold hover:bg-[#6128a6]/06 transition-all duration-200"
                      >
                        <span className="text-[10px] font-black w-5 shrink-0 text-[#aa3bff]">06</span>
                        Your GDPR Rights ↑
                      </a>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </aside>

            {/* Content */}
            <div className="space-y-8">
              {SECTIONS.map((s, i) => (
                <ScrollReveal key={s.id} direction="up" delay={i * 40}>
                  <div
                    id={s.id}
                    className="group bg-white border border-[#ecdaff] rounded-2xl p-7 hover:border-[#6128a6]/30 hover:shadow-[0_8px_40px_rgba(97,40,166,0.09)] transition-all duration-400 scroll-mt-[100px] relative overflow-hidden"
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
                      style={{ backgroundColor: s.accent }}
                    />

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 pl-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${s.accent}15`, color: s.accent }}
                      >
                        <s.icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black tracking-widest" style={{ color: s.accent }}>
                          {s.num}
                        </span>
                        <h2 className="text-[17px] font-bold text-[#0d0517] leading-tight">{s.title}</h2>
                      </div>
                    </div>

                    <p className="text-[14px] text-[#0d0517]/65 leading-relaxed mb-4 pl-4">{s.intro}</p>

                    {s.bullets.length > 0 && (
                      <ul className="space-y-2 pl-4 mb-4">
                        {s.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="flex items-start gap-2.5"
                            style={{ animation: `revealFade 300ms ease ${bi * 40 + 100}ms both` }}
                          >
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: s.accent }}
                            />
                            <span className="text-[13.5px] text-[#0d0517]/65 leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {s.highlight && (
                      <div
                        className="flex items-start gap-2.5 rounded-xl px-4 py-3 ml-4"
                        style={{ backgroundColor: `${s.accent}08`, borderLeft: `3px solid ${s.accent}50` }}
                      >
                        <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: s.accent }} />
                        <p className="text-[13px] leading-relaxed" style={{ color: `${s.accent}cc` }}>
                          {s.highlight}
                        </p>
                      </div>
                    )}

                    {/* Cookie policy link for section 09 */}
                    {"cookieLink" in s && (s as { cookieLink?: boolean }).cookieLink && (
                      <div className="ml-4 mt-4">
                        <Link
                          to="/cookie-policy"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f85d37]/08 border border-[#f85d37]/25 text-[#f85d37] text-[13px] font-semibold hover:bg-[#f85d37]/14 transition-colors"
                        >
                          <Cookie className="w-3.5 h-3.5" />
                          View Full Cookie Policy
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-40 blur-[130px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#1e0a38] via-[#381f55] to-[#6128a6] rounded-3xl p-10 md:p-14 text-center overflow-hidden shadow-[0_32px_80px_rgba(97,40,166,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-72 h-72 rounded-full bg-[#aa3bff] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-60 h-60 rounded-full bg-[#f85d37] opacity-12 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Your Privacy Matters
              </span>
              <h2 className="relative z-10 text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white mb-4">
                Questions about your data?
              </h2>
              <p className="relative z-10 text-[15px] text-white/60 mb-8 max-w-xl mx-auto">
                Contact our team for any privacy-related enquiries, data subject access requests,
                or to lodge a complaint. We aim to respond within 30 days.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[14px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                >
                  Contact Us
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/terms-of-service"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-[14px] transition-all duration-200"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
