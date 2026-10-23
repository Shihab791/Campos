import Link from 'next/link';

export default function BookTableSection() {
  return (
    <section className="w-full bg-[#121619] text-white py-24 px-8 md:px-20 font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 max-w-md">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider font-sans">
            BOOK A TABLE
          </h2>

          {/* Subtitle Text */}
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Breakfast, lunch, or weekend brunch, we&apos;re always open for reservations.
          </p>

          {/* Book a table Button */}
          <div className="pt-2">
            <Link
              href="/book-a-table"
              className="inline-block bg-white text-[#121619] px-8 py-4 text-xs font-medium tracking-wider hover:bg-gray-200 transition-colors duration-200 font-sans"
            >
              Book a table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}