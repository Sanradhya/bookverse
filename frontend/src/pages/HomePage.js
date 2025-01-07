import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
