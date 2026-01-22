import React from "react";
import { motion } from "framer-motion";

const Impact = () => {
  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-r from-[#0B3D2E] to-green-600 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Impact & Sustainability
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Nourishing Communities
            </h3>
            <p className="mb-4">
              Our investments ensure food security for thousands, promoting
              sustainable agriculture that benefits both investors and local
              communities.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Reduced food imports by 25%</li>
              <li>Created 1000+ jobs</li>
              <li>Improved soil health with organic practices</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Sustainable Growth</h3>
            <p>
              We're committed to eco-friendly farming methods that protect the
              environment while delivering consistent returns.
            </p>
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span>Carbon Footprint Reduction</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div
                  className="bg-[#F5C400] h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
