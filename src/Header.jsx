import React from 'react';
import { Link } from 'react-router-dom';
import './frontpage.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">Art To Cart</div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <Link to="/login">
        <button className="signup-button">Log in</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
