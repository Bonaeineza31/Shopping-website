import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboardnavbar from '../Dashboard/Dashboardnavbar';
import Sidebar from '../Dashboard/Sidebar';

const Dashboardlayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-wrapper">
      <Dashboardnavbar onToggle={toggleSidebar} />
      <div className="dashboard-container">
        <Sidebar isOpen={sidebarOpen} />
        <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboardlayout;