export interface MenuItem {
  label: string;
  href: string;
}

export interface MenuCategory {
  label: string;
  href: string;
  items: MenuItem[];
}

export interface NavigationItem {
  label: string;
  href: string;
  megaMenu?: MenuCategory[];
  noNavigate?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },

  {
    label: "Services",
    href: "/services",
    noNavigate: true,
    megaMenu: [
      {
        label: "IT Services",
        href: "/services/it-services",
        items: [
          { label: "Artificial Intelligence",    href: "/services/it-services/artificial-intelligence" },
          { label: "Software Development",        href: "/services/it-services/software-development" },
          { label: "Testing",                     href: "/services/it-services/testing" },
          { label: "Infrastructure Management",   href: "/services/it-services/infrastructure-management" },
          { label: "SAP Consulting",              href: "/services/it-services/sap-consulting" },
          { label: "Cyber Security",              href: "/services/it-services/cyber-security" },
          { label: "Cloud Portfolio",             href: "/services/it-services/cloud-portfolio" },
        ],
      },
      {
        label: "Staffing & Consulting",
        href: "/services/staffing-consulting",
        items: [
          { label: "IT Staffing Solutions",  href: "/services/staffing-consulting/it-staffing-solutions" },
          { label: "IT Consulting Solutions", href: "/services/staffing-consulting/it-consulting-solutions" },
          { label: "Umbrella Service",        href: "/services/staffing-consulting/umbrella-service" },
        ],
      },
      {
        label: "New-Gen Services",
        href: "/services/new-generation",
        items: [
          { label: "Enterprise Transformation", href: "/services/new-generation/enterprise-transformation" },
          { label: "Everything Data",          href: "/services/new-generation/everything-data" },
          { label: "Automation",               href: "/services/new-generation/automation" },
        ],
      },
    ],
  },

  {
    label: "Products",
    href: "/products",
    megaMenu: [
      {
        label: "Products",
        href: "/products",
        items: [
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

  {
    label: "Careers",
    href: "/careers",
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];


