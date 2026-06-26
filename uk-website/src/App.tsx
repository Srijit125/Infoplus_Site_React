import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/FooterComponent";
// import Header from "./components/Header";
import { Header } from "./components/HeaderComponent";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { ContactPage } from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import ProductsPage from "./pages/ProductsPage";
import { ServicesPage } from "./pages/ServicesPage";
import InfrastructureManagement from "./pages/InfrastructureManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/services/infrastructure-management"
            element={<InfrastructureManagement />}
          />
          <Route
            path="/services/staffing-consulting"
            element={<ServicesPage />}
          />
          <Route path="/services/new-generation" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
