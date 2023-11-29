import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Shop from './Shop';
import Cart from './Cart';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-container">
            <img src={logo} className="navbar-logo" alt="logo" />
            <ul className="navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
