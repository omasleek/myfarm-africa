import React, { useState } from "react";
import logo from "/logo.svg";

const Header = ({ onLogin, onSignup }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="MYFARM AFRICA" className="h-10 w-auto" />
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a
              href="#home"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#investments"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium"
            >
              Investments
            </a>
          </li>
          <li>
            <a
              href="#why-us"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium"
            >
              Why Us
            </a>
          </li>
          <li>
            <a
              href="#impact"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium"
            >
              Impact
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onLogin}
            className="text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium"
          >
            Login
          </button>
          <button
            onClick={onSignup}
            className="bg-[#0B3D2E] text-white px-6 py-2.5 rounded-lg hover:bg-[#F5C400] hover:text-[#0B3D2E] transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
          >
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden text-[#0B3D2E] focus:outline-none p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-6">
              <li>
                <a
                  href="#home"
                  className="block text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="block text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#investments"
                  className="block text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Investments
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="block text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="block text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Impact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
              <li className="pt-6 border-t border-gray-200 space-y-3">
                <button
                  onClick={() => {
                    onLogin();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-[#0B3D2E] hover:text-[#F5C400] transition-colors duration-200 font-medium text-lg py-3"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    onSignup();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#0B3D2E] text-white px-6 py-3 rounded-lg hover:bg-[#F5C400] hover:text-[#0B3D2E] transition-all duration-200 font-semibold text-lg shadow-sm hover:shadow-md"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
