import Image from 'next/image';

export default function WeCareSection() {
  return (
    <section className="w-full bg-[#EFECE6] text-[#121619] py-20 px-8 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Image Container */}
        <div className="relative w-full aspect-square md:aspect-[4/5] max-w-lg mx-auto overflow-hidden">
          {/* public folder-e bread/baked items er chobi rakhben (e.g. /we-care-bread.jpg) */}
          <Image
            src="/we-care-bread.png" 
            alt="Freshly baked artisan bread"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6 md:pl-6 max-w-xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider font-sans">
            WE CARE
          </h2>

          {/* Text Paragraphs */}
          <div className="space-y-6 text-sm md:text-base font-serif text-gray-800 leading-relaxed">
            <p>
              Our philosophy is to be part of the neighborhood and give back to our community.
            </p>
            <p>
              We publish monthly sourdough recipe booklets both online and in-store, organize workshops and evening courses, and even rent out our shop for local artists and musicians.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}