"use client";
import Sidebar from "@/components/adminSidebar/adminsidebar";
import { useEffect, useState } from "react";

export default function EducationPage() {
  const [educationData, setEducationData] = useState<any[]>([]);
  const [editData, setEditData] = useState<any>(null);
  const [newData, setNewData] = useState<any>({
    year: "",
    title: "",
    details: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/education`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const fetchedData = await response.json();
        setEducationData(fetchedData);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (item: any) => {
    setEditData(item);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/education/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        setEducationData(educationData.filter((item) => item._id !== id));
        alert("Education record deleted successfully!");
      } else {
        console.error("Error deleting education record.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSave = async () => {
    if (!editData) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/education/${editData._id}`, {
        method: "PUT",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        const updatedEducationData = educationData.map((item) =>
          item._id === editData._id ? editData : item
        );
        setEducationData(updatedEducationData);
        setEditData(null);
        alert("Education information updated successfully!");
      } else {
        console.error("Error updating education information.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/education`, {
        method: "POST",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const result = await response.json();
        setEducationData([...educationData, result]);
        setNewData({ year: "", title: "", details: "" });
        alert("Education record added successfully!");
        location.reload()
      } else {
        console.error("Error adding education record.");
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
      <section className="about   section" id="about">
      <section className="min-h-screen p-10 about-content" >
        <div className="about-text">
        <h2 className="text-3xl font-bold ">Manage Education Records</h2>
        </div>
        <div className="container flex flex-col gap-6 about-content">
          
          {/* Add New Record Form */}
          <div className="border-t pt-4 mt-4 about-text" >
            <h2 className="text-2xl font-bold">Add New Education Record</h2>
            <input
              type="text"
              name="year"
              value={newData.year}
              onChange={handleChange}
              className="border px-3 py-2 rounded mt-2 w-full"
              placeholder="Year"
            />
            <input
              type="text"
              name="title"
              value={newData.title}
              onChange={handleChange}
              className="border px-3 py-2 rounded mt-2 w-full"
              placeholder="Title"
            />
            <input
              type="text"
              name="details"
              value={newData.details}
              onChange={handleChange}
              className="border px-3 py-2 rounded mt-2 w-full"
              placeholder="Details"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <div>
          {educationData.map((item) => (
            <div key={item._id} className="border-b about-text pb-4 mb-4">
              <h2 className="text-2xl">
                {item.year} - {item.title}
              </h2>
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
              <h2 className="text-2xl font-bold">Edit Education Record</h2>
              <input
                type="text"
                name="year"
                value={editData.year}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Year"
              />
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Title"
              />
              <input
                type="text"
                name="details"
                value={editData.details}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Details"
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
