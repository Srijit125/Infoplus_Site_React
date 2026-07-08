import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { type MenuCategory } from "../../data/navigate";

interface Props {
  categories: MenuCategory[];
}

export default function MegaMenu({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const showLeftPanel = categories.length > 1;

  return (
    <div className="w-[680px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.22)] border border-[#381f55]/20">
      <div className={`grid ${showLeftPanel ? "grid-cols-[210px_1fr]" : "grid-cols-1"}`}>

        {/* Left panel only when multiple categories */}
        {showLeftPanel && (
          <div className="bg-[#1e0a38] py-2">
            {categories.map((category) => {
              const isActive = activeCategory.label === category.label;
              return (
                <NavLink
                  key={category.label}
                  to={category.href}
                  onMouseEnter={() => setActiveCategory(category)}
                  className={[
                    "group/cat flex items-center justify-between px-5 py-3.5 text-[13px] font-medium transition-all duration-200",
                    isActive
                      ? "bg-[#6128a6] text-white"
                      : "text-white/60 hover:text-white hover:bg-white/[0.08]",
                  ].join(" ")}
                >
                  <span>{category.label}</span>
                  <ChevronRight
                    size={14}
                    className={[
                      "transition-all duration-200",
                      isActive ? "opacity-100 translate-x-0.5" : "opacity-0 group-hover/cat:opacity-50",
                    ].join(" ")}
                  />
                </NavLink>
              );
            })}
          </div>
        )}

        {/* Right panel */}
        <div className="bg-white p-6">
          {/* Category hub header links to the hub page */}
          <div className="mb-4 pb-3.5 border-b border-[#ecdaff]">
            <NavLink
              to={activeCategory.href}
              className="group/hub flex items-center justify-between rounded-lg hover:bg-[#f8f5ff] px-2 py-1.5 -mx-2 transition-colors duration-200"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#6128a6]/50 font-bold mb-0.5">
                  Explore Hub
                </p>
                <h3 className="text-[16px] font-bold text-[#0d0517] group-hover/hub:text-[#6128a6] transition-colors duration-200">
                  {activeCategory.label}
                </h3>
              </div>
              <ArrowRight
                size={16}
                className="text-[#6128a6]/60 group-hover/hub:text-[#6128a6] group-hover/hub:translate-x-1 transition-all duration-200"
              />
            </NavLink>
          </div>

          {/* Sub-items */}
          <div className="grid grid-cols-2 gap-0.5">
            {activeCategory.items.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  [
                    "group/item flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150",
                    isActive
                      ? "bg-[#f8f5ff] text-[#6128a6]"
                      : "text-[#444] hover:bg-[#f8f5ff] hover:text-[#6128a6]",
                  ].join(" ")
                }
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#aa3bff]/30 group-hover/item:bg-[#6128a6] transition-colors duration-150 shrink-0" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
