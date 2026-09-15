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
    <div className="w-[700px] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(13,17,45,0.28)] border border-[#EB9B3D]/15">
      <div className={`grid ${showLeftPanel ? "grid-cols-[220px_1fr]" : "grid-cols-1"}`}>

        {/* Left panel — shown only for multi-category items (Services) */}
        {showLeftPanel && (
          <div className="bg-[#0D112D] py-3">
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
                      ? "bg-[#EB9B3D]/15 text-[#EB9B3D] border-r-2 border-[#EB9B3D]"
                      : "text-white/55 hover:text-white hover:bg-white/[0.06] border-r-2 border-transparent",
                  ].join(" ")}
                >
                  <span>{category.label}</span>
                  <ChevronRight
                    size={14}
                    className={[
                      "transition-all duration-200",
                      isActive ? "opacity-100 text-[#EB9B3D]" : "opacity-0 group-hover/cat:opacity-40",
                    ].join(" ")}
                  />
                </NavLink>
              );
            })}
          </div>
        )}

        {/* Right panel */}
        <div className="bg-white p-6">
          {/* Category hub link */}
          <div className="mb-4 pb-3.5 border-b border-[#EB9B3D]/15">
            <NavLink
              to={activeCategory.href}
              className="group/hub flex items-center justify-between rounded-xl hover:bg-[#FEF6EC] px-3 py-2 -mx-3 transition-colors duration-200"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#EB9B3D]/60 font-bold mb-0.5">
                  Explore
                </p>
                <h3 className="text-[15px] font-bold text-[#0D112D] group-hover/hub:text-[#EB9B3D] transition-colors duration-200">
                  {activeCategory.label}
                </h3>
              </div>
              <ArrowRight
                size={16}
                className="text-[#EB9B3D]/50 group-hover/hub:text-[#EB9B3D] group-hover/hub:translate-x-1 transition-all duration-200"
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
                    "group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-150",
                    isActive
                      ? "bg-[#FEF6EC] text-[#EB9B3D]"
                      : "text-[#3a3a4a] hover:bg-[#FEF6EC] hover:text-[#EB9B3D]",
                  ].join(" ")
                }
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB9B3D] group-hover/item:bg-[#EB9B3D] transition-colors duration-150 shrink-0" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
