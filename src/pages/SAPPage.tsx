import { PageMeta } from "../components/shared/PageMeta";
import imgSapCapabilities from "../assets/images/SAP-Capabilities.png";
import { ImageWithFallback } from "../components/helpers/ImageWithFallback";
import { Link } from "react-router-dom";
import {
  Database,
  BarChart2,
  TrendingUp,
  Package,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  MapPin,
  Globe,
  Server,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

type Benefit = { icon: LucideIcon; title: string; gradient: string };
type DeliveryModel = {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
};

const SAP_BENEFITS: Benefit[] = [
  {
    icon: TrendingUp,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "Increased Productivity & Efficiency",
  },
  {
    icon: Package,
    gradient: "from-[#9a2600] to-[#f85d37]",
    title: "Cost Savings",
  },
  {
    icon: CheckCircle2,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Increased Consistency in Operations",
  },
  {
    icon: BarChart2,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Data Insights",
  },
];

const ERP_MODULES = [
  "SAP ERP Enhancement Package Support",
  "SAP ERP Financials",
  "SAP ERP Human Capital Management",
  "Procurement & Logistics Execution (P & LE)",
  "Product Development & Management",
  "Sales & Service",
  "Corporate Services",
  "SAP Customer Relationship Management (SAP CRM)",
  "SAP Product Life Cycle Management",
  "SAP Supply Chain Management (SAP SCM)",
  "SAP Supplier Relationship Management",
  "SAP Manufacturing",
  "SAP Service and Asset Management",
];

const IMPL_STAGES = [
  { num: "01", title: "Project Plan & Preparation Stage" },
  { num: "02", title: "Business Blueprint Stage" },
  { num: "03", title: "Realization Stage" },
  { num: "04", title: "Design & Development Stage" },
  { num: "05", title: "Go-Live Support" },
];

const BI_SERVICES = [
  "Data Warehousing",
  "Business Intelligence",
  "Business Planning",
  "Business Insights",
  "Measurement and Management",
  "Open Hub Services",
  "Information Broadcasting",
  "Accelerated Business Intelligence",
];

const WHY_SAP = [
  "Highly cost-effective competitive rates for support services",
  "Completed several projects and supported a number of professional augmentation challenges",
  "Access our well experienced 500+ SAP functional and technical consultants worldwide",
  "Consistent SAP All-in-Oneâ„¢ system support, covering the full range of SAP functions with great flexibility",
  "The SAP Knowledge Transfer",
  "The Complete Annual Support Package",
  "Extensive yet flexible 3 delivery support models",
];

const DELIVERY_MODELS: DeliveryModel[] = [
  {
    icon: MapPin,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "Onsite Support",
    desc: "Our consultants work directly at your location for hands-on support, immediate response, and close collaboration with your internal teams.",
  },
  {
    icon: Globe,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "Nearshore Support",
    desc: "A combination of Onsite and Nearshore delivery providing cost efficiency without sacrificing quality or responsiveness.",
  },
  {
    icon: Server,
    gradient: "from-[#9a2600] to-[#f85d37]",
    title: "Remote (Offshore) Support",
    desc: "Full remote support from our expert centres, providing round-the-clock coverage and significant cost savings for your organisation.",
  },
];

const SAP_FAQS: FAQItem[] = [
  {
    q: "Is SAP only for large organisations, or can smaller businesses use it too?",
    a: "No — we've helped businesses of every size use SAP successfully, and it's more affordable than people think.",
  },
  {
    q: "What's the difference between implementation and managed services?",
    a: "Implementation is about setting up SAP properly for your business, from planning through go-live. Managed services keep it running smoothly afterwards.",
  },
  {
    q: "What support options are available once our SAP system is live?",
    a: "We offer three flexible models: onsite support, nearshore support (or a mix of the two), and fully remote offshore support — so you can choose whichever suits your business.",
  },
  {
    q: "What is SAP NetWeaver BI, and do we need it alongside our regular SAP setup?",
    a: "It's a business intelligence tool that pulls data from across your organisation and turns it into clear insights for better decision-making. You don't need it to run standard SAP, but it's valuable if you want deeper visibility into your business performance.",
  },
];

export default function SAPPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <PageMeta
        title="SAP Consulting Services"
        description="Maximise your SAP investment with Infoplus Technologies UK's SAP consulting services. From implementation to support, our experts deliver end-to-end SAP solutions across the UK."
        path="/services/it-services/sap-consulting"
      />
      {/* â"€â"€ Hero â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <PageHero
        title="SAP Consulting & Implementation"
        description="We have a large pool of certified SAP experts"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Consult an SAP Expert
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            View Our SAP Services
          </Link>
        </div>
      </PageHero>

      {/* â"€â"€ 4 Key Benefits strip â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-14 bg-white border-b border-[#f0eff5] relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {SAP_BENEFITS.map(({ icon: BIcon, title, gradient }, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 90} className="h-full">
                <div className="group h-full flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-[#f8f5ff] border border-[#e8e0f7] hover:bg-white hover:shadow-[0_8px_32px_-8px_rgba(97,40,166,0.15)] hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center shrink-0`}
                  >
                    <BIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[13.5px] font-semibold text-[#333] leading-snug">
                    {title}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ About SAP CoE â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={700}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                About Our SAP Practice
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                20+ Years of SAP Excellence
                <br />
                <span className="text-[#6128a6]">
                  For Every Organisation Size
                </span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Our SAP Consulting and Implementation approach at Infoplus
                clears many reservations and myths such as SAP is only for big
                organisations or SAP is expensive. Many small, medium, and large
                organisations have experienced clear benefits through our
                customised SAP solutions.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85]">
                We have been providing solutions and support on SAP for over 20
                years. Our SAP Center of Excellence (CoE) provides highly
                effective solutions to help clients optimise their investments
                and improve customer relationships. With a large pool of
                certified SAP experts, we design and develop end-to-end
                solutions including implementations, upgrades, and application
                management services.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={700} delay={150}>
              <div className="bg-[#f8f5ff] border border-[#e8e0f7] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/8 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[13px] font-bold uppercase tracking-widest text-[#6128a6] mb-6">
                    Our Reach
                  </p>
                  {[
                    { value: "20+", label: "Years of SAP expertise" },
                    {
                      value: "500+",
                      label: "Certified SAP consultants worldwide",
                    },
                    {
                      value: "100%",
                      label: "End-to-end SAP solution coverage",
                    },
                  ].map(({ value, label }, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between py-4 ${i < 2 ? "border-b border-[#e8e0f7]" : ""}`}
                      style={{
                        animation: `revealFade 500ms ease ${i * 120 + 200}ms both`,
                      }}
                    >
                      <p className="text-[13px] text-[#888]">{label}</p>
                      <p className="text-[24px] font-black text-[#111]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ SAP All-in-One ERP Suite â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#ecdaff]/60 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left" duration={700}>
              <div className="lg:sticky lg:top-[120px]">
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  01 ERP Suite
                </span>
                <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                  SAP All-in-One
                  <br />
                  <span className="text-[#6128a6]">ERP Suite</span>
                </h2>
                <p className="text-[15.5px] text-[#555] leading-[1.85]">
                  Our SAP solution landscape provides a comprehensive suite of
                  integrated business applications. Teams hold extensive
                  experience in various vertical industries and a best-practices
                  repository that allows us to offer faster solutions with
                  immediate business benefits.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-[#6128a6]">
                  <Database className="w-4 h-4" />
                  {ERP_MODULES.length} Integrated Modules
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={700} delay={120}>
              <div className="grid grid-cols-1 gap-2.5">
                {ERP_MODULES.map((mod, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white border border-[#e5e4e7] rounded-xl px-5 py-3.5 hover:border-[#6128a6]/30 hover:shadow-[0_4px_16px_-4px_rgba(97,40,166,0.10)] transition-all duration-200"
                    style={{
                      animation: `revealFade 400ms ease ${i * 50 + 100}ms both`,
                    }}
                  >
                    <ChevronRight className="w-4 h-4 text-[#6128a6] shrink-0" />
                    <span className="text-[13.5px] text-[#333] font-medium">
                      {mod}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ SAP Implementations Horizontal Timeline â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                02 Implementations
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3">
                SAP Implementations
              </h2>
              <p className="text-[15px] text-[#555] max-w-2xl mx-auto mt-4 leading-relaxed">
                Since 2000 we have been implementing, supporting, and providing
                stabilisation and maintenance support on SAP All-in-Oneâ„¢ to
                Small and Medium Enterprises (SMEs) worldwide. Our pre-defined
                standard implementation model encompasses the following stages.
              </p>
            </div>
          </ScrollReveal>

          {/* Minimalist step cards */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-9.5 left-[calc(10%+1rem)] right-[calc(10%+1rem)] h-px bg-[#e5e4e7]" />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {IMPL_STAGES.map(({ num, title }, i) => (
                <ScrollReveal
                  key={i}
                  direction="up"
                  delay={i * 100}
                  duration={600}
                >
                  <div className="group flex flex-col items-center text-center">
                    {/* Step circle */}
                    <div className="w-19 h-19 rounded-full bg-white border border-[#e5e4e7] flex flex-col items-center justify-center mb-5 relative z-10 group-hover:border-[#6128a6]/40 group-hover:bg-[#f8f5ff] transition-all duration-300">
                      <span className="text-[18px] font-black text-[#6128a6] tabular-nums leading-tight">
                        {num}
                      </span>
                    </div>
                    <h3 className="text-[13px] font-semibold text-[#444] leading-snug px-1">
                      {title}
                    </h3>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â"€â"€ Outsourcing Managed Services â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-96 h-96 rounded-full bg-[#6128a6]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-80 h-80 rounded-full bg-[#f85d37]/10 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left" duration={700}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Managed Services
              </span>
              <h2 className="text-[34px] font-bold text-white mt-3 leading-tight mb-5">
                Outsourcing Managed Services
              </h2>
              <p className="text-[15.5px] text-white/60 leading-[1.85]">
                Infoplus Technologies is a company that provides IT services on
                an outsourced basis. This usually means delivering services at
                their location and within their data center, a co-location
                facility, or in a private cloud they run on their premises.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Managed IT",
                  "Data Center",
                  "Co-Location",
                  "Private Cloud",
                  "On-Premises",
                  "Cloud Hybrid",
                ].map((label, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-2 rounded-lg bg-white/8 border border-white/12 text-[12.5px] font-semibold text-white/65"
                    style={{
                      animation: `revealFade 400ms ease ${i * 80 + 300}ms both`,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* SAP Capabilities image */}
            <ScrollReveal direction="right" duration={700} delay={180}>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src={imgSapCapabilities}
                  alt="SAP Capabilities"
                  className="w-full h-auto object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ SAP NetWeaver BI â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#ecdaff]/50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left" duration={700}>
              <div className="lg:sticky lg:top-[120px]">
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  Business Intelligence
                </span>
                <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                  SAP NetWeaver BI
                </h2>
                <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                  SAP NetWeaver BI paints a complete picture of your business to
                  satisfy the diverse needs of end-users, IT professionals, and
                  senior management. It brings together a powerful business
                  intelligence infrastructure, comprehensive tools, planning and
                  simulation capabilities, and data-warehousing functionality 
                  delivered through enterprise portal technology.
                </p>
                <p className="text-[15.5px] text-[#555] leading-[1.85]">
                  SAP NetWeaver BI is the answer to integrating data from across
                  the enterprise and beyond, then transforming it into
                  practical, timely information to drive sound decision-making,
                  targeted action, and solid business results.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={700} delay={120}>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#888] mb-5">
                  SAP NetWeaver BI Services
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BI_SERVICES.map((svc, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-3 bg-white border border-[#e5e4e7] rounded-xl px-5 py-4 hover:border-[#6128a6]/30 hover:shadow-[0_8px_24px_-4px_rgba(97,40,166,0.10)] hover:-translate-y-0.5 transition-all duration-300"
                      style={{
                        animation: `revealFade 400ms ease ${i * 70 + 100}ms both`,
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#ecdaff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <BarChart2 className="w-4 h-4 text-[#6128a6]" />
                      </div>
                      <span className="text-[13.5px] text-[#333] font-medium">
                        {svc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â"€â"€ Why Infoplus + Delivery Models â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                The Infoplus Advantage
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-2">
                Why Infoplus for Your SAP Services?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
            {WHY_SAP.map((point, i) => (
              <ScrollReveal
                key={i}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 60}
              >
                <div className="flex items-start gap-4 bg-[#f8f5ff] border border-[#e8e0f7] rounded-xl p-5 hover:bg-white hover:border-[#6128a6]/30 hover:shadow-[0_8px_24px_-4px_rgba(97,40,166,0.08)] transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#ecdaff] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6128a6]" />
                  </div>
                  <p className="text-[14.5px] text-[#333] font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Delivery Models */}
          <ScrollReveal direction="fade">
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#888] text-center mb-8">
              3 Flexible Delivery Models
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DELIVERY_MODELS.map(
              ({ icon: DIcon, gradient, title, desc }, i) => (
                <ScrollReveal
                  key={i}
                  direction="up"
                  variant="card"
                  delay={i * 110}
                  className="h-full"
                >
                  <div className="group h-full flex flex-col bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.12)] hover:-translate-y-1 hover:border-[#6128a6]/25 transition-all duration-300">
                    {/* Gradient accent bar */}
                    <div className={`h-1.5 w-full shrink-0 bg-linear-to-r ${gradient}`} />
                    <div className="flex flex-col flex-1 p-7">
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <DIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-[16px] font-bold text-[#111] mb-3 leading-snug">
                        {title}
                      </h3>
                      <p className="text-[13.5px] text-[#666] leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ),
            )}
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={SAP_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about our SAP consulting services. Can't find what you're looking for? Reach out to our team."
      />

      {/* CTA */}
      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0d0517] to-[#381f55] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Start Your SAP Journey
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Optimise Your Business with SAP
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd your trusted SAP
                  partner with 20+ years of proven expertise and 500+ certified
                  consultants ready to serve you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Book a Free SAP Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
                  >
                    Email Our SAP Team
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

