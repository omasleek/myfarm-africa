import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#0B3D2E]/80 via-green-600/60 to-[#F5C400]/80 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#0B3D2E]">Contact Us</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0B3D2E] text-white py-2 rounded-lg hover:bg-[#F5C400] hover:text-[#0B3D2E] transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">Email: omachilda.dev@gmail.com</p>
          <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactModal;
