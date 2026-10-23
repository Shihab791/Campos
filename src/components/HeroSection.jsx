export default function HeroSection() {
  return (
    <section className="relative h-[45vh] min-h-[280px] w-full overflow-hidden bg-neutral-900 sm:h-[60vh] md:h-[75vh] lg:h-[85vh]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        {/* Add your title and button here */}
      </div>

    </section>
  );
}