import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from './Theme';
import Dashboardnavbar from './Dashboardnavbar';
import Sidebar from './Sidebar';
import './dashboard-styles/dashboardlayout.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { isDarkMode } = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    // This div will affect the entire application
    <div className={`app-wrapper ${isDarkMode ? 'dark' : ''}`}>
      <div className="dashboard-wrapper">
        <Dashboardnavbar onToggle={toggleSidebar} />
        <div className="dashboard-container">
          <Sidebar isOpen={sidebarOpen} />
          <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;