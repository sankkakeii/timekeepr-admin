import React from "react";
import "../components/Navbar.scss";
import { IoIosSearch } from "react-icons/io";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="left">{props.name}</div>
      <button id="search">
        Search...
        <IoIosSearch />
      </button>
    </nav>
  );
};

export default Navbar;
