import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/FooterComponent";
// import Header from "./components/Header";
import { Header } from "./components/header/HeaderComponent";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import { ContactPage } from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import ProductsPage from "./pages/ProductsPage";
import { ServicesPage } from "./pages/ServicesPage";
import AIPage from "./pages/AIPage";
import SoftwareDevelopmentPage from "./pages/SoftwareDevelopmentPage";
import TestingPage from "./pages/TestingPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import SAPPage from "./pages/SAPPage";
import CyberSecurityPage from "./pages/CyberSecurityPage";
import CloudPage from "./pages/CloudPage";
import StaffingPage from "./pages/StaffingPage";
import ConsultingPage from "./pages/ConsultingPage";
import UmbrellaPage from "./pages/UmbrellaPage";
import TransformationPage from "./pages/TransformationPage";
import EverythingDataPage from "./pages/EverythingDataPage";
import AutomationPage from "./pages/AutomationPage";
import MasterDataManagementPage from "./pages/MasterDataManagementPage";
import EducationSolutionsPage from "./pages/EducationSolutionsPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import ITServicesPage from "./pages/ITServicesPage";
import StaffingConsultingPage from "./pages/StaffingConsultingPage";
import NewGenServicesPage from "./pages/NewGenServicesPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import { CookieConsent } from "./components/ui/CookieConsent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/it-services" element={<ITServicesPage />} />
          <Route path="/services/staffing-consulting" element={<StaffingConsultingPage />} />
          <Route path="/services/new-generation" element={<NewGenServicesPage />} />
          <Route path="/services/artificial-intelligence" element={<AIPage />} />
          <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/services/testing" element={<TestingPage />} />
          <Route path="/services/infrastructure-management" element={<InfrastructurePage />} />
          <Route path="/services/sap-consulting" element={<SAPPage />} />
          <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
          <Route path="/services/cloud" element={<CloudPage />} />
          <Route path="/services/staffing" element={<StaffingPage />} />
          <Route path="/services/consulting" element={<ConsultingPage />} />
          <Route path="/services/umbrella" element={<UmbrellaPage />} />
          <Route path="/services/transformation" element={<TransformationPage />} />
          <Route path="/services/data" element={<EverythingDataPage />} />
          <Route path="/services/automation" element={<AutomationPage />} />
          <Route path="/products/master-data-management" element={<MasterDataManagementPage />} />
          <Route path="/products/education-solutions" element={<EducationSolutionsPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </BrowserRouter>
    </>
  );
}

export default App;
