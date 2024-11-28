import React from 'react';
import './frontpage.css';
import ProductCard from './ProductCard.jsx';
import pot from './Photos/pot.jpg';
import bowl from './Photos/bowl.png';
import coin from './Photos/coin.jpg'

function FeaturedProducts() {
  const products = [
    {
      image: pot,
      name: 'Sugar Pot',
      rating: '⭐⭐⭐⭐⭐',
      price: '$19.99',
    },
    {
      image: bowl,
      name: 'Porcelain Bowl',
      rating: '⭐⭐⭐⭐',
      price: '$24.99',
    },
    {
      image: coin,
      name: 'Ancient Coin',
      rating: '⭐⭐⭐⭐⭐',
      price: '$29.99',
    },
    // Add more products as needed
  ];

  return (
    <section className="featured-products">
      <h2>Artisanal Marketplace</h2>
      <hr style={{ width: '100px', margin: '0 auto 10px', borderWidth: '3px' }} />
      <div className="categories">
        <div></div>
        <div>
          <button className="buttons" id="featured-btn">Featured</button>
          <button className="buttons" id="most-sold-btn">Most Sold</button>
          <button className="buttons" id="special-btn">Special</button>
        </div>
        <div></div>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
