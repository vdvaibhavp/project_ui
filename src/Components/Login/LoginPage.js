import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';

function LoginPage({ onLogin, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const sessionToken = 'my token';
    onLogin(sessionToken);
  };

  return (
    <div className="container">
      <Navbar showLogoutButton={isAuthenticated}/>
      <br></br>
      <h1 className="mb-4">Login To t3 AutomationEdge</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
