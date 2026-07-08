import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  Database,
  CheckCircle2,
  Shield,
  Search,
  Package,
  ClipboardList,
  Layers,
  Users,
  BarChart3,
  ChevronRight,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";

/* â”€â”€ Our Solutions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const SOLUTIONS = [
  { icon: Search, label: "Data Cleaning & Standardization" },
  { icon: Database, label: "Material Master Consultancy" },
  { icon: Users, label: "Vendor Master Cleaning" },
  { icon: ClipboardList, label: "Physical Verification" },
  { icon: Package, label: "Plant Asset Management" },
  { icon: Shield, label: "Data Governance" },
  { icon: Layers, label: "Service Masters" },
  { icon: BarChart3, label: "Product Master Management" },
  { icon: CheckCircle2, label: "Consultancy Support" },
];

/* â”€â”€ Core Values â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const CORE_VALUES = [
  { icon: Zap, label: "Availability", color: "#f85d37" },
  { icon: TrendingUp, label: "Scalability", color: "#aa3bff" },
  { icon: Shield, label: "Reliability", color: "#6128a6" },
  { icon: Globe, label: "Lucidity", color: "#f85d37" },
];

/* â”€â”€ Detailed Solutions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const DETAIL_SOLUTIONS = [
  {
    number: "01",
    title: "Material Master Data Standardization & Enhancement",
    body: "Material masters are the largest and most complex of all master data types. In most manufacturing and asset-intensive organizations, material master data has been entered by dozens of individuals, over decades, to a variety of short-hands and standards, and with little governance. Data has accumulated both through everyday operating activities as well as mergers and acquisitions. End-users, manufacturing, purchasing, engineering, and finance share the resultant common data challenges of duplication, inconsistent, inaccurate, and incomplete descriptions. Often, small in-house data-cleaning projects have attempted to alleviate the problems. Infoplus MDM data cleaning solutions provide a stable long-term cure. Our implementations utilize leading software, are based on international standards and our market-leading technical dictionary, leverage our structured vendor reference catalog, follow consistent processes, and are delivered by a large team of experienced professionals.",
    highlights: [
      "Corporate-wide dictionary standards",
      "Consistent and compliant descriptions",
      "Duplicate elimination",
      "Golden material data achieved",
      "Efficient searching & improved asset utilization",
      "Enhanced procurement activities",
    ],
    direction: "left" as const,
  },
  {
    number: "02",
    title: "Material Master Data Governance",
    body: "Legacy data-cleaning addresses one piece of the master data jigsaw. Master data governance is equally essential. Every organization and ERP implementation is unique, and it is vital that your governance strategy is applicable to your specific business needs. Using our standard and highly configurable workflow software, our team of professionals design, build and implement appropriate master data governance solutions for large manufacturing and asset-intensive organizations. These strategies have a number of parts â€” standards, processes, software, and resources â€” that we advise upon and implement alongside your team. The Infoplus MDM approach, grounded in the reality that you have multiple consumers of data, has the long-term firmly in focus and includes data from global to warehouse levels across your entire operational business system and all entities.",
    highlights: [
      "Consistent, accurate material master data",
      "Approved corporate processes and controls",
      "Proper dictionary standard governance",
      "Efficient and visible request process",
      "Fast material search and discovery",
      "Global to warehouse level coverage",
    ],
    direction: "right" as const,
  },
  {
    number: "03",
    title: "Material Master Data Cleaning Consultancy",
    body: "Infoplus MDM has provided expert data cleaning and consultancy services on every continent (except Antarctica). Our large team of dedicated subject-matter experts covers all technical domains and has processed millions of material records for scores of clients in multiple industry verticals. Master data projects are inherently complex, and our successful solutions combine niche software and our deep specialist services. Effective implementations and projects often require a combination of internal and specialist external resources, and our large team of qualified, experienced professionals adds value to your organization, both during the project phase and during long-term governance. Infoplus MDM work with you to ensure you have a suitable blend of internal and external resources.",
    highlights: [
      "Expert coverage on every continent",
      "Millions of material records processed",
      "All technical domains covered",
      "Niche software + deep specialist services",
      "Seamless blend with your internal team",
      "Long-term governance support",
    ],
    direction: "left" as const,
  },
];

/* â”€â”€ Benefits â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const BENEFITS = [
  {
    category: "Data Quality",
    icon: Database,
    accentColor: "#6128a6",
    glowColor: "rgba(97,40,166,0.25)",
    items: [
      "Consistent, structured, and compliant data",
      "Defined dictionary templates and common naming conventions",
      "Harmonized descriptions across all regions",
      "Elimination of duplicates",
      "A single source of the truth",
    ],
  },
  {
    category: "Process",
    icon: Layers,
    accentColor: "#aa3bff",
    glowColor: "rgba(170,59,255,0.25)",
    items: [
      "Automated defined workflows and approval processes",
      "Structured and fully configurable workflow",
      "Fully integrated workflow",
      "Faster request processing and turnaround times",
      "Specialist catalogers liberate your front-line resources",
    ],
  },
  {
    category: "Visibility & Control",
    icon: Globe,
    accentColor: "#f85d37",
    glowColor: "rgba(248,93,55,0.25)",
    items: [
      "Enterprise-wide master view enables data analytics",
      "Prevents unnecessary purchases, optimizes inventory",
      "Full visibility of workflows and material request status",
      "Improved spend analytics for strategic sourcing",
      "Improved searching, finding, reporting, and monitoring",
    ],
  },
  {
    category: "Commercial",
    icon: TrendingUp,
    accentColor: "#aa3bff",
    glowColor: "rgba(170,59,255,0.25)",
    items: [
      "Reduce corporate spend on engineering spare parts",
      "Reduce free-text and off-contract spend",
      "Reduce stock holding and transfer surplus stock",
      "Reduce processing time",
      "Conduct strategic sourcing events with suppliers",
    ],
  },
];

export default function MasterDataManagementPage() {
  return (
    <div className="w-full">
      <PageMeta
        title="Master Data Management Solutions"
        description="Streamline your enterprise data with Infoplus Technologies UK's Master Data Management platform. Achieve data accuracy, consistency, and governance across your organisation."
        path="/products/master-data-management"
      />
      {/* â”€â”€ Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <PageHero
        badge="PRODUCTS"
        title="Master Data Management"
        description="We fulfill the needs of different delivery models â€” crafting a single version of the truth so your master data achieves the strategic foundational goal of providing accurate, reusable, and seamlessly syndicated information."
        variant="gradient"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {CORE_VALUES.map((v) => (
            <span
              key={v.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[13px] font-semibold"
              style={{
                borderColor: `${v.color}50`,
                backgroundColor: `${v.color}12`,
                color: v.color,
              }}
            >
              <v.icon className="w-3.5 h-3.5" />
              {v.label}
            </span>
          ))}
        </div>
      </PageHero>

      {/* â”€â”€ Intro section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ecdaff] opacity-50 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                  About Infoplus MDM
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight mb-6">
                  Pioneering innovative, customised&nbsp;
                  <span className="text-[#6128a6]">
                    business-critical solutions
                  </span>
                </h2>
                <p className="text-[16px] text-[#0d0517]/70 leading-relaxed mb-6 text-justify">
                  Our development teams are based in Europe and India to fulfill
                  the needs of different delivery models of our clients.
                  Infoplus is a pioneer in designing, developing, and deployment
                  of innovative and customized business-critical software
                  systems and solutions.
                </p>
                <p className="text-[16px] text-[#0d0517]/70 leading-relaxed text-justify">
                  With more than two decades of operation, Infoplus Technologies
                  has grown into an internationally recognized staffing service
                  provider. Through a clear vision and a customized plan, our
                  engineering teams provide cutting-edge services to all IT
                  companies including industry giants, mid-sized, and unicorns.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {CORE_VALUES.map((v, i) => (
                  <div
                    key={v.label}
                    className="group relative bg-white border border-[#ecdaff] rounded-2xl p-6 hover:shadow-[0_8px_32px_rgba(97,40,166,0.12)] transition-all duration-300 overflow-hidden"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${v.color}08 0%, transparent 70%)`,
                      }}
                    />
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        backgroundColor: `${v.color}15`,
                        color: v.color,
                      }}
                    >
                      <v.icon className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-[#0d0517] text-[15px]">
                      {v.label}
                    </p>
                    <div
                      className="w-8 h-0.5 rounded-full mt-2"
                      style={{ backgroundColor: v.color }}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* â”€â”€ MDM Overview + Solutions Grid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        {/* background orbs */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-40 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full bg-[#6128a6] opacity-20 blur-[120px] pointer-events-none" />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* overview text */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <ScrollReveal direction="up">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-6">
                Master Data Management
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-6">
                A single version of the&nbsp;
                <span className="text-[#aa3bff]">truth</span>
              </h2>
              <p className="text-[16px] text-white/60 leading-relaxed text-center">
                Asset-intensive industries operate in a fast-paced environment
                with dizzying volumes of data. Lack of data standards, controls,
                and structured governance processes leads inexorably to
                inaccurate, inconsistent, and non-compliant data. Infoplus
                master data management solutions craft a single version of the
                truth and allow your master data to achieve the strategic
                foundational goal of providing accurate and reusable
                information, seamlessly syndicated across your organization.
              </p>
            </ScrollReveal>
          </div>

          {/* Solutions heading */}
          <ScrollReveal direction="up" delay={80}>
            <h3 className="text-[13px] font-bold uppercase tracking-widest text-[#aa3bff] text-center mb-10">
              Our Solutions
            </h3>
          </ScrollReveal>

          {/* 9 solutions grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOLUTIONS.map((sol, i) => (
              <ScrollReveal key={sol.label} variant="card" delay={i * 60}>
                <div className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:bg-white/10 hover:border-[#aa3bff]/40 hover:shadow-[0_8px_32px_rgba(170,59,255,0.12)] transition-all duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#6128a6] to-[#aa3bff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <sol.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[14px] font-semibold text-white/90 group-hover:text-white transition-colors">
                    {sol.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-[#aa3bff] ml-auto shrink-0 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Detailed Solutions (alternating) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6128a6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Solutions
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d0517] leading-tight">
                Deep expertise across every&nbsp;
                <span className="text-[#6128a6]">master data dimension</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-32">
            {DETAIL_SOLUTIONS.map((sol, idx) => {
              const isRtl = idx % 2 !== 0;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRtl ? "lg:grid-flow-dense" : ""}`}
                >
                  {/* Text block */}
                  <ScrollReveal direction={sol.direction} delay={80}>
                    <div className={isRtl ? "lg:col-start-2" : ""}>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#6128a6]">
                          Solution {sol.number}
                        </span>
                        <div className="flex-1 h-px bg-[#6128a6]/20" />
                      </div>
                      <h3 className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-[#0d0517] leading-tight mb-6">
                        {sol.title}
                      </h3>
                      <p className="text-[15px] text-[#0d0517]/65 leading-relaxed text-justify">
                        {sol.body}
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Highlights card */}
                  <ScrollReveal
                    direction={isRtl ? "left" : "right"}
                    delay={180}
                  >
                    <div
                      className={`relative ${isRtl ? "lg:col-start-1 lg:row-start-1" : ""}`}
                    >
                      {/* giant faded number */}
                      <span
                        className="absolute -top-8 -right-4 text-[160px] font-black leading-none pointer-events-none select-none"
                        style={{ color: "#6128a6", opacity: 0.05 }}
                      >
                        {sol.number}
                      </span>

                      <div className="relative bg-white border border-[#ecdaff] rounded-3xl p-8 shadow-[0_8px_48px_rgba(97,40,166,0.08)] hover:shadow-[0_16px_64px_rgba(97,40,166,0.14)] transition-shadow duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#6128a6] to-[#aa3bff] flex items-center justify-center mb-6">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#6128a6] mb-5">
                          Key Outcomes
                        </h4>
                        <ul className="space-y-3">
                          {sol.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3"
                              style={{
                                animation: `revealFade 400ms ease ${i * 70 + 200}ms both`,
                              }}
                            >
                              <div className="w-5 h-5 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/30 flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle2 className="w-3 h-3 text-[#6128a6]" />
                              </div>
                              <span className="text-[14px] text-[#0d0517]/75 leading-snug">
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* â”€â”€ Benefits â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#381f55] opacity-50 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#6128a6] opacity-20 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-5">
                Benefits
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                Tangible outcomes across every&nbsp;
                <span className="text-[#aa3bff]">dimension</span>
              </h2>
              <p className="text-[16px] text-white/50 mt-4 max-w-2xl mx-auto">
                Our MDM solutions deliver measurable improvements in data
                quality, process efficiency, enterprise visibility, and
                bottom-line commercial results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <ScrollReveal
                key={benefit.category}
                variant="card"
                delay={idx * 100}
              >
                <div
                  className="group relative h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-opacity-60 transition-all duration-400 overflow-hidden"
                  style={{
                    ["--accent" as string]: benefit.accentColor,
                  }}
                >
                  {/* hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `radial-gradient(ellipse at 20% 20%, ${benefit.glowColor} 0%, transparent 65%)`,
                    }}
                  />

                  {/* icon + heading */}
                  <div className="relative z-10 flex items-center gap-4 mb-7">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${benefit.accentColor}20`,
                        color: benefit.accentColor,
                      }}
                    >
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className="text-[18px] font-bold"
                        style={{ color: benefit.accentColor }}
                      >
                        {benefit.category}
                      </h3>
                      <div
                        className="w-10 h-0.5 rounded-full mt-1"
                        style={{ backgroundColor: `${benefit.accentColor}50` }}
                      />
                    </div>
                  </div>

                  {/* benefit list */}
                  <ul className="relative z-10 space-y-3">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px]"
                          style={{ backgroundColor: benefit.accentColor }}
                        />
                        <span className="text-[14px] text-white/65 leading-snug group-hover:text-white/80 transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="py-24 bg-[#f8f5ff] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6128a6 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#1e0a38] via-[#381f55] to-[#6128a6] rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-[0_32px_80px_rgba(97,40,166,0.35)]">
              {/* orbs */}
              <div className="absolute top-[-30%] right-[-10%] w-80 h-80 rounded-full bg-[#aa3bff] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-[#f85d37] opacity-15 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/70 text-[11px] font-bold uppercase tracking-widest mb-6">
                Get Started
              </span>
              <h2 className="relative z-10 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-5">
                Ready to achieve golden data?
              </h2>
              <p className="relative z-10 text-[16px] text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
                Let Infoplus MDM craft a single version of the truth for your
                enterprise â€” accurate, consistent, and syndicated across every
                business unit and geography.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] hover:bg-[#e84d27] text-white font-bold text-[15px] transition-all duration-200 shadow-[0_8px_24px_rgba(248,93,55,0.35)]"
                >
                  Talk to Our Experts
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="/services/new-generation/everything-data"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-[15px] transition-all duration-200"
                >
                  Explore Everything Data
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}


