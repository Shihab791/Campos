'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthModal({ isOpen, onClose }) {
  const router = useRouter();

  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form Field States
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // 1. Signup API Integration
    if (mode === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        setErrorMsg('Passwords do not match!');
        return;
      }

      setLoading(true);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/signup/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirmPassword,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Signed up successfully! Please login.');
          
          // Reset form fields & switch to login mode
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
          setMode('login');
        } else {
          const errorDetail =
            data.message ||
            data.detail ||
            (typeof data === 'object' ? JSON.stringify(data) : 'Signup failed!');
          setErrorMsg(errorDetail);
        }
      } catch (err) {
        console.error('Signup Error:', err);
        setErrorMsg('Something went wrong. Please check your backend API!');
      } finally {
        setLoading(false);
      }
      return;
    }

    // 2. User Login API Integration
    if (mode === 'login') {
      setLoading(true);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('User logged in successfully!');
          
          // টোকেন এবং ইউজারনেম লোকালস্টোরেজে সেভ করা হচ্ছে
          if (data.access) {
            localStorage.setItem('access_token', data.access);
          }
          if (data.refresh) {
            localStorage.setItem('refresh_token', data.refresh);
          }
          
          // Navbar-এ দেখানোর জন্য ইউজারনেম সেভ করা হলো
          localStorage.setItem('username', formData.username);

          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          });
          onClose();
          window.location.reload(); // পেজ রিলোড করলে Navbar আপডেট হয়ে যাবে
        } else {
          const errorDetail =
            data.message ||
            data.detail ||
            (typeof data === 'object' ? JSON.stringify(data) : 'Login failed!');
          setErrorMsg(errorDetail);
        }
      } catch (err) {
        console.error('Login Error:', err);
        setErrorMsg('Something went wrong. Please check your backend API!');
      } finally {
        setLoading(false);
      }
      return;
    }

    // 3. Admin Login Action
    if (mode === 'admin') {
      console.log('ADMIN LOGIN Submitted:', {
        username: formData.username,
        password: formData.password,
      });
      alert('Admin logged in successfully!');
      onClose();
      router.push('/admin/dashboard');
      return;
    }
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
            onClick={() => {
              setMode('login');
              setErrorMsg('');
            }}
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
            onClick={() => {
              setMode('admin');
              setErrorMsg('');
            }}
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

        {/* Error Alert Display */}
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-300 text-xs rounded font-sans text-center">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          
          {/* Username */}
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

          {/* Signup Specific Fields (Email) */}
          {mode === 'signup' && (
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
            disabled={loading}
            className="w-full bg-white text-[#121619] font-bold py-3 uppercase tracking-wider rounded text-sm hover:bg-gray-200 transition mt-2 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading
              ? 'Processing...'
              : mode === 'login'
              ? 'User Login'
              : mode === 'signup'
              ? 'Sign Up'
              : 'Admin Login'}
          </button>
        </form>

        {/* Footer Link Switcher */}
        {mode !== 'admin' && (
          <div className="mt-6 text-center text-sm text-gray-400 border-t border-white/10 pt-4 font-sans">
            {mode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setErrorMsg('');
                  }}
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
                  onClick={() => {
                    setMode('login');
                    setErrorMsg('');
                  }}
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