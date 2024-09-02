"use client";
import Sidebar from "@/components/adminSidebar/adminsidebar";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const [articleData, setArticleData] = useState<any[]>([]);
  const [editData, setEditData] = useState<any>(null);
  const [newData, setNewData] = useState<any>({
    author: "",
    title: "",
    publishedIn: "",
    pageNo: "",
    date: "",
    level: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/article`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const fetchedData = await response.json();
        setArticleData(fetchedData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (item: any) => {
    setEditData(item);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/article/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        setArticleData(articleData.filter((item) => item._id !== id));
        alert("Article record deleted successfully!");
      } else {
        console.error("Error deleting article record.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSave = async () => {
    if (!editData) return;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/article/${editData._id}`, {
        method: "PUT",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        const updatedArticleData = articleData.map((item) =>
          item._id === editData._id ? editData : item
        );
        setArticleData(updatedArticleData);
        setEditData(null);
        alert("Article information updated successfully!");
      } else {
        console.error("Error updating article information.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/article`, {
        method: "POST",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const result = await response.json();
        setArticleData([...articleData, result]);
        setNewData({ author: "", title: "", publishedIn: "", pageNo: "", date: "", level: "" });
        alert("Article record added successfully!");
        location.reload();
      } else {
        console.error("Error adding article record.");
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
          <h1 className="text-3xl font-bold">Manage Article Records</h1>
          </div>
          <div className="container flex about-text flex-col gap-6">
            {/* Add New Record Form */}
            <div className="border-t about-text pt-4 mt-4">
              <h2 className="text-2xl font-bold">Add New Article Record</h2>
              <input
                type="text"
                name="author"
                value={newData.author}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Author"
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
                name="publishedIn"
                value={newData.publishedIn}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Published In"
              />
              <input
                type="text"
                name="pageNo"
                value={newData.pageNo}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Page No"
              />
              <input
                type="text"
                name="date"
                value={newData.date}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Date"
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
              {articleData.map((item) => (
                <div key={item._id} className="border-b pb-4 mb-4">
                  <h2 className="text-2xl">
                    {item.author} - {item.title}
                  </h2>
                  <p className="text-lg mt-1">
                    {item.publishedIn}, {item.pageNo}, {item.date}, {item.level}
                  </p>
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
                <h2 className="text-2xl font-bold">Edit Article Record</h2>
                <input
                  type="text"
                  name="author"
                  value={editData.author}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Author"
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
                  name="publishedIn"
                  value={editData.publishedIn}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Published In"
                />
                <input
                  type="text"
                  name="pageNo"
                  value={editData.pageNo}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Page No"
                />
                <input
                  type="text"
                  name="date"
                  value={editData.date}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Date"
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
