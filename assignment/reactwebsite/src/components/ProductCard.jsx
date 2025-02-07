import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles/productcard.css'

const ProductCard = ({ product }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {showQuickView && (
        <div className="modal-overlay">
          <div className="quick-view-modal">
            <button 
              onClick={() => setShowQuickView(false)}
              className="close-button"
            >
              <X />
            </button>
            <div className="modal-grid">
              <div className="product-gallery">
                <div className="main-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="modal-main-image"
                  />
                </div>
                <div className="thumbnail-strip">
                  <img src={product.image} alt="" className="thumbnail" />
                  <img src={product.image} alt="" className="thumbnail" />
                  <img src={product.image} alt="" className="thumbnail" />
                  <img src={product.image} alt="" className="thumbnail" />
                </div>
              </div>
              <div className="modal-content">
                <h2 className="modal-title">{product.name}</h2>
                <div className="modal-rating">★★★★☆ (1 customer review)</div>
                <p className="modal-price">${product.price.from.toFixed(2)} - ${product.price.to.toFixed(2)}</p>
                <p className="modal-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="color-selection">
                  <span>Color</span>
                  <div className="color-options">
                    <button className="color-option white"></button>
                    <button className="color-option brown"></button>
                  </div>
                </div>
                <div className="quantity-selector">
                  <button className="qty-btn">-</button>
                  <span>1</span>
                  <button className="qty-btn">+</button>
                </div>
                <button className="add-to-cart-btn">ADD TO CART</button>
              </div>
            </div>
            <div className="vendor-info">
              <h3>Vendor</h3>
              <div className="vendor-profile">
                <img src="/api/placeholder/40/40" alt="vendor" className="vendor-image" />
                <span>Rebecca Doe</span>
              </div>
              <p>Address</p>
              <p className="vendor-address">Central Park, New York, US</p>
              <button className="vendor-btn">See All Products</button>
              <button className="vendor-btn">Register Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;