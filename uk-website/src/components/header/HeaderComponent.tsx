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
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "IT Services",
        children: [
          {
            label: "Artificial Intelligence",
            href: "/services/artificial-intelligence",
          },
          {
            label: "Software Development",
            href: "/services/software-development",
          },
          { label: "Testing", href: "/services/testing" },
          {
            label: "Infrastructure Management",
            href: "/services/infrastructure",
          },
          { label: "SAP Consulting", href: "/services/sap" },
          { label: "Cyber Security", href: "/services/cyber-security" },
          { label: "Cloud Portfolio", href: "/services/cloud" },
        ],
      },
      {
        label: "Staffing & Consulting",
        children: [
          { label: "IT Staffing Solutions", href: "/services/staffing" },
          { label: "IT Consulting", href: "/services/consulting" },
          { label: "Umbrella Services", href: "/services/umbrella" },
        ],
      },
      {
        label: "New-Gen Services",
        children: [
          {
            label: "Enterprise Transformation",
            href: "/services/transformation",
          },
          { label: "Everything Data", href: "/services/data" },
          { label: "Automation", href: "/services/automation" },
        ],
      },
    ],
  },

  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Products",
        children: [
          {
            label: "Master Data Management",
            href: "/products/master-data-management",
          },
          {
            label: "Education Solutions",
            href: "/products/education-solutions",
          },
        ],
      },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all rounded-[80px] duration-300 ${
        isScrolled ? "bg-[#381f55] shadow-md py-3" : "bg-[#381f55]/80  py-5 "
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-2 group">
          <ImageWithFallback
            src={imgInfoplusLogo}
            alt="Infoplus Technologies"
            className="h-10 w-auto object-contain"
          />
        </NavLink>

        <nav className="hidden lg:flex gap-4">
          {navigation.map((item) => (
            <div key={item.label} className="relative group">
              <NavLink
                to={item.href}
                className="flex items-center gap-4 text-white hover:text-[#f85d37] transition"
              >
                {item.label}

                {item.megaMenu && (
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition"
                  />
                )}
              </NavLink>
              {/* Invisible bridge */}
              <div className="absolute top-full left-0 h-5 w-full"></div>
              {item.megaMenu && (
                <div
                  className="  absolute
            top-full
            left-0
            mt-2
            invisible
            opacity-0
            group-hover:visible
            group-hover:opacity-100"
                >
                  <MegaMenu categories={item.megaMenu} />
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center pl-4">
          <NavLink
            to="/contact"
            className="flex items-center gap-2 bg-[#f85d37] text-white px-6 py-2.5 rounded-[8px] font-['Inter'] font-semibold text-[14px] hover:bg-[#e04f2c] transition-colors"
          >
            Free Demo <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>

        <button
          className="lg:hidden text-white p-2"
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

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#381f55] border-t border-white/10 shadow-lg py-4 px-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={`block py-2 text-base font-['Inter'] font-medium ${
                location.pathname === item.href ? "text-white" : "text-white/80"
              }`}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="w-full mt-4 flex items-center justify-center gap-2 bg-[#f85d37] text-white px-6 py-3 rounded-[8px] font-['Inter'] font-semibold text-sm hover:bg-[#e04f2c] transition-colors"
          >
            Free Demo <ChevronRight className="w-4 h-4" />
          </NavLink>
        </div>
      )}
    </header>
  );
}
