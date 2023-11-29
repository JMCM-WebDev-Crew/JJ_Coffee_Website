import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Services from './Services';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-container">
            <img src={logo} className="navbar-logo" alt="logo" />
            <ul className="navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              {/* Add more navbar links here if needed */}
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
