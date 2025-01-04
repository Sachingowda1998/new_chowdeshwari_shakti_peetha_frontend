// src/components/Register.js
import React, { useState } from 'react';
import FormInput from '../Components/FormInput';
import '../CSS/register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering with', { name, email, phone, password });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Register</h2>
        <FormInput
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Phone Number"
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">Register</button>
        <p className="switch-auth">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
