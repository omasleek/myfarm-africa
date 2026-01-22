import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0B3D2E] via-green-700 to-[#F5C400] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">MYFARM AFRICA</h3>
            <p className="text-gray-200 mb-4">
              Investing in Africa's agricultural future for sustainable growth,
              food security, and community prosperity.
            </p>
            <div className="text-sm text-gray-300">
              🌾 Nourishing Communities Through Innovation
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#F5C400] transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#investments"
                  className="hover:text-[#F5C400] transition"
                >
                  Investments
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-[#F5C400] transition"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F5C400] transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5C400] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Trust & Compliance</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="hover:text-[#F5C400] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#F5C400] transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#risk" className="hover:text-[#F5C400] transition">
                  Risk Disclosure
                </a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-2">
              <div className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                SSL Secured
              </div>
              <div className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                Bank Grade
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-4">Email: omachilda.dev@gmail.com</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-[#F5C400] transition text-2xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="hover:text-[#F5C400] transition text-2xl"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="hover:text-[#F5C400] transition text-2xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="#"
                className="hover:text-[#F5C400] transition text-2xl"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; 2026 MYFARM AFRICA | Built by omachilda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
