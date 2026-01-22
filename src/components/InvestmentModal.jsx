import { motion } from "framer-motion";

const InvestmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const investments = [
    {
      name: "Crop Farming Investment",
      crops: "Rice, Maize, Cassava",
      roi: "15–20%",
      duration: "6–9 months",
      risk: "Low",
      returns: "Profit share + quarterly updates",
      impact: "Food security & local farmers support",
      minAmount: "₦50,000",
      maxAmount: "₦5,000,000",
    },
    {
      name: "Livestock Farming Investment",
      crops: "Poultry, Cattle, Goat farming",
      roi: "18–25%",
      duration: "6–12 months",
      risk: "Medium",
      returns: "Profit + reinvestment option",
      impact: "Protein supply & job creation",
      minAmount: "₦100,000",
      maxAmount: "₦10,000,000",
    },
    {
      name: "Greenhouse & Smart Farming",
      crops: "Tech-enabled farming",
      roi: "20–30%",
      duration: "9–12 months",
      risk: "Medium",
      returns: "Higher yield profits + detailed reports",
      impact: "Sustainable agriculture & innovation",
      minAmount: "₦200,000",
      maxAmount: "₦15,000,000",
    },
    {
      name: "Agro-Processing Investment",
      crops: "Food processing & packaging",
      roi: "22–28%",
      duration: "12 months",
      risk: "Medium",
      returns: "Profit share + dividend options",
      impact: "Value chain development",
      minAmount: "₦500,000",
      maxAmount: "₦20,000,000",
    },
    {
      name: "Export-Oriented Agriculture",
      crops: "Cocoa, Sesame, Ginger",
      roi: "25–35%",
      duration: "12–18 months",
      risk: "High",
      returns: "Foreign-market profits",
      impact: "FX earnings & global trade",
      minAmount: "₦1,000,000",
      maxAmount: "₦50,000,000",
    },
    {
      name: "Farmland Leasing & Ownership",
      crops: "Lease or co-own farmland",
      roi: "10–18%",
      duration: "Long-term",
      risk: "Low",
      returns: "Rental income + asset appreciation",
      impact: "Long-term agricultural sustainability",
      minAmount: "₦2,000,000",
      maxAmount: "₦100,000,000",
    },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0B3D2E]/80 via-green-600/60 to-[#F5C400]/80 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#0B3D2E]">
            Investment Options
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {investments.map((inv, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0B3D2E] mb-2">
                {inv.name}
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Crops:</strong> {inv.crops}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>ROI:</strong> {inv.roi}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Duration:</strong> {inv.duration}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Risk:</strong> {inv.risk}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Min/Max Amount:</strong> {inv.minAmount} -{" "}
                {inv.maxAmount}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Returns:</strong> {inv.returns}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Impact:</strong> {inv.impact}
              </p>
              <button className="bg-[#0B3D2E] text-white px-4 py-2 rounded hover:bg-[#F5C400] hover:text-[#0B3D2E] transition">
                Invest
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InvestmentModal;
