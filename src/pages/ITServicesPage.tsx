import { useState } from "react";
import { PageMeta } from "../components/shared/PageMeta";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  Code2,
  FlaskConical,
  Server,
  Database,
  ShieldCheck,
  Cloud,
  BrainCircuit,
  ChevronRight,
  Lightbulb,
  Globe,
  Users,
  Zap,
  Layers,
  Clock,
  Star,
  Shield,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import imgCareerHero from "../assets/images/career_hero.jpg";
import { FAQAccordion } from "../components/shared/FAQAccordion";
import type { FAQItem } from "../components/shared/FAQAccordion";

/* â"€â"€ Service cards â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */
const SERVICES = [
  {
    icon: Code2,
    title: "Software Development",
    href: "/services/it-services/software-development",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Innovate fast and drive your business towards sustainable success with our Expert Team's web, mobile, and enterprise application development services.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    href: "/services/it-services/testing",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Ensure your product success by leveraging our end-to-end testing services. We help you mitigate risks, boost application performance and provide seamless user experience.",
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    href: "/services/it-services/infrastructure-management",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Manage your IT infrastructure effectively with our proactive management services aimed at maximizing your efficiency and growing your business.",
  },
  {
    icon: Database,
    title: "SAP Consulting & Implementation",
    href: "/services/it-services/sap-consulting",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Realize the full potential of SAP with our consulting services. We provide customized SAP solutions aimed at improving efficiency and business performance.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    href: "/services/it-services/cyber-security",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Guard your business from malicious attacks using intelligent cybersecurity solutions which will secure your data and guarantee uninterrupted business operations.",
  },
  {
    icon: Cloud,
    title: "Cloud Portfolio",
    href: "/services/it-services/cloud-portfolio",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Optimize your cloud portfolio with customized solutions designed to provide high scalability and efficiency.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    href: "/services/it-services/artificial-intelligence",
    gradient: "from-[#EB9B3D] to-[#DA4D33]",
    desc: "Boost your business processes by applying artificial intelligence solutions for process automation, better decision-making and innovation.",
  },
];

const IT_FAQS: FAQItem[] = [
  {
    q: "What are the IT Services Infoplus Technologies Provide?",
    a: "We offer End to End IT Solutions including: Software Development, Testing, Artificial Intelligence, Cyber Security, Cloud Portfolios, Infrastructure Management, & SAP Consulting.",
  },
  {
    q: "Which Industries Infoplus Technologies serve?",
    a: "Infoplus Technologies works with various businesses across different industries like: Software, Pharmaceuticals, Health Care, Insurance, Transport, Retail, Broadcasting, Manufacturing, Real Estate, Agriculture, Construction, Telecommunication, & Education etc.",
  },
  {
    q: "Can you provide customized software for your business?",
    a: "Yes. We offer to design and develop customized software in accordance with your business needs. Our services cover every aspect of the process including requirement analysis, UI/UX designing, development, testing, deployment, and maintenance.",
  },
  {
    q: "Does Infoplus Technologies provide ongoing support and maintenance after the completion of the project?",
    a: "Yes. Our Technical Experts take care of everything after the deployment of the project (24/7 Support).",
  },
];

export default function ITServicesPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  type ITField = "name" | "email" | "phone";

  const validateField = (field: ITField, value: string): string => {
    const s = value.trim();
    if (field === "name") {
      if (!s) return "Name is required.";
      if (s.length < 2) return "Name must be at least 2 characters.";
      if (s.length > 100) return "Name must be under 100 characters.";
      if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ\s'\-.]+$/.test(s))
        return "Name may only contain letters, spaces, hyphens, periods and apostrophes.";
      return "";
    }
    if (field === "email") {
      if (!s) return "Email is required.";
      if (s.length > 254) return "Email address is too long.";
      if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(s))
        return "Enter a valid email (e.g. john@company.com).";
      return "";
    }
    if (field === "phone") {
      if (!s) return "Contact number is required.";
      if (!/^[+\d\s()\-]+$/.test(s))
        return "Only digits, spaces, +, – and parentheses are allowed.";
      const digits = s.replace(/\D/g, "");
      if (digits.length < 7) return "Must contain at least 7 digits.";
      if (digits.length > 15) return "Must not exceed 15 digits.";
      return "";
    }
    return "";
  };

  const handleFieldChange = (field: ITField | "message", value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field !== "message" && errors[field as ITField])
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field as ITField, value),
      }));
  };

  const handleFieldBlur = (field: ITField) =>
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field]),
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<ITField, string> = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
    };
    setErrors(errs);

    setStatus("sending");
    try {
      const formData = new FormData();
      formData.append("name", form.name.trim());
      formData.append("email", form.email.trim());
      formData.append("phone", form.phone.trim());
      formData.append("message", form.message.trim());
      formData.append("type", "Infoplus UK Contact");
      const res = await fetch(
        "http://109.228.60.38/WebMail/api/Email/contact",
        {
          method: "POST",
          body: formData,
        },
      );
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    if (Object.values(errs).every((v) => !v)) setSubmitted(true);
  };

  const fieldCls = (err: string) =>
    `w-full px-3.5 py-2.5 rounded-xl border text-[14px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 transition-all ${
      err
        ? "border-red-400 bg-white focus:ring-red-200"
        : "border-[rgba(13,17,45,0.10)] bg-[#fafafa] focus:ring-[#EB9B3D]/20 focus:border-[#EB9B3D]"
    }`;

  return (
    <div className="w-full">
      <PageMeta
        title="IT Services Hub | Infoplus Technologies UK"
        description="Software development, testing, infrastructure management, SAP, cybersecurity & cloud, ground-up under one IT services division at Infoplus."
        keywords="IT service in UK, IT service, IT Services in UK"
        path="/services/it-services"
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0D112D] overflow-hidden pt-28 pb-20">
        {/* Ambient orbs */}
        <div className="absolute top-[-10%] left-[-6%] w-[600px] h-[600px] rounded-full bg-[#242E72] opacity-40 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-4%] w-[500px] h-[500px] rounded-full bg-[#EB9B3D] opacity-20 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left — content */}
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-6">
                IT Services
              </span>
              <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-black text-white leading-[1.1] tracking-tight mb-6">
                All Your IT Services{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg,#DA4D33 0%,#F0783A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Under One Roof
                </span>
              </h1>
              <p className="text-[16px] text-white/60 leading-relaxed mb-10 max-w-lg">
                Delivering innovative technology solutions including Software
                Development, AI, Cybersecurity, Testing, Cloud Portfolios, SAP
                Consulting &amp; Infrastructure Management for businesses
                worldwide.
              </p>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  "End-to-End Solutions",
                  "24/7 Support",
                  "17 Countries",
                  "ISO 27001 Certified",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-[12px] font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DA4D33] shrink-0" />
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-[14px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)]"
                  style={{
                    background:
                      "linear-gradient(135deg,#EB9B3D 0%,#DA4D33 100%)",
                  }}
                >
                  Discuss Your Project <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — Quick Enquiry form */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_24px_80px_rgba(0,0,0,0.30)]">
              <h3 className="text-[18px] font-bold text-[#0D112D] mb-0.5">
                Quick Enquiry
              </h3>
              <p className="text-[12px] text-[#888] mb-5">
                Tell us about your project and we'll be in touch within one
                business day.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#EB9B3D]/10 flex items-center justify-center mb-3">
                    <Send className="w-5 h-5 text-[#EB9B3D]" />
                  </div>
                  <h4 className="text-[16px] font-bold text-[#0D112D] mb-1">
                    Message Sent!
                  </h4>
                  <p className="text-[13px] text-[#666]">
                    We'll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form className="space-y-3" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#333] mb-1">
                      Your Name <span className="text-[#F0783A]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      maxLength={100}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) =>
                        handleFieldChange("name", e.target.value)
                      }
                      onBlur={() => handleFieldBlur("name")}
                      className={fieldCls(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-500 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#333] mb-1">
                      Email Address <span className="text-[#F0783A]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      maxLength={254}
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) =>
                        handleFieldChange("email", e.target.value)
                      }
                      onBlur={() => handleFieldBlur("email")}
                      className={fieldCls(errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-500 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#333] mb-1">
                      Contact Number <span className="text-[#F0783A]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 20 0000 0000"
                      maxLength={20}
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) =>
                        handleFieldChange("phone", e.target.value)
                      }
                      onBlur={() => handleFieldBlur("phone")}
                      className={fieldCls(errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-red-500 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#333] mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your project or challenge…"
                      maxLength={2000}
                      value={form.message}
                      onChange={(e) =>
                        handleFieldChange("message", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[rgba(13,17,45,0.10)] bg-[#fafafa] text-[14px] text-[#222] placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#EB9B3D]/20 focus:border-[#EB9B3D] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-[#F0783A] to-[#ff7a58] text-white rounded-xl py-3 font-bold text-[14px] hover:shadow-[0_8px_28px_rgba(248,93,55,0.40)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2 text-[11px] text-[#bbb]">
                    <Shield className="w-3.5 h-3.5 text-[#EB9B3D]/50 shrink-0" />
                    We respect your privacy. No spam, ever.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Intro + Vision */}
      <section className="py-24 bg-[#ffffff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FEF0DC] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Intro text */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Our Approach
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0D112D] leading-tight mb-6">
                  Strategically led.&nbsp;
                  <span className="text-[#EB9B3D]">Proactively managed.</span>
                </h2>
                <p className="text-[15px] text-[#0D112D]/65 leading-relaxed mb-5 text-justify">
                  In order for a business to strive and to meet its planned
                  objectives, supporting IT is not just enough it must be
                  strategically led and proactively managed. Our
                  forward-thinking IT service CoE (Center of Excellence) team
                  has been designing end-to-end solutions for organisations to
                  have a technology edge and to be ahead of the curve while
                  running their operations seriously, thus making their
                  infrastructure highly available.
                </p>
                <p className="text-[15px] text-[#0D112D]/65 leading-relaxed text-justify">
                  Infoplus Technologies has carefully structured different
                  business verticals to cater to the needs of every IT service
                  requirement at any time from software development and AI to
                  infrastructure management and cyber security.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision card + feature chips */}
            <ScrollReveal direction="right" delay={120}>
              <div className="space-y-5">
                {/* Vision card */}
                <div className="relative bg-[#0D112D] rounded-3xl p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#EB9B3D] opacity-20 blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#DA4D33]/20 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-[#DA4D33]" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#DA4D33]">
                        Vision
                      </span>
                    </div>
                    <p className="text-[16px] text-white/85 leading-relaxed italic">
                      "We strive to support improvements in IT services and
                      solutions in order to make a visible positive contribution
                      to the client's IT growth strategy."
                    </p>
                    <div className="mt-5 h-px bg-linear-to-r from-[#EB9B3D]/60 via-[#DA4D33]/40 to-transparent" />
                    <p className="mt-3 text-[12px] text-white/40 font-semibold uppercase tracking-widest">
                      Infoplus Technologies IT CoE
                    </p>
                  </div>
                </div>

                {/* Feature chips */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Globe, label: "Europe & India", color: "#EB9B3D" },
                    { icon: Users, label: "Dedicated CoE", color: "#DA4D33" },
                    { icon: Zap, label: "End-to-End", color: "#F0783A" },
                  ].map((f, i) => (
                    <div
                      key={f.label}
                      className="flex flex-col items-center gap-2 bg-white border border-[#FEF0DC] rounded-2xl py-4 px-3 hover:border-[#EB9B3D]/30 hover:shadow-[0_4px_16px_rgba(235,155,61,0.08)] transition-all duration-300"
                      style={{
                        animation: `revealFade 350ms ease ${i * 80 + 300}ms both`,
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: `${f.color}15`,
                          color: f.color,
                        }}
                      >
                        <f.icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#0D112D]/70 text-center">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- Why Choose Us ----------------------------------------- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-8%] w-96 h-96 rounded-full bg-[#FEF0DC] opacity-50 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-8%] left-[-5%] w-72 h-72 rounded-full bg-[#EB9B3D]/10 blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Why Choose Us
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-[#0D112D] leading-tight mb-6">
                  Why Choose Infoplus for{" "}
                  <span className="text-[#EB9B3D]">IT Services</span>
                </h2>
                <p className="text-[15px] text-[#555] leading-relaxed mb-10 text-justify">
                  At Infoplus, we believe technology should make business easier
                  rather than complicate its needs. Our technical teams work
                  closely with clients to deliver innovative, secure &amp;
                  scalable IT solutions tailored to their unique business needs.
                  From development to delivery we provide 24/7 support,
                  upholding commitment, transparency &amp; real business value.
                  We deliver projects on time with no compromise on quality,
                  fostering transparency, long-term partnerships, and helping
                  businesses confidently embrace digital transformation.
                </p>

                {/* Feature tiles */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: Layers,
                      label: "End to End IT Solutions",
                      desc: "Full-lifecycle coverage from strategy to delivery",
                      color: "#EB9B3D",
                    },
                    {
                      icon: Users,
                      label: "Skilled Team",
                      desc: "Experienced engineers across Europe & India",
                      color: "#DA4D33",
                    },
                    {
                      icon: Clock,
                      label: "24/7 Support",
                      desc: "Round-the-clock monitoring and assistance",
                      color: "#F0783A",
                    },
                    {
                      icon: Star,
                      label: "Focus on Quality",
                      desc: "No compromise on standards, every delivery",
                      color: "#14b8a6",
                    },
                    {
                      icon: Zap,
                      label: "Fast Delivery",
                      desc: "Agile execution without sacrificing quality",
                      color: "#F0783A",
                    },
                  ].map((f, i) => (
                    <div
                      key={f.label}
                      className={`flex items-start gap-3 p-4 rounded-2xl border border-[#f0ecf9] hover:border-[#EB9B3D]/25 hover:shadow-[0_4px_16px_rgba(235,155,61,0.08)] transition-all duration-300 bg-[#fafafe]${i === 4 ? " col-span-2" : ""}`}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${f.color}18`,
                          color: f.color,
                        }}
                      >
                        <f.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#0D112D] mb-0.5">
                          {f.label}
                        </p>
                        <p className="text-[12px] text-[#888] leading-snug">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Placeholder image panel */}
            <ScrollReveal direction="right" delay={120}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden h-120">
                  <img
                    src={imgCareerHero}
                    alt="Infoplus IT Services team"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(235,155,61,0.12)] border border-[#FEF0DC]">
                  <p className="text-[26px] font-black text-[#EB9B3D] leading-none mb-0">
                    20+
                  </p>
                  <p className="text-[11px] text-[#888]">
                    Years of IT Excellence
                  </p>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#F0783A] text-white rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(248,93,55,0.30)]">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-0">
                    ISO 27001
                  </p>
                  <p className="text-[10px] opacity-80">Certified</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ Services Grid â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#0D112D] relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#242E72] opacity-35 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#EB9B3D] opacity-15 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Our IT Service Verticals
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                Seven pillars of&nbsp;
                <span className="text-[#DA4D33]">IT excellence</span>
              </h2>
              <p className="text-[15px] text-white/50 mt-4 max-w-2xl mx-auto">
                Each vertical is purpose-built and CoE-backed click any service
                to explore the full offering.
              </p>
            </div>
          </ScrollReveal>

          {/* Flex wrap 7 cards auto-centre the last item */}
          <div className="flex flex-wrap justify-center gap-6">
            {SERVICES.map((svc, i) => (
              <ScrollReveal
                key={svc.title}
                variant="card"
                delay={i * 80}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <Link
                  to={svc.href}
                  className="group relative flex flex-col h-full bg-white/4 border border-white/8 rounded-3xl p-7 hover:bg-white/7 hover:border-[#EB9B3D]/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(235,155,61,0.20)] transition-all duration-300 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#EB9B3D]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${svc.gradient} flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svc.icon
                      className="w-5 h-5 text-white"
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] font-bold text-white mb-2 group-hover:text-[#DA4D33] transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Accent line */}
                  <div className="w-8 h-0.5 rounded-full mb-5 bg-[#EB9B3D]/50 group-hover:w-16 transition-all duration-300" />

                  {/* Description */}
                  <p className="text-[14px] text-white/55 leading-relaxed flex-1 group-hover:text-white/70 transition-colors duration-300 mb-0">
                    {svc.desc}
                  </p>

                  {/* Read More link */}
                  <div className="mt-6 flex items-center gap-1.5 text-[13px] font-semibold text-[#F0783A]">
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={IT_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        defaultOpen={0}
      />

      {/* â"€â"€ CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#ffffff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #EB9B3D 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#141A3D] via-[#242E72] to-[#EB9B3D] rounded-3xl p-10 md:p-14 text-center overflow-hidden shadow-[0_32px_80px_rgba(235,155,61,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-80 h-80 rounded-full bg-[#DA4D33] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-[#F0783A] opacity-12 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Work With Us
              </span>
              <h2 className="relative z-10 text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white leading-tight mb-5">
                Ready to transform your IT landscape?
              </h2>
              <p className="relative z-10 text-[15px] text-white/60 mb-10 max-w-2xl mx-auto">
                Let our IT CoE team design a strategy that gives your
                organisation a genuine technology edge. Offices in Europe and
                India, available around the clock.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-[15px] transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(235,155,61,0.50)]"
                  style={{
                    background:
                      "linear-gradient(135deg,#EB9B3D 0%,#DA4D33 100%)",
                  }}
                >
                  Start a Conversation
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
