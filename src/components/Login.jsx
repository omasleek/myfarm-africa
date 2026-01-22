import React, { useState } from 'react';

const Login = ({ isOpen, onClose, onSwitchToSignup, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log('Login data:', formData);
      onLogin(); // Simulate login
      onClose();
    }
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
          <h2 className="text-2xl font-bold text-[#0B3D2E]">Login</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        {/* Social Login */}
        <div className="mb-6">
          <button className="w-full bg-red-600 text-white py-2 rounded-lg mb-2 hover:bg-red-700 transition">
            Login with Google
          </button>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Login with Facebook
          </button>
        </div>

        <div className="text-center text-gray-500 mb-4">or</div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3D2E] ${errors.email ? 'border-red-500' : ''}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3D2E] ${errors.password ? 'border-red-500' : ''}`}
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">Remember Me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0B3D2E] text-white py-2 rounded-lg hover:bg-[#F5C400] hover:text-[#0B3D2E] transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          <button className="text-[#0B3D2E] hover:underline">Forgot Password?</button>
        </p>
        <p className="text-center mt-2">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignup} className="text-[#0B3D2E] hover:underline">
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
