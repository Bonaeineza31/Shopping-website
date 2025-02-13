import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { Users, Clock, TrendingUp, Target } from 'lucide-react';
import './dashboard-styles/dashboardview.css'

// Sample data
const visitData = [
  { time: '00:00', newVisits: 30, uniqueVisits: 45 },
  { time: '03:00', newVisits: 45, uniqueVisits: 60 },
  { time: '06:00', newVisits: 75, uniqueVisits: 90 },
  { time: '09:00', newVisits: 85, uniqueVisits: 120 },
  { time: '12:00', newVisits: 120, uniqueVisits: 180 },
  { time: '15:00', newVisits: 180, uniqueVisits: 220 },
  { time: '18:00', newVisits: 150, uniqueVisits: 200 },
  { time: '21:00', newVisits: 100, uniqueVisits: 150 },
];

const deviceData = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 20 },
];

const channelData = [
  { name: 'Email', value: 1200 },
  { name: 'Referral', value: 2100 },
  { name: 'Organic', value: 1500 },
  { name: 'Direct', value: 1800 },
  { name: 'Campaign', value: 2400 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const DashboardView = () => {
  return (
    <div className="dashboard-wrapper">
      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Sessions</p>
              <h3 className="metric-value">24k</h3>
              <p className="metric-change positive">↑ 8.5% New Sessions Today</p>
            </div>
            <Users className="metric-icon" />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Avg. Sessions</p>
              <h3 className="metric-value">00:18</h3>
              <p className="metric-change positive">↑ 1.5% Weekly Avg.</p>
            </div>
            <Clock className="metric-icon" />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Bounce Rate</p>
              <h3 className="metric-value">$2400</h3>
              <p className="metric-change negative">↓ 35% Weekly Rate</p>
            </div>
            <TrendingUp className="metric-icon" />
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-content">
            <div className="metric-info">
              <p className="metric-label">Goal Completions</p>
              <h3 className="metric-value">85000</h3>
              <p className="metric-change positive">↑ 10.5% Weekly</p>
            </div>
            <Target className="metric-icon" />
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Audience Overview */}
        <div className="chart-card">
          <h3 className="chart-title">Audience Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="newVisits" stroke="#8884d8" name="New Visits" />
              <Line type="monotone" dataKey="uniqueVisits" stroke="#82ca9d" name="Unique Visits" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sessions by Device */}
        <div className="chart-card">
          <h3 className="chart-title">Sessions by Device</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Sessions by Channel */}
        <div className="chart-card">
          <h3 className="chart-title">Sessions by Channel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8">
                {channelData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;