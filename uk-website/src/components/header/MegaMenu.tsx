import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { type MenuCategory } from "../../data/navigate";

interface Props {
  categories: MenuCategory[];
}

export default function MegaMenu({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="absolute left-0 top-full mt-1 w-[720px] rounded-2xl bg-white shadow-2xl border overflow-hidden">
      <div className="grid grid-cols-3">
        {/* Left */}

        <div className="bg-gray-50 border-r">
          {categories.map((category) => (
            <button
              key={category.label}
              onMouseEnter={() => setActiveCategory(category)}
              className={`w-full flex justify-between items-center px-6 py-4 text-left transition

              ${
                activeCategory.label === category.label
                  ? "bg-[#381f55] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {category.label}

              <ChevronRight size={18} />
            </button>
          ))}
        </div>

        {/* Right */}

        <div className="col-span-2 p-8">
          <h3 className="font-semibold text-xl mb-6">{activeCategory.label}</h3>

          <div className="grid gap-4">
            {activeCategory.items.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className="text-gray-700 hover:text-[#f85d37] transition"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
