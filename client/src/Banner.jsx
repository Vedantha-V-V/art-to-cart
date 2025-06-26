import React from 'react';
import { Link } from 'react-router-dom';
//import './frontpage.css';
import BannerImg from './Photos/banner-2.jpg';

function Banner() {
  return (
    <section className="banner">
      <img src={BannerImg} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>Find Your Perfect Product</h1>
        <p>Explore our collection of amazing products</p>
        <Link to="/categories">
        <button className="btn">Shop Now!</button>
        </Link>
      </div>
    </section>
  );
}

export default Banner;
