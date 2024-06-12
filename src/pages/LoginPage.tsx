// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppleLogo from '../assets/Apple Logo White.png';
import '../App.css'; // or make a LoginPage.css later
import type { Employee } from '../types/employee';

// temp hard-coded employee for now
const employee: Employee = {
  firstName: 'Micheal',
  lastName: 'Egboh',
  email: 'micheal.egboh@apple.com',
  password: 'password123',
  position: 'Software Engineer',
  department: 'Engineering',
  hourlyWage: 45,
  location: 'Cupertino, CA',
  region: 'AMR – United States',
  employeeId: '123456',
  hireDate: 'January 15, 2020',
};

const LoginPage: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState(''); //Storing the email input and alike 
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Used for navigation between routes

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Default form refreshes page, this prevents that from happening 

    if (loginEmail === employee.email && loginPassword === employee.password) {
    setLoginError('');

    //This saves the login state like browser cache
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('employee', JSON.stringify(employee));

      navigate('/dashboard');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={AppleLogo} alt="Apple Logo" className="login-logo" />
        <h1>Apple Employee Portal</h1>
        <p className="login-subtitle">
          Sign in to view your pay and profile information.
        </p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-input-group">
            <label htmlFor="email">Work Email</label>
            <input
              id="email"
              type="email"
              className="login-input"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="you@apple.com"
              required
            />
          </div>

          <div className="login-input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="login-input"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {loginError && <p className="login-error">{loginError}</p>}

          <button type="submit" className="login-button">
            Sign In
          </button>

          <p className="login-disclaimer">
            This is a demo experience and is not affiliated with Apple Inc.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
