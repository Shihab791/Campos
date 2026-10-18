import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EFECE6] text-[#121619] py-16 px-8 md:px-16 font-serif">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed">
        
        {/* Left Column */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider uppercase font-sans">
            <Link href="/">CAMPOS.</Link>
          </div>

          {/* Address 1 */}
          <div className="text-gray-800">
            <p>Duip Abashik, road-3,House-10</p>
            <p>Dhaka Mirpur-2</p>
          </div>

          {/* Schedule */}
          <div className="space-y-4 pt-2">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-700 font-sans">MONDAY - FRIDAY</p>
              <p className="text-xs tracking-widest text-gray-700 font-sans">6:00 AM TO 9:00 PM</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-700 font-sans">SATURDAY - SUNDAY</p>
              <p className="text-xs tracking-widest text-gray-700 font-sans">10:00 AM TO 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 md:pt-14 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Office Address */}
            <div className="text-gray-800">
              <p>Office: Mirpur Love road</p>
              <p>City, Dhaka</p>
            </div>

            {/* Contact */}
            <div className="text-gray-800">
              <p>Contact : 01889804917</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-6">
            {/* Facebook */}
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* TripAdvisor */}
            <a href="#" className="hover:opacity-75 transition-opacity" aria-label="TripAdvisor">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}