import React from 'react';
import './frontpage.css';

function ProductCard({ image, name, rating, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <p>{rating}</p>
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
    </div>
  );
}

export default ProductCard;
