import { PageMeta } from "../components/shared/PageMeta";
import { useState, useEffect } from "react";
import { PageHero } from "../components/shared/PageHero";
import imgCareerHero from "../assets/images/career_hero.jpg";
import { Coffee, Heart, Globe, Zap, MapPin, Briefcase, X, ChevronRight, CheckCircle2, Shield } from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { FAQAccordion, type FAQItem } from "../components/shared/FAQAccordion";

/* ── Types ─────────────────────────────────────────── */
type Job = {
  id: number;
  role: string;
  team: string;
  location: string;
  type: string;
  salary: string;
  skills: string[];
  desc: string;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  experience: string;
  noticePeriod: string;
  linkedin: string;
  coverLetter: string;
};

const EMPTY_FORM: FormState = {
  fullName: "", email: "", phone: "", currentLocation: "",
  experience: "", noticePeriod: "", linkedin: "", coverLetter: "",
};

const TEAM_BADGE: Record<string, string> = {
  Engineering:    "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
  "Data Science": "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
  Design:         "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
  Sales:          "bg-[rgba(235,155,61,0.10)] text-[#A06010] border border-[rgba(235,155,61,0.22)]",
};

const CAREERS_FAQS: FAQItem[] = [
  {
    q: "Do I need years of experience to apply, or is there room for people just starting out?",
    a: "Both are welcome. We hire experienced specialists and people building their first career through our internship programme- what matters more to us is curiosity and ownership, not just years on a CV.",
  },
  {
    q: "What actually happens during the internship- real work, or just observing?",
    a: "Real work, from day one. Our interns get placed on live projects with the best mentorship from people who've been in the industry for years, not shadowing meetings or making coffee.",
  },
  {
    q: "If there's no open role listed right now, is it still worth applying?",
    a: "Yes. We're always interested in hearing from strong candidates, even without a live vacancy- send your CV, and we'll keep it on file for when the right opportunity comes up.",
  },
  {
    q: "What actually makes day-to-day work at Infoplus different from a typical IT job?",
    a: "You're trusted with real responsibility early on, working across a genuinely global business spanning 17 countries – not stuck waiting for permission to contribute.",
  },
];

/* ── Component ─────────────────────────────────────── */
function CareersPage() {
  const [teamFilter,     setTeamFilter]     = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [applyJob,       setApplyJob]       = useState<Job | null>(null);
  const [submitted,      setSubmitted]      = useState(false);
  const [form,           setForm]           = useState<FormState>(EMPTY_FORM);

  /* lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = applyJob ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [applyJob]);

  const closeModal = () => { setApplyJob(null); setSubmitted(false); setForm(EMPTY_FORM); };
  const handleSubmit = (e: { preventDefault(): void }) => { e.preventDefault(); setSubmitted(true); };

  /* ── Static data ───────────────────────────────── */
  const perks = [
    { icon: Heart,  title: "Real Responsibility, From Day One", desc: "Here you don't need to wait for the \"real\" work. You'll be handed the genuine problem to solve from the day you start, with support when you need it."},
    { icon: Globe,  title: "Global Exposure, Local Team Feel",       desc: "As we are operating across 17 countries, you'll work on projects with real international people; you can exchange and gain more knowledge and skills."},
    { icon: Zap,    title: "Learning that's Part of the Journey, Not an Afterthought",     desc: "Technology is moving so fast - SAP, AI, Cybersecurity. In Infoplus, you'll get the chance to build skills, and you'll get the encouragement to grow with the technology, while working with the most experienced & talented people."},
    { icon: Coffee, title: "Who we're Looking For",       desc: "We hire based on skills and attitude over the ticking boxes of what you achieved. We care more about how you work than what's on the paper. All we see is whether you're taking pride in what you do or not. And then you can be trusted to get on with the job- you'll do well here. This applies to everyone, whether you're an experienced specialist or just starting your career, including throughout the internship programme."},
  ];

  const positions: Job[] = [
    {
      id: 1, role: "Senior Frontend Engineer", team: "Engineering",
      location: "Remote / UK", type: "Full-time", salary: "£60,000 – £80,000",
      skills: ["React", "TypeScript", "TailwindCSS"],
      desc: "Build and maintain high-performance user interfaces for enterprise clients across multiple industries.",
    },
    {
      id: 2, role: "AI Research Scientist", team: "Data Science",
      location: "Germany", type: "Full-time", salary: "€70,000 – €90,000",
      skills: ["Python", "Machine Learning", "NLP"],
      desc: "Develop next-generation AI models and solutions for enterprise data intelligence platforms.",
    },
    {
      id: 3, role: "Product Designer", team: "Design",
      location: "Remote", type: "Full-time", salary: "£50,000 – £70,000",
      skills: ["Figma", "UI/UX", "Prototyping"],
      desc: "Create beautiful, user-centric designs for our growing product portfolio and client applications.",
    },
    {
      id: 4, role: "Technical Account Manager", team: "Sales",
      location: "India", type: "Full-time", salary: "₹15L – ₹25L",
      skills: ["Client Relations", "SAP", "CRM"],
      desc: "Manage key enterprise client relationships and drive business growth across the South Asia region.",
    },
    {
      id: 5, role: "Backend Engineer", team: "Engineering",
      location: "UK", type: "Full-time", salary: "£65,000 – £85,000",
      skills: ["Node.js", "Python", "AWS"],
      desc: "Design and scale cloud-native backend services and APIs for enterprise-grade applications.",
    },
    {
      id: 6, role: "Data Analyst", team: "Data Science",
      location: "Remote", type: "Full-time", salary: "£45,000 – £60,000",
      skills: ["SQL", "Power BI", "Python"],
      desc: "Transform raw data into actionable insights and build dashboards for our global clients.",
    },
  ];

  const teams = ["All", "Engineering", "Data Science", "Design", "Sales"];
  const locs  = ["All", "Remote", "UK", "Germany", "India"];

  const filtered = positions.filter(p => {
    const matchTeam = teamFilter === "All" || p.team === teamFilter;
    const matchLoc  = locationFilter === "All" || p.location.includes(locationFilter);
    return matchTeam && matchLoc;
  });

  const inputCls = "w-full px-4 py-3 border border-[#e5e4e7] rounded-xl text-[14px] text-[#111111] focus:outline-none focus:border-[#EB9B3D] focus:ring-2 focus:ring-[#EB9B3D]/20 transition-all placeholder:text-[#bbb]";

  return (
    <div className="w-full">
      <PageMeta
        title="Careers at Infoplus Technologies | Find Your Next Opportunity"
        description="Looking for a place where your skills and ideas can make a difference? Explore career opportunities at Infoplus Technologies across different teams, locations, and areas of expertise."
        keywords="Careers at Infoplus Technologies, Infoplus careers, jobs at Infoplus, Infoplus job opportunities, career opportunities, technology jobs, IT careers"
        path="/careers"
      />

      {/* ── 1. HERO ───────────────────────────────────── */}
      <PageHero
        title="Global Career Opportunities for a Better Tomorrow"
        description="Join a global team of passionate builders, thinkers, and innovators dedicated to shaping the digital landscape."
        badge="CAREERS"
        variant="split"
        image={imgCareerHero}
      >
        <div className="mt-8">
          <button
            onClick={() => document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#EB9B3D] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#DA4D33] transition-colors shadow-lg shadow-[#EB9B3D]/30 cursor-pointer"
          >
            View Open Roles
          </button>
        </div>
      </PageHero>

      {/* ── 2. WHY ARE YOU WAITING ────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden -mt-10 rounded-t-[3rem] z-20">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: decorative card */}
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#141A3D] p-10 overflow-hidden min-h-110 flex flex-col justify-between">
                {/* Watermark */}
                <div className="absolute -top-4 -right-4 text-[13rem] font-black text-white/4 leading-none select-none pointer-events-none">?</div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#EB9B3D] opacity-25 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-[#EB9B3D] text-white text-[11px] font-bold uppercase tracking-widest mb-8">
                    Join Us
                  </span>
                  <h2 className="text-[42px] font-black text-white leading-[1.1]">
                    Why are<br />you{" "}
                    <span className="text-[#DA4D33]">waiting?</span>
                  </h2>
                </div>

                <div className="relative z-10 border-t border-white/10 pt-6">
                  <p className="text-white/40 text-[13px] italic leading-relaxed">
                    "We have excellent opportunities for passionate people who love technology and innovation."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: text */}
            <div className="lg:col-span-7 space-y-7">
              <ScrollReveal direction="right">
                <p className="text-[16px] text-[#555555] leading-[1.85] text-justify">
                  We need you by our side for developing high-end applications that will change the life of our clients and their end users for better. Also, if you love being part of the web, then, we have got excellent opportunities for you in digital marketing to help our clients take their business soaring beyond unexplored horizons.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={110}>
                <div className="pl-5 border-l-4 border-[#EB9B3D] bg-[rgba(235,155,61,0.06)] rounded-r-2xl py-4 pr-6">
                  <span className="text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-2 block">Our Expertise</span>
                  <p className="text-[16px] font-semibold text-[#0D112D] leading-snug">
                    Specializes in finding and placing professionals across all sectors.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={210}>
                <p className="text-[16px] text-[#555555] leading-[1.85] text-justify">
                  With our fantastic teams, cutting-edge technology and extensive branch network, we are big enough to really deliver while local enough to truly care. Our teams of Recruiters, Resourcers and Relationship Managers pride themselves on their expert knowledge and understanding of the local job market and their specialist Industry sectors; with many of our staff joining us directly from the sectors they now recruit into.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY WORK WITH US ───────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">Why Us</span>
              <h2 className="text-[38px] font-bold text-[#111111] mb-5 leading-tight">Why work with us?</h2>
              <p className="text-[16px] text-[#555555] leading-[1.75]">
                We believe that great work happens when you&apos;re happy, healthy, and challenged. We&apos;ve built a culture that prioritises autonomy, continuous learning, and cross-border collaboration.
              </p>
            </div>
          </ScrollReveal>

          {/* Top 3 perk cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {perks.slice(0, 3).map((perk, i) => {
              const PIcon = perk.icon;
              return (
                <ScrollReveal key={i} variant="card" delay={i * 110}>
                  <div className="group h-full bg-white border border-[#FDE8C0] rounded-2xl p-7 hover:border-[#EB9B3D]/30 hover:shadow-[0_12px_40px_-8px_rgba(235,155,61,0.13)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <PIcon className="w-5 h-5 text-white" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-[16px] font-bold text-[#111111] mb-3 group-hover:text-[#EB9B3D] transition-colors leading-snug">{perk.title}</h3>
                    <p className="text-[13.5px] text-[#555555] leading-relaxed">{perk.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* 4th card – full-width feature */}
          <ScrollReveal direction="up" delay={330}>
            <div className="group bg-white border border-[#FDE8C0] rounded-2xl p-8 hover:border-[#EB9B3D]/30 hover:shadow-[0_12px_40px_-8px_rgba(235,155,61,0.10)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#EB9B3D] to-[#DA4D33] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="w-7 h-7 text-white" strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold text-[#111111] mb-3 group-hover:text-[#EB9B3D] transition-colors leading-snug">{perks[3].title}</h3>
                  <p className="text-[14.5px] text-[#555555] leading-[1.8]">{perks[3].desc}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── 4. OPEN POSITIONS ─────────────────────────── */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/20 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-5">Join Us</span>
              <div className="flex items-end justify-between flex-wrap gap-4">
                <h2 className="text-[36px] font-bold text-[#111111]">Open Positions</h2>
                <p className="text-[15px] text-[#555555]">
                  <span className="font-bold text-[#EB9B3D]">{filtered.length}</span>{" "}
                  {filtered.length === 1 ? "role" : "roles"} available
                  {(teamFilter !== "All" || locationFilter !== "All") && (
                    <span className="ml-2 text-[#EB9B3D] font-semibold text-[13px]">· Filtered</span>
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Filter bar ── */}
          <ScrollReveal direction="up" delay={80}>
            <div className="bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl p-5 mb-10">
              <div className="flex flex-col sm:flex-row gap-6">

                {/* Team */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-3">Team</p>
                  <div className="flex flex-wrap gap-2">
                    {teams.map(t => (
                      <button
                        key={t}
                        onClick={() => setTeamFilter(t)}
                        className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                          teamFilter === t
                            ? "bg-[#EB9B3D] text-white shadow-[0_4px_12px_rgba(235,155,61,0.30)]"
                            : "bg-white border border-[#e5e4e7] text-[#555555] hover:border-[#EB9B3D]/50 hover:text-[#EB9B3D]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-px bg-[#e5e4e7] hidden sm:block shrink-0" />

                {/* Location */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#EB9B3D] mb-3">Location</p>
                  <div className="flex flex-wrap gap-2">
                    {locs.map(l => (
                      <button
                        key={l}
                        onClick={() => setLocationFilter(l)}
                        className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                          locationFilter === l
                            ? "bg-[#EB9B3D] text-white shadow-[0_4px_12px_rgba(235,155,61,0.30)]"
                            : "bg-white border border-[#e5e4e7] text-[#555555] hover:border-[#EB9B3D]/50 hover:text-[#EB9B3D]"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset */}
                {(teamFilter !== "All" || locationFilter !== "All") && (
                  <button
                    onClick={() => { setTeamFilter("All"); setLocationFilter("All"); }}
                    className="flex items-center gap-1.5 text-[13px] font-semibold text-[#555555] hover:text-[#EB9B3D] transition-colors shrink-0 self-end pb-0.5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" /> Reset
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Job cards ── */}
          {filtered.length === 0 ? (
            <ScrollReveal direction="up">
              <div className="text-center py-24 bg-white rounded-2xl border border-[rgba(13,17,45,0.10)]">
                <p className="text-[18px] font-semibold text-[#111111] mb-2">No roles match your filters</p>
                <p className="text-[15px] text-[#555555] mb-6">Try adjusting your team or location selection.</p>
                <button
                  onClick={() => { setTeamFilter("All"); setLocationFilter("All"); }}
                  className="px-6 py-3 bg-[#EB9B3D] text-white rounded-xl font-semibold hover:bg-[#0D112D] transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((job, idx) => (
                <ScrollReveal key={job.id} variant="card" delay={idx * 80}>
                  <div className="group h-full flex flex-col bg-white border border-[rgba(13,17,45,0.10)] rounded-2xl overflow-hidden hover:border-[rgba(235,155,61,0.35)] hover:shadow-[0_12px_40px_rgba(235,155,61,0.10)] hover:-translate-y-1 transition-all duration-300">

                    <div className="p-6 flex flex-col flex-1">
                      {/* Team + Location badges */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${TEAM_BADGE[job.team] ?? "bg-[rgba(13,17,45,0.05)] text-[#4A4F63] border border-[rgba(13,17,45,0.08)]"}`}>
                          {job.team}
                        </span>
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(13,17,45,0.05)] text-[#4A4F63] text-[11px] font-medium border border-[rgba(13,17,45,0.08)]">
                          <MapPin className="w-3 h-3 shrink-0" />
                          {job.location}
                        </span>
                      </div>

                      <h3 className="text-[18px] font-bold text-[#111111] mb-2 group-hover:text-[#EB9B3D] transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-[14px] text-[#555555] leading-relaxed mb-4 flex-1">
                        {job.desc}
                      </p>

                      {/* Type + Salary */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="flex items-center gap-1.5 text-[12px] text-[#777777]">
                          <Briefcase className="w-3.5 h-3.5 shrink-0" />
                          {job.type}
                        </span>
                        <span className="text-[13px] font-bold text-[#EB9B3D]">{job.salary}</span>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {job.skills.map(s => (
                          <span key={s} className="px-2.5 py-1 rounded-lg bg-[rgba(13,17,45,0.04)] text-[#4A4F63] text-[11px] font-medium border border-[rgba(13,17,45,0.08)]">
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Apply CTA */}
                      <button
                        onClick={() => setApplyJob(job)}
                        className="w-full py-3 rounded-xl bg-[#141A3D] text-white text-[14px] font-semibold hover:bg-[#EB9B3D] transition-colors duration-200 flex items-center justify-center gap-2 group-hover:bg-[#EB9B3D] cursor-pointer"
                      >
                        Apply Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <FAQAccordion
        faqs={CAREERS_FAQS}
        badge="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about careers at Infoplus."
      />

      {/* ── APPLY MODAL ───────────────────────────────── */}
      {applyJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxHeight: "90vh" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#141A3D] px-7 py-6 flex items-start justify-between shrink-0">
              <div>
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest mb-1">Applying for</p>
                <h3 className="text-white text-[20px] font-bold leading-snug">{applyJob.role}</h3>
                <p className="text-white/50 text-[13px] mt-1">{applyJob.team} · {applyJob.location}</p>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors shrink-0 mt-0.5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-7">
              {submitted ? (
                /* ── Success state ── */
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-[22px] font-bold text-[#111111] mb-2">Application Submitted!</h4>
                  <p className="text-[15px] text-[#555555] mb-8 max-w-sm mx-auto">
                    Thank you for your interest. We&apos;ll review your application and get back to you soon.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-8 py-3.5 bg-[#EB9B3D] text-white rounded-xl font-semibold hover:bg-[#0D112D] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* ── Application form ── */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-[13px] text-[#777777] mb-5">
                    Fields marked <span className="text-[#EB9B3D] font-bold">*</span> are mandatory.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Full Name */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Full Name <span className="text-[#EB9B3D]">*</span>
                      </label>
                      <input
                        type="text" required
                        value={form.fullName}
                        onChange={e => setForm({ ...form, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={inputCls}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Email Address <span className="text-[#EB9B3D]">*</span>
                      </label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className={inputCls}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Phone Number <span className="text-[#EB9B3D]">*</span>
                      </label>
                      <input
                        type="tel" required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+44 7700 000000"
                        className={inputCls}
                      />
                    </div>

                    {/* Current Location */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Current Location
                      </label>
                      <input
                        type="text"
                        value={form.currentLocation}
                        onChange={e => setForm({ ...form, currentLocation: e.target.value })}
                        placeholder="London, UK"
                        className={inputCls}
                      />
                    </div>

                    {/* Years of Experience */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Years of Experience <span className="text-[#EB9B3D]">*</span>
                      </label>
                      <select
                        required
                        value={form.experience}
                        onChange={e => setForm({ ...form, experience: e.target.value })}
                        className={inputCls + " bg-white"}
                      >
                        <option value="">Select years</option>
                        <option>0 – 1 year</option>
                        <option>1 – 3 years</option>
                        <option>3 – 5 years</option>
                        <option>5 – 8 years</option>
                        <option>8 – 12 years</option>
                        <option>12+ years</option>
                      </select>
                    </div>

                    {/* Notice Period */}
                    <div>
                      <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                        Notice Period
                      </label>
                      <select
                        value={form.noticePeriod}
                        onChange={e => setForm({ ...form, noticePeriod: e.target.value })}
                        className={inputCls + " bg-white"}
                      >
                        <option value="">Select period</option>
                        <option>Immediate</option>
                        <option>2 weeks</option>
                        <option>1 month</option>
                        <option>2 months</option>
                        <option>3 months</option>
                        <option>More than 3 months</option>
                      </select>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      value={form.linkedin}
                      onChange={e => setForm({ ...form, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/yourname"
                      className={inputCls}
                    />
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-[13px] font-semibold text-[#111111] mb-1.5">
                      Cover Letter
                    </label>
                    <textarea
                      rows={4}
                      value={form.coverLetter}
                      onChange={e => setForm({ ...form, coverLetter: e.target.value })}
                      placeholder="Tell us why you're the perfect fit for this role..."
                      className={inputCls + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#EB9B3D] text-white rounded-xl font-semibold text-[15px] hover:bg-[#0D112D] transition-colors cursor-pointer"
                  >
                    Submit Application
                  </button>
                  <div className="flex items-start gap-2 text-[12px] text-[#888] mt-2">
                    <Shield className="w-4 h-4 text-[#EB9B3D]/50 shrink-0 mt-0.5" />
                    <span>We respect your privacy. We promise we won't spam you :)</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default CareersPage;
