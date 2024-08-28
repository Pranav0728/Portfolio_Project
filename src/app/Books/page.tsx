"use client";
import Sidebar from "@/components/sidebar/sidebar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const BooksList: NextPage = () => {
  const [book, setBook] = useState<any[]>([]);
  const [articleData, setArticleData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
    const fetchData = async () => {
      try {
        const data = await fetch(`api/book`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const bookData = await data.json();
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`api/article`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const articleData = await data.json();
        setArticleData(articleData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };
    fetchData();
  }, []);

  }, []);

  return (
    <main>
      <section
        className="research-publications section"
        id="research-publications"
      >
        <div className="container">
          <div className="section-title padd-15">
            {/* Book List */}
            <h2>Books List</h2>
          </div>
          <div className="row">
            <div className="about-content timeline padd-15 flex flex-col gap-5">
              {book.map((book) => (
                <div key={book._id} className="timeline p-5 flex flex-col gap-1">
                  <h3 className="rounded-lg text-white font-bold text-[1.5rem] w-full">{book.title}</h3>
                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p>
                    <strong>Publisher:</strong> {book.publisher}
                  </p>
                  <p>
                    <strong>Position:</strong> {book.position}
                  </p>
                  <p>
                    <strong>Year of Publication:</strong> {book.year}
                  </p>
                  <p>
                    <strong>Referred:</strong> {book.referred}
                  </p>
                  <p>
                    <strong>ISBN/ISSN No.:</strong> {book.isbn}
                  </p>
                  <p>
                    <strong>Level:</strong> {book.level}
                  </p>
                  <br />
                </div>
              ))}
            </div>
          </div>

          <div className="section-title padd-15">
            {/* Article List */}
            <h2>Articles List</h2>
          </div>
          <div className="row">
            <div className="about-content timeline padd-15 flex flex-col gap-5">
              {articleData.map((article) => (
                <div key={article._id} className="timeline p-5 flex flex-col gap-1">
                  <h3 className="rounded-lg text-white font-bold text-[1.5rem] w-full">{article.title}</h3>
                  <p>
                    <strong>Author:</strong> {article.author}
                  </p>
                  <p>
                    <strong>Published In:</strong> {article.publishedIn}
                  </p>
                  <p>
                    <strong>Page No.:</strong> {article.pageNo}
                  </p>
                  <p>
                    <strong>Date:</strong> {article.date}
                  </p>
                  <p>
                    <strong>Level:</strong> {article.level}
                  </p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchPublications;