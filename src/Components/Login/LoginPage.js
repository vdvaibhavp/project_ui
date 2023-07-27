import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import robot from './Robot.jpeg';
import './LoginPage.css';

const LoginPage = ({ onLogin, isAuthenticated }) => {

  // Initialize the react-hook-form
  const { control, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
    try {
      const response = await axios.get('/authenticate', {
        params: {
          username: data.username,
          password: data.password,
        },
      });

      const sessionToken = response.data.sessionToken;
      localStorage.setItem('fname', response.data.userFirstName);
      localStorage.setItem('lname', response.data.userLastName);

      const timer = setTimeout(() => {
        console.log("Timer Initiated");
        localStorage.removeItem('sessionToken');
        alert("Session Expired!! Please Login Again.");
        window.location.reload();
      }, 30000);

      onLogin(sessionToken, timer);
    } catch (error) {
      console.log('Authentication failed:', error.response.status, error.response);

      alert("Re enter the credentials");
      // Handle authentication failure here, e.g., show an error message to the user
    }
  };

  return (
    <>
      <Navbar showLogoutButton={isAuthenticated} />
      <div className="container">
        <div className='Main-body'>
          <div className='robo-image'>
            <img src={robot} width="220px" id="robo" height="200px" margin="auto" alt="Robot" />
          </div>
          <h1 className="mb-4">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-group">
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    id="username"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    {...field}
                    placeholder='Enter Username'
                  />
                )}
                rules={{ required: 'Please enter a username.' }}
              />
              {/* Display error message if the username field is invalid */}
              {errors.username && (
                <div className="invalid-feedback">{errors.username.message}</div>
              )}
            </div>

            <div className="form-group">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    {...field}
                    placeholder="Enter Password"
                  />
                )}
                rules={{
                  required: 'Please enter a password.',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&]).{6,20}$/,
                    message: 'Password must be 6 to 20 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one of the allowed special characters: !@#$&',
                  
                  },
                }}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>


            <button type="submit" className="btn btn-primary login-btn">Login</button>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
