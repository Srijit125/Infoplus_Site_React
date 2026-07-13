import { PageMeta } from "../components/shared/PageMeta";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Target, Sparkles, Zap, MessageSquare, Network, Bot,
  Package, Users, UserCheck, FileSearch, TrendingUp,
  CheckCircle2, ArrowRight, ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";

type AIService = {
  icon: LucideIcon;
  gradient: string;
  title: string;
  shortDesc: string;
  tagline: string;
  desc: string;
  items: string[];
  why: string;
  featureTitle: string;
  features: string[];
};

const SVC: AIService[] = [
  {
    icon: Target,
    gradient: "from-[#381f55] to-[#6128a6]",
    title: "AI Strategy & Consulting",
    shortDesc: "Transform your business with a clear AI roadmap. We identify opportunities, design strategies, and guide successful adoption.",
    tagline: "Turn AI Ideas into Real Business Outcomes",
    desc: "Infoplus helps organizations identify where Artificial Intelligence can create the most value. We work closely with leadership teams to define a clear AI adoption roadmap. Our experts assess your current systems, data readiness, and business processes to identify opportunities where AI can improve efficiency and decision-making. We develop proof-of-concepts to validate AI use cases before full implementation, ensuring seamless integration with existing enterprise systems and measurable business outcomes.",
    items: ["AI Readiness Assessment", "Use Case Identification", "AI Roadmap Development", "Data Strategy & Governance", "Technology Selection", "Implementation Guidance", "Change Management", "Risk, Ethics & Compliance"],
    why: "Infoplus combines deep industry knowledge with strong technology expertise. We focus on practical AI implementations that solve real business challenges. Our global delivery model ensures scalable and cost-effective AI services with end-to-end consulting and implementation support.",
    featureTitle: "Strategic AI Transformation",
    features: ["AI architecture & governance planning", "Scalability & infrastructure assessment", "Proof-of-concept validation", "Enterprise-wide AI transformation", "ROI-focused strategy design", "Risk reduction in AI adoption"],
  },
  {
    icon: Sparkles,
    gradient: "from-[#3b0764] to-[#8b5cf6]",
    title: "Generative AI",
    shortDesc: "Unlock next-generation AI to automate content, insights, and decision-making across your enterprise.",
    tagline: "The Future of Enterprise Productivity Starts Here",
    desc: "Generative AI is revolutionizing how organizations create, manage, and use information. Infoplus Technologies helps enterprises implement Generative AI solutions that enhance productivity, automate knowledge workflows, and improve decision-making. Our services include AI copilots, enterprise knowledge assistants, intelligent content generation platforms, and advanced data-driven insights systems. We design secure and scalable Generative AI solutions tailored to enterprise environments.",
    items: ["AI Content Generation", "AI Chatbot & VAs", "Document Generation", "AI Code Generation", "Video, Image & Audio", "Enterprise Gen AI", "Knowledge Automation", "Multi-Modal AI Systems"],
    why: "Infoplus delivers enterprise-ready generative AI systems that are secure, scalable, and aligned with business needs. Our team focuses on practical implementations that enhance productivity while maintaining strong data protection standards.",
    featureTitle: "Next-Gen AI Power",
    features: ["AI copilots for enterprise teams", "Knowledge assistant platforms", "Intelligent content automation", "Advanced data-driven insights", "Secure & compliant deployment", "Multi-modal AI capabilities"],
  },
  {
    icon: Zap,
    gradient: "from-[#9a2600] to-[#f85d37]",
    title: "AI Powered Automation",
    shortDesc: "Eliminate repetitive tasks and accelerate operations with intelligent automation solutions.",
    tagline: "Let AI Handle Repetitive Tasks",
    desc: "AI Powered Automation enables organizations to streamline operations and improve efficiency across departments. Infoplus develops automation solutions that combine artificial intelligence with advanced workflow systems. Our automation services reduce operational costs and improve productivity by designing intelligent systems that learn from data and optimize processes across finance, HR, customer support, and operations.",
    items: ["Business Process Automation", "RPA with AI", "Customer Support Automation", "Document Processing", "Sales & Marketing", "Supply Chain Automation", "IT Ops (AIOps)", "Decision Automation"],
    why: "Infoplus brings strong expertise in enterprise technology and intelligent automation. Our solutions integrate with existing business systems, ensuring seamless transformation without disrupting operations.",
    featureTitle: "Intelligent Automation",
    features: ["Eliminate repetitive manual tasks", "Reduce operational costs by up to 60%", "Improve accuracy and consistency", "Scale operations efficiently", "Real-time operational insights", "Cross-department automation"],
  },
  {
    icon: MessageSquare,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    title: "Intelligent Chatbots & VAs",
    shortDesc: "Enhance customer engagement with AI-powered conversational solutions providing real-time responses.",
    tagline: "Smarter Conversations Powered by AI",
    desc: "Intelligent chatbots and virtual assistants help businesses deliver faster and more efficient customer interactions. Infoplus develops AI-powered conversational platforms that improve customer engagement with 24/7 support capabilities. We integrate solutions with websites, mobile apps, and enterprise systems while maintaining personalized interactions through natural language understanding.",
    items: ["Customer Support Automation", "Web & App Chatbots", "AI Virtual Assistants", "Multi-Channel Integration", "Natural Language Understanding", "Sales & Lead Gen", "Ecommerce Chatbots", "Chatbot Analytics"],
    why: "Infoplus builds scalable and secure chatbot solutions aligned with enterprise requirements. Our conversational AI systems improve engagement, increase efficiency, and support business growth.",
    featureTitle: "Conversational AI",
    features: ["24/7 intelligent customer support", "Natural language processing", "Omnichannel deployment", "Reduced support costs", "Real-time response capabilities", "Continuous learning & improvement"],
  },
  {
    icon: Network,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    title: "AI Enterprise Integration",
    shortDesc: "Bring AI capabilities directly into your existing enterprise platforms for smarter workflows.",
    tagline: "Bringing AI into Your Business Ecosystem",
    desc: "AI delivers the most value when integrated with enterprise systems. Infoplus specializes in connecting AI technologies with existing business platforms such as ERP, CRM, and operational applications. We evaluate system architecture, data flow, and business processes before implementing AI-driven capabilities, ensuring smooth operation without disruption.",
    items: ["ERP System Integration", "CRM Integration with AI", "Workflow Integration", "Cloud AI Integration", "AI API & Microservices", "Enterprise Knowledge AI", "Security & Compliance", "Scalable Architecture"],
    why: "Infoplus has extensive experience in enterprise technology environments, delivering smooth AI integrations that enhance business performance without disrupting existing workflows.",
    featureTitle: "Seamless AI Integration",
    features: ["ERP & CRM AI enablement", "Secure data handling & governance", "Cloud-native AI integration", "Real-time intelligent insights", "API-first architecture", "Non-disruptive implementation"],
  },
  {
    icon: Bot,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    title: "AI Agentic Operations",
    shortDesc: "Empower your business with AI agents that perform tasks, analyze data, and support decisions automatically.",
    tagline: "The Future of Business Operations Powered by AI Agents",
    desc: "AI Agentic Operations represent the next stage of enterprise automation where intelligent systems perform tasks, make decisions, and coordinate workflows with minimal human intervention. Infoplus helps organizations implement AI agents that analyze information, trigger processes, and support operational efficiency across departments continuously learning and improving over time.",
    items: ["Autonomous Workflows", "AI Decision-Making", "Multi-Agent Systems", "Self-Learning Processes", "Process Orchestration", "AIOps", "Human-AI Collaboration", "Resource Allocation"],
    why: "Infoplus combines enterprise system expertise with advanced AI development capabilities to deliver reliable AI agent solutions aligned with business goals, ensuring smooth integration and strong security practices.",
    featureTitle: "Autonomous AI Agents",
    features: ["Minimal human intervention", "Continuous self-improvement", "Cross-department coordination", "Intelligent dashboards & reporting", "Enterprise governance compliant", "Dynamic & adaptive operations"],
  },
  {
    icon: Package,
    gradient: "from-[#78350f] to-[#f59e0b]",
    title: "AI Supply Chain Optimization",
    shortDesc: "Optimize supply chain operations with intelligent forecasting and real-time insights.",
    tagline: "Transform Logistics into Real-Time Intelligence",
    desc: "Supply chain operations are becoming increasingly complex, requiring businesses to manage large volumes of data, suppliers, and logistics processes. Infoplus provides AI Supply Chain Optimization solutions that help organizations improve efficiency, visibility, and decision-making across the entire supply network. Our AI models analyze historical data, demand patterns, and operational variables to deliver accurate forecasting and planning insights.",
    items: ["Demand Forecasting", "Inventory Optimization", "Supply Chain Visibility", "Logistics & Route Optimization", "Procurement Automation", "Warehouse Automation", "Supplier Risk Analysis", "Disruption Prediction"],
    why: "Infoplus understands the challenges organizations face in managing modern supply chains. Our AI solutions provide accurate insights and operational efficiency with scalable, secure systems that integrate with enterprise infrastructure.",
    featureTitle: "Smart Supply Chain",
    features: ["Real-time supply chain monitoring", "Accurate demand forecasting", "Reduced operational costs", "Proactive risk management", "Optimized delivery performance", "Strategic planning dashboards"],
  },
  {
    icon: Users,
    gradient: "from-[#831843] to-[#ec4899]",
    title: "AI Customer Experience",
    shortDesc: "Deliver personalized and intelligent customer experiences powered by advanced analytics and AI.",
    tagline: "AI that Understands Your Customer Better",
    desc: "Customer expectations continue to evolve, and businesses must deliver faster, more personalized experiences to remain competitive. Infoplus offers AI Customer Experience Platforms that enable organizations to understand customer behavior, predict needs, and deliver seamless interactions across channels. Our AI-driven solutions analyze customer data from multiple touchpoints to provide deeper insights into preferences and engagement patterns.",
    items: ["Omnichannel Engagement", "AI Personalization", "Journey Analytics", "Sentiment Analysis", "Recommendation Systems", "Retention & Loyalty", "Self-Service Portals", "Performance Analytics"],
    why: "Infoplus brings a strong understanding of enterprise customer engagement strategies. Our AI solutions improve personalization and customer insights through scalable platforms that integrate with business systems.",
    featureTitle: "Personalized Experiences",
    features: ["360° customer view", "Real-time sentiment tracking", "Smart recommendations engine", "Multi-channel consistency", "Increased customer satisfaction", "Data-driven engagement"],
  },
  {
    icon: UserCheck,
    gradient: "from-[#064e3b] to-[#10b981]",
    title: "AI in HR & Talent",
    shortDesc: "Modernize HR operations with AI-driven workforce insights, smart recruitment, and analytics.",
    tagline: "Build Stronger Teams with AI-Driven Decisions",
    desc: "Human resource management is evolving as organizations seek smarter ways to attract, develop, and retain talent. Infoplus provides AI-driven HR and Talent Management solutions that help companies make data-informed workforce decisions and improve employee experiences. Our AI solutions streamline recruitment processes, provide workforce analytics, automate HR workflows, and deliver predictive insights for talent strategy planning.",
    items: ["AI Talent Acquisition", "Resume Screening", "Recruitment Automation", "Onboarding Automation", "Workforce Analytics", "Performance Analysis", "Learning & Development", "Attrition Prediction"],
    why: "Infoplus understands the importance of building strong and productive workforces. Our AI solutions support HR teams in making smarter decisions with seamless integration into existing HR platforms and scalable solutions that adapt to organisational growth.",
    featureTitle: "Intelligent HR Operations",
    features: ["Smarter, faster recruitment", "Data-informed workforce decisions", "Automated onboarding workflows", "Employee sentiment tracking", "Predictive retention insights", "Diversity & inclusion analytics"],
  },
  {
    icon: FileSearch,
    gradient: "from-[#1e293b] to-[#475569]",
    title: "AI Document Analysis",
    shortDesc: "Automate document processing extract, classify, and analyze large volumes with AI precision.",
    tagline: "Automate Document Processing with AI Precision",
    desc: "Organisations generate and manage large volumes of documents every day, including contracts, reports, invoices, and operational records. Infoplus provides AI Document Analysis solutions that help businesses extract valuable insights from these documents quickly and accurately. Our AI systems automatically read, classify, and analyze documents across different formats, continuously improving accuracy over time through adaptive learning models.",
    items: ["Intelligent Capture", "OCR Technology", "Data Extraction", "Document Classification", "Invoice Processing", "Contract Analysis", "Compliance Processing", "Fraud Detection"],
    why: "Infoplus delivers reliable AI document intelligence solutions designed for enterprise environments. We develop customized AI models that handle large volumes of documents with improved accuracy and faster processing times.",
    featureTitle: "Intelligent Document Processing",
    features: ["Process thousands of documents daily", "Advanced OCR capabilities", "Multi-format document support", "Reduce manual effort by 80%+", "Industry-specific AI models", "Continuous accuracy improvement"],
  },
  {
    icon: TrendingUp,
    gradient: "from-[#7f1d1d] to-[#ef4444]",
    title: "AI Financial Operations",
    shortDesc: "Improve financial decision-making with AI-powered analytics, risk detection, and real-time insights.",
    tagline: "AI that Brings Clarity to Complex Financial Data",
    desc: "Financial operations are at the core of every organisation, and managing them efficiently requires accuracy, speed, and clear insights. Infoplus offers AI-powered Financial Operations solutions designed to help enterprises modernise their finance functions and improve decision-making. Our AI systems analyse financial data in real time, enabling businesses to identify trends, detect anomalies, and automate routine financial tasks such as invoice processing, expense tracking, and transaction monitoring.",
    items: ["Financial Data Analysis", "Fraud Detection", "Predictive Forecasting", "Automated Reporting", "Risk & Credit Scoring", "Revenue Prediction", "Compliance Monitoring", "AI Budget Planning"],
    why: "Infoplus brings a strong combination of financial domain understanding and advanced AI capabilities. We deliver AI systems that are reliable, secure, and easy to integrate with enterprise platforms, ensuring businesses gain meaningful insights from their financial data with scalable architectures that support long-term growth.",
    featureTitle: "Intelligent Finance",
    features: ["Real-time financial analytics", "Intelligent anomaly detection", "Automated compliance monitoring", "Predictive cash flow insights", "Reduced manual processing", "Stronger financial governance"],
  },
];

export default function AIPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goToDetail = (idx: number) => {
    setTimeout(
      () => sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50
    );
  };

  useEffect(() => {
    const OFFSET = 140;
    const onScroll = () => {
      if (!detailRef.current) return;
      const { top, bottom } = detailRef.current.getBoundingClientRect();
      // Only run spy while the section is actually on screen
      if (top > OFFSET || bottom <= 0) return;
      let next = 0;
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const el = sectionRefs.current[i];
        if (el && el.getBoundingClientRect().top <= OFFSET) next = i;
      }
      setActiveIdx(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full">
      <PageMeta
        title="Artificial Intelligence Services"
        description="Harness the power of AI with Infoplus Technologies UK. Our artificial intelligence services deliver intelligent automation, machine learning, and data-driven insights for UK enterprises."
        path="/services/it-services/artificial-intelligence"
      />
      {/* ── Hero ──────────────────────────────────────────────── */}
      <PageHero
        title="Turning Data into Business Value"
        description="From the power of automation and analytics to smart applications and intelligent data insights, AI is making businesses faster, smarter, and more competitive. Infoplus Technologies UK Ltd delivers end-to-end AI solutions."
        badge="ARTIFICIAL INTELLIGENCE"
        variant="centered"
      >
        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => goToDetail(0)}
            className="px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors"
          >
            Explore AI Services
          </button>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Talk to Experts
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-white/10 max-w-lg mx-auto">
          {[
            { value: "11+", label: "AI Service Areas" },
            { value: "100+", label: "AI Implementations" },
            { value: "120+", label: "Enterprise Clients" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-[38px] font-black text-white leading-none mb-1">{value}</p>
              <p className="text-[12px] text-white/50 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      {/* ── Our AI Services (overview cards) ──────────────────── */}
      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                What We Offer
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">Our AI Services</h2>
            </div>
            <p className="text-[16px] text-[#555] text-center max-w-3xl mx-auto mb-14 leading-relaxed">
              The successful implementation of AI is not just about the technology it is about the
              strategy, the infrastructure, and the experts who can deliver the power of data as a
              significant business outcome.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SVC.map((s, i) => {
              const CardIcon = s.icon;
              return (
                <ScrollReveal
                  key={i}
                  direction="fade"
                  variant="card"
                  delay={Math.min(i % 4, 3) * 80}
                >
                  <button
                    onClick={() => goToDetail(i)}
                    className="group w-full text-left bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#6128a6]/30 hover:shadow-[0_16px_48px_-8px_rgba(97,40,166,0.12)] hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Gradient accent bar */}
                    <div className={`h-1.5 w-full bg-linear-to-r ${s.gradient}`} />

                    <div className="p-5">
                      <div
                        className={`w-11 h-11 rounded-xl bg-linear-to-br ${s.gradient} flex items-center justify-center mb-4`}
                      >
                        <CardIcon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-[14.5px] font-bold text-[#111] mb-2 group-hover:text-[#6128a6] transition-colors leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-[12.5px] text-[#666] leading-relaxed line-clamp-3 mb-4">
                        {s.shortDesc}
                      </p>
                      <div className="flex items-center gap-1 text-[12px] font-semibold text-[#6128a6] group-hover:text-[#f85d37] transition-colors">
                        Explore <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Service Detail Explorer ────────────────────────────── */}
      <section
        ref={detailRef}
        className="py-20 bg-white"
        style={{ scrollMarginTop: "88px" }}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                In Depth
              </span>
              <h2 className="text-[36px] font-bold text-[#111] mt-2">
                Explore AI Capabilities
              </h2>
            </div>
          </ScrollReveal>

          {/* Mobile pill tabs — scroll-to anchors */}
          <div
            className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-8"
            style={{ scrollbarWidth: "none" }}
          >
            {SVC.map((s, i) => (
              <button
                key={i}
                onClick={() => goToDetail(i)}
                className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all border ${
                  activeIdx === i
                    ? "bg-[#1e0a38] text-white border-[#1e0a38]"
                    : "bg-white text-[#555] border-[#e5e4e7] hover:border-[#6128a6]/40"
                }`}
              >
                <span className="text-[10px] opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sticky sidebar — highlights active section as user scrolls */}
            <div className="hidden lg:block w-72 shrink-0 sticky top-25 self-start">
              <div className="bg-[#f8f5ff] border border-[#e5e4e7] rounded-2xl p-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#888] px-3 py-2">
                  AI Services
                </p>
                <div className="space-y-0.5">
                  {SVC.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => goToDetail(i)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                        activeIdx === i
                          ? "bg-[#1e0a38] text-white"
                          : "text-[#555] hover:bg-white hover:text-[#6128a6]"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          activeIdx === i
                            ? "bg-white/20 text-white"
                            : "bg-[#ecdaff] text-[#6128a6]"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[13px] font-medium leading-tight">{s.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* All content sections rendered vertically */}
            <div className="flex-1 min-w-0">
              {SVC.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    ref={(el) => { sectionRefs.current[i] = el; }}
                    style={{ scrollMarginTop: "140px" }}
                    className={i < SVC.length - 1 ? "mb-20 pb-20 border-b border-[#f0eff5]" : ""}
                  >
                    {/* Service header */}
                    <div className="flex items-start gap-4 mb-7 pb-7 border-b border-[#f0eff5]">
                      <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${s.gradient} flex items-center justify-center shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#f85d37]">
                          Service {String(i + 1).padStart(2, "0")} of {SVC.length}
                        </span>
                        <h3 className="text-[26px] font-bold text-[#111] mt-0.5 leading-tight">{s.title}</h3>
                        <p className="text-[14px] text-[#6128a6] font-medium italic mt-1">"{s.tagline}"</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[15.5px] text-[#444] leading-[1.8] mb-8">{s.desc}</p>

                    {/* Services offered */}
                    <div className="mb-8">
                      <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#888] mb-4">
                        Services Offered
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {s.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-2.5 p-3 bg-[#f8f5ff] rounded-xl border border-[#e8e0f7]">
                            <CheckCircle2 className="w-4 h-4 text-[#6128a6] shrink-0" />
                            <span className="text-[13.5px] text-[#333] font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why Infoplus */}
                    <div className="bg-[#0d0517] rounded-2xl p-7">
                      <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#aa3bff] mb-3">
                        Why Infoplus?
                      </h4>
                      <p className="text-[14px] text-white/65 leading-relaxed mb-6">{s.why}</p>
                      <div className="border-t border-white/10 pt-5">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-4">
                          {s.featureTitle}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {s.features.map((f, k) => (
                            <div key={k} className="flex items-start gap-2 text-[13px] text-white/60">
                              <ChevronRight className="w-3.5 h-3.5 text-[#aa3bff] shrink-0 mt-0.5" />
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0d0517] to-[#381f55] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              {/* Orbs */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Get Started Today
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Ready to Transform Your<br className="hidden md:block" /> Business with AI?
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Technologies UK Ltd to unlock the full potential of
                  Artificial Intelligence for your enterprise. Let's build intelligent solutions together.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
                  >
                    Email Our Team
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
