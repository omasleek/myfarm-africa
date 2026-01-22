import React from "react";
import { motion } from "framer-motion";


const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-[#0B3D2E] to-green-600 text-white">
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
            <h3 className="text-2xl font-semibold mb-4">Nourishing Communities</h3>
            <p className="mb-6">Our investments ensure food security for thousands, promoting sustainable agriculture that benefits both investors and local communities.</p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F5C400] mb-2">1,000+</div>
                <div className="text-sm">Jobs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F5C400] mb-2">25%</div>
                <div className="text-sm">Food Import Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F5C400] mb-2">500+</div>
                <div className="text-sm">Farmers Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F5C400] mb-2">40%</div>
                <div className="text-sm">Carbon Reduction</div>
              </div>
            </div>

            <ul className="list-disc list-inside space-y-2">
              <li>Organic farming practices</li>
              <li>Water conservation techniques</li>
              <li>Community education programs</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=500&h=400&fit=crop&crop=center"
              alt="African farmers working in sustainable agriculture"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/50 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-lg font-semibold">Sustainable Agriculture in Action</h4>
              <p className="text-sm opacity-90">Empowering farmers, feeding communities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
