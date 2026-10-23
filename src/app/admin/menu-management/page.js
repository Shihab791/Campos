'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MenuManagementPage() {
  const [activeTab, setActiveTab] = useState('All Items');
  const [searchQuery, setSearchQuery] = useState('');

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Bagels',
      category: 'Small Bites',
      price: '$1.00',
      description: 'Freshly baked golden toasted sesame bagels. Fillings: cream...',
      status: 'Available',
      inStock: true,
      image: '/menu-hero.jpg',
    },
    {
      id: 2,
      name: 'Banana Bread',
      category: 'Sweet Bakes',
      price: '$8.00',
      description: 'Artisanal glazed banana loaf sliced with caramelized walnuts and brow...',
      status: 'Available',
      inStock: true,
      image: '/menu-hero.jpg',
    },
    {
      id: 3,
      name: '5 Seeds Bread',
      category: 'Artisan Breads',
      price: '$8.00',
      description: 'Rustic 5-seeds sourdough loaf with blistered crust, pumpkin, flax &...',
      status: 'Available',
      inStock: true,
      image: '/menu-hero.jpg',
    },
  ]);

  const toggleStock = (id) => {
    setMenuItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStock = !item.inStock;
          return {
            ...item,
            inStock: nextStock,
            status: nextStock ? 'Available' : 'Out of Stock',
          };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this menu item?')) {
      setMenuItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeTab === 'All Items' || item.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAF8F5] text-[#281E18] font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#F5F2EC] border-r border-[#E6E1D8] flex flex-col justify-between p-6 shrink-0">
        <div>
          <div className="mb-10">
            <h1 className="text-xl font-bold uppercase tracking-wider text-[#281E18]">
              CAMPOS
            </h1>
            <p className="text-[10px] font-semibold text-[#8C827A] uppercase tracking-widest">
              BAKERY & CAFE
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-bold text-[#A39990] uppercase tracking-widest px-3 mb-2">
              OPERATIONS PORTAL
            </p>
            
            <Link
              href="/admin/menu-management"
              className="w-full text-left px-4 py-3 rounded-lg text-xs font-bold flex items-center gap-3 bg-[#281E18] text-white shadow-sm transition"
            >
              <span>⚔️</span> Menu Management
            </Link>

            <Link
              href="/admin/dashboard"
              className="w-full text-left px-4 py-3 rounded-lg text-xs font-bold flex items-center gap-3 text-[#5E544C] hover:bg-[#E8E3DA] transition"
            >
              <span>🪑</span> Table Reservations
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-x-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#281E18]">
            Menu Management
          </h2>
          <p className="text-xs text-[#8C827A] mt-1">
            Upload new menu items, update prices, and control item availability.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl overflow-hidden shadow-sm p-4 space-y-4"
            >
              <h3 className="font-bold text-base text-[#281E18]">{item.name}</h3>
              <p className="text-xs text-[#7A7067]">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-base">{item.price}</span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 text-xs font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}