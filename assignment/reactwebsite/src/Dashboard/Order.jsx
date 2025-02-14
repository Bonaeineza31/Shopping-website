// Orders.jsx
import React, { useState } from 'react';
import { 
  BarChart, 
  PieChart, 
  Bar, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { Download, Filter, Search } from 'lucide-react';
import './orders.css';

const COLORS = ["#4A90E2", "#7B8AB8", "#A0A6BF", "#C3C8D5", "#6E7F80"];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for the tables and charts
  const orders = [
    { id: '#ORD-001', customer: 'John Doe', date: '2024-02-14', status: 'Delivered', total: '$156.00', payment: 'Credit Card' },
    { id: '#ORD-002', customer: 'Jane Smith', date: '2024-02-14', status: 'Processing', total: '$245.50', payment: 'PayPal' },
    { id: '#ORD-003', customer: 'Mike Johnson', date: '2024-02-13', status: 'Pending', total: '$89.99', payment: 'Credit Card' },
    { id: '#ORD-004', customer: 'Sarah Wilson', date: '2024-02-13', status: 'Delivered', total: '$178.25', payment: 'Debit Card' },
    { id: '#ORD-005', customer: 'Tom Brown', date: '2024-02-12', status: 'Cancelled', total: '$132.00', payment: 'PayPal' },
  ];

  const orderStatusData = [
    { name: 'Delivered', value: 45 },
    { name: 'Processing', value: 25 },
    { name: 'Pending', value: 15 },
    { name: 'Cancelled', value: 10 },
    { name: 'Refunded', value: 5 },
  ];

  const monthlyOrdersData = [
    { month: 'Jan', orders: 65 },
    { month: 'Feb', orders: 85 },
    { month: 'Mar', orders: 72 },
    { month: 'Apr', orders: 95 },
    { month: 'May', orders: 80 },
  ];

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1>Orders Management</h1>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Search orders..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <Filter size={20} />
            Filter
          </button>
          <button className="export-btn">
            <Download size={20} />
            Export
          </button>
        </div>
      </div>

      <div className="analytics-section">
        <div className="chart-container">
          <h2>Order Status Distribution</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={orderStatusData}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {orderStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        
        <div className="chart-container">
          <h2>Monthly Orders</h2>
          <BarChart width={500} height={300} data={monthlyOrdersData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill={COLORS[0]} />
          </BarChart>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.total}</td>
                <td>{order.payment}</td>
                <td>
                  <button className="action-btn">View</button>
                  <button className="action-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;