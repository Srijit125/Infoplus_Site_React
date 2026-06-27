import { Link } from "react-router";
import { ChevronRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/helpers/ImageWithFallback";
import imgWorkspace from "../assets/images/imgWorkspace.png";
import imgMap from "../assets/images/imgMap.png";
import {
  industries,
  ourSolutions,
  ourValues,
  services,
} from "../assets/constants/types";
import MultiUsageCard from "../components/cards/MultiUsageCard";
import IndexBanner from "../components/shared/IndexBanner";
import ClientCarousel from "../components/ui/ClientCarousel";
import { ScrollReveal } from "../components/ui/ScrollReveal";

function HomePage() {
  return (
    <div className="w-full">

      {/* 1. Hero — has its own entrance animation */}
      <IndexBanner />

      {/* ──────────────────────────────────────────────
          2. About
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f8f5ff] rounded-[24px] transform -translate-x-4 translate-y-4 -z-10" />
                <ImageWithFallback
                  src={imgWorkspace}
                  alt="Office Workspace"
                  className="w-full rounded-[24px] object-cover shadow-lg"
                />
              </div>
            </ScrollReveal>

            {/* Copy */}
            <ScrollReveal direction="right" delay={120}>
              <div>
                <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">
                  About Us
                </span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-6 leading-tight">
                  Forward-Looking IT Company
                </h2>
                <div className="space-y-5 mb-10">
                  <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                    Infoplus Technologies UK Ltd is a forward-looking Information
                    technology company focused on building products, services,
                    staffing, consulting, and digital transformation, needed for
                    next-generation.
                  </p>
                  <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                    We combine the power of technology with our culture: Quality,
                    Innovation, and customer empathy. Infoplus Technologies UK Ltd
                    is at the forefront in providing a comprehensive portfolio of
                    services to cater to the needs of clients' strategies in the
                    evolving world of digital.
                  </p>
                  <p className="text-[16px] text-[#555555] leading-[1.75] text-justify">
                    Headquartered at Borehamwood, United Kingdom, we challenge
                    industry norms by holding ourselves accountable through our
                    fixed-price and ongoing service contract methods, with a
                    unique performance-pricing model.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="bg-[#f85d37] text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors inline-flex items-center gap-2 group"
                >
                  Know More About Us
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          3. Solutions
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">
                Our Work
              </span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-5 leading-tight">
                Proactively Managed IT Solutions
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-3xl text-justify">
                In order for a business to strive and to meet its planned
                objectives, supporting IT is not just enough but strategically led
                and proactively managed IT. Our forward-thinking IT service CoE
                team has been designing end-to-end solutions for organisations to
                have a technology edge and to be ahead of the curve.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourSolutions.map((solution, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 120}>
                <MultiUsageCard cardInfo={solution} type="solutions" />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────
          4. AI Services
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#6128a6] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <ScrollReveal direction="left" className="lg:col-span-5">
              <div>
                <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">
                  AI Services
                </span>
                <h2 className="text-[36px] font-bold mb-5 leading-tight">
                  Pioneering the Future with AI
                </h2>
                <p className="text-[16px] text-white/85 leading-[1.75] mb-10 text-justify">
                  Infoplus Technologies is at the forefront of Artificial
                  Intelligence, helping organisations harness the power of AI to
                  drive efficiency, innovation, and competitive advantage. Our
                  dedicated AI Centre of Excellence combines deep technical
                  expertise with industry knowledge.
                </p>
                <Link
                  to="/services"
                  className="bg-[#f85d37] text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#e04f2c] transition-colors inline-flex items-center gap-2 group"
                >
                  Explore AI Services
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((ai, idx) => (
                <ScrollReveal key={idx} variant="card" delay={idx * 100}>
                  <MultiUsageCard cardInfo={ai} type="services" />
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          5. Values
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">
                Our Values
              </span>
              <h2 className="text-[36px] font-bold text-[#111111]">
                Driven By Excellence
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourValues.map((val, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 80}>
                <MultiUsageCard cardInfo={val} type="values" />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────
          6. Industries
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#6128a6]">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-12">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">
                Our Industries
              </span>
              <h2 className="text-[36px] font-bold text-white">
                Industries We Serve
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap gap-4">
            {industries.map((ind, idx) => (
              <ScrollReveal key={idx} direction="fade" delay={idx * 45}>
                <MultiUsageCard cardInfo={ind} type="industries" />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────
          7. Clients carousel
      ────────────────────────────────────────────── */}
      <ScrollReveal direction="fade">
        <ClientCarousel />
      </ScrollReveal>

      {/* ──────────────────────────────────────────────
          8. Global Presence
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">

          <ScrollReveal direction="up">
            <div className="mb-14">
              <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">
                Global Reach
              </span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-5">
                Our Presence Worldwide
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.75] max-w-2xl text-justify">
                We have a global reach with offices and operations across three
                countries — delivering world-class technology solutions wherever
                our clients need us.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={200}>
            <div className="flex justify-center mt-10">
              <ImageWithFallback
                src={imgMap}
                alt="World Map Locations"
                className="w-full max-w-5xl h-auto object-contain"
              />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ──────────────────────────────────────────────
          9. Contact
      ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — locations */}
            <ScrollReveal direction="left">
              <div>
                <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 block">
                  Get in Touch
                </span>
                <h2 className="text-[36px] font-bold text-[#111111] mb-5 leading-tight">
                  Let's Start a Project Together
                </h2>
                <p className="text-[16px] text-[#555555] leading-[1.75] mb-12 text-justify">
                  We'd love to hear from you. Please fill out our form or drop us
                  an email and we'll get back to you within one business day.
                </p>

                <div className="space-y-8">
                  {[
                    { title: "United Kingdom", desc: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW.", icon: MapPin },
                    { title: "India",           desc: "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai 600096.", icon: MapPin },
                    { title: "Germany",         desc: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, 60327.", icon: MapPin },
                  ].map((loc, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                        <loc.icon className="w-5 h-5 text-[#555555]" />
                      </div>
                      <div>
                        <h5 className="text-[17px] font-semibold text-[#111111] mb-1">
                          {loc.title}
                        </h5>
                        <p className="text-[14px] text-[#555555] leading-relaxed text-justify">
                          {loc.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — form */}
            <ScrollReveal direction="right" delay={150}>
              <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0px_20px_40px_rgba(0,0,0,0.04)] border border-slate-100">
                <h3 className="text-[24px] font-bold text-[#111111] mb-8">
                  Quick Enquiry
                </h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] text-[#555555] mb-2 font-medium tracking-wide">First Name</label>
                      <input type="text" placeholder="John" className="w-full bg-[#f8f5ff] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#6128a6] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#555555] mb-2 font-medium tracking-wide">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full bg-[#f8f5ff] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#6128a6] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#555555] mb-2 font-medium tracking-wide">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-[#f8f5ff] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#6128a6] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] text-[#555555] mb-2 font-medium tracking-wide">Message</label>
                    <textarea rows={4} placeholder="Write your message here..." className="w-full bg-[#f8f5ff] border border-transparent rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-[#6128a6] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#f85d37] text-white rounded-lg px-8 py-4 font-semibold text-[16px] hover:bg-[#e04f2c] transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
