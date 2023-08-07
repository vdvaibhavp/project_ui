import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';


const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here, you can access the form data using the 'data' object.
    console.log(data);
  };

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span className="error">This field is required</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <span className="error">This field is required</span>}
        </div>

        <div className="form-group">
          <label>Email ID</label>
          <input
            type="text"
            name="email"
            {...register('email', {
              required: true,
              pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
            })}
          />
          {errors.email && <span className="error">Please enter a valid email</span>}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            {...register('username', { required: true })}
          />
          {errors.username && <span className="error">This field is required</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span className="error">This field is required</span>}
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    

    </div>
  );
};

export default RegistrationForm;