import React from 'react';
import "../styles/Login.css"; // Make sure this path points to your CSS file

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action="#" method="post">
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
