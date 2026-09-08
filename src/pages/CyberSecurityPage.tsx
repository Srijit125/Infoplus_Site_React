import { useState, useRef, useEffect } from "react";
import { PageMeta } from "../components/shared/PageMeta";
import { Link } from "react-router-dom";
import {
  Shield,
  Eye,
  Search,
  Settings,
  AlertCircle,
  Lock,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

type CyberService = {
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  title: string;
  desc: string;
  features: string[];
};

const CYBER_SERVICES: CyberService[] = [
  {
    icon: Eye,
    gradient: "from-[#381f55] to-[#6128a6]",
    accentColor: "#aa3bff",
    title: "Security Management Center (SOC) & Managed Detection Response (MDR)",
    desc: "Protect your business with 24/7 threat monitoring, advanced analytics, and rapid incident response to stop cyber threats before they impact operations. Infoplus ensures continuous security visibility across networks, endpoints, and applications to keep your digital environment safe.",
    features: [
      "24/7 threat monitoring",
      "Advanced analytics",
      "Rapid incident response",
      "Continuous security visibility",
    ],
  },
  {
    icon: Search,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    accentColor: "#93c5fd",
    title: "Vulnerability Assessment & Threat Management",
    desc: "Identify hidden security gaps and reduce risks with proactive vulnerability scanning and real-world attack simulations. Infoplus helps organizations detect, prioritize, and remediate threats before cybercriminals exploit them.",
    features: [
      "Proactive vulnerability scanning",
      "Real-world attack simulations",
      "Risk prioritisation",
      "Threat remediation",
    ],
  },
  {
    icon: Lock,
    gradient: "from-[#9a2600] to-[#f85d37]",
    accentColor: "#ff9a7a",
    title: "Identity & Access Management",
    desc: "Control who can access your systems with secure authentication, access policies, and identity governance solutions. Infoplus protects digital identities while enabling seamless and secure access across enterprise applications.",
    features: [
      "Secure authentication",
      "Access policy management",
      "Identity governance",
      "Enterprise SSO & MFA",
    ],
  },
  {
    icon: Shield,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    accentColor: "#5eead4",
    title: "Cloud Security Operations",
    desc: "Secure your cloud infrastructure with continuous monitoring, data protection, and intelligent threat detection. Infoplus ensures safe cloud adoption and protects workloads across public, private, and hybrid cloud environments.",
    features: [
      "Continuous cloud monitoring",
      "Data protection",
      "Intelligent threat detection",
      "Multi-cloud security",
    ],
  },
  {
    icon: Settings,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    accentColor: "#c4b5fd",
    title: "Zero Trust Security & Compliance Governance",
    desc: "Adopt a modern security model where every access request is verified to prevent unauthorized activity. Infoplus helps organizations implement Zero Trust frameworks while meeting industry compliance standards.",
    features: [
      "Zero Trust framework implementation",
      "Access verification",
      "Compliance management",
      "Security policy governance",
    ],
  },
];

const AI_CAPABILITIES = [
  "AI & ML-powered behavioural analysis",
  "Human behaviour insight detection",
  "Anomaly detection in real time",
  "Cryptography and malware expertise",
  "Software exploit analysis",
  "Security auditing & network review",
];

type CyberCapability = {
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  title: string;
  shortDesc: string;
  tagline: string;
  desc: string;
  items: string[];
  why: string;
  featureTitle: string;
  features: string[];
};

const CYBER_CAPABILITIES: CyberCapability[] = [
  {
    icon: Eye,
    gradient: "from-[#381f55] to-[#6128a6]",
    accentColor: "#aa3bff",
    title: "Security Management Center (SOC) & MDR",
    shortDesc: "Protect your business with 24/7 threat monitoring and rapid incident response.",
    tagline: "Security That Never Sleeps",
    desc: "Cyber threats are evolving every minute, making continuous monitoring essential for businesses of all sizes. Infoplus provides advanced Security Operations Center services designed to detect, analyse, and respond to cyber threats instantly. Our SOC operates around the clock, ensuring your IT infrastructure is constantly protected. We combine AI-driven monitoring with human expertise to identify suspicious activities before they escalate, enabling businesses to operate securely without interruption.",
    items: [
      "24/7 Security Monitoring",
      "Threat Intelligence Integration",
      "Incident Detection & Response",
      "SIEM Management",
      "Automated Security Alerts",
      "Endpoint Monitoring",
      "Network Traffic Analysis",
      "Malware Detection & Removal",
      "Proactive Threat Hunting",
      "Security Reporting & Analytics",
    ],
    why: "Infoplus provides enterprise-grade monitoring tailored to your specific environment. Our security experts continuously analyse threats and use intelligent automation to reduce response times significantly. Our solutions scale with business growth and proactively hunt threats rather than reacting after damage is done. Businesses receive detailed security insights and compliance reports, operating confidently with expert protection around the clock.",
    featureTitle: "Enterprise SOC Benefits",
    features: [
      "Proactive threat hunting across digital ecosystem",
      "AI-driven automation reduces response time",
      "Scalable solutions growing with your business",
      "Real-time dashboards and security insights",
      "Detailed compliance and audit reporting",
      "Continuous protection across hybrid environments",
    ],
  },
  {
    icon: Search,
    gradient: "from-[#1e3a8a] to-[#3b82f6]",
    accentColor: "#93c5fd",
    title: "Vulnerability Assessment & Threat Management",
    shortDesc: "Identify hidden security gaps and reduce risks with proactive vulnerability scanning.",
    tagline: "Risk-Free Digital Operations",
    desc: "Modern cyber-attacks often exploit unnoticed vulnerabilities in systems, networks, and applications. Infoplus helps organisations identify and eliminate security gaps through advanced vulnerability assessment services that analyse infrastructure from every angle. We detect potential risks before they impact operations, prioritise them based on severity and business impact, and provide actionable remediation guidance. Our team works closely with IT departments to close security gaps and maintain a strong defence posture, helping businesses maintain continuity and customer trust.",
    items: [
      "Vulnerability Scanning & Discovery",
      "Penetration Testing",
      "Risk Assessment & Prioritisation",
      "Security Patch Management",
      "Threat Intelligence Analysis",
      "Red Team Simulations",
      "Security Audits & Reviews",
      "Application Security Testing",
      "Network Security Analysis",
      "Risk Prioritisation Framework",
    ],
    why: "Infoplus uses industry-leading tools and methodologies to identify both known and emerging threats. We provide detailed vulnerability reports with remediation guidance and a clear security maturity roadmap. Our approach minimises downtime and operational disruption while aligning with global security standards, ensuring organisations achieve long-term cyber resilience and sustained confidence in their security posture.",
    featureTitle: "Vulnerability Management",
    features: [
      "Industry-leading scanning tools and methodologies",
      "Detection of known and emerging threats",
      "Detailed reports with remediation roadmaps",
      "Security maturity improvement planning",
      "Minimal business disruption",
      "Aligned with global security standards",
    ],
  },
  {
    icon: Lock,
    gradient: "from-[#9a2600] to-[#f85d37]",
    accentColor: "#ff9a7a",
    title: "Identity & Access Management",
    shortDesc: "Secure digital identities and control access with robust authentication and governance.",
    tagline: "The Right Access for the Right People",
    desc: "Identity security is a critical component of modern cybersecurity strategies. Infoplus provides advanced Identity and Access Management solutions to secure digital identities across enterprise systems. Our IAM solutions ensure only authorised users access critical systems and data through robust authentication and access control mechanisms. We support organisations in preventing unauthorised access while enabling employees, partners, and customers to access resources securely. Infoplus simplifies identity governance across multiple platforms and helps organisations manage identities efficiently across evolving digital ecosystems.",
    items: [
      "Role-Based Access Control (RBAC)",
      "Multi-Factor Authentication (MFA)",
      "Single Sign-On (SSO)",
      "Privileged Access Management",
      "Identity Lifecycle Management",
      "Identity Governance & Administration",
      "User Access Monitoring",
      "Adaptive Authentication",
      "Access Policy Enforcement",
      "Secure Remote Access",
    ],
    why: "Infoplus delivers secure and scalable identity solutions that protect sensitive systems and confidential data. Our IAM solutions integrate seamlessly with enterprise applications and help prevent identity-based cyber attacks. We ensure compliance with regulatory standards while providing continuous monitoring and expert support, strengthening trust and security across your digital environment.",
    featureTitle: "IAM Security Benefits",
    features: [
      "Secure and scalable identity solutions",
      "Seamless enterprise application integration",
      "Prevention of identity-based attacks",
      "Regulatory compliance assurance",
      "Continuous identity monitoring",
      "Strengthened digital trust",
    ],
  },
  {
    icon: Shield,
    gradient: "from-[#0f766e] to-[#14b8a6]",
    accentColor: "#5eead4",
    title: "Cloud Security Operations",
    shortDesc: "Secure your cloud infrastructure with continuous monitoring and intelligent threat detection.",
    tagline: "Protecting Your Cloud Transformation",
    desc: "As organisations adopt cloud technologies, new security challenges emerge across distributed environments. Infoplus provides end-to-end cloud security solutions to protect data and applications across public, private, and hybrid cloud environments. We implement advanced controls to prevent unauthorised access and continuously monitor cloud workloads for suspicious activity. Our solutions protect applications in the cloud, ensure secure migration, and help organisations maintain improved data protection and visibility. Infoplus integrates security directly into cloud architecture, supporting safe and confident digital transformation.",
    items: [
      "Cloud Security Assessment",
      "Cloud Configuration Management",
      "Data Protection & Encryption",
      "Cloud Access Security Broker (CASB)",
      "Workload Protection",
      "Cloud Identity Management",
      "Cloud Threat Monitoring",
      "Container Security",
      "DevSecOps Integration",
      "Compliance Monitoring",
    ],
    why: "Infoplus provides tailored cloud protection strategies for complex multi-cloud environments. Our experts design scalable security frameworks that ensure secure cloud operations with minimal disruption. Our solutions support regulatory compliance, reduce risks from cloud misconfigurations, and deliver continuous monitoring for stronger data protection and confident cloud adoption.",
    featureTitle: "Cloud Security Excellence",
    features: [
      "Tailored multi-cloud protection strategies",
      "Scalable and resilient security frameworks",
      "Regulatory compliance support",
      "Reduced misconfiguration risk",
      "Continuous cloud workload monitoring",
      "Stronger data protection mechanisms",
    ],
  },
  {
    icon: Settings,
    gradient: "from-[#4c1d95] to-[#7c3aed]",
    accentColor: "#c4b5fd",
    title: "Zero Trust Security & Compliance Governance",
    shortDesc: "Adopt a Zero Trust model where every access request is verified to prevent unauthorised activity.",
    tagline: "Never Trust, Always Verify",
    desc: "Traditional security models are no longer sufficient in today's distributed digital landscape. Infoplus implements Zero Trust architecture to protect modern enterprises by ensuring every access request is verified and authenticated regardless of location. We eliminate implicit trust within networks and systems, strengthening security across distributed environments. Our governance framework ensures compliance with industry regulations while protecting data, applications, and users. Infoplus helps organisations transition from legacy security approaches and enables secure digital transformation, significantly reducing the risk of internal and external threats.",
    items: [
      "Zero Trust Architecture Design",
      "Continuous Authentication",
      "Micro-Segmentation",
      "Security Policy Enforcement",
      "Compliance Management",
      "Risk Governance",
      "Data Security Frameworks",
      "Audit & Reporting",
      "Regulatory Alignment",
      "Security Strategy Development",
    ],
    why: "Infoplus delivers modern Zero Trust security aligned with global standards, designing strategies tailored to your business objectives. We help organisations meet compliance requirements efficiently while significantly reducing attack surfaces. Our clients receive ongoing support and proactive risk monitoring, helping build a future-ready security framework with confidence in their long-term security posture.",
    featureTitle: "Zero Trust Benefits",
    features: [
      "Modern security aligned with global standards",
      "Business-tailored Zero Trust strategies",
      "Efficient compliance management",
      "Significantly reduced attack surfaces",
      "Proactive risk monitoring and support",
      "Future-ready security framework",
    ],
  },
];

const CYBER_FAQS: FAQItem[] = [
  {
    q: "What's the real difference between Threat Detection and a Security Assessment?",
    a: "Threat Detection is the ongoing watch — monitoring your systems in real time and reacting the moment something looks wrong. A Security Assessment is different: it's a full check-up of everything, from basic protections to your entire network, done to catch weak spots before an attacker ever finds them.",
  },
  {
    q: "Where does AI actually fit into how Infoplus handles cybersecurity?",
    a: "We use AI and machine learning to understand what 'normal' looks like for your users, so unusual behaviour stands out fast. That means threats get spotted sooner, without slowing your team down with unnecessary security friction.",
  },
  {
    q: "An audit found a vulnerability — what happens next?",
    a: "We don't like giving you a report and disappearing. We stay involved and work with you to actually close the gap, so the vulnerability gets fixed properly, not just documented.",
  },
  {
    q: "Is cybersecurity just about defence, or does it help the business move forward too?",
    a: "Both. Good security doesn't just block threats — it gives your team the confidence to work quickly and access what they need, without constantly worrying about what could go wrong.",
  },
];

export default function CyberSecurityPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goToDetail = (i: number) => {
    setTimeout(
      () => sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  };

  useEffect(() => {
    const OFFSET = 140;
    const onScroll = () => {
      if (!detailRef.current) return;
      const { top, bottom } = detailRef.current.getBoundingClientRect();
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
    <div className="w-full" style={{ overflowX: "clip" }}>
      <PageMeta
        title="Cyber Security Services & Solutions"
        description="Protect your organisation with Infoplus Technologies UK's cyber security services. We provide threat detection, risk management, compliance, and end-to-end security solutions."
        path="/services/it-services/cyber-security"
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Defend Today, Secure Tomorrow"
        description="We Protect Our Clients from Security-Related Issues"
        badge="IT SERVICES"
        variant="centered"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
          >
            Secure Your Business
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
          >
            Request a Security Audit
          </Link>
        </div>
      </PageHero>

      {/* About the Service */}
      <section className="py-28 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <style>{`
          @keyframes sonarRing {
            0%   { transform: translate(-50%,-50%) scale(0.4); opacity: 0.6; }
            100% { transform: translate(-50%,-50%) scale(3);   opacity: 0;   }
          }
          @keyframes shieldGlow {
            0%,100% { box-shadow: 0 0 30px rgba(97,40,166,0.35), 0 0 60px rgba(97,40,166,0.12); }
            50%     { box-shadow: 0 0 55px rgba(170,59,255,0.65), 0 0 100px rgba(170,59,255,0.22); }
          }
          @keyframes orbitCW  { from { transform:translate(-50%,-50%) rotate(0deg);   } to { transform:translate(-50%,-50%) rotate(360deg);  } }
          @keyframes orbitCCW { from { transform:translate(-50%,-50%) rotate(0deg);   } to { transform:translate(-50%,-50%) rotate(-360deg); } }
          @keyframes iconBob  {
            0%,100% { transform: translateY(0px);  }
            50%     { transform: translateY(-7px); }
          }
        `}</style>

        {/* Ambient orbs */}
        <div className="absolute top-[-10%] right-[-6%] w-[520px] h-[520px] rounded-full bg-[#ecdaff] opacity-60 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-8%] left-[-5%] w-96 h-96 rounded-full bg-[#6128a6]/8 blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          {/* ── Main split: text + shield visual ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-center">

            {/* Left — content */}
            <ScrollReveal direction="left">
              <div>
                {/* Pulsing badge */}
                <div className="flex items-center gap-2.5 mb-7">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#aa3bff] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6128a6]" />
                  </span>
                  <span className="text-[11px] font-bold text-[#6128a6] uppercase tracking-widest">About the Service</span>
                </div>

                <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-black text-[#0d0517] leading-[1.1] tracking-tight mb-8">
                  Protecting Your Business
                  <span
                    className="block"
                    style={{ background: "linear-gradient(90deg,#6128a6 0%,#aa3bff 60%,#f85d37 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    in the Digital Age
                  </span>
                </h2>

                <p className="text-[15px] text-[#555] leading-[1.9] mb-10 text-justify">
                  Infoplus delivers comprehensive cybersecurity solutions that protect businesses from evolving
                  digital threats while ensuring business continuity and compliance. We secure networks, endpoints,
                  cloud environments, applications, and critical data through continuous monitoring, advanced threat
                  detection, and rapid incident response. Our experts identify vulnerabilities, strengthen identity
                  and access management, and implement tailored security strategies aligned with business objectives.
                  By combining advanced technologies with industry best practices, we help organizations build a
                  resilient security framework that supports secure digital transformation. Infoplus enables
                  businesses to reduce risks, improve cyber resilience, and operate confidently in an increasingly
                  connected and constantly evolving digital landscape.
                </p>

              </div>
            </ScrollReveal>

            {/* Right — animated shield core */}
            <ScrollReveal direction="right" delay={150}>
              <div className="relative mx-auto" style={{ width: 360, height: 360 }}>

                {/* Sonar rings */}
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-[#6128a6]/35"
                    style={{ width: 100, height: 100, top: "50%", left: "50%", animation: `sonarRing 3.2s ease-out ${i * 1.07}s infinite` }}
                  />
                ))}

                {/* Slow rotating dashed ring (outer) */}
                <div
                  className="absolute rounded-full border-2 border-dashed border-[#6128a6]/20"
                  style={{ width: 300, height: 300, top: "50%", left: "50%", animation: "orbitCW 22s linear infinite" }}
                />

                {/* Counter-rotating solid ring (inner) */}
                <div
                  className="absolute rounded-full border border-[#aa3bff]/20"
                  style={{ width: 220, height: 220, top: "50%", left: "50%", animation: "orbitCCW 14s linear infinite" }}
                />

                {/* Center shield */}
                <div
                  className="absolute flex items-center justify-center rounded-[26px] bg-linear-to-br from-[#381f55] to-[#6128a6]"
                  style={{ width: 88, height: 88, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "shieldGlow 2.8s ease-in-out infinite" }}
                >
                  <Shield className="w-10 h-10 text-white" />
                </div>

                {/* Orbiting icons — hexagonal layout */}
                {([
                  { icon: Eye,         color: "#3b82f6", x: 0,    y: -130 },
                  { icon: Lock,        color: "#f85d37", x: 113,  y: -65  },
                  { icon: AlertCircle, color: "#f59e0b", x: 113,  y: 65   },
                  { icon: Search,      color: "#aa3bff", x: 0,    y: 130  },
                  { icon: Settings,    color: "#14b8a6", x: -113, y: 65   },
                  { icon: CheckCircle2,color: "#6128a6", x: -113, y: -65  },
                ] as { icon: React.ElementType; color: string; x: number; y: number }[]).map(({ icon: Icon, color, x, y }, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%,-50%)" }}
                  >
                    <div style={{ animation: `iconBob ${2.6 + i * 0.35}s ease-in-out ${i * 0.28}s infinite` }}>
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center border backdrop-blur-sm"
                        style={{ backgroundColor: `${color}1a`, borderColor: `${color}45`, boxShadow: `0 4px 20px ${color}22` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </ScrollReveal>

          </div>

          {/* ── Capability cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Lock,        color: "#aa3bff", label: "Identity & Access Management",   desc: "Strengthening control across all digital platforms"   },
              { icon: Eye,         color: "#3b82f6", label: "Real-time Security Analytics",   desc: "Identify threats before they impact operations"        },
              { icon: Shield,      color: "#14b8a6", label: "Business Continuity",            desc: "Maintain operational stability under any threat"       },
              { icon: CheckCircle2,color: "#6128a6", label: "Global Compliance Support",      desc: "Meet regulatory and security standards worldwide"      },
              { icon: Settings,    color: "#f85d37", label: "Secure Digital Transformation",  desc: "Safe adoption of modern technologies at every stage"   },
              { icon: AlertCircle, color: "#f59e0b", label: "Advanced Threat Monitoring",     desc: "24/7 detection and rapid incident response"            },
            ].map(({ icon: Icon, color, label, desc }, i) => (
              <ScrollReveal key={label} direction="up" delay={i * 75}>
                <div className="group bg-[#f8f5ff] border border-[#e8e0f7] rounded-2xl p-5 hover:bg-white hover:border-[#6128a6]/35 hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${color}18`, color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-[13.5px] font-bold text-[#0d0517] leading-snug">{label}</p>
                  </div>
                  <p className="text-[12.5px] text-[#666] leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── Intro + AI Capabilities ──────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 rounded-full bg-[#f8f5ff] blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" duration={720}>
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Our Security Practice
              </span>
              <h2 className="text-[34px] font-bold text-[#111] mt-3 leading-tight mb-5">
                Advanced Security for
                <br />
                <span className="text-[#6128a6]">a Threat-Filled World</span>
              </h2>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-4">
                Infoplus cyber security services include a security operations
                center and security engineering capability. To protect our
                clients from security-related issues, our operations and
                products continuously evolve through security policies,
                products, and testing.
              </p>
              <p className="text-[15.5px] text-[#555] leading-[1.85] mb-5">
                Our dedicated security teams have proven expertise in
                cryptography, malware, and software exploits. One standout
                value-add we provide is applying AI and Machine Learning
                technologies to get insights from human behaviour helping
                industry-leading organisations provide secure access while
                improving employee value-proposition.
              </p>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#6128a6]">
                <Shield className="w-4 h-4" />
                Security Operations Center (SOC) + Engineering Capability
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={720} delay={150}>
              <div className="bg-[#f8f5ff] border border-[#e8e0f7] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#6128a6]/8 blur-[60px] pointer-events-none" />
                {/* Scanning circle */}
                <div className="relative flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full border-2 border-[#6128a6]/20 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-full border-2 border-[#6128a6]/35 flex items-center justify-center relative">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div
                      className="absolute top-[50%] left-[50%] w-12 h-px bg-[#6128a6]/50 origin-left"
                      style={{ animation: "spin 3s linear infinite", transformOrigin: "left center" }}
                    />
                  </div>
                </div>
                <div className="relative z-10">
                  <p className="text-[13px] font-bold uppercase tracking-widest text-[#6128a6] mb-4 text-center">
                    AI-Powered Security Capabilities
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {AI_CAPABILITIES.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-[13px] text-[#555]"
                        style={{ animation: `revealFade 400ms ease ${i * 80 + 200}ms both` }}
                      >
                        <Lock className="w-3.5 h-3.5 text-[#6128a6] shrink-0" />
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Security Portfolio ───────────────────────────────── */}
      <section className="py-20 bg-[#0d0517] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-120 h-120 rounded-full bg-[#6128a6]/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#f85d37]/8 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <ScrollReveal direction="fade">
            <div className="text-center mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                Security Portfolio
              </span>
              <h2 className="text-[36px] font-bold text-white mt-2">
                Our Services
              </h2>
              <p className="text-[15px] text-white/45 max-w-2xl mx-auto mt-4">
                Our security portfolio of services safeguards organisations
                while driving growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {CYBER_SERVICES.map(
              (
                { icon: SIcon, gradient, accentColor, title, desc, features },
                i,
              ) => {
                const isEven = i % 2 === 0;
                return (
                  <ScrollReveal
                    key={i}
                    direction={isEven ? "left" : "right"}
                    duration={700}
                    delay={60}
                  >
                    <div className="group bg-white/4 border border-white/8 rounded-2xl p-7 hover:bg-white/7 hover:border-[#6128a6]/30 transition-all duration-300 relative overflow-hidden">
                      {/* Accent glow on hover */}
                      <div
                        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                        style={{ background: accentColor }}
                      />

                      <div className="relative z-10 flex flex-col md:flex-row gap-7 items-start">
                        {/* Icon + gradient bar */}
                        <div className="shrink-0">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-linear-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <SIcon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-[20px] font-bold text-white mb-3 leading-snug">
                            {title}
                          </h3>
                          <p className="text-[14px] text-white/55 leading-relaxed mb-5">
                            {desc}
                          </p>

                          {/* Feature chips */}
                          <div className="flex flex-wrap gap-2">
                            {features.map((f, j) => (
                              <span
                                key={j}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold border"
                                style={{
                                  backgroundColor: `${accentColor}12`,
                                  borderColor: `${accentColor}30`,
                                  color: accentColor,
                                }}
                              >
                                <CheckCircle2 className="w-3 h-3" />
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#aa3bff] group-hover:translate-x-1 transition-all duration-300 shrink-0 self-center hidden md:block" />
                      </div>
                    </div>
                  </ScrollReveal>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ── In Depth ─────────────────────────────────────────── */}
      <section
        ref={detailRef}
        className="py-20 bg-white"
        style={{ scrollMarginTop: "88px" }}
      >
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Section header */}
          <ScrollReveal direction="fade">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-[#6128a6]/10 border border-[#6128a6]/20 text-[#6128a6] text-[11px] font-bold uppercase tracking-widest mb-5">
                In Depth
              </span>
              <h2 className="text-[36px] font-bold text-[#0d0517] mt-2">
                Explore Security Capabilities
              </h2>
              <p className="text-[15px] text-[#666] max-w-2xl mx-auto mt-4 leading-relaxed">
                Dive deep into each security service — understand how we protect your business end to end.
              </p>
            </div>
          </ScrollReveal>

          {/* Mobile pill tabs */}
          <div className="flex md:hidden overflow-x-auto gap-2 mb-10 pb-1 -mx-6 px-6">
            {CYBER_CAPABILITIES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <button
                  key={i}
                  onClick={() => goToDetail(i)}
                  className={`shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all border cursor-pointer ${
                    activeIdx === i
                      ? "bg-[#0d0517] text-white border-[#0d0517]"
                      : "bg-white text-[#555] border-[#e5e4e7] hover:border-[#6128a6]/40"
                  }`}
                >
                  <Icon className="w-3 h-3 shrink-0" />
                  {svc.title.split("&")[0].trim()}
                </button>
              );
            })}
          </div>

          {/* Sidebar + content panels */}
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* Sticky sidebar (desktop) */}
            <div className="hidden md:block md:w-52 lg:w-64 shrink-0 sticky top-25 self-start">
              <div className="bg-[#f8f5ff] border border-[#e5e4e7] rounded-xl p-2.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#aaa] px-2.5 pt-1.5 pb-1">
                  Security Services
                </p>
                <div className="space-y-0.5">
                  {CYBER_CAPABILITIES.map((svc, i) => (
                    <button
                      key={i}
                      onClick={() => goToDetail(i)}
                      className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                        activeIdx === i
                          ? "bg-[#0d0517] text-white"
                          : "text-[#555] hover:bg-white hover:text-[#6128a6]"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          activeIdx === i ? "bg-white/20 text-white" : "bg-[#ecdaff] text-[#6128a6]"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[12.5px] font-medium leading-tight">{svc.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrollable content panels */}
            <div className="flex-1 min-w-0">
              {CYBER_CAPABILITIES.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={i}
                    ref={(el) => { sectionRefs.current[i] = el; }}
                    style={{ scrollMarginTop: "140px" }}
                    className={i < CYBER_CAPABILITIES.length - 1 ? "mb-20 pb-20 border-b border-[#f0eff5]" : ""}
                  >
                    {/* Header: icon + title + tagline */}
                    <div className="flex items-start gap-5 mb-7">
                      <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${svc.gradient} flex items-center justify-center shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-widest mb-1" style={{ color: svc.accentColor }}>
                          {svc.tagline}
                        </p>
                        <h3 className="text-[24px] font-bold text-[#0d0517] leading-tight">
                          {svc.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[15px] text-[#555] leading-[1.85] mb-8">{svc.desc}</p>

                    {/* Key Areas grid */}
                    <div className="mb-8">
                      <p className="text-[12px] font-bold uppercase tracking-widest text-[#0d0517] mb-4">Key Areas</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {svc.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f8f5ff] border border-[#ede8f8]"
                          >
                            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: svc.accentColor }} />
                            <span className="text-[13px] text-[#444] font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why Infoplus? dark card */}
                    <div
                      className="rounded-2xl p-6 border-l-4"
                      style={{ background: "linear-gradient(135deg,#0d0517 0%,#1a0d2e 100%)", borderLeftColor: svc.accentColor }}
                    >
                      <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: svc.accentColor }}>
                        Why Infoplus?
                      </p>
                      <p className="text-[14px] text-white/70 leading-[1.8] mb-5">{svc.why}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {svc.features.map((feat, j) => (
                          <div key={j} className="flex items-center gap-2 text-[13px] text-white/60">
                            <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: svc.accentColor }} />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust Stats ──────────────────────────────────────── */}
      <section className="py-16 bg-[#f8f5ff] border-y border-[#e5e4e7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "24/7", label: "SOC monitoring coverage" },
              { value: "AI + ML", label: "Behavioural threat analysis" },
              { value: "100%", label: "Compliance focus" },
              { value: "0", label: "Tolerance for unresolved threats" },
            ].map(({ value, label }, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="text-center p-6 rounded-2xl bg-white border border-[#e5e4e7]">
                  <p className="text-[32px] font-black text-[#6128a6] leading-none mb-2">
                    {value}
                  </p>
                  <p className="text-[12.5px] text-[#666] font-medium leading-snug">
                    {label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={CYBER_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about our cybersecurity services and how we protect your business."
      />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal direction="fade">
            <div className="bg-linear-to-br from-[#0d0517] to-[#381f55] rounded-3xl p-14 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#6128a6]/25 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#f85d37]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold uppercase tracking-widest text-white/70 mb-6">
                  Stay Protected
                </span>
                <h2 className="text-[36px] md:text-[42px] font-bold mb-4 leading-tight text-white">
                  Don't Wait for a Breach.
                  <br className="hidden md:block" />
                  Act Now.
                </h2>
                <p className="text-[16px] text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Partner with Infoplus Cyber Security to build a resilient,
                  proactive security posture. Our expert team is ready to
                  protect your organisation round the clock.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#f85d37] text-white font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors group"
                  >
                    Request a Security Assessment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="mailto:uk@infoplusltd.co.uk"
                    className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl border border-white/25 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
                  >
                    Email Our Security Team
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
