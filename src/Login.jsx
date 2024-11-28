import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Simulate login logic here (e.g., validate credentials)
    // After successful login, redirect to the front page
    navigate('/');
  };

  return (
    <div className="container">
      <header>
        <p>Your gateway to creativity and craftsmanship</p>
      </header>
      <main>
        <div className="signup-form">
          <h2>Log In</h2>
          <p>Choose your role:</p>
          <div className="role-selection">
            <label>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={handleRoleChange}
              />{' '}
              Customer
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="artisan"
                checked={role === 'artisan'}
                onChange={handleRoleChange}
              />{' '}
              Artisan
            </label>
          </div>
          <form onSubmit={handleLogin}>
            {role === 'user' && (
              <div id="user-fields">
                <label htmlFor="customerID">Customer ID</label>
                <input
                  type="text"
                  id="customerID"
                  name="customerID"
                  placeholder="Enter your customer ID"
                  required
                />

                <label htmlFor="customerPassword">Password</label>
                <input
                  type="password"
                  id="customerPassword"
                  name="customerPassword"
                  placeholder="Enter your password"
                  required
                />
              </div>
            )}

            {role === 'artisan' && (
              <div id="artisan-fields">
                <label htmlFor="artisanID">Artisan ID</label>
                <input
                  type="text"
                  id="artisanID"
                  name="artisanID"
                  placeholder="Enter your artisan ID"
                  required
                />

                <label htmlFor="artisanPassword">Password</label>
                <input
                  type="password"
                  id="artisanPassword"
                  name="artisanPassword"
                  placeholder="Enter your password"
                  required
                />
              </div>
            )}
            <p>
              New Account?{' '}
              <a href="/signup">
                <strong>Sign up</strong>
              </a>
            </p>
            <button type="submit">Log in</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
