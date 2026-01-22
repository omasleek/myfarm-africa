import React, { useState } from "react";

const Header = ({
  onInvestClick,
  isLoggedIn,
  onLogin,
  onSignup,
  onLogout,
  onInvestmentSelect,
  onContact,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const investmentOptions = [
    { name: "Crop Farming Investment", roi: "15-20%", duration: "6-9 months" },
    {
      name: "Livestock Farming Investment",
      roi: "18-25%",
      duration: "6-12 months",
    },
    {
      name: "Greenhouse & Smart Farming",
      roi: "20-30%",
      duration: "9-12 months",
    },
    {
      name: "Agro-Processing Investment",
      roi: "22-28%",
      duration: "12 months",
    },
    {
      name: "Export-Oriented Agriculture",
      roi: "25-35%",
      duration: "12-18 months",
    },
    {
      name: "Farmland Leasing & Ownership",
      roi: "10-18%",
      duration: "Long-term",
    },
    {
      name: "Organic Vegetable Farming",
      roi: "16-22%",
      duration: "8-10 months",
    },
    {
      name: "Fruit Orchard Investment",
      roi: "19-26%",
      duration: "12-24 months",
    },
    {
      name: "Aquaculture & Fish Farming",
      roi: "21-29%",
      duration: "10-15 months",
    },
    {
      name: "Dairy Farming Investment",
      roi: "17-24%",
      duration: "9-14 months",
    },
    {
      name: "Spice & Herb Cultivation",
      roi: "23-31%",
      duration: "8-12 months",
    },
    { name: "Timber & Agroforestry", roi: "12-20%", duration: "Long-term" },
  ];

  const handleInvestmentClick = (option) => {
    setIsDropdownOpen(false);
    if (onInvestmentSelect) {
      onInvestmentSelect(option);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#0B3D2E]">MYFARM AFRICA</div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition"
            >
              How It Works
            </a>
          </li>
          <li className="relative">
            <button
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="text-[#0B3D2E] hover:text-[#F5C400] transition"
            >
              Investments ▼
            </button>
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 w-80 grid grid-cols-2 gap-2 z-10"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {investmentOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleInvestmentClick(option)}
                    className="text-left p-2 hover:bg-gray-100 rounded text-sm"
                  >
                    <div className="font-semibold text-[#0B3D2E]">
                      {option.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      ROI: {option.roi}
                    </div>
                    <div className="text-xs text-gray-600">
                      Duration: {option.duration}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </li>
          <li>
            <a
              href="#why-us"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition"
            >
              Why Us
            </a>
          </li>
          <li>
            <a
              href="#impact"
              className="text-[#0B3D2E] hover:text-[#F5C400] transition"
            >
              Impact
            </a>
          </li>
          <li>
            <button
              onClick={onContact}
              className="text-[#0B3D2E] hover:text-[#F5C400] transition"
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <button
                onClick={onInvestClick}
                className="bg-[#F5C400] text-[#0B3D2E] px-4 py-2 rounded hover:bg-[#0B3D2E] hover:text-white transition"
              >
                Invest Now
              </button>
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onLogin}
                className="text-[#0B3D2E] hover:text-[#F5C400] transition"
              >
                Login
              </button>
              <button
                onClick={onSignup}
                className="bg-[#0B3D2E] text-white px-4 py-2 rounded hover:bg-[#F5C400] hover:text-[#0B3D2E] transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
