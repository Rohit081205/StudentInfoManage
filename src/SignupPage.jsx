import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Make sure to include this

const SignupPage = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const apiUrl = 'http://localhost:3001/users';
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}?email=${user.email}`);
      if (response.data.length > 0) {
        setError('User already exists with this email.');
      } else {
        await axios.post(apiUrl, user);
        navigate('/dashboard'); // Redirect to dashboard after signup
      }
    } catch (err) {
      console.error('Error during signup:', err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="signup-input"
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="signup-input"
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="signup-input"
            />
          </div>
          <button type="submit" className="signup-button">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
