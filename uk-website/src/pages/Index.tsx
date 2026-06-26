import { Link } from "react-router";
import { ChevronRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/helpers/ImageWithFallback";

// Image Imports
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

function HomePage() {
  return (
    <div className="w-full font-['Inter']">
      {/* 1. Hero Section */}
      <IndexBanner />

      {/* 2. About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f8f5ff] rounded-[24px] transform -translate-x-4 translate-y-4 -z-10"></div>
              <ImageWithFallback
                src={imgWorkspace}
                alt="Office Workspace"
                className="w-full rounded-[24px] object-cover shadow-lg"
              />
            </div>

            <div>
              <span className="text-[#f85d37] text-[16px] font-bold uppercase tracking-wide mb-3 block">
                About Us
              </span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-6 leading-tight">
                Forward-Looking IT Company
              </h2>
              <div className="space-y-6 text-[#555555] text-[16px] leading-[28px] font-normal mb-10">
                <p>
                  Infoplus Technologies UK Ltd is a forward-looking Information
                  technology company focused on building products, services,
                  staffing, consulting, and digital transformation, needed for
                  next-generation.
                </p>
                <p>
                  We combine the power of technology with our culture: Quality,
                  Innovation, and customer empathy. Infoplus Technologies UK Ltd
                  is at the forefront in providing a comprehensive portfolio of
                  services to cater to the needs of clients' strategies in the
                  evolving world of digital.
                </p>
                <p>
                  Headquartered at Borehamwood, United Kingdom, we challenge
                  industry norms by holding ourselves accountable through our
                  fixed-price and ongoing service contract methods, with a
                  unique performance-pricing model.
                </p>
              </div>
              <Link
                to="/about"
                className="bg-[#f85d37] text-white px-8 py-3.5 rounded-[8px] font-semibold text-[16px] hover:bg-[#e04f2c] transition-colors inline-flex items-center gap-2 group"
              >
                KNOW MORE ABOUT US
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f85d37] text-[16px] font-bold tracking-wide mb-3 block">
              Our Work
            </span>
            <h2 className="text-[36px] font-bold text-[#111111] mb-6">
              Proactively Managed IT Solutions
            </h2>
            <p className="text-[16px] text-[#555555] leading-[28px]">
              In order for a business to strive and to meet its planned
              objectives, supporting IT is not just enough but strategically led
              and proactively managed IT. Our forward-thinking IT service CoE
              team has been designing end-to-end solutions for organizations to
              have a technology edge and to be ahead of the curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ourSolutions.map((service, idx) => (
              <MultiUsageCard cardInfo={service} type="solutions" key={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pioneering with AI Section */}
      <section className="py-24 bg-[#6128a6] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[#f85d37] text-[16px] font-bold tracking-wide mb-3 block">
                AI Services
              </span>
              <h2 className="text-[36px] font-bold mb-6 leading-tight">
                Pioneering the Future with AI
              </h2>
              <p className="text-[16px] text-white/90 leading-[28px] mb-10">
                Infoplus Technologies is at the forefront of Artificial
                Intelligence, helping organisations harness the power of AI to
                drive efficiency, innovation, and competitive advantage. Our
                dedicated AI Centre of Excellence combines deep technical
                expertise with industry knowledge.
              </p>
              <Link
                to="/services"
                className="bg-[#f85d37] text-white px-8 py-3.5 rounded-[8px] font-semibold text-[16px] hover:bg-[#e04f2c] transition-colors inline-flex items-center gap-2"
              >
                KNOW MORE ABOUT US
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((ai, idx) => (
                <MultiUsageCard cardInfo={ai} type="services" key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <span className="text-[#f85d37] text-[16px] font-bold tracking-wide mb-3 block">
            Our Values
          </span>
          <h2 className="text-[36px] font-bold text-[#111111] mb-16">
            Driven By Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {ourValues.map((val, idx) => (
              <MultiUsageCard cardInfo={val} type="values" key={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries Section */}
      <section className="py-24 bg-[#6128a6]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-[#f85d37] text-[16px] font-bold tracking-wide mb-3 block">
            Our Industries
          </span>
          <h2 className="text-[36px] font-bold text-white mb-12">
            Industries We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <MultiUsageCard key={i} cardInfo={ind} type="industries" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Clients Section */}
      <ClientCarousel />

      {/* 8. Global Presence Map */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f85d37] text-[16px] font-bold tracking-wide mb-3 block">
              Global Reach
            </span>
            <h2 className="text-[36px] font-bold text-[#111111] mb-6">
              Our Presence Worldwide
            </h2>
            <p className="text-[16px] text-[#555555] leading-[28px]">
              We have a global reach with offices and operations in 3 countries.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <ImageWithFallback
              src={imgMap}
              alt="World Map Locations"
              className="w-full max-w-5xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <section className="py-24 bg-[#f8f5ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#f85d37] text-[16px] font-bold tracking-wide mb-3 block">
                Get in Touch
              </span>
              <h2 className="text-[36px] font-bold text-[#111111] mb-6 leading-tight">
                Let's start a project together
              </h2>
              <p className="text-[16px] text-[#555555] leading-[28px] mb-12">
                We'd love to hear from you. Please fill out our form or drop us
                an email.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "United Kingdom",
                    desc: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW.",
                    icon: MapPin,
                  },
                  {
                    title: "India",
                    desc: "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai 600096.",
                    icon: MapPin,
                  },
                  {
                    title: "Germany",
                    desc: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, 60327.",
                    icon: MapPin,
                  },
                ].map((loc, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                      <loc.icon className="w-5 h-5 text-[#555555]" />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-[#111111] mb-1">
                        {loc.title}
                      </h4>
                      <p className="text-[14px] text-[#555555] leading-relaxed">
                        {loc.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0px_20px_40px_rgba(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-[24px] font-bold text-[#111111] mb-8">
                Quick Enquiry
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[14px] text-[#555555] mb-2 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-[#f8f5ff] border border-transparent rounded-[8px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6128a6] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] text-[#555555] mb-2 font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-[#f8f5ff] border border-transparent rounded-[8px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6128a6] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[14px] text-[#555555] mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#f8f5ff] border border-transparent rounded-[8px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6128a6] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[14px] text-[#555555] mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full bg-[#f8f5ff] border border-transparent rounded-[8px] px-4 py-3 text-[14px] focus:outline-none focus:border-[#6128a6] transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f85d37] text-white rounded-[8px] px-8 py-4 font-bold text-[16px] hover:bg-[#e04f2c] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
