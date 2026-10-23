'use client';

import { useState } from 'react';

export default function BookTablePage() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    nidNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Table Booking Request:', formData);
    alert('Thank you! Your table booking request has been submitted.');
    setFormData({
      name: '',
      lastName: '',
      email: '',
      nidNumber: '',
      message: '',
    });
  };

  return (
    <div className="w-full min-h-screen bg-[#EFECE6] text-[#121619]">
      {/* Top Section: Form Container */}
      <section className="py-16 md:py-24 px-8 md:px-20 font-serif">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-md space-y-12">
            
            {/* Header Title & Subtitle */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider font-sans">
                BOOK A TABLE
              </h1>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-serif">
                Whatever the occasion, we&apos;re certain that you can make it special at CAMPOS.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-serif text-gray-800">
                  Name*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#E5E2DC] border border-[#D3CFCA] rounded-none px-4 py-3.5 text-xs md:text-sm text-[#121619] focus:outline-none focus:ring-1 focus:ring-black placeholder-gray-500 font-serif shadow-inner"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-serif text-gray-800">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className="w-full bg-[#E5E2DC] border border-[#D3CFCA] rounded-none px-4 py-3.5 text-xs md:text-sm text-[#121619] focus:outline-none focus:ring-1 focus:ring-black placeholder-gray-500 font-serif shadow-inner"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-serif text-gray-800">
                  Your email*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full bg-[#E5E2DC] border border-[#D3CFCA] rounded-none px-4 py-3.5 text-xs md:text-sm text-[#121619] focus:outline-none focus:ring-1 focus:ring-black placeholder-gray-500 font-serif shadow-inner"
                />
              </div>

              {/* NID Number */}
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-serif text-gray-800">
                  NID Number*
                </label>
                <input
                  type="text"
                  name="nidNumber"
                  required
                  value={formData.nidNumber}
                  onChange={handleChange}
                  placeholder="Enter your NID number"
                  className="w-full bg-[#E5E2DC] border border-[#D3CFCA] rounded-none px-4 py-3.5 text-xs md:text-sm text-[#121619] focus:outline-none focus:ring-1 focus:ring-black placeholder-gray-500 font-serif shadow-inner"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-xs md:text-sm font-serif text-gray-800">
                  Message*
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full bg-[#E5E2DC] border border-[#D3CFCA] rounded-none px-4 py-3.5 text-xs md:text-sm text-[#121619] focus:outline-none focus:ring-1 focus:ring-black placeholder-gray-500 font-serif resize-none shadow-inner"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#121619] text-white px-8 py-3.5 text-xs tracking-wider uppercase font-sans hover:bg-neutral-800 transition-colors"
                >
                  Submit
                </button>
              </div>

            </form>

          </div>
        </div>
      </section>

      {/* Bottom Section: Chews Family Banner (White Background) */}
      <section className="w-full bg-white text-[#121619] py-24 md:py-32 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide leading-snug md:leading-tight font-sans text-[#121619]">
              BE PART OF THE CHEWS FAMILY: WE&apos;VE CELEBRATED OUR CUSTOMERS&apos; BIRTHDAYS, ENGAGEMENT PARTIES AND HEN DOS AT HERE CAMPOS.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}