import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import PremiumServices from './components/PremiumServices';
import ProfessionalGroomer from './components/ProfessionalGroomer';
import Mission from './components/Mission';
import LookingForward from './components/LookingForward';
import CTABanner from './components/CTABanner';
import Testimonials from './components/Testimonials';
import PetShowGallery from './components/PetShowGallery';
import ServicesInShop from './components/ServicesInShop';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import RefundPolicy from './components/RefundPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import BookAppointment from './components/BookAppointment';
import FloatingContactButtons from './components/FloatingContactButtons';

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <PremiumServices />
      <ProfessionalGroomer />
      <Mission />
      <LookingForward />
      <CTABanner />
      <Testimonials />
      <PetShowGallery />
      <ServicesInShop />
      <FAQ />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        {/* <Navbar /> */}
        <FloatingContactButtons/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<PremiumServices />} />
          <Route path="/about" element={<ProfessionalGroomer />} />
          <Route path="/contact" element={<LookingForward />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;