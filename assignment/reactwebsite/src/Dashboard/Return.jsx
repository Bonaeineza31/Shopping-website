import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpDown, Filter, RefreshCcw } from 'lucide-react';
import './dashboard-styles/return.css';

const Return = () => {
  const COLORS = ["#4A90E2", "#7B8AB8", "#A0A6BF", "#C3C8D5", "#6E7F80"];
  
  // ... your existing data constants remain the same ...

  const [sortColumn, setSortColumn] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div className="ret-container">
      {/* Header */}
      <div className="ret-header">
        <h1>Returns Dashboard</h1>
        <div className="ret-header-icons">
          <Filter className="ret-icon" />
          <RefreshCcw className="ret-icon" />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="ret-summary-grid">
        <div className="ret-stat-card">
          <div className="ret-stat-header">
            <h3>Total Returns</h3>
          </div>
          <div className="ret-stat-content">
            <div className="ret-metric" style={{ color: COLORS[0] }}>210</div>
            <p className="ret-metric-subtitle">Last 30 days</p>
          </div>
        </div>
        <div className="ret-stat-card">
          <div className="ret-stat-header">
            <h3>Return Rate</h3>
          </div>
          <div className="ret-stat-content">
            <div className="ret-metric" style={{ color: COLORS[1] }}>4.8%</div>
            <p className="ret-metric-subtitle">vs 5.2% last month</p>
          </div>
        </div>
        <div className="ret-stat-card">
          <div className="ret-stat-header">
            <h3>Return Value</h3>
          </div>
          <div className="ret-stat-content">
            <div className="ret-metric" style={{ color: COLORS[2] }}>$10,500</div>
            <p className="ret-metric-subtitle">Last 30 days</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="ret-charts-grid">
        <div className="ret-chart-card">
          <div className="ret-chart-header">
            <h3>Return Reasons</h3>
          </div>
          <div className="ret-chart-content">
            <PieChart width={400} height={300}>
              <Pie
                data={returnReasons}
                cx={200}
                cy={150}
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {returnReasons.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        <div className="ret-chart-card">
          <div className="ret-chart-header">
            <h3>Monthly Returns</h3>
          </div>
          <div className="ret-chart-content">
            <BarChart width={400} height={300} data={monthlyReturns}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="returns" fill={COLORS[0]} name="Number of Returns" />
              <Bar dataKey="amount" fill={COLORS[1]} name="Return Amount ($)" />
            </BarChart>
          </div>
        </div>
      </div>

      {/* Recent Returns Table */}
      <div className="ret-table-card">
        <div className="ret-table-header">
          <h3>Recent Returns</h3>
        </div>
        <div className="ret-table-content">
          <div className="ret-table-container">
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>
                    <div className="ret-sort-header">
                      Return ID
                      <ArrowUpDown className="ret-sort-icon" />
                    </div>
                  </th>
                  <th onClick={() => handleSort('product')}>
                    <div className="ret-sort-header">
                      Product
                      <ArrowUpDown className="ret-sort-icon" />
                    </div>
                  </th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th onClick={() => handleSort('date')}>
                    <div className="ret-sort-header">
                      Date
                      <ArrowUpDown className="ret-sort-icon" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentReturns.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.product}</td>
                    <td>{item.reason}</td>
                    <td>
                      <span className={`ret-status-badge ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;