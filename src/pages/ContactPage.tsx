import { PageMeta } from "../components/shared/PageMeta";
import { useState, useRef } from "react";
import { PageHero } from "../components/shared/PageHero";
import {
  MapPin, Mail, Phone, Clock, Shield,
  CheckCircle2, ArrowRight, Send,
} from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";
import ReactCountryFlag from "react-country-flag";

const OFFICES = [
  { code: "GB", region: "United Kingdom", city: "Borehamwood (HQ)", address: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW", mapUrl: "https://maps.google.com/?q=Unit+6+Capital+Business+Park+Manor+Way+Borehamwood+WD6+1GW" },
  { code: "IN", region: "India",          city: "Chennai",          address: "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096", mapUrl: "https://maps.google.com/?q=99+Greeta+Tower+Perungudi+Chennai+600096" },
  { code: "DE", region: "Germany",        city: "Frankfurt",        address: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, 60327 Frankfurt am Main", mapUrl: "https://maps.google.com/?q=Tower+185+Friedrich-Ebert-Anlage+35-37+60327+Frankfurt+am+Main" },
  { code: "SE", region: "Sweden",         city: "Stockholm",        address: "Hammarbybacken 27, Johanneshov, Stockholm 120 30", mapUrl: "https://maps.google.com/?q=Hammarbybacken+27+Johanneshov+Stockholm+120+30" },
  { code: "NL", region: "Netherlands",    city: "Rotterdam",        address: "Hofplein 20, Rotterdam 3032 AC", mapUrl: "https://maps.google.com/?q=Hofplein+20+Rotterdam+3032+AC" },
  { code: "BE", region: "Belgium",        city: "Brussels",         address: "Chemin des Deux Maisons 73-3, 1200 Brussels", mapUrl: "https://maps.google.com/?q=Chemin+des+Deux+Maisons+73+1200+Bruxelles+Belgium" },
  { code: "IE", region: "Ireland",        city: "Dublin",           address: "The Black Church, St. Mary's Place, Dublin 7", mapUrl: "https://maps.google.com/?q=The+Black+Church+St+Marys+Place+Dublin+7+Ireland" },
  { code: "CH", region: "Switzerland",    city: "Zug",              address: "Bahnhofstrasse 21, 6300 Zug", mapUrl: "https://maps.google.com/?q=Bahnhofstrasse+21+6300+Zug+Switzerland" },
  { code: "PL", region: "Poland",         city: "Krakow",           address: "ul. Kamienna 21, 31-403 Krakow", mapUrl: "https://maps.google.com/?q=ul+Kamienna+21+31-403+Krakow+Poland" },
  { code: "CZ", region: "Czech Republic", city: "Prague",           address: "Zeleny pruh 1560/99, Branik, 140 00 Praha 4", mapUrl: "https://maps.google.com/?q=Zeleny+pruh+1560+Branik+140+00+Praha+4+Czech+Republic" },
  { code: "ES", region: "Spain",          city: "Barcelona",        address: "Cl Paris Num.45, Entresuelo 3, 08029 Barcelona", mapUrl: "https://maps.google.com/?q=Calle+Paris+45+08029+Barcelona+Spain" },
  { code: "FR", region: "France",         city: "Levallois-Perret", address: "101-109 Rue Jean Jaures, 92300 Levallois-Perret", mapUrl: "https://maps.google.com/?q=101+Rue+Jean+Jaures+92300+Levallois-Perret+France" },
  { code: "AT", region: "Austria",        city: "Vienna",           address: "Mariahilfer Straße 123/3, 1060 Vienna", mapUrl: "https://maps.google.com/?q=Mariahilfer+Strasse+123+1060+Vienna+Austria" },
  { code: "IT", region: "Italy",          city: "Milan",            address: "via dell'Annunciata 23/4, c/o LEXIA Avvocati, 20121 Milan", mapUrl: "https://maps.google.com/?q=via+dell+Annunciata+23+20121+Milan+Italy" },
  { code: "RO", region: "Romania",        city: "Bucharest",        address: "B-dul Iuliu Maniu, Nr. 57, Block OD16, Staircase E, Fl. 2, Apt. 188, 061081 Bucharest Sector 6", mapUrl: "https://maps.google.com/?q=Bdul+Iuliu+Maniu+57+Bucharest+Sector+6+Romania" },
  { code: "BG", region: "Bulgaria",       city: "Sofia",            address: "85 Aleksandar Malinov Blvd., fl. 1, office 1, 1715 Sofia", mapUrl: "https://maps.google.com/?q=85+Aleksandar+Malinov+Blvd+1715+Sofia+Bulgaria" },
  { code: "AE", region: "UAE",            city: "Dubai",            address: "DSO-IFZA, IFZA Properties, Dubai Silicon Oasis, Dubai 1111", mapUrl: "https://maps.google.com/?q=IFZA+Properties+Dubai+Silicon+Oasis+Dubai+UAE" },
];

const CONTACT_FAQS: FAQItem[] = [
  {
    q: "What kind of work does Infoplus do?",
    a: "We handle IT for businesses, from building software and testing it to managing servers and networks to keep systems safe from cyber threats. We also work with SAP systems, cloud setups, and AI tools. On top of that, we help companies find IT staff and offer support with automation and data.",
  },
  {
    q: "Do you only work with businesses in the UK?",
    a: "No. Infoplus Technologies UK Limited is headquartered in Borehamwood, UK, but we support clients across 17 countries, including India, Germany, Sweden, the Netherlands, and the UAE. Wherever your business is based, our team can help.",
  },
  {
    q: "How do I get a quote or discuss a project?",
    a: "An easier way is to fill out the short form on this page. You can also email us directly at contact@infoplusltd.co.uk. You can also call us on +44 208207 3474 to speak with our team.",
  },
  {
    q: "How soon will I hear back after submitting an enquiry?",
    a: "Our team reviews every enquiry and gets back to you as soon as possible with next steps. If your request is urgent, calling us directly is the fastest way to reach us.",
  },
  {
    q: "Can Infoplus support both small businesses and large enterprises?",
    a: "Yes. Our services are built to scale, from one-off projects like a website build or SAP implementation, to long-term partnerships covering staffing, cloud infrastructure, and ongoing IT support.",
  },
];

const fieldCls = (err: string) =>
  `w-full px-4 py-3.5 rounded-xl border text-[15px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 transition-all ${
    err
      ? "border-red-400 bg-white focus:ring-red-200 focus:border-red-400"
      : "border-[rgba(13,17,45,0.12)] bg-white focus:ring-[#EB9B3D]/20 focus:border-[#EB9B3D]"
  }`;

const labelCls = "block text-[13px] font-semibold text-[#333] mb-1.5";

export function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
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
      const res = await fetch("https://test.infoplus.co.in/WebMail/api/Email/contact", {
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
        description="Tell us your requirements, Our Expert team will come shortly with your solutions!!!"
        badge="GET IN TOUCH"
        variant="centered"
      />

      {/* ── Get In Touch ─────────────────────────────────────────── */}
      <section className="py-20 bg-white relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Form */}
            <ScrollReveal direction="left" className="lg:col-span-7">
              <div className="bg-[#F3F5FF] border border-[rgba(13,17,45,0.08)] rounded-3xl p-8 md:p-10">
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
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
                      className="px-7 py-3 rounded-xl text-white text-[14px] font-semibold hover:opacity-90 transition-all cursor-pointer"
                      style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className={labelCls}>
                        Your Name <span className="text-[#DA4D33]">*</span>
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
                        Email Address <span className="text-[#DA4D33]">*</span>
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
                        Contact Number <span className="text-[#DA4D33]">*</span>
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
                        name="message"
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
                      className="w-full py-4 rounded-xl text-white font-semibold text-[15px] flex items-center justify-center gap-2 disabled:opacity-70 hover:opacity-90 transition-all duration-300 cursor-pointer"
                      style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
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
                      <Shield className="w-4 h-4 text-[#EB9B3D]/50 shrink-0 mt-0.5" />
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
                  <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
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
                    className="group flex items-start gap-4 p-5 bg-white border border-[#e5e4e7] rounded-2xl hover:border-[#EB9B3D]/30 hover:shadow-[0_8px_24px_-4px_rgba(235,155,61,0.10)] transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#FEF0DC] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#EB9B3D]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#888] mb-1">
                        {label}
                      </p>
                      <p className="text-[14px] font-semibold text-[#111] group-hover:text-[#EB9B3D] transition-colors leading-snug">
                        {value}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}

              {/* Office Timing */}
              <ScrollReveal variant="card" delay={320}>
                <div className="bg-[#141A3D] rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock className="w-5 h-5 text-[#EB9B3D] shrink-0" />
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
                        <span className={`font-semibold ${open ? "text-white" : "text-[#DA4D33]"}`}>
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
      <section id="worldwide-presence" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest">
                  Worldwide Presence
                </span>
              </div>
              <h2 className="text-[36px] font-bold text-[#111] mb-3">
                Our Global Offices
              </h2>
              <p className="text-[16px] text-[#555] max-w-xl mx-auto">
                With 17 offices across Europe, Asia &amp; the Middle East, we're wherever our clients need us to be.
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
                <div className="group bg-white border border-[#e5e4e7] rounded-2xl p-5 hover:border-[#EB9B3D]/30 hover:shadow-[0_8px_24px_-4px_rgba(235,155,61,0.10)] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-2.5 mb-3">
                    <ReactCountryFlag
                      countryCode={office.code}
                      svg
                      style={{ width: "1.6em", height: "1.2em", borderRadius: "3px", objectFit: "cover" }}
                      title={office.region}
                    />
                    <span className="text-[15px] font-bold text-[#111] leading-snug group-hover:text-[#EB9B3D] transition-colors">{office.city}</span>
                  </div>
                  <p className="text-[12px] text-[#666] leading-relaxed flex-1 mb-4">
                    {office.address}
                  </p>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[12px] font-semibold text-[#EB9B3D] hover:text-[#DA4D33] transition-colors"
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

      <FAQAccordion
        faqs={CONTACT_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Can't find the answer here? Drop us a message and our team will get back to you."
      />

    </div>
  );
}
