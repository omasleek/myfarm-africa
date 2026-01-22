import React from "react";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const stories = [
    {
      title: "Maize Farm Transformation",
      before: "Low yield, manual farming, inconsistent income",
      after: "300% yield increase, mechanized farming, stable profits",
      roi: "25%",
      impact: "Supported 50 families",
    },
    {
      title: "Livestock Investment Success",
      before: "Small-scale operations, disease risks, limited market",
      after: "Expanded herd, health programs, export markets",
      roi: "30%",
      impact: "Created 100 jobs",
    },
    {
      title: "Greenhouse Innovation",
      before: "Seasonal crops, water scarcity, low efficiency",
      after: "Year-round production, water recycling, high efficiency",
      roi: "35%",
      impact: "Reduced food imports by 40%",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#0B3D2E] mb-12"
        >
          Success Stories
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-[#0B3D2E] mb-4">
                {story.title}
              </h3>
              <div className="mb-4">
                <h4 className="font-semibold text-red-600">Before:</h4>
                <p className="text-gray-600">{story.before}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-green-600">After:</h4>
                <p className="text-gray-600">{story.after}</p>
              </div>
              <div className="mb-4">
                <p className="text-[#F5C400] font-bold">ROI: {story.roi}</p>
                <p className="text-gray-600">Impact: {story.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
