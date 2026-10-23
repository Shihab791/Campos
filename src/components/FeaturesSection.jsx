import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Recipes',
      description:
        'Sourdough can be intimidating for a novice baker, but it doesn\'t have to be.\nEvery month, we combine some of our favorite sourdough recipes together.',
    },
    {
      title: 'Hand Crafted',
      description:
        'Want to learn more about baking and the secrets of bread making?\nJoin our quarterly Hand Crafted courses in our store.',
    },
    {
      title: 'Community',
      description:
        'Looking for a venue to host an event?\nCAMPOS welcomes creative souls from all walks of life.',
    },
  ];

  return (
    <section className="w-full bg-white text-[#121619] py-20 px-8 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Features List */}
        <div className="space-y-12 max-w-lg">
          {features.map((item, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold font-sans tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm md:text-base font-serif text-gray-700 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Vertical Tall Image */}
        <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-sm">
          {/* public/cafe-interior.jpg নামে কফি শপ বা রেস্তোরাঁর একটি লম্বা ছবি রাখবেন */}
          <Image
            src="/cafe-interior.png"
            alt="CAMPOS interior atmosphere"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}