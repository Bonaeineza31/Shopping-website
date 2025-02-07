import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = ({ onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    isCustomer: true
  });
  
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.username.trim()) {
      localStorage.setItem("loggedInUser", loginData.username);
      onClose();
      navigate("/");
      window.location.reload();
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', registerData);
    onClose();
  };

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, type, checked, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCloseModal = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleCloseModal}>
          &times;
        </button>
        
        <div className="auth-container">
          <h2 className="auth-title">{isLoginView ? 'Login' : 'Register'}</h2>

          {isLoginView ? (
            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username or phone number"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    onChange={handleLoginChange}
                  />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="submit-button">Login</button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="auth-form">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                />
              </div>

              <div className="user-type">
                <label>
                  <input
                    type="radio"
                    name="isCustomer"
                    checked={registerData.isCustomer}
                    onChange={() => setRegisterData(prev => ({ ...prev, isCustomer: true }))}
                  />
                  <span>I am a customer</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="isCustomer"
                    checked={!registerData.isCustomer}
                    onChange={() => setRegisterData(prev => ({ ...prev, isCustomer: false }))}
                  />
                  <span>I am a vendor</span>
                </label>
              </div>

              <button type="submit" className="submit-button">Register</button>
            </form>
          )}

          <div className="switch-view">
            <p>
              {isLoginView ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                className="switch-button"
                onClick={() => setIsLoginView(!isLoginView)}
              >
                {isLoginView ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;