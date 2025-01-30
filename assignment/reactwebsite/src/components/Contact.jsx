import React, { useState } from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=your-map-url"
          className="map-frame"
          title="Store Location"
        />
      </div>

      <div className="info-grid">
        {/* Contact Form */}
        <div className="form-card">
          <h2 className="form-title">Leave Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="name-grid">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        {/* Store Information */}
        <div className="store-info-container">
          <div className="store-details">
            <h2>Our Store</h2>
            <p>505-253 Fashion Ave, New York, NY 10018, USA</p>
            <p className="info-label">PHONE:</p>
            <p>+1 123 456 7890</p>
            <p className="info-label">E-MAIL:</p>
            <p>office@example.org</p>
          </div>
          <div className="store-hours">
            <h2>Store Hours</h2>
            <p>Mon - Sat: 10:00 AM - 5:30 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
