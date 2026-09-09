import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/FooterComponent";
// import Header from "./components/Header";
import { Header } from "./components/header/HeaderComponent";
import Index from "./pages/Index";
import IndexTheme1 from "./pages/IndexTheme1";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import { ContactPage } from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import ProductsPage from "./pages/ProductsPage";
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
import { ScrollToTop } from "./components/ui/ScrollToTop";

function AppShell() {
  const footerBg = "#141A3D";

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home-2" element={<Index />} />
        <Route path="/home-1" element={<IndexTheme1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services/it-services" element={<ITServicesPage />} />
        <Route path="/services/staffing-consulting" element={<StaffingConsultingPage />} />
        <Route path="/services/new-generation" element={<NewGenServicesPage />} />
        <Route path="/services/it-services/artificial-intelligence" element={<AIPage />} />
        <Route path="/services/it-services/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/services/it-services/testing" element={<TestingPage />} />
        <Route path="/services/it-services/infrastructure-management" element={<InfrastructurePage />} />
        <Route path="/services/it-services/sap-consulting" element={<SAPPage />} />
        <Route path="/services/it-services/cyber-security" element={<CyberSecurityPage />} />
        <Route path="/services/it-services/cloud-portfolio" element={<CloudPage />} />
        <Route path="/services/staffing-consulting/it-staffing-solutions" element={<StaffingPage />} />
        <Route path="/services/staffing-consulting/it-consulting-solutions" element={<ConsultingPage />} />
        <Route path="/services/staffing-consulting/umbrella-service" element={<UmbrellaPage />} />
        <Route path="/services/new-generation/enterprise-transformation" element={<TransformationPage />} />
        <Route path="/services/new-generation/everything-data" element={<EverythingDataPage />} />
        <Route path="/services/new-generation/automation" element={<AutomationPage />} />
        <Route path="/products/master-data-management" element={<MasterDataManagementPage />} />
        <Route path="/products/education-solutions" element={<EducationSolutionsPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer bgColor={footerBg} />
      <CookieConsent />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;


