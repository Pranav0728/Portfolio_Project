"use client"
import type { NextPage } from "next";

const BooksList: NextPage = () => {
  const books = [
    {
      srNo: 1,
      author: "Dr. Narayan Laxman Jadhav",
      publisher: "Dnyanjyoti Prakashan, 311/3, Sasanenagar, Hadapsar, Pune -411028",
      position: "Sole Author",
      title: "New Perspectives of Black Literature and Dalit Literature",
      year: "June 2020",
      referred: "Referred",
      isbn: "ISBN 978-81-946242-1-9",
      level: "National",
    },
    {
      srNo: 2,
      author: "Dr. Narayan Laxman Jadhav",
      publisher: "Dnyanjyoti Prakashan, 311/3, Sasanenagar, Hadapsar, Pune -411028",
      position: "Sole Author",
      title: "Dalit Negligence: A Gift of 21st Century",
      year: "June 2020",
      referred: "Referred",
      isbn: "ISBN 978-81-946242-2-6",
      level: "National",
    },
    {
      srNo: 3,
      author: "Dr. Narayan Laxman Jadhav",
      publisher: "Dnyanjyoti Prakashan, 311/3, Sasanenagar, Hadapsar, Pune -411028",
      position: "Sole Author",
      title: "The Phenomenal Women: A Comparative Analysis of Maya Angelou's & Meena Kandasamy's Poetry",
      year: "June 2020",
      referred: "Referred",
      isbn: "ISBN 978-81-946242-3-3",
      level: "National",
    },
    {
      srNo: 4,
      author: "Dr. Narayan Laxman Jadhav",
      publisher: "Dnyanjyoti Prakashan, 311/3, Sasanenagar, Hadapsar, Pune -411028",
      position: "Sole Author",
      title: "Meena Kandasamy's Whispering (Against Caste Discriminations, Patriarchy through Poems)",
      year: "June 2020",
      referred: "Referred",
      isbn: "ISBN 978-81-946242-4-0",
      level: "National",
    },
    {
      srNo: 5,
      author: "Dr. Narayan Laxman Jadhav",
      publisher: "Dnyanjyoti Prakashan, 311/3, Sasanenagar, Hadapsar, Pune -411028",
      position: "Sole Author",
      title: "BLANE (One Act Play)",
      year: "June 2020",
      referred: "Referred",
      isbn: "ISBN 978-81-946242-5-7",
      level: "National",
    },
  ];

  return (
    <main>
      <section className="books-list section" id="books-list">
        <div className="container">
          <div className="section-title padd-15">
            {/* Book List  */}
            <h2>Books List</h2>
          </div>
          <div className="books-content padd-15">
            {books.map((book) => (
              <div key={book.srNo} className="book-item">
                <h3>{book.title}</h3>
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
      </section>
    </main>
  );
};

export default BooksList;
