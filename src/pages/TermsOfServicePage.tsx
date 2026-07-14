import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { useState, useEffect } from "react";
import {
  FileText,
  Briefcase,
  Shield,
  UserCheck,
  CreditCard,
  EyeOff,
  AlertTriangle,
  Power,
  Scale,
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  Info,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── At a glance ─────────────────────────────────────────────── */
const HIGHLIGHTS = [
  {
    icon: Scale,
    label: "Governed by English Law",
    sub: "England & Wales jurisdiction",
    color: "#6128a6",
  },
  {
    icon: Lock,
    label: "5-Year Confidentiality",
    sub: "Survives contract termination",
    color: "#aa3bff",
  },
  {
    icon: Shield,
    label: "Liability Capped",
    sub: "12-month fee limit applies",
    color: "#f85d37",
  },
  {
    icon: RefreshCw,
    label: "30 Days Notice",
    sub: "Standard termination period",
    color: "#6128a6",
  },
];

/* ── Sections ─────────────────────────────────────────────────── */
const SECTIONS = [
  {
    id: "acceptance",
    num: "01",
    icon: FileText,
    title: "Acceptance of Terms",
    accent: "#6128a6",
    intro:
      "By accessing or using the Infoplus Technologies website, engaging our services, or entering into a contract with us, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations.",
    bullets: [
      "These terms apply to all visitors, clients, and business partners",
      "Use of our services constitutes your acceptance of these terms",
      "If acting on behalf of an organisation, you confirm you have authority to bind it",
      "Supplemental terms may apply to specific services and will be communicated in writing",
    ],
    highlight:
      "If you do not agree to these terms, please discontinue use of our website and services immediately.",
  },
  {
    id: "services",
    num: "02",
    icon: Briefcase,
    title: "Our Services",
    accent: "#aa3bff",
    intro:
      "Infoplus Technologies Ltd provides a comprehensive suite of information technology services. Specific scope, deliverables, timelines, and commercial terms for each engagement are defined in individual contracts or Statements of Work (SOW).",
    bullets: [
      "Software Development web, mobile, AR&VR, and IoT solutions",
      "Artificial Intelligence & Machine Learning solutions",
      "Testing & Quality Assurance services",
      "Infrastructure Management & Cloud Portfolio",
      "SAP Consulting & Implementation services",
      "Cyber Security solutions",
      "IT Staffing, Consulting & Umbrella services",
      "Enterprise Transformation & Everything Data",
    ],
    highlight: null,
  },
  {
    id: "intellectual-property",
    num: "03",
    icon: Shield,
    title: "Intellectual Property Rights",
    accent: "#6128a6",
    intro:
      "All content on this website including text, graphics, logos, icons, images, and software is the exclusive property of Infoplus Technologies Ltd or its content suppliers, protected by applicable copyright, trademark, and intellectual property laws.",
    bullets: [
      "You may not reproduce or distribute content without prior written permission",
      "Client deliverables are governed by IP provisions in the relevant contract",
      "Pre-existing IP owned by either party remains that party's property",
      "Jointly developed IP will be addressed in the specific engagement contract",
      "Infoplus names, logos, and product names are registered or unregistered trademarks",
    ],
    highlight:
      "Custom work products delivered to clients typically transfer ownership upon full payment, as detailed in each engagement contract.",
  },
  {
    id: "obligations",
    num: "04",
    icon: UserCheck,
    title: "Client Obligations",
    accent: "#aa3bff",
    intro:
      "To enable us to deliver our services effectively, clients agree to cooperate with Infoplus Technologies and fulfil the following obligations throughout the engagement:",
    bullets: [
      "Provide accurate, complete, and timely information required for service delivery",
      "Designate a point of contact with appropriate authority to make decisions",
      "Ensure timely access to systems, environments, and personnel as required",
      "Not use our services for any unlawful, harmful, or fraudulent purpose",
      "Maintain confidentiality of any credentials or access provided by Infoplus",
      "Notify us promptly of any change in requirements that may affect delivery",
    ],
    highlight: null,
  },
  {
    id: "payment",
    num: "05",
    icon: CreditCard,
    title: "Payment Terms",
    accent: "#f85d37",
    intro:
      "Payment terms are agreed upon in individual contracts. Unless otherwise specified in a signed written agreement, the following default terms apply:",
    bullets: [
      "Invoices are due and payable within 30 days of the invoice date",
      "Late payments may attract interest at 8% above the Bank of England base rate",
      "We reserve the right to suspend services for accounts overdue by more than 14 days",
      "Disputed invoices must be raised in writing within 7 days of receipt",
      "All fees are exclusive of VAT, charged at the applicable rate",
    ],
    highlight: null,
  },
  {
    id: "confidentiality",
    num: "06",
    icon: EyeOff,
    title: "Confidentiality",
    accent: "#6128a6",
    intro:
      "Both parties acknowledge that during our engagement they may access confidential information belonging to the other party. Each party agrees to protect such information with the highest diligence:",
    bullets: [
      "Hold all confidential information in strict confidence",
      "Not disclose confidential information to third parties without prior written consent",
      "Use confidential information solely for the purposes of the engagement",
      "Apply at least the same standard of protection used for its own confidential information",
      "Notify the other party promptly of any actual or suspected breach",
    ],
    highlight:
      "Confidentiality obligations survive termination of the engagement for a period of five (5) years.",
  },
  {
    id: "liability",
    num: "07",
    icon: AlertTriangle,
    title: "Limitation of Liability",
    accent: "#aa3bff",
    intro:
      "To the maximum extent permitted by applicable law, Infoplus Technologies limits its liability as follows. These limitations reflect a fair allocation of risk between the parties.",
    bullets: [
      "We are not liable for any indirect, incidental, consequential, or punitive damages",
      "Our total aggregate liability shall not exceed fees paid in the preceding 12 months",
      "We do not guarantee uninterrupted or completely error-free service",
      "We are not responsible for third-party products, services, or linked websites",
      "Force majeure events including pandemics and natural disasters are excluded",
    ],
    highlight:
      "Nothing in these terms excludes liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.",
  },
  {
    id: "termination",
    num: "08",
    icon: Power,
    title: "Termination",
    accent: "#f85d37",
    intro:
      "Either party may terminate a service engagement in accordance with the provisions of the relevant contract. In the absence of specific contractual provisions, the following defaults apply:",
    bullets: [
      "Either party may terminate with 30 days written notice",
      "Immediate termination is permitted for material breach unremedied within 14 days of notice",
      "Outstanding payments become immediately due upon termination",
      "We may suspend or terminate access for failure to comply with these terms",
      "Provisions relating to IP, confidentiality, and liability survive termination",
    ],
    highlight: null,
  },
  {
    id: "governing-law",
    num: "09",
    icon: Scale,
    title: "Governing Law & Dispute Resolution",
    accent: "#6128a6",
    intro:
      "These Terms of Service and any disputes or claims arising from or in connection with them are governed exclusively by the laws of England and Wales.",
    bullets: [
      "The courts of England and Wales have exclusive jurisdiction over all disputes",
      "Parties agree to attempt good-faith negotiation before commencing legal proceedings",
      "Mediation may be used as an alternative and preferred dispute resolution mechanism",
      "These terms do not affect your statutory rights under applicable consumer protection law",
    ],
    highlight:
      "Registered Office: Infoplus Technologies Ltd, United Kingdom. Company registered in England and Wales.",
  },
  {
    id: "changes",
    num: "10",
    icon: RefreshCw,
    title: "Changes to Terms",
    accent: "#aa3bff",
    intro:
      "Infoplus Technologies reserves the right to modify these Terms of Service at any time. We will provide advance notice of material changes through the following channels:",
    bullets: [
      "Posting the updated terms on this page with the effective revision date",
      "Sending written notice to clients with active engagements via email",
      "Continued use of our services after changes constitutes acceptance",
      "We recommend reviewing this page periodically for any updates",
    ],
    highlight: null,
  },
];

export default function TermsOfServicePage() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -75% 0px", threshold: 0 },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <PageMeta
        title="Terms of Service"
        description="Read the Infoplus Technologies UK Terms of Service to understand the terms and conditions governing the use of our website and services."
        path="/terms-of-service"
        noIndex
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        badge="LEGAL"
        title="Terms of Service"
        description="Please read these Terms of Service carefully before using our website or engaging Infoplus Technologies for any services. These terms govern your relationship with us."
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 text-[12px] font-semibold">
            <FileText className="w-3.5 h-3.5 text-[#aa3bff]" />
            Effective Date: June 2025
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f85d37]/10 border border-[#f85d37]/30 text-[#f85d37] text-[12px] font-semibold">
            <Scale className="w-3.5 h-3.5" />
            England & Wales Law
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
                Key things to know
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {HIGHLIGHTS.map((h, i) => (
              <ScrollReveal key={h.label} variant="card" delay={i * 80}>
                <div
                  className="group bg-white border border-[#ecdaff] rounded-2xl p-6 text-center hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] transition-all duration-300 h-full"
                >
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

          {/* Info banner */}
          <ScrollReveal direction="up" delay={80}>
            <div className="flex items-start gap-3 bg-[#6128a6]/06 border border-[#6128a6]/15 rounded-2xl px-5 py-4 max-w-3xl mx-auto">
              <Info className="w-5 h-5 text-[#6128a6] shrink-0 mt-0.5" />
              <p className="text-[14px] text-[#0d0517]/65 leading-relaxed">
                These terms, together with any applicable Statement of Work or engagement contract, constitute the
                entire agreement between you and Infoplus Technologies Ltd. In case of conflict, the specific
                contract terms take precedence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Full Sections ────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f5ff] relative">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">

            {/* Sticky TOC */}
            <aside className="lg:sticky lg:top-[100px] lg:self-start hidden lg:block">
              <div className="bg-white border border-[#ecdaff] rounded-2xl shadow-[0_4px_24px_rgba(97,40,166,0.07)] overflow-hidden flex flex-col" style={{ maxHeight: "calc(100vh - 120px)" }}>
                <div className="px-5 pt-5 pb-3 shrink-0 border-b border-[#ecdaff]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#6128a6]">
                    Contents
                  </p>
                </div>
                <div className="overflow-y-auto px-3 py-3">
                  <ul className="space-y-0.5">
                    {SECTIONS.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className={[
                            "flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] transition-all duration-200",
                            activeId === s.id ? "font-semibold" : "hover:bg-[#6128a6]/06",
                          ].join(" ")}
                          style={{
                            color: activeId === s.id ? s.accent : "#444",
                            backgroundColor: activeId === s.id ? `${s.accent}12` : undefined,
                          }}
                        >
                          <span
                            className="text-[10px] font-black w-5 shrink-0"
                            style={{ color: s.accent }}
                          >
                            {s.num}
                          </span>
                          <span className="leading-snug flex-1">{s.title}</span>
                          {activeId === s.id && (
                            <ChevronRight className="w-3 h-3 shrink-0" style={{ color: s.accent }} />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-8">
              {SECTIONS.map((s, i) => (
                <ScrollReveal key={s.id} direction="up" delay={i * 40}>
                  <div
                    id={s.id}
                    className="group bg-white border border-[#ecdaff] rounded-2xl p-7 hover:border-[#6128a6]/30 hover:shadow-[0_8px_40px_rgba(97,40,166,0.09)] transition-all duration-400 scroll-mt-25 relative overflow-hidden"
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
                      style={{ backgroundColor: s.accent }}
                    />

                    {/* Section header */}
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

                    {/* Intro */}
                    <p className="text-[15px] text-[#0d0517]/65 leading-relaxed mb-4 pl-4">
                      {s.intro}
                    </p>

                    {/* Bullets */}
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
                            <span className="text-[14.5px] text-[#0d0517]/65 leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Highlight */}
                    {s.highlight && (
                      <div
                        className="flex items-start gap-2.5 rounded-xl px-4 py-3 ml-4"
                        style={{ backgroundColor: `${s.accent}08`, borderLeft: `3px solid ${s.accent}50` }}
                      >
                        <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: s.accent }} />
                        <p className="text-[14px] leading-relaxed" style={{ color: `${s.accent}cc` }}>
                          {s.highlight}
                        </p>
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
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#ecdaff]/60 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#1e0a38] via-[#381f55] to-[#6128a6] rounded-3xl p-10 md:p-14 text-center overflow-hidden shadow-[0_32px_80px_rgba(97,40,166,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-72 h-72 rounded-full bg-[#aa3bff] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-60 h-60 rounded-full bg-[#f85d37] opacity-12 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Questions?
              </span>
              <h2 className="relative z-10 text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white mb-4">
                Have questions about these terms?
              </h2>
              <p className="relative z-10 text-[15px] text-white/60 mb-8 max-w-xl mx-auto">
                Our team is happy to clarify any aspect of these terms before you engage with us.
                We believe in full transparency with all our clients and partners.
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
                  to="/privacy-policy"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-[14px] transition-all duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
