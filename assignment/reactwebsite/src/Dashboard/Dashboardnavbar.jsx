
import React, { useState } from 'react';
import { Bell, Globe, Search, ChevronDown, User, Wallet, Settings, Lock, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import pp3 from './pics/pp3.jpg'
import usflag from './pics/Screenshot 2025-02-12 152933.png'
import germanflag from './pics/Screenshot 2025-02-12 164728.png'
import italianflag from './pics/Screenshot 2025-02-12 164919.png'
import frenchflag from './pics/Screenshot 2025-02-12 165053.png'
import spanishflag from './pics/Screenshot 2025-02-13 091419.png'
import './dashboard-styles/dashboardnavbar.css';

const DashboardNavbar = ({ toggleSidebar, isSidebarOpen }) => {
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

    // Handle clicking outside to close dropdowns
    const handleClickOutside = (e, setter) => {
        if (!e.target.closest('.notification-container, .profile-container, .language-selector')) {
            setter(false);
        }
    };

    React.useEffect(() => {
        const handleDocumentClick = (e) => {
            handleClickOutside(e, setShowNotifications);
            handleClickOutside(e, setShowProfile);
            handleClickOutside(e, setShowLanguages);
        };

        document.addEventListener('click', handleDocumentClick);
        return () => document.removeEventListener('click', handleDocumentClick);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/Home" className="logo-container">
                    <h1 className="logo-text">Botigo</h1>
                </Link>

                <div className="search-container">
                    <Search className="search-icon" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="search-input"
                    />
                </div>
            </div>

            <div className="navbar-right">
                <div className="language-selector">
                    <div 
                        className="selected-language"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowLanguages(!showLanguages);
                        }}
                    >
                        <img 
                            src={selectedLanguage.flagUrl} 
                            alt={`${selectedLanguage.name} Flag`} 
                            className="flag-icon" 
                        />
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
                                    <img 
                                        src={lang.flagUrl} 
                                        alt={`${lang.name} Flag`} 
                                        className="flag-icon" 
                                    />
                                    <span>{lang.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="profile-container">
                    <button 
                        className="profile-button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowProfile(!showProfile);
                            setShowNotifications(false);
                            setShowLanguages(false);
                        }}
                    >
                        <img 
                            src={pp3}// Update this path
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
                                    <User size={16} />
                                    <span>Profile</span>
                                </a>
                                <a href="#" className="profile-item">
                                    <Wallet size={16} />
                                    <span>My Wallet</span>
                                </a>
                                <a href="#" className="profile-item">
                                    <Settings size={16} />
                                    <span>Settings</span>
                                </a>
                                <a href="#" className="profile-item">
                                    <Lock size={16} />
                                    <span>Lock screen</span>
                                </a>
                                <a href="#" className="profile-item">
                                    <LogOut size={16} />
                                    <span>Logout</span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;