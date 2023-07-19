import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import footer from '../Footer/Footer';
import axios from 'axios';
import Footer from '../Footer/Footer';

function LoginPage({ onLogin, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //set timeout Id
  const [timeId, SetTimeId] = useState(null);

  const runLogoutTimer = () => {
    const timer = setTimeout(() => {
      console.log("Timer Initiated");
      localStorage.removeItem('sessionToken')
      alert("Session Expired!! Please Login Again.")
      window.location.reload(); 
    }, 500000);
    SetTimeId(timeId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get('/authenticate', {
      params: {
        username: username,
        password: password,
      },
    })
    .then(response => {
        const sessionToken = response.data.sessionToken;
        localStorage.setItem('fname', response.data.userFirstName);
        localStorage.setItem('lname', response.data.userLastName); 
        runLogoutTimer();
        onLogin(sessionToken, timeId);
    })
    .catch(error => {
      console.error(error);
      alert("Re-enter the credentials correctly.");
    });

  };

  return (
    <div className="container">
      <Navbar showLogoutButton={isAuthenticated}/>
      <div class='Main-body'>
      <h1 className="mb-4">Login To t3 AutomationEdge</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Username'
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      </div>
      
      <Footer/>
    </div>
  );
}

export default LoginPage;
