import { Link, useNavigate } from "react-router-dom";
import { PageMeta } from "../components/shared/PageMeta";
import { Home, ArrowLeft, Search, Layers } from "lucide-react";

const QUICK_LINKS = [
  { label: "About Us",        href: "/about" },
  { label: "IT Services",     href: "/services/it-services" },
  { label: "AI Solutions",    href: "/services/it-services/artificial-intelligence" },
  { label: "SAP Consulting",  href: "/services/it-services/sap-consulting" },
  { label: "Cloud Portfolio", href: "/services/it-services/cloud-portfolio" },
  { label: "Contact Us",      href: "/contact" },
];

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#0D112D] flex flex-col">
      <PageMeta
        title="Page Not Found | Infoplus Technologies UK"
        description="The page you are looking for could not be found. Return to the Infoplus Technologies homepage."
        path="/404"
        noIndex
      />

      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #EB9B3D 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#EB9B3D] opacity-[0.06] blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#DA4D33] opacity-[0.05] blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">

        {/* 404 badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EB9B3D]/10 border border-[#EB9B3D]/30 text-[#EB9B3D] text-[11px] font-bold uppercase tracking-widest mb-8">
          <Search className="w-3.5 h-3.5" />
          404 — Page Not Found
        </span>

        {/* Large 404 number */}
        <div
          className="text-[clamp(7rem,20vw,13rem)] font-black leading-none mb-6 select-none"
          style={{
            background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 60%, rgba(235,155,61,0.4) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-white mb-4 leading-tight">
          Oops! This page doesn't exist
        </h1>
        <p className="text-[15px] text-white/55 max-w-md leading-relaxed mb-10">
          The page you're looking for may have been moved, renamed, or is temporarily unavailable.
          Let's get you back on track.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(235,155,61,0.35)]"
            style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white/70 border border-white/15 hover:text-white hover:border-white/35 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Quick links */}
        <div className="w-full max-w-2xl">
          <p className="text-[11px] text-white/35 uppercase tracking-widest font-bold mb-5 flex items-center justify-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            Or explore a section
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2.5 rounded-xl text-[13px] font-medium text-white/55 border border-white/10 bg-white/[0.03] hover:text-white hover:border-[#EB9B3D]/40 hover:bg-[#EB9B3D]/[0.07] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
