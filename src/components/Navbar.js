import React, { useEffect, useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollDistance(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={scrollDistance > 10 ? "scrolled navbar" : "navbar"}>
      <a href="/">
        {" "}
        <p>ReactCryptoCoin</p>{" "}
      </a>
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
}

export default Navbar;
