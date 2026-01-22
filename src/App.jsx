import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import InvestmentOpportunities from "./components/sections/InvestmentOpportunities";
import WhyUs from "./components/sections/WhyUs";
import SuccessStories from "./components/sections/SuccessStories";
import Impact from "./components/sections/Impact";
import CallToAction from "./components/sections/CallToAction";
import Footer from "./components/Footer";
import InvestmentModal from "./components/InvestmentModal";
import DetailedInvestmentModal from "./components/DetailedInvestmentModal";
import ContactModal from "./components/ContactModal";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [isDetailedModalOpen, setIsDetailedModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const switchToSignup = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const switchToLogin = () => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
  };


  const closeDetailedModal = () => {
    setIsDetailedModalOpen(false);
    setSelectedInvestment(null);
  };

  const handleProceedToCheckout = (investment) => {
    // For now, just close and alert
    alert(`Proceeding to checkout for ${investment.name}`);
    closeDetailedModal();
  };

  const closeContactModal = () => setIsContactModalOpen(false);

  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="App">
      <Header
        onLogin={openLoginModal}
        onSignup={openSignupModal}
      />
      <main>
        <Hero />
        <HowItWorks />
        <InvestmentOpportunities />
        <WhyUs />
        <SuccessStories />
        <Impact />
        <CallToAction />
      </main>
      <Footer />
      <InvestmentModal isOpen={isModalOpen} onClose={closeModal} />
      <DetailedInvestmentModal
        isOpen={isDetailedModalOpen}
        onClose={closeDetailedModal}
        investment={selectedInvestment}
        onProceedToCheckout={handleProceedToCheckout}
      />
      <Signup
        isOpen={isSignupModalOpen}
        onClose={closeSignupModal}
        onSwitchToLogin={switchToLogin}
      />
      <Login
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onSwitchToSignup={switchToSignup}
        onLogin={handleLogin}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  );
}

export default App;
