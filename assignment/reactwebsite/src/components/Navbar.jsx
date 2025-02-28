import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import Account from './Account';

const Navbar = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    'Electronics',
    'Computer Gadget',
    'Fashion',
    'Body Lotion',
    'Sports',
    'Woman Clothes',
    'Shoes',
    'Watches'
  ];

  return (
    <header className="header">
      <div className="top-navbar">
        <div className="container">
          <Link to="/" className="logo">Botiga</Link>
          <div className="search-bar">
            <div className="category-dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => setShowCategories(!showCategories)}
              >
                All Categories <ChevronDown size={16} />
              </button>
              {showCategories && (
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="search-input">
              <input type="text" placeholder="Search products..." />
              <button className="search-button">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="user-actions">
          <button onClick={() => setShowAccount(true)} className="icon-button">
            <User size={20} />
          </button>
            <Link to="/wishlist" className="icon-button">
              <Heart size={20} />
              <span className="badge">0</span>
            </Link>
            <Link to="/cart" className="icon-button">
              <ShoppingCart size={20} />
              <span className="badge">0</span>
            </Link>
          </div>
        </div>
      </div>

      <nav className="main-navbar">
        <div className="container">
          <div className="trending-categories">
            Trending Categories <ChevronDown size={16} />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Vendors">Vendors</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/HomeProduct">New item</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
          </ul>
          <div className="contact-number">📞 800-123-4567</div>
        </div>
      </nav>

      {showAccount && (
        <Account onClose={() => setShowAccount(false)} />
      )}
    </header>
  );
};

export default Navbar;