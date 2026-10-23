import Image from 'next/image';
import BookTableSection from '../../components/BookTableSection';

export default function MenuPage() {
  // Snacks Items
  const snacksItems = [
    {
      name: 'BAGELS',
      price: '1.00$',
      description: 'Soft and chewy, choose from our daily fillings ranging from cream cheese to smoked salmon',
    },
    {
      name: 'BANANA BREAD',
      price: '4.00$',
      description: 'A brunch table classic, served with wildflower honey or maple syrup',
    },
    {
      name: 'WHITE BREAD WITH OLIVE OIL',
      price: '2.00$',
      description: 'Our signature French bread served with sustainably sourced Mediterranean olive oil',
    },
    {
      name: '5 SEED BREAD',
      price: '8.00$',
      description: 'Sourdough bread with rye flour, oats, and sunflower, poppy and sesame seeds',
    },
    {
      name: 'FRENCH TOAST',
      price: '2.00$',
      description: 'Sweet French toast made with free-range eggs and served with a selection of local marmalades',
    },
    {
      name: 'ORGANIC TOAST FOR TWO',
      price: '8.00$',
      description: "The breakfast table isn't complete with a generous serving of toast, served with an array of toppings",
    },
  ];

  // Meals Items
  const mealsItems = [
    {
      name: 'EGGS AND TOAST',
      price: '4.00$',
      description: 'Toasted bread of your choice, served with fried, boiled or poached eggs',
    },
    {
      name: 'BREAD BASKET',
      price: '10.00$',
      description: 'A selection of our freshly baked bread, served with cold cuts and continental cheeses',
    },
    {
      name: 'EGGS AND BACON',
      price: '6.00$',
      description: 'Toasted bread with eggs and a generous serving of locally sourced back bacon',
    },
    {
      name: 'BRUNCH FOR TWO',
      price: '14.00$',
      description: 'A loaf of our sourdough bread, served with eggs, bacon and locally sourced sausages, with a side salad',
    },
    {
      name: 'AVOCADO TOAST',
      price: '6.00$',
      description: 'Toasted 5 seed bread with avocado and a drizzle of extra virgin olive oil',
    },
    {
      name: 'CELEBRATION BRUNCH',
      price: '20.00$',
      description: 'For up to 3 people, our celebration brunch includes the breadbasket of choice, eggs, bacon, and sausages, as well as a glass of sparkling wine',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#121619]">
      {/* 1. Hero / Banner Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] bg-neutral-900 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/menu-hero.png"
            alt="Menu dough background"
            fill
            className="object-cover object-center opacity-85"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>

      {/* 2. Menu Content Container */}
      <div className="max-w-6xl mx-auto pt-20 pb-16 px-8 md:px-20 font-serif space-y-16">
        
        {/* Snacks Section */}
        <section>
          <h2 className="text-xl font-bold font-sans tracking-wide uppercase mb-12">
            Snacks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {snacksItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-1">
                  <h3 className="text-sm md:text-base font-medium tracking-wider uppercase font-sans">
                    {item.name}
                  </h3>
                  <span className="text-sm md:text-base font-medium font-serif">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Meals Section */}
        <section className="pt-8">
          <h2 className="text-xl font-bold font-sans tracking-wide uppercase mb-12">
            Meals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {mealsItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-1">
                  <h3 className="text-sm md:text-base font-medium tracking-wider uppercase font-sans">
                    {item.name}
                  </h3>
                  <span className="text-sm md:text-base font-medium font-serif">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 3. Reused BookTableSection Component */}
      <BookTableSection />
    </div>
  );
}