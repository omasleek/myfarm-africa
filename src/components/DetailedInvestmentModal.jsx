import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DetailedInvestmentModal = ({
  isOpen,
  onClose,
  investment,
  onProceedToCheckout,
}) => {
  if (!isOpen || !investment) return null;

  // Sample ROI data for 12 months
  const roiData = [
    { month: "1", roi: 0 },
    { month: "2", roi: 2 },
    { month: "3", roi: 5 },
    { month: "4", roi: 8 },
    { month: "5", roi: 12 },
    { month: "6", roi: 15 },
    { month: "7", roi: 18 },
    { month: "8", roi: 20 },
    { month: "9", roi: 22 },
    { month: "10", roi: 24 },
    { month: "11", roi: 25 },
    { month: "12", roi: 26 },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0B3D2E]/80 via-green-600/60 to-[#F5C400]/80 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#0B3D2E]">
            {investment.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Investment Overview</h3>
            <p className="text-gray-600 mb-4">
              Invest in sustainable {investment.name.toLowerCase()} for
              long-term growth and community impact.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Location:</strong> Various regions in Nigeria
              </p>
              <p>
                <strong>Type:</strong>{" "}
                {investment.name.includes("Crop")
                  ? "Crop Farming"
                  : investment.name.includes("Livestock")
                    ? "Livestock"
                    : "Specialized Agriculture"}
              </p>
              <p>
                <strong>Description:</strong> High-yield investment with expert
                management and transparent reporting.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">ROI Growth Graph</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="roi"
                  stroke="#0B3D2E"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-[#0B3D2E]">Minimum Investment</h4>
            <p className="text-2xl font-bold">₦50,000</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-[#0B3D2E]">Expected ROI</h4>
            <p className="text-2xl font-bold text-green-600">
              {investment.roi}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-[#0B3D2E]">Duration</h4>
            <p className="text-2xl font-bold">{investment.duration}</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Investment Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">What You Get:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Quarterly profit distributions</li>
                <li>Detailed performance reports</li>
                <li>Expert farm management</li>
                <li>Risk mitigation strategies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Risk Level:</h4>
              <p className="text-gray-600">
                Low to Medium - Diversified portfolio with insurance coverage
              </p>
              <h4 className="font-semibold mb-2 mt-4">Impact:</h4>
              <p className="text-gray-600">
                Creates jobs, improves food security, supports sustainable
                agriculture
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onProceedToCheckout(investment)}
            className="bg-[#0B3D2E] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#F5C400] hover:text-[#0B3D2E] transition text-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailedInvestmentModal;
