import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './HomePage.css'; // Create a separate CSS file for styling

const Home = () => {

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to CoffeeHouse</h1>
          <p>Discover the finest coffee beans from around the world.</p>
          <a href="#products" className="cta-button">View Products</a>
        </div>
      </div>

      {/* Featured Products */}
      <section id="products" className="featured-products">
        <h2>Featured Products</h2>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 CoffeeHouse. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
