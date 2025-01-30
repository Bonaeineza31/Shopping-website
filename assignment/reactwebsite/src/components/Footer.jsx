import React from 'react';
import { Link } from 'react-router-dom';
import payment from '../images/Screenshot 2025-01-29 100140.png';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Left Section */}
        <div className="footer-section-left">
          <div className="newsletter">
            <h3>Stay up to date</h3>
            <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">SUBMIT</button>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-section">
              <h4>SHOP</h4>
              <ul>
                <li><Link to="/body-lotion">Body Lotion</Link></li>
                <li><Link to="/computer">Computer Gadget</Link></li>
                <li><Link to="/electronics">Electronics</Link></li>
                <li><Link to="/fashion">Fashion</Link></li>
                <li><Link to="/general">General</Link></li>
                <li><Link to="/shoes">Shoes</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/watch">Watch</Link></li>
                <li><Link to="/woman-clothes">Woman Clothes</Link></li>
              </ul>
            </div>

            <div className="link-section">
              <h4>COMPANY</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="link-section">
              <h4>ABOUT</h4>
              <ul>
                <li><Link to="/who-we-are">Who We Are</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-section-right">
          <div className="contact-info">
            <h3>Happy to help</h3>
            <p>1279 Thorn Street, NY</p>
            <p>Phone: 307-549-2480</p>
            <p className="email">Mail: demo@gmail.com</p>
            <div className="social-icons">
              <FaFacebook />
              <FaXTwitter />
              <FaLinkedin />
              <IoLogoInstagram />
            </div>
          </div>

          <div className="accept-section">
            <h4>ACCEPT FOR</h4>
            <div className="payment-methods">
              <img src={payment} alt="payment-methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;