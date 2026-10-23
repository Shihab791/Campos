import Image from 'next/image';

export default function InstagramGallerySection() {
  const galleryImages = [
    { src: '/galleryinsta-1.png', alt: 'Powdered sugar cake' },
    { src: '/galleryinsta-2.png', alt: 'Fresh sliced sourdough bread' },
    { src: '/galleryinsta-3.png', alt: 'Artisan round bread loaf' },
    { src: '/galleryinsta-4.png', alt: 'Cream cake dessert' },
    { src: '/galleryinsta-5.png', alt: 'Fresh pastry bakes' },
    { src: '/galleryinsta-6.png', alt: 'Crispy sourdough crust' },
  ];

  return (
    <section className="w-full bg-[#EFECE6] text-[#121619] py-20 px-8 md:px-20">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Image Grid: Mobile-এ 1/2 কলাম, Tablet/Desktop-এ 3 কলাম */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="relative w-full aspect-square overflow-hidden bg-gray-200 group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Instagram Link Text */}
        <div className="pt-2">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold tracking-wide uppercase font-sans hover:opacity-75 transition-opacity"
          >
            Follow us on Instagram @CAMPOS
          </a>
        </div>

      </div>
    </section>
  );
}