import { useState, useEffect } from "react";
import { PageMeta } from "../components/shared/PageMeta";
import { PageHero } from "../components/shared/PageHero";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import {
  Shield,
  Users,
  Database,
  Settings2,
  Scale,
  Mail,
  Share2,
  Globe,
  Lock,
  Clock,
  UserCheck,
  ExternalLink,
  ChevronRight,
  Phone,
} from "lucide-react";

/* ── Sections data ────────────────────────────────────────────── */
const SECTIONS = [
  {
    id: "who-we-are",
    num: "01",
    icon: Users,
    title: "Who we are",
    accent: "#EB9B3D",
    paragraphs: [
      "InfoPlus Technologies UK Ltd is a UK recruitment & Staffing Firm. We do a fair bit - IT solutions, software development, AI work, digital transformation, consulting, cloud services, cyber-security, and general business support - for clients here in the UK",
    ],
  },
  {
    id: "information-we-collect",
    num: "02",
    icon: Database,
    title: "The information we collect",
    accent: "#DA4D33",
    paragraphs: [
      "Most of what we hold about you comes from you directly. If you fill in a form on our site, ask us for a quote, get in touch about a project, or apply for a role with us, you'll typically be giving us your name, maybe your business name and job title, an email address or phone number, and some details about what you need. Sometimes people share more than that, which is fine - we just take what's relevant.",
      "There's also the technical stuff that gets collected automatically when you browse our site, things like your IP address, what browser and device you're using, which pages you visited and for how long, and where you came from before you landed here. This isn't unique to us - almost every website does this - and it mainly helps us keep things running smoothly and catch anything suspicious.",
    ],
  },
  {
    id: "what-we-do",
    num: "03",
    icon: Settings2,
    title: "What we do with it",
    accent: "#F0783A",
    paragraphs: [
      "Broadly speaking, we use your information to respond to whatever you've contacted us about, put together quotes or proposals, actually deliver the services you've asked for, and provide support if something needs sorting out. We also look at how people use our website so we can improve it over time, and where you've agreed to it, we'll send you updates about our work or things we think might interest you.",
      "We also have to use information sometimes just to stay compliant with legal and regulatory requirements, or to keep our systems secure. We won't process your data unless we've actually got a proper reason to.",
    ],
  },
  {
    id: "legal-basis",
    num: "04",
    icon: Scale,
    title: "Why we're allowed to use it",
    accent: "#EB9B3D",
    paragraphs: [
      "Under UK data protection law, we can only process personal information where there's a legal basis for doing so. In our case that's usually one of the following: you've given us consent, we need it to carry out a contract with you, we're legally obliged to, or we have a legitimate business interest that doesn't unfairly override your own rights.",
    ],
  },
  {
    id: "marketing",
    num: "05",
    icon: Mail,
    title: "Marketing emails",
    accent: "#DA4D33",
    paragraphs: [
      "If you've said yes to hearing from us, we might send the odd email about our services, something happening in the industry, or an event we're running. Not interested anymore? Just click unsubscribe on any of those emails, or tell us directly and we'll take you off the list.",
    ],
  },
  {
    id: "data-sharing",
    num: "06",
    icon: Share2,
    title: "Do we share your data with anyone?",
    accent: "#F0783A",
    paragraphs: [
      "We don't sell it. We don't rent it out. What we do sometimes do is share information with the people who help us run things behind the scenes - our IT providers, service partners, that sort of thing. They only get what they need to do their job, and they're required to look after it properly.",
      "Occasionally we might need to disclose information because the law says so, or because we're dealing with a legal claim of some kind.",
    ],
  },
  {
    id: "data-transfers",
    num: "07",
    icon: Globe,
    title: "When data crosses borders",
    accent: "#EB9B3D",
    paragraphs: [
      "We work with people outside the UK, so your data might occasionally be processed elsewhere. When that happens, we make sure there are proper safeguards in place so it's still protected the way it should be.",
    ],
  },
  {
    id: "data-security",
    num: "08",
    icon: Lock,
    title: "How we keep it safe",
    accent: "#DA4D33",
    paragraphs: [
      "We've got technical and organizational measures in place to stop your information from being accessed, lost, or misused. That said, nothing sent over the internet or stored on a server is ever 100% risk-free - we won't pretend otherwise - but we do take reasonable, sensible steps to protect it.",
    ],
  },
  {
    id: "retention",
    num: "09",
    icon: Clock,
    title: "How long we hold onto it",
    accent: "#F0783A",
    paragraphs: [
      "We keep personal data for as long as we actually need it - to do what we said we'd do, meet legal obligations, or deal with any disputes - and no longer than that. Once it's served its purpose, we delete it or anonymize it.",
    ],
  },
  {
    id: "your-rights",
    num: "10",
    icon: UserCheck,
    title: "Your rights",
    accent: "#EB9B3D",
    paragraphs: [
      "You've got a say in how your data is used. Depending on the circumstances, you can ask us to let you see what we hold about you, correct something that's wrong, delete your data altogether, limit how we use it, object to certain processing, withdraw consent you'd previously given, or send you a copy of your data that you can take elsewhere. Just reach out and we'll sort it out in line with the law.",
    ],
  },
  {
    id: "other-websites",
    num: "11",
    icon: ExternalLink,
    title: "Other websites",
    accent: "#DA4D33",
    paragraphs: [
      "You might come across links to other sites while browsing ours. Once you click through, you're on their turf - we've got no control over what they do with your data, so it's worth checking their own privacy policy before you share anything.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(s.id);
        },
        { rootMargin: "-15% 0px -75% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="w-full">
      <PageMeta
        title="Privacy Policy"
        description="Read how Infoplus Technologies UK Ltd collects, uses and protects your personal information when you visit our site or work with us."
        path="/privacy-policy"
        noIndex
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        badge="LEGAL"
        title="Privacy Policy"
        description="We know privacy policies aren't the most exciting thing to read, but this one matters, so please take a few minutes to go through it."
        variant="centered"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 text-[12px] font-semibold">
            <Shield className="w-3.5 h-3.5 text-[#EB9B3D]" />
            UK GDPR Compliant
          </span>
        </div>
      </PageHero>

      {/* ── Intro + Full Sections ─────────────────────────────── */}
      <section className="bg-white relative -mt-10 rounded-t-[3rem] z-20">
        <div className="absolute top-0 right-0 w-125 h-125 rounded-full bg-[#EB9B3D] opacity-10 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none rounded-t-[3rem]"
          style={{
            backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Intro callout */}
        <div className="container mx-auto px-6 max-w-4xl relative z-10 pt-16 pb-10">
          <ScrollReveal direction="up">
            <div className="bg-white border border-[rgba(13,17,45,0.08)] rounded-2xl px-8 py-7 shadow-[0_4px_24px_rgba(235,155,61,0.06)]">
              <p className="text-[15px] text-[#555] leading-relaxed">
                We, Infoplus Technologies UK Pvt ltd know privacy policies aren't the most exciting
                thing to read, but this one matters, so please take a few minutes to go through it.
                It explains what InfoPlus Technologies UK Ltd does with your personal information
                when you visit our site, reach out to us, or work with us in any capacity.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* TOC + Sections — no overflow-hidden so sticky works */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

            {/* Sticky TOC */}
            <aside
              className="hidden lg:block lg:sticky lg:self-start"
              style={{ top: "100px" }}
            >
              <div
                className="bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl shadow-[0_4px_24px_rgba(235,155,61,0.08)] flex flex-col overflow-hidden"
                style={{ maxHeight: "calc(100vh - 120px)" }}
              >
                <div className="shrink-0 px-5 pt-5 pb-4 border-b border-[rgba(13,17,45,0.08)]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#EB9B3D]">
                    Contents
                  </p>
                </div>
                <ul className="overflow-y-auto px-3 py-3 space-y-0.5">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] text-[#0d0517] transition-all duration-200 ${activeId === s.id ? "font-semibold" : "font-medium"}`}
                        style={{ backgroundColor: activeId === s.id ? `${s.accent}12` : undefined }}
                      >
                        <span className="flex-1">{s.title}</span>
                        {activeId === s.id && (
                          <ChevronRight
                            className="w-3 h-3 shrink-0"
                            style={{ color: s.accent }}
                          />
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
                  className="group bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl p-7 hover:border-[#EB9B3D]/30 hover:shadow-[0_8px_40px_rgba(235,155,61,0.09)] transition-all duration-300 scroll-mt-25 relative overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
                    style={{ backgroundColor: s.accent }}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-3 pl-4 mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${s.accent}15`, color: s.accent }}
                    >
                      <s.icon className="w-4.5 h-4.5" />
                    </div>
                    <h2 className="text-[17px] font-bold text-[#0d0517] leading-tight mb-0">
                      {s.title}
                    </h2>
                  </div>

                  {/* Body */}
                  <div className="pl-4 space-y-3">
                    {s.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-[14.5px] text-[#555] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Questions? ───────────────────────────────────────── */}
      <section className="py-20 bg-white relative border-t border-[rgba(13,17,45,0.08)]">
        <div className="absolute top-0 left-0 w-100 h-100 rounded-full bg-[#EB9B3D] opacity-8 blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.012] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/25 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-4">
                Questions?
              </span>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0d0517] mb-4">
                Happy to help
              </h2>
              <p className="text-[15px] text-[#555]">
                Happy to help if anything here needs clarifying, or if you just want to know more
                about how we handle your information.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <div className="bg-[#F3F5FF] border border-[rgba(13,17,45,0.08)] rounded-2xl p-8 shadow-[0_4px_24px_rgba(235,155,61,0.06)]">
              <p className="text-[14.5px] font-bold text-[#0d0517] mb-6">
                InfoPlus Technologies UK Ltd
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:contact@infoplusltd.co.uk"
                  className="flex items-center gap-3 text-[14.5px] text-[#555] hover:text-[#EB9B3D] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EB9B3D]/10 flex items-center justify-center shrink-0 group-hover:bg-[#EB9B3D]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[#EB9B3D]" />
                  </div>
                  <span>contact@infoplusltd.co.uk</span>
                </a>
                <div className="flex items-center gap-3 text-[14.5px] text-[#555]">
                  <div className="w-9 h-9 rounded-xl bg-[#EB9B3D]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#EB9B3D]" />
                  </div>
                  <span>+44 20 8207 3474</span>
                </div>
                <a
                  href="https://www.infoplusltd.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14.5px] text-[#555] hover:text-[#EB9B3D] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EB9B3D]/10 flex items-center justify-center shrink-0 group-hover:bg-[#EB9B3D]/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-[#EB9B3D]" />
                  </div>
                  <span>https://www.infoplusltd.co.uk</span>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-[rgba(13,17,45,0.08)]">
                <p className="text-[14px] text-[#888]">
                  We try to get back to privacy queries quickly.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
