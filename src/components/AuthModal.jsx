'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Router import kora holo

export default function AuthModal({ isOpen, onClose }) {
  const router = useRouter(); // Router hook
  
  // Mode: 'login', 'signup', or 'admin'
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

    if (mode === 'admin') {
      console.log('ADMIN LOGIN Submitted:', {
        username: formData.username,
        password: formData.password,
      });
      alert('Admin logged in successfully!');
      
      onClose(); // Modal bondho hobe
      router.push('/admin/dashboard'); // Direct Admin Dashboard page e niye jabe
      return;
    }

    // User Login / Signup Action
    console.log(`${mode.toUpperCase()} Submitted:`, formData);
    alert(`${mode === 'login' ? 'User logged in' : 'Signed up'} successfully!`);
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

        {/* Tab Navigation: User / Admin Switcher */}
        <div className="flex border-b border-white/10 mb-6">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-xs uppercase tracking-wider font-sans font-bold border-b-2 transition ${
              mode !== 'admin'
                ? 'border-white text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            User Auth
          </button>
          <button
            type="button"
            onClick={() => setMode('admin')}
            className={`flex-1 py-2 text-xs uppercase tracking-wider font-sans font-bold border-b-2 transition ${
              mode === 'admin'
                ? 'border-white text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            Admin Access
          </button>
        </div>

        {/* Modal Title */}
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider font-sans mb-6 text-center">
          {mode === 'login' && 'User Login'}
          {mode === 'signup' && 'Create Account'}
          {mode === 'admin' && 'Admin Portal Access'}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          
          {/* Username / Admin ID */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
              {mode === 'admin' ? 'Admin Username' : 'Username'}
            </label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              placeholder={mode === 'admin' ? 'Enter admin username' : 'Enter your username'}
              className="w-full bg-white/5 border border-white/20 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Signup Specific Fields */}
          {mode === 'signup' && (
            <>
              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
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
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
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
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
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
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">
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
            {mode === 'login' && 'User Login'}
            {mode === 'signup' && 'Sign Up'}
            {mode === 'admin' && 'Admin Login'}
          </button>
        </form>

        {/* Footer Link Switcher */}
        {mode !== 'admin' && (
          <div className="mt-6 text-center text-sm text-gray-400 border-t border-white/10 pt-4 font-sans">
            {mode === 'login' ? (
              <p>
                Don&apos;t have an account?{' '}
                <button
                  type="button"
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
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-white underline font-semibold hover:text-gray-300 ml-1"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}