import React, { useState } from 'react';
import { Bell, Globe, Search, ChevronDown, User, Wallet, Settings, Lock, LogOut,  X}  from 'lucide-react';
import usflag from './pics/Screenshot 2025-02-12 152933.png'
import pp3 from './pics/pp3.jpg'
import './dashboard-styles/dashboardnavbar.css'
import { IoReorderThree } from "react-icons/io5";
import {Link} from 'react-router-dom'
import germanflag from './pics/Screenshot 2025-02-12 164728.png'
import italianflag from './pics/Screenshot 2025-02-12 164919.png'
import frenchflag from './pics/Screenshot 2025-02-12 165053.png'
import spanishflag from './pics/Screenshot 2025-02-13 091419.png'



const Dashboardnavbar = ({ toggleSidebar, isSidebarOpen }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({ 
        name: 'English', 
        flagUrl: usflag 
    });
    
    const languages = [
        { name: 'English', flagUrl: usflag },
        { name: 'German', flagUrl: germanflag },
        { name: 'Italian', flagUrl: italianflag },
        { name: 'French', flagUrl: frenchflag },
        { name: 'Spanish', flagUrl: spanishflag }
    ];

  return (
    <nav className="navbar">
      <div className="navbar-left">

      <Link to="/Home">
     <h1 className="logo-text">Botigo</h1>
      </Link>

        {/* <button 
          className="menu-toggle"
          onClick={toggleSidebar}  
        >
          {isSidebarOpen ? <IoReorderThree size={24} /> : <Menu size={24} />}
        </button> */}

        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          <Search className="search-icon" size={20} />
        </div>
      </div>

      <div className="navbar-right">
        <div className="language-selector">
          <div 
            className="selected-language"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            <img src={selectedLanguage.flagUrl} alt={`${selectedLanguage.name} Flag`} className="flag-icon" />
            <span>{selectedLanguage.name}</span>
            <ChevronDown size={16} />
          </div>
          {showLanguages && (
            <div className="language-dropdown">
              {languages.map((lang) => (
                                <div
                                    key={lang.name}
                                    className="language-option"
                                    onClick={() => {
                                        setSelectedLanguage(lang);
                                        setShowLanguages(false);
                                    }}
                                >
                                    <img src={lang.flagUrl} alt={`${lang.name} Flag`} className="flag-icon" />
                                    <span>{lang.name}</span>
                                </div>
                            ))}
            </div>
          )}
        </div>

        <div className="notification-container">
          <button 
            className="notification-button"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} />
            <span className="notification-badge">2</span>
          </button>
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                                <span>Notifications</span>
                                <span className="badge">2</span>
                            </div>
                            <div className="notification-list">
                                <div className="notification-item">
                                    <div className="notification-icon blue">
                                        <span className="icon">🛒</span>
                                    </div>
                                    <div className="notification-content">
                                        <p>Your order is placed</p>
                                        <span className="time">2 min ago</span>
                                        <p className="description">Dummy text of the printing a...</p>
                                    </div>
                                </div>
                                <div className="notification-item">
                                    <div className="notification-icon green">
                                        <span className="icon">👥</span>
                                    </div>
                                    <div className="notification-content">
                                        <p>Meeting with designers</p>
                                        <span className="time">10 min ago</span>
                                        <p className="description">It is a long established fact ...</p>
                                    </div>
                                </div>
                                <div className="notification-item">
                                    <div className="notification-icon pink">
                                        <span className="icon">✓</span>
                                    </div>
                                    <div className="notification-content">
                                        <p>UX 3 Task complete</p>
                                        <span className="time">40 min ago</span>
                                        <p className="description">Dummy text of the printing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="notification-footer">
                                <a href="#" className="view-all">View all</a>
                            </div>
            </div>
          )}
        </div>

        <div className="profile-container">
          <button 
            className="profile-button"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img 
              src={pp3}
              alt="Profile" 
              className="profile-image"
            />
            <span className="profile-name">Amelia</span>
            <ChevronDown size={16} />
          </button>
          {showProfile && (
            <div className="profile-dropdown">
               <div className="profile-header">
                                <img src={pp3} alt="Profile" />
                                <div className="profile-info">
                                    <h4>Amelia</h4>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                            <div className="profile-menu">
                                <a href="#" className="profile-item">
                                    <span className="icon">👤</span>
                                    Profile
                                </a>
                                <a href="#" className="profile-item">
                                    <span className="icon">💰</span>
                                    My Wallet
                                </a>
                                <a href="#" className="profile-item">
                                    <span className="icon">⚙️</span>
                                    Settings
                                </a>
                                <a href="#" className="profile-item">
                                    <span className="icon">🔒</span>
                                    Lock screen
                                </a>
                                <a href="#" className="profile-item">
                                    <span className="icon">🚪</span>
                                    Logout
                                </a>
                            </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Dashboardnavbar;