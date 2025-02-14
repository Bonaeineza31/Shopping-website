import React, { useState } from 'react';
import { MessageCircle, Trash2, Star, MoreVertical, Send, Search, Filter } from 'lucide-react';
import './dashboard-styles/message.css';

const MessagePanel = ({ children, className }) => (
  <div className={`message-panel ${className || ''}`}>{children}</div>
);

const MessagePanelHeader = ({ children }) => (
  <div className="message-panel-header">{children}</div>
);

const MessagePanelTitle = ({ children, className }) => (
  <div className={`message-panel-title ${className || ''}`}>{children}</div>
);

const MessagePanelContent = ({ children }) => (
  <div className="message-panel-content">{children}</div>
);

const Message = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [replyText, setReplyText] = useState('');

  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      email: 'john@example.com',
      subject: 'Product Inquiry',
      content: 'I have a question about your latest product. Could you please provide more details about its features and specifications? I am particularly interested in knowing if it would suit my needs',
      date: '2025-02-14',
      status: 'unread',
      priority: 'high'
    },
    {
      id: 2,
      sender: 'Sarah Smith',
      email: 'sarah@example.com',
      subject: 'Support Request',
      content: 'Having issues with my recent order #12345. The package arrived damaged and I would like to request a replacement or refund. Please advise on next steps.',
      date: '2025-02-14',
      status: 'read',
      priority: 'medium'
    },
    {
      id: 3,
      sender: 'Mike Johnson',
      email: 'mike@example.com',
      subject: 'Feedback',
      content: 'I wanted to share my experience with your customer service team. They were extremely helpful in resolving my issue quickly and professionally. Great job!',
      date: '2025-02-13',
      status: 'read',
      priority: 'low'
    }
  ];

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  const handleReply = () => {
    if (replyText.trim()) {
      console.log(`Replying to ${selectedMessage.sender}: ${replyText}`);
      setReplyText('');
    }
  };

  const handleDelete = (messageId) => {
    console.log(`Deleting message ${messageId}`);
  };

  const handleStar = (messageId) => {
    console.log(`Starring message ${messageId}`);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="message-dashboard">
      <div className="message-sidebar">
        <div className="search-container">
          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="search-button" onClick={handleSearch}>
            Find
          </button>
        </div>

        <div className="filter-section">
          <Filter className="filter-icon" />
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread</option>
            <option value="high">High Priority</option>
            <option value="read">Read</option>
          </select>
        </div>

        <div className="message-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-item ${message.status} ${selectedMessage?.id === message.id ? 'selected' : ''}`}
              onClick={() => handleMessageSelect(message)}
            >
              <div className="message-header">
                <span className="sender-name">{message.sender}</span>
                <span className="message-date">{message.date}</span>
              </div>
              <div className="message-subject">{message.subject}</div>
              <div className="message-preview">{message.content.substring(0, 50)}...</div>
              <div className="message-actions">
                <Star
                  className={`star-icon ${message.priority === 'high' ? 'starred' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStar(message.id);
                  }}
                />
                <Trash2
                  className="delete-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(message.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="message-content">
        {selectedMessage ? (
          <MessagePanel className="message-detail">
            <MessagePanelHeader>
              <MessagePanelTitle className="message-detail-header">
                <div>
                  <h2>{selectedMessage.subject}</h2>
                  <div className="sender-info">
                    From: {selectedMessage.sender} ({selectedMessage.email})
                  </div>
                </div>
                <MoreVertical className="more-icon" />
              </MessagePanelTitle>
            </MessagePanelHeader>
            <MessagePanelContent>
              <div className="message-body">{selectedMessage.content}</div>
              <div className="reply-section">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply..."
                  className="reply-textarea"
                />
                <button className="send-button" onClick={handleReply}>
                  <Send className="send-icon" />
                  Send Reply
                </button>
              </div>
            </MessagePanelContent>
          </MessagePanel>
        ) : (
          <div className="no-message-selected">
            <MessageCircle className="message-icon" />
            <p>Select a message to view</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;