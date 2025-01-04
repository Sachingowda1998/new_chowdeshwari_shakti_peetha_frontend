import React, { useState } from 'react';
import FormInput from '../Components/FormInput';
import '../CSS/Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', { email, password });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">Login</button>
        <p className="switch-auth">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;