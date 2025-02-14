import React from 'react';
import './dashboard-styles/newproduct.css';
import sportshoe from './pics/Screenshot 2025-02-14 005816.png';
import headset from './pics/Screenshot 2025-02-14 005821.png';
import purse from './pics/Screenshot 2025-02-14 005827.png';
import nike from './pics/Screenshot 2025-02-14 005836.png';

const Newproduct = () => {
  const products = [
    {id: 1, name: "Unique shoe", price: 29.00, originalPrice: 45.00, rating: 4.5, image: sportshoe },
    {id: 2, name: 'Premium Headphones', price: 49.00, originalPrice: 79.00, rating: 4.5, image: headset },
    {id: 3, name: 'Lavie Purse CN 120', price: 49.00, originalPrice: 79.00, rating: 4.5, image: purse },
    {id: 4, name: 'Nike Shoes Leather Pasted 20', price: 49.00, originalPrice: 79.00, rating: 5, image: nike },
  ];

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  const ProductGrid = ({ products }) => (
    <div className="products-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <div className="price-container">
              <span className="current-price">${product.price.toFixed(2)}</span>
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            </div>
            <div className="rating">{renderStars(product.rating)}</div>
            {/* <button className="add-to-cart">Add To Cart</button> */}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="products-container">
      <ProductGrid products={products} />
      <div className="promotion-banner">
        <h2>Save Up To 50% Off</h2>
        <p>This Offer One Week Available Only</p>
      </div>
      <ProductGrid products={products} />
    </div>
  );
};

export default Newproduct;