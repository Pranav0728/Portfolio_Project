"use client";
import Sidebar from "@/components/adminSidebar/adminsidebar";
import { useEffect, useState } from "react";

export default function ConferencesPage() {
  const [conferenceData, setConferenceData] = useState<any[]>([]);
  const [editData, setEditData] = useState<any>(null);
  const [newData, setNewData] = useState<any>({
    authors: "",
    subject: "",
    nameOfInstitute: "",
    fromDate: "",
    toDate: "",
    level: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/papersPresented`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const fetchedData = await response.json();
        setConferenceData(fetchedData);
      } catch (error) {
        console.error("Error fetching conference data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (item: any) => {
    setEditData(item);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/papersPresented/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        setConferenceData(conferenceData.filter((item) => item._id !== id));
        alert("Conference record deleted successfully!");
      } else {
        console.error("Error deleting conference record.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSave = async () => {
    if (!editData) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/papersPresented/${editData._id}`, {
        method: "PUT",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        const updatedConferenceData = conferenceData.map((item) =>
          item._id === editData._id ? editData : item
        );
        setConferenceData(updatedConferenceData);
        setEditData(null);
        alert("Conference information updated successfully!");
      } else {
        console.error("Error updating conference information.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/papersPresented`, {
        method: "POST",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const result = await response.json();
        setConferenceData([...conferenceData, result]);
        setNewData({
          authors: "",
          subject: "",
          nameOfInstitute: "",
          fromDate: "",
          toDate: "",
          level: "",
        });
        alert("Conference record added successfully!");
        location.reload();
      } else {
        console.error("Error adding conference record.");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (editData) {
      setEditData({ ...editData, [name]: value });
    } else {
      setNewData({ ...newData, [name]: value });
    }
  };

  return (
    <>
      <Sidebar />
      <section className="about section" id="about">
        <section className="min-h-screen p-10">
          <h1 className="text-3xl font-bold">Manage Conference Records</h1>
          <div className="container flex flex-col gap-6">
            {/* Add New Record Form */}
            <div className="border-t pt-4 mt-4">
              <h2 className="text-2xl font-bold">Add New Conference Record</h2>
              <input
                type="text"
                name="authors"
                value={newData.authors}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Authors"
              />
              <input
                type="text"
                name="subject"
                value={newData.subject}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Subject"
              />
              <input
                type="text"
                name="nameOfInstitute"
                value={newData.nameOfInstitute}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Name of Institute"
              />
              <input
                type="date"
                name="fromDate"
                value={newData.fromDate}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
              />
              <input
                type="date"
                name="toDate"
                value={newData.toDate}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
              />
              <input
                type="text"
                name="level"
                value={newData.level}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Level"
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
            <div>
              {conferenceData.map((item) => (
                <div key={item._id} className="border-b pb-4 mb-4">
                  <h2 className="text-2xl">{item.authors}</h2>
                  <p className="text-lg mt-1">{item.subject}</p>
                  <p className="text-lg mt-1">{item.nameOfInstitute}</p>
                  <p className="text-lg mt-1">
                    {item.fromDate} to {item.toDate}
                  </p>
                  <p className="text-lg mt-1">{item.level}</p>
                  <div className="mt-2 flex gap-4">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Edit Form */}
            {editData && (
              <div className="border-t pt-4 mt-4">
                <h2 className="text-2xl font-bold">Edit Conference Record</h2>
                <input
                  type="text"
                  name="authors"
                  value={editData.authors}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Authors"
                />
                <input
                  type="text"
                  name="subject"
                  value={editData.subject}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Subject"
                />
                <input
                  type="text"
                  name="nameOfInstitute"
                  value={editData.nameOfInstitute}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Name of Institute"
                />
                <input
                  type="date"
                  name="fromDate"
                  value={editData.fromDate}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                />
                <input
                  type="date"
                  name="toDate"
                  value={editData.toDate}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                />
                <input
                  type="text"
                  name="level"
                  value={editData.level}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Level"
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
}
