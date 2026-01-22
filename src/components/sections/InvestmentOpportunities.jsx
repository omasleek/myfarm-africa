import React from "react";
import { motion } from "framer-motion";


const InvestmentOpportunities = () => {
  const opportunities = [
    {
      title: 'Maize Farm Investment',
      description: 'Invest in high-yield maize farming with sustainable practices.',
      roi: '15%',
      duration: '12 months',
      impact: 'Feeds 500 families',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=250&fit=crop&crop=center',
    },
    {
      title: 'Rice Plantation',
      description: 'Support rice cultivation in fertile lands for steady returns.',
      roi: '18%',
      duration: '10 months',
      impact: 'Employs 200 locals',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=250&fit=crop&crop=center',
    },
    {
      title: 'Vegetable Greenhouse',
      description: 'Modern greenhouse tech for year-round vegetable production.',
      roi: '20%',
      duration: '8 months',
      impact: 'Reduces food imports by 30%',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop&crop=center',
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
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={opp.image}
                  alt={opp.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold mb-1">{opp.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{opp.description}</p>
                <div className="mb-4 space-y-1">
                  <p className="text-[#F5C400] font-bold">ROI: {opp.roi}</p>
                  <p className="text-gray-600 text-sm">Duration: {opp.duration}</p>
                  <p className="text-gray-600 text-sm">Impact: {opp.impact}</p>
                </div>
                <button className="w-full bg-[#0B3D2E] text-white px-6 py-3 rounded hover:bg-[#F5C400] hover:text-[#0B3D2E] transition font-semibold">
                  Invest Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
