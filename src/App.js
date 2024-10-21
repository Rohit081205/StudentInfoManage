import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          {/* <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul> */}
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
