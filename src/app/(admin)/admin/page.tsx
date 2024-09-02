"use client"
import Sidebar from '@/components/adminSidebar/adminsidebar'
import { Lobster, Courgette } from 'next/font/google';
import { useEffect, useState } from 'react';

// Font Families
const lobster = Lobster({ subsets: ['latin'], weight: '400' });
const courgette = Courgette({ subsets: ['latin'], weight: '400', preload: false });

export default function AdminPage() {
  const [personalData, setPersonalData] = useState<any[]>([]);
  const [editData, setEditData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/personal`, {
          headers: { "Authorization": process.env.NEXT_PUBLIC_API_KEY as string }
        });
        const fetchedData = await data.json();
        setPersonalData(fetchedData);
      } catch (error) {
        console.error('Error fetching personal data:', error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (user: any) => {
    setEditData(user);
  };

  const handleSave = async () => {
    if (!editData) return;

    try {
      const response = await fetch(`api/personal`, {
        method: 'PUT',
        headers: {
          "Authorization": process.env.NEXT_PUBLIC_API_KEY as string,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        const updatedPersonalData = personalData.map(item =>
          item._id === editData._id ? editData : item
        );
        setPersonalData(updatedPersonalData);
        setEditData(null);
        alert("Personal information updated successfully!");
      } else {
        const result = await response.json();
        console.error("Error updating personal information:", result.message);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleChange = (e: any) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Sidebar />
      <section className="about section" id="about">
        <main className="min-h-screen about-content" id="admin-page">
          <section className="admin-section about-text flex flex-col justify-center items-center py-20" id="admin">
            <div className="container flex flex-col gap-10">
              {personalData.map((user) => (
                <div key={user._id} className="admin-item flex flex-col gap-5  border-b-2 pb-5">
                  <h2 className='text-3xl'>Personal Information</h2>
                  <div className="flex flex-col">
                    <p className='text-lg mt-1 border-b p-2'><span className='font-bold'>Name: </span>{user.name}</p>
                    <p className='text-lg mt-1 border-b p-2'><span className='font-bold'>SubHeader: </span>{user.subHeader}</p>
                    <p className='text-lg mt-1 border-b p-2'><span className='font-bold'>Degree: </span>{user.degree}</p>
                    <p className='text-lg mt-1 border-b p-2'><span className='font-bold'>Email: </span>{user.email}</p>
                    <p className='text-lg mt-1 border-b p-2'><span className='font-bold'>Phone: </span>{user.phone.join(', ')}</p>
                    <p className='text-lg mt-1 border-b p-2'><span className='font-bold'>Address: </span>{user.address}</p>
                    <p className='text-lg mt-1 border-b p-2'><span className='font-bold'>City: </span>{user.city}</p>
                  </div>
                  <div className="ml-auto flex gap-3">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Edit Form */}
            {editData && (
              <div className="edit-form flex flex-col gap-4 mt-10 w-full">
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-md"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="subHeader"
                  value={editData.subHeader}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-md"
                  placeholder="Sub Header"
                />
                <input
                  type="text"
                  name="degree"
                  value={editData.degree}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-md"
                  placeholder="Degree"
                />
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-md"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={editData.phone}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-md"
                  placeholder="Phone"
                />
                <input
                  type="text"
                  name="address"
                  value={editData.address}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-md"
                  placeholder="Address"
                />
                <input
                  type="text"
                  name="city"
                  value={editData.city}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded-md"
                  placeholder="City"
                />
                {/* Add other fields similarly */}
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            )}
          </section>
        </main>
      </section>
    </>
  )
}
