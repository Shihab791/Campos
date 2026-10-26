'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  // Fetch Profile Data
  const fetchProfile = async () => {
    const token = localStorage.getItem('access_token');

    if (!token) {
      alert('Please login first!');
      router.push('/');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/profile/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setProfile(data);
      } else {
        alert('Session expired or unauthorized. Please login again.');
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        localStorage.removeItem('profile_picture');
        router.push('/');
      }
    } catch (err) {
      console.error('Profile fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [router]);

  // Handle Profile Picture Upload (POST Method & Storage Sync)
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profile_picture', file); // ব্যাকএন্ড ফিল্ড নেম অনুযায়ী

    const token = localStorage.getItem('access_token');
    setUploading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/profile-picture/', {
        method: 'POST', // ব্যাকএন্ড যেহেতু @api_view(["POST"]) তাই POST ব্যবহার করা হলো
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('Profile picture updated successfully!');
        
        // Navbar-এ ইনস্ট্যান্ট দেখানোর জন্য লোকালস্টোরেজে ছবির URL সেভ করা হলো
        if (result.data && result.data.profile_picture) {
          localStorage.setItem('profile_picture', result.data.profile_picture);
        }

        fetchProfile(); // ডেটা রিফ্রেশ করার জন্য
        window.dispatchEvent(new Event('storage')); // Navbar স্টেট আপডেট ট্রিগার করতে
      } else {
        alert(result.message || 'Failed to upload profile picture.');
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('Something went wrong during upload.');
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return <div className="text-center text-white mt-20 font-sans">Loading profile...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-[#121619] text-white rounded-lg border border-white/10 shadow-xl font-sans">
      <h1 className="text-2xl font-bold mb-6 uppercase tracking-wider text-center border-b border-white/10 pb-4">
        User Profile
      </h1>

      {profile ? (
        <div className="space-y-6">
          
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/30 bg-white/5">
              <img
                src={
                  profile.profile_picture ||
                  'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                }
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Upload Button */}
            <label className="cursor-pointer text-xs uppercase tracking-wider bg-white/10 hover:bg-white hover:text-black border border-white/20 px-3 py-1.5 rounded transition font-semibold">
              {uploading ? 'Uploading...' : 'Change Picture'}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
          </div>

          {/* User Details */}
          <div className="space-y-4 border-t border-white/10 pt-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 block">Username</span>
              <p className="text-lg font-semibold">{profile.username}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 block">Email</span>
              <p className="text-lg font-semibold">{profile.email}</p>
            </div>
          </div>

        </div>
      ) : (
        <p className="text-center text-red-400">Failed to load profile data.</p>
      )}
    </div>
  );
}