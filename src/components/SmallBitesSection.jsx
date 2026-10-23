import Link from 'next/link';

export default function SmallBitesSection() {
  const menuItems = [
    {
      name: 'BAGELS',
      price: '1.00$',
      description: 'Choose from a selection of fillings, from cream cheese to smoked salmon',
    },
    {
      name: 'BANANA BREAD',
      price: '8.00$',
      description: 'An all-time favorite for both kids and grown-ups, now available in regular and sharing sizes',
    },
    {
      name: 'BREAD ROLLS',
      price: '2.00$',
      description: 'Our handmade bread rolls come in all shapes and sizes',
    },
    {
      name: '5 SEEDS BREAD',
      price: '8.00$',
      description: 'Our nutritious 5 seed bread goes through a 12-hour cold raise and is baked in our stone ovens',
    },
    {
      name: 'FRENCH BREAD',
      price: '4.00$',
      description: 'Feeling indulgent? Our rich French toast is perfect for special occasions',
    },
    {
      name: 'ORGANIC TOAST',
      price: '3.00$',
      description: 'Healthy and delicious, our organic toast is served with locally sourced butter and condiments',
    },
  ];

  return (
    <section className="w-full bg-white text-[#121619] py-20 px-8 md:px-20 font-serif">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-12 font-sans">
          SMALL BITES
        </h2>

        {/* Menu Items Grid - 2 Columns on Medium/Large screens, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-medium tracking-wider uppercase font-sans">
                  {item.name}
                </h3>
                <span className="text-base font-medium">{item.price}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* View the menu Button */}
        <div>
          <Link
            href="/menu"
            className="inline-block bg-[#121619] text-white px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors duration-200 font-sans"
          >
            View the menu
          </Link>
        </div>
      </div>
    </section>
  );
}