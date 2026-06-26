import { Link, NavLink } from "react-router-dom";
import "../assets/css/Header.css";

const navItems = [
  { label: "Home", path: "/pages/home" },
  { label: "About Us", path: "/pages/about" },
  {
    label: "Services",
    path: "/pages/services",
    subItems: [
      { label: "IT Services", path: "/pages/services/it" },
      { label: "Staffing & Consulting", path: "/pages/services/staffing" },
      { label: "New-Gen Services", path: "/pages/services/newgen" },
    ],
  },
  { label: "Products", path: "/pages/products" },
  { label: "Careers", path: "/pages/careers" },
  { label: "Contact", path: "/pages/contact" },
  { label: "Blog", path: "/pages/blog" },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/pages/home" className="brand-logo">
          InfoPlus
        </Link>
        <nav className="main-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.subItems ? (
                  <>
                    <span>{item.label}</span>
                    <ul className="submenu">
                      {item.subItems.map((sub) => (
                        <li key={sub.label}>
                          <NavLink
                            to={sub.path}
                            className={({ isActive }) =>
                              isActive ? "active" : undefined
                            }
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
