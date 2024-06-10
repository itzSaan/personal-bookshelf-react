import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SingleBook from "../components/SingleBook";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myBooks = JSON.parse(localStorage.getItem("myBooks"));
    if (myBooks) {
      setMyBooks(myBooks);
      // console.log(myBooks);
    }
  }, []);

  const handleClick = (id) => {
    const bookToAdd = books[id];
    setMyBooks((prevMyBooks) => {
      const updatedMyBooks = [...prevMyBooks, bookToAdd];
      localStorage.setItem("myBooks", JSON.stringify(updatedMyBooks));
      return updatedMyBooks;
    });
  }; 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (input !== "") {
          setLoading(true);
          const res = await fetch(
            `https://openlibrary.org/search.json?q=${input.toLowerCase()}&limit=10&page=1`
          );
          const data = await res.json();
          setBooks(data.docs);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    const delayFetch = setTimeout(() => {
      fetchBooks();
    }, 500);

    return () => clearTimeout(delayFetch);
  }, [input]);

  const isBookInMyBooks = (title) => {
    return myBooks.some((book) => book.title === title);
  }

  return (
    <>
      <header>
        <h2>Search by Book name: </h2>
        <input
          type="text"
          className="search"
          placeholder="Enter Book Name"
          value={input}
          onChange={({ target }) => setInput(() => target.value)}
        />
        <Link to="/my-bookshelf" className="button">
          My Bookshelf
        </Link>
        
      </header>
      <section className="books-section">
        {loading ? (
          <>
          <div className="loader">
            <h2>Loading..</h2>
          </div>
          </>
        ) : (
          books.map((book, id) => (
            <SingleBook
              key={id}
              book={book}
              showBtn={!isBookInMyBooks(book.title)}
              onClick={() => handleClick(id)}
            />
          ))
        )}
      </section>
    </>
  );
};

export default HomePage;
