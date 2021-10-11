import React from "react";
import "./navBar.css"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo"> React-User</div>

      <ul className="Nav-link">
        <li> AddUser</li>
        <li>List</li>
      </ul>
      <div className="log">
        <div>login</div>
        <div>log Out</div>
      </div>
    </nav>
  );
};

export default Navbar;
