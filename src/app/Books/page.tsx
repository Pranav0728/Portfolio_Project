"use client";
import Sidebar from "@/components/sidebar/sidebar";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Book {
  _id: string;
  imagePath: string;
  title: string;
  author: string;
  publisher: string;
  position: string;
  year: string;
  referred: string;
  isbn: string;
  level: string;
}

interface Article {
  _id: string;
  title: string;
  author: string;
  publishedIn: string;
  pageNo: string;
  date: string;
  level: string;
}

const BooksList: NextPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`api/book`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const bookData: Book[] = await response.json();
        setBooks(bookData);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`api/article`, {
          headers: { Authorization: process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const articleData: Article[] = await response.json();
        setArticles(articleData);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <main>
      <Sidebar />
      <section className="books-list aboutnew section" id="about">
        <div className="container">
          <div className="section-title padd-15">
            <h2>Books List</h2>
          </div>
          <div className="row">
            <div className="aboutnew-content timelinenew padd-15 flex flex-col gap-5">
              {books.map((book) => (
                <div key={book._id} className="timelinenew aboutnew-text p-5 flex md:flex-row flex-col gap-1">
                  <div className="md:m-10 border-4 border-black rounded-md">
                    <Image
                      src={book.imagePath}
                      width={300}
                      height={300}
                      alt="Book cover"
                    />
                  </div>
                  <div className=" md:m-10">
                  <h2 className="rounded-lg text-white font-bold text-[1.5rem] w-full">{book.title}</h2>
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
                </div>
              ))}
            </div>
          </div>
          <div className="section-title padd-15">
            <h2>Articles List</h2>
          </div>
          <div className="row">
            <div className="aboutnew-content timelinenew padd-15 flex flex-col gap-5">
              {articles.map((article) => (
                <div key={article._id} className="timelinenew aboutnew-text p-5 flex flex-col gap-1">
                  <h2 className="rounded-lg text-white font-bold text-[1.5rem] w-full">{article.title}</h2>
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

export default BooksList;
