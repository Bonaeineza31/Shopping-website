import React from "react";
import { useParams } from "react-router-dom";
import { popularCategories } from './Home';
import '../styles/singlepage.css';
import { Star, Award, CheckCircle, ThumbsUp } from 'lucide-react';

function SinglePage() {
  const { id } = useParams();
  const category = popularCategories.find((item) => item.id == id);

  if (category) {
    return (
      <div className="single-page">
        <div className="product-hero">
          <div className="product-image-container">
            <img src={category.image} alt={category.name} className="product-image" />
            {category.discount && (
              <span className="discount-badge">-{category.discount}%</span>
            )}
          </div>
          
          <div className="product-info">
            <h1 className="product-title">{category.name}</h1>
            <div className="rating">
              <Star className="star-icon filled" />
              <Star className="star-icon filled" />
              <Star className="star-icon filled" />
              <Star className="star-icon filled" />
              <Star className="star-icon half-filled" />
              <span className="rating-count">(4.8/5 based on 2,345 reviews)</span>
            </div>
            
            <div className="price-container">
              <span className="current-price">${category.price || '99.99'}</span>
              {category.oldPrice && (
                <span className="old-price">${category.oldPrice}</span>
              )}
            </div>

            <div className="trust-badges">
              <div className="badge">
                <CheckCircle className="badge-icon" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="badge">
                <Award className="badge-icon" />
                <span>Top Rated Product</span>
              </div>
              <div className="badge">
                <ThumbsUp className="badge-icon" />
                <span>Customer Favorite</span>
              </div>
            </div>

            <div className="product-description">
              <h2>About This Product</h2>
              <p>Experience excellence with our {category.name}. Trusted by thousands of satisfied customers, this premium product delivers exceptional performance and unmatched quality.</p>
              
              <div className="key-features">
                <h3>Key Features:</h3>
                <ul>
                  <li>Premium quality materials</li>
                  <li>Expert craftsmanship</li>
                  <li>Long-lasting durability</li>
                  <li>Industry-leading warranty</li>
                </ul>
              </div>
            </div>

            <div className="social-proof">
              <h2>What Our Customers Say</h2>
              <div className="testimonial">
                "This is absolutely the best product I've ever used. The quality is outstanding!" 
                <span className="customer-name">- Sarah M.</span>
              </div>
            </div>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }

  return <div className="not-found">Product not found</div>;
}

export default SinglePage;