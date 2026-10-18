export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] bg-neutral-900 overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url('/hero-bg.png')` }} // public folder-e image-ti rakhte paren ba placeholder use korte paren
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
  
    </section>
  );
}