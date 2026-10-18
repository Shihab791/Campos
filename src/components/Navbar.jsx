import Link from 'next/link';

export default function Navbar() {
  return (
    // 'sticky top-0 z-50' যোগ করা হয়েছে যেন স্ক্রল করলেও উপরেই থাকে
    <header className="sticky top-0 z-50 w-full bg-[#121619]/95 backdrop-blur-sm text-white px-8 py-5 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side / Brand Logo */}
        <div className="text-xl font-bold tracking-wider uppercase">
          <Link href="/">CAMPOS.</Link>
        </div>

        {/* Right Side Navigation Links & Login Button */}
        <nav className="flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/menu" className="hover:text-gray-300 transition-colors">
            Menu
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Link href="/book-a-table" className="hover:text-gray-300 transition-colors">
            Book a table
          </Link>
          <Link
            href="/login"
            className="border border-white/30 px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-200"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}