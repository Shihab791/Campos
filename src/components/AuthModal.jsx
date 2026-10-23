'use client';

import { useState } from 'react';

export default function AuthModal({ isOpen, onClose }) {
  // 'login' or 'signup'
  const [mode, setMode] = useState('login');

  // Form Field States
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    nidCard: '',
    password: '',
    confirmPassword: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    // Auth action logic ekhane hobe
    console.log(`${mode.toUpperCase()} Submitted:`, formData);
    alert(`${mode === 'login' ? 'Logged in' : 'Signed up'} successfully!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-lg bg-[#121619] p-6 md:p-8 text-white border border-white/10 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl p-1"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold uppercase tracking-wider font-sans mb-6 text-center">
          {mode === 'login' ? 'Login to Campos' : 'Create an Account'}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-sans text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full bg-white/5 border border-white/20 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Signup Specific Fields */}
          {mode === 'signup' && (
            <>
              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
                />
              </div>

              {/* NID Card Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans text-gray-400 mb-1">
                  NID Card Number
                </label>
                <input
                  type="text"
                  name="nidCard"
                  required
                  value={formData.nidCard}
                  onChange={handleChange}
                  placeholder="Enter your NID number"
                  className="w-full bg-white/5 border border-white/20 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
                />
              </div>
            </>
          )}

          {/* Password */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-sans text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full bg-white/5 border border-white/20 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Confirm Password (Signup only) */}
          {mode === 'signup' && (
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans text-gray-400 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full bg-white/5 border border-white/20 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-[#121619] font-bold py-3 uppercase tracking-wider rounded text-sm hover:bg-gray-200 transition mt-2 font-sans"
          >
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Switcher Between Login & Signup */}
        <div className="mt-6 text-center text-sm text-gray-400 border-t border-white/10 pt-4">
          {mode === 'login' ? (
            <p>
              Don&apos;t have an account?{' '}
              <button
                onClick={() => setMode('signup')}
                className="text-white underline font-semibold hover:text-gray-300 ml-1"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-white underline font-semibold hover:text-gray-300 ml-1"
              >
                Login
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}