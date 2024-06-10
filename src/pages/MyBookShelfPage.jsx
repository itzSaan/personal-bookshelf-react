import { useState, useEffect } from "react";
import SingleBook from "../components/SingleBook";

const MyBookShelfPage = () => {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("myBooks"));
    if (storedBooks) {
      setMyBooks(storedBooks);
    }
  }, []);

  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h2>My BookShelf</h2>
      </header>
      <section className="books-section">
        {myBooks.length === 0 ? (
          <h2>No books in bookshelf.</h2>
        ) : (
          myBooks.map((book, id) => (
            <SingleBook
              key={id}
              book={book}
            />
          ))
        )}
      </section>
    </>
  );
};

export default MyBookShelfPage;
