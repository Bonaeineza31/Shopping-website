import React, { useState } from 'react';
import {
  Home,
  ShoppingCart,
  Mail,
  Settings,
  Headphones,
  Package,
  Heart,
  CheckSquare,
  MessageSquare,
  Calendar,
  FileText,
  User,
  Key,
  LogIn,
  Sun,
  Moon
} from 'lucide-react';
import './dashboard-styles/sidebar.css';

const Sidebar = ({ isOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <aside className={`sidebar ${darkMode ? 'dark' : ''} ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <a href="/dashboard" className="nav-item">
          <Home size={20} />
          <span>Dashboard</span>
        </a>
        
        <div 
          className={`nav-item ${activeMenu === 'ecommerce' ? 'active' : ''}`}
          onClick={() => handleMenuClick('ecommerce')}
        >
          <ShoppingCart size={20} />
          <span>Ecommerce</span>
        </div>
        {activeMenu === 'ecommerce' && (
          <div className="nav-submenu">
            <a href="/products" className="submenu-item">
              <Package size={18} />
              <span>Products</span>
            </a>
            <a href="/orders" className="submenu-item">
              <CheckSquare size={18} />
              <span>Orders</span>
            </a>
            <a href="/wishlist" className="submenu-item">
              <Heart size={18} />
              <span>Wishlist</span>
            </a>
          </div>
        )}

        <div 
          className={`nav-item ${activeMenu === 'app' ? 'active' : ''}`}
          onClick={() => handleMenuClick('app')}
        >
          <Mail size={20} />
          <span>App</span>
        </div>
        {activeMenu === 'app' && (
          <div className="nav-submenu">
            <a href="/messages" className="submenu-item">
              <MessageSquare size={18} />
              <span>Messages</span>
            </a>
            <a href="/calendar" className="submenu-item">
              <Calendar size={18} />
              <span>Calendar</span>
            </a>
            <a href="/files" className="submenu-item">
              <FileText size={18} />
              <span>Files</span>
            </a>
          </div>
        )}

        <a href="/support" className="nav-item">
          <Headphones size={20} />
          <span>Support</span>
        </a>
      </nav>

      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </aside>
  );
};

export default Sidebar;