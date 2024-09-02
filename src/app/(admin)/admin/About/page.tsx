"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/adminSidebar/adminsidebar";
export default function AboutPage() {
  const [aboutData, setAboutData] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: "",
    memberships: "",
    languages: "",
    interests: "",
    description: "",
  });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/about`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const data = await response.json();
        if (data && data.length > 0) {
          setAboutData(data[0]);
          setFormData({
            title: data[0].title || "",
            memberships: data[0].memberships.join(", ") || "",
            languages: data[0].languages.join(", ") || "",
            interests: data[0].interests.join(", ") || "",
            description: data[0].description || "",
          });
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };
    fetchAboutData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, memberships, languages, interests, description } = formData;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/about`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: JSON.stringify({
          title,
          memberships: memberships.split(",").map((item: string) => item.trim()),
          languages: languages.split(",").map((item: string) => item.trim()),
          interests: interests.split(",").map((item: string) => item.trim()),
          description,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setAboutData({ title, memberships: memberships.split(",").map((item: string) => item.trim()), languages: languages.split(",").map((item: string) => item.trim()), interests: interests.split(",").map((item: string) => item.trim()), description });
      } else {
        alert("Failed to update about section");
      }
    } catch (error) {
      console.error("Error updating about :", error);
    }
  };

  return (
    <>
      <Sidebar />
      <section className="about section" id="about">
      <div className="p-6 w-full about-content">
        <div className="about-text">
        <h1 className="text-2xl font-semibold mb-4">About Section</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 about-text">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="memberships" className="block text-sm font-medium text-gray-700">
              Memberships (comma-separated)
            </label>
            <input
              type="text"
              id="memberships"
              name="memberships"
              value={formData.memberships}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="languages" className="block text-sm font-medium text-gray-700">
              Languages (comma-separated)
            </label>
            <input
              type="text"
              id="languages"
              name="languages"
              value={formData.languages}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
              Interests (comma-separated)
            </label>
            <input
              type="text"
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Update About Section
          </button>
        </form>
      </div>
      </section>
      </>
  );
}
