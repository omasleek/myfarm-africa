import React from "react";
import { motion } from "framer-motion";

const InvestmentOpportunities = () => {
  const opportunities = [
    {
      title: "Maize Farm Investment",
      description:
        "Invest in high-yield maize farming with sustainable practices.",
      roi: "15%",
      duration: "12 months",
      impact: "Feeds 500 families",
    },
    {
      title: "Rice Plantation",
      description:
        "Support rice cultivation in fertile lands for steady returns.",
      roi: "18%",
      duration: "10 months",
      impact: "Employs 200 locals",
    },
    {
      title: "Vegetable Greenhouse",
      description:
        "Modern greenhouse tech for year-round vegetable production.",
      roi: "20%",
      duration: "8 months",
      impact: "Reduces food imports by 30%",
    },
  ];

  return (
    <section id="investments" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#0B3D2E] mb-12"
        >
          Investment Opportunities
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-[#0B3D2E] mb-4">
                {opp.title}
              </h3>
              <p className="text-gray-600 mb-4">{opp.description}</p>
              <div className="mb-4">
                <p className="text-[#F5C400] font-bold">ROI: {opp.roi}</p>
                <p className="text-gray-600">Duration: {opp.duration}</p>
                <p className="text-gray-600">Impact: {opp.impact}</p>
              </div>
              <button className="bg-[#0B3D2E] text-white px-6 py-2 rounded hover:bg-[#F5C400] hover:text-[#0B3D2E] transition">
                Invest Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
