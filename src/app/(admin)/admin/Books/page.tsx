"use client";
import Sidebar from "@/components/adminSidebar/adminsidebar";
import { useEffect, useState } from "react";

export default function BookPage() {
  const [bookData, setBookData] = useState<any[]>([]);
  const [editData, setEditData] = useState<any>(null);
  const [newData, setNewData] = useState<any>({
    author: "",
    publisher: "",
    position: "",
    title: "",
    year: "",
    referred: "",
    isbn: "",
    level: "",
  });
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/book`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const fetchedData = await response.json();
        setBookData(fetchedData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (item: any) => {
    setEditData(item);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/book/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });

      if (response.ok) {
        setBookData(bookData.filter((item) => item._id !== id));
        alert("Book record deleted successfully!");
      } else {
        console.error("Error deleting book record.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleSave = async () => {
    if (!editData) return;

    try {
      const formData = new FormData();
      Object.keys(editData).forEach((key) => {
        formData.append(key, editData[key]);
      });

      if (file) {
        formData.append("file", file);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/book/${editData._id}`, {
        method: "PUT",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: formData,
      });

      if (response.ok) {
        const updatedBookData = bookData.map((item) =>
          item._id === editData._id ? editData : item
        );
        setBookData(updatedBookData);
        setEditData(null);
        alert("Book information updated successfully!");
      } else {
        console.error("Error updating book information.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      Object.keys(newData).forEach((key) => {
        formData.append(key, newData[key]);
      });

      if (file) {
        formData.append("file", file);
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/book`, {
        method: "POST",
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setBookData([...bookData, result]);
        setNewData({
          author: "",
          publisher: "",
          position: "",
          title: "",
          year: "",
          referred: "",
          isbn: "",
          level: "",
        });
        setFile(null);
        alert("Book record added successfully!");
      } else {
        console.error("Error adding book record.");
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

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <>
      <Sidebar />
      <section className="about section" id="about">
        <section className="min-h-screen p-10">
          <h1 className="text-3xl font-bold">Manage Book Records</h1>
          <div className="container flex flex-col gap-6">
            {/* Add New Record Form */}
            <div className="border-t pt-4 mt-4">
              <h2 className="text-2xl font-bold">Add New Book Record</h2>
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
                name="publisher"
                value={newData.publisher}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Publisher"
              />
              <input
                type="text"
                name="position"
                value={newData.position}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Position"
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
                name="year"
                value={newData.year}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Year"
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
                name="isbn"
                value={newData.isbn}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="ISBN"
              />
              <input
                type="text"
                name="level"
                value={newData.level}
                onChange={handleChange}
                className="border px-3 py-2 rounded mt-2 w-full"
                placeholder="Level"
              />
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                accept="image/*"
                className="border px-3 py-2 rounded mt-2 w-full"
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>

            <div>
              {bookData.map((item) => (
                <div key={item._id} className="border-b pb-4 mb-4">
                  <h2 className="text-2xl">
                    {item.author} - {item.title}
                  </h2>
                  <p className="text-lg mt-1">{item.publisher}</p>
                  <p className="text-lg mt-1">Year: {item.year}</p>
                  <p className="text-lg mt-1">ISBN: {item.isbn}</p>
                  <div className="mt-2 flex gap-4">
                    {/* <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button> */}
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
                <h2 className="text-2xl font-bold">Edit Book Record</h2>
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
                  name="publisher"
                  value={editData.publisher}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Publisher"
                />
                <input
                  type="text"
                  name="position"
                  value={editData.position}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Position"
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
                  name="year"
                  value={editData.year}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="Year"
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
                  name="isbn"
                  value={editData.isbn}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded mt-2 w-full"
                  placeholder="ISBN"
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
