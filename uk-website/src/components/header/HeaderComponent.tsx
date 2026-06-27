import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../helpers/ImageWithFallback";
import imgInfoplusLogo from "../../assets/images/imgInfoplusLogo.png";
import MegaMenu from "./MegaMenu";
import { navigation } from "../../data/navigate";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          ? "bg-white shadow-[0_2px_24px_rgba(0,0,0,0.10)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <ImageWithFallback
            src={imgInfoplusLogo}
            alt="Infoplus Technologies"
            className="h-10 w-auto object-contain transition-all duration-300"
            style={isScrolled ? { filter: "brightness(0) saturate(100%)" } : undefined}
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">
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

              {/* Invisible hover bridge */}
              <div className="absolute top-full left-0 h-4 w-full" />

              {item.megaMenu && (
                <div
                  className="absolute top-full left-0 mt-1
                    invisible opacity-0
                    group-hover:visible group-hover:opacity-100
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
            Free Demo <ChevronRight className="w-4 h-4" />
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
          className={`lg:hidden absolute top-full left-0 right-0 border-t py-4 px-6 flex flex-col gap-1 shadow-xl ${
            isScrolled
              ? "bg-white border-black/8"
              : "bg-[#1e0a38]/95 backdrop-blur-md border-white/10"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={`block px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                isScrolled
                  ? "text-[#111111] hover:text-[#f85d37] hover:bg-black/5"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="mt-3 flex items-center justify-center gap-2 bg-[#f85d37] text-white px-6 py-3 rounded-lg font-semibold text-[14px] hover:bg-[#e04f2c] transition-colors"
          >
            Free Demo <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>
      )}
    </header>
  );
}
