import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/edit-book/${book._id}`}>Edit</Link>
    </div>
  );
};

export default BookCard;
