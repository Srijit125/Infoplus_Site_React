import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { useState, useEffect } from "react";
import {
  FileText,
  Briefcase,
  Shield,
  UserCheck,
  Mail,
  ExternalLink,
  AlertTriangle,
  Scale,
  RefreshCw,
  ChevronRight,
  CheckCircle2,
  Settings2,
  Globe,
  Phone,
  MapPin,
} from "lucide-react";

/* ── Sections ─────────────────────────────────────────────────── */
const SECTIONS = [
  {
    id: "welcome",
    icon: FileText,
    title: "Welcome to Infoplus Technologies UK Limited",
    accent: "#6128a6",
    paragraphs: [
      `These terms and conditions ("terms") explain the rules for using this website, operated by Infoplus Technologies UK Limited ("infoplus", "we", "us", "our"), a company registered in England and Wales with offices in Borehamwood, UK, and operations across 17 countries worldwide.`,
      `By browsing this website, filling in an enquiry form, or engaging with any of our services, you need to agree to these terms. If you don't agree with them, please don't use the website.`,
    ],
  },
  {
    id: "who-can-use",
    icon: UserCheck,
    title: "Who can use this site",
    accent: "#aa3bff",
    paragraphs: [
      "This website is intended for individuals who are 18 or older and who are representing themselves or a business in a professional capacity. If you're using this site on behalf of a company, you're confirming that you have the authority to do so.",
    ],
  },
  {
    id: "what-we-do",
    icon: Briefcase,
    title: "What we do",
    accent: "#f85d37",
    paragraphs: [
      "Infoplus provides IT and technology services, including but not limited to software development, testing, infrastructure management, SAP consulting and implementation, cyber security, cloud solutions, artificial intelligence services, and IT staffing; information only and does not constitute a binding offer. Actual scope of work, pricing, and deliverables for any project are agreed separately in a signed contract or statement of work between Infoplus and the client.",
    ],
  },
  {
    id: "using-website",
    icon: Settings2,
    title: "Using Our Website",
    accent: "#6128a6",
    paragraphs: [
      "You agree to use this website only for lawful purposes. You won't:",
    ],
    listItems: [
      "Attempt to gain unauthorised access to any part of our systems or networks.",
      "Use the site to distribute spam, malware, or harmful code.",
      "Copy, scrape, or republish content from this site without our permission.",
      "Impersonate Infoplus or misrepresent your connection to us.",
    ],
    closing: "We may suspend or restrict access to the site for anyone who breaches these rules.",
  },
  {
    id: "enquiries",
    icon: Mail,
    title: "Enquiries and Information you share with us",
    accent: "#aa3bff",
    paragraphs: [
      "When you submit an enquiry form or contact us through the website, you agree to provide accurate and up-to-date information. We'll use the details you share to respond to your enquiry and, where relevant, to get in touch about our services. How we handle your personal data is set out in our privacy policy.",
    ],
  },
  {
    id: "intellectual-property",
    icon: Shield,
    title: "Intellectual Property",
    accent: "#f85d37",
    paragraphs: [
      "All content on this website including text, graphics, logos, and design, is owned by Infoplus Technologies UK Limited or used under licence, unless stated otherwise. You may view and share pages for personal or business reference, but you can't reproduce, modify, or use our content commercially without written permission from us.",
    ],
  },
  {
    id: "links",
    icon: ExternalLink,
    title: "Links to other websites",
    accent: "#6128a6",
    paragraphs: [
      "Our website may contain links to third-party sites, tools, or resources. We don't control these external sites and aren't responsible for their content, accuracy, or privacy practices. Visiting them is at your own discretion.",
    ],
  },
  {
    id: "availability",
    icon: AlertTriangle,
    title: "No Guarantees on Website Availability",
    accent: "#aa3bff",
    paragraphs: [
      "We aim to keep this website accurate and running smoothly, but we don't guarantee it will always be available, error-free, or uninterrupted. We may update, suspend, or remove parts of the site at any time without prior notice.",
    ],
  },
  {
    id: "liability",
    icon: Scale,
    title: "Limitation of Liability",
    accent: "#f85d37",
    paragraphs: [
      "To the extent permitted by law, Infoplus won't be liable for any indirect, incidental, or consequential loss arising from your use of this website, including loss of data, business, or profits. This doesn't apply to formal service agreements, which are governed separately by their own contract terms.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to These Terms",
    accent: "#6128a6",
    paragraphs: [
      `We may update these terms from time to time to reflect changes in our services, legal requirements, or how the website works. The updated version will be posted here with a new "last updated" date. Continuing to use the site after changes are posted means you accept the revised Terms.`,
    ],
  },
  {
    id: "governing-law",
    icon: Globe,
    title: "Governing Law",
    accent: "#aa3bff",
    paragraphs: [
      "These terms are governed by the laws of England and Wales. Any disputes relating to this website will fall under the jurisdiction of the courts of England and Wales.",
    ],
  },
];

export default function TermsOfServicePage() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(s.id); },
        { rootMargin: "-15% 0px -75% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
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
        description="Please read these terms carefully before using our website or engaging with Infoplus Technologies for any services."
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 text-[12px] font-semibold">
            <FileText className="w-3.5 h-3.5 text-[#aa3bff]" />
            England &amp; Wales Law
          </span>
        </div>
      </PageHero>

      {/* ── TOC + Sections ───────────────────────────────────── */}
      <section className="bg-[#f8f5ff] relative -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-125 h-125 rounded-full bg-[#ecdaff] opacity-40 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none rounded-t-[3rem]"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

            {/* Sticky TOC */}
            <aside className="hidden lg:block lg:sticky lg:self-start" style={{ top: "100px" }}>
              <div
                className="bg-white border border-[#ecdaff] rounded-2xl shadow-[0_4px_24px_rgba(97,40,166,0.07)] flex flex-col overflow-hidden"
                style={{ maxHeight: "calc(100vh - 120px)" }}
              >
                <div className="shrink-0 px-5 pt-5 pb-4 border-b border-[#ecdaff]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#6128a6]">Contents</p>
                </div>
                <ul className="overflow-y-auto px-3 py-3 space-y-0.5">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] text-[#0d0517] transition-all duration-200 ${activeId === s.id ? "font-semibold" : "font-medium"}`}
                        style={{ backgroundColor: activeId === s.id ? `${s.accent}12` : undefined }}
                      >
                        <span className="flex-1 leading-snug">{s.title}</span>
                        {activeId === s.id && (
                          <ChevronRight className="w-3 h-3 shrink-0" style={{ color: s.accent }} />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Section cards */}
            <div className="space-y-6">
              {SECTIONS.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="group bg-white border border-[#e8e0f7] rounded-2xl p-7 hover:border-[#6128a6]/30 hover:shadow-[0_8px_40px_rgba(97,40,166,0.09)] transition-all duration-300 scroll-mt-25 relative overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full" style={{ backgroundColor: s.accent }} />

                  {/* Header */}
                  <div className="flex items-center gap-3 pl-4 mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${s.accent}15`, color: s.accent }}
                    >
                      <s.icon className="w-4.5 h-4.5" />
                    </div>
                    <h2 className="text-[17px] font-bold text-[#0d0517] leading-tight mb-0">{s.title}</h2>
                  </div>

                  {/* Body */}
                  <div className="pl-4 space-y-3">
                    {s.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-[14.5px] text-[#555] leading-relaxed">{p}</p>
                    ))}
                    {"listItems" in s && s.listItems && (
                      <ul className="space-y-2">
                        {s.listItems.map((item, li) => (
                          <li key={li} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: s.accent }} />
                            <span className="text-[14.5px] text-[#555] leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {"closing" in s && s.closing && (
                      <p className="text-[14.5px] text-[#555] leading-relaxed">{s.closing}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Get in Touch ─────────────────────────────────────── */}
      <section className="py-20 bg-white relative border-t border-[#e8e0f7]">
        <div className="absolute top-0 left-0 w-100 h-100 rounded-full bg-[#ecdaff] opacity-30 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #6128a6 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-4">
                Get in Touch
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0d0517] mb-4">
                Questions about these terms?
              </h2>
              <p className="text-[15px] text-[#555]">
                If you have any questions about these Terms, you can reach us at:
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div className="bg-[#f8f5ff] border border-[#e8e0f7] rounded-2xl p-8 shadow-[0_4px_24px_rgba(97,40,166,0.06)]">
              <p className="text-[14.5px] font-bold text-[#0d0517] mb-1">Infoplus Technologies UK Limited</p>
              <div className="flex items-start gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#6128a6]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#6128a6]" />
                </div>
                <span className="text-[14px] text-[#555] leading-relaxed pt-1.5">Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW</span>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:contact@infoplusltd.co.uk"
                  className="flex items-center gap-3 text-[14.5px] text-[#555] hover:text-[#6128a6] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#6128a6]/10 flex items-center justify-center shrink-0 group-hover:bg-[#6128a6]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#6128a6]" />
                  </div>
                  <span>contact@infoplusltd.co.uk</span>
                </a>
                <div className="flex items-center gap-3 text-[14.5px] text-[#555]">
                  <div className="w-9 h-9 rounded-xl bg-[#6128a6]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#6128a6]" />
                  </div>
                  <span>+44 208207 3474</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#e8e0f7]">
                <p className="text-[14px] text-[#888]">We try to respond to all enquiries promptly.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
