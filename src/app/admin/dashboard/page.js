'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('All');

  // Sample data matching reservations
  const [reservations, setReservations] = useState([
    {
      id: 1,
      guestName: 'Farhana Ahmed',
      phone: '01711293844',
      date: 'Today, 2:00 PM',
      shift: 'Afternoon Shift',
      party: '4 Guests',
      seating: 'Sourdough Counter',
      notes: 'High chair needed for child',
      status: 'Pending',
    },
    {
      id: 2,
      guestName: 'Nafis Hossain',
      phone: '01678129382',
      date: 'Today, 2:30 PM',
      shift: 'Afternoon Shift',
      party: '2 Guests',
      seating: 'Cozy Nook',
      notes: 'Quiet table preferred, laptop use',
      status: 'Pending',
    },
    {
      id: 3,
      guestName: 'Tanvir Rahman',
      phone: '01889804917',
      date: 'Today, 1:15 PM',
      shift: 'Table T1',
      party: '2 Guests',
      seating: 'Window View',
      notes: 'French bread dessert pre-ordered',
      status: 'Accepted',
    },
    {
      id: 4,
      guestName: 'David Khan',
      phone: '01923049182',
      date: 'Today, 1:40 PM',
      shift: 'Table T4',
      party: '3 Guests',
      seating: 'Outdoor Garden Patio',
      notes: 'Celebrating anniversary',
      status: 'Accepted',
    },
    {
      id: 5,
      guestName: 'Anika Tabassum',
      phone: '01733492817',
      date: 'Today, 11:30 AM',
      shift: 'Table T3',
      party: '5 Guests',
      seating: 'Family Booth',
      notes: 'Family brunch, 5 seeds bread order',
      status: 'Accepted',
    },
    {
      id: 6,
      guestName: 'Zubair Islam',
      phone: '01552391824',
      date: 'Today, 12:00 PM',
      shift: 'Afternoon Shift',
      party: '2 Guests',
      seating: 'Outdoor Patio',
      notes: 'Fully booked outdoor capacity',
      status: 'Rejected',
    },
  ]);

  // Handle Status Change
  const handleStatusChange = (id, newStatus) => {
    setReservations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleDelete = (id) => {
    setReservations((prev) => prev.filter((item) => item.id !== id));
  };

  // Filter Logic
  const filteredReservations = reservations.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Pending Requests') return item.status === 'Pending';
    if (activeTab === 'Accepted') return item.status === 'Accepted';
    if (activeTab === 'Rejected') return item.status === 'Rejected';
    return true;
  });

  // Count Pills
  const counts = {
    all: reservations.length,
    pending: reservations.filter((r) => r.status === 'Pending').length,
    accepted: reservations.filter((r) => r.status === 'Accepted').length,
    rejected: reservations.filter((r) => r.status === 'Rejected').length,
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FBF9F5] text-[#281E18] font-sans">
      
      {/* 1. Left Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-[#F2EFE9] border-r border-[#E6E1D8] flex flex-col justify-between p-6">
        <div>
          {/* Logo Brand Header */}
          <div className="mb-10">
            <h1 className="text-xl font-bold uppercase tracking-wider font-sans text-[#281E18]">
              CAMPOS
            </h1>
            <p className="text-[10px] font-semibold text-[#8C827A] uppercase tracking-widest">
              BAKERY & CAFE
            </p>
          </div>

          {/* Management Menu */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-[#A39990] uppercase tracking-widest px-3 mb-2">
              MANAGEMENT
            </p>

            <Link
              href="/admin/dashboard"
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center gap-3 transition bg-[#281E18] text-white shadow-sm"
            >
              <span>🪑</span> Table Reservations
            </Link>

            <Link
              href="/admin/menu-management"
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center gap-3 transition text-[#5E544C] hover:bg-[#E8E3DA]"
            >
              <span>📋</span> Menu Management
            </Link>
          </div>
        </div>

        {/* Sidebar Footer User Info */}
        <div className="pt-6 border-t border-[#E6E1D8] space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#5E544C]">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Mirpur-2 Branch
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#DCD6CC] flex items-center justify-center font-bold text-xs text-[#281E18]">
                SA
              </div>
              <div>
                <p className="text-xs font-bold text-[#281E18]">Staff Admin</p>
              </div>
            </div>
            <Link href="/" title="Logout" className="text-gray-400 hover:text-[#281E18] text-sm">
              ↳
            </Link>
          </div>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-x-auto">
        
        {/* Top Location & Date Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A39A90]">
            <span className="text-[#A0522D]">STORE FRONT DESK</span>
            <span>•</span>
            <span className="text-[#5E544C]">Dhaka Mirpur-2</span>
          </div>
          <div className="bg-[#EFECE6] border border-[#E0DACF] px-3 py-1.5 rounded-md text-xs font-semibold text-[#5E544C] flex items-center gap-2">
            <span>📅</span> Today, Oct 24, 2026
          </div>
        </div>

        {/* Title & Total Count Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#281E18]">
              Table Reservations
            </h2>
            <p className="text-xs text-[#8C827A] mt-1 font-serif">
              Review, accept, and manage incoming guest reservations.
            </p>
          </div>
          <div className="bg-[#EFECE6] px-4 py-2 rounded-lg text-xs font-bold text-[#281E18]">
            Total: {counts.all} Bookings
          </div>
        </div>

        {/* Status Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
              activeTab === 'All'
                ? 'bg-[#281E18] text-white'
                : 'bg-[#EFECE6] text-[#5E544C] hover:bg-[#E4DFD5]'
            }`}
          >
            All ({counts.all})
          </button>
          <button
            onClick={() => setActiveTab('Pending Requests')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
              activeTab === 'Pending Requests'
                ? 'bg-[#281E18] text-white'
                : 'bg-[#EFECE6] text-[#5E544C] hover:bg-[#E4DFD5]'
            }`}
          >
            Pending Requests ({counts.pending})
          </button>
          <button
            onClick={() => setActiveTab('Accepted')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
              activeTab === 'Accepted'
                ? 'bg-[#281E18] text-white'
                : 'bg-[#EFECE6] text-[#5E544C] hover:bg-[#E4DFD5]'
            }`}
          >
            Accepted ({counts.accepted})
          </button>
          <button
            onClick={() => setActiveTab('Rejected')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
              activeTab === 'Rejected'
                ? 'bg-[#281E18] text-white'
                : 'bg-[#EFECE6] text-[#5E544C] hover:bg-[#E4DFD5]'
            }`}
          >
            Rejected ({counts.rejected})
          </button>
        </div>

        {/* 3. Table Layout */}
        <div className="bg-white border border-[#E8E3DA] rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-[#F9F7F2] border-b border-[#E8E3DA] text-[11px] font-bold uppercase tracking-wider text-[#9C9288]">
                <th className="py-4 px-6">GUEST & PHONE</th>
                <th className="py-4 px-4">DATE & TIME</th>
                <th className="py-4 px-4">PARTY</th>
                <th className="py-4 px-4">SEATING AREA / NOTES</th>
                <th className="py-4 px-4">STATUS</th>
                <th className="py-4 px-6 text-right">ACTIONS</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#F2EFEA] text-xs">
              {filteredReservations.map((row) => (
                <tr key={row.id} className="hover:bg-[#FDFCFB] transition">
                  
                  {/* Guest Name & Phone */}
                  <td className="py-4 px-6">
                    <p className="font-bold text-[#281E18]">{row.guestName}</p>
                    <p className="text-[11px] text-[#8C827A] mt-0.5">{row.phone}</p>
                  </td>

                  {/* Date & Time / Shift */}
                  <td className="py-4 px-4">
                    <p className="font-bold text-[#281E18]">{row.date}</p>
                    <p className="text-[11px] text-[#8C827A] mt-0.5">{row.shift}</p>
                  </td>

                  {/* Party Guests */}
                  <td className="py-4 px-4">
                    <span className="bg-[#F5F2EC] px-2.5 py-1 rounded text-[11px] font-semibold text-[#5E544C] inline-flex items-center gap-1">
                      👥 {row.party}
                    </span>
                  </td>

                  {/* Seating Area / Notes */}
                  <td className="py-4 px-4 max-w-xs">
                    <p className="font-semibold text-[#281E18]">{row.seating}</p>
                    <p className="text-[11px] text-[#8C827A] truncate mt-0.5">{row.notes}</p>
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    {row.status === 'Pending' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FDF0E6] text-[#C25E14]">
                        • Pending
                      </span>
                    )}
                    {row.status === 'Accepted' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-[#E8F5E9] text-[#2E7D32]">
                        • Accepted
                      </span>
                    )}
                    {row.status === 'Rejected' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FFEBEE] text-[#C62828]">
                        • Rejected
                      </span>
                    )}
                  </td>

                  {/* Action Buttons */}
                  <td className="py-4 px-6 text-right space-x-2">
                    {row.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(row.id, 'Accepted')}
                          className="bg-[#2E6B48] hover:bg-[#235337] text-white px-3 py-1.5 rounded text-[11px] font-bold transition shadow-sm"
                        >
                          ✓ Accept
                        </button>
                        <button
                          onClick={() => handleStatusChange(row.id, 'Rejected')}
                          className="bg-[#F5EFE9] hover:bg-[#E8E0D7] text-[#8C4A3A] px-3 py-1.5 rounded text-[11px] font-bold transition"
                        >
                          🗑 Delete
                        </button>
                      </>
                    )}

                    {row.status === 'Accepted' && (
                      <div className="inline-flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                          ✓ Confirmed
                        </span>
                        <button
                          onClick={() => handleDelete(row.id)}
                          className="text-gray-400 hover:text-red-600 transition text-sm"
                          title="Delete"
                        >
                          🗑
                        </button>
                      </div>
                    )}

                    {row.status === 'Rejected' && (
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="text-gray-400 hover:text-red-600 transition text-sm"
                        title="Delete"
                      >
                        🗑
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </main>
    </div>
  );
}