import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import logins from './LoginSide.jpg';
import loginb from './Login_Background.jpg';
import Image from 'react-bootstrap/Image';

function LoginPage({ onLogin, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const runLogoutTimer = () => {
    const timer = setTimeout(() => {
      console.log("Timer Initiated");
      localStorage.removeItem('sessionToken')
      alert("Session Expired!! Please Login Again.")
      window.location.reload();
    }, 300000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await axios.get('/authenticate', {
    //   params: {
    //     username: username,
    //     password: password,
    //   },
    // })
    // .then(response => {
    const sessionToken = "response.data";
    onLogin(sessionToken);
    runLogoutTimer();
    // })
    // .catch(error => {
    //   console.error(error);
    //   alert("Re-enter the credentials correctly.");
    // });
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

      {/* <Navbar showLogoutButton={isAuthenticated} /> */}
      
      <div class="container pt-5">
        <div class="row rounded mt-5 ">
          <div class="col-6 col-md-6">
            <h1 class="mb-4 pt-5">Login To T3 AutomationEdge</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username" >Username</label>
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

    </>
  );
}

export default LoginPage;
