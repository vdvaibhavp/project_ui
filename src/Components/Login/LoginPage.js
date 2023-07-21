import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import footer from '../Footer/Footer';
import axios from 'axios';
import Footer from '../Footer/Footer';
import robot from './Robot.jpeg';

function LoginPage({ onLogin, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //set timeout Id
  const [timeId, SetTimeId] = useState(null);

  // const runLogoutTimer = () => {
  //   const timer = setTimeout(() => {
  //     console.log("Timer Initiated");
  //     localStorage.removeItem('sessionToken')
  //     alert("Session Expired!! Please Login Again.")
  //     window.location.reload(); 
  //   }, 500000);
  //   SetTimeId(timeId);
  // };

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

        const timer = setTimeout(() => {
          console.log("Timer Initiated");
          localStorage.removeItem('sessionToken')
          alert("Session Expired!! Please Login Again.")
          window.location.reload(); 
        }, 500000);
        
        onLogin(sessionToken, timer);
    })
    .catch(error => {
      console.error(error);
      alert("Re-enter the credentials correctly.");
    });

  };

  return (
    <>
    <Navbar showLogoutButton={isAuthenticated}/>
    <div className="container" >
    
      <div class='Main-body'>
        <div class='robo-image mt-3'>
        <img src={robot} width="220px" id="robo" height="200px" margin="auto" />
        </div>
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
        
        <button type="submit" className="btn btn-primary login-btn">Login</button>
      </form>
      </div>
      
      <Footer/>
    </div>
    </>
  );
}

export default LoginPage;
