import React, { useState } from "react";
import "../css/DropdownMenu.css";

function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <button className="open-menu" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </button>
      {showMenu && <SmallNavbar />}
    </div>
  );
}

const SmallNavbar = () => {
  return (
    <div>
      <ul className="menu-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#market">Market</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
