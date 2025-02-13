import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboardnavbar from '../Dashboard/Dashboardnavbar';
import Sidebar from '../Dashboard/Sidebar';

const Dashboardlayout = () => {
  const [SidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!SidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <Dashboardnavbar toggleSidebar={toggleSidebar} isSidebarOpen={SidebarOpen} />
      <Sidebar isOpen={SidebarOpen} />
      <main className={`dashboard-content ${SidebarOpen ? 'Sidebar-open' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboardlayout;