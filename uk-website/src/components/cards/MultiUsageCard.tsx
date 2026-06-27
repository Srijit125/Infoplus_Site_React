import { Link } from "react-router-dom";
import type { Industry, OurValue, Service, Solution } from "../../assets/constants/types";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface MultiUsageCardProps {
  cardInfo: Industry | OurValue | Service | Solution | any;
  type: "industries" | "values" | "services" | "solutions";
}

function MultiUsageCard({ cardInfo, type }: MultiUsageCardProps) {

  /* ── Industry pill ───────────────────────────────────────── */
  if (type === "industries") {
    return (
      <div className="group flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 hover:bg-white hover:shadow-lg hover:border-white transition-all duration-200 cursor-pointer">
        {cardInfo.icon && (
          <cardInfo.icon className="w-4 h-4 text-[#6128a6] group-hover:text-[#f85d37] transition-colors duration-200" />
        )}
        <span className="text-[13px] font-semibold text-[#111111]">
          {cardInfo.title ?? cardInfo.label}
        </span>
      </div>
    );
  }

  /* ── Values card ─────────────────────────────────────────── */
  if (type === "values") {
    return (
      <div className="group relative p-6 bg-white border border-[#e5e4e7] rounded-2xl overflow-hidden hover:border-[#aa3bff]/30 hover:shadow-[0_8px_32px_rgba(97,40,166,0.10)] hover:-translate-y-1.5 transition-all duration-300">
        {/* Icon container */}
        <div className="w-11 h-11 rounded-xl bg-[#f8f5ff] flex items-center justify-center mb-5 group-hover:bg-[#ecdaff] transition-colors duration-300">
          {cardInfo.icon && (
            <cardInfo.icon className="w-5 h-5 text-[#6128a6]" strokeWidth={1.6} />
          )}
        </div>

        <h3 className="text-[16px] font-semibold text-[#111111] mb-2">
          {cardInfo.title}
        </h3>
        <p className="text-[13px] text-[#555555] leading-relaxed">
          {cardInfo.description}
        </p>

        {/* Bottom accent bar — slides in on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#381f55] via-[#6128a6] to-[#aa3bff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    );
  }

  /* ── Services card (on purple section bg) ────────────────── */
  if (type === "services") {
    return (
      <div className="group bg-white/95 rounded-2xl p-6 border border-white/60 hover:bg-white hover:shadow-[0_16px_48px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#f8f5ff] flex items-center justify-center mb-5 group-hover:bg-[#381f55] transition-colors duration-300">
          {cardInfo.icon && (
            <cardInfo.icon
              className="w-6 h-6 text-[#6128a6] group-hover:text-white transition-colors duration-300"
            />
          )}
        </div>

        <h3 className="text-[16px] font-bold text-[#111111] mb-2">
          {cardInfo.title}
        </h3>
        <p className="text-[13px] text-[#555555] mb-4 leading-relaxed line-clamp-2">
          {cardInfo.description}
        </p>

        {cardInfo.features && (
          <ul className="space-y-1.5 mb-5">
            {cardInfo.features.map((feat: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-[12px] text-[#555555]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6128a6] shrink-0" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#6128a6] group-hover:text-[#f85d37] transition-colors"
        >
          Learn more <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  /* ── Solutions card ──────────────────────────────────────── */
  if (type === "solutions") {
    return (
      <div className="group relative bg-white rounded-2xl p-8 border border-[#e5e4e7] overflow-hidden hover:border-[#aa3bff]/25 hover:shadow-[0_16px_48px_rgba(97,40,166,0.10)] hover:-translate-y-1.5 transition-all duration-300">
        {/* Subtle gradient wash on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Icon */}
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#381f55] to-[#6128a6] flex items-center justify-center mb-6 group-hover:shadow-[0_8px_20px_rgba(97,40,166,0.35)] transition-shadow duration-300">
          {cardInfo.icon && (
            <cardInfo.icon className="w-7 h-7 text-white" />
          )}
        </div>

        <h3 className="relative text-[22px] font-bold text-[#111111] mb-3">
          {cardInfo.title}
        </h3>
        <p className="relative text-[15px] text-[#555555] leading-relaxed mb-6">
          {cardInfo.description}
        </p>

        {cardInfo.features && (
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-7">
            {cardInfo.features.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6128a6] shrink-0" />
                <span className="text-[13px] text-[#555555] font-medium">{item}</span>
              </div>
            ))}
          </div>
        )}

        <Link
          to="/services"
          className="relative inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#381f55] group-hover:text-[#f85d37] transition-colors"
        >
          Learn more
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    );
  }

  return null;
}

export default MultiUsageCard;
