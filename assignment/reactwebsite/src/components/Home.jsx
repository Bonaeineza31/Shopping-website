import React from 'react';
import { Link } from 'react-router-dom';
import Bodylotion from '../images/Screenshot 2025-01-28 153903.png';
import Sport from '../images/Screenshot 2025-01-28 153912.png';
import ComputerGadget from '../images/Screenshot 2025-01-28 153920.png';
import Electronics from '../images/Screenshot 2025-01-28 153927.png';
import Watch from '../images/Screenshot 2025-01-28 153934.png';
import WomanClothes from '../images/Screenshot 2025-01-28 155118.png';
import instapic from '../images/Screenshot 2025-01-28 161648.png'
import smart from '../images/Screenshot 2025-01-28 162450.png'
import alexa from '../images/Screenshot 2025-01-28 162458.png'
import headset from '../images/Screenshot 2025-01-28 162506.png'
import monica from '../images/Screenshot 2025-01-28 163110.png'
import doe from '../images/Screenshot 2025-01-28 163130.png'
import digital from '../images/Screenshot 2025-01-28 163143.png'
import '../styles/home.css';

const Home = () => {
  const popularCategories = [
    { name: 'Body Lotion', image: Bodylotion, link: '/Shop' },
    { name: 'Sports', image: Sport, link: '/Shop' },
    { name: 'Computer Gadget', image: ComputerGadget, link: '/Shop' },
    { name: 'Electronics', image: Electronics, link: '/Shop' },
    { name: 'Watch', image: Watch, link: '/Shop'},
    { name: 'Woman Clothes', image: WomanClothes, link: '/Shop' }
  ];

  const newProducts = [
    { name: 'All-Pro Smart', price: { from: 18.00, to: 35.00 }, image: smart },
    { name: 'Amazon Alexa', price: { from: 45.00, to: 65.00 }, image: alexa },
    { name: 'Headset Gamer', price: { from: 32.00, to: 45.00 }, image: headset }
  ];

  const vendors = [
    { name: "Santa Monica's Fashion Store", location: "New York, NY", image: monica },
    { name: "Josh Doe's Store", location: "New York, NY", image: doe },
    { name: "Digital Good's Store", location: "New York, NY", image: digital }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="category-menu">
          <ul>
            <li>Electronics</li>
            <li>Computer Gadget</li>
            <li>Fashion</li>
            <li>Body Lotion</li>
            <li>Sports</li>
            <li>Woman Clothes</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>
        <div className="hero-content">
          <h1>Explore our latest and<br />greatest electronics</h1>
          <Link to="/shop">
            <button className="shop-now">SHOP NOW</button>
          </Link>
        </div>
      </div>

      {/* Popular Categories */}
      <section className="popular-categories">
        <div className="container">
          <h2>Popular Categories</h2>
          <div className="categories-grid">
            {popularCategories.map((category) => (
              <Link to={category.link} key={category.name} className="category-card">
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrival Products */}
      <section className="new-arrivals">
        <div className="container">
          <h2>New Arrival Products</h2>
          <div className="products-grid">
            {newProducts.map((product) => (
              <div key={product.name} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">
                  ${product.price.from.toFixed(2)} - ${product.price.to.toFixed(2)}
                </p>
                <div className="rating">★★★★☆</div>
              </div>
            ))}
          </div>
          <Link to="/Shop">
            <button className="shop-more">SHOP NOW</button>
          </Link>
        </div>
      </section>

      {/* Vendor List */}
      <section className="vendor-list">
        <div className="container">
          <h2>Our Vendor List</h2>
          <div className="vendors-grid">
            {vendors.map((vendor) => (
              <div key={vendor.name} className="vendor-card">
                <img src={vendor.image} alt={vendor.name} />
                <h3>{vendor.name}</h3>
                <p>{vendor.location}</p>
              </div>
            ))}
          </div>
          <Link to="/Vendors">
            <button className="view-all">VIEW ALL VENDORS</button>
          </Link> 
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why People Choose Us</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="icon">⟶
⟵</div>
              <h3>Easy Returns</h3>
              <p>Our return policy is simple and that's why customers love our shop</p>
            </div>
            <div className="feature">
              <div className="icon">★</div>
              <h3>Customer Service</h3>
              <p>We offer top notch customer service that's praised by our clients</p>
            </div>
            <div className="feature">
              <div className="icon">✓</div>
              <h3>High Quality</h3>
              <p>All of our products go through rigorous quality control before shipping</p>
            </div>
          </div>
        </div>
      </section>
      {/* Instagram Feed */}
      <div className="instagram-feed">
        <h3>Follow us on Instagram</h3>
        <div className="instagram-grid">
          {[Watch, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="instagram-item">
              <img src={instapic} alt={`Instagram post ${item}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;