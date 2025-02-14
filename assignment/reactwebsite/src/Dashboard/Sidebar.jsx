
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import newproduct from './Newproduct';
import { useTheme } from './Theme';

import {
  Home,
  ShoppingCart,
  Mail,
  Settings,
  Package,
  Heart,
  CheckSquare,
  MessageSquare,
  FileText,
  User,
  Store,
  BarChart2,
  DollarSign,
  Users,
  Bell,
  Shield,
  Box,
  Truck,
  Eye,
  EyeOff,
  Sun,
  Moon,
  RefreshCw,
  LogIn,
  Key,
  Camera,
  CreditCard,
  HelpCircle,
  Languages,
  Bell as BellIcon
} from 'lucide-react';
import '../Dashboard/dashboard-styles/sidebar.css';

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  //   document.body.classList.toggle('dark-mode');
  // };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  if (isSidebarHidden) {
    return (
      <button
        className="show-sidebar-button"
        onClick={() => setIsSidebarHidden(false)}
        aria-label="Show Sidebar"
      >
        <Eye className="sidebar-icon" size={16} />
      </button>
    );
  }

  return (
    <aside className={`sidebar ${isDarkMode ? 'dark' : ''}`}>
      <div className="sidebar-header">
        <h2>Navigation</h2>
      </div>

      <nav className="sidebar-nav">
        {/* Dashboard */}
        <a href="/dashboard" className="nav-item">
          <Home size={24} />
          <span>Dashboard</span>
        </a>

        {/* Store Management */}
        <div
          className={`nav-item ${activeMenu === 'store' ? 'active' : ''}`}
          onClick={() => handleMenuClick('store')}
        >
          <Store size={24} />
          <span>Store Management</span>
        </div>
        {activeMenu === 'store' && (
          <div className="nav-submenu">
            <Link to="/newproduct" className="submenu-item">
              <Package size={20} />
              Products
            </Link>
            <a href="/inventory" className="submenu-item">
              <Box size={20} />
              <span>Inventory</span>
            </a>
            <a href="/categories" className="submenu-item">
              <RefreshCw size={20} />
              <span>Categories</span>
            </a>
          </div>
        )}

        {/* Orders & Shipping */}
        <div
          className={`nav-item ${activeMenu === 'orders' ? 'active' : ''}`}
          onClick={() => handleMenuClick('orders')}
        >
          <ShoppingCart size={24} />
          <span>Orders & Shipping</span>
        </div>
        {activeMenu === 'orders' && (
          <div className="nav-submenu">
            <a href="/order" className="submenu-item">
              <CheckSquare size={20} />
              <span>All Orders</span>
            </a>
            <a href="/shipping" className="submenu-item">
              <Truck size={20} />
              <span>Shipping</span>
            </a>
            <a href="/returns" className="submenu-item">
              <RefreshCw size={20} />
              <span>Returns</span>
            </a>
          </div>
        )}

        {/* Customer Management */}
        <div
          className={`nav-item ${activeMenu === 'customers' ? 'active' : ''}`}
          onClick={() => handleMenuClick('customers')}
        >
          <Users size={24} />
          <span>Customers</span>
        </div>
        {activeMenu === 'customers' && (
          <div className="nav-submenu">
            <a href="/customer-list" className="submenu-item">
              <User size={20} />
              <span>Customer List</span>
            </a>
            <a href="/reviews" className="submenu-item">
              <MessageSquare size={20} />
              <span>Reviews</span>
            </a>
            <a href="/wishlist" className="submenu-item">
              <Heart size={20} />
              <span>Wishlists</span>
            </a>
          </div>
        )}

        {/* Analytics */}
        <div
          className={`nav-item ${activeMenu === 'analytics' ? 'active' : ''}`}
          onClick={() => handleMenuClick('analytics')}
        >
          <BarChart2 size={24} />
          <span>Analytics</span>
        </div>
        {activeMenu === 'analytics' && (
          <div className="nav-submenu">
            <a href="/sales" className="submenu-item">
              <DollarSign size={20} />
              <span>Sales Analytics</span>
            </a>
            <a href="/traffic" className="submenu-item">
              <Users size={20} />
              <span>Traffic</span>
            </a>
            <a href="/reports" className="submenu-item">
              <FileText size={20} />
              <span>Reports</span>
            </a>
          </div>
        )}

        {/* Communications */}
        <div
          className={`nav-item ${activeMenu === 'communications' ? 'active' : ''}`}
          onClick={() => handleMenuClick('communications')}
        >
          <Mail size={24} />
          <span>Communications</span>
        </div>
        {activeMenu === 'communications' && (
          <div className="nav-submenu">
            <a href="/messages" className="submenu-item">
              <MessageSquare size={20} />
              <span>Messages</span>
            </a>
            <a href="/notifications" className="submenu-item">
              <Bell size={20} />
              <span>Notifications</span>
            </a>
          </div>
        )}

        {/* Settings */}
        <div
          className={`nav-item ${activeMenu === 'settings' ? 'active' : ''}`}
          onClick={() => handleMenuClick('settings')}
        >
          <Settings size={24} />
          <span>Settings</span>
        </div>
        {activeMenu === 'settings' && (
          <div className="nav-submenu">
            <a href="/profile" className="submenu-item">
              <User size={20} />
              <span>Profile Settings</span>
            </a>
            <a href="/login" className="submenu-item">
              <LogIn size={20} />
              <span>Login/Register</span>
            </a>
            <a href="/password" className="submenu-item">
              <Key size={20} />
              <span>Change Password</span>
            </a>
            <a href="/avatar" className="submenu-item">
              <Camera size={20} />
              <span>Avatar Settings</span>
            </a>
            <a href="/billing" className="submenu-item">
              <CreditCard size={20} />
              <span>Billing Settings</span>
            </a>
            <a href="/notifications" className="submenu-item">
              <BellIcon size={20} />
              <span>Notification Settings</span>
            </a>
            <a href="/language" className="submenu-item">
              <Languages size={20} />
              <span>Language Settings</span>
            </a>
            <a href="/help" className="submenu-item">
              <HelpCircle size={20} />
              <span>Help & Support</span>
            </a>
          </div>
        )}

        <a href="/security" className="nav-item">
          <Shield size={24} />
          <span>Security</span>
        </a>
      </nav>

      <div className="sidebar-footer">
      <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        
        <button 
          className="hide-sidebar-toggle"
          onClick={() => setIsSidebarHidden(true)}
          aria-label="Hide Sidebar"
        >
          <EyeOff className="sidebar-icon" size={16} />
          <span>Hide Sidebar</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;