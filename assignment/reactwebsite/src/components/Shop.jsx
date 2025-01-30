import React, { useState } from 'react';
import '../styles/shop.css';
import Bodylotion from '../images/Screenshot 2025-01-28 153903.png';
import alexa from '../images/Screenshot 2025-01-28 162458.png'
import headset from '../images/Screenshot 2025-01-28 162506.png'
import cream from '../images/Screenshot 2025-01-30 141550.png'
import shoes from '../images/Screenshot 2025-01-30 141538.png'
import mouse from '../images/Screenshot 2025-01-30 141532.png'
import recorder from '../images/Screenshot 2025-01-30 141532.png'
import watch from '../images/Screenshot 2025-01-30 141419.png'
import headsetplus from '../images/Screenshot 2025-01-30 141410.png'

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  const products = [
    { id: 1,name: "All In One Bottle",price: { min: 22.00, max: 35.00 },rating: 3,colors: ["red", "blue","silver", "white"],image: Bodylotion },
    {id: 2,name: "Amazon Alexa", price: { min: 149.00, max: 149.00 }, rating: 5, colors: ["arsenic", "chamoisee","silver", "white"], image: alexa },
    {id: 3,name: "Headset Gamer Legion",price: { min: 22.00, max: 55.00 },rating: 5,colors: ["black", "gray", "white"],image: headset  },
    {id: 4,name: "Headset Gamer Legion plus",price: { min: 22.00, max: 55.00 },rating: 5,colors: ["red", "blue","silver", "white"],image: headsetplus  },
    {id: 4,name: "JDoe's Styling Watch",price: { min: 22.00, max: 33.00 },rating: 5,colors: ["arsenic", "silver"],image: watch  },
    {id: 4,name: "Jessi Cam Recorder",price: { min: 22.00, max: 555.00 },rating: 5,colors: ["arsenic", "chamoisee","silver", "white"],image: recorder  },
    {id: 4,name: "Mouse Raxer 3000DPI",price: { min: 22.00, max: 55.00 },rating: 4,colors: ["black", "gray", "white"],image: mouse  },
    {id: 4,name: "John Sport Shoes",price: { min: 22.00, max: 165.00 },rating: 4,colors: ["red", "gray", "white"],image: shoes  },
    {id: 4,name: "Santa Monica Facial Cream",price: { min: 22.00, max: 165.00 },rating: 4,colors: ["black", "gray", "white"],image: cream  },
  ];

  const categories = [
    { name: "BodyLotion", count: 1 },
    { name: "Computer mouse", count: 1 },
    { name: "Electronics", count: 2 },
    { name: "Fashion", count: 3 },
    { name: "Games", count: 1 },
    { name: "Shoes", count: 2 },
    { name: "Sport", count: 1 },
    { name: "Women Clothes", count: 1 },
  ];

  return (
    <div className="shop-container">
      {/* Hero Section */}
      <div className="shop-hero">
        <h1>Shop</h1>
      </div>

      <div className="shop-content">
        {/* Sidebar */}
        <div className="shop-sidebar">
          <div className="sidebar-section">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category) => (
                <li key={category.name}>
                  {category.name} ({category.count})
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Color</h3>
            <div className="color-filters">
              <span className="color-filter" style={{backgroundColor: "red"}}></span>
              <span className="color-filter" style={{backgroundColor: "blue"}}></span>
              <span className="color-filter" style={{backgroundColor: "gray"}}></span>
              <span className="color-filter" style={{backgroundColor: "white"}}></span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Rating</h3>
            <div className="rating-filters">
              <div className="rating-option">★★★★★ (5)</div>
              <div className="rating-option">★★★★☆ (4)</div>
              <div className="rating-option">★★★☆☆ (3)</div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Price</h3>
            <div className="price-range">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              />
              <div className="price-inputs">
                <input type="number" value={priceRange[0]} readOnly />
                <input type="number" value={priceRange[1]} readOnly />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-section">
          <div className="product-header">
            <p>Showing 1-6 of 14 results</p>
            <select className="sort-select">
              <option>Default sorting</option>
              <option>Sort by Popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by Latest</option>
              <option>Price: low to high</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="product-price">
                  ${product.price.min.toFixed(2)} - ${product.price.max.toFixed(2)}
                </div>
                <div className="product-rating">
                  {"★".repeat(product.rating)}{"☆".repeat(5-product.rating)}
                </div>
                <div className="product-colors">
                  {product.colors.map((color) => (
                    <span 
                      key={color} 
                      className="color-dot"
                      style={{backgroundColor: color}}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <span className="active">1</span>
            <span>2</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;