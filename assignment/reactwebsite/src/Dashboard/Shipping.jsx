// Shipping.jsx
import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import { 
  Search, 
  Filter, 
  Download, 
  Truck, 
  Package, 
  AlertTriangle, 
  Clock 
} from 'lucide-react';
import './dashboard-styles/shipping.css';

const COLORS = ["#4A90E2", "#7B8AB8", "#A0A6BF", "#C3C8D5", "#6E7F80"];

const Shipping = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for shipping metrics
  const overviewCards = [
    { title: 'In Transit', value: '45', icon: <Truck />, color: COLORS[0] },
    { title: 'Delivered', value: '128', icon: <Package />, color: COLORS[1] },
    { title: 'Delayed', value: '8', icon: <AlertTriangle />, color: COLORS[2] },
    { title: 'Pending', value: '15', icon: <Clock />, color: COLORS[3] }
  ];

  const shipments = [
    { 
      tracking: 'SHP1234567',
      orderId: '#ORD-001',
      destination: 'New York, USA',
      status: 'In Transit',
      carrier: 'FedEx',
      eta: '2024-02-15',
      priority: 'High'
    },
    { 
      tracking: 'SHP1234568',
      orderId: '#ORD-002',
      destination: 'London, UK',
      status: 'Delivered',
      carrier: 'DHL',
      eta: '2024-02-14',
      priority: 'Normal'
    },
    { 
      tracking: 'SHP1234569',
      orderId: '#ORD-003',
      destination: 'Toronto, Canada',
      status: 'Delayed',
      carrier: 'UPS',
      eta: '2024-02-16',
      priority: 'High'
    },
    { 
      tracking: 'SHP1234570',
      orderId: '#ORD-004',
      destination: 'Sydney, Australia',
      status: 'Pending',
      carrier: 'FedEx',
      eta: '2024-02-17',
      priority: 'Normal'
    },
  ];

  const deliveryPerformance = [
    { date: 'Mon', onTime: 25, delayed: 2 },
    { date: 'Tue', onTime: 30, delayed: 3 },
    { date: 'Wed', onTime: 28, delayed: 4 },
    { date: 'Thu', onTime: 32, delayed: 2 },
    { date: 'Fri', onTime: 35, delayed: 1 },
  ];

  const carrierPerformance = [
    { carrier: 'FedEx', deliveries: 45 },
    { carrier: 'DHL', deliveries: 38 },
    { carrier: 'UPS', deliveries: 42 },
    { carrier: 'USPS', deliveries: 28 },
  ];

  return (
    <div className="shipping-container">
      <div className="shipping-header">
        <h1>Shipping Dashboard</h1>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Search shipments..." 
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

      <div className="metrics-overview">
        {overviewCards.map((card, index) => (
          <div className="metric-card" key={index}>
            <div className="metric-icon" style={{ backgroundColor: `${card.color}15` }}>
              {React.cloneElement(card.icon, { color: card.color })}
            </div>
            <div className="metric-info">
              <h3>{card.title}</h3>
              <span className="metric-value">{card.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="analytics-section">
        <div className="chart-container delivery-performance">
          <h2>Delivery Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={deliveryPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="onTime" stroke={COLORS[0]} name="On Time" />
              <Line type="monotone" dataKey="delayed" stroke={COLORS[2]} name="Delayed" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="chart-container carrier-performance">
          <h2>Carrier Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={carrierPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="carrier" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="deliveries" fill={COLORS[0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="shipments-table-container">
        <h2>Active Shipments</h2>
        <table className="shipments-table">
          <thead>
            <tr>
              <th>Tracking ID</th>
              <th>Order ID</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Carrier</th>
              <th>ETA</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.tracking}>
                <td>{shipment.tracking}</td>
                <td>{shipment.orderId}</td>
                <td>{shipment.destination}</td>
                <td>
                  <span className={`status-badge ${shipment.status.toLowerCase().replace(' ', '-')}`}>
                    {shipment.status}
                  </span>
                </td>
                <td>{shipment.carrier}</td>
                <td>{shipment.eta}</td>
                <td>
                  <span className={`priority-badge ${shipment.priority.toLowerCase()}`}>
                    {shipment.priority}
                  </span>
                </td>
                <td>
                  <button className="action-btn">Track</button>
                  <button className="action-btn">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shipping;