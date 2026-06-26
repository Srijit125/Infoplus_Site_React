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
    megaMenu: [
      {
        label: "IT Services",
        href: "/services/it-services",
        items: [
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
            href: "/services/infrastructure-management",
          },
          { label: "SAP Consulting", href: "/services/sap-consulting" },
          { label: "Cyber Security", href: "/services/cyber-security" },
          { label: "Cloud Portfolio", href: "/services/cloud" },
        ],
      },
      {
        label: "Staffing & Consulting",
        href: "/services/staffing-consulting",
        items: [
          { label: "IT Staffing Solutions", href: "/services/staffing" },
          { label: "IT Consulting Solutions", href: "/services/consulting" },
          { label: "Umbrella Service", href: "/services/umbrella" },
        ],
      },
      {
        label: "New-Gen Services",
        href: "/services/new-generation",
        items: [
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
