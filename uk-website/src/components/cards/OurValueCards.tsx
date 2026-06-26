import { type OurValue } from "../../assets/constants/types";

function OurValueCards({ value }: { value: OurValue }) {
  return (
    <div className="p-6 bg-white border border-slate-100 rounded-[16px] shadow-[0px_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform">
      <value.icon className="w-8 h-8 text-[#555555] mb-4" strokeWidth={1.5} />
      <h3 className="text-[18px] font-bold text-[#111111] mb-2">
        {value.title}
      </h3>
      <p className="text-[14px] text-[#555555] leading-relaxed">
        {value.description}
      </p>
    </div>
  );
}

export default OurValueCards;
