import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const WhyUs = () => {
  const stats = [
    { number: "5,000+", label: "Trusted Investors" },
    { number: "₦500M+", label: "Invested" },
    { number: "50+", label: "Successful Projects" },
    { number: "20%", label: "Average ROI" },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Investor",
      location: "Lagos, Nigeria",
      text: "MYFARM AFRICA has transformed my portfolio with sustainable investments.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Farmer",
      location: "Kano, Nigeria",
      text: "Thanks to the investments, our community thrives with better yields.",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      role: "Investor",
      location: "Abuja, Nigeria",
      text: "Reliable returns and transparent processes. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Impact Investor",
      location: "Port Harcourt, Nigeria",
      text: "Investing here feels good – great ROI and real community impact.",
      rating: 5,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#0B3D2E] mb-12"
        >
          Why MYFARM AFRICA
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#F5C400] mb-2">
                {stat.number}
              </div>
              <p className="text-[#0B3D2E]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <span key={i} className="text-[#F5C400] text-2xl">
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-600 mb-4 text-lg">
            "{testimonials[currentTestimonial].text}"
          </p>
          <p className="font-semibold text-[#0B3D2E]">
            {testimonials[currentTestimonial].name}
          </p>
          <p className="text-gray-500">
            {testimonials[currentTestimonial].role}
          </p>
          <p className="text-gray-400 text-sm">
            {testimonials[currentTestimonial].location}
          </p>
        </motion.div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full ${index === currentTestimonial ? "bg-[#0B3D2E]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
