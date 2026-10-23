import Image from 'next/image';

export default function ContactPage() {
  const contactDetails = [
    {
      label: 'CAFE',
      value: '01889804917',
      isLink: false,
    },
    {
      label: 'PRESS',
      value: 'press@campos.com',
      isLink: true,
      href: 'mailto:press@campos.com',
    },
    {
      label: 'EMAIL',
      value: 'info@campos.com',
      isLink: true,
      href: 'mailto:info@campos.com',
    },
    {
      label: 'EVENTS',
      value: 'events@campos.com',
      isLink: true,
      href: 'mailto:events@campos.com',
    },
    {
      label: 'BOOKINGS',
      value: 'bookings@campos.com',
      isLink: true,
      href: 'mailto:bookings@campos.com',
    },
    {
      label: 'MARKETING',
      value: 'partners@campos.com',
      isLink: true,
      href: 'mailto:partners@campos.com',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#121619] py-16 md:py-24 px-8 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Contact Information */}
        <div className="space-y-10">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider font-sans">
            CONTACT US
          </h1>

          {/* Contact Details 2-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 font-serif">
            {contactDetails.map((item, index) => (
              <div key={index} className="space-y-1">
                <span className="block text-xs uppercase tracking-widest text-gray-500 font-sans">
                  {item.label}
                </span>
                {item.isLink ? (
                  <a
                    href={item.href}
                    className="text-sm md:text-base text-[#121619] hover:underline transition-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm md:text-base text-[#121619]">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Tall Vertical Image */}
        <div className="relative w-full h-[450px] sm:h-[550px] md:h-[600px] max-w-sm mx-auto md:ml-auto overflow-hidden rounded-sm">
          {/* public/contact-bread.png ba jpg nam-e image rakhben */}
          <Image
            src="/galleryinsta-3.png"
            alt="Artisan Sourdough Bread"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

      </div>
    </div>
  );
}