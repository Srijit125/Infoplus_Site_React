import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./helpers/ImageWithFallback";
import imgInfoplusLogo from "../assets/images/imgInfoplusLogo.png";
import imgCert1 from "../assets/images/certified-1.png";
import imgCert2 from "../assets/images/certified-2.png";
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

export function Footer({ bgColor }: { bgColor?: string }) {
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlEmail.trim()) return;
    setNlStatus("sending");
    try {
      const fd = new FormData();
      fd.append("name", "Newsletter Subscriber");
      fd.append("email", nlEmail.trim());
      fd.append("phone", "");
      fd.append("message", "Newsletter subscription request.");
      fd.append("type", "Newsletter Subscription");
      const res = await fetch("http://109.228.60.38/WebMail/api/Email/contact", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (json.success) {
        setNlStatus("success");
        setNlEmail("");
      } else {
        setNlStatus("error");
      }
    } catch {
      setNlStatus("error");
    }
    setTimeout(() => setNlStatus("idle"), 4000);
  };

  return (
    <footer className="text-white pt-20 pb-8" style={{ backgroundColor: bgColor ?? "#141A3D" }}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <ImageWithFallback
                src={imgInfoplusLogo}
                alt="Infoplus Technologies"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 text-[14px] leading-[24px] font-normal">
              Infoplus Technologies is a forward-looking Information technology
              company focused on building products, services, staffing,
              consulting, and digital transformation.
            </p>
            <div className="flex items-center gap-4">
              <ImageWithFallback
                src={imgCert1}
                alt="Certification 1"
                className="h-16 w-auto object-contain"
              />
              <ImageWithFallback
                src={imgCert2}
                alt="Certification 2"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[18px] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home",                 href: "/",                              external: false },
                { label: "About Us",             href: "/about",                         external: false },
                { label: "Careers",              href: "/careers",                       external: false },
                { label: "Contact",              href: "/contact",                       external: false },
                { label: "Carbon Reduction Plan",href: "/carbon-reduction-plan.pdf",     external: true  },
                { label: "ISO 14001:2015",       href: "/iso-14001-2015.pdf",            external: true  },
              ].map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors text-[14px] font-normal"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-white/70 hover:text-white transition-colors text-[14px] font-normal"
                    >
                      {item.label}
                    </Link>
                  )}
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
                { label: "IT Services",            to: "/services/it-services" },
                { label: "Staffing & Consulting",  to: "/services/staffing-consulting" },
                { label: "New-Gen Services",        to: "/services/new-generation" },
                { label: "Artificial Intelligence", to: "/services/it-services/artificial-intelligence" },
                { label: "Products",               to: "/products" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-white transition-colors text-[14px] font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[18px] mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 mb-6">
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

            <div className="flex items-center gap-3 mb-8">
              {socialMediaLinks.map((link: SocialMedia, idx: number) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.title}
                  className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#EB9B3D] hover:border-[#EB9B3D] hover:text-white transition-all duration-200"
                >
                  <SocialSvg name={link.title.toLowerCase()} />
                </a>
              ))}
            </div>

            <h4 className="text-white font-semibold text-[18px] mb-4">
              Newsletter
            </h4>
            <p className="text-[12px] text-white/70 mb-4 font-normal">
              Subscribe to get latest news &amp; updates
            </p>
            <form className="relative" onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                disabled={nlStatus === "sending" || nlStatus === "success"}
                className="w-full bg-white rounded-lg py-3 pl-4 pr-12 text-[14px] text-[#111] focus:outline-none placeholder:text-[#555] transition-colors disabled:opacity-60"
                required
              />
              <button
                type="submit"
                disabled={nlStatus === "sending" || nlStatus === "success"}
                className="absolute right-1 top-1 bottom-1 w-10 rounded-md flex items-center justify-center text-white transition-all duration-200 hover:opacity-90 cursor-pointer disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
                aria-label="Subscribe Now"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {nlStatus === "success" && (
              <p className="text-[12px] text-[#1bb64a] mt-2 font-medium">Subscribed successfully.</p>
            )}
            {nlStatus === "error" && (
              <p className="text-[12px] text-red-400 mt-2 font-medium">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright left */}
            <p className="text-white/70 text-[13px] font-normal">
              © {new Date().getFullYear()} Infoplus Technologies. All rights reserved.
            </p>

            {/* Legal links right */}
            <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
              {[
                { label: "Terms of Service", to: "/terms-of-service" },
                { label: "Privacy Policy",   to: "/privacy-policy" },
                { label: "Cookie Policy",    to: "/cookie-policy" },
              ].map((l, i, arr) => (
                <span key={l.label} className="flex items-center gap-1">
                  <Link
                    to={l.to}
                    className="text-white/45 hover:text-white text-[13px] font-normal transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span className="text-white/20 text-[10px] mx-2">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
