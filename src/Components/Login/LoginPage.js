import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import logins from './LoginSide.jpg';
import Footer from '../Footer/Footer';
import './LoginPage.css';
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie';

function LoginPage({ onLogin, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(["user"]);
  
   const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get('/authenticate', {
      params: {
        username: username,
        password: password,
      },
    })
      .then(response => {
        console.log(response)
        const sessionToken = response.data.sessionToken;
        // localStorage.setItem('fname', response.data.userFirstName);
        // localStorage.setItem('lname', response.data.userLastName);
        setCookie("fname", response.data.userFirstName, { path: "/" });
        setCookie("lname", response.data.userLastName, { path: "/" });
        setCookie("registerid",response.data.registerid, {path: "/" });
        //setCookie("sessionToken",response.data.sessionToken,{ path: "/" });
        // setCookie("sessionToken", sessionToken, { path: "/" });
        //setCookies("tenantInfo", JSON.stringify(response.data.tenant));
        //localStorage.setItem('tenantInfo', JSON.stringify(response.data.tenant));
        setCookie("tenantInfo",response.data.tenant,{ path: "/" });


        const timer = setTimeout(() => {
          Cookies.remove('sessionToken')
          alert("Session Expired!! Please Login Again.")
          window.location.reload(); 
        }, 300000);
        onLogin(sessionToken, timer);
       
    })
    .catch(error => {
      alert("False Credential! Re-enter the credentials correctly.");
    });
  };

  return (
    <>
       <div className='login-container bg-image rounded mx-auto d-block'>
      
      <Navbar showLogoutButton={false} />

      <div className="container pt-4">
        <div className="row rounded mt-5">
          <div className="col-12 col-md-6 border-white">
            <form style={{ width: '400px' }} onSubmit={handleSubmit}>
              <h1 className="mb-4 pt-5 text-white align-center">Login To VDX Recon</h1>
              <div className="form-group">
                <label className='text-white' htmlFor="username">Username</label>
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
              <br />
              <div className="mb-5">
                <button type="submit" className="btn btn-primary border border-dark me-3">Login</button>
                <button className="btn btn-primary border border-dark">Sign Up</button>

              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <img className="img-fluid rounded mt-4 pt-3" src={logins} style={{ width: '80%', height: '80%' }} alt="Login" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default LoginPage;
