import React from 'react';
import './signup.css'; // Ensure your CSS is linked

function Signup() {
  return (
    <div className="container">
      <header>
        <p>Your gateway to creativity and craftsmanship</p>
      </header>
      <main>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <p>Choose your role:</p>
          <div class="role-selection">
            <label>
              <input type="radio" name="role" value="user" checked="" onchange="toggleFields()"/> Customer
            </label>
            <label>
              <input type="radio" name="role" value="artisan" onchange="toggleFields()"/> Artisan
            </label>
          </div>
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <p>
            Already have an account?{' '}
            <a href="/login">
              <strong>Log In</strong>
            </a>
          </p>
            <button type="submit">Sign Up</button>
          </form> 
        </div>
      </main>
    </div>
  );
}

export default Signup;
