import React from 'react';
import '../styles/vendor.css';
import monica from '../images/Screenshot 2025-01-28 163110.png'
import doe from '../images/Screenshot 2025-01-28 163130.png'
import digital from '../images/Screenshot 2025-01-28 163143.png'
import glass from '../images/glass store.webp'
import josh from '../images/josh.webp'
import jessica from '../images/jessica store.webp'

const Vendor = () => {
  const stores = [
    {
      id: 1,name: "John Doe's Store", rating: 5,
      location: { area: "Central Park", city: "New York", state: "New York",  country: "United States (US)" },
      image: doe,  profileImage: doe
    },
    {
      id: 2,name: "Jessica's Store",  rating: 4,
      location: { area: "Central Park", city: "New York", state: "New York", country: "United States (US)"  },
      image: jessica,  profileImage: jessica
    },
    {
      id: 3,name: "Sancta Monica's  Store",  rating: 4.5,
      location: { area: "Central Park", city: "New York", state: "New York", country: "United States (US)"  },
      image: monica, profileImage: monica
    },
    {
      id: 4,name: "Digital Good store's Store",  rating: 4.5,
      location: { area: "Central Park", city: "New York", state: "New York", country: "United States (US)"  },
      image: digital, profileImage: digital
    },
    {
      id: 5,name: "The glass store",  
      location: { area: "Central Park", city: "New York", state: "New York", country: "United States (US)"  },
      image: glass, profileImage: glass
    },
    {
      id: 6,name: "Josh Doe's Store",rating: 4.5 ,
      location: { area: "Central Park", city: "New York", state: "New York", country: "United States (US)"  },
      image: josh, profileImage: josh
    },
    // Add other store data following the same pattern
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="store-container">
      <div className="store-header">
        <h1>Store List</h1>
        <div className="store-controls">
          <span  >Total stores showing: {stores.length}</span>
          <button className="filter-btn">Filter</button>
          <div className="sort-controls">
            <span>Sort by:</span>
            <select defaultValue="most-recent">
              <option value="most-recent">Most Recent</option>
            </select>
          </div>
          <div className="view-controls">
            <button className="grid-view active">
              <span className="grid-icon">⊞</span>
            </button>
            <button className="list-view">
              <span className="list-icon">☰</span>
            </button>
          </div>
        </div>
      </div>

      <div className="store-grid">
        {stores.map(store => (
          <div key={store.id} className="store-card">
            <div className="store-image" style={{backgroundImage: `url(${store.image})`}}>
              <div className="store-info">
                <h2>{store.name}</h2>
                <div className="rating">{renderStars(store.rating)}</div>
                <div className="location">
                  <p>{store.location.area},</p>
                  <p>{store.location.city},</p>
                  <p>{store.location.state}, {store.location.country}</p>
                </div>
              </div>
              <div className="profile-image">
                <img src={store.profileImage} alt={`${store.name} profile`} />
              </div>
            </div>
            <button className="view-store-btn">→</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendor;