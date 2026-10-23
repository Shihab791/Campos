'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false); // Auth Modal State

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

            {/* Login Button Open Modal */}
            <button
              onClick={() => setIsAuthOpen(true)}
              className="rounded border border-white/30 px-4 py-2 transition-all duration-200 hover:bg-white hover:text-black"
            >
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded border border-white/20 text-2xl transition hover:bg-white/10 md:hidden"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-white/10 bg-[#121619] px-4 pb-5 pt-3 md:hidden"
          >
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

              <button
                onClick={() => {
                  closeMenu();
                  setIsAuthOpen(true);
                }}
                className="mt-2 rounded border border-white/30 px-4 py-3 text-center text-sm transition-all hover:bg-white hover:text-black"
              >
                Login
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Auth Modal Component */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}