import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { ShoppingBag, Users, Star, Heart, BarChart2, Mail, Shield } from 'lucide-react';
import './dashboard-styles/dashboardview.css'

// Color constants
const COLORS = ["#4A90E2", "#7B8AB8", "#A0A6BF", "#C3C8D5", "#6E7F80"];

// Sample data
const orderData = [
  { month: 'Jan', orders: 1200, shipping: 980 },
  { month: 'Feb', orders: 1800, shipping: 1400 },
  { month: 'Mar', orders: 1600, shipping: 1300 },
  { month: 'Apr', orders: 2100, shipping: 1800 },
  { month: 'May', orders: 1900, shipping: 1600 }
];

const customerSegments = [
  { segment: 'New', value: 30 },
  { segment: 'Returning', value: 45 },
  { segment: 'VIP', value: 25 }
];

const reviewStats = [
  { rating: '5 stars', count: 450 },
  { rating: '4 stars', count: 320 },
  { rating: '3 stars', count: 180 },
  { rating: '2 stars', count: 80 },
  { rating: '1 star', count: 40 }
];

const communicationStats = [
  { channel: 'Email', count: 2800 },
  { channel: 'Chat', count: 1200 },
  { channel: 'Phone', count: 800 }
];

const DashboardView= () => {
  return (
    <div className="admin-dash-wrapper">
      {/* Summary Metrics Row */}
      <div className="admin-metrics-grid">
        <div className="admin-metric-card">
          <div className="admin-metric-content">
            <div className="admin-metric-info">
              <p className="admin-metric-label">Total Orders</p>
              <h3 className="admin-metric-value">8,642</h3>
              <p className="admin-metric-change positive">↑ 12.5% vs last month</p>
            </div>
            <ShoppingBag className="admin-metric-icon" />
          </div>
        </div>

        <div className="admin-metric-card">
          <div className="admin-metric-content">
            <div className="admin-metric-info">
              <p className="admin-metric-label">Active Customers</p>
              <h3 className="admin-metric-value">15.2k</h3>
              <p className="admin-metric-change positive">↑ 8.3% vs last month</p>
            </div>
            <Users className="admin-metric-icon" />
          </div>
        </div>

        <div className="admin-metric-card">
          <div className="admin-metric-content">
            <div className="admin-metric-info">
              <p className="admin-metric-label">Average Rating</p>
              <h3 className="admin-metric-value">4.6/5</h3>
              <p className="admin-metric-change positive">↑ 0.2 vs last month</p>
            </div>
            <Star className="admin-metric-icon" />
          </div>
        </div>

        <div className="admin-metric-card">
          <div className="admin-metric-content">
            <div className="admin-metric-info">
              <p className="admin-metric-label">Security Status</p>
              <h3 className="admin-metric-value">Strong</h3>
              <p className="admin-metric-change positive">All systems secure</p>
            </div>
            <Shield className="admin-metric-icon" />
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="admin-charts-grid">
        {/* Orders & Shipping Trends */}
        <div className="admin-chart-card">
          <h3 className="admin-chart-title">Orders & Shipping Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="month" stroke="#7B8AB8" />
              <YAxis stroke="#7B8AB8" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" stroke="#4A90E2" name="Orders" />
              <Line type="monotone" dataKey="shipping" stroke="#7B8AB8" name="Shipped" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Segments */}
        <div className="admin-chart-card">
          <h3 className="admin-chart-title">Customer Segments</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={customerSegments}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#4A90E2"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {customerSegments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Review Distribution */}
        <div className="admin-chart-card">
          <h3 className="admin-chart-title">Review Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reviewStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="rating" stroke="#7B8AB8" />
              <YAxis stroke="#7B8AB8" />
              <Tooltip />
              <Bar dataKey="count" fill="#4A90E2">
                {reviewStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Communication Channels */}
        <div className="admin-chart-card">
          <h3 className="admin-chart-title">Communication Channels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={communicationStats}
                dataKey="count"
                nameKey="channel"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#4A90E2"
                label
              >
                {communicationStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;