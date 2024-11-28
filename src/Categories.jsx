import React from 'react';
import './categories.css';
import embroidery from './Photos/embroidery.jpg';
import vintage from './Photos/coin.jpg';
import terracotta from './Photos/terracotta.jpg';
import bowl from './Photos/bowl.png';

function Categories() {
  return (
    <main className="categories-container">
      <h1 className="page-title">Shop by Category</h1>
      <div className="category-grid">
        <div className="category-card">
          <img src={bowl} alt="Porcelain" />
          <h2>Porcelain</h2>
        </div>
        <div className="category-card">
          <img src={terracotta} alt="Terracotta" />
          <h2>Terracotta</h2>
        </div>
        <div className="category-card">
          <img src={embroidery} alt="Embroidery" />
          <h2>Embroidery</h2>
        </div>
        <div className="category-card">
          <img src={vintage} alt="Vintage" />
          <h2>Vintage</h2>
        </div>
        {/* Add more categories here */}
      </div>
    </main>
  );
}

export default Categories;
