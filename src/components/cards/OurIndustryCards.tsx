import type { Industry } from "../../assets/constants/types";

function OurIndustryCards({ industry }: { industry: Industry }) {
  return (
    <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm hover:scale-105 transition-transform cursor-pointer">
      <industry.icon className="w-5 h-5 text-[#6128a6]" />
      <span className="text-[14px] font-semibold text-[#111111]">
        {industry.label}
      </span>
    </div>
  );
}

export default OurIndustryCards;
