import { PageMeta } from "../components/shared/PageMeta";
import { useState, useRef } from "react";
import { PageHero } from "../components/shared/PageHero";
import {
  MapPin, Mail, Phone, Clock, Globe2, Shield,
  CheckCircle2, ArrowRight, Send, ChevronDown,
} from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const OFFICES = [
  { flag: "🇬🇧", region: "United Kingdom", city: "London (HQ)", address: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW", mapUrl: "https://maps.google.com/?q=Unit+6+Capital+Business+Park+Manor+Way+Borehamwood+WD6+1GW" },
  { flag: "🇬🇧", region: "United Kingdom", city: "Manchester", address: "3 Piccadilly Place, Manchester M1 3BN", mapUrl: "https://maps.google.com/?q=3+Piccadilly+Place+Manchester+M1+3BN" },
  { flag: "🇬🇧", region: "United Kingdom", city: "Birmingham", address: "Colmore Building, 20 Colmore Circus, Birmingham B4 6AT", mapUrl: "https://maps.google.com/?q=Colmore+Building+20+Colmore+Circus+Birmingham+B4+6AT" },
  { flag: "🇩🇪", region: "Germany", city: "Frankfurt", address: "Tower 185, Friedrich-Ebert-Anlage 35-37, Frankfurt 60327", mapUrl: "https://maps.google.com/?q=Tower+185+Friedrich-Ebert-Anlage+35-37+Frankfurt+60327" },
  { flag: "🇫🇷", region: "France", city: "Paris", address: "25 Rue de Ponthieu, 75008 Paris", mapUrl: "https://maps.google.com/?q=25+Rue+de+Ponthieu+75008+Paris+France" },
  { flag: "🇳🇱", region: "Netherlands", city: "Amsterdam", address: "World Trade Center, Strawinskylaan 77, 1077 XW Amsterdam", mapUrl: "https://maps.google.com/?q=World+Trade+Center+Amsterdam+Strawinskylaan+77" },
  { flag: "🇺🇸", region: "USA", city: "New York", address: "One World Trade Center, 285 Fulton St, New York NY 10007", mapUrl: "https://maps.google.com/?q=One+World+Trade+Center+285+Fulton+St+New+York+NY+10007" },
  { flag: "🇺🇸", region: "USA", city: "Chicago", address: "200 W Madison St, Suite 2100, Chicago IL 60606", mapUrl: "https://maps.google.com/?q=200+W+Madison+St+Chicago+IL+60606" },
  { flag: "🇺🇸", region: "USA", city: "San Francisco", address: "One Market Plaza, Suite 3600, San Francisco CA 94105", mapUrl: "https://maps.google.com/?q=One+Market+Plaza+San+Francisco+CA+94105" },
  { flag: "🇨🇦", region: "Canada", city: "Toronto", address: "150 King Street West, Suite 2500, Toronto ON M5H 1J9", mapUrl: "https://maps.google.com/?q=150+King+Street+West+Toronto+ON+M5H+1J9" },
  { flag: "🇦🇺", region: "Australia", city: "Sydney", address: "1 Martin Place, Level 12, Sydney NSW 2000", mapUrl: "https://maps.google.com/?q=1+Martin+Place+Sydney+NSW+2000" },
  { flag: "🇸🇬", region: "Singapore", city: "Singapore", address: "1 Raffles Place, #20-61 One Raffles Place, Singapore 048616", mapUrl: "https://maps.google.com/?q=1+Raffles+Place+Singapore+048616" },
  { flag: "🇯🇵", region: "Japan", city: "Tokyo", address: "Marunouchi Building, 2-4-1 Marunouchi, Chiyoda-ku, Tokyo 100-6390", mapUrl: "https://maps.google.com/?q=Marunouchi+Building+2-4-1+Marunouchi+Chiyoda-ku+Tokyo" },
  { flag: "🇮🇳", region: "India", city: "Chennai", address: "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai 600096", mapUrl: "https://maps.google.com/?q=99+Greeta+Tower+Perungudi+Chennai+600096" },
  { flag: "🇮🇳", region: "India", city: "Bangalore", address: "Prestige Towers, 99/100 Residency Road, Bangalore 560025", mapUrl: "https://maps.google.com/?q=Prestige+Towers+99+Residency+Road+Bangalore+560025" },
  { flag: "🇮🇳", region: "India", city: "Mumbai", address: "One BKC, Plot C-66, G Block, Bandra Kurla Complex, Mumbai 400051", mapUrl: "https://maps.google.com/?q=One+BKC+Plot+C-66+Bandra+Kurla+Complex+Mumbai+400051" },
  { flag: "🇦🇪", region: "UAE", city: "Dubai", address: "The Offices 4, One Central, World Trade Centre District, Dubai", mapUrl: "https://maps.google.com/?q=One+Central+World+Trade+Centre+Dubai+UAE" },
];

const FAQS = [
  {
    q: "What services does Infoplus Technologies specialise in?",
    a: "We specialise in Artificial Intelligence, IT Services, Master Data Management, Cybersecurity, SAP Consulting, Cloud Computing, Digital Transformation, and Staffing & Consulting. Our multidisciplinary teams work across industries to deliver tailored technology solutions that drive measurable business outcomes.",
  },
  {
    q: "How long does a typical IT project take from start to finish?",
    a: "Project timelines vary based on scope and complexity. A discovery and scoping engagement typically takes 2–4 weeks. Implementation projects range from 6 weeks for targeted solutions to 12+ months for large-scale enterprise programmes. We provide a detailed project plan with milestones at the outset of every engagement.",
  },
  {
    q: "Do you provide ongoing support and maintenance after project delivery?",
    a: "Absolutely. We offer a range of post-delivery support models including SLA-backed managed services, dedicated support retainers, and on-demand advisory. Our support teams are available across UK, India, and APAC time zones to ensure maximum coverage for global clients.",
  },
  {
    q: "How do you ensure the security and confidentiality of our data?",
    a: "Data security is central to everything we do. We are ISO 27001 compliant and follow strict data handling protocols including NDA agreements at engagement start, role-based access control, and encrypted data transfer. We are fully aligned with GDPR requirements for all EU and UK client engagements.",
  },
  {
    q: "Can you integrate your solutions with our existing systems?",
    a: "Yes. Integration capability is a core part of our delivery approach. We have deep experience integrating with ERP systems (SAP, Oracle, Microsoft Dynamics), CRM platforms (Salesforce, HubSpot), cloud providers (AWS, Azure, GCP), and legacy on-premises systems using modern APIs, middleware, and ETL pipelines.",
  },
  {
    q: "What is your pricing model and how do engagements work?",
    a: "We offer flexible engagement models including fixed-price project delivery, time-and-materials, and managed services retainers. After an initial scoping conversation, we provide a transparent proposal outlining deliverables, timelines, and costs with no hidden charges. We start with a no-obligation discovery call.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "Yes. While many of our clients are large enterprises and public sector organisations, we regularly work with SMEs and scale-ups. We tailor our approach and commercial model to match the budget and ambition of each client, regardless of size or industry sector.",
  },
];

const fieldCls = (err: string) =>
  `w-full px-4 py-3.5 rounded-xl border text-[15px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 transition-all ${
    err
      ? "border-red-400 bg-white focus:ring-red-200 focus:border-red-400"
      : "border-[#e5e4e7] bg-[#fafafa] focus:ring-[#6128a6]/20 focus:border-[#6128a6]"
  }`;

const labelCls = "block text-[13px] font-semibold text-[#333] mb-1.5";

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!formRef.current) return;

    const data = Object.fromEntries(new FormData(formRef.current)) as Record<string, string>;
    const errs = { name: "", email: "", phone: "" };
    if (!data.name?.trim()) errs.name = "Name is required.";
    if (!data.email?.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email address.";
    if (!data.phone?.trim()) errs.phone = "Contact number is required.";
    setErrors(errs);
    if (Object.values(errs).some((v) => v)) return;

    setStatus("sending");
    try {
      const formData = new FormData(formRef.current);
      formData.append("type", "Infoplus UK Contact");
      const res = await fetch("https://www.infoplus.co.uk/WebMail/api/Email/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
      <PageMeta
        title="Contact Us"
        description="Get in touch with Infoplus Technologies UK. Whether you need managed IT services, AI solutions, or staffing support, our team is ready to help you achieve your goals."
        path="/contact"
      />
      <PageHero
        title="Contact Us"
        description="Keep touch with Us We'd love to hear from you! Brief us of your requirements below, and let's connect."
        badge="GET IN TOUCH"
        variant="centered"
      />

      {/* ── Get In Touch ─────────────────────────────────────────── */}
      <section className="py-20 bg-white relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Form */}
            <ScrollReveal direction="left" className="lg:col-span-7">
              <div className="bg-[#f8f5ff] border border-[#e5e4e7] rounded-3xl p-8 md:p-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Send a Message
                </span>
                <h2 className="text-[28px] font-bold text-[#111] mb-8">
                  We'd love to hear from you
                </h2>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#dcfce7] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-[#15803d]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#111] mb-2">Message Sent!</h3>
                    <p className="text-[15px] text-[#555] mb-7">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-7 py-3 rounded-xl bg-[#1e0a38] text-white text-[14px] font-semibold hover:bg-[#6128a6] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className={labelCls}>
                        Your Name <span className="text-[#f85d37]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        className={fieldCls(errors.name)}
                      />
                      {errors.name && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.name}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>
                        Email Address <span className="text-[#f85d37]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        className={fieldCls(errors.email)}
                      />
                      {errors.email && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.email}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>
                        Contact Number <span className="text-[#f85d37]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+44 20 0000 0000"
                        className={fieldCls(errors.phone)}
                      />
                      {errors.phone && <p className="mt-1.5 text-[12px] text-red-500 font-medium">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>
                        Message
                      </label>
                      <textarea
                        name="requirement"
                        rows={5}
                        placeholder="Tell us about your project, challenge, or what you'd like to achieve…"
                        className={`${fieldCls("")} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-[13px] text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-4 rounded-xl bg-[#1e0a38] text-white font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-[#6128a6] disabled:opacity-70 transition-colors duration-300"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Privacy tip */}
                    <div className="flex items-start gap-2 text-[12px] text-[#888]">
                      <Shield className="w-4 h-4 text-[#6128a6]/50 shrink-0 mt-0.5" />
                      <span>We respect your privacy. We promise we won't spam you :)</span>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Right: Contact info + Timing */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="right">
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                    Reach Us Directly
                  </span>
                  <h2 className="text-[28px] font-bold text-[#111] mb-6">Contact Details</h2>
                </div>
              </ScrollReveal>

              {[
                { icon: Phone, label: "Phone", value: "+44 20 8207 3474", href: "tel:+442082073474" },
                { icon: Mail, label: "Email", value: "uk@infoplusltd.co.uk", href: "mailto:uk@infoplusltd.co.uk" },
                { icon: MapPin, label: "Head Office", value: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW, United Kingdom", href: "https://maps.google.com/?q=Unit+6+Capital+Business+Park+Manor+Way+Borehamwood+WD6+1GW" },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <ScrollReveal key={label} variant="card" delay={i * 80}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-5 bg-white border border-[#e5e4e7] rounded-2xl hover:border-[#6128a6]/30 hover:shadow-[0_8px_24px_-4px_rgba(97,40,166,0.10)] transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#ecdaff] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#6128a6]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#888] mb-1">
                        {label}
                      </p>
                      <p className="text-[14px] font-semibold text-[#111] group-hover:text-[#6128a6] transition-colors leading-snug">
                        {value}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}

              {/* Office Timing */}
              <ScrollReveal variant="card" delay={320}>
                <div className="bg-[#1e0a38] rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock className="w-5 h-5 text-[#aa3bff] shrink-0" />
                    <h4 className="text-[16px] font-bold text-white mb-0">Office Hours (GMT)</h4>
                  </div>
                  <div className="space-y-3 text-[14px]">
                    {[
                      { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM", open: true },
                      { day: "Saturday", hours: "10:00 AM – 2:00 PM", open: true },
                      { day: "Sunday", hours: "Closed", open: false },
                    ].map(({ day, hours, open }) => (
                      <div key={day} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                        <span className="text-white/60">{day}</span>
                        <span className={`font-semibold ${open ? "text-white" : "text-[#f85d37]"}`}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[12px] text-white/40 mt-4">
                    Emergency support available 24/7 for managed service clients.
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Global Offices ──────────────────────────────────────── */}
      <section id="worldwide-presence" className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3">
                <Globe2 className="w-5 h-5 text-[#6128a6]" />
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Worldwide Presence
                </span>
              </div>
              <h2 className="text-[36px] font-bold text-[#111] mb-3">
                Our Global Offices
              </h2>
              <p className="text-[16px] text-[#555] max-w-xl mx-auto">
                With 17 offices across 4 continents, we're wherever our clients need us to be.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {OFFICES.map((office, i) => (
              <ScrollReveal
                key={i}
                direction="fade"
                variant="card"
                delay={Math.min(i % 4, 3) * 70}
              >
                <div className="group bg-white border border-[#e5e4e7] rounded-2xl p-5 hover:border-[#6128a6]/30 hover:shadow-[0_8px_24px_-4px_rgba(97,40,166,0.10)] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[22px] leading-none">{office.flag}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#888]">
                      {office.region}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-[#111] mb-2 group-hover:text-[#6128a6] transition-colors">
                    {office.city}
                  </h3>
                  <p className="text-[12px] text-[#666] leading-relaxed flex-1 mb-4">
                    {office.address}
                  </p>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[12px] font-semibold text-[#6128a6] hover:text-[#f85d37] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    View on Google Maps
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Orb */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-[#6128a6]/15 blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37] mb-3 block">
                FAQ
              </span>
              <h2 className="text-[36px] font-bold text-white mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-[16px] text-white/50 max-w-lg mx-auto">
                Can't find the answer here? Drop us a message and our team will respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <ScrollReveal key={idx} direction="fade" delay={idx * 50}>
                <div
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    openFaq === idx
                      ? "border-white/20 bg-white/8"
                      : "border-white/10 bg-white/4 hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="text-[15px] font-semibold text-white leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180 text-[#aa3bff]" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-[14px] text-white/55 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal direction="fade">
            <h2 className="text-[30px] font-bold text-[#111] mb-3">
              Ready to start a conversation?
            </h2>
            <p className="text-[16px] text-[#555] mb-8">
              Our team is on hand to understand your requirements and explore how we can help.
            </p>
            <a
              href="mailto:uk@infoplusltd.co.uk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1e0a38] text-white text-[15px] font-semibold hover:bg-[#6128a6] transition-colors duration-300 group"
            >
              Email Us Directly
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
