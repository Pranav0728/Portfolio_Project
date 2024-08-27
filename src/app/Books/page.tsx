"use client"
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const BooksList: NextPage = () => {

  const [book , setBook] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const data = await fetch(`api/book`,
          {
            headers: {"Authorization": process.env.NEXT_PUBLIC_API_KEY as string}
          }
        );
        const bookData = await data.json();
        setBook(bookData);
      } catch (error) {
        console.error('Error fetching research data:', error);
      }
    }
    fetchData();
  },[])
  return (
    <main>
      <section className="books-list about section" id="about">
        <div className="container">
          <div className="section-title padd-15">
            {/* Book List  */}
            <h2>Books List</h2>
          </div>
          <div className="row"> 
          <div className="about-content timeline  padd-15 flex flex-col gap-5">
            {book.map((book) => (
              <div key={book.srNo} className=" timeline  p-5 flex flex-col gap-1" >
                <h3 className=" rounded-lg text-white font-bold text-[1.5rem] w-full">{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Publisher:</strong> {book.publisher}</p>
                <p><strong>Position:</strong> {book.position}</p>
                <p><strong>Year of Publication:</strong> {book.year}</p>
                <p><strong>Referred:</strong> {book.referred}</p>
                <p><strong>ISBN/ISSN No.:</strong> {book.isbn}</p>
                <p><strong>Level:</strong> {book.level}</p>
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
