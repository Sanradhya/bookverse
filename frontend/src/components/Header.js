import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Bookverse</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
