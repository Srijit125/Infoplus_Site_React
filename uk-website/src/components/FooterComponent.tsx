import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./helpers/ImageWithFallback";
import imgInfoplusLogo from "../assets/images/imgInfoplusLogo.png";
import { socialMediaLinks, type SocialMedia } from "../assets/constants/socialMedia";

function SocialSvg({ name }: { name: string }) {
  if (name === "facebook") return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
  if (name === "twitter") return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
  if (name === "linkedin") return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
  if (name === "instagram") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
  return null;
}

export function Footer() {
  return (
    <footer className="bg-[#261140] text-white pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <ImageWithFallback
                src={imgInfoplusLogo}
                alt="Infoplus Technologies"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 text-[14px] leading-[24px] font-normal">
              Infoplus Technologies is a forward-looking Information technology
              company focused on building products, services, staffing,
              consulting, and digital transformation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[18px] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Careers",
                "Contact",
                "Carbon Reduction Plan",
                "ISO 14001:2015",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/ /g, "-").replace(/:/g, "")}`
                    }
                    className="text-white/70 hover:text-white transition-colors text-[14px] font-normal"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[18px] mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "Artificial Intelligence",
                "Products",
                "IT Services",
                "Staffing & Consulting",
                "New-Gen Services",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-white transition-colors text-[14px] font-normal"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[18px] mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="mailto:uk@infoplusltd.co.uk"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-[14px] font-normal"
                >
                  <Mail className="w-5 h-5 text-white/70" />
                  uk@infoplusltd.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+442082073474"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-[14px] font-normal"
                >
                  <Phone className="w-5 h-5 text-white/70" />
                  +44 20 8207 3474
                </a>
              </li>
            </ul>

            <h4 className="text-white font-semibold text-[18px] mb-4">
              Newsletter
            </h4>
            <p className="text-[12px] text-white/70 mb-4 font-normal">
              Subscribe to get latest news &amp; updates
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-white rounded-lg py-3 pl-4 pr-12 text-[14px] text-[#111] focus:outline-none placeholder:text-[#555] transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-10 bg-[#261140] rounded-md flex items-center justify-center text-white hover:bg-[#381f55] transition-colors"
                aria-label="Subscribe Now"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-[14px] font-normal">
            © {new Date().getFullYear()} Infoplus Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialMediaLinks.map((link: SocialMedia, idx: number) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.title}
                className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#f85d37] hover:border-[#f85d37] hover:text-white transition-all duration-200"
              >
                <SocialSvg name={link.title.toLowerCase()} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
