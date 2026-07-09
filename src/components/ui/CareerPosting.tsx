import { Briefcase, ArrowRight } from "lucide-react";
import type { CareerPosition } from "../../assets/constants/types";

function CareerPosting({ job, idx }: { job: CareerPosition; idx: number }) {
  return (
    <div
      key={idx}
      className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-[#e5e4e7] rounded-2xl hover:border-[#6128a6]/40 hover:shadow-[0_8px_32px_rgba(97,40,166,0.08)] transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        {/* Icon badge */}
        <div className="w-10 h-10 rounded-xl bg-[#f8f5ff] border border-[#e5e4e7] flex items-center justify-center shrink-0 group-hover:bg-[#ecdaff] group-hover:border-[#aa3bff]/30 transition-all duration-300">
          <Briefcase className="w-5 h-5 text-[#6128a6]" strokeWidth={1.6} />
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-[#111111] group-hover:text-[#6128a6] transition-colors mb-2">
            {job.role}
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-[12px] font-medium text-[#555555] bg-[#f8f5ff] border border-[#e5e4e7] px-3 py-1 rounded-full">
              {job.team}
            </span>
            <span className="text-[12px] font-medium text-[#555555] bg-[#f8f5ff] border border-[#e5e4e7] px-3 py-1 rounded-full">
              {job.location}
            </span>
          </div>
        </div>
      </div>

      <button className="mt-5 md:mt-0 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6128a6] group-hover:text-[#f85d37] group-hover:translate-x-1 transition-all duration-200 shrink-0">
        Apply Now
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default CareerPosting;
