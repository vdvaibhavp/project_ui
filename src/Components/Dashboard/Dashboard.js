import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
function Dashboard({ onLogout }) {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button type="button" className="btn btn-primary" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
