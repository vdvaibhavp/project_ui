import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import footer from '../Footer/Footer';
import axios from 'axios';
import logins from './LoginSide.jpg';
import loginb from './Login_Background.jpg';

import Footer from '../Footer/Footer';
import robot from './Robot.jpeg';
import './LoginPage.css';

function LoginPage({ onLogin, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      {/* <Navbar showLogoutButton={isAuthenticated} />
      <div className="container pt-5">
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
          <br />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div> */}

      <div className='bg-image rounded mx-auto d-block'>
        <Navbar showLogoutButton={isAuthenticated} />
        <div class="container pt-4">
          <div class="row rounded mt-5 ">
            <div class="col-6 col-md-6  border-white">
              <h1 class="mb-4 pt-5 text-white">Login To T3 AutomationEdge</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className='text-white' htmlFor="username" >Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className='text-white' htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br/>
                <div class="mb-5">
                  <button type="submit" className="btn btn-primary border border-dark">Login</button>
                </div>
              </form>
            </div>
            <div class="col-md-6">
              <img class="img-fluid rounded mt-4 pt-3" src={logins} width="80%" height="60%" />
            </div>
          </div>
        </div>
        <Footer/>
      </div>      
    </>
  );
}

export default LoginPage;
