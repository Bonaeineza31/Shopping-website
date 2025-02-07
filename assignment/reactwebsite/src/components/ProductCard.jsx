import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles/productcard.css'

const ProductCard = ({ product }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        
        {isHovered && (
          <div className="hover-overlay">
            <button 
              onClick={() => setShowQuickView(true)}
              className="overlay-button"
            >
              QUICK VIEW
            </button>
            <button 
              onClick={() => setShowSelectOptions(true)}
              className="overlay-button"
            >
              SELECT OPTIONS
            </button>
          </div>
        )}
      </div>

      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">
        ${product.price.from.toFixed(2)} - ${product.price.to.toFixed(2)}
      </p>
      <div className="product-rating">★★★★☆</div>

      {/* Quick View Modal */}
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
              <img 
                src={product.image} 
                alt={product.name} 
                className="modal-image"
              />
              <div className="modal-content">
                <h2 className="modal-title">{product.name}</h2>
                <div className="modal-rating">★★★★☆</div>
                <p className="modal-price">${product.price.from.toFixed(2)} - ${product.price.to.toFixed(2)}</p>
                <p className="modal-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque dignissim auctor quam nec dapibus.
                </p>
                <div className="color-selector">
                  <span>Color:</span>
                  <div className="color-options">
                    <button className="color-option white"></button>
                    <button className="color-option gray"></button>
                  </div>
                </div>
                <button className="add-to-cart-btn">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Select Options Modal */}
      {showSelectOptions && (
        <div className="select-options-modal">
          <div className="modal-container">
            <button 
              onClick={() => setShowSelectOptions(false)}
              className="close-button"
            >
              <X />
            </button>

            <div className="options-grid">
              <div className="product-gallery">
                <div className="main-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="main-image"
                  />
                  <button className="zoom-button">🔍</button>
                </div>
                <div className="thumbnail-strip">
                  <button className="thumbnail active">
                    <img src={product.image} alt="" />
                  </button>
                  <button className="thumbnail">
                    <img src="/api/placeholder/80/80" alt="" />
                  </button>
                  <button className="thumbnail">
                    <img src="/api/placeholder/80/80" alt="" />
                  </button>
                </div>
              </div>

              <div className="product-details">
                <h1>{product.name}</h1>
                <div className="rating-row">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <span className="review-count">(1 customer review)</span>
                </div>
                <div className="price-range">
                  ${product.price.from.toFixed(2)} – ${product.price.to.toFixed(2)}
                </div>
                
                <p className="product-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque dignissim auctor quam nec dapibus. Etiam pulvinar 
                  lectus lorem, vel condimentum felis tincidunt eget.
                </p>

                <div className="color-selection">
                  <label>Color</label>
                  <div className="color-options">
                    <button className="color-option white"></button>
                    <button className="color-option brown"></button>
                    <button className="color-option light-gray"></button>
                    <button className="color-option gray"></button>
                  </div>
                </div>

                <div className="quantity-wrapper">
                  <div className="quantity-selector">
                    <button onClick={decrementQuantity} className="qty-btn">-</button>
                    <span className="quantity-value">{quantity}</span>
                    <button onClick={incrementQuantity} className="qty-btn">+</button>
                  </div>
                  <button className="add-to-cart-btn">ADD TO CART</button>
                </div>

                <div className="product-meta">
                  <p className="sku">SKU: N/A</p>
                  <p className="categories">
                    CATEGORIES: <a href="#">General</a>, <a href="#">Sports</a>
                  </p>
                  <button className="wishlist-btn">
                    ❤ Add to Wishlist
                  </button>
                </div>
              </div>

              <div className="vendor-info">
                <h3>Vendor</h3>
                <div className="vendor-profile">
                  <img 
                    src="/api/placeholder/40/40" 
                    alt="vendor" 
                    className="vendor-image" 
                  />
                  <span className="vendor-name">Jessica Doe</span>
                </div>
                
                <div className="vendor-details">
                  <h4>Address</h4>
                  <p>Central Park, New York, US</p>
                  
                  <h4>Contact</h4>
                </div>

                <div className="vendor-actions">
                  <button className="vendor-btn primary">See All Products</button>
                  <div className="become-vendor">
                    <span>Become a vendor?</span>
                    <button className="vendor-btn secondary">Register Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-tabs">
              <div className="tab-buttons">
                <button 
                  className={`tab-btn ${selectedTab === 'description' ? 'active' : ''}`}
                  onClick={() => setSelectedTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`tab-btn ${selectedTab === 'additional' ? 'active' : ''}`}
                  onClick={() => setSelectedTab('additional')}
                >
                  Additional Information
                </button>
                <button 
                  className={`tab-btn ${selectedTab === 'vendor' ? 'active' : ''}`}
                  onClick={() => setSelectedTab('vendor')}
                >
                  Vendor Info
                </button>
              </div>
              
              {selectedTab === 'description' && (
                <div className="tab-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque dignissim auctor quam nec dapibus. Etiam pulvinar 
                    lectus lorem, vel condimentum felis tincidunt eget.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;