import React, { useState } from 'react';
import { Bell, Check, X, AlertCircle, Info, CheckCircle, Clock } from 'lucide-react';
import './dashboard-styles/notification.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'alert',
      title: 'System Update',
      message: 'System maintenance scheduled for 10:00 PM tonight',
      time: '2 hours ago',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Feature Available',
      message: 'Check out our new messaging interface with improved search capabilities',
      time: '3 hours ago',
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'success',
      title: 'Task Completed',
      message: 'Weekly report generation completed successfully',
      time: '5 hours ago',
      read: true,
      priority: 'low'
    },
    {
      id: 4,
      type: 'pending',
      title: 'Awaiting Approval',
      message: 'New user registration requires your approval',
      time: '1 day ago',
      read: true,
      priority: 'medium'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case 'alert':
        return <AlertCircle className="notification-icon alert" />;
      case 'info':
        return <Info className="notification-icon info" />;
      case 'success':
        return <CheckCircle className="notification-icon success" />;
      case 'pending':
        return <Clock className="notification-icon pending" />;
      default:
        return <Info className="notification-icon info" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (showUnreadOnly && notif.read) return false;
    if (filter === 'all') return true;
    return notif.priority === filter;
  });

  return (
    <div className="notification-container">
      <div className="notification-header">
        <div className="notification-title">
          <Bell className="bell-icon" />
          <h2>Notifications</h2>
          <span className="notification-count">
            {notifications.filter(n => !n.read).length}
          </span>
        </div>
        <div className="notification-actions">
          <button className="mark-all-read" onClick={markAllAsRead}>
            <Check className="check-icon" />
            Mark all as read
          </button>
        </div>
      </div>

      <div className="notification-filters">
        <select 
          className="priority-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <label className="unread-filter">
          <input
            type="checkbox"
            checked={showUnreadOnly}
            onChange={(e) => setShowUnreadOnly(e.target.checked)}
          />
          Show unread only
        </label>
      </div>

      <div className="notifications-list">
        {filteredNotifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
          >
            <div className="notification-content">
              {getIcon(notification.type)}
              <div className="notification-text">
                <div className="notification-title-row">
                  <h3>{notification.title}</h3>
                  <span className="notification-time">{notification.time}</span>
                </div>
                <p className="notification-message">{notification.message}</p>
                <div className="notification-priority">
                  Priority: <span className={`priority-tag ${notification.priority}`}>
                    {notification.priority}
                  </span>
                </div>
              </div>
            </div>
            <div className="notification-actions">
              {!notification.read && (
                <button 
                  className="mark-read-button"
                  onClick={() => markAsRead(notification.id)}
                >
                  <Check className="action-icon" />
                </button>
              )}
              <button 
                className="delete-button"
                onClick={() => deleteNotification(notification.id)}
              >
                <X className="action-icon" />
              </button>
            </div>
          </div>
        ))}
        {filteredNotifications.length === 0 && (
          <div className="no-notifications">
            <Bell className="empty-icon" />
            <p>No notifications to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;