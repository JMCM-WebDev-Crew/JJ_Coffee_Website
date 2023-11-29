import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logo} className="navbar-logo" alt="logo" />
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <Route path="/" exact component={Home} />
    </div>
    </Router>
  );
}

export default App;
