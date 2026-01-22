import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#F5C400] text-[#0B3D2E]">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Grow Your Future?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Join thousands of investors building a sustainable tomorrow. Start
          investing today.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#0B3D2E] text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#0B3D2E] transition"
        >
          Start Investing Now
        </motion.button>
      </div>
    </section>
  );
};

export default CallToAction;
