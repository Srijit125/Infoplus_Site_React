export const navigation = {
  home: { label: "Home", path: "/pages/home" },
  about: { label: "About Us", path: "/pages/about" },
  services: {
    label: "Services",
    path: "/pages/services",
    subItems: [
      { label: "IT Services", path: "/pages/services/it" },
      { label: "Staffing & Consulting", path: "/pages/services/staffing" },
      { label: "New-Gen Services", path: "/pages/services/newgen" },
    ],
  },
  products: { label: "Products", path: "/pages/products" },
  careers: { label: "Careers", path: "/pages/careers" },
  contact: { label: "Contact", path: "/pages/contact" },
  blog: { label: "Blog", path: "/pages/blog" },
};
