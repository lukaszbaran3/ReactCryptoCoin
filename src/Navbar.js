import React from 'react';
import './css/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <a href='/'> <p>ReactCryptoCoin</p> </a>
      <ul>
        <li>
            <a href='#home'>Home</a>
        </li>
        <li>
            <a href='#market'>Market</a>
        </li>
        <li>
            <a href='#aboutUs'>About Us</a>
        </li>
        <li>
            <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
