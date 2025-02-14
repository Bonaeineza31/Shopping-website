import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './dashboard-styles/review.css';

const Review = () => {
  // Sample data for the trend chart
  const trendData = [
    { month: 'Jan', rating: 4.2 },
    { month: 'Feb', rating: 4.5 },
    { month: 'Mar', rating: 4.3 },
    { month: 'Apr', rating: 4.7 },
    { month: 'May', rating: 4.6 }
  ];

  // Sample review data
  const reviews = [
    {
      id: 1,
      customer: 'Sarah Johnson',
      rating: 5,
      date: '2024-02-14',
      comment: 'Excellent service! The product exceeded my expectations.',
      productName: 'Wireless Headphones'
    },
    {
      id: 2,
      customer: 'Mike Peters',
      rating: 4,
      date: '2024-02-13',
      comment: 'Good quality product, but delivery took longer than expected.',
      productName: 'Smart Watch'
    },
    // Add more reviews as needed
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="rv-container">
      <div className="rv-header">
        <h2>Customer Reviews</h2>
        <div className="rv-stats">
          <div className="rv-stat-card">
            <h3>Average Rating</h3>
            <p>4.6</p>
          </div>
          <div className="rv-stat-card">
            <h3>Total Reviews</h3>
            <p>1,234</p>
          </div>
          <div className="rv-stat-card">
            <h3>This Month</h3>
            <p>+82</p>
          </div>
        </div>
      </div>

      <div className="rv-chart-container">
        <h3>Rating Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#C3C8D5" />
            <XAxis dataKey="month" stroke="#7B8AB8" />
            <YAxis stroke="#7B8AB8" domain={[0, 5]} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="rating" 
              stroke="#4A90E2" 
              strokeWidth={2}
              dot={{ fill: "#4A90E2" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="rv-reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="rv-review-card">
            <div className="rv-review-header">
              <h4>{review.customer}</h4>
              <span className="rv-product-name">{review.productName}</span>
            </div>
            <div className="rv-rating">
              <span className="rv-stars">{renderStars(review.rating)}</span>
              <span className="rv-date">{review.date}</span>
            </div>
            <p className="rv-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review