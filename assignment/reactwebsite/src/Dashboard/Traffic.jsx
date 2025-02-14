import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Globe, Clock } from 'lucide-react';
import './dashboard-styles/traffic.css';

const Traffic = () => {
  const COLORS = ["#4A90E2", "#7B8AB8", "#A0A6BF", "#C3C8D5", "#6E7F80"];

  const trafficData = [
    { date: '2024-02-08', visitors: 1200, pageviews: 3600, sessions: 1500 },
    { date: '2024-02-09', visitors: 1300, pageviews: 3900, sessions: 1600 },
    { date: '2024-02-10', visitors: 1100, pageviews: 3300, sessions: 1400 },
    { date: '2024-02-11', visitors: 1400, pageviews: 4200, sessions: 1700 },
    { date: '2024-02-12', visitors: 1250, pageviews: 3750, sessions: 1550 }
  ];

  const sourceData = [
    { source: 'Direct', visitors: 450, percentage: 30 },
    { source: 'Organic Search', visitors: 600, percentage: 40 },
    { source: 'Social Media', visitors: 300, percentage: 20 },
    { source: 'Referral', visitors: 150, percentage: 10 }
  ];

  return (
    <div className="tr-container">
      <div className="tr-header">
        <h2>Traffic Analytics</h2>
        <div className="tr-header-actions">
          <button className="tr-btn active">Daily</button>
          <button className="tr-btn">Weekly</button>
          <button className="tr-btn">Monthly</button>
        </div>
      </div>

      <div className="tr-metrics-grid">
        <div className="tr-metric-card">
          <Users className="tr-metric-icon" />
          <div>
            <h3>Active Users</h3>
            <div className="tr-metric-value">1,250</div>
            <div className="tr-metric-trend positive">+15% vs last period</div>
          </div>
        </div>

        <div className="tr-metric-card">
          <Globe className="tr-metric-icon" />
          <div>
            <h3>Page Views</h3>
            <div className="tr-metric-value">3,750</div>
            <div className="tr-metric-trend positive">+8% vs last period</div>
          </div>
        </div>

        <div className="tr-metric-card">
          <Clock className="tr-metric-icon" />
          <div>
            <h3>Avg. Session</h3>
            <div className="tr-metric-value">4m 32s</div>
            <div className="tr-metric-trend negative">-2% vs last period</div>
          </div>
        </div>
      </div>

      <div className="tr-charts-grid">
        <div className="tr-chart-card">
          <h3>Traffic Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS[3]} />
              <XAxis dataKey="date" stroke={COLORS[2]} />
              <YAxis stroke={COLORS[2]} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="visitors" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.1} />
              <Area type="monotone" dataKey="pageviews" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="tr-chart-card">
          <h3>Traffic Sources</h3>
          <div className="tr-sources-list">
            {sourceData.map((source, index) => (
              <div key={source.source} className="tr-source-item">
                <div className="tr-source-info">
                  <div className="tr-source-name">{source.source}</div>
                  <div className="tr-source-visitors">{source.visitors} visitors</div>
                </div>
                <div className="tr-source-bar-container">
                  <div 
                    className="tr-source-bar" 
                    style={{ 
                      width: `${source.percentage}%`,
                      backgroundColor: COLORS[index % COLORS.length]
                    }}
                  />
                </div>
                <div className="tr-source-percentage">{source.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Traffic;