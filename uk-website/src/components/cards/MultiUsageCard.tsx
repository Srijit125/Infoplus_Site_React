import { Link } from "react-router-dom";
import type {
  Industry,
  OurValue,
  Service,
  Solution,
} from "../../assets/constants/types";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface MultiUsageCardProps {
  cardInfo: Industry | OurValue | Service | Solution | any;
  linkUrl?: string;
  features?: string[];
  type: "industries" | "values" | "services" | "solutions";
}

function MultiUsageCard({ cardInfo, type }: MultiUsageCardProps) {
  if (type === "industries") {
    return (
      <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm hover:scale-105 transition-transform cursor-pointer">
        {cardInfo.icon && <cardInfo.icon className="w-5 h-5 text-[#6128a6]" />}
        <span className="text-[14px] font-semibold text-[#111111]">
          {cardInfo.title || cardInfo.label}
        </span>
      </div>
    );
  }
  if (type === "values") {
    return (
      <div className="p-6 bg-white border border-slate-100 rounded-[16px] shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
        {cardInfo.icon && (
          <cardInfo.icon
            className="w-8 h-8 text-[#555555] mb-4"
            strokeWidth={1.5}
          />
        )}
        <h3 className="text-[18px] font-bold text-[#111111] mb-2">
          {cardInfo.title}
        </h3>
        <p className="text-[14px] text-[#555555] leading-relaxed">
          {cardInfo.description}
        </p>
      </div>
    );
  }
  if (type === "services") {
    return (
      <div className="bg-white rounded-[16px] p-6 shadow-lg hover:-translate-y-1 transition-transform">
        <cardInfo.icon className="w-8 h-8 text-[#6128a6] mb-4" />
        <h3 className="text-[18px] font-bold text-[#111111] mb-2">
          {cardInfo.title}
        </h3>
        <p className="text-[14px] text-[#555555] mb-4 leading-relaxed line-clamp-2">
          {cardInfo.description}
        </p>
        <ul className="space-y-2 mb-6">
          {cardInfo.features.map((feat: string, i: number) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[12px] text-[#555555]"
            >
              <div className="w-1 h-1 rounded-full bg-[#6128a6]"></div>
              {feat}
            </li>
          ))}
        </ul>
        <Link
          to="/services"
          className="text-[#6128a6] font-semibold flex items-center gap-1 hover:text-[#452c94] text-[14px]"
        >
          Know more <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }
  if (type === "solutions") {
    return (
      <div className="bg-white rounded-[16px] p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-slate-100 hover:-translate-y-1 transition-transform">
        <div className="w-[56px] h-[56px] rounded-[14px] bg-[#ededff] flex items-center justify-center mb-6">
          <cardInfo.icon className="w-7 h-7 text-[#2A2AFA]" />
        </div>
        <h3 className="text-[24px] font-bold text-[#111111] mb-4">
          {cardInfo.title}
        </h3>
        <p className="text-[16px] text-[#555555] leading-[28px] mb-6">
          {cardInfo.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 mb-8">
          {cardInfo.features.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2A2AFA] shrink-0" />
              <span className="text-[14px] text-[#555555]">{item}</span>
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="text-[#111111] font-semibold flex items-center gap-1 hover:text-[#f85d37] transition-colors text-[14px]"
        >
          Know more <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }
}

export default MultiUsageCard;
