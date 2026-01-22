import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[85vh] md:h-[90vh] overflow-hidden"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D2E] via-green-700 to-[#F5C400]">
        {/* Simulated Landscape Layers */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0B3D2E] to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-green-800 to-transparent opacity-60"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-green-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#F5C400] rounded-full opacity-10 animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Invest in Africa's
              <span className="block text-[#F5C400]">Agricultural Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
              Empowering African agriculture through smart, sustainable
              investments. Grow your wealth while nourishing communities with
              high-yield returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F5C400] text-[#0B3D2E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                Start Investing
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#0B3D2E] hover:scale-105 transition-all duration-300">
                Learn How It Works
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 right-20 text-6xl opacity-20">
        🌴
      </div>
      <div className="absolute bottom-32 right-32 text-4xl opacity-15">
        🌾
      </div>
    </section>
  );
};

export default Hero;
