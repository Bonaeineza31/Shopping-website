// Account.jsx
import React, { useState } from 'react';
import '../styles/account.css'

const Account = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const [registerData, setRegisterData] = useState({
    email: '',
    isCustomer: true
  });

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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', registerData);
  };

  return (
    <div className="account-wrapper">
      <div className="account-container">
        {/* Login Form */}
        <div className="form-section">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>
                Username
                <span className="required">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Email address
                <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Password
                <span className="required">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>

            <div className="remember-me">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                />
                Remember me
              </label>
            </div>

            <button type="submit">LOG IN</button>

            <div className="lost-password">
              <a href="#">Lost your password?</a>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-section">
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label>
                Email address
                <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
            </div>

            <p className="register-info">
              A link to set a new password will be sent to your email address.
            </p>

            <div className="user-type">
              <label>
                <input
                  type="radio"
                  name="isCustomer"
                  checked={registerData.isCustomer}
                  onChange={() => setRegisterData(prev => ({ ...prev, isCustomer: true }))}
                />
                I am a customer
              </label>
              <label>
                <input
                  type="radio"
                  name="isCustomer"
                  checked={!registerData.isCustomer}
                  onChange={() => setRegisterData(prev => ({ ...prev, isCustomer: false }))}
                />
                I am a vendor
              </label>
            </div>

            <button type="submit">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;