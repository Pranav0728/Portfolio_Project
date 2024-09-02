"use client";
import Sidebar from "@/components/adminSidebar/adminsidebar";
import { useEffect, useState } from "react";

export default function CommitteePage() {
  const [committeeData, setCommitteeData] = useState<any[]>([]);
  const [editData, setEditData] = useState<any>(null);
  const [newData, setNewData] = useState<any>({
    name: "",
    details: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/committee`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const fetchedData = await response.json();
        setCommitteeData(fetchedData);
      } catch (error) {
        console.error("Error fetching committee data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (item: any) => {
    setEditData(item);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/committee/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        setCommitteeData(committeeData.filter((item) => item._id !== id));
        alert("Committee record deleted successfully!");
      } else {
        console.error("Error deleting committee record.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSave = async () => {
    if (!editData) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/committee/${editData._id}`, {
        method: "PUT",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        const updatedCommitteeData = committeeData.map((item) =>
          item._id === editData._id ? editData : item
        );
        setCommitteeData(updatedCommitteeData);
        setEditData(null);
        alert("Committee information updated successfully!");
      } else {
        console.error("Error updating committee information.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/committee`, {
        method: "POST",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const result = await response.json();
        setCommitteeData([...committeeData, result]);
        setNewData({ name: "", details: "" });
        alert("Committee record added successfully!");
        location.reload();
      } else {
        console.error("Error adding committee record.");
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
        <section className="min-h-screen p-10 about-content">
        <div className="about-text">
          <h1 className="text-3xl font-bold">Manage Committee Records</h1>
          </div>
          <div className="container flex about-text flex-col gap-6">
            {/* Add New Record Form */}
            <div className="border-t pt-4 mt-4">
              <h2 className="text-2xl font-bold">Add New Committee Record</h2>
              <input
                type="text"
                name="name"
                value={newData.name}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Name"
              />
              <textarea
                name="details"
                value={newData.details}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Details"
                rows={4}
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
            <div>
              {committeeData.map((item) => (
                <div key={item._id} className="border-b pb-4 mb-4">
                  <h2 className="text-2xl">{item.name}</h2>
                  <p className="text-lg mt-1">{item.details}</p>
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
                <h2 className="text-2xl font-bold">Edit Committee Record</h2>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Name"
                />
                <textarea
                  name="details"
                  value={editData.details}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Details"
                  rows={4}
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
