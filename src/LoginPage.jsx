// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const apiUrl = 'http://localhost:3001/users';
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError('Email and password are required.');
//       return;
//     }

//     try {
//       const response = await axios.get(`${apiUrl}?email=${email}&password=${password}`);
//       if (response.data.length > 0) {
//         navigate('/dashboard'); // Redirect to dashboard after login
//       } else {
//         setError('Invalid email or password.');
//       }
//     } catch (err) {
//       console.error('Error during login:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Make sure to include this

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const apiUrl = 'http://localhost:3001/users';
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        navigate('/dashboard'); // Redirect to dashboard after login
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup'); // Redirect to Signup Page if the user clicks the signup link
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account?{' '}
          <button className="signup-button" onClick={handleSignupRedirect}>
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
