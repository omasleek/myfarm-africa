import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Investment",
      description:
        "Browse our curated agricultural projects and select the one that aligns with your goals.",
    },
    {
      number: "02",
      title: "Invest Securely",
      description:
        "Fund your investment through our secure platform with multiple payment options.",
    },
    {
      number: "03",
      title: "Monitor Growth",
      description:
        "Track the progress of your investment in real-time with detailed reports.",
    },
    {
      number: "04",
      title: "Harvest Returns",
      description:
        "Receive your profits as the crops grow and markets yield positive results.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0B3D2E] mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#F5C400] text-[#0B3D2E] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-[#0B3D2E] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
