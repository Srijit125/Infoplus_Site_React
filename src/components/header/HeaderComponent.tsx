import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../helpers/ImageWithFallback";
import imgInfoplusLogo from "../../assets/images/imgInfoplusLogo.png";
import imgInfoplusLogoColor from "../../assets/images/imgInfoplusLogoColor.png";
import MegaMenu from "./MegaMenu";
import { navigation } from "../../data/navigate";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSections, setOpenMobileSections] = useState<Set<string>>(new Set());
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_2px_24px_rgba(0,0,0,0.10)] py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-4">

        {/* Logo — responsive height: grows with screen width */}
        <NavLink to="/" className="flex items-center shrink-0">
          <div className="h-12 sm:h-14 lg:h-16 xl:h-20 flex items-center overflow-visible">
            <ImageWithFallback
              src={isScrolled ? imgInfoplusLogoColor : imgInfoplusLogo}
              alt="Infoplus Technologies"
              className="h-12 sm:h-14 lg:h-16 xl:h-20 w-auto object-contain transition-all duration-300"
            />
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">

              {/* Non-navigable items (Services, Products): button instead of NavLink */}
              {item.noNavigate ? (
                <button
                  className={[
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 cursor-default select-none",
                    (() => {
                      const isActive = location.pathname.startsWith(item.href);
                      return isScrolled
                        ? isActive
                          ? "text-[#6128a6] bg-[#f8f5ff] font-semibold"
                          : "text-[#111111] hover:text-[#f85d37] hover:bg-black/5"
                        : isActive
                          ? "text-white bg-white/15 font-semibold"
                          : "text-white/90 hover:text-white hover:bg-white/10";
                    })(),
                  ].join(" ")}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className="opacity-60 group-hover:rotate-180 transition-transform duration-200"
                  />
                </button>
              ) : (
                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) => [
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-200",
                    isScrolled
                      ? isActive
                        ? "text-[#6128a6] bg-[#f8f5ff] font-semibold"
                        : "text-[#111111] hover:text-[#f85d37] hover:bg-black/5"
                      : isActive
                        ? "text-white bg-white/15 font-semibold"
                        : "text-white/90 hover:text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown
                      size={14}
                      className="opacity-60 group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </NavLink>
              )}

              {/* Invisible hover bridge prevents gap closing the menu */}
              {item.megaMenu && (
                <div className="absolute top-full left-0 h-4 w-full" />
              )}

              {item.megaMenu && (
                <div
                  className="absolute top-full left-0 pt-4
                    invisible opacity-0 translate-y-1
                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-200"
                >
                  <MegaMenu categories={item.megaMenu} />
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden lg:flex items-center">
          <NavLink
            to="/contact"
            className="flex items-center gap-2 text-white px-5 py-2.5 font-semibold text-[14px] transition-all duration-200 shrink-0 rounded-full hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(235,155,61,0.50)]"
            style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-200 cursor-pointer ${
            isScrolled
              ? "text-[#141A3D] border-[#141A3D]/20 hover:bg-[#141A3D]/5"
              : "text-white border-white/25 bg-white/10 hover:bg-white/15"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu — collapsible sections */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 bg-[#0D112D] border-t-2 border-[#EB9B3D] shadow-2xl overflow-y-auto z-49"
          style={{ top: isScrolled ? "64px" : "72px" }}
        >
          <div className="px-4 py-3 flex flex-col gap-0.5">

            {navigation.map((item) => {
              if (!item.megaMenu) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) => [
                      "block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200",
                      isActive
                        ? "text-[#EB9B3D] bg-[#EB9B3D]/10 font-semibold"
                        : "text-white/85 hover:text-white hover:bg-white/8",
                    ].join(" ")}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              const isOpen = openMobileSections.has(item.label);
              const isItemActive = location.pathname.startsWith(item.href);

              return (
                <div key={item.label}>
                  {/* Collapsible toggle */}
                  <button
                    onClick={() => setOpenMobileSections((prev) => {
                        const next = new Set(prev);
                        isOpen ? next.delete(item.label) : next.add(item.label);
                        return next;
                      })}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 cursor-pointer ${
                      isItemActive
                        ? "text-[#EB9B3D] bg-[#EB9B3D]/10"
                        : "text-white/85 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`text-[#EB9B3D] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="mt-1 mb-2 ml-2 pl-3 border-l-2 border-[#EB9B3D]/30 flex flex-col gap-0.5">
                      {item.megaMenu.map((category) => (
                        <div key={category.label}>
                          {/* Category label — shown for multi-category menus (Services) and single-category noNavigate menus (Products) */}
                          {(item.megaMenu!.length > 1 || item.noNavigate) && (
                            <Link
                              to={category.href}
                              className="block px-3 py-2 text-[13px] font-bold text-[#EB9B3D]/80 hover:text-[#EB9B3D] hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {category.label}
                            </Link>
                          )}
                          {/* Sub-items */}
                          {category.items.map((subItem) => (
                            <NavLink
                              key={subItem.label}
                              to={subItem.href}
                              className={({ isActive }) => [
                                "block px-5 py-1.5 text-[13px] rounded-lg transition-colors",
                                isActive
                                  ? "text-[#EB9B3D] font-semibold"
                                  : "text-white/55 hover:text-white hover:bg-white/5",
                              ].join(" ")}
                            >
                              {subItem.label}
                            </NavLink>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Divider */}
            <div className="my-2 h-px bg-white/10" />

            {/* CTA */}
            <NavLink
              to="/contact"
              className="w-full flex items-center justify-center gap-2 text-white px-6 py-3.5 font-bold text-[15px] transition-all duration-200 rounded-xl hover:brightness-110 hover:shadow-[0_6px_24px_rgba(235,155,61,0.40)]"
              style={{ background: "linear-gradient(135deg, #EB9B3D 0%, #DA4D33 100%)" }}
            >
              Get Started <ChevronRight className="w-4 h-4" />
            </NavLink>

            {/* Bottom safe area */}
            <div className="h-2" />
          </div>
        </div>
      )}
    </header>
  );
}
