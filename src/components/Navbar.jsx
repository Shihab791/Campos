'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('access_token');
      setIsAuthenticated(!!token);

      if (token) {
        // ১. প্রথমে লোকালস্টোরেজ থেকে দ্রুত ডাটা লোড করার চেষ্টা করা
        const storedUsername = localStorage.getItem('username');
        const storedPic = localStorage.getItem('profile_picture');
        
        if (storedUsername) setUsername(storedUsername);
        if (storedPic) setProfilePic(storedPic);

        // ২. ব্যাকএন্ড থেকে লেটেস্ট প্রোফাইল ডেটা (ছবি ও ইউজারনেম) ফেচ করে সিঙ্ক রাখা
        try {
          const response = await fetch('http://127.0.0.1:8000/api/profile/', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          const data = await response.json();

          if (response.ok) {
            if (data.username) {
              setUsername(data.username);
              localStorage.setItem('username', data.username);
            }
            if (data.profile_picture) {
              setProfilePic(data.profile_picture);
              localStorage.setItem('profile_picture', data.profile_picture);
            }
          }
        } catch (err) {
          console.error('Navbar profile fetch error:', err);
        }
      } else {
        setUsername('');
        setProfilePic('');
      }
    };

    checkAuth();

    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, [isAuthOpen]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    localStorage.removeItem('profile_picture');
    setIsAuthenticated(false);
    setUsername('');
    setProfilePic('');
    alert('Logged out successfully!');
    window.location.reload();
  };

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book a table', href: '/book-a-table' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#121619]/95 text-white backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold uppercase tracking-wider sm:text-2xl font-sans"
          >
            CAMPOS.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}

            {/* Conditional Rendering: Username & Profile Picture Show korbe */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 rounded-full border border-white/30 px-3 py-1.5 transition-all duration-200 hover:border-white bg-white/5"
                >
                  {/* Profile Avatar / Blank Image */}
                  <div className="w-7 h-7 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                    <img
                      src={
                        profilePic ||
                        'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                      }
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold capitalize text-sm pr-1">
                    {username || 'Profile'}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:text-red-300 transition text-xs uppercase font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="rounded border border-white/30 px-4 py-2 transition-all duration-200 hover:bg-white hover:text-black"
              >
                Login
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded border border-white/20 text-2xl transition hover:bg-white/10 md:hidden"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-white/10 bg-[#121619] px-4 pb-5 pt-3 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 hover:text-gray-300"
                >
                  {link.name}
                </Link>
              ))}

              {isAuthenticated ? (
                <>
                  <Link
                    href="/profile"
                    onClick={closeMenu}
                    className="mt-2 flex items-center space-x-3 rounded border border-white/30 px-4 py-3 text-sm transition-all hover:bg-white/10"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                      <img
                        src={
                          profilePic ||
                          'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                        }
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold capitalize">
                      {username || 'Profile'}
                    </span>
                  </Link>
                  <button
                    onClick={() => {
                      closeMenu();
                      handleLogout();
                    }}
                    className="mt-1 rounded bg-red-500/20 border border-red-500 px-4 py-2 text-center text-xs uppercase tracking-wider text-red-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    closeMenu();
                    setIsAuthOpen(true);
                  }}
                  className="mt-2 rounded border border-white/30 px-4 py-3 text-center text-sm transition-all hover:bg-white hover:text-black"
                >
                  Login
                </button>
              )}
            </div>
          </nav>
        )}
      </header>

      {/* Auth Modal Component */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}