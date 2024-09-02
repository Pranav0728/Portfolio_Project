"use client";
import Sidebar from "@/components/adminSidebar/adminsidebar";
import { useEffect, useState } from "react";

export default function ResearchPage() {
  const [researchData, setResearchData] = useState<any[]>([]);
  const [editData, setEditData] = useState<any>(null);
  const [newData, setNewData] = useState<any>({
    authors: "",
    title: "",
    journal: "",
    volume: "",
    monthYear: "",
    referred: "",
    issn: "",
    level: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/research`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const fetchedData = await response.json();
        setResearchData(fetchedData);
      } catch (error) {
        console.error("Error fetching research data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (item: any) => {
    setEditData(item);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/research/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        setResearchData(researchData.filter((item) => item._id !== id));
        alert("Research record deleted successfully!");
      } else {
        console.error("Error deleting research record.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSave = async () => {
    if (!editData) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/research/${editData._id}`, {
        method: "PUT",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        const updatedResearchData = researchData.map((item) =>
          item._id === editData._id ? editData : item
        );
        setResearchData(updatedResearchData);
        setEditData(null);
        alert("Research information updated successfully!");
      } else {
        console.error("Error updating research information.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/research`, {
        method: "POST",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const result = await response.json();
        setResearchData([...researchData, result]);
        setNewData({
          authors: "",
          title: "",
          journal: "",
          volume: "",
          monthYear: "",
          referred: "",
          issn: "",
          level: "",
        });
        alert("Research record added successfully!");
        location.reload();
      } else {
        console.error("Error adding research record.");
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
        <section className="min-h-screen about-content p-10">
          <div className="about-text">
          <h1 className="text-3xl font-bold">Manage Research Records</h1>
          </div>
          <div className="container flex about-text flex-col gap-6">
            {/* Add New Record Form */}
            <div className="border-t pt-4 mt-4">
              <h2 className="text-2xl font-bold">Add New Research Record</h2>
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
                name="title"
                value={newData.title}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Title"
              />
              <input
                type="text"
                name="journal"
                value={newData.journal}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Journal"
              />
              <input
                type="text"
                name="volume"
                value={newData.volume}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Volume"
              />
              <input
                type="text"
                name="monthYear"
                value={newData.monthYear}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Month/Year"
              />
              <input
                type="text"
                name="referred"
                value={newData.referred}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Referred"
              />
              <input
                type="text"
                name="issn"
                value={newData.issn}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="ISSN"
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
              {researchData.map((item) => (
                <div key={item._id} className="border-b pb-4 mb-4">
                  <h2 className="text-2xl">
                    {item.title} - {item.authors}
                  </h2>
                  <p className="text-lg mt-1">{item.journal}</p>
                  <p className="text-lg mt-1">{item.volume}, {item.monthYear}</p>
                  <p className="text-lg mt-1">Referred: {item.referred}</p>
                  <p className="text-lg mt-1">ISSN: {item.issn}</p>
                  <p className="text-lg mt-1">Level: {item.level}</p>
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
                <h2 className="text-2xl font-bold">Edit Research Record</h2>
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
                  name="title"
                  value={editData.title}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="journal"
                  value={editData.journal}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Journal"
                />
                <input
                  type="text"
                  name="volume"
                  value={editData.volume}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Volume"
                />
                <input
                  type="text"
                  name="monthYear"
                  value={editData.monthYear}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Month/Year"
                />
                <input
                  type="text"
                  name="referred"
                  value={editData.referred}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Referred"
                />
                <input
                  type="text"
                  name="issn"
                  value={editData.issn}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="ISSN"
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
                  className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
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
