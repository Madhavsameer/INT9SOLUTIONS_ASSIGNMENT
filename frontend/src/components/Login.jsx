import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Import the advanced CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const DEV_URL = "http://localhost:5000"
const PROD_URL = "https://int9solutions-assignment-1.onrender.com/"
const BASE_URL = process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${PROD_URL}/api/auth/login`, { username, password });
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/home');
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <div>

     
    
    
    <div className="login-container">
    
      
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>
    </div>
  );
}

export default Login;
