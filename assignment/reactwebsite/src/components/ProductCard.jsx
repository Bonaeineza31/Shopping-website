import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/productcard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, index, className }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // If product is undefined, return early
  if (!product) {
    return <div className={className || "product-item"}>Product not available</div>;
  }

  const handleNavigate = () => {
    if (product.id) {
      navigate(`/product/${product.id}`);
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Format price correctly
  const formatPrice = () => {
    if (!product.price) return '$0.00';
    
    if (typeof product.price === 'object' && product.price.from && product.price.to) {
      return `$${product.price.from.toFixed(2)} - $${product.price.to.toFixed(2)}`;
    }
    
    if (typeof product.price === 'number') {
      return `$${product.price.toFixed(2)}`;
    }
    
    return `$${product.price}`;
  };

  return (
    <>
      <div
        className={className || `product-item product-item-${index}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product2-image-container">
          <img
            src={product.image || '/path/to/placeholder/image.jpg'}
            alt={product.name || 'Product'}
            className="product-image"
          />
          {isHovered && (
            <div className="hover-overlay">
              <button 
                className="overlay-button"
                onClick={handleNavigate}
              >
                SELECT OPTIONS
              </button>
              <button
                className="overlay-button"
                onClick={() => setShowQuickView(true)}
              >
                QUICK VIEW
              </button>
            </div>
          )}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice()}</p>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="quick-view-overlay">
          <div className="quick-view-modal">
            <button
              className="close-button"
              onClick={() => setShowQuickView(false)}
            >
              <X />
            </button>

            <div className="modal-content">
              {/* Modal content remains the same */}
              <div className="modal-left">
                <div className="main-image-container">
                  <img
                    src={product.image || '/path/to/placeholder/image.jpg'}
                    alt={product.name || 'Product'}
                    className="main-image"
                  />
                  <button className="zoom-button">
                    <Search size={20} />
                  </button>
                </div>
                <div className="thumbnail-strip">
                  {product.images?.length ? (
                    product.images.map((imageData, idx) => (
                      <button
                        key={idx}
                        className={`thumbnail ${idx === 0 ? 'active' : ''}`}
                      >
                        <img
                          src={imageData || '/path/to/placeholder/image.jpg'}
                          alt={`Thumbnail ${idx + 1}`}
                        />
                      </button>
                    ))
                  ) : (
                    <p>No additional images available</p>
                  )}
                </div>
              </div>

              <div className="modal-right">
                <h2 className="product-title">{product.name}</h2>
                <div className="rating-row">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <span className="review-count">(1 customer review)</span>
                </div>
                <div className="price-range">
                  {formatPrice()}
                </div>

                <p className="product-description">
                  {product.description || 'No description available.'}
                </p>

                <div className="color-selection">
                  <label>Color</label>
                  <div className="color-options">
                    <button className="color-option white"></button>
                    <button className="color-option brown"></button>
                  </div>
                </div>

                <div className="quantity-row">
                  <div className="quantity-selector">
                    <button onClick={decrementQuantity} className="qty-btn">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity} className="qty-btn">
                      +
                    </button>
                  </div>
                  <button className="add-to-cart-btn">ADD TO CART</button>
                </div>

                <div className="product-meta">
                  <p>SKU: {product.sku || 'N/A'}</p>
                  <p>
                    CATEGORIES: <a href="#">Electronics</a>
                  </p>
                  <button className="wishlist-btn">❤ Add to Wishlist</button>
                </div>

                <div className="vendor-info">
                  {/* Vendor info remains the same */}
                  <h3>Vendor</h3>
                  <div className="vendor-profile">
                    <img
                      src="/api/placeholder/40/40"
                      alt="vendor"
                      className="vendor-avatar"
                    />
                    <span>Rebeca Doe</span>
                  </div>
                  <div className="vendor-details">
                    <h4>Address</h4>
                    <p>Central Park, New York, US</p>
                    <h4>Contact</h4>
                  </div>
                  <button className="vendor-btn">See All Products</button>
                  <div className="become-vendor">
                    <span>Become a vendor?</span>
                    <button className="register-btn">Register Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;