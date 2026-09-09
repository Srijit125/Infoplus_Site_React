import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";
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

/* ── Our Solutions ─────────────────────────────────────────────── */
const SOLUTIONS = [
  {
    icon: Search,
    label: "Data Cleaning & Standardisation",
    desc: "We fix duplicate, messy, and inconsistent data so every record follows the same clear standard. This gives your business one clean, trustworthy version of the truth to work from.",
  },
  {
    icon: Database,
    label: "Material Master Consultancy",
    desc: "We guide you through organising your material data properly by using proven methods from decades of real projects. You get expert advice, not just software recommendations.",
  },
  {
    icon: Users,
    label: "Vendor Master Cleaning",
    desc: "We clean up and organise your supplier records, so there's no confusion between duplicated or outdated vendor entries. This makes purchasing and payments smoother and more accurate.",
  },
  {
    icon: ClipboardList,
    label: "Physical Verification",
    desc: "We not only do verification digitally in your systems. We check your actual assets and materials on-site physically to confirm that they match what is recorded in the systems. We do this to close the gap between the digital records and the physical records.",
  },
  {
    icon: Package,
    label: "Plant Asset Management",
    desc: "We help you manage and track your equipment and inventory properly, so you always know what you have — nothing gets lost or wasted.",
  },
  {
    icon: Shield,
    label: "Data Governance",
    desc: "We set up simple rules and approval steps to keep your data accurate over time, so problems don't come back later.",
  },
  {
    icon: Layers,
    label: "Service Masters",
    desc: "We organise your service-related data so it's consistent across every team and system, making your reports and decisions more reliable.",
  },
  {
    icon: BarChart3,
    label: "Product Master Management",
    desc: "We keep your product information consistent and accurate everywhere it's used, stopping mismatches between what's listed and what's actually available.",
  },
  {
    icon: CheckCircle2,
    label: "Consultancy Support",
    desc: "Our team stays with you for ongoing support — not just a one-time fix and then leave you.",
  },
];

/* ── Core Values ───────────────────────────────────────────────── */
const CORE_VALUES = [
  { icon: Zap,       label: "Availability", color: "#EB9B3D" },
  { icon: TrendingUp,label: "Scalability",  color: "#DA4D33" },
  { icon: Shield,    label: "Reliability",  color: "#F0783A" },
  { icon: Globe,     label: "Lucidity",     color: "#EB9B3D" },
];

/* ── Detailed Solutions ────────────────────────────────────────── */
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
    body: "Legacy data-cleaning addresses one piece of the master data jigsaw. Master data governance is equally essential. Every organization and ERP implementation is unique, and it is vital that your governance strategy is applicable to your specific business needs. Using our standard and highly configurable workflow software, our team of professionals design, build and implement appropriate master data governance solutions for large manufacturing and asset-intensive organizations. These strategies have a number of parts standards, processes, software, and resources that we advise upon and implement alongside your team. The Infoplus MDM approach, grounded in the reality that you have multiple consumers of data, has the long-term firmly in focus and includes data from global to warehouse levels across your entire operational business system and all entities.",
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

/* ── Benefits ──────────────────────────────────────────────────── */
const BENEFITS: {
  number: string;
  category: string;
  icon: React.ElementType;
  accentColor: string;
  glowColor: string;
  items: string[];
}[] = [
  {
    number: "01",
    category: "Data Quality",
    icon: Database,
    accentColor: "#EB9B3D",
    glowColor: "rgba(235,155,61,0.28)",
    items: [
      "Consistent, structured, and compliant data",
      "Defined dictionary templates and common naming conventions",
      "Harmonized descriptions across all regions",
      "Elimination of duplicates",
      "A single source of the truth",
    ],
  },
  {
    number: "02",
    category: "Process",
    icon: Layers,
    accentColor: "#DA4D33",
    glowColor: "rgba(218,77,51,0.28)",
    items: [
      "Automated defined workflows and approval processes",
      "Structured and fully configurable workflow",
      "Fully integrated workflow",
      "Faster request processing and turnaround times",
      "Specialist catalogers liberate your front-line resources",
    ],
  },
  {
    number: "03",
    category: "Visibility & Control",
    icon: Globe,
    accentColor: "#F0783A",
    glowColor: "rgba(240,120,58,0.28)",
    items: [
      "Enterprise-wide master view enables data analytics",
      "Prevents unnecessary purchases, optimizes inventory",
      "Full visibility of workflows and material request status",
      "Improved spend analytics for strategic sourcing",
      "Improved searching, finding, reporting, and monitoring",
    ],
  },
  {
    number: "04",
    category: "Commercial",
    icon: TrendingUp,
    accentColor: "#EB9B3D",
    glowColor: "rgba(235,155,61,0.28)",
    items: [
      "Reduce corporate spend on engineering spare parts",
      "Reduce free-text and off-contract spend",
      "Reduce stock holding and transfer surplus stock",
      "Reduce processing time",
      "Conduct strategic sourcing events with suppliers",
    ],
  },
];

const MDM_FAQS: FAQItem[] = [
  {
    q: "What is master data management in simple terms?",
    a: "It's the process of organising your core business data and cleaning it up — things like materials, suppliers, or assets — so everyone in your business works from the same accurate information, instead of conflicting versions.",
  },
  {
    q: "Why does my data get messy in the first place?",
    a: "When our company was started many years ago, the data was entered by different people without a consistent system. Add merges, new software, or manual processes, and errors build up naturally.",
  },
  {
    q: "What's the difference between data cleansing and BAU cataloguing?",
    a: "Data cleansing fixes the problems and mess that already exists. BAU cataloguing keeps things accurate going forward, so new data doesn't fall into the same problems.",
  },
  {
    q: "Why would I need a plant walkdown if I already have digital records?",
    a: "Because what you see on screen doesn't always match what's physically there. A plant walkdown means we check your equipment in person, so we know your records are actually correct.",
  },
];

export default function MasterDataManagementPage() {
  return (
    <div className="w-full">
      <PageMeta
        title="MRO Master Data Management | Infoplus Technologies UK"
        description="Infoplus's offshore MDM centre cleans and standardises MRO master data for asset-intensive organisations managing complex material catalogues."
        keywords="Data Management in UK, Data Management service in UK"
        path="/products/master-data-management"
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        badge="PRODUCTS"
        title="Clean Data. Confident Solutions"
        description="Messy data leads to guesswork–duplicate records, wrong numbers, and then we need to make decisions on shaky ground. We clean up all the mess, and we fix it that way, so every decision your business makes is backed by the information you can actually trust."
        variant="gradient"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-3">
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

      {/* ── Intro section ────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FEF0DC] opacity-50 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                  About Infoplus MDM
                </span>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d112d] leading-tight mb-6">
                  Pioneering innovative, customised&nbsp;
                  <span className="text-[#EB9B3D]">
                    business-critical solutions
                  </span>
                </h2>
                <p className="text-[16px] text-[#0d112d]/70 leading-relaxed mb-6 text-justify">
                  Our development teams are based in Europe and India to fulfill
                  the needs of different delivery models of our clients.
                  Infoplus is a pioneer in designing, developing, and deployment
                  of innovative and customized business-critical software
                  systems and solutions.
                </p>
                <p className="text-[16px] text-[#0d112d]/70 leading-relaxed text-justify">
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
                    className="group relative bg-white border border-[rgba(13,17,45,0.08)] rounded-2xl p-6 hover:shadow-[0_8px_32px_rgba(235,155,61,0.12)] transition-all duration-300 overflow-hidden"
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
                      style={{ backgroundColor: `${v.color}15`, color: v.color }}
                    >
                      <v.icon className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-[#0d112d] text-[15px]">{v.label}</p>
                    <div className="w-8 h-0.5 rounded-full mt-2" style={{ backgroundColor: v.color }} />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MDM Overview + Solutions Grid ────────────────────── */}
      <section className="py-24 bg-[#141A3D] relative overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0D112D] opacity-60 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full bg-[#EB9B3D] opacity-15 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <ScrollReveal direction="up">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/30 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-6">
                Master Data Management
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-6">
                A single version of the&nbsp;
                <span className="text-[#EB9B3D]">truth</span>
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

          <ScrollReveal direction="up" delay={80}>
            <h3 className="text-[13px] font-bold uppercase tracking-widest text-[#EB9B3D] text-center mb-10">
              Our Solutions
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOLUTIONS.map((sol, i) => (
              <ScrollReveal key={sol.label} variant="card" delay={i * 60}>
                <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#EB9B3D]/40 hover:shadow-[0_8px_32px_rgba(235,155,61,0.12)] transition-all duration-300 cursor-default">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <sol.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[14px] font-semibold text-white/90 group-hover:text-white transition-colors leading-snug">
                      {sol.label}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-relaxed">{sol.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Solutions (alternating) ─────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Solutions
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-[#0d112d] leading-tight">
                Deep expertise across every&nbsp;
                <span className="text-[#EB9B3D]">master data dimension</span>
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
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#EB9B3D]">
                          Solution {sol.number}
                        </span>
                        <div className="flex-1 h-px bg-[#EB9B3D]/20" />
                      </div>
                      <h3 className="text-[clamp(1.4rem,2.5vw,2rem)] font-bold text-[#0d112d] leading-tight mb-6">
                        {sol.title}
                      </h3>
                      <p className="text-[15px] text-[#0d112d]/65 leading-relaxed text-justify">{sol.body}</p>
                    </div>
                  </ScrollReveal>

                  {/* Highlights card */}
                  <ScrollReveal direction={isRtl ? "left" : "right"} delay={180}>
                    <div className={`relative ${isRtl ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                      <span
                        className="absolute -top-8 -right-4 text-[160px] font-black leading-none pointer-events-none select-none"
                        style={{ color: "#EB9B3D", opacity: 0.05 }}
                      >
                        {sol.number}
                      </span>

                      <div className="relative bg-white border border-[rgba(235,155,61,0.20)] rounded-3xl p-8 shadow-[0_8px_48px_rgba(235,155,61,0.08)] hover:shadow-[0_16px_64px_rgba(235,155,61,0.14)] transition-shadow duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center mb-6">
                          <Database className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-[13px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-5">
                          Key Outcomes
                        </h4>
                        <ul className="space-y-3">
                          {sol.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3"
                              style={{ animation: `revealFade 400ms ease ${i * 70 + 200}ms both` }}
                            >
                              <div className="w-5 h-5 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/30 flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle2 className="w-3 h-3 text-[#EB9B3D]" />
                              </div>
                              <span className="text-[14px] text-[#0d112d]/75 leading-snug">{h}</span>
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

      {/* ── Benefits ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#141A3D] relative overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#0D112D] opacity-60 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#EB9B3D] opacity-15 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/15 border border-[#EB9B3D]/30 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">
                Benefits
              </span>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight">
                Tangible outcomes across every&nbsp;
                <span className="text-[#EB9B3D]">dimension</span>
              </h2>
              <p className="text-[16px] text-white/50 mt-4 max-w-2xl mx-auto">
                Our MDM solutions deliver measurable improvements in data
                quality, process efficiency, enterprise visibility, and
                bottom-line commercial results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((benefit, idx) => (
              <ScrollReveal key={benefit.category} variant="card" delay={idx * 100}>
                <div className="group relative flex flex-col h-full bg-white/4 border border-white/10 rounded-3xl p-6 hover:border-white/20 hover:shadow-[0_20px_56px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ background: `radial-gradient(ellipse at 25% 20%, ${benefit.glowColor} 0%, transparent 65%)` }}
                  />
                  <span
                    aria-hidden
                    className="absolute top-2 right-4 font-black text-[80px] leading-none select-none pointer-events-none"
                    style={{ color: `${benefit.accentColor}0d` }}
                  >
                    {benefit.number}
                  </span>

                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${benefit.accentColor}1a`, color: benefit.accentColor }}
                  >
                    <benefit.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-[17px] font-bold text-white mb-1 relative z-10">{benefit.category}</h3>
                  <div
                    className="w-8 h-0.5 rounded-full mb-4 group-hover:w-14 transition-all duration-300"
                    style={{ backgroundColor: `${benefit.accentColor}70` }}
                  />

                  <ul className="relative z-10 space-y-2.5">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-[7px]"
                          style={{ backgroundColor: benefit.accentColor }}
                        />
                        <span className="text-[13px] text-white/60 leading-snug group-hover:text-white/75 transition-colors duration-300">
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

      <FAQAccordion faqs={MDM_FAQS} badge="FAQs" title="Frequently Asked Questions" subtitle="Common questions about our master data management services." />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <ScrollReveal variant="card">
            <div className="relative bg-linear-to-br from-[#0D112D] via-[#141A3D] to-[#242E72] rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-[0_32px_80px_rgba(13,17,45,0.35)]">
              <div className="absolute top-[-30%] right-[-10%] w-80 h-80 rounded-full bg-[#EB9B3D] opacity-20 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 rounded-full bg-[#DA4D33] opacity-15 blur-[80px] pointer-events-none" />

              <span className="relative z-10 inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/30 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-6">
                Get Started
              </span>
              <h2 className="relative z-10 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white leading-tight mb-5">
                Ready to achieve golden data?
              </h2>
              <p className="relative z-10 text-[16px] text-white/65 leading-relaxed mb-10 max-w-2xl mx-auto">
                Let Infoplus MDM craft a single version of the truth for your
                enterprise accurate, consistent, and syndicated across every
                business unit and geography.
              </p>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="w-full sm:w-auto group/btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-opacity duration-200 hover:opacity-85 shadow-[0_8px_24px_rgba(235,155,61,0.35)]"
                  style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
                >
                  Talk to Our Experts
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="/services/new-generation/everything-data"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-[15px] transition-all duration-200"
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
