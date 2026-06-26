import type { CareerPosition } from "../../assets/constants/types";

function CareerPosting({ job, idx }: { job: CareerPosition; idx: number }) {
  return (
    <div
      key={idx}
      className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
    >
      <div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
          {job.role}
        </h3>
        <div className="flex gap-4 text-sm font-medium text-slate-500">
          <span className="bg-slate-100 px-3 py-1 rounded-full">
            {job.team}
          </span>
          <span className="bg-slate-100 px-3 py-1 rounded-full">
            {job.location}
          </span>
        </div>
      </div>
      <button className="mt-4 md:mt-0 text-blue-600 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
        Apply Now
        <span>→</span>
      </button>
    </div>
  );
}

export default CareerPosting;
