import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-[#0B3D2E] via-green-600 to-[#F5C400] text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Invest in Africa's Agricultural Future
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          Grow your wealth while nourishing communities. Sustainable farming
          investments with high returns.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-x-4"
        >
          <button className="bg-[#F5C400] text-[#0B3D2E] px-8 py-4 rounded-lg font-bold hover:bg-white transition">
            Invest Now
          </button>
          <button className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#0B3D2E] transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
