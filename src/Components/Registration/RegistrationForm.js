//import React from 'react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../Footer/Footer';

function RegistrationForm  ( onLogout, isAuthenticated) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [registrationMessage, setRegistrationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    console.log('Data being sent to the server:', data); // Add this line
    try {
      const response = await fetch('http://localhost:3001/api/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('User data added successfully');
        setRegistrationMessage('Registration Successful');
        reset();

        // Clear the message after 2 seconds
        setTimeout(() => {
          setRegistrationMessage('');
        }, 2000);

      } else {
        console.error('Failed to add user data. Server returned:', response.status);
        setErrorMessage("Please enter another valid Username");

        setTimeout(() => {
          setErrorMessage('');
        }, 2000);

      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <>
      <div class="container mt-3 pt-4">
      <Navbar />
        <div className="container pt-4">
          <div class="row">
            <div class="col">
              <div className="registration-form-container ">
                <form className="registration-form shadow border border-secondary rounded border-2" onSubmit={handleSubmit(onSubmit)}>
                  {/* First Name */}
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      {...register('firstName', { required: true })}
                    />
                    {errors.firstName && <span className="error">This field is required</span>}
                  </div>

                  {/* Last Name */}
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      {...register('lastName', { required: true })}
                    />
                    {errors.lastName && <span className="error">This field is required</span>}
                  </div>

                  {/* Email ID */}
                  <div className="form-group">
                    <label htmlFor="email">Email ID</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      })}
                    />
                    {errors.email && <span className="error">Please enter a valid email</span>}
                  </div>

                  {/* Username */}
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      {...register('username', { required: true })}
                    />
                    {errors.username && <span className="error">This field is required</span>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="submit-button">
                    Register
                  </button>
                  {registrationMessage && <p>{registrationMessage}</p>} {/* Display message */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RegistrationForm;