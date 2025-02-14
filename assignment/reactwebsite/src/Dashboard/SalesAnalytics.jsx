import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './dashboard-styles/salesanalytics.css';

const SalesAnalytics = () => {
  const COLORS = ["#4A90E2", "#7B8AB8", "#A0A6BF", "#C3C8D5", "#6E7F80"];

  const salesData = [
    { month: 'Jan', sales: 65000, orders: 420, profit: 12500 },
    { month: 'Feb', sales: 72000, orders: 450, profit: 15000 },
    { month: 'Mar', sales: 68000, orders: 430, profit: 13000 },
    { month: 'Apr', sales: 80000, orders: 470, profit: 17500 },
    { month: 'May', sales: 75000, orders: 445, profit: 16000 }
  ];

  const productPerformance = [
    { name: 'Wireless Headphones', sales: 1200, revenue: 36000 },
    { name: 'Smart Watch', sales: 800, revenue: 32000 },
    { name: 'Bluetooth Speaker', sales: 600, revenue: 18000 },
    { name: 'Phone Case', sales: 1500, revenue: 22500 },
    { name: 'Power Bank', sales: 950, revenue: 28500 }
  ];

  return (
    <div className="sa-container">
      <div className="sa-header">
        <h2>Sales Analytics</h2>
        <select className="sa-period-select">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>Last 12 Months</option>
        </select>
      </div>

      <div className="sa-metrics-grid">
        <div className="sa-metric-card">
          <div className="sa-metric-header">
            <h3>Total Sales</h3>
            <ArrowUpRight className="sa-trend-icon up" />
          </div>
          <div className="sa-metric-value">$75,000</div>
          <div className="sa-metric-trend positive">+12.5% vs last period</div>
        </div>

        <div className="sa-metric-card">
          <div className="sa-metric-header">
            <h3>Total Orders</h3>
            <ArrowUpRight className="sa-trend-icon up" />
          </div>
          <div className="sa-metric-value">445</div>
          <div className="sa-metric-trend positive">+5.2% vs last period</div>
        </div>

        <div className="sa-metric-card">
          <div className="sa-metric-header">
            <h3>Total Profit</h3>
            <ArrowDownRight className="sa-trend-icon down" />
          </div>
          <div className="sa-metric-value">$16,000</div>
          <div className="sa-metric-trend negative">-2.3% vs last period</div>
        </div>
      </div>

      <div className="sa-charts-grid">
        <div className="sa-chart-card">
          <h3>Sales Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS[3]} />
              <XAxis dataKey="month" stroke={COLORS[2]} />
              <YAxis stroke={COLORS[2]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke={COLORS[0]} strokeWidth={2} />
              <Line type="monotone" dataKey="profit" stroke={COLORS[1]} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="sa-chart-card">
          <h3>Product Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS[3]} />
              <XAxis dataKey="name" stroke={COLORS[2]} />
              <YAxis stroke={COLORS[2]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill={COLORS[0]} />
              <Bar dataKey="revenue" fill={COLORS[1]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;