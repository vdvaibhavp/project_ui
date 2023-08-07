import React, { useState, useEffect } from 'react';
import LoginPage from './Components/Login/LoginPage';
import Dashboard from './Components/Dashboard/Dashboard';
import Cookies from 'js-cookie';
import { useCookies } from "react-cookie";

function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logoutTimeId, setLogoutTimeId ] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // Function to handle successful login
  const handleLogin = (token , timeId) => {
    setCookie('sessionToken',token); // Store the session token in localStorage
    setSessionToken(token);
    setIsAuthenticated(true);
    setLogoutTimeId(timeId);
  };

  // Function to handle logout
  const handleLogout = () => {
    Cookies.remove('sessionToken');
    Cookies.remove('fname');
    Cookies.remove('lname');
    Cookies.remove('tenantInfo');
    setSessionToken('');
    setIsAuthenticated(false);
    clearTimeout(logoutTimeId);
    
  };

  // Retrieve session token from localStorage on component mount
  useEffect(() => {
    const token = Cookies.get('sessionToken');
    if (token) {
      setSessionToken(token);
      setIsAuthenticated(true);
    }
  }, []);

  // Render login page or dashboard based on sessionToken state
  const renderContent = () => {
    if (sessionToken) {
      // User is logged in, render dashboard
      return <Dashboard isAuthenticated={isAuthenticated} onLogout={handleLogout} />;
    } else {
      // User is not logged in, render login page
      return <LoginPage  isAuthenticated={isAuthenticated} onLogin={handleLogin} />;
    }
  };

  return (
    <div className="App">
      {renderContent()}
    </div>

    
  );
}

export default App;

