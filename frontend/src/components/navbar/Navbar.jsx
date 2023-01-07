import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  //Common Navbar at top of all pages to navigation back to main page and History page
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/messagehistory">Message History</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
