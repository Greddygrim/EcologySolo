import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="ecofunk">
          Eco Funk
        </Link>
        <div className="nav-links">
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/event">Events</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};
