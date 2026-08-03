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
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const location = useLocation();
  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
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
          <div className="h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center overflow-visible">
            <ImageWithFallback
              src={isScrolled ? imgInfoplusLogoColor : imgInfoplusLogo}
              alt="Infoplus Technologies"
              className="h-10 sm:h-12 lg:h-16 xl:h-20 w-auto object-contain transition-all duration-300"
            />
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">

              {/* Non-navigable item (Services): button instead of NavLink */}
              {item.noNavigate ? (
                <button
                  className={[
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-[14px] font-medium transition-all duration-200 cursor-default select-none",
                    isScrolled
                      ? isServicesActive
                        ? "text-[#6128a6] bg-[#f8f5ff] font-semibold"
                        : "text-[#111111] hover:text-[#f85d37] hover:bg-black/5"
                      : isServicesActive
                        ? "text-white bg-white/15 font-semibold"
                        : "text-white/90 hover:text-white hover:bg-white/10",
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
            className="flex items-center gap-2 bg-[#f85d37] text-white px-5 py-2.5 rounded-lg font-semibold text-[14px] hover:bg-[#e04f2c] transition-colors shrink-0"
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-[#111111] hover:bg-black/5"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 right-0 border-t py-4 px-6 flex flex-col gap-1 shadow-xl max-h-[80vh] overflow-y-auto ${
            isScrolled
              ? "bg-white border-black/8"
              : "bg-[#1e0a38]/95 backdrop-blur-md border-white/10"
          }`}
        >
          {navigation.map((item) => {
            if (item.megaMenu) {
              const isOpen = openMobileSection === item.label;
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenMobileSection(isOpen ? null : item.label)}
                    className={[
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors",
                      isScrolled
                        ? item.noNavigate && isServicesActive
                          ? "text-[#6128a6] bg-[#f8f5ff] font-semibold"
                          : "text-[#111111] hover:text-[#f85d37] hover:bg-black/5"
                        : item.noNavigate && isServicesActive
                          ? "text-white bg-white/15 font-semibold"
                          : "text-white/85 hover:text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="ml-3 mt-1 mb-1 flex flex-col gap-0.5">
                      {item.megaMenu.map((category) => (
                        <div key={category.label}>
                          {/* Category hub link */}
                          <Link
                            to={category.href}
                            className={[
                              "flex items-center gap-2 px-3 py-2 rounded-lg text-[14px] font-semibold transition-colors",
                              isScrolled
                                ? "text-[#6128a6] hover:bg-[#f8f5ff]"
                                : "text-[#aa3bff] hover:bg-white/8",
                            ].join(" ")}
                          >
                            <ChevronRight size={12} className="opacity-60 shrink-0" />
                            {category.label}
                          </Link>
                          {/* Sub-items */}
                          {category.items.map((subItem) => (
                            <NavLink
                              key={subItem.label}
                              to={subItem.href}
                              className={({ isActive }) => [
                                "block px-7 py-1.5 text-[13px] rounded-lg transition-colors",
                                isActive
                                  ? isScrolled
                                    ? "text-[#6128a6] font-medium"
                                    : "text-[#aa3bff] font-medium"
                                  : isScrolled
                                    ? "text-[#555] hover:text-[#6128a6] hover:bg-black/3"
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
            }

            return (
              <NavLink
                key={item.label}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) => [
                  "block px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors",
                  isActive
                    ? isScrolled
                      ? "text-[#6128a6] bg-[#f8f5ff]"
                      : "text-white bg-white/15"
                    : isScrolled
                      ? "text-[#111111] hover:text-[#f85d37] hover:bg-black/5"
                      : "text-white/85 hover:text-white hover:bg-white/10",
                ].join(" ")}
              >
                {item.label}
              </NavLink>
            );
          })}

          <NavLink
            to="/contact"
            className="mt-3 flex items-center justify-center gap-2 bg-[#f85d37] text-white px-6 py-3 rounded-lg font-semibold text-[14px] hover:bg-[#e04f2c] transition-colors"
          >
            Get Started <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>
      )}
    </header>
  );
}
